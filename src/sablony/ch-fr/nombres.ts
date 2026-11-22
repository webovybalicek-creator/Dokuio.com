/**
 * Montant en lettres en français de Suisse (francs et centimes), p. ex. 12 500 → « douze mille cinq cents francs ».
 * Usage romand : septante, nonante ; « quatre-vingts » (compris partout, usuel à Genève et Neuchâtel).
 * Règles : 21, 31… « et un » (sauf 81, 91 → quatre-vingt-un, nonante et un) ; « cents » et « quatre-vingts » au pluriel
 * seulement s’ils terminent le nombre ; « mille » invariable ; « million(s) ».
 */
import type { Hodnota } from '../typy';

const UNITES = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
const DIZAINES = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'septante', 'quatre-vingt', 'nonante'];

function moinsDeCent(n: number, fin: boolean): string {
  if (n <= 16) return UNITES[n];
  if (n < 20) return `dix-${UNITES[n - 10]}`;
  const d = Math.floor(n / 10);
  const u = n % 10;
  if (u === 0) return d === 8 && fin ? 'quatre-vingts' : DIZAINES[d];
  if (u === 1 && d !== 8) return `${DIZAINES[d]} et un`;
  return `${DIZAINES[d]}-${UNITES[u]}`;
}

function moinsDeMille(n: number, fin: boolean): string {
  const c = Math.floor(n / 100);
  const r = n % 100;
  const parts: string[] = [];
  if (c === 1) parts.push('cent');
  else if (c > 1) parts.push(r === 0 && fin ? `${UNITES[c]} cents` : `${UNITES[c]} cent`);
  if (r) parts.push(moinsDeCent(r, fin));
  return parts.join(' ');
}

export function enLettres(n: number): string {
  if (n === 0) return 'zéro';
  const millions = Math.floor(n / 1_000_000);
  const milliers = Math.floor((n % 1_000_000) / 1000);
  const reste = n % 1000;
  const parts: string[] = [];
  if (millions) parts.push(`${millions === 1 ? 'un' : moinsDeMille(millions, true)} million${millions > 1 ? 's' : ''}`);
  if (milliers) parts.push(milliers === 1 ? 'mille' : `${moinsDeMille(milliers, false)} mille`);
  if (reste) parts.push(moinsDeMille(reste, true));
  return parts.join(' ');
}

/** Montant en francs en lettres ; vide si le montant manque ou n’est pas valable */
export function montantEnLettres(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/[\s'’]/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0 || n >= 1e9) return '';
  const fr = Math.floor(n);
  const ct = Math.round((n - fr) * 100);
  const francs = fr ? `${enLettres(fr)}${fr >= 1_000_000 && fr % 1_000_000 === 0 ? ' de' : ''} franc${fr > 1 ? 's' : ''}` : '';
  const centimes = ct ? `${enLettres(ct)} centime${ct > 1 ? 's' : ''}` : '';
  return [francs, centimes].filter(Boolean).join(' et ');
}
