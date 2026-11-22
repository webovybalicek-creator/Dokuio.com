/**
 * Summa sõnadega eesti keeles (euro), nt 12 500 → „kaksteist tuhat viissada eurot“, 1 → „üks euro“.
 * Kümnelised ja sajalised kirjutatakse kokku (kakskümmend, viissada), muud osad lahku (kakskümmend viis).
 */
import type { Hodnota } from '../typy';

const UHED = ['', 'üks', 'kaks', 'kolm', 'neli', 'viis', 'kuus', 'seitse', 'kaheksa', 'üheksa'];
const TEIST = ['kümme', 'üksteist', 'kaksteist', 'kolmteist', 'neliteist', 'viisteist', 'kuusteist', 'seitseteist', 'kaheksateist', 'üheksateist'];

function sajad(n: number): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const out: string[] = [];
  if (s) out.push(s === 1 ? 'sada' : `${UHED[s]}sada`);
  if (r >= 10 && r < 20) out.push(TEIST[r - 10]);
  else {
    const k = Math.floor(r / 10);
    const u = r % 10;
    if (k) out.push(`${UHED[k]}kümmend`);
    if (u) out.push(UHED[u]);
  }
  return out.join(' ');
}

export function sonadega(n: number): string {
  if (n === 0) return 'null';
  const mil = Math.floor(n / 1_000_000);
  const tuh = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const c: string[] = [];
  if (mil) c.push(mil === 1 ? 'üks miljon' : `${sajad(mil)} miljonit`);
  if (tuh) c.push(tuh === 1 ? 'tuhat' : `${sajad(tuh)} tuhat`);
  if (r) c.push(sajad(r));
  return c.join(' ');
}

export function summaSonadega(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const e = Math.round(n);
  return `${sonadega(e)} ${e === 1 ? 'euro' : 'eurot'}`;
}
