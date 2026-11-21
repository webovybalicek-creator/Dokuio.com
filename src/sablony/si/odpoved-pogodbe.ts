/** Odpoved pogodbe – Slovenija (operater, zavarovanje, fitnes, naročnina). Roki po pogodbi in splošnih pogojih; OZ, ZVPot-1. */
import type { Sablona } from '../typy';
import { OZ, ZVPOT, NOGA } from './viri';

export const odpovedPogodbe: Sablona = {
  kod: 'SI-ODPOVED', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Odpoved pogodbe', podnadpis: 'pisna izjava o odpovedi pogodbe o storitvi',
  souborPdf: 'odpoved-pogodbe', paticka: NOGA('SI-ODPOVED'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'uporabnik', vpravo: 'prejel (ponudnik, neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'odpoved', g: 'odpovedi', a: 'odpoved', l: 'odpovedi' },
  coDal: ['Pošljite odpoved priporočeno s povratnico ali na e-naslov za odpovedi iz splošnih pogojev.', 'Zahtevajte pisno potrditev odpovedi in datum prenehanja.'],
  kontrola: [
    'V pogodbi ali splošnih pogojih preverite odpovedni rok in način odpovedi (pisno, e-pošta, uporabniški račun).',
    'Pri pogodbah z vezavo (npr. operater 24 mesecev) predčasna odpoved lahko pomeni plačilo nadomestila – znesek je v pogodbi.',
    'Navedite številko pogodbe ali uporabniško številko.',
    'Če je ponudnik spremenil pogoje v vašo škodo, imate običajno pravico odpovedati brez nadomestila – sklicujte se na to.',
  ],
  zdroje: [OZ, ZVPOT],
  kroky: [{ id: 'podatki', nazev: 'Odpoved', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Uporabnik – ime in priimek', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Ponudnik storitve', placeholder: 'npr. operater, zavarovalnica, fitnes', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov ponudnika', sirka: 46 },
    { id: 'storitev', typ: 'text', popis: 'Storitev', placeholder: 'npr. mobilni paket, internet, članarina', sirka: 40 },
    { id: 'stevilka', typ: 'text', popis: 'Številka pogodbe / uporabniška številka', sirka: 24, polovina: true },
    { id: 'kdaj', typ: 'volba', popis: 'Pogodbo odpovedujem', moznosti: [ { hodnota: 'rok', popis: 'z odpovednim rokom iz pogodbe (prvi možni dan)' }, { hodnota: 'datum', popis: 's točno določenim datumom' } ] },
    { id: 'konec', typ: 'datum', popis: 'Datum prenehanja', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'kdaj', je: 'datum' } },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Odpoved', odstavce: [
    '**Uporabnik:** {{p_jmeno}}, {{p_adresa}}',
    '**Ponudnik:** {{k_jmeno}}, {{k_adresa}}',
    { volba: 'kdaj', uvodVzor: 'Prenehanje (označite eno možnost):', moznosti: { rok: 'Odpovedujem pogodbo za storitev {{storitev}}, številka {{stevilka}}, z odpovednim rokom iz pogodbe oziroma s prvim možnim dnem.', datum: 'Odpovedujem pogodbo za storitev {{storitev}}, številka {{stevilka}}, z dnem {{konec}}.' } },
    'Prosim, da mi pisno potrdite prejem odpovedi in datum prenehanja pogodbe ter od tega dne ne zaračunavate več nadomestil.',
  ] }],
};
