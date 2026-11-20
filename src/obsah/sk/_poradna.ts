import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'poradna',
  nazev: 'Poradňa',
  title: 'Poradňa – zmluvy, predaj auta, pôžičky a reklamácie zrozumiteľne',
  description: 'Praktické návody krok za krokom: ako predať auto, požičať peniaze, reklamovať tovar. Podľa platných zákonov, s odkazmi na vzory zadarmo.',
  h1: 'Poradňa',
  h1Span: 'Návody krok za krokom pre bežné životné situácie. Bez právnickej hantýrky, podľa platných zákonov.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto a vozidlá',
      popis: 'Predaj a kúpa jazdeného auta, prepis vozidla.',
      ilustrace: 'auto',
      temata: [
        { slug: 'predaj-auta', nazev: 'Predaj auta', popis: 'Ako predať auto bezpečne.' },
        { slug: 'kupa-auta', nazev: 'Kúpa jazdeného auta', popis: 'Na čo si dať pozor.' },
        { slug: 'prepis-vozidla', nazev: 'Prepis vozidla', popis: 'Lehoty, poplatky, splnomocnenie.' },
      ],
    },
    {
      slug: 'peniaze',
      nazev: 'Peniaze a dlhy',
      popis: 'Pôžičky medzi známymi, uznanie dlhu, dary.',
      ilustrace: 'penize',
      temata: [
        { slug: 'pozicka', nazev: 'Pôžička medzi ľuďmi', popis: 'Ako požičať peniaze, aby sa vrátili.' },
        { slug: 'dlhy', nazev: 'Dlhy', popis: 'Uznanie dlhu, premlčanie, splátky.' },
        { slug: 'dary', nazev: 'Dary', popis: 'Darovacia zmluva v praxi.' },
      ],
    },
    {
      slug: 'nakupy',
      nazev: 'Nákupy a reklamácie',
      popis: 'Vrátenie tovaru z e-shopu, reklamácia, predaj vecí.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'vratenie-tovaru', nazev: 'Vrátenie tovaru', popis: 'Odstúpenie od zmluvy do 14 dní.' },
        { slug: 'reklamacia', nazev: 'Reklamácia', popis: 'Lehoty a práva kupujúceho.' },
        { slug: 'remeselnici', nazev: 'Remeselníci a služby', popis: 'Zmluva o dielo, preddavok, prevzatie.' },
        { slug: 'pozicanie-veci', nazev: 'Požičanie vecí', popis: 'Výpožička, vrátenie, škody.' },
      ],
    },
    {
      slug: 'urady',
      nazev: 'Úrady a splnomocnenia',
      popis: 'Keď za vás niečo vybaví niekto iný.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'splnomocnenie', nazev: 'Splnomocnenie', popis: 'Kedy treba úradne overený podpis.' }, { slug: 'deti', nazev: 'Deti a cestovanie', popis: 'Súhlas s cestou dieťaťa do zahraničia.' }],
    },
    {
      slug: 'byvanie',
      nazev: 'Bývanie a nájom',
      popis: 'Prenájom bytu, zábezpeka, výpoveď a odovzdanie bytu.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'najom-bytu', nazev: 'Nájom bytu', popis: 'Nájomná zmluva, zábezpeka, práva a povinnosti.' },
        { slug: 'koniec-najmu', nazev: 'Koniec nájmu', popis: 'Výpoveď, odovzdanie bytu a vrátenie kaucie.' },
      ],
    },
  ],
};
