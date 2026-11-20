/** Izjava o priznanju duga – Hrvatska. Priznanje duga prekida zastaru; opći zastarni rok 5 godina (ZOO). */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const izjavaOPriznanjuDuga: Sablona = {
  kod: 'HR-PRIZNANJE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Izjava o priznanju duga',
  podnadpis: 'pisano priznanje novčane obveze',
  souborPdf: 'izjava-o-priznanju-duga',
  paticka: PATICKA('HR-PRIZNANJE'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'dužnik', vpravo: 'vjerovnik (primio)' },
  cislovatClanky: false,
  slovo: { n: 'izjava', g: 'izjave', a: 'izjavu', l: 'izjavi' },
  coDal: ['Dužnik potpisuje izjavu i predaje je vjerovniku.', 'Vjerovnik izvornik pažljivo čuva – dokaz je u slučaju spora.'],
  kontrola: [
    'Kada dužnik prizna dug, prekida se zastara i rok počinje teći iznova; opći zastarni rok je pet godina (ZOO).',
    'Navedite pravni temelj duga (npr. zajam od …, neplaćena cijena za …).',
    'Za lakšu naplatu može se izjava solemnizirati kod javnog bilježnika – tada je ovršna isprava.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Dužnik, vjerovnik i dug',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Dužnik – ime i prezime', placeholder: 'npr. Marko Babić', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB dužnika', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dužnika', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Vjerovnik – ime i prezime', placeholder: 'npr. Ivan Horvat', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB vjerovnika', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa vjerovnika', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Iznos duga (€)', sirka: 12, polovina: true },
        { id: 'temelj', typ: 'text', popis: 'Pravni temelj duga', placeholder: 'npr. zajam od 15. 3. 2026.', sirka: 56 },
        { id: 'rok', typ: 'datum', popis: 'Dug ću platiti najkasnije do', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN vjerovnika', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [
    {
      nadpis: 'Izjava',
      odstavce: [
        'Ja, **{{p_jmeno}}**, OIB {{p_oib}}, adresa {{p_adresa}} (dužnik),',
        'priznajem da vjerovniku **{{k_jmeno}}**, OIB {{k_oib}}, adresa {{k_adresa}}, na dan potpisa ove izjave dugujem iznos od **{{castka}}** (slovima: {{castka_slovima}}) po osnovi: {{temelj}}.',
        'Obvezujem se dug platiti najkasnije do {{rok}} na račun vjerovnika IBAN {{iban}}.',
        'Ako dug ne platim u roku, dugujem i zakonske zatezne kamate od dospijeća do isplate.',
      ],
    },
  ],
};
