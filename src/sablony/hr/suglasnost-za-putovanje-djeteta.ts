/**
 * Suglasnost roditelja za putovanje maloljetnog djeteta – Hrvatska. Granična policija ili prijevoznik mogu tražiti pisanu
 * suglasnost roditelja koji ne putuje (Your Europe – Hrvatska); preporučuje se ovjera potpisa kod javnog bilježnika.
 */
import type { Sablona } from '../typy';
import { EU_MALOLJETNICI, PATICKA } from './izvori';

export const suglasnostZaPutovanjeDjeteta: Sablona = {
  kod: 'HR-PUTOVANJE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Suglasnost za putovanje maloljetnog djeteta', podnadpis: 'izjava roditelja koji ne putuje s djetetom',
  souborPdf: 'suglasnost-za-putovanje-djeteta', paticka: PATICKA('HR-PUTOVANJE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'roditelj (zakonski zastupnik)', vpravo: 'drugi roditelj (ako također daje suglasnost)' },
  cislovatClanky: false,
  slovo: { n: 'suglasnost', g: 'suglasnosti', a: 'suglasnost', l: 'suglasnosti' },
  coDal: ['Potpis ovjerite kod javnog bilježnika – granična policija u inozemstvu češće prihvaća ovjerenu izjavu.', 'Djetetu dajte izvornik, a uz njega i presliku osobne iskaznice roditelja.', 'Provjerite uvjete zemlje u koju dijete putuje i prijevoznika (avio-kompanije imaju vlastite obrasce).'],
  kontrola: [
    'Dijete koje putuje samo ili s osobom koja nije roditelj možda će trebati dodatni dokument s potpisom roditelja ili skrbnika kojim se odobrava putovanje ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/croatia/index_hr.htm)).',
    'Dijete mora imati vlastitu valjanu osobnu iskaznicu ili putovnicu.',
    'Navedite točno razdoblje i odredište putovanja te podatke pratitelja.',
    'Za preseljenje djeteta u inozemstvo potrebna je posebna suglasnost drugog roditelja ili odluka suda – ova izjava vrijedi samo za privremeno putovanje.',
  ],
  zdroje: [EU_MALOLJETNICI],
  kroky: [
    { id: 'roditelj', nazev: 'Roditelj i dijete', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Roditelj – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB roditelja', sirka: 14, polovina: true },
      { id: 'p_doklad', typ: 'text', popis: 'Broj osobne iskaznice', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
      { id: 'p_tel', typ: 'text', popis: 'Telefon za kontakt', sirka: 18, polovina: true },
      { id: 'd_jmeno', typ: 'text', popis: 'Dijete – ime i prezime', placeholder: 'npr. Lana Kovač', sirka: 34 },
      { id: 'd_narozeni', typ: 'datum', popis: 'Datum rođenja djeteta', sirka: 14, polovina: true },
      { id: 'd_doklad', typ: 'text', popis: 'Broj putne isprave djeteta', sirka: 14, polovina: true },
    ] },
    { id: 'put', nazev: 'Putovanje', pole: [
      { id: 'pratitelj', typ: 'volba', popis: 'Dijete putuje', moznosti: [ { hodnota: 'roditelj', popis: 's drugim roditeljem' }, { hodnota: 'osoba', popis: 's drugom odraslom osobom' }, { hodnota: 'samo', popis: 'samo (organizirano putovanje, škola)' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Pratitelj – ime i prezime', sirka: 34, zobrazitKdyz: { pole: 'pratitelj', je: ['roditelj', 'osoba'] } },
      { id: 's_doklad', typ: 'text', popis: 'Broj osobne iskaznice ili putovnice pratitelja', sirka: 18, zobrazitKdyz: { pole: 'pratitelj', je: ['roditelj', 'osoba'] } },
      { id: 'zeme', typ: 'text', popis: 'Odredište', placeholder: 'npr. Italija, Austrija', sirka: 34 },
      { id: 'od', typ: 'datum', popis: 'Od', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Do', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Suglasnost', odstavce: [
    'Ja, **{{p_jmeno}}**, OIB {{p_oib}}, broj osobne iskaznice {{p_doklad}}, adresa {{p_adresa}}, telefon {{p_tel}}, kao roditelj i zakonski zastupnik,',
    'dajem suglasnost da moje maloljetno dijete **{{d_jmeno}}**, rođeno {{d_narozeni}}, broj putne isprave {{d_doklad}},',
    { volba: 'pratitelj', uvodVzor: 'Pratnja (označite jednu mogućnost):', moznosti: { roditelj: 'putuje u pratnji drugog roditelja {{s_jmeno}}, broj isprave {{s_doklad}},', osoba: 'putuje u pratnji osobe {{s_jmeno}}, broj isprave {{s_doklad}}, kojoj za vrijeme putovanja povjeravam brigu o djetetu,', samo: 'putuje bez pratnje roditelja u okviru organiziranog putovanja,' } },
    'u razdoblju od {{od}} do {{do}}, na odredište: {{zeme}}.',
    'Suglasnost vrijedi samo za navedeno putovanje.',
  ] }],
};
