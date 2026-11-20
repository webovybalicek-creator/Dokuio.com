/** Kaufvertrag Motorrad – Deutschland. Derselbe geprüfte Text wie beim Gebrauchtwagen (§§ 433 ff. BGB). */
import type { Sablona } from '../typy';
import { kaufvertragGebrauchtwagen as a } from './kaufvertrag-gebrauchtwagen';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [[/z\. B\. VW Golf/g, 'z. B. Honda CB500F'], [/z\. B\. Klimaanlage ohne Funktion/g, 'z. B. Kettensatz verschlissen, Tank verkratzt'], [/z\. B\. 9500/g, 'z. B. 4500'], [/\bAutos\b/g, 'Motorrads'], [/\bAuto\b/g, 'Motorrad']];

export const kaufvertragMotorrad: Sablona = naMotorku(a, {
  kod: 'DE-KAUF-MOTO',
  souborPdf: 'kaufvertrag-motorrad',
  paticka: a.paticka!.replace('DE-KAUF-AUTO', 'DE-KAUF-MOTO'),
  nahrady: NAHRADY,
  vin: 'Am Motorrad meist am Lenkkopf in den Rahmen eingeschlagen.',
  tip: 'Zubehör und Umbauten (Koffer, Sturzbügel, Auspuff) in den Vertrag schreiben. Umbauteile brauchen eine ABE, ein Teilegutachten mit Eintragung oder eine EG-Typgenehmigung – sonst kann die Betriebserlaubnis erlöschen.',
});
