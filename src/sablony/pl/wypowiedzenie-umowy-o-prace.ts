/**
 * Wypowiedzenie umowy o pracę przez pracownika – Polska (tylko pracownik → pracodawca).
 * Kodeks pracy (t.j. Dz.U. 2025 poz. 277): art. 30 § 1 (sposoby rozwiązania), § 2¹ (koniec okresu: sobota / ostatni dzień miesiąca),
 * § 3 (forma pisemna), art. 34 (okres próbny), art. 36 § 1 (2 tyg. / 1 mies. / 3 mies.), art. 36 § 6 (wcześniejszy termin).
 * Forma elektroniczna = kwalifikowany podpis (art. 78¹ KC), doręczenie – art. 61 KC.
 * Przy każdej zmianie tekstu zwiększyć `verze` i `aktualizovano`.
 */
import type { Data, Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { KP, KC_TEKST, ZIELONA_LINIA_WYPOWIEDZENIE } from './zrodla';

const TYGODNIE: Record<string, number> = { probny_1t: 1, probny_2t: 2, '2t': 2 };
const MIESIACE: Record<string, number> = { '1m': 1, '3m': 3 };

/** Orientacyjny koniec okresu wypowiedzenia przy doręczeniu w dniu podpisu (art. 30 § 2¹ KP) */
function koniecOkresu(d: Data): Date | undefined {
  const od = naDatum(d.datum);
  const okres = String(d.okres ?? '');
  if (!od) return undefined;
  if (MIESIACE[okres]) return new Date(od.getFullYear(), od.getMonth() + MIESIACE[okres] + 1, 0);
  if (TYGODNIE[okres]) {
    const niedziela = pridejDny(od, 7 - od.getDay()); // pierwsza niedziela po doręczeniu
    return pridejDny(niedziela, 7 * TYGODNIE[okres] - 1);
  }
  return undefined;
}

export const wypowiedzenieUmowyOPrace: Sablona = {
  kod: 'PL-WYPOWIEDZENIE-PRACA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Wypowiedzenie umowy o pracę',
  podnadpis: 'oświadczenie pracownika (art. 30 i 36 Kodeksu pracy)',
  souborPdf: 'wypowiedzenie-umowy-o-prace',
  paticka: 'Utworzono za darmo · szablon PL-WYPOWIEDZENIE-PRACA v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'pracownik', vpravo: 'otrzymałem/am – pracodawca (data i podpis)' },
  slovo: { n: 'wypowiedzenie', g: 'wypowiedzenia', a: 'wypowiedzenie', l: 'wypowiedzeniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    if (d.tryb === 'porozumienie') {
      return naDatum(d.data_rozwiazania) ? [{ nazev: 'Proponowany ostatni dzień pracy (porozumienie stron)', datum: String(d.data_rozwiazania) }] : [];
    }
    const k = koniecOkresu(d);
    return k ? [{ nazev: 'Koniec okresu wypowiedzenia (orientacyjnie)', datum: isoDatum(k), popis: 'Przy doręczeniu pracodawcy w dniu podpisu. Okres tygodniowy kończy się w sobotę, miesięczny – ostatniego dnia miesiąca (art. 30 § 2¹ KP).' }] : [];
  },
  coDal: [
    'Wydrukuj dwa egzemplarze i podpisz oba własnoręcznie.',
    'Wręcz jeden egzemplarz pracodawcy (przełożonemu lub w kadrach) i poproś o datę i podpis odbioru na Twojej kopii. Możesz też wysłać list polecony za potwierdzeniem odbioru.',
    'Okres wypowiedzenia biegnie od doręczenia – im wcześniej je złożysz, tym wcześniej się skończy.',
    'Ustal z pracodawcą wykorzystanie urlopu, zdanie sprzętu i odbiór świadectwa pracy.',
  ],
  kontrola: [
    'Wypowiedzenie musi być na piśmie (art. 30 § 3 KP) – z własnoręcznym podpisem. Równoważna jest forma elektroniczna z kwalifikowanym podpisem elektronicznym (art. 78¹ KC); zwykły e-mail tego nie spełnia.',
    'Okres wypowiedzenia zależy od stażu u tego pracodawcy: 2 tygodnie (poniżej 6 miesięcy), 1 miesiąc (co najmniej 6 miesięcy), 3 miesiące (co najmniej 3 lata) – art. 36 § 1 KP. Dotyczy umów na czas nieokreślony i określony.',
    'Umowa na okres próbny: 3 dni robocze (okres próbny do 2 tygodni), 1 tydzień (dłuższy niż 2 tygodnie), 2 tygodnie (3 miesiące) – art. 34 KP.',
    'Okres liczony w tygodniach kończy się w sobotę, a w miesiącach – w ostatnim dniu miesiąca (art. 30 § 2¹ KP).',
    'Wypowiedzenie jest złożone, gdy dotrze do pracodawcy tak, że mógł zapoznać się z jego treścią (art. 61 KC). Zachowaj potwierdzenie odbioru.',
    'Pracownik nie musi podawać przyczyny wypowiedzenia – Kodeks pracy wymaga jej tylko od pracodawcy (art. 30 § 4 KP).',
    'Chcesz odejść szybciej? Strony mogą ustalić wcześniejszy termin rozwiązania umowy (art. 36 § 6 KP) albo rozwiązać ją za porozumieniem stron (art. 30 § 1 pkt 1 KP) – oba wymagają zgody pracodawcy.',
  ],
  zdroje: [KP, KC_TEKST, ZIELONA_LINIA_WYPOWIEDZENIE],

  kroky: [
    {
      id: 'pracownik',
      nazev: 'Pracownik',
      pole: [
        { id: 'p_imie', typ: 'text', popis: 'Imię i nazwisko', napoveda: 'Jak w umowie o pracę.', placeholder: 'np. Anna Nowak', sirka: 34, autocomplete: 'name' },
        { id: 'p_adres', typ: 'text', popis: 'Adres zamieszkania', napoveda: 'Na ten adres pracodawca wyśle np. świadectwo pracy.', placeholder: 'np. ul. Polna 7/12, 00-001 Warszawa', sirka: 46 },
        { id: 'p_stanowisko', typ: 'text', popis: 'Stanowisko (nieobowiązkowe)', napoveda: 'Jak w umowie. Pomaga kadrom szybciej przypisać pismo.', placeholder: 'np. specjalista ds. sprzedaży', sirka: 30 },
      ],
    },
    {
      id: 'pracodawca',
      nazev: 'Pracodawca i umowa',
      pole: [
        { id: 'z_nazwa', typ: 'text', popis: 'Pracodawca', napoveda: 'Pełna nazwa firmy z umowy o pracę.', placeholder: 'np. Przykład Sp. z o.o.', sirka: 34 },
        { id: 'z_adres', typ: 'text', popis: 'Adres pracodawcy', napoveda: 'Siedziba lub adres z umowy.', placeholder: 'np. ul. Prosta 1, 00-850 Warszawa', sirka: 46 },
        { id: 'umowa_data', typ: 'datum', popis: 'Data zawarcia umowy o pracę', napoveda: 'Data z umowy, którą wypowiadasz.', sirka: 14, polovina: true },
        {
          id: 'rodzaj',
          typ: 'volba',
          popis: 'Rodzaj umowy',
          napoveda: 'Sprawdź w umowie o pracę.',
          moznosti: [
            { hodnota: 'nieokreslony', popis: 'Na czas nieokreślony' },
            { hodnota: 'okreslony', popis: 'Na czas określony' },
            { hodnota: 'probny', popis: 'Na okres próbny' },
          ],
        },
      ],
    },
    {
      id: 'rozwiazanie',
      nazev: 'Sposób i termin',
      pole: [
        {
          id: 'tryb',
          typ: 'volba',
          popis: 'Jak chcesz zakończyć pracę',
          napoveda: 'Wypowiedzenie działa bez zgody pracodawcy. Porozumienie stron i krótszy termin wymagają jego zgody.',
          moznosti: [
            { hodnota: 'wypowiedzenie', popis: 'Wypowiedzenie z zachowaniem okresu wypowiedzenia' },
            { hodnota: 'skrocenie', popis: 'Wypowiedzenie + propozycja wcześniejszego terminu' },
            { hodnota: 'porozumienie', popis: 'Tylko propozycja rozwiązania za porozumieniem stron' },
          ],
        },
        {
          id: 'okres',
          typ: 'volba',
          popis: 'Okres wypowiedzenia',
          napoveda: 'Liczy się staż u tego pracodawcy w dniu wypowiedzenia. Przy umowie na okres próbny – długość okresu próbnego.',
          zobrazitKdyz: { pole: 'tryb', je: ['wypowiedzenie', 'skrocenie'] },
          moznosti: [
            { hodnota: '2t', popis: '2 tygodnie – staż poniżej 6 miesięcy' },
            { hodnota: '1m', popis: '1 miesiąc – staż co najmniej 6 miesięcy' },
            { hodnota: '3m', popis: '3 miesiące – staż co najmniej 3 lata' },
            { hodnota: 'probny_3d', popis: 'Okres próbny do 2 tygodni – 3 dni robocze' },
            { hodnota: 'probny_1t', popis: 'Okres próbny dłuższy niż 2 tygodnie – 1 tydzień' },
            { hodnota: 'probny_2t', popis: 'Okres próbny 3 miesiące – 2 tygodnie' },
          ],
        },
        { id: 'data_rozwiazania', typ: 'datum', popis: 'Proponowany ostatni dzień pracy', napoveda: 'Dzień, w którym chcesz zakończyć pracę.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tryb', je: ['skrocenie', 'porozumienie'] } },
        {
          id: 'prosby',
          typ: 'vice',
          popis: 'O co jeszcze prosisz (nieobowiązkowe)',
          napoveda: 'Krótkie prośby ułatwią rozliczenie na koniec pracy.',
          moznosti: [
            { hodnota: 'urlop', popis: 'Ustalenie wykorzystania lub rozliczenia urlopu' },
            { hodnota: 'swiadectwo', popis: 'Wydanie świadectwa pracy' },
            { hodnota: 'potwierdzenie', popis: 'Potwierdzenie daty rozwiązania umowy' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', napoveda: 'Uzupełnimy z Twojego adresu.', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adres' } },
        { id: 'datum', typ: 'datum', popis: 'Data', napoveda: 'Najlepiej dzień, w którym wręczysz wypowiedzenie.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Pracownik',
      vysvetleni: 'Kto składa oświadczenie.',
      odstavce: ['{{p_imie}}, {{p_adres}}, stanowisko: {{p_stanowisko}}'],
    },
    {
      nadpis: 'Pracodawca',
      vysvetleni: 'Komu doręczasz wypowiedzenie.',
      odstavce: ['{{z_nazwa}}, {{z_adres}}'],
    },
    {
      nadpis: 'Rozwiązanie umowy o pracę',
      vysvetleni: 'Wypowiedzenie z okresem z Kodeksu pracy albo propozycja porozumienia stron.',
      odstavce: [
        {
          volba: 'tryb',
          uvodVzor: 'Sposób rozwiązania (zaznacz jedną możliwość):',
          moznosti: {
            wypowiedzenie: 'Niniejszym wypowiadam umowę o pracę zawartą w dniu {{umowa_data}} z zachowaniem okresu wypowiedzenia.',
            skrocenie: 'Niniejszym wypowiadam umowę o pracę zawartą w dniu {{umowa_data}} z zachowaniem okresu wypowiedzenia. Jednocześnie proponuję, abyśmy ustalili wcześniejszy termin rozwiązania umowy – z dniem {{data_rozwiazania}} (art. 36 § 6 Kodeksu pracy). Jeżeli nie wyrażą Państwo zgody, umowa rozwiąże się z upływem okresu wypowiedzenia.',
            porozumienie: 'Proponuję rozwiązanie umowy o pracę zawartej w dniu {{umowa_data}} na mocy porozumienia stron (art. 30 § 1 pkt 1 Kodeksu pracy) z dniem {{data_rozwiazania}}. Proszę o odpowiedź i przygotowanie porozumienia do podpisu.',
          },
        },
        {
          volba: 'rodzaj',
          uvodVzor: 'Umowa zawarta (zaznacz):',
          moznosti: {
            nieokreslony: 'Umowa została zawarta na czas nieokreślony.',
            okreslony: 'Umowa została zawarta na czas określony.',
            probny: 'Umowa została zawarta na okres próbny.',
          },
        },
        {
          volba: 'okres',
          uvodVzor: 'Okres wypowiedzenia (zaznacz jedną możliwość):',
          kdyz: { pole: 'tryb', je: ['wypowiedzenie', 'skrocenie'] },
          moznosti: {
            '2t': 'Okres wypowiedzenia wynosi 2 tygodnie (art. 36 § 1 Kodeksu pracy) i kończy się w sobotę (art. 30 § 2¹ Kodeksu pracy).',
            '1m': 'Okres wypowiedzenia wynosi 1 miesiąc (art. 36 § 1 Kodeksu pracy) i kończy się ostatniego dnia miesiąca (art. 30 § 2¹ Kodeksu pracy).',
            '3m': 'Okres wypowiedzenia wynosi 3 miesiące (art. 36 § 1 Kodeksu pracy) i kończy się ostatniego dnia miesiąca (art. 30 § 2¹ Kodeksu pracy).',
            probny_3d: 'Okres wypowiedzenia umowy na okres próbny wynosi 3 dni robocze (art. 34 Kodeksu pracy).',
            probny_1t: 'Okres wypowiedzenia umowy na okres próbny wynosi 1 tydzień (art. 34 Kodeksu pracy) i kończy się w sobotę (art. 30 § 2¹ Kodeksu pracy).',
            probny_2t: 'Okres wypowiedzenia umowy na okres próbny wynosi 2 tygodnie (art. 34 Kodeksu pracy) i kończy się w sobotę (art. 30 § 2¹ Kodeksu pracy).',
          },
        },
      ],
    },
    {
      nadpis: 'Prośby',
      vysvetleni: 'Sprawy do załatwienia przed odejściem.',
      odstavce: [
        {
          vice: 'prosby',
          uvod: 'Jednocześnie proszę o:',
          moznosti: {
            urlop: 'ustalenie, w jaki sposób zostanie wykorzystany lub rozliczony przysługujący mi urlop wypoczynkowy',
            swiadectwo: 'wydanie świadectwa pracy',
            potwierdzenie: 'pisemne potwierdzenie daty rozwiązania umowy o pracę',
          },
        },
        'Z poważaniem',
      ],
    },
  ],
};
