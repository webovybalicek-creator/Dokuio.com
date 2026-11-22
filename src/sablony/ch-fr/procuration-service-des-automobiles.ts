/** Procuration pour le service cantonal des automobiles – changement de détenteur, immatriculation, dépôt des plaques (art. 32 ss CO). */
import type { Sablona } from '../typy';
import { CO_32, ASA, CH_IMMATRICULATION, ASTUCE_IDENTITE, pied } from './sources';

export const procurationSAN: Sablona = {
  kod: 'CHFR-PROCURATION-SAN', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Procuration', podnadpis: 'à présenter au service cantonal des automobiles (art. 32 ss CO)',
  souborPdf: 'procuration-service-des-automobiles', paticka: pied('CHFR-PROCURATION-SAN'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le mandant / la mandante', vpravo: 'Le mandataire / la mandataire' },
  slovo: { n: 'procuration', g: 'de la procuration', a: 'la procuration', l: 'dans la procuration' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'La procuration pour le service des automobiles expire', datum: d.platnost_do }] : []),
  prevzit: {
    kod: 'CHFR-VENTE-AUTO',
    nazev: 'le contrat de vente',
    mapuj: (d) => ({ ukon: 'umschreibung', z_jmeno: d.k_jmeno, z_narozeni: d.k_narozeni, z_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, misto: d.misto }),
  },
  coDal: [
    'Imprimez la procuration et signez-la à la main.',
    'Le mandataire apporte : cette procuration, son propre passeport ou sa carte d’identité, une copie de votre pièce d’identité et le permis de circulation.',
    'Pour une immatriculation, il faut en plus l’attestation d’assurance électronique de votre assurance responsabilité civile ; pour un retrait de la circulation, les plaques.',
  ],
  kontrola: [
    `De nombreux services des automobiles ont leur propre formulaire de procuration – consultez d’abord le site de votre canton ([asa.ch](${ASA.url})).`,
    'Reprenez exactement le numéro de châssis et le numéro matricule du permis de circulation.',
    'Pour immatriculer, il faut une attestation d’assurance valable – l’assurance la transmet en général directement par voie électronique.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_32, ASA, CH_IMMATRICULATION],
  kroky: [
    { id: 'personen', nazev: 'Qui donne procuration à qui', pole: [
      { id: 'z_jmeno', typ: 'text', popis: 'Mandant – prénom et nom', napoveda: 'La personne qui est ou devient détentrice du véhicule.', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'z_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Adresse (domicile)', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
      { id: 'm_jmeno', typ: 'text', popis: 'Mandataire – prénom et nom', placeholder: 'p. ex. Paul Rochat', sirka: 34 },
      { id: 'm_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'm_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Véhicule et démarche', pole: [
      { id: 'ukon', typ: 'volba', popis: 'Que faut-il faire ?', moznosti: [ { hodnota: 'umschreibung', popis: 'Changement de détenteur (immatriculation d’un véhicule acheté)' }, { hodnota: 'zulassung', popis: 'Immatriculation d’un véhicule' }, { hodnota: 'abmeldung', popis: 'Retrait de la circulation et dépôt des plaques' } ] },
      { id: 'znacka', typ: 'text', popis: 'Marque et type', placeholder: 'p. ex. Peugeot 308', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numéro de châssis (VIN)', napoveda: 'Champ 23 du permis de circulation.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Plaques (si existantes)', placeholder: 'p. ex. VS 12345', sirka: 12, polovina: true },
      { id: 'platnost_do', typ: 'datum', popis: 'Valable jusqu’au (facultatif)', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Procuration', odstavce: [
    'Je soussigné(e), **{{z_jmeno}}**, né(e) le {{z_narozeni}}, domicilié(e) {{z_adresa}},',
    'donne par la présente procuration à **{{m_jmeno}}**, né(e) le {{m_narozeni}}, domicilié(e) {{m_adresa}},',
    { volba: 'ukon', uvod: 'pour me représenter auprès du service des automobiles pour', uvodVzor: 'pour me représenter auprès du service des automobiles pour (cochez) :', moznosti: { umschreibung: 'le changement de détenteur (immatriculation à mon nom d’un véhicule acheté)', zulassung: 'l’immatriculation du véhicule', abmeldung: 'le retrait de la circulation du véhicule et le dépôt des plaques' } },
    'du véhicule de marque et type {{znacka}}, numéro de châssis {{vin}}, plaques {{spz}}, y compris la remise et la réception de déclarations, du permis de circulation et des plaques.',
    'La procuration est valable jusqu’au {{platnost_do}}, sinon jusqu’à l’accomplissement de la démarche ou jusqu’à révocation.',
  ] }],
};
