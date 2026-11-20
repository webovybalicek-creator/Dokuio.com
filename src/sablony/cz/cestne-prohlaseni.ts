/**
 * Čestné prohlášení – Česko. Obecné písemné prohlášení fyzické osoby o skutečnostech.
 * Zákon obecný vzor nepředepisuje; ověření podpisu podle zák. č. 21/2006 Sb. jen když ho příjemce vyžaduje.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { ZAKON_OVEROVANI, NEPLATNE_DOKLADY } from './zdroje';

export const cestneProhlaseni: Sablona = {
  kod: 'CZ-CESTNE-PROHLASENI',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Čestné prohlášení',
  podnadpis: 'písemné prohlášení fyzické osoby',
  souborPdf: 'cestne-prohlaseni',
  paticka: 'Vytvořeno zdarma · šablona CZ-CESTNE-PROHLASENI v1.0 · vzor k vyplnění, nejde o právní poradenství · za pravdivost obsahu odpovídá prohlašující',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'prohlašující', vpravo: 'ověření podpisu (jen je-li vyžadováno)' },
  slovo: { n: 'čestné prohlášení', g: 'čestného prohlášení', a: 'čestné prohlášení', l: 'čestném prohlášení' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Vytiskněte prohlášení a podepište ho vlastní rukou.',
    'Když instituce chce úředně ověřený podpis, nepodepisujte předem – podepíšete až před úředníkem na Czech POINTu, matrice nebo u notáře.',
    'Kopii si nechte pro sebe.',
  ],
  kontrola: [
    'Pište jen to, co je pravda a co víte jistě. Nepravdivé čestné prohlášení může mít právní následky (u úřadu jde o přestupek, v některých případech i o trestný čin).',
    'Nejdřív zjistěte, jestli instituce nemá vlastní formulář – pak použijte ten.',
    'Formulujte konkrétně: kdo, co, odkdy (např. „ke dni 20. 11. 2026 nemám žádné splatné nedoplatky vůči …“).',
    'Úřední ověření podpisu (legalizace) je potřeba jen tehdy, když ho příjemce výslovně vyžaduje (zákon č. 21/2006 Sb.).',
    'Čestné prohlášení nenahrazuje doklady, které zákon výslovně vyžaduje (např. výpis z rejstříku trestů nebo potvrzení úřadu).',
  ],
  zdroje: [ZAKON_OVEROVANI, NEPLATNE_DOKLADY],

  kroky: [
    {
      id: 'osoba',
      nazev: 'Kdo prohlašuje',
      pole: [
        { id: 'jmeno', typ: 'text', popis: 'Jméno a příjmení', placeholder: 'např. Jana Nováková', sirka: 34, autocomplete: 'name' },
        { id: 'narozeni', typ: 'datum', popis: 'Datum narození', sirka: 14, polovina: true },
        { id: 'adresa', typ: 'text', popis: 'Adresa trvalého bydliště', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'obsah',
      nazev: 'Co prohlašujete',
      popis: 'Napište vlastními slovy, co prohlašujete. Konkrétně a pravdivě.',
      pole: [
        { id: 'pro', typ: 'text', popis: 'Pro koho (nepovinné)', napoveda: 'Úřad, škola, banka, pronajímatel…', placeholder: 'např. Městský úřad Říčany', sirka: 46 },
        { id: 'ucel', typ: 'text', popis: 'Účel (nepovinné)', placeholder: 'např. žádost o příspěvek na bydlení', sirka: 46 },
        { id: 'text', typ: 'textarea', popis: 'Text prohlášení', napoveda: 'Začněte rovnou věcí, např. „že v bytě … bydlím od 1. 1. 2025“. Úvod „Čestně prohlašuji“ doplníme.', placeholder: 'že k dnešnímu dni nemám žádné nedoplatky vůči Městskému úřadu Říčany.', sirka: 70 },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Prohlašující',
      odstavce: ['{{jmeno}}, datum narození {{narozeni}}, trvale bytem {{adresa}}'],
    },
    {
      nadpis: 'Prohlášení',
      vysvetleni: 'Text prohlášení vlastními slovy a potvrzení, že je pravdivé.',
      odstavce: [
        'Pro: {{pro}}. Účel: {{ucel}}.',
        'Já, níže podepsaný(á), čestně prohlašuji, {{text}}',
        'Prohlašuji, že všechny uvedené údaje jsou pravdivé a úplné, a jsem si vědom(a) právních následků nepravdivého prohlášení.',
      ],
    },
  ],
};
