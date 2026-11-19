import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { darovaciSmlouva } from '../../../sablony/cz/darovaci-smlouva';

export const GET: APIRoute = () => vzorPdf(darovaciSmlouva);
