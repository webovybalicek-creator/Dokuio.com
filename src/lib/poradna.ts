/** Poradna (blog) – struktura podle země a pomocné funkce nad kolekcí článků. */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Poradna } from '../obsah/typy';
import { AKTIVNI_ZEME } from '../obsah';

const soubory = import.meta.glob<{ poradna: Poradna }>('../obsah/*/_poradna.ts', { eager: true });
export const PORADNY: Record<string, Poradna> = Object.fromEntries(
  Object.entries(soubory).map(([cesta, m]) => [cesta.split('/')[2], m.poradna]),
);

export type Clanek = CollectionEntry<'poradna'> & { zeme: string; slug: string };

/** Publikované články země (bez konceptů), nejnovější první */
export async function clanky(zeme?: string): Promise<Clanek[]> {
  const vse = await getCollection('poradna', (c) => !c.data.koncept);
  return vse
    .map((c) => {
      const [z, slug] = c.id.split('/');
      return { ...c, zeme: z, slug } as Clanek;
    })
    .filter((c) => (!zeme || c.zeme === zeme) && AKTIVNI_ZEME.some((z) => z.kod === c.zeme))
    .sort((a, b) => (b.data.aktualizovano ?? b.data.datum).localeCompare(a.data.aktualizovano ?? a.data.datum));
}

export const urlPoradny = (zeme: string) => `/${zeme}/${PORADNY[zeme].slug}/`;
export const urlKategorie = (zeme: string, kat: string) => `${urlPoradny(zeme)}${kat}/`;
export const urlTematu = (zeme: string, kat: string, tema: string) => `${urlKategorie(zeme, kat)}${tema}/`;
export const urlClanku = (c: Clanek) => `${urlPoradny(c.zeme)}${c.slug}/`;

/** Odhad doby čtení z markdownu */
export const minutCteni = (c: Clanek) => Math.max(2, Math.round((c.body ?? '').split(/\s+/).length / 200));

/** Meta description výpisu: popis + názvy článků, max. ~160 znaků (unikátní a v jazyce země) */
export function popisSeo(uvod: string, seznam: Clanek[]): string {
  let out = uvod.trim();
  for (const c of seznam) {
    const n = c.data.nazev ?? c.data.title;
    const dalsi = `${out}${out.endsWith(':') ? ' ' : out === uvod.trim() ? ' ' : ' · '}${n}`;
    if (dalsi.length > 158) break;
    out = dalsi;
  }
  // Příliš krátký popis doplnit úvodem prvního článku (zkrácen na celé slovo)
  const prvni = seznam[0]?.data.description;
  if (out.length < 90 && prvni) {
    const zbyva = 158 - out.length - 3;
    const kus = prvni.length <= zbyva ? prvni : `${prvni.slice(0, zbyva).replace(/\s+\S*$/, '')}…`;
    out = `${out} – ${kus}`;
  }
  return out;
}
