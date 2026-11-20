/**
 * Uznání dluhu – Česko. § 2053 OZ (písemné uznání co do důvodu i výše), § 639 OZ (promlčení za 10 let).
 * Volitelně dohoda o splátkách. Bez smluvních pokut.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, NEPLATNE_DOKLADY, TIP_TOTOZNOST } from './zdroje';
import { naDatum, pridejPracovniDny, pridejDny, pridejMesice, isoDatum, cislo, splatkovyKalendar, pripominkySplatek } from '../terminy';

export const uznaniDluhu: Sablona = {
  kod: 'CZ-UZNANI-DLUHU',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-19',
  prilohy: (d) => (d.splaceni === 'splatky' ? splatkovyKalendar(d) : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Splátka dluhu') : []),
    ...(d.splaceni === 'naraz' && typeof d.zaplatit_do === 'string' && d.zaplatit_do ? [{ nazev: 'Splatnost dluhu', datum: d.zaplatit_do }] : []),
  ],
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Uznání dluhu',
  podnadpis: 'podle § 2053 zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'uznani-dluhu',
  paticka: 'Vytvořeno zdarma · šablona CZ-UZNANI-DLUHU v1.1 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'dlužník', vpravo: 'věřitel (souhlas se splátkami)' },
  slovo: { n: 'uznání dluhu', g: 'uznání dluhu', a: 'uznání dluhu', l: 'uznání dluhu' },
  coDal: [
    'Vytiskněte uznání dvakrát. Dlužník musí podepsat – bez jeho podpisu uznání neplatí.',
    'Originál s podpisem dlužníka si nechá věřitel.',
    'Splátky v hotovosti si nechte potvrzovat, převody mají jako důkaz výpis z účtu.',
    'Od podpisu běží nová promlčecí lhůta 10 let – originál pečlivě uschovejte.',
  ],
  kontrola: [
    'Uznání musí být písemné a musí uvádět důvod dluhu i jeho výši – obojí v dokumentu je.',
    'Podpis dlužníka vlastní rukou (nebo platným elektronickým podpisem). Bez podpisu dlužníka nemá uznání účinky.',
    'Důvod dluhu konkrétně: z jaké smlouvy nebo události a z kterého dne.',
    TIP_TOTOZNOST,
    'Uznáním začíná běžet nová promlčecí lhůta 10 let; když dlužník určí termín splacení, běží 10 let od tohoto termínu.',
    'Jako věřitel nevyhrožujte ani netlačte – uznání vynucené nátlakem lze napadnout.',
  ],
  zdroje: [OZ, NEPLATNE_DOKLADY],

  kroky: [
    {
      id: 'strany',
      nazev: 'Dlužník a věřitel',
      popis: 'Dlužník je ten, kdo dluží a dluh uznává. Věřitel je ten, komu dluží.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Dlužník – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu.', placeholder: 'např. Petr Dvořák', sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození dlužníka', napoveda: 'Pomůže dlužníka jednoznačně určit, kdyby se dluh vymáhal.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dlužníka', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Věřitel – jméno a příjmení', napoveda: 'Komu dlužník dluží.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození věřitele', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa věřitele', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'dluh',
      nazev: 'Dluh',
      popis: 'Zákon vyžaduje, aby bylo jasné, z čeho dluh vznikl a kolik činí.',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Výše dluhu (Kč)', napoveda: 'Kolik dlužník dnes dluží (zbývající částka). Slovy doplníme sami.', placeholder: 'např. 40000', sirka: 14, polovina: true },
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Z čeho dluh vznikl',
          napoveda: 'Vyberte nejbližší možnost a upřesněte ji níže.',
          moznosti: [
            { hodnota: 'zapujcka', popis: 'Půjčené peníze (zápůjčka)' },
            { hodnota: 'kupni', popis: 'Nezaplacená kupní cena' },
            { hodnota: 'skoda', popis: 'Náhrada škody' },
            { hodnota: 'jine', popis: 'Jiný důvod' },
          ],
        },
        { id: 'duvod_popis', typ: 'text', popis: 'Upřesnění důvodu', napoveda: 'Např. „smlouva o zápůjčce ze dne 3. 3. 2026“ nebo „kupní cena za auto Škoda Fabia podle smlouvy ze dne …“.', placeholder: 'např. smlouva o zápůjčce ze dne 3. 3. 2026', sirka: 56 },
      ],
    },
    {
      id: 'splaceni',
      nazev: 'Splacení',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Jak dlužník zaplatí',
          napoveda: 'Termín nebo splátky nejsou povinné, ale pomáhají oběma – je jasné, co a kdy.',
          moznosti: [
            { hodnota: 'naraz', popis: 'Najednou do určitého data' },
            { hodnota: 'splatky', popis: 'V měsíčních splátkách' },
            { hodnota: 'bez', popis: 'Bez termínu (jen uznání)' },
          ],
        },
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zaplatit nejpozději do', napoveda: 'Poslední den splatnosti.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Měsíční splátka (Kč)', napoveda: 'Poslední splátka může být nižší.', placeholder: 'např. 5000', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Den v měsíci', napoveda: 'Do kterého dne v měsíci má splátka přijít.', placeholder: 'např. 15', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Měsíc první splátky', napoveda: 'Vyberte libovolný den v měsíci, kdy se začne splácet.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet', typ: 'text', popis: 'Účet věřitele (nepovinné)', napoveda: 'Kam má dlužník platit. Převod je nejlépe doložitelný.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'splaceni', je: ['naraz', 'splatky'] } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy dlužníka.', placeholder: 'např. Brno', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek. Od tohoto dne běží nová promlčecí lhůta.', sirka: 14, polovina: true, vychozi: 'dnes' },
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
      nadpis: 'Strany',
      vysvetleni: 'Kdo dluží a komu.',
      odstavce: [
        '**Dlužník:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „dlužník“)',
        '**Věřitel:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „věřitel“)',
      ],
    },
    {
      nadpis: 'Uznání dluhu',
      vysvetleni: 'Dlužník písemně potvrzuje důvod i výši dluhu. Tím se dluh považuje za prokázaný a běží nová desetiletá promlčecí lhůta.',
      odstavce: [
        'Dlužník uznává, že dluží věřiteli částku {{castka}} (slovy: {{castka_slovy}}).',
        {
          volba: 'duvod',
          uvodVzor: 'Důvod dluhu (zaškrtněte jednu možnost):',
          uvod: 'Dluh vznikl z tohoto důvodu:',
          moznosti: {
            zapujcka: 'zápůjčka peněz – {{duvod_popis}}.',
            kupni: 'nezaplacená kupní cena – {{duvod_popis}}.',
            skoda: 'náhrada škody – {{duvod_popis}}.',
            jine: '{{duvod_popis}}.',
          },
        },
        'Dlužník prohlašuje, že dluh co do důvodu i výše uznává podle § 2053 občanského zákoníku.',
      ],
    },
    {
      nadpis: 'Splacení',
      vysvetleni: 'Kdy a jak dlužník zaplatí. Předčasné splacení je vždy možné.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Splacení (zaškrtněte jednu možnost):',
          moznosti: {
            naraz: 'Dlužník zaplatí dluh najednou nejpozději do {{zaplatit_do}}.',
            splatky: 'Dlužník bude dluh splácet v měsíčních splátkách ve výši {{splatka}}, splatných vždy do {{splatka_den}}. dne v měsíci, poprvé v měsíci {{prvni_mesic}}, až do úplného zaplacení. Věřitel s tímto splácením souhlasí.',
            bez: 'Termín splacení se touto listinou neurčuje.',
          },
        },
        {
          volba: 'splaceni',
          kdyz: { pole: 'splaceni', je: ['naraz', 'splatky'] },
          uvodVzor: 'Platby:',
          moznosti: {
            naraz: 'Platby budou připsány na účet věřitele č. {{ucet}}, případně předány v hotovosti proti písemnému potvrzení.',
            splatky: 'Platby budou připsány na účet věřitele č. {{ucet}}, případně předány v hotovosti proti písemnému potvrzení. Nezaplatí-li dlužník kteroukoli splátku ani do 14 dnů po její splatnosti, má věřitel právo požadovat zaplacení celého zbytku dluhu (§ 1931 občanského zákoníku). Toto právo uplatní písemnou výzvou doručenou dlužníkovi nejpozději do splatnosti nejblíže příští splátky; zbytek dluhu je pak splatný do 30 dnů od doručení výzvy.',
          },
        },
        'Dlužník může dluh zaplatit i dříve, celý nebo zčásti.',
      ],
    },
  ],
};
