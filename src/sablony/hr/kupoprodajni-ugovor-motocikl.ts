/** Kupoprodajni ugovor za motocikl – Hrvatska. Isti provjereni tekst kao ugovor za automobil. */
import type { Sablona } from '../typy';
import { kupoprodajniUgovorAutomobil as a } from './kupoprodajni-ugovor-automobil';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Volkswagen Golf/g, 'Honda CB500F'],
  [/napuklo vjetrobransko staklo, ne radi klima/g, 'istrošen lanac, ogrebotine na spremniku'],
  [/npr\. 154320/g, 'npr. 24300'],
  [/rabljenog automobila/g, 'rabljenog motocikla'],
  [/automobila/g, 'motocikla'],
  [/automobil/g, 'motocikl'],
];

export const kupoprodajniUgovorMotocikl: Sablona = naMotorku(a, {
  kod: 'HR-MOTOCIKL',
  souborPdf: 'kupoprodajni-ugovor-motocikl',
  paticka: a.paticka!.replace('HR-AUTO', 'HR-MOTOCIKL'),
  nahrady: NAHRADY,
  vin: 'Na motociklu je obično utisnut u okvir kod glave upravljača.',
  tip: 'Upišite opremu i preinake (kofere, zaštitne lukove, ispuh) i provjerite jesu li preinake koje se moraju odobriti upisane u prometnu dozvolu.',
});
