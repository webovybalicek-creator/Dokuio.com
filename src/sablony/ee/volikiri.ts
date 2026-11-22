/** Volikiri – Eesti (TsÜS 115 jj). Kui tehing nõuab notariaalset vormi, peab ka volikiri olema notariaalselt tõestatud. */
import type { Sablona } from '../typy';
import { TSUS, OMANIK, NOU_ISIK, JALUS } from './allikad';

export const volikiri: Sablona = {
  kod: 'EE-VOLIKIRI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Volikiri', podnadpis: 'füüsilise isiku volitus esindamiseks (tsiviilseadustiku üldosa seadus)',
  souborPdf: 'volikiri', paticka: JALUS('EE-VOLIKIRI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'volitaja', vpravo: 'volitatu (soovi korral)' },
  cislovatClanky: false,
  slovo: { n: 'volikiri', g: 'volikirja', a: 'volikirja', l: 'volikirjas' },
  coDal: ['Allkirjastage volikiri omakäeliselt või digitaalselt (ID-kaart, Mobiil-ID, Smart-ID).', 'Andke volikiri volitatule; ta vajab seda koos oma isikut tõendava dokumendiga.'],
  kontrola: [
    'Kui tehing nõuab notariaalset vormi (nt kinnisasja müük), peab ka volikiri olema notariaalselt tõestatud.',
    'Kirjeldage konkreetselt, mida volitatu võib teha, ja määrake volikirja kehtivusaeg.',
    `Sõidukiga seotud toimingute jaoks saab volitusi anda ka Transpordiameti e-teeninduses ([Transpordiamet](${OMANIK.url})).`,
    'Pangad ja asutused võivad nõuda oma vormi – kontrollige eelnevalt.',
    NOU_ISIK,
  ],
  zdroje: [TSUS, OMANIK],
  kroky: [
    { id: 'isikud', nazev: 'Kes keda volitab', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Volitaja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'z_jmeno', typ: 'text', popis: 'Volitatu – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'z_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    ] },
    { id: 'ulatus', nazev: 'Mida võib teha', pole: [
      { id: 'toimingud', typ: 'textarea', popis: 'Toimingud', napoveda: 'Mida konkreetsemalt, seda parem. Sõiduki puhul kirjutage registreerimismärk ja VIN-kood.', placeholder: 'nt esindada mind Transpordiameti teenindusbüroos sõiduki 123 ABC registreerimistunnistuse väljastamisel', sirka: 64 },
      { id: 'edasivolitus', typ: 'volba', popis: 'Kas võib volitada edasi kolmandat isikut?', moznosti: [ { hodnota: 'ei', popis: 'Ei' }, { hodnota: 'jah', popis: 'Jah' } ] },
      { id: 'kuni', typ: 'datum', popis: 'Kehtib kuni', napoveda: 'Kui jätate tühjaks, kehtib kuni tagasivõtmiseni.', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Volikiri', odstavce: [
    'Mina, **{{p_jmeno}}**, isikukood {{p_ik}}, aadress {{p_adresa}},',
    'volitan **{{z_jmeno}}**, isikukood {{z_ik}}, aadress {{z_adresa}},',
    'tegema minu nimel järgmisi toiminguid: {{toimingud}}',
    'Selleks võib volitatu esitada avaldusi, allkirjastada vajalikke dokumente ja võtta minu nimel vastu dokumente.',
    { volba: 'edasivolitus', uvodVzor: 'Edasivolitamine (märkige üks variant):', moznosti: { ei: 'Volitatu ei või volitust edasi anda kolmandale isikule.', jah: 'Volitatu võib volituse edasi anda kolmandale isikule.' } },
    'Volikiri kehtib kuni {{kuni}} või selle tagasivõtmiseni.',
  ] }],
};
