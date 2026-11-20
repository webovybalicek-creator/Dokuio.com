/** Sporazumni raskid ugovora o najmu stana – Hrvatska: strane se dogovore o danu prestanka najma, predaji stana i povratu jamčevine. */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZNS, ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const sporazumniRaskidNajma: Sablona = {
  kod: 'HR-RASKID-NAJMA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Sporazum o raskidu ugovora o najmu stana', podnadpis: 'sporazumni prestanak najma bez otkaznog roka',
  souborPdf: 'sporazumni-raskid-ugovora-o-najmu', paticka: PATICKA('HR-RASKID-NAJMA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najmodavac', vpravo: 'najmoprimac' },
  slovo: { n: 'sporazum', g: 'sporazuma', a: 'sporazum', l: 'sporazumu' },
  coDal: ['Na dan predaje potpišite primopredajni zapisnik sa stanjem brojila.', 'Najmodavac obavijesti upravno tijelo kojem je dostavio ugovor o najmu da je najam prestao.'],
  kontrola: [
    'Sporazumom se strane mogu dogovoriti o bilo kojem danu prestanka – otkazni rok od tri mjeseca tada se ne primjenjuje.',
    'Upišite točan dan iseljenja i predaje ključeva.',
    'Dogovorite koliko se jamčevine vraća i do kada; odbitke za štetu ili režije navedite konkretno.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZNS, ZOO],
  kroky: [
    { id: 'strane', nazev: 'Strane i najam', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Najmodavac – ime i prezime', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB najmodavca', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa najmodavca', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Najmoprimac – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34 },
      { id: 'k_oib', typ: 'text', popis: 'OIB najmoprimca', sirka: 14, polovina: true },
      { id: 'stan', typ: 'text', popis: 'Adresa stana', placeholder: 'npr. Vukovarska 20, 10000 Zagreb', sirka: 46 },
      { id: 'ugovor_od', typ: 'datum', popis: 'Ugovor o najmu sklopljen dana', sirka: 14, polovina: true },
    ] },
    { id: 'kraj', nazev: 'Prestanak i jamčevina', pole: [
      { id: 'kraj', typ: 'datum', popis: 'Najam prestaje dana', sirka: 14, polovina: true },
      { id: 'jamcevina', typ: 'castka', popis: 'Jamčevina koja se vraća (€)', sirka: 12, polovina: true },
      { id: 'jamcevina_rok', typ: 'datum', popis: 'Jamčevina se vraća najkasnije', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN najmoprimca', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { jamcevina_slovima: (d) => iznosSlovima(d.jamcevina) },
  clanky: [
    { nadpis: 'Ugovorne strane', odstavce: ['**Najmodavac:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}', '**Najmoprimac:** {{k_jmeno}}, OIB {{k_oib}}'] },
    { nadpis: 'Raskid', odstavce: ['Strane sporazumno raskidaju ugovor o najmu stana na adresi {{stan}}, sklopljen dana {{ugovor_od}}, s danom **{{kraj}}**.', 'Do toga dana najmoprimac plaća najamninu i troškove stanovanja prema ugovoru.'] },
    { nadpis: 'Predaja stana', odstavce: ['Najmoprimac će najkasnije dana {{kraj}} iseliti, predati stan u stanju u kojem ga je primio, uzimajući u obzir redovitu uporabu, i vratiti sve ključeve. O predaji strane sastavljaju primopredajni zapisnik sa stanjem brojila.'] },
    { nadpis: 'Jamčevina', odstavce: ['Najmodavac će najmoprimcu vratiti jamčevinu u iznosu od {{jamcevina}} (slovima: {{jamcevina_slovima}}) najkasnije do {{jamcevina_rok}} na račun IBAN {{iban}}, umanjenu samo za dugove ili štete utvrđene u primopredajnom zapisniku.'] },
    { nadpis: 'Završne odredbe', odstavce: ['Ispunjenjem ovog sporazuma strane nemaju daljnjih potraživanja iz ugovora o najmu, osim onih navedenih u primopredajnom zapisniku.', 'Sporazum je sastavljen u dva istovjetna primjerka, po jedan za svaku stranu.'] },
  ],
};
