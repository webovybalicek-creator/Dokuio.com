/** Všechny šablony podle kódu – průvodce si šablonu najde podle data-kod na stránce */
import type { Sablona } from './typy';
import { kupniSmlouvaAuto } from './cz/kupni-smlouva-auto';
import { predavaciProtokolVozidlo } from './cz/predavaci-protokol-vozidlo';
import { plnaMocPrepisVozidla } from './cz/plna-moc-prepis-vozidla';
import { darovaciSmlouva } from './cz/darovaci-smlouva';
import { smlouvaOZapujcce } from './cz/smlouva-o-zapujcce';
import { potvrzeniPrevzetiPenez } from './cz/potvrzeni-prevzeti-penez';

export const SABLONY: Record<string, Sablona> = Object.fromEntries(
  [
    kupniSmlouvaAuto,
    predavaciProtokolVozidlo,
    plnaMocPrepisVozidla,
    darovaciSmlouva,
    smlouvaOZapujcce,
    potvrzeniPrevzetiPenez,
  ].map((s) => [s.kod, s]),
);
