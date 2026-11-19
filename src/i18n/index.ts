/** Texty rozhraní po jazycích. Jazyk dokumentu a stránky = jazyk země (Zeme.jazyk, Sablona.jazyk). */
import { cs, type Texty } from './cs';
import { sk } from './sk';
import { pl } from './pl';
import { de } from './de';

export const TEXTY = { cs, sk, pl, de } satisfies Record<string, Texty>;
export type Jazyk = keyof typeof TEXTY;
export type { Texty };

export const texty = (jazyk: string | undefined): Texty => TEXTY[(jazyk ?? 'cs') as Jazyk] ?? cs;
