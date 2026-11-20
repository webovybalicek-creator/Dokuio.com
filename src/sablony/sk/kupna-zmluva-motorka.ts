/** Kúpna zmluva na motorku – Slovensko. Rovnaký overený text ako kúpna zmluva na auto (§ 588 a nasl. OZ). */
import type { Sablona } from '../typy';
import { kupnaZmluvaAuto as a } from './kupna-zmluva-auto';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Škoda Octavia Combi/g, 'Honda CB500F'],
  [/za čelným sklom a na štítku vo dverách/g, 'na ráme pri hlave riadenia a na výrobnom štítku'],
  [/prasknuté čelné sklo, nefunkčná klimatizácia/g, 'opotrebovaná reťazová sada, poškriabaná nádrž'],
  [/sada zimných pneumatík/g, 'bočné kufre, padacie rámy'],
  [/sivá metalíza/g, 'červená'],
  [/napr\. 154320/g, 'napr. 24300'],
  [/napr\. 9500/g, 'napr. 4500'],
];

export const kupnaZmluvaMotorka: Sablona = naMotorku(a, {
  kod: 'SK-KUPNA-MOTO',
  souborPdf: 'kupna-zmluva-motorka',
  paticka: a.paticka!.replace('SK-KUPNA-AUTO', 'SK-KUPNA-MOTO'),
  nahrady: NAHRADY,
  vin: 'Na motorke je vyrazený na ráme pri hlave riadenia.',
  tip: 'Výbavu a doplnky (kufre, padacie rámy, výfuk) zapíšte do zmluvy. Úpravy, ktoré menia technické parametre (napr. iný výfuk), musia byť schválené a zapísané v dokladoch.',
});
