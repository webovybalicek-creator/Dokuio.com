/** Quittance – confirmation d’un paiement en espèces (art. 88 CO : le débiteur qui paie peut exiger une quittance). */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO, CO_88, ASTUCE_IDENTITE, ASTUCE_PAIEMENT, lienCO, pied } from './sources';

export const quittance: Sablona = {
  kod: 'CHFR-QUITTANCE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Quittance', podnadpis: 'confirmation de réception d’un paiement en espèces (art. 88 CO)',
  souborPdf: 'quittance', paticka: pied('CHFR-QUITTANCE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'La personne qui paie', vpravo: 'La personne qui reçoit' },
  slovo: { n: 'quittance', g: 'de la quittance', a: 'la quittance', l: 'dans la quittance' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: ['Comptez l’argent avant de signer.', 'Chaque partie garde un exemplaire signé ; la personne qui paie conserve le sien comme preuve.'],
  kontrola: [
    'Indiquez le montant en chiffres – nous ajoutons les lettres.',
    'Décrivez concrètement le motif du paiement (p. ex. « prix de vente de la voiture, numéro de châssis … »).',
    `La personne qui paie peut exiger une quittance (${lienCO('88')}).`,
    ASTUCE_IDENTITE,
    ASTUCE_PAIEMENT,
  ],
  zdroje: [CO, CO_88],
  kroky: [{ id: 'angaben', nazev: 'Qui et combien', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Personne qui reçoit – nom', napoveda: 'Celle qui reçoit l’argent et signe la quittance.', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adresse de la personne qui reçoit', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Personne qui paie – nom', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresse de la personne qui paie', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Montant (CHF)', napoveda: 'Nous ajoutons le montant en lettres.', placeholder: 'p. ex. 9500', sirka: 12, polovina: true },
    { id: 'ucel', typ: 'text', popis: 'Motif du paiement', placeholder: 'p. ex. prix de vente de la voiture Peugeot 308, numéro de châssis …', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovy: (d) => montantEnLettres(d.castka) },
  clanky: [{ nadpis: 'Quittance', odstavce: [
    'Je soussigné(e), **{{p_jmeno}}**, domicilié(e) {{p_adresa}},',
    'confirme avoir reçu ce jour en espèces de **{{k_jmeno}}**, domicilié(e) {{k_adresa}}, le montant de **{{castka}}** (en lettres : {{castka_slovy}}).',
    'Motif du paiement : {{ucel}}',
  ] }],
};
