/**
 * Odvození kupní smlouvy na motorku z kupní smlouvy na auto (sk, pl, de, at, ch, hu).
 * Právní text článků zůstává stejný (mluví o „vozidle“); mění se nápovědy, příklady, průvodce a tipy.
 * `clanky: true` přeloží i články – jen tam, kde text článků výslovně jmenuje auto (PL „samochodu“).
 */
import type { Sablona } from './typy';

export type Nahrady = [RegExp, string][];
export const preloz = <T>(x: T, n: Nahrady): T => {
  if (typeof x === 'string') return n.reduce((t, [a, b]) => t.replace(a, b), x as string) as T;
  if (Array.isArray(x)) return x.map((y) => preloz(y, n)) as T;
  if (x && typeof x === 'object') {
    return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, typeof v === 'function' ? v : preloz(v, n)])) as T;
  }
  return x;
};

export function naMotorku(
  a: Sablona,
  o: { kod: string; nazev?: string; souborPdf: string; paticka: string; nahrady: Nahrady; vin: string; tip: string; clanky?: boolean },
): Sablona {
  const kroky = preloz(a.kroky, o.nahrady).map((k: any) => ({
    ...k,
    pole: k.pole?.map((p: any) => (p.id === 'vin' ? { ...p, napoveda: `${p.napoveda ?? ''} ${o.vin}`.trim() } : p)),
  }));
  return {
    ...a,
    kod: o.kod,
    nazev: o.nazev ?? a.nazev,
    souborPdf: o.souborPdf,
    paticka: o.paticka,
    kroky,
    coDal: preloz(a.coDal, o.nahrady),
    kontrola: [...preloz(a.kontrola, o.nahrady), o.tip],
    clanky: o.clanky
      ? preloz(a.clanky, o.nahrady)
      : a.clanky.map((c: any) => (c.vysvetleni ? { ...c, vysvetleni: preloz(c.vysvetleni, o.nahrady) } : c)),
  };
}
