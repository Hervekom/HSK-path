/*
 * HSK Path service worker (installable app / PWA).
 * - Pages: network first, cached copy when offline (updates arrive on the next launch).
 * - Built files (/assets/*, hashed names), icons, photos: cache first.
 * - Short recordings (exercise clips, per-question exam audio): cached once played, then work offline.
 *   Long full-exam recordings stay on the network (too big to keep on every phone).
 * - /api/* (Laoshi), Supabase and every other site: never touched.
 * Bump VERSION to drop old caches.
 */
const VERSION = 'v2';
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
      .then((html) => {
        // Keep the current build's scripts and styles so the app opens offline from the first visit.
        const assets = [...new Set((html || '').match(/\/assets\/[^"' )]+/g) || [])];
        return caches.open(STATIC).then((c) => c.addAll(assets));
      })
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
    event.respondWith(networkFirstPage(req));
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

async function networkFirstPage(req) {
  const cache = await caches.open(SHELL);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put('/', res.clone());
    return res;
  } catch {
    return (await cache.match('/')) || Response.error();
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
