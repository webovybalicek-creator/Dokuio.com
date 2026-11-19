/** Kellékszavatossági igény (hibás termék) – Magyarország, fogyasztó és vállalkozás között. Ptk. 6:159. § (sorrend: kijavítás/kicserélés), 6:162. § (2 hónapon belüli közlés időben történt), fogyasztónál 2 év. */
import type { Sablona } from '../typy';
import { PTK } from './forrasok';

export const kellekszavatossag: Sablona = {
  kod: 'HU-SZAVATOSSAG',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Kellékszavatossági igény',
  podnadpis: 'hibás teljesítés miatti igény érvényesítése (Polgári Törvénykönyv)',
  souborPdf: 'kellekszavatossagi-igeny',
  paticka: 'Ingyenesen készült · HU-SZAVATOSSAG v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért Ön felel, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'vásárló', vpravo: 'átvette az eladó nevében (dátum, aláírás)' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'igény', g: 'igény', a: 'igényt', l: 'igényben' },
  coDal: ['Adja le a terméket az üzletben a nyomtatott igénnyel, vagy küldje el ajánlott levélben.', 'Kérjen jegyzőkönyvet vagy átvételi igazolást, és őrizze meg a blokkot vagy számlát.'],
  kontrola: [
    'Fogyasztóként a kellékszavatossági igényt a teljesítéstől számított 2 évig érvényesítheti.',
    'Elsősorban kijavítást vagy kicserélést kérhet; árleszállítást vagy elállást csak akkor, ha ez nem lehetséges vagy a vállalkozás nem teljesíti.',
    'A hibát a felfedezése után haladéktalanul közölje – a két hónapon belül közölt hiba közlése időben történtnek számít.',
    'Csatolja a blokk vagy számla másolatát, és fényképezze le a hibát.',
  ],
  zdroje: [PTK],
  kroky: [
    {
      id: 'adatok',
      nazev: 'Termék és hiba',
      pole: [
        { id: 'firma', typ: 'text', popis: 'Vállalkozás (eladó) neve', sirka: 34 },
        { id: 'firma_adresa', typ: 'text', popis: 'Vállalkozás címe', sirka: 46 },
        { id: 'termek', typ: 'text', popis: 'Termék', placeholder: 'pl. Samsung Galaxy A55, IMEI …', sirka: 50 },
        { id: 'koupeno', typ: 'datum', popis: 'Vásárlás napja', sirka: 14, polovina: true },
        { id: 'doklad', typ: 'text', popis: 'Blokk vagy számla száma', sirka: 18, polovina: true },
        { id: 'cena', typ: 'castka', popis: 'Vételár (Ft)', sirka: 12, polovina: true },
        { id: 'zjisteno', typ: 'datum', popis: 'A hiba észlelésének napja', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'A hiba leírása', placeholder: 'pl. a készülék töltés közben kikapcsol', sirka: 64 },
        {
          id: 'naroky',
          typ: 'volba',
          popis: 'Mit kér',
          moznosti: [
            { hodnota: 'javitas', popis: 'Kijavítást' },
            { hodnota: 'csere', popis: 'Kicserélést' },
            { hodnota: 'arleszallitas', popis: 'Árleszállítást' },
            { hodnota: 'elallas', popis: 'Elállást (a vételár visszafizetését)' },
          ],
        },
        { id: 'jmeno', typ: 'text', popis: 'Az Ön neve', sirka: 34, autocomplete: 'name' },
        { id: 'adresa', typ: 'text', popis: 'Az Ön címe, telefonszáma', sirka: 46 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Kellékszavatossági igény',
      odstavce: [
        '**Címzett:** {{firma}}, {{firma_adresa}}',
        'Alulírott **{{jmeno}}** ({{adresa}}) {{koupeno}} napján megvásároltam Önöktől a következő terméket: {{termek}}, vételár: {{cena}}, blokk/számla száma: {{doklad}}.',
        'A termék hibás. A hibát {{zjisteno}} napján észleltem, leírása: {{vada}}',
        {
          volba: 'naroky',
          uvod: 'Kellékszavatossági jogomra hivatkozva kérem:',
          uvodVzor: 'Kellékszavatossági jogomra hivatkozva kérem (egy lehetőséget jelöljön meg):',
          moznosti: {
            javitas: 'a termék kijavítását,',
            csere: 'a termék kicserélését,',
            arleszallitas: 'a vételár arányos leszállítását,',
            elallas: 'a vételár visszafizetését (elállás a szerződéstől),',
          },
        },
        'Kérem, hogy az igényemről a jogszabályban előírt határidőn belül nyilatkozzanak, a kijavítást vagy kicserélést pedig megfelelő határidőn belül, számomra jelentős kényelmetlenség nélkül végezzék el.',
        'Melléklet: a blokk vagy számla másolata.',
      ],
    },
  ],
};
