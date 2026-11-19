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
  kategorie: { auto: 'Auto a vozidlá', penize: 'Peniaze a dary', byvanie: 'Bývanie a nájom', zastoupeni: 'Splnomocnenia', bezne: 'Nákupy a bežný život' },
  skupiny: {
    auto: [
      { slug: 'kupna-zmluva-auto', popis: 'Predaj jazdeného auta medzi súkromnými osobami.' },
      { slug: 'preberaci-protokol-vozidla', popis: 'Stav km, poškodenia, kľúče a výbava pri odovzdaní.' },
      { slug: 'splnomocnenie-prepis-vozidla', popis: 'Keď na dopravný inšpektorát ide niekto iný.' },
    ],
    penize: [
      { slug: 'zmluva-o-pozicke', popis: 'Pôžička medzi známymi, aj na splátky.' },
      { slug: 'potvrdenie-o-prevzati-penazi', popis: 'Doklad o odovzdaní hotovosti.' },
      { slug: 'darovacia-zmluva', popis: 'Darovanie peňazí alebo hnuteľnej veci.' },
      { slug: 'uznanie-dlhu', popis: 'Dlh písomne, aj so splátkami.' },
      { slug: 'splnomocnenie', popis: 'Aby za vás niekto niečo vybavil.' },
    ],
    byvanie: [
      { slug: 'najomna-zmluva-byt', popis: 'Prenájom bytu podľa Občianskeho zákonníka.' },
      { slug: 'preberaci-protokol-bytu', popis: 'Merače, vady a kľúče pri odovzdaní.' },
      { slug: 'vypoved-z-najmu', popis: 'Výpoveď nájomcu, lehota tri mesiace.' },
    ],
    bezne: [
      { slug: 'kupna-zmluva', popis: 'Predaj použitých vecí medzi ľuďmi.' },
      { slug: 'odstupenie-od-zmluvy', popis: 'Vrátenie tovaru z e-shopu do 14 dní.' },
      { slug: 'reklamacia', popis: 'Chybný tovar u predávajúceho.' },
      { slug: 'splnomocnenie', popis: 'Aby za vás niekto niečo vybavil.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'predaj-auta',
      nazev: 'Predaj auta',
      popis: 'Kúpna zmluva, preberací protokol a splnomocnenie na prepis.',
      ilustrace: 'auto',
      dokumenty: ['kupna-zmluva-auto', 'preberaci-protokol-vozidla', 'splnomocnenie-prepis-vozidla'],
      title: 'Predaj auta – všetky dokumenty v jednom PDF zadarmo',
      description: 'Všetko k predaju jazdeného auta na Slovensku: kúpna zmluva, preberací protokol a splnomocnenie na prepis. Vyplníte raz, stiahnete naraz.',
      perex: 'Vyplňte kúpnu zmluvu a ostatné dokumenty sa z nej predvyplnia. Potom si stiahnite všetko naraz v jednom PDF.',
    },
    {
      slug: 'pozicka-penazi',
      nazev: 'Pôžička peňazí',
      popis: 'Zmluva o pôžičke so splátkovým kalendárom a potvrdenie o prevzatí peňazí.',
      ilustrace: 'pujcka',
      dokumenty: ['zmluva-o-pozicke', 'potvrdenie-o-prevzati-penazi'],
      title: 'Pôžička peňazí – zmluva a potvrdenie zadarmo',
      description: 'Pôžička medzi známymi čierne na bielom: zmluva o pôžičke so splátkovým kalendárom a potvrdenie o prevzatí peňazí.',
      perex: 'Zmluva o pôžičke so splátkovým kalendárom a doklad o odovzdaní peňazí.',
    },
  ],
  rozcestnik: {
    nadpis: 'Neviete, aký dokument?',
    span: 'Vyberte, čo riešite. Poradíme, čo budete potrebovať.',
    situace: [
      {
        nazev: 'Auto',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Predávam alebo kupujem jazdené auto', dokumenty: ['kupna-zmluva-auto', 'preberaci-protokol-vozidla', 'splnomocnenie-prepis-vozidla'], balicek: 'predaj-auta', tip: 'Žiadosť o zmenu držby vozidla do 30 dní.' },
          { text: 'Prepis za mňa vybaví niekto iný', dokumenty: ['splnomocnenie-prepis-vozidla'], tip: 'Podpis na splnomocnení musí byť úradne overený.' },
          { text: 'Požičiavam auto známemu', dokumenty: ['preberaci-protokol-vozidla'] },
        ],
      },
      {
        nazev: 'Peniaze',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Požičiavam niekomu peniaze', dokumenty: ['zmluva-o-pozicke', 'potvrdenie-o-prevzati-penazi'], balicek: 'pozicka-penazi' },
          { text: 'Darujem peniaze alebo vec', dokumenty: ['darovacia-zmluva'] },
          { text: 'Odovzdávam alebo preberám hotovosť', dokumenty: ['potvrdenie-o-prevzati-penazi'] },
          { text: 'Niekto mi dlhuje a chce splácať', dokumenty: ['uznanie-dlhu'] },
        ],
      },
      {
        nazev: 'Bývanie',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Prenajímam alebo si prenajímam byt', dokumenty: ['najomna-zmluva-byt', 'preberaci-protokol-bytu'] },
          { text: 'Chcem vypovedať nájom', dokumenty: ['vypoved-z-najmu'], tip: 'Výpovedná lehota je tri mesiace.' },
        ],
      },
      {
        nazev: 'Nákupy',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Chcem vrátiť tovar z e-shopu', dokumenty: ['odstupenie-od-zmluvy'], tip: '14 dní od prevzatia tovaru.' },
          { text: 'Kúpený tovar je chybný', dokumenty: ['reklamacia'] },
          { text: 'Predávam použitú vec', dokumenty: ['kupna-zmluva'] },
        ],
      },
      {
        nazev: 'Úrady a zastupovanie',
        ilustrace: 'plnamoc',
        moznosti: [{ text: 'Niekto za mňa niečo vybaví (pošta, úrad)', dokumenty: ['splnomocnenie'] }],
      },
    ],
  },
  hub: {
    title: 'Vzory zmlúv zadarmo v PDF – vyplňte online',
    description:
      'Vzory zmlúv zadarmo podľa slovenského práva: kúpna zmluva na auto, zmluva o pôžičke, splnomocnenie, darovacia zmluva. Vyplňte online, stiahnite PDF alebo Word.',
    stitek: 'Slovensko',
    stitekSpan: 'zmluvy podľa slovenského práva',
    h1: 'Vzory zmlúv',
    h1Span: 'Vyplňte online za pár minút alebo si stiahnite prázdny vzor. Aj vo Worde, bez registrácie.',
    hledaniNadpis: 'Akú zmluvu potrebujete?',
    hledaniSpan: 'Hľadajte podľa situácie, nie podľa paragrafov.',
    ogPopis: 'Podľa slovenského práva. Vyplňte online.',
  },
};
