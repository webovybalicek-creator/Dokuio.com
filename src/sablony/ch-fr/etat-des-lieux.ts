/** État des lieux d’entrée ou de sortie d’un logement – Suisse romande. À la restitution, le bailleur doit vérifier l’état et aviser immédiatement les défauts (art. 267a CO). */
import type { Sablona } from '../typy';
import { CO_BAIL, pied } from './sources';

export const etatDesLieux: Sablona = {
  kod: 'CHFR-ETAT-DES-LIEUX', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'État des lieux', podnadpis: 'procès-verbal de remise et de restitution d’un logement',
  souborPdf: 'etat-des-lieux', paticka: pied('CHFR-ETAT-DES-LIEUX'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le bailleur / la bailleresse', vpravo: 'Le locataire / la locataire' },
  slovo: { n: 'état des lieux', g: 'de l’état des lieux', a: 'l’état des lieux', l: 'dans l’état des lieux' },
  cislovatClanky: false,
  prevzit: {
    kod: 'CHFR-BAIL',
    nazev: 'le contrat de bail',
    mapuj: (d) => ({ v_name: d.v_name, m_name: d.m_name, objekt: [d.objekt, d.lage].filter(Boolean).join(', '), ausstattung: d.ausstattung, datum: d.uebergabe, vertrag_datum: d.datum, anlass: 'einzug' }),
  },
  coDal: ['Parcourez le logement ensemble, pièce par pièce, et complétez à la main ce qui manque.', 'Photographiez les compteurs et les défauts.', 'Signez deux exemplaires.'],
  kontrola: [
    'Notez tous les compteurs (électricité, gaz, eau, chauffage) avec leur numéro.',
    'Décrivez les défauts précisément, p. ex. « fissure dans le carrelage à côté de la baignoire ».',
    'Testez les appareils, l’eau, le chauffage, les fenêtres et les serrures.',
    'Comptez les clés (logement, immeuble, cave, boîte aux lettres).',
    'À la restitution, le bailleur doit aviser immédiatement et par écrit les défauts ; sinon il perd ses droits, sauf pour les défauts cachés (art. 267a CO).',
  ],
  zdroje: [CO_BAIL],
  kroky: [
    { id: 'basis', nazev: 'Qui, où et pourquoi', popis: 'Contrat de bail déjà rempli ? Nous reprenons les données.', pole: [
      { id: 'v_name', typ: 'text', popis: 'Bailleur – nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'm_name', typ: 'text', popis: 'Locataire – nom', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'objekt', typ: 'text', popis: 'Logement (adresse et situation)', napoveda: 'Comme dans le contrat de bail.', placeholder: 'p. ex. Avenue de France 7, 1004 Lausanne, 2e étage gauche', sirka: 46 },
      { id: 'anlass', typ: 'volba', popis: 'Occasion', moznosti: [ { hodnota: 'einzug', popis: 'Remise au locataire (entrée)' }, { hodnota: 'auszug', popis: 'Restitution au bailleur (sortie)' } ] },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Date du contrat de bail', napoveda: 'L’état des lieux fait partie du contrat.', sirka: 14, polovina: true },
    ] },
    { id: 'zaehler', nazev: 'Relevés des compteurs', popis: 'Relevez et photographiez. Laissez vide s’il n’y a pas de compteur.', pole: [
      { id: 'z_strom', typ: 'text', popis: 'Électricité (kWh)', placeholder: 'p. ex. 12 345', sirka: 12, polovina: true },
      { id: 'z_gas', typ: 'text', popis: 'Gaz (m³)', placeholder: 'p. ex. 4 321', sirka: 12, polovina: true },
      { id: 'z_kalt', typ: 'text', popis: 'Eau froide (m³)', placeholder: 'p. ex. 123,4', sirka: 12, polovina: true },
      { id: 'z_warm', typ: 'text', popis: 'Eau chaude (m³)', placeholder: 'p. ex. 56,7', sirka: 12, polovina: true },
      { id: 'z_heizung', typ: 'text', popis: 'Chauffage / répartiteurs de frais', placeholder: 'p. ex. séjour 123, chambre 87', sirka: 30 },
    ] },
    { id: 'zustand', nazev: 'État', pole: [
      { id: 'zustand', typ: 'volba', popis: 'État du logement', napoveda: 'Murs, sols, fenêtres, appareils.', moznosti: [ { hodnota: 'ok', popis: 'Sans défaut, usure normale' }, { hodnota: 'maengel', popis: 'Avec les défauts suivants' } ] },
      { id: 'maengel', typ: 'textarea', popis: 'Défauts', napoveda: 'Pièce et défaut précis.', placeholder: 'p. ex. cuisine – rayures sur le plan de travail', sirka: 64, zobrazitKdyz: { pole: 'zustand', je: 'maengel' } },
      { id: 'ausstattung', typ: 'textarea', popis: 'Équipement et état', placeholder: 'p. ex. frigo – fonctionne', sirka: 64 },
      { id: 'schluessel', typ: 'text', popis: 'Clés', napoveda: 'Nombre et usage.', placeholder: 'p. ex. 3× logement, 2× immeuble, 1× cave', sirka: 46 },
      { id: 'vereinbarung', typ: 'textarea', popis: 'Conventions (facultatif)', napoveda: 'Qui répare quoi et jusqu’à quand.', placeholder: 'p. ex. le bailleur répare le robinet d’ici au 30.11.', sirka: 64 },
      { id: 'ort', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parties et logement', odstavce: [
      '**Bailleur / bailleresse :** {{v_name}} · **Locataire :** {{m_name}}',
      'Logement : {{objekt}}, selon le contrat de bail du {{vertrag_datum}}.',
      { volba: 'anlass', uvodVzor: 'Occasion (cochez) :', moznosti: { einzug: 'Le bailleur remet le logement au locataire.', auszug: 'Le locataire restitue le logement au bailleur.' } },
    ] },
    { nadpis: 'Relevés des compteurs', odstavce: ['Électricité : {{z_strom}} kWh · Gaz : {{z_gas}} m³ · Eau froide : {{z_kalt}} m³ · Eau chaude : {{z_warm}} m³ · Chauffage : {{z_heizung}}'] },
    { nadpis: 'État, équipement et clés', odstavce: [
      { volba: 'zustand', uvodVzor: 'État (cochez) :', moznosti: { ok: 'Le logement est sans défaut, compte tenu d’une usure normale.', maengel: 'Le logement présente les défauts suivants : {{maengel}}' } },
      'Équipement : {{ausstattung}}',
      'Clés remises : {{schluessel}}',
      'Conventions : {{vereinbarung}}',
      'Par leur signature, les parties confirment avoir visité le logement et que son état correspond au présent état des lieux.',
    ] },
  ],
};
