/** Võla tunnustamine – Eesti. Võlgnik tunnustab võlga kirjalikult; tunnustamine katkestab aegumise ja see algab uuesti (TsÜS 158). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, TSUS, NOU_ISIK, JALUS } from './allikad';

export const volatunnistus: Sablona = {
  kod: 'EE-VOLATUNNISTUS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Võla tunnustamine', podnadpis: 'võlgniku kirjalik kinnitus võla olemasolu ja suuruse kohta',
  souborPdf: 'volatunnistus', paticka: JALUS('EE-VOLATUNNISTUS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'võlgnik', vpravo: 'võlausaldaja (soovi korral)' },
  slovo: { n: 'tunnustamine', g: 'tunnustamise', a: 'tunnustamist', l: 'tunnustamises' },
  coDal: ['Allkirjastatud originaali hoiab võlausaldaja.', 'Märkige maksetähtaeg kalendrisse.'],
  kontrola: [
    `Võla tunnustamine katkestab aegumise ja aegumistähtaeg algab uuesti ([TsÜS § 158](${TSUS.url})). Tehingust tuleneva nõude aegumistähtaeg on 3 aastat.`,
    'Kirjutage täpselt, millest võlg tuleneb (laen, hind, üür) ja selle suurus.',
    'Ilma võlgniku allkirjata ei tõenda dokument tunnustamist.',
    NOU_ISIK,
  ],
  zdroje: [TSUS, VOS],
  kroky: [
    { id: 'pooled', nazev: 'Võlgnik ja võlausaldaja', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Võlgnik – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Võlausaldaja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    ] },
    { id: 'volg', nazev: 'Võlg', pole: [
      { id: 'castka', typ: 'castka', popis: 'Võla suurus (eurot)', sirka: 12, polovina: true },
      { id: 'pohjus', typ: 'text', popis: 'Millest võlg tuleneb', placeholder: 'nt laen 10.03.2025', sirka: 46 },
      { id: 'maksmine', typ: 'volba', popis: 'Tasumine', moznosti: [ { hodnota: 'korraga', popis: 'korraga, kindlaks kuupäevaks' }, { hodnota: 'osadena', popis: 'igakuiste osamaksetena' } ] },
      { id: 'tahtaeg', typ: 'datum', popis: 'Tasuda hiljemalt', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'maksmine', je: 'korraga' } },
      { id: 'osamakse', typ: 'castka', popis: 'Igakuine osamakse (eurot)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'maksmine', je: 'osadena' } },
      { id: 'esimene', typ: 'datum', popis: 'Esimene osamakse', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'maksmine', je: 'osadena' } },
      { id: 'iban', typ: 'text', popis: 'Võlausaldaja IBAN', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Võlgnik:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}', '**Võlausaldaja:** {{p_jmeno}}, aadress {{p_adresa}}'] },
    { nadpis: 'Võla tunnustamine', odstavce: ['Võlgnik tunnustab, et võlgneb võlausaldajale **{{castka}}** (sõnadega: {{castka_sonadega}}), mis tuleneb järgmisest: {{pohjus}}.', 'Võlgnik kinnitab, et võlg on olemas selles suuruses ja sellel alusel ning tal ei ole selle vastu vastuväiteid.'] },
    { nadpis: 'Tasumine', odstavce: [{ volba: 'maksmine', uvodVzor: 'Tasumise viis (märkige üks variant):', moznosti: { korraga: 'Võlgnik tasub kogu summa hiljemalt {{tahtaeg}}.', osadena: 'Võlgnik tasub võla igakuiste osamaksetena {{osamakse}}, esimene {{esimene}} ja iga järgmine iga kuu samal kuupäeval.' } }, 'Maksed tehakse võlausaldaja kontole IBAN {{iban}}. Kui võlgnik jääb kahe osamaksega hiljaks, muutub kogu jääk kohe sissenõutavaks.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Dokument on koostatud kahes eksemplaris, millest võlausaldaja sai originaali.'] },
  ],
};
