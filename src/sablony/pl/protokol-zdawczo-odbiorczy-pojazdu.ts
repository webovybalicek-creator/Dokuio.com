/** Protokół zdawczo-odbiorczy pojazdu – Polska. Stan, kluczyki, dokumenty, godzina przekazania. Wypełnienie z umowy sprzedaży. */
import type { Sablona } from '../typy';
import { KC, HISTORIA_POJAZDU, TIP_TOZSAMOSC } from './zrodla';

export const protokolPojazdu: Sablona = {
  kod: 'PL-PROTOKOL-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Protokół zdawczo-odbiorczy pojazdu',
  podnadpis: 'potwierdzenie wydania i odbioru pojazdu',
  souborPdf: 'protokol-zdawczo-odbiorczy-pojazdu',
  paticka: 'Utworzono za darmo · szablon PL-PROTOKOL-AUTO v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'przekazujący', vpravo: 'odbierający' },
  cislovatClanky: false,
  slovo: { n: 'protokół', g: 'protokołu', a: 'protokół', l: 'protokole' },
  coDal: ['Wydrukuj protokół w dwóch egzemplarzach i podpiszcie oba.', 'Zrób zdjęcia auta i licznika – zachowaj je.'],
  kontrola: [
    'Przebieg i poziom paliwa odczytajcie razem.',
    'Uszkodzenia opisz konkretnie (miejsce, zakres) i sfotografuj z datą.',
    'Godzina przekazania przyda się przy mandatach z fotoradarów lub kolizji.',
    'VIN w dowodzie rejestracyjnym zgadza się z VIN na aucie; historię sprawdzisz na [historiapojazdu.gov.pl](https://historiapojazdu.gov.pl/).',
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC, HISTORIA_POJAZDU],
  prevzit: {
    kod: 'PL-SPRZEDAZ-AUTO',
    nazev: 'umowę kupna-sprzedaży samochodu',
    mapuj: (d) => ({
      p_jmeno: d.p_jmeno,
      p_adresa: d.p_adresa,
      k_jmeno: d.k_jmeno,
      k_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      km: d.km,
      klice: d.klice,
      smlouva_datum: d.datum_podpisu,
      predani_datum: d.datum_podpisu,
      misto: d.misto,
    }),
  },
  kroky: [
    {
      id: 'strony',
      nazev: 'Strony i pojazd',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Przekazujący – imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adres przekazującego', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Odbierający – imię i nazwisko', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Adres odbierającego', sirka: 46 },
        { id: 'znacka', typ: 'text', popis: 'Marka i model', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Numer VIN', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Numer rejestracyjny', sirka: 12, polovina: true },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Data umowy sprzedaży (jeśli dotyczy)', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'stan',
      nazev: 'Stan i wyposażenie',
      pole: [
        { id: 'km', typ: 'cislo', popis: 'Przebieg', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'palivo',
          typ: 'volba',
          popis: 'Paliwo w zbiorniku',
          moznosti: [
            { hodnota: 'rezerwa', popis: 'Rezerwa' },
            { hodnota: 'cwierc', popis: '1/4' },
            { hodnota: 'pol', popis: '1/2' },
            { hodnota: 'trzy', popis: '3/4' },
            { hodnota: 'pelny', popis: 'Pełny bak' },
          ],
        },
        {
          id: 'poskozeni',
          typ: 'volba',
          popis: 'Uszkodzenia',
          moznosti: [
            { hodnota: 'bez', popis: 'Brak widocznych uszkodzeń' },
            { hodnota: 's', popis: 'Pojazd ma uszkodzenia' },
          ],
        },
        { id: 'poskozeni_popis', typ: 'textarea', popis: 'Opis uszkodzeń', sirka: 64, zobrazitKdyz: { pole: 'poskozeni', je: 's' } },
        { id: 'klice', typ: 'cislo', popis: 'Liczba kluczyków', sirka: 4, polovina: true },
        {
          id: 'vybava',
          typ: 'vice',
          popis: 'Wyposażenie',
          moznosti: [
            { hodnota: 'gasnica', popis: 'Gaśnica' },
            { hodnota: 'trojkat', popis: 'Trójkąt ostrzegawczy' },
            { hodnota: 'apteczka', popis: 'Apteczka' },
            { hodnota: 'zapas', popis: 'Koło zapasowe lub zestaw naprawczy' },
            { hodnota: 'opony', popis: 'Drugi komplet opon' },
          ],
        },
        { id: 'predani_datum', typ: 'datum', popis: 'Data przekazania', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predani_cas', typ: 'text', popis: 'Godzina przekazania', placeholder: 'np. 14:30', sirka: 8, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true },
        { id: 'poznamky', typ: 'textarea', popis: 'Uwagi', sirka: 64 },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Strony',
      odstavce: ['**Przekazujący:** {{p_jmeno}}, zamieszkały/a {{p_adresa}}', '**Odbierający:** {{k_jmeno}}, zamieszkały/a {{k_adresa}}'],
    },
    {
      nadpis: 'Pojazd',
      odstavce: ['Marka i model {{znacka}}, VIN {{vin}}, numer rejestracyjny {{spz}}, przekazywany na podstawie umowy z dnia {{smlouva_datum}}.'],
    },
    {
      nadpis: 'Stan pojazdu przy przekazaniu',
      odstavce: [
        'Przebieg: {{km}}.',
        {
          volba: 'palivo',
          uvod: 'Paliwo w zbiorniku:',
          uvodVzor: 'Paliwo w zbiorniku (zaznacz):',
          moznosti: { rezerwa: 'rezerwa.', cwierc: 'około 1/4.', pol: 'około 1/2.', trzy: 'około 3/4.', pelny: 'pełny bak.' },
        },
        {
          volba: 'poskozeni',
          uvodVzor: 'Uszkodzenia (zaznacz jedną opcję):',
          moznosti: { bez: 'Pojazd nie ma widocznych uszkodzeń.', s: 'Pojazd ma następujące uszkodzenia: {{poskozeni_popis}}' },
        },
      ],
    },
    {
      nadpis: 'Kluczyki i wyposażenie',
      odstavce: [
        'Liczba przekazanych kluczyków: {{klice}}.',
        {
          vice: 'vybava',
          uvod: 'Przekazane wyposażenie:',
          moznosti: { gasnica: 'gaśnica', trojkat: 'trójkąt ostrzegawczy', apteczka: 'apteczka', zapas: 'koło zapasowe lub zestaw naprawczy', opony: 'drugi komplet opon' },
        },
      ],
    },
    {
      nadpis: 'Odbiór',
      odstavce: [
        'Pojazd przekazano dnia {{predani_datum}} o godzinie {{predani_cas}}.',
        'Odbierający potwierdza odbiór pojazdu wraz z kluczykami i wyposażeniem w stanie opisanym w protokole.',
        'Uwagi: {{poznamky}}',
      ],
    },
  ],
};
