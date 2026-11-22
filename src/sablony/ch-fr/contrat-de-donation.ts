/**
 * Contrat de donation d’argent ou d’une chose mobilière – Suisse romande (art. 239 ss CO). La donation manuelle est valable sans
 * forme ; la promesse de donner doit être écrite (art. 243 CO). Immeubles : acte authentique, hors de ce modèle. Impôt cantonal :
 * conjoints et partenaires enregistrés exonérés partout, descendants dans la plupart des cantons (ch.ch).
 */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_239, CO_243, CH_DONATION, ASTUCE_IDENTITE, lienCO, pied } from './sources';

export const donation: Sablona = {
  kod: 'CHFR-DONATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de donation', podnadpis: 'donation d’argent ou d’une chose mobilière (art. 239 ss CO)',
  souborPdf: 'contrat-de-donation', paticka: pied('CHFR-DONATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Le donateur / la donatrice', vpravo: 'Le donataire / la donataire' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  coDal: [
    'Imprimez deux exemplaires ; les deux parties signent les deux.',
    'Versez l’argent de préférence le jour même, avec la mention « donation ».',
    'Pour un montant important, demandez à l’administration fiscale du canton de domicile du donateur si un impôt sur les donations est dû.',
  ],
  kontrola: [
    `Une donation manuelle (de la main à la main) est valable sans forme ; la promesse de donner plus tard doit être faite par écrit (${lienCO('243')}). Ce modèle règle la donation exécutée immédiatement.`,
    'Pour un immeuble, un acte authentique est toujours nécessaire – ce modèle ne convient pas.',
    `L’impôt sur les donations est cantonal : les conjoints et partenaires enregistrés en sont exonérés partout, les descendants dans la plupart des cantons ; Schwyz et Obwald ne perçoivent pas d’impôt sur les donations ([ch.ch](${CH_DONATION.url})).`,
    'Pour une chose donnée, indiquez les défauts connus.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_239, CO_243, CH_DONATION],
  kroky: [
    { id: 'parteien', nazev: 'Donateur et donataire', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Donateur – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Donataire – prénom et nom', placeholder: 'p. ex. Claire Dupont', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
      { id: 'vztah', typ: 'text', popis: 'Lien de parenté (facultatif)', napoveda: 'Important pour l’impôt cantonal sur les donations, p. ex. fille, neveu.', placeholder: 'p. ex. fille', sirka: 20 },
    ] },
    { id: 'geschenk', nazev: 'Objet de la donation', pole: [
      { id: 'predmet', typ: 'volba', popis: 'Qu’est-ce qui est donné ?', moznosti: [ { hodnota: 'penize', popis: 'De l’argent' }, { hodnota: 'vec', popis: 'Une chose mobilière (p. ex. voiture, bijou, meuble)' } ] },
      { id: 'castka', typ: 'castka', popis: 'Montant (CHF)', napoveda: 'Nous ajoutons le montant en lettres.', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
      { id: 'prevod', typ: 'volba', popis: 'Comment l’argent est-il remis ?', moznosti: [ { hodnota: 'hotove', popis: 'En espèces à la signature' }, { hodnota: 'ucet', popis: 'Par virement le jour de la signature' } ], zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN du donataire', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'prevod', je: 'ucet' } },
      { id: 'vec_popis', typ: 'textarea', popis: 'Description de la chose', placeholder: 'p. ex. voiture Renault Clio, numéro de châssis …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
      { id: 'vady_popis', typ: 'textarea', popis: 'Défauts connus (facultatif)', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => montantEnLettres(d.castka) },
  clanky: [
    { nadpis: 'Parties', vysvetleni: 'Qui donne et qui accepte la donation.', odstavce: [
      '**Donateur / donatrice :** {{p_jmeno}}, né(e) le {{p_narozeni}}, domicilié(e) {{p_adresa}}',
      '**Donataire :** {{k_jmeno}}, né(e) le {{k_narozeni}}, domicilié(e) {{k_adresa}}, lien avec le donateur : {{vztah}}',
    ] },
    { nadpis: 'Objet de la donation', vysvetleni: 'Ce qui est donné.', odstavce: [
      { volba: 'predmet', uvodVzor: 'Objet (cochez) :', moznosti: { penize: 'Le donateur donne au donataire la somme de {{castka}} (en lettres : {{castka_slovy}}).', vec: 'Le donateur donne au donataire la chose suivante : {{vec_popis}}. Défauts connus du donateur : {{vady_popis}}' } },
      'Le donataire accepte la donation.',
    ] },
    { nadpis: 'Exécution', vysvetleni: 'Le don est remis tout de suite – une donation manuelle.', odstavce: [
      { volba: 'prevod', kdyz: { pole: 'predmet', je: 'penize' }, uvodVzor: 'Pour de l’argent (cochez) :', moznosti: { hotove: 'Le montant a été remis en espèces à la signature ; le donataire en confirme la réception par sa signature.', ucet: 'Le montant est versé le jour de la signature sur le compte IBAN {{ucet}}.' } },
      { volba: 'predmet', kdyz: { pole: 'predmet', je: 'vec' }, uvodVzor: 'Pour une chose :', moznosti: { vec: 'La chose a été remise à la signature ; la propriété a passé avec la remise. Le donataire en confirme la réception par sa signature.' } },
    ] },
    { nadpis: 'Dispositions finales', vysvetleni: 'Formalités usuelles.', odstavce: [
      'Pour le surplus, les art. 239 ss CO sont applicables, y compris les droits légaux de révocation du donateur (art. 249 CO).',
      'Un éventuel impôt cantonal sur les donations est à la charge du donataire, sauf disposition contraire du droit cantonal.',
      'Le contrat est établi en deux exemplaires ; chaque partie en reçoit un.',
    ] },
  ],
};
