/** Vienošanās par parāda atmaksu pa daļām – Latvija. Vienošanās ir arī parāda atzīšana, kas pārtrauc noilgumu (Civillikuma 1906. p.). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const atmaksasVienosanas: Sablona = {
  kod: 'LV-ATMAKSAS-GRAFIKS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Vienošanās par parāda atmaksu', podnadpis: 'parāda atzīšana un samaksa ikmēneša maksājumos',
  souborPdf: 'vienosanas-par-parada-atmaksu', paticka: KAJENE('LV-ATMAKSAS-GRAFIKS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kreditors', vpravo: 'parādnieks' },
  slovo: { n: 'vienošanās', g: 'vienošanās', a: 'vienošanos', l: 'vienošanās' },
  coDal: ['Parakstiet vienošanos divos eksemplāros vai ar eParakstu.', 'Atzīmējiet maksājumu datumus kalendārā.', 'Saglabājiet maksājumu apliecinājumus.'],
  kontrola: [
    `Ar vienošanos parādnieks atzīst parādu; atzīšana pārtrauc noilgumu, un tas sāk tecēt no jauna ([Civillikuma 1906. pants](${CL.url})).`,
    'Ierakstiet, kas notiek, ja maksājums netiek veikts (piemēram, viss atlikums kļūst samaksājams).',
    'Maksājiet ar bankas pārskaitījumu – konta izraksts pierāda katru maksājumu.',
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Kreditors un parādnieks', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Kreditors – vārds, uzvārds vai nosaukums', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Kreditora adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Parādnieks – vārds, uzvārds', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Parādnieka personas kods', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Parādnieka adrese', sirka: 46 },
    ] },
    { id: 'grafiks', nazev: 'Parāds un maksājumi', pole: [
      { id: 'castka', typ: 'castka', popis: 'Parāda kopsumma (eiro)', sirka: 12, polovina: true },
      { id: 'pamats', typ: 'text', popis: 'Parāda pamats', placeholder: 'piem., nesamaksātā cena saskaņā ar 01.06.2026. transportlīdzekļa pirkuma līgumu', sirka: 56 },
      { id: 'maksajums', typ: 'castka', popis: 'Ikmēneša maksājums (eiro)', sirka: 12, polovina: true },
      { id: 'skaits', typ: 'cislo', popis: 'Maksājumu skaits', sirka: 6, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Maksājums katra mēneša … datumā', placeholder: 'piem., 15', sirka: 6, polovina: true },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmais maksājums', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Kreditora IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka), maksajums_vardiem: (d) => summaVardiem(d.maksajums) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Kreditors:** {{p_jmeno}}, {{p_adresa}}', '**Parādnieks:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}'] },
    { nadpis: 'Parāda atzīšana', vysvetleni: 'Parādnieks apliecina, ka parāds pastāv un cik liels tas ir.', odstavce: ['Parādnieks atzīst, ka vienošanās parakstīšanas dienā viņam ir parāds kreditoram **{{castka}}** (vārdiem: {{castka_vardiem}}), kas izriet no: {{pamats}}.'] },
    { nadpis: 'Samaksa pa daļām', odstavce: ['Kreditors piekrīt, ka parādnieks samaksā parādu {{skaits}} ikmēneša maksājumos pa **{{maksajums}}** (vārdiem: {{maksajums_vardiem}}); pēdējais maksājums ir vienāds ar parāda atlikumu.', 'Pirmo maksājumu veic {{pirmais}}, katru nākamo – ne vēlāk kā katra mēneša {{diena}}. datumā uz kreditora kontu IBAN {{iban}}.', 'Parādnieks var parādu vai tā daļu samaksāt arī pirms termiņa.'] },
    { nadpis: 'Maksājumu nokavējums', odstavce: ['Ja parādnieks nokavē divus maksājumus, kreditors ar rakstveida paziņojumu var prasīt nekavējoties samaksāt visu parāda atlikumu kopā ar likumiskajiem nokavējuma procentiem.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Jautājumos, kas nav noregulēti vienošanās, piemēro Civillikumu. Vienošanās sagatavota divos vienādos eksemplāros.'] },
  ],
};
