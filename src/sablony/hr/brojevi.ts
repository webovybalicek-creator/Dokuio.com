/**
 * Iznos slovima na hrvatskom (euro), npr. 12 500 → „dvanaest tisuća petsto eura”.
 * Tisuće i milijuni se slažu s brojem: tisuću / dvije tisuće / pet tisuća; jedan milijun / dva milijuna.
 */
import type { Hodnota } from '../typy';

const J = ['', 'jedan', 'dva', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet'];
const JZ = ['', 'jedna', 'dvije', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet'];
const N = ['deset', 'jedanaest', 'dvanaest', 'trinaest', 'četrnaest', 'petnaest', 'šesnaest', 'sedamnaest', 'osamnaest', 'devetnaest'];
const D = ['', '', 'dvadeset', 'trideset', 'četrdeset', 'pedeset', 'šezdeset', 'sedamdeset', 'osamdeset', 'devedeset'];
const S = ['', 'sto', 'dvjesto', 'tristo', 'četiristo', 'petsto', 'šesto', 'sedamsto', 'osamsto', 'devetsto'];

/** 1–999; `zenski` = ženski rod jedinica (jedna, dvije) – ispred „tisuća” */
function troznamenkasti(n: number, zenski = false): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const dijelovi = [S[s]];
  if (r >= 10 && r < 20) dijelovi.push(N[r - 10]);
  else {
    dijelovi.push(D[Math.floor(r / 10)]);
    dijelovi.push((zenski ? JZ : J)[r % 10]);
  }
  return dijelovi.filter(Boolean).join(' ');
}

/** Oblik imenice prema broju: 1 → a, 2–4 → b, ostalo → c (11–14 uvijek c) */
function oblik(n: number, a: string, b: string, c: string): string {
  const d = n % 100;
  if (d >= 11 && d <= 14) return c;
  const j = n % 10;
  return j === 1 ? a : j >= 2 && j <= 4 ? b : c;
}

export function slovima(n: number): string {
  if (n === 0) return 'nula';
  const m = Math.floor(n / 1_000_000);
  const t = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const dijelovi: string[] = [];
  if (m) dijelovi.push(`${troznamenkasti(m)} ${oblik(m, 'milijun', 'milijuna', 'milijuna')}`);
  if (t) dijelovi.push(t === 1 ? 'tisuću' : `${troznamenkasti(t, true)} ${oblik(t, 'tisuća', 'tisuće', 'tisuća')}`);
  if (r) dijelovi.push(troznamenkasti(r));
  return dijelovi.join(' ');
}

export function iznosSlovima(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const cijeli = Math.round(n);
  return `${slovima(cijeli)} ${oblik(cijeli, 'euro', 'eura', 'eura')}`;
}
