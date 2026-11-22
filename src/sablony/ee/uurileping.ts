/**
 * Eluruumi üürileping – Eesti (VÕS 271 jj). Tähtajatu üürilepingu võib korraliselt üles öelda vähemalt 3 kuud ette (VÕS 312 lg 1);
 * eluruumi tagatisraha hoiustatakse krediidiasutuses oma varast eraldi (VÕS 308).
 */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_ISIK, JALUS } from './allikad';

export const uurileping: Sablona = {
  kod: 'EE-UUR', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Eluruumi üürileping', podnadpis: 'korteri või maja üürimine elamiseks (võlaõigusseaduse § 271 jj)',
  souborPdf: 'uurileping', paticka: JALUS('EE-UUR'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üürileandja', vpravo: 'üürnik' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Allkirjastage leping kahes eksemplaris või digitaalselt.', 'Võtmete üleandmisel koostage üleandmise akt arvestite näitudega.', 'Üürileandja deklareerib üüritulu oma tuludeklaratsioonis.'],
  kontrola: [
    `Tähtajatu üürilepingu võib kumbki pool korraliselt üles öelda, teatades sellest vähemalt kolm kuud ette ([VÕS § 312](${VOS.url})). Tähtajalist lepingut korraliselt üles öelda ei saa.`,
    'Eluruumi tagatisraha hoiustab üürileandja krediidiasutuses oma varast eraldi (VÕS § 308). Kirjutage, millal ja kuidas tagatis tagastatakse.',
    'Leppige selgelt kokku kõrvalkulud (kommunaalmaksed, elekter, vesi, internet) ja nende tasumise viis.',
    'Koostage üleandmise akt koos arvestite näitude ja fotodega – see aitab vaidlustes tagatise üle.',
    NOU_ISIK,
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Üürileandja ja üürnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Üürileandja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Üürileandja aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Üürnik – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Üürniku praegune aadress', sirka: 46 },
    ] },
    { id: 'eluruum', nazev: 'Eluruum', pole: [
      { id: 'byt', typ: 'text', popis: 'Eluruumi aadress', placeholder: 'nt Tartu mnt 25-12, 10115 Tallinn', sirka: 46 },
      { id: 'pind', typ: 'cislo', popis: 'Üldpind', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'mobleeritud', typ: 'volba', popis: 'Sisustus', moznosti: [ { hodnota: 'jah', popis: 'möbleeritud (loetelu üleandmise aktis)' }, { hodnota: 'ei', popis: 'möbleerimata' } ] },
    ] },
    { id: 'tingimused', nazev: 'Tähtaeg ja üür', pole: [
      { id: 'od', typ: 'datum', popis: 'Üüri algus', sirka: 14, polovina: true },
      { id: 'tahtaeg', typ: 'volba', popis: 'Lepingu kestus', moznosti: [ { hodnota: 'tahtajatu', popis: 'tähtajatu' }, { hodnota: 'tahtajaline', popis: 'tähtajaline' } ] },
      { id: 'do', typ: 'datum', popis: 'Üür kuni', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tahtaeg', je: 'tahtajaline' } },
      { id: 'najemne', typ: 'castka', popis: 'Kuuüür (eurot)', sirka: 12, polovina: true },
      { id: 'paev', typ: 'cislo', popis: 'Üür tasuda kuu … kuupäevaks', placeholder: 'nt 5', sirka: 6, polovina: true },
      { id: 'tagatis', typ: 'castka', popis: 'Tagatisraha (eurot)', napoveda: 'Tavaliselt ühe kuni kahe kuu üür.', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Üürileandja IBAN', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30 },
      { id: 'korvalkulud', typ: 'text', popis: 'Kõrvalkulud', placeholder: 'nt kommunaalmaksed, elekter ja internet tasub üürnik arvete alusel', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemne_sonadega: (d) => summaSonadega(d.najemne), tagatis_sonadega: (d) => summaSonadega(d.tagatis) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Üürileandja:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}', '**Üürnik:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}'] },
    { nadpis: 'Üüritav eluruum', vysvetleni: 'Milline eluruum üüritakse.', odstavce: ['Üürileandja annab üürnikule elamiseks kasutada eluruumi aadressil {{byt}}, üldpinnaga {{pind}} m².', { volba: 'mobleeritud', uvodVzor: 'Sisustus (märkige üks variant):', moznosti: { jah: 'Eluruum antakse üürile möbleerituna; sisustus loetletakse üleandmise aktis.', ei: 'Eluruum antakse üürile möbleerimata.' } }] },
    { nadpis: 'Lepingu kestus', vysvetleni: 'Tähtajatu leping lõpeb ülesütlemisega, tähtajaline tähtaja möödumisel.', odstavce: [{ volba: 'tahtaeg', uvodVzor: 'Kestus (märkige üks variant):', moznosti: { tahtajatu: 'Leping on sõlmitud tähtajatult alates {{od}}. Kumbki pool võib lepingu korraliselt üles öelda, teatades sellest vähemalt kolm kuud ette.', tahtajaline: 'Leping on sõlmitud tähtajaliselt {{od}} kuni {{do}}.' } }, 'Lepingu lõppemisel tagastab üürnik eluruumi samas seisukorras, arvestades tavapärast kulumist.'] },
    { nadpis: 'Üür ja tagatis', vysvetleni: 'Kui palju ja millal makstakse.', odstavce: ['Kuuüür on **{{najemne}}** (sõnadega: {{najemne_sonadega}}) ja see tasutakse iga kuu {{paev}}. kuupäevaks üürileandja kontole IBAN {{iban}}.', 'Üürnik maksab tagatisraha {{tagatis}} (sõnadega: {{tagatis_sonadega}}). Üürileandja hoiustab tagatise krediidiasutuses oma varast eraldi ja tagastab selle pärast lepingu lõppemist, arvates maha üürniku võimalikud võlad.', 'Kõrvalkulud: {{korvalkulud}}.'] },
    { nadpis: 'Eluruumi kasutamine', odstavce: ['Üürnik kasutab eluruumi hoolikalt ja maja kodukorra kohaselt. Ümberehitused on lubatud ainult üürileandja kirjalikul nõusolekul.', 'Eluruumi allüürile andmine või kolmandatele isikutele kasutada andmine on lubatud ainult üürileandja nõusolekul.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse üürilepingu sätteid. Muudatused kirjalikku taasesitamist võimaldavas vormis. Leping on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
