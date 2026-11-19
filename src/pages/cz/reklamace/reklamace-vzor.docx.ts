import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { reklamace } from '../../../sablony/cz/reklamace';

export const GET: APIRoute = () => vzorDocx(reklamace);
