/** Ugovor o djelu – Hrvatska (ZOO, ugovor o djelu): izvođač obavlja posao (popravak, izrada, obnova), naručitelj plaća naknadu. */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const ugovorODjelu: Sablona = {
  kod: 'HR-DJELO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Ugovor o djelu', podnadpis: 'sklopljen prema odredbama Zakona o obveznim odnosima o ugovoru o djelu',
  souborPdf: 'ugovor-o-djelu', paticka: PATICKA('HR-DJELO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'naručitelj', vpravo: 'izvođač' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: ['Ispišite ugovor u dva primjerka i oba potpišite.', 'Pri primopredaji pregledajte posao i nedostatke odmah pisano javite izvođaču.', 'Predujam i konačnu isplatu platite na račun.'],
  kontrola: [
    'Posao opišite što točnije – opseg, materijal, tko ga nabavlja i do kada mora biti gotov.',
    'Naručitelj treba pregledati obavljeni posao čim je to moguće i o nedostacima bez odgađanja obavijestiti izvođača (ZOO, ugovor o djelu).',
    'Ugovorite fiksnu cijenu ili jasan način obračuna (po satu, po m²); naknadne radove dogovorite pisano.',
    'Za građenje ili veće radove na zgradi postoje posebna pravila (ugovor o građenju) i mogu trebati dozvole.',
    'Ako izvođač radi bez obrta ili tvrtke, isplata može podlijegati porezu na dohodak od drugog dohotka – provjerite kod Porezne uprave.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO],
  kroky: [
    { id: 'strane', nazev: 'Naručitelj i izvođač', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Naručitelj – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB naručitelja', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa naručitelja', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Izvođač – ime i prezime ili naziv obrta/tvrtke', placeholder: 'npr. Obrt Ličilac, vl. Ivo Perić', sirka: 40 },
      { id: 'k_oib', typ: 'text', popis: 'OIB izvođača', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresa izvođača', sirka: 46 },
    ] },
    { id: 'posao', nazev: 'Posao, cijena i rok', pole: [
      { id: 'opis', typ: 'textarea', popis: 'Opis posla', placeholder: 'npr. bojanje zidova i stropova u stanu od 60 m², dvaput, bijela boja', sirka: 64 },
      { id: 'mjesto_rada', typ: 'text', popis: 'Mjesto obavljanja posla', placeholder: 'npr. Ilica 10, Zagreb', sirka: 46 },
      { id: 'materijal', typ: 'volba', popis: 'Materijal nabavlja', moznosti: [ { hodnota: 'izvodac', popis: 'izvođač (uključeno u cijenu)' }, { hodnota: 'narucitelj', popis: 'naručitelj' } ] },
      { id: 'castka', typ: 'castka', popis: 'Ukupna cijena (€)', sirka: 12, polovina: true },
      { id: 'predujam', typ: 'castka', popis: 'Predujam (€, neobavezno)', sirka: 12, polovina: true },
      { id: 'pocetak', typ: 'datum', popis: 'Početak radova', sirka: 14, polovina: true },
      { id: 'rok', typ: 'datum', popis: 'Rok završetka', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum potpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [
    { nadpis: 'Ugovorne strane', odstavce: ['**Naručitelj:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}', '**Izvođač:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}'] },
    { nadpis: 'Predmet ugovora', vysvetleni: 'Što se točno radi i gdje.', odstavce: ['Izvođač se obvezuje obaviti sljedeći posao: {{opis}}.', 'Mjesto obavljanja posla: {{mjesto_rada}}.', { volba: 'materijal', uvodVzor: 'Materijal (označite jednu mogućnost):', moznosti: { izvodac: 'Materijal nabavlja izvođač i uključen je u ugovorenu cijenu.', narucitelj: 'Materijal nabavlja naručitelj na vlastiti trošak i predaje ga izvođaču na vrijeme.' } }] },
    { nadpis: 'Rok', odstavce: ['Izvođač će započeti s radovima dana {{pocetak}} i završiti ih najkasnije do {{rok}}.', 'Ako izvođač ne završi posao u roku, naručitelj mu može dati primjereni naknadni rok, a nakon njegova isteka raskinuti ugovor i zahtijevati naknadu štete.'] },
    { nadpis: 'Cijena i plaćanje', odstavce: ['Ugovorena cijena za cijeli posao iznosi **{{castka}}** (slovima: {{castka_slovima}}).', 'Naručitelj plaća predujam od {{predujam}} pri potpisu ugovora, a ostatak u roku od 8 dana od primopredaje posla bez nedostataka.', 'Dodatni radovi izvan opisa iz ovog ugovora obavljaju se i plaćaju samo uz prethodni pisani dogovor.'] },
    { nadpis: 'Primopredaja i nedostaci', odstavce: ['Naručitelj će obavljeni posao pregledati pri primopredaji i o nađenim nedostacima bez odgađanja pisano obavijestiti izvođača.', 'Izvođač je dužan nedostatke otkloniti o svom trošku u primjerenom roku. Na odgovornost izvođača za nedostatke primjenjuju se odredbe Zakona o obveznim odnosima o ugovoru o djelu.'] },
    { nadpis: 'Završne odredbe', odstavce: ['Na sve što nije uređeno ovim ugovorom primjenjuje se Zakon o obveznim odnosima.', 'Ugovor je sastavljen u dva istovjetna primjerka, po jedan za svaku stranu.'] },
  ],
};
