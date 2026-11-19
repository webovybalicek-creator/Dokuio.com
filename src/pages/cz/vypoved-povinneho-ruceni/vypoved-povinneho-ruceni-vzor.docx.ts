import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { vypovedPovinneRuceni } from '../../../sablony/cz/vypoved-povinne-ruceni';

export const GET: APIRoute = () => vzorDocx(vypovedPovinneRuceni);
