// Builds src/data/novels/*.json from content/novels/*.json: adds the pinyin of every word.
// Source paragraphs are written with a space between words; "^" marks a proper name.
// Run: npx tsx scripts/build-novels.ts
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { pinyin } from 'pinyin-pro';

const SRC = 'content/novels';
const OUT = 'src/data/novels';
const PUNCT: Record<string, string> = { '，': ',', '。': '.', '！': '!', '？': '?', '：': ':', '；': ';', '“': '“', '”': '”', '、': ',', '…': '…', '（': '(', '）': ')', '—': '—', '《': '«', '》': '»' };
const isZh = (c: string) => /[㐀-鿿]/.test(c);

/** Fixes where the dictionary picks the wrong reading in our stories. */
const FIX: Record<string, string> = JSON.parse(readFileSync(`${SRC}/_fixes.json`, 'utf8'));

export type Tok = { h: string; p: string; name?: 1 };

const ZI_FULL = new Set(['孔子', '君子', '男子', '女子', '天子', '弟子', '太子', '王子', '公子', '孟子', '老子', '庄子', '原子', '电子', '分子', '才子', '游子', '赤子']);
const ER_FULL = new Set(['女儿', '儿女', '孤儿', '婴儿', '幼儿', '健儿', '男儿']);
const DE_FULL = new Set(['觉得', '记得', '获得', '取得', '值得', '懂得', '舍得', '显得', '难得', '免得', '晓得', '使得', '得到', '得意']);
/** Neutral tone of the suffixes 子 (桌子 zhuōzi) and of the complement 得 (玩得 wán de). */
function neutral(word: string, py: string[]): string[] {
  const out = [...py];
  const last = word.slice(-1);
  if (word.length > 1 && last === '子' && !ZI_FULL.has(word)) out[out.length - 1] = 'zi';
  if (word.length > 1 && last === '得' && !DE_FULL.has(word)) out[out.length - 1] = ' de';
  // aspect particle 着: 看着 kànzhe (but 睡着 shuìzháo)
  if (word.length > 1 && last === '着' && !['睡着', '找着', '着着'].includes(word)) out[out.length - 1] = 'zhe';
  // potential complements: 搬不动 bān bu dòng, 找得到 zhǎo de dào
  if (word.length === 3 && (word[1] === '不' || word[1] === '得')) return [out[0], word[1] === '不' ? ' bu ' : ' de ', out[2]];
  // erhua: 有点儿 yǒudiǎnr, 哪儿 nǎr
  if (word.length > 1 && last === '儿' && !ER_FULL.has(word)) return [...out.slice(0, -2), out[out.length - 2] + 'r'];
  return out;
}

/** Adds the apostrophe before a, o, e inside a word (xī'ān, hēi'àn). */
function apostrophe(p: string[]): string {
  return p.map((x, i) => (i > 0 && /^[aoeāáǎàōóǒòēéěè]/i.test(x) ? `'${x}` : x)).join('');
}

function tokens(text: string): Tok[] {
  // pinyin of the whole paragraph (context helps 一/不 and polyphones); {..} overrides are removed first
  const plain = text.replace(/\{[^}]*\}/g, '').replace(/[ ^]/g, '');
  const all = pinyin(plain, { type: 'all', toneSandhi: true }) as Array<{ origin: string; pinyin: string; isZh: boolean }>;
  let i = 0;
  const out: Tok[] = [];
  let sentenceStart = true;
  for (const raw of text.split(' ').filter(Boolean)) {
    let buf = '';
    let py: string[] = [];
    let name = false;
    let override: string | null = null;
    const flush = () => {
      if (!buf) return;
      let p = override ?? FIX[buf] ?? apostrophe(neutral(buf, py));
      if (name) p = p.split(/(?=[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü])/).length && p.charAt(0).toUpperCase() + p.slice(1);
      if (sentenceStart) p = p.charAt(0).toUpperCase() + p.slice(1);
      out.push(name ? { h: buf, p, name: 1 } : { h: buf, p });
      sentenceStart = false;
      buf = '';
      py = [];
      name = false;
      override = null;
    };
    const chars = [...raw];
    for (let k = 0; k < chars.length; k++) {
      const ch = chars[k];
      if (ch === '^') {
        flush();
        name = true;
        continue;
      }
      if (ch === '{') {
        const close = raw.indexOf('}', raw.indexOf('{'));
        override = chars.slice(k + 1).join('').split('}')[0];
        k += override.length + 1;
        continue;
      }
      const a = all[i++];
      if (!a || a.origin !== ch) throw new Error(`mismatch at "${ch}" in: ${text}`);
      if (isZh(ch)) {
        buf += ch;
        py.push(a.pinyin);
      } else if (/[0-9]/.test(ch)) {
        flush();
        // a number: one token with all its digits
        const last = out[out.length - 1];
        if (last && /^[0-9]+$/.test(last.h)) {
          last.h += ch;
          last.p += ch;
        } else out.push({ h: ch, p: ch });
        sentenceStart = false;
      } else {
        flush();
        out.push({ h: ch, p: PUNCT[ch] ?? ch });
        if ('。！？“'.includes(ch)) sentenceStart = true;
      }
    }
    flush();
  }
  if (i !== all.length) throw new Error('length mismatch: ' + text);
  return out;
}


/** Story written in the light text format (content/novels/*.txt). */
function parseTxt(src: string): any {
  const s: any = { chapters: [], glossary: [], questions: [] };
  let mode: 'text' | 'gloss' | 'q' = 'text';
  let q: any = null;
  const pair = (v: string) => {
    const [fr, en] = v.split(' | ');
    return { fr: fr.trim(), en: (en ?? fr).trim() };
  };
  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line === '@glossary') { mode = 'gloss'; continue; }
    if (line === '@questions') { mode = 'q'; continue; }
    const meta = /^([a-z_]+):\s*(.*)$/.exec(line);
    if (meta && mode === 'text' && !s.chapters.length) {
      const [, k, v] = meta;
      if (k === 'order') s.order = Number(v);
      else if (k === 'title' || k === 'summary' || k === 'era') s[k] = pair(v);
      else if (k === 'pinyin') s.titlePinyin = v;
      else s[k] = v;
      continue;
    }
    if (mode === 'text') {
      if (line.startsWith('# ')) s.chapters.push({ title: line.slice(2), paragraphs: [] });
      else s.chapters[s.chapters.length - 1].paragraphs.push(line);
    } else if (mode === 'gloss') {
      const [w, fr, en] = line.split('|').map((x) => x.trim());
      s.glossary.push({ w, fr, en });
    } else {
      if (line.startsWith('Q ')) { q = { q: pair(line.slice(2)), options: [], answer: 0, why: { fr: '', en: '' } }; s.questions.push(q); }
      else if (line.startsWith('+ ')) { q.answer = q.options.length; q.options.push(pair(line.slice(2))); }
      else if (line.startsWith('- ')) q.options.push(pair(line.slice(2)));
      else if (line.startsWith('= ')) q.why = pair(line.slice(2));
    }
  }
  return s;
}

mkdirSync(OUT, { recursive: true });
const index: unknown[] = [];
const EXTRA: Record<string, unknown[]> = JSON.parse(readFileSync(`${SRC}/_extra.json`, 'utf8'));
for (const f of readdirSync(SRC).filter((f) => (f.endsWith('.json') || f.endsWith('.txt')) && !f.startsWith('_')).sort()) {
  const s = f.endsWith('.txt') ? parseTxt(readFileSync(`${SRC}/${f}`, 'utf8')) : JSON.parse(readFileSync(`${SRC}/${f}`, 'utf8'));
  s.questions = [...s.questions, ...(EXTRA[s.id] || [])];
  const chapters = s.chapters.map((c: { title: string; paragraphs: string[] }) => ({
    title: tokens(c.title),
    paragraphs: c.paragraphs.map((p) => tokens(p)),
  }));
  // translations (content/novels/tr/<id>.txt): "# fr | en" per chapter title, "fr | en" per paragraph
  const trFile = `${SRC}/tr/${s.id}.txt`;
  if (existsSync(trFile)) {
    const lines = readFileSync(trFile, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
    const split = (l: string) => {
      const i = l.lastIndexOf(' | ');
      if (i < 0) throw new Error(`${s.id}: missing " | " in ${l.slice(0, 60)}`);
      return { fr: l.slice(0, i).trim(), en: l.slice(i + 3).trim() };
    };
    let k = 0;
    chapters.forEach((c: any, ci: number) => {
      const t = lines[k++];
      if (!t || !t.startsWith('# ')) throw new Error(`${s.id}: chapter ${ci + 1} title expected, got ${t?.slice(0, 40)}`);
      c.titleTr = split(t.slice(2));
      c.tr = c.paragraphs.map((_: unknown, pi: number) => {
        const l = lines[k++];
        if (!l || l.startsWith('# ')) throw new Error(`${s.id}: chapter ${ci + 1} paragraph ${pi + 1} missing`);
        return split(l);
      });
    });
    if (k !== lines.length) throw new Error(`${s.id}: ${lines.length - k} extra translation lines`);
  }
  const chars = s.chapters.reduce((n: number, c: { paragraphs: string[] }) => n + c.paragraphs.join('').replace(/[^㐀-鿿]/g, '').length, 0);
  const glossary = s.glossary.map((g: { w: string }) => ({ ...g, p: g.w.split(' / ').map((w) => FIX[w] ?? apostrophe(neutral(w, pinyin(w, { type: 'array', toneSandhi: true }) as string[]))).join(' / ') }));
  const titlePy = s.titlePinyin ?? pinyin(s.hanzi);
  const story = { ...s, titlePinyin: titlePy, chars, chapters, glossary };
  writeFileSync(`${OUT}/${s.id}.json`, JSON.stringify(story));
  index.push({ translated: chapters.every((c: any) => c.tr), id: s.id, order: s.order, category: s.category ?? 'legend', era: s.era, hanzi: s.hanzi, titlePinyin: titlePy, title: s.title, level: s.level, summary: s.summary, chars, chapters: chapters.length, questions: s.questions.length });
  console.log(s.id, chars, 'chars');
}
(index as Array<{ order: number }>).sort((a, b) => a.order - b.order);
writeFileSync(`${OUT}/index.json`, JSON.stringify(index, null, 1));
