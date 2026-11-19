import type { APIRoute } from 'astro';
import { SITE, HREFLANG_HUBY } from '../lib/config';
import { DOKUMENTY } from '../lib/dokumenty';
import { kupniSmlouvaAuto } from '../sablony/cz/kupni-smlouva-auto';

/** Datum poslední změny podle šablony (kde ji známe) */
const AKTUALIZACE: Record<string, string> = {
  '/cz/kupni-smlouva-auto/': kupniSmlouvaAuto.aktualizovano,
};

export const GET: APIRoute = () => {
  const huby = ['/', '/cz/', '/sk/'];
  const dokumenty = Object.values(DOKUMENTY)
    .flat()
    .flatMap((d) => (d.url ? [d.url] : []));
  const informace = ['/cz/o-nas/', '/cz/podminky-uziti/', '/cz/ochrana-osobnich-udaju/'];

  const alternativy = HREFLANG_HUBY.map(
    (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${new URL(a.href, SITE.url).href}"/>`,
  ).join('\n');

  const url = (cesta: string) => {
    const lastmod = AKTUALIZACE[cesta];
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
