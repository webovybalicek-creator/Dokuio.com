import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { souhlasTrvalyPobyt } from '../../../sablony/cz/souhlas-trvaly-pobyt';

export const GET: APIRoute = () => vzorDocx(souhlasTrvalyPobyt);
