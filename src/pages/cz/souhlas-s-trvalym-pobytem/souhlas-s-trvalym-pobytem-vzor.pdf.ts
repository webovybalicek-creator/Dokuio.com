import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { souhlasTrvalyPobyt } from '../../../sablony/cz/souhlas-trvaly-pobyt';

export const GET: APIRoute = () => vzorPdf(souhlasTrvalyPobyt);
