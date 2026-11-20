/**
 * Dohoda o splátkách (splátkový kalendář existujícího dluhu) – Česko. Dvoustranná dohoda věřitele a dlužníka.
 * Ověřeno: § 1931 OZ (ztráta výhody splátek jen je-li ujednána; věřitel ji uplatní nejpozději do splatnosti
 * nejblíže příští splátky), § 1932 (pořadí započtení plnění), volitelně uznání dluhu § 2053 a § 639 OZ.
 * Liší se od `uznani-dluhu`: podepisují obě strany, splátky jsou jádrem dohody a věřitel se jimi zavazuje.
 * Bez smluvních pokut; při prodlení platí zákonný úrok z prodlení.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, NV_UROK, TIP_TOTOZNOST } from './zdroje';
import { splatkovyKalendar, pripominkySplatek } from '../terminy';

export const dohodaOSplatkach: Sablona = {
  kod: 'CZ-DOHODA-SPLATKY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Dohoda o splátkách dluhu',
  podnadpis: 'dohoda o splacení dluhu ve splátkách podle zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'dohoda-o-splatkach',
  paticka: 'Vytvořeno zdarma · šablona CZ-DOHODA-SPLATKY v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'věřitel', vpravo: 'dlužník' },
  slovo: { n: 'dohoda', g: 'dohody', a: 'dohodu', l: 'dohodě' },
  prilohy: (d) => splatkovyKalendar(d, d.urok === 'ano' ? 'Tabulka uvádí jen dluh bez úroku. Úrok se platí podle dohody.' : undefined),
  pripominky: (d) => pripominkySplatek(d, 'Splátka dluhu'),
  coDal: [
    'Vytiskněte dohodu dvakrát. Podepíší ji věřitel i dlužník, každý si nechá jeden výtisk.',
    'Splátkový kalendář je přílohou – zkontrolujte, že sedí počet splátek a poslední částka.',
    'Splátky posílejte převodem s poznámkou (např. „splátka 3/10“). Hotovost si nechte vždy písemně potvrdit.',
    'Když dlužník splátku nezaplatí, věřitel musí o zaplacení celého zbytku písemně požádat nejpozději do splatnosti nejbližší další splátky.',
    'Po zaplacení poslední splátky si dlužník může vyžádat potvrzení, že je dluh splacený.',
  ],
  kontrola: [
    TIP_TOTOZNOST,
    'Výše dluhu = kolik dlužník dluží ke dni podpisu (po odečtení toho, co už zaplatil). Důvod popište konkrétně: z jaké smlouvy, faktury nebo události.',
    'Ztráta výhody splátek platí, jen když je v dohodě výslovně sjednaná – v dohodě je. Věřitel ji musí uplatnit nejpozději do splatnosti nejbližší další splátky (§ 1931 občanského zákoníku).',
    'Zaškrtnuté uznání dluhu prodlouží promlčecí lhůtu na 10 let. Uznání musí být písemné a uvádět důvod i výši dluhu – obojí v dohodě je.',
    'Úrok je nepovinný a musí být přiměřený. Při zpoždění platí zákonný úrok z prodlení podle [nařízení vlády č. 351/2013 Sb.](https://www.e-sbirka.cz/sb/2013/351).',
    'Splátky ve výši, kterou dlužník reálně zvládne – nesplnitelný kalendář nepomůže nikomu.',
    'Peníze teprve půjčujete? Pak použijte smlouvu o zápůjčce, ne tuto dohodu.',
  ],
  zdroje: [OZ, NV_UROK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Věřitel a dlužník',
      popis: 'Věřitel je ten, komu se dluží. Dlužník je ten, kdo bude splácet. Dohodu podepisují oba.',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Věřitel – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu (u firmy název a IČO).', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození věřitele', napoveda: 'Podle občanského průkazu. Rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa věřitele', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: 'Dlužník – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu.', placeholder: 'např. Petr Dvořák', sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození dlužníka', napoveda: 'Pomůže dlužníka jednoznačně určit, kdyby se dluh vymáhal.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dlužníka', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'dluh',
      nazev: 'Dluh',
      popis: 'Jaký dluh se bude splácet. Musí už existovat – dohoda mění jen to, jak se zaplatí.',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Dlužná částka ke dni podpisu (Kč)', napoveda: 'Kolik zbývá zaplatit. Slovy doplníme sami. Podle ní se sestaví splátkový kalendář.', placeholder: 'např. 36000', sirka: 14, polovina: true },
        { id: 'duvod', typ: 'text', popis: 'Z čeho dluh vznikl', napoveda: 'Konkrétně: smlouva, faktura nebo událost a její datum.', placeholder: 'např. nezaplacená faktura č. 2026015 ze dne 3. 3. 2026', sirka: 56 },
        {
          id: 'uznani',
          typ: 'volba',
          popis: 'Dlužník dluh zároveň uznává?',
          napoveda: 'Doporučujeme ano: má se pak za to, že dluh existuje, a promlčecí lhůta je 10 let.',
          moznosti: [
            { hodnota: 'ano', popis: 'Ano, dlužník dluh uznává co do důvodu i výše' },
            { hodnota: 'ne', popis: 'Ne, jen se dohodneme na splátkách' },
          ],
        },
      ],
    },
    {
      id: 'splatky',
      nazev: 'Splátky',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Měsíční splátka (Kč)', napoveda: 'Poslední splátka může být nižší – dopočítáme ji.', placeholder: 'např. 3000', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Den v měsíci', napoveda: 'Do kterého dne v měsíci musí splátka přijít, např. 15.', placeholder: 'např. 15', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Měsíc první splátky', napoveda: 'Vyberte libovolný den v měsíci, kdy se začne splácet.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Účet věřitele', napoveda: 'Kam se platí. Převod je nejlépe doložitelný.', placeholder: '123456789/0100', sirka: 24, polovina: true },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Platí se úrok ze splátek?',
          napoveda: 'Mezi známými se obvykle splácí bez úroku. Úrok musí být přiměřený.',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez úroku' },
            { hodnota: 'ano', popis: 'S úrokem' },
          ],
        },
        { id: 'urok_sazba', typ: 'cislo', popis: 'Úroková sazba (% ročně)', napoveda: 'Roční sazba z dosud nesplacené částky, např. 4.', placeholder: 'např. 4', jednotka: '% ročně', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
        {
          id: 'tolerance',
          typ: 'volba',
          popis: 'Kdy ztratí dlužník výhodu splátek',
          napoveda: 'Když dlužník nezaplatí, může věřitel chtít celý zbytek najednou. Tolerance 14 dnů odpustí drobné zpoždění.',
          moznosti: [
            { hodnota: 'ihned', popis: 'Při zpoždění kterékoli splátky' },
            { hodnota: 'dny14', popis: 'Když splátka nepřijde ani do 14 dnů po splatnosti' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy věřitele.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => castkaSlovy(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${Number(m[2])}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo komu dluží. Přesné údaje jsou důležité, kdyby se dluh musel vymáhat.',
      odstavce: [
        '**Věřitel:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „věřitel“)',
        '**Dlužník:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „dlužník“)',
      ],
    },
    {
      nadpis: 'Dluh',
      vysvetleni: 'Jaký dluh se splácí a kolik ke dni podpisu zbývá.',
      odstavce: [
        'Dlužník dluží věřiteli ke dni podpisu této dohody částku {{castka}} (slovy: {{castka_slovy}}). Dluh vznikl z tohoto důvodu: {{duvod}}.',
        {
          volba: 'uznani',
          uvodVzor: 'Uznání dluhu (zaškrtněte jednu možnost):',
          moznosti: {
            ano: 'Dlužník tento dluh co do důvodu i výše uznává podle § 2053 občanského zákoníku.',
            ne: 'Strany se touto dohodou dohodly pouze na způsobu splacení dluhu.',
          },
        },
      ],
    },
    {
      nadpis: 'Splátky',
      vysvetleni: 'Věřitel souhlasí, že dluh nemusí být zaplacen najednou, a dlužník se zavazuje platit pravidelné splátky podle kalendáře v příloze.',
      odstavce: [
        'Strany se dohodly, že dlužník zaplatí dluh v pravidelných měsíčních splátkách ve výši {{splatka}}, splatných vždy do {{splatka_den}}. dne v kalendářním měsíci, poprvé v měsíci {{prvni_mesic}}, až do úplného zaplacení. Poslední splátka může být nižší. Přehled splátek je v příloze.',
        'Splátky se platí na účet věřitele č. {{ucet}}; splátka je zaplacena připsáním na tento účet. Platbu v hotovosti věřitel dlužníkovi vždy písemně potvrdí.',
        {
          volba: 'urok',
          uvodVzor: 'Úrok (zaškrtněte jednu možnost):',
          moznosti: {
            ne: 'Ze splátek se neplatí úrok.',
            ano: 'Dlužník zaplatí z dosud nesplacené části dluhu úrok ve výši {{urok_sazba}}, splatný spolu s jednotlivými splátkami.',
          },
        },
        'Dokud dlužník splácí řádně a včas, nebude věřitel požadovat zaplacení dluhu najednou. Dlužník může dluh zaplatit i dříve, celý nebo zčásti.',
      ],
    },
    {
      nadpis: 'Ztráta výhody splátek',
      vysvetleni: 'Co se stane, když dlužník přestane platit: věřitel může chtít celý zbytek dluhu najednou.',
      odstavce: [
        {
          volba: 'tolerance',
          uvodVzor: 'Kdy (zaškrtněte jednu možnost):',
          moznosti: {
            ihned: 'Nezaplatí-li dlužník kteroukoli splátku řádně a včas, má věřitel právo požadovat zaplacení celého dosud nesplaceného dluhu (§ 1931 občanského zákoníku).',
            dny14: 'Nezaplatí-li dlužník kteroukoli splátku ani do 14 dnů po její splatnosti, má věřitel právo požadovat zaplacení celého dosud nesplaceného dluhu (§ 1931 občanského zákoníku).',
          },
        },
        'Věřitel toto právo uplatní písemnou výzvou doručenou dlužníkovi nejpozději do splatnosti nejblíže příští splátky. Celý dosud nesplacený dluh je pak splatný do 10 dnů od doručení výzvy.',
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      vysvetleni: 'Běžné formální body: kolik výtisků a odkdy dohoda platí.',
      odstavce: [
        'Práva a povinnosti neupravené touto dohodou se řídí zákonem č. 89/2012 Sb., občanský zákoník.',
        'Dohoda je vyhotovena ve dvou stejnopisech, z nichž každá strana obdrží jeden. Příloha č. 1 (splátkový kalendář) je její součástí; při rozporu má přednost text dohody.',
        'Dohoda nabývá platnosti a účinnosti dnem podpisu oběma stranami.',
        'Strany prohlašují, že si dohodu přečetly, jejímu obsahu rozumějí a na důkaz souhlasu ji podepisují.',
      ],
    },
  ],
};
