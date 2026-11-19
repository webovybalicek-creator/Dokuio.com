/**
 * Umowa darowizny (wykonana od razu) – Polska. Art. 888 i nast. KC. Oświadczenie darczyńcy wymaga aktu notarialnego,
 * ale umowa wykonana jest ważna (art. 890 § 1 KC) – stąd tylko darowizna przekazana przy podpisaniu.
 * Zwolnienie z podatku dla najbliższej rodziny: SD-Z2 w 6 miesięcy, pieniądze udokumentowane przelewem (art. 4a ustawy o podatku od spadków i darowizn).
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { KC, SD_ZWOLNIENIE, TIP_TOZSAMOSC } from './zrodla';
import { naDatum, pridejMesice, isoDatum } from '../terminy';

export const umowaDarowizny: Sablona = {
  kod: 'PL-DAROWIZNA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa darowizny',
  podnadpis: 'wykonanej przy jej zawarciu (art. 888 i nast. Kodeksu cywilnego)',
  souborPdf: 'umowa-darowizny',
  paticka: 'Utworzono za darmo · szablon PL-DAROWIZNA v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'darczyńca', vpravo: 'obdarowany' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    return od ? [{ nazev: 'SD-Z2: ostatni dzień zgłoszenia darowizny', datum: isoDatum(pridejMesice(od, 6)), popis: 'Dotyczy najbliższej rodziny, gdy wartość darowizn od tej osoby w 5 lat przekracza 36 120 zł.' }] : [];
  },
  coDal: [
    'Wydrukuj dwa egzemplarze, obie strony podpisują oba.',
    'Pieniądze przekaż przelewem na konto obdarowanego – w najbliższej rodzinie to warunek zwolnienia z podatku.',
    'Obdarowany z najbliższej rodziny: zgłoś darowiznę na SD-Z2 w ciągu 6 miesięcy, jeśli przekracza kwotę wolną.',
  ],
  kontrola: [
    'Ten wzór jest tylko dla darowizny przekazanej od razu. Obietnica darowizny na później wymaga aktu notarialnego (art. 890 KC).',
    'Nieruchomości darujesz wyłącznie u notariusza.',
    'Najbliższa rodzina (małżonek, dzieci, wnuki, rodzice, dziadkowie, rodzeństwo, pasierb, ojczym, macocha) jest zwolniona z podatku po zgłoszeniu SD-Z2 w ciągu 6 miesięcy – pieniądze muszą trafić na rachunek obdarowanego ([podatki.gov.pl](https://www.podatki.gov.pl/poradniki-i-informatory/nabycie-spadku-lub-darowizny-w-najblizszej-rodzinie-zwolnienie-od-podatku-sd)).',
    'Kwota wolna w I grupie wynosi 36 120 zł od jednej osoby w ciągu 5 lat; dalsze osoby mają niższe kwoty wolne i płacą podatek (zeznanie SD-3).',
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC, SD_ZWOLNIENIE],
  kroky: [
    {
      id: 'strony',
      nazev: 'Darczyńca i obdarowany',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Darczyńca – imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Obdarowany – imię i nazwisko', sirka: 34 },
        { id: 'k_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'vztah', typ: 'text', popis: 'Stopień pokrewieństwa (opcjonalnie)', napoveda: 'Ważne dla podatku, np. córka, brat.', sirka: 20 },
      ],
    },
    {
      id: 'dar',
      nazev: 'Przedmiot darowizny',
      pole: [
        {
          id: 'predmet',
          typ: 'volba',
          popis: 'Co jest darowane',
          moznosti: [
            { hodnota: 'penize', popis: 'Pieniądze' },
            { hodnota: 'vec', popis: 'Rzecz ruchoma (np. samochód, biżuteria)' },
          ],
        },
        { id: 'castka', typ: 'castka', popis: 'Kwota (zł)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        { id: 'ucet', typ: 'text', popis: 'Rachunek obdarowanego', napoveda: 'Przelew dokumentuje darowiznę dla urzędu skarbowego.', sirka: 30, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        { id: 'vec_popis', typ: 'textarea', popis: 'Opis rzeczy', placeholder: 'np. samochód osobowy Skoda Fabia, VIN …, nr rej. …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'hodnota', typ: 'castka', popis: 'Wartość rzeczy (zł)', napoveda: 'Wartość rynkowa – ważna dla podatku.', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => kwotaSlownie(d.castka) },
  clanky: [
    {
      nadpis: 'Strony',
      odstavce: [
        '**Darczyńca:** {{p_jmeno}}, PESEL {{p_pesel}}, zamieszkały/a {{p_adresa}}',
        '**Obdarowany:** {{k_jmeno}}, PESEL {{k_pesel}}, zamieszkały/a {{k_adresa}}, stopień pokrewieństwa: {{vztah}}',
      ],
    },
    {
      nadpis: 'Przedmiot darowizny',
      vysvetleni: 'Co jest darowane.',
      odstavce: [
        {
          volba: 'predmet',
          uvodVzor: 'Przedmiot (zaznacz):',
          moznosti: {
            penize: 'Darczyńca daruje obdarowanemu kwotę {{castka}} (słownie: {{castka_slovy}}), przelaną w dniu zawarcia umowy na rachunek obdarowanego nr {{ucet}}.',
            vec: 'Darczyńca daruje obdarowanemu następującą rzecz: {{vec_popis}}, o wartości rynkowej {{hodnota}}. Rzecz została wydana obdarowanemu przy podpisaniu umowy.',
          },
        },
        'Obdarowany darowiznę przyjmuje i potwierdza jej otrzymanie.',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      odstavce: [
        'Strony oświadczają, że darowizna została wykonana przy zawarciu umowy (art. 890 § 1 Kodeksu cywilnego).',
        'W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego. Umowę sporządzono w dwóch egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
