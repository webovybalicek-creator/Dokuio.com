import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { dohodaOSkonceniNajmu } from '../../../sablony/cz/dohoda-o-skonceni-najmu';

export const GET: APIRoute = () => vzorPdf(dohodaOSkonceniNajmu);
