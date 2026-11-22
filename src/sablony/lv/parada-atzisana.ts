/** Parāda atzīšana – Latvija. Prasījuma atzīšana pārtrauc noilgumu (Civillikuma 1906. p.), vispārējais noilgums 10 gadi (1895). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const paradaAtzisana: Sablona = {
  kod: 'LV-PARADA-ATZISANA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Parāda atzīšana', podnadpis: 'parādnieka rakstveida apliecinājums par parāda esamību un apmēru',
  souborPdf: 'parada-atzisana', paticka: KAJENE('LV-PARADA-ATZISANA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'parādnieks', vpravo: 'kreditors (pēc izvēles)' },
  slovo: { n: 'atzīšana', g: 'atzīšanas', a: 'atzīšanu', l: 'atzīšanā' },
  coDal: ['Parakstīto oriģinālu glabā kreditors.', 'Atzīmējiet samaksas termiņu kalendārā.'],
  kontrola: [
    `Parāda atzīšana pārtrauc noilgumu, un tas sāk tecēt no jauna ([Civillikuma 1906. pants](${CL.url})). Vispārējais noilgums ir 10 gadi.`,
    'Ierakstiet precīzi, no kā parāds izriet (aizdevums, cena, īre), un tā apmēru.',
    'Bez parādnieka paraksta dokuments atzīšanu nepierāda.',
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Parādnieks un kreditors', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Parādnieks – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Kreditors – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    ] },
    { id: 'parads', nazev: 'Parāds', pole: [
      { id: 'castka', typ: 'castka', popis: 'Parāda apmērs (eiro)', sirka: 12, polovina: true },
      { id: 'pamats', typ: 'text', popis: 'No kā parāds izriet', placeholder: 'piem., aizdevums 10.03.2025.', sirka: 46 },
      { id: 'samaksa', typ: 'volba', popis: 'Samaksa', moznosti: [ { hodnota: 'vienreiz', popis: 'vienā reizē līdz noteiktam datumam' }, { hodnota: 'dalas', popis: 'ikmēneša maksājumos' } ] },
      { id: 'termins', typ: 'datum', popis: 'Samaksāt līdz', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'vienreiz' } },
      { id: 'maksajums', typ: 'castka', popis: 'Ikmēneša maksājums (eiro)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'dalas' } },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmais maksājums', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'dalas' } },
      { id: 'iban', typ: 'text', popis: 'Kreditora IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Parādnieks:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}', '**Kreditors:** {{p_jmeno}}, adrese {{p_adresa}}'] },
    { nadpis: 'Parāda atzīšana', odstavce: ['Parādnieks atzīst, ka ir parādā kreditoram **{{castka}}** (vārdiem: {{castka_vardiem}}), kas izriet no: {{pamats}}.', 'Parādnieks apliecina, ka parāds pastāv šādā apmērā un uz šāda pamata un viņam nav pret to iebildumu.'] },
    { nadpis: 'Samaksa', odstavce: [{ volba: 'samaksa', uvodVzor: 'Samaksas veids (atzīmējiet vienu variantu):', moznosti: { vienreiz: 'Parādnieks samaksā visu summu ne vēlāk kā {{termins}}.', dalas: 'Parādnieks samaksā parādu ikmēneša maksājumos pa {{maksajums}}, pirmo {{pirmais}} un katru nākamo katra mēneša tajā pašā datumā.' } }, 'Maksājumus veic uz kreditora kontu IBAN {{iban}}. Ja parādnieks nokavē divus maksājumus, viss atlikums kļūst nekavējoties samaksājams.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Dokuments sagatavots divos eksemplāros, no kuriem kreditors saņēma oriģinālu.'] },
  ],
};
