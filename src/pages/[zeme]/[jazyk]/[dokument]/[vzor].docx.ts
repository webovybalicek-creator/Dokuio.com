/** Prázdný dvojjazyčný vzor Word jazykové verze: /<zeme>/<jazyk>/<slug>/<slug>-<jazyk>-vzor.docx */
import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../../lib/vzory';
import { VERZE } from '../../../../preklady';
import { nazevSouboru } from '../../../../sablony/dokument';
import type { Sablona } from '../../../../sablony/typy';

export function getStaticPaths() {
  return VERZE.map((v) => ({
    params: { zeme: v.zeme, jazyk: v.jazyk, dokument: v.slug, vzor: `${nazevSouboru(v.stranka.sablona)}-vzor` },
    props: { sablona: v.stranka.sablona },
  }));
}

export const GET: APIRoute = ({ props }) => vzorDocx((props as { sablona: Sablona }).sablona);
