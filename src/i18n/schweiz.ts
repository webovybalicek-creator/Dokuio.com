/**
 * Schweizer Hochdeutsch: kein „ß“ (immer „ss“), Franken statt Euro.
 * Wandelt Texte rekursiv um – auch Rückgabewerte von Funktionen.
 */
export const chText = (s: string): string =>
  s
    .replace(/ß/g, 'ss')
    .replace(/\(€\)/g, '(CHF)')
    .replace(/(\d)\s?€/g, '$1 CHF')
    .replace(/\bEuro\b/g, 'Franken')
    .replace(/\bCent\b/g, 'Rappen');

export function naSchweiz<T>(v: T): T {
  if (typeof v === 'string') return chText(v) as T;
  if (typeof v === 'function') {
    const f = v as unknown as (...a: unknown[]) => unknown;
    return ((...a: unknown[]) => naSchweiz(f(...a))) as T;
  }
  if (Array.isArray(v)) return v.map((x) => naSchweiz(x)) as T;
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, naSchweiz(x)])) as T;
  }
  return v;
}
