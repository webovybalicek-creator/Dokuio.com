/** Võla tasumise ajatamise kokkulepe – Eesti. Võla tunnustamine katkestab aegumise (TsÜS § 158). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, TSUS, NOU_ISIK, JALUS } from './allikad';

export const maksegraafikuKokkulepe: Sablona = {
  kod: 'EE-MAKSEGRAAFIK', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Maksegraafiku kokkulepe', podnadpis: 'võla tunnustamine ja tasumine osamaksetena',
  souborPdf: 'maksegraafiku-kokkulepe', paticka: JALUS('EE-MAKSEGRAAFIK'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'võlausaldaja', vpravo: 'võlgnik' },
  slovo: { n: 'kokkulepe', g: 'kokkuleppe', a: 'kokkulepet', l: 'kokkuleppes' },
  coDal: ['Allkirjastage kokkulepe kahes eksemplaris või digitaalselt.', 'Märkige osamaksete kuupäevad kalendrisse.', 'Hoidke alles maksete tõendid.'],
  kontrola: [
    `Kokkuleppega tunnustab võlgnik võlga; tunnustamine katkestab aegumise ja aegumistähtaeg hakkab uuesti kulgema ([TsÜS § 158](${TSUS.url})).`,
    'Kirjutage, mis juhtub, kui osamakse jääb tasumata (nt kogu jäägi sissenõutavaks muutumine).',
    'Makske pangaülekandega – väljavõte tõendab iga osamakset.',
    NOU_ISIK,
  ],
  zdroje: [VOS, TSUS],
  kroky: [
    { id: 'pooled', nazev: 'Võlausaldaja ja võlgnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Võlausaldaja – nimi või ärinimi', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Võlausaldaja aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Võlgnik – ees- ja perekonnanimi', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Võlgniku isikukood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Võlgniku aadress', sirka: 46 },
    ] },
    { id: 'graafik', nazev: 'Võlg ja osamaksed', pole: [
      { id: 'castka', typ: 'castka', popis: 'Võla kogusumma (eurot)', sirka: 12, polovina: true },
      { id: 'pohjus', typ: 'text', popis: 'Võla alus', placeholder: 'nt tasumata ostuhind 01.06.2026 sõiduki ostu-müügilepingu järgi', sirka: 56 },
      { id: 'osamakse', typ: 'castka', popis: 'Kuu osamakse (eurot)', sirka: 12, polovina: true },
      { id: 'arv', typ: 'cislo', popis: 'Osamaksete arv', sirka: 6, polovina: true },
      { id: 'paev', typ: 'cislo', popis: 'Osamakse tasutakse iga kuu …. kuupäevaks', placeholder: 'nt 15', sirka: 6, polovina: true },
      { id: 'esimene', typ: 'datum', popis: 'Esimene osamakse', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Võlausaldaja IBAN', placeholder: 'EE38 …', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka), osamakse_sonadega: (d) => summaSonadega(d.osamakse) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Võlausaldaja:** {{p_jmeno}}, {{p_adresa}}', '**Võlgnik:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}'] },
    { nadpis: 'Võla tunnustamine', vysvetleni: 'Võlgnik kinnitab, et võlg on olemas ja kui suur see on.', odstavce: ['Võlgnik tunnustab, et tal on kokkuleppe allkirjastamise päeval võlausaldaja ees võlg **{{castka}}** (sõnadega: {{castka_sonadega}}), mis tuleneb järgmisest: {{pohjus}}.'] },
    { nadpis: 'Tasumine osamaksetena', odstavce: ['Võlausaldaja nõustub, et võlgnik tasub võla {{arv}} igakuise osamaksena summas **{{osamakse}}** (sõnadega: {{osamakse_sonadega}}); viimane osamakse võrdub võla jäägiga.', 'Esimene osamakse tasutakse {{esimene}} ja iga järgmine hiljemalt iga kuu {{paev}}. kuupäevaks võlausaldaja kontole IBAN {{iban}}.', 'Võlgnik võib võla või selle osa tasuda ka ennetähtaegselt.'] },
    { nadpis: 'Maksega viivitamine', odstavce: ['Kui võlgnik viivitab kahe osamakse tasumisega, võib võlausaldaja kirjaliku teatega nõuda kohe kogu võla jäägi tasumist koos seadusjärgse viivisega.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Kokkuleppes reguleerimata küsimustes kohaldatakse võlaõigusseadust. Kokkulepe on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
