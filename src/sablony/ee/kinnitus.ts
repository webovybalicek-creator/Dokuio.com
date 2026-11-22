/** Kinnitus (kirjalik kinnitus / avaldus) – Eesti. Üldine kirjalik kinnitus faktide kohta. */
import type { Sablona } from '../typy';
import { TSUS, JALUS } from './allikad';

export const kinnitus: Sablona = {
  kod: 'EE-KINNITUS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Kinnitus', podnadpis: 'kirjalik kinnitus asjaolude kohta',
  souborPdf: 'kinnitus', paticka: JALUS('EE-KINNITUS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kinnitaja', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'kinnitus', g: 'kinnituse', a: 'kinnitust', l: 'kinnituses' },
  coDal: ['Allkirjastage kinnitus omakäeliselt või digitaalselt (ID-kaart, Mobiil-ID, Smart-ID).', 'Andke kinnitus asutusele või isikule, kes seda nõudis, ja hoidke koopia alles.'],
  kontrola: [
    'Kirjutage ainult tõeseid asjaolusid – teadvalt valeandmete esitamine võib kaasa tuua vastutuse.',
    'Kontrollige, kas asutus nõuab kindlat vormi või notariaalset kinnitamist; mõne toimingu jaoks lihtsast kinnitusest ei piisa.',
    'Digitaalallkiri on omakäelise allkirjaga samaväärne.',
  ],
  zdroje: [TSUS],
  kroky: [{ id: 'andmed', nazev: 'Kinnitaja ja sisu', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    { id: 'kellele', typ: 'text', popis: 'Kellele kinnitus esitatakse (soovi korral)', placeholder: 'nt Tallinna Linnavalitsus', sirka: 40 },
    { id: 'sisu', typ: 'textarea', popis: 'Mida kinnitate', placeholder: 'nt et elan aadressil … alates 01.03.2026 ja minuga elavad koos …', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Kinnitus', odstavce: [
    'Mina, **{{p_jmeno}}**, isikukood {{p_ik}}, elukoht {{p_adresa}}, kinnitan:',
    '{{sisu}}',
    'Kinnitus esitatakse: {{kellele}}.',
    'Kinnitan, et esitatud andmed on õiged ja täielikud ning olen teadlik, et valeandmete esitamine võib kaasa tuua vastutuse.',
  ] }],
};
