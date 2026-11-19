import type { Zeme } from '../typy';

export const zeme: Zeme = {
  kod: 'sk',
  nazev: 'Slovensko',
  nazevEn: 'Slovakia',
  jazyk: 'sk',
  hreflang: 'sk-SK',
  casovaZona: 'Europe/Bratislava',
  aktivni: true,
  poradi: 2,
  kategorie: { auto: 'Auto a vozidlá', penize: 'Peniaze a dary', zastoupeni: 'Splnomocnenia' },
  skupiny: {},
  pripravujeme: [
    { nazev: 'Kúpna zmluva na auto', popis: 'Predaj ojazdeného auta medzi súkromnými osobami.', kategorie: 'auto', ilustrace: 'auto', slova: ['kúpno-predajná zmluva', 'predaj auta', 'kúpa auta', 'ojazdené auto', 'vozidlo', 'car'] },
    { nazev: 'Preberací protokol vozidla', popis: 'Stav vozidla, kľúče a doklady pri odovzdaní.', kategorie: 'auto', ilustrace: 'protokol', slova: ['odovzdávací protokol', 'odovzdanie auta', 'protokol'] },
    { nazev: 'Splnomocnenie na prepis vozidla', popis: 'Keď prepis na dopravnom inšpektoráte vybavuje niekto iný.', kategorie: 'zastoupeni', ilustrace: 'plnamoc', slova: ['prepis auta', 'dopravný inšpektorát', 'plná moc', 'splnomocnenie'] },
    { nazev: 'Darovacia zmluva', popis: 'Darovanie peňazí, auta alebo hnuteľnej veci.', kategorie: 'penize', ilustrace: 'dar', slova: ['dar', 'darovanie', 'peniaze', 'darovať auto'] },
    { nazev: 'Zmluva o pôžičke', popis: 'Pôžička peňazí medzi známymi, aj so splátkami.', kategorie: 'penize', ilustrace: 'pujcka', slova: ['pôžička', 'požičať peniaze', 'splátky', 'loan'] },
    { nazev: 'Potvrdenie o prevzatí peňazí', popis: 'Doklad o odovzdaní hotovosti.', kategorie: 'penize', ilustrace: 'penize', slova: ['príjmový doklad', 'hotovosť', 'potvrdenie', 'receipt'] },
    { nazev: 'Splnomocnenie', popis: 'Poverenie niekoho, aby za vás niečo vybavil.', kategorie: 'zastoupeni', ilustrace: 'plnamoc', slova: ['plná moc', 'zastupovanie', 'úrad', 'power of attorney'] },
  ],
  hub: {
    title: 'Vzory zmlúv zadarmo v PDF – vyplňte online',
    description:
      'Vzory zmlúv zadarmo podľa slovenského práva pripravujeme: kúpna zmluva na auto, splnomocnenie, darovacia zmluva. PDF aj Word, bez registrácie.',
    stitek: 'Slovensko',
    stitekSpan: 'pripravujeme prvé zmluvy podľa slovenského práva',
    h1: 'Vzory zmlúv',
    h1Span: 'Vyplňte online za pár minút alebo si stiahnite prázdny vzor. Aj vo Worde, bez registrácie.',
    hledaniNadpis: 'Akú zmluvu potrebujete?',
    hledaniSpan: 'Prvé slovenské zmluvy pripravujeme.',
    ogPopis: 'Podľa slovenského práva. Vyplňte online.',
  },
};
