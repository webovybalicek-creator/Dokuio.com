import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { predavaciProtokolByt } from '../../../sablony/cz/predavaci-protokol-byt';

export const GET: APIRoute = () => vzorDocx(predavaciProtokolByt);
