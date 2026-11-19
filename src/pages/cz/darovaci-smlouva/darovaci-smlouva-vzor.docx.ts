import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { darovaciSmlouva } from '../../../sablony/cz/darovaci-smlouva';

export const GET: APIRoute = () => vzorDocx(darovaciSmlouva);
