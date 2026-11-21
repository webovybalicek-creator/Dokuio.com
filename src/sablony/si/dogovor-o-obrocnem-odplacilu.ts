/** Dogovor o obročnem odplačilu dolga – Slovenija (OZ). Pripoznava dolga in načrt obrokov; pripoznava pretrga zastaranje. */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NASVET_IDENTITETA, NOGA } from './viri';

export const dogovorOObrocih: Sablona = {
  kod: 'SI-OBROKI', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Dogovor o obročnem odplačilu dolga', podnadpis: 'pripoznava dolga in načrt odplačila v obrokih',
  souborPdf: 'dogovor-o-obrocnem-odplacilu', paticka: NOGA('SI-OBROKI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'upnik', vpravo: 'dolžnik' },
  slovo: { n: 'dogovor', g: 'dogovora', a: 'dogovor', l: 'dogovoru' },
  coDal: ['Natisnite dogovor v dveh izvodih in oba podpišite.', 'Datume obrokov shranite v koledar.', 'Shranite potrdila o plačilih.'],
  kontrola: [
    'Dolžnik v dogovoru pripozna dolg – pripoznava pretrga zastaranje in zastaralni rok začne teči znova (OZ).',
    'Določite, kaj se zgodi ob zamudi z obrokom (npr. zapadlost celotnega ostanka).',
    'Za večje zneske razmislite o notarskem zapisu z neposredno izvršljivostjo.',
    NASVET_IDENTITETA,
  ],
  zdroje: [OZ],
  kroky: [
    { id: 'stranki', nazev: 'Upnik in dolžnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Upnik – ime in priimek ali naziv', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov upnika', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Dolžnik – ime in priimek', sirka: 34 },
      { id: 'k_davcna', typ: 'text', popis: 'Davčna številka dolžnika', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov dolžnika', sirka: 46 },
    ] },
    { id: 'dolg', nazev: 'Dolg in obroki', pole: [
      { id: 'castka', typ: 'castka', popis: 'Skupni dolg (€)', sirka: 12, polovina: true },
      { id: 'podlaga', typ: 'text', popis: 'Podlaga dolga', placeholder: 'npr. neplačana kupnina za vozilo po pogodbi z dne 1. 6. 2026', sirka: 56 },
      { id: 'obrok', typ: 'castka', popis: 'Mesečni obrok (€)', sirka: 12, polovina: true },
      { id: 'stevilo', typ: 'cislo', popis: 'Število obrokov', sirka: 6, polovina: true },
      { id: 'dan', typ: 'cislo', popis: 'Obrok zapade vsak … dan v mesecu', placeholder: 'npr. 15', sirka: 6, polovina: true },
      { id: 'prvi', typ: 'datum', popis: 'Prvi obrok', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN upnika', placeholder: 'SI56 0000 0000 0000 000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka), obrok_z_besedo: (d) => znesekZBesedo(d.obrok) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Upnik:** {{p_jmeno}}, naslov {{p_adresa}}', '**Dolžnik:** {{k_jmeno}}, davčna številka {{k_davcna}}, naslov {{k_adresa}}'] },
    { nadpis: 'Pripoznava dolga', odstavce: ['Dolžnik pripozna, da upniku na dan podpisa tega dogovora dolguje **{{castka}}** (z besedo: {{castka_z_besedo}}) iz naslova: {{podlaga}}.'] },
    { nadpis: 'Obročno odplačilo', odstavce: ['Upnik soglaša, da dolžnik dolg odplača v {{stevilo}} mesečnih obrokih po **{{obrok}}** (z besedo: {{obrok_z_besedo}}), zadnji obrok v višini preostanka dolga.', 'Prvi obrok zapade {{prvi}}, vsak naslednji pa {{dan}}. dne v mesecu. Obroki se plačujejo na račun upnika IBAN {{iban}}.', 'Dolžnik lahko dolg ali njegov del plača tudi pred rokom.'] },
    { nadpis: 'Zamuda', odstavce: ['Če dolžnik zamudi s plačilom dveh obrokov, lahko upnik s pisnim obvestilom zahteva takojšnje plačilo celotnega preostalega dolga z zakonskimi zamudnimi obrestmi od dneva zamude.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s tem dogovorom, se uporablja Obligacijski zakonik. Dogovor je sestavljen v dveh enakih izvodih.'] },
  ],
};
