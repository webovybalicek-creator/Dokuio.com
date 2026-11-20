/**
 * Súhlas zákonného zástupcu s cestou maloletého dieťaťa do zahraničia – Slovensko.
 * slovensko.sk (Cestovný pas pre deti – praktická rada): písomný súhlas sa odporúča, ak dieťa cestuje bez rodičov;
 * formu, jazyk a overenie podpisu si treba overiť na zastupiteľskom úrade cieľového štátu.
 * Osvedčenie podpisu: obec a okresný úrad neosvedčia podpis na listine na použitie v cudzine ani v cudzom jazyku
 * (§ 10 písm. c) a d) zák. č. 78/2026 Z. z.); na použitie v cudzine osvedčuje podpis notár (§ 58 ods. 5 Notárskeho poriadku).
 * Vysťahovanie dieťaťa do cudziny je podstatná vec (§ 35 zák. č. 36/2005 Z. z.) – vzor je len na cesty.
 * Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { SK_CESTOVNY_PAS_DETI, ZAKON_OSVEDCOVANIE_SK, NOTARSKY_PORIADOK_SK, ZAKON_O_RODINE_SK } from './zdroje';

export const suhlasSVycestovanimDietata: Sablona = {
  kod: 'SK-SUHLAS-CESTA-DIETA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Súhlas s vycestovaním dieťaťa do zahraničia',
  podnadpis: 'súhlas zákonného zástupcu s cestou maloletého dieťaťa do zahraničia',
  souborPdf: 'suhlas-s-vycestovanim-dietata',
  paticka: 'Vytvorené zadarmo · šablóna SK-SUHLAS-CESTA-DIETA v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zákonný zástupca 1 (podpis osvedčený notárom)', vpravo: 'zákonný zástupca 2 (podpis osvedčený notárom)' },
  slovo: { n: 'súhlas', g: 'súhlasu', a: 'súhlas', l: 'súhlase' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Súhlas sa používa v zahraničí. Podpis na listine určenej do cudziny obec ani okresný úrad neosvedčia – osvedčuje ho notár. Preto súhlas na obrazovke nepodpisujte: podpíšte ho až pred notárom, ak cieľová krajina osvedčený podpis vyžaduje.',
  coDal: [
    'Na zastupiteľskom úrade cieľovej krajiny (a krajín, cez ktoré sa cestuje) si overte, či súhlas vyžadujú, v akom jazyku a či s osvedčeným podpisom.',
    'Ak treba osvedčený podpis, podpíšte súhlas až u notára. Obec ani okresný úrad podpis na listine do cudziny neosvedčia.',
    'Dieťa alebo sprievod nesie originál súhlasu a platný cestovný doklad dieťaťa; kópia rodného listu pomôže preukázať vzťah k dieťaťu.',
    'Telefón zákonného zástupcu majte počas cesty zapnutý – v súhlase je uvedený pre kontrolu na hranici alebo letisku.',
  ],
  kontrola: [
    'Písomný súhlas zákonného zástupcu sa odporúča, keď dieťa cestuje do zahraničia bez rodičov – napríklad so starými rodičmi. Niektoré krajiny ho vyžadujú ([slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_cestovny-pas-pre-deti)).',
    'Formu súhlasu, jazyk a to, či musí byť podpis osvedčený, vám povie zastupiteľský úrad cieľovej krajiny. Pozrite si aj stránku MZVaEZ SR [Cestovanie s maloletými deťmi](https://www.mzv.sk/web/sk/staty/cestovanie-s-maloletymi-detmi).',
    'Obec ani okresný úrad neosvedčia podpis na listine, ktorá sa má použiť v cudzine, ani na listine v cudzom jazyku okrem češtiny (§ 10 zákona č. 78/2026 Z. z.). Na použitie v cudzine osvedčuje podpis notár (§ 58 ods. 5 Notárskeho poriadku).',
    'Mená a čísla dokladov dieťaťa aj sprievodu prepíšte presne podľa cestovných dokladov.',
    'Uveďte konkrétnu krajinu a termín cesty – všeobecný súhlas „kamkoľvek a kedykoľvek“ môže byť pri kontrole odmietnutý.',
    'Vzor je na cesty. Vysťahovanie dieťaťa do cudziny je podstatná vec, pri ktorej rozhoduje súd, ak sa rodičia nedohodnú (§ 35 zákona č. 36/2005 Z. z. o rodine).',
  ],
  zdroje: [SK_CESTOVNY_PAS_DETI, ZAKON_OSVEDCOVANIE_SK, NOTARSKY_PORIADOK_SK, ZAKON_O_RODINE_SK],

  kroky: [
    {
      id: 'rodicia',
      nazev: 'Zákonní zástupcovia',
      popis: 'Spravidla rodičia. Ak dieťa sprevádza jeden z rodičov, stačí súhlas druhého.',
      pole: [
        { id: 'r1_jmeno', typ: 'text', popis: 'Zákonný zástupca 1 – meno a priezvisko', napoveda: 'Rodič alebo iný zákonný zástupca (napr. poručník ustanovený súdom).', placeholder: 'napr. Jana Nováková', sirka: 34, autocomplete: 'name' },
        { id: 'r1_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'r1_doklad', typ: 'text', popis: 'Číslo občianskeho preukazu alebo pasu', napoveda: 'Pomôže overiť totožnosť pri kontrole.', placeholder: 'napr. EA123456', sirka: 14, polovina: true },
        { id: 'r1_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', napoveda: 'Podľa občianskeho preukazu.', placeholder: 'napr. Mierová 25, 821 05 Bratislava', sirka: 46 },
        { id: 'r1_telefon', typ: 'text', popis: 'Telefón', napoveda: 'S predvoľbou +421, aby vás mohli z hranice alebo letiska kontaktovať.', placeholder: 'napr. +421 905 123 456', sirka: 18, polovina: true },
        { id: 'r2_jmeno', typ: 'text', popis: 'Zákonný zástupca 2 – meno a priezvisko (nepovinné)', napoveda: 'Druhý rodič. Ak s dieťaťom cestuje, súhlas podpisovať nemusí – nechajte prázdne.', placeholder: 'napr. Peter Novák', sirka: 34 },
        { id: 'r2_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'r2_doklad', typ: 'text', popis: 'Číslo občianskeho preukazu alebo pasu', napoveda: 'Podľa dokladu druhého rodiča.', placeholder: 'napr. EB654321', sirka: 14, polovina: true },
        { id: 'r2_telefon', typ: 'text', popis: 'Telefón', napoveda: 'S predvoľbou +421.', placeholder: 'napr. +421 905 654 321', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'dieta',
      nazev: 'Dieťa',
      pole: [
        { id: 'd_jmeno', typ: 'text', popis: 'Meno a priezvisko dieťaťa', napoveda: 'Presne podľa cestovného dokladu dieťaťa.', placeholder: 'napr. Tomáš Novák', sirka: 34 },
        { id: 'd_narozeni', typ: 'datum', popis: 'Dátum narodenia dieťaťa', napoveda: 'Podľa cestovného dokladu.', sirka: 14, polovina: true },
        { id: 'd_doklad', typ: 'text', popis: 'Číslo cestovného dokladu dieťaťa', napoveda: 'Pas alebo občiansky preukaz, s ktorým dieťa cestuje.', placeholder: 'napr. BA1234567', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'cesta',
      nazev: 'Cesta',
      pole: [
        {
          id: 'sprievod',
          typ: 'volba',
          popis: 'S kým dieťa cestuje',
          napoveda: 'Sprievod musí byť v súhlase uvedený menovite.',
          moznosti: [
            { hodnota: 'rodic', popis: 'S druhým rodičom' },
            { hodnota: 'ina', popis: 'S inou osobou (starý rodič, príbuzný, vedúci tábora…)' },
            { hodnota: 'samo', popis: 'Samo (napr. let so sprievodom leteckej spoločnosti)' },
          ],
        },
        { id: 'o_jmeno', typ: 'text', popis: 'Sprievod – meno a priezvisko', napoveda: 'Kto s dieťaťom cestuje.', placeholder: 'napr. Mária Nováková', sirka: 34, zobrazitKdyz: { pole: 'sprievod', je: ['rodic', 'ina'] } },
        { id: 'o_narozeni', typ: 'datum', popis: 'Dátum narodenia sprievodu', napoveda: 'Podľa dokladu sprievodu.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sprievod', je: ['rodic', 'ina'] } },
        { id: 'o_doklad', typ: 'text', popis: 'Číslo dokladu sprievodu', napoveda: 'Pas alebo občiansky preukaz, s ktorým sprievod cestuje.', placeholder: 'napr. EC112233', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sprievod', je: ['rodic', 'ina'] } },
        { id: 'o_vztah', typ: 'text', popis: 'Vzťah k dieťaťu', napoveda: 'Napr. stará mama, teta, vedúci tábora.', placeholder: 'napr. stará mama', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'sprievod', je: 'ina' } },
        { id: 'krajina', typ: 'text', popis: 'Cieľová krajina (a tranzitné krajiny)', napoveda: 'Všetky krajiny, kam dieťa ide alebo cez ktoré prechádza. Podmienky každej si overte.', placeholder: 'napr. Chorvátsko (cez Maďarsko)', sirka: 46 },
        { id: 'od', typ: 'datum', popis: 'Odchod', napoveda: 'Dátum odchodu.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Návrat', napoveda: 'Dátum návratu.', sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: 'Účel cesty (nepovinné)', napoveda: 'Napr. dovolenka, tábor, výmenný pobyt.', placeholder: 'napr. letná dovolenka', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu (obec)', napoveda: 'Predvyplníme podľa adresy zákonného zástupcu.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', napoveda: 'Predvyplnili sme dnešok. Pri osvedčení podpisu u notára ho môžete dopísať rukou.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zákonní zástupcovia',
      vysvetleni: 'Kto súhlas dáva. Telefón pomôže úradníkom na hranici alebo letisku.',
      odstavce: [
        '{{r1_jmeno}}, dátum narodenia {{r1_narozeni}}, číslo dokladu {{r1_doklad}}, trvalý pobyt {{r1_adresa}}, telefón {{r1_telefon}}',
        '{{r2_jmeno}}, dátum narodenia {{r2_narozeni}}, číslo dokladu {{r2_doklad}}, telefón {{r2_telefon}}',
      ],
    },
    {
      nadpis: 'Súhlas',
      vysvetleni: 'S kým a kam dieťa smie cestovať. Čím konkrétnejšie, tým menej otázok pri kontrole.',
      odstavce: [
        'ako zákonný zástupca (zákonní zástupcovia) súhlasím (súhlasíme), aby maloleté dieťa',
        '{{d_jmeno}}, dátum narodenia {{d_narozeni}}, číslo cestovného dokladu {{d_doklad}},',
        {
          volba: 'sprievod',
          uvodVzor: 'vycestovalo (zaškrtnite):',
          moznosti: {
            rodic: 'vycestovalo v sprievode druhého rodiča {{o_jmeno}}, dátum narodenia {{o_narozeni}}, číslo dokladu {{o_doklad}},',
            ina: 'vycestovalo v sprievode {{o_jmeno}}, dátum narodenia {{o_narozeni}}, číslo dokladu {{o_doklad}} ({{o_vztah}}),',
            samo: 'vycestovalo samo,',
          },
        },
        'do krajiny: {{krajina}}, v čase od {{od}} do {{do}}, za účelom: {{ucel}}.',
        'Počas cesty poverujem (poverujeme) sprievod starostlivosťou o dieťa a robením nevyhnutných rozhodnutí v jeho záujme vrátane súhlasu s nevyhnutnou zdravotnou starostlivosťou.',
      ],
    },
  ],
};
