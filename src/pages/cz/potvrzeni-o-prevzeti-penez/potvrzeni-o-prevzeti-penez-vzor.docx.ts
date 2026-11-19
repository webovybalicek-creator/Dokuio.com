import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { potvrzeniPrevzetiPenez } from '../../../sablony/cz/potvrzeni-prevzeti-penez';

export const GET: APIRoute = () => vzorDocx(potvrzeniPrevzetiPenez);
