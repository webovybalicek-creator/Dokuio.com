/** Převezme šablonu a v jejích textech nahradí zadané úseky (funkce nechá beze změny). Pro odvozené verze AT/CH. */
import type { Sablona } from './typy';

function proved<T>(v: T, n: [string, string][]): T {
  if (typeof v === 'string') return n.reduce((t, [a, b]) => t.split(a).join(b), v as string) as T;
  if (typeof v === 'function') return v;
  if (Array.isArray(v)) return v.map((x) => proved(x, n)) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, proved(x, n)])) as T;
  return v;
}

export const nahrad = (s: Sablona, n: [string, string][]): Sablona => proved(s, n);
