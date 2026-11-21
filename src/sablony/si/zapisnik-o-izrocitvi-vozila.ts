/** Izročilni zapisnik za vozilo – Slovenija. Čas izročitve, kilometri, ključi, dokumenti in poškodbe. */
import type { Sablona } from '../typy';
import { OZ, MZI_PRENOS, NOGA } from './viri';

export const zapisnikVozila: Sablona = {
  kod: 'SI-ZAPISNIK-VOZILO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Zapisnik o izročitvi vozila', podnadpis: 'stanje vozila ob izročitvi in točen čas prevzema',
  souborPdf: 'zapisnik-o-izrocitvi-vozila', paticka: NOGA('SI-ZAPISNIK-VOZILO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'izročil', vpravo: 'prevzel' },
  cislovatClanky: false,
  slovo: { n: 'zapisnik', g: 'zapisnika', a: 'zapisnik', l: 'zapisniku' },
  coDal: ['Vsaka stranka obdrži en izvod.', 'Fotografirajte števec kilometrov in vozilo z vseh strani.'],
  kontrola: [
    'Vpišite točno uro izročitve – do spremembe lastništva lahko prekrški prihajajo na dosedanjega lastnika ([gov.si](https://www.gov.si/novice/2024-02-06-pri-prodaji-vozila-je-treba-urediti-tudi-prenos-lastnistva-novemu-lastniku/)).',
    'Zabeležite vse vidne poškodbe in kaj je bilo izročeno (ključi, prometno dovoljenje, servisna knjižica, zimske pnevmatike).',
    'Identifikacijska številka v zapisniku naj bo enaka kot v pogodbi in prometnem dovoljenju.',
  ],
  zdroje: [OZ, MZI_PRENOS],
  kroky: [
    { id: 'osebe', nazev: 'Kdo izroča in kdo prevzema', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Izroča – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Prevzema – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    ] },
    { id: 'vozilo', nazev: 'Vozilo in stanje', pole: [
      { id: 'znacka', typ: 'text', popis: 'Znamka in tip', placeholder: 'npr. Renault Clio', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Identifikacijska številka (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Registrska oznaka', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Stanje števca', jednotka: 'km', sirka: 12, polovina: true },
      { id: 'gorivo', typ: 'text', popis: 'Gorivo v rezervoarju', placeholder: 'npr. polovica', sirka: 14, polovina: true },
      { id: 'kljuci', typ: 'cislo', popis: 'Število ključev', sirka: 4, polovina: true },
      { id: 'dokumenti', typ: 'text', popis: 'Izročeni dokumenti', placeholder: 'npr. prometno dovoljenje, servisna knjižica', sirka: 56 },
      { id: 'poskodbe', typ: 'textarea', popis: 'Poškodbe in opombe', placeholder: 'npr. odrgnina na zadnjem odbijaču', sirka: 64 },
      { id: 'cas', typ: 'text', popis: 'Ura izročitve', placeholder: 'npr. 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum izročitve', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Zapisnik', odstavce: [
    '**Izročil:** {{p_jmeno}}, {{p_adresa}}',
    '**Prevzel:** {{k_jmeno}}, {{k_adresa}}',
    'Vozilo {{znacka}}, identifikacijska številka {{vin}}, registrska oznaka {{spz}}, je bilo izročeno dne {{datum}} ob **{{cas}}**.',
    'Stanje števca: {{km}} km. Gorivo: {{gorivo}}. Število ključev: {{kljuci}}. Izročeni dokumenti: {{dokumenti}}.',
    'Poškodbe in opombe: {{poskodbe}}',
    'Od navedenega časa prevzemnik odgovarja za uporabo vozila, vključno s prometnimi prekrški.',
  ] }],
};
