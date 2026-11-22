/** Révocation d’un contrat conclu à domicile, au travail, dans la rue ou par téléphone – art. 40a ss CO (plus de 100 francs, 14 jours). */
import type { Sablona } from '../typy';
import { CO_40A, CH_RETOUR, lienCO, pied } from './sources';

export const revocation: Sablona = {
  kod: 'CHFR-REVOCATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Révocation', podnadpis: 'd’un contrat conclu par démarchage ou par téléphone (art. 40a ss CO)',
  souborPdf: 'revocation-contrat-demarchage', paticka: pied('CHFR-REVOCATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le client / la cliente', vpravo: 'reçu pour le fournisseur (en cas de remise en mains propres)' },
  slovo: { n: 'révocation', g: 'de la révocation', a: 'la révocation', l: 'dans la révocation' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: [
    'Envoyez la révocation en recommandé ou par e-mail avec accusé de lecture – l’essentiel est de l’envoyer dans les 14 jours et de pouvoir le prouver.',
    'Restituez les prestations déjà reçues ; le fournisseur doit rembourser les montants déjà payés (art. 40f CO).',
  ],
  kontrola: [
    `Le droit de révocation s’applique seulement si l’offre vous a été faite à domicile ou à la porte, au travail, dans les transports publics, dans la rue, lors d’une excursion publicitaire ou par téléphone, et si la prestation dépasse 100 francs (${lienCO('40a', 'art. 40a ss CO')}).`,
    `Pour les achats en ligne, il n’existe pas en Suisse de droit légal de révocation – seulement un droit de retour volontaire du magasin selon ses conditions générales ([ch.ch](${CH_RETOUR.url})).`,
    'Pas de droit de révocation si vous avez expressément demandé les négociations ou si vous avez commandé à un stand de marché ou de foire (art. 40c CO).',
    'Le délai est de 14 jours et court dès que vous avez conclu le contrat et que le fournisseur vous a informé par écrit du droit de révocation (art. 40e CO).',
  ],
  zdroje: [CO_40A, CH_RETOUR],
  kroky: [
    { id: 'haendler', nazev: 'Fournisseur', popis: 'Le nom et l’adresse figurent dans le contrat ou la confirmation de commande.', pole: [
      { id: 'pr_nazev', typ: 'text', popis: 'Fournisseur (entreprise)', placeholder: 'p. ex. Exemple Distribution SA', sirka: 34 },
      { id: 'pr_adresa', typ: 'text', popis: 'Adresse du fournisseur', sirka: 46 },
    ] },
    { id: 'kauf', nazev: 'Contrat', pole: [
      { id: 'zbozi', typ: 'textarea', popis: 'Marchandise ou service', placeholder: 'p. ex. aspirateur modèle X, abonnement à une revue', sirka: 64 },
      { id: 'objednavka', typ: 'text', popis: 'Numéro de contrat ou de commande', sirka: 18, polovina: true },
      { id: 'objednano', typ: 'datum', popis: 'Contrat conclu le', sirka: 14, polovina: true },
      { id: 'kde', typ: 'volba', popis: 'Où l’offre vous a-t-elle été faite ?', moznosti: [ { hodnota: 'haustuer', popis: 'À la porte / dans mon logement' }, { hodnota: 'telefon', popis: 'Par téléphone' }, { hodnota: 'arbeitsplatz', popis: 'Sur mon lieu de travail' }, { hodnota: 'strasse', popis: 'Dans la rue ou dans un transport public' }, { hodnota: 'werbefahrt', popis: 'Lors d’une excursion publicitaire' } ] },
    ] },
    { id: 'sie', nazev: 'Vos données', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
      { id: 'ucet', typ: 'text', popis: 'IBAN pour le remboursement (facultatif)', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Recommandé à', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    { nadpis: 'Révocation', vysvetleni: 'Aucune justification n’est nécessaire.', odstavce: [
      'Madame, Monsieur,',
      'Me fondant sur les art. 40a ss CO, je révoque par la présente mon offre, respectivement mon acceptation, du contrat suivant : {{zbozi}}',
      'Contrat du {{objednano}} · numéro de contrat/commande : {{objednavka}}',
      { volba: 'kde', uvod: 'L’offre m’a été faite :', uvodVzor: 'L’offre m’a été faite (cochez) :', moznosti: { haustuer: 'à la porte, respectivement dans mon logement.', telefon: 'par téléphone.', arbeitsplatz: 'sur mon lieu de travail.', strasse: 'dans la rue, respectivement dans un transport public.', werbefahrt: 'lors d’une excursion publicitaire.' } },
      'Je vous prie de rembourser les montants déjà payés sur le compte IBAN {{ucet}}.',
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
    { nadpis: 'Client / cliente', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
  ],
};
