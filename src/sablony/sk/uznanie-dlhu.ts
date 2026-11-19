/**
 * Uznanie dlhu – Slovensko. § 558 OZ (písomne, čo do dôvodu a výšky; inak neplatné), § 110 ods. 1 OZ (premlčanie 10 rokov od uznania).
 * Voliteľne splátky. Bez zmluvných pokút.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum, pripominkySplatek } from '../terminy';
import { zmluvaOPozicke } from './zmluva-o-pozicke';
import { OZ_SK, TIP_TOTOZNOST_SK } from './zdroje';

export const uznanieDlhu: Sablona = {
  kod: 'SK-UZNANIE-DLHU',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Uznanie dlhu',
  podnadpis: 'podľa § 558 zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'uznanie-dlhu',
  paticka: 'Vytvorené zadarmo · šablóna SK-UZNANIE-DLHU v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'dlžník', vpravo: 'veriteľ (súhlas so splátkami)' },
  slovo: { n: 'uznanie dlhu', g: 'uznania dlhu', a: 'uznanie dlhu', l: 'uznaní dlhu' },
  prilohy: (d) => (d.splaceni === 'splatky' ? (zmluvaOPozicke.prilohy?.(d) ?? []) : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Splátka dlhu', '€', { celkem: (n) => `spolu ${n} splátok`, posledni: 'posledná' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Splatnosť dlhu', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Vytlačte uznanie dvakrát. Dlžník ho musí podpísať – bez jeho podpisu uznanie neplatí.',
    'Originál s podpisom dlžníka si nechá veriteľ.',
    'Splátky v hotovosti si dávajte potvrdzovať, pri prevodoch je dôkazom výpis z účtu.',
  ],
  kontrola: [
    'Uznanie musí byť písomné a musí uvádzať dôvod aj výšku dlhu – inak je neplatné (§ 558 OZ).',
    'Dôvod dlhu konkrétne: z akej zmluvy alebo udalosti a z ktorého dňa.',
    'Od uznania plynie nová premlčacia doba 10 rokov (§ 110 ods. 1 OZ).',
    'Ak dlžník uznáva už premlčaný dlh, má to účinky len vtedy, ak o premlčaní vedel – to je v texte výslovne uvedené.',
    'Ako veriteľ nevyhrážajte a netlačte – uznanie vynútené nátlakom možno napadnúť.',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK],
  kroky: [
    {
      id: 'strany',
      nazev: 'Dlžník a veriteľ',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Dlžník – meno a priezvisko', sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Veriteľ – meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
      ],
    },
    {
      id: 'dlh',
      nazev: 'Dlh',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Výška dlhu (€)', napoveda: 'Koľko dlžník dnes dlhuje. Slovom doplníme sami.', sirka: 14, polovina: true },
        { id: 'duvod_popis', typ: 'text', popis: 'Dôvod dlhu', placeholder: 'napr. pôžička podľa zmluvy o pôžičke zo dňa 3. 3. 2026', sirka: 56 },
      ],
    },
    {
      id: 'splatenie',
      nazev: 'Splatenie',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Ako sa dlh zaplatí',
          moznosti: [
            { hodnota: 'naraz', popis: 'Naraz do určitého dátumu' },
            { hodnota: 'splatky', popis: 'V mesačných splátkach' },
          ],
        },
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zaplatiť do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Mesačná splátka (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Deň v mesiaci', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Mesiac prvej splátky', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet', typ: 'text', popis: 'IBAN veriteľa', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => sumaSlovom(d.castka) },
  clanky: [
    {
      nadpis: 'Strany',
      vysvetleni: 'Kto dlhuje a komu.',
      odstavce: [
        '**Dlžník:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}}',
        '**Veriteľ:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Uznanie dlhu',
      vysvetleni: 'Zákon vyžaduje písomnú formu a dôvod aj výšku dlhu.',
      odstavce: [
        'Dlžník v zmysle § 558 Občianskeho zákonníka písomne uznáva, že dlhuje veriteľovi sumu **{{castka}}** (slovom: {{castka_slovy}}), a zaväzuje sa ju zaplatiť.',
        'Dôvod dlhu: {{duvod_popis}}.',
        'Ak by bol dlh už premlčaný, dlžník vyhlasuje, že o jeho premlčaní vie a uznáva ho napriek tomu.',
      ],
    },
    {
      nadpis: 'Splatenie',
      vysvetleni: 'Dokedy alebo v akých splátkach.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Spôsob splatenia (zaškrtnite jednu možnosť):',
          moznosti: {
            naraz: 'Dlžník zaplatí dlh naraz najneskôr do {{zaplatit_do}}.',
            splatky: 'Dlžník bude dlh splácať v mesačných splátkach po {{splatka}}, splatných vždy do {{splatka_den}}. dňa v mesiaci, podľa splátkového kalendára v prílohe. Posledná splátka môže byť nižšia. Ak sa dlžník omešká so zaplatením dvoch splátok po sebe, stáva sa splatným celý zostatok dlhu.',
          },
        },
        'Platby sa uhrádzajú na účet IBAN {{ucet}} alebo v hotovosti proti potvrdeniu. Predčasné splatenie je kedykoľvek možné.',
      ],
    },
  ],
};
