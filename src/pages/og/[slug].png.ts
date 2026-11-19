import type { APIRoute } from 'astro';
import { Resvg } from '@resvg/resvg-js';
import { OG_STRANKY, ogSvg } from '../../lib/og';

export function getStaticPaths() {
  return OG_STRANKY.map((p) => ({ params: { slug: p.slug }, props: { p } }));
}

const fonty = ['public/fonts/InterTight-Regular.ttf', 'public/fonts/InterTight-SemiBold.ttf'];

export const GET: APIRoute = ({ props }) => {
  const svg = ogSvg((props as { p: (typeof OG_STRANKY)[number] }).p);
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
    font: { fontFiles: fonty, loadSystemFonts: false, defaultFontFamily: 'Inter Tight' },
  })
    .render()
    .asPng();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
