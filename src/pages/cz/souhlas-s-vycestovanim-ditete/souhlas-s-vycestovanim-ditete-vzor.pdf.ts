import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { souhlasVycestovaniDite } from '../../../sablony/cz/souhlas-vycestovani-dite';

export const GET: APIRoute = () => vzorPdf(souhlasVycestovaniDite);
