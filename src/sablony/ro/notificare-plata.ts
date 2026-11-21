/** Notificare de plată (punere în întârziere) – România (Codul civil). Somația debitorului cu termen de plată, înainte de instanță. */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, OG13, SUBSOL } from './surse';

export const notificarePlata: Sablona = {
  kod: 'RO-NOTIFICARE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Notificare de plată', podnadpis: 'punere în întârziere și somație înainte de acționarea în instanță',
  souborPdf: 'notificare-plata', paticka: SUBSOL('RO-NOTIFICARE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'creditor', vpravo: 'am primit (debitor, opțional)' },
  cislovatClanky: false,
  slovo: { n: 'notificare', g: 'notificării', a: 'notificarea', l: 'notificare' },
  coDal: ['Trimiteți notificarea prin scrisoare recomandată cu confirmare de primire și păstrați dovada.', 'Dacă debitorul nu plătește, puteți apela la instanță (de exemplu prin procedura ordonanței de plată).'],
  kontrola: [
    'Datoria trebuie să fie scadentă – termenul de plată din contract sau factură a expirat.',
    'De la scadență debitorul datorează dobânda legală penalizatoare (OG nr. 13/2011).',
    'Notificarea singură nu întrerupe prescripția decât dacă este urmată de chemarea în judecată în termenul prevăzut de Codul civil. Întrerupe prescripția recunoașterea datoriei de către debitor.',
    'Stabiliți un termen rezonabil (de ex. 8 sau 15 zile) și treceți exact IBAN-ul.',
  ],
  zdroje: [COD_CIVIL, OG13],
  kroky: [{ id: 'date', nazev: 'Creditorul, debitorul și datoria', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Creditor – nume și prenume sau denumire', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul creditorului', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Debitor – nume și prenume sau denumire', placeholder: 'de ex. Mihai Stan', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Domiciliul debitorului', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Suma datorată (lei)', sirka: 12, polovina: true },
    { id: 'temei', typ: 'text', popis: 'Temeiul datoriei', placeholder: 'de ex. împrumut conform contractului din 15.03.2026', sirka: 56 },
    { id: 'scadenta', typ: 'datum', popis: 'Datoria a ajuns la scadență la', sirka: 14, polovina: true },
    { id: 'termen', typ: 'datum', popis: 'Plătiți cel târziu la', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN creditor', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka) },
  clanky: [{ nadpis: 'Notificare', odstavce: [
    '**Creditor:** {{p_jmeno}}, {{p_adresa}}',
    '**Debitor:** {{k_jmeno}}, {{k_adresa}}',
    'Vă notific să îmi plătiți datoria scadentă în sumă de **{{castka}}** (în litere: {{castka_litere}}), cu titlu de: {{temei}}. Datoria a ajuns la scadență la data de {{scadenta}} și nu a fost achitată până astăzi.',
    'Vă rog să achitați suma cel târziu la data de **{{termen}}** în contul IBAN {{iban}}.',
    'Prin prezenta vă pun în întârziere. Vă atrag atenția că de la scadență datorați și dobânda legală penalizatoare. Dacă nu achitați datoria în termenul indicat, mă voi adresa instanței fără altă notificare, iar cheltuielile de judecată vor fi suportate de dumneavoastră.',
  ] }],
};
