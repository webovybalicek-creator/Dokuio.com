import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { potvrzeniPrevzetiPenez } from '../../../sablony/cz/potvrzeni-prevzeti-penez';

export const GET: APIRoute = () => vzorPdf(potvrzeniPrevzetiPenez);
