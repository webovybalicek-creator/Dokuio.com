/**
 * Uznanie długu – Polska. Uznanie roszczenia przerywa bieg przedawnienia (art. 123 § 1 pkt 2 KC); forma pisemna dla dowodu.
 * Opcjonalnie spłata w ratach. Bez kar umownych.
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum, pripominkySplatek } from '../terminy';
import { umowaPozyczki } from './umowa-pozyczki';
import { KC, TIP_TOZSAMOSC } from './zrodla';

export const uznanieDlugu: Sablona = {
  kod: 'PL-UZNANIE-DLUGU',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Uznanie długu',
  podnadpis: 'oświadczenie dłużnika (art. 123 § 1 pkt 2 Kodeksu cywilnego)',
  souborPdf: 'uznanie-dlugu',
  paticka: 'Utworzono za darmo · szablon PL-UZNANIE-DLUGU v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'dłużnik', vpravo: 'wierzyciel (zgoda na raty)' },
  slovo: { n: 'uznanie długu', g: 'uznania długu', a: 'uznanie długu', l: 'uznaniu długu' },
  prilohy: (d) => (d.splaceni === 'splatky' ? (umowaPozyczki.prilohy?.(d) ?? []) : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Rata', 'zł', { celkem: (n) => `łącznie ${n} rat`, posledni: 'ostatnia' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Termin zapłaty długu', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Wydrukuj dwa egzemplarze. Dłużnik musi podpisać – bez jego podpisu dokument nie ma wartości.',
    'Oryginał z podpisem dłużnika zatrzymuje wierzyciel.',
    'Wpłaty gotówkowe potwierdzaj pokwitowaniem, przelewy dokumentuje wyciąg z konta.',
  ],
  kontrola: [
    'Podaj tytuł długu konkretnie (z jakiej umowy lub zdarzenia, z jakiego dnia) i dokładną kwotę.',
    'Uznanie długu przerywa bieg przedawnienia – po nim termin biegnie od nowa (art. 123 KC).',
    'Podpis dłużnika własnoręczny. Zachowaj oryginał.',
    'Nie wywieraj presji – uznanie wymuszone groźbą można podważyć.',
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC],
  kroky: [
    {
      id: 'strony',
      nazev: 'Dłużnik i wierzyciel',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Dłużnik – imię i nazwisko', sirka: 34 },
        { id: 'p_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Wierzyciel – imię i nazwisko', sirka: 34, autocomplete: 'name' },
        { id: 'k_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
      ],
    },
    {
      id: 'dlug',
      nazev: 'Dług',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Kwota długu (zł)', napoveda: 'Ile dłużnik jest dziś winien. Słownie dopiszemy sami.', sirka: 14, polovina: true },
        { id: 'duvod_popis', typ: 'text', popis: 'Tytuł długu', placeholder: 'np. pożyczka z umowy z dnia 3.03.2026', sirka: 56 },
      ],
    },
    {
      id: 'splata',
      nazev: 'Spłata',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Jak dług zostanie spłacony',
          moznosti: [
            { hodnota: 'naraz', popis: 'Jednorazowo do określonej daty' },
            { hodnota: 'splatky', popis: 'W ratach miesięcznych' },
          ],
        },
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zapłacić do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Rata miesięczna (zł)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Dzień miesiąca', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Miesiąc pierwszej raty', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet', typ: 'text', popis: 'Numer rachunku wierzyciela', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => kwotaSlownie(d.castka) },
  clanky: [
    {
      nadpis: 'Strony',
      vysvetleni: 'Kto jest winien i komu.',
      odstavce: ['**Dłużnik:** {{p_jmeno}}, PESEL {{p_pesel}}, zamieszkały/a {{p_adresa}}', '**Wierzyciel:** {{k_jmeno}}, PESEL {{k_pesel}}, zamieszkały/a {{k_adresa}}'],
    },
    {
      nadpis: 'Uznanie długu',
      vysvetleni: 'Tytuł i wysokość długu.',
      odstavce: [
        'Dłużnik oświadcza, że uznaje swój dług wobec wierzyciela w kwocie **{{castka}}** (słownie: {{castka_slovy}}) i zobowiązuje się go spłacić.',
        'Tytuł długu: {{duvod_popis}}.',
      ],
    },
    {
      nadpis: 'Spłata',
      vysvetleni: 'Do kiedy lub w jakich ratach.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Sposób spłaty (zaznacz jedną możliwość):',
          moznosti: {
            naraz: 'Dłużnik spłaci dług jednorazowo najpóźniej do dnia {{zaplatit_do}}.',
            splatky: 'Dłużnik spłaci dług w ratach miesięcznych po {{splatka}}, płatnych do {{splatka_den}}. dnia każdego miesiąca, zgodnie z harmonogramem w załączniku. Ostatnia rata może być niższa. W razie opóźnienia z zapłatą dwóch kolejnych rat cała pozostała kwota staje się natychmiast wymagalna.',
          },
        },
        'Wpłaty następują na rachunek nr {{ucet}} lub gotówką za pokwitowaniem. Wcześniejsza spłata jest zawsze możliwa.',
      ],
    },
  ],
};
