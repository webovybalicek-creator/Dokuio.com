/**
 * Contrat d’entreprise (art. 363 ss CO) – artisan, rénovation, petits travaux. Prix ferme (art. 373 CO) ou devis approximatif
 * (art. 375 CO) ; vérification et avis des défauts (art. 367 CO, 60 jours pour un ouvrage immobilier) ; prescription (art. 371 CO).
 */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_363, CO_367, CO_371, CO_375, ASTUCE_IDENTITE, lienCO, pied } from './sources';

export const contratEntreprise: Sablona = {
  kod: 'CHFR-ENTREPRISE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat d’entreprise', podnadpis: 'selon les art. 363 ss du Code des obligations (CO)',
  souborPdf: 'contrat-d-entreprise', paticka: pied('CHFR-ENTREPRISE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le maître de l’ouvrage', vpravo: 'L’entrepreneur / l’entrepreneuse' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  pripominky: (d) => [
    ...(typeof d.beginn === 'string' && d.beginn ? [{ nazev: 'Début des travaux', datum: d.beginn }] : []),
    ...(typeof d.fertig === 'string' && d.fertig ? [{ nazev: 'Achèvement et réception', datum: d.fertig, popis: 'Vérifiez l’ouvrage et établissez un procès-verbal de réception avec tous les défauts constatés.' }] : []),
  ],
  coDal: [
    'Imprimez deux exemplaires ; les deux parties signent les deux.',
    'Versez les acomptes par virement ou faites-les quittancer.',
    'Convenez par écrit des travaux supplémentaires et des changements de prix (un e-mail suffit).',
    'À la réception, vérifiez l’ouvrage et réservez les défauts connus dans le procès-verbal – sinon des droits se perdent.',
  ],
  kontrola: [
    'Décrivez la prestation aussi précisément que possible (étendue, matériaux, dimensions ; joignez l’offre en annexe).',
    `Prix ferme : pas de supplément, même si le travail est plus important (art. 373 CO). Devis approximatif : en cas de dépassement excessif, le maître peut se départir du contrat (${lienCO('375')}).`,
    `Vérifiez l’ouvrage après la livraison et signalez immédiatement les défauts ; pour un ouvrage immobilier, le délai d’avis est de 60 jours (${lienCO('367')}). Qui accepte l’ouvrage perd ses droits pour les défauts reconnaissables.`,
    `Les droits pour les défauts se prescrivent par 2 ans dès la réception, 5 ans pour un ouvrage immobilier (${lienCO('371')}).`,
    'Ce modèle n’est pas conçu pour la construction d’une maison ou de grandes transformations.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_363, CO_367, CO_371, CO_375],
  kroky: [
    { id: 'parteien', nazev: 'Maître de l’ouvrage et entrepreneur', popis: 'Le maître commande l’ouvrage et paie. L’entrepreneur (p. ex. un artisan) le réalise.', pole: [
      { id: 'b_name', typ: 'text', popis: 'Maître de l’ouvrage – nom ou raison sociale', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'b_adresse', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'u_name', typ: 'text', popis: 'Entrepreneur – nom ou raison sociale', placeholder: 'p. ex. Peinture Favre Sàrl', sirka: 34 },
      { id: 'u_adresse', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Chemin des Vignes 4, 1110 Morges', sirka: 46 },
    ] },
    { id: 'werk', nazev: 'Ouvrage', pole: [
      { id: 'leistung', typ: 'textarea', popis: 'Description de l’ouvrage', napoveda: 'Étendue, matériaux, dimensions. Vous pouvez joindre une offre en annexe.', placeholder: 'p. ex. peinture du séjour et du couloir (env. 60 m² de murs), deux couches blanches couvrantes, masquage compris, selon offre du 03.11.2026', sirka: 70 },
      { id: 'ort', typ: 'text', popis: 'Lieu d’exécution', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne, 2e étage', sirka: 46 },
      { id: 'material', typ: 'volba', popis: 'Qui fournit les matériaux ?', moznosti: [ { hodnota: 'unternehmer', popis: 'L’entrepreneur (compris dans le prix)' }, { hodnota: 'besteller', popis: 'Le maître de l’ouvrage' } ] },
      { id: 'beginn', typ: 'datum', popis: 'Début', sirka: 14, polovina: true },
      { id: 'fertig', typ: 'datum', popis: 'Achèvement', sirka: 14, polovina: true },
    ] },
    { id: 'preis', nazev: 'Prix', pole: [
      { id: 'preisart', typ: 'volba', popis: 'Type de prix', moznosti: [ { hodnota: 'pauschal', popis: 'Prix ferme (art. 373 CO)' }, { hodnota: 'anschlag', popis: 'Devis approximatif' } ] },
      { id: 'preis', typ: 'castka', popis: 'Prix (CHF, TVA comprise)', placeholder: 'p. ex. 1800', sirka: 14, polovina: true },
      { id: 'anzahlung_ja', typ: 'volba', popis: 'Acompte', moznosti: [ { hodnota: 'nein', popis: 'Aucun – paiement après la réception' }, { hodnota: 'ja', popis: 'Acompte, solde après la réception' } ] },
      { id: 'anzahlung', typ: 'castka', popis: 'Montant de l’acompte (CHF)', placeholder: 'p. ex. 500', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'anzahlung_ja', je: 'ja' } },
      { id: 'zahlungsziel', typ: 'cislo', popis: 'Délai de paiement après la livraison (jours)', placeholder: 'p. ex. 30', sirka: 4, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN de l’entrepreneur (facultatif)', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu de signature', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'b_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { preis_worte: (d) => montantEnLettres(d.preis) },
  clanky: [
    { nadpis: 'Parties', odstavce: ['**Maître de l’ouvrage :** {{b_name}}, {{b_adresse}} (ci-après « maître »)', '**Entrepreneur :** {{u_name}}, {{u_adresse}} (ci-après « entrepreneur »)'] },
    { nadpis: 'Objet du contrat', vysvetleni: 'L’entrepreneur doit un ouvrage terminé et sans défaut – pas seulement des heures de travail.', odstavce: [
      'L’entrepreneur s’engage à exécuter l’ouvrage suivant : {{leistung}}.',
      'Lieu d’exécution : {{ort}}.',
      { volba: 'material', uvodVzor: 'Matériaux (cochez) :', moznosti: { unternehmer: 'L’entrepreneur fournit les matériaux nécessaires ; ils sont compris dans le prix.', besteller: 'Le maître fournit les matériaux nécessaires. L’entrepreneur les vérifie avant de les utiliser et signale sans délai les matériaux inappropriés.' } },
    ] },
    { nadpis: 'Délais d’exécution', odstavce: ['Les travaux commencent le {{beginn}}. L’ouvrage est achevé au plus tard le {{fertig}}.', 'Le maître donne accès au lieu d’exécution aux heures de travail usuelles.'] },
    { nadpis: 'Prix et paiement', odstavce: [
      { volba: 'preisart', uvodVzor: 'Prix (cochez) :', moznosti: {
        pauschal: 'Les parties conviennent d’un prix ferme de {{preis}} (en lettres : {{preis_worte}}), TVA comprise. L’entrepreneur ne peut exiger aucune augmentation, même si l’ouvrage demande plus de travail (art. 373 CO).',
        anschlag: 'Le prix se fonde sur le devis approximatif de {{preis}} (en lettres : {{preis_worte}}), TVA comprise. Si un dépassement se dessine, l’entrepreneur en avise immédiatement le maître. Si le devis est dépassé dans une mesure excessive sans le fait du maître, celui-ci peut se départir du contrat selon l’art. 375 CO.',
      } },
      { volba: 'anzahlung_ja', uvodVzor: 'Acompte (cochez) :', moznosti: { nein: 'Le prix est payable à la livraison de l’ouvrage (art. 372 CO).', ja: 'Le maître verse à la conclusion du contrat un acompte de {{anzahlung}}. Le solde est payable à la livraison de l’ouvrage.' } },
      'Paiement dans les {{zahlungsziel}} jours suivant la livraison sur le compte IBAN {{iban}} ou en espèces contre quittance.',
      'L’entrepreneur n’exécute des prestations supplémentaires qu’après une convention écrite sur leur étendue et leur prix.',
    ] },
    { nadpis: 'Réception et défauts', vysvetleni: 'À la réception, l’ouvrage est vérifié. Les défauts connus doivent être réservés.', odstavce: [
      'Après la livraison, le maître vérifie l’ouvrage dès que possible selon la marche habituelle des affaires et signale immédiatement les défauts (art. 367 CO). Un procès-verbal de réception mentionnant les défauts constatés et les délais pour y remédier est établi.',
      'Si le maître accepte l’ouvrage expressément ou tacitement, l’entrepreneur est libéré de sa responsabilité pour les défauts reconnaissables (art. 370 CO).',
      'Pour le surplus, les art. 368 ss CO sont applicables. Les droits pour les défauts se prescrivent selon l’art. 371 CO.',
    ] },
    { nadpis: 'Dispositions finales', odstavce: ['Toute modification ou adjonction au présent contrat requiert la forme écrite. Pour le surplus, les dispositions du CO sont applicables.', 'Le contrat est établi en deux exemplaires ; chaque partie en reçoit un.'] },
  ],
};
