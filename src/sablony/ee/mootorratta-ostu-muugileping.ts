/** Mootorratta ostu-müügileping – Eesti. Sama kontrollitud tekst mis sõiduautol; omanikuvahetus Transpordiameti e-teeninduses. */
import type { Sablona } from '../typy';
import { soidukiLeping as a } from './soiduki-ostu-muugileping';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/müüb ja ostja ostab sõiduauto, mark ja mudel/g, 'müüb ja ostja ostab mootorratta, mark ja mudel'],
  [/Toyota Corolla/g, 'Yamaha MT-07'],
  [/pragu esiklaasis, kliimaseade ei tööta/g, 'kulunud kett, kriimud kütusepaagil'],
  [/nt 168400/g, 'nt 21500'],
  [/nt 7900/g, 'nt 5400'],
];

export const mootorrattaLeping: Sablona = naMotorku(a, {
  kod: 'EE-MOTO',
  nazev: 'Mootorratta ostu-müügileping',
  souborPdf: 'mootorratta-ostu-muugileping',
  paticka: a.paticka.replace('EE-AUTO', 'EE-MOTO'),
  nahrady: NAHRADY,
  clanky: true,
  vin: 'Mootorrattal on see tavaliselt raamile stantsitud, rooli lähedal.',
  tip: 'Kirjutage lepingusse varustus ja ümberehitused (kohvrid, kaitsmed, summuti) ning kontrollige, et heakskiitu vajavad muudatused oleksid registris.',
});
