/**
 * Ποσό ολογράφως στα ελληνικά (ευρώ), π.χ. 12 500 → «δώδεκα χιλιάδες πεντακόσια ευρώ», 1 → «ένα ευρώ», 101 → «εκατόν ένα ευρώ».
 * Οι χιλιάδες είναι θηλυκού γένους (τρεις χιλιάδες, διακόσιες χιλιάδες, είκοσι μία χιλιάδες), το εκατομμύριο ουδέτερο
 * (δύο εκατομμύρια) και το «ευρώ» ουδέτερο (ένα, τρία, τέσσερα).
 */
import type { Hodnota } from '../typy';

type Genos = 'n' | 'f';
const MONADES = {
  n: ['', 'ένα', 'δύο', 'τρία', 'τέσσερα', 'πέντε', 'έξι', 'επτά', 'οκτώ', 'εννέα'],
  f: ['', 'μία', 'δύο', 'τρεις', 'τέσσερις', 'πέντε', 'έξι', 'επτά', 'οκτώ', 'εννέα'],
};
const DEKA = {
  n: ['δέκα', 'έντεκα', 'δώδεκα', 'δεκατρία', 'δεκατέσσερα', 'δεκαπέντε', 'δεκαέξι', 'δεκαεπτά', 'δεκαοκτώ', 'δεκαεννέα'],
  f: ['δέκα', 'έντεκα', 'δώδεκα', 'δεκατρείς', 'δεκατέσσερις', 'δεκαπέντε', 'δεκαέξι', 'δεκαεπτά', 'δεκαοκτώ', 'δεκαεννέα'],
};
const DEKADES = ['', '', 'είκοσι', 'τριάντα', 'σαράντα', 'πενήντα', 'εξήντα', 'εβδομήντα', 'ογδόντα', 'ενενήντα'];
const EKATONTADES = {
  n: ['', 'εκατό', 'διακόσια', 'τριακόσια', 'τετρακόσια', 'πεντακόσια', 'εξακόσια', 'επτακόσια', 'οκτακόσια', 'εννιακόσια'],
  f: ['', 'εκατό', 'διακόσιες', 'τριακόσιες', 'τετρακόσιες', 'πεντακόσιες', 'εξακόσιες', 'επτακόσιες', 'οκτακόσιες', 'εννιακόσιες'],
};

/** Αριθμός 1–999 με λέξεις */
function trades(n: number, g: Genos): string {
  const e = Math.floor(n / 100);
  const r = n % 100;
  const out: string[] = [];
  if (e) out.push(e === 1 && r ? 'εκατόν' : EKATONTADES[g][e]);
  if (r >= 10 && r < 20) out.push(DEKA[g][r - 10]);
  else {
    const d = Math.floor(r / 10);
    const m = r % 10;
    if (d) out.push(DEKADES[d]);
    if (m) out.push(MONADES[g][m]);
  }
  return out.join(' ');
}

export function oligrafos(n: number): string {
  if (n === 0) return 'μηδέν';
  const ek = Math.floor(n / 1_000_000);
  const xil = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const c: string[] = [];
  if (ek) c.push(ek === 1 ? 'ένα εκατομμύριο' : `${trades(ek, 'n')} εκατομμύρια`);
  if (xil) c.push(xil === 1 ? 'χίλια' : `${trades(xil, 'f')} χιλιάδες`);
  if (r) c.push(trades(r, 'n'));
  return c.join(' ');
}

export function posoOligrafos(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  return `${oligrafos(Math.round(n))} ευρώ`;
}
