/** Motocikla pirkuma līgums – Latvija. Tas pats pārbaudītais teksts kā automobilim; īpašnieka maiņa e-CSDD. */
import type { Sablona } from '../typy';
import { autoLigums as a } from './auto-pirkuma-ligums';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/pārdod un pircējs pērk vieglo automobili, marka un modelis/g, 'pārdod un pircējs pērk motociklu, marka un modelis'],
  [/Toyota Corolla/g, 'Yamaha MT-07'],
  [/plaisa vējstiklā, nedarbojas kondicionieris/g, 'nodilusi ķēde, skrāpējumi uz degvielas tvertnes'],
  [/piem\., 168400/g, 'piem., 21500'],
  [/piem\., 7900/g, 'piem., 5400'],
];

export const motociklaLigums: Sablona = naMotorku(a, {
  kod: 'LV-MOTO',
  nazev: 'Motocikla pirkuma līgums',
  souborPdf: 'motocikla-pirkuma-ligums',
  paticka: a.paticka.replace('LV-AUTO', 'LV-MOTO'),
  nahrady: NAHRADY,
  clanky: true,
  vin: 'Motociklam tas parasti ir iekalts rāmī pie stūres.',
  tip: 'Ierakstiet līgumā aprīkojumu un pārbūves (kofrus, aizsargus, izpūtēju) un pārbaudiet, vai reģistrētas izmaiņas, kurām vajadzīga atļauja.',
});
