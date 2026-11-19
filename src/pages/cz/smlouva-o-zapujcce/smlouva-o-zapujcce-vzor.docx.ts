import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { smlouvaOZapujcce } from '../../../sablony/cz/smlouva-o-zapujcce';

export const GET: APIRoute = () => vzorDocx(smlouvaOZapujcce);
