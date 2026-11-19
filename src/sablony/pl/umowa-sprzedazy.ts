/**
 * Umowa sprzedaży rzeczy ruchomej między osobami prywatnymi – Polska. Art. 535 i nast. KC.
 * PCC 2% płaci kupujący w 14 dni, jeśli wartość rynkowa przekracza 3000 zł (próg od 3.11.2026).
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum, pridejDny, isoDatum, cislo } from '../terminy';
import { KC, PCC_FORMULARZE, TIP_TOZSAMOSC, TIP_GOTOWKA } from './zrodla';

export const umowaSprzedazy: Sablona = {
  kod: 'PL-SPRZEDAZ-RZECZY',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa kupna-sprzedaży',
  podnadpis: 'rzeczy ruchomej zawarta na podstawie art. 535 i nast. Kodeksu cywilnego',
  souborPdf: 'umowa-kupna-sprzedazy',
  paticka: 'Utworzono za darmo · szablon PL-SPRZEDAZ-RZECZY v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'sprzedający', vpravo: 'kupujący' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    return od && cislo(d.cena) > 3000 ? [{ nazev: 'PCC-3: deklaracja i 2% podatku (kupujący)', datum: isoDatum(pridejDny(od, 14)), popis: '14 dni od zawarcia umowy, jeśli wartość rynkowa rzeczy przekracza 3000 zł.' }] : [];
  },
  coDal: ['Wydrukuj dwa egzemplarze, obie strony podpisują oba.', 'Kupujący: jeśli wartość rzeczy przekracza 3000 zł, złóż PCC-3 i zapłać 2% podatku w ciągu 14 dni.'],
  kontrola: [
    'Opisz rzecz dokładnie: marka, model, numer seryjny, wyposażenie.',
    'Wpisz znane wady – zatajone wady dają kupującemu prawo do roszczeń z rękojmi.',
    'Kupujący płaci 2% PCC od wartości rynkowej, jeśli przekracza 3000 zł (próg obowiązuje od 3 listopada 2026, wcześniej 1000 zł) – [PCC-3](https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/).',
    TIP_TOZSAMOSC,
    TIP_GOTOWKA,
  ],
  zdroje: [KC, PCC_FORMULARZE],
  kroky: [
    {
      id: 'strony',
      nazev: 'Sprzedający i kupujący',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Sprzedający – imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupujący – imię i nazwisko', sirka: 34 },
        { id: 'k_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
      ],
    },
    {
      id: 'rzecz',
      nazev: 'Przedmiot sprzedaży',
      pole: [
        { id: 'vec', typ: 'textarea', popis: 'Co jest sprzedawane', placeholder: 'np. rower elektryczny Kross Trans Hybrid, nr ramy WC12345, z ładowarką', sirka: 64 },
        { id: 'vady', typ: 'textarea', popis: 'Znane wady (opcjonalnie)', sirka: 64 },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena i wydanie',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Cena (zł)', sirka: 12, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Płatność',
          moznosti: [
            { hodnota: 'gotowka', popis: 'Gotówką przy podpisaniu' },
            { hodnota: 'przelew', popis: 'Przelewem przed wydaniem' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Rachunek sprzedającego', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'przelew' } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovy: (d) => kwotaSlownie(d.cena) },
  clanky: [
    {
      nadpis: 'Strony',
      odstavce: ['**Sprzedający:** {{p_jmeno}}, PESEL {{p_pesel}}, zamieszkały/a {{p_adresa}}', '**Kupujący:** {{k_jmeno}}, PESEL {{k_pesel}}, zamieszkały/a {{k_adresa}}'],
    },
    {
      nadpis: 'Przedmiot umowy',
      vysvetleni: 'Co jest sprzedawane i w jakim stanie.',
      odstavce: [
        'Sprzedający sprzedaje kupującemu następującą rzecz: {{vec}}.',
        'Sprzedający oświadcza, że rzecz stanowi jego własność i jest wolna od praw osób trzecich.',
        'Sprzedający poinformował kupującego o następujących wadach: {{vady}}. Kupujący zapoznał się ze stanem rzeczy.',
      ],
    },
    {
      nadpis: 'Cena i wydanie rzeczy',
      odstavce: [
        'Cena wynosi **{{cena}}** (słownie: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Płatność (zaznacz):',
          moznosti: {
            gotowka: 'Cena została zapłacona gotówką przy podpisaniu umowy, co sprzedający potwierdza swoim podpisem.',
            przelew: 'Cena zostanie zapłacona przelewem na rachunek nr {{ucet}} przed wydaniem rzeczy.',
          },
        },
        'Wydanie rzeczy następuje po zapłacie całej ceny; z tą chwilą własność przechodzi na kupującego.',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      odstavce: [
        'Koszty umowy, w tym podatek od czynności cywilnoprawnych, ponosi kupujący.',
        'W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego. Umowę sporządzono w dwóch egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
