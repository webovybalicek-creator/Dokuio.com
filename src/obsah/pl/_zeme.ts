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
  kategorie: { auto: 'Samochody', pieniadze: 'Pieniądze i darowizny', mieszkanie: 'Mieszkanie i najem', codzienne: 'Zakupy i sprawy codzienne', uslugi: 'Usługi i fachowcy', praca: 'Praca', rodzina: 'Rodzina i podróże' },
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
      { slug: 'porozumienie-o-splacie-w-ratach', popis: 'Umowa o raty z harmonogramem spłat.' },
      { slug: 'wezwanie-do-zaplaty', popis: 'Ostatnie wezwanie przed sądem.' },
      { slug: 'umowa-darowizny', popis: 'Darowizna pieniędzy lub rzeczy.' },
    ],
    mieszkanie: [
      { slug: 'umowa-podnajmu', popis: 'Pokój lub mieszkanie w podnajmie.' },
      { slug: 'porozumienie-rozwiazanie-umowy-najmu', popis: 'Koniec najmu za porozumieniem.' },
      { slug: 'umowa-najmu-mieszkania', popis: 'Zwykły najem mieszkania z kaucją.' },
      { slug: 'protokol-zdawczo-odbiorczy-mieszkania', popis: 'Liczniki, usterki i klucze.' },
      { slug: 'wypowiedzenie-umowy-najmu', popis: 'Wypowiedzenie najemcy.' },
    ],
    codzienne: [
      { slug: 'umowa-uzyczenia', popis: 'Bezpłatne użyczenie rzeczy.' },
      { slug: 'pelnomocnictwo', popis: 'Upoważnienie do załatwienia sprawy.' },
      { slug: 'umowa-kupna-sprzedazy', popis: 'Sprzedaż używanych rzeczy.' },
      { slug: 'odstapienie-od-umowy', popis: 'Zwrot zakupu z internetu w 14 dni.' },
      { slug: 'reklamacja', popis: 'Wadliwy towar u sprzedawcy.' },
      { slug: 'oswiadczenie', popis: 'Oświadczenie dla szkoły, urzędu lub banku.' },
      { slug: 'wypowiedzenie-umowy', popis: 'Abonament, prąd, gaz, siłownia, ubezpieczenie.' },
      { slug: 'zgoda-na-wyjazd-dziecka', popis: 'Podróż dziecka za granicę.' },
    ],
    uslugi: [
      { slug: 'umowa-o-dzielo', popis: 'Remont, naprawa lub wykonanie na zamówienie.' },
      { slug: 'pokwitowanie-odbioru-pieniedzy', popis: 'Pokwitowanie zaliczki.' },
      { slug: 'wezwanie-do-zaplaty', popis: 'Gdy zamawiający nie płaci.' },
    ],
    praca: [
      { slug: 'wypowiedzenie-umowy-o-prace', popis: 'Odejście z pracy lub porozumienie stron.' },
      { slug: 'wypowiedzenie-umowy', popis: 'Rezygnacja z karty sportowej, abonamentu i innych usług.' },
      { slug: 'oswiadczenie', popis: 'Oświadczenie dla pracodawcy lub urzędu.' },
      { slug: 'pelnomocnictwo', popis: 'Gdy ktoś odbierze dokumenty za Ciebie.' },
    ],
    rodzina: [
      { slug: 'zgoda-na-wyjazd-dziecka', popis: 'Wakacje, kolonie, podróż z jednym rodzicem.' },
      { slug: 'pelnomocnictwo', popis: 'Upoważnienie do załatwienia sprawy.' },
      { slug: 'oswiadczenie', popis: 'Oświadczenie dla szkoły lub urzędu.' },
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
          { text: 'Ktoś jest mi winien i chce spłacać w ratach', dokumenty: ['porozumienie-o-splacie-w-ratach', 'uznanie-dlugu'], tip: 'Porozumienie z harmonogramem; uznanie długu przerywa przedawnienie.' },
          { text: 'Daruję pieniądze lub rzecz', dokumenty: ['umowa-darowizny'], tip: 'Najbliższa rodzina: SD-Z2 w 6 miesięcy i przelew na konto.' },
        ],
      },
      {
        nazev: 'Mieszkanie',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Wynajmuję lub najmuję mieszkanie', dokumenty: ['umowa-najmu-mieszkania', 'protokol-zdawczo-odbiorczy-mieszkania'], tip: 'Kaucja najwyżej 12-krotność czynszu.' },
          { text: 'Chcę wypowiedzieć najem', dokumenty: ['wypowiedzenie-umowy-najmu'], tip: 'Czas nieoznaczony: 3 miesiące na koniec miesiąca.' },
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
          { text: 'Chcę wypowiedzieć abonament, prąd, gaz lub siłownię', dokumenty: ['wypowiedzenie-umowy'], tip: 'Sprawdź okres wypowiedzenia w umowie lub regulaminie.' },
        ],
      },
      {
        nazev: 'Praca i rodzina',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Odchodzę z pracy (jestem pracownikiem)', dokumenty: ['wypowiedzenie-umowy-o-prace'], tip: 'Okres: 2 tygodnie, 1 lub 3 miesiące – zależnie od stażu.' },
          { text: 'Dziecko jedzie za granicę bez rodzica', dokumenty: ['zgoda-na-wyjazd-dziecka'], tip: 'Wymogi kraju sprawdź w serwisie MSZ.' },
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
