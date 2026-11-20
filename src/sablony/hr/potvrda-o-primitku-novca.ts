/** Potvrda o primitku novca – Hrvatska. Dužnik koji plaća može zahtijevati potvrdu (priznanicu) o ispunjenju (ZOO). */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, SAVJET_GOTOVINA, PATICKA } from './izvori';

export const potvrdaOPrimitkuNovca: Sablona = {
  kod: 'HR-POTVRDA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Potvrda o primitku novca',
  podnadpis: 'priznanica o primitku gotovine',
  souborPdf: 'potvrda-o-primitku-novca',
  paticka: PATICKA('HR-POTVRDA'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'predao', vpravo: 'primio' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'potvrda', g: 'potvrde', a: 'potvrdu', l: 'potvrdi' },
  coDal: ['Prebrojite novac prije potpisa.', 'Svaka strana zadržava po jedan potpisani primjerak.'],
  kontrola: [
    'Iznos navedite brojkama i slovima – slovima ga dopisujemo sami.',
    'Svrhu plaćanja opišite konkretno (npr. „kupoprodajna cijena za VW Golf, broj šasije …”).',
    'Tko plaća, može tražiti potvrdu (priznanicu) od onoga tko novac prima.',
    SAVJET_IDENTITET,
    SAVJET_GOTOVINA,
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Tko, koliko i zašto',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Primatelj – ime i prezime', napoveda: 'Tko novac prima i potpisuje potvrdu.', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB primatelja', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa primatelja', placeholder: 'npr. Ilica 12, 10000 Zagreb', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Platitelj – ime i prezime', placeholder: 'npr. Ana Kovačević', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa platitelja', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Iznos (€)', placeholder: 'npr. 2500', sirka: 12, polovina: true },
        { id: 'svrha', typ: 'text', popis: 'Svrha plaćanja', placeholder: 'npr. kupoprodajna cijena za bicikl Trek', sirka: 56 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', placeholder: 'npr. Zagreb', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [
    {
      nadpis: 'Potvrda',
      odstavce: [
        'Ja, **{{p_jmeno}}**, OIB {{p_oib}}, adresa {{p_adresa}},',
        'potvrđujem da sam danas od **{{k_jmeno}}**, adresa {{k_adresa}}, primio/la u gotovini iznos od **{{castka}}** (slovima: {{castka_slovima}}) na ime: {{svrha}}.',
        'Novac sam prebrojio/la i primio/la ga u cijelosti.',
      ],
    },
  ],
};
