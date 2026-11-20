import type { StrankaDokumentu } from '../typy';
import { szerzodesFelmondasa as sablona } from '../../sablony/hu/szerzodes-felmondasa';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Szerződés felmondása',
  nazevA: 'szerződés felmondását',
  katalog: {
    popis: 'Mobil, internet, biztosítás, áram, edzőterem vagy előfizetés felmondása.',
    kategorie: 'mindennapok',
    ilustrace: 'protokol',
    slova: [
      'felmondó levél minta',
      'szerződés felmondása',
      'mobil előfizetés felmondása',
      'internet felmondás',
      'biztosítás felmondása',
      'kgfb felmondás évforduló',
      'edzőterem bérlet felmondás',
      'előfizetés lemondása',
      'áram gáz szerződés felmondása',
    ],
  },
  souvisejici: 'mindennapok',
  landing: {
    title: 'Felmondó levél {rok} – ingyenes PDF minta',
    description: 'Ingyenes felmondó levél mobil-, internet-, biztosítási, áram-, gáz- vagy edzőtermi szerződéshez. Visszaigazolás és túlfizetés visszakérése. PDF, Word.',
    perex: 'Egy levél minden szolgáltatóhoz: szerződésszám, a megszűnés időpontja, és kérés a visszaigazolásra meg a túlfizetés visszautalására.',
    obsahPopis: 'Mit tartalmaz a felmondó levél.',
    obsah: [
      { nazev: 'Szerződés', popis: 'Szolgáltató, szerződésszám vagy kötvényszám, a szolgáltatás megnevezése.' },
      { nazev: 'Megszűnés', popis: 'A legkorábbi lehetséges időpont, egy adott nap vagy az évforduló.' },
      { nazev: 'Kérések', popis: 'Írásbeli visszaigazolás, végszámla, túlfizetés visszautalása, a díjterhelés leállítása.' },
    ],
    kroky: [
      { nazev: 'Válassza ki a szerződést', popis: 'Mobil, internet, biztosítás, áram és gáz, tagság vagy előfizetés.' },
      { nazev: 'Töltse ki', popis: 'A szerződésszám a számlán vagy a kötvényen van.' },
      { nazev: 'Küldje el igazolhatóan', popis: 'Tértivevényes levélben vagy úgy, ahogy a szerződést megkötötte.' },
    ],
    online: ['Szöveg a szerződés fajtája szerint', 'Tippek a határidőkhöz (Eht., kgfb)', 'Emlékeztető a megszűnés napjára', 'Letöltés PDF-ben és Wordben'],
    hodiSe: [
      'mobil-, internet- vagy tévé-előfizetést mond fel',
      'biztosítást mond fel, például a kgfb-t az évfordulóra',
      'edzőtermi tagságot, előfizetést vagy más rendszeres szolgáltatást szüntet meg',
      'költözés miatt mondja fel az áram- vagy gázszerződést',
    ],
    nehodiSe: [
      'albérletet mond fel – arra a lakásbérleti felmondás való',
      'munkaviszonyt szüntet meg – arra a munkavállalói felmondás való',
      'webshopos vásárlástól áll el 14 napon belül – arra az elállási nyilatkozat való',
    ],
    poNadpis: 'A felmondás után.',
    po: [
      { nazev: 'Visszaigazolás', popis: 'Őrizze meg a szolgáltató visszaigazolását és a tértivevényt.' },
      { nazev: 'Végszámla', popis: 'Ellenőrizze, és ha túlfizetése van, kérje vissza.' },
      { nazev: 'Díjterhelés', popis: 'Nézze meg, hogy leállt-e a csoportos beszedés vagy a kártyás terhelés.' },
    ],
    faq: [
      {
        q: 'Mikor mondhatom fel a mobil- vagy internet-előfizetést?',
        a: 'A határozatlan idejű előfizetői szerződést az előfizető bármikor, azonnali hatállyal, további jogkövetkezmények nélkül felmondhatja (Eht. 134. § (1)). Határozott idejű (hűségidős) szerződésnél idő előtti felmondáskor a szolgáltató a kapott kedvezményeket követelheti.',
      },
      {
        q: 'Hogyan mondhatom fel a kötelező gépjármű-felelősségbiztosítást?',
        a: 'A biztosítási évfordulóra, legalább 30 nappal előtte, írásban (vagy ha így állapodtak meg, elektronikusan); a felmondás akkor hatályos, ha határidőben megérkezik a biztosítóhoz (Kgfb. tv. 7. §). Az autó eladásakor a szerződés érdekmúlással szűnik meg.',
      },
      {
        q: 'Mennyi a felmondási idő edzőteremnél, áramnál vagy más biztosításnál?',
        a: 'Amennyit a szerződés, a biztosítási feltételek vagy az ÁSZF rögzít. Ha nem tudja, válassza a „legkorábbi lehetséges időpont” lehetőséget, és kérjen írásbeli visszaigazolást.',
      },
      { q: 'Tárolják az adataimat?', a: 'Nem. A dokumentum kizárólag az Ön böngészőjében készül.' },
    ],
    zakony: 'A minta az elektronikus hírközlésről szóló 2003. évi C. törvény, a kötelező gépjármű-felelősségbiztosításról szóló 2009. évi LXII. törvény és a Polgári Törvénykönyv alapján készült. A többi szerződésnél a felmondási idő a szerződés vagy az ÁSZF szerint alakul.',
    souvisejiciPopis: 'Más dokumentumok a mindennapi ügyekhez, szintén ingyen.',
  },
  vytvorit: {
    title: 'Felmondó levél kitöltése online – ingyen PDF és Word',
    description: 'Szerződés felmondása online: előfizetés, biztosítás, áram, gáz, edzőterem. Visszaigazolás és túlfizetés kérése. Ingyenes PDF vagy Word, regisztráció nélkül.',
    podnadpis: 'Ingyenes · PDF és Word · kb. 3 perc',
  },
};

export default stranka;
