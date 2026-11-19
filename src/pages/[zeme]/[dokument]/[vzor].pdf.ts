/** Prázdný vzor PDF: /<zeme>/<slug>/<slug>-vzor.pdf */
import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { VSECHNY_STRANKY, slugStranky } from '../../../obsah';
import type { Sablona } from '../../../sablony/typy';

export function getStaticPaths() {
  return VSECHNY_STRANKY.map((st) => ({
    params: { zeme: st.sablona.zeme, dokument: slugStranky(st), vzor: `${st.sablona.souborPdf}-vzor` },
    props: { sablona: st.sablona },
  }));
}

export const GET: APIRoute = ({ props }) => vzorPdf((props as { sablona: Sablona }).sablona);
