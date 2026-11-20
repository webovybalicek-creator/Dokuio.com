/**
 * Súhlas vlastníka s prihlásením na trvalý pobyt – Slovensko. § 3 ods. 8 písm. d) zákona č. 253/1998 Z. z.:
 * písomné potvrdenie o súhlase s osvedčeným podpisom vlastníka alebo všetkých spoluvlastníkov budovy alebo jej časti.
 * Netreba, ak sa prihlasuje vlastník, alebo ak vlastníci podpíšu súhlas na prihlasovacom lístku pred zamestnancom ohlasovne.
 * Overené 20. 11. 2026 (Slov-Lex, slovensko.sk). Pri zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { ZAKON_OSVEDCOVANIE_SK, TIP_TOTOZNOST_SK } from './zdroje';

const ZAKON_POBYT = { nazev: 'Zákon č. 253/1998 Z. z. o hlásení pobytu občanov – § 3 (Slov-Lex)', url: 'https://static.slov-lex.sk/static/SK/ZZ/1998/253/20261120.html' };
const SK_PRIHLASENIE = { nazev: 'Podanie prihlásenia osobne na ohlasovni (slovensko.sk)', url: 'https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_podanie-prihlasenia-osobne-na/' };

export const suhlasTrvalyPobytSK: Sablona = {
  kod: 'SK-SUHLAS-POBYT',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Súhlas s prihlásením na trvalý pobyt',
  podnadpis: 'písomné potvrdenie vlastníka o súhlase s prihlásením občana na trvalý pobyt podľa § 3 ods. 8 písm. d) zákona č. 253/1998 Z. z.',
  souborPdf: 'suhlas-s-trvalym-pobytom',
  paticka: 'Vytvorené zadarmo · šablóna SK-SUHLAS-POBYT v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'vlastník (osvedčený podpis)', vpravo: 'ďalší spoluvlastník (osvedčený podpis)' },
  slovo: { n: 'súhlas', g: 'súhlasu', a: 'súhlas', l: 'súhlase' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Podpis vlastníka (a všetkých spoluvlastníkov) musí byť osvedčený – na obecnom úrade alebo u notára. Netreba ho, ak vlastníci podpíšu súhlas priamo na prihlasovacom lístku pred zamestnancom ohlasovne.',
  coDal: [
    'Vlastník a všetci spoluvlastníci súhlas podpíšu a dajú si osvedčiť podpis (obec, notár).',
    'Prihlasovaná osoba príde s osvedčeným súhlasom a občianskym preukazom do ohlasovne obce alebo mestskej časti, kde sa prihlasuje.',
    'Prihlásiť sa dá aj elektronicky cez slovensko.sk – podanie treba podpísať kvalifikovaným elektronickým podpisom.',
  ],
  kontrola: [
    'Súhlas dáva vlastník – a ak má nehnuteľnosť viac spoluvlastníkov, všetci. Nájomca súhlas dať nemôže.',
    'Adresa presne podľa evidencie: ulica, súpisné a orientačné číslo, obec a pri bytovom dome číslo bytu. Trvalý pobyt možno mať len v budove so súpisným číslom určenej na bývanie, ubytovanie alebo rekreáciu.',
    'Súhlas netreba, ak sa prihlasuje sám vlastník, alebo ak vlastníci podpíšu súhlas na prihlasovacom lístku priamo v ohlasovni.',
    'Prihlásenie na trvalý pobyt nezakladá žiadne právo k nehnuteľnosti – má len evidenčný charakter.',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [ZAKON_POBYT, SK_PRIHLASENIE, ZAKON_OSVEDCOVANIE_SK],

  kroky: [
    {
      id: 'vlastnik',
      nazev: 'Vlastník',
      popis: 'Súhlas dáva vlastník bytu alebo domu, pri spoluvlastníctve všetci spoluvlastníci.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Meno a priezvisko vlastníka', napoveda: 'Celé meno podľa občianskeho preukazu.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu vlastníka', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'spoluvlastnici', typ: 'textarea', popis: 'Ďalší spoluvlastníci (nepovinné)', napoveda: 'Meno, dátum narodenia a adresa, každý na nový riadok. Podpisujú všetci.', placeholder: 'napr. Mária Nováková, nar. 3. 5. 1980, Hlavná 12, Bratislava', sirka: 64 },
      ],
    },
    {
      id: 'objekt',
      nazev: 'Adresa',
      pole: [
        { id: 'adresa', typ: 'text', popis: 'Adresa bytu alebo domu', napoveda: 'Ulica, súpisné/orientačné číslo, PSČ a obec.', placeholder: 'napr. Štúrova 1025/5, 811 02 Bratislava', sirka: 46 },
        { id: 'byt', typ: 'text', popis: 'Číslo bytu (nepovinné)', napoveda: 'Pri bytovom dome.', placeholder: 'napr. 12', sirka: 6, polovina: true },
      ],
    },
    {
      id: 'prihlasovany',
      nazev: 'Kto sa prihlasuje',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Meno a priezvisko', napoveda: 'Podľa občianskeho preukazu.', placeholder: 'napr. Petra Horváthová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'dalsi', typ: 'textarea', popis: 'Ďalšie prihlasované osoby (nepovinné)', napoveda: 'Napr. deti – meno a dátum narodenia, každé na nový riadok.', placeholder: 'napr. Tomáš Horváth, nar. 3. 5. 2018', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu (obec)', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Vlastník',
      vysvetleni: 'Kto súhlas dáva.',
      odstavce: [
        '{{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvale bytom {{p_adresa}}, ako vlastník (spoluvlastník) nehnuteľnosti uvedenej nižšie',
        'Ďalší spoluvlastníci: {{spoluvlastnici}}',
      ],
    },
    {
      nadpis: 'Súhlas',
      vysvetleni: 'Samotný súhlas. Nezakladá právo v byte bývať.',
      odstavce: [
        'súhlasím s prihlásením na trvalý pobyt na adrese {{adresa}}, číslo bytu {{byt}}, týchto osôb:',
        '{{k_jmeno}}, dátum narodenia {{k_narozeni}}',
        'Ďalšie osoby: {{dalsi}}',
        'Toto potvrdenie vydávam podľa § 3 ods. 8 písm. d) zákona č. 253/1998 Z. z. o hlásení pobytu občanov Slovenskej republiky a registri obyvateľov Slovenskej republiky. Beriem na vedomie, že prihlásenie na trvalý pobyt má len evidenčný charakter a nezakladá žiadne právo k nehnuteľnosti.',
      ],
    },
  ],
};
