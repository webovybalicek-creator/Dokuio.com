/** Všechny šablony podle kódu – průvodce si šablonu najde podle data-kod na stránce */
import type { Sablona } from './typy';
import { kupniSmlouvaAuto } from './cz/kupni-smlouva-auto';
import { predavaciProtokolVozidlo } from './cz/predavaci-protokol-vozidlo';
import { plnaMocPrepisVozidla } from './cz/plna-moc-prepis-vozidla';
import { darovaciSmlouva } from './cz/darovaci-smlouva';
import { smlouvaOZapujcce } from './cz/smlouva-o-zapujcce';
import { potvrzeniPrevzetiPenez } from './cz/potvrzeni-prevzeti-penez';
import { kupniSmlouvaMotorka } from './cz/kupni-smlouva-motorka';
import { vypovedPovinneRuceni } from './cz/vypoved-povinne-ruceni';
import { uznaniDluhu } from './cz/uznani-dluhu';
import { plnaMoc } from './cz/plna-moc';
import { kupniSmlouvaVec } from './cz/kupni-smlouva-vec';
import { odstoupeniOdSmlouvy } from './cz/odstoupeni-od-smlouvy';
import { reklamace } from './cz/reklamace';
import { souhlasTrvalyPobyt } from './cz/souhlas-trvaly-pobyt';
import { souhlasVycestovaniDite } from './cz/souhlas-vycestovani-dite';
import { najemniSmlouvaByt } from './cz/najemni-smlouva-byt';
import { predavaciProtokolByt } from './cz/predavaci-protokol-byt';
import { vypovedNajmuNajemce } from './cz/vypoved-najmu-najemce';
import { dohodaOSkonceniNajmu } from './cz/dohoda-o-skonceni-najmu';

export const SABLONY: Record<string, Sablona> = Object.fromEntries(
  [
    kupniSmlouvaAuto,
    predavaciProtokolVozidlo,
    plnaMocPrepisVozidla,
    darovaciSmlouva,
    smlouvaOZapujcce,
    potvrzeniPrevzetiPenez,
    kupniSmlouvaMotorka,
    vypovedPovinneRuceni,
    uznaniDluhu,
    plnaMoc,
    kupniSmlouvaVec,
    odstoupeniOdSmlouvy,
    reklamace,
    souhlasTrvalyPobyt,
    souhlasVycestovaniDite,
    najemniSmlouvaByt,
    predavaciProtokolByt,
    vypovedNajmuNajemce,
    dohodaOSkonceniNajmu,
  ].map((s) => [s.kod, s]),
);
