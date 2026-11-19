/**
 * Výpověď povinného ručení (pojištění odpovědnosti z provozu vozidla) – Česko.
 * Důvody a lhůty podle § 2805 a násl. OZ a § 12 zák. č. 168/1999 Sb. Text je záměrně dopis pojišťovně.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, ZAKON_POV } from './zdroje';

export const vypovedPovinneRuceni: Sablona = {
  kod: 'CZ-VYPOVED-POV',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Výpověď pojištění odpovědnosti z provozu vozidla',
  podnadpis: 'výpověď povinného ručení podle občanského zákoníku a zákona č. 168/1999 Sb.',
  souborPdf: 'vypoved-povinneho-ruceni',
  paticka: 'Vytvořeno zdarma · šablona CZ-VYPOVED-POV v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'pojistník', vpravo: 'převzal za pojistitele (při osobním podání)' },
  slovo: { n: 'výpověď', g: 'výpovědi', a: 'výpověď', l: 'výpovědi' },
  cislovatClanky: false,
  coDal: [
    'Podepište výpověď a pošlete ji doporučeně s dodejkou, nebo ji podejte na pobočce a nechte si potvrdit převzetí.',
    'Lhůta se počítá ode dne, kdy pojišťovna výpověď dostane – ne od odeslání. Neposílejte na poslední chvíli.',
    'Než staré pojištění skončí, sjednejte nové. Auto nesmí být ani den bez povinného ručení, pokud je v registru.',
    'Schovejte si podací lístek a dodejku, dokud vám pojišťovna nepotvrdí zánik.',
  ],
  kontrola: [
    'Číslo pojistné smlouvy a SPZ opište přesně z pojistky nebo zelené karty.',
    'Výpověď ke konci pojistného období musí pojišťovna DOSTAT nejméně 6 týdnů před jeho koncem. Konec období (výročí) najdete v pojistné smlouvě.',
    'Výpověď do 2 měsíců od uzavření má 8denní výpovědní dobu; po pojistné události musíte vypovědět do 3 měsíců od jejího oznámení (výpovědní doba 1 měsíc).',
    'Při prodeji auta přiložte kopii kupní smlouvy. Pojištění zaniká dnem, kdy změnu vlastníka pojišťovně oznámíte.',
    'Nové povinné ručení musí navazovat bez mezery – jízda i jen stání na silnici bez pojištění je přestupek.',
    'Nesouhlas se zvýšením pojistného pošlete do 1 měsíce od doručení oznámení o změně (lhůtu ověřte v pojistných podmínkách).',
    'Podmínky vaší pojišťovny mohou dávat další možnosti (např. online výpověď) – mrkněte do pojistných podmínek.',
  ],
  zdroje: [OZ, ZAKON_POV],

  kroky: [
    {
      id: 'pojistnik',
      nazev: 'Pojistník',
      popis: 'Pojistník je ten, kdo pojistnou smlouvu uzavřel a platí ji – nemusí to být vlastník auta.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Jméno a příjmení pojistníka', napoveda: 'Jak je uvedené v pojistné smlouvě. U firmy název a IČO.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle něj vás pojišťovna dohledá. Rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa, kterou má pojišťovna ve smlouvě (nebo vaše aktuální).', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'Telefon nebo e-mail (nepovinné)', napoveda: 'Pro případ, že by pojišťovna potřebovala něco doplnit.', placeholder: 'např. jan.novak@email.cz', sirka: 30 },
      ],
    },
    {
      id: 'pojisteni',
      nazev: 'Pojišťovna a smlouva',
      popis: 'Údaje najdete v pojistné smlouvě nebo na zelené kartě.',
      pole: [
        { id: 'poj_nazev', typ: 'text', popis: 'Pojišťovna', napoveda: 'Název pojišťovny, např. Kooperativa, ČPP, Allianz, Generali ČP.', placeholder: 'např. Kooperativa pojišťovna, a.s.', sirka: 34 },
        { id: 'poj_adresa', typ: 'text', popis: 'Adresa pojišťovny', napoveda: 'Korespondenční adresa z pojistné smlouvy nebo z webu pojišťovny. Na ni výpověď posílejte.', placeholder: 'např. Pobřežní 665/21, 186 00 Praha 8', sirka: 46 },
        { id: 'cislo_smlouvy', typ: 'text', popis: 'Číslo pojistné smlouvy', napoveda: 'Nejdůležitější údaj – podle něj pojišťovna výpověď přiřadí. Je na smlouvě i na zelené kartě.', placeholder: 'např. 1234567890', sirka: 18, polovina: true },
        { id: 'spz', typ: 'text', popis: 'Registrační značka (SPZ)', napoveda: 'Pomůže pojišťovně ověřit, o které vozidlo jde.', placeholder: 'např. 1AB 2345', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'duvod',
      nazev: 'Důvod výpovědi',
      pole: [
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Proč pojištění končí',
          napoveda: 'Podle důvodu se liší lhůta. Nejčastější je výpověď ke konci pojistného období (výročí) kvůli levnější pojišťovně.',
          moznosti: [
            { hodnota: 'vyroci', popis: 'Ke konci pojistného období (výročí smlouvy)' },
            { hodnota: 'dva_mesice', popis: 'Do 2 měsíců od uzavření smlouvy' },
            { hodnota: 'udalost', popis: 'Po pojistné události (do 3 měsíců od jejího oznámení)' },
            { hodnota: 'prodej', popis: 'Prodej auta / změna vlastníka' },
            { hodnota: 'cena', popis: 'Nesouhlasím se zvýšením pojistného' },
          ],
        },
        { id: 'prodej_datum', typ: 'datum', popis: 'Datum prodeje (převodu) auta', napoveda: 'Den podpisu kupní smlouvy nebo předání auta.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'prodej' } },
        { id: 'udalost_cislo', typ: 'text', popis: 'Číslo pojistné události (nepovinné)', napoveda: 'Číslo škody, které vám pojišťovna přidělila.', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'udalost' } },
        {
          id: 'zadosti',
          typ: 'vice',
          popis: 'Co ještě po pojišťovně chcete',
          napoveda: 'Potvrzení o škodním průběhu budete potřebovat u nové pojišťovny kvůli bonusu. Přeplatek vám pojišťovna vrátí, jen když má kam.',
          moznosti: [
            { hodnota: 'prubeh', popis: 'Potvrzení o škodním průběhu' },
            { hodnota: 'preplatek', popis: 'Vrácení nespotřebovaného pojistného' },
            { hodnota: 'potvrzeni', popis: 'Písemné potvrzení zániku pojištění' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu pro vrácení přeplatku', napoveda: 'Účet pojistníka.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'zadosti', je: 'preplatek' } },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle vaší adresy.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Pojistník',
      vysvetleni: 'Kdo výpověď podává – ten, kdo smlouvu uzavřel.',
      odstavce: ['{{p_jmeno}}, datum narození {{p_narozeni}}, bytem {{p_adresa}}, kontakt: {{p_kontakt}}'],
    },
    {
      nadpis: 'Pojistitel',
      vysvetleni: 'Komu výpověď posíláte.',
      odstavce: ['{{poj_nazev}}, {{poj_adresa}}'],
    },
    {
      nadpis: 'Výpověď',
      vysvetleni: 'Samotná výpověď. Důvod určuje, kdy pojištění skončí.',
      odstavce: [
        'Vypovídám pojistnou smlouvu č. {{cislo_smlouvy}} o pojištění odpovědnosti z provozu vozidla s registrační značkou {{spz}}.',
        {
          volba: 'duvod',
          uvodVzor: 'Důvod (zaškrtněte jednu možnost):',
          moznosti: {
            vyroci: 'Pojištění vypovídám ke konci pojistného období podle občanského zákoníku.',
            dva_mesice: 'Pojištění vypovídám do dvou měsíců ode dne uzavření smlouvy s osmidenní výpovědní dobou podle § 2805 písm. a) občanského zákoníku.',
            udalost: 'Pojištění vypovídám do tří měsíců ode dne oznámení pojistné události (č. {{udalost_cislo}}) s měsíční výpovědní dobou podle § 2805 písm. b) občanského zákoníku.',
            prodej: 'Oznamuji změnu vlastníka vozidla ke dni {{prodej_datum}}; pojištění tím podle zákona č. 168/1999 Sb. zaniká. Přikládám kopii kupní smlouvy.',
            cena: 'Nesouhlasím se změnou výše pojistného, kterou jste mi oznámili. Žádám o ukončení pojištění ke konci běžného pojistného období.',
          },
        },
      ],
    },
    {
      nadpis: 'Další žádosti',
      vysvetleni: 'Co od pojišťovny ještě potřebujete.',
      odstavce: [
        {
          vice: 'zadosti',
          uvod: 'Současně žádám o:',
          moznosti: {
            prubeh: 'vystavení potvrzení o škodním průběhu pojištění',
            preplatek: 'vrácení nespotřebovaného pojistného na účet č. {{ucet}}',
            potvrzeni: 'písemné potvrzení data zániku pojištění',
          },
        },
      ],
    },
  ],
};
