/**
 * Smlouva o výpůjčce – Česko. § 2193–2200 OZ: bezplatné dočasné užívání nezuživatelné věci; užívání ujednaným způsobem, třetí osobě jen se svolením (§ 2194); stav způsobilý k užívání, zatajená vada (§ 2195); předčasné vrácení vypůjčitelem jen bez obtíží půjčitele (§ 2197); půjčitel předčasně jen při užívání v rozporu se smlouvou, z nepředvídané potřeby jen bylo-li ujednáno (§ 2198); obvyklé náklady nese vypůjčitel (§ 2199); práva do 3 měsíců od vrácení (§ 2200). Ověřeno na konsolidovaném znění OZ (podnikatel.cz, mesec.cz, lewik.org) – e-Sbírka se nenačítá.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { OZ, TIP_TOTOZNOST } from './zdroje';

export const smlouvaOVypujcce: Sablona = {
  kod: 'CZ-SMLOUVA-O-VYPUJCCE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: "Smlouva o výpůjčce",
  podnadpis: "podle § 2193 a násl. zákona č. 89/2012 Sb., občanský zákoník",
  souborPdf: 'smlouva-o-vypujcce',
  paticka: "Vytvořeno zdarma · šablona CZ-SMLOUVA-O-VYPUJCCE v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "půjčitel", vpravo: "vypůjčitel" },
  slovo: {"n": "smlouva", "g": "smlouvy", "a": "smlouvu", "l": "smlouvě"},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{ nazev: "Vrácení vypůjčené věci", datum: String(d.vratit_do), popis: "Při vrácení věc společně zkontrolujte a nechte si vrácení potvrdit." }] : []),
  coDal: [
      "Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.",
      "Při předání věc společně prohlédněte a případné vady dopište do smlouvy.",
      "Při vrácení si nechte potvrdit, že byla věc vrácena v pořádku."
  ],
  kontrola: [
    "Výpůjčka je bezplatná. Pokud si za užívání necháte zaplatit, jde o nájem a platí jiná pravidla.",
    "Popište věc přesně (výrobce, model, výrobní číslo, příslušenství) a její stav při předání.",
    "Vypůjčitel smí věc užívat jen ujednaným způsobem, jinak přiměřeně její povaze, a jiné osobě ji smí přenechat jen se svolením půjčitele (§ 2194 OZ).",
    "Půjčitel může chtít věc zpět dříve jen tehdy, když ji vypůjčitel užívá v rozporu se smlouvou. Kvůli vlastní nepředvídané potřebě jen tehdy, je-li to ve smlouvě ujednáno (§ 2198 OZ) – tento vzor to ujednává.",
    "Obvyklé náklady spojené s užíváním věci nese vypůjčitel (§ 2199 OZ).",
    "Práva z výpůjčky (např. náhradu škody na věci) je nutné uplatnit do tří měsíců od vrácení věci (§ 2200 OZ).",
    TIP_TOTOZNOST,
  ],
  zdroje: [OZ],

  kroky: [
    {
      id: 'strany',
      nazev: "Půjčitel a vypůjčitel",
      popis: "Půjčitel věc bezplatně půjčuje, vypůjčitel ji užívá a vrátí.",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Půjčitel – jméno a příjmení", placeholder: "např. Jan Novák", sirka: 34, autocomplete: 'name' },
        { id: 'p_id', typ: 'text', popis: "Datum narození půjčitele", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Adresa půjčitele", placeholder: "např. Nerudova 12, 251 01 Říčany", sirka: 46 },
        { id: 'v_jmeno', typ: 'text', popis: "Vypůjčitel – jméno a příjmení", placeholder: "např. Petr Dvořák", sirka: 34 },
        { id: 'v_id', typ: 'text', popis: "Datum narození vypůjčitele", sirka: 14, polovina: true },
        { id: 'v_adresa', typ: 'text', popis: "Adresa vypůjčitele", placeholder: "např. Masarykova 5, 602 00 Brno", sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: "Věc",
      pole: [
        { id: 'vec', typ: 'textarea', popis: "Půjčovaná věc", napoveda: "Výrobce, model, výrobní číslo, příslušenství.", placeholder: "např. přívěsný vozík Agados, SPZ 1AB 2345, s plachtou a klíčem od zámku", sirka: 70 },
        { id: 'stav', typ: 'text', popis: "Stav při předání", placeholder: "např. funkční, škrábance na levém blatníku", sirka: 56 },
        { id: 'hodnota', typ: 'castka', popis: "Hodnota věci (Kč, nepovinné)", napoveda: "Pro případ ztráty nebo zničení.", sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: "Účel užívání", placeholder: "např. stěhování nábytku", sirka: 46 },
      ],
    },
    {
      id: 'doba',
      nazev: "Doba a vrácení",
      pole: [
        { id: 'predano', typ: 'datum', popis: "Den předání", sirka: 14, polovina: true, vychozi: 'dnes' },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Na jak dlouho",
          moznosti: [
            { hodnota: 'datum', popis: "Do určitého dne" },
            { hodnota: 'ucel', popis: "Do splnění účelu" },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: "Vrátit nejpozději", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
        { id: 'misto_vraceni', typ: 'text', popis: "Místo vrácení", placeholder: "např. na adrese půjčitele", sirka: 46 },
        { id: 'misto', typ: 'text', popis: "Místo podpisu (obec)", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Datum podpisu", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: "Smluvní strany",
      odstavce: ["**Půjčitel:** {{p_jmeno}}, datum narození {{p_id}}, {{p_adresa}} (dále jen „půjčitel“)", "**Vypůjčitel:** {{v_jmeno}}, datum narození {{v_id}}, {{v_adresa}} (dále jen „vypůjčitel“)"],
    },
    {
      nadpis: "Předmět výpůjčky",
      vysvetleni: "Půjčitel přenechává věc k bezplatnému dočasnému užívání.",
      odstavce: ["Půjčitel přenechává vypůjčiteli k bezplatnému dočasnému užívání tuto věc: {{vec}}.", "Stav věci při předání: {{stav}}. Hodnota věci: {{hodnota}}.", "Věc je přenechávána za účelem: {{ucel}}. Půjčitel prohlašuje, že věc je ve stavu způsobilém k užívání a že mu nejsou známy skryté vady."],
    },
    {
      nadpis: "Doba výpůjčky a vrácení",
      odstavce: [
        "Věc byla předána dne {{predano}}.",
        {
          volba: 'doba',
          uvodVzor: "Doba výpůjčky (zaškrtněte jednu možnost):",
          moznosti: {
            datum: "Výpůjčka se sjednává do {{vratit_do}}. Do tohoto dne vypůjčitel věc vrátí.",
            ucel: "Výpůjčka se sjednává do splnění uvedeného účelu. Vypůjčitel začne věc užívat bez zbytečného odkladu a po splnění účelu ji bez zbytečného odkladu vrátí.",
          },
        },
        "Vypůjčitel vrátí věc v místě: {{misto_vraceni}}, ve stavu, v jakém ji převzal, s přihlédnutím k obvyklému opotřebení.",
        "Vypůjčitel může věc vrátit dříve, pokud tím půjčiteli nezpůsobí obtíže.",
        "Půjčitel může požadovat předčasné vrácení věci, užívá-li ji vypůjčitel v rozporu se smlouvou, nebo potřebuje-li ji nevyhnutelně dříve z důvodu, který nemohl při uzavření smlouvy předvídat.",
      ],
    },
    {
      nadpis: "Užívání věci",
      vysvetleni: "Jak se s věcí zachází a kdo co platí.",
      odstavce: ["Vypůjčitel užívá věc jen ujednaným způsobem, jinak způsobem přiměřeným její povaze, a chrání ji před poškozením, ztrátou a zničením.", "Vypůjčitel nepřenechá věc jiné osobě bez souhlasu půjčitele.", "Obvyklé náklady spojené s užíváním věci nese vypůjčitel. Potřebuje-li věc mimořádný náklad (opravu), oznámí to vypůjčitel půjčiteli bez zbytečného odkladu.", "Za poškození, ztrátu nebo zničení věci odpovídá vypůjčitel podle občanského zákoníku."],
    },
    {
      nadpis: "Závěrečná ustanovení",
      odstavce: ["Práva z této smlouvy je nutné uplatnit do tří měsíců od vrácení věci (§ 2200 občanského zákoníku). Ostatní se řídí § 2193 a násl. občanského zákoníku.", "Změny smlouvy lze dělat jen písemně. Smlouva je sepsána ve dvou vyhotoveních, každá strana dostane jedno."],
    },
  ],
};
