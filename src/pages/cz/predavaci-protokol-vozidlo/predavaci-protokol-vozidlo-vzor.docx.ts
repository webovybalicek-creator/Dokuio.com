import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { predavaciProtokolVozidlo } from '../../../sablony/cz/predavaci-protokol-vozidlo';

export const GET: APIRoute = () => vzorDocx(predavaciProtokolVozidlo);
