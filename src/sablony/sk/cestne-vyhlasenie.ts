/** Čestné vyhlásenie – Slovensko. Všeobecné písomné vyhlásenie fyzickej osoby; zákon vzor nepredpisuje. */
import type { Sablona } from '../typy';
import { OZ_SK } from './zdroje';

export const cestneVyhlasenie: Sablona = {
  kod: 'SK-CESTNE-VYHLASENIE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Čestné vyhlásenie',
  podnadpis: 'písomné vyhlásenie fyzickej osoby',
  souborPdf: 'cestne-vyhlasenie',
  paticka: 'Vytvorené zadarmo · šablóna SK-CESTNE-VYHLASENIE v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za pravdivosť obsahu zodpovedá vyhlasujúci',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'vyhlasujúci', vpravo: 'osvedčenie podpisu (len ak sa vyžaduje)' },
  slovo: { n: 'čestné vyhlásenie', g: 'čestného vyhlásenia', a: 'čestné vyhlásenie', l: 'čestnom vyhlásení' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Vytlačte vyhlásenie a vlastnoručne ho podpíšte.',
    'Ak inštitúcia vyžaduje osvedčený podpis, podpíšte až pred úradníkom (matrika, obecný úrad) alebo notárom.',
    'Kópiu si nechajte.',
  ],
  kontrola: [
    'Uvádzajte len to, čo je pravda. Nepravdivé čestné vyhlásenie môže mať právne následky (priestupok, v závažných prípadoch aj trestný čin).',
    'Najprv zistite, či inštitúcia nemá vlastný formulár – potom použite ten.',
    'Formulujte konkrétne: kto, čo, odkedy.',
    'Osvedčenie podpisu je potrebné, len ak ho príjemca výslovne vyžaduje.',
  ],
  zdroje: [OZ_SK],
  kroky: [
    {
      id: 'osoba',
      nazev: 'Kto vyhlasuje',
      pole: [
        { id: 'jmeno', typ: 'text', popis: 'Meno a priezvisko', placeholder: 'napr. Jana Kováčová', sirka: 34, autocomplete: 'name' },
        { id: 'narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'adresa', typ: 'text', popis: 'Adresa trvalého pobytu', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
      ],
    },
    {
      id: 'obsah',
      nazev: 'Čo vyhlasujete',
      pole: [
        { id: 'pro', typ: 'text', popis: 'Pre koho (nepovinné)', placeholder: 'napr. Mestský úrad Senec', sirka: 46 },
        { id: 'ucel', typ: 'text', popis: 'Účel (nepovinné)', sirka: 46 },
        { id: 'text', typ: 'textarea', popis: 'Text vyhlásenia', napoveda: 'Začnite rovno vecou, napr. „že v byte … bývam od 1. 1. 2025“.', placeholder: 'že ku dnešnému dňu nemám žiadne nedoplatky voči Mestskému úradu Senec.', sirka: 70 },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Vyhlasujúci', odstavce: ['{{jmeno}}, dátum narodenia {{narozeni}}, trvale bytom {{adresa}}'] },
    {
      nadpis: 'Vyhlásenie',
      odstavce: [
        'Pre: {{pro}}. Účel: {{ucel}}.',
        'Ja, dolu podpísaný(á), čestne vyhlasujem, {{text}}',
        'Vyhlasujem, že všetky uvedené údaje sú pravdivé a úplné a som si vedomý(á) právnych následkov nepravdivého vyhlásenia.',
      ],
    },
  ],
};
