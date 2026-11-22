/**
 * Contrat de bail à loyer pour un logement – Suisse romande (art. 253 ss CO). Garantie de loyer max. trois loyers sur un compte
 * bloqué au nom du locataire (art. 257e CO) ; frais accessoires dus seulement s’ils sont énumérés (art. 257a CO) ; formule officielle
 * pour le loyer initial dans certains cantons (art. 270 al. 2 CO) ; congé de trois mois pour un terme usuel (art. 266c CO).
 */
import type { Sablona } from '../typy';
import { cislo, isoDatum, naDatum, pridejMesice } from '../terminy';
import { montantEnLettres } from './nombres';
import { CO_BAIL, CO_257E, CO_266C, CH_BAIL, ASTUCE_IDENTITE, pied } from './sources';

export const bail: Sablona = {
  kod: 'CHFR-BAIL', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de bail à loyer', podnadpis: 'pour un logement selon les art. 253 ss du Code des obligations (CO)',
  souborPdf: 'contrat-de-bail-appartement', paticka: pied('CHFR-BAIL'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le bailleur / la bailleresse', vpravo: 'Le locataire / la locataire' },
  slovo: { n: 'contrat de bail', g: 'du contrat de bail', a: 'le contrat de bail', l: 'dans le contrat de bail' },
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.beginn);
    const jour = Math.round(cislo(d.faellig));
    if (typeof d.uebergabe === 'string' && d.uebergabe) out.push({ nazev: 'Remise du logement avec état des lieux', datum: d.uebergabe });
    if (od && jour >= 1 && jour <= 31) out.push({ nazev: 'Loyer et frais accessoires', datum: isoDatum(pridejMesice(od, od.getDate() > jour ? 1 : 0, jour)), mesicne: 12, popis: 'Les 12 premiers mois.' });
    return out;
  },
  coDal: [
    'Imprimez deux exemplaires ; les deux parties signent les deux.',
    'À la remise, établissez un état des lieux – le locataire peut encore signaler par écrit, dans les premiers jours, les défauts qui n’y figurent pas.',
    'Versez la garantie sur un compte de garantie de loyer (compte bloqué) au nom du locataire.',
    'Locataire : annoncez-vous au contrôle des habitants de la commune dans les 14 jours.',
  ],
  kontrola: [
    ASTUCE_IDENTITE,
    'La garantie ne peut pas dépasser trois loyers mensuels et doit être déposée sur un compte bloqué au nom du locataire (art. 257e CO).',
    'Le locataire ne paie des frais accessoires que s’ils sont énumérés un par un dans le contrat (art. 257a CO). Tous les autres sont compris dans le loyer.',
    'Dans certains cantons, le loyer initial doit être communiqué au moyen de la formule officielle (art. 270 al. 2 CO) – renseignez-vous auprès de l’autorité cantonale de conciliation.',
    'Délai de congé pour un logement : au moins trois mois pour un terme usuel (art. 266c CO). Le bailleur doit résilier au moyen de la formule officielle.',
    'Un locataire qui veut partir sans respecter le délai peut proposer un locataire de remplacement solvable et acceptable (art. 264 CO).',
  ],
  zdroje: [CO_BAIL, CO_257E, CO_266C, CH_BAIL],
  kroky: [
    { id: 'parteien', nazev: 'Bailleur et locataire', pole: [
      { id: 'v_name', typ: 'text', popis: 'Bailleur – nom', napoveda: 'Propriétaire du logement.', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'v_adresse', typ: 'text', popis: 'Adresse du bailleur', napoveda: 'Pour la correspondance.', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'm_name', typ: 'text', popis: 'Locataire – nom', napoveda: 'S’il y a plusieurs locataires, indiquez-les tous.', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'm_geburt', typ: 'datum', popis: 'Date de naissance du locataire', sirka: 14, polovina: true },
      { id: 'm_adresse', typ: 'text', popis: 'Adresse actuelle du locataire', napoveda: 'Avant l’emménagement.', placeholder: 'p. ex. Rue de la Gare 3, 2000 Neuchâtel', sirka: 46 },
    ] },
    { id: 'wohnung', nazev: 'Logement', pole: [
      { id: 'objekt', typ: 'text', popis: 'Adresse du logement', placeholder: 'p. ex. Avenue de France 7, 1004 Lausanne', sirka: 46 },
      { id: 'lage', typ: 'text', popis: 'Situation dans l’immeuble', placeholder: 'p. ex. 2e étage gauche', sirka: 18, polovina: true },
      { id: 'zimmer', typ: 'cislo', popis: 'Pièces', napoveda: 'Selon l’usage romand (p. ex. 3,5 pièces).', placeholder: 'p. ex. 3,5', sirka: 4, polovina: true },
      { id: 'flaeche', typ: 'cislo', popis: 'Surface habitable', napoveda: 'Indication approximative.', placeholder: 'p. ex. 72', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'nebenraeume', typ: 'text', popis: 'Loués avec le logement (facultatif)', napoveda: 'Cave, place de parc, galetas.', placeholder: 'p. ex. cave n° 3', sirka: 46 },
      { id: 'ausstattung', typ: 'textarea', popis: 'Équipement (facultatif)', napoveda: 'Cuisine agencée, appareils. Détails dans l’état des lieux.', placeholder: 'p. ex. cuisine agencée avec frigo, cuisinière et lave-vaisselle', sirka: 64 },
    ] },
    { id: 'zahlung', nazev: 'Début du bail, loyer et garantie', pole: [
      { id: 'beginn', typ: 'datum', popis: 'Début du bail', sirka: 14, polovina: true },
      { id: 'uebergabe', typ: 'datum', popis: 'Remise du logement', napoveda: 'Remise des clés.', sirka: 14, polovina: true },
      { id: 'miete', typ: 'castka', popis: 'Loyer net (CHF par mois)', napoveda: 'Sans les frais accessoires.', placeholder: 'p. ex. 1450', sirka: 12, polovina: true },
      { id: 'nebenkosten', typ: 'castka', popis: 'Acompte de frais accessoires (CHF par mois)', napoveda: 'Seulement pour les frais énumérés dans le contrat.', placeholder: 'p. ex. 180', sirka: 12, polovina: true },
      { id: 'nk_liste', typ: 'text', popis: 'Quels frais accessoires', napoveda: 'Énumérez-les un par un – sinon ils sont compris dans le loyer.', placeholder: 'p. ex. chauffage, eau chaude, conciergerie, nettoyage des communs', sirka: 64 },
      { id: 'faellig', typ: 'cislo', popis: 'Payable jusqu’au (jour du mois)', napoveda: 'Usuel : d’avance, le 1er du mois.', placeholder: 'p. ex. 1', sirka: 4, polovina: true },
      { id: 'termine', typ: 'text', popis: 'Termes de résiliation', napoveda: 'Termes usuels de la localité ou ceux convenus.', placeholder: 'p. ex. fin de chaque mois sauf décembre', sirka: 46 },
      { id: 'iban', typ: 'text', popis: 'IBAN du bailleur', placeholder: 'CH…', sirka: 30 },
      { id: 'kaution', typ: 'castka', popis: 'Garantie de loyer (CHF)', napoveda: 'Au maximum trois loyers mensuels.', placeholder: 'p. ex. 4350', sirka: 12, polovina: true },
      { id: 'tiere', typ: 'volba', popis: 'Animaux domestiques', napoveda: 'Les petits animaux sont toujours permis ; pour les chiens et les chats, la convention s’applique.', moznosti: [ { hodnota: 'erlaubt', popis: 'Autorisés' }, { hodnota: 'zustimmung', popis: 'Avec l’accord du bailleur' } ] },
      { id: 'ort', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'v_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { miete_worte: (d) => montantEnLettres(d.miete), kaution_worte: (d) => montantEnLettres(d.kaution) },
  clanky: [
    { nadpis: 'Parties', odstavce: ['**Bailleur / bailleresse :** {{v_name}}, domicilié(e) {{v_adresse}}', '**Locataire :** {{m_name}}, né(e) le {{m_geburt}}, domicilié(e) jusqu’ici {{m_adresse}}'] },
    { nadpis: 'Chose louée', vysvetleni: 'Ce qui est loué.', odstavce: [
      'Est loué à des fins d’habitation le logement {{lage}} de l’immeuble {{objekt}}, comprenant {{zimmer}} pièces et une surface habitable d’environ {{flaeche}}.',
      'Loués avec le logement : {{nebenraeume}}. Équipement : {{ausstattung}}. L’état à la remise est consigné dans un état des lieux.',
    ] },
    { nadpis: 'Durée du bail', odstavce: ['Le bail commence le {{beginn}} et est conclu pour une durée indéterminée. Le logement est remis le {{uebergabe}}.'] },
    { nadpis: 'Loyer et frais accessoires', vysvetleni: 'Combien coûte le logement et ce qui est compris.', odstavce: [
      'Le loyer mensuel net est de {{miete}} (en lettres : {{miete_worte}}).',
      'En outre, le locataire paie un acompte mensuel de {{nebenkosten}} pour les frais accessoires suivants : {{nk_liste}}. Le bailleur établit un décompte annuel. Les frais accessoires non énumérés sont compris dans le loyer (art. 257a CO).',
      'Le loyer et l’acompte sont payables mensuellement et d’avance jusqu’au {{faellig}} du mois sur le compte IBAN {{iban}}.',
    ] },
    { nadpis: 'Garantie', vysvetleni: 'La garantie de loyer est bloquée au nom du locataire.', odstavce: [
      'Le locataire fournit une garantie de {{kaution}} (en lettres : {{kaution_worte}}).',
      'La garantie est déposée auprès d’une banque sur un compte d’épargne ou un dépôt au nom du locataire (art. 257e CO). La banque ne peut la restituer qu’avec l’accord des deux parties ou sur la base d’une décision entrée en force.',
    ] },
    { nadpis: 'Usage du logement', odstavce: [
      'Le locataire use du logement avec le soin nécessaire et signale les défauts sans délai. Les rénovations et modifications requièrent l’accord écrit du bailleur.',
      'Le locataire remédie à ses frais aux menus défauts qui peuvent être éliminés par de menus travaux de nettoyage ou d’entretien (art. 259 CO).',
      'La sous-location requiert le consentement du bailleur, qui ne peut le refuser que pour les motifs de l’art. 262 CO.',
      { volba: 'tiere', uvodVzor: 'Animaux domestiques (cochez) :', moznosti: { erlaubt: 'La détention d’animaux domestiques usuels est autorisée, pour autant que les voisins ne soient pas dérangés et que le logement ne soit pas endommagé.', zustimmung: 'La détention de chiens et de chats requiert l’accord du bailleur. Les petits animaux sont autorisés.' } },
    ] },
    { nadpis: 'Résiliation et restitution', odstavce: [
      'Chaque partie peut résilier le bail moyennant un préavis de trois mois pour les termes suivants : {{termine}} (art. 266c CO). Le congé doit être donné par écrit ; le bailleur utilise la formule agréée par le canton (art. 266l CO).',
      'À la fin du bail, le locataire restitue le logement nettoyé, avec toutes les clés. Il ne répond pas de l’usure résultant d’un usage conforme au contrat.',
    ] },
    { nadpis: 'Dispositions finales', odstavce: [
      'Pour le surplus, les dispositions du Code des obligations sont applicables (art. 253 ss CO).',
      'Toute modification requiert la forme écrite. Le contrat est établi en deux exemplaires ; chaque partie en reçoit un.',
    ] },
  ],
};
