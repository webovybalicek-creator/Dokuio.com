/** Pooblastilo – Slovenija (OZ, zastopanje). Overitev podpisa na upravni enoti (upravna taksa) ali pri notarju, če jo naslovnik zahteva. */
import type { Sablona } from '../typy';
import { OZ, NOTARSKA_TARIFA, NOGA } from './viri';

export const pooblastilo: Sablona = {
  kod: 'SI-POOBLASTILO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Pooblastilo', podnadpis: 'za zastopanje fizične osebe',
  souborPdf: 'pooblastilo', paticka: NOGA('SI-POOBLASTILO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pooblastitelj', vpravo: 'pooblaščenec (sprejem, neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'pooblastilo', g: 'pooblastila', a: 'pooblastilo', l: 'pooblastilu' },
  coDal: ['Preverite, ali naslovnik (urad, banka, registracijska organizacija) zahteva overjen podpis.', 'Pooblaščenec naj ima pri sebi izvirnik in osebni dokument.'],
  kontrola: [
    'Posle opišite čim natančneje – npr. „sprememba lastništva vozila z reg. oznako …”.',
    'Podpis lahko overite na upravni enoti ali pri notarju; overitev podpisa na pooblastilu pri notarju stane 16 €.',
    'Pooblastilo lahko kadar koli prekličete – preklic sporočite pooblaščencu in tistim, ki jim je bilo predloženo.',
    'Za posle z nepremičninami ali zastopanje pred sodiščem se obrnite na notarja ali odvetnika.',
  ],
  zdroje: [OZ, NOTARSKA_TARIFA],
  kroky: [{ id: 'podatki', nazev: 'Pooblastilo', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Pooblastitelj – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
    { id: 'p_davcna', typ: 'text', popis: 'Davčna številka ali EMŠO', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Pooblaščenec – ime in priimek', placeholder: 'npr. Maja Novak', sirka: 34 },
    { id: 'k_davcna', typ: 'text', popis: 'Davčna številka ali EMŠO', sirka: 14, polovina: true },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    { id: 'posli', typ: 'textarea', popis: 'Za katere posle', placeholder: 'npr. prevzem pošiljk na pošti, urejanje spremembe lastništva vozila z reg. oznako LJ AB-123', sirka: 64 },
    { id: 'do', typ: 'datum', popis: 'Pooblastilo velja do', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Pooblastilo', odstavce: [
    'Podpisani **{{p_jmeno}}**, {{p_davcna}}, {{p_adresa}} (pooblastitelj),',
    'pooblaščam **{{k_jmeno}}**, {{k_davcna}}, {{k_adresa}} (pooblaščenec),',
    'da me zastopa in v mojem imenu opravi naslednje posle: {{posli}}.',
    'Pooblastilo velja do {{do}} oziroma do preklica.',
  ] }],
};
