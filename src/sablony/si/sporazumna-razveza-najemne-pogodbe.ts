/** Sporazumna razveza najemne pogodbe za stanovanje – Slovenija (SZ-1, OZ). Stranki se dogovorita za dan prenehanja brez odpovednega roka. */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { SZ1, OZ, NASVET_IDENTITETA, NOGA } from './viri';

export const sporazumnaRazvezaNajma: Sablona = {
  kod: 'SI-RAZVEZA-NAJEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Sporazum o razvezi najemne pogodbe', podnadpis: 'sporazumno prenehanje najema brez odpovednega roka',
  souborPdf: 'sporazumna-razveza-najemne-pogodbe', paticka: NOGA('SI-RAZVEZA-NAJEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najemodajalec', vpravo: 'najemnik' },
  slovo: { n: 'sporazum', g: 'sporazuma', a: 'sporazum', l: 'sporazumu' },
  coDal: ['Na dan predaje podpišite zapisnik o predaji stanovanja s stanjem števcev.'],
  kontrola: [
    'S sporazumom se stranki lahko dogovorita za kateri koli dan prenehanja – odpovedni rok se ne uporabi.',
    'Vpišite točen dan izselitve in predaje ključev.',
    'Dogovorite, koliko varščine se vrne in do kdaj; morebitne odbitke navedite konkretno.',
    NASVET_IDENTITETA,
  ],
  zdroje: [SZ1, OZ],
  kroky: [
    { id: 'stranki', nazev: 'Stranki in najem', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Najemodajalec – ime in priimek', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov najemodajalca', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Najemnik – ime in priimek', sirka: 34 },
      { id: 'stanovanje', typ: 'text', popis: 'Naslov stanovanja', sirka: 46 },
      { id: 'pogodba_od', typ: 'datum', popis: 'Najemna pogodba z dne', sirka: 14, polovina: true },
    ] },
    { id: 'konec', nazev: 'Prenehanje in varščina', pole: [
      { id: 'konec', typ: 'datum', popis: 'Najem preneha dne', sirka: 14, polovina: true },
      { id: 'varscina', typ: 'castka', popis: 'Varščina za vračilo (€)', sirka: 12, polovina: true },
      { id: 'varscina_rok', typ: 'datum', popis: 'Varščina se vrne do', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN najemnika', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { varscina_z_besedo: (d) => znesekZBesedo(d.varscina) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Najemodajalec:** {{p_jmeno}}, naslov {{p_adresa}}', '**Najemnik:** {{k_jmeno}}'] },
    { nadpis: 'Razveza', odstavce: ['Stranki sporazumno razvezujeta najemno pogodbo za stanovanje na naslovu {{stanovanje}}, sklenjeno dne {{pogodba_od}}, z dnem **{{konec}}**.', 'Do tega dne najemnik plačuje najemnino in stroške po pogodbi.'] },
    { nadpis: 'Predaja stanovanja', odstavce: ['Najemnik bo najpozneje dne {{konec}} stanovanje izpraznil, ga predal v stanju, v kakršnem ga je prejel, ob upoštevanju običajne rabe, in vrnil vse ključe. O predaji stranki sestavita zapisnik s stanjem števcev.'] },
    { nadpis: 'Varščina', odstavce: ['Najemodajalec bo najemniku vrnil varščino {{varscina}} (z besedo: {{varscina_z_besedo}}) najpozneje do {{varscina_rok}} na račun IBAN {{iban}}, zmanjšano le za dolgove ali škodo, ugotovljeno v zapisniku.'] },
    { nadpis: 'Končne določbe', odstavce: ['Z izpolnitvijo tega sporazuma stranki nimata nadaljnjih terjatev iz najemne pogodbe, razen tistih, navedenih v zapisniku.', 'Sporazum je sestavljen v dveh enakih izvodih.'] },
  ],
};
