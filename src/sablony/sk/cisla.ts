/** Suma slovom po slovensky (eurá), napr. 12 500 → „dvanásťtisícpäťsto eur“ */
import type { Hodnota } from '../typy';

const JEDNOTKY = ['', 'jeden', 'dva', 'tri', 'štyri', 'päť', 'šesť', 'sedem', 'osem', 'deväť'];
const NAST = ['desať', 'jedenásť', 'dvanásť', 'trinásť', 'štrnásť', 'pätnásť', 'šestnásť', 'sedemnásť', 'osemnásť', 'devätnásť'];
const DESIATKY = ['', '', 'dvadsať', 'tridsať', 'štyridsať', 'päťdesiat', 'šesťdesiat', 'sedemdesiat', 'osemdesiat', 'deväťdesiat'];
const STOVKY = ['', 'sto', 'dvesto', 'tristo', 'štyristo', 'päťsto', 'šesťsto', 'sedemsto', 'osemsto', 'deväťsto'];

function doTisic(n: number): string {
  const s = Math.floor(n / 100);
  const zb = n % 100;
  const d = Math.floor(zb / 10);
  const j = zb % 10;
  return STOVKY[s] + (zb >= 10 && zb < 20 ? NAST[zb - 10] : DESIATKY[d] + JEDNOTKY[j]);
}

export function slovom(n: number): string {
  if (n === 0) return 'nula';
  const mil = Math.floor(n / 1_000_000);
  const tis = Math.floor((n % 1_000_000) / 1000);
  const zb = n % 1000;
  const casti: string[] = [];
  if (mil) casti.push(mil === 1 ? 'jeden milión' : `${doTisic(mil).replace(/jeden$/, 'jeden')} ${mil < 5 ? 'milióny' : 'miliónov'}`);
  if (tis) casti.push(tis === 1 ? 'tisíc' : `${doTisic(tis).replace(/dva$/, 'dve')}tisíc`);
  if (zb) casti.push(doTisic(zb));
  return casti.join(mil ? ' ' : '').trim();
}

export function sumaSlovom(v: Hodnota): string {
  const n = Number(String(v ?? '').replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(n) || n <= 0 || String(v ?? '').trim() === '') return '';
  const cele = Math.floor(n);
  const centy = Math.round((n - cele) * 100);
  const eur = cele === 1 ? 'jedno euro' : cele >= 2 && cele <= 4 ? `${slovom(cele).replace(/dva$/, 'dve')} eurá` : `${slovom(cele)} eur`;
  return centy ? `${eur} a ${centy} centov` : eur;
}
