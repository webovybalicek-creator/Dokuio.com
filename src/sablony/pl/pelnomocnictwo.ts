/** Pełnomocnictwo (szczególne, do określonej sprawy) – Polska. Art. 98–99 KC. */
import type { Sablona } from '../typy';
import { KC, TIP_TOZSAMOSC, OPLATA_PELNOMOCNICTWO } from './zrodla';

export const pelnomocnictwo: Sablona = {
  kod: 'PL-PELNOMOCNICTWO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Pełnomocnictwo',
  podnadpis: 'udzielone na podstawie art. 98 i nast. Kodeksu cywilnego',
  souborPdf: 'pelnomocnictwo',
  paticka: 'Utworzono za darmo · szablon PL-PELNOMOCNICTWO v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'mocodawca', vpravo: 'pełnomocnik – przyjmuję pełnomocnictwo' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'pełnomocnictwo', g: 'pełnomocnictwa', a: 'pełnomocnictwo', l: 'pełnomocnictwie' },
  coDal: ['Wydrukuj pełnomocnictwo, mocodawca podpisuje je własnoręcznie.', 'Pełnomocnik okazuje je w oryginale razem ze swoim dowodem osobistym.'],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Pełnomocnictwo wygasa', datum: d.platnost_do }] : []),
  kontrola: [
    'Zakres opisz konkretnie – co dokładnie pełnomocnik może zrobić. Zbyt ogólne pełnomocnictwa bywają odrzucane.',
    'Do niektórych czynności (np. sprzedaż nieruchomości) potrzebna jest forma aktu notarialnego; banki często mają własne formularze.',
    OPLATA_PELNOMOCNICTWO,
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC],
  kroky: [
    {
      id: 'osoby',
      nazev: 'Kto kogo upoważnia',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Mocodawca – imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'z_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'z_doklad', typ: 'text', popis: 'Seria i nr dowodu osobistego', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'm_jmeno', typ: 'text', popis: 'Pełnomocnik – imię i nazwisko', sirka: 34 },
        { id: 'm_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'm_doklad', typ: 'text', popis: 'Seria i nr dowodu osobistego', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
      ],
    },
    {
      id: 'zakres',
      nazev: 'Zakres i ważność',
      pole: [
        { id: 'rozsah', typ: 'textarea', popis: 'Do czego upoważniasz', placeholder: 'np. odbioru przesyłki poleconej adresowanej do mocodawcy w placówce Poczty Polskiej Warszawa 1', sirka: 64 },
        { id: 'platnost_do', typ: 'datum', popis: 'Ważne do (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Pełnomocnictwo',
      odstavce: [
        'Ja, niżej podpisany/a **{{z_jmeno}}**, PESEL {{z_pesel}}, legitymujący/a się dowodem osobistym {{z_doklad}}, zamieszkały/a {{z_adresa}} (mocodawca),',
        'udzielam pełnomocnictwa **{{m_jmeno}}**, PESEL {{m_pesel}}, legitymującemu/ej się dowodem osobistym {{m_doklad}}, zamieszkałemu/ej {{m_adresa}} (pełnomocnik),',
        'do: {{rozsah}}',
        'Pełnomocnictwo jest ważne do {{platnost_do}}, a w braku tej daty do załatwienia sprawy lub odwołania.',
      ],
    },
  ],
};
