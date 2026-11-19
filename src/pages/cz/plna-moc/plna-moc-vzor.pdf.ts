import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { plnaMoc } from '../../../sablony/cz/plna-moc';

export const GET: APIRoute = () => vzorPdf(plnaMoc);
