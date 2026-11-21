/**
 * Reclamație pentru produs neconform – România (OUG nr. 140/2021). Vânzătorul răspunde pentru neconformitatea existentă la livrare
 * care se manifestă în 2 ani; consumatorul cere mai întâi aducerea în conformitate (reparare sau înlocuire), apoi reducerea prețului sau rezoluțiunea.
 */
import type { Sablona } from '../typy';
import { OUG140, COD_CIVIL, SUBSOL } from './surse';

export const reclamatie: Sablona = {
  kod: 'RO-RECLAMATIE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Reclamație pentru produs neconform', podnadpis: 'sesizarea lipsei de conformitate și cererea de remediere',
  souborPdf: 'reclamatie-produs-neconform', paticka: SUBSOL('RO-RECLAMATIE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'consumator', vpravo: 'am primit (vânzător, data)' },
  slovo: { n: 'reclamație', g: 'reclamației', a: 'reclamația', l: 'reclamație' },
  coDal: ['Predați reclamația personal și cereți confirmarea primirii sau trimiteți-o prin scrisoare recomandată.', 'Atașați bonul fiscal, factura sau altă dovadă a cumpărării.'],
  kontrola: [
    'Vânzătorul răspunde pentru orice lipsă de conformitate existentă la livrare care se manifestă în 2 ani de la livrare (OUG nr. 140/2021).',
    'Puteți cere mai întâi aducerea în conformitate – reparare sau înlocuire, gratuit și într-un termen rezonabil; reducerea prețului sau rezoluțiunea contractului vin în discuție dacă remedierea nu reușește.',
    'Informați vânzătorul cât mai curând după ce constatați problema și descrieți-o exact.',
    'Dacă vânzătorul nu răspunde, vă puteți adresa Autorității Naționale pentru Protecția Consumatorilor (ANPC).',
  ],
  zdroje: [OUG140, COD_CIVIL],
  kroky: [
    { id: 'parti', nazev: 'Consumatorul și vânzătorul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Nume și prenume', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
      { id: 'p_tel', typ: 'text', popis: 'Telefon sau e-mail', sirka: 30 },
      { id: 'k_jmeno', typ: 'text', popis: 'Vânzătorul', placeholder: 'de ex. numele magazinului', sirka: 40 },
      { id: 'k_adresa', typ: 'text', popis: 'Adresa vânzătorului', sirka: 46 },
    ] },
    { id: 'produs', nazev: 'Produsul și neconformitatea', pole: [
      { id: 'produs', typ: 'text', popis: 'Produsul', placeholder: 'de ex. mașină de spălat Bosch, modelul …', sirka: 56 },
      { id: 'cumparat', typ: 'datum', popis: 'Cumpărat la', sirka: 14, polovina: true },
      { id: 'bon', typ: 'text', popis: 'Nr. bonului fiscal sau al facturii', sirka: 20, polovina: true },
      { id: 'constatat', typ: 'datum', popis: 'Neconformitate constatată la', sirka: 14, polovina: true },
      { id: 'descriere', typ: 'textarea', popis: 'Descrierea exactă a neconformității', placeholder: 'de ex. mașina se oprește la centrifugare și afișează eroarea E18', sirka: 64 },
      { id: 'cerere', typ: 'volba', popis: 'Solicit', moznosti: [ { hodnota: 'reparare', popis: 'repararea gratuită' }, { hodnota: 'inlocuire', popis: 'înlocuirea cu un produs nou' }, { hodnota: 'reducere', popis: 'reducerea prețului' }, { hodnota: 'rezolutiune', popis: 'rezoluțiunea contractului și restituirea prețului' } ] },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Consumatorul și vânzătorul', odstavce: ['**Consumator:** {{p_jmeno}}, {{p_adresa}}, {{p_tel}}', '**Vânzător:** {{k_jmeno}}, {{k_adresa}}'] },
    { nadpis: 'Sesizarea neconformității', odstavce: ['La data de {{cumparat}} am cumpărat de la dumneavoastră: {{produs}}, bon fiscal / factură nr. {{bon}}.', 'La data de {{constatat}} am constatat următoarea lipsă de conformitate: {{descriere}}', { volba: 'cerere', uvodVzor: 'Solicitarea (bifați o variantă):', moznosti: { reparare: 'Solicit aducerea produsului în conformitate prin reparare gratuită, într-un termen rezonabil.', inlocuire: 'Solicit aducerea în conformitate prin înlocuirea gratuită cu un produs conform, într-un termen rezonabil.', reducere: 'Solicit reducerea proporțională a prețului.', rezolutiune: 'Declar rezoluțiunea contractului și solicit restituirea prețului.' } }, 'Atașez copia documentului de cumpărare. Vă rog să îmi răspundeți în scris.'] },
  ],
};
