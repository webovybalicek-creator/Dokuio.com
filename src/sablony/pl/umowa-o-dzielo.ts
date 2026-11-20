/**
 * Umowa o dzieło – Polska. Art. 627–646 KC: wykonanie oznaczonego dzieła za wynagrodzeniem; wynagrodzenie
 * kosztorysowe (art. 629–631) lub ryczałtowe (art. 632); płatne przy oddaniu dzieła (art. 642); obowiązek odbioru
 * (art. 643); wady – przepisy o rękojmi przy sprzedaży (art. 638); przedawnienie 2 lata od oddania (art. 646).
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum } from '../terminy';
import { KC, KC_TEKST, TIP_TOZSAMOSC } from './zrodla';

export const umowaODzielo: Sablona = {
  kod: 'PL-UMOWA-O-DZIELO',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa o dzieło',
  podnadpis: 'na podstawie art. 627 i nast. ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
  souborPdf: 'umowa-o-dzielo',
  paticka: 'Utworzono bezpłatnie · szablon PL-UMOWA-O-DZIELO v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zamawiający', vpravo: 'przyjmujący zamówienie (wykonawca)' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  pripominky: (d) => [
    ...(naDatum(d.zahajeni) ? [{ nazev: 'Rozpoczęcie prac', datum: String(d.zahajeni) }] : []),
    ...(naDatum(d.dokonceni) ? [{ nazev: 'Oddanie dzieła', datum: String(d.dokonceni), popis: 'Sprawdź dzieło i spisz protokół odbioru z wadami.' }] : []),
  ],
  coDal: [
    'Wydrukuj umowę w dwóch egzemplarzach, obie strony podpisują oba.',
    'Zaliczkę wpłacaj przelewem albo za pokwitowaniem.',
    'Zmiany zakresu lub ceny ustalaj na piśmie.',
    'Przy odbiorze sprawdź dzieło i wpisz wady do protokołu.',
  ],
  kontrola: [
    'Dzieło opisz jak najdokładniej (zakres, materiał, wymiary; oferta jako załącznik) – umowa o dzieło dotyczy konkretnego rezultatu.',
    'Wynagrodzenie ryczałtowe się nie zmienia, nawet gdy prace okażą się większe (art. 632 KC). Przy kosztorysie wykonawca może żądać podwyższenia tylko w granicach art. 629–630 KC; przy znacznym podwyższeniu zamawiający może odstąpić od umowy (art. 631 KC).',
    'Wynagrodzenie płaci się przy oddaniu dzieła (art. 642 KC). Zamawiający ma obowiązek odebrać dzieło wykonane zgodnie z umową (art. 643 KC).',
    'Do wad dzieła stosuje się przepisy o rękojmi przy sprzedaży (art. 638 KC). Roszczenia z umowy przedawniają się z upływem dwóch lat od oddania dzieła (art. 646 KC).',
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC, KC_TEKST],
  kroky: [
    {
      id: 'strony',
      nazev: 'Zamawiający i wykonawca',
      popis: 'Zamawiający zleca dzieło i płaci. Przyjmujący zamówienie (wykonawca) je wykonuje.',
      pole: [
        { id: 'o_jmeno', typ: 'text', popis: 'Zamawiający – imię i nazwisko lub firma', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'o_id', typ: 'text', popis: 'PESEL lub NIP zamawiającego (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'o_adresa', typ: 'text', popis: 'Adres zamawiającego', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
        { id: 'z_jmeno', typ: 'text', popis: 'Wykonawca – imię i nazwisko lub firma', placeholder: 'np. Usługi Remontowe Nowak', sirka: 34 },
        { id: 'z_ico', typ: 'text', popis: 'NIP lub PESEL wykonawcy (opcjonalnie)', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adres wykonawcy', placeholder: 'np. ul. Krótka 5, 30-001 Kraków', sirka: 46 },
      ],
    },
    {
      id: 'dzielo',
      nazev: 'Dzieło',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'Opis dzieła', napoveda: 'Zakres, materiał, wymiary. Możesz odwołać się do oferty.', placeholder: 'np. wymiana płytek w łazience (8 m²) wraz z demontażem starych płytek i wywozem gruzu, zgodnie z ofertą z dnia 3.11.2026', sirka: 70 },
        { id: 'misto_dila', typ: 'text', popis: 'Miejsce wykonania', sirka: 46 },
        {
          id: 'material',
          typ: 'volba',
          popis: 'Kto dostarcza materiały',
          moznosti: [
            { hodnota: 'zhotovitel', popis: 'Wykonawca (w cenie)' },
            { hodnota: 'objednatel', popis: 'Zamawiający' },
          ],
        },
        { id: 'zahajeni', typ: 'datum', popis: 'Rozpoczęcie prac', sirka: 14, polovina: true },
        { id: 'dokonceni', typ: 'datum', popis: 'Oddanie dzieła', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'cena',
      nazev: 'Wynagrodzenie',
      pole: [
        {
          id: 'typ_ceny',
          typ: 'volba',
          popis: 'Rodzaj wynagrodzenia',
          moznosti: [
            { hodnota: 'ryczalt', popis: 'Ryczałtowe (stałe)' },
            { hodnota: 'kosztorys', popis: 'Kosztorysowe' },
          ],
        },
        { id: 'cena', typ: 'castka', popis: 'Wynagrodzenie (zł brutto)', placeholder: 'np. 6000', sirka: 14, polovina: true },
        {
          id: 'zaloha_ano',
          typ: 'volba',
          popis: 'Zaliczka',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez zaliczki – całość przy odbiorze' },
            { hodnota: 'ano', popis: 'Zaliczka, reszta przy odbiorze' },
          ],
        },
        { id: 'zaloha', typ: 'castka', popis: 'Wysokość zaliczki (zł)', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zaloha_ano', je: 'ano' } },
        { id: 'splatnost_dny', typ: 'cislo', popis: 'Termin płatności po odbiorze (dni)', placeholder: 'np. 7', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Rachunek wykonawcy (opcjonalnie)', sirka: 34 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'o_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Data zawarcia', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovy: (d) => kwotaSlownie(d.cena) },
  clanky: [
    {
      nadpis: 'Strony umowy',
      odstavce: [
        '**Zamawiający:** {{o_jmeno}}, PESEL / NIP {{o_id}}, {{o_adresa}} (dalej „Zamawiający”)',
        '**Przyjmujący zamówienie:** {{z_jmeno}}, NIP / PESEL {{z_ico}}, {{z_adresa}} (dalej „Wykonawca”)',
      ],
    },
    {
      nadpis: 'Przedmiot umowy',
      vysvetleni: 'Wykonawca zobowiązuje się do konkretnego rezultatu, a nie tylko do starannej pracy.',
      odstavce: [
        'Wykonawca zobowiązuje się do wykonania następującego dzieła: {{predmet}}.',
        'Miejsce wykonania: {{misto_dila}}.',
        {
          volba: 'material',
          uvodVzor: 'Materiały (zaznacz jedną możliwość):',
          moznosti: {
            zhotovitel: 'Materiały potrzebne do wykonania dzieła dostarcza Wykonawca; ich koszt jest wliczony w wynagrodzenie.',
            objednatel: 'Materiały potrzebne do wykonania dzieła dostarcza Zamawiający. Wykonawca niezwłocznie zawiadomi Zamawiającego, jeżeli materiały nie nadają się do prawidłowego wykonania dzieła.',
          },
        },
      ],
    },
    {
      nadpis: 'Termin wykonania',
      odstavce: [
        'Wykonawca rozpocznie prace w dniu {{zahajeni}} i odda dzieło najpóźniej w dniu {{dokonceni}}.',
        'Zamawiający zapewni Wykonawcy dostęp do miejsca wykonania dzieła w zwykłych godzinach pracy.',
      ],
    },
    {
      nadpis: 'Wynagrodzenie',
      odstavce: [
        {
          volba: 'typ_ceny',
          uvodVzor: 'Wynagrodzenie (zaznacz jedną możliwość):',
          moznosti: {
            ryczalt: 'Strony ustalają wynagrodzenie ryczałtowe w kwocie {{cena}} brutto (słownie: {{cena_slovy}}). Wykonawca nie może żądać jego podwyższenia, chociażby w czasie zawarcia umowy nie można było przewidzieć rozmiaru lub kosztów prac (art. 632 Kodeksu cywilnego).',
            kosztorys: 'Strony ustalają wynagrodzenie kosztorysowe w kwocie {{cena}} brutto (słownie: {{cena_slovy}}). Podwyższenie jest możliwe tylko na zasadach art. 629–631 Kodeksu cywilnego; o konieczności prac dodatkowych Wykonawca niezwłocznie zawiadomi Zamawiającego, a prace dodatkowe wykona po jego zgodzie.',
          },
        },
        {
          volba: 'zaloha_ano',
          uvodVzor: 'Zaliczka (zaznacz jedną możliwość):',
          moznosti: {
            ne: 'Wynagrodzenie jest płatne przy oddaniu dzieła.',
            ano: 'Zamawiający zapłaci zaliczkę w kwocie {{zaloha}} przy podpisaniu umowy. Pozostała część wynagrodzenia jest płatna przy oddaniu dzieła.',
          },
        },
        'Płatność nastąpi w terminie {{splatnost_dny}} dni od odbioru dzieła, przelewem na rachunek {{ucet}} lub gotówką za pokwitowaniem.',
      ],
    },
    {
      nadpis: 'Odbiór i wady',
      odstavce: [
        'Zamawiający odbierze dzieło wykonane zgodnie z umową. Z odbioru strony sporządzą protokół, w którym wskażą stwierdzone wady i termin ich usunięcia.',
        'Do odpowiedzialności Wykonawcy za wady dzieła stosuje się przepisy o rękojmi przy sprzedaży (art. 638 Kodeksu cywilnego).',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      odstavce: [
        'Zmiany umowy wymagają formy pisemnej pod rygorem nieważności. W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego, w szczególności art. 627–646.',
        'Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
