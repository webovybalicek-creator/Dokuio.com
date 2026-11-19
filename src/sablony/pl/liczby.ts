/** Kwota słownie po polsku (złote), np. 12 500 → „dwanaście tysięcy pięćset złotych” */
import type { Hodnota } from '../typy';

const J = ['', 'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'];
const N = ['dziesięć', 'jedenaście', 'dwanaście', 'trzynaście', 'czternaście', 'piętnaście', 'szesnaście', 'siedemnaście', 'osiemnaście', 'dziewiętnaście'];
const D = ['', '', 'dwadzieścia', 'trzydzieści', 'czterdzieści', 'pięćdziesiąt', 'sześćdziesiąt', 'siedemdziesiąt', 'osiemdziesiąt', 'dziewięćdziesiąt'];
const S = ['', 'sto', 'dwieście', 'trzysta', 'czterysta', 'pięćset', 'sześćset', 'siedemset', 'osiemset', 'dziewięćset'];

const odmiana = (n: number, [jeden, dwa, piec]: [string, string, string]) => {
  if (n === 1) return jeden;
  const j = n % 10;
  const d = n % 100;
  return j >= 2 && j <= 4 && !(d >= 12 && d <= 14) ? dwa : piec;
};

function doTysiaca(n: number): string {
  const s = Math.floor(n / 100);
  const r = n % 100;
  return [S[s], r >= 10 && r < 20 ? N[r - 10] : [D[Math.floor(r / 10)], J[r % 10]].filter(Boolean).join(' ')].filter(Boolean).join(' ');
}

export function slownie(n: number): string {
  if (n === 0) return 'zero';
  const mln = Math.floor(n / 1_000_000);
  const tys = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  return [
    mln ? (mln === 1 ? 'milion' : `${doTysiaca(mln)} ${odmiana(mln, ['milion', 'miliony', 'milionów'])}`) : '',
    tys ? (tys === 1 ? 'tysiąc' : `${doTysiaca(tys)} ${odmiana(tys, ['tysiąc', 'tysiące', 'tysięcy'])}`) : '',
    r ? doTysiaca(r) : '',
  ]
    .filter(Boolean)
    .join(' ');
}

export function kwotaSlownie(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  const zl = Math.floor(n);
  const gr = Math.round((n - zl) * 100);
  return `${slownie(zl)} ${odmiana(zl, ['złoty', 'złote', 'złotych'])}${gr ? ` ${gr}/100` : ''}`;
}
