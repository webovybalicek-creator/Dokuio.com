import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'poradna',
  nazev: 'Poradna',
  title: 'Poradna – smlouvy, prodej auta, půjčky, nájem a reklamace srozumitelně',
  description: 'Praktické návody krok za krokem: jak prodat auto, půjčit peníze, pronajmout byt, reklamovat zboží. Podle platných zákonů, s odkazy na vzory zdarma.',
  h1: 'Poradna',
  h1Span: 'Návody krok za krokem pro běžné životní situace. Bez právnické hantýrky, podle platných zákonů.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto a motorka',
      popis: 'Prodej a koupě ojetiny, přepis v registru, povinné ručení.',
      ilustrace: 'auto',
      temata: [
        { slug: 'prodej-auta', nazev: 'Prodej auta', popis: 'Jak prodat auto bezpečně a nic nezapomenout.' },
        { slug: 'koupe-ojetiny', nazev: 'Koupě ojetiny', popis: 'Na co si dát pozor, než zaplatíte.' },
        { slug: 'prepis-a-registr', nazev: 'Přepis a registr vozidel', popis: 'Lhůty, poplatky, plná moc.' },
        { slug: 'povinne-ruceni', nazev: 'Povinné ručení', popis: 'Výpověď, přeplatek, zelená karta.' },
      ],
    },
    {
      slug: 'penize',
      nazev: 'Peníze a dluhy',
      popis: 'Půjčky mezi známými, uznání dluhu, dary a daně.',
      ilustrace: 'penize',
      temata: [
        { slug: 'pujcka', nazev: 'Půjčka mezi lidmi', popis: 'Jak půjčit peníze, aby se vrátily.' },
        { slug: 'dluhy', nazev: 'Dluhy a vymáhání', popis: 'Uznání dluhu, promlčení, splátky.' },
        { slug: 'dary-a-dane', nazev: 'Dary a daně', popis: 'Darovací smlouva, kdy se platí daň.' },
      ],
    },
    {
      slug: 'bydleni',
      nazev: 'Bydlení a nájem',
      popis: 'Pronájem bytu, podnájem, kauce, výpověď a předání.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'najem-bytu', nazev: 'Pronájem bytu', popis: 'Nájemní smlouva, nájemné, práva a povinnosti.' },
        { slug: 'podnajem', nazev: 'Podnájem', popis: 'Kdy je potřeba souhlas pronajímatele.' },
        { slug: 'konec-najmu', nazev: 'Konec nájmu', popis: 'Výpověď, dohoda, předání bytu a kauce.' },
      ],
    },
    {
      slug: 'nakupy',
      nazev: 'Nákupy a reklamace',
      popis: 'Vrácení zboží z e-shopu, reklamace, prodej věcí z druhé ruky.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'vraceni-zbozi', nazev: 'Vrácení zboží', popis: 'Odstoupení od smlouvy do 14 dnů.' },
        { slug: 'reklamace', nazev: 'Reklamace', popis: 'Lhůty, práva, co dělat, když obchod nereaguje.' },
        { slug: 'prodej-veci', nazev: 'Prodej z druhé ruky', popis: 'Bazar, inzerát, kupní smlouva.' },
        { slug: 'remeslnici', nazev: 'Řemeslníci a služby', popis: 'Smlouva o dílo, záloha, převzetí.' },
      ],
    },
    {
      slug: 'rodina-a-urady',
      nazev: 'Rodina a úřady',
      popis: 'Plné moci, cestování s dětmi, trvalý pobyt.',
      ilustrace: 'plnamoc',
      temata: [
        { slug: 'plna-moc', nazev: 'Plná moc', popis: 'Kdy stačí obyčejná a kdy úředně ověřená.' },
        { slug: 'deti', nazev: 'Děti a cestování', popis: 'Souhlas s vycestováním dítěte.' },
        { slug: 'trvaly-pobyt', nazev: 'Trvalý pobyt', popis: 'Souhlas vlastníka, přihlášení na úřadě.' },
      ],
    },
  ],
};
