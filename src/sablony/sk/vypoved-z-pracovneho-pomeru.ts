/**
 * Výpoveď z pracovného pomeru zo strany zamestnanca – Slovensko. Zákonník práce č. 311/2001 Z. z.:
 * § 61 ods. 1 (písomná a doručená, inak neplatná), § 61 ods. 4 (odvolanie len so súhlasom), § 62 ods. 2, 6, 7
 * (najmenej 1 mesiac, pri trvaní aspoň 1 rok najmenej 2 mesiace, plynie od 1. dňa mesiaca po doručení),
 * § 62 ods. 8 (náhrada len pri písomnej dohode), § 67 (bez uvedenia dôvodu), § 38 ods. 3 (doručenie zamestnancom),
 * § 60 (dohoda – písomne, skončí dohodnutým dňom), § 72 (skúšobná doba), § 75 (posudok, potvrdenie o zamestnaní).
 * Len zamestnanec → zamestnávateľ. Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { ZAKONNIK_PRACE_SK } from './zdroje';

export const vypovedZPracovnehoPomeru: Sablona = {
  kod: 'SK-VYPOVED-PP',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Skončenie pracovného pomeru',
  podnadpis: 'zo strany zamestnanca podľa zákona č. 311/2001 Z. z., Zákonník práce',
  souborPdf: 'vypoved-z-pracovneho-pomeru',
  paticka: 'Vytvorené zadarmo · šablóna SK-VYPOVED-PP v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zamestnanec', vpravo: 'prevzal za zamestnávateľa (dátum a podpis)' },
  slovo: { n: 'výpoveď', g: 'výpovede', a: 'výpoveď', l: 'výpovedi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const doruc = naDatum(d.datum);
    if (!doruc) return [];
    if (d.sposob === 'vypoved') {
      const mesiace = d.trvanie === 'rok' ? 2 : 1;
      const koniec = new Date(doruc.getFullYear(), doruc.getMonth() + mesiace + 1, 0);
      return [
        { nazev: 'Koniec pracovného pomeru po výpovedi (orientačne)', datum: isoDatum(koniec), popis: `Počítané s doručením výpovede v deň podpisu a výpovednou dobou ${mesiace === 2 ? 'dva mesiace' : 'jeden mesiac'}. Dlhšia doba v pracovnej zmluve má prednosť.` },
        { nazev: 'Vyžiadať potvrdenie o zamestnaní a odovzdať pracovné pomôcky', datum: isoDatum(pridejDny(koniec, -7)) },
      ];
    }
    if (d.sposob === 'dohoda' && naDatum(d.dohoda_datum)) return [{ nazev: 'Navrhovaný koniec pracovného pomeru dohodou', datum: String(d.dohoda_datum) }];
    if (d.sposob === 'skusobna' && naDatum(d.skusobna_datum)) return [{ nazev: 'Koniec pracovného pomeru v skúšobnej dobe', datum: String(d.skusobna_datum) }];
    return [];
  },
  coDal: [
    'Výpoveď vytlačte dvakrát a podpíšte. Rozhoduje doručenie zamestnávateľovi, nie odoslanie.',
    'Doručte ju na pracovisku proti podpisu na vašej kópii (dátum prevzatia, meno a podpis), alebo poštou doporučene (§ 38 ods. 3 Zákonníka práce).',
    'Výpovedná doba začne plynúť prvým dňom mesiaca po doručení. Do jej konca riadne pracujete.',
    'Pri odchode si prevezmite potvrdenie o zamestnaní – zamestnávateľ ho musí vydať pri skončení pracovného pomeru.',
    'Pri dohode: zamestnávateľ ju musí s vami uzavrieť písomne – návrh nie je dohoda, kým ju obaja nepodpíšete.',
  ],
  kontrola: [
    'Výpoveď musí byť písomná a doručená, inak je neplatná (§ 61 ods. 1 Zákonníka práce). Doručte ju na pracovisku alebo poštou doporučene (§ 38 ods. 3) – na bežný e-mail či SMS sa nespoliehajte.',
    'Ako zamestnanec môžete dať výpoveď z akéhokoľvek dôvodu alebo bez uvedenia dôvodu (§ 67).',
    'Výpovedná doba je najmenej jeden mesiac; ak váš pracovný pomer trval aspoň jeden rok, najmenej dva mesiace (§ 62 ods. 2 a 6). Pozrite si pracovnú zmluvu, či v nej nie je dohodnutá dlhšia.',
    'Výpovedná doba začína plynúť prvým dňom kalendárneho mesiaca po doručení výpovede a končí posledným dňom kalendárneho mesiaca (§ 62 ods. 7). Výpoveď doručená 31. marca znamená pri jednom mesiaci koniec 30. apríla.',
    'Ak odídete pred koncom výpovednej doby, zamestnávateľ môže žiadať peňažnú náhradu, len ak je to písomne dohodnuté v pracovnej zmluve (§ 62 ods. 8).',
    'Doručenú výpoveď môžete odvolať len so súhlasom zamestnávateľa, a to písomne (§ 61 ods. 4).',
    'Dohodou skončí pracovný pomer dňom, na ktorom sa dohodnete; dohoda musí byť písomná (§ 60). Bez súhlasu zamestnávateľa ju nevynútite.',
    'V skúšobnej dobe môžete skončiť písomne z akéhokoľvek dôvodu; oznámenie sa má doručiť spravidla aspoň tri dni pred dňom skončenia (§ 72).',
  ],
  zdroje: [ZAKONNIK_PRACE_SK],

  kroky: [
    {
      id: 'zamestnanec',
      nazev: 'Zamestnanec',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Meno a priezvisko', napoveda: 'Ako v pracovnej zmluve.', placeholder: 'napr. Petra Kováčová', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Aby vás zamestnávateľ jednoznačne určil. Rodné číslo písať nemusíte.', sirka: 14, polovina: true },
        { id: 'z_cislo', typ: 'text', popis: 'Osobné číslo (nepovinné)', napoveda: 'Ak vám ho zamestnávateľ pridelil, nájdete ho na výplatnej páske.', placeholder: 'napr. 01234', sirka: 12, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa trvalého pobytu alebo adresa na doručovanie.', placeholder: 'napr. Mierová 25, 821 05 Bratislava', sirka: 46 },
        { id: 'z_pozicia', typ: 'text', popis: 'Pracovná pozícia', napoveda: 'Druh práce podľa pracovnej zmluvy.', placeholder: 'napr. účtovníčka', sirka: 30 },
        { id: 'zmluva_datum', typ: 'datum', popis: 'Dátum pracovnej zmluvy', napoveda: 'Kedy ste pracovnú zmluvu podpísali alebo kedy pracovný pomer vznikol.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'zamestnavatel',
      nazev: 'Zamestnávateľ',
      pole: [
        { id: 'f_nazev', typ: 'text', popis: 'Zamestnávateľ – názov', napoveda: 'Obchodné meno podľa pracovnej zmluvy alebo obchodného registra.', placeholder: 'napr. Stavby Slovensko, s. r. o.', sirka: 34 },
        { id: 'f_ico', typ: 'text', popis: 'IČO', napoveda: 'Nájdete v pracovnej zmluve alebo na výplatnej páske.', placeholder: 'napr. 12345678', sirka: 12, polovina: true },
        { id: 'f_adresa', typ: 'text', popis: 'Sídlo', napoveda: 'Adresa sídla zamestnávateľa – na ňu sa výpoveď posiela poštou.', placeholder: 'napr. Hlavná 1, 811 01 Bratislava', sirka: 46 },
      ],
    },
    {
      id: 'skoncenie',
      nazev: 'Skončenie',
      pole: [
        {
          id: 'sposob',
          typ: 'volba',
          popis: 'Ako chcete pracovný pomer skončiť',
          napoveda: 'Výpoveď nepotrebuje súhlas zamestnávateľa. Dohoda môže skončiť skôr, ale zamestnávateľ s ňou musí súhlasiť.',
          moznosti: [
            { hodnota: 'vypoved', popis: 'Výpoveď (výpovedná doba 1 alebo 2 mesiace)' },
            { hodnota: 'dohoda', popis: 'Návrh dohody o skončení ku konkrétnemu dňu' },
            { hodnota: 'skusobna', popis: 'Skončenie v skúšobnej dobe' },
          ],
        },
        {
          id: 'trvanie',
          typ: 'volba',
          popis: 'Ako dlho u zamestnávateľa pracujete',
          napoveda: 'Rozhoduje trvanie pracovného pomeru ku dňu doručenia výpovede.',
          moznosti: [
            { hodnota: 'menej', popis: 'Menej ako jeden rok (najmenej 1 mesiac)' },
            { hodnota: 'rok', popis: 'Aspoň jeden rok (najmenej 2 mesiace)' },
          ],
          zobrazitKdyz: { pole: 'sposob', je: 'vypoved' },
        },
        { id: 'dohoda_datum', typ: 'datum', popis: 'Navrhovaný posledný deň', napoveda: 'Deň, ktorým má pracovný pomer skončiť. Zamestnávateľ môže navrhnúť iný.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sposob', je: 'dohoda' } },
        { id: 'skusobna_datum', typ: 'datum', popis: 'Posledný deň pracovného pomeru', napoveda: 'Oznámenie doručte spravidla aspoň tri dni pred týmto dňom.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sposob', je: 'skusobna' } },
        {
          id: 'zadosti',
          typ: 'vice',
          popis: 'Čo ešte žiadate',
          napoveda: 'Potvrdenie o zamestnaní musí zamestnávateľ vydať vždy, pracovný posudok do 15 dní od požiadania.',
          moznosti: [
            { hodnota: 'potvrdenie', popis: 'Potvrdenie o zamestnaní' },
            { hodnota: 'posudok', popis: 'Pracovný posudok' },
            { hodnota: 'skor', popis: 'Ponuka skončiť skôr dohodou (len pri výpovedi)' },
          ],
        },
        { id: 'skor_datum', typ: 'datum', popis: 'Skončiť dohodou ku dňu', napoveda: 'Ak zamestnávateľ súhlasí, skončíte týmto dňom namiesto uplynutia výpovednej doby.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zadosti', je: 'skor' } },
        { id: 'misto', typ: 'text', popis: 'Miesto (obec)', napoveda: 'Predvyplníme podľa vašej adresy.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zamestnávateľ',
      vysvetleni: 'Komu písomnosť doručujete.',
      odstavce: ['{{f_nazev}}, IČO {{f_ico}}, sídlo {{f_adresa}}'],
    },
    {
      nadpis: 'Zamestnanec',
      vysvetleni: 'Kto pracovný pomer končí.',
      odstavce: ['{{z_jmeno}}, dátum narodenia {{z_narozeni}}, osobné číslo {{z_cislo}}, adresa {{z_adresa}}, pracovná pozícia {{z_pozicia}}, pracovná zmluva zo dňa {{zmluva_datum}}'],
    },
    {
      nadpis: 'Skončenie pracovného pomeru',
      vysvetleni: 'Výpoveď nepotrebuje súhlas zamestnávateľa; dohoda áno. V skúšobnej dobe stačí písomné oznámenie.',
      odstavce: [
        {
          volba: 'sposob',
          uvodVzor: 'Spôsob skončenia (zaškrtnite jednu možnosť):',
          moznosti: {
            vypoved: 'Týmto vám dávam výpoveď z pracovného pomeru podľa § 61 a § 67 Zákonníka práce. Výpovedná doba začína plynúť prvým dňom kalendárneho mesiaca nasledujúceho po doručení tejto výpovede (§ 62 ods. 7 Zákonníka práce).',
            dohoda: 'Navrhujem skončiť pracovný pomer dohodou podľa § 60 Zákonníka práce ku dňu {{dohoda_datum}}. Prosím o písomné vyjadrenie a pripravenie dohody na podpis.',
            skusobna: 'Oznamujem vám, že pracovný pomer končím v skúšobnej dobe podľa § 72 Zákonníka práce, a to ku dňu {{skusobna_datum}}.',
          },
        },
        {
          volba: 'trvanie',
          kdyz: { pole: 'sposob', je: 'vypoved' },
          uvodVzor: 'Pri výpovedi – dĺžka výpovednej doby (zaškrtnite jednu možnosť):',
          moznosti: {
            menej: 'Výpovedná doba je jeden mesiac, ak pracovná zmluva neurčuje dlhšiu.',
            rok: 'Keďže môj pracovný pomer trvá aspoň jeden rok, výpovedná doba je dva mesiace (§ 62 ods. 6 Zákonníka práce), ak pracovná zmluva neurčuje dlhšiu.',
          },
        },
      ],
    },
    {
      nadpis: 'Ďalšie žiadosti',
      vysvetleni: 'Doklady, ktoré budete potrebovať u nového zamestnávateľa alebo na úrade.',
      odstavce: [
        {
          vice: 'zadosti',
          uvod: 'Zároveň žiadam o:',
          moznosti: {
            potvrdenie: 'vydanie potvrdenia o zamestnaní pri skončení pracovného pomeru (§ 75 ods. 2 Zákonníka práce)',
            posudok: 'vydanie pracovného posudku (§ 75 ods. 1 Zákonníka práce)',
            skor: 'súhlas so skončením pracovného pomeru dohodou podľa § 60 Zákonníka práce už ku dňu {{skor_datum}}; ak nesúhlasíte, pracovný pomer skončí uplynutím výpovednej doby',
          },
        },
      ],
    },
  ],
};
