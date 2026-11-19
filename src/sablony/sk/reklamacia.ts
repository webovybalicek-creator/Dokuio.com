/**
 * Reklamácia tovaru (zodpovednosť za vady) – Slovensko, spotrebiteľ voči predávajúcemu.
 * § 619 až § 627 OZ: 24 mesiacov, vybavenie spravidla najneskôr do 30 dní (§ 622 ods. 3 OZ), potvrdenie o uplatnení.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { OZ_SK, ZAKON_SPOTREBITEL_SK, SOI } from './zdroje';

export const reklamacia: Sablona = {
  kod: 'SK-REKLAMACIA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Reklamácia tovaru',
  podnadpis: 'uplatnenie práv zo zodpovednosti za vady podľa § 619 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'reklamacia',
  paticka: 'Vytvorené zadarmo · šablóna SK-REKLAMACIA v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'kupujúci', vpravo: 'prevzal za predávajúceho (dátum a podpis)' },
  slovo: { n: 'reklamácia', g: 'reklamácie', a: 'reklamáciu', l: 'reklamácii' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Predávajúci má vybaviť reklamáciu (orientačne)', datum: isoDatum(pridejDny(od, 30)), popis: 'Spravidla najneskôr do 30 dní od uplatnenia.' }] : [];
  },
  coDal: [
    'Reklamáciu odovzdajte s tovarom a dokladom o kúpe v predajni, alebo ju pošlite e-shopu podľa jeho reklamačného poriadku.',
    'Pýtajte si potvrdenie o uplatnení reklamácie – máte naň nárok.',
    'Ak predávajúci reklamáciu nevybaví včas, môžete od zmluvy odstúpiť alebo žiadať výmenu. Pomôže Slovenská obchodná inšpekcia.',
  ],
  kontrola: [
    'Vady môžete uplatniť do 24 mesiacov od prevzatia (pri použitom tovare môže byť lehota skrátená na 12 mesiacov).',
    'Reklamácia sa má vybaviť bez zbytočného odkladu, spravidla najneskôr do 30 dní od jej uplatnenia.',
    'Vadu opíšte konkrétne a odfoťte ju. Doklad o kúpe uschovajte (stačí aj výpis z účtu alebo potvrdenie objednávky).',
    'Reklamácia podľa zákona platí pri kúpe od podnikateľa. Medzi súkromnými osobami sa postupuje podľa kúpnej zmluvy.',
  ],
  zdroje: [OZ_SK, ZAKON_SPOTREBITEL_SK, SOI],
  kroky: [
    {
      id: 'obchod',
      nazev: 'Predávajúci',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Predávajúci (obchodné meno)', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'IČO (nepovinné)', sirka: 12, polovina: true },
        { id: 'pr_adresa', typ: 'text', popis: 'Adresa predajne alebo na reklamácie', sirka: 46 },
      ],
    },
    {
      id: 'tovar',
      nazev: 'Tovar a vada',
      pole: [
        { id: 'zbozi', typ: 'text', popis: 'Reklamovaný tovar', placeholder: 'napr. práčka Bosch WAN28264, výr. č. FD9803', sirka: 46 },
        { id: 'doklad', typ: 'text', popis: 'Číslo dokladu alebo objednávky', sirka: 18, polovina: true },
        { id: 'koupeno', typ: 'datum', popis: 'Dátum kúpy / prevzatia', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'Opis vady', placeholder: 'napr. pri odstreďovaní sa zastaví s chybou E18', sirka: 64 },
        { id: 'projevila', typ: 'datum', popis: 'Kedy sa vada prejavila', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'poziadavka',
      nazev: 'Čo požadujete',
      pole: [
        {
          id: 'pozadavek',
          typ: 'volba',
          popis: 'Spôsob vybavenia',
          moznosti: [
            { hodnota: 'oprava', popis: 'Oprava' },
            { hodnota: 'vymena', popis: 'Výmena za nový kus' },
            { hodnota: 'zlava', popis: 'Primeraná zľava' },
            { hodnota: 'odstupenie', popis: 'Odstúpenie od zmluvy a vrátenie peňazí' },
          ],
        },
        { id: 'p_jmeno', typ: 'text', popis: 'Vaše meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Vaša adresa', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-mail alebo telefón', sirka: 30 },
        { id: 'ucet', typ: 'text', popis: 'IBAN (pri zľave alebo vrátení peňazí)', sirka: 30, zobrazitKdyz: { pole: 'pozadavek', je: ['zlava', 'odstupenie'] } },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum uplatnenia', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Predávajúci', odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'] },
    {
      nadpis: 'Reklamácia',
      vysvetleni: 'Čo je chybné a čo požadujete.',
      odstavce: [
        'Uplatňujem práva zo zodpovednosti za vady tohto tovaru: {{zbozi}}, doklad č. {{doklad}}, kúpený / prevzatý dňa {{koupeno}}.',
        'Opis vady: {{vada}}',
        'Vada sa prejavila dňa {{projevila}}.',
        {
          volba: 'pozadavek',
          uvod: 'Požadujem',
          uvodVzor: 'Požadujem (zaškrtnite):',
          moznosti: {
            oprava: 'odstránenie vady opravou.',
            vymena: 'výmenu tovaru za nový bez vád.',
            zlava: 'primeranú zľavu z kúpnej ceny, poukázanú na účet IBAN {{ucet}}.',
            odstupenie: 'odstúpenie od kúpnej zmluvy a vrátenie kúpnej ceny na účet IBAN {{ucet}}.',
          },
        },
        'Žiadam o potvrdenie o uplatnení reklamácie a o jej vybavenie v zákonnej lehote.',
      ],
    },
    { nadpis: 'Kupujúci', odstavce: ['{{p_jmeno}}, {{p_adresa}}, kontakt: {{p_kontakt}}'] },
  ],
};
