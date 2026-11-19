/** Kúpna zmluva na hnuteľnú vec medzi súkromnými osobami – Slovensko. § 588 a nasl. zákona č. 40/1964 Zb. */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { OZ_SK, ZAKON_HOTOVOST_SK, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK } from './zdroje';

export const kupnaZmluva: Sablona = {
  kod: 'SK-KUPNA-VEC',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Kúpna zmluva',
  podnadpis: 'na hnuteľnú vec uzavretá podľa § 588 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'kupna-zmluva',
  paticka: 'Vytvorené zadarmo · šablóna SK-KUPNA-VEC v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'predávajúci', vpravo: 'kupujúci' },
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },
  coDal: ['Vytlačte zmluvu dvakrát, obe strany podpíšu oba výtlačky.', 'Vec si pred podpisom spolu prezrite a vyskúšajte.'],
  kontrola: [
    'Vec opíšte presne: značka, model, výrobné číslo, príslušenstvo.',
    'Predávajúci má kupujúceho upozorniť na vady, o ktorých vie. Zatajené vady môžu byť dôvodom na odstúpenie alebo zľavu.',
    'Pri drahších veciach si overte výrobné číslo a pýtajte si pôvodný doklad o kúpe.',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
  ],
  zdroje: [OZ_SK, ZAKON_HOTOVOST_SK],
  kroky: [
    {
      id: 'strany',
      nazev: 'Predávajúci a kupujúci',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Predávajúci – meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupujúci – meno a priezvisko', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: 'Predmet kúpy',
      pole: [
        { id: 'vec', typ: 'textarea', popis: 'Čo sa predáva', placeholder: 'napr. bicykel Kellys Spider 70, výrobné číslo WC12345, s nabíjačkou a dvoma kľúčmi', sirka: 64 },
        { id: 'vady', typ: 'textarea', popis: 'Známe vady (nepovinné)', placeholder: 'napr. škrabance na ráme', sirka: 64 },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a odovzdanie',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kúpna cena (€)', sirka: 12, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Platba',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti pri podpise' },
            { hodnota: 'prevod', popis: 'Prevodom pred odovzdaním' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN predávajúceho', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovy: (d) => sumaSlovom(d.cena) },
  clanky: [
    {
      nadpis: 'Zmluvné strany',
      odstavce: [
        '**Predávajúci:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}}',
        '**Kupujúci:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Predmet kúpy',
      vysvetleni: 'Čo sa predáva a v akom stave.',
      odstavce: [
        'Predávajúci predáva kupujúcemu túto hnuteľnú vec: {{vec}} (ďalej len „vec“).',
        'Predávajúci vyhlasuje, že je vlastníkom veci a že na veci neviaznu práva tretích osôb.',
        'Predávajúci upozornil kupujúceho na tieto vady veci: {{vady}}. Kupujúci si vec prezrel a v tomto stave ju kupuje.',
      ],
    },
    {
      nadpis: 'Kúpna cena a odovzdanie',
      odstavce: [
        'Kúpna cena je **{{cena}}** (slovom: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Platba (zaškrtnite jednu možnosť):',
          moznosti: {
            hotove: 'Kúpna cena bola zaplatená v hotovosti pri podpise zmluvy; predávajúci svojím podpisom potvrdzuje jej prevzatie.',
            prevod: 'Kúpna cena bude zaplatená prevodom na účet IBAN {{ucet}} pred odovzdaním veci.',
          },
        },
        'Vlastnícke právo k veci prechádza na kupujúceho jej prevzatím po zaplatení celej kúpnej ceny.',
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      odstavce: [
        'Práva a povinnosti neupravené touto zmluvou sa riadia Občianskym zákonníkom.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, z ktorých každá strana dostane jeden.',
      ],
    },
  ],
};
