/** Notificare de denunțare a contractului de închiriere de către chiriaș – România (Codul civil). Preaviz conform contractului și legii. */
import type { Sablona } from '../typy';
import { COD_CIVIL, SUBSOL } from './surse';

export const denuntareInchiriere: Sablona = {
  kod: 'RO-DENUNTARE-INCHIRIERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Notificare de denunțare a contractului de închiriere', podnadpis: 'denunțarea unilaterală de către chiriaș, cu preaviz',
  souborPdf: 'denuntare-contract-inchiriere', paticka: SUBSOL('RO-DENUNTARE-INCHIRIERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'chiriaș', vpravo: 'am primit (proprietar, data)' },
  cislovatClanky: false,
  slovo: { n: 'notificare', g: 'notificării', a: 'notificarea', l: 'notificare' },
  coDal: ['Predați notificarea sub semnătură de primire sau trimiteți-o prin scrisoare recomandată cu confirmare de primire.', 'În ziua eliberării semnați procesul-verbal cu indexurile contoarelor.'],
  kontrola: [
    'Respectați preavizul din contract – curge de la data la care proprietarul primește notificarea.',
    'La contractul pe durată determinată verificați dacă acesta permite denunțarea înainte de termen; altfel încercați un acord de încetare.',
    'Stabiliți ziua predării cheilor și restituirea garanției.',
  ],
  zdroje: [COD_CIVIL],
  kroky: [{ id: 'date', nazev: 'Denunțarea', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Chiriaș – nume și prenume', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa (locuința închiriată)', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Proprietar – nume și prenume', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Domiciliul proprietarului', sirka: 46 },
    { id: 'contract_din', typ: 'datum', popis: 'Contractul de închiriere din', sirka: 14, polovina: true },
    { id: 'preaviz', typ: 'cislo', popis: 'Preavizul din contract', placeholder: 'de ex. 60', jednotka: 'zile', sirka: 6, polovina: true },
    { id: 'eliberare', typ: 'datum', popis: 'Data estimată a eliberării', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN pentru restituirea garanției', placeholder: 'RO49 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Notificare', odstavce: [
    '**Chiriaș:** {{p_jmeno}}, {{p_adresa}}',
    '**Proprietar:** {{k_jmeno}}, {{k_adresa}}',
    'Prin prezenta denunț contractul de închiriere din {{contract_din}} pentru locuința situată la adresa {{p_adresa}}, cu un preaviz de {{preaviz}} zile, care curge de la primirea prezentei notificări.',
    'Voi elibera și preda locuința la data de {{eliberare}}. Vă rog să îmi restituiți garanția în contul IBAN {{iban}}, reținând numai eventualele sume constatate la predare.',
  ] }],
};
