import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { kupniSmlouvaAuto } from '../../../sablony/cz/kupni-smlouva-auto';

export const GET: APIRoute = () => vzorDocx(kupniSmlouvaAuto);
