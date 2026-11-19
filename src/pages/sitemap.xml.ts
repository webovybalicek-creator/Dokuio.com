import type { APIRoute } from 'astro';
import { SITE } from '../lib/config';
import { AKTIVNI_ZEME, HREFLANG_HUBY, VSECHNY_STRANKY, urlStranky } from '../obsah';

export const GET: APIRoute = () => {
  const huby = ['/', ...AKTIVNI_ZEME.map((z) => `/${z.kod}/`)];
  /** Datum poslední změny podle šablony */
  const aktualizace: Record<string, string> = Object.fromEntries(
    VSECHNY_STRANKY.map((s) => [urlStranky(s), s.sablona.aktualizovano]),
  );
  const dokumenty = VSECHNY_STRANKY.map(urlStranky);
  const informace = AKTIVNI_ZEME.flatMap((z) => z.informace ?? []);

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
${[...huby, ...dokumenty, ...informace].map(url).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
