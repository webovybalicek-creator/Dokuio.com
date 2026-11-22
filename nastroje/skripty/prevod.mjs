import fs from 'node:fs';
const root = '/home/claude/dokuio.com/';
const { DOKUMENTY } = await import(root + 'src/lib/dokumenty.ts');

function props(src, tag) {
  const i = src.indexOf('<' + tag);
  let p = i + tag.length + 1;
  const out = {};
  for (;;) {
    while (/\s/.test(src[p])) p++;
    if (src.startsWith('/>', p)) break;
    const m = /^(\w+)=/.exec(src.slice(p));
    const name = m[1]; p += m[0].length;
    if (src[p] === '"') { const e = src.indexOf('"', p + 1); out[name] = JSON.stringify(src.slice(p + 1, e)); p = e + 1; continue; }
    // balanced braces
    let d = 0, s = p, q = null;
    for (; p < src.length; p++) {
      const c = src[p];
      if (q) { if (c === '\\') { p++; continue; } if (c === q) q = null; continue; }
      if (c === "'" || c === '"' || c === '`') { q = c; continue; }
      if (c === '{') d++;
      if (c === '}') { d--; if (d === 0) { p++; break; } }
    }
    out[name] = src.slice(s + 1, p - 1).trim();
  }
  return out;
}

const dirs = fs.readdirSync(root + 'src/pages/cz').filter((d) => fs.existsSync(root + `src/pages/cz/${d}/vytvorit`));
for (const slug of dirs) {
  const l = fs.readFileSync(root + `src/pages/cz/${slug}/index.astro`, 'utf8');
  const v = fs.readFileSync(root + `src/pages/cz/${slug}/vytvorit/index.astro`, 'utf8');
  const imp = /import \{ (\w+) as s \} from '[./]+sablony\/cz\/([\w-]+)'/.exec(l);
  const lp = props(l, 'DokumentLanding');
  const vp = props(v, 'VytvoritStranka');
  const skup = /(\w+)Krome/.exec(lp.souvisejici)[1];
  const kat = DOKUMENTY.cz.find((d) => d.url === `/cz/${slug}/`);
  const title = lp.title.replace(/\$\{s\.aktualizovano\.slice\(0, 4\)\}/, '{rok}').replace(/^`|`$/g, '');
  const ind = (t) => t.split('\n').map((r, i) => (i ? '  ' + r : r)).join('\n');
  const pole = (k, val) => `    ${k}: ${ind(val)},`;
  const lKeys = ['description', 'perex', 'obsahPopis', 'obsah', 'kroky', 'online', 'hodiSe', 'nehodiSe', 'poNadpis', 'po', 'faq', 'zakony', 'souvisejiciPopis'];
  const out = `import type { StrankaDokumentu } from '../typy';
import { ${imp[1]} as sablona } from '../../sablony/cz/${imp[2]}';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: ${lp.nazev},
  nazevA: ${lp.nazevA},
  katalog: {
    popis: ${JSON.stringify(kat.popis)},
    kategorie: ${JSON.stringify(kat.kategorie)},
    ilustrace: ${JSON.stringify(kat.ilustrace)},
    slova: ${JSON.stringify(kat.slova)},
  },
  souvisejici: '${skup}',
  landing: {
    title: ${JSON.stringify(title)},
${lKeys.filter((k) => lp[k]).map((k) => pole(k, lp[k])).join('\n')}
  },
  vytvorit: {
    title: ${vp.title},
    description: ${vp.description},
${vp.podnadpis ? `    podnadpis: ${vp.podnadpis},\n` : ''}  },
};

export default stranka;
`;
  fs.mkdirSync(root + 'src/obsah/cz', { recursive: true });
  fs.writeFileSync(root + `src/obsah/cz/${slug}.ts`, out);
  console.log(slug, skup, kat.kategorie);
}
