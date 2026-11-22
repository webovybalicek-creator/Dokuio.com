/**
 * Importo in lettere in italiano (franchi e centesimi), p. es. 12 500 → « dodicimilacinquecento franchi ».
 * Regole: le decine perdono la vocale davanti a « uno » e « otto » (ventuno, trentotto); « tre » finale accentato
 * nei composti (ventitré); « cento » davanti a « ottanta » → « centottanta »; « mille » / « -mila »; « un milione », « due milioni ».
 */
import type { Hodnota } from '../typy';

const UNITA = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
const DECINE = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];

function menoDiCento(n: number): string {
  if (n < 20) return UNITA[n];
  const d = DECINE[Math.floor(n / 10)];
  const u = n % 10;
  if (u === 0) return d;
  if (u === 1 || u === 8) return d.slice(0, -1) + UNITA[u];
  return d + (u === 3 ? 'tré' : UNITA[u]);
}

function menoDiMille(n: number): string {
  const c = Math.floor(n / 100);
  const r = n % 100;
  let s = c === 0 ? '' : c === 1 ? 'cento' : `${UNITA[c]}cento`;
  if (r) {
    const resto = menoDiCento(r);
    s = s && Math.floor(r / 10) === 8 ? s.slice(0, -1) + resto : s + resto;
  }
  return s;
}

export function inLettere(n: number): string {
  if (n === 0) return 'zero';
  const milioni = Math.floor(n / 1_000_000);
  const migliaia = Math.floor((n % 1_000_000) / 1000);
  const resto = n % 1000;
  const parti: string[] = [];
  if (milioni) parti.push(milioni === 1 ? 'un milione' : `${menoDiMille(milioni)} milioni`);
  let s = '';
  if (migliaia) s += migliaia === 1 ? 'mille' : `${menoDiMille(migliaia)}mila`;
  if (resto) s += menoDiMille(resto);
  if (s) parti.push(s);
  return parti.join(' ');
}

/** « uno » davanti a un sostantivo maschile diventa « un » (ventun franchi resta « ventuno » per chiarezza) */
const davanti = (s: string) => (s === 'uno' ? 'un' : s);

/** Importo in franchi in lettere; vuoto se l’importo manca o non è valido */
export function importoInLettere(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/[\s'’]/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0 || n >= 1e9) return '';
  const fr = Math.floor(n);
  const ct = Math.round((n - fr) * 100);
  const franchi = fr ? `${davanti(inLettere(fr))}${fr >= 1_000_000 && fr % 1_000_000 === 0 ? ' di' : ''} ${fr === 1 ? 'franco' : 'franchi'}` : '';
  const centesimi = ct ? `${davanti(inLettere(ct))} ${ct === 1 ? 'centesimo' : 'centesimi'}` : '';
  return [franchi, centesimi].filter(Boolean).join(' e ');
}
