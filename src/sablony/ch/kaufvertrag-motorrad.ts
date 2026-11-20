/** Kaufvertrag Motorrad – Schweiz. Derselbe geprüfte Text wie beim Occasionsfahrzeug (Art. 184 ff. OR). */
import type { Sablona } from '../typy';
import { kaufvertragAutoCH as a } from './kaufvertrag-auto';
import { naMotorku, type Nahrady } from '../motorka';
import { paticka } from './schweiz';

export const NAHRADY: Nahrady = [[/z\. B\. VW Golf/g, 'z. B. Honda CB500F'], [/z\. B\. Klimaanlage ohne Funktion/g, 'z. B. Kettensatz verschlissen, Tank verkratzt'], [/z\. B\. 9500/g, 'z. B. 4500'], [/\bAutos\b/g, 'Motorrads'], [/\bAuto\b/g, 'Motorrad']];

export const kaufvertragMotorradCH: Sablona = naMotorku(a, {
  kod: 'CH-KAUF-MOTO',
  souborPdf: 'kaufvertrag-motorrad',
  paticka: paticka('CH-KAUF-MOTO'),
  nahrady: NAHRADY,
  vin: 'Am Motorrad meist am Lenkkopf in den Rahmen eingeschlagen.',
  tip: 'Zubehör und Umbauten (Koffer, Sturzbügel, Auspuff) in den Vertrag schreiben und prüfen, ob bewilligungspflichtige Änderungen im Fahrzeugausweis eingetragen sind.',
});
