#!/usr/bin/env node
/**
 * Kontrola podobnosti indexovaných stránek (proti „thin / duplicate content“).
 * Projde dist/, vezme text hlavního obsahu (<main>, bez skriptů), rozdělí ho na pětice slov (shingles)
 * a v rámci stejného jazyka (<html lang>) hledá dvojice stránek s vysokou shodou (Jaccard, MinHash + LSH).
 * Vypíše i podíl „šablonového“ textu – pětic, které se opakují na většině stránek stejného jazyka.
 *
 *   node scripts/kontrola-podobnosti.mjs            → souhrn + nejpodobnější dvojice
 *   node scripts/kontrola-podobnosti.mjs --prah 0.7 → jiný práh shody (výchozí 0,8)
 *   node scripts/kontrola-podobnosti.mjs --prisne   → při dvojicích nad prahem skončí chybou
 *
 * Nezastavuje nasazení (bez --prisne); výsledek je podklad, kde stránky zindividualizovat (viz SEO pravidla).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const args = process.argv.slice(2);
const PRAH = Number(args[args.indexOf('--prah') + 1]) || 0.8;
const PRISNE = args.includes('--prisne');
const K = 5; // délka pětice slov
const H = 96; // počet MinHash funkcí
const PASMA = 24; // LSH pásma (4 hodnoty v pásmu)

function* html(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) yield* html(p);
    else if (f === 'index.html') yield p;
  }
}

const text = (s) =>
  (s.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? s)
    .replace(/<(script|style|svg|noscript|template)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean);

/** FNV-1a 32 bit */
const hash = (s, seed = 2166136261) => {
  let h = seed >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
};
const SEEDY = Array.from({ length: H }, (_, i) => [(Math.imul(i + 1, 2654435761) >>> 0) | 1, (Math.imul(i + 7, 40503) >>> 0)]);

const stranky = [];
for (const p of html(DIST)) {
  const s = readFileSync(p, 'utf8');
  if (/<meta name="robots" content="noindex/i.test(s)) continue;
  // skupina = jazyk bez regionu (en-LV i en-HR jsou „en“) + typ stránky (vzor / ostatní)
  const lang = (s.match(/<html[^>]*lang="([^"]+)"/i)?.[1] ?? '?').slice(0, 2) + (s.includes('hero--dokument') ? ' vzor' : ' ostatní');
  const slova = text(s);
  const sh = new Set();
  for (let i = 0; i + K <= slova.length; i++) sh.add(hash(slova.slice(i, i + K).join(' ')));
  if (sh.size < 20) continue;
  const mh = new Uint32Array(H).fill(0xffffffff);
  for (const x of sh)
    for (let i = 0; i < H; i++) {
      const v = (Math.imul(x, SEEDY[i][0]) + SEEDY[i][1]) >>> 0;
      if (v < mh[i]) mh[i] = v;
    }
  stranky.push({ url: '/' + p.slice(DIST.length).replace(/index\.html$/, ''), lang, sh, mh, slov: slova.length });
}

// šablonový text: pětice přítomné na ≥ 50 % stránek stejného jazyka
const podleJazyka = new Map();
for (const s of stranky) (podleJazyka.get(s.lang) ?? podleJazyka.set(s.lang, []).get(s.lang)).push(s);
const souhrn = [];
for (const [lang, sk] of podleJazyka) {
  const cetnost = new Map();
  for (const s of sk) for (const x of s.sh) cetnost.set(x, (cetnost.get(x) ?? 0) + 1);
  const mez = Math.max(5, Math.min(sk.length * 0.5, 20));
  let podil = 0;
  for (const s of sk) {
    let n = 0;
    for (const x of s.sh) if (cetnost.get(x) >= mez) n++;
    s.sablona = n / s.sh.size;
    podil += s.sablona;
  }
  souhrn.push({ lang, stranek: sk.length, sablona: podil / sk.length });
}

// LSH kandidáti + přesný Jaccard
const dvojice = [];
for (const [, sk] of podleJazyka) {
  const r = H / PASMA;
  const kandidati = new Set();
  for (let b = 0; b < PASMA; b++) {
    const kose = new Map();
    sk.forEach((s, i) => {
      const k = Array.from(s.mh.subarray(b * r, b * r + r)).join(',');
      (kose.get(k) ?? kose.set(k, []).get(k)).push(i);
    });
    for (const v of kose.values()) if (v.length > 1 && v.length < 2000) for (let i = 0; i < v.length; i++) for (let j = i + 1; j < v.length; j++) kandidati.add(v[i] * 100000 + v[j]);
  }
  for (const k of kandidati) {
    const a = sk[Math.floor(k / 100000)];
    const b = sk[k % 100000];
    let spol = 0;
    const [m, v] = a.sh.size < b.sh.size ? [a.sh, b.sh] : [b.sh, a.sh];
    for (const x of m) if (v.has(x)) spol++;
    const j = spol / (a.sh.size + b.sh.size - spol);
    if (j >= PRAH * 0.75) dvojice.push({ a: a.url, b: b.url, j });
  }
}
dvojice.sort((x, y) => y.j - x.j);

const pct = (x) => `${Math.round(x * 100)} %`;
console.log(`Podobnost: ${stranky.length} indexovaných stránek, práh ${pct(PRAH)}`);
console.log('Šablonový text (pětice slov opakované na ≥ 20 stránkách skupiny, u menších na polovině), průměr na stránku:');
for (const s of souhrn.sort((a, b) => b.sablona - a.sablona)) console.log(`  ${s.lang.padEnd(11)} ${String(s.stranek).padStart(4)} stránek · ${pct(s.sablona)}`);
const nad = dvojice.filter((d) => d.j >= PRAH);
console.log(`Dvojice nad prahem: ${nad.length}`);
for (const d of args.includes('--vse') ? nad : nad.slice(0, 30)) console.log(`  ⚠ ${pct(d.j)}  ${d.a}  ↔  ${d.b}`);
const blizko = dvojice.filter((d) => d.j < PRAH).slice(0, 10);
if (blizko.length) {
  console.log('Nejbližší pod prahem:');
  for (const d of blizko) console.log(`    ${pct(d.j)}  ${d.a}  ↔  ${d.b}`);
}
const nejvic = [...stranky].sort((a, b) => b.sablona - a.sablona).slice(0, 10);
console.log('Stránky s nejvyšším podílem šablonového textu:');
for (const s of nejvic) console.log(`    ${pct(s.sablona)}  ${s.url}  (${s.slov} slov)`);
if (PRISNE && nad.length) process.exit(1);
