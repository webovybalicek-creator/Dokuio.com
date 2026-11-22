/**
 * Résiliation du bail par le locataire – Suisse romande. Forme écrite (art. 266l CO) ; préavis d’au moins trois mois pour un terme
 * convenu ou usuel (art. 266c CO) ; logement de famille : signature des deux époux (art. 266m CO) ; locataire de remplacement (art. 264 CO).
 */
import type { Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_BAIL, CO_266C, CH_BAIL, pied } from './sources';

export const resiliationBail: Sablona = {
  kod: 'CHFR-RESILIATION-BAIL', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Résiliation du bail', podnadpis: 'congé donné par le locataire selon l’art. 266c CO',
  souborPdf: 'resiliation-bail', paticka: pied('CHFR-RESILIATION-BAIL'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le locataire / la locataire', vpravo: 'reçu par le bailleur (date, signature)' },
  slovo: { n: 'lettre de résiliation', g: 'de la lettre de résiliation', a: 'la lettre de résiliation', l: 'dans la lettre de résiliation' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const t = naDatum(d.termin);
    return t ? [{ nazev: 'Fin du bail', datum: isoDatum(t) }, { nazev: 'Fixer la date de l’état des lieux de sortie', datum: isoDatum(pridejDny(t, -14)) }] : [];
  },
  coDal: [
    'Signez à la main et envoyez la lettre en recommandé – c’est la réception par le bailleur avant le début du délai qui compte.',
    'Pour un logement de famille, les deux époux ou partenaires enregistrés doivent signer.',
    'Convenez d’une date de restitution, nettoyez le logement et établissez un état des lieux.',
  ],
  kontrola: [
    'Le congé doit être donné par écrit, avec signature manuscrite (art. 266l CO).',
    'Délai d’au moins trois mois pour un terme prévu par le contrat ou usuel dans la localité (art. 266c CO). Vérifiez votre contrat de bail.',
    'Logement de famille : la signature des deux époux est nécessaire (art. 266m CO).',
    'Départ hors terme : en présentant un locataire de remplacement solvable et acceptable, vous êtes libéré de vos obligations (art. 264 CO).',
  ],
  zdroje: [CO_BAIL, CO_266C, CH_BAIL],
  kroky: [
    { id: 'parteien', nazev: 'Locataire et bailleur', pole: [
      { id: 'm_name', typ: 'text', popis: 'Locataire – nom', napoveda: 'Comme dans le contrat ; s’il y a plusieurs locataires, tous.', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'm_kontakt', typ: 'text', popis: 'Téléphone ou e-mail', napoveda: 'Pour fixer l’état des lieux.', placeholder: 'p. ex. marie@exemple.ch', sirka: 30 },
      { id: 'v_name', typ: 'text', popis: 'Bailleur ou gérance – nom', placeholder: 'p. ex. Régie du Léman SA', sirka: 34 },
      { id: 'v_adresse', typ: 'text', popis: 'Adresse du bailleur', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
    ] },
    { id: 'miete', nazev: 'Bail', pole: [
      { id: 'wohnung', typ: 'text', popis: 'Logement (adresse et situation)', placeholder: 'p. ex. Avenue de France 7, 1004 Lausanne, 2e étage gauche', sirka: 46 },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Date du contrat de bail', sirka: 14, polovina: true },
      { id: 'termin', typ: 'datum', popis: 'Terme de résiliation (fin du bail)', napoveda: 'Terme du contrat ou usuel, au moins trois mois après la réception.', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN pour la garantie (facultatif)', napoveda: 'Où la garantie doit être restituée.', placeholder: 'CH…', sirka: 30 },
      { id: 'ort', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Recommandé à', odstavce: ['{{v_name}}, {{v_adresse}}'] },
    { nadpis: 'Résiliation du bail', odstavce: [
      'Madame, Monsieur,',
      'Je soussigné(e), {{m_name}} (contact : {{m_kontakt}}), résilie le contrat de bail du {{vertrag_datum}} portant sur le logement {{wohnung}}, moyennant le préavis de trois mois, pour le {{termin}}, subsidiairement pour le prochain terme possible.',
      'Je vous prie de me confirmer par écrit la réception de la présente et de me proposer une date pour l’état des lieux de sortie.',
      'Je vous prie de libérer la garantie de loyer après la restitution, respectivement de la verser sur le compte IBAN {{iban}}.',
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
  ],
};
