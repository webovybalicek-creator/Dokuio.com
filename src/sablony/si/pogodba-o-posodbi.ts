/** Pogodba o posodbi – Slovenija (OZ, posodbena pogodba): brezplačna uporaba stvari in vrnitev iste stvari. */
import type { Sablona } from '../typy';
import { OZ, NASVET_IDENTITETA, NOGA } from './viri';

export const pogodbaOPosodbi: Sablona = {
  kod: 'SI-POSODBA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Pogodba o posodbi', podnadpis: 'brezplačna uporaba stvari po Obligacijskem zakoniku',
  souborPdf: 'pogodba-o-posodbi', paticka: NOGA('SI-POSODBA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'posodnik', vpravo: 'izposojevalec' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Ob izročitvi stvar fotografirajte in zapišite njeno stanje.', 'Ob vračilu primerjajte stanje s pogodbo.'],
  kontrola: [
    'Posodba je brezplačna – če se plača nadomestilo, gre za najem.',
    'Vpišite vrednost stvari: olajša dogovor o odškodnini, če se stvar poškoduje ali izgubi.',
    'Izposojevalec sme stvar uporabljati le za dogovorjeni namen in je brez dovoljenja ne sme dati drugemu (OZ).',
    'Pri avtomobilu ob pogodbi izpolnite še zapisnik o izročitvi vozila s kilometri in uro.',
    NASVET_IDENTITETA,
  ],
  zdroje: [OZ],
  kroky: [
    { id: 'stranki', nazev: 'Posodnik in izposojevalec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Posodnik (daje stvar) – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Izposojevalec (prejme stvar) – ime in priimek', placeholder: 'npr. Marko Kralj', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    ] },
    { id: 'stvar', nazev: 'Stvar in vračilo', pole: [
      { id: 'stvar', typ: 'textarea', popis: 'Stvar', placeholder: 'npr. prikolica, šotor za 4 osebe, vrtalnik Bosch', sirka: 64 },
      { id: 'stanje', typ: 'text', popis: 'Stanje ob izročitvi', placeholder: 'npr. brezhibna, praska na pokrovu', sirka: 56 },
      { id: 'vrednost', typ: 'castka', popis: 'Vrednost stvari (€)', sirka: 12, polovina: true },
      { id: 'namen', typ: 'text', popis: 'Namen uporabe', placeholder: 'npr. dopust na Obali', sirka: 46 },
      { id: 'vracilo', typ: 'datum', popis: 'Vrniti najpozneje do', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Posodnik:** {{p_jmeno}}, naslov {{p_adresa}}', '**Izposojevalec:** {{k_jmeno}}, naslov {{k_adresa}}'] },
    { nadpis: 'Predmet posodbe', odstavce: ['Posodnik izroča izposojevalcu v brezplačno uporabo naslednjo stvar: {{stvar}}.', 'Stanje ob izročitvi: {{stanje}}. Stranki ocenjujeta vrednost stvari na {{vrednost}}.'] },
    { nadpis: 'Uporaba', odstavce: ['Izposojevalec bo stvar uporabljal le za namen: {{namen}}, skrbno in v skladu z njeno naravo.', 'Izposojevalec stvari brez pisnega dovoljenja posodnika ne sme dati v uporabo drugemu. Redne stroške vzdrževanja med uporabo nosi izposojevalec.'] },
    { nadpis: 'Vračilo', odstavce: ['Izposojevalec bo stvar vrnil najpozneje do {{vracilo}} v stanju, v kakršnem jo je prejel, ob upoštevanju običajne obrabe.', 'Če se stvar po krivdi izposojevalca poškoduje ali izgubi, izposojevalec povrne škodo.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporablja Obligacijski zakonik. Pogodba je sestavljena v dveh enakih izvodih.'] },
  ],
};
