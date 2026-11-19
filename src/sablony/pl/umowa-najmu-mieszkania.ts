/**
 * Umowa najmu mieszkania – Polska, zwykły najem między osobami prywatnymi. Art. 659 i nast. KC,
 * ustawa o ochronie praw lokatorów (art. 6 – kaucja do 12-krotności czynszu, zwrot w miesiąc od opróżnienia, waloryzacja).
 * Wypowiedzenie przez najemcę: art. 688 KC (czas nieoznaczony – 3 miesiące na koniec miesiąca), czas oznaczony – art. 673 § 3 KC.
 * Nie jest to najem okazjonalny (art. 19a uopl).
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum, pridejMesice, isoDatum, cislo } from '../terminy';
import { KC_NAJEM, UOPL, TIP_TOZSAMOSC } from './zrodla';

export const umowaNajmuMieszkania: Sablona = {
  kod: 'PL-NAJEM-MIESZKANIE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.od);
    const den = Math.round(cislo(d.splatnost));
    if (typeof d.wydanie === 'string' && d.wydanie) out.push({ nazev: 'Wydanie mieszkania i protokół', datum: d.wydanie });
    if (od && den >= 1 && den <= 31) out.push({ nazev: 'Czynsz i opłaty', datum: isoDatum(pridejMesice(od, od.getDate() > den ? 1 : 0, den)), mesicne: 12, popis: 'Pierwsze 12 miesięcy.' });
    const koniec = d.doba === 'oznaczony' ? naDatum(d.do) : undefined;
    if (koniec) out.push({ nazev: 'Koniec najmu', datum: isoDatum(koniec) });
    return out;
  },
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa najmu lokalu mieszkalnego',
  podnadpis: 'zawarta na podstawie art. 659 i nast. Kodeksu cywilnego oraz ustawy o ochronie praw lokatorów',
  souborPdf: 'umowa-najmu-mieszkania',
  paticka: 'Utworzono bezpłatnie · szablon PL-NAJEM-MIESZKANIE v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'miejsce',
  datumPodpisu: 'data_podpisu',
  podpisy: { vlevo: 'wynajmujący', vpravo: 'najemca' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  coDal: [
    'Wydrukuj umowę w dwóch egzemplarzach – obie strony podpisują oba.',
    'Przy wydaniu mieszkania sporządźcie protokół zdawczo-odbiorczy ze stanami liczników i zdjęciami.',
    'Kaucję przekaż przelewem lub za pokwitowaniem.',
    'Wynajmujący: przychód z najmu prywatnego rozlicza się z urzędem skarbowym (zwykle ryczałtem).',
  ],
  kontrola: [
    'Sprawdź w księdze wieczystej (ekw.ms.gov.pl), że wynajmujący jest właścicielem mieszkania.',
    TIP_TOZSAMOSC,
    'Kaucja nie może przekroczyć 12-krotności miesięcznego czynszu (art. 6 ustawy o ochronie praw lokatorów). Zwraca się ją w ciągu miesiąca od opróżnienia lokalu, po potrąceniu należności.',
    'Umowa na czas dłuższy niż rok musi mieć formę pisemną – inaczej uważa się ją za zawartą na czas nieoznaczony (art. 660 KC).',
    'Umowę na czas oznaczony można wypowiedzieć tylko w przypadkach wskazanych w umowie (art. 673 § 3 KC) – dlatego wpisujemy je wprost.',
    'To zwykła umowa najmu. Najem okazjonalny (z oświadczeniem najemcy u notariusza) wymaga innego wzoru.',
  ],
  zdroje: [KC_NAJEM, UOPL],
  kroky: [
    {
      id: 'strony',
      nazev: 'Wynajmujący i najemca',
      pole: [
        { id: 'w_imie', typ: 'text', popis: 'Wynajmujący – imię i nazwisko', napoveda: 'Właściciel mieszkania. Współwłaściciele podpisują wszyscy.', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'w_pesel', typ: 'text', popis: 'PESEL wynajmującego', napoveda: 'Z dowodu osobistego.', placeholder: 'np. 80010112345', sirka: 14, polovina: true },
        { id: 'w_adres', typ: 'text', popis: 'Adres wynajmującego', napoveda: 'Adres do doręczeń.', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
        { id: 'n_imie', typ: 'text', popis: 'Najemca – imię i nazwisko', napoveda: 'Kto będzie mieszkał i płacił czynsz.', placeholder: 'np. Anna Nowak', sirka: 34 },
        { id: 'n_pesel', typ: 'text', popis: 'PESEL najemcy', napoveda: 'Z dowodu osobistego.', placeholder: 'np. 95020254321', sirka: 14, polovina: true },
        { id: 'n_adres', typ: 'text', popis: 'Dotychczasowy adres najemcy', napoveda: 'Adres przed wprowadzeniem się.', placeholder: 'np. ul. Krótka 5, 30-001 Kraków', sirka: 46 },
      ],
    },
    {
      id: 'lokal',
      nazev: 'Mieszkanie',
      pole: [
        { id: 'adres_lokalu', typ: 'text', popis: 'Adres mieszkania', napoveda: 'Ulica, numer budynku i lokalu, kod, miejscowość.', placeholder: 'np. ul. Polna 7/12, 00-002 Warszawa', sirka: 46 },
        { id: 'kw', typ: 'text', popis: 'Numer księgi wieczystej (nieobowiązkowe)', napoveda: 'Jeśli lokal ma księgę wieczystą.', placeholder: 'np. WA1M/00012345/6', sirka: 24 },
        { id: 'pokoje', typ: 'cislo', popis: 'Liczba pokoi', napoveda: 'Bez kuchni i łazienki.', placeholder: 'np. 2', sirka: 4, polovina: true },
        { id: 'powierzchnia', typ: 'cislo', popis: 'Powierzchnia', napoveda: 'Powierzchnia użytkowa.', placeholder: 'np. 48', jednotka: 'm²', sirka: 8, polovina: true },
        { id: 'wyposazenie', typ: 'textarea', popis: 'Wyposażenie (nieobowiązkowe)', napoveda: 'Sprzęty i meble. Szczegóły wpiszecie do protokołu.', placeholder: 'np. lodówka, pralka, kuchenka, szafa w przedpokoju', sirka: 64 },
      ],
    },
    {
      id: 'czas',
      nazev: 'Czas najmu',
      pole: [
        { id: 'doba', typ: 'volba', popis: 'Na jak długo', napoveda: 'Umowa na czas oznaczony kończy się z upływem terminu.', moznosti: [ { hodnota: 'oznaczony', popis: 'Na czas oznaczony' }, { hodnota: 'nieoznaczony', popis: 'Na czas nieoznaczony' } ] },
        { id: 'od', typ: 'datum', popis: 'Początek najmu', napoveda: 'Od kiedy najemca korzysta z lokalu i płaci czynsz.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Koniec najmu', napoveda: 'Najczęściej po roku.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'oznaczony' } },
        { id: 'wydanie', typ: 'datum', popis: 'Wydanie mieszkania', napoveda: 'Kiedy najemca dostaje klucze.', sirka: 14, polovina: true },
        { id: 'osoby', typ: 'cislo', popis: 'Liczba osób', napoveda: 'Ile osób będzie mieszkać razem z najemcą.', placeholder: 'np. 2', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'platnosci',
      nazev: 'Czynsz i kaucja',
      pole: [
        { id: 'czynsz', typ: 'castka', popis: 'Czynsz miesięczny (zł)', napoveda: 'Kwota dla wynajmującego, bez opłat dodatkowych.', placeholder: 'np. 3000', sirka: 12, polovina: true },
        { id: 'oplaty', typ: 'castka', popis: 'Opłaty eksploatacyjne (zł miesięcznie)', napoveda: 'Czynsz administracyjny, woda, ogrzewanie, wywóz śmieci – zaliczkowo.', placeholder: 'np. 600', sirka: 12, polovina: true },
        { id: 'media', typ: 'volba', popis: 'Prąd i gaz', napoveda: 'Najczęściej najemca płaci według liczników.', moznosti: [ { hodnota: 'liczniki', popis: 'Najemca płaci według liczników' }, { hodnota: 'oplaty', popis: 'W opłatach powyżej' } ] },
        { id: 'splatnost', typ: 'cislo', popis: 'Termin płatności (dzień miesiąca)', napoveda: 'Do którego dnia płaci się z góry za dany miesiąc.', placeholder: 'np. 10', sirka: 4, polovina: true },
        { id: 'konto', typ: 'text', popis: 'Numer konta wynajmującego', napoveda: 'Na które konto płacić.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000', sirka: 34 },
        { id: 'kaucja', typ: 'castka', popis: 'Kaucja (zł)', napoveda: 'Najwyżej 12-krotność czynszu; zwykle 1–2 czynsze.', placeholder: 'np. 3000', sirka: 12, polovina: true },
        { id: 'wypowiedzenie_oznaczony', typ: 'volba', popis: 'Wcześniejsze wypowiedzenie umowy na czas oznaczony', napoveda: 'Bez zapisu w umowie umowy na czas oznaczony nie da się wypowiedzieć.', moznosti: [ { hodnota: 'tak', popis: 'Każda strona z 3-miesięcznym wypowiedzeniem z ważnych powodów' }, { hodnota: 'nie', popis: 'Bez możliwości wypowiedzenia' } ], zobrazitKdyz: { pole: 'doba', je: 'oznaczony' } },
        { id: 'miejsce', typ: 'text', popis: 'Miejsce podpisania', napoveda: 'Miejscowość.', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'w_adres' } },
        { id: 'data_podpisu', typ: 'datum', popis: 'Data podpisania', napoveda: 'Uzupełniliśmy dzisiejszą datę.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { czynsz_slownie: (d) => kwotaSlownie(d.czynsz), kaucja_slownie: (d) => kwotaSlownie(d.kaucja) },
  clanky: [
    {
      nadpis: 'Strony umowy',
      odstavce: [
        '**Wynajmujący:** {{w_imie}}, PESEL {{w_pesel}}, zamieszkały {{w_adres}}',
        '**Najemca:** {{n_imie}}, PESEL {{n_pesel}}, dotychczas zamieszkały {{n_adres}}',
      ],
    },
    {
      nadpis: 'Przedmiot najmu',
      odstavce: [
        'Wynajmujący oświadcza, że jest właścicielem lokalu mieszkalnego położonego pod adresem {{adres_lokalu}}, dla którego prowadzona jest księga wieczysta {{kw}}, składającego się z {{pokoje}} pokoi, o powierzchni {{powierzchnia}}.',
        'Wyposażenie lokalu: {{wyposazenie}}. Szczegółowy stan lokalu i wyposażenia określa protokół zdawczo-odbiorczy.',
        'Wynajmujący oddaje najemcy lokal do używania w celach mieszkaniowych. W lokalu będzie mieszkać {{osoby}} osób.',
      ],
    },
    {
      nadpis: 'Czas trwania najmu',
      odstavce: [
        { volba: 'doba', uvodVzor: 'Czas najmu (zaznacz):', moznosti: { oznaczony: 'Umowa zostaje zawarta na czas oznaczony od {{od}} do {{do}}.', nieoznaczony: 'Umowa zostaje zawarta na czas nieoznaczony od {{od}}.' } },
        'Wynajmujący wyda lokal najemcy dnia {{wydanie}}. Strony sporządzą protokół zdawczo-odbiorczy ze stanami liczników.',
      ],
    },
    {
      nadpis: 'Czynsz i opłaty',
      odstavce: [
        'Najemca płaci czynsz w wysokości {{czynsz}} miesięcznie (słownie: {{czynsz_slownie}}) oraz opłaty eksploatacyjne w wysokości {{oplaty}} miesięcznie, rozliczane według faktycznych kosztów.',
        { volba: 'media', uvodVzor: 'Prąd i gaz (zaznacz):', moznosti: { liczniki: 'Opłaty za energię elektryczną i gaz najemca ponosi według wskazań liczników.', oplaty: 'Opłaty za energię elektryczną i gaz są zawarte w opłatach eksploatacyjnych.' } },
        'Czynsz i opłaty są płatne z góry do {{splatnost}}. dnia każdego miesiąca na rachunek wynajmującego nr {{konto}}.',
      ],
    },
    {
      nadpis: 'Kaucja',
      odstavce: [
        'Najemca wpłaca kaucję w wysokości {{kaucja}} (słownie: {{kaucja_slownie}}) najpóźniej w dniu wydania lokalu, na zabezpieczenie należności z tytułu najmu.',
        'Kaucja podlega zwrotowi w ciągu miesiąca od dnia opróżnienia lokalu, po potrąceniu należności wynajmującego z tytułu najmu, na zasadach art. 6 ustawy o ochronie praw lokatorów.',
      ],
    },
    {
      nadpis: 'Prawa i obowiązki stron',
      odstavce: [
        'Najemca używa lokalu zgodnie z przeznaczeniem i dba o jego stan. Drobne nakłady związane ze zwykłym używaniem (art. 681 KC) obciążają najemcę, pozostałe naprawy – wynajmującego.',
        'Najemca niezwłocznie zawiadamia wynajmującego o potrzebie napraw obciążających wynajmującego i umożliwia ich wykonanie.',
        'Zmiany w lokalu oraz podnajem lub oddanie lokalu do bezpłatnego używania wymagają pisemnej zgody wynajmującego.',
      ],
    },
    {
      nadpis: 'Zakończenie najmu',
      odstavce: [
        'Umowę zawartą na czas nieoznaczony najemca może wypowiedzieć na trzy miesiące naprzód na koniec miesiąca kalendarzowego (art. 688 KC). Wynajmujący może ją wypowiedzieć tylko z przyczyn określonych w ustawie o ochronie praw lokatorów.',
        { volba: 'wypowiedzenie_oznaczony', uvodVzor: 'Umowa na czas oznaczony (zaznacz):', moznosti: { tak: 'Każda ze stron może wypowiedzieć umowę zawartą na czas oznaczony z zachowaniem trzymiesięcznego okresu wypowiedzenia na koniec miesiąca kalendarzowego z ważnych przyczyn, w szczególności zmiany miejsca pracy, zaległości w płatnościach przekraczających dwa okresy płatności lub używania lokalu niezgodnie z umową.', nie: 'Umowa zawarta na czas oznaczony nie podlega wcześniejszemu wypowiedzeniu, z wyjątkiem przypadków przewidzianych w ustawie.' } },
        'Wypowiedzenie wymaga formy pisemnej. Po zakończeniu najmu najemca zwraca lokal w stanie niepogorszonym, z uwzględnieniem normalnego zużycia, wraz z kluczami.',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      odstavce: [
        'W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego i ustawy o ochronie praw lokatorów.',
        'Zmiany umowy wymagają formy pisemnej. Umowę sporządzono w dwóch egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
