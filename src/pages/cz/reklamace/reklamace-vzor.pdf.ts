import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { reklamace } from '../../../sablony/cz/reklamace';

export const GET: APIRoute = () => vzorPdf(reklamace);
