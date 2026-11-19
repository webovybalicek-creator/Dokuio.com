/**
 * Pełnomocnictwo do rejestracji pojazdu – Polska. Art. 98–99 KC; rejestracja w wydziale komunikacji (Prawo o ruchu drogowym).
 * Opłata skarbowa 17 zł za złożenie pełnomocnictwa, z wyjątkiem najbliższej rodziny.
 */
import type { Sablona } from '../typy';
import { KC, PORD, GOV_ZBYCIE, TIP_TOZSAMOSC, OPLATA_PELNOMOCNICTWO } from './zrodla';

export const pelnomocnictwoRejestracja: Sablona = {
  kod: 'PL-PELNOMOCNICTWO-POJAZD',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Pełnomocnictwo',
  podnadpis: 'do załatwienia spraw związanych z rejestracją pojazdu',
  souborPdf: 'pelnomocnictwo-rejestracja-pojazdu',
  paticka: 'Utworzono za darmo · szablon PL-PELNOMOCNICTWO-POJAZD v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'mocodawca (właściciel pojazdu)', vpravo: 'pełnomocnik' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'pełnomocnictwo', g: 'pełnomocnictwa', a: 'pełnomocnictwo', l: 'pełnomocnictwie' },
  coDal: [
    'Wydrukuj pełnomocnictwo, właściciel podpisuje je własnoręcznie.',
    'Pełnomocnik zabiera: pełnomocnictwo, swój dowód osobisty, dokumenty pojazdu (umowa kupna, dowód rejestracyjny, polisa OC) i potwierdzenie opłaty skarbowej 17 zł (jeśli nie jest najbliższą rodziną).',
    'Nabywca rejestruje pojazd w ciągu 30 dni od zakupu.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Pełnomocnictwo do rejestracji wygasa', datum: d.platnost_do }] : []),
  kontrola: [
    'Dane pojazdu (VIN, numer rejestracyjny) przepisz dokładnie z dowodu rejestracyjnego.',
    OPLATA_PELNOMOCNICTWO,
    'Niektóre wydziały komunikacji mają własny formularz pełnomocnictwa – sprawdź stronę swojego starostwa lub urzędu miasta.',
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC, PORD, GOV_ZBYCIE],
  prevzit: {
    kod: 'PL-SPRZEDAZ-AUTO',
    nazev: 'umowę kupna-sprzedaży',
    mapuj: (d) => ({
      z_jmeno: d.k_jmeno,
      z_pesel: d.k_pesel,
      z_doklad: d.k_doklad,
      z_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      misto: d.misto,
    }),
  },
  kroky: [
    {
      id: 'osoby',
      nazev: 'Kto kogo upoważnia',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Mocodawca (właściciel) – imię i nazwisko', sirka: 34, autocomplete: 'name' },
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
      id: 'pojazd',
      nazev: 'Pojazd',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Marka i model', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Numer VIN', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Numer rejestracyjny', sirka: 12, polovina: true },
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
        'Ja, niżej podpisany/a **{{z_jmeno}}**, PESEL {{z_pesel}}, dowód osobisty {{z_doklad}}, zamieszkały/a {{z_adresa}},',
        'upoważniam **{{m_jmeno}}**, PESEL {{m_pesel}}, dowód osobisty {{m_doklad}}, zamieszkałego/ą {{m_adresa}},',
        'do reprezentowania mnie przed organem rejestrującym we wszystkich sprawach związanych z rejestracją pojazdu marki {{znacka}}, VIN {{vin}}, nr rejestracyjny {{spz}}, w szczególności do złożenia wniosku, podpisywania dokumentów, odbioru dowodu rejestracyjnego i tablic rejestracyjnych oraz uiszczenia opłat.',
        'Pełnomocnictwo jest ważne do {{platnost_do}}, a w braku tej daty do załatwienia sprawy lub odwołania.',
      ],
    },
  ],
};
