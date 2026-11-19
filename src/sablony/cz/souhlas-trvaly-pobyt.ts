/**
 * Souhlas s ohlášením změny místa trvalého pobytu – Česko. § 10 zákona č. 133/2000 Sb., o evidenci obyvatel.
 * Písemné potvrzení oprávněné osoby musí mít úředně ověřený podpis (nebo souhlas přímo na ohlašovně).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { MV_POBYT, ZAKON_EVIDENCE } from './zdroje';

export const souhlasTrvalyPobyt: Sablona = {
  kod: 'CZ-SOUHLAS-POBYT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Souhlas s přihlášením k trvalému pobytu',
  podnadpis: 'potvrzení oprávněné osoby o souhlasu s ohlášením změny místa trvalého pobytu podle zákona č. 133/2000 Sb.',
  souborPdf: 'souhlas-s-trvalym-pobytem',
  paticka: 'Vytvořeno zdarma · šablona CZ-SOUHLAS-POBYT v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'oprávněná osoba (úředně ověřený podpis)', vpravo: 'přihlašovaná osoba (nepovinné)' },
  slovo: { n: 'souhlas', g: 'souhlasu', a: 'souhlas', l: 'souhlasu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Podpis oprávněné osoby musí být úředně ověřený (Czech POINT, obecní úřad, notář), jinak ho ohlašovna nepřijme. Ověřený souhlas není potřeba, pokud oprávněná osoba přijde na ohlašovnu osobně a souhlas potvrdí přímo tam.',
  coDal: [
    'Oprávněná osoba (vlastník nebo nájemce) souhlas podepíše a nechá podpis úředně ověřit.',
    'Přihlašovaná osoba vezme ověřený souhlas a občanský průkaz na ohlašovnu (obecní úřad v místě nového pobytu), nebo změnu ohlásí elektronicky přes Portál občana.',
    'Nájemce (ne vlastník) přikládá i doklad, že byt užívá – obvykle nájemní smlouvu.',
    'Správní poplatek za ohlášení je 50 Kč, děti do 15 let ho neplatí.',
  ],
  kontrola: [
    'Podepisuje oprávněná osoba – vlastník bytu nebo domu, případně nájemce. Podpis úředně ověřit.',
    'Adresa přesně podle evidence: ulice, číslo popisné (č. p.), číslo orientační, obec a u bytového domu číslo bytu.',
    'Jméno a datum narození přihlašované osoby podle jejího občanského průkazu.',
    'Trvalý pobyt je jen evidenční údaj – nedává právo v bytě bydlet ani na něj nárok. Vlastník ho později může nechat zrušit jen ze zákonných důvodů.',
    'Bez ověřeného souhlasu to jde, když oprávněná osoba přijde na ohlašovnu osobně, nebo když přihlašovaný doloží vlastní nájemní smlouvu.',
  ],
  zdroje: [MV_POBYT, ZAKON_EVIDENCE],

  kroky: [
    {
      id: 'opravneny',
      nazev: 'Kdo souhlasí',
      popis: 'Oprávněná osoba je vlastník bytu nebo domu, případně ten, kdo ho má v nájmu.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Jméno a příjmení oprávněné osoby', napoveda: 'Celé jméno jako v občanském průkazu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu oprávněné osoby', napoveda: 'Kde má trvalý pobyt podepisující (nemusí bydlet v daném bytě).', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        {
          id: 'vztah',
          typ: 'volba',
          popis: 'Oprávněná osoba je',
          napoveda: 'Nájemce dokládá na ohlašovně i nájemní smlouvu.',
          moznosti: [
            { hodnota: 'vlastnik', popis: 'Vlastník (spoluvlastník)' },
            { hodnota: 'najemce', popis: 'Nájemce' },
          ],
        },
      ],
    },
    {
      id: 'objekt',
      nazev: 'Adresa',
      popis: 'Na tuto adresu se přihlašovaná osoba přihlásí.',
      pole: [
        { id: 'adresa', typ: 'text', popis: 'Adresa bytu nebo domu', napoveda: 'Ulice, číslo popisné/orientační, PSČ a obec. Číslo popisné je na modré nebo červené tabulce domu.', placeholder: 'např. Masarykova 1025/5, 251 01 Říčany', sirka: 46 },
        { id: 'byt', typ: 'text', popis: 'Číslo bytu (nepovinné)', napoveda: 'U bytového domu, pokud je známé (např. z katastru nebo nájemní smlouvy).', placeholder: 'např. 12', sirka: 6, polovina: true },
      ],
    },
    {
      id: 'prihlasovany',
      nazev: 'Kdo se přihlašuje',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Jméno a příjmení', napoveda: 'Celé jméno podle občanského průkazu.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'dalsi', typ: 'textarea', popis: 'Další přihlašované osoby (nepovinné)', napoveda: 'Např. děti – jméno a datum narození, každé na nový řádek.', placeholder: 'např. Tomáš Svoboda, nar. 3. 5. 2018', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy oprávněné osoby.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek. Pokud budete podepisovat až při ověření, datum klidně dopište rukou.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Oprávněná osoba',
      vysvetleni: 'Kdo souhlas dává.',
      odstavce: [
        '{{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}}',
        {
          volba: 'vztah',
          uvodVzor: 'jako (zaškrtněte):',
          moznosti: {
            vlastnik: 'jako vlastník objektu uvedeného níže,',
            najemce: 'jako nájemce bytu uvedeného níže,',
          },
        },
      ],
    },
    {
      nadpis: 'Souhlas',
      vysvetleni: 'Samotný souhlas s přihlášením. Nezakládá právo v bytě bydlet.',
      odstavce: [
        'souhlasím s tím, aby na adrese {{adresa}}, číslo bytu {{byt}}, ohlásil(a) změnu místa trvalého pobytu:',
        '{{k_jmeno}}, datum narození {{k_narozeni}}',
        'Další osoby: {{dalsi}}',
        'Tento souhlas vydávám podle § 10 zákona č. 133/2000 Sb., o evidenci obyvatel.',
      ],
    },
  ],
};
