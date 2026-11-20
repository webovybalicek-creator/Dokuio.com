/** Oświadczenie – Polska. Ogólne pisemne oświadczenie osoby fizycznej; ustawa nie przewiduje wzoru. */
import type { Sablona } from '../typy';
import { KC } from './zrodla';

export const oswiadczenie: Sablona = {
  kod: 'PL-OSWIADCZENIE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Oświadczenie',
  podnadpis: 'pisemne oświadczenie osoby fizycznej',
  souborPdf: 'oswiadczenie',
  paticka: 'Utworzono bezpłatnie · szablon PL-OSWIADCZENIE v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za prawdziwość treści odpowiada składający',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'podpis składającego oświadczenie', vpravo: 'poświadczenie podpisu (tylko jeśli wymagane)' },
  slovo: { n: 'oświadczenie', g: 'oświadczenia', a: 'oświadczenie', l: 'oświadczeniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: ['Wydrukuj i podpisz własnoręcznie.', 'Jeśli instytucja wymaga poświadczenia podpisu, podpisz dopiero u notariusza lub w urzędzie.', 'Zachowaj kopię.'],
  kontrola: [
    'Pisz tylko to, co jest prawdą. Fałszywe oświadczenie może mieć skutki prawne, a gdy przepis przewiduje oświadczenie pod rygorem odpowiedzialności karnej – także karne.',
    'Najpierw sprawdź, czy instytucja nie ma własnego formularza (np. z pouczeniem o odpowiedzialności karnej) – wtedy użyj go.',
    'Formułuj konkretnie: kto, co, od kiedy.',
    'Poświadczenie podpisu jest potrzebne tylko wtedy, gdy wymaga go odbiorca.',
  ],
  zdroje: [KC],
  kroky: [
    {
      id: 'osoba',
      nazev: 'Kto składa oświadczenie',
      pole: [
        { id: 'jmeno', typ: 'text', popis: 'Imię i nazwisko', placeholder: 'np. Anna Kowalska', sirka: 34, autocomplete: 'name' },
        { id: 'narozeni', typ: 'datum', popis: 'Data urodzenia', sirka: 14, polovina: true },
        { id: 'adresa', typ: 'text', popis: 'Adres zamieszkania', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
      ],
    },
    {
      id: 'tresc',
      nazev: 'Treść',
      pole: [
        { id: 'pro', typ: 'text', popis: 'Dla kogo (opcjonalnie)', placeholder: 'np. Szkoła Podstawowa nr 5', sirka: 46 },
        { id: 'ucel', typ: 'text', popis: 'Cel (opcjonalnie)', sirka: 46 },
        { id: 'text', typ: 'textarea', popis: 'Treść oświadczenia', napoveda: 'Zacznij od „że …”. Wstęp dodamy sami.', placeholder: 'że od 1 stycznia 2025 r. mieszkam pod adresem ul. Długa 12 w Warszawie.', sirka: 70 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Składający oświadczenie', odstavce: ['{{jmeno}}, data urodzenia {{narozeni}}, zamieszkały(a): {{adresa}}'] },
    {
      nadpis: 'Oświadczenie',
      odstavce: ['Dla: {{pro}}. Cel: {{ucel}}.', 'Ja, niżej podpisany(a), oświadczam, {{text}}', 'Oświadczam, że powyższe dane są prawdziwe i kompletne.'],
    },
  ],
};
