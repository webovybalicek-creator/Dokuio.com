/**
 * Reklamacja – niezgodność towaru z umową (konsument) – Polska. Art. 43a–43g ustawy o prawach konsumenta (od 2023):
 * 2 lata odpowiedzialności, najpierw naprawa lub wymiana; odpowiedź w 14 dni, inaczej reklamację uznaje się za uzasadnioną (art. 7a).
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { UPK, UOKIK } from './zrodla';

export const reklamacja: Sablona = {
  kod: 'PL-REKLAMACJA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Reklamacja',
  podnadpis: 'niezgodność towaru z umową (art. 43a i nast. ustawy o prawach konsumenta)',
  souborPdf: 'reklamacja',
  paticka: 'Utworzono za darmo · szablon PL-REKLAMACJA v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'konsument', vpravo: 'przyjął w imieniu sprzedawcy (data i podpis)' },
  slovo: { n: 'reklamacja', g: 'reklamacji', a: 'reklamację', l: 'reklamacji' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Sprzedawca musi odpowiedzieć na reklamację', datum: isoDatum(pridejDny(od, 14)), popis: 'Brak odpowiedzi w 14 dni oznacza uznanie reklamacji (art. 7a ustawy o prawach konsumenta).' }] : [];
  },
  coDal: [
    'Złóż reklamację w sklepie lub wyślij e-mailem/pocztą – zachowaj potwierdzenie.',
    'Sprzedawca ma 14 dni na odpowiedź; jeśli jej nie udzieli, reklamację uważa się za uznaną.',
    'Problem? Pomoc daje miejski lub powiatowy rzecznik konsumentów.',
  ],
  kontrola: [
    'Sprzedawca odpowiada za niezgodność towaru z umową, która ujawni się w ciągu 2 lat od wydania towaru.',
    'Najpierw możesz żądać naprawy lub wymiany; obniżenia ceny lub odstąpienia – gdy naprawa i wymiana są niemożliwe, nieudane albo niezgodność jest istotna.',
    'Odpowiedź w 14 dni: brak odpowiedzi oznacza, że sprzedawca uznał żądanie (art. 7a ustawy o prawach konsumenta).',
    'Opisz wadę konkretnie i zrób zdjęcia. Zachowaj dowód zakupu (paragon, faktura, wyciąg z konta).',
    'Gwarancja producenta to odrębne, dobrowolne uprawnienie – nie zastępuje odpowiedzialności sprzedawcy.',
  ],
  zdroje: [UPK, UOKIK],
  kroky: [
    {
      id: 'sklep',
      nazev: 'Sprzedawca',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Sprzedawca (nazwa firmy)', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'NIP (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'pr_adresa', typ: 'text', popis: 'Adres sklepu lub do reklamacji', sirka: 46 },
      ],
    },
    {
      id: 'towar',
      nazev: 'Towar i wada',
      pole: [
        { id: 'zbozi', typ: 'text', popis: 'Reklamowany towar', placeholder: 'np. pralka Bosch WAN28264, nr seryjny FD9803', sirka: 46 },
        { id: 'doklad', typ: 'text', popis: 'Nr paragonu, faktury lub zamówienia', sirka: 18, polovina: true },
        { id: 'koupeno', typ: 'datum', popis: 'Data zakupu / wydania', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'Opis wady', sirka: 64 },
        { id: 'projevila', typ: 'datum', popis: 'Data stwierdzenia wady', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'zadanie',
      nazev: 'Czego żądasz',
      pole: [
        {
          id: 'pozadavek',
          typ: 'volba',
          popis: 'Żądanie',
          moznosti: [
            { hodnota: 'oprava', popis: 'Naprawa' },
            { hodnota: 'vymena', popis: 'Wymiana na nowy' },
            { hodnota: 'sleva', popis: 'Obniżenie ceny' },
            { hodnota: 'odstoupeni', popis: 'Odstąpienie od umowy i zwrot pieniędzy' },
          ],
        },
        { id: 'p_jmeno', typ: 'text', popis: 'Imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adres', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-mail lub telefon', sirka: 30 },
        { id: 'ucet', typ: 'text', popis: 'Numer rachunku (przy zwrocie pieniędzy)', sirka: 30, zobrazitKdyz: { pole: 'pozadavek', je: ['sleva', 'odstoupeni'] } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Sprzedawca', odstavce: ['{{pr_nazev}}, NIP {{pr_ico}}, {{pr_adresa}}'] },
    {
      nadpis: 'Reklamacja',
      vysvetleni: 'Co jest niezgodne z umową i czego żądasz.',
      odstavce: [
        'Zgłaszam niezgodność z umową towaru: {{zbozi}}, dowód zakupu nr {{doklad}}, zakupionego / wydanego dnia {{koupeno}}.',
        'Opis niezgodności: {{vada}}',
        'Niezgodność stwierdziłem/am dnia {{projevila}}.',
        {
          volba: 'pozadavek',
          uvod: 'Na podstawie ustawy o prawach konsumenta żądam',
          uvodVzor: 'Na podstawie ustawy o prawach konsumenta żądam (zaznacz):',
          moznosti: {
            oprava: 'naprawy towaru.',
            vymena: 'wymiany towaru na wolny od wad.',
            sleva: 'obniżenia ceny i zwrotu różnicy na rachunek nr {{ucet}}.',
            odstoupeni: 'odstąpienia od umowy i zwrotu ceny na rachunek nr {{ucet}}.',
          },
        },
        'Proszę o odpowiedź na reklamację w terminie 14 dni.',
      ],
    },
    { nadpis: 'Konsument', odstavce: ['{{p_jmeno}}, {{p_adresa}}, kontakt: {{p_kontakt}}'] },
  ],
};
