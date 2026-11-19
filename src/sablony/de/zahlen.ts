/** Betrag in Worten (Deutsch), z. B. 15 500 → „fünfzehntausendfünfhundert Euro“ */
import type { Hodnota } from '../typy';

const E = ['', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'];
const T = ['zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const Z = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

function unterTausend(n: number, ende: boolean): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  let s = h ? `${E[h]}hundert` : '';
  if (r >= 10 && r < 20) s += T[r - 10];
  else if (r) {
    const e = r % 10;
    const z = Math.floor(r / 10);
    s += z ? `${e ? `${E[e]}und` : ''}${Z[z]}` : e === 1 && ende ? 'eins' : E[e];
  }
  return s;
}

export function inWorten(n: number): string {
  if (n === 0) return 'null';
  const mio = Math.floor(n / 1_000_000);
  const tsd = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const teile: string[] = [];
  if (mio) teile.push(mio === 1 ? 'eine Million' : `${unterTausend(mio, false)} Millionen`);
  const rest = `${tsd ? `${unterTausend(tsd, false)}tausend` : ''}${r ? unterTausend(r, true) : ''}`;
  if (rest) teile.push(rest);
  return teile.join(' ');
}

export function betragInWorten(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const eur = Math.floor(n);
  const ct = Math.round((n - eur) * 100);
  const w = eur === 1 ? 'ein' : inWorten(eur);
  return `${w} Euro${ct ? ` und ${ct} Cent` : ''}`;
}
