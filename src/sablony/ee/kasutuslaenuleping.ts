/** Kasutuslaenuleping (asja tasuta kasutada andmine) – Eesti (VÕS 389 jj). Tagastatakse sama asi. */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_ISIK, JALUS } from './allikad';

export const kasutuslaenuleping: Sablona = {
  kod: 'EE-KASUTUSLAEN', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Kasutuslaenuleping', podnadpis: 'asja tasuta kasutada andmine (võlaõigusseaduse § 389 jj)',
  souborPdf: 'kasutuslaenuleping', paticka: JALUS('EE-KASUTUSLAEN'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'laenuandja', vpravo: 'laenaja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  pripominky: (d) => (d.kestus === 'kuupaev' && typeof d.tagastada === 'string' && d.tagastada ? [{ nazev: 'Asja tagastamine', datum: d.tagastada, popis: 'Tagastamisel kontrollige asi koos üle.' }] : []),
  coDal: ['Allkirjastage leping kahes eksemplaris.', 'Üleandmisel kontrollige asi koos üle ja kirjutage puudused üles.', 'Tagastamisel küsige kinnitust, et asi tagastati heas seisukorras.'],
  kontrola: [
    'Kasutuslaen on tasuta. Kui küsite kasutamise eest tasu, on tegemist üürilepinguga.',
    'Kirjeldage asja täpselt (mark, mudel, seerianumber, tarvikud) ja selle seisukorda üleandmisel.',
    'Laenaja kasutab asja ainult kokkulepitud viisil ega anna seda kolmandatele isikutele ilma laenuandja loata.',
    'Leppige kokku, millal asi tagastatakse – kindlaks kuupäevaks või eesmärgi täitmisel.',
    NOU_ISIK,
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Laenuandja ja laenaja', popis: 'Laenuandja annab asja tasuta kasutada; laenaja kasutab ja tagastab selle.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Laenuandja – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Laenuandja isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Laenuandja aadress', sirka: 46 },
      { id: 'v_jmeno', typ: 'text', popis: 'Laenaja – ees- ja perekonnanimi', sirka: 34 },
      { id: 'v_ik', typ: 'text', popis: 'Laenaja isikukood', sirka: 14, polovina: true },
      { id: 'v_adresa', typ: 'text', popis: 'Laenaja aadress', sirka: 46 },
    ] },
    { id: 'asi', nazev: 'Asi', pole: [
      { id: 'asi', typ: 'textarea', popis: 'Kasutada antav asi', napoveda: 'Mark, mudel, seerianumber, tarvikud.', placeholder: 'nt autohaagis, registreerimismärk 12 ABC, koos kaane ja võtmega', sirka: 64 },
      { id: 'seisukord', typ: 'text', popis: 'Seisukord üleandmisel', placeholder: 'nt korras, kriimustus vasakul poritiival', sirka: 56 },
      { id: 'vaartus', typ: 'castka', popis: 'Asja väärtus (eurot, soovi korral)', napoveda: 'Kaotsimineku või hävimise puhuks.', sirka: 12, polovina: true },
      { id: 'eesmark', typ: 'text', popis: 'Kasutamise eesmärk', placeholder: 'nt mööbli vedu kolimisel', sirka: 46 },
    ] },
    { id: 'kestus', nazev: 'Kestus ja tagastamine', pole: [
      { id: 'antud', typ: 'datum', popis: 'Üleandmise päev', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'kestus', typ: 'volba', popis: 'Kui kauaks', moznosti: [ { hodnota: 'kuupaev', popis: 'kindla kuupäevani' }, { hodnota: 'eesmark', popis: 'eesmärgi täitmiseni' } ] },
      { id: 'tagastada', typ: 'datum', popis: 'Tagastada hiljemalt', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'kestus', je: 'kuupaev' } },
      { id: 'tagastamise_koht', typ: 'text', popis: 'Tagastamise koht', placeholder: 'nt laenuandja aadressil', sirka: 46 },
      { id: 'misto', typ: 'text', popis: 'Allkirjastamise koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Allkirjastamise kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { vaartus_sonadega: (d) => summaSonadega(d.vaartus) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Laenuandja:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}', '**Laenaja:** {{v_jmeno}}, isikukood {{v_ik}}, aadress {{v_adresa}}'] },
    { nadpis: 'Lepingu ese', vysvetleni: 'Laenuandja annab asja tasuta kasutada.', odstavce: ['Laenuandja annab laenajale tasuta kasutada järgmise asja: {{asi}}.', 'Seisukord üleandmisel: {{seisukord}}. Asja väärtus: {{vaartus}}.', 'Kasutamise eesmärk: {{eesmark}}. Laenuandja kinnitab, et talle ei ole teada asja varjatud puudusi, millest ta ei teatanud.'] },
    { nadpis: 'Kestus ja tagastamine', odstavce: ['Asi anti üle {{antud}}.', { volba: 'kestus', uvodVzor: 'Kestus (märkige üks variant):', moznosti: { kuupaev: 'Kasutuslaen on kokku lepitud kuni {{tagastada}}. Selleks päevaks tagastab laenaja asja.', eesmark: 'Kasutuslaen on kokku lepitud eesmärgi täitmiseni. Laenaja tagastab asja kohe, kui ta seda enam ei vaja.' } }, 'Laenaja tagastab asja kohas {{tagastamise_koht}} samas seisukorras, arvestades tavapärast kulumist.', 'Laenuandja võib nõuda asja ennetähtaegset tagastamist, kui laenaja kasutab seda lepinguvastaselt või annab selle loata kolmandale isikule või kui laenuandja vajab asja ettenägematu asjaolu tõttu ise.'] },
    { nadpis: 'Asja kasutamine', vysvetleni: 'Kuidas asja kasutatakse ja kes mida maksab.', odstavce: ['Laenaja kasutab asja hoolikalt, ainult lepingu kohaselt ja kaitseb seda kahjustumise, kaotsimineku ja hävimise eest.', 'Laenaja ei anna asja kolmandatele isikutele ilma laenuandja loata.', 'Tavapärased hoolduskulud kannab laenaja. Suuremast remondivajadusest teatab ta kohe laenuandjale.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse kasutuslaenulepingu sätteid.', 'Muudatused kirjalikus vormis. Leping on koostatud kahes samaväärses eksemplaris, kummalegi poolele üks.'] },
  ],
};
