/** Pokwitowanie odbioru pieniędzy – Polska. Art. 462 Kodeksu cywilnego (prawo żądania pokwitowania). */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { KC, TIP_TOZSAMOSC, TIP_GOTOWKA } from './zrodla';

export const pokwitowanie: Sablona = {
  kod: 'PL-POKWITOWANIE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Pokwitowanie odbioru pieniędzy',
  podnadpis: 'potwierdzenie przyjęcia gotówki (art. 462 Kodeksu cywilnego)',
  souborPdf: 'pokwitowanie-odbioru-pieniedzy',
  paticka: 'Utworzono za darmo · szablon PL-POKWITOWANIE v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'przekazujący', vpravo: 'odbierający' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'pokwitowanie', g: 'pokwitowania', a: 'pokwitowanie', l: 'pokwitowaniu' },
  coDal: ['Przelicz pieniądze przed podpisaniem.', 'Każda strona zatrzymuje jeden egzemplarz.'],
  kontrola: [
    'Kwotę podaj liczbowo i słownie – słownie uzupełnimy za Ciebie.',
    'Tytuł płatności opisz konkretnie (np. „cena za samochód VIN …”).',
    'Dłużnik, który spełnia świadczenie, może żądać pokwitowania (art. 462 KC).',
    TIP_TOZSAMOSC,
    TIP_GOTOWKA,
  ],
  zdroje: [KC],
  kroky: [
    {
      id: 'dane',
      nazev: 'Kto i ile',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Odbierający – imię i nazwisko', napoveda: 'Kto przyjmuje pieniądze i podpisuje pokwitowanie.', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adres odbierającego', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Przekazujący – imię i nazwisko', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Adres przekazującego', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Kwota (zł)', sirka: 12, polovina: true },
        { id: 'ucel', typ: 'text', popis: 'Tytułem', placeholder: 'np. ceny za samochód Skoda Octavia, VIN …', sirka: 56 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => kwotaSlownie(d.castka) },
  clanky: [
    {
      nadpis: 'Pokwitowanie',
      odstavce: [
        'Ja, **{{p_jmeno}}**, zamieszkały/a {{p_adresa}},',
        'potwierdzam, że otrzymałem/am dziś od **{{k_jmeno}}**, zamieszkałego/ej {{k_adresa}}, gotówką kwotę **{{castka}}** (słownie: {{castka_slovy}}) tytułem {{ucel}}.',
        'Kwotę przeliczyłem/am i przyjąłem/am w podanej wysokości.',
      ],
    },
  ],
};
