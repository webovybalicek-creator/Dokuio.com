/**
 * Vanema nõusolek lapse välismaale reisimiseks – Eesti. Ühise hooldusõiguse korral on lapse välismaale viimiseks (ka ajutiselt)
 * üldjuhul vaja teise vanema nõusolekut (e-justice, Eesti).
 */
import type { Sablona } from '../typy';
import { LAPS, JALUS } from './allikad';

export const nousolekLapseReisimiseks: Sablona = {
  kod: 'EE-LAPSE-REIS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Nõusolek lapse reisimiseks', podnadpis: 'vanema nõusolek alaealise lapse välisreisiks',
  souborPdf: 'nousolek-lapse-reisimiseks', paticka: JALUS('EE-LAPSE-REIS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vanem', vpravo: 'teine vanem (kui ka tema allkirjastab)' },
  cislovatClanky: false,
  slovo: { n: 'nõusolek', g: 'nõusoleku', a: 'nõusolekut', l: 'nõusolekus' },
  coDal: ['Andke allkirjastatud nõusolek saatjale koos lapse passi või ID-kaardiga kaasa.', 'Kontrollige sihtriigi ja lennufirma nõudeid – mõni nõuab notariaalselt kinnitatud või tõlgitud nõusolekut.', 'Lisage nõusolekule soovi korral koopia oma isikut tõendavast dokumendist.'],
  kontrola: [
    'Kui vanematel on ühine hooldusõigus, on lapse välismaale viimiseks – ka ajutiselt – üldjuhul vaja teise vanema nõusolekut.',
    'Kui laps reisib kellegi teisega (vanavanem, treener, õpetaja), andke nõusolek mõlema vanema allkirjaga.',
    'Kirjutage täpselt reisi aeg, riigid ja saatja andmed.',
    'Piiril ei pruugita nõusolekut alati küsida, kuid vaidluse või kontrolli korral on see vajalik tõend.',
  ],
  zdroje: [LAPS],
  kroky: [
    { id: 'vanem', nazev: 'Vanem ja laps', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vanem – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Vanema isikukood', sirka: 14, polovina: true },
      { id: 'p_tel', typ: 'text', popis: 'Telefon', sirka: 16, polovina: true, autocomplete: 'tel' },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Laps – ees- ja perekonnanimi', sirka: 34 },
      { id: 'd_ik', typ: 'text', popis: 'Lapse isikukood', sirka: 14, polovina: true },
      { id: 'd_dokument', typ: 'text', popis: 'Lapse pass / ID-kaart nr', sirka: 14, polovina: true },
    ] },
    { id: 'reis', nazev: 'Reis', pole: [
      { id: 'saatja', typ: 'volba', popis: 'Laps reisib', moznosti: [ { hodnota: 'vanem', popis: 'teise vanemaga' }, { hodnota: 'isik', popis: 'teise täiskasvanuga' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Saatja – ees- ja perekonnanimi', sirka: 34 },
      { id: 's_dokument', typ: 'text', popis: 'Saatja isikukood või dokumendi nr', sirka: 20 },
      { id: 'riigid', typ: 'text', popis: 'Riik/riigid', placeholder: 'nt Soome, Rootsi', sirka: 40 },
      { id: 'eesmark', typ: 'text', popis: 'Reisi eesmärk', placeholder: 'nt puhkus', sirka: 34 },
      { id: 'alates', typ: 'datum', popis: 'Alates', sirka: 14, polovina: true },
      { id: 'kuni', typ: 'datum', popis: 'Kuni', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Vanema nõusolek', odstavce: [
    'Mina, **{{p_jmeno}}**, isikukood {{p_ik}}, elukoht {{p_adresa}}, telefon {{p_tel}}, olen alaealise lapse',
    '**{{d_jmeno}}**, isikukood {{d_ik}}, pass või ID-kaart nr {{d_dokument}}, vanem.',
    { volba: 'saatja', uvodVzor: 'Saatja (märkige üks variant):', moznosti: { vanem: 'Annan nõusoleku, et laps reisib välismaale koos teise vanemaga {{s_jmeno}} ({{s_dokument}}).', isik: 'Annan nõusoleku, et laps reisib välismaale koos isikuga {{s_jmeno}} ({{s_dokument}}), kellele usaldan reisi ajaks lapse eest hoolitsemise.' } },
    'Reis: {{riigid}}, ajavahemikul {{alates}} – {{kuni}}, eesmärk: {{eesmark}}.',
    'Olen saatjaga reisi tingimustes kokku leppinud ja olen reisi ajal kättesaadav ülaltoodud telefonil.',
  ] }],
};
