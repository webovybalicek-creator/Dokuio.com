/** Transporto priemonės perdavimo–priėmimo aktas – Lietuva. Tikslus perdavimo laikas – iki nuosavybės pasikeitimo deklaravimo savininku laikomas registruotas asmuo. */
import type { Sablona } from '../typy';
import { CK, REGITRA, PORASTE } from './saltiniai';

export const autoAktas: Sablona = {
  kod: 'LT-AKTAS-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Transporto priemonės perdavimo–priėmimo aktas', podnadpis: 'transporto priemonės būklė perdavimo metu ir tikslus perdavimo laikas',
  souborPdf: 'automobilio-perdavimo-aktas', paticka: PORASTE('LT-AKTAS-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'perdavė', vpravo: 'priėmė' },
  cislovatClanky: false,
  slovo: { n: 'aktas', g: 'akto', a: 'aktą', l: 'akte' },
  prevzit: {
    kod: 'LT-AUTO',
    nazev: 'transporto priemonės pirkimo–pardavimo sutartis',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, atslegas: d.atslegas, laiks: d.predavane_ora, misto: d.misto, datum: d.predavane_datum }),
  },
  coDal: ['Kiekviena šalis pasilieka po vieną egzempliorių.', 'Nufotografuokite prietaisų skydelį su rida ir transporto priemonę iš visų pusių.'],
  kontrola: [
    `Įrašykite tikslų perdavimo laiką – kol nuosavybės pasikeitimas nedeklaruotas Regitroje, valstybė savininku laiko registruotą asmenį, todėl baudos gali ateiti jam ([Regitra](${REGITRA.url})).`,
    'Pažymėkite visus matomus pažeidimus ir tai, kas perduota (rakteliai, registracijos liudijimas, serviso knygelė, žieminės padangos).',
    'VIN akte turi būti toks pat kaip sutartyje ir registracijos liudijime.',
  ],
  zdroje: [CK, REGITRA],
  kroky: [
    { id: 'asmenys', nazev: 'Kas perduoda ir kas priima', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Perduoda – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Priima – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    ] },
    { id: 'transporto_priemone', nazev: 'Transporto priemonė ir būklė', pole: [
      { id: 'znacka', typ: 'text', popis: 'Markė ir modelis', placeholder: 'pvz., Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'Identifikavimo numeris (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Valstybinis registracijos numeris', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Rida', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'degviela', typ: 'text', popis: 'Degalų bake', placeholder: 'pvz., pusė bako', sirka: 18, polovina: true },
      { id: 'atslegas', typ: 'cislo', popis: 'Raktelių skaičius', sirka: 6, polovina: true },
      { id: 'dokumenti', typ: 'text', popis: 'Perduoti dokumentai', placeholder: 'pvz., registracijos liudijimas, serviso knygelė', sirka: 46 },
      { id: 'bojajumi', typ: 'textarea', popis: 'Pažeidimai ir pastabos', placeholder: 'pvz., įbrėžimas ant galinio buferio', sirka: 56 },
      { id: 'laiks', typ: 'text', popis: 'Perdavimo laikas', placeholder: 'pvz., 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Perdavimo data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Aktas', odstavce: [
    '**Perdavė:** {{p_jmeno}}, {{p_adresa}}',
    '**Priėmė:** {{k_jmeno}}, {{k_adresa}}',
    'Transporto priemonė {{znacka}}, identifikavimo numeris (VIN) {{vin}}, valstybinis registracijos numeris {{spz}}, perduota {{datum}} **{{laiks}}** val.',
    'Rida: {{km}} km. Degalai: {{degviela}}. Raktelių skaičius: {{atslegas}}. Perduoti dokumentai: {{dokumenti}}.',
    'Pažeidimai ir pastabos: {{bojajumi}}',
    'Nuo šio momento priėmėjas atsako už transporto priemonės naudojimą, ypač už kelių eismo taisyklių pažeidimus.',
  ] }],
};
