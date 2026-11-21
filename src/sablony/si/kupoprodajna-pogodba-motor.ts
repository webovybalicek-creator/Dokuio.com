/** Kupoprodajna pogodba za motorno kolo – Slovenija. Isto preverjeno besedilo kot pogodba za avtomobil. */
import type { Sablona } from '../typy';
import { kupoprodajnaPogodbaAvto as a } from './kupoprodajna-pogodba-avto';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Renault Clio/g, 'Yamaha MT-07'],
  [/počeno vetrobransko steklo, klimatska naprava ne deluje/g, 'obrabljena veriga, praske na rezervoarju'],
  [/npr\. 154320/g, 'npr. 24300'],
  [/rabljenega avtomobila/g, 'rabljenega motornega kolesa'],
  [/avtomobila/g, 'motornega kolesa'],
  [/avtomobil/g, 'motorno kolo'],
];

export const kupoprodajnaPogodbaMotor: Sablona = naMotorku(a, {
  kod: 'SI-MOTOR',
  souborPdf: 'kupoprodajna-pogodba-motor',
  paticka: a.paticka!.replace('SI-AVTO', 'SI-MOTOR'),
  nahrady: NAHRADY,
  vin: 'Na motornem kolesu je običajno vtisnjena v okvir pri glavi krmila.',
  tip: 'Vpišite opremo in predelave (kovčke, zaščitne loke, izpuh) in preverite, ali so predelave, ki zahtevajo homologacijo, vpisane v prometno dovoljenje.',
});
