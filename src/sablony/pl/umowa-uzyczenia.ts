/**
 * Umowa użyczenia – Polska. Art. 710–719 KC (ISAP, tekst ujednolicony): bezpłatne używanie rzeczy (710); wady zatajone (711); używanie zgodnie z umową / właściwościami, osobie trzeciej za zgodą (712); zwykłe koszty utrzymania biorący (713); odpowiedzialność za przypadkową utratę przy używaniu sprzecznym (714); koniec i wcześniejszy zwrot (715–716); zwrot w stanie niepogorszonym (718); przedawnienie 1 rok od zwrotu (719).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { KC_TEKST, TIP_TOZSAMOSC } from './zrodla';

export const umowaUzyczenia: Sablona = {
  kod: 'PL-UMOWA-UZYCZENIA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: "Umowa użyczenia",
  podnadpis: "na podstawie art. 710 i nast. ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny",
  souborPdf: 'umowa-uzyczenia',
  paticka: "Utworzono bezpłatnie · szablon PL-UMOWA-UZYCZENIA v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "użyczający", vpravo: "biorący do używania" },
  slovo: {"n": "umowa", "g": "umowy", "a": "umowę", "l": "umowie"},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{ nazev: "Zwrot użyczonej rzeczy", datum: String(d.vratit_do), popis: "Przy zwrocie sprawdźcie rzecz razem i poproś o potwierdzenie zwrotu." }] : []),
  coDal: [
      "Wydrukuj umowę w dwóch egzemplarzach, obie strony podpisują oba.",
      "Przy wydaniu obejrzyjcie rzecz razem i dopiszcie ewentualne wady.",
      "Przy zwrocie poproś o potwierdzenie, że rzecz wróciła w porządku."
  ],
  kontrola: [
    "Użyczenie jest bezpłatne. Jeśli za używanie pobierasz opłatę, to już najem.",
    "Opisz rzecz dokładnie (producent, model, numer seryjny, wyposażenie) i jej stan przy wydaniu.",
    "Biorący może używać rzeczy zgodnie z umową, a gdy umowa tego nie określa – zgodnie z jej właściwościami i przeznaczeniem; osobie trzeciej może ją oddać tylko za zgodą użyczającego (art. 712 KC).",
    "Zwykłe koszty utrzymania rzeczy ponosi biorący (art. 713 KC).",
    "Użyczający może żądać zwrotu wcześniej, jeśli biorący używa rzeczy niewłaściwie, oddaje ją bez upoważnienia osobie trzeciej albo rzecz stała się potrzebna użyczającemu z powodów nieprzewidzianych (art. 716 KC).",
    "Roszczenia o naprawienie szkody z powodu uszkodzenia rzeczy przedawniają się z upływem roku od zwrotu rzeczy (art. 719 KC).",
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC_TEKST],

  kroky: [
    {
      id: 'strany',
      nazev: "Użyczający i biorący",
      popis: "Użyczający bezpłatnie oddaje rzecz do używania, biorący z niej korzysta i ją zwraca.",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Użyczający – imię i nazwisko", placeholder: "np. Jan Kowalski", sirka: 34, autocomplete: 'name' },
        { id: 'p_id', typ: 'text', popis: "PESEL lub nr dowodu użyczającego (opcjonalnie)", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Adres użyczającego", placeholder: "np. ul. Długa 12, 00-001 Warszawa", sirka: 46 },
        { id: 'v_jmeno', typ: 'text', popis: "Biorący – imię i nazwisko", placeholder: "np. Piotr Nowak", sirka: 34 },
        { id: 'v_id', typ: 'text', popis: "PESEL lub nr dowodu biorącego (opcjonalnie)", sirka: 14, polovina: true },
        { id: 'v_adresa', typ: 'text', popis: "Adres biorącego", placeholder: "np. ul. Krótka 5, 30-001 Kraków", sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: "Rzecz",
      pole: [
        { id: 'vec', typ: 'textarea', popis: "Użyczana rzecz", napoveda: "Producent, model, numer seryjny, wyposażenie.", placeholder: "np. przyczepka samochodowa Neptun, nr rej. WA 12345, z plandeką i kluczykiem do zamka", sirka: 70 },
        { id: 'stav', typ: 'text', popis: "Stan przy wydaniu", placeholder: "np. sprawna, rysy na lewym błotniku", sirka: 56 },
        { id: 'hodnota', typ: 'castka', popis: "Wartość rzeczy (zł, opcjonalnie)", napoveda: "Na wypadek utraty lub zniszczenia.", sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: "Cel używania", placeholder: "np. przeprowadzka", sirka: 46 },
      ],
    },
    {
      id: 'doba',
      nazev: "Czas i zwrot",
      pole: [
        { id: 'predano', typ: 'datum', popis: "Dzień wydania", sirka: 14, polovina: true, vychozi: 'dnes' },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Na jak długo",
          moznosti: [
            { hodnota: 'datum', popis: "Do określonego dnia" },
            { hodnota: 'ucel', popis: "Do osiągnięcia celu" },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: "Zwrócić najpóźniej", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
        { id: 'misto_vraceni', typ: 'text', popis: "Miejsce zwrotu", placeholder: "np. pod adresem użyczającego", sirka: 46 },
        { id: 'misto', typ: 'text', popis: "Miejscowość", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Data zawarcia", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: "Strony umowy",
      odstavce: ["**Użyczający:** {{p_jmeno}}, PESEL / dowód {{p_id}}, {{p_adresa}} (dalej „Użyczający”)", "**Biorący:** {{v_jmeno}}, PESEL / dowód {{v_id}}, {{v_adresa}} (dalej „Biorący”)"],
    },
    {
      nadpis: "Przedmiot użyczenia",
      vysvetleni: "Użyczający zezwala na bezpłatne używanie rzeczy.",
      odstavce: ["Użyczający zezwala Biorącemu na bezpłatne używanie następującej rzeczy: {{vec}}.", "Stan rzeczy przy wydaniu: {{stav}}. Wartość rzeczy: {{hodnota}}.", "Rzecz jest użyczana w celu: {{ucel}}. Użyczający oświadcza, że nie są mu znane wady rzeczy, o których nie poinformował Biorącego."],
    },
    {
      nadpis: "Czas użyczenia i zwrot",
      odstavce: [
        "Rzecz została wydana w dniu {{predano}}.",
        {
          volba: 'doba',
          uvodVzor: "Czas użyczenia (zaznacz jedną możliwość):",
          moznosti: {
            datum: "Umowa zostaje zawarta do dnia {{vratit_do}}. Najpóźniej w tym dniu Biorący zwróci rzecz.",
            ucel: "Umowa zostaje zawarta do czasu osiągnięcia wskazanego celu. Biorący zwróci rzecz niezwłocznie po zrobieniu z niej umówionego użytku.",
          },
        },
        "Biorący zwróci rzecz w miejscu: {{misto_vraceni}}, w stanie niepogorszonym, z zastrzeżeniem zużycia wynikającego z prawidłowego używania.",
        "Użyczający może żądać zwrotu rzeczy przed upływem umówionego czasu w przypadkach określonych w art. 716 Kodeksu cywilnego.",
      ],
    },
    {
      nadpis: "Używanie rzeczy",
      vysvetleni: "Jak korzystać z rzeczy i kto ponosi koszty.",
      odstavce: ["Biorący używa rzeczy zgodnie z umową, a w jej braku – zgodnie z właściwościami i przeznaczeniem rzeczy.", "Biorący nie odda rzeczy do używania osobie trzeciej bez zgody Użyczającego.", "Zwykłe koszty utrzymania rzeczy ponosi Biorący. O potrzebie większej naprawy zawiadomi Użyczającego niezwłocznie.", "Biorący odpowiada za utratę lub uszkodzenie rzeczy na zasadach Kodeksu cywilnego (art. 714)."],
    },
    {
      nadpis: "Postanowienia końcowe",
      odstavce: ["W sprawach nieuregulowanych stosuje się art. 710–719 Kodeksu cywilnego. Roszczenia z tytułu uszkodzenia rzeczy przedawniają się z upływem roku od jej zwrotu (art. 719).", "Zmiany umowy wymagają formy pisemnej. Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron."],
    },
  ],
};
