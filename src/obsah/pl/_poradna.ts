import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'poradnik',
  nazev: 'Poradnik',
  title: 'Poradnik – umowy, sprzedaż auta, pożyczki i reklamacje po ludzku',
  description: 'Praktyczne poradniki krok po kroku: jak sprzedać auto, pożyczyć pieniądze, zwrócić zakup lub złożyć reklamację. Zgodnie z przepisami, z darmowymi wzorami.',
  h1: 'Poradnik',
  h1Span: 'Poradniki krok po kroku na codzienne sytuacje. Bez prawniczego żargonu, zgodnie z przepisami.',
  kategorie: [
    {
      slug: 'samochody',
      nazev: 'Samochody',
      popis: 'Sprzedaż i zakup używanego auta, rejestracja, PCC.',
      ilustrace: 'auto',
      temata: [
        { slug: 'sprzedaz-auta', nazev: 'Sprzedaż auta', popis: 'Jak sprzedać auto i nic nie przeoczyć.' },
        { slug: 'zakup-auta', nazev: 'Zakup używanego auta', popis: 'Na co uważać przed zapłatą.' },
        { slug: 'rejestracja', nazev: 'Rejestracja i PCC', popis: 'Terminy, opłaty, pełnomocnictwo.' },
      ],
    },
    {
      slug: 'pieniadze',
      nazev: 'Pieniądze i długi',
      popis: 'Pożyczki prywatne, uznanie długu, darowizny i podatki.',
      ilustrace: 'penize',
      temata: [
        { slug: 'pozyczka', nazev: 'Pożyczka prywatna', popis: 'Jak pożyczyć, żeby pieniądze wróciły.' },
        { slug: 'dlugi', nazev: 'Długi', popis: 'Uznanie długu, przedawnienie, raty.' },
        { slug: 'darowizny', nazev: 'Darowizny i podatki', popis: 'SD-Z2, kwoty wolne, przelew.' },
      ],
    },
    {
      slug: 'zakupy',
      nazev: 'Zakupy i reklamacje',
      popis: 'Zwrot zakupów z internetu, reklamacja, sprzedaż rzeczy.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'zwrot', nazev: 'Zwrot zakupu', popis: 'Odstąpienie od umowy w 14 dni.' },
        { slug: 'reklamacja', nazev: 'Reklamacja', popis: 'Terminy i prawa konsumenta.' },
      ],
    },
    {
      slug: 'sprawy',
      nazev: 'Urzędy i pełnomocnictwa',
      popis: 'Gdy sprawę załatwia za Ciebie ktoś inny.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'pelnomocnictwo', nazev: 'Pełnomocnictwo', popis: 'Kiedy wystarczy zwykłe, ile kosztuje.' }],
    },
  ],
};
