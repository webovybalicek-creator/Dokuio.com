import type { APIRoute } from 'astro';
import { vzorDocx } from '../../../lib/vzory';
import { plnaMocPrepisVozidla } from '../../../sablony/cz/plna-moc-prepis-vozidla';

export const GET: APIRoute = () => vzorDocx(plnaMocPrepisVozidla);
