import type { APIRoute } from 'astro';
import { vzorPdf } from '../../../lib/vzory';
import { plnaMocPrepisVozidla } from '../../../sablony/cz/plna-moc-prepis-vozidla';

export const GET: APIRoute = () => vzorPdf(plnaMocPrepisVozidla);
