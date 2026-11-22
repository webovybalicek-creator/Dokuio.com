/**
 * Dāvinājuma līgums – Latvija (Civillikuma 1912. un turpm. p.). Dāvanas no laulātā un radiniekiem līdz 3. pakāpei neapliek ar IIN,
 * no citām fiziskām personām – līdz 1425 eiro gadā (likuma „Par iedzīvotāju ienākuma nodokli” 9. p. 35. punkts).
 */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, DAVANA, PAD_PERSONA, KAJENE } from './avoti';

export const davinajums: Sablona = {
  kod: 'LV-DAVINAJUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Dāvinājuma līgums', podnadpis: 'naudas summas vai kustamas lietas dāvinājums ar nodošanu (Civillikuma 1912. un turpmākie panti)',
  souborPdf: 'davinajuma-ligums', paticka: KAJENE('LV-DAVINAJUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'dāvinātājs', vpravo: 'apdāvinātais' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Nododiet lietu vai pārskaitiet naudu ar norādi “dāvinājums saskaņā ar līgumu”.', 'Katra puse patur vienu parakstītu eksemplāru.'],
  kontrola: [
    `Dāvanas no laulātā un radiniekiem līdz trešajai pakāpei (vecāki, vecvecāki, bērni, mazbērni, brāļi, māsas, vecāku brāļi un māsas, brāļu un māsu bērni) neapliek ar iedzīvotāju ienākuma nodokli. No citām personām neapliek līdz 1425 eiro gadā; no pārsnieguma nodokli maksā apdāvinātais ([LV portāls](${DAVANA.url})).`,
    'Radinieka dāvinājums gan jādeklarē, ja gadā tas pārsniedz 10 000 eiro – pārbaudiet savu situāciju VID.',
    'Nekustamā īpašuma dāvinājumam vajadzīga īpašuma tiesību nostiprināšana zemesgrāmatā; transportlīdzeklim papildus noformē īpašnieka maiņu CSDD.',
    'Līgums ir labs pierādījums par dāvanu un tās vērtību – īpaši, ja dāvana pārsniedz neapliekamo summu.',
    PAD_PERSONA,
  ],
  zdroje: [CL, DAVANA],
  kroky: [
    { id: 'puses', nazev: 'Dāvinātājs un apdāvinātais', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Dāvinātājs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Apdāvinātais – vārds, uzvārds', placeholder: 'piem., Līga Kalniņa', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'attieciba', typ: 'text', popis: 'Radniecība (pēc izvēles)', napoveda: 'Svarīgi nodoklim: laulātais un radinieki līdz 3. pakāpei ir atbrīvoti.', placeholder: 'piem., māte un meita', sirka: 30 },
    ] },
    { id: 'davana', nazev: 'Dāvana', pole: [
      { id: 'veids', typ: 'volba', popis: 'Ko dāvina', moznosti: [ { hodnota: 'nauda', popis: 'naudas summu' }, { hodnota: 'lieta', popis: 'kustamu lietu' } ] },
      { id: 'castka', typ: 'castka', popis: 'Summa (eiro)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'veids', je: 'nauda' } },
      { id: 'lieta', typ: 'textarea', popis: 'Lietas apraksts', placeholder: 'piem., portatīvais dators Lenovo ThinkPad, sērijas numurs …', sirka: 56, zobrazitKdyz: { pole: 'veids', je: 'lieta' } },
      { id: 'vertiba', typ: 'castka', popis: 'Lietas vērtība (eiro)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'veids', je: 'lieta' } },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka), vertiba_vardiem: (d) => summaVardiem(d.vertiba) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Dāvinātājs:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}', '**Apdāvinātais:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}', 'Pušu radniecība: {{attieciba}}.'] },
    { nadpis: 'Dāvinājuma priekšmets', odstavce: [{ volba: 'veids', uvodVzor: 'Dāvana (atzīmējiet vienu variantu):', moznosti: { nauda: 'Dāvinātājs dāvina apdāvinātajam **{{castka}}** (vārdiem: {{castka_vardiem}}), ko pārskaita uz bankas kontu vai nodod, parakstot līgumu.', lieta: 'Dāvinātājs dāvina apdāvinātajam šādu kustamu lietu: {{lieta}}, vērtībā {{vertiba}} (vārdiem: {{vertiba_vardiem}}), ko nodod, parakstot līgumu.' } }, 'Apdāvinātais dāvinājumu pieņem un apliecina, ka to ir saņēmis.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Jautājumos, kas nav noregulēti līgumā, piemēro Civillikuma noteikumus par dāvinājumu.', 'Līgums sagatavots divos vienādos eksemplāros.'] },
  ],
};
