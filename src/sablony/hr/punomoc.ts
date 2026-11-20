/** Punomoć – Hrvatska. Opunomoćenje fizičke osobe za zastupanje u određenim poslovima (ZOO, zastupanje). */
import type { Sablona } from '../typy';
import { ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const punomoc: Sablona = {
  kod: 'HR-PUNOMOC',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Punomoć',
  podnadpis: 'ovlaštenje za zastupanje',
  souborPdf: 'punomoc',
  paticka: PATICKA('HR-PUNOMOC'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'opunomoćitelj', vpravo: 'opunomoćenik (prihvaća)' },
  cislovatClanky: false,
  slovo: { n: 'punomoć', g: 'punomoći', a: 'punomoć', l: 'punomoći' },
  coDal: [
    'Potpišite punomoć i predajte je opunomoćeniku.',
    'Ako je traži tijelo ili banka, potpis ovjerite kod javnog bilježnika.',
  ],
  kontrola: [
    'Opišite poslove što konkretnije – opunomoćenik smije činiti samo ono za što je ovlašten.',
    'Za postupke pred tijelima, bankama ili u stanici za tehnički pregled unaprijed provjerite traže li punomoć s ovjerenim potpisom.',
    'Punomoć možete u svakom trenutku opozvati; obavijestite o tome opunomoćenika i one pred kojima je koristio punomoć.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Tko koga ovlašćuje i za što',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Opunomoćitelj – ime i prezime', napoveda: 'Tko daje ovlaštenje.', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB opunomoćitelja', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa opunomoćitelja', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Opunomoćenik – ime i prezime', napoveda: 'Tko će vas zastupati.', placeholder: 'npr. Ana Kovačević', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB opunomoćenika', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa opunomoćenika', sirka: 46 },
        { id: 'poslovi', typ: 'textarea', popis: 'Za što se daje punomoć', placeholder: 'npr. preuzimanje preporučene pošiljke na pošti, podnošenje zahtjeva u …', sirka: 64 },
        { id: 'do', typ: 'datum', popis: 'Vrijedi do (neobavezno)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Punomoć',
      odstavce: [
        'Ja, **{{p_jmeno}}**, OIB {{p_oib}}, adresa {{p_adresa}} (opunomoćitelj),',
        'ovlašćujem **{{k_jmeno}}**, OIB {{k_oib}}, adresa {{k_adresa}} (opunomoćenik), da me zastupa i u moje ime poduzima sljedeće radnje: {{poslovi}}',
        'Punomoć vrijedi do {{do}}, odnosno do opoziva.',
      ],
    },
  ],
};
