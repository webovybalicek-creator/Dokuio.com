/** Contrat de prêt à usage – prêt gratuit d’une chose (art. 305 ss CO). Sans durée ni usage déterminés, le prêteur peut réclamer la chose en tout temps (art. 310 CO). */
import type { Sablona } from '../typy';
import { CO_305, ASTUCE_IDENTITE, lienCO, pied } from './sources';

export const pretUsage: Sablona = {
  kod: 'CHFR-PRET-USAGE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de prêt à usage', podnadpis: 'prêt gratuit d’une chose selon les art. 305 ss du Code des obligations (CO)',
  souborPdf: 'contrat-de-pret-a-usage', paticka: pied('CHFR-PRET-USAGE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le prêteur / la prêteuse', vpravo: 'L’emprunteur / l’emprunteuse' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  pripominky: (d) => (d.doba === 'datum' && typeof d.vratit_do === 'string' && d.vratit_do ? [{ nazev: 'Restitution de la chose prêtée', datum: d.vratit_do, popis: 'Examinez la chose ensemble à la restitution et faites confirmer le retour.' }] : []),
  coDal: ['Imprimez deux exemplaires ; les deux parties signent les deux.', 'À la remise, examinez la chose ensemble et complétez le contrat en cas de défaut.', 'À la restitution, faites confirmer l’état de la chose.'],
  kontrola: [
    `Dans le prêt à usage, le prêteur cède gratuitement l’usage d’une chose ; l’emprunteur restitue la même chose (${lienCO('305')}). Si un prix est payé, il s’agit d’un bail.`,
    'L’emprunteur ne peut faire de la chose que l’usage convenu et ne peut pas la céder à un tiers ; sinon il répond même du cas fortuit (art. 306 CO). Il supporte les frais ordinaires d’entretien (art. 307 CO).',
    'Fixez la durée ou l’usage : si ni l’un ni l’autre n’est déterminé, le prêteur peut réclamer la chose en tout temps (art. 310 CO).',
    'Décrivez la chose exactement (fabricant, modèle, numéro de série, accessoires) et consignez son état à la remise.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_305],
  kroky: [
    { id: 'strany', nazev: 'Prêteur et emprunteur', popis: 'Le prêteur cède la chose gratuitement, l’emprunteur l’utilise et la rend.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Prêteur – prénom et nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_id', typ: 'text', popis: 'Date de naissance du prêteur (facultatif)', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse du prêteur', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'v_jmeno', typ: 'text', popis: 'Emprunteur – prénom et nom', placeholder: 'p. ex. Luc Favre', sirka: 34 },
      { id: 'v_id', typ: 'text', popis: 'Date de naissance de l’emprunteur (facultatif)', sirka: 14, polovina: true },
      { id: 'v_adresa', typ: 'text', popis: 'Adresse de l’emprunteur', sirka: 46 },
    ] },
    { id: 'vec', nazev: 'Chose', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Chose prêtée', napoveda: 'Fabricant, modèle, numéro de série, accessoires.', placeholder: 'p. ex. remorque pour voiture, plaques VD 1234, avec bâche et clé', sirka: 70 },
      { id: 'stav', typ: 'text', popis: 'État à la remise', placeholder: 'p. ex. en état de marche, rayure sur l’aile gauche', sirka: 56 },
      { id: 'hodnota', typ: 'castka', popis: 'Valeur de la chose (CHF, facultatif)', napoveda: 'Pour le cas de perte ou de destruction.', sirka: 14, polovina: true },
      { id: 'ucel', typ: 'text', popis: 'Usage prévu', placeholder: 'p. ex. déménagement', sirka: 46 },
    ] },
    { id: 'doba', nazev: 'Durée et restitution', pole: [
      { id: 'predano', typ: 'datum', popis: 'Date de la remise', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'doba', typ: 'volba', popis: 'Pour combien de temps', moznosti: [ { hodnota: 'datum', popis: 'Jusqu’à une date déterminée' }, { hodnota: 'ucel', popis: 'Jusqu’à ce que l’usage soit accompli' } ] },
      { id: 'vratit_do', typ: 'datum', popis: 'Restitution au plus tard le', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
      { id: 'misto_vraceni', typ: 'text', popis: 'Lieu de restitution', placeholder: 'p. ex. à l’adresse du prêteur', sirka: 46 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parties', odstavce: ['**Prêteur / prêteuse :** {{p_jmeno}}, né(e) le {{p_id}}, {{p_adresa}} (ci-après « prêteur »)', '**Emprunteur / emprunteuse :** {{v_jmeno}}, né(e) le {{v_id}}, {{v_adresa}} (ci-après « emprunteur »)'] },
    { nadpis: 'Objet du prêt', vysvetleni: 'Le prêteur permet l’usage gratuit de la chose.', odstavce: [
      'Le prêteur cède gratuitement à l’emprunteur l’usage de la chose suivante : {{vec}}.',
      'État à la remise : {{stav}}. Valeur de la chose : {{hodnota}}.',
      'La chose est cédée pour l’usage suivant : {{ucel}}. Le prêteur n’a connaissance d’aucun défaut caché qu’il n’aurait pas signalé.',
    ] },
    { nadpis: 'Durée et restitution', odstavce: [
      'La chose a été remise le {{predano}}.',
      { volba: 'doba', uvodVzor: 'Durée (cochez) :', moznosti: { datum: 'Le prêt prend fin le {{vratit_do}}. L’emprunteur restitue la chose au plus tard ce jour-là.', ucel: 'Le prêt prend fin lorsque l’usage convenu est accompli. L’emprunteur restitue ensuite la chose sans délai.' } },
      'L’emprunteur restitue la chose au lieu suivant : {{misto_vraceni}}, dans l’état où il l’a reçue, sous réserve de l’usure résultant d’un usage conforme au contrat.',
      'Le prêteur peut réclamer la chose avant le terme si l’emprunteur en fait un usage contraire au contrat, la détériore ou la cède à un tiers, ou s’il en a lui-même un besoin urgent et imprévu (art. 309 CO). Le prêt à usage prend fin au décès de l’emprunteur (art. 311 CO).',
    ] },
    { nadpis: 'Usage de la chose', vysvetleni: 'Comment la chose est utilisée et qui supporte quels frais.', odstavce: [
      'L’emprunteur fait de la chose un usage conforme au contrat et la protège contre les dommages, la perte et la destruction.',
      'L’emprunteur ne cède pas la chose à des tiers sans l’autorisation du prêteur.',
      'L’emprunteur supporte les frais ordinaires d’entretien (art. 307 CO). Il signale sans délai au prêteur les réparations importantes.',
    ] },
    { nadpis: 'Dispositions finales', odstavce: ['Pour le surplus, les dispositions sur le prêt à usage (art. 305 ss CO) sont applicables.', 'Toute modification requiert la forme écrite. Le contrat est établi en deux exemplaires ; chaque partie en reçoit un.'] },
  ],
};
