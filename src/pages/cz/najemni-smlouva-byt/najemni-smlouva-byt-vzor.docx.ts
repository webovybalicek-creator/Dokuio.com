import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { najemniSmlouvaByt } from '../../../sablony/cz/najemni-smlouva-byt';

export const GET: APIRoute = () => vzorDocx(najemniSmlouvaByt);
