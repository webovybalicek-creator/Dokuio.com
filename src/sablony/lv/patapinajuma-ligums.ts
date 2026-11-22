/** Patapinājuma līgums – Latvija (Civillikuma 1947. un turpm. p.). Lietas nodošana bezatlīdzības lietošanā. */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const patapinajums: Sablona = {
  kod: 'LV-PATAPINAJUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Patapinājuma līgums', podnadpis: 'lietas nodošana bezatlīdzības lietošanā (Civillikuma 1947. un turpmākie panti)',
  souborPdf: 'patapinajuma-ligums', paticka: KAJENE('LV-PATAPINAJUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'patapinātājs', vpravo: 'patapinājuma ņēmējs' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  pripominky: (d) => (d.termins === 'datums' && typeof d.atdot === 'string' && d.atdot ? [{ nazev: 'Lietas atdošana', datum: d.atdot, popis: 'Atdodot pārbaudiet lietu kopā.' }] : []),
  coDal: ['Parakstiet līgumu divos eksemplāros.', 'Nododot pārbaudiet lietu kopā un pierakstiet trūkumus.', 'Atdodot lūdziet apstiprinājumu, ka lieta atdota labā stāvoklī.'],
  kontrola: [
    'Patapinājums ir bez atlīdzības. Ja par lietošanu prasāt maksu, tas ir nomas vai īres līgums.',
    'Aprakstiet lietu precīzi (marka, modelis, sērijas numurs, piederumi) un tās stāvokli nodošanas brīdī.',
    'Patapinājuma ņēmējs lieto lietu tikai nolīgtajā veidā un nenodod to trešajām personām bez patapinātāja atļaujas.',
    'Vienojieties, kad lieta tiek atdota – līdz noteiktam datumam vai pēc mērķa sasniegšanas.',
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Patapinātājs un patapinājuma ņēmējs', popis: 'Patapinātājs nodod lietu bez atlīdzības lietošanā; ņēmējs to lieto un atdod.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Patapinātājs – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Patapinātāja personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Patapinātāja adrese', sirka: 46 },
      { id: 'v_jmeno', typ: 'text', popis: 'Patapinājuma ņēmējs – vārds, uzvārds', sirka: 34 },
      { id: 'v_ik', typ: 'text', popis: 'Ņēmēja personas kods', sirka: 14, polovina: true },
      { id: 'v_adresa', typ: 'text', popis: 'Ņēmēja adrese', sirka: 46 },
    ] },
    { id: 'lieta', nazev: 'Lieta', pole: [
      { id: 'lieta', typ: 'textarea', popis: 'Lietošanā nododamā lieta', napoveda: 'Marka, modelis, sērijas numurs, piederumi.', placeholder: 'piem., vieglās automašīnas piekabe, reģistrācijas numurs AB-123, ar pārsegu un atslēgu', sirka: 64 },
      { id: 'stavoklis', typ: 'text', popis: 'Stāvoklis nodošanas brīdī', placeholder: 'piem., kārtībā, skrāpējums uz kreisā spārna', sirka: 56 },
      { id: 'vertiba', typ: 'castka', popis: 'Lietas vērtība (eiro, pēc izvēles)', napoveda: 'Gadījumam, ja lieta tiek pazaudēta vai iet bojā.', sirka: 12, polovina: true },
      { id: 'merkis', typ: 'text', popis: 'Lietošanas mērķis', placeholder: 'piem., mēbeļu pārvešana pārceļoties', sirka: 46 },
    ] },
    { id: 'termins', nazev: 'Termiņš un atdošana', pole: [
      { id: 'nodots', typ: 'datum', popis: 'Nodošanas diena', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'termins', typ: 'volba', popis: 'Uz cik ilgu laiku', moznosti: [ { hodnota: 'datums', popis: 'līdz noteiktam datumam' }, { hodnota: 'merkis', popis: 'līdz mērķa sasniegšanai' } ] },
      { id: 'atdot', typ: 'datum', popis: 'Atdot līdz', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'termins', je: 'datums' } },
      { id: 'atdosanas_vieta', typ: 'text', popis: 'Atdošanas vieta', placeholder: 'piem., patapinātāja adresē', sirka: 46 },
      { id: 'misto', typ: 'text', popis: 'Parakstīšanas vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Parakstīšanas datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { vertiba_vardiem: (d) => summaVardiem(d.vertiba) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Patapinātājs:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}', '**Patapinājuma ņēmējs:** {{v_jmeno}}, personas kods {{v_ik}}, adrese {{v_adresa}}'] },
    { nadpis: 'Līguma priekšmets', vysvetleni: 'Patapinātājs nodod lietu bez atlīdzības lietošanā.', odstavce: ['Patapinātājs nodod patapinājuma ņēmējam bezatlīdzības lietošanā šādu lietu: {{lieta}}.', 'Stāvoklis nodošanas brīdī: {{stavoklis}}. Lietas vērtība: {{vertiba}}.', 'Lietošanas mērķis: {{merkis}}. Patapinātājs apliecina, ka viņam nav zināmi lietas slēpti trūkumi, par kuriem viņš nav paziņojis.'] },
    { nadpis: 'Termiņš un atdošana', odstavce: ['Lieta nodota {{nodots}}.', { volba: 'termins', uvodVzor: 'Termiņš (atzīmējiet vienu variantu):', moznosti: { datums: 'Patapinājums nolīgts līdz {{atdot}}. Līdz šai dienai patapinājuma ņēmējs atdod lietu.', merkis: 'Patapinājums nolīgts līdz mērķa sasniegšanai. Patapinājuma ņēmējs atdod lietu, tiklīdz tā viņam vairs nav vajadzīga.' } }, 'Patapinājuma ņēmējs atdod lietu vietā {{atdosanas_vieta}} tādā pašā stāvoklī, ievērojot parasto nolietojumu.', 'Patapinātājs var prasīt lietu atdot pirms termiņa, ja ņēmējs to lieto pretēji līgumam vai bez atļaujas nodod trešajai personai.'] },
    { nadpis: 'Lietas lietošana', vysvetleni: 'Kā lieta tiek lietota un kurš ko sedz.', odstavce: ['Patapinājuma ņēmējs lieto lietu rūpīgi, tikai saskaņā ar līgumu, un sargā to no bojājuma, pazušanas un bojāejas.', 'Patapinājuma ņēmējs nenodod lietu trešajām personām bez patapinātāja atļaujas.', 'Parastos uzturēšanas izdevumus sedz patapinājuma ņēmējs. Par lielāka remonta nepieciešamību viņš nekavējoties paziņo patapinātājam.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Jautājumos, kas nav noregulēti līgumā, piemēro Civillikuma noteikumus par patapinājumu.', 'Grozījumi izdarāmi rakstveidā. Līgums sagatavots divos vienādos eksemplāros, pa vienam katrai pusei.'] },
  ],
};
