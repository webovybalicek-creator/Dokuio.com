/** Mise en demeure de payer (art. 102 CO) avec intérêt moratoire de 5 % l’an (art. 104 CO) – Suisse romande. */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_102, CO_104, lienCO, pied } from './sources';

export const miseEnDemeure: Sablona = {
  kod: 'CHFR-DEMEURE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Mise en demeure', podnadpis: 'sommation de payer selon les art. 102 et 104 du Code des obligations (CO)',
  souborPdf: 'mise-en-demeure', paticka: pied('CHFR-DEMEURE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le créancier / la créancière', vpravo: 'reçu (en cas de remise en mains propres)' },
  slovo: { n: 'mise en demeure', g: 'de la mise en demeure', a: 'la mise en demeure', l: 'dans la mise en demeure' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.zahlen_bis === 'string' && d.zahlen_bis ? [{ nazev: 'Fin du délai de paiement de la mise en demeure', datum: d.zahlen_bis, popis: 'Vérifiez le paiement. Sinon, réquisition de poursuite auprès de l’office des poursuites.' }] : []),
  coDal: [
    'Signez et envoyez la lettre en recommandé – vous pourrez ainsi prouver sa réception.',
    'Gardez une copie et le récépissé postal.',
    'Si l’autre partie ne paie pas, vous pouvez introduire une poursuite auprès de l’office des poursuites du domicile du débiteur.',
  ],
  kontrola: [
    `La mise en demeure ne fait tomber le débiteur en demeure qu’après l’échéance (${lienCO('102')}). Si un jour d’échéance précis a été convenu, la demeure survient sans mise en demeure.`,
    `Intérêt moratoire pour les dettes d’argent : 5 % l’an, même si un intérêt contractuel plus bas était convenu (${lienCO('104')}).`,
    'Désignez exactement la créance : numéro de facture ou contrat, date, montant.',
    'Envoyez la lettre en recommandé – en cas de litige, vous devez prouver sa réception.',
    'Ne menacez que de démarches légales (poursuite) – pas d’exposition publique ni d’autres pressions.',
  ],
  zdroje: [CO_102, CO_104],
  kroky: [
    { id: 'parteien', nazev: 'Créancier et débiteur', pole: [
      { id: 'k_name', typ: 'text', popis: 'Créancier – nom ou raison sociale', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'k_adresse', typ: 'text', popis: 'Adresse du créancier', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_kontakt', typ: 'text', popis: 'Téléphone ou e-mail (facultatif)', sirka: 30 },
      { id: 'p_name', typ: 'text', popis: 'Débiteur – nom ou raison sociale', placeholder: 'p. ex. Luc Favre', sirka: 34 },
      { id: 'p_adresse', typ: 'text', popis: 'Adresse du débiteur', placeholder: 'p. ex. Rue de la Gare 3, 2000 Neuchâtel', sirka: 46 },
    ] },
    { id: 'forderung', nazev: 'Créance', pole: [
      { id: 'betrag', typ: 'castka', popis: 'Montant dû (CHF)', placeholder: 'p. ex. 850', sirka: 14, polovina: true },
      { id: 'faellig', typ: 'datum', popis: 'Exigible depuis le', sirka: 14, polovina: true },
      { id: 'grund', typ: 'text', popis: 'Cause de la créance', napoveda: 'Facture ou contrat avec numéro et date.', placeholder: 'p. ex. facture n° 2026-041 du 01.10.2026', sirka: 56 },
      { id: 'stufe', typ: 'volba', popis: 'Quelle mise en demeure ?', moznosti: [ { hodnota: 'erste', popis: 'Premier rappel' }, { hodnota: 'letzte', popis: 'Dernier rappel avant poursuite' } ] },
      { id: 'zinsen', typ: 'volba', popis: 'Réclamer l’intérêt moratoire ?', moznosti: [ { hodnota: 'ja', popis: 'Oui, intérêt moratoire légal' }, { hodnota: 'nein', popis: 'Non' } ] },
    ] },
    { id: 'zahlung', nazev: 'Délai et paiement', pole: [
      { id: 'zahlen_bis', typ: 'datum', popis: 'Payer au plus tard le', napoveda: 'L’usage est de 7 à 14 jours.', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN', placeholder: 'CH…', sirka: 30 },
      { id: 'verwendung', typ: 'text', popis: 'Communication', placeholder: 'p. ex. facture 2026-041', sirka: 24, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { betrag_worte: (d) => montantEnLettres(d.betrag) },
  clanky: [
    { nadpis: 'Expéditeur et destinataire', odstavce: [
      '**Créancier / créancière :** {{k_name}}, {{k_adresse}}, contact {{k_kontakt}}',
      '**Débiteur / débitrice :** {{p_name}}, {{p_adresse}}',
    ] },
    { nadpis: 'Mise en demeure de payer', vysvetleni: 'Ce qui est dû, depuis quand et jusqu’à quand payer.', odstavce: [
      { volba: 'stufe', uvodVzor: 'Objet (cochez) :', moznosti: { erste: '**Objet : Mise en demeure – {{grund}}**', letzte: '**Objet : Dernière mise en demeure avant poursuite – {{grund}}**' } },
      'Madame, Monsieur,',
      'En vertu de {{grund}}, un montant de {{betrag}} (en lettres : {{betrag_worte}}) est exigible depuis le {{faellig}}. À ce jour, aucun paiement n’a été constaté.',
      'Je vous invite à verser le montant dû au plus tard le {{zahlen_bis}} sur le compte suivant : IBAN {{iban}}, communication {{verwendung}}.',
      { volba: 'zinsen', uvodVzor: 'Intérêt moratoire (cochez) :', moznosti: { ja: 'Par la présente, vous êtes mis(e) en demeure, pour autant que vous ne le soyez pas déjà. Je réclame l’intérêt moratoire légal de 5 % l’an (art. 104 CO).', nein: 'En cas de paiement dans le délai, je renonce à réclamer des intérêts moratoires.' } },
      { volba: 'stufe', uvodVzor: 'Suite (cochez) :', moznosti: { erste: 'Si vous avez déjà effectué le paiement, veuillez considérer la présente comme sans objet.', letzte: 'À défaut de paiement dans le délai, j’introduirai une poursuite sans autre avis. Les frais qui en découlent seraient à votre charge.' } },
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
  ],
};
