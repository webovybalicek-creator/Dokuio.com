import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { najemniSmlouvaByt } from '../../../sablony/cz/najemni-smlouva-byt';

export const GET: APIRoute = () => vzorPdf(najemniSmlouvaByt);
