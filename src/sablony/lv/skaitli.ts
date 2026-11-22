/**
 * Summa vārdiem latviešu valodā (eiro), piem., 12 500 → „divpadsmit tūkstoši pieci simti eiro”, 1 → „viens eiro”.
 * Vienskaitlis pēc skaitļiem, kas beidzas ar 1 (izņemot 11): „divdesmit viens tūkstotis”.
 */
import type { Hodnota } from '../typy';

const VIENI = ['', 'viens', 'divi', 'trīs', 'četri', 'pieci', 'seši', 'septiņi', 'astoņi', 'deviņi'];
const PADSMIT = ['desmit', 'vienpadsmit', 'divpadsmit', 'trīspadsmit', 'četrpadsmit', 'piecpadsmit', 'sešpadsmit', 'septiņpadsmit', 'astoņpadsmit', 'deviņpadsmit'];
const DESMITI = ['', '', 'divdesmit', 'trīsdesmit', 'četrdesmit', 'piecdesmit', 'sešdesmit', 'septiņdesmit', 'astoņdesmit', 'deviņdesmit'];

function simti(n: number): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const out: string[] = [];
  if (s) out.push(s === 1 ? 'simts' : `${VIENI[s]} simti`);
  if (r >= 10 && r < 20) out.push(PADSMIT[r - 10]);
  else {
    if (Math.floor(r / 10)) out.push(DESMITI[Math.floor(r / 10)]);
    if (r % 10) out.push(VIENI[r % 10]);
  }
  return out.join(' ');
}

const vsk = (n: number) => n % 10 === 1 && n % 100 !== 11;

export function vardiem(n: number): string {
  if (n === 0) return 'nulle';
  const milj = Math.floor(n / 1_000_000);
  const tukst = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const c: string[] = [];
  if (milj) c.push(milj === 1 ? 'viens miljons' : `${simti(milj)} ${vsk(milj) ? 'miljons' : 'miljoni'}`);
  if (tukst) c.push(tukst === 1 ? 'tūkstotis' : `${simti(tukst)} ${vsk(tukst) ? 'tūkstotis' : 'tūkstoši'}`);
  if (r) c.push(simti(r));
  return c.join(' ');
}

export function summaVardiem(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  return `${vardiem(Math.round(n))} eiro`;
}
