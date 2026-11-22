/** Contrat de vente d’une moto d’occasion – Suisse romande. Même texte vérifié que pour la voiture (art. 184 ss CO). */
import type { Sablona } from '../typy';
import { venteVoiture as a } from './contrat-de-vente-voiture';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/la voiture lui appartient/g, 'la moto lui appartient'],
  [/ne suivent pas la voiture/g, 'ne suivent pas la moto'],
  [/pas à la voiture/g, 'pas à la moto'],
  [/Peugeot 308/g, 'Yamaha MT-07'],
  [/climatisation hors service/g, 'kit chaîne usé, réservoir rayé'],
  [/p\. ex\. 9500/g, 'p. ex. 5400'],
];

export const venteMoto: Sablona = naMotorku(a, {
  kod: 'CHFR-VENTE-MOTO',
  nazev: 'Contrat de vente d’une moto d’occasion',
  souborPdf: 'contrat-de-vente-moto',
  paticka: a.paticka.replace('CHFR-VENTE-AUTO', 'CHFR-VENTE-MOTO'),
  nahrady: NAHRADY,
  vin: 'Sur une moto, il est en général frappé sur le cadre, près de la colonne de direction.',
  tip: 'Inscrivez dans le contrat les accessoires et transformations (valises, pare-carters, échappement) et vérifiez que les modifications soumises à autorisation figurent dans le permis de circulation.',
});
