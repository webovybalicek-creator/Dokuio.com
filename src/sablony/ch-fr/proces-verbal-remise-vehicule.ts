/** Procès-verbal de remise d’un véhicule – Suisse romande. L’acheteur vérifie le véhicule à la prise en charge et signale aussitôt les défauts (art. 201 CO). */
import type { Sablona } from '../typy';
import { CO_184, CO_201, CH_IMMATRICULATION, ASTUCE_IDENTITE, lienCO, pied } from './sources';

export const pvVehicule: Sablona = {
  kod: 'CHFR-PV-VEHICULE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Procès-verbal de remise', podnadpis: 'remise et prise en charge d’un véhicule à moteur',
  souborPdf: 'proces-verbal-remise-vehicule', paticka: pied('CHFR-PV-VEHICULE'),
  mistoPodpisu: 'misto', datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'La personne qui remet', vpravo: 'La personne qui reçoit' },
  slovo: { n: 'procès-verbal', g: 'du procès-verbal', a: 'le procès-verbal', l: 'dans le procès-verbal' },
  cislovatClanky: false,
  prevzit: {
    kod: 'CHFR-VENTE-AUTO',
    nazev: 'le contrat de vente',
    mapuj: (d) => ({ duvod: 'koupe', smlouva_datum: d.datum_podpisu, p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, klice: d.klice, predani_datum: d.datum_podpisu, predani_cas: d.predani_cas, misto: d.misto }),
  },
  coDal: [
    'Imprimez deux exemplaires ; les deux parties signent les deux.',
    'Photographiez le véhicule sous tous les angles ainsi que le compteur – gardez les photos.',
    'En cas de vente : démontez les plaques et gardez-les ou déposez-les, et informez l’assurance.',
  ],
  kontrola: [
    'Relevez ensemble le kilométrage et le niveau du réservoir et notez-les exactement.',
    'Décrivez les dommages concrètement (endroit, taille) et photographiez-les avec la date.',
    'L’heure de la remise est utile en cas d’amende ou d’accident : elle montre qui avait le véhicule à quel moment.',
    `L’acheteur vérifie le véhicule à la prise en charge et signale immédiatement les défauts (${lienCO('201')}).`,
    'Comparez le numéro de châssis du permis de circulation avec celui du véhicule.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_184, CO_201, CH_IMMATRICULATION],
  kroky: [
    { id: 'parteien', nazev: 'Personnes et occasion', pole: [
      { id: 'duvod', typ: 'volba', popis: 'Pourquoi le véhicule est-il remis ?', moznosti: [ { hodnota: 'koupe', popis: 'Vente (contrat de vente)' }, { hodnota: 'zapujcka', popis: 'Prêt du véhicule' }, { hodnota: 'vraceni', popis: 'Restitution d’un véhicule prêté' } ] },
      { id: 'smlouva_datum', typ: 'datum', popis: 'Date du contrat de vente', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'koupe' } },
      { id: 'p_jmeno', typ: 'text', popis: 'Personne qui remet – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Personne qui reçoit – prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Véhicule et état', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marque et type', placeholder: 'p. ex. Peugeot 308 SW', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numéro de châssis (VIN)', napoveda: 'Champ 23 du permis de circulation.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Plaques', placeholder: 'p. ex. VD 123456', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Kilométrage', jednotka: 'km', sirka: 12, polovina: true },
      { id: 'palivo', typ: 'volba', popis: 'Niveau du réservoir', moznosti: [ { hodnota: 'rezerva', popis: 'Réserve' }, { hodnota: 'ctvrt', popis: '1/4' }, { hodnota: 'pul', popis: '1/2' }, { hodnota: 'tri', popis: '3/4' }, { hodnota: 'plna', popis: 'Plein' } ] },
      { id: 'poskozeni', typ: 'volba', popis: 'Dommages', moznosti: [ { hodnota: 'bez', popis: 'Aucun dommage visible' }, { hodnota: 's', popis: 'Le véhicule présente des dommages' } ] },
      { id: 'poskozeni_popis', typ: 'textarea', popis: 'Description des dommages', placeholder: 'p. ex. rayure sur le pare-chocs arrière gauche', sirka: 64, zobrazitKdyz: { pole: 'poskozeni', je: 's' } },
    ] },
    { id: 'zubehoer', nazev: 'Clés, documents, accessoires', pole: [
      { id: 'klice', typ: 'cislo', popis: 'Nombre de clés', sirka: 4, polovina: true },
      { id: 'doklady', typ: 'vice', popis: 'Documents remis', moznosti: [ { hodnota: 'zb1', popis: 'Permis de circulation' }, { hodnota: 'hu', popis: 'Rapport de la dernière expertise' }, { hodnota: 'servis', popis: 'Carnet d’entretien' }, { hodnota: 'navod', popis: 'Mode d’emploi' } ] },
      { id: 'vybava', typ: 'vice', popis: 'Accessoires', moznosti: [ { hodnota: 'verbandskasten', popis: 'Trousse de premiers secours' }, { hodnota: 'warndreieck', popis: 'Triangle de panne' }, { hodnota: 'weste', popis: 'Gilet de sécurité' }, { hodnota: 'reserverad', popis: 'Roue de secours ou kit anti-crevaison' }, { hodnota: 'wagenheber', popis: 'Cric et clé de roue' }, { hodnota: 'reifen', popis: 'Deuxième jeu de pneus' } ] },
      { id: 'vybava_jine', typ: 'text', popis: 'Autres objets', placeholder: 'p. ex. barres de toit', sirka: 40 },
    ] },
    { id: 'uebergabe', nazev: 'Remise', pole: [
      { id: 'predani_datum', typ: 'datum', popis: 'Date de la remise', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'predani_cas', typ: 'text', popis: 'Heure', placeholder: 'p. ex. 14 h 30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'poznamky', typ: 'textarea', popis: 'Remarques', placeholder: 'p. ex. les pneus d’hiver seront récupérés d’ici à la fin du mois', sirka: 64 },
    ] },
  ],
  clanky: [
    { nadpis: 'Personnes', vysvetleni: 'Qui remet et qui reçoit.', odstavce: ['**Personne qui remet :** {{p_jmeno}}, domicilié(e) {{p_adresa}}', '**Personne qui reçoit :** {{k_jmeno}}, domicilié(e) {{k_adresa}}'] },
    { nadpis: 'Véhicule', vysvetleni: 'Quel véhicule et pourquoi.', odstavce: [
      'Marque et type {{znacka}}, numéro de châssis {{vin}}, plaques jusqu’ici {{spz}} (ci-après « véhicule »).',
      { volba: 'duvod', uvodVzor: 'Occasion de la remise (cochez) :', moznosti: { koupe: 'Le véhicule est remis en exécution du contrat de vente du {{smlouva_datum}}.', zapujcka: 'Le véhicule est mis à disposition pour un usage temporaire.', vraceni: 'Le véhicule prêté auparavant est restitué.' } },
    ] },
    { nadpis: 'État à la remise', vysvetleni: 'État exact au moment de la remise.', odstavce: [
      'Kilométrage à la remise : {{km}}.',
      { volba: 'palivo', uvod: 'Niveau du réservoir :', uvodVzor: 'Niveau du réservoir (cochez) :', moznosti: { rezerva: 'réserve.', ctvrt: 'environ 1/4.', pul: 'environ 1/2.', tri: 'environ 3/4.', plna: 'plein.' } },
      { volba: 'poskozeni', uvodVzor: 'Dommages (cochez) :', moznosti: { bez: 'À la remise, le véhicule ne présente aucun dommage visible.', s: 'À la remise, le véhicule présente les dommages suivants : {{poskozeni_popis}}' } },
    ] },
    { nadpis: 'Clés, documents et accessoires remis', odstavce: [
      'Nombre de clés remises : {{klice}}.',
      { vice: 'doklady', uvod: 'Documents remis :', moznosti: { zb1: 'permis de circulation', hu: 'rapport de la dernière expertise', servis: 'carnet d’entretien', navod: 'mode d’emploi' } },
      { vice: 'vybava', uvod: 'Accessoires remis :', moznosti: { verbandskasten: 'trousse de premiers secours', warndreieck: 'triangle de panne', weste: 'gilet de sécurité', reserverad: 'roue de secours ou kit anti-crevaison', wagenheber: 'cric et clé de roue', reifen: 'deuxième jeu de pneus' }, dalsi: 'autres objets : {{vybava_jine}}' },
    ] },
    { nadpis: 'Prise en charge', vysvetleni: 'Confirmation du moment exact de la remise.', odstavce: [
      'Le véhicule a été remis le {{predani_datum}} à {{predani_cas}}.',
      'La personne qui reçoit confirme avoir reçu le véhicule, avec les clés, documents et accessoires mentionnés, dans l’état décrit.',
      'Remarques : {{poznamky}}',
      'Le procès-verbal est établi en deux exemplaires ; chaque partie en reçoit un.',
    ] },
  ],
};
