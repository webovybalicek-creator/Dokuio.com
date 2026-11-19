/** Texty rozhraní po jazycích. Jazyk dokumentu a stránky = jazyk země (Zeme.jazyk, Sablona.jazyk). */
import { cs, type Texty } from './cs';
import { sk } from './sk';

export const TEXTY = { cs, sk } satisfies Record<string, Texty>;
export type Jazyk = keyof typeof TEXTY;
export type { Texty };

export const texty = (jazyk: string | undefined): Texty => TEXTY[(jazyk ?? 'cs') as Jazyk] ?? cs;
