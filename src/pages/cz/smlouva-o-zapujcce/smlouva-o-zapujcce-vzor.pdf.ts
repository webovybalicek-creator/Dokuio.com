import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { smlouvaOZapujcce } from '../../../sablony/cz/smlouva-o-zapujcce';

export const GET: APIRoute = () => vzorPdf(smlouvaOZapujcce);
