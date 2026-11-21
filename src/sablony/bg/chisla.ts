/**
 * Сума словом на български (евро), напр. 12 500 → „дванадесет хиляди и петстотин евро“, 1 → „едно евро“, 2 → „две евро“.
 * „и“ се поставя пред последната съставка на числото (сто и пет, хиляда и двеста, двадесет и пет хиляди).
 * „хиляда“ е женски род (две хиляди), „милион“ – мъжки (два милиона); „евро“ е среден род (едно, две).
 */
import type { Hodnota } from '../typy';

const ED = { m: ['', 'един', 'два'], f: ['', 'една', 'две'], n: ['', 'едно', 'две'] };
const E = ['', '', '', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет'];
const NA = ['десет', 'единадесет', 'дванадесет', 'тринадесет', 'четиринадесет', 'петнадесет', 'шестнадесет', 'седемнадесет', 'осемнадесет', 'деветнадесет'];
const DES = ['', '', 'двадесет', 'тридесет', 'четиридесет', 'петдесет', 'шестдесет', 'седемдесет', 'осемдесет', 'деветдесет'];
const STO = ['', 'сто', 'двеста', 'триста', 'четиристотин', 'петстотин', 'шестстотин', 'седемстотин', 'осемстотин', 'деветстотин'];

type Rod = 'm' | 'f' | 'n';
const edinica = (u: number, rod: Rod) => (u <= 2 ? ED[rod][u] : E[u]);

/** Съставки на число 1–999 (без „и“), напр. 125 → ['сто', 'двадесет', 'пет'] */
function sastavki(n: number, rod: Rod): string[] {
  const s = Math.floor(n / 100);
  const r = n % 100;
  const out: string[] = [];
  if (s) out.push(STO[s]);
  if (r >= 10 && r < 20) out.push(NA[r - 10]);
  else {
    const d = Math.floor(r / 10);
    const u = r % 10;
    if (d) out.push(DES[d]);
    if (u) out.push(edinica(u, rod));
  }
  return out;
}

export function slovom(n: number, rod: Rod = 'n'): string {
  if (n === 0) return 'нула';
  const mil = Math.floor(n / 1_000_000);
  const hil = Math.floor((n % 1_000_000) / 1000);
  const r = n % 1000;
  const c: string[] = [];
  if (mil) {
    if (mil === 1) c.push('един милион');
    else { const s = sastavki(mil, 'm'); s[s.length - 1] += ' милиона'; c.push(...s); }
  }
  if (hil) {
    if (hil === 1) c.push('хиляда');
    else { const s = sastavki(hil, 'f'); s[s.length - 1] += ' хиляди'; c.push(...s); }
  }
  if (r) c.push(...sastavki(r, rod));
  if (c.length > 1) c[c.length - 1] = 'и ' + c[c.length - 1];
  return c.join(' ');
}

export function sumaSlovom(v: Hodnota): string {
  const t = String(v ?? '').trim();
  const n = Number(t.replace(/\s/g, '').replace(',', '.'));
  if (!t || !Number.isFinite(n) || n <= 0) return '';
  return `${slovom(Math.round(n))} евро`;
}
