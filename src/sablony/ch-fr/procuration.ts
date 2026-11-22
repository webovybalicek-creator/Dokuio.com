/** Procuration – représentation selon les art. 32 ss CO. Ne remplace pas le mandat pour cause d’inaptitude (art. 360 ss CC). */
import type { Sablona } from '../typy';
import { CO_32, CC_360, ASTUCE_IDENTITE, pied } from './sources';

export const procuration: Sablona = {
  kod: 'CHFR-PROCURATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Procuration', podnadpis: 'selon les art. 32 ss du Code des obligations (CO)',
  souborPdf: 'procuration', paticka: pied('CHFR-PROCURATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le mandant / la mandante', vpravo: 'Le mandataire / la mandataire' },
  slovo: { n: 'procuration', g: 'de la procuration', a: 'la procuration', l: 'dans la procuration' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'La procuration expire', datum: d.platnost_do }] : []),
  coDal: ['Imprimez la procuration et signez-la à la main.', 'Le mandataire présente l’original avec son passeport ou sa carte d’identité.'],
  kontrola: [
    'Décrivez concrètement l’étendue – ce que la personne peut faire exactement. Les procurations trop générales sont souvent refusées.',
    'Pour un immeuble, une société, des opérations bancaires ou des autorités, des formes particulières s’appliquent souvent (légalisation de la signature, formulaires de la banque). Renseignez-vous avant.',
    `Pour le cas de votre propre incapacité de discernement, il faut un mandat pour cause d’inaptitude (art. 360 ss CC), soumis à une forme plus stricte – ce modèle ne le remplace pas ([Fedlex](${CC_360.url})).`,
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_32, CC_360],
  kroky: [
    { id: 'personen', nazev: 'Qui donne procuration à qui', pole: [
      { id: 'z_jmeno', typ: 'text', popis: 'Mandant – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'z_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Adresse', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'm_jmeno', typ: 'text', popis: 'Mandataire – prénom et nom', placeholder: 'p. ex. Claire Dupont', sirka: 34 },
      { id: 'm_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'm_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
    ] },
    { id: 'umfang', nazev: 'Étendue et validité', pole: [
      { id: 'rozsah', typ: 'textarea', popis: 'Pour quoi la procuration est-elle valable ?', napoveda: 'Concrètement et clairement.', placeholder: 'p. ex. retrait d’une lettre recommandée à mon nom à l’office de poste de Lausanne 1', sirka: 64 },
      { id: 'platnost_do', typ: 'datum', popis: 'Valable jusqu’au (facultatif)', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Procuration', odstavce: [
    'Je soussigné(e), **{{z_jmeno}}**, né(e) le {{z_narozeni}}, domicilié(e) {{z_adresa}} (mandant),',
    'donne par la présente procuration à **{{m_jmeno}}**, né(e) le {{m_narozeni}}, domicilié(e) {{m_adresa}} (mandataire),',
    'pour me représenter dans l’affaire suivante : {{rozsah}}',
    'La procuration est valable jusqu’au {{platnost_do}}, sinon jusqu’à l’accomplissement de l’affaire ou jusqu’à révocation.',
  ] }],
};
