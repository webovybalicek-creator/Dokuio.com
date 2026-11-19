import type { Zeme } from '../typy';

export const zeme: Zeme = {
  kod: 'pl',
  nazev: 'Polska',
  nazevEn: 'Poland',
  jazyk: 'pl',
  hreflang: 'pl-PL',
  casovaZona: 'Europe/Warsaw',
  aktivni: true,
  poradi: 3,
  kategorie: { auto: 'Samochody', pieniadze: 'Pieniądze' },
  skupiny: {
    auto: [
      { slug: 'umowa-kupna-sprzedazy-samochodu', popis: 'Sprzedaż używanego auta między osobami prywatnymi.' },
      { slug: 'protokol-zdawczo-odbiorczy-pojazdu', popis: 'Przebieg, uszkodzenia i kluczyki przy przekazaniu.' },
      { slug: 'pokwitowanie-odbioru-pieniedzy', popis: 'Potwierdzenie zapłaty gotówką.' },
    ],
    pieniadze: [
      { slug: 'umowa-pozyczki', popis: 'Pożyczka między znajomymi, także na raty.' },
      { slug: 'pokwitowanie-odbioru-pieniedzy', popis: 'Potwierdzenie przyjęcia gotówki.' },
    ],
  },
  pripravujeme: [
    { nazev: 'Umowa darowizny', popis: 'Darowizna pieniędzy lub rzeczy ruchomej.', kategorie: 'pieniadze', ilustrace: 'dar', slova: ['darowizna', 'SD-Z2', 'prezent'] },
    { nazev: 'Pełnomocnictwo', popis: 'Upoważnienie do załatwienia sprawy.', kategorie: 'pieniadze', ilustrace: 'plnamoc', slova: ['pełnomocnictwo', 'upoważnienie', 'urząd', 'poczta'] },
  ],
  balicky: [
    {
      slug: 'sprzedaz-auta',
      nazev: 'Sprzedaż auta',
      popis: 'Umowa kupna-sprzedaży, protokół zdawczo-odbiorczy i pokwitowanie.',
      ilustrace: 'auto',
      dokumenty: ['umowa-kupna-sprzedazy-samochodu', 'protokol-zdawczo-odbiorczy-pojazdu', 'pokwitowanie-odbioru-pieniedzy'],
      title: 'Sprzedaż auta – wszystkie dokumenty w jednym PDF za darmo',
      description: 'Wszystko do sprzedaży używanego auta w Polsce: umowa kupna-sprzedaży, protokół zdawczo-odbiorczy i pokwitowanie. Wypełniasz raz, pobierasz naraz.',
      perex: 'Wypełnij umowę, a protokół wypełni się na jej podstawie. Potem pobierz wszystko naraz w jednym PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Nie wiesz, jaki dokument?',
    span: 'Wybierz sytuację. Podpowiemy, czego potrzebujesz.',
    situace: [
      {
        nazev: 'Samochód',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Sprzedaję lub kupuję używane auto', dokumenty: ['umowa-kupna-sprzedazy-samochodu', 'protokol-zdawczo-odbiorczy-pojazdu'], balicek: 'sprzedaz-auta', tip: 'Kupujący: PCC-3 w 14 dni. Sprzedający: zgłoszenie zbycia w 30 dni.' },
          { text: 'Pożyczam auto znajomemu', dokumenty: ['protokol-zdawczo-odbiorczy-pojazdu'] },
        ],
      },
      {
        nazev: 'Pieniądze',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Pożyczam komuś pieniądze', dokumenty: ['umowa-pozyczki', 'pokwitowanie-odbioru-pieniedzy'], tip: 'Pożyczka może podlegać PCC 0,5% – sprawdź zwolnienia.' },
          { text: 'Przekazuję lub przyjmuję gotówkę', dokumenty: ['pokwitowanie-odbioru-pieniedzy'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Wzory umów za darmo w PDF – wypełnij online',
    description: 'Darmowe wzory umów według polskiego prawa: umowa kupna-sprzedaży samochodu, umowa pożyczki, pokwitowanie. Wypełnij online, pobierz PDF lub Word.',
    stitek: 'Polska',
    stitekSpan: 'umowy według polskiego prawa',
    h1: 'Wzory umów',
    h1Span: 'Wypełnij online w kilka minut albo pobierz pusty wzór. Także w Wordzie, bez rejestracji.',
    hledaniNadpis: 'Jakiej umowy potrzebujesz?',
    hledaniSpan: 'Szukaj według sytuacji, nie paragrafów.',
    ogPopis: 'Według polskiego prawa. Wypełnij online.',
  },
};
