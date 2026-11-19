import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { odstoupeniOdSmlouvy } from '../../../sablony/cz/odstoupeni-od-smlouvy';

export const GET: APIRoute = () => vzorPdf(odstoupeniOdSmlouvy);
