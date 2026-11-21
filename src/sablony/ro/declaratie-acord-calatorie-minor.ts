/**
 * Declarație privind acordul părintelui pentru ieșirea din țară a minorului – România (Legea nr. 248/2005, art. 30). Minorul care iese
 * din țară cu un singur părinte are nevoie de declarația celuilalt părinte; cu altă persoană majoră – de declarația ambilor părinți.
 * Declarația se autentifică la notar (sau la consulat). Nu este necesară dacă minorul are domiciliul sau reședința în țara de destinație.
 */
import type { Sablona } from '../typy';
import { L248, PF_MODEL_MINOR, EJUSTICE_MINOR, SUBSOL } from './surse';

export const declaratieCalatorieMinor: Sablona = {
  kod: 'RO-CALATORIE-MINOR', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Declarație privind acordul pentru ieșirea din țară a minorului', podnadpis: 'text pregătit pentru autentificare la notar',
  souborPdf: 'declaratie-acord-calatorie-minor', paticka: SUBSOL('RO-CALATORIE-MINOR'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'părinte (declarant)', vpravo: 'al doilea părinte (dacă semnează și el)' },
  cislovatClanky: false,
  slovo: { n: 'declarație', g: 'declarației', a: 'declarația', l: 'declarație' },
  coDal: ['Duceți textul la notar (sau la consulatul României) – declarația se semnează și se autentifică acolo; poliția de frontieră acceptă declarația notarială.', 'Însoțitorul păstrează un duplicat, iar al doilea însoțește pașaportul minorului.', 'Verificați și condițiile țării de destinație și ale transportatorului.'],
  kontrola: [
    'Dacă minorul iese din România însoțit doar de un părinte, acesta prezintă la frontieră declarația celuilalt părinte privind acordul ([Legea nr. 248/2005](https://legislatie.just.ro/Public/DetaliiDocument/63704)). Dacă îl însoțește altă persoană majoră, este nevoie de declarația ambilor părinți.',
    'Declarația trebuie autentificată la notar – un text semnat doar de mână nu este suficient la frontieră.',
    'Declarația nu este necesară dacă celălalt părinte a decedat, este decăzut din drepturile părintești sau dacă părintele însoțitor exercită singur autoritatea părintească – aceste situații se dovedesc cu documente oficiale.',
    'Nu este necesară nici atunci când minorul are domiciliul sau reședința în statul de destinație.',
    'Treceți perioada exactă, destinația și datele însoțitorului. Pentru o persoană însoțitoare, perioada acordului nu poate depăși 3 ani de la întocmirea declarației.',
  ],
  zdroje: [L248, PF_MODEL_MINOR, EJUSTICE_MINOR],
  kroky: [
    { id: 'parinte', nazev: 'Părintele și minorul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Părinte – nume și prenume', sirka: 34, autocomplete: 'name' },
      { id: 'p_cnp', typ: 'text', popis: 'CNP părinte', sirka: 15, polovina: true },
      { id: 'p_act', typ: 'text', popis: 'Act de identitate (seria și nr.)', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Minor – nume și prenume', sirka: 34 },
      { id: 'd_cnp', typ: 'text', popis: 'CNP minor', sirka: 15, polovina: true },
      { id: 'd_document', typ: 'text', popis: 'Pașaportul / cartea de identitate a minorului', sirka: 18, polovina: true },
    ] },
    { id: 'calatorie', nazev: 'Călătoria', pole: [
      { id: 'insotire', typ: 'volba', popis: 'Minorul călătorește', moznosti: [ { hodnota: 'parinte', popis: 'cu celălalt părinte' }, { hodnota: 'persoana', popis: 'cu altă persoană majoră' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Însoțitor – nume și prenume', sirka: 34 },
      { id: 's_act', typ: 'text', popis: 'Actul de identitate al însoțitorului', sirka: 18 },
      { id: 'destinatie', typ: 'text', popis: 'Destinația', placeholder: 'de ex. Grecia, Italia', sirka: 34 },
      { id: 'scop', typ: 'text', popis: 'Scopul călătoriei', placeholder: 'de ex. vacanță', sirka: 30 },
      { id: 'de_la', typ: 'datum', popis: 'De la', sirka: 14, polovina: true },
      { id: 'pana_la', typ: 'datum', popis: 'Până la', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Declarație', odstavce: [
    'Subsemnatul/Subsemnata **{{p_jmeno}}**, CNP {{p_cnp}}, act de identitate {{p_act}}, domiciliat(ă) în {{p_adresa}}, în calitate de părinte al minorului',
    '**{{d_jmeno}}**, CNP {{d_cnp}}, document de călătorie {{d_document}},',
    { volba: 'insotire', uvodVzor: 'Însoțirea (bifați o variantă):', moznosti: { parinte: 'îmi exprim acordul ca minorul să călătorească în străinătate însoțit de celălalt părinte, {{s_jmeno}}, act de identitate {{s_act}},', persoana: 'îmi exprim acordul ca minorul să călătorească în străinătate însoțit de {{s_jmeno}}, act de identitate {{s_act}}, căruia îi încredințez îngrijirea minorului pe durata călătoriei,' } },
    'în perioada {{de_la}} – {{pana_la}}, cu destinația {{destinatie}}, în scop de {{scop}}.',
    'Am adus la cunoștința însoțitorului obligațiile care îi revin potrivit Legii nr. 248/2005 privind regimul liberei circulații a cetățenilor români în străinătate.',
  ] }],
};
