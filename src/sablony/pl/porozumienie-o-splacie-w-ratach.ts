/**
 * Porozumienie o spłacie zadłużenia w ratach – Polska. Umowa dwustronna (wierzyciel + dłużnik) o istniejącym długu:
 * harmonogram, utrata dobrodziejstwa rat (postanowienie umowne – swoboda umów, art. 353¹ KC; ustawowo art. 458 KC),
 * odsetki za opóźnienie (art. 481 KC), opcjonalnie uznanie długu (art. 123 § 1 pkt 2 KC) i warunkowe zwolnienie z części długu.
 * Różni się od „uznania długu” (jednostronne oświadczenie dłużnika). Przy każdej zmianie tekstu zwiększyć `verze` i `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { isoDatum, pripominkySplatek, splatky, cislo, souhrnSplatek } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { KC, KC_TEKST, TIP_TOZSAMOSC, TIP_GOTOWKA } from './zrodla';

const zl = (n: number) => `${formatCislo(String(n))} zł`;

export const porozumienieOSplacieWRatach: Sablona = {
  kod: 'PL-POROZUMIENIE-RATY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Porozumienie o spłacie zadłużenia w ratach',
  podnadpis: 'zawarte na podstawie art. 353¹ ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
  souborPdf: 'porozumienie-o-splacie-w-ratach',
  paticka: 'Utworzono za darmo · szablon PL-POROZUMIENIE-RATY v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'wierzyciel', vpravo: 'dłużnik' },
  slovo: { n: 'porozumienie', g: 'porozumienia', a: 'porozumienie', l: 'porozumieniu' },
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Załącznik nr 1 · Harmonogram spłat',
        popis: `Razem ${zl(cislo(d.castka))} w ${s.length} miesięcznych ratach, płatnych do ${Math.round(cislo(d.splatka_den))}. dnia miesiąca.`,
        souhrn: souhrnSplatek(s, zl(cislo(d.castka)), d),
        hlavicka: ['Rata', 'Termin zapłaty', 'Kwota', 'Pozostało do spłaty'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), zl(x.castka), zl(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Harmonogram sporządzono według uzgodnionych rat; w razie rozbieżności rozstrzyga treść porozumienia.',
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Rata zadłużenia', 'zł', { celkem: (n) => `łącznie ${n} rat`, posledni: 'ostatnia' }),
  coDal: [
    'Wydrukuj porozumienie w dwóch egzemplarzach z harmonogramem; obie strony podpisują oba.',
    'Raty najlepiej płacić przelewem z tytułem „rata nr … wg porozumienia z dnia …” – wyciąg z konta to dowód zapłaty.',
    'Wpłaty gotówkowe potwierdzaj pokwitowaniem.',
    'Gdy dłużnik spóźnia się z ratami, wyślij pisemne wezwanie z dodatkowym terminem, zanim postawisz całość w stan wymagalności.',
  ],
  kontrola: [
    'Wpisz dokładną kwotę, jaka pozostała do spłaty w dniu porozumienia, i jej tytuł (z jakiej umowy, faktury lub zdarzenia).',
    'Utrata dobrodziejstwa rat to postanowienie umowne (swoboda umów, art. 353¹ KC): przy wskazanej zaległości cała reszta staje się wymagalna. Niezależnie od umowy wierzyciel może żądać zapłaty przed terminem, gdy dłużnik stanie się niewypłacalny (art. 458 KC).',
    'Za opóźnienie w zapłacie raty należą się odsetki ustawowe za opóźnienie (art. 481 KC), nawet bez wykazania szkody.',
    'Uznanie długu w porozumieniu przerywa bieg przedawnienia – biegnie ono od nowa (art. 123 § 1 pkt 2 KC).',
    'Gdy dług ma tylko potwierdzić sam dłużnik (bez zobowiązań wierzyciela), wystarczy prostsze uznanie długu.',
    TIP_TOZSAMOSC,
    TIP_GOTOWKA,
  ],
  zdroje: [KC, KC_TEKST],

  kroky: [
    {
      id: 'strony',
      nazev: 'Strony',
      popis: 'Wierzyciel to ten, komu należą się pieniądze; dłużnik – kto ma je oddać.',
      pole: [
        { id: 'w_imie', typ: 'text', popis: 'Wierzyciel – imię i nazwisko lub nazwa firmy', napoveda: 'Komu dłużnik ma zapłacić.', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'w_id', typ: 'text', popis: 'PESEL lub NIP', napoveda: 'PESEL u osoby prywatnej, NIP u firmy.', placeholder: 'np. 80010112345', sirka: 14, polovina: true },
        { id: 'w_adres', typ: 'text', popis: 'Adres', napoveda: 'Adres zamieszkania lub siedziba.', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
        { id: 'd_imie', typ: 'text', popis: 'Dłużnik – imię i nazwisko lub nazwa firmy', napoveda: 'Kto spłaca dług.', placeholder: 'np. Piotr Nowak', sirka: 34 },
        { id: 'd_id', typ: 'text', popis: 'PESEL lub NIP', napoveda: 'Przepisz z dowodu osobistego lub z CEIDG/KRS.', placeholder: 'np. 85020254321', sirka: 14, polovina: true },
        { id: 'd_adres', typ: 'text', popis: 'Adres', napoveda: 'Adres zamieszkania lub siedziba.', placeholder: 'np. ul. Polna 7/12, 30-001 Kraków', sirka: 46 },
      ],
    },
    {
      id: 'dlug',
      nazev: 'Zadłużenie',
      pole: [
        { id: 'tytul', typ: 'text', popis: 'Tytuł długu', napoveda: 'Skąd wziął się dług – umowa, faktura, pożyczka, szkoda.', placeholder: 'np. niezapłacona faktura nr 12/2026 z dnia 15.03.2026', sirka: 56 },
        { id: 'castka', typ: 'castka', popis: 'Kwota do spłaty w ratach (zł)', napoveda: 'Cała kwota, którą dłużnik spłaci według harmonogramu. Słownie dopiszemy sami.', placeholder: 'np. 6000', sirka: 14, polovina: true },
        { id: 'stan_na', typ: 'datum', popis: 'Stan zadłużenia na dzień', napoveda: 'Zwykle dzień zawarcia porozumienia.', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'skladniki', typ: 'text', popis: 'Na co składa się kwota (nieobowiązkowe)', napoveda: 'Np. należność główna, odsetki, koszty – przyda się przy ewentualnym sporze.', placeholder: 'np. 5 600 zł należności głównej i 400 zł odsetek', sirka: 56 },
        {
          id: 'uznanie',
          typ: 'volba',
          popis: 'Czy dłużnik uznaje dług',
          napoveda: 'Uznanie przerywa bieg przedawnienia i ułatwia dochodzenie długu w sądzie.',
          moznosti: [
            { hodnota: 'tak', popis: 'Tak, dłużnik uznaje dług w całości' },
            { hodnota: 'nie', popis: 'Nie – tylko ustalamy spłatę' },
          ],
        },
      ],
    },
    {
      id: 'raty',
      nazev: 'Raty i warunki',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Rata miesięczna (zł)', napoveda: 'Ostatnia rata może być niższa – harmonogram wyliczymy sami.', placeholder: 'np. 500', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Płatna do dnia miesiąca', napoveda: 'Np. 10 = do 10. dnia każdego miesiąca.', placeholder: 'np. 10', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Miesiąc pierwszej raty', napoveda: 'Wybierz dowolny dzień w miesiącu pierwszej raty.', sirka: 14, polovina: true },
        { id: 'konto', typ: 'text', popis: 'Rachunek wierzyciela', napoveda: 'Na ten rachunek dłużnik wpłaca raty.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000', sirka: 34 },
        {
          id: 'zaleglosc',
          typ: 'volba',
          popis: 'Kiedy dłużnik traci prawo do rat',
          napoveda: 'Po tylu zaległych ratach i bezskutecznym wezwaniu cała reszta długu staje się natychmiast wymagalna.',
          moznosti: [
            { hodnota: 'jedna', popis: 'Zaległość z jedną ratą' },
            { hodnota: 'dwie', popis: 'Zaległość z dwiema ratami' },
          ],
        },
        { id: 'dodatkowy_termin', typ: 'cislo', popis: 'Dodatkowy termin po wezwaniu', jednotka: 'dni', napoveda: 'Ile dni dłużnik ma na dopłatę zaległości po pisemnym wezwaniu. Zwykle 7 lub 14.', placeholder: 'np. 7', sirka: 4, polovina: true },
        {
          id: 'zwolnienie',
          typ: 'volba',
          popis: 'Ustępstwo wierzyciela (nieobowiązkowe)',
          napoveda: 'Np. wierzyciel daruje odsetki, jeśli dłużnik spłaci wszystkie raty w terminie.',
          moznosti: [
            { hodnota: 'nie', popis: 'Bez ustępstw' },
            { hodnota: 'tak', popis: 'Zwolnienie z części długu przy terminowej spłacie' },
          ],
        },
        { id: 'zwolnienie_opis', typ: 'text', popis: 'Z czego wierzyciel zwalnia dłużnika', napoveda: 'Opisz konkretnie – kwotę lub rodzaj należności.', placeholder: 'np. odsetek naliczonych do dnia porozumienia w kwocie 400 zł', sirka: 56, zobrazitKdyz: { pole: 'zwolnienie', je: 'tak' } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', napoveda: 'Uzupełnimy z adresu wierzyciela.', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'w_adres' } },
        { id: 'datum', typ: 'datum', popis: 'Data zawarcia porozumienia', napoveda: 'Uzupełniliśmy dzisiejszą datę.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    castka_slovy: (d) => kwotaSlownie(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[2]}.${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Strony',
      vysvetleni: 'Kto komu jest winien pieniądze.',
      odstavce: [
        '**Wierzyciel:** {{w_imie}}, PESEL/NIP {{w_id}}, {{w_adres}}',
        '**Dłużnik:** {{d_imie}}, PESEL/NIP {{d_id}}, {{d_adres}}',
      ],
    },
    {
      nadpis: 'Zadłużenie',
      vysvetleni: 'Skąd jest dług i ile wynosi w dniu porozumienia.',
      odstavce: [
        'Strony zgodnie ustalają, że na dzień {{stan_na}} zadłużenie dłużnika wobec wierzyciela z tytułu: {{tytul}} wynosi **{{castka}}** (słownie: {{castka_slovy}}); składają się na nie: {{skladniki}}.',
        {
          volba: 'uznanie',
          uvodVzor: 'Uznanie długu (zaznacz jedną możliwość):',
          moznosti: {
            tak: 'Dłużnik uznaje powyższy dług w całości.',
            nie: 'Strony ustalają jedynie sposób spłaty powyższej kwoty.',
          },
        },
      ],
    },
    {
      nadpis: 'Spłata w ratach',
      vysvetleni: 'Wysokość rat, termin płatności i konto. Dokładne terminy są w harmonogramie.',
      odstavce: [
        'Dłużnik spłaci zadłużenie w miesięcznych ratach po {{splatka}}, płatnych do {{splatka_den}}. dnia każdego miesiąca, począwszy od miesiąca {{prvni_mesic}}, aż do całkowitej spłaty, zgodnie z harmonogramem stanowiącym załącznik nr 1. Ostatnia rata może być niższa.',
        'Raty są płatne na rachunek wierzyciela nr {{konto}} albo gotówką za pokwitowaniem. Za dzień zapłaty uważa się dzień uznania rachunku wierzyciela. Dłużnik może w każdej chwili spłacić całość lub część zadłużenia przed terminem.',
        'Dopóki dłużnik płaci raty terminowo, wierzyciel nie będzie dochodził zapłaty zadłużenia na drodze sądowej ani zlecał jego windykacji.',
      ],
    },
    {
      nadpis: 'Utrata dobrodziejstwa rat',
      vysvetleni: 'Co się stanie, gdy dłużnik przestanie płacić: po wezwaniu cała reszta długu do zapłaty od razu.',
      odstavce: [
        {
          volba: 'zaleglosc',
          uvodVzor: 'Zaległość (zaznacz jedną możliwość):',
          moznosti: {
            jedna: 'Jeżeli dłużnik opóźni się z zapłatą jednej raty,',
            dwie: 'Jeżeli dłużnik opóźni się z zapłatą dwóch rat,',
          },
        },
        'wierzyciel może wezwać go na piśmie do zapłaty zaległości w dodatkowym terminie {{dodatkowy_termin}} dni od doręczenia wezwania. Po bezskutecznym upływie tego terminu cała pozostała do spłaty kwota staje się natychmiast wymagalna.',
        'Za opóźnienie w zapłacie wierzyciel może żądać odsetek ustawowych za opóźnienie (art. 481 Kodeksu cywilnego).',
      ],
    },
    {
      nadpis: 'Ustępstwo wierzyciela',
      vysvetleni: 'Opcjonalna nagroda za terminową spłatę.',
      odstavce: [
        {
          volba: 'zwolnienie',
          uvodVzor: 'Ustępstwo (zaznacz jedną możliwość):',
          moznosti: {
            nie: 'Wierzyciel nie udziela ustępstw – dłużnik spłaci całą kwotę zadłużenia.',
            tak: 'Pod warunkiem zapłaty wszystkich rat w terminach z harmonogramu wierzyciel zwalnia dłużnika z obowiązku zapłaty: {{zwolnienie_opis}}. W razie utraty dobrodziejstwa rat zwolnienie nie następuje.',
          },
        },
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      vysvetleni: 'Forma zmian i liczba egzemplarzy.',
      odstavce: [
        'Zmiany porozumienia wymagają formy pisemnej pod rygorem nieważności.',
        'W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego.',
        'Porozumienie sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
