import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { dohodaOSkonceniNajmu } from '../../../sablony/cz/dohoda-o-skonceni-najmu';

export const GET: APIRoute = () => vzorDocx(dohodaOSkonceniNajmu);
