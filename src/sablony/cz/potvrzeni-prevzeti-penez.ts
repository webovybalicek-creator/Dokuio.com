/**
 * Potvrzení o převzetí peněz (stvrzenka) – Česko. Kvitance podle § 1949 zákona č. 89/2012 Sb.:
 * kdo plní dluh, má právo na potvrzení, že bylo splněno.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';

export const potvrzeniPrevzetiPenez: Sablona = {
  kod: 'CZ-POTVRZENI-PENIZE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Potvrzení o převzetí peněz',
  podnadpis: 'potvrzení o splnění (kvitance) podle § 1949 zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'potvrzeni-o-prevzeti-penez',
  paticka: 'Vytvořeno zdarma · šablona CZ-POTVRZENI-PENIZE v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'příjemce (převzal)', vpravo: 'plátce (předal)' },
  slovo: { n: 'potvrzení', g: 'potvrzení', a: 'potvrzení', l: 'potvrzení' },
  cislovatClanky: false,
  coDal: [
    'Vytiskněte potvrzení a nechte ho podepsat příjemce peněz – jeho podpis je nejdůležitější.',
    'Peníze přepočítejte před podpisem.',
    'Plátce si potvrzení schová. Je to důkaz, že zaplatil.',
    'Při více platbách vystavte potvrzení ke každé zvlášť.',
  ],

  overeno: '2026-11-19',
  kontrola: [
      "Peníze přepočítejte před podpisem, ideálně oba společně.",
      "Částka číslem i slovy se shoduje.",
      "Účel platby je konkrétní (smlouva, datum, auto) – aby nešlo tvrdit, že šlo o něco jiného.",
      "Podpis příjemce – bez něj potvrzení nic nedokazuje.",
      "Platba v hotovosti nad 270 000 Kč je zakázaná; vyšší částky převodem."
  ],
  zdroje: [
      {
          "nazev": "Občanský zákoník č. 89/2012 Sb. (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2012/89"
      }
  ],

  kroky: [
    {
      id: 'strany',
      nazev: 'Kdo platí a kdo přebírá',
      popis: 'Příjemce peníze převzal a podpisem to potvrzuje. Plátce je předal.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Příjemce – jméno a příjmení', napoveda: 'Kdo peníze dostal. Celé jméno jako v občanském průkazu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození příjemce', napoveda: 'Stačí datum narození, rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa příjemce', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Plátce – jméno a příjmení', napoveda: 'Kdo peníze předal.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození plátce', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa plátce', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'platba',
      nazev: 'Částka a účel',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Převzatá částka (Kč)', napoveda: 'Přesná částka, kterou příjemce převzal. Slovy ji doplníme sami – zabrání to dopsání číslic.', placeholder: 'např. 215000', sirka: 14, polovina: true },
        {
          id: 'ucel',
          typ: 'volba',
          popis: 'Za co se platí',
          napoveda: 'Účel spojí potvrzení s konkrétní smlouvou nebo dluhem. Bez něj by šlo tvrdit, že šlo o něco jiného.',
          moznosti: [
            { hodnota: 'kupni', popis: 'Kupní cena' },
            { hodnota: 'zaloha', popis: 'Záloha' },
            { hodnota: 'zapujcka', popis: 'Půjčené peníze (předání zápůjčky)' },
            { hodnota: 'splatka', popis: 'Vrácení půjčky nebo splátka' },
            { hodnota: 'jine', popis: 'Něco jiného' },
          ],
        },
        { id: 'ucel_popis', typ: 'text', popis: 'Upřesnění', napoveda: 'Čeho se platba týká, např. „za auto Škoda Octavia podle kupní smlouvy ze dne 19. 11. 2026“.', placeholder: 'např. za auto Škoda Octavia, SPZ 1AB 2345', sirka: 56 },
        {
          id: 'uplne',
          typ: 'volba',
          popis: 'Je tím dluh zaplacený celý?',
          napoveda: 'Pokud jde o poslední nebo jedinou platbu, zvolte „celý“. Příjemce tím potvrdí, že už nic nedluží.',
          moznosti: [
            { hodnota: 'ano', popis: 'Ano, celý' },
            { hodnota: 'cast', popis: 'Ne, je to jen část' },
          ],
        },
      ],
    },
    {
      id: 'kdy',
      nazev: 'Kdy a kde',
      pole: [
        { id: 'misto', typ: 'text', popis: 'Místo převzetí (obec)', napoveda: 'Předvyplníme podle adresy příjemce, klidně přepište.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum převzetí', napoveda: 'Předvyplnili jsme dnešek. Pokud chcete datum dopsat rukou, pole vymažte.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => castkaSlovy(d.castka),
  },

  clanky: [
    {
      nadpis: 'Potvrzení',
      vysvetleni: 'Příjemce svým podpisem potvrzuje, že peníze dostal. Plátce si potvrzení schová jako důkaz o zaplacení.',
      odstavce: [
        '**Příjemce:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „příjemce“)',
        '**Plátce:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „plátce“)',
        'Příjemce potvrzuje, že od plátce převzal v hotovosti částku **{{castka}}** (slovy: {{castka_slovy}}).',
      ],
    },
    {
      nadpis: 'Účel platby',
      vysvetleni: 'Za co se platilo. Spojí potvrzení s konkrétní smlouvou nebo dluhem.',
      odstavce: [
        {
          volba: 'ucel',
          uvodVzor: 'Částka byla zaplacena jako (zaškrtněte):',
          uvod: 'Částka byla zaplacena jako',
          moznosti: {
            kupni: 'kupní cena.',
            zaloha: 'záloha.',
            zapujcka: 'předání zápůjčky.',
            splatka: 'vrácení zápůjčky nebo její splátka.',
            jine: 'jiná platba.',
          },
        },
        'Upřesnění: {{ucel_popis}}',
        {
          volba: 'uplne',
          uvodVzor: 'Rozsah (zaškrtněte jednu možnost):',
          moznosti: {
            ano: 'Příjemce potvrzuje, že tímto byl jeho nárok zaplacen v plné výši.',
            cast: 'Jde o částečnou platbu; zbývající část nároku tímto potvrzením není dotčena.',
          },
        },
      ],
    },
  ],
};
