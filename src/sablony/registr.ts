/** Všechny šablony podle kódu – průvodce si šablonu najde podle data-kod na stránce */
import type { Sablona } from './typy';
import { kupniSmlouvaAuto } from './cz/kupni-smlouva-auto';
import { predavaciProtokolVozidlo } from './cz/predavaci-protokol-vozidlo';
import { plnaMocPrepisVozidla } from './cz/plna-moc-prepis-vozidla';

export const SABLONY: Record<string, Sablona> = Object.fromEntries(
  [kupniSmlouvaAuto, predavaciProtokolVozidlo, plnaMocPrepisVozidla].map((s) => [s.kod, s]),
);
