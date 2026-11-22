/** Lepingu ülesütlemise avaldus (teenus, liikmesus, tellimus) – Eesti. */
import type { Sablona } from '../typy';
import { VOS, JALUS } from './allikad';

export const lepinguUlesutlemine: Sablona = {
  kod: 'EE-ULESUTLEMINE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Lepingu ülesütlemise avaldus', podnadpis: 'teenuse-, liikmes- või tellimuslepingu lõpetamine',
  souborPdf: 'lepingu-ulesutlemine', paticka: JALUS('EE-ULESUTLEMINE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'klient', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'avaldus', g: 'avalduse', a: 'avaldust', l: 'avalduses' },
  pripominky: (d) => (typeof d.lopp === 'string' && d.lopp ? [{ nazev: 'Lepingu lõppemine', datum: d.lopp, popis: 'Kontrollige, et pärast seda kuupäeva enam arveid ei esitata.' }] : []),
  coDal: ['Saatke avaldus e-posti teel (soovitatavalt digiallkirjastatult), iseteeninduse kaudu või tähtkirjaga.', 'Küsige ülesütlemise kinnitust ja lepingu lõppemise kuupäeva.', 'Lõpetage püsimaksed või e-arve püsikorraldus alles pärast viimase arve tasumist.'],
  kontrola: [
    'Kontrollige lepingust või tüüptingimustest etteteatamistähtaega ja võimalikku tähtajalist kohustust.',
    'Tähtajalise lepingu ennetähtaegne lõpetamine võib kaasa tuua leppetrahvi või soodustuse tagasimaksmise – lugege tingimused läbi.',
    'Hoidke alles tõend, et ja millal avaldus kätte toimetati.',
    'Kui leping sõlmiti veebis või väljaspool äriruume ja vähem kui 14 päeva tagasi, kasutage pigem taganemisavaldust.',
  ],
  zdroje: [VOS],
  kroky: [{ id: 'andmed', nazev: 'Klient ja leping', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    { id: 'p_kontakt', typ: 'text', popis: 'E-post või telefon', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Teenusepakkuja', placeholder: 'nt Spordiklubi OÜ', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Teenusepakkuja aadress', sirka: 46 },
    { id: 'leping', typ: 'text', popis: 'Leping / kliendinumber', placeholder: 'nt liikmesleping nr 12345 alates 01.02.2025', sirka: 46 },
    { id: 'lopp', typ: 'datum', popis: 'Leping lõpeb', napoveda: 'Arvestage lepingus kokku lepitud etteteatamistähtaega.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Lepingu ülesütlemise avaldus', odstavce: [
    '**Saatja:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakt}}',
    '**Kellele:** {{k_jmeno}}, {{k_adresa}}',
    'Ütlen üles lepingu: {{leping}}.',
    'Palun lõpetada leping {{lopp}} või, kui lepingus kokku lepitud etteteatamistähtaeg lõpeb hiljem, selle tähtaja möödumisel.',
    'Palun kinnitage ülesütlemise kättesaamist ja lepingu lõppemise kuupäeva kirjalikku taasesitamist võimaldavas vormis. Alates lõppemise kuupäevast palun mulle enam arveid mitte esitada.',
  ] }],
};
