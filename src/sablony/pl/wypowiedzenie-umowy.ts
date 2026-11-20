/**
 * Wypowiedzenie umowy (konsument → firma) – Polska. Ogólny list z wyborem rodzaju umowy.
 * Terminy tylko zweryfikowane w ustawach: PKE art. 295, 301, 302, 304 (Dz.U. 2024 poz. 1221); Prawo energetyczne art. 4j ust. 3, 3a, 4;
 * KC art. 61 (doręczenie), 365¹ (zobowiązanie bezterminowe), 813 § 1 i 830 § 1 (ubezpieczenia). Pozostałe – „zgodnie z umową/regulaminem”.
 * Nie dotyczy OC komunikacyjnego (odrębne zasady). Przy każdej zmianie tekstu zwiększyć `verze` i `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { KC_TEKST, PKE, PRAWO_ENERGETYCZNE, UOKIK } from './zrodla';

export const wypowiedzenieUmowy: Sablona = {
  kod: 'PL-WYPOWIEDZENIE-UMOWY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Wypowiedzenie umowy',
  podnadpis: 'oświadczenie klienta o wypowiedzeniu umowy',
  souborPdf: 'wypowiedzenie-umowy',
  paticka: 'Utworzono za darmo · szablon PL-WYPOWIEDZENIE-UMOWY v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'klient', vpravo: 'przyjęto w imieniu firmy (data i podpis)' },
  slovo: { n: 'wypowiedzenie', g: 'wypowiedzenia', a: 'wypowiedzenie', l: 'wypowiedzeniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    const koniec = naDatum(d.koniec_data);
    return [
      ...(od ? [{ nazev: 'Sprawdź, czy firma potwierdziła wypowiedzenie', datum: isoDatum(pridejDny(od, 14)), popis: 'Brak potwierdzenia? Zadzwoń lub napisz – zachowaj dowód wysłania.' }] : []),
      ...(koniec && d.termin !== 'najblizszy' ? [{ nazev: 'Koniec umowy – sprawdź ostatni rachunek', datum: isoDatum(koniec) }] : []),
    ];
  },
  coDal: [
    'Podpisz wypowiedzenie i doręcz je tak, by dało się to udowodnić: listem poleconym za potwierdzeniem odbioru, osobiście za podpisem na kopii albo e-mailem lub w aplikacji, jeśli umowa na to pozwala.',
    'Wypowiedzenie działa od chwili, gdy dotrze do firmy – nie od wysłania. Nie zostawiaj go na ostatni dzień.',
    'Zachowaj kopię, dowód nadania i potwierdzenie odbioru do czasu końcowego rozliczenia.',
    'Sprawdź ostatni rachunek i zatrzymaj polecenie zapłaty lub płatność kartą po rozwiązaniu umowy.',
  ],
  kontrola: [
    'Najpierw sprawdź w umowie, regulaminie lub OWU okres wypowiedzenia i dozwoloną formę – wiele firm przyjmuje wypowiedzenie e-mailem, w aplikacji lub w panelu klienta.',
    'Telefon, internet, telewizja: umowa konsumencka na czas określony trwa najwyżej 24 miesiące (art. 301 PKE). Umowę, która po tym czasie przedłużyła się automatycznie, wypowiesz w każdej chwili z miesięcznym okresem wypowiedzenia (art. 302 ust. 1 PKE).',
    'Operator, u którego można zawrzeć umowę w formie dokumentowej, musi przyjąć też wypowiedzenie w tej formie, np. e-mailem (art. 295 PKE). Wcześniejsze wypowiedzenie umowy na czas określony może oznaczać odszkodowanie (art. 304 PKE) – sprawdź umowę.',
    'Prąd i gaz: umowę na czas nieoznaczony wypowiesz bez kosztów (art. 4j ust. 3 Prawa energetycznego); w gospodarstwie domowym rozwiązuje się z ostatnim dniem miesiąca następującego po miesiącu, w którym wypowiedzenie dotarło do sprzedawcy, chyba że wskażesz późniejszy termin (art. 4j ust. 4). Przy umowie na czas oznaczony koszty mogą wynikać tylko z umowy (art. 4j ust. 3a).',
    'Ubezpieczenie: termin wypowiedzenia określa umowa lub OWU; w ubezpieczeniu osobowym bez takiego terminu wypowiedzenie działa od razu (art. 830 § 1 KC). Za okres niewykorzystanej ochrony należy się zwrot składki (art. 813 § 1 KC). Ten wzór nie służy do wypowiedzenia OC samochodu – ono ma odrębne zasady.',
    'Siłownia, prenumerata, inne usługi: decyduje umowa i regulamin. Umowa na czas nieoznaczony bez ustalonego terminu wygasa niezwłocznie po wypowiedzeniu (art. 365¹ KC). W sporze pomoże miejski lub powiatowy rzecznik konsumentów – [UOKiK](https://prawakonsumenta.uokik.gov.pl/).',
    'Wypowiedzenie jest złożone z chwilą, gdy dotarło do firmy tak, że mogła zapoznać się z jego treścią (art. 61 KC).',
  ],
  zdroje: [KC_TEKST, PKE, PRAWO_ENERGETYCZNE, UOKIK],

  kroky: [
    {
      id: 'klient',
      nazev: 'Twoje dane',
      popis: 'Dane osoby, która zawarła umowę – tak jak w umowie lub na fakturze.',
      pole: [
        { id: 'k_imie', typ: 'text', popis: 'Imię i nazwisko', napoveda: 'Jak w umowie. Wypowiedzenie podpisuje ta osoba, która zawarła umowę.', placeholder: 'np. Anna Nowak', sirka: 34, autocomplete: 'name' },
        { id: 'k_adres', typ: 'text', popis: 'Adres', napoveda: 'Adres podany w umowie (albo aktualny – wtedy firma łatwiej Cię odnajdzie, gdy podasz też numer klienta).', placeholder: 'np. ul. Polna 7/12, 00-001 Warszawa', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon lub e-mail', napoveda: 'Na ten kontakt firma może wysłać potwierdzenie.', placeholder: 'np. anna.nowak@email.pl', sirka: 30 },
      ],
    },
    {
      id: 'firma',
      nazev: 'Firma i umowa',
      popis: 'Dane znajdziesz w umowie, na fakturze lub w panelu klienta.',
      pole: [
        { id: 'f_nazwa', typ: 'text', popis: 'Firma', napoveda: 'Pełna nazwa firmy z umowy lub faktury.', placeholder: 'np. Fit Klub Sp. z o.o.', sirka: 34 },
        { id: 'f_adres', typ: 'text', popis: 'Adres firmy', napoveda: 'Adres do korespondencji z umowy, regulaminu lub strony internetowej firmy.', placeholder: 'np. ul. Prosta 1, 00-850 Warszawa', sirka: 46 },
        {
          id: 'rodzaj',
          typ: 'volba',
          popis: 'Jaką umowę wypowiadasz',
          napoveda: 'Od rodzaju umowy zależy podstawa prawna, którą wpiszemy do wypowiedzenia.',
          moznosti: [
            { hodnota: 'telekom', popis: 'Telefon komórkowy, internet lub telewizja' },
            { hodnota: 'energia', popis: 'Prąd lub gaz' },
            { hodnota: 'ubezpieczenie', popis: 'Ubezpieczenie (nie OC samochodu)' },
            { hodnota: 'silownia', popis: 'Siłownia, klub, członkostwo' },
            { hodnota: 'uslugi', popis: 'Prenumerata lub inna usługa' },
            { hodnota: 'inne', popis: 'Inna umowa' },
          ],
        },
        { id: 'umowa_nr', typ: 'text', popis: 'Numer umowy, polisy lub klienta', napoveda: 'Najważniejszy numer – po nim firma przypisze wypowiedzenie do Twojej umowy.', placeholder: 'np. 2024/123456', sirka: 20, polovina: true },
        { id: 'umowa_data', typ: 'datum', popis: 'Data zawarcia umowy', napoveda: 'Jeśli nie pamiętasz, zostaw puste.', sirka: 14, polovina: true },
        { id: 'przedmiot', typ: 'text', popis: 'Czego dotyczy umowa (nieobowiązkowe)', napoveda: 'Np. numer telefonu, numer punktu poboru (PPE), adres przyłącza, numer karnetu.', placeholder: 'np. abonament nr tel. 600 100 200', sirka: 46 },
      ],
    },
    {
      id: 'termin',
      nazev: 'Termin i prośby',
      pole: [
        {
          id: 'termin',
          typ: 'volba',
          popis: 'Kiedy umowa ma się skończyć',
          napoveda: 'Najbezpieczniej wybrać najbliższy możliwy termin. Wcześniejszej daty niż pozwala umowa lub ustawa i tak nie da się wymusić.',
          moznosti: [
            { hodnota: 'najblizszy', popis: 'W najbliższym możliwym terminie' },
            { hodnota: 'data', popis: 'Z konkretnym dniem' },
            { hodnota: 'koniec_okresu', popis: 'Na koniec okresu, na jaki zawarto umowę (żeby się nie przedłużyła)' },
          ],
        },
        { id: 'koniec_data', typ: 'datum', popis: 'Dzień rozwiązania umowy', napoveda: 'Dla umowy na czas określony – dzień, w którym kończy się okres umowy.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'termin', je: ['data', 'koniec_okresu'] } },
        {
          id: 'prosby',
          typ: 'vice',
          popis: 'O co jeszcze prosisz',
          napoveda: 'Potwierdzenie to dowód, że wypowiedzenie dotarło. Nadpłatę firma zwróci łatwiej, gdy poda się numer konta.',
          moznosti: [
            { hodnota: 'potwierdzenie', popis: 'Potwierdzenie wypowiedzenia i daty rozwiązania umowy' },
            { hodnota: 'rozliczenie', popis: 'Końcowe rozliczenie i zwrot nadpłaty' },
            { hodnota: 'platnosci', popis: 'Zatrzymanie polecenia zapłaty lub płatności kartą' },
            { hodnota: 'marketing', popis: 'Cofnięcie zgód marketingowych' },
          ],
        },
        { id: 'konto', typ: 'text', popis: 'Numer konta do zwrotu nadpłaty', napoveda: 'Twoje konto bankowe, 26 cyfr.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000', sirka: 34, zobrazitKdyz: { pole: 'prosby', je: 'rozliczenie' } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', napoveda: 'Uzupełnimy z Twojego adresu.', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adres' } },
        { id: 'datum', typ: 'datum', popis: 'Data', napoveda: 'Uzupełniliśmy dzisiejszą datę.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Nadawca',
      vysvetleni: 'Kto wypowiada umowę – osoba, która ją zawarła.',
      odstavce: ['{{k_imie}}, {{k_adres}}, kontakt: {{k_kontakt}}'],
    },
    {
      nadpis: 'Adresat',
      vysvetleni: 'Firma, której doręczasz wypowiedzenie.',
      odstavce: ['{{f_nazwa}}, {{f_adres}}'],
    },
    {
      nadpis: 'Wypowiedzenie umowy',
      vysvetleni: 'Samo wypowiedzenie, podstawa prawna według rodzaju umowy i termin zakończenia.',
      odstavce: [
        'Niniejszym wypowiadam umowę nr {{umowa_nr}} zawartą w dniu {{umowa_data}}, dotyczącą: {{przedmiot}}.',
        {
          volba: 'rodzaj',
          uvodVzor: 'Rodzaj umowy (zaznacz jedną możliwość):',
          moznosti: {
            telekom: 'Umowa dotyczy usług komunikacji elektronicznej. Jeżeli po upływie okresu, na jaki została zawarta, przedłużyła się automatycznie, wypowiadam ją z zachowaniem miesięcznego okresu wypowiedzenia (art. 302 ust. 1 ustawy – Prawo komunikacji elektronicznej).',
            energia: 'Umowa dotyczy sprzedaży energii elektrycznej lub paliw gazowych. Wypowiadam ją na podstawie art. 4j ustawy – Prawo energetyczne.',
            ubezpieczenie: 'Umowa jest umową ubezpieczenia. Wypowiadam ją z zachowaniem terminu określonego w umowie lub ogólnych warunkach ubezpieczenia.',
            silownia: 'Umowa dotyczy członkostwa (karnetu). Wypowiadam ją zgodnie z warunkami określonymi w umowie i regulaminie.',
            uslugi: 'Umowa dotyczy prenumeraty lub świadczenia usług. Wypowiadam ją zgodnie z warunkami określonymi w umowie lub regulaminie.',
            inne: 'Wypowiadam umowę zgodnie z jej postanowieniami i obowiązującymi przepisami.',
          },
        },
        {
          volba: 'termin',
          uvodVzor: 'Termin rozwiązania (zaznacz jedną możliwość):',
          moznosti: {
            najblizszy: 'Proszę o rozwiązanie umowy w najbliższym możliwym terminie wynikającym z umowy, regulaminu lub przepisów.',
            data: 'Proszę o rozwiązanie umowy z dniem {{koniec_data}}, a jeżeli umowa lub przepisy przewidują późniejszy termin – w najbliższym możliwym terminie.',
            koniec_okresu: 'Wypowiadam umowę ze skutkiem na koniec okresu, na jaki została zawarta, tj. z dniem {{koniec_data}}, i nie wyrażam zgody na jej przedłużenie.',
          },
        },
      ],
    },
    {
      nadpis: 'Prośby',
      vysvetleni: 'Czego jeszcze oczekujesz od firmy po wypowiedzeniu.',
      odstavce: [
        {
          vice: 'prosby',
          uvod: 'Jednocześnie proszę o:',
          moznosti: {
            potwierdzenie: 'pisemne lub mailowe potwierdzenie otrzymania wypowiedzenia oraz daty rozwiązania umowy',
            rozliczenie: 'końcowe rozliczenie umowy i zwrot ewentualnej nadpłaty na rachunek nr {{konto}}',
            platnosci: 'zaprzestanie pobierania opłat (polecenie zapłaty, płatność kartą) po dniu rozwiązania umowy',
            marketing: 'przyjęcie do wiadomości, że cofam wszystkie udzielone zgody marketingowe',
          },
        },
        'Z poważaniem',
      ],
    },
  ],
};
