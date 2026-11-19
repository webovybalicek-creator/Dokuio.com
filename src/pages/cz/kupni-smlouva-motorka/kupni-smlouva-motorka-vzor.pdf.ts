import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { kupniSmlouvaMotorka } from '../../../sablony/cz/kupni-smlouva-motorka';

export const GET: APIRoute = () => vzorPdf(kupniSmlouvaMotorka);
