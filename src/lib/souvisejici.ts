/** Dokumenty k prodeji auta – vzájemné prolinkování (landing „Hodí se k tomu“ a panel „Co dál?“) */
import type { Ilustrace } from './dokumenty';

export const AUTO: { nazev: string; popis: string; url: string; ilustrace: Ilustrace }[] = [
  { nazev: 'Kupní smlouva na auto', popis: 'Prodej ojetého auta mezi soukromými osobami.', url: '/cz/kupni-smlouva-auto/', ilustrace: 'auto' },
  { nazev: 'Předávací protokol k vozidlu', popis: 'Stav km a paliva, poškození, klíče a výbava při předání.', url: '/cz/predavaci-protokol-vozidlo/', ilustrace: 'protokol' },
  { nazev: 'Plná moc k přepisu vozidla', popis: 'Když na registr vozidel nemůžete jít osobně.', url: '/cz/plna-moc-prepis-vozidla/', ilustrace: 'plnamoc' },
  { nazev: 'Výpověď povinného ručení', popis: 'Po prodeji auta, k výročí nebo při zdražení.', url: '/cz/vypoved-povinneho-ruceni/', ilustrace: 'protokol' },
  { nazev: 'Kupní smlouva na motorku', popis: 'Prodej motocyklu, skútru nebo čtyřkolky.', url: '/cz/kupni-smlouva-motorka/', ilustrace: 'motorka' },
];

export const autoKrome = (url: string) => AUTO.filter((d) => d.url !== url);

/** Peníze a dary */
export const PENIZE: { nazev: string; popis: string; url: string; ilustrace: Ilustrace }[] = [
  { nazev: 'Darovací smlouva', popis: 'Darování peněz nebo movité věci.', url: '/cz/darovaci-smlouva/', ilustrace: 'dar' },
  { nazev: 'Smlouva o zápůjčce', popis: 'Půjčka peněz mezi známými, i na splátky.', url: '/cz/smlouva-o-zapujcce/', ilustrace: 'pujcka' },
  { nazev: 'Potvrzení o převzetí peněz', popis: 'Doklad o předání hotovosti.', url: '/cz/potvrzeni-o-prevzeti-penez/', ilustrace: 'penize' },
  { nazev: 'Uznání dluhu', popis: 'Dlužník písemně potvrdí, kolik a do kdy vrátí.', url: '/cz/uznani-dluhu/', ilustrace: 'dluh' },
  { nazev: 'Kupní smlouva na věc', popis: 'Prodej kola, telefonu, nábytku.', url: '/cz/kupni-smlouva-vec/', ilustrace: 'penize' },
  { nazev: 'Plná moc', popis: 'Aby za vás někdo něco vyřídil.', url: '/cz/plna-moc/', ilustrace: 'plnamoc' },
];

export const penizeKrome = (url: string) => PENIZE.filter((d) => d.url !== url);
