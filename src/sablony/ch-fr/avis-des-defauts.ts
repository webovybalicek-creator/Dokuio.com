/** Avis des défauts – faire valoir la garantie selon les art. 197 ss CO (avis immédiat art. 201, résolution ou réduction art. 205, prescription art. 210). */
import type { Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { formatDatum } from '../dokument';
import { CO_197, CO_201, CO_205, CO_210, CH_RETOUR, lienCO, pied } from './sources';

export const avisDefauts: Sablona = {
  kod: 'CHFR-AVIS-DEFAUTS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Avis des défauts', podnadpis: 'réclamation au titre de la garantie selon les art. 197 ss CO',
  souborPdf: 'avis-des-defauts', paticka: pied('CHFR-AVIS-DEFAUTS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'L’acheteur / l’acheteuse', vpravo: 'reçu pour le vendeur (date, signature)' },
  slovo: { n: 'avis des défauts', g: 'de l’avis des défauts', a: 'l’avis des défauts', l: 'dans l’avis des défauts' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    const jours = Number(d.lhuta) || 14;
    return od ? [{ nazev: 'Réponse du vendeur attendue', datum: isoDatum(pridejDny(od, jours)), popis: 'Sans solution d’ici là : conseil auprès d’une organisation de consommateurs ou de l’autorité de conciliation.' }] : [];
  },
  coDal: [
    'Envoyez l’avis des défauts dès la découverte du défaut – en recommandé ou par e-mail – et gardez la preuve.',
    'Tenez la marchandise à disposition pour l’examen et documentez le défaut avec des photos.',
    'Sans accord, les organisations de consommateurs ou l’autorité de conciliation de votre domicile peuvent vous aider.',
  ],
  kontrola: [
    `Les défauts doivent être signalés immédiatement après leur découverte, sinon la marchandise est réputée acceptée (${lienCO('201')}).`,
    `Selon la loi, vous pouvez annuler la vente (action rédhibitoire) ou réduire le prix ; pour une chose de genre, aussi exiger son remplacement (${lienCO('205')}). Vous n’avez droit à une réparation que si elle a été convenue – souvent dans les conditions générales ou la garantie.`,
    `Les droits se prescrivent par deux ans dès la livraison ; pour une chose d’occasion, le commerçant peut réduire ce délai à un an (${lienCO('210')}).`,
    'De nombreux commerçants limitent la garantie à la réparation ou au remplacement dans leurs conditions générales – vérifiez les conditions de garantie.',
    'Décrivez le défaut concrètement et photographiez-le ; gardez la quittance (ou le relevé de compte, la confirmation de commande).',
  ],
  zdroje: [CO_197, CO_201, CO_205, CO_210, CH_RETOUR],
  kroky: [
    { id: 'haendler', nazev: 'Vendeur', pole: [
      { id: 'pr_nazev', typ: 'text', popis: 'Vendeur (raison sociale)', placeholder: 'p. ex. Électro Léman SA', sirka: 34 },
      { id: 'pr_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'ware', nazev: 'Marchandise et défaut', pole: [
      { id: 'zbozi', typ: 'text', popis: 'Marchandise', placeholder: 'p. ex. lave-linge Bosch WAN28264, n° de série FD9803', sirka: 46 },
      { id: 'doklad', typ: 'text', popis: 'Numéro de facture ou de commande', sirka: 18, polovina: true },
      { id: 'koupeno', typ: 'datum', popis: 'Acheté / reçu le', sirka: 14, polovina: true },
      { id: 'vada', typ: 'textarea', popis: 'Description du défaut', placeholder: 'p. ex. s’arrête à l’essorage avec l’erreur E18', sirka: 64 },
      { id: 'projevila', typ: 'datum', popis: 'Défaut constaté le', sirka: 14, polovina: true },
    ] },
    { id: 'forderung', nazev: 'Ce que vous demandez', pole: [
      { id: 'pozadavek', typ: 'volba', popis: 'Que demandez-vous ?', moznosti: [ { hodnota: 'oprava', popis: 'Réparation (selon garantie ou conditions générales)' }, { hodnota: 'vymena', popis: 'Remplacement par une chose sans défaut' }, { hodnota: 'minderung', popis: 'Réduction du prix' }, { hodnota: 'wandelung', popis: 'Annulation de la vente' } ] },
      { id: 'lhuta', typ: 'cislo', popis: 'Délai de réponse en jours', napoveda: 'L’usage et un délai raisonnable sont en général de 14 jours.', placeholder: '14', sirka: 4, polovina: true },
      { id: 'p_jmeno', typ: 'text', popis: 'Votre prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Votre adresse', sirka: 46 },
      { id: 'p_kontakt', typ: 'text', popis: 'E-mail ou téléphone', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: {
    frist_bis: (d) => {
      const od = naDatum(d.datum);
      return od ? formatDatum(isoDatum(pridejDny(od, Number(d.lhuta) || 14)), 'fr-CH') : '';
    },
  },
  clanky: [
    { nadpis: 'À', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    { nadpis: 'Avis des défauts', vysvetleni: 'Ce qui est défectueux et ce que vous demandez.', odstavce: [
      'Madame, Monsieur,',
      'Le {{koupeno}}, j’ai acheté chez vous la marchandise suivante : {{zbozi}} (n° de pièce {{doklad}}).',
      'La marchandise est défectueuse : {{vada}} J’ai découvert le défaut le {{projevila}} et vous en donne avis par la présente conformément à l’art. 201 CO.',
      { volba: 'pozadavek', uvod: 'Je demande', uvodVzor: 'Je demande (cochez) :', moznosti: { oprava: 'l’élimination du défaut (réparation) selon la garantie ou vos conditions.', vymena: 'la livraison d’une chose sans défaut (art. 206 CO).', minderung: 'une réduction appropriée du prix (art. 205 CO).', wandelung: 'l’annulation de la vente contre restitution de la marchandise et remboursement du prix (art. 205 CO).' } },
      'Je vous prie de m’indiquer d’ici au {{frist_bis}} comment vous entendez régler l’affaire. Toutes autres prétentions demeurent réservées.',
      'Je vous prie de me confirmer la réception du présent avis.',
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
    { nadpis: 'Acheteur / acheteuse', odstavce: ['{{p_jmeno}}, {{p_adresa}}, {{p_kontakt}}'] },
  ],
};
