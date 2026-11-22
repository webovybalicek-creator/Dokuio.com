/**
 * Lietota transportlīdzekļa pirkuma līgums starp privātpersonām – Latvija (Civillikuma 2002. un turpm. p.). Īpašnieka maiņa e-CSDD:
 * pircējs izdara atzīmi, pārdevējs to apstiprina 5 dienu laikā, pircējs reģistrē maiņu 5 dienu laikā; bez samaksāta transportlīdzekļa
 * ekspluatācijas nodokļa par kārtējo gadu maiņu nereģistrē.
 */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { CL, CSDD, TEN, PAD_PERSONA, PAD_SKAIDRA, KAJENE } from './avoti';

export const autoLigums: Sablona = {
  kod: 'LV-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Transportlīdzekļa pirkuma līgums', podnadpis: 'lietota transportlīdzekļa pārdošana starp privātpersonām (Civillikuma 2002. un turpmākie panti)',
  souborPdf: 'auto-pirkuma-ligums', paticka: KAJENE('LV-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'pārdevējs', vpravo: 'pircējs' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: [
    'Izdrukājiet līgumu divos eksemplāros un parakstiet abus – vai parakstiet to ar drošu elektronisko parakstu (eParaksts).',
    'Pircējs e-CSDD izdara atzīmi par vēlmi iegādāties transportlīdzekli, un pārdevējs to apstiprina 5 dienu laikā; ar apstiprinājumu īpašuma tiesības pāriet pircējam.',
    'Pircējs 5 dienu laikā reģistrē īpašnieka maiņu e-CSDD vai CSDD klientu apkalpošanas centrā un pirms braukšanas iegādājas OCTA polisi.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predavane_datum);
    if (!od) return [];
    return [{ nazev: 'Īpašnieka maiņas apstiprināšana e-CSDD (5 dienas)', datum: isoDatum(pridejDny(od, 5)), popis: 'Pircējs izdara atzīmi, pārdevējs to apstiprina; citādi atzīme tiek dzēsta.' }];
  },
  kontrola: [
    `Pircējs e-CSDD izdara atzīmi, un pārdevējs to apstiprina 5 dienu laikā – citādi atzīme tiek dzēsta. Īpašuma tiesības pāriet ar pārdevēja apstiprinājumu ([CSDD](${CSDD.url})).`,
    'Līdz īpašnieka maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto – ierakstiet nodošanas datumu un laiku un neatlieciet apstiprinājumu.',
    `CSDD īpašnieka maiņu nereģistrē, ja par kārtējo gadu nav samaksāts transportlīdzekļa ekspluatācijas nodoklis – vienojieties, kurš to sedz ([likums](${TEN.url})).`,
    'Pārdevējam jābūt reģistrācijas apliecībā ierakstītajam īpašniekam – salīdziniet datus ar viņa personu apliecinošo dokumentu.',
    'VIN reģistrācijas apliecībā jāsakrīt ar numuru uz transportlīdzekļa. Ja transportlīdzeklim reģistrēts aizliegums vai komercķīla, CSDD īpašnieka maiņu neveiks.',
    PAD_PERSONA,
    PAD_SKAIDRA,
  ],
  zdroje: [CL, CSDD, TEN],
  kroky: [
    { id: 'puses', nazev: 'Pārdevējs un pircējs', popis: 'Dati no personu apliecinošā dokumenta.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pārdevējs – vārds, uzvārds', napoveda: 'Reģistrācijas apliecībā ierakstītais īpašnieks.', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Pārdevēja personas kods', placeholder: 'piem., 010180-12345', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Pārdevēja adrese', placeholder: 'piem., Brīvības iela 10-5, Rīga, LV-1010', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Pircējs – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Pircēja personas kods', placeholder: 'piem., 150585-12345', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Pircēja adrese', placeholder: 'piem., Lielā iela 5, Jelgava, LV-3001', sirka: 46 },
    ] },
    { id: 'transportlidzeklis', nazev: 'Transportlīdzeklis', popis: 'Ierakstiet datus no reģistrācijas apliecības.', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marka un modelis', placeholder: 'piem., Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'Identifikācijas numurs (VIN)', napoveda: '17 zīmes, reģistrācijas apliecības lauks E.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Valsts reģistrācijas numurs', placeholder: 'piem., AB-1234', sirka: 12, polovina: true },
      { id: 'rok', typ: 'text', popis: 'Pirmās reģistrācijas gads', placeholder: 'piem., 2017', sirka: 10, polovina: true },
      { id: 'barva', typ: 'text', popis: 'Krāsa', placeholder: 'piem., pelēka metāliska', sirka: 18, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Nobraukums', napoveda: 'Nolasiet parakstīšanas dienā.', placeholder: 'piem., 168400', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'defekti', typ: 'volba', popis: 'Zināmie defekti', napoveda: 'Pastāstiet godīgi, ko zināt – par defektiem, par kuriem pircējs zināja, pārdevējs vēlāk neatbild.', moznosti: [ { hodnota: 'nav', popis: 'Pārdevējam defekti nav zināmi' }, { hodnota: 'ir', popis: 'Transportlīdzeklim ir zināmi defekti' } ] },
      { id: 'defekti_apraksts', typ: 'textarea', popis: 'Defektu apraksts', placeholder: 'piem., plaisa vējstiklā, nedarbojas kondicionieris', sirka: 56, zobrazitKdyz: { pole: 'defekti', je: 'ir' } },
    ] },
    { id: 'cena', nazev: 'Cena un samaksa', pole: [
      { id: 'cena', typ: 'castka', popis: 'Cena (eiro)', napoveda: 'Summu vārdiem pievienosim paši.', placeholder: 'piem., 7900', sirka: 12, polovina: true },
      { id: 'samaksa', typ: 'volba', popis: 'Samaksas veids', napoveda: 'Bankas pārskaitījums atstāj pierādījumu par samaksu.', moznosti: [ { hodnota: 'skaidra', popis: 'Skaidrā naudā, parakstot' }, { hodnota: 'banka', popis: 'Uz pārdevēja bankas kontu' } ] },
      { id: 'iban', typ: 'text', popis: 'Pārdevēja IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
      { id: 'samaksas_termins', typ: 'datum', popis: 'Samaksas termiņš', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
    ] },
    { id: 'nodosana', nazev: 'Nodošana', pole: [
      { id: 'predavane_datum', typ: 'datum', popis: 'Nodošanas datums', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'predavane_ora', typ: 'text', popis: 'Nodošanas laiks', napoveda: 'Svarīgi, ja vēlāk pienāk sods.', placeholder: 'piem., 14:30', sirka: 8, polovina: true },
      { id: 'atslegas', typ: 'cislo', popis: 'Atslēgu skaits', placeholder: 'piem., 2', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Parakstīšanas vieta', placeholder: 'piem., Rīga', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Parakstīšanas datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => summaVardiem(d.cena) },
  clanky: [
    { nadpis: 'Puses', vysvetleni: 'Kas slēdz līgumu. Datiem jāsakrīt ar personu apliecinošajiem dokumentiem.', odstavce: ['**Pārdevējs:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}', '**Pircējs:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}'] },
    { nadpis: 'Līguma priekšmets', vysvetleni: 'Kurš transportlīdzeklis tiek pārdots. Svarīgākais ir VIN.', odstavce: ['Pārdevējs pārdod un pircējs pērk vieglo automobili, marka un modelis {{znacka}}, identifikācijas numurs (VIN) {{vin}}, valsts reģistrācijas numurs {{spz}}, pirmās reģistrācijas gads {{rok}}, krāsa {{barva}} (turpmāk – transportlīdzeklis).', 'Pārdevējs apliecina, ka transportlīdzeklis pieder viņam, nav nodots līzingā vai ieķīlāts un uz to nav citu trešo personu tiesību.'] },
    { nadpis: 'Transportlīdzekļa stāvoklis', vysvetleni: 'Ko pārdevējs zina par transportlīdzekli.', odstavce: ['Nobraukums parakstīšanas dienā ir {{km}} km. Pārdevējam nav zināms, ka odometrs būtu nomainīts vai tā rādījumi mainīti.', { volba: 'defekti', uvodVzor: 'Zināmie defekti (atzīmējiet vienu variantu):', moznosti: { nav: 'Pārdevējam transportlīdzekļa defekti nav zināmi.', ir: 'Pārdevējs informēja pircēju par šādiem transportlīdzekļa defektiem: {{defekti_apraksts}}' } }, 'Pircējs apliecina, ka ir apskatījis transportlīdzekli, zina tā stāvokli un pērk to esošajā stāvoklī.'] },
    { nadpis: 'Cena un samaksa', vysvetleni: 'Cik, kā un kad tiek maksāts.', odstavce: ['Transportlīdzekļa cena ir **{{cena}}** (vārdiem: {{cena_vardiem}}).', { volba: 'samaksa', uvodVzor: 'Samaksas veids (atzīmējiet vienu variantu):', moznosti: { skaidra: 'Pircējs samaksāja cenu skaidrā naudā, parakstot līgumu. Ar savu parakstu pārdevējs apliecina, ka ir saņēmis visu summu.', banka: 'Pircējs samaksā cenu uz pārdevēja bankas kontu IBAN {{iban}} ne vēlāk kā {{samaksas_termins}}.' } }] },
    { nadpis: 'Transportlīdzekļa nodošana', vysvetleni: 'Kad un ar ko pircējs saņem transportlīdzekli.', odstavce: ['Pārdevējs nodod pircējam transportlīdzekli {{predavane_datum}} plkst. {{predavane_ora}} kopā ar {{atslegas}} atslēgām, reģistrācijas apliecību un citiem transportlīdzekļa dokumentiem.', 'Ar nodošanu pircējam pāriet transportlīdzekļa nejaušas bojāejas un bojājuma risks. No šī brīža pircējs atbild par transportlīdzekļa lietošanu, jo īpaši par ceļu satiksmes noteikumu pārkāpumiem.'] },
    { nadpis: 'Īpašnieka maiņa', vysvetleni: 'Kas notiek tālāk un kas to dara.', odstavce: ['Puses noformē īpašnieka maiņu e-CSDD vai CSDD klientu apkalpošanas centrā: pircējs izdara atzīmi par vēlmi iegādāties transportlīdzekli, un pārdevējs to apstiprina ne vēlāk kā 5 dienu laikā pēc transportlīdzekļa nodošanas. Pircējs reģistrē īpašnieka maiņu savā vārdā 5 dienu laikā pēc apstiprinājuma.', 'Īpašnieka maiņas reģistrācijas maksu sedz pircējs, ja puses nav vienojušās citādi. Pārdevējs apliecina, ka transportlīdzekļa ekspluatācijas nodoklis par kārtējo gadu ir samaksāts vai tiks samaksāts līdz īpašnieka maiņas reģistrācijai. Pircējs pirms transportlīdzekļa lietošanas iegādājas OCTA polisi.'] },
    { nadpis: 'Noslēguma noteikumi', vysvetleni: 'Formalitātes.', odstavce: ['Jautājumos, kas nav noregulēti līgumā, piemēro Civillikuma noteikumus par pirkuma līgumu.', 'Līgums sagatavots divos vienādos eksemplāros, pa vienam katrai pusei.'] },
  ],
};
