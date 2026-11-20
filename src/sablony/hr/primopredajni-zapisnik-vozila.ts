/** Primopredajni zapisnik vozila – Hrvatska. Datum i vrijeme predaje, kilometri, ključevi, dokumenti i oštećenja. */
import type { Sablona } from '../typy';
import { ZOO, PATICKA } from './izvori';

export const primopredajniZapisnikVozila: Sablona = {
  kod: 'HR-ZAPISNIK-VOZILO',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Primopredajni zapisnik vozila',
  podnadpis: 'stanje vozila, ključevi i dokumenti pri predaji',
  souborPdf: 'primopredajni-zapisnik-vozila',
  paticka: PATICKA('HR-ZAPISNIK-VOZILO'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'predao', vpravo: 'preuzeo' },
  slovo: { n: 'zapisnik', g: 'zapisnika', a: 'zapisnik', l: 'zapisniku' },
  coDal: ['Obje strane potpisuju svaki primjerak.', 'Fotografirajte vozilo i kilometražu u trenutku predaje.'],
  kontrola: [
    'Upišite točno vrijeme predaje – do promjene vlasništva prekršaji mogu stizati na prethodnog vlasnika.',
    'Usporedite broj šasije u prometnoj dozvoli i na vozilu.',
    'Navedite sve predane ključeve, dokumente i opremu (zimske gume, krovni nosač).',
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Vozilo i predaja',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Predao (ime i prezime)', sirka: 34, autocomplete: 'name' },
        { id: 'k_jmeno', typ: 'text', popis: 'Preuzeo (ime i prezime)', sirka: 34 },
        { id: 'znacka', typ: 'text', popis: 'Marka i tip', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Broj šasije (VIN)', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Registarska oznaka', sirka: 12, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Kilometri', jednotka: 'km', sirka: 12, polovina: true },
        { id: 'gorivo', typ: 'text', popis: 'Razina goriva', placeholder: 'npr. pola spremnika', sirka: 18, polovina: true },
        { id: 'vrijeme', typ: 'text', popis: 'Vrijeme predaje', placeholder: 'npr. 14:30', sirka: 8, polovina: true },
        { id: 'kljucevi', typ: 'cislo', popis: 'Broj ključeva', sirka: 4, polovina: true },
        { id: 'dokumenti', typ: 'text', popis: 'Predani dokumenti', placeholder: 'npr. prometna dozvola, servisna knjižica', sirka: 56 },
        { id: 'oprema', typ: 'text', popis: 'Dodatna oprema', placeholder: 'npr. zimske gume na felgama', sirka: 56 },
        { id: 'ostecenja', typ: 'textarea', popis: 'Oštećenja i napomene', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Predaja vozila',
      odstavce: [
        '{{p_jmeno}} predaje, a {{k_jmeno}} preuzima vozilo {{znacka}}, broj šasije {{vin}}, registarske oznake {{spz}}, dana {{datum}} u {{vrijeme}} sati.',
        'Stanje brojila kilometara: {{km}} km. Razina goriva: {{gorivo}}.',
      ],
    },
    {
      nadpis: 'Ključevi, dokumenti i oprema',
      odstavce: ['Broj ključeva: {{kljucevi}}', 'Dokumenti: {{dokumenti}}', 'Dodatna oprema: {{oprema}}'],
    },
    {
      nadpis: 'Stanje vozila',
      odstavce: ['Oštećenja i napomene: {{ostecenja}}', 'Od trenutka predaje za vozilo i njegovu uporabu odgovara osoba koja ga je preuzela.'],
    },
  ],
};
