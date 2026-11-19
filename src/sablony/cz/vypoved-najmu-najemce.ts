/**
 * Výpověď nájmu bytu nájemcem – Česko. § 2231 a § 2286, § 2287 OZ: tříměsíční výpovědní doba
 * od prvního dne měsíce následujícího po doručení; u nájmu na dobu určitou jen při změně okolností.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, OCHRANCE_NAJEM } from './zdroje';

export const vypovedNajmuNajemce: Sablona = {
  kod: 'CZ-VYPOVED-NAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Výpověď z nájmu bytu',
  podnadpis: 'výpověď nájemce podle zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'vypoved-z-najmu',
  paticka: 'Vytvořeno zdarma · šablona CZ-VYPOVED-NAJEM v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'nájemce', vpravo: 'převzal pronajímatel (datum a podpis)' },
  slovo: { n: 'výpověď', g: 'výpovědi', a: 'výpověď', l: 'výpovědi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Výpověď doručte pronajímateli tak, abyste to mohli prokázat: doporučeně s dodejkou, nebo osobně proti podpisu na kopii.',
    'Výpovědní doba (3 měsíce) začne prvním dnem měsíce po doručení. Doručení na konci měsíce = o měsíc dřív konec.',
    'Domluvte termín předání bytu a sepište předávací protokol.',
    'Nájemné platíte až do konce výpovědní doby. Jistotu vám pronajímatel vrátí po skončení nájmu.',
    'Chcete skončit dřív? Zkuste s pronajímatelem dohodu o skončení nájmu.',
  ],
  kontrola: [
    'Výpověď musí být písemná a musí pronajímateli dojít – rozhoduje doručení, ne odeslání.',
    'Nájem na dobu neurčitou můžete vypovědět bez udání důvodu, výpovědní doba je 3 měsíce.',
    'Nájem na dobu určitou lze vypovědět jen při změně okolností, kvůli které nelze rozumně chtít, abyste v nájmu pokračovali (např. nová práce v jiném městě) – důvod popište.',
    'Výpovědní doba nesmí být smlouvou delší, než stanoví zákon.',
    'Podepisují všichni nájemci (u spolunájmu i manželé).',
  ],
  zdroje: [OZ, OCHRANCE_NAJEM],

  kroky: [
    {
      id: 'strany',
      nazev: 'Nájemce a pronajímatel',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Nájemce – jméno a příjmení', napoveda: 'Jak je uvedeno v nájemní smlouvě. Více nájemců uveďte všechny.', placeholder: 'např. Petra Svobodová', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon nebo e-mail', napoveda: 'Pro domluvu předání bytu.', placeholder: 'např. petra@email.cz', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Pronajímatel – jméno a příjmení', napoveda: 'Komu výpověď doručujete.', placeholder: 'např. Jan Novák', sirka: 34 },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa pronajímatele', napoveda: 'Adresa pro doručení (ze smlouvy).', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'najem',
      nazev: 'Nájem',
      pole: [
        { id: 'byt', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Podle nájemní smlouvy.', placeholder: 'např. Masarykova 1025/5, Říčany, byt č. 12', sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum nájemní smlouvy', napoveda: 'Kdy jste smlouvu podepsali.', sirka: 14, polovina: true },
        {
          id: 'doba',
          typ: 'volba',
          popis: 'Nájem je sjednán',
          napoveda: 'Najdete ve smlouvě. Na dobu určitou má smlouva datum konce.',
          moznosti: [
            { hodnota: 'neurcita', popis: 'Na dobu neurčitou' },
            { hodnota: 'urcita', popis: 'Na dobu určitou' },
          ],
        },
        { id: 'duvod', typ: 'textarea', popis: 'Změna okolností (důvod)', napoveda: 'Co se změnilo od uzavření smlouvy, že nemůžete v nájmu pokračovat. Konkrétně, ideálně s datem.', placeholder: 'např. od 1. 2. 2027 nastupuji do zaměstnání v Ostravě', sirka: 64, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'ucet', typ: 'text', popis: 'Účet pro vrácení jistoty (nepovinné)', napoveda: 'Kam vám má pronajímatel vrátit kauci.', placeholder: '123456789/0100', sirka: 24 },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Kde výpověď podepisujete.', placeholder: 'např. Říčany', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Pronajímatel',
      vysvetleni: 'Komu výpověď doručujete.',
      odstavce: ['{{p_jmeno}}, {{p_adresa}}'],
    },
    {
      nadpis: 'Výpověď z nájmu bytu',
      vysvetleni: 'Samotná výpověď. Výpovědní doba je 3 měsíce od prvního dne měsíce po doručení.',
      odstavce: [
        'Já, {{k_jmeno}}, datum narození {{k_narozeni}}, kontakt {{k_kontakt}}, jako nájemce bytu {{byt}} podle nájemní smlouvy ze dne {{smlouva_datum}},',
        {
          volba: 'doba',
          uvodVzor: 'vypovídám nájem (zaškrtněte jednu možnost):',
          moznosti: {
            neurcita: 'vypovídám nájem sjednaný na dobu neurčitou podle § 2231 občanského zákoníku.',
            urcita: 'vypovídám nájem sjednaný na dobu určitou podle § 2287 občanského zákoníku, neboť se změnily okolnosti, z nichž strany při vzniku nájmu zřejmě vycházely, a to: {{duvod}}',
          },
        },
        'Výpovědní doba je tříměsíční a počíná běžet prvním dnem kalendářního měsíce následujícího po doručení této výpovědi.',
        'Žádám o domluvu termínu předání bytu a o vrácení jistoty s úroky po skončení nájmu na účet č. {{ucet}}.',
      ],
    },
  ],
};
