/** Primopredajni zapisnik stana – Hrvatska. Stanje brojila, ključevi, oprema i oštećenja pri useljenju ili iseljenju. */
import type { Sablona } from '../typy';
import { ZNS, PATICKA } from './izvori';

export const primopredajniZapisnikStana: Sablona = {
  kod: 'HR-ZAPISNIK-STAN',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Primopredajni zapisnik stana',
  podnadpis: 'stanje stana, brojila i ključeva pri predaji',
  souborPdf: 'primopredajni-zapisnik-stana',
  paticka: PATICKA('HR-ZAPISNIK-STAN'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'najmodavac', vpravo: 'najmoprimac' },
  slovo: { n: 'zapisnik', g: 'zapisnika', a: 'zapisnik', l: 'zapisniku' },
  coDal: ['Obje strane potpisuju svaki primjerak.', 'Fotografije stana spremite s datumom – dopunjuju zapisnik.'],
  kontrola: [
    'Očitajte sva brojila (struja, voda, plin, grijanje) i upišite brojeve brojila.',
    'Oštećenja opišite konkretno i fotografirajte ih.',
    'Upišite broj predanih ključeva i daljinskih upravljača.',
  ],
  zdroje: [ZNS],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Stan i strane',
      pole: [
        {
          id: 'smer', typ: 'volba', popis: 'Vrsta primopredaje',
          moznosti: [ { hodnota: 'uselenje', popis: 'Predaja stana najmoprimcu (useljenje)' }, { hodnota: 'iselenje', popis: 'Povrat stana najmodavcu (iseljenje)' } ],
        },
        { id: 'adresa', typ: 'text', popis: 'Adresa stana', sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: 'Najmodavac', sirka: 34, autocomplete: 'name' },
        { id: 'k_jmeno', typ: 'text', popis: 'Najmoprimac', sirka: 34 },
        { id: 'struja', typ: 'text', popis: 'Brojilo struje – stanje', sirka: 14, polovina: true },
        { id: 'voda', typ: 'text', popis: 'Brojilo vode – stanje', sirka: 14, polovina: true },
        { id: 'plin', typ: 'text', popis: 'Brojilo plina – stanje', sirka: 14, polovina: true },
        { id: 'grijanje', typ: 'text', popis: 'Grijanje – stanje (neobavezno)', sirka: 14, polovina: true },
        { id: 'kljucevi', typ: 'text', popis: 'Ključevi', placeholder: 'npr. 2 ključa od stana, 1 od zgrade', sirka: 46 },
        { id: 'oprema', typ: 'textarea', popis: 'Namještaj i oprema', sirka: 64 },
        { id: 'ostecenja', typ: 'textarea', popis: 'Oštećenja i napomene', placeholder: 'npr. ogrebotina na parketu u dnevnoj sobi', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Primopredaja',
      odstavce: [
        {
          volba: 'smer',
          uvodVzor: 'Vrsta (označite jednu mogućnost):',
          moznosti: {
            uselenje: 'Najmodavac {{p_jmeno}} predaje najmoprimcu {{k_jmeno}} stan na adresi {{adresa}}.',
            iselenje: 'Najmoprimac {{k_jmeno}} vraća najmodavcu {{p_jmeno}} stan na adresi {{adresa}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Stanje brojila',
      odstavce: ['Struja: {{struja}}', 'Voda: {{voda}}', 'Plin: {{plin}}', 'Grijanje: {{grijanje}}'],
    },
    {
      nadpis: 'Ključevi, oprema i stanje',
      odstavce: ['Predani ključevi: {{kljucevi}}', 'Namještaj i oprema: {{oprema}}', 'Oštećenja i napomene: {{ostecenja}}', 'Strane potvrđuju da zapisnik odgovara stvarnom stanju stana.'],
    },
  ],
};
