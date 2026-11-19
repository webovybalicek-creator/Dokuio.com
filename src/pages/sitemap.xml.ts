import type { APIRoute } from 'astro';
import { SITE } from '../lib/config';
import { AKTIVNI_ZEME, HREFLANG_HUBY, VSECHNY_STRANKY, urlStranky } from '../obsah';
import { INFO_ODKAZY } from '../obsah/informace';
import { PORADNY, clanky, urlClanku, urlKategorie, urlPoradny, urlTematu } from '../lib/poradna';

export const GET: APIRoute = async () => {
  const huby = ['/', ...AKTIVNI_ZEME.map((z) => `/${z.kod}/`)];
  /** Datum poslední změny podle šablony */
  const aktualizace: Record<string, string> = Object.fromEntries(
    VSECHNY_STRANKY.map((s) => [urlStranky(s), s.sablona.aktualizovano]),
  );
  const dokumenty = VSECHNY_STRANKY.map(urlStranky);
  const informace = AKTIVNI_ZEME.flatMap((z) => [
    ...(z.balicky ?? []).map((b) => `/${z.kod}/balicek/${b.slug}/`),
    ...Object.values(INFO_ODKAZY[z.kod] ?? {}),
  ]);
  const vse = await clanky();
  for (const c of vse) aktualizace[urlClanku(c)] = c.data.aktualizovano ?? c.data.datum;
  const poradna = AKTIVNI_ZEME.filter((z) => PORADNY[z.kod] && vse.some((c) => c.zeme === z.kod)).flatMap((z) => {
    const P = PORADNY[z.kod];
    const zc = vse.filter((c) => c.zeme === z.kod);
    return [
      urlPoradny(z.kod),
      ...P.kategorie.filter((k) => zc.some((c) => c.data.kategorie === k.slug)).map((k) => urlKategorie(z.kod, k.slug)),
      ...P.kategorie.flatMap((k) => k.temata.filter((t) => zc.some((c) => c.data.kategorie === k.slug && c.data.tema === t.slug)).map((t) => urlTematu(z.kod, k.slug, t.slug))),
      ...zc.map(urlClanku),
    ];
  });

  const alternativy = HREFLANG_HUBY.map(
    (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${new URL(a.href, SITE.url).href}"/>`,
  ).join('\n');

  const url = (cesta: string) => {
    const lastmod = aktualizace[cesta];
    return [
      '  <url>',
      `    <loc>${new URL(cesta, SITE.url).href}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
      huby.includes(cesta) ? alternativy : '',
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...new Set([...huby, ...dokumenty, ...informace, ...poradna])].map(url).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
