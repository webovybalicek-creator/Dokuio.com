import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { odstoupeniOdSmlouvy } from '../../../sablony/cz/odstoupeni-od-smlouvy';

export const GET: APIRoute = () => vzorDocx(odstoupeniOdSmlouvy);
