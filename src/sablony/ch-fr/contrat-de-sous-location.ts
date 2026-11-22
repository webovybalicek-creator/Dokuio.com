/** Contrat de sous-location d’une chambre ou d’un logement – Suisse romande (art. 262 CO : consentement du bailleur ; refus seulement pour les motifs légaux). */
import type { Sablona } from '../typy';
import { montantEnLettres } from './nombres';
import { CO_262, ASTUCE_IDENTITE, lienCO, pied } from './sources';

export const sousLocation: Sablona = {
  kod: 'CHFR-SOUS-LOCATION', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Contrat de sous-location', podnadpis: 'pour une chambre ou un logement (art. 262 CO)',
  souborPdf: 'contrat-de-sous-location', paticka: pied('CHFR-SOUS-LOCATION'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le locataire principal (sous-bailleur)', vpravo: 'Le sous-locataire' },
  slovo: { n: 'contrat', g: 'du contrat', a: 'le contrat', l: 'dans le contrat' },
  pripominky: (d) => [
    ...(typeof d.od === 'string' && d.od ? [{ nazev: 'Début de la sous-location', datum: d.od }] : []),
    ...(d.doba === 'urcita' && typeof d.do === 'string' && d.do ? [{ nazev: 'Fin de la sous-location', datum: d.do }] : []),
  ],
  coDal: ['Imprimez deux exemplaires ; les deux parties signent les deux.', 'Joignez une copie du consentement du bailleur.', 'Établissez un état des lieux à l’entrée.'],
  kontrola: [
    `Vous ne pouvez sous-louer qu’avec le consentement du bailleur (${lienCO('262')}).`,
    'Le bailleur ne peut refuser son consentement que si vous refusez de lui communiquer les conditions, si celles-ci sont abusives par rapport au bail principal ou si la sous-location lui cause des inconvénients majeurs.',
    'Vous répondez envers le bailleur si le sous-locataire utilise la chose autrement que ce qui vous est permis.',
    'La sous-location prend fin au plus tard avec le bail principal.',
    ASTUCE_IDENTITE,
  ],
  zdroje: [CO_262],
  kroky: [
    { id: 'strany', nazev: 'Locataire principal et sous-locataire', popis: 'Le locataire principal cède une chambre ou le logement au sous-locataire.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Locataire principal – nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'n_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Adresse du locataire principal', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Sous-locataire – nom', placeholder: 'p. ex. Léa Morel', sirka: 34 },
      { id: 'p_narozeni', typ: 'datum', popis: 'Date de naissance', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse actuelle du sous-locataire', sirka: 46 },
    ] },
    { id: 'byt', nazev: 'Logement et consentement', pole: [
      { id: 'byt', typ: 'text', popis: 'Logement (adresse, situation)', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne, 3e étage', sirka: 46 },
      { id: 'rozsah', typ: 'volba', popis: 'Étendue', moznosti: [ { hodnota: 'cast', popis: 'Partie du logement (chambre)' }, { hodnota: 'cely', popis: 'Logement entier' } ] },
      { id: 'cast_popis', typ: 'text', popis: 'Quelle partie', placeholder: 'p. ex. chambre de 14 m² avec usage commun de la cuisine et de la salle de bains', sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
      { id: 'pronajimatel', typ: 'text', popis: 'Bailleur (propriétaire ou gérance)', napoveda: 'Qui a autorisé la sous-location.', sirka: 34 },
      { id: 'souhlas_datum', typ: 'datum', popis: 'Date du consentement', napoveda: 'Joignez le consentement en annexe.', sirka: 14, polovina: true },
    ] },
    { id: 'platby', nazev: 'Durée et paiements', pole: [
      { id: 'od', typ: 'datum', popis: 'Sous-location dès le', sirka: 14, polovina: true },
      { id: 'doba', typ: 'volba', popis: 'Durée', moznosti: [ { hodnota: 'urcita', popis: 'Déterminée' }, { hodnota: 'neurcita', popis: 'Indéterminée' } ] },
      { id: 'do', typ: 'datum', popis: 'Sous-location jusqu’au', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
      { id: 'najemne', typ: 'castka', popis: 'Loyer mensuel (CHF)', napoveda: 'Frais accessoires compris, sauf convention contraire.', sirka: 14, polovina: true },
      { id: 'splatnost', typ: 'cislo', popis: 'Payable jusqu’au (jour du mois)', placeholder: '1', sirka: 4, polovina: true },
      { id: 'kauce', typ: 'castka', popis: 'Garantie (CHF, facultatif)', sirka: 14, polovina: true },
      { id: 'ucet', typ: 'text', popis: 'IBAN du locataire principal', placeholder: 'CH…', sirka: 30 },
      { id: 'vypoved', typ: 'cislo', popis: 'Délai de congé (mois)', placeholder: '1', sirka: 4, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemne_slovy: (d) => montantEnLettres(d.najemne) },
  clanky: [
    { nadpis: 'Parties', odstavce: [
      '**Locataire principal :** {{n_jmeno}}, né(e) le {{n_narozeni}}, {{n_adresa}} (ci-après « locataire principal »)',
      '**Sous-locataire :** {{p_jmeno}}, né(e) le {{p_narozeni}}, domicilié(e) jusqu’ici {{p_adresa}} (ci-après « sous-locataire »)',
    ] },
    { nadpis: 'Objet de la sous-location', vysvetleni: 'Ce qui est sous-loué et sur quel consentement cela repose.', odstavce: [
      { volba: 'rozsah', uvodVzor: 'Étendue (cochez) :', moznosti: { cast: 'Le locataire principal loue au sous-locataire une partie du logement {{byt}} : {{cast_popis}}.', cely: 'Le locataire principal loue au sous-locataire l’ensemble du logement {{byt}}.' } },
      'Le bailleur {{pronajimatel}} a consenti à la sous-location le {{souhlas_datum}} ; le consentement est annexé au présent contrat.',
      'La sous-location prend fin au plus tard avec le bail principal.',
    ] },
    { nadpis: 'Durée et résiliation', odstavce: [
      { volba: 'doba', uvodVzor: 'Durée (cochez) :', moznosti: { urcita: 'La sous-location commence le {{od}} et prend fin le {{do}}.', neurcita: 'La sous-location commence le {{od}} et est conclue pour une durée indéterminée.' } },
      'Elle peut être résiliée moyennant un préavis de {{vypoved}} mois pour la fin d’un mois, sous réserve des dispositions légales impératives.',
      'À la fin, le sous-locataire restitue les locaux dans l’état où il les a reçus, sous réserve de l’usure résultant d’un usage conforme au contrat.',
    ] },
    { nadpis: 'Loyer et garantie', odstavce: [
      'Le sous-locataire paie mensuellement {{najemne}} (en lettres : {{najemne_slovy}}), frais accessoires compris, jusqu’au {{splatnost}} de chaque mois sur le compte IBAN {{ucet}}.',
      'Le sous-locataire fournit une garantie de {{kauce}}. Elle est décomptée et restituée après la fin et la restitution des locaux.',
    ] },
    { nadpis: 'Dispositions finales', odstavce: [
      'Le sous-locataire respecte le règlement de maison et ne cède pas les locaux à d’autres personnes.',
      'Toute modification requiert la forme écrite. Le contrat est établi en deux exemplaires.',
    ] },
  ],
};
