/**
 * Dzīvojamās telpas īres līgums – Latvija (Dzīvojamo telpu īres likums). Līgums rakstveidā (7) uz noteiktu termiņu (9), drošības nauda
 * ne vairāk kā divu mēnešu īres maksa (12), īrnieks var atkāpties, rakstveidā brīdinot vismaz mēnesi iepriekš (20, 27); zemesgrāmatā
 * nenostiprināts līgums izbeidzas pēc dzīvokļa atsavināšanas (28).
 */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { DZTIL, CL, PAD_PERSONA, KAJENE } from './avoti';

export const iresLigums: Sablona = {
  kod: 'LV-IRE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Dzīvojamās telpas īres līgums', podnadpis: 'dzīvokļa vai mājas īre dzīvošanai (Dzīvojamo telpu īres likums)',
  souborPdf: 'ires-ligums', paticka: KAJENE('LV-IRE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'izīrētājs', vpravo: 'īrnieks' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Parakstiet līgumu divos eksemplāros vai ar eParakstu.', 'Nododot atslēgas, sastādiet pieņemšanas-nodošanas aktu ar skaitītāju rādījumiem.', 'Ja vēlaties, lai līgums būtu saistošs arī dzīvokļa nākamajam īpašniekam, nostipriniet īres tiesības zemesgrāmatā.'],
  kontrola: [
    `Dzīvojamās telpas īres līgumu slēdz rakstveidā un uz noteiktu termiņu ([Dzīvojamo telpu īres likuma 7. un 9. pants](${DZTIL.url})).`,
    'Drošības nauda nedrīkst pārsniegt divu mēnešu īres maksu. Ja tā nav izlietota, to atdod ne vēlāk kā dienā, kad dzīvoklis tiek atbrīvots, ja līgumā nav noteikts citādi (12. pants).',
    'Īrnieks var vienpusēji atkāpties no līguma, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš (20. un 27. pants).',
    'Ja līgums nav nostiprināts zemesgrāmatā, tas izbeidzas, kad dzīvokļa ieguvējs nostiprina īpašuma tiesības; īrniekam tad dzīvoklis jāatbrīvo divu mēnešu laikā pēc ieguvēja paziņojuma (28. pants).',
    'Laulātā un bērnu iemitināšanai pietiek iepriekš rakstveidā informēt izīrētāju; citu personu iemitināšanai vajadzīga izīrētāja rakstveida piekrišana (14. pants).',
    'Izīrētājs par īres ienākumu maksā iedzīvotāju ienākuma nodokli – pārbaudiet kārtību VID.',
    PAD_PERSONA,
  ],
  zdroje: [DZTIL, CL],
  kroky: [
    { id: 'puses', nazev: 'Izīrētājs un īrnieks', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Izīrētājs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Izīrētāja adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Īrnieks – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Īrnieka pašreizējā adrese', sirka: 46 },
    ] },
    { id: 'telpa', nazev: 'Dzīvojamā telpa', pole: [
      { id: 'byt', typ: 'text', popis: 'Dzīvojamās telpas adrese', placeholder: 'piem., Tērbatas iela 25-12, Rīga, LV-1011', sirka: 46 },
      { id: 'platiba', typ: 'cislo', popis: 'Kopējā platība', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'istabas', typ: 'cislo', popis: 'Istabu skaits', sirka: 6, polovina: true },
      { id: 'mebeles', typ: 'volba', popis: 'Iekārtojums', moznosti: [ { hodnota: 'ir', popis: 'ar mēbelēm (saraksts pieņemšanas-nodošanas aktā)' }, { hodnota: 'nav', popis: 'bez mēbelēm' } ] },
      { id: 'iemitinatie', typ: 'text', popis: 'Kopā ar īrnieku dzīvos (pēc izvēles)', placeholder: 'piem., laulātā Līga Bērziņa un dēls Pēteris', sirka: 56 },
    ] },
    { id: 'noteikumi', nazev: 'Termiņš un īres maksa', pole: [
      { id: 'od', typ: 'datum', popis: 'Īres sākums', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Īres beigas', napoveda: 'Likums paredz līgumu uz noteiktu termiņu.', sirka: 14, polovina: true },
      { id: 'ires_maksa', typ: 'castka', popis: 'Mēneša īres maksa (eiro)', sirka: 12, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Maksāt līdz katra mēneša … datumam', placeholder: 'piem., 5', sirka: 6, polovina: true },
      { id: 'drosibas_nauda', typ: 'castka', popis: 'Drošības nauda (eiro)', napoveda: 'Ne vairāk kā divu mēnešu īres maksa.', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Izīrētāja IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'pakalpojumi', typ: 'text', popis: 'Ar lietošanu saistītie maksājumi', placeholder: 'piem., apsaimniekošanu, siltumu, ūdeni un elektrību īrnieks maksā pēc rēķiniem', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { ires_maksa_vardiem: (d) => summaVardiem(d.ires_maksa), drosibas_nauda_vardiem: (d) => summaVardiem(d.drosibas_nauda) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Izīrētājs:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}', '**Īrnieks:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}'] },
    { nadpis: 'Īrējamā dzīvojamā telpa', vysvetleni: 'Kura dzīvojamā telpa tiek izīrēta.', odstavce: ['Izīrētājs nodod īrniekam lietošanā dzīvošanai dzīvojamo telpu adresē {{byt}}, kopējā platība {{platiba}} m², istabu skaits {{istabas}}.', { volba: 'mebeles', uvodVzor: 'Iekārtojums (atzīmējiet vienu variantu):', moznosti: { ir: 'Dzīvojamā telpa tiek izīrēta ar mēbelēm; to saraksts norādīts pieņemšanas-nodošanas aktā.', nav: 'Dzīvojamā telpa tiek izīrēta bez mēbelēm.' } }, 'Kopā ar īrnieku dzīvojamā telpā dzīvos: {{iemitinatie}}.'] },
    { nadpis: 'Līguma termiņš', vysvetleni: 'Likums paredz līgumu uz noteiktu termiņu; īrnieks var atkāpties ar mēneša brīdinājumu.', odstavce: ['Līgums noslēgts uz noteiktu termiņu no {{od}} līdz {{do}}.', 'Īrnieks var vienpusēji atkāpties no līguma, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš. Izīrētājs var atkāpties no līguma tikai Dzīvojamo telpu īres likumā noteiktajos gadījumos un termiņos.', 'Līgumam beidzoties, īrnieks atbrīvo un nodod dzīvojamo telpu tādā pašā stāvoklī, ievērojot parasto nolietojumu.'] },
    { nadpis: 'Īres maksa un drošības nauda', vysvetleni: 'Cik un kad tiek maksāts.', odstavce: ['Mēneša īres maksa ir **{{ires_maksa}}** (vārdiem: {{ires_maksa_vardiem}}), un to maksā līdz katra mēneša {{diena}}. datumam uz izīrētāja kontu IBAN {{iban}}.', 'Īrnieks iemaksā drošības naudu {{drosibas_nauda}} (vārdiem: {{drosibas_nauda_vardiem}}). Izīrētājs to atdod ne vēlāk kā dienā, kad dzīvojamā telpa tiek atbrīvota, ieturot pamatotus prasījumus no šī līguma.', 'Ar dzīvojamās telpas lietošanu saistītie maksājumi: {{pakalpojumi}}.'] },
    { nadpis: 'Dzīvojamās telpas lietošana', odstavce: ['Īrnieks lieto dzīvojamo telpu rūpīgi un saskaņā ar mājas iekšējās kārtības noteikumiem. Pārbūve un pārplānošana ir atļauta tikai ar izīrētāja rakstveida piekrišanu.', 'Citu personu iemitināšana un apakšīre ir atļauta tikai saskaņā ar likumu un ar izīrētāja rakstveida piekrišanu.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Jautājumos, kas nav noregulēti līgumā, piemēro Dzīvojamo telpu īres likumu un Civillikumu. Grozījumi izdarāmi rakstveidā. Līgums sagatavots divos vienādos eksemplāros.'] },
  ],
};
