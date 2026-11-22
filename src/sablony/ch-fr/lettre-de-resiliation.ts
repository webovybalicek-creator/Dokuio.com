/**
 * Lettre de résiliation d’un contrat (téléphonie, internet, assurance, caisse-maladie, électricité, abonnement, mandat).
 * Assurance : résiliation pour la fin de la 3e année ou de chaque année suivante avec 3 mois de préavis (art. 35a LCA), après
 * sinistre partiel (art. 42 LCA) ; caisse-maladie de base : lettre reçue au 30 novembre (ch.ch) ; électricité : approvisionnement de
 * base sous 100 MWh (ElCom) ; mandat révocable en tout temps (art. 404 CO) ; contrat d’entreprise art. 377 CO.
 */
import type { Pripominka, Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_377, CO_404, LCA_35A, LCA_42, CH_CAISSE, ELCOM, OMBUDSCOM, lienCO, lienLCA, pied } from './sources';

export const resiliation: Sablona = {
  kod: 'CHFR-RESILIATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Résiliation', podnadpis: 'résiliation d’un contrat selon le contrat, les conditions générales et la loi',
  souborPdf: 'lettre-de-resiliation', paticka: pied('CHFR-RESILIATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le client / la cliente', vpravo: 'reçu pour le fournisseur (en cas de remise en mains propres)' },
  slovo: { n: 'lettre de résiliation', g: 'de la lettre de résiliation', a: 'la lettre de résiliation', l: 'dans la lettre de résiliation' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const envoi = naDatum(d.datum);
    if (envoi) out.push({ nazev: 'Vérifier la confirmation de résiliation', datum: isoDatum(pridejDny(envoi, 14)), popis: 'Pas de confirmation ? Relancez le fournisseur et gardez le récépissé du recommandé.' });
    const fin = naDatum(d.termin);
    if (fin) out.push({ nazev: 'Le contrat prend fin', datum: isoDatum(fin), popis: 'N’arrêtez les ordres permanents et recouvrements directs qu’après le décompte final.' });
    return out;
  },
  coDal: [
    'Signez à la main et envoyez la lettre en recommandé – ou par le canal prévu dans les conditions générales (p. ex. compte client). Gardez le récépissé.',
    'C’est en général la réception par le fournisseur qui compte, pas la date d’envoi. Prévoyez quelques jours de réserve.',
    'Continuez à payer jusqu’à la fin du contrat. N’arrêtez l’ordre permanent ou le recouvrement direct qu’après le décompte final.',
    'Rendez les appareils prêtés (routeur, box TV, badge) selon les instructions et faites quittancer le retour.',
    'Gardez une copie de la résiliation jusqu’à réception de la confirmation et du décompte final.',
  ],
  kontrola: [
    'Recopiez exactement le numéro de contrat, de client ou de police – c’est ainsi que le fournisseur attribue votre résiliation.',
    'Le délai et la forme figurent dans le contrat et les conditions générales. En cas de doute, choisissez « pour la prochaine échéance possible » – le contrat prendra fin au plus tôt.',
    `Mobile, internet, TV : le délai de résiliation et la durée minimale sont fixés par les conditions générales du fournisseur. En cas de litige sur la résiliation ou la durée du contrat, l’organe de conciliation [ombudscom](${OMBUDSCOM.url}) peut aider. Si vous changez d’opérateur en gardant votre numéro, demandez d’abord au nouvel opérateur comment se passe le portage.`,
    `Assurance : tout contrat peut être résilié pour la fin de la troisième année ou de chacune des années suivantes, avec un préavis de trois mois, par écrit ou par tout autre moyen permettant d’en établir la preuve par un texte (${lienLCA('35a')}). Cela vaut depuis le 1.1.2022 aussi pour les anciens contrats. Les assurances-vie sont exclues. Le contrat peut prévoir des délais plus courts.`,
    `Assurance après un sinistre partiel : vous pouvez vous départir du contrat au plus tard lors du paiement de l’indemnité (${lienLCA('42')}). Vérifiez les détails dans vos conditions générales d’assurance.`,
    `Caisse-maladie – assurance de base : votre lettre doit parvenir à la caisse au plus tard le 30 novembre ; avec une franchise de 300 francs dans le modèle standard, aussi pour la fin juin avec trois mois de préavis ([ch.ch](${CH_CAISSE.url})). Les assurances complémentaires ont leurs propres délais selon le contrat.`,
    `Électricité : les ménages consommant moins de 100 MWh par an ne peuvent pas choisir librement leur fournisseur ([ElCom](${ELCOM.url})). Lors d’un déménagement, annoncez votre départ au gestionnaire de réseau local et notez le relevé du compteur.`,
    `Mandat (p. ex. nettoyage, conseil, fiduciaire, coaching) : un mandat peut être révoqué ou répudié en tout temps ; la partie qui le fait en temps inopportun doit réparer le dommage causé (${lienCO('404')}). Pour un contrat d’entreprise (p. ex. artisan), c’est l’art. 377 CO qui s’applique : résiliation seulement contre paiement du travail fait et indemnisation complète.`,
    'Fitness, abonnement, adhésion : la durée, le renouvellement automatique et le délai de résiliation sont fixés par le contrat et les conditions générales. Résiliez à temps avant le renouvellement.',
  ],
  zdroje: [LCA_35A, LCA_42, CO_404, CO_377, CH_CAISSE, ELCOM, OMBUDSCOM],
  kroky: [
    { id: 'kunde', nazev: 'Vos données', popis: 'La personne qui a conclu le contrat. Écrivez le nom et l’adresse tels que le fournisseur les connaît.', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Prénom et nom', napoveda: 'Comme dans le contrat (pour une entreprise : raison sociale).', placeholder: 'p. ex. Marie Rochat', sirka: 34, autocomplete: 'name' },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance (facultatif)', napoveda: 'Aide le fournisseur à vous trouver si le numéro de contrat manque.', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Adresse du contrat ou votre adresse postale actuelle.', placeholder: 'p. ex. Avenue de la Gare 5, 1950 Sion', sirka: 46 },
      { id: 'k_kontakt', typ: 'text', popis: 'Téléphone ou e-mail (facultatif)', napoveda: 'Où le fournisseur peut envoyer la confirmation.', placeholder: 'p. ex. marie.rochat@exemple.ch', sirka: 30 },
    ] },
    { id: 'vertrag', nazev: 'Fournisseur et contrat', popis: 'Les données figurent dans le contrat, sur la facture ou dans le compte client.', pole: [
      { id: 'typ', typ: 'volba', popis: 'Que résiliez-vous ?', napoveda: 'Selon le contrat, nous vous montrons les règles applicables dans les conseils ci-dessous.', moznosti: [ { hodnota: 'telekom', popis: 'Abonnement mobile, internet ou TV' }, { hodnota: 'versicherung', popis: 'Assurance (ménage, RC, voiture, complémentaire…)' }, { hodnota: 'krankenkasse', popis: 'Caisse-maladie – assurance de base' }, { hodnota: 'strom', popis: 'Électricité – départ lors d’un déménagement' }, { hodnota: 'abo', popis: 'Fitness, abonnement ou adhésion' }, { hodnota: 'auftrag', popis: 'Prestation / mandat (nettoyage, conseil, fiduciaire…)' }, { hodnota: 'sonstiges', popis: 'Autre contrat' } ] },
      { id: 'f_nazev', typ: 'text', popis: 'Fournisseur (entreprise)', napoveda: 'Nom exact selon la facture ou le contrat.', placeholder: 'p. ex. Fitness Exemple SA', sirka: 34 },
      { id: 'f_adresa', typ: 'text', popis: 'Adresse du fournisseur', napoveda: 'Adresse de correspondance des conditions générales ou du site – envoyez à cette adresse.', placeholder: 'p. ex. Case postale, 1211 Genève', sirka: 46 },
      { id: 'cislo', typ: 'text', popis: 'Numéro de contrat, de client ou de police', napoveda: 'La donnée la plus importante – elle permet d’attribuer la résiliation.', placeholder: 'p. ex. 12.345.678', sirka: 18, polovina: true },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Début du contrat (facultatif)', napoveda: 'Selon le contrat ou la police. Important pour la règle des trois ans en assurance.', sirka: 14, polovina: true },
      { id: 'gegenstand', typ: 'text', popis: 'Quoi exactement ? (facultatif)', napoveda: 'P. ex. numéro d’appel, adresse du logement et numéro de compteur, numéro de membre, nom de l’abonnement.', placeholder: 'p. ex. numéro 079 123 45 67', sirka: 56 },
    ] },
    { id: 'kuendigung', nazev: 'Résiliation', pole: [
      { id: 'art', typ: 'volba', popis: 'Comment résiliez-vous ?', napoveda: 'En cas de doute, « prochaine échéance possible ». Les variantes assurance, caisse-maladie, électricité et mandat ne conviennent qu’à ces contrats.', moznosti: [ { hodnota: 'naechst', popis: 'Pour la prochaine échéance possible' }, { hodnota: 'termin', popis: 'Pour une date précise (subsidiairement la prochaine possible)' }, { hodnota: 'vvg', popis: 'Assurance : résiliation ordinaire selon l’art. 35a LCA' }, { hodnota: 'schaden', popis: 'Assurance : après un sinistre partiel (art. 42 LCA)' }, { hodnota: 'kvg', popis: 'Caisse-maladie : assurance de base pour la fin de l’année' }, { hodnota: 'umzug', popis: 'Électricité : départ pour cause de déménagement' }, { hodnota: 'auftrag', popis: 'Mandat : révocation selon l’art. 404 CO, avec effet immédiat' } ] },
      { id: 'termin', typ: 'datum', popis: 'Fin du contrat ou date du départ', napoveda: 'Pour une assurance, la fin de l’année d’assurance ; pour l’assurance de base, le 31 décembre ; pour un déménagement, le jour de la remise du logement.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: ['termin', 'vvg', 'kvg', 'umzug'] } },
      { id: 'schaden_nr', typ: 'text', popis: 'Numéro de sinistre (facultatif)', napoveda: 'Le numéro donné par l’assurance pour le sinistre.', placeholder: 'p. ex. S-2026-0042', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'art', je: 'schaden' } },
      { id: 'neue_adresse', typ: 'text', popis: 'Nouvelle adresse (pour la facture finale)', napoveda: 'Où envoyer la facture finale.', placeholder: 'p. ex. Rue de la Gare 3, 2000 Neuchâtel', sirka: 46, zobrazitKdyz: { pole: 'art', je: 'umzug' } },
      { id: 'bitten', typ: 'vice', popis: 'Que souhaitez-vous en plus ? (facultatif)', napoveda: 'La confirmation vous assure de la date de fin. Avec un IBAN, un avoir vous est remboursé plus vite.', moznosti: [ { hodnota: 'bestaetigung', popis: 'Confirmation écrite avec la date de fin' }, { hodnota: 'abrechnung', popis: 'Décompte final et remboursement d’un avoir' }, { hodnota: 'geraete', popis: 'Indications pour le retour des appareils' }, { hodnota: 'lastschrift', popis: 'Fin du recouvrement direct après le décompte final' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN pour un avoir', napoveda: 'Votre compte pour un éventuel remboursement.', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'bitten', je: 'abrechnung' } },
      { id: 'misto', typ: 'text', popis: 'Lieu', napoveda: 'Nous reprenons la localité de votre adresse.', placeholder: 'p. ex. Sion', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Expéditeur', vysvetleni: 'Qui résilie – la personne qui a conclu le contrat.', odstavce: ['{{k_jmeno}}, né(e) le {{k_narozeni}}, {{k_adresa}}, contact : {{k_kontakt}}'] },
    { nadpis: 'Recommandé à', vysvetleni: 'À qui la résiliation est adressée.', odstavce: ['{{f_nazev}}, {{f_adresa}}'] },
    { nadpis: 'Résiliation', vysvetleni: 'La résiliation elle-même. Le numéro indique au fournisseur de quel contrat il s’agit ; la variante détermine quand il prend fin.', odstavce: [
      'Madame, Monsieur,',
      'Par la présente, je résilie le contrat n° {{cislo}} du {{vertrag_datum}} ({{gegenstand}}).',
      { volba: 'art', uvodVzor: 'Variante (cochez) :', moznosti: {
        naechst: 'La résiliation prend effet à la prochaine échéance possible selon le contrat, les conditions générales et la loi.',
        termin: 'La résiliation prend effet le {{termin}}, subsidiairement à la prochaine échéance possible.',
        vvg: 'Je résilie l’assurance de manière ordinaire en vertu de l’art. 35a LCA pour le {{termin}}, subsidiairement pour la prochaine échéance possible.',
        schaden: 'En vertu de l’art. 42 LCA, je me départis du contrat à la suite du sinistre partiel n° {{schaden_nr}}.',
        kvg: 'Je résilie l’assurance obligatoire des soins (assurance de base) pour le {{termin}}.',
        umzug: 'En raison de mon déménagement, j’annonce mon départ pour le {{termin}}. Je vous prie de relever le compteur ce jour-là et d’envoyer la facture finale à ma nouvelle adresse : {{neue_adresse}}.',
        auftrag: 'En vertu de l’art. 404 al. 1 CO, je révoque le mandat avec effet immédiat. Je vous prie de facturer les prestations fournies jusqu’à ce jour.',
      } },
    ] },
    { nadpis: 'Autres demandes', vysvetleni: 'Ce dont vous avez encore besoin du fournisseur. Tout est facultatif.', odstavce: [
      { vice: 'bitten', uvod: 'Je vous prie en outre de m’adresser :', moznosti: { bestaetigung: 'une confirmation écrite de la résiliation avec la date à laquelle le contrat prend fin', abrechnung: 'le décompte final et le remboursement d’un éventuel avoir sur le compte IBAN {{iban}}', geraete: 'des indications sur la manière et le lieu de retour des appareils prêtés', lastschrift: 'la fin du recouvrement direct après le décompte final' } },
      'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
    ] },
  ],
};
