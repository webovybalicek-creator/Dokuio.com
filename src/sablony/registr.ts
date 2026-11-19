/**
 * Všechny šablony podle kódu – načtou se samy ze složek src/sablony/<zeme>/ (při buildu).
 * Prohlížeč si stahuje jen šablonu otevřeného dokumentu (src/sablony/nacti.ts).
 */
import type { Sablona } from './typy';

const moduly = import.meta.glob<Record<string, unknown>>('./*/*.ts', { eager: true });

const jeSablona = (x: unknown): x is Sablona =>
  typeof x === 'object' && x !== null && 'kod' in x && 'kroky' in x && 'clanky' in x;

export const SABLONY: Record<string, Sablona> = {};
/** kód šablony → soubor (klíč pro nacti.ts) */
export const SOUBORY: Record<string, string> = {};

for (const [soubor, m] of Object.entries(moduly)) {
  for (const x of Object.values(m)) {
    if (!jeSablona(x)) continue;
    if (SABLONY[x.kod] && SABLONY[x.kod] !== x) throw new Error(`Duplicitní kód šablony: ${x.kod}`);
    SABLONY[x.kod] = x;
    SOUBORY[x.kod] ??= soubor;
  }
}
