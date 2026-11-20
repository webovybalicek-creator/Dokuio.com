/** Motorkerékpár adásvételi szerződés – Magyarország. Ugyanaz az ellenőrzött szöveg, mint a gépjármű-szerződésnél. */
import type { Sablona } from '../typy';
import { gepjarmuAdasvetel as a } from './gepjarmu-adasveteli-szerzodes';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Suzuki Vitara/g, 'Honda CB500F'],
  [/repedt szélvédő/g, 'kopott lánckészlet, karcos tank'],
  [/pl\. 154320/g, 'pl. 24300'],
  [/pl\. 2500000/g, 'pl. 1500000'],
  [/([Aa])z autón\b/g, '$1 motorkerékpáron'],
  [/([Aa])z autóval/g, '$1 motorkerékpárral'],
  [/([Aa])z autó/g, '$1 motorkerékpár'],
  [/autón\b/g, 'motorkerékpáron'],
  [/autóval/g, 'motorkerékpárral'],
  [/autó/g, 'motorkerékpár'],
];

export const motorkerekparAdasvetel: Sablona = naMotorku(a, {
  kod: 'HU-MOTOR',
  souborPdf: 'motorkerekpar-adasveteli-szerzodes',
  paticka: a.paticka!.replace('HU-AUTO', 'HU-MOTOR'),
  nahrady: NAHRADY,
  vin: 'Motorkerékpáron általában a kormányfejnél a vázba beütve.',
  tip: 'A tartozékokat és átalakításokat (dobozok, bukócső, kipufogó) írja bele a szerződésbe, és ellenőrizze, hogy az engedélyköteles átalakítások szerepelnek-e az okmányokban.',
});
