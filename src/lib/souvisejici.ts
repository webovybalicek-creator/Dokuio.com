/** Dokumenty k prodeji auta – vzájemné prolinkování (landing „Hodí se k tomu“ a panel „Co dál?“) */
import type { Ilustrace } from './dokumenty';

export const AUTO: { nazev: string; popis: string; url: string; ilustrace: Ilustrace }[] = [
  { nazev: 'Kupní smlouva na auto', popis: 'Prodej ojetého auta mezi soukromými osobami.', url: '/cz/kupni-smlouva-auto/', ilustrace: 'auto' },
  { nazev: 'Předávací protokol k vozidlu', popis: 'Stav km a paliva, poškození, klíče a výbava při předání.', url: '/cz/predavaci-protokol-vozidlo/', ilustrace: 'protokol' },
  { nazev: 'Plná moc k přepisu vozidla', popis: 'Když na registr vozidel nemůžete jít osobně.', url: '/cz/plna-moc-prepis-vozidla/', ilustrace: 'plnamoc' },
];

export const autoKrome = (url: string) => AUTO.filter((d) => d.url !== url);
