/** Aizdevuma līgums starp privātpersonām – Latvija (Civillikuma 1934. un turpm. p.). Noilgums 10 gadi (1895), likumiskie procenti 6 % (1765). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const aizdevums: Sablona = {
  kod: 'LV-AIZDEVUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Aizdevuma līgums', podnadpis: 'naudas aizdevums starp privātpersonām (Civillikuma 1934. un turpmākie panti)',
  souborPdf: 'aizdevuma-ligums', paticka: KAJENE('LV-AIZDEVUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'aizdevējs', vpravo: 'aizņēmējs' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Izdrukājiet līgumu divos eksemplāros un parakstiet abus – vai parakstiet to ar eParakstu.', 'Pārskaitiet naudu ar bankas pārskaitījumu ar norādi “aizdevums saskaņā ar līgumu”.', 'Atzīmējiet atmaksas datumus kalendārā.'],
  kontrola: [
    'Izsniedziet aizdevumu ar bankas pārskaitījumu – maksājuma uzdevums pierāda, ka nauda tika izsniegta.',
    `Ja vēlaties procentus, ierakstiet tos līgumā skaidri. Ja procentu apmērs nav noteikts, bet procenti pienākas, piemēro likumiskos 6 % gadā ([Civillikuma 1765. pants](${CL.url})).`,
    'Vienojieties, kas notiek, ja atmaksa kavējas (piemēram, līguma uzteikšana un visa atlikuma pieprasīšana).',
    `Vispārējais noilgums ir 10 gadi; atgādinājums parādniekam un parāda atzīšana noilgumu pārtrauc ([Civillikuma 1895., 1905., 1906. pants](${CL.url})).`,
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Aizdevējs un aizņēmējs', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Aizdevējs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Aizņēmējs – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    ] },
    { id: 'aizdevums', nazev: 'Aizdevums un atmaksa', pole: [
      { id: 'castka', typ: 'castka', popis: 'Aizdevuma summa (eiro)', sirka: 12, polovina: true },
      { id: 'izsniegsana', typ: 'volba', popis: 'Naudas izsniegšana', moznosti: [ { hodnota: 'banka', popis: 'uz aizņēmēja bankas kontu' }, { hodnota: 'skaidra', popis: 'skaidrā naudā, parakstot' } ] },
      { id: 'k_iban', typ: 'text', popis: 'Aizņēmēja IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30, zobrazitKdyz: { pole: 'izsniegsana', je: 'banka' } },
      { id: 'atmaksa', typ: 'volba', popis: 'Atmaksa', moznosti: [ { hodnota: 'vienreiz', popis: 'vienā reizē līdz noteiktam datumam' }, { hodnota: 'dalas', popis: 'ikmēneša maksājumos' } ] },
      { id: 'termins', typ: 'datum', popis: 'Atmaksāt līdz', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'vienreiz' } },
      { id: 'maksajums', typ: 'castka', popis: 'Ikmēneša maksājums (eiro)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'dalas' } },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmais maksājums', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'dalas' } },
      { id: 'procenti', typ: 'volba', popis: 'Procenti', moznosti: [ { hodnota: 'nav', popis: 'bezprocentu' }, { hodnota: 'ir', popis: 'ar nolīgtiem procentiem' } ] },
      { id: 'likme', typ: 'text', popis: 'Gada procentu likme', placeholder: 'piem., 4 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'procenti', je: 'ir' } },
      { id: 'p_iban', typ: 'text', popis: 'Aizdevēja IBAN (atmaksai)', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Aizdevējs:** {{p_jmeno}}, personas kods {{p_ik}}, adrese {{p_adresa}}', '**Aizņēmējs:** {{k_jmeno}}, personas kods {{k_ik}}, adrese {{k_adresa}}'] },
    { nadpis: 'Līguma priekšmets', odstavce: ['Aizdevējs aizdod aizņēmējam **{{castka}}** (vārdiem: {{castka_vardiem}}), un aizņēmējs apņemas atdot tādu pašu summu.', { volba: 'izsniegsana', uvodVzor: 'Naudas izsniegšana (atzīmējiet vienu variantu):', moznosti: { banka: 'Aizdevējs pārskaita summu uz aizņēmēja bankas kontu IBAN {{k_iban}}.', skaidra: 'Aizņēmējs saņēma summu skaidrā naudā, parakstot līgumu, ko apliecina ar savu parakstu.' } }] },
    { nadpis: 'Atmaksa', odstavce: [{ volba: 'atmaksa', uvodVzor: 'Atmaksas veids (atzīmējiet vienu variantu):', moznosti: { vienreiz: 'Aizņēmējs atmaksā visu summu ne vēlāk kā {{termins}}.', dalas: 'Aizņēmējs atmaksā summu ikmēneša maksājumos pa {{maksajums}}, pirmo {{pirmais}} un katru nākamo katra mēneša tajā pašā datumā līdz pilnīgai atmaksai.' } }, 'Maksājumus veic uz aizdevēja kontu IBAN {{p_iban}}. Aizņēmējs var aizdevumu atmaksāt arī pirms termiņa.', 'Ja aizņēmējs nokavē divus maksājumus, aizdevējs var ar rakstveida paziņojumu uzteikt līgumu un prasīt visa atlikuma samaksu.'] },
    { nadpis: 'Procenti', odstavce: [{ volba: 'procenti', uvodVzor: 'Procenti (atzīmējiet vienu variantu):', moznosti: { nav: 'Aizdevums ir bezprocentu.', ir: 'Aizņēmējs maksā procentus {{likme}} gadā no neatmaksātās summas.' } }, 'Par samaksas nokavējumu aizņēmējs maksā likumiskos nokavējuma procentus saskaņā ar Civillikumu.'] },
    { nadpis: 'Noslēguma noteikumi', odstavce: ['Jautājumos, kas nav noregulēti līgumā, piemēro Civillikuma noteikumus par aizdevumu.', 'Līgums sagatavots divos vienādos eksemplāros, pa vienam katrai pusei.'] },
  ],
};
