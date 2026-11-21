/**
 * Suma în litere în limba română (lei), de ex. 12 500 → „douăsprezece mii cinci sute de lei”, 2 → „doi lei”, 1 → „un leu”.
 * „de” se pune când ultimele două cifre sunt 00 sau 20–99 (20 de lei, 101 lei, 1 000 de lei).
 * „mie” și „milion” cer forme feminine/neutre ale numeralului (două mii, douăzeci și una de mii, două milioane).
 */
import type { Hodnota } from '../typy';

const U_M = ['', 'unu', 'doi', 'trei', 'patru', 'cinci', 'șase', 'șapte', 'opt', 'nouă'];
const U_F = ['', 'una', 'două', 'trei', 'patru', 'cinci', 'șase', 'șapte', 'opt', 'nouă'];
const N_M = ['zece', 'unsprezece', 'doisprezece', 'treisprezece', 'paisprezece', 'cincisprezece', 'șaisprezece', 'șaptesprezece', 'optsprezece', 'nouăsprezece'];
const D = ['', '', 'douăzeci', 'treizeci', 'patruzeci', 'cincizeci', 'șaizeci', 'șaptezeci', 'optzeci', 'nouăzeci'];
const S = ['', 'o sută', 'două sute', 'trei sute', 'patru sute', 'cinci sute', 'șase sute', 'șapte sute', 'opt sute', 'nouă sute'];

/** Trebuie „de” între număr și substantiv? (ultimele două cifre 00 sau 20–99, n ≥ 20) */
export const cuDe = (n: number) => n >= 20 && (n % 100 === 0 || n % 100 >= 20);

/** 1–999; `fem` = forme feminine (înaintea lui „mii”, „milioane”) */
function pana999(n: number, fem = false): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const d = Math.floor(r / 10);
  const u = r % 10;
  const U = fem ? U_F : U_M;
  let rest = '';
  if (r >= 10 && r < 20) rest = fem && r === 12 ? 'douăsprezece' : N_M[r - 10];
  else if (d >= 2) rest = u ? `${D[d]} și ${U[u]}` : D[d];
  else if (u) rest = U[u];
  return [S[s], rest].filter(Boolean).join(' ');
}

export function inLitere(n: number): string {
  if (n === 0) return 'zero';
  const mil = Math.floor(n / 1_000_000);
  const mii = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const parti: string[] = [];
  if (mil) parti.push(mil === 1 ? 'un milion' : `${pana999(mil, true)}${cuDe(mil) ? ' de' : ''} milioane`);
  if (mii) parti.push(mii === 1 ? 'o mie' : `${pana999(mii, true)}${cuDe(mii) ? ' de' : ''} mii`);
  if (r) parti.push(pana999(r));
  return parti.join(' ');
}

export function sumaInLitere(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const intreg = Math.round(n);
  if (intreg === 1) return 'un leu';
  return `${inLitere(intreg)} ${cuDe(intreg) ? 'de lei' : 'lei'}`;
}
