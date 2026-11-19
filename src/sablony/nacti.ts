/** Líné načtení jedné šablony v prohlížeči (každá šablona je samostatný malý soubor JS). */
import type { Sablona } from './typy';

const moduly = import.meta.glob<Record<string, unknown>>('./*/*.ts');

export async function nactiSablonu(soubor: string, kod: string): Promise<Sablona | undefined> {
  const nacti = moduly[soubor];
  if (!nacti) return undefined;
  const m = await nacti();
  return Object.values(m).find((x): x is Sablona => typeof x === 'object' && x !== null && (x as Sablona).kod === kod);
}
