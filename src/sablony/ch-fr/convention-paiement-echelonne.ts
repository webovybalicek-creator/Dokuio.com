/**
 * Convention de paiement échelonné d’une dette existante – Suisse romande. Bilatérale : le créancier accorde des mensualités et
 * renonce à la poursuite tant qu’elles sont payées ; clause de déchéance en cas de demeure. Reconnaissance de dette (art. 17 CO),
 * interruption de la prescription (art. 135 CO), mainlevée provisoire (art. 82 LP). LCC : ne vise pas les crédits sans intérêts
 * ni frais (art. 7 LCC). Texte repris du modèle CH-ABZAHLUNG vérifié.
 */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { planPaiement, rappelsMensualites } from './plan';
import { CO_17, CO_104, CO_135, LP_82, LCC_7, ASTUCE_IDENTITE, lienCO, lienLP, pied } from './sources';

export const paiementEchelonne: Sablona = {
  kod: 'CHFR-ECHELONNEMENT', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Convention de paiement échelonné', podnadpis: 'remboursement par mensualités d’une dette existante selon le Code des obligations (CO)',
  souborPdf: 'convention-paiement-echelonne', paticka: pied('CHFR-ECHELONNEMENT'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le créancier / la créancière', vpravo: 'Le débiteur / la débitrice' },
  slovo: { n: 'convention', g: 'de la convention', a: 'la convention', l: 'dans la convention' },
  prilohy: (d) => planPaiement(d, [d.zins === 'ja' ? 'Le plan ne montre que la dette sans intérêts ; les intérêts sont payés selon la convention.' : '', 'En cas de contradiction, le texte de la convention fait foi.'].filter(Boolean).join(' ')),
  pripominky: (d) => rappelsMensualites(d),
  coDal: [
    'Imprimez deux exemplaires. Le créancier et le débiteur signent tous deux à la main ; chacun reçoit un exemplaire.',
    'Contrôlez le plan de paiement en annexe : nombre de mensualités et montant de la dernière.',
    'Payez les mensualités par virement avec une mention (p. ex. « mensualité 3/10 »). Faites toujours quittancer les paiements en espèces.',
    'Si le débiteur ne paie pas : le créancier déclare le solde exigible par écrit et peut introduire une poursuite. Avec la reconnaissance de dette signée, il peut requérir la mainlevée provisoire.',
    'Après la dernière mensualité, le débiteur peut demander une confirmation que la dette est éteinte.',
  ],
  kontrola: [
    ASTUCE_IDENTITE,
    'Montant = ce qui est encore dû le jour de la signature. Indiquez concrètement la cause : quel contrat, quelle facture ou quel événement, avec la date.',
    `Avec la reconnaissance de dette, le débiteur confirme la dette sans condition (${lienCO('17')}). Signée, elle permet de requérir la mainlevée provisoire dans la poursuite (${lienLP('82')}).`,
    `La reconnaissance interrompt la prescription ; le délai recommence à courir (${lienCO('135')}).`,
    'Clause de déchéance : en cas de retard de paiement, tout le solde devient exigible. Choisissez un délai de grâce si de petits retards ne doivent pas tout déclencher.',
    `Les intérêts sont facultatifs et doivent rester raisonnables. Une entreprise qui accorde des crédits à titre professionnel – même sous forme de délai de paiement avec intérêts ou frais – doit respecter la loi sur le crédit à la consommation ; les crédits sans intérêts ni frais n’y sont pas soumis ([art. 7 LCC](${LCC_7.url})).`,
    'Fixez des mensualités que le débiteur peut vraiment payer – un plan irréaliste n’aide personne.',
    'L’argent n’est prêté que maintenant ? Le contrat de prêt convient mieux.',
  ],
  zdroje: [CO_17, CO_135, CO_104, LP_82, LCC_7],
  kroky: [
    { id: 'parteien', nazev: 'Créancier et débiteur', popis: 'Le créancier est la personne à qui l’argent est dû. Le débiteur paie par mensualités. Les deux signent.', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Créancier – prénom et nom', napoveda: 'Nom complet comme sur la pièce d’identité (pour une entreprise : raison sociale).', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance du créancier', napoveda: 'Aide à désigner la personne sans équivoque.', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse du créancier', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Débiteur – prénom et nom', napoveda: 'Nom complet comme sur la pièce d’identité.', placeholder: 'p. ex. Luc Favre', sirka: 34 },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance du débiteur', napoveda: 'Important si une poursuite devient nécessaire.', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse du débiteur', napoveda: 'Domicile – c’est là qu’une poursuite serait introduite.', placeholder: 'p. ex. Rue de la Gare 3, 2000 Neuchâtel', sirka: 46 },
    ] },
    { id: 'schuld', nazev: 'Dette', popis: 'La dette existe déjà – la convention règle seulement la manière de la payer.', pole: [
      { id: 'castka', typ: 'castka', popis: 'Montant dû le jour de la signature (CHF)', napoveda: 'Ce qui reste à payer. Nous ajoutons les lettres et calculons le plan de paiement.', placeholder: 'p. ex. 6000', sirka: 14, polovina: true },
      { id: 'duvod', typ: 'text', popis: 'Cause de la dette', napoveda: 'Concrètement : contrat, facture ou événement avec la date.', placeholder: 'p. ex. facture impayée n° 2026-015 du 03.03.2026', sirka: 56 },
      { id: 'anerkennung', typ: 'volba', popis: 'Le débiteur reconnaît-il la dette ?', napoveda: 'Conseillé : avec la reconnaissance signée, le créancier peut requérir la mainlevée provisoire, et la prescription recommence à courir.', moznosti: [ { hodnota: 'ja', popis: 'Oui, avec reconnaissance de dette' }, { hodnota: 'nein', popis: 'Non, seulement le paiement échelonné' } ] },
    ] },
    { id: 'raten', nazev: 'Mensualités', pole: [
      { id: 'splatka', typ: 'castka', popis: 'Mensualité (CHF)', napoveda: 'La dernière peut être plus basse – nous la calculons.', placeholder: 'p. ex. 500', sirka: 12, polovina: true },
      { id: 'splatka_den', typ: 'cislo', popis: 'Jour du mois', napoveda: 'Jour auquel la mensualité doit être créditée, p. ex. 25.', placeholder: 'p. ex. 25', sirka: 4, polovina: true },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mois de la première mensualité', napoveda: 'Choisissez n’importe quel jour du mois où les paiements commencent.', sirka: 14, polovina: true },
      { id: 'ucet', typ: 'text', popis: 'IBAN du créancier', napoveda: 'Où vont les mensualités. Un virement est la preuve la plus simple.', placeholder: 'CH…', sirka: 30 },
      { id: 'zins', typ: 'volba', popis: 'Des intérêts sont-ils dus ?', napoveda: 'Entre particuliers, en général sans intérêts. Un intérêt doit rester raisonnable.', moznosti: [ { hodnota: 'nein', popis: 'Sans intérêts' }, { hodnota: 'ja', popis: 'Avec intérêts' } ] },
      { id: 'zins_satz', typ: 'cislo', popis: 'Taux d’intérêt (% par an)', napoveda: 'Intérêt annuel sur le montant restant dû, p. ex. 3.', placeholder: 'p. ex. 3', jednotka: '% par an', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'zins', je: 'ja' } },
      { id: 'verfall', typ: 'volba', popis: 'Quand tout le solde devient-il exigible ?', napoveda: 'Clause de déchéance : si le débiteur ne paie pas, le créancier peut exiger tout le solde d’un coup. Un délai de grâce pardonne les petits retards.', moznosti: [ { hodnota: 'sofort', popis: 'Dès le retard d’une mensualité' }, { hodnota: 'nachfrist', popis: 'Si une mensualité manque encore 14 jours après l’échéance' }, { hodnota: 'zwei', popis: 'Dès le retard de deux mensualités' } ] },
      { id: 'misto', typ: 'text', popis: 'Lieu de signature', napoveda: 'Nous reprenons la localité de l’adresse du créancier.', placeholder: 'p. ex. Lausanne', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: {
    castka_slovy: (d) => montantEnLettres(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[2]}.${m[1]}` : '';
    },
  },
  clanky: [
    { nadpis: 'Parties', vysvetleni: 'Qui doit à qui. Des données exactes comptent en cas de poursuite.', odstavce: [
      '**Créancier / créancière :** {{k_jmeno}}, né(e) le {{k_narozeni}}, domicilié(e) {{k_adresa}}',
      '**Débiteur / débitrice :** {{p_jmeno}}, né(e) le {{p_narozeni}}, domicilié(e) {{p_adresa}}',
    ] },
    { nadpis: 'Dette', vysvetleni: 'Quelle dette est remboursée et combien reste dû le jour de la signature.', odstavce: [
      'Le jour de la signature, le débiteur doit au créancier le montant de **{{castka}}** (en lettres : {{castka_slovy}}). Cause de la dette : {{duvod}}.',
      { volba: 'anerkennung', uvodVzor: 'Reconnaissance de dette (cochez) :', moznosti: { ja: 'Le débiteur reconnaît expressément et sans réserve cette dette pour ce montant (art. 17 CO).', nein: 'Par la présente convention, les parties règlent uniquement les modalités de paiement.' } },
    ] },
    { nadpis: 'Paiement par mensualités', vysvetleni: 'Le créancier accepte que tout ne soit pas payé d’un coup ; le débiteur s’engage à des mensualités fixes selon le plan.', odstavce: [
      'Le débiteur paie la dette par mensualités de {{splatka}}, échéant le {{splatka_den}} de chaque mois, la première fois au mois {{prvni_mesic}}, jusqu’à extinction complète. La dernière mensualité peut être plus basse. Le plan figure en annexe.',
      'Les mensualités sont versées sur le compte du créancier IBAN {{ucet}} ; la date du crédit fait foi. Le créancier quittance par écrit les paiements en espèces.',
      { volba: 'zins', uvodVzor: 'Intérêts (cochez) :', moznosti: { nein: 'Aucun intérêt n’est dû sur les mensualités.', ja: 'Le débiteur paie sur le montant restant dû un intérêt de {{zins_satz}}, payable avec les mensualités.' } },
      'Tant que le débiteur paie ponctuellement, le créancier n’exige pas toute la dette d’un coup et n’introduit pas de poursuite. Le débiteur peut en tout temps payer davantage ou tout rembourser par anticipation.',
    ] },
    { nadpis: 'Clause de déchéance', vysvetleni: 'Ce qui se passe si le débiteur ne paie plus : le créancier peut exiger tout le solde d’un coup.', odstavce: [
      { volba: 'verfall', uvodVzor: 'Exigibilité du solde (cochez) :', moznosti: {
        sofort: 'Si le débiteur est en demeure pour une mensualité, la totalité du solde devient immédiatement exigible.',
        nachfrist: 'Si une mensualité n’a pas été créditée 14 jours après son échéance, la totalité du solde devient immédiatement exigible.',
        zwei: 'Si le débiteur est en demeure pour deux mensualités, la totalité du solde devient immédiatement exigible.',
      } },
      'Le créancier communique l’exigibilité par écrit au débiteur. Dès la demeure, l’intérêt moratoire selon l’art. 104 CO est dû.',
    ] },
    { nadpis: 'Dispositions finales', vysvetleni: 'Formalités : droit applicable, modifications, exemplaires.', odstavce: [
      'Pour le surplus, le Code des obligations suisse est applicable. Toute modification ou adjonction requiert la forme écrite.',
      'La convention est établie en deux exemplaires ; chaque partie en reçoit un. Le plan de paiement annexé fait partie intégrante de la convention ; en cas de contradiction, le texte de la convention fait foi.',
    ] },
  ],
};
