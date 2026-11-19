import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { vypovedPovinneRuceni } from '../../../sablony/cz/vypoved-povinne-ruceni';

export const GET: APIRoute = () => vzorPdf(vypovedPovinneRuceni);
