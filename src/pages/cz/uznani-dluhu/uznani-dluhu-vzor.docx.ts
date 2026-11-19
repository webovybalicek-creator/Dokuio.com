import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { uznaniDluhu } from '../../../sablony/cz/uznani-dluhu';

export const GET: APIRoute = () => vzorDocx(uznaniDluhu);
