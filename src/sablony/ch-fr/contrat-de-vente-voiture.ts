/**
 * Contrat de vente d’un véhicule d’occasion entre particuliers – Suisse romande (art. 184 ss CO).
 * Exclusion de la garantie admise entre particuliers, sauf défauts dissimulés frauduleusement (art. 199 CO) ; vérification et avis
 * immédiat des défauts (art. 201 CO). Les plaques restent au détenteur ; l’acheteur immatricule le véhicule avec sa propre
 * attestation d’assurance au service des automobiles (ch.ch). Texte juridique repris du modèle CH-KAUF-AUTO vérifié.
 */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_184, CO_199, CO_201, CO_210, CH_IMMATRICULATION, CH_EXPERTISE, ASA, ASTUCE_IDENTITE, ASTUCE_PAIEMENT, lienCO, pied } from './sources';

export const venteVoiture: Sablona = {
  kod: 'CHFR-VENTE-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de vente d’un véhicule d’occasion', podnadpis: 'vente entre particuliers selon les art. 184 ss du Code des obligations (CO)',
  souborPdf: 'contrat-de-vente-voiture', paticka: pied('CHFR-VENTE-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Le vendeur / la venderesse', vpravo: 'L’acheteur / l’acheteuse' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  coDal: [
    'Imprimez le contrat en deux exemplaires ; les deux parties signent les deux.',
    'Remettez le véhicule, les clés et le permis de circulation. Le vendeur garde les plaques – elles appartiennent au détenteur, pas à la voiture.',
    'Vendeur : utilisez les plaques pour un autre véhicule ou déposez-les au service des automobiles, et informez votre assurance.',
    'Acheteur : faites immatriculer le véhicule au service des automobiles de votre canton avec votre attestation d’assurance et le permis de circulation avant de rouler.',
  ],
  kontrola: [
    'Le vendeur est inscrit comme détenteur dans le permis de circulation – ou peut prouver que la voiture lui appartient (p. ex. contrat d’achat). En cas de leasing, la société de leasing doit donner son accord.',
    'Le numéro de châssis du permis de circulation correspond à celui du véhicule.',
    `L’exclusion de la garantie est usuelle et admise entre particuliers, mais elle ne vaut pas pour les défauts que le vendeur a frauduleusement dissimulés (${lienCO('199')}). Indiquez honnêtement les défauts et accidents connus.`,
    `Acheteur : vérifiez le véhicule tout de suite et signalez immédiatement les défauts (${lienCO('201')}).`,
    `Les plaques appartiennent au détenteur et ne suivent pas la voiture. Sans plaques ni assurance à son nom, l’acheteur ne peut pas rouler ([ch.ch](${CH_IMMATRICULATION.url})).`,
    `Le canton décide quand une nouvelle expertise est nécessaire – renseignez-vous auprès du service des automobiles ([asa.ch](${ASA.url})).`,
    ASTUCE_IDENTITE,
    ASTUCE_PAIEMENT,
  ],
  zdroje: [CO_184, CO_199, CO_201, CO_210, CH_IMMATRICULATION, CH_EXPERTISE],
  kroky: [
    { id: 'parteien', nazev: 'Vendeur et acheteur', popis: 'Vous ne connaissez pas encore les données de l’acheteur ? Laissez vide : des lignes à compléter resteront.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vendeur – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'p_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Acheteur – prénom et nom', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'k_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Véhicule', popis: 'Reprenez les données du permis de circulation.', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marque et type', placeholder: 'p. ex. Peugeot 308', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numéro de châssis (VIN)', napoveda: '17 caractères, champ 23 du permis de circulation.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Plaques (restent au vendeur)', placeholder: 'p. ex. VD 123456', sirka: 12, polovina: true },
      { id: 'ez', typ: 'datum', popis: '1re mise en circulation', sirka: 14, polovina: true },
      { id: 'zb2', typ: 'text', popis: 'Numéro matricule', napoveda: 'Champ 18 du permis de circulation.', placeholder: 'p. ex. 123.456.789', sirka: 14, polovina: true },
      { id: 'hu', typ: 'text', popis: 'Dernière expertise', placeholder: 'p. ex. 05/2025', sirka: 10, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Kilométrage au compteur', jednotka: 'km', sirka: 12, polovina: true },
    ] },
    { id: 'zustand', nazev: 'État et garantie', pole: [
      { id: 'unfall', typ: 'volba', popis: 'Dommages d’accident', moznosti: [ { hodnota: 'nein', popis: 'Aucun dommage d’accident connu' }, { hodnota: 'ja', popis: 'Les dommages d’accident suivants sont connus' } ] },
      { id: 'unfall_text', typ: 'textarea', popis: 'Dommages d’accident', sirka: 64, zobrazitKdyz: { pole: 'unfall', je: 'ja' } },
      { id: 'maengel', typ: 'textarea', popis: 'Défauts connus (facultatif)', napoveda: 'Indiquez tout ce que vous savez – un défaut dissimulé annule l’exclusion de la garantie.', placeholder: 'p. ex. climatisation hors service', sirka: 64 },
      { id: 'haftung', typ: 'volba', popis: 'Garantie', napoveda: 'Entre particuliers, la garantie peut être exclue – mais pas pour les défauts dissimulés frauduleusement.', moznosti: [ { hodnota: 'aus', popis: 'Exclue (usuel entre particuliers)' }, { hodnota: 'gesetz', popis: 'Garantie légale' } ] },
      { id: 'klice', typ: 'cislo', popis: 'Nombre de clés', sirka: 4, polovina: true },
    ] },
    { id: 'preis', nazev: 'Prix et remise', pole: [
      { id: 'cena', typ: 'castka', popis: 'Prix de vente (CHF)', napoveda: 'Nous ajoutons le montant en lettres.', placeholder: 'p. ex. 9500', sirka: 14, polovina: true },
      { id: 'platba', typ: 'volba', popis: 'Paiement', moznosti: [ { hodnota: 'bar', popis: 'En espèces à la remise' }, { hodnota: 'ueberweisung', popis: 'Virement avant la remise' } ] },
      { id: 'ucet', typ: 'text', popis: 'IBAN du vendeur', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
      { id: 'predani_cas', typ: 'text', popis: 'Heure de la remise', napoveda: 'Utile en cas d’amende ou d’accident après la vente.', placeholder: 'p. ex. 14 h 30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_slovy: (d) => montantEnLettres(d.cena) },
  clanky: [
    { nadpis: 'Parties', vysvetleni: 'Qui conclut le contrat.', odstavce: [
      '**Vendeur / venderesse :** {{p_jmeno}}, né(e) le {{p_narozeni}}, passeport/CI n° {{p_doklad}}, domicilié(e) {{p_adresa}}',
      '**Acheteur / acheteuse :** {{k_jmeno}}, né(e) le {{k_narozeni}}, passeport/CI n° {{k_doklad}}, domicilié(e) {{k_adresa}}',
    ] },
    { nadpis: 'Objet de la vente', vysvetleni: 'Quel véhicule est vendu – le numéro de châssis est déterminant.', odstavce: [
      'Le vendeur vend à l’acheteur le véhicule automobile de marque/type {{znacka}}, numéro de châssis {{vin}}, numéro matricule {{zb2}}, 1re mise en circulation {{ez}}, dernière expertise {{hu}}, immatriculé jusqu’ici sous les plaques {{spz}}.',
      'Le vendeur garantit qu’il est propriétaire du véhicule et que celui-ci est libre de tout droit de tiers, en particulier qu’il ne fait pas l’objet d’un leasing, d’un gage ou d’une réserve de propriété.',
    ] },
    { nadpis: 'État du véhicule', vysvetleni: 'Ce que le vendeur sait du véhicule.', odstavce: [
      'Le kilométrage au compteur est de {{km}}. À la connaissance du vendeur, il correspond au kilométrage réellement parcouru.',
      { volba: 'unfall', uvodVzor: 'Dommages d’accident (cochez) :', moznosti: { nein: 'Le vendeur n’a connaissance d’aucun dommage d’accident.', ja: 'Le vendeur a connaissance des dommages d’accident suivants : {{unfall_text}}' } },
      'Défauts connus : {{maengel}}',
      'L’acheteur a eu la possibilité d’examiner le véhicule et de l’essayer.',
    ] },
    { nadpis: 'Garantie', vysvetleni: 'Si le vendeur répond plus tard des défauts.', odstavce: [
      { volba: 'haftung', uvodVzor: 'Garantie (cochez) :', moznosti: {
        aus: 'Le véhicule est vendu dans l’état où il a été examiné et essayé. Toute garantie pour les défauts est exclue. Cette exclusion ne s’applique pas aux défauts que le vendeur a frauduleusement dissimulés (art. 199 CO) ni aux qualités expressément promises dans le présent contrat.',
        gesetz: 'Le vendeur répond des défauts conformément aux dispositions légales (art. 197 ss CO). L’acheteur vérifie le véhicule après la remise et signale immédiatement les défauts (art. 201 CO).',
      } },
    ] },
    { nadpis: 'Prix et remise', vysvetleni: 'Combien, comment et quand.', odstavce: [
      'Le prix de vente est de **{{cena}}** (en lettres : {{cena_slovy}}).',
      { volba: 'platba', uvodVzor: 'Paiement (cochez) :', moznosti: { bar: 'Le prix est payé en espèces lors de la remise. Le vendeur en confirme la réception par sa signature.', ueberweisung: 'Le prix est versé avant la remise sur le compte du vendeur IBAN {{ucet}}.' } },
      'La remise a lieu le {{datum_podpisu}} à {{predani_cas}} avec {{klice}} clé(s) et le permis de circulation. Les profits et les risques passent à l’acheteur dès la remise.',
    ] },
    { nadpis: 'Plaques, assurance et immatriculation', vysvetleni: 'En Suisse, les plaques restent au vendeur.', odstavce: [
      'Les plaques restent au vendeur. Il annonce la vente à son assurance responsabilité civile et utilise les plaques pour un autre véhicule ou les dépose au service des automobiles.',
      'Avant le premier trajet, l’acheteur fait immatriculer le véhicule avec sa propre attestation d’assurance auprès du service des automobiles de son canton de domicile. Dès la remise, il supporte tous les frais et amendes liés à l’utilisation du véhicule.',
      'Toute modification du présent contrat requiert la forme écrite. Chaque partie reçoit un exemplaire.',
    ] },
  ],
};
