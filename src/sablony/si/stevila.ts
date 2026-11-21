/**
 * Znesek z besedo v slovenščini (evro), npr. 12 500 → „dvanajst tisoč petsto evrov”, 2 → „dva evra”.
 * Števnike pišemo narazen po skupinah; desetice z enicami skupaj (petinštirideset).
 * Evro: 1 evro, 2 evra, 3–4 evri, 5+ evrov (po zadnjih dveh mestih).
 */
import type { Hodnota } from '../typy';

const E = ['', 'ena', 'dve', 'tri', 'štiri', 'pet', 'šest', 'sedem', 'osem', 'devet'];
const EZ = ['', 'ena', 'dva', 'tri', 'štiri', 'pet', 'šest', 'sedem', 'osem', 'devet'];
const N = ['deset', 'enajst', 'dvanajst', 'trinajst', 'štirinajst', 'petnajst', 'šestnajst', 'sedemnajst', 'osemnajst', 'devetnajst'];
const D = ['', '', 'dvajset', 'trideset', 'štirideset', 'petdeset', 'šestdeset', 'sedemdeset', 'osemdeset', 'devetdeset'];
const S = ['', 'sto', 'dvesto', 'tristo', 'štiristo', 'petsto', 'šeststo', 'sedemsto', 'osemsto', 'devetsto'];

/** 1–999; `pred` = pred „tisoč”/„milijon” (dva tisoč, ne dve tisoč) */
function do999(n: number, pred = false): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const d = Math.floor(r / 10);
  const e = r % 10;
  let ostanek = '';
  if (r >= 10 && r < 20) ostanek = N[r - 10];
  else if (d >= 2) ostanek = e ? `${EZ[e]}in${D[d]}` : D[d];
  else if (e) ostanek = (pred ? EZ : E)[e];
  return [S[s], ostanek].filter(Boolean).join(' ');
}

/** Oblika po številu: 1 / 2 / 3–4 / 5+ (gleda zadnji dve mesti) */
export function oblika(n: number, ena: string, dve: string, tri: string, pet: string): string {
  const m = n % 100;
  return m === 1 ? ena : m === 2 ? dve : m === 3 || m === 4 ? tri : pet;
}

export function zBesedo(n: number): string {
  if (n === 0) return 'nič';
  const mil = Math.floor(n / 1_000_000);
  const tis = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const deli: string[] = [];
  if (mil) {
    const st = mil === 1 ? 'en' : mil === 3 ? 'trije' : mil === 4 ? 'štirje' : do999(mil, true);
    deli.push(`${st} ${oblika(mil, 'milijon', 'milijona', 'milijoni', 'milijonov')}`);
  }
  if (tis) deli.push(tis === 1 ? 'tisoč' : `${do999(tis, true)} tisoč`);
  if (r) {
    // evro je moškega spola: en, dva, trije, štirje evri
    const m = r % 100;
    const mosk = ['', 'en', 'dva', 'trije', 'štirje'];
    deli.push(m >= 1 && m <= 4 ? [S[Math.floor(r / 100)], mosk[m]].filter(Boolean).join(' ') : do999(r));
  }
  return deli.join(' ');
}

export function znesekZBesedo(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const cel = Math.round(n);
  return `${zBesedo(cel)} ${oblika(cel, 'evro', 'evra', 'evri', 'evrov')}`;
}
