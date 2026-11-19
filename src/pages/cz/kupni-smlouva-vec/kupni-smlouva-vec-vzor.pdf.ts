import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { kupniSmlouvaVec } from '../../../sablony/cz/kupni-smlouva-vec';

export const GET: APIRoute = () => vzorPdf(kupniSmlouvaVec);
