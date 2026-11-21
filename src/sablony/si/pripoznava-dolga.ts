/** Pripoznava dolga – Slovenija (OZ). Dolžnik pisno pripozna dolg; pripoznava pretrga zastaranje, splošni zastaralni rok je 5 let. */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NOGA } from './viri';

export const pripoznavaDolga: Sablona = {
  kod: 'SI-PRIPOZNAVA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Pripoznava dolga', podnadpis: 'pisna izjava dolžnika o obstoju in višini dolga',
  souborPdf: 'pripoznava-dolga', paticka: NOGA('SI-PRIPOZNAVA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'dolžnik', vpravo: 'prejel (upnik, neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'pripoznava', g: 'pripoznave', a: 'pripoznavo', l: 'pripoznavi' },
  coDal: ['Izvirnik obdrži upnik.', 'Za večje zneske razmislite o notarskem zapisu z neposredno izvršljivostjo.'],
  kontrola: [
    'Pripoznava dolga pretrga zastaranje – zastaralni rok začne teči znova. Splošni zastaralni rok je pet let (Obligacijski zakonik).',
    'Za pretrganje zastaranja ne zadošča, da upnik dolžnika le pozove k plačilu – potrebna je dolžnikova pripoznava ali tožba.',
    'Navedite pravno podlago dolga (posojilo, neplačana kupnina, škoda), znesek in rok plačila.',
  ],
  zdroje: [OZ],
  kroky: [{ id: 'podatki', nazev: 'Dolžnik, upnik in dolg', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Dolžnik – ime in priimek', placeholder: 'npr. Marko Kralj', sirka: 34, autocomplete: 'name' },
    { id: 'p_davcna', typ: 'text', popis: 'Davčna številka dolžnika', sirka: 12, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov dolžnika', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Upnik – ime in priimek ali naziv', placeholder: 'npr. Janez Novak', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov upnika', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Znesek dolga (€)', sirka: 12, polovina: true },
    { id: 'podlaga', typ: 'text', popis: 'Podlaga dolga', placeholder: 'npr. posojilo po pogodbi z dne 15. 3. 2026', sirka: 56 },
    { id: 'rok', typ: 'datum', popis: 'Plačal bom najpozneje do', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN upnika', placeholder: 'SI56 0000 0000 0000 000', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka) },
  clanky: [{ nadpis: 'Pripoznava', odstavce: [
    'Podpisani **{{p_jmeno}}**, davčna številka {{p_davcna}}, {{p_adresa}} (dolžnik),',
    'pripoznavam, da upniku {{k_jmeno}}, {{k_adresa}}, na dan podpisa te izjave dolgujem znesek **{{castka}}** (z besedo: {{castka_z_besedo}}) iz naslova: {{podlaga}}.',
    'Dolg se zavezujem plačati najpozneje do {{rok}} na račun upnika IBAN {{iban}}. V primeru zamude dolgujem tudi zakonske zamudne obresti.',
  ] }],
};
