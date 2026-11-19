import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { souhlasVycestovaniDite } from '../../../sablony/cz/souhlas-vycestovani-dite';

export const GET: APIRoute = () => vzorDocx(souhlasVycestovaniDite);
