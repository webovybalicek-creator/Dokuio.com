/**
 * Odstąpienie od umowy zawartej na odległość – Polska. Art. 27 ustawy o prawach konsumenta (14 dni),
 * wzór formularza – załącznik nr 2, zwrot płatności w 14 dni (art. 32), wydłużenie o 12 miesięcy przy braku pouczenia (art. 29).
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { UPK, UOKIK } from './zrodla';

export const odstapienieOdUmowy: Sablona = {
  kod: 'PL-ODSTAPIENIE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Odstąpienie od umowy',
  podnadpis: 'zawartej na odległość (art. 27 ustawy o prawach konsumenta)',
  souborPdf: 'odstapienie-od-umowy',
  paticka: 'Utworzono za darmo · szablon PL-ODSTAPIENIE v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'konsument', vpravo: 'przyjął w imieniu sprzedawcy (przy złożeniu osobiście)' },
  slovo: { n: 'odstąpienie', g: 'odstąpienia', a: 'odstąpienie', l: 'odstąpieniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Sprzedawca ma zwrócić pieniądze (orientacyjnie)', datum: isoDatum(pridejDny(od, 14)), popis: 'Do 14 dni od otrzymania oświadczenia; może wstrzymać się do czasu otrzymania towaru lub dowodu jego odesłania.' }] : [];
  },
  coDal: [
    'Wyślij oświadczenie e-mailem, przez formularz w sklepie albo pocztą – zachowaj dowód wysłania.',
    'Odeślij towar najpóźniej w ciągu 14 dni od odstąpienia.',
    'Sprzedawca zwraca wszystkie płatności, w tym koszt najtańszej oferowanej dostawy, w ciągu 14 dni.',
    'Problem? Pomoc daje miejski lub powiatowy rzecznik konsumentów.',
  ],
  kontrola: [
    'Termin wynosi 14 dni od otrzymania towaru (przy usługach od zawarcia umowy). Wystarczy wysłać oświadczenie przed jego upływem.',
    'Dyrektywa UE 2023/2673 wprowadza w sklepach internetowych przycisk „odstąp od umowy tutaj”; polska nowelizacja ustawy o prawach konsumenta jest w przygotowaniu. To pismo lub e-mail pozostaje skutecznym sposobem odstąpienia.',
    'Prawo przysługuje przy zakupie od przedsiębiorcy na odległość (sklep internetowy, telefon) lub poza lokalem – nie w sklepie stacjonarnym i nie między osobami prywatnymi.',
    'Wyjątki: m.in. towar na zamówienie, szybko psujący się, rozpakowane artykuły higieniczne, rozpakowane nagrania i programy, usługi z określoną datą.',
    'Koszt odesłania ponosisz tylko, jeśli sprzedawca wcześniej o tym poinformował.',
    'Jeśli sprzedawca nie pouczył o prawie odstąpienia, termin wydłuża się o 12 miesięcy.',
  ],
  zdroje: [UPK, UOKIK],
  kroky: [
    {
      id: 'sklep',
      nazev: 'Sprzedawca',
      popis: 'Dane znajdziesz w regulaminie lub stopce sklepu.',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Sprzedawca (nazwa firmy)', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'NIP (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'pr_adresa', typ: 'text', popis: 'Adres lub e-mail do odstąpienia', sirka: 46 },
      ],
    },
    {
      id: 'zakup',
      nazev: 'Zakup',
      pole: [
        { id: 'zbozi', typ: 'textarea', popis: 'Towar lub usługa', placeholder: 'np. słuchawki Sony WH-1000XM5, czarne', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Numer zamówienia', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Data zawarcia umowy', sirka: 14, polovina: true },
        { id: 'prevzato', typ: 'datum', popis: 'Data odbioru', napoveda: 'Od tego dnia biegnie 14 dni.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'ty',
      nazev: 'Twoje dane',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adres', sirka: 46 },
        { id: 'ucet', typ: 'text', popis: 'Numer rachunku do zwrotu (opcjonalnie)', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Adresat', odstavce: ['{{pr_nazev}}, NIP {{pr_ico}}, {{pr_adresa}}'] },
    {
      nadpis: 'Oświadczenie o odstąpieniu od umowy',
      vysvetleni: 'Treść według wzoru z załącznika nr 2 do ustawy. Nie musisz podawać przyczyny.',
      odstavce: [
        'Niniejszym informuję o moim odstąpieniu od umowy sprzedaży następujących rzeczy / umowy o świadczenie następującej usługi: {{zbozi}}',
        'Data zawarcia umowy: {{objednano}} · data odbioru: {{prevzato}} · numer zamówienia: {{objednavka}}',
        'Proszę o zwrot płatności na rachunek nr {{ucet}}.',
      ],
    },
    { nadpis: 'Konsument', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
  ],
};
