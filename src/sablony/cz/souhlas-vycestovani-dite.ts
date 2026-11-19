/**
 * Souhlas zákonného zástupce s cestou nezletilého dítěte do zahraničí – Česko.
 * Obsah podle doporučení a vzorů MZV ČR (cestování s dětmi). Podmínky cílových zemí se liší –
 * průvodce vede na stránky MZV o jednotlivých státech. Podpis doporučeně úředně ověřený.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { MZV_DETI, MZV_STATY } from './zdroje';

export const souhlasVycestovaniDite: Sablona = {
  kod: 'CZ-SOUHLAS-CESTA-DITE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Souhlas s vycestováním dítěte do zahraničí',
  podnadpis: 'souhlas zákonného zástupce s cestou nezletilého dítěte do zahraničí',
  souborPdf: 'souhlas-s-vycestovanim-ditete',
  paticka: 'Vytvořeno zdarma · šablona CZ-SOUHLAS-CESTA-DITE v1.0 · podle vzorů MZV ČR · nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zákonný zástupce 1 (úředně ověřený podpis)', vpravo: 'zákonný zástupce 2 (úředně ověřený podpis)' },
  slovo: { n: 'souhlas', g: 'souhlasu', a: 'souhlas', l: 'souhlasu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'MZV doporučuje nechat podpis úředně ověřit (Czech POINT na poště, obecní úřad, notář). Proto souhlas podepište rukou. Pozor: dvojjazyčný text pošta ani obecní úřad neověří – pro anglickou verzi použijte samostatný anglický vzor MZV nebo notáře.',
  coDal: [
    'Oba rodiče (nebo ten, kdo dítě nedoprovází) podepíší a nechají podpis úředně ověřit.',
    'Dítě nebo doprovod veze originál souhlasu, cestovní doklad dítěte a ideálně kopii rodného listu.',
    'Zkontrolujte podmínky cílové země i zemí, kterými se projíždí, na stránkách MZV „Státy světa“; případně se obraťte na velvyslanectví.',
    'Potřebujete anglickou verzi? Použijte samostatný anglický vzor MZV (dvojjazyčný text pošta neověří) nebo úřední překlad.',
  ],
  kontrola: [
    'Podmínky se liší podle země a MZV jejich seznam nevede – ověřte cílovou zemi a tranzitní země v sekci [MZV – státy světa](https://mzv.gov.cz/jnp/cz/encyklopedie_statu/index.html) nebo na velvyslanectví.',
    'Souhlas MZV důrazně doporučuje při cestách mimo EU, při cestě dítěte bez rodičů, s prarodiči, s jedním rodičem nebo při rozdílném příjmení rodiče a dítěte.',
    'Údaje dítěte a doprovodu přesně podle cestovních dokladů: jméno, datum narození, číslo pasu nebo občanky.',
    'Uveďte konkrétní zemi a termín cesty – souhlas „kamkoli kdykoli“ může být odmítnut.',
    'Podpis nechte úředně ověřit. Dvoj- nebo vícejazyčný text pošta ani obecní úřad neověří.',
    'Dlouhodobý pobyt nebo stěhování dítěte do ciziny vyžaduje souhlas druhého rodiče (případně soudu) – tento vzor je na cesty.',
  ],
  zdroje: [MZV_DETI, MZV_STATY],

  kroky: [
    {
      id: 'rodice',
      nazev: 'Zákonní zástupci',
      popis: 'Obvykle rodiče. Pokud dítě doprovází jeden z rodičů, stačí souhlas druhého.',
      pole: [
        { id: 'r1_jmeno', typ: 'text', popis: 'Zákonný zástupce 1 – jméno a příjmení', napoveda: 'Rodič nebo jiný zákonný zástupce (poručník, pěstoun s rozhodnutím soudu).', placeholder: 'např. Jana Nováková', sirka: 34, autocomplete: 'name' },
        { id: 'r1_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'r1_doklad', typ: 'text', popis: 'Číslo občanského průkazu nebo pasu', napoveda: 'Pomůže úřadům ověřit totožnost.', placeholder: 'např. 123456789', sirka: 14, polovina: true },
        { id: 'r1_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa trvalého pobytu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'r1_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Aby vás mohli na hranici nebo letišti kontaktovat. Uveďte s předvolbou +420.', placeholder: 'např. +420 777 123 456', sirka: 18, polovina: true },
        { id: 'r2_jmeno', typ: 'text', popis: 'Zákonný zástupce 2 – jméno a příjmení (nepovinné)', napoveda: 'Druhý rodič. Pokud cestuje s dítětem, nemusí souhlas podepisovat – pak nechte prázdné.', placeholder: 'např. Petr Novák', sirka: 34 },
        { id: 'r2_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'r2_doklad', typ: 'text', popis: 'Číslo občanského průkazu nebo pasu', napoveda: 'Podle dokladu druhého rodiče.', placeholder: 'např. 987654321', sirka: 14, polovina: true },
        { id: 'r2_telefon', typ: 'text', popis: 'Telefon', napoveda: 'S předvolbou +420.', placeholder: 'např. +420 777 654 321', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'dite',
      nazev: 'Dítě',
      pole: [
        { id: 'd_jmeno', typ: 'text', popis: 'Jméno a příjmení dítěte', napoveda: 'Přesně podle cestovního dokladu dítěte.', placeholder: 'např. Tomáš Novák', sirka: 34 },
        { id: 'd_narozeni', typ: 'datum', popis: 'Datum narození dítěte', napoveda: 'Podle cestovního dokladu.', sirka: 14, polovina: true },
        { id: 'd_doklad', typ: 'text', popis: 'Číslo pasu nebo občanky dítěte', napoveda: 'Číslo dokladu, se kterým dítě cestuje.', placeholder: 'např. 45678912', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'cesta',
      nazev: 'Cesta',
      pole: [
        {
          id: 'doprovod',
          typ: 'volba',
          popis: 'S kým dítě cestuje',
          napoveda: 'Doprovod musí být v souhlasu jmenovitě uvedený.',
          moznosti: [
            { hodnota: 'rodic', popis: 'S druhým rodičem' },
            { hodnota: 'jina', popis: 'S jinou osobou (prarodič, příbuzný, vedoucí tábora…)' },
            { hodnota: 'samo', popis: 'Samo (např. let s doprovodem letecké společnosti)' },
          ],
        },
        { id: 'o_jmeno', typ: 'text', popis: 'Doprovod – jméno a příjmení', napoveda: 'Kdo s dítětem cestuje.', placeholder: 'např. Marie Nováková', sirka: 34, zobrazitKdyz: { pole: 'doprovod', je: ['rodic', 'jina'] } },
        { id: 'o_narozeni', typ: 'datum', popis: 'Datum narození doprovodu', napoveda: 'Podle dokladu doprovodu.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doprovod', je: ['rodic', 'jina'] } },
        { id: 'o_doklad', typ: 'text', popis: 'Číslo dokladu doprovodu', napoveda: 'Pas nebo občanka, se kterou doprovod cestuje.', placeholder: 'např. 112233445', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doprovod', je: ['rodic', 'jina'] } },
        { id: 'o_vztah', typ: 'text', popis: 'Vztah k dítěti', napoveda: 'Např. babička, teta, vedoucí tábora.', placeholder: 'např. babička', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'doprovod', je: 'jina' } },
        { id: 'zeme', typ: 'text', popis: 'Cílová země (a tranzitní země)', napoveda: 'Všechny země, kam dítě jede nebo kterými projíždí. Podmínky každé z nich ověřte na webu MZV.', placeholder: 'např. Chorvatsko (přes Rakousko a Slovinsko)', sirka: 46 },
        { id: 'od', typ: 'datum', popis: 'Odjezd', napoveda: 'Datum odjezdu.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Návrat', napoveda: 'Datum návratu.', sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: 'Účel cesty (nepovinné)', napoveda: 'Např. dovolená, tábor, škola v přírodě.', placeholder: 'např. letní dovolená', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy zákonného zástupce.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek. Při ověřování podpisu klidně dopište rukou.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zákonní zástupci',
      vysvetleni: 'Kdo souhlas dává. Kontaktní telefon pomůže úředníkům na hranici nebo letišti.',
      odstavce: [
        '{{r1_jmeno}}, datum narození {{r1_narozeni}}, číslo dokladu {{r1_doklad}}, bytem {{r1_adresa}}, telefon {{r1_telefon}}',
        '{{r2_jmeno}}, datum narození {{r2_narozeni}}, číslo dokladu {{r2_doklad}}, telefon {{r2_telefon}}',
      ],
    },
    {
      nadpis: 'Souhlas',
      vysvetleni: 'Komu a kam dítě smí cestovat. Čím konkrétněji, tím méně otázek na hranici.',
      odstavce: [
        'jako zákonný zástupce (zákonní zástupci) souhlasím (souhlasíme), aby nezletilé dítě',
        '{{d_jmeno}}, datum narození {{d_narozeni}}, číslo cestovního dokladu {{d_doklad}},',
        {
          volba: 'doprovod',
          uvodVzor: 'vycestovalo (zaškrtněte):',
          moznosti: {
            rodic: 'vycestovalo v doprovodu druhého rodiče {{o_jmeno}}, datum narození {{o_narozeni}}, číslo dokladu {{o_doklad}},',
            jina: 'vycestovalo v doprovodu {{o_jmeno}}, datum narození {{o_narozeni}}, číslo dokladu {{o_doklad}} ({{o_vztah}}),',
            samo: 'vycestovalo samo,',
          },
        },
        'do země: {{zeme}}, v době od {{od}} do {{do}}, za účelem: {{ucel}}.',
        'Po dobu cesty pověřuji (pověřujeme) doprovod péčí o dítě a činěním nezbytných rozhodnutí v jeho zájmu, včetně souhlasu s nezbytnou zdravotní péčí.',
      ],
    },
  ],
};
