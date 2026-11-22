/**
 * Texty rozhraní po jazycích. Jazyk dokumentu a stránky = jazyk země (Zeme.jazyk, Sablona.jazyk).
 * Jazykové verze (uk, en) mají vlastní texty rozhraní, údaje vázané na zemi (měna, doklad k vozidlu…)
 * se doplní podle země: `texty('uk', 'cs')` = ukrajinské rozhraní pro Česko. Viz PREKLADY.md.
 */
import { cs, type Texty } from './cs';
import { sk } from './sk';
import { pl } from './pl';
import { de } from './de';
import { deCH } from './de-ch';
import { hu } from './hu';
import { hr } from './hr';
import { sl } from './sl';
import { ro } from './ro';
import { bg } from './bg';
import { el } from './el';
import { et } from './et';
import { uk, ukVerze } from './uk';
import { en, enVerze } from './en';
import { proZemi, type TextyVerze } from './verze';

export const TEXTY = { cs, sk, pl, de, 'de-CH': deCH, hu, hr, sl, ro, bg, el, et, uk, en } satisfies Record<string, Texty>;
export type Jazyk = keyof typeof TEXTY;
export type { Texty, TextyVerze };

/** Jazyky verzí dokumentů (URL /<zeme>/<jazyk>/…) v pořadí v přepínači */
export const JAZYKY_VERZI: Record<string, TextyVerze> = { uk: ukVerze, en: enVerze };

/** Názvy jazyků v nich samých – přepínač jazyka */
export const NAZVY_JAZYKU: Record<string, string> = {
  cs: 'Čeština',
  sk: 'Slovenčina',
  pl: 'Polski',
  de: 'Deutsch',
  'de-CH': 'Deutsch',
  hu: 'Magyar',
  hr: 'Hrvatski',
  sl: 'Slovenščina',
  ro: 'Română',
  bg: 'Български',
  el: 'Ελληνικά',
  et: 'Eesti',
  uk: 'Українська',
  en: 'English',
};

/** Popisek přepínače jazyka pro čtečky (v jazyce stránky) */
export const POPISEK_PREPINACE: Record<string, string> = {
  cs: 'Jazyk stránky',
  sk: 'Jazyk stránky',
  pl: 'Język strony',
  de: 'Sprache der Seite',
  'de-CH': 'Sprache der Seite',
  hu: 'Az oldal nyelve',
  hr: 'Jezik stranice',
  sl: 'Jezik strani',
  ro: 'Limba paginii',
  bg: 'Език на страницата',
  el: 'Γλώσσα της σελίδας',
  et: 'Lehe keel',
  uk: 'Мова сторінки',
  en: 'Page language',
};

const sloucene: Record<string, Texty> = {};

/**
 * Texty rozhraní v jazyce `jazyk`. U jazyka verze (uk, en) s `jazykZeme` doplní údaje země
 * (měnu, doklad k vozidlu, částky příspěvku) z textů jazyka země.
 */
export const texty = (jazyk: string | undefined, jazykZeme?: string): Texty => {
  const t: Texty = TEXTY[(jazyk ?? 'cs') as Jazyk] ?? cs;
  const v = jazyk ? JAZYKY_VERZI[jazyk] : undefined;
  if (!v || !jazykZeme || jazykZeme === jazyk) return t;
  return (sloucene[`${jazyk}@${jazykZeme}`] ??= proZemi(t, v, texty(jazykZeme)));
};
