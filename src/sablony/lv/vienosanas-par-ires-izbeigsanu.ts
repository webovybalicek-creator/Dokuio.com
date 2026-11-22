/** Vienošanās par dzīvojamās telpas īres līguma izbeigšanu – Latvija. Pusēm vienojoties līgumu var izbeigt jebkurā brīdī. */
import type { Sablona } from '../typy';
import { DZTIL, KAJENE } from './avoti';

export const iresIzbeigsana: Sablona = {
  kod: 'LV-IRE-IZBEIGSANA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Vienošanās par īres līguma izbeigšanu', podnadpis: 'dzīvojamās telpas īres līguma izbeigšana pusēm vienojoties',
  souborPdf: 'vienosanas-par-ires-izbeigsanu', paticka: KAJENE('LV-IRE-IZBEIGSANA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'izīrētājs', vpravo: 'īrnieks' },
  slovo: { n: 'vienošanās', g: 'vienošanās', a: 'vienošanos', l: 'vienošanās' },
  pripominky: (d) => [
    ...(typeof d.beigas === 'string' && d.beigas ? [{ nazev: 'Īres līguma izbeigšanās', datum: d.beigas }] : []),
    ...(typeof d.atbrivosana === 'string' && d.atbrivosana ? [{ nazev: 'Dzīvojamās telpas atdošana un pieņemšanas-nodošanas akts', datum: d.atbrivosana }] : []),
  ],
  coDal: ['Parakstiet vienošanos divos eksemplāros vai ar eParakstu.', 'Atdodot dzīvojamo telpu, sastādiet aktu ar skaitītāju rādījumiem.'],
  kontrola: [
    'Pusēm vienojoties, īres līgumu var izbeigt jebkurā brīdī – bez uzteikuma termiņa.',
    'Vienošanos paraksta visi izīrētāji un visi īrnieki.',
    `Ierakstiet konkrētu līguma izbeigšanās un dzīvokļa atbrīvošanas datumu; līdz izbeigšanās brīdim dzīvojamā telpa jāatbrīvo ([Dzīvojamo telpu īres likuma 29. pants](${DZTIL.url})).`,
    'Vienojieties, kad un kā tiek atdota drošības nauda un kā tiek apmaksāti pēdējā perioda pakalpojumi.',
  ],
  zdroje: [DZTIL],
  kroky: [
    { id: 'puses', nazev: 'Puses un dzīvojamā telpa', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Izīrētājs – vārds, uzvārds', sirka: 34 },
      { id: 'p_adresa', typ: 'text', popis: 'Izīrētāja adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Īrnieks – vārds, uzvārds', napoveda: 'Ja īrnieki ir vairāki, ierakstiet visus.', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Īrnieka personas kods', sirka: 14, polovina: true },
      { id: 'byt', typ: 'text', popis: 'Dzīvojamās telpas adrese', sirka: 46 },
      { id: 'liguma_datums', typ: 'datum', popis: 'Īres līguma datums', sirka: 14, polovina: true },
    ] },
    { id: 'izbeigsana', nazev: 'Izbeigšana', pole: [
      { id: 'beigas', typ: 'datum', popis: 'Īres līgums izbeidzas', napoveda: 'Pēdējā īres diena. Līdz šai dienai maksā īres maksu.', sirka: 14, polovina: true },
      { id: 'atbrivosana', typ: 'datum', popis: 'Dzīvojamo telpu atdot līdz', sirka: 14, polovina: true },
      { id: 'drosibas_nauda', typ: 'volba', popis: 'Drošības nauda', moznosti: [ { hodnota: 'atbrivojot', popis: 'atdod dzīvokļa atbrīvošanas dienā' }, { hodnota: 'pec_rekiniem', popis: 'atdod pēc pakalpojumu norēķina' }, { hodnota: 'nav', popis: 'drošības nauda netika iemaksāta' } ] },
      { id: 'konts', typ: 'text', popis: 'Īrnieka IBAN drošības naudai', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'citas', typ: 'textarea', popis: 'Citas vienošanās (pēc izvēles)', placeholder: 'piem., īrnieks pirms atdošanas nokrāso sienas', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Izīrētājs:** {{p_jmeno}}, adrese {{p_adresa}}', '**Īrnieks:** {{k_jmeno}}, personas kods {{k_ik}}'] },
    { nadpis: 'Īres līguma izbeigšana', vysvetleni: 'Kad īre beidzas un kad tiek atdota dzīvojamā telpa.', odstavce: ['Puses vienojas, ka {{liguma_datums}} noslēgtais īres līgums par dzīvojamo telpu adresē {{byt}} izbeidzas {{beigas}}.', 'Īrnieks atdod dzīvojamo telpu kopā ar visām atslēgām ne vēlāk kā {{atbrivosana}} tādā pašā stāvoklī, ievērojot parasto nolietojumu. Atdodot tiek sastādīts akts.', 'Īres maksu un ar lietošanu saistītos maksājumus maksā līdz līguma izbeigšanās dienai. Citu prasījumu sakarā ar izbeigšanu pusēm nav.'] },
    { nadpis: 'Drošības nauda un citas vienošanās', odstavce: [{ volba: 'drosibas_nauda', uvodVzor: 'Drošības nauda (atzīmējiet vienu variantu):', moznosti: { atbrivojot: 'Izīrētājs atdod drošības naudu dzīvojamās telpas atbrīvošanas dienā uz kontu IBAN {{konts}}, ieturot pamatotus prasījumus no īres līguma.', pec_rekiniem: 'Izīrētājs atdod drošības naudu pēc pēdējā perioda pakalpojumu norēķina uz kontu IBAN {{konts}}, ieturot pamatotus prasījumus no īres līguma.', nav: 'Īrnieks drošības naudu neiemaksāja.' } }, 'Citas vienošanās: {{citas}}', 'Vienošanās sagatavota divos vienādos eksemplāros un stājas spēkā, kad to parakstījušas abas puses.'] },
  ],
};
