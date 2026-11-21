/** Odpoved najemne pogodbe s strani najemnika – Slovenija (SZ-1, OZ). Pisna odpoved z odpovednim rokom iz pogodbe. */
import type { Sablona } from '../typy';
import { SZ1, NOGA } from './viri';

export const odpovedNajemnePogodbe: Sablona = {
  kod: 'SI-ODPOVED-NAJEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Odpoved najemne pogodbe', podnadpis: 'odpoved najemnika',
  souborPdf: 'odpoved-najemne-pogodbe', paticka: NOGA('SI-ODPOVED-NAJEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najemnik', vpravo: 'prejel (najemodajalec, datum)' },
  cislovatClanky: false,
  slovo: { n: 'odpoved', g: 'odpovedi', a: 'odpoved', l: 'odpovedi' },
  coDal: ['Odpoved izročite proti podpisu ali jo pošljite priporočeno s povratnico.', 'Na dan izselitve podpišite zapisnik s stanjem števcev.'],
  kontrola: [
    'Upoštevajte odpovedni rok iz najemne pogodbe – teče od dneva, ko najemodajalec odpoved prejme.',
    'Pri najemu za določen čas se pogodba praviloma ne more odpovedati pred iztekom, razen če pogodba to dopušča ali se stranki dogovorita.',
    'Dogovorite dan predaje ključev in vračilo varščine.',
  ],
  zdroje: [SZ1],
  kroky: [{ id: 'podatki', nazev: 'Odpoved', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Najemnik – ime in priimek', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov (najeto stanovanje)', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Najemodajalec – ime in priimek', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov najemodajalca', sirka: 46 },
    { id: 'pogodba_od', typ: 'datum', popis: 'Najemna pogodba z dne', sirka: 14, polovina: true },
    { id: 'rok', typ: 'cislo', popis: 'Odpovedni rok iz pogodbe', placeholder: 'npr. 90', jednotka: 'dni', sirka: 6, polovina: true },
    { id: 'izselitev', typ: 'datum', popis: 'Predvideni dan izselitve', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN za vračilo varščine', placeholder: 'SI56 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Odpoved', odstavce: [
    '**Najemnik:** {{p_jmeno}}, {{p_adresa}}',
    '**Najemodajalec:** {{k_jmeno}}, {{k_adresa}}',
    'Odpovedujem najemno pogodbo z dne {{pogodba_od}} za stanovanje na naslovu {{p_adresa}} z odpovednim rokom {{rok}} dni, ki začne teči s prejemom te odpovedi.',
    'Stanovanje bom izpraznil/a in predal/a dne {{izselitev}}. Prosim, da mi varščino vrnete na račun IBAN {{iban}}, zmanjšano le za morebitne obveznosti, ugotovljene ob predaji.',
  ] }],
};
