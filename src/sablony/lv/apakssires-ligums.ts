/** Dzīvojamās telpas apakšīres līgums – Latvija. Apakšīres līgums rakstveidā (Dzīvojamo telpu īres likuma 6. p.); citu personu iemitināšanai vajadzīga izīrētāja rakstveida piekrišana (14. p.). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { DZTIL, PAD_PERSONA, KAJENE } from './avoti';

export const apakssire: Sablona = {
  kod: 'LV-APAKSIRE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Apakšīres līgums', podnadpis: 'dzīvojamās telpas vai istabas apakšīre ar izīrētāja piekrišanu',
  souborPdf: 'apakssires-ligums', paticka: KAJENE('LV-APAKSIRE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'īrnieks (apakšizīrētājs)', vpravo: 'apakšīrnieks' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Parakstiet līgumu divos eksemplāros vai ar eParakstu.', 'Pievienojiet izīrētāja rakstveida piekrišanas kopiju.'],
  kontrola: [
    `Apakšīrniekam dzīvojamās telpas lietošanas pamats ir rakstveidā noslēgts apakšīres līgums ([Dzīvojamo telpu īres likuma 6. pants](${DZTIL.url})).`,
    'Citu personu iemitināšanai likums prasa izīrētāja rakstveida piekrišanu (14. pants) – iegūstiet to pirms apakšīres. Paraugs pieņem, ka piekrišana ir saņemta.',
    'Pārbaudiet savu īres līgumu: tajā var būt noteikumi par apakšīri (8. pants).',
    'Apakšīre nevar ilgt ilgāk par jūsu īres līgumu. Par apakšīrnieka rīcību izīrētāja priekšā atbildat jūs.',
    PAD_PERSONA,
  ],
  zdroje: [DZTIL],
  kroky: [
    { id: 'puses', nazev: 'Īrnieks un apakšīrnieks', popis: 'Īrnieks nodod apakšīrniekam istabu vai visu dzīvojamo telpu.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Īrnieks – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
      { id: 'n_ik', typ: 'text', popis: 'Īrnieka personas kods', sirka: 14, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Īrnieka adrese', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Apakšīrnieks – vārds, uzvārds', sirka: 34 },
      { id: 'p_ik', typ: 'text', popis: 'Apakšīrnieka personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Apakšīrnieka pašreizējā adrese', sirka: 46 },
    ] },
    { id: 'telpa', nazev: 'Dzīvojamā telpa un piekrišana', pole: [
      { id: 'byt', typ: 'text', popis: 'Dzīvojamās telpas adrese', sirka: 46 },
      { id: 'apjoms', typ: 'volba', popis: 'Apjoms', moznosti: [ { hodnota: 'dala', popis: 'daļa dzīvojamās telpas (istaba)' }, { hodnota: 'visa', popis: 'visa dzīvojamā telpa' } ] },
      { id: 'dalas_apraksts', typ: 'text', popis: 'Kura daļa', placeholder: 'piem., 14 m² istaba, virtuve un vannas istaba kopīgā lietošanā', sirka: 56, zobrazitKdyz: { pole: 'apjoms', je: 'dala' } },
      { id: 'iziretajs', typ: 'text', popis: 'Izīrētājs (īpašnieks)', napoveda: 'Kurš deva piekrišanu apakšīrei.', sirka: 34 },
      { id: 'piekrisana', typ: 'datum', popis: 'Piekrišanas datums', napoveda: 'Pievienojiet piekrišanu līgumam.', sirka: 14, polovina: true },
    ] },
    { id: 'noteikumi', nazev: 'Termiņš un maksājumi', pole: [
      { id: 'od', typ: 'datum', popis: 'Apakšīre no', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Apakšīre līdz', sirka: 14, polovina: true },
      { id: 'maksa', typ: 'castka', popis: 'Mēneša apakšīres maksa (eiro)', napoveda: 'Kopā ar pakalpojumiem, ja nevienojaties citādi.', sirka: 12, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Maksāt līdz katra mēneša … datumam', placeholder: 'piem., 5', sirka: 6, polovina: true },
      { id: 'drosibas_nauda', typ: 'castka', popis: 'Drošības nauda (eiro, pēc izvēles)', sirka: 12, polovina: true },
      { id: 'konts', typ: 'text', popis: 'Īrnieka IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { maksa_vardiem: (d) => summaVardiem(d.maksa) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Īrnieks (apakšizīrētājs):** {{n_jmeno}}, personas kods {{n_ik}}, adrese {{n_adresa}}', '**Apakšīrnieks:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}'] },
    { nadpis: 'Līguma priekšmets', vysvetleni: 'Kas tiek nodots apakšīrē un ar kura piekrišanu.', odstavce: [{ volba: 'apjoms', uvodVzor: 'Apjoms (atzīmējiet vienu variantu):', moznosti: { dala: 'Īrnieks nodod apakšīrniekam apakšīrē daļu dzīvojamās telpas adresē {{byt}}: {{dalas_apraksts}}.', visa: 'Īrnieks nodod apakšīrniekam apakšīrē visu dzīvojamo telpu adresē {{byt}}.' } }, 'Izīrētājs {{iziretajs}} deva rakstveida piekrišanu apakšīrei {{piekrisana}}; piekrišana pievienota līgumam.', 'Apakšīre izbeidzas ne vēlāk kā tad, kad izbeidzas īrnieka īres līgums.'] },
    { nadpis: 'Termiņš', odstavce: ['Apakšīre sākas {{od}} un beidzas {{do}}.', 'Līgumam beidzoties, apakšīrnieks atdod dzīvojamo telpu tādā pašā stāvoklī, ievērojot parasto nolietojumu.'] },
    { nadpis: 'Maksājumi', odstavce: ['Apakšīrnieks maksā mēneša apakšīres maksu **{{maksa}}** (vārdiem: {{maksa_vardiem}}) kopā ar pakalpojumiem līdz katra mēneša {{diena}}. datumam uz kontu IBAN {{konts}}.', 'Apakšīrnieks iemaksāja drošības naudu {{drosibas_nauda}}, ko atdod dzīvojamās telpas atdošanas dienā, ieturot pamatotus prasījumus.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Apakšīrnieks ievēro mājas iekšējās kārtības noteikumus un nenodod dzīvojamo telpu trešajām personām.', 'Grozījumi izdarāmi rakstveidā. Līgums sagatavots divos vienādos eksemplāros.'] },
  ],
};
