/**
 * Összeg betűvel magyarul (forint), pl. 12 500 → „tizenkétezer-ötszáz forint”.
 * Helyesírás: 2000 fölött az ezres csoportokat kötőjel választja el.
 */
import type { Hodnota } from '../typy';

const E = ['', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'];
const T = ['', 'tíz', 'húsz', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'];
const TT = ['', 'tizen', 'huszon', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'];

/** 1–999; `vegen` = a szám végén áll (kettő), különben szorzóként (két) */
function haromjegy(n: number, vegen: boolean): string {
  const s = Math.floor(n / 100);
  const t = Math.floor((n % 100) / 10);
  const e = n % 10;
  const egyes = (x: number, veg: boolean) => (x === 2 && !veg ? 'két' : E[x]);
  const szaz = s === 0 ? '' : s === 1 ? 'száz' : `${egyes(s, false)}száz`;
  const tiz = t === 0 ? '' : e ? TT[t] : T[t];
  return szaz + tiz + (e ? egyes(e, vegen) : '');
}

export function betuvel(n: number): string {
  if (n === 0) return 'nulla';
  const m = Math.floor(n / 1_000_000);
  const ez = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const reszek = [
    m ? `${m === 1 ? 'egy' : haromjegy(m, false)}millió` : '',
    ez ? `${ez === 1 && !m ? '' : ez === 1 ? 'egy' : haromjegy(ez, false)}ezer` : '',
    r ? haromjegy(r, true) : '',
  ].filter(Boolean);
  return reszek.join(n > 2000 ? '-' : '');
}

export function osszegBetuvel(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  return `${betuvel(Math.round(n))} forint`;
}
