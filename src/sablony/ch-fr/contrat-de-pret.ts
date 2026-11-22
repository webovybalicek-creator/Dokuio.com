/**
 * Contrat de prêt entre particuliers – prêt de consommation (art. 312 ss CO). Intérêts dus seulement s’ils sont convenus ;
 * sans terme fixé, remboursement dans les six semaines dès la première réclamation (art. 318 CO). Le contrat signé par
 * l’emprunteur vaut reconnaissance de dette pour la mainlevée provisoire (art. 82 LP).
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { montantEnLettres } from './nombres';
import { planPaiement, rappelsMensualites } from './plan';
import { CO, CO_312, CO_318, LP_82, ASTUCE_IDENTITE, ASTUCE_PAIEMENT, lienCO, lienLP, pied } from './sources';

const premierMois = (v: unknown) => {
  const m = /^(\d{4})-(\d{2})/.exec(typeof v === 'string' ? v : '');
  return m ? `${m[2]}.${m[1]}` : '';
};

export const pret: Sablona = {
  kod: 'CHFR-PRET', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de prêt', podnadpis: 'prêt d’argent entre particuliers selon les art. 312 ss du Code des obligations (CO)',
  souborPdf: 'contrat-de-pret', paticka: pied('CHFR-PRET'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Le prêteur / la prêteuse', vpravo: 'L’emprunteur / l’emprunteuse' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  prilohy: (d) => (d.splaceni === 'splatky' ? planPaiement(d, 'Le plan suit les mensualités convenues ; en cas de contradiction, le texte du contrat fait foi.') : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? rappelsMensualites(d, 'Mensualité du prêt') : []),
    ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Remboursement du prêt', datum: String(d.vratit_do) }] : []),
  ],
  coDal: ['Imprimez le contrat en deux exemplaires ; les deux parties signent les deux.', 'Versez l’argent de préférence par virement – le relevé de compte est la meilleure preuve.'],
  kontrola: [
    'Remettez l’argent de manière prouvable – par virement ou contre quittance.',
    `Entre particuliers, des intérêts ne sont dus que s’ils sont convenus. Sans date de remboursement fixée, le prêt doit être remboursé dans les six semaines dès la première réclamation (${lienCO('318')}).`,
    `Le contrat signé par l’emprunteur vaut reconnaissance de dette – il permet de requérir la mainlevée provisoire dans une poursuite (${lienLP('82')}).`,
    'Les intérêts usuraires sont interdits ; certains cantons fixent des taux maximaux.',
    ASTUCE_IDENTITE,
    ASTUCE_PAIEMENT,
  ],
  zdroje: [CO, CO_312, CO_318, LP_82],
  kroky: [
    { id: 'parteien', nazev: 'Parties', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Prêteur – nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Emprunteur – nom', placeholder: 'p. ex. Luc Favre', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue de Lausanne 20, 1201 Genève', sirka: 46 },
    ] },
    { id: 'darlehen', nazev: 'Prêt', pole: [
      { id: 'castka', typ: 'castka', popis: 'Montant du prêt (CHF)', napoveda: 'Nous ajoutons le montant en lettres.', placeholder: 'p. ex. 5000', sirka: 12, polovina: true },
      { id: 'odovzdanie', typ: 'volba', popis: 'Versement', moznosti: [ { hodnota: 'bar', popis: 'En espèces à la signature' }, { hodnota: 'ueberweisung', popis: 'Par virement' } ] },
      { id: 'ucet_k', typ: 'text', popis: 'IBAN de l’emprunteur', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
      { id: 'predani_do', typ: 'datum', popis: 'Versement au plus tard le', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
      { id: 'urok', typ: 'volba', popis: 'Intérêts', napoveda: 'Entre particuliers, le prêt est souvent sans intérêts.', moznosti: [ { hodnota: 'ne', popis: 'Sans intérêts' }, { hodnota: 'ano', popis: 'Avec intérêts' } ] },
      { id: 'urok_sazba', typ: 'cislo', popis: 'Taux d’intérêt', placeholder: 'p. ex. 2', jednotka: '% par an', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
    ] },
    { id: 'rueckzahlung', nazev: 'Remboursement', pole: [
      { id: 'splaceni', typ: 'volba', popis: 'Remboursement', moznosti: [ { hodnota: 'naraz', popis: 'En une fois jusqu’à une date' }, { hodnota: 'splatky', popis: 'Par mensualités' } ] },
      { id: 'vratit_do', typ: 'datum', popis: 'Rembourser au plus tard le', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
      { id: 'splatka', typ: 'castka', popis: 'Mensualité (CHF)', napoveda: 'La dernière mensualité peut être plus basse – nous la calculons.', placeholder: 'p. ex. 500', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'splatka_den', typ: 'cislo', popis: 'Jour du mois', placeholder: 'p. ex. 25', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mois de la première mensualité', napoveda: 'Choisissez n’importe quel jour du mois où les paiements commencent.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'ucet_p', typ: 'text', popis: 'IBAN du prêteur', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => montantEnLettres(d.castka), prvni_mesic: (d) => premierMois(d.prvni_splatka) },
  clanky: [
    { nadpis: 'Parties', odstavce: [
      '**Prêteur / prêteuse :** {{p_jmeno}}, né(e) le {{p_narozeni}}, domicilié(e) {{p_adresa}}',
      '**Emprunteur / emprunteuse :** {{k_jmeno}}, né(e) le {{k_narozeni}}, domicilié(e) {{k_adresa}}',
    ] },
    { nadpis: 'Prêt et versement', vysvetleni: 'Combien est prêté et comment l’argent est remis.', odstavce: [
      'Le prêteur accorde à l’emprunteur un prêt de **{{castka}}** (en lettres : {{castka_slovy}}).',
      { volba: 'odovzdanie', uvodVzor: 'Versement (cochez) :', moznosti: { bar: 'Le montant a été remis en espèces à la signature ; l’emprunteur en confirme la réception par sa signature.', ueberweisung: 'Le montant est versé au plus tard le {{predani_do}} sur le compte de l’emprunteur IBAN {{ucet_k}}.' } },
    ] },
    { nadpis: 'Intérêts', odstavce: [
      { volba: 'urok', uvodVzor: 'Intérêts (cochez) :', moznosti: { ne: 'Le prêt est sans intérêts.', ano: 'Le montant restant dû porte intérêt au taux de {{urok_sazba}} ; les intérêts sont payables avec les mensualités, au plus tard avec la dernière.' } },
    ] },
    { nadpis: 'Remboursement', vysvetleni: 'Quand et comment l’argent est rendu.', odstavce: [
      { volba: 'splaceni', uvodVzor: 'Remboursement (cochez) :', moznosti: {
        naraz: 'L’emprunteur rembourse la totalité du montant au plus tard le {{vratit_do}}.',
        splatky: 'L’emprunteur rembourse par mensualités de {{splatka}}, échéant le {{splatka_den}} de chaque mois, la première fois au mois {{prvni_mesic}}, jusqu’au remboursement complet. La dernière mensualité peut être plus basse. Si l’emprunteur est en demeure pour deux mensualités consécutives, le solde devient immédiatement exigible.',
      } },
      'Les paiements sont effectués sur le compte du prêteur IBAN {{ucet_p}} ou en espèces contre quittance. Un remboursement anticipé est possible en tout temps.',
    ] },
    { nadpis: 'Dispositions finales', odstavce: [
      'Pour le surplus, les art. 312 ss CO sont applicables. Toute modification requiert la forme écrite.',
      'Chaque partie reçoit un exemplaire du présent contrat.',
    ] },
  ],
};
