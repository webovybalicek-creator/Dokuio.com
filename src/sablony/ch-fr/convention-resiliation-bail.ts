/** Convention de résiliation du bail d’un commun accord – Suisse romande. Le bail peut être éteint par convention sans forme (art. 115 CO) ; l’écrit sert de preuve. */
import type { Sablona } from '../typy';
import { cislo, isoDatum, naDatum, pridejDny } from '../terminy';
import { CO, pied } from './sources';

export const conventionResiliation: Sablona = {
  kod: 'CHFR-FIN-BAIL', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-fr', jazyk: 'fr-CH',
  nazev: 'Convention de résiliation du bail', podnadpis: 'fin du bail d’un commun accord (art. 115 CO)',
  souborPdf: 'convention-resiliation-bail', paticka: pied('CHFR-FIN-BAIL'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Le bailleur / la bailleresse', vpravo: 'Le locataire / la locataire' },
  slovo: { n: 'convention', g: 'de la convention', a: 'la convention', l: 'dans la convention' },
  pripominky: (d) => {
    const out: { nazev: string; datum: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: 'Fin du bail', datum: d.konec_dne });
    const rendu = naDatum(d.odevzdani);
    if (rendu) {
      out.push({ nazev: 'Restitution du logement et état des lieux', datum: isoDatum(rendu) });
      const jours = Math.round(cislo(d.jistota_dni));
      if (jours > 0) out.push({ nazev: 'Restitution de la garantie de loyer', datum: isoDatum(pridejDny(rendu, jours)) });
    }
    return out;
  },
  coDal: [
    'Imprimez deux exemplaires ; les deux parties signent les deux.',
    'À la restitution, établissez un état des lieux avec les relevés des compteurs.',
    'Le locataire résilie l’électricité et le gaz s’ils sont à son nom.',
    'Gardez en vue la date de restitution de la garantie et le décompte des frais accessoires.',
  ],
  kontrola: [
    'Un bail peut être éteint par convention sans forme (art. 115 CO) – l’écrit permet toutefois de le prouver.',
    'Tous les bailleurs et tous les locataires doivent signer.',
    'Indiquez une date de fin précise et la date de restitution.',
    'Réglez quand la garantie de loyer est libérée et comment les frais accessoires sont décomptés.',
    'La convention remplace la résiliation, avec ses termes et délais.',
  ],
  zdroje: [CO],
  kroky: [
    { id: 'strany', nazev: 'Parties et logement', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Bailleur – nom', placeholder: 'p. ex. Jean Dupont', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresse du bailleur', placeholder: 'p. ex. Rue du Lac 12, 1003 Lausanne', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Locataire – nom', napoveda: 'S’il y a plusieurs locataires, tous.', placeholder: 'p. ex. Marie Rochat', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Date de naissance du locataire', sirka: 14, polovina: true },
      { id: 'byt', typ: 'text', popis: 'Logement (adresse, situation)', placeholder: 'p. ex. Avenue de France 7, 1004 Lausanne, 2e étage', sirka: 46 },
      { id: 'smlouva_datum', typ: 'datum', popis: 'Date du contrat de bail', sirka: 14, polovina: true },
    ] },
    { id: 'konec', nazev: 'Fin du bail', pole: [
      { id: 'konec_dne', typ: 'datum', popis: 'Le bail prend fin le', napoveda: 'Dernier jour du bail. Le loyer est dû jusqu’à cette date.', sirka: 14, polovina: true },
      { id: 'odevzdani', typ: 'datum', popis: 'Restitution du logement au plus tard le', napoveda: 'Quand le locataire rend les clés.', sirka: 14, polovina: true },
      { id: 'jistota', typ: 'volba', popis: 'Garantie de loyer', moznosti: [ { hodnota: 'odevzdani', popis: 'Restitution dans un délai fixé après la restitution du logement' }, { hodnota: 'vyuctovani', popis: 'Restitution après le décompte des frais accessoires' }, { hodnota: 'zadna', popis: 'Aucune garantie n’a été fournie' } ] },
      { id: 'jistota_dni', typ: 'cislo', popis: 'Restitution dans les (jours)', placeholder: '30', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN du locataire pour la garantie', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
      { id: 'dalsi', typ: 'textarea', popis: 'Autres conventions (facultatif)', placeholder: 'p. ex. le locataire repeint les murs avant la restitution', sirka: 64 },
      { id: 'misto', typ: 'text', popis: 'Lieu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Date', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parties', odstavce: ['**Bailleur / bailleresse :** {{p_jmeno}}, {{p_adresa}}', '**Locataire :** {{k_jmeno}}, né(e) le {{k_narozeni}}'] },
    { nadpis: 'Fin du bail', vysvetleni: 'Quand le bail prend fin et quand le logement est restitué.', odstavce: [
      'Les parties conviennent que le bail portant sur le logement {{byt}}, selon le contrat de bail du {{smlouva_datum}}, prend fin le {{konec_dne}}.',
      'Le locataire restitue le logement avec toutes les clés au plus tard le {{odevzdani}}, dans l’état où il l’a reçu, sous réserve de l’usure résultant d’un usage conforme au contrat. Un état des lieux est établi lors de la restitution.',
      'Le loyer et les acomptes sont dus jusqu’à la fin du bail. Les frais accessoires sont décomptés pour la période de décompte usuelle.',
    ] },
    { nadpis: 'Garantie et autres conventions', odstavce: [
      { volba: 'jistota', uvodVzor: 'Garantie de loyer (cochez) :', moznosti: {
        odevzdani: 'Le bailleur restitue la garantie avec les intérêts dans les {{jistota_dni}} jours suivant la restitution, sur le compte IBAN {{ucet}} ; il peut compenser les créances ouvertes découlant du bail.',
        vyuctovani: 'Le bailleur restitue la garantie avec les intérêts après le décompte des frais accessoires de la dernière période, sur le compte IBAN {{ucet}} ; il peut compenser les créances ouvertes découlant du bail.',
        zadna: 'Le locataire n’a fourni aucune garantie de loyer.',
      } },
      'Autres conventions : {{dalsi}}',
      'La convention est établie en deux exemplaires ; chaque partie en reçoit un. Elle prend effet avec la signature des deux parties.',
    ] },
  ],
};
