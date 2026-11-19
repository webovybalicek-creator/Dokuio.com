import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { plnaMoc } from '../../../sablony/cz/plna-moc';

export const GET: APIRoute = () => vzorDocx(plnaMoc);
