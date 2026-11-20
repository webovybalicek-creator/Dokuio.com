/**
 * Porozumienie stron o rozwiązaniu umowy najmu lokalu – Polska. Strony mogą w każdej chwili rozwiązać umowę za porozumieniem (swoboda umów, art. 353¹ KC). Kaucja – rozliczenie wg umowy i ustawy o ochronie praw lokatorów.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum, cislo } from '../terminy';
import { KC_TEKST } from './zrodla';

export const porozumienieRozwiazanieNajmu: Sablona = {
  kod: 'PL-POROZUMIENIE-NAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: "Porozumienie o rozwiązaniu umowy najmu",
  podnadpis: "zawarte na podstawie przepisów Kodeksu cywilnego",
  souborPdf: 'porozumienie-rozwiazanie-umowy-najmu',
  paticka: "Utworzono bezpłatnie · szablon PL-POROZUMIENIE-NAJEM v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "wynajmujący", vpravo: "najemca" },
  slovo: {"n": "porozumienie", "g": "porozumienia", "a": "porozumienie", "l": "porozumieniu"},
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: "Koniec najmu", datum: d.konec_dne });
    const odevzdani = naDatum(d.odevzdani);
    if (odevzdani) {
      out.push({ nazev: "Wydanie lokalu i protokół zdawczo-odbiorczy", datum: isoDatum(odevzdani) });
      const dni = Math.round(cislo(d.jistota_dni));
      if (dni > 0) out.push({ nazev: "Zwrot kaucji", datum: isoDatum(pridejDny(odevzdani, dni)) });
    }
    return out;
  },
  coDal: ["Wydrukuj porozumienie w dwóch egzemplarzach, obie strony podpisują oba.", "Przy zwrocie lokalu spiszcie protokół zdawczo-odbiorczy ze stanami liczników.", "Najemca przepisze lub wypowie umowy na prąd i gaz, jeśli był ich stroną.", "Pilnuj terminu zwrotu kaucji i rozliczenia mediów."],
  kontrola: [
    "Porozumienie muszą podpisać wszyscy wynajmujący i wszyscy najemcy.",
    "Wpisz konkretny dzień rozwiązania umowy i dzień wydania lokalu.",
    "Ustal, kiedy i jak zostanie zwrócona kaucja oraz jak rozliczyć media.",
    "Porozumienie zastępuje wypowiedzenie – strony mogą ustalić dowolny termin, także krótszy niż okres wypowiedzenia.",
  ],
  zdroje: [KC_TEKST],

  kroky: [
    {
      id: 'strany',
      nazev: "Strony i lokal",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Wynajmujący – imię i nazwisko", placeholder: "np. Jan Kowalski", sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: "Adres wynajmującego", placeholder: "np. ul. Długa 12, 00-001 Warszawa", sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: "Najemca – imię i nazwisko", napoveda: "Przy kilku najemcach wpisz wszystkich.", placeholder: "np. Anna Nowak", sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: "Data urodzenia najemcy", sirka: 14, polovina: true },
        { id: 'byt', typ: 'text', popis: "Lokal (adres i numer)", placeholder: "np. ul. Krótka 5 m. 12, Kraków", sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: "Data umowy najmu", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'konec',
      nazev: "Rozwiązanie",
      pole: [
        { id: 'konec_dne', typ: 'datum', popis: "Umowa ulega rozwiązaniu z dniem", napoveda: "Ostatni dzień najmu. Do tego dnia płaci się czynsz.", sirka: 14, polovina: true },
        { id: 'odevzdani', typ: 'datum', popis: "Wydanie lokalu najpóźniej", napoveda: "Kiedy najemca odda klucze.", sirka: 14, polovina: true },
        {
          id: 'jistota',
          typ: 'volba',
          popis: "Kaucja",
          moznosti: [
            { hodnota: 'odevzdani', popis: "Zwrot w określonym czasie od wydania lokalu" },
            { hodnota: 'vyuctovani', popis: "Zwrot po rozliczeniu mediów" },
            { hodnota: 'zadna', popis: "Kaucja nie była wpłacona" },
          ],
        },
        { id: 'jistota_dni', typ: 'cislo', popis: "Zwrot w ciągu (dni)", placeholder: '14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
        { id: 'ucet', typ: 'text', popis: "Rachunek najemcy do zwrotu kaucji", sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
        { id: 'dalsi', typ: 'textarea', popis: "Dodatkowe ustalenia (opcjonalnie)", placeholder: "np. najemca odmaluje lokal przed wydaniem", sirka: 64 },
        { id: 'misto', typ: 'text', popis: "Miejscowość", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Data podpisania", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    { nadpis: "Strony", odstavce: ["**Wynajmujący:** {{p_jmeno}}, zam. {{p_adresa}}", "**Najemca:** {{k_jmeno}}, data urodzenia {{k_narozeni}}"] },
    {
      nadpis: "Rozwiązanie umowy najmu",
      vysvetleni: "Kiedy kończy się najem i kiedy lokal zostanie wydany.",
      odstavce: ["Strony zgodnie postanawiają rozwiązać umowę najmu lokalu {{byt}} zawartą w dniu {{smlouva_datum}} z dniem {{konec_dne}}.", "Najemca wyda lokal wraz ze wszystkimi kluczami najpóźniej w dniu {{odevzdani}} w stanie niepogorszonym, z uwzględnieniem zużycia wynikającego z prawidłowego używania. Z wydania strony sporządzą protokół zdawczo-odbiorczy.", "Czynsz i opłaty najemca uiszcza do dnia rozwiązania umowy. Media zostaną rozliczone w zwykłym terminie."],
    },
    {
      nadpis: "Kaucja i dodatkowe ustalenia",
      odstavce: [
        {
          volba: 'jistota',
          uvodVzor: "Kaucja (zaznacz jedną możliwość):",
          moznosti: {
            odevzdani: "Wynajmujący zwróci najemcy kaucję w ciągu {{jistota_dni}} dni od wydania lokalu na rachunek {{ucet}}, po potrąceniu należności z tytułu najmu.",
            vyuctovani: "Wynajmujący zwróci najemcy kaucję po rozliczeniu mediów za ostatni okres na rachunek {{ucet}}, po potrąceniu należności z tytułu najmu.",
            zadna: "Najemca nie wpłacił kaucji.",
          },
        },
        "Dodatkowe ustalenia: {{dalsi}}",
        "Porozumienie sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron. Wchodzi w życie z chwilą podpisania przez obie strony.",
      ],
    },
  ],
};
