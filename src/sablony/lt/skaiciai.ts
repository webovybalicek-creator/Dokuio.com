/**
 * Suma žodžiais lietuvių kalba (eurais), pvz., 12 500 → „dvylika tūkstančių penki šimtai eurų“, 1 → „vienas euras“.
 * Formos pagal paskutinius skaitmenis: 1 (ne 11) – vienaskaita, 2–9 – daugiskaita, 0 ir 10–19 – daugiskaitos kilmininkas.
 */
import type { Hodnota } from '../typy';

const VIENETAI = ['', 'vienas', 'du', 'trys', 'keturi', 'penki', 'šeši', 'septyni', 'aštuoni', 'devyni'];
const NIOLIKA = ['dešimt', 'vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika', 'šešiolika', 'septyniolika', 'aštuoniolika', 'devyniolika'];
const DESIMTYS = ['', '', 'dvidešimt', 'trisdešimt', 'keturiasdešimt', 'penkiasdešimt', 'šešiasdešimt', 'septyniasdešimt', 'aštuoniasdešimt', 'devyniasdešimt'];

const forma = (n: number, [vns, dgs, kilm]: [string, string, string]) => {
  const d = n % 10;
  const s = n % 100;
  if (s >= 10 && s <= 19) return kilm;
  if (d === 1) return vns;
  if (d === 0) return kilm;
  return dgs;
};

function simtai(n: number): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const out: string[] = [];
  if (s) out.push(s === 1 ? 'šimtas' : `${VIENETAI[s]} šimtai`);
  if (r >= 10 && r < 20) out.push(NIOLIKA[r - 10]);
  else {
    if (Math.floor(r / 10)) out.push(DESIMTYS[Math.floor(r / 10)]);
    if (r % 10) out.push(VIENETAI[r % 10]);
  }
  return out.join(' ');
}

export function zodziais(n: number): string {
  if (n === 0) return 'nulis';
  const mln = Math.floor(n / 1_000_000);
  const tukst = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const c: string[] = [];
  if (mln) c.push(mln === 1 ? 'vienas milijonas' : `${simtai(mln)} ${forma(mln, ['milijonas', 'milijonai', 'milijonų'])}`);
  if (tukst) c.push(tukst === 1 ? 'tūkstantis' : `${simtai(tukst)} ${forma(tukst, ['tūkstantis', 'tūkstančiai', 'tūkstančių'])}`);
  if (r) c.push(simtai(r));
  return c.join(' ');
}

export function sumaZodziais(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const k = Math.round(n);
  return `${zodziais(k)} ${forma(k, ['euras', 'eurai', 'eurų'])}`;
}
