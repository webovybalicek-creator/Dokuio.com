/** Contratto di compravendita di una moto d’occasione – Svizzera italiana. Stesso testo verificato dell’auto (art. 184 segg. CO). */
import type { Sablona } from '../typy';
import { venditaAuto as a } from './contratto-di-compravendita-auto';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/l’auto gli appartiene/g, 'la moto gli appartiene'],
  [/non seguono l’auto/g, 'non seguono la moto'],
  [/non all’auto/g, 'non alla moto'],
  [/Fiat Tipo/g, 'Yamaha MT-07'],
  [/climatizzatore guasto/g, 'kit catena usurato, serbatoio graffiato'],
  [/p\. es\. 9500/g, 'p. es. 5400'],
];

export const venditaMoto: Sablona = naMotorku(a, {
  kod: 'CHIT-VENDITA-MOTO',
  nazev: 'Contratto di compravendita di una moto d’occasione',
  souborPdf: 'contratto-di-compravendita-moto',
  paticka: a.paticka.replace('CHIT-VENDITA-AUTO', 'CHIT-VENDITA-MOTO'),
  nahrady: NAHRADY,
  vin: 'Su una moto è di solito punzonato sul telaio, vicino al cannotto dello sterzo.',
  tip: 'Indicate nel contratto gli accessori e le modifiche (valigie, paramotore, scarico) e verificate che le modifiche soggette ad autorizzazione figurino nella licenza di circolazione.',
});
