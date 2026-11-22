/**
 * Lettre de démission – résiliation du contrat de travail par l’employé (art. 335 ss CO). Temps d’essai : 7 jours (art. 335b CO) ;
 * ensuite 1, 2 ou 3 mois pour la fin d’un mois selon l’année de service (art. 335c CO), sauf autre accord écrit, CCT ou CTT.
 */
import type { Pripominka, Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_335, CO_335B, CO_335C, CO_330A, CO_341, CH_DEMISSION, CH_ESSAI, SECO_FAQ, TRAVAIL_SWISS, lienCO, pied } from './sources';

export const demission: Sablona = {
  kod: 'CHFR-DEMISSION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Lettre de démission', podnadpis: 'résiliation du contrat de travail par l’employé (art. 335 ss CO)',
  souborPdf: 'lettre-de-demission', paticka: pied('CHFR-DEMISSION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'L’employé(e)', vpravo: 'Réception confirmée (employeur, date)' },
  slovo: { n: 'lettre de démission', g: 'de la lettre de démission', a: 'la lettre de démission', l: 'dans la lettre de démission' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const fin = naDatum(d.ende);
    if (fin) {
      out.push({ nazev: 'Dernier jour de travail / fin des rapports de travail', datum: isoDatum(fin) });
      out.push({ nazev: 'Vérifier le certificat de travail et le décompte de salaire', datum: isoDatum(pridejDny(fin, 14)), popis: 'Certificat reçu ? Contrôlez le décompte final avec le solde de vacances et d’heures supplémentaires.' });
    }
    return out;
  },
  coDal: [
    'Signez à la main. Remettez la lettre en mains propres et faites confirmer la réception sur votre copie – ou envoyez-la en recommandé.',
    'La démission ne produit effet qu’à sa réception par l’employeur. Un recommandé est en général réputé reçu dès qu’il peut être retiré – envoyez-le quelques jours avant la fin du mois.',
    'Discutez des vacances restantes et des heures supplémentaires avec votre supérieur et consignez-le par écrit.',
    'Si vous n’avez pas encore de nouvel emploi, inscrivez-vous le plus tôt possible à l’ORP – pas seulement le dernier jour de travail.',
  ],
  kontrola: [
    `Forme : la loi n’exige pas de forme particulière. Si le contrat de travail, la CCT ou le CTT prévoit la forme écrite, la démission doit être écrite. L’écrit est de toute façon plus facile à prouver ([ch.ch](${CH_DEMISSION.url})).`,
    `Temps d’essai : sauf autre accord, il dure un mois, au maximum trois mois. Le délai de congé est de sept jours ; la démission doit parvenir à l’employeur au plus tard le dernier jour du temps d’essai (${lienCO('335b')}, [ch.ch](${CH_ESSAI.url})).`,
    `Après le temps d’essai, sauf autre accord écrit : 1 mois pendant la 1re année de service, 2 mois de la 2e à la 9e année, 3 mois dès la 10e année – chaque fois pour la fin d’un mois (${lienCO('335c')}). Vérifiez votre contrat et la CCT.`,
    'Exemple de ch.ch : démission le 13 juin avec un mois de délai → fin le 31 juillet. Le délai court dès la réception par l’employeur.',
    'Une motivation n’est pas nécessaire. Si l’employeur la demande, vous devez la donner par écrit (art. 335 al. 2 CO).',
    `L’employé peut démissionner même pendant une maladie ou un accident ; les périodes de protection ne protègent que contre un licenciement par l’employeur ([SECO](${SECO_FAQ.url})).`,
    `Sans nouvel emploi, une démission peut entraîner une suspension temporaire des indemnités de chômage ([travail.swiss](${TRAVAIL_SWISS.url})).`,
    `Partir plus tôt ? Ce n’est possible qu’avec l’accord de l’employeur (convention de résiliation). Consignez-la par écrit et lisez-la attentivement – vous ne pouvez pas renoncer aux droits impératifs pendant les rapports de travail et le mois qui suit leur fin (${lienCO('341')}).`,
  ],
  zdroje: [CO_335, CO_335B, CO_335C, CO_330A, CO_341, CH_DEMISSION, CH_ESSAI, SECO_FAQ, TRAVAIL_SWISS],
  kroky: [
    { id: 'arbeitnehmer', nazev: 'Vos données', popis: 'Vous démissionnez en tant qu’employée ou employé.', pole: [
      { id: 'an_jmeno', typ: 'text', popis: 'Prénom et nom', napoveda: 'Comme dans le contrat de travail.', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'an_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Votre domicile actuel.', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
      { id: 'an_funkce', typ: 'text', popis: 'Fonction / poste (facultatif)', napoveda: 'Utile dans les grandes entreprises.', placeholder: 'p. ex. comptable', sirka: 34 },
      { id: 'an_cislo', typ: 'text', popis: 'Numéro du personnel (facultatif)', napoveda: 'Figure souvent sur la fiche de salaire.', placeholder: 'p. ex. 104523', sirka: 14, polovina: true },
    ] },
    { id: 'arbeitgeber', nazev: 'Employeur', pole: [
      { id: 'ag_nazev', typ: 'text', popis: 'Employeur (entreprise)', napoveda: 'Nom selon le contrat de travail.', placeholder: 'p. ex. Fiduciaire Exemple SA', sirka: 34 },
      { id: 'ag_osoba', typ: 'text', popis: 'À l’attention de (facultatif)', napoveda: 'Supérieur(e) ou service du personnel.', placeholder: 'p. ex. Mme Sophie Martin, RH', sirka: 34 },
      { id: 'ag_adresa', typ: 'text', popis: 'Adresse de l’employeur', napoveda: 'Adresse à laquelle vous envoyez la démission.', placeholder: 'p. ex. Rue du Rhône 10, 1204 Genève', sirka: 46 },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Contrat de travail du / entrée en fonction (facultatif)', napoveda: 'Selon le contrat. Il détermine l’année de service et donc le délai.', sirka: 14, polovina: true },
    ] },
    { id: 'kuendigung', nazev: 'Démission', pole: [
      { id: 'art', typ: 'volba', popis: 'Quand démissionnez-vous ?', napoveda: 'Pendant le temps d’essai, le délai est de sept jours sauf autre accord. Ensuite 1 à 3 mois pour la fin d’un mois, selon l’année de service et le contrat.', moznosti: [ { hodnota: 'probezeit', popis: 'Pendant le temps d’essai' }, { hodnota: 'ordentlich', popis: 'Après le temps d’essai (résiliation ordinaire)' }, { hodnota: 'aufhebung', popis: 'Ordinaire – avec proposition de partir plus tôt d’un commun accord' } ] },
      { id: 'ende', typ: 'datum', popis: 'Fin des rapports de travail', napoveda: 'Après le temps d’essai, en général une fin de mois : 1re année 1 mois, 2e–9e année 2 mois, dès la 10e année 3 mois – si le contrat ou la CCT ne prévoit rien d’autre.', sirka: 14, polovina: true },
      { id: 'wunsch_ende', typ: 'datum', popis: 'Départ anticipé souhaité', napoveda: 'Valable seulement si l’employeur l’accepte par écrit.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: 'aufhebung' } },
      { id: 'bitten', typ: 'vice', popis: 'Que souhaitez-vous en plus ? (facultatif)', napoveda: 'Vous pouvez demander le certificat de travail en tout temps. Une confirmation de réception vous protège si le délai est contesté.', moznosti: [ { hodnota: 'bestaetigung', popis: 'Confirmation écrite de la réception et de la date de fin' }, { hodnota: 'zeugnis', popis: 'Certificat de travail (art. 330a CO)' }, { hodnota: 'ferien', popis: 'Décompte des vacances restantes et des heures supplémentaires' }, { hodnota: 'dank', popis: 'Remerciements pour la collaboration' } ] },
      { id: 'misto', typ: 'text', popis: 'Lieu', napoveda: 'Nous reprenons la localité de votre adresse.', placeholder: 'p. ex. Sion', sirka: 18, polovina: true, vychozi: { obecZ: 'an_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', napoveda: 'Prérempli avec la date du jour. Pour le délai, c’est la réception par l’employeur qui compte.', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Expéditeur', vysvetleni: 'Qui démissionne.', odstavce: ['{{an_jmeno}}, {{an_adresa}}'] },
    { nadpis: 'À', vysvetleni: 'L’employeur selon le contrat de travail.', odstavce: ['{{ag_nazev}}, à l’att. de {{ag_osoba}}, {{ag_adresa}}'] },
    { nadpis: 'Résiliation des rapports de travail', vysvetleni: 'La démission elle-même. Aucune motivation n’est nécessaire.', odstavce: [
      'Madame, Monsieur,',
      { volba: 'art', uvodVzor: 'Variante (cochez) :', moznosti: {
        probezeit: 'Par la présente, je soussigné(e), {{an_jmeno}} ({{an_funkce}}, numéro du personnel {{an_cislo}}), résilie mon contrat de travail du {{vertrag_datum}} pendant le temps d’essai, en respectant le délai de congé, pour le {{ende}}, subsidiairement pour la prochaine échéance possible.',
        ordentlich: 'Par la présente, je soussigné(e), {{an_jmeno}} ({{an_funkce}}, numéro du personnel {{an_cislo}}), résilie mon contrat de travail du {{vertrag_datum}}, en respectant le délai de congé contractuel ou légal, pour le {{ende}}, subsidiairement pour la prochaine échéance possible.',
        aufhebung: 'Par la présente, je soussigné(e), {{an_jmeno}} ({{an_funkce}}, numéro du personnel {{an_cislo}}), résilie mon contrat de travail du {{vertrag_datum}}, en respectant le délai de congé contractuel ou légal, pour le {{ende}}, subsidiairement pour la prochaine échéance possible. Je vous propose en outre de mettre fin aux rapports de travail d’un commun accord dès le {{wunsch_ende}}. Sans votre accord écrit, la résiliation ordinaire s’applique.',
      } },
      { vice: 'bitten', uvod: 'Je vous prie en outre de m’adresser :', moznosti: {
        bestaetigung: 'une confirmation écrite de la réception de la présente démission et de la date de fin',
        zeugnis: 'un certificat de travail portant sur la nature et la durée des rapports de travail ainsi que sur la qualité de mon travail et ma conduite (art. 330a CO)',
        ferien: 'un décompte de mes vacances restantes et de mes heures supplémentaires, avec une proposition sur la manière de les prendre ou de les compenser d’ici à mon départ',
        dank: 'votre compréhension pour ma décision. Je vous remercie pour la bonne collaboration et la confiance témoignée',
      } },
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
  ],
};
