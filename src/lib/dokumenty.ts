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
  cz: {
    auto: 'Auto a vozidla',
    penize: 'Peníze a dary',
    nakupy: 'Nákupy a reklamace',
    veci: 'Prodej věcí',
    bydleni: 'Bydlení',
    rodina: 'Rodina a cestování',
    zastoupeni: 'Plné moci',
  },
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
      url: '/cz/kupni-smlouva-motorka/',
      slova: ['motocykl', 'skútr', 'moped', 'čtyřkolka', 'prodej motorky'],
    },
    {
      nazev: 'Výpověď povinného ručení',
      popis: 'Výpověď pojištění auta: výročí, prodej, zdražení.',
      kategorie: 'auto',
      ilustrace: 'protokol',
      url: '/cz/vypoved-povinneho-ruceni/',
      slova: ['auto', 'povinné ručení', 'pojištění', 'výpověď', 'pojišťovna', 'zrušení pojištění', 'změna pojišťovny'],
    },
    {
      nazev: 'Předávací protokol k vozidlu',
      popis: 'Stav vozu, klíče a doklady při předání.',
      kategorie: 'auto',
      ilustrace: 'protokol',
      url: '/cz/predavaci-protokol-vozidlo/',
      slova: ['auto', 'předání auta', 'protokol', 'předávací', 'převzetí vozidla'],
    },
    {
      nazev: 'Plná moc k přepisu vozidla',
      popis: 'Když přepis v registru vyřizuje někdo jiný.',
      kategorie: 'zastoupeni',
      ilustrace: 'plnamoc',
      url: '/cz/plna-moc-prepis-vozidla/',
      slova: ['auto', 'přepis auta', 'registr vozidel', 'zmocnění', 'převod auta', 'plná moc'],
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
      url: '/cz/plna-moc/',
      slova: ['zmocnění', 'zastoupení', 'úřad', 'pošta', 'power of attorney'],
    },
    {
      nazev: 'Darovací smlouva',
      popis: 'Darování peněz nebo movité věci.',
      kategorie: 'penize',
      ilustrace: 'dar',
      url: '/cz/darovaci-smlouva/',
      slova: ['dar', 'darování', 'peníze', 'dárek', 'movitá věc', 'gift'],
    },
    {
      nazev: 'Smlouva o zápůjčce',
      popis: 'Půjčka peněz mezi známými, včetně splátek.',
      kategorie: 'penize',
      ilustrace: 'pujcka',
      url: '/cz/smlouva-o-zapujcce/',
      slova: ['půjčka', 'zápůjčka', 'půjčit peníze', 'splátky', 'úvěr', 'loan'],
    },
    {
      nazev: 'Potvrzení o převzetí peněz',
      popis: 'Doklad o předání hotovosti.',
      kategorie: 'penize',
      ilustrace: 'penize',
      url: '/cz/potvrzeni-o-prevzeti-penez/',
      slova: ['příjmový doklad', 'potvrzení', 'hotovost', 'převzetí', 'stvrzenka', 'receipt'],
    },
    {
      nazev: 'Kupní smlouva na věc',
      popis: 'Prodej kola, telefonu, nábytku a dalších věcí.',
      kategorie: 'veci',
      ilustrace: 'penize',
      url: '/cz/kupni-smlouva-vec/',
      slova: ['kupní smlouva', 'prodej', 'bazar', 'kolo', 'telefon', 'mobil', 'nábytek', 'movitá věc', 'obecná'],
    },
    {
      nazev: 'Odstoupení od smlouvy do 14 dnů',
      popis: 'Vrácení zboží z e-shopu bez udání důvodu.',
      kategorie: 'nakupy',
      ilustrace: 'protokol',
      url: '/cz/odstoupeni-od-smlouvy/',
      slova: ['vrácení zboží', 'e-shop', 'eshop', '14 dní', 'odstoupení', 'internet', 'vrátit peníze'],
    },
    {
      nazev: 'Reklamace zboží',
      popis: 'Vadné zboží: oprava, výměna, sleva nebo vrácení peněz.',
      kategorie: 'nakupy',
      ilustrace: 'protokol',
      url: '/cz/reklamace/',
      slova: ['reklamace', 'vada', 'záruka', 'reklamační protokol', 'oprava', 'výměna', 'obchod'],
    },
    {
      nazev: 'Souhlas s trvalým pobytem',
      popis: 'Souhlas vlastníka nebo nájemce s přihlášením na adresu.',
      kategorie: 'bydleni',
      ilustrace: 'plnamoc',
      url: '/cz/souhlas-s-trvalym-pobytem/',
      slova: ['trvalý pobyt', 'trvalé bydliště', 'přihlášení', 'souhlas vlastníka', 'ohlašovna', 'byt'],
    },
    {
      nazev: 'Souhlas s vycestováním dítěte',
      popis: 'Cesta dítěte do zahraničí bez rodičů nebo s jedním z nich.',
      kategorie: 'rodina',
      ilustrace: 'plnamoc',
      url: '/cz/souhlas-s-vycestovanim-ditete/',
      slova: ['dítě', 'cesta', 'zahraničí', 'dovolená', 'tábor', 'souhlas rodičů', 'vycestování', 'nezletilý'],
    },
    {
      nazev: 'Uznání dluhu',
      popis: 'Dlužník písemně uzná, kolik a do kdy vrátí.',
      kategorie: 'penize',
      ilustrace: 'dluh',
      url: '/cz/uznani-dluhu/',
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
