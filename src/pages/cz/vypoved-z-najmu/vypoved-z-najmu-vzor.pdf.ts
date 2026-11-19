import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { vypovedNajmuNajemce } from '../../../sablony/cz/vypoved-najmu-najemce';

export const GET: APIRoute = () => vzorPdf(vypovedNajmuNajemce);
