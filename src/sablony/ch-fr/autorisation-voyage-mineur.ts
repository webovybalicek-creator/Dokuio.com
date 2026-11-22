/**
 * Autorisation de voyage pour un enfant mineur (déclaration de consentement des parents) – selon la recommandation du DFAE.
 * Chaque pays fixe ses règles d’entrée ; certains exigent l’autorisation à l’entrée ou à la sortie. Un déménagement à l’étranger
 * relève de l’autorité parentale conjointe (OFJ) et n’est pas couvert par ce modèle.
 */
import type { Sablona } from '../typy';
import { DFAE_MINEURS, DFAE_VOYAGER, OFJ_ENLEVEMENT, pied } from './sources';

export const voyageMineur: Sablona = {
  kod: 'CHFR-VOYAGE-MINEUR', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Autorisation de voyage', podnadpis: 'des parents pour le voyage à l’étranger d’un enfant mineur (selon la recommandation du DFAE)',
  souborPdf: 'autorisation-voyage-mineur', paticka: pied('CHFR-VOYAGE-MINEUR'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Parent / représentant légal 1', vpravo: 'Parent / représentant légal 2' },
  slovo: { n: 'autorisation', g: 'de l’autorisation', a: 'l’autorisation', l: 'dans l’autorisation' },
  cislovatClanky: false, cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka: 'Signez l’autorisation à la main. Si nécessaire, faites légaliser la signature auprès de votre commune de domicile ou d’un notaire – ce n’est possible qu’avec une signature manuscrite sur papier.',
  coDal: [
    'Signez à la main – le parent qui n’accompagne pas l’enfant. Si le pays de destination l’exige ou pour plus de sécurité : faites légaliser la signature auprès de la commune de domicile ou d’un notaire.',
    'L’enfant ou la personne accompagnante emporte l’original, avec le passeport ou la carte d’identité valable de l’enfant. Gardez une copie à la maison.',
    'Vérifiez les conditions d’entrée du pays de destination et des pays de transit auprès de l’ambassade ou du consulat et lisez les conseils aux voyageurs du DFAE.',
    'Restez joignable pendant le voyage – les numéros de téléphone figurent dans l’autorisation.',
  ],
  kontrola: [
    `Le DFAE recommande vivement cette déclaration lorsque des mineurs voyagent seuls ou sans leurs représentants légaux ; les autorités de certains pays l’exigent à l’entrée ou à la sortie ([DFAE – voyager avec des enfants mineurs](${DFAE_MINEURS.url})).`,
    `Chaque pays a ses propres règles. Demandez à la représentation du pays de destination si une autorisation écrite est nécessaire et sous quelle forme ([DFAE – voyager](${DFAE_VOYAGER.url})). Certains pays ont leur propre formulaire – utilisez-le alors.`,
    'Lisez les conseils aux voyageurs du DFAE pour le pays de destination et de transit.',
    'Reprenez les noms, dates de naissance et numéros de pièces d’identité exactement comme sur le passeport ou la carte d’identité.',
    'Indiquez une destination et des dates précises – une autorisation « partout, en tout temps » est peu crédible.',
    'Indiquez les numéros de téléphone avec l’indicatif (+41) pour que les autorités à la frontière ou à l’aéroport puissent vous joindre.',
    `L’autorisation vaut pour un voyage. Un déménagement à l’étranger est autre chose – en cas d’autorité parentale conjointe, les parents décident ensemble du lieu de résidence de l’enfant ([Office fédéral de la justice](${OFJ_ENLEVEMENT.url})).`,
  ],
  zdroje: [DFAE_MINEURS, DFAE_VOYAGER, OFJ_ENLEVEMENT],
  kroky: [
    { id: 'eltern', nazev: 'Parents / représentants légaux', popis: 'En général les parents titulaires de l’autorité parentale. Si un parent voyage avec l’enfant, l’autre signe.', pole: [
      { id: 'r1_jmeno', typ: 'text', popis: 'Parent 1 – prénom et nom', napoveda: 'Parent ou autre personne titulaire de l’autorité parentale (p. ex. tuteur).', placeholder: 'p. ex. Claire Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'r1_narozeni', typ: 'datum', popis: 'Date de naissance', napoveda: 'Comme sur la pièce d’identité.', sirka: 14, polovina: true },
      { id: 'r1_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité', napoveda: 'Aide les autorités à vérifier l’identité.', placeholder: 'p. ex. X1234567', sirka: 14, polovina: true },
      { id: 'r1_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Domicile.', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'r1_telefon', typ: 'text', popis: 'Téléphone', napoveda: 'Joignable pendant le voyage, avec l’indicatif +41.', placeholder: 'p. ex. +41 79 123 45 67', sirka: 18, polovina: true },
      { id: 'r2_jmeno', typ: 'text', popis: 'Parent 2 – prénom et nom (facultatif)', napoveda: 'L’autre parent. S’il voyage avec l’enfant, il ne doit pas signer – laissez alors vide.', placeholder: 'p. ex. Marc Dupont', sirka: 34 },
      { id: 'r2_narozeni', typ: 'datum', popis: 'Date de naissance', napoveda: 'Comme sur la pièce d’identité.', sirka: 14, polovina: true },
      { id: 'r2_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité', placeholder: 'p. ex. S7654321', sirka: 14, polovina: true },
      { id: 'r2_telefon', typ: 'text', popis: 'Téléphone', napoveda: 'Avec l’indicatif +41.', placeholder: 'p. ex. +41 79 765 43 21', sirka: 18, polovina: true },
    ] },
    { id: 'kind', nazev: 'Enfant', pole: [
      { id: 'd_jmeno', typ: 'text', popis: 'Prénom et nom de l’enfant', napoveda: 'Exactement comme sur le passeport ou la carte d’identité de l’enfant.', placeholder: 'p. ex. Léa Dupont', sirka: 34 },
      { id: 'd_narozeni', typ: 'datum', popis: 'Date de naissance de l’enfant', sirka: 14, polovina: true },
      { id: 'd_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité de l’enfant', napoveda: 'Numéro du document avec lequel l’enfant voyage.', placeholder: 'p. ex. X7654321', sirka: 14, polovina: true },
    ] },
    { id: 'reise', nazev: 'Voyage', pole: [
      { id: 'begleitung', typ: 'volba', popis: 'Avec qui l’enfant voyage-t-il ?', napoveda: 'La personne accompagnante devrait figurer nommément dans l’autorisation.', moznosti: [ { hodnota: 'elternteil', popis: 'Avec l’autre parent' }, { hodnota: 'andere', popis: 'Avec une autre personne (grands-parents, proches, responsable de camp…)' }, { hodnota: 'allein', popis: 'Seul (p. ex. vol avec accompagnement de la compagnie)' } ] },
      { id: 'o_jmeno', typ: 'text', popis: 'Personne accompagnante – prénom et nom', placeholder: 'p. ex. Rose Dupont', sirka: 34, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_narozeni', typ: 'datum', popis: 'Date de naissance de la personne accompagnante', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_doklad', typ: 'text', popis: 'N° de passeport ou de carte d’identité de la personne accompagnante', placeholder: 'p. ex. X1122334', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_beziehung', typ: 'text', popis: 'Lien avec l’enfant', napoveda: 'P. ex. grand-mère, tante, responsable de camp.', placeholder: 'p. ex. grand-mère', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: 'andere' } },
      { id: 'zielland', typ: 'text', popis: 'Destination (et pays de transit)', napoveda: 'Tous les pays où l’enfant se rend ou qu’il traverse. Vérifiez les conditions de chaque pays auprès du DFAE ou de l’ambassade.', placeholder: 'p. ex. Italie (via la France)', sirka: 46 },
      { id: 'adresse_ausland', typ: 'text', popis: 'Adresse de séjour (facultatif)', napoveda: 'Hôtel, appartement de vacances ou camp à l’étranger.', placeholder: 'p. ex. Hôtel Mare, Via Roma 1, Rimini', sirka: 46 },
      { id: 'od', typ: 'datum', popis: 'Départ', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Retour', sirka: 14, polovina: true },
      { id: 'zweck', typ: 'text', popis: 'Motif du voyage', napoveda: 'Le DFAE mentionne le motif du voyage comme contenu de la déclaration.', placeholder: 'p. ex. vacances d’été, séjour linguistique, camp', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu', napoveda: 'Nous reprenons la localité de l’adresse du parent 1.', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', napoveda: 'Prérempli avec la date du jour. Lors de la légalisation, vous pouvez la compléter à la main.', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parents / représentants légaux', vysvetleni: 'Qui donne son accord. Les numéros de téléphone aident les autorités à la frontière ou à l’aéroport.', odstavce: [
      '{{r1_jmeno}}, né(e) le {{r1_narozeni}}, pièce d’identité n° {{r1_doklad}}, domicilié(e) {{r1_adresa}}, téléphone {{r1_telefon}}',
      '{{r2_jmeno}}, né(e) le {{r2_narozeni}}, pièce d’identité n° {{r2_doklad}}, téléphone {{r2_telefon}}',
    ] },
    { nadpis: 'Autorisation', vysvetleni: 'Avec qui et où l’enfant peut voyager. Plus c’est précis, moins il y a de questions à la frontière.', odstavce: [
      'En qualité de titulaire(s) de l’autorité parentale, je déclare (nous déclarons) autoriser notre enfant mineur',
      '{{d_jmeno}}, né(e) le {{d_narozeni}}, pièce d’identité n° {{d_doklad}},',
      { volba: 'begleitung', uvodVzor: 'à voyager (cochez) :', moznosti: { elternteil: 'accompagné(e) de l’autre parent {{o_jmeno}}, né(e) le {{o_narozeni}}, pièce d’identité n° {{o_doklad}},', andere: 'accompagné(e) de {{o_jmeno}}, né(e) le {{o_narozeni}}, pièce d’identité n° {{o_doklad}} ({{o_beziehung}}),', allein: 'seul(e),' } },
      'à destination de {{zielland}}, du {{od}} au {{do}}, lieu de séjour : {{adresse_ausland}}, motif du voyage : {{zweck}}.',
      'Pour la durée du voyage, je charge (nous chargeons) la personne accompagnante ou la personne responsable de l’encadrement de prendre soin de l’enfant et de prendre les décisions nécessaires dans son intérêt, y compris le consentement à un traitement médical urgent.',
    ] },
  ],
};
