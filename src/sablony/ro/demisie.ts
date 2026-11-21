/**
 * Demisie – România (Codul muncii art. 81). Notificare scrisă, fără motivare; preavizul este cel din contractul individual de muncă,
 * cel mult 20 de zile lucrătoare (funcții de execuție) sau 45 de zile lucrătoare (funcții de conducere). Angajatorul este obligat să înregistreze demisia.
 */
import type { Sablona } from '../typy';
import { CODUL_MUNCII, SUBSOL } from './surse';

export const demisie: Sablona = {
  kod: 'RO-DEMISIE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Demisie', podnadpis: 'notificarea salariatului privind încetarea contractului individual de muncă',
  souborPdf: 'demisie', paticka: SUBSOL('RO-DEMISIE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'salariat', vpravo: 'înregistrat de angajator (nr., data și semnătura)' },
  cislovatClanky: false,
  slovo: { n: 'demisie', g: 'demisiei', a: 'demisia', l: 'demisie' },
  coDal: ['Depuneți demisia la registratura angajatorului și cereți număr de înregistrare pe exemplarul dvs., sau trimiteți-o prin scrisoare recomandată.', 'Preavizul curge de la data înregistrării demisiei.', 'Stabiliți efectuarea concediului de odihnă rămas.'],
  kontrola: [
    'Salariatul nu este obligat să își motiveze demisia (art. 81 Codul muncii).',
    'Preavizul este cel din contractul individual de muncă sau din contractul colectiv și nu poate fi mai mare de 20 de zile lucrătoare pentru funcțiile de execuție, respectiv 45 de zile lucrătoare pentru funcțiile de conducere.',
    'Angajatorul este obligat să înregistreze demisia; dacă refuză, puteți dovedi demisia prin orice mijloc de probă.',
    'Angajatorul poate renunța la preaviz, total sau parțial. Dacă angajatorul nu își îndeplinește obligațiile din contract, puteți demisiona fără preaviz.',
  ],
  zdroje: [CODUL_MUNCII],
  kroky: [{ id: 'date', nazev: 'Salariatul și angajatorul', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Salariat – nume și prenume', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Angajator', placeholder: 'de ex. Exemplu SRL', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Sediul angajatorului', sirka: 46 },
    { id: 'functie', typ: 'text', popis: 'Funcția', placeholder: 'de ex. vânzătoare', sirka: 34 },
    { id: 'contract_nr', typ: 'text', popis: 'Contractul individual de muncă nr. / din', placeholder: 'de ex. 112 din 03.02.2025', sirka: 24, polovina: true },
    { id: 'preaviz', typ: 'cislo', popis: 'Preavizul', placeholder: 'de ex. 20', jednotka: 'zile lucrătoare', sirka: 6, polovina: true },
    { id: 'renuntare', typ: 'volba', popis: 'Solicitați renunțarea la preaviz?', moznosti: [ { hodnota: 'nu', popis: 'nu' }, { hodnota: 'da', popis: 'da, încetare la o dată anume' } ] },
    { id: 'data_incetare', typ: 'datum', popis: 'Data propusă a încetării', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'renuntare', je: 'da' } },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Demisie', odstavce: [
    '**Salariat:** {{p_jmeno}}, {{p_adresa}}',
    '**Angajator:** {{k_jmeno}}, {{k_adresa}}',
    'În temeiul art. 81 din Codul muncii, vă notific încetarea contractului individual de muncă nr. {{contract_nr}}, pentru funcția de {{functie}}, prin demisie.',
    'Preavizul este de {{preaviz}} zile lucrătoare și curge de la data înregistrării prezentei.',
    { volba: 'renuntare', uvodVzor: 'Solicitare (bifați o variantă):', moznosti: { nu: 'Vă rog să îmi permiteți efectuarea concediului de odihnă rămas până la expirarea preavizului sau să îmi plătiți compensația pentru concediul neefectuat.', da: 'Vă rog să renunțați la preaviz, astfel încât contractul să înceteze la data de {{data_incetare}}. Dacă nu sunteți de acord, contractul încetează la expirarea preavizului.' } },
  ] }],
};
