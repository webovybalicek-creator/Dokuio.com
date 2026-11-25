import type { StrankaDokumentu } from '../typy';
import { zgodaNaWyjazdDziecka as sablona } from '../../sablony/pl/zgoda-na-wyjazd-dziecka';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Zgoda na wyjazd dziecka za granicę',
  nazevA: 'zgodę na wyjazd dziecka za granicę',
  katalog: {
    popis: 'Podróż dziecka bez rodziców lub z jednym z nich.',
    kategorie: 'rodzina',
    ilustrace: 'plnamoc',
    slova: ['zgoda na wyjazd dziecka', 'zgoda rodzica', 'wyjazd za granicę', 'dziecko', 'wakacje', 'kolonie', 'podróż z dzieckiem', 'małoletni', 'notariusz'],
  },
  souvisejici: 'rodzina',
  landing: {
    title: 'Zgoda na wyjazd dziecka za granicę {rok} – wzór PDF za darmo',
    description: 'Zgoda rodziców na wyjazd dziecka za granicę według zaleceń gov.pl: dziecko, opiekun, kraj, termin, podpis u notariusza. Wzór za darmo w PDF i Word.',
    perex: 'Dziecko jedzie na wakacje z dziadkami, na kolonie albo z jednym z rodziców? Zgoda według zaleceń portali gov.pl, gotowa w kilka minut.',
    obsahPopis: 'Treść według zaleceń portalu powroty.gov.pl.',
    obsah: [
      { nazev: 'Rodzice', popis: 'Imię i nazwisko, PESEL, dokument, telefon.' },
      { nazev: 'Zgoda', popis: 'Dziecko, osoba towarzysząca, kraj docelowy i tranzytowy, termin, cel.' },
    ],
    kroky: [
      { nazev: 'Wypełnij dane', popis: 'Dokładnie jak w paszportach i dowodach.' },
      { nazev: 'Sprawdź wymogi kraju', popis: 'W serwisie MSZ „Informacje dla podróżujących” lub w ambasadzie.' },
      { nazev: 'Podpisz u notariusza', popis: 'Zalecane przez powroty.gov.pl.' },
    ],
    online: ['Treść według zaleceń gov.pl', 'Warianty: z rodzicem, z inną osobą, samodzielnie', 'Odnośniki do wymogów krajów', 'Pobranie w PDF i Word'],
    hodiSe: ['dziecko jedzie z dziadkami, krewnymi, na kolonie lub z klasą', 'dziecko jedzie z jednym z rodziców', 'dziecko leci samo z opieką przewoźnika'],
    nehodiSe: ['przeprowadzka dziecka za granicę – potrzebna zgoda drugiego rodzica lub sądu', 'kraj docelowy wymaga własnego formularza – użyj go', 'rodzice się nie zgadzają – decyduje sąd opiekuńczy'],
    poNadpis: 'Przed wyjazdem.',
    po: [
      { nazev: 'Notariusz', popis: 'Poświadczenie podpisu rodzica, który nie jedzie.' },
      { nazev: 'Dokumenty', popis: 'Zgoda, odpis aktu urodzenia, paszport lub dowód dziecka, ewentualnie tłumaczenie przysięgłe.' },
      { nazev: 'Telefon', popis: 'Bądź pod numerem podanym w zgodzie w czasie podróży.' },
    ],
    faq: [
      { q: 'Czy zgoda jest obowiązkowa?', a: 'Prawo polskie nie wymaga zgody na piśmie. Wyjazd za granicę to jednak istotna sprawa dziecka, o której rodzice decydują wspólnie (art. 97 § 2 KRO), a niektóre kraje i przewoźnicy mogą jej wymagać.' },
      { q: 'Czy podpis musi być poświadczony?', a: 'Portal powroty.gov.pl zaleca podpis przed notariuszem z klauzulą notarialną i dołączenie odpisu aktu urodzenia dziecka.' },
      { q: 'Gdzie sprawdzę wymogi kraju?', a: 'W serwisie MSZ „Informacje dla podróżujących”, w ambasadzie lub konsulacie kraju docelowego oraz u przewoźnika. Sprawdź też kraje tranzytowe.' },
      { q: 'Czy Straż Graniczna może pytać o zgodę?', a: 'Straż Graniczna może dodatkowo sprawdzać dzieci podróżujące same, z jednym rodzicem lub z osobą obcą, czy nie wyjeżdżają wbrew woli rodziców.' },
      { q: 'Czy zgodę trzeba przetłumaczyć?', a: 'Zależy od kraju docelowego i przewoźnika. Bezpiecznie jest mieć zgodę także w języku angielskim lub w języku kraju, do którego dziecko jedzie – wymogi sprawdź w serwisie MSZ albo w konsulacie.' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Zgoda powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 97 Kodeksu rodzinnego i opiekuńczego oraz na zaleceniach portali gov.pl (powroty.gov.pl, Stop uprowadzeniom dzieci), MSZ i Straży Granicznej. Wymogi krajów się różnią i zmieniają – sprawdź je przed podróżą.',
    souvisejiciPopis: 'Inne dokumenty dla rodziny, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij zgodę na wyjazd dziecka online – PDF za darmo',
    description: 'Zgoda rodziców na wyjazd dziecka za granicę według zaleceń gov.pl. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 3 minuty',
  },
};

export default stranka;
