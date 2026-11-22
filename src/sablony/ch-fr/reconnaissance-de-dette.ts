/**
 * Reconnaissance de dette (art. 17 CO). Signée par le débiteur, elle permet la mainlevée provisoire dans la poursuite
 * (art. 82 LP) ; elle interrompt la prescription, qui recommence à courir (art. 135 CO).
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { montantEnLettres } from './nombres';
import { planPaiement, rappelsMensualites } from './plan';
import { CO_17, CO_135, LP_82, ASTUCE_IDENTITE, lienCO, lienLP, pied } from './sources';

export const reconnaissanceDette: Sablona = {
  kod: 'CHFR-RECONNAISSANCE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Reconnaissance de dette', podnadpis: 'selon l’art. 17 du Code des obligations (CO)',
  souborPdf: 'reconnaissance-de-dette', paticka: pied('CHFR-RECONNAISSANCE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le débiteur / la débitrice', vpravo: 'Le créancier / la créancière (accord sur les mensualités)' },
  slovo: { n: 'reconnaissance de dette', g: 'de la reconnaissance de dette', a: 'la reconnaissance de dette', l: 'dans la reconnaissance de dette' },
  prilohy: (d) => (d.splaceni === 'splatky' ? planPaiement(d, 'Le plan suit les mensualités convenues ; en cas de contradiction, le texte de la reconnaissance de dette fait foi.') : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? rappelsMensualites(d) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Dette exigible', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Imprimez deux exemplaires. La signature manuscrite du débiteur est déterminante.',
    'Le créancier garde l’original signé.',
    'Faites quittancer les paiements en espèces ; les virements sont prouvés par le relevé de compte.',
  ],
  kontrola: [
    `Une reconnaissance de dette signée permet de requérir la mainlevée provisoire dans la poursuite (${lienLP('82')}). Le montant et l’échéance doivent en ressortir clairement.`,
    'Indiquez concrètement la cause et le montant de la dette (quel contrat ou quel événement, à quelle date).',
    `La reconnaissance interrompt la prescription, qui recommence à courir (${lienCO('135')}).`,
    'Pas de pression ni de menaces – une reconnaissance obtenue sous la contrainte peut être contestée.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_17, CO_135, LP_82],
  kroky: [
    { id: 'parteien', nazev: 'Débiteur et créancier', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Débiteur – prénom et nom', napoveda: 'Celui qui doit et reconnaît la dette.', placeholder: 'p. ex. Luc Favre', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue de Lausanne 20, 1201 Genève', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Créancier – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'schuld', nazev: 'Dette', pole: [
      { id: 'castka', typ: 'castka', popis: 'Montant de la dette (CHF)', napoveda: 'Le montant encore dû aujourd’hui. Nous ajoutons les lettres.', placeholder: 'p. ex. 3000', sirka: 14, polovina: true },
      { id: 'duvod_popis', typ: 'text', popis: 'Cause de la dette', placeholder: 'p. ex. prêt selon le contrat de prêt du 03.03.2026', sirka: 56 },
    ] },
    { id: 'zahlung', nazev: 'Paiement', pole: [
      { id: 'splaceni', typ: 'volba', popis: 'Comment la dette est-elle payée ?', moznosti: [ { hodnota: 'naraz', popis: 'En une fois jusqu’à une date' }, { hodnota: 'splatky', popis: 'Par mensualités' } ] },
      { id: 'zaplatit_do', typ: 'datum', popis: 'Payer au plus tard le', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
      { id: 'splatka', typ: 'castka', popis: 'Mensualité (CHF)', placeholder: 'p. ex. 300', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'splatka_den', typ: 'cislo', popis: 'Jour du mois', placeholder: 'p. ex. 25', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mois de la première mensualité', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN du créancier', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => montantEnLettres(d.castka) },
  clanky: [
    { nadpis: 'Parties', vysvetleni: 'Qui doit et à qui.', odstavce: [
      '**Débiteur / débitrice :** {{p_jmeno}}, né(e) le {{p_narozeni}}, domicilié(e) {{p_adresa}}',
      '**Créancier / créancière :** {{k_jmeno}}, né(e) le {{k_narozeni}}, domicilié(e) {{k_adresa}}',
    ] },
    { nadpis: 'Reconnaissance', vysvetleni: 'Cause et montant de la dette.', odstavce: [
      'Je reconnais par la présente devoir au créancier le montant de **{{castka}}** (en lettres : {{castka_slovy}}).',
      'Cause de la dette : {{duvod_popis}}.',
    ] },
    { nadpis: 'Paiement', vysvetleni: 'Jusqu’à quand ou par quelles mensualités la dette est payée.', odstavce: [
      { volba: 'splaceni', uvodVzor: 'Mode de paiement (cochez) :', moznosti: {
        naraz: 'Je m’engage à payer ce montant au plus tard le {{zaplatit_do}}.',
        splatky: 'Je m’engage à payer ce montant par mensualités de {{splatka}}, échéant le {{splatka_den}} de chaque mois, à partir du mois de la première mensualité indiqué dans le plan de paiement. La dernière mensualité peut être plus basse. Si je suis en demeure pour deux mensualités consécutives, le solde devient immédiatement exigible.',
      } },
      'Les paiements sont effectués sur le compte IBAN {{ucet}} ou en espèces contre quittance. Un paiement anticipé est possible en tout temps.',
    ] },
  ],
};
