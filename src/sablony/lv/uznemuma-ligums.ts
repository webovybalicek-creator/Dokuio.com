/** Uzņēmuma līgums – Latvija (Civillikuma 2212. un turpm. p.). Darbu pasūtīšana meistaram vai būvfirmai. */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const uznemumaLigums: Sablona = {
  kod: 'LV-UZNEMUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Uzņēmuma līgums', podnadpis: 'darbu pasūtīšana meistaram vai būvfirmai (Civillikuma 2212. un turpmākie panti)',
  souborPdf: 'uznemuma-ligums', paticka: KAJENE('LV-UZNEMUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pasūtītājs', vpravo: 'uzņēmējs' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Parakstiet līgumu divos eksemplāros vai ar eParakstu.', 'Pieņemot darbu, pārbaudiet to un pierakstiet trūkumus pieņemšanas aktā.', 'Par katru maksājumu prasiet rēķinu.'],
  kontrola: [
    'Aprakstiet darbu precīzi (darbi, materiāli, apjomi) – ko nav pierakstījuši, to viegli apstrīdēt.',
    'Nosakiet izpildes termiņu un to, kas notiek kavējuma gadījumā.',
    'Izvairieties no liela avansa; atlīdzību maksājiet pēc darba pieņemšanas.',
    'Pieņemot darbu, pārbaudiet to; trūkumu gadījumā varat prasīt to novēršanu vai atlīdzības samazinājumu.',
    'Pārbaudiet, vai uzņēmējs ir reģistrēts kā komersants vai saimnieciskās darbības veicējs, un būvdarbiem – vai vajadzīga būvatļauja vai paskaidrojuma raksts.',
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Pasūtītājs un uzņēmējs', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pasūtītājs – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Pasūtītāja adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Uzņēmējs – vārds, uzvārds vai nosaukums', sirka: 34 },
      { id: 'k_kods', typ: 'text', popis: 'Uzņēmēja personas kods vai reģistrācijas numurs', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Uzņēmēja adrese', sirka: 46 },
    ] },
    { id: 'darbs', nazev: 'Darbs', pole: [
      { id: 'darbs', typ: 'textarea', popis: 'Darba apraksts', placeholder: 'piem., vannas istabas renovācija: veco flīžu demontāža, 12 m² jaunu flīžu ieklāšana, dušas un izlietnes uzstādīšana', sirka: 64 },
      { id: 'vieta', typ: 'text', popis: 'Darba izpildes vieta', sirka: 46 },
      { id: 'materiali', typ: 'volba', popis: 'Materiāli', moznosti: [ { hodnota: 'uznemejs', popis: 'nodrošina uzņēmējs (cenā)' }, { hodnota: 'pasutitajs', popis: 'nodrošina pasūtītājs' } ] },
      { id: 'sakums', typ: 'datum', popis: 'Darbu sākums', sirka: 14, polovina: true },
      { id: 'pabeigt', typ: 'datum', popis: 'Pabeigt līdz', sirka: 14, polovina: true },
    ] },
    { id: 'atlidziba', nazev: 'Atlīdzība', pole: [
      { id: 'cena', typ: 'castka', popis: 'Kopējā atlīdzība (eiro)', napoveda: 'Ierakstiet, vai PVN ir iekļauts.', sirka: 12, polovina: true },
      { id: 'avanss', typ: 'castka', popis: 'Avanss (eiro, pēc izvēles)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Uzņēmēja IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => summaVardiem(d.cena) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Pasūtītājs:** {{p_jmeno}}, adrese {{p_adresa}}', '**Uzņēmējs:** {{k_jmeno}}, personas kods vai reģistrācijas numurs {{k_kods}}, {{k_adresa}}'] },
    { nadpis: 'Līguma priekšmets', vysvetleni: 'Kas tieši un kur tiek darīts.', odstavce: ['Uzņēmējs apņemas veikt šādu darbu: {{darbs}}, adresē {{vieta}}.', { volba: 'materiali', uvodVzor: 'Materiāli (atzīmējiet vienu variantu):', moznosti: { uznemejs: 'Materiālus nodrošina uzņēmējs; to izmaksas ir iekļautas atlīdzībā.', pasutitajs: 'Materiālus laikus un piemērotā kvalitātē nodrošina pasūtītājs.' } }, 'Uzņēmējs veic darbu rūpīgi, saskaņā ar labu praksi un spēkā esošajām prasībām.'] },
    { nadpis: 'Termiņi', odstavce: ['Darbi sākas {{sakums}} un tiek pabeigti ne vēlāk kā {{pabeigt}}.', 'Ja uzņēmējs kavē, pasūtītājs var noteikt saprātīgu papildu termiņu un pēc tā nesekmīgas notecēšanas atkāpties no līguma.'] },
    { nadpis: 'Atlīdzība', odstavce: ['Kopējā atlīdzība ir **{{cena}}** (vārdiem: {{cena_vardiem}}).', 'Pasūtītājs samaksā avansu {{avanss}}, bet atlikušo summu – pēc darba pieņemšanas bez būtiskiem trūkumiem uz kontu IBAN {{iban}}. Par katru maksājumu uzņēmējs izraksta rēķinu.', 'Papildu darbus veic un apmaksā tikai uz rakstveida vienošanās pamata.'] },
    { nadpis: 'Pieņemšana un trūkumi', odstavce: ['Nododot darbu, puses to kopā pārbauda un pieraksta iespējamos trūkumus.', 'Uzņēmējs bez maksas novērš trūkumus saprātīgā termiņā. Pārējā piemēro Civillikuma noteikumus par uzņēmuma līgumu.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Grozījumi izdarāmi rakstveidā. Līgums sagatavots divos vienādos eksemplāros.'] },
  ],
};
