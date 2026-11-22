/** Attestation sur l’honneur – déclaration écrite d’une personne privée. Des indications fausses peuvent avoir des conséquences civiles et pénales. */
import type { Sablona } from '../typy';
import { CO, pied } from './sources';

export const attestation: Sablona = {
  kod: 'CHFR-ATTESTATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Attestation sur l’honneur', podnadpis: 'déclaration écrite d’une personne privée',
  souborPdf: 'attestation-sur-l-honneur', paticka: pied('CHFR-ATTESTATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Signature', vpravo: 'Légalisation (seulement si exigée)' },
  slovo: { n: 'attestation', g: 'de l’attestation', a: 'l’attestation', l: 'dans l’attestation' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: [
    'Imprimez l’attestation et signez-la à la main.',
    'Si l’organisme exige une signature légalisée, ne signez que devant l’autorité ou le notaire.',
    'Gardez une copie pour vos dossiers.',
  ],
  kontrola: [
    'N’attestez que ce qui est vrai et que vous savez avec certitude. De fausses indications à une autorité, une banque ou un bailleur peuvent avoir des conséquences civiles et pénales.',
    'Si une autorité ou un tribunal exige une forme précise, utilisez son formulaire.',
    'Demandez d’abord si l’organisme a son propre formulaire – utilisez-le alors.',
    'Formulez concrètement : qui, quoi, depuis quand (p. ex. « que j’habite depuis le 1.1.2025 dans le logement … »).',
    'Signez à la main et gardez une copie. Si l’organisme exige une signature légalisée, signez seulement auprès de l’office compétent (notaire, selon le canton aussi la commune).',
  ],
  zdroje: [CO],
  kroky: [
    { id: 'person', nazev: 'Qui atteste', pole: [
      { id: 'name', typ: 'text', popis: 'Prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'geburt', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'adresse', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
    ] },
    { id: 'inhalt', nazev: 'Contenu', pole: [
      { id: 'fuer', typ: 'text', popis: 'Destinataire (facultatif)', placeholder: 'p. ex. école, banque, bailleur', sirka: 46 },
      { id: 'zweck', typ: 'text', popis: 'But (facultatif)', placeholder: 'p. ex. demande de congé scolaire', sirka: 46 },
      { id: 'text', typ: 'textarea', popis: 'Texte de l’attestation', napoveda: 'Commencez directement par « que … ». Nous ajoutons l’introduction.', placeholder: 'que j’habite depuis le 1.1.2025 dans le logement Avenue de la Gare 5 à Sion.', sirka: 70 },
      { id: 'misto', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Sion', sirka: 18, polovina: true, vychozi: { obecZ: 'adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Personne qui atteste', odstavce: ['{{name}}, né(e) le {{geburt}}, domicilié(e) {{adresse}}'] },
    { nadpis: 'Attestation', odstavce: [
      'Destinataire : {{fuer}}. But : {{zweck}}.',
      'Je soussigné(e) atteste sur l’honneur {{text}}',
      'J’atteste que mes indications sont exactes et complètes.',
    ] },
  ],
};
