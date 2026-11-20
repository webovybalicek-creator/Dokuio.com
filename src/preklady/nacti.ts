/** Líné načtení jazykové verze šablony v prohlížeči: originální šablona + soubor překladu → slozVerzi. */
import type { Sablona } from '../sablony/typy';
import type { PrekladDokumentu } from './typy';
import { nactiSablonu } from '../sablony/nacti';
import { slozVerzi } from './verze';

const moduly = import.meta.glob<{ default: PrekladDokumentu }>('./*/*/*.ts');

export async function nactiVerzi(soubor: string, kod: string, prekladSoubor: string, jazyk: string): Promise<Sablona | undefined> {
  const [s, p] = await Promise.all([nactiSablonu(soubor, kod), moduly[prekladSoubor]?.()]);
  return s && p ? slozVerzi(s, p.default, jazyk) : undefined;
}
