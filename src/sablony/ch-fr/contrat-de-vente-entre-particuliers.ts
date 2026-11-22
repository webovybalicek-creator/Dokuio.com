/** Contrat de vente d’un objet d’occasion entre particuliers – Suisse romande (art. 184 ss CO, exclusion de garantie art. 199 CO). */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_184, CO_199, CO_201, ASTUCE_IDENTITE, ASTUCE_PAIEMENT, lienCO, pied } from './sources';

export const venteParticuliers: Sablona = {
  kod: 'CHFR-VENTE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de vente', podnadpis: 'vente d’un objet d’occasion entre particuliers (art. 184 ss CO)',
  souborPdf: 'contrat-de-vente-entre-particuliers', paticka: pied('CHFR-VENTE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Le vendeur / la venderesse', vpravo: 'L’acheteur / l’acheteuse' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  coDal: ['Imprimez deux exemplaires ; les deux parties signent les deux.', 'Examinez l’objet ensemble avant de signer ; en cas de paiement en espèces, établissez une quittance.'],
  kontrola: [
    'Décrivez l’objet exactement : marque, modèle, numéro de série, accessoires.',
    `Indiquez tous les défauts connus – un défaut dissimulé frauduleusement rend l’exclusion de la garantie caduque (${lienCO('199')}).`,
    `L’acheteur vérifie l’objet à la remise et signale immédiatement les défauts (${lienCO('201')}).`,
    'Pour un appareil coûteux, vérifiez le numéro de série et demandez la facture d’origine.',
    ASTUCE_IDENTITE,
    ASTUCE_PAIEMENT,
  ],
  zdroje: [CO_184, CO_199, CO_201],
  kroky: [
    { id: 'parteien', nazev: 'Vendeur et acheteur', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vendeur – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Acheteur – prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'sache', nazev: 'Objet vendu', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Qu’est-ce qui est vendu ?', placeholder: 'p. ex. vélo électrique Cube Kathmandu Hybrid, n° de cadre WC12345, avec chargeur et deux clés', sirka: 64 },
      { id: 'vady', typ: 'textarea', popis: 'Défauts connus (facultatif)', placeholder: 'p. ex. rayures sur le cadre, autonomie de la batterie env. 60 km', sirka: 64 },
      { id: 'zaruka', typ: 'volba', popis: 'Garantie', moznosti: [ { hodnota: 'vylouceni', popis: 'Exclue (usuel entre particuliers)' }, { hodnota: 'zakon', popis: 'Garantie légale' } ] },
    ] },
    { id: 'preis', nazev: 'Prix et remise', pole: [
      { id: 'cena', typ: 'castka', popis: 'Prix de vente (CHF)', napoveda: 'Nous ajoutons le montant en lettres.', sirka: 12, polovina: true },
      { id: 'platba', typ: 'volba', popis: 'Paiement', moznosti: [ { hodnota: 'bar', popis: 'En espèces à la remise' }, { hodnota: 'ueberweisung', popis: 'Virement avant la remise' } ] },
      { id: 'ucet', typ: 'text', popis: 'IBAN du vendeur', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_slovy: (d) => montantEnLettres(d.cena) },
  clanky: [
    { nadpis: 'Parties', odstavce: ['**Vendeur / venderesse :** {{p_jmeno}}, domicilié(e) {{p_adresa}}', '**Acheteur / acheteuse :** {{k_jmeno}}, domicilié(e) {{k_adresa}}'] },
    { nadpis: 'Objet vendu', vysvetleni: 'Ce qui est vendu et dans quel état.', odstavce: [
      'Le vendeur vend à l’acheteur l’objet d’occasion suivant : {{vec}}.',
      'Défauts connus du vendeur : {{vady}}',
      'Le vendeur garantit être propriétaire de l’objet et que celui-ci est libre de tout droit de tiers.',
    ] },
    { nadpis: 'Prix et remise', odstavce: [
      'Le prix de vente est de **{{cena}}** (en lettres : {{cena_slovy}}).',
      { volba: 'platba', uvodVzor: 'Paiement (cochez) :', moznosti: { bar: 'Le prix est payé en espèces à la remise ; le vendeur en confirme la réception par sa signature.', ueberweisung: 'Le prix est versé avant la remise sur le compte IBAN {{ucet}}.' } },
      'La propriété passe à l’acheteur avec le paiement complet du prix et la remise de l’objet.',
    ] },
    { nadpis: 'Garantie', vysvetleni: 'Responsabilité pour les défauts après la vente.', odstavce: [
      { volba: 'zaruka', uvodVzor: 'Garantie (cochez) :', moznosti: { vylouceni: 'L’objet est vendu dans l’état où il a été examiné. Toute garantie est exclue. Cette exclusion ne s’applique pas aux défauts que le vendeur a frauduleusement dissimulés (art. 199 CO).', zakon: 'La garantie légale selon les art. 197 ss CO s’applique.' } },
      'Le contrat est établi en deux exemplaires ; chaque partie en reçoit un.',
    ] },
  ],
};
