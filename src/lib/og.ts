/**
 * Náhledové obrázky pro sdílení (Open Graph, 1200×630). Generují se při buildu do /og/<slug>.png.
 * Slug = cesta stránky bez lomítek („/cz/kupni-smlouva-auto/“ → „cz-kupni-smlouva-auto“); stránka
 * „vytvorit“ používá obrázek svého dokumentu. Neznámá stránka dostane „default“.
 */
import { AKTIVNI_ZEME, VSECHNY_STRANKY, urlStranky } from '../obsah';
import { JAZYKY_VERZI, TEXTY, type Jazyk } from '../i18n';
import { ROZCESTNIKY_VERZI, VERZE } from '../preklady';

export interface OgStranka {
  slug: string;
  stitek: string;
  nadpis: string;
  popis: string;
  /** Řádky „papíru“ vpravo – nadpis dokumentu na náhledu */
  papir?: string;
}

const ZDARMA_EN = 'Free · PDF & Word · no sign-up';
const zdarma = (j: string) => TEXTY[j as Jazyk]?.duvera.slice(0, 3).join(' · ') ?? ZDARMA_EN;

export const OG_STRANKY: OgStranka[] = [
  { slug: 'default', stitek: zdarma('cs'), nadpis: 'Vzory smluv zdarma', popis: 'Vyplňte online, stáhněte PDF nebo Word.' },
  { slug: 'home', stitek: ZDARMA_EN, nadpis: 'Contract templates, free', popis: 'Answer a few questions, download a ready-to-sign PDF.', papir: 'Contract' },
  ...AKTIVNI_ZEME.map((z) => ({
    slug: z.kod,
    stitek: zdarma(z.jazyk),
    nadpis: `${z.hub.h1} ${TEXTY[z.jazyk].hub.h1Em.replace(/\.$/, '')}`,
    popis: z.hub.ogPopis,
    papir: TEXTY[z.jazyk].slovo.n.replace(/^./, (c) => c.toUpperCase()),
  })),
  ...VSECHNY_STRANKY.map((st) => ({
    slug: urlStranky(st).replace(/^\/|\/$/g, '').replace(/\//g, '-'),
    stitek: zdarma(st.sablona.jazyk),
    nadpis: st.nazev,
    popis: st.katalog.popis,
    papir: st.nazev,
  })),
  // jazykové verze (src/preklady): obrázky v jazyce verze
  ...ROZCESTNIKY_VERZI.map((r) => ({
    slug: `${r.zeme.kod}-${r.jazyk}`,
    stitek: zdarma(r.jazyk),
    nadpis: `${JAZYKY_VERZI[r.jazyk].hub.h1(r.zeme.kod)} ${TEXTY[r.jazyk as Jazyk].hub.h1Em.replace(/\.$/, '')}`,
    popis: JAZYKY_VERZI[r.jazyk].hub.ogPopis(r.zeme.jazyk),
    papir: TEXTY[r.jazyk as Jazyk].slovo.n.replace(/^./, (c) => c.toUpperCase()),
  })),
  ...VERZE.map((v) => ({
    slug: urlStranky(v.stranka).replace(/^\/|\/$/g, '').replace(/\//g, '-'),
    stitek: zdarma(v.jazyk),
    nadpis: v.stranka.nazev,
    popis: v.stranka.katalog.popis,
    papir: v.stranka.nazev,
  })),
  ...AKTIVNI_ZEME.flatMap((z) =>
    (z.balicky ?? []).map((b) => ({
      slug: `${z.kod}-balicek-${b.slug}`,
      stitek: zdarma(z.jazyk),
      nadpis: b.nazev,
      popis: b.popis,
      papir: b.nazev,
    })),
  ),
  { slug: 'cz-o-nas', stitek: 'Dokuio', nadpis: 'O Dokuio', popis: 'Vzory smluv zdarma pro každého.' },
  { slug: 'cz-podminky-uziti', stitek: 'Dokuio', nadpis: 'Podmínky užití', popis: 'Vzory zdarma, nejde o právní poradenství.' },
  { slug: 'cz-ochrana-osobnich-udaju', stitek: 'Dokuio', nadpis: 'Ochrana osobních údajů', popis: 'Údaje ze smluv zůstávají ve vašem prohlížeči.' },
];

export function ogSlug(pathname: string): string {
  const s = pathname.replace(/\/vytvorit\/?$/, '/').replace(/^\/|\/$/g, '').replace(/\//g, '-');
  const slug = s || 'home';
  return OG_STRANKY.some((p) => p.slug === slug) ? slug : 'default';
}

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Hrubé zalomení podle průměrné šířky znaku */
function zalom(text: string, maxZnaku: number): string[] {
  const radky: string[] = [];
  let r = '';
  // jednopísmenné předložky a spojky nenechat na konci řádku
  for (const slovo of text.replace(/(^|\s)([kvszouaiKVSZOUAI]) /g, '$1$2\u00a0').split(' ')) {
    if ((r + ' ' + slovo).trim().length > maxZnaku && r) {
      radky.push(r);
      r = slovo;
    } else r = (r + ' ' + slovo).trim();
  }
  if (r) radky.push(r);
  return radky.map((x) => x.replace(/\u00a0/g, ' '));
}

export function ogSvg(p: OgStranka): string {
  const nadpis = zalom(p.nadpis, 16).slice(0, 3);
  const vel = nadpis.length > 2 ? 62 : 74;
  const yNadpis = 214 + vel;
  const popis = zalom(p.popis, 36).slice(0, 2);
  const yPopis = yNadpis + (nadpis.length - 1) * vel * 1.08 + 62;
  const papir = zalom(p.papir ?? 'Smlouva', 16).slice(0, 2);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#533afd"/><stop offset=".55" stop-color="#9b5cff"/><stop offset="1" stop-color="#ff5fa2"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#fff"/>
  <circle cx="1130" cy="330" r="420" fill="url(#g)" opacity=".9"/>
  <rect x="560" y="0" width="260" height="630" fill="url(#fade)"/>
  <g transform="translate(828 120) rotate(4)">
    <rect width="300" height="400" rx="10" fill="#fff"/>
    <rect width="300" height="400" rx="10" fill="none" stroke="#0a2540" stroke-opacity=".08"/>
    ${papir.map((t, i) => `<text x="150" y="${58 + i * 24}" text-anchor="middle" font-family="Inter Tight" font-weight="600" font-size="19" fill="#0a2540">${esc(t.toUpperCase())}</text>`).join('')}
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="34" y="${120 + i * 30}" width="${i % 3 === 2 ? 150 : 232}" height="7" rx="3.5" fill="#e3e8ee"/>`).join('')}
    <rect x="34" y="340" width="100" height="1.5" fill="#0a2540" opacity=".4"/>
    <rect x="166" y="340" width="100" height="1.5" fill="#0a2540" opacity=".4"/>
    <path d="M44 330c10-18 18-18 22-4s12 10 20-6 16-6 22 4" fill="none" stroke="#533afd" stroke-width="2.5" stroke-linecap="round"/>
  </g>
  <g transform="translate(80 72)">
    <g transform="scale(1)">
      <path d="M14 6h16l-6 36H8z" fill="#533afd" fill-opacity=".9"/>
      <path d="M24 6h12l-6 36H18z" fill="#9b5cff" fill-opacity=".9"/>
      <path d="M34 6h8l-6 36h-8z" fill="#ff5fa2" fill-opacity=".95"/>
    </g>
    <text x="58" y="36" font-family="Inter Tight" font-weight="600" font-size="34" fill="#0a2540" letter-spacing="-.5">dokuio</text>
  </g>
  <text x="80" y="196" font-family="Inter Tight" font-weight="600" font-size="24" fill="#533afd">${esc(p.stitek)}</text>
  ${nadpis.map((t, i) => `<text x="76" y="${yNadpis + i * vel * 1.08}" font-family="Inter Tight" font-weight="600" font-size="${vel}" fill="#0a2540" letter-spacing="-2">${esc(t)}</text>`).join('')}
  ${popis.map((t, i) => `<text x="80" y="${yPopis + i * 38}" font-family="Inter Tight" font-size="29" fill="#425466">${esc(t)}</text>`).join('')}
  <text x="80" y="570" font-family="Inter Tight" font-weight="600" font-size="24" fill="#0a2540">dokuio.com</text>
</svg>`;
}
