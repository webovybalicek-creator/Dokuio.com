/** Procura – rappresentanza secondo gli art. 32 segg. CO. Non sostituisce il mandato precauzionale (art. 360 segg. CC). */
import type { Sablona } from '../typy';
import { CO_32, CC_360, CONSIGLIO_IDENTITA, piede } from './fonti';

export const procura: Sablona = {
  kod: 'CHIT-PROCURA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Procura', podnadpis: 'secondo gli art. 32 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'procura', paticka: piede('CHIT-PROCURA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il mandante / la mandante', vpravo: 'Il mandatario / la mandataria' },
  slovo: { n: 'procura', g: 'della procura', a: 'la procura', l: 'nella procura' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Scade la procura', datum: d.platnost_do }] : []),
  coDal: ['Stampate la procura e firmatela a mano.', 'Il mandatario presenta l’originale con il suo passaporto o la sua carta d’identità.'],
  kontrola: [
    'Descrivete in modo concreto l’estensione – cosa può fare esattamente la persona. Le procure troppo generiche sono spesso rifiutate.',
    'Per un fondo, una società, operazioni bancarie o autorità valgono spesso forme particolari (autenticazione della firma, moduli della banca). Informatevi prima.',
    `Per il caso della vostra incapacità di discernimento serve un mandato precauzionale (art. 360 segg. CC), soggetto a una forma più severa – questo modello non lo sostituisce ([Fedlex](${CC_360.url})).`,
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_32, CC_360],
  kroky: [
    { id: 'personen', nazev: 'Chi dà procura a chi', pole: [
      { id: 'z_jmeno', typ: 'text', popis: 'Mandante – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'z_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'm_jmeno', typ: 'text', popis: 'Mandatario – nome e cognome', placeholder: 'p. es. Giulia Bernasconi', sirka: 34 },
      { id: 'm_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'm_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'umfang', nazev: 'Estensione e validità', pole: [
      { id: 'rozsah', typ: 'textarea', popis: 'Per cosa vale la procura?', napoveda: 'In modo concreto e chiaro.', placeholder: 'p. es. ritiro di una lettera raccomandata a mio nome presso l’ufficio postale di Lugano 1', sirka: 64 },
      { id: 'platnost_do', typ: 'datum', popis: 'Valida fino al (facoltativo)', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Procura', odstavce: [
    'Il/La sottoscritto/a **{{z_jmeno}}**, nato/a il {{z_narozeni}}, domiciliato/a in {{z_adresa}} (mandante),',
    'conferisce con la presente procura a **{{m_jmeno}}**, nato/a il {{m_narozeni}}, domiciliato/a in {{m_adresa}} (mandatario),',
    'per rappresentarmi nella faccenda seguente: {{rozsah}}',
    'La procura è valida fino al {{platnost_do}}, altrimenti fino all’espletamento della faccenda o fino a revoca.',
  ] }],
};
