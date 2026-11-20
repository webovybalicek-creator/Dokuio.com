/** Kaufvertrag Motorrad – Österreich. Derselbe geprüfte Text wie beim Gebrauchtwagen (§§ 1053 ff. ABGB). */
import type { Sablona } from '../typy';
import { kaufvertragGebrauchtwagenAT as a } from './kaufvertrag-gebrauchtwagen';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [[/z\. B\. VW Golf/g, 'z. B. Honda CB500F'], [/z\. B\. Klimaanlage ohne Funktion/g, 'z. B. Kettensatz verschlissen, Tank verkratzt'], [/z\. B\. 9500/g, 'z. B. 4500'], [/\bAutos\b/g, 'Motorrads'], [/\bAuto\b/g, 'Motorrad']];

export const kaufvertragMotorradAT: Sablona = naMotorku(a, {
  kod: 'AT-KAUF-MOTO',
  souborPdf: 'kaufvertrag-motorrad',
  paticka: a.paticka!.replace('AT-KAUF-AUTO', 'AT-KAUF-MOTO'),
  nahrady: NAHRADY,
  vin: 'Am Motorrad meist am Lenkkopf in den Rahmen eingeschlagen.',
  tip: 'Zubehör und Umbauten (Koffer, Sturzbügel, Auspuff) in den Vertrag schreiben und prüfen, ob genehmigungspflichtige Umbauten in den Papieren eingetragen sind.',
});
