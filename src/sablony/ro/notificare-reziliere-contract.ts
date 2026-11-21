/** Notificare de reziliere / denunțare a unui contract de servicii – România (operator telecom, asigurare, abonament). Termene după contract; Codul civil, OUG nr. 34/2014. */
import type { Sablona } from '../typy';
import { COD_CIVIL, OUG34, SUBSOL } from './surse';

export const notificareReziliere: Sablona = {
  kod: 'RO-REZILIERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Notificare de încetare a contractului', podnadpis: 'denunțarea unui contract de servicii sau abonament',
  souborPdf: 'notificare-reziliere-contract', paticka: SUBSOL('RO-REZILIERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'client', vpravo: 'am primit (furnizor, opțional)' },
  cislovatClanky: false,
  slovo: { n: 'notificare', g: 'notificării', a: 'notificarea', l: 'notificare' },
  coDal: ['Trimiteți notificarea prin scrisoare recomandată cu confirmare de primire sau la adresa de e-mail indicată în condițiile generale.', 'Cereți confirmarea scrisă a încetării și data acesteia.'],
  kontrola: [
    'Verificați în contract sau în condițiile generale preavizul și modul de denunțare (scris, e-mail, contul de client).',
    'La contractele cu perioadă minimă (de ex. operator 24 de luni) încetarea anticipată poate atrage despăgubiri – suma este în contract.',
    'Treceți numărul contractului sau codul de client.',
    'Dacă furnizorul a modificat condițiile în defavoarea dvs., de obicei puteți denunța contractul fără penalități – invocați acest lucru.',
  ],
  zdroje: [COD_CIVIL, OUG34],
  kroky: [{ id: 'date', nazev: 'Încetarea', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Client – nume și prenume', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Furnizorul serviciului', placeholder: 'de ex. operator, asigurător, sală de fitness', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresa furnizorului', sirka: 46 },
    { id: 'serviciu', typ: 'text', popis: 'Serviciul', placeholder: 'de ex. abonament mobil, internet, abonament fitness', sirka: 40 },
    { id: 'numar', typ: 'text', popis: 'Nr. contract / cod client', sirka: 24, polovina: true },
    { id: 'cand', typ: 'volba', popis: 'Denunț contractul', moznosti: [ { hodnota: 'preaviz', popis: 'cu preavizul din contract (prima dată posibilă)' }, { hodnota: 'data', popis: 'la o dată anume' } ] },
    { id: 'data_incetare', typ: 'datum', popis: 'Data încetării', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'cand', je: 'data' } },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Notificare', odstavce: [
    '**Client:** {{p_jmeno}}, {{p_adresa}}',
    '**Furnizor:** {{k_jmeno}}, {{k_adresa}}',
    { volba: 'cand', uvodVzor: 'Încetarea (bifați o variantă):', moznosti: { preaviz: 'Prin prezenta denunț contractul pentru serviciul {{serviciu}}, nr. {{numar}}, cu respectarea preavizului din contract, respectiv la prima dată posibilă.', data: 'Prin prezenta denunț contractul pentru serviciul {{serviciu}}, nr. {{numar}}, cu data de {{data_incetare}}.' } },
    'Vă rog să îmi confirmați în scris primirea notificării și data încetării contractului și să nu mai facturați servicii după această dată.',
  ] }],
};
