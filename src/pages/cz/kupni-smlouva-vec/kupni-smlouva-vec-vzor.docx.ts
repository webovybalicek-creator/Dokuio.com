import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { kupniSmlouvaVec } from '../../../sablony/cz/kupni-smlouva-vec';

export const GET: APIRoute = () => vzorDocx(kupniSmlouvaVec);
