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
  kategorie: { auto: 'Samochody', pieniadze: 'Pieniądze i darowizny', codzienne: 'Zakupy i sprawy codzienne' },
  skupiny: {
    auto: [
      { slug: 'umowa-kupna-sprzedazy-samochodu', popis: 'Sprzedaż używanego auta między osobami prywatnymi.' },
      { slug: 'protokol-zdawczo-odbiorczy-pojazdu', popis: 'Przebieg, uszkodzenia i kluczyki przy przekazaniu.' },
      { slug: 'pelnomocnictwo-rejestracja-pojazdu', popis: 'Gdy rejestrację załatwia ktoś inny.' },
      { slug: 'pokwitowanie-odbioru-pieniedzy', popis: 'Potwierdzenie zapłaty gotówką.' },
    ],
    pieniadze: [
      { slug: 'umowa-pozyczki', popis: 'Pożyczka między znajomymi, także na raty.' },
      { slug: 'pokwitowanie-odbioru-pieniedzy', popis: 'Potwierdzenie przyjęcia gotówki.' },
      { slug: 'uznanie-dlugu', popis: 'Dług na piśmie, także z ratami.' },
      { slug: 'umowa-darowizny', popis: 'Darowizna pieniędzy lub rzeczy.' },
    ],
    codzienne: [
      { slug: 'pelnomocnictwo', popis: 'Upoważnienie do załatwienia sprawy.' },
      { slug: 'umowa-kupna-sprzedazy', popis: 'Sprzedaż używanych rzeczy.' },
      { slug: 'odstapienie-od-umowy', popis: 'Zwrot zakupu z internetu w 14 dni.' },
      { slug: 'reklamacja', popis: 'Wadliwy towar u sprzedawcy.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'sprzedaz-auta',
      nazev: 'Sprzedaż auta',
      popis: 'Umowa kupna-sprzedaży, protokół, pełnomocnictwo do rejestracji i pokwitowanie.',
      ilustrace: 'auto',
      dokumenty: ['umowa-kupna-sprzedazy-samochodu', 'protokol-zdawczo-odbiorczy-pojazdu', 'pelnomocnictwo-rejestracja-pojazdu', 'pokwitowanie-odbioru-pieniedzy'],
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
          { text: 'Rejestrację załatwi za mnie ktoś inny', dokumenty: ['pelnomocnictwo-rejestracja-pojazdu'], tip: 'Opłata skarbowa 17 zł, rodzina zwolniona.' },
          { text: 'Pożyczam auto znajomemu', dokumenty: ['protokol-zdawczo-odbiorczy-pojazdu'] },
        ],
      },
      {
        nazev: 'Pieniądze',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Pożyczam komuś pieniądze', dokumenty: ['umowa-pozyczki', 'pokwitowanie-odbioru-pieniedzy'], tip: 'Pożyczka może podlegać PCC 0,5% – sprawdź zwolnienia.' },
          { text: 'Przekazuję lub przyjmuję gotówkę', dokumenty: ['pokwitowanie-odbioru-pieniedzy'] },
          { text: 'Ktoś jest mi winien i chce spłacać w ratach', dokumenty: ['uznanie-dlugu'] },
          { text: 'Daruję pieniądze lub rzecz', dokumenty: ['umowa-darowizny'], tip: 'Najbliższa rodzina: SD-Z2 w 6 miesięcy i przelew na konto.' },
        ],
      },
      {
        nazev: 'Zakupy i sprawy',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Chcę zwrócić zakup z internetu', dokumenty: ['odstapienie-od-umowy'], tip: '14 dni od otrzymania towaru.' },
          { text: 'Kupiony towar jest wadliwy', dokumenty: ['reklamacja'] },
          { text: 'Sprzedaję używaną rzecz', dokumenty: ['umowa-kupna-sprzedazy'] },
          { text: 'Ktoś ma coś za mnie załatwić', dokumenty: ['pelnomocnictwo'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Wzory umów za darmo w PDF – wypełnij online',
    description: 'Darmowe wzory umów według polskiego prawa: sprzedaż samochodu, pożyczka, darowizna, pełnomocnictwo, odstąpienie, reklamacja. Online, PDF lub Word.',
    stitek: 'Polska',
    stitekSpan: 'umowy według polskiego prawa',
    h1: 'Wzory umów',
    h1Span: 'Wypełnij online w kilka minut albo pobierz pusty wzór. Także w Wordzie, bez rejestracji.',
    hledaniNadpis: 'Jakiej umowy potrzebujesz?',
    hledaniSpan: 'Szukaj według sytuacji, nie paragrafów.',
    ogPopis: 'Według polskiego prawa. Wypełnij online.',
  },
};
