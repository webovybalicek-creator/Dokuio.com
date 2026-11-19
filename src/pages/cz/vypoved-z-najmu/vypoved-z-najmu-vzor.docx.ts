import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { vypovedNajmuNajemce } from '../../../sablony/cz/vypoved-najmu-najemce';

export const GET: APIRoute = () => vzorDocx(vypovedNajmuNajemce);
