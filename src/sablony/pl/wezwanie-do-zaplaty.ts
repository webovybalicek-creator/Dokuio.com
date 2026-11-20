/**
 * Wezwanie do zapłaty (przedsądowe) – Polska. Art. 455 KC (świadczenie niezwłocznie po wezwaniu),
 * art. 476 KC (zwłoka), art. 481 § 1–2 KC (odsetki ustawowe za opóźnienie: stopa referencyjna NBP + 5,5 pp).
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum } from '../terminy';
import { KC, KC_TEKST } from './zrodla';

export const wezwanieDoZaplaty: Sablona = {
  kod: 'PL-WEZWANIE-DO-ZAPLATY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Przedsądowe wezwanie do zapłaty',
  podnadpis: 'na podstawie art. 455 i 481 ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
  souborPdf: 'wezwanie-do-zaplaty',
  paticka: 'Utworzono bezpłatnie · szablon PL-WEZWANIE-DO-ZAPLATY v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiada nadawca',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'wierzyciel', vpravo: 'odebrał dłużnik (przy doręczeniu osobistym)' },
  slovo: { n: 'wezwanie', g: 'wezwania', a: 'wezwanie', l: 'wezwaniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => (naDatum(d.zaplatit_do) ? [{ nazev: 'Koniec terminu z wezwania do zapłaty', datum: String(d.zaplatit_do), popis: 'Sprawdź wpłatę. Jeśli jej brak, możesz złożyć pozew (także w e-sądzie).' }] : []),
  coDal: [
    'Podpisz wezwanie i wyślij listem poleconym za potwierdzeniem odbioru. Zachowaj dowód nadania.',
    'Wyślij na adres zamieszkania dłużnika, a firmie na adres z KRS lub CEIDG.',
    'Jeśli dłużnik nie zapłaci, możesz złożyć pozew – do pozwu dołącz kopię wezwania i dowód nadania.',
  ],
  kontrola: [
    'Jeśli termin zapłaty nie był ustalony, dłużnik powinien zapłacić niezwłocznie po wezwaniu (art. 455 KC).',
    'Za opóźnienie w zapłacie należą się odsetki – nawet bez wykazania szkody. Odsetki ustawowe za opóźnienie to stopa referencyjna NBP plus 5,5 punktu procentowego (art. 481 KC).',
    'Dokładnie opisz, za co i ile dłużnik jest winien (faktura, umowa, termin płatności).',
    'Wyślij tak, by móc udowodnić doręczenie (list polecony za potwierdzeniem odbioru).',
    'Nie groź niczym poza drogą sądową – nacisk lub publiczne piętnowanie dłużnika może być bezprawne.',
  ],
  zdroje: [KC, KC_TEKST],
  kroky: [
    {
      id: 'strony',
      nazev: 'Wierzyciel i dłużnik',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Wierzyciel – imię i nazwisko lub firma', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'k_ico', typ: 'text', popis: 'NIP lub PESEL wierzyciela (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres wierzyciela', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon lub e-mail (opcjonalnie)', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Dłużnik – imię i nazwisko lub firma', placeholder: 'np. Piotr Nowak', sirka: 34 },
        { id: 'p_ico', typ: 'text', popis: 'NIP lub PESEL dłużnika (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres dłużnika', placeholder: 'np. ul. Krótka 5, 30-001 Kraków', sirka: 46 },
      ],
    },
    {
      id: 'dlug',
      nazev: 'Należność',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Kwota należności (zł)', placeholder: 'np. 3500', sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'datum', popis: 'Termin płatności', sirka: 14, polovina: true },
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Z czego wynika dług',
          moznosti: [
            { hodnota: 'faktura', popis: 'Niezapłacona faktura' },
            { hodnota: 'pozyczka', popis: 'Niezwrócona pożyczka' },
            { hodnota: 'sprzedaz', popis: 'Niezapłacona cena sprzedaży' },
            { hodnota: 'inne', popis: 'Inny powód' },
          ],
        },
        { id: 'duvod_popis', typ: 'text', popis: 'Szczegóły', placeholder: 'np. faktura nr 15/2026 z dnia 1.10.2026', sirka: 56 },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Żądać odsetek za opóźnienie?',
          moznosti: [
            { hodnota: 'tak', popis: 'Tak, odsetki ustawowe za opóźnienie' },
            { hodnota: 'nie', popis: 'Nie, tylko należność główna' },
          ],
        },
      ],
    },
    {
      id: 'platnosc',
      nazev: 'Termin i płatność',
      pole: [
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zapłacić najpóźniej do', napoveda: 'Zwykle 7–14 dni.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Numer rachunku', placeholder: 'PL12 3456 7890 1234 5678 9012 3456', sirka: 34 },
        { id: 'tytul', typ: 'text', popis: 'Tytuł przelewu (opcjonalnie)', sirka: 24, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => kwotaSlownie(d.castka) },
  clanky: [
    {
      nadpis: 'Nadawca i adresat',
      odstavce: ['**Wierzyciel:** {{k_jmeno}}, NIP / PESEL {{k_ico}}, {{k_adresa}}, kontakt {{k_kontakt}}', '**Dłużnik:** {{p_jmeno}}, NIP / PESEL {{p_ico}}, {{p_adresa}}'],
    },
    {
      nadpis: 'Wezwanie do zapłaty',
      odstavce: [
        'Szanowni Państwo,',
        {
          volba: 'duvod',
          uvodVzor: 'tytuł należności (zaznacz jedną możliwość):',
          moznosti: {
            faktura: 'na Państwa koncie pozostaje niezapłacona faktura – {{duvod_popis}}.',
            pozyczka: 'do dnia dzisiejszego nie została zwrócona pożyczka – {{duvod_popis}}.',
            sprzedaz: 'do dnia dzisiejszego nie została zapłacona cena sprzedaży – {{duvod_popis}}.',
            inne: 'pozostaje niezapłacona następująca należność: {{duvod_popis}}.',
          },
        },
        'Kwota należności wynosi {{castka}} (słownie: {{castka_slovy}}) i była płatna w dniu {{splatnost}}.',
        'Niniejszym wzywam do zapłaty powyższej kwoty w terminie do dnia {{zaplatit_do}} na rachunek nr {{ucet}}, tytułem: {{tytul}}.',
        {
          volba: 'urok',
          uvodVzor: 'Odsetki (zaznacz jedną możliwość):',
          moznosti: {
            tak: 'Jednocześnie wzywam do zapłaty odsetek ustawowych za opóźnienie (art. 481 Kodeksu cywilnego) liczonych od dnia następującego po terminie płatności do dnia zapłaty.',
            nie: 'W przypadku zapłaty w wyznaczonym terminie odstąpię od dochodzenia odsetek za opóźnienie.',
          },
        },
        'W razie braku zapłaty w wyznaczonym terminie skieruję sprawę na drogę sądową bez dalszego wezwania, co narazi Państwa na dodatkowe koszty postępowania.',
        'Jeżeli płatność została już dokonana, proszę uznać niniejsze wezwanie za bezprzedmiotowe.',
      ],
    },
  ],
};
