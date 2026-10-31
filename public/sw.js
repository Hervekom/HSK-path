/*
 * HSK Path service worker (installable app / PWA).
 * - Pages: network first (4 s at most on a weak connection), cached copy when offline.
 *   When a new version of the site is seen, all its files are stored in the background,
 *   so every page keeps opening offline after an update.
 * - Built files (/assets/*, hashed names), icons, photos: cache first.
 * - Short recordings (exercise clips, per-question exam audio): cached once played, then work offline.
 *   Long full-exam recordings stay on the network (too big to keep on every phone).
 * - /api/* (Laoshi), Supabase and every other site: never touched.
 * Bump VERSION to drop old caches.
 */
const VERSION = 'v4';
const SHELL = `hsk-shell-${VERSION}`;
const STATIC = `hsk-static-${VERSION}`;
const MEDIA = `hsk-media-${VERSION}`;
const KEEP = [SHELL, STATIC, MEDIA];

const PRECACHE = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((c) => c.addAll(PRECACHE).then(() => c.match('/')))
      .then((page) => page && page.text())
      .then((html) => storeBuild(html || ''))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('hsk-') && !KEEP.includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isShortAudio = (path) =>
  path.startsWith('/audio/') || /^\/hsk3\/hp3-\d+\/\d+\.mp3$/.test(path);

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const path = url.pathname;
  if (path.startsWith('/api/')) return;

  if (req.mode === 'navigate') {
    event.respondWith(networkFirstPage(req, event));
    return;
  }
  if (path.endsWith('.mp3')) {
    if (isShortAudio(path)) event.respondWith(cachedAudio(req, path));
    return;
  }
  if (path.startsWith('/assets/') || path.startsWith('/icons/') || /\.(png|jpe?g|webp|svg|woff2?)$/.test(path)) {
    event.respondWith(cacheFirst(req, STATIC));
  }
});

/**
 * Stores every script and style of the build that this page uses: those named in the page,
 * plus the pages loaded on demand listed in /asset-list.json (written at build time).
 * Files of older builds are removed.
 */
async function storeBuild(html) {
  const fromPage = html.match(/\/assets\/[^"' )]+/g) || [];
  const list = await fetch('/asset-list.json', { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => []);
  const wanted = [...new Set([...fromPage, ...list])];
  const cache = await caches.open(STATIC);
  const have = new Set((await cache.keys()).map((r) => new URL(r.url).pathname));
  // One by one: a single failure must not drop the rest.
  await Promise.all(wanted.filter((f) => !have.has(f)).map((f) => cache.add(f).catch(() => {})));
  if (list.length) {
    const keep = new Set(wanted);
    await Promise.all(
      [...have].filter((f) => f.startsWith('/assets/') && !keep.has(f)).map((f) => cache.delete(f)),
    );
  }
}

const withTimeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms))]);

async function networkFirstPage(req, event) {
  const cache = await caches.open(SHELL);
  const network = fetch(req);
  try {
    const res = await withTimeout(network, 4000);
    if (res.ok) {
      const copy = res.clone();
      event.waitUntil(
        copy.text().then(async (html) => {
          const old = await cache.match('/');
          const oldHtml = old ? await old.text() : '';
          await cache.put('/', new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
          if (html !== oldHtml) await storeBuild(html);
        }),
      );
    }
    return res;
  } catch {
    const hit = await cache.match('/');
    if (hit) return hit;
    return network; // nothing stored yet: wait for the network after all
  }
}

async function cacheFirst(req, name) {
  const cache = await caches.open(name);
  const hit = await cache.match(req, { ignoreVary: true, ignoreSearch: false });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok && res.status === 200) cache.put(req, res.clone());
  return res;
}

/* <audio> asks for byte ranges, so the full file is stored once and ranges are cut from it. */
async function cachedAudio(req, path) {
  const cache = await caches.open(MEDIA);
  const hit = await cache.match(path, { ignoreVary: true });
  if (hit) return rangeFrom(hit, req.headers.get('range'));
  const res = await fetch(req);
  if (res.status === 200) {
    cache.put(path, res.clone());
  } else if (res.status === 206) {
    fetch(path).then((full) => { if (full.status === 200) cache.put(path, full); }).catch(() => {});
  }
  return res;
}

async function rangeFrom(response, range) {
  if (!range) return response;
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  if (!m) return response;
  const buf = await response.arrayBuffer();
  const size = buf.byteLength;
  let start = m[1] === '' ? size - Number(m[2]) : Number(m[1]);
  let end = m[1] !== '' && m[2] !== '' ? Number(m[2]) : size - 1;
  start = Math.max(0, start);
  end = Math.min(end, size - 1);
  if (start > end) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}
