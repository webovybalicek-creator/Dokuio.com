/** Laenuleping eraisikute vahel – Eesti (VÕS 396 jj). Nõude aegumine 3 aastat (TsÜS 146), tunnustamine katkestab aegumise (TsÜS 158). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, TSUS, NOU_ISIK, JALUS } from './allikad';

export const laenuleping: Sablona = {
  kod: 'EE-LAEN', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Laenuleping', podnadpis: 'rahalaen eraisikute vahel (võlaõigusseaduse § 396 jj)',
  souborPdf: 'laenuleping', paticka: JALUS('EE-LAEN'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'laenuandja', vpravo: 'laenusaaja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Printige leping kahes eksemplaris ja allkirjastage mõlemad – või allkirjastage see digitaalselt.', 'Kandke raha üle pangaülekandega selgitusega „laen lepingu alusel“.', 'Märkige osamaksete kuupäevad kalendrisse.'],
  kontrola: [
    'Andke laen üle pangaülekandega – maksekorraldus tõendab, et raha anti.',
    'Kui soovite intressi, kirjutage see lepingusse selgelt; ülemäära kõrge intress võib olla heade kommete vastane.',
    'Leppige kokku, mis juhtub osamaksete hilinemisel (nt lepingu ülesütlemine ja kogu jäägi nõudmine).',
    `Tehingust tuleneva nõude aegumistähtaeg on 3 aastat, tahtliku rikkumise korral 10 aastat; võla tunnustamine katkestab aegumise ([TsÜS § 146, § 158](${TSUS.url})).`,
    NOU_ISIK,
  ],
  zdroje: [VOS, TSUS],
  kroky: [
    { id: 'pooled', nazev: 'Laenuandja ja laenusaaja', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Laenuandja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Laenusaaja – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    ] },
    { id: 'laen', nazev: 'Laen ja tagastamine', pole: [
      { id: 'castka', typ: 'castka', popis: 'Laenusumma (eurot)', sirka: 12, polovina: true },
      { id: 'andmine', typ: 'volba', popis: 'Raha üleandmine', moznosti: [ { hodnota: 'pank', popis: 'laenusaaja pangakontole' }, { hodnota: 'sularaha', popis: 'sularahas allkirjastamisel' } ] },
      { id: 'k_iban', typ: 'text', popis: 'Laenusaaja IBAN', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30, zobrazitKdyz: { pole: 'andmine', je: 'pank' } },
      { id: 'tagastamine', typ: 'volba', popis: 'Tagastamine', moznosti: [ { hodnota: 'korraga', popis: 'korraga, kindlaks kuupäevaks' }, { hodnota: 'osadena', popis: 'igakuiste osamaksetena' } ] },
      { id: 'tahtaeg', typ: 'datum', popis: 'Tagastada hiljemalt', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tagastamine', je: 'korraga' } },
      { id: 'osamakse', typ: 'castka', popis: 'Igakuine osamakse (eurot)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'tagastamine', je: 'osadena' } },
      { id: 'esimene', typ: 'datum', popis: 'Esimene osamakse', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tagastamine', je: 'osadena' } },
      { id: 'intress', typ: 'volba', popis: 'Intress', moznosti: [ { hodnota: 'ei', popis: 'intressita' }, { hodnota: 'jah', popis: 'kokkulepitud intressiga' } ] },
      { id: 'intressimaar', typ: 'text', popis: 'Aastane intressimäär', placeholder: 'nt 4 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'intress', je: 'jah' } },
      { id: 'p_iban', typ: 'text', popis: 'Laenuandja IBAN (tagastamiseks)', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Laenuandja:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}', '**Laenusaaja:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}'] },
    { nadpis: 'Lepingu ese', odstavce: ['Laenuandja annab laenusaajale laenuks **{{castka}}** (sõnadega: {{castka_sonadega}}) ja laenusaaja kohustub tagastama sama summa.', { volba: 'andmine', uvodVzor: 'Raha üleandmine (märkige üks variant):', moznosti: { pank: 'Laenuandja kannab summa laenusaaja pangakontole IBAN {{k_iban}}.', sularaha: 'Laenusaaja sai summa sularahas lepingu allkirjastamisel, mida ta kinnitab oma allkirjaga.' } }] },
    { nadpis: 'Tagastamine', odstavce: [{ volba: 'tagastamine', uvodVzor: 'Tagastamise viis (märkige üks variant):', moznosti: { korraga: 'Laenusaaja tagastab kogu summa hiljemalt {{tahtaeg}}.', osadena: 'Laenusaaja tagastab summa igakuiste osamaksetena {{osamakse}}, esimene {{esimene}} ja iga järgmine iga kuu samal kuupäeval kuni täieliku tagastamiseni.' } }, 'Maksed tehakse laenuandja kontole IBAN {{p_iban}}. Laenusaaja võib laenu ka ennetähtaegselt tagastada.', 'Kui laenusaaja jääb kahe osamaksega hiljaks, võib laenuandja lepingu kirjaliku teatega üles öelda ja nõuda kogu jäägi tasumist.'] },
    { nadpis: 'Intress', odstavce: [{ volba: 'intress', uvodVzor: 'Intress (märkige üks variant):', moznosti: { ei: 'Laen on intressita.', jah: 'Laenusaaja maksab tagastamata summalt intressi {{intressimaar}} aastas.' } }, 'Maksega viivitamise korral maksab laenusaaja viivist võlaõigusseaduse § 113 järgi.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse laenulepingu sätteid.', 'Leping on koostatud kahes samaväärses eksemplaris, millest kumbki pool sai ühe.'] },
  ],
};
