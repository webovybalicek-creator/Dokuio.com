/** Texty rozhraní po jazycích. Jazyk dokumentu a stránky = jazyk země (Zeme.jazyk, Sablona.jazyk). */
import { cs, type Texty } from './cs';
import { sk } from './sk';
import { pl } from './pl';
import { de } from './de';
import { deCH } from './de-ch';
import { hu } from './hu';

export const TEXTY = { cs, sk, pl, de, 'de-CH': deCH, hu } satisfies Record<string, Texty>;
export type Jazyk = keyof typeof TEXTY;
export type { Texty };

export const texty = (jazyk: string | undefined): Texty => TEXTY[(jazyk ?? 'cs') as Jazyk] ?? cs;
