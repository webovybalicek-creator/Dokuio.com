import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { kupniSmlouvaAuto } from '../../../sablony/cz/kupni-smlouva-auto';

export const GET: APIRoute = () => vzorPdf(kupniSmlouvaAuto);
