/**
 * Kontrola SEO všech stránek v dist/ (spouští se po buildu, v CI i lokálně: node scripts/kontrola-seo.mjs).
 * Pravidla viz SEO.md. Chyby ukončí běh s kódem 1, varování jen vypíše.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const ZEME = { cz: 'cs-CZ', sk: 'sk-SK', pl: 'pl-PL', de: 'de-DE', at: 'de-AT', ch: 'de-CH', hu: 'hu-HU', hr: 'hr-HR', si: 'sl-SI', ro: 'ro-RO', bg: 'bg-BG', gr: 'el-GR' };
/** Jazykové verze /<zeme>/<jazyk>/… (PREKLADY.md): lang = jazyk + region země (uk-CZ), og:locale platný pro Open Graph */
const VERZE = { uk: 'uk_UA', en: 'en_GB' };
const soubory = [];
const projdi = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) projdi(p);
    else if (f === 'index.html') soubory.push(p);
  }
};
projdi(DIST);

const chyby = [];
const varovani = [];
const tituly = new Map();
/** cesta → hreflang odkazy (kontrola vzájemnosti) */
const alternativy = new Map();
const popisy = new Map();
const meta = (h, re) => (h.match(re) ?? [])[1];
const dekoduj = (s = '') => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

for (const f of soubory) {
  const h = readFileSync(f, 'utf8');
  const cesta = '/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/');
  const noindex = /<meta name="robots" content="noindex/.test(h);
  const kod = cesta.split('/')[1];
  const jazykVerze = VERZE[cesta.split('/')[2]] ? cesta.split('/')[2] : undefined;
  const ocekavanyJazyk = ZEME[kod] && jazykVerze ? `${jazykVerze}-${ZEME[kod].split('-')[1]}` : ZEME[kod];
  const ocekavanyLocale = jazykVerze ? VERZE[jazykVerze] : ocekavanyJazyk?.replace('-', '_');
  const lang = meta(h, /<html lang="([^"]+)"/);
  const title = dekoduj(meta(h, /<title>([^<]*)<\/title>/));
  const desc = dekoduj(meta(h, /<meta name="description" content="([^"]*)"/));
  const canonical = meta(h, /<link rel="canonical" href="([^"]+)"/);
  const ogLocale = meta(h, /<meta property="og:locale" content="([^"]+)"/);
  const ogImage = meta(h, /<meta property="og:image" content="([^"]+)"/);
  const h1 = (h.match(/<h1[\s>]/g) ?? []).length;
  const ch = (m) => chyby.push(`${cesta} – ${m}`);
  const va = (m) => varovani.push(`${cesta} – ${m}`);

  if (!title) ch('chybí <title>');
  if (!desc) ch('chybí meta description');
  if (!lang) ch('chybí <html lang>');
  if (!canonical) ch('chybí canonical');
  else if (!canonical.endsWith(cesta)) ch(`canonical ${canonical} neodpovídá URL`);
  if (!ogImage) ch('chybí og:image');
  if (ocekavanyJazyk) {
    if (lang !== ocekavanyJazyk) ch(`lang="${lang}", čeká se ${ocekavanyJazyk}`);
    if (ogLocale !== ocekavanyLocale) ch(`og:locale=${ogLocale}, čeká se ${ocekavanyLocale}`);
  }
  if (kod === 'ch' && /ß/.test(`${title} ${desc}`)) ch('Švýcarsko: „ß“ v titulku nebo popisu');
  if (noindex) continue;
  const alt = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="https:\/\/dokuio\.com([^"]+)"/g)].map((m) => ({ hreflang: m[1], cesta: m[2] }));
  if (alt.length) {
    alternativy.set(cesta, alt);
    if (!alt.some((a) => a.cesta === cesta)) ch('hreflang neodkazuje sám na sebe');
    const vlastni = alt.find((a) => a.cesta === cesta);
    if (vlastni && lang && vlastni.hreflang !== lang && vlastni.hreflang !== 'en' && vlastni.hreflang !== 'x-default') ch(`hreflang na sebe „${vlastni.hreflang}“ ≠ lang „${lang}“`);
  }
  if (h1 !== 1) ch(`počet <h1> = ${h1}`);
  if (title && title.length > 70) va(`titulek ${title.length} znaků (> 70): ${title}`);
  if (title && title.length < 20) va(`titulek krátký (${title.length}): ${title}`);
  if (desc && (desc.length < 70 || desc.length > 170)) va(`description ${desc.length} znaků (doporučeno 70–170)`);
  if (title) tituly.set(title, [...(tituly.get(title) ?? []), cesta]);
  if (desc) popisy.set(desc, [...(popisy.get(desc) ?? []), cesta]);
}
// hreflang musí být vzájemný: když A odkazuje na B, B odkazuje zpět na A
for (const [cesta, alt] of alternativy)
  for (const a of alt) {
    const zpet = alternativy.get(a.cesta);
    if (zpet && !zpet.some((x) => x.cesta === cesta)) chyby.push(`${cesta} – hreflang na ${a.cesta}, ale ta neodkazuje zpět`);
  }
for (const [t, c] of tituly) if (c.length > 1) chyby.push(`duplicitní titulek „${t}“: ${c.join(', ')}`);
for (const [d, c] of popisy) if (c.length > 1) varovani.push(`duplicitní description: ${c.join(', ')}`);

console.log(`SEO: ${soubory.length} stránek, ${chyby.length} chyb, ${varovani.length} varování`);
for (const v of varovani) console.log('  ⚠', v);
for (const e of chyby) console.log('  ✗', e);
if (chyby.length) process.exit(1);
