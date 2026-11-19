import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { uznaniDluhu } from '../../../sablony/cz/uznani-dluhu';

export const GET: APIRoute = () => vzorPdf(uznaniDluhu);
