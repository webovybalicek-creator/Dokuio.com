/**
 * Hilfen für Schweizer Vorlagen: Schweizer Schreibweise (ss statt ß, CHF statt €) für alle festen Texte,
 * Beträge in Worten in Franken. Funktionen (Ableitungen, Anlagen, Erinnerungen) bleiben unverändert,
 * damit Nutzerangaben nie umgeschrieben werden.
 */
import type { Hodnota, Sablona } from '../typy';
import { inWorten } from '../de/zahlen';
import { chText } from '../../i18n/schweiz';
import { formatCislo } from '../dokument';
import { nahrad, MUSTER_CH } from '../nahrad';

function texte<T>(v: T): T {
  if (typeof v === 'string') return chText(v) as T;
  if (typeof v === 'function') return v;
  if (Array.isArray(v)) return v.map((x) => texte(x)) as T;
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, texte(x)])) as T;
  }
  return v;
}

/**
 * Schweizer Vorlage: zeme 'ch', Sprache de-CH, Texte in Schweizer Schreibweise; aus DE übernommene
 * Beispielwerte (Berlin, DE-IBAN, B-AB …) werden durch Schweizer ersetzt (MUSTER_CH in ../nahrad.ts).
 */
export const schweiz = (s: Sablona): Sablona => ({ ...texte(nahrad(s, MUSTER_CH)), zeme: 'ch', jazyk: 'de-CH' });

export const chf = (n: number) => `${formatCislo(String(n))} CHF`;

export function betragInFranken(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/[\s'’]/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const fr = Math.floor(n);
  const rp = Math.round((n - fr) * 100);
  const w = fr === 1 ? 'ein' : inWorten(fr);
  return `${w} Franken${rp ? ` und ${rp} Rappen` : ''}`;
}

export const paticka = (kod: string, verze = '1.0') =>
  `Kostenlos erstellt · Vorlage ${kod} v${verze} · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen`;
