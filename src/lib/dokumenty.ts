/**
 * Katalog dokumentů po zemích. Vyhledávání na stránce země hledá jen v dokumentech té země.
 * `url` = dokument je hotový; bez url = „Připravujeme“.
 * `slova` = synonyma a běžné dotazy, podle kterých lidé hledají (bez nutnosti diakritiky).
 */
export type Ilustrace = 'auto' | 'motorka' | 'protokol' | 'plnamoc' | 'dar' | 'penize' | 'pujcka' | 'dluh';

export interface Dokument {
  nazev: string;
  popis: string;
  kategorie: string;
  ilustrace: Ilustrace;
  url?: string;
  slova: string[];
}

export const KATEGORIE: Record<string, Record<string, string>> = {
  cz: { auto: 'Auto a vozidla', penize: 'Peníze a dary', zastoupeni: 'Plné moci' },
  sk: { auto: 'Auto a vozidlá', penize: 'Peniaze a dary', zastoupeni: 'Splnomocnenia' },
};

export const DOKUMENTY: Record<string, Dokument[]> = {
  cz: [
    {
      nazev: 'Kupní smlouva na auto',
      popis: 'Prodej ojetého auta mezi soukromými osobami.',
      kategorie: 'auto',
      ilustrace: 'auto',
      url: '/cz/kupni-smlouva-auto/',
      slova: ['prodej auta', 'koupě auta', 'prodat auto', 'ojetina', 'ojeté auto', 'vůz', 'vozidlo', 'automobil', 'kupní smlouva', 'car'],
    },
    {
      nazev: 'Kupní smlouva na motorku',
      popis: 'Prodej motocyklu, skútru nebo čtyřkolky.',
      kategorie: 'auto',
      ilustrace: 'motorka',
      slova: ['motocykl', 'skútr', 'moped', 'čtyřkolka', 'prodej motorky'],
    },
    {
      nazev: 'Předávací protokol k vozidlu',
      popis: 'Stav vozu, klíče a doklady při předání.',
      kategorie: 'auto',
      ilustrace: 'protokol',
      url: '/cz/predavaci-protokol-vozidlo/',
      slova: ['předání auta', 'protokol', 'předávací', 'převzetí vozidla'],
    },
    {
      nazev: 'Plná moc k přepisu vozidla',
      popis: 'Když přepis v registru vyřizuje někdo jiný.',
      kategorie: 'zastoupeni',
      ilustrace: 'plnamoc',
      url: '/cz/plna-moc-prepis-vozidla/',
      slova: ['přepis auta', 'registr vozidel', 'zmocnění', 'převod auta'],
    },
    {
      nazev: 'Darovací smlouva na auto',
      popis: 'Darování auta v rodině nebo mezi známými.',
      kategorie: 'auto',
      ilustrace: 'dar',
      slova: ['darování auta', 'dar', 'darovat auto', 'rodina'],
    },
    {
      nazev: 'Plná moc',
      popis: 'Zmocnění někoho, aby za vás něco vyřídil.',
      kategorie: 'zastoupeni',
      ilustrace: 'plnamoc',
      slova: ['zmocnění', 'zastoupení', 'úřad', 'pošta', 'power of attorney'],
    },
    {
      nazev: 'Darovací smlouva',
      popis: 'Darování peněz nebo movité věci.',
      kategorie: 'penize',
      ilustrace: 'dar',
      slova: ['dar', 'darování', 'peníze', 'dárek', 'movitá věc', 'gift'],
    },
    {
      nazev: 'Smlouva o zápůjčce',
      popis: 'Půjčka peněz mezi známými, včetně splátek.',
      kategorie: 'penize',
      ilustrace: 'pujcka',
      slova: ['půjčka', 'zápůjčka', 'půjčit peníze', 'splátky', 'úvěr', 'loan'],
    },
    {
      nazev: 'Potvrzení o převzetí peněz',
      popis: 'Doklad o předání hotovosti.',
      kategorie: 'penize',
      ilustrace: 'penize',
      slova: ['příjmový doklad', 'potvrzení', 'hotovost', 'převzetí', 'stvrzenka', 'receipt'],
    },
    {
      nazev: 'Uznání dluhu',
      popis: 'Dlužník písemně uzná, kolik a do kdy vrátí.',
      kategorie: 'penize',
      ilustrace: 'dluh',
      slova: ['dluh', 'dlužník', 'splátkový kalendář', 'uznání'],
    },
  ],
  sk: [
    {
      nazev: 'Kúpna zmluva na auto',
      popis: 'Predaj ojazdeného auta medzi súkromnými osobami.',
      kategorie: 'auto',
      ilustrace: 'auto',
      slova: ['kúpno-predajná zmluva', 'predaj auta', 'kúpa auta', 'ojazdené auto', 'vozidlo', 'car'],
    },
    {
      nazev: 'Preberací protokol vozidla',
      popis: 'Stav vozidla, kľúče a doklady pri odovzdaní.',
      kategorie: 'auto',
      ilustrace: 'protokol',
      slova: ['odovzdávací protokol', 'odovzdanie auta', 'protokol'],
    },
    {
      nazev: 'Splnomocnenie na prepis vozidla',
      popis: 'Keď prepis na dopravnom inšpektoráte vybavuje niekto iný.',
      kategorie: 'zastoupeni',
      ilustrace: 'plnamoc',
      slova: ['prepis auta', 'dopravný inšpektorát', 'plná moc', 'splnomocnenie'],
    },
    {
      nazev: 'Darovacia zmluva',
      popis: 'Darovanie peňazí, auta alebo hnuteľnej veci.',
      kategorie: 'penize',
      ilustrace: 'dar',
      slova: ['dar', 'darovanie', 'peniaze', 'darovať auto'],
    },
    {
      nazev: 'Zmluva o pôžičke',
      popis: 'Pôžička peňazí medzi známymi, aj so splátkami.',
      kategorie: 'penize',
      ilustrace: 'pujcka',
      slova: ['pôžička', 'požičať peniaze', 'splátky', 'loan'],
    },
    {
      nazev: 'Potvrdenie o prevzatí peňazí',
      popis: 'Doklad o odovzdaní hotovosti.',
      kategorie: 'penize',
      ilustrace: 'penize',
      slova: ['príjmový doklad', 'hotovosť', 'potvrdenie', 'receipt'],
    },
    {
      nazev: 'Splnomocnenie',
      popis: 'Poverenie niekoho, aby za vás niečo vybavil.',
      kategorie: 'zastoupeni',
      ilustrace: 'plnamoc',
      slova: ['plná moc', 'zastupovanie', 'úrad', 'power of attorney'],
    },
  ],
};
