import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { predavaciProtokolByt } from '../../../sablony/cz/predavaci-protokol-byt';

export const GET: APIRoute = () => vzorPdf(predavaciProtokolByt);
