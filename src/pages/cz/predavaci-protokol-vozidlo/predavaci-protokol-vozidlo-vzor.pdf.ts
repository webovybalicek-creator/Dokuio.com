import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { predavaciProtokolVozidlo } from '../../../sablony/cz/predavaci-protokol-vozidlo';

export const GET: APIRoute = () => vzorPdf(predavaciProtokolVozidlo);
