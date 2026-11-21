/**
 * Formular de retragere din contractul încheiat la distanță sau în afara spațiilor comerciale – România (OUG nr. 34/2014).
 * 14 zile fără motivare; profesionistul rambursează plățile, inclusiv livrarea standard, în cel mult 14 zile de la informare (modelul din anexa OUG).
 */
import type { Sablona } from '../typy';
import { OUG34, SUBSOL } from './surse';

export const formularRetragere: Sablona = {
  kod: 'RO-RETRAGERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Formular de retragere', podnadpis: 'notificare de retragere din contractul încheiat la distanță',
  souborPdf: 'formular-retragere', paticka: SUBSOL('RO-RETRAGERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'consumator', vpravo: 'am primit (profesionist, opțional)' },
  cislovatClanky: false,
  slovo: { n: 'formular', g: 'formularului', a: 'formularul', l: 'formular' },
  coDal: ['Trimiteți formularul prin e-mail sau scrisoare recomandată înainte de expirarea celor 14 zile și păstrați dovada trimiterii.', 'Returnați produsul în cel mult 14 zile de la retragere.'],
  kontrola: [
    'La contractele încheiate la distanță (online, telefonic) sau în afara spațiilor comerciale consumatorul se poate retrage în 14 zile fără să indice motivul (OUG nr. 34/2014).',
    'La produse termenul curge, de regulă, din ziua în care ați intrat în posesia produsului.',
    'Este suficient să trimiteți notificarea înainte de expirarea termenului.',
    'Profesionistul vă rambursează toate plățile, inclusiv costul livrării standard, în cel mult 14 zile de la data la care a fost informat despre retragere.',
    'Costurile directe de returnare le suportă, de regulă, consumatorul, dacă profesionistul l-a informat despre aceasta.',
  ],
  zdroje: [OUG34],
  kroky: [{ id: 'date', nazev: 'Retragerea', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Profesionistul (vânzătorul)', placeholder: 'de ex. numele magazinului online', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresa sau e-mailul profesionistului', sirka: 46 },
    { id: 'produs', typ: 'textarea', popis: 'Produsul sau serviciul', placeholder: 'de ex. geacă de iarnă, mărimea M', sirka: 64 },
    { id: 'comanda', typ: 'text', popis: 'Numărul comenzii', sirka: 20, polovina: true },
    { id: 'comandat', typ: 'datum', popis: 'Comandat la', sirka: 14, polovina: true },
    { id: 'primit', typ: 'datum', popis: 'Primit la', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Numele și prenumele dvs.', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa dvs.', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN pentru rambursare (opțional)', placeholder: 'RO49 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Retragere', odstavce: [
    '**Către:** {{k_jmeno}}, {{k_adresa}}',
    'Prin prezenta vă informez că mă retrag din contractul privind vânzarea următoarelor produse sau prestarea următoarelor servicii: {{produs}}.',
    'Numărul comenzii: {{comanda}}. Comandat la {{comandat}}, primit la {{primit}}.',
    '**Consumator:** {{p_jmeno}}, {{p_adresa}}',
    'Vă rog să rambursați plățile în contul IBAN {{iban}}.',
  ] }],
};
