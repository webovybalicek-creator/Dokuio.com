import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { kupniSmlouvaMotorka } from '../../../sablony/cz/kupni-smlouva-motorka';

export const GET: APIRoute = () => vzorDocx(kupniSmlouvaMotorka);
