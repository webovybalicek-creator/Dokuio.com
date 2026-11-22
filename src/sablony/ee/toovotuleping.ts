/** Töövõtuleping (meister, remont, renoveerimine) – Eesti (VÕS 635 jj). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_ISIK, JALUS } from './allikad';

export const toovotuleping: Sablona = {
  kod: 'EE-TOOVOTT', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Töövõtuleping', podnadpis: 'tööde tellimine meistrilt või ehitusfirmalt (võlaõigusseaduse § 635 jj)',
  souborPdf: 'toovotuleping', paticka: JALUS('EE-TOOVOTT'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'tellija', vpravo: 'töövõtja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Allkirjastage leping kahes eksemplaris või digitaalselt.', 'Vastuvõtmisel kontrollige tööd ja kirjutage puudused üles.', 'Küsige iga makse kohta arvet.'],
  kontrola: [
    'Kirjeldage tööd täpselt (tööd, materjalid, kogused) – mis on kirja panemata, seda on kerge vaidlustada.',
    'Määrake valmimise tähtaeg ja see, mis juhtub hilinemisel.',
    'Vältige suurt ettemaksu; tasu makske pärast töö vastuvõtmist.',
    'Vastuvõtmisel kontrollige tööd; puuduste korral võite nõuda nende kõrvaldamist või tasu alandamist.',
    NOU_ISIK,
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Tellija ja töövõtja', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Tellija – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Tellija aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Töövõtja – nimi või ärinimi', sirka: 34 },
      { id: 'k_kood', typ: 'text', popis: 'Töövõtja isiku- või registrikood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Töövõtja aadress', sirka: 46 },
    ] },
    { id: 'too', nazev: 'Töö', pole: [
      { id: 'too', typ: 'textarea', popis: 'Töö kirjeldus', placeholder: 'nt vannitoa renoveerimine: vanade plaatide eemaldamine, 12 m² uusi plaate, dušinurga ja valamu paigaldus', sirka: 64 },
      { id: 'koht', typ: 'text', popis: 'Töö tegemise koht', sirka: 46 },
      { id: 'materjal', typ: 'volba', popis: 'Materjalid', moznosti: [ { hodnota: 'toovotja', popis: 'hangib töövõtja (hinna sees)' }, { hodnota: 'tellija', popis: 'hangib tellija' } ] },
      { id: 'algus', typ: 'datum', popis: 'Tööde algus', sirka: 14, polovina: true },
      { id: 'valmis', typ: 'datum', popis: 'Valmis hiljemalt', sirka: 14, polovina: true },
    ] },
    { id: 'tasu', nazev: 'Tasu', pole: [
      { id: 'cena', typ: 'castka', popis: 'Kogutasu (eurot)', napoveda: 'Kirjutage, kas käibemaks sisaldub.', sirka: 12, polovina: true },
      { id: 'ettemaks', typ: 'castka', popis: 'Ettemaks (eurot, soovi korral)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Töövõtja IBAN', placeholder: 'EE38 …', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_sonadega: (d) => summaSonadega(d.cena) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Tellija:** {{p_jmeno}}, aadress {{p_adresa}}', '**Töövõtja:** {{k_jmeno}}, isiku- või registrikood {{k_kood}}, {{k_adresa}}'] },
    { nadpis: 'Lepingu ese', vysvetleni: 'Mida täpselt tehakse ja kus.', odstavce: ['Töövõtja kohustub tegema järgmise töö: {{too}}, aadressil {{koht}}.', { volba: 'materjal', uvodVzor: 'Materjalid (märkige üks variant):', moznosti: { toovotja: 'Materjalid hangib töövõtja; nende maksumus sisaldub tasus.', tellija: 'Materjalid hangib tellija õigeaegselt ja sobivas kvaliteedis.' } }, 'Töövõtja teeb töö hoolikalt, heade tavade ja kehtivate nõuete kohaselt.'] },
    { nadpis: 'Tähtajad', odstavce: ['Tööd algavad {{algus}} ja valmivad hiljemalt {{valmis}}.', 'Kui töövõtja hilineb, võib tellija anda mõistliku lisatähtaja ja selle tulemusteta möödumisel lepingust taganeda.'] },
    { nadpis: 'Tasu', odstavce: ['Kogutasu on **{{cena}}** (sõnadega: {{cena_sonadega}}).', 'Tellija maksab ettemaksu {{ettemaks}} ja ülejäänud summa pärast olulise puuduseta töö vastuvõtmist kontole IBAN {{iban}}. Töövõtja esitab iga makse kohta arve.', 'Lisatöid tehakse ja tasutakse ainult kirjaliku kokkuleppe alusel.'] },
    { nadpis: 'Vastuvõtmine ja puudused', odstavce: ['Töö üleandmisel kontrollivad pooled selle koos üle ja kirjutavad üles võimalikud puudused.', 'Töövõtja kõrvaldab puudused tasuta mõistliku aja jooksul. Muus osas kohaldatakse võlaõigusseaduse töövõtulepingu sätteid.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Muudatused kirjalikku taasesitamist võimaldavas vormis. Leping on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
