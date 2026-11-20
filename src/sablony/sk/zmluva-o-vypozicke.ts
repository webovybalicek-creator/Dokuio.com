/**
 * Zmluva o výpožičke – Slovensko. § 659–662 OZ (Slov-Lex): bezplatné užívanie veci po dohodnutý čas (§ 659); vec v stave spôsobilom na riadne užívanie (§ 660); riadne užívanie podľa účelu, ochrana pred poškodením, inej osobe len po dohode (§ 661); vrátenie, keď vec netreba, najneskôr na konci doby; predčasne pri neriadnom užívaní (§ 662). OZ zrušený zák. č. 260/2026 Z. z. – sledovať nový OZ.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { OZ_SK, TIP_TOTOZNOST_SK } from './zdroje';

export const zmluvaOVypozicke: Sablona = {
  kod: 'SK-ZMLUVA-O-VYPOZICKE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: "Zmluva o výpožičke",
  podnadpis: "podľa § 659 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník",
  souborPdf: 'zmluva-o-vypozicke',
  paticka: "Vytvorené zadarmo · šablóna SK-ZMLUVA-O-VYPOZICKE v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "požičiavateľ", vpravo: "vypožičiavateľ" },
  slovo: {"n": "zmluva", "g": "zmluvy", "a": "zmluvu", "l": "zmluve"},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{ nazev: "Vrátenie vypožičanej veci", datum: String(d.vratit_do), popis: "Pri vrátení vec spoločne skontrolujte a nechajte si vrátenie potvrdiť." }] : []),
  coDal: [
      "Vytlačte zmluvu dvakrát, obe strany podpíšu oba exempláre.",
      "Pri odovzdaní vec spoločne prezrite a vady dopíšte do zmluvy.",
      "Pri vrátení si nechajte potvrdiť, že vec bola vrátená v poriadku."
  ],
  kontrola: [
    "Výpožička je bezplatná. Ak si za užívanie necháte zaplatiť, ide o nájom.",
    "Vec opíšte presne (výrobca, model, výrobné číslo, príslušenstvo) a uveďte jej stav pri odovzdaní.",
    "Požičiavateľ musí odovzdať vec v stave spôsobilom na riadne užívanie (§ 660 OZ).",
    "Vypožičiavateľ smie vec užívať riadne a na dohodnutý alebo obvyklý účel, musí ju chrániť pred poškodením a inej osobe ju smie prenechať len po dohode (§ 661 OZ).",
    "Vec treba vrátiť, keď ju už netreba, najneskôr na konci dohodnutej doby. Pri neriadnom užívaní môže požičiavateľ žiadať vec späť skôr (§ 662 OZ).",
    "Občiansky zákonník bol zrušený zákonom č. 260/2026 Z. z. a nahradí ho nový – po jeho účinnosti si overte aktuálne znenie.",
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK],

  kroky: [
    {
      id: 'strany',
      nazev: "Požičiavateľ a vypožičiavateľ",
      popis: "Požičiavateľ vec bezplatne požičiava, vypožičiavateľ ju užíva a vráti.",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Požičiavateľ – meno a priezvisko", placeholder: "napr. Ján Kováč", sirka: 34, autocomplete: 'name' },
        { id: 'p_id', typ: 'text', popis: "Dátum narodenia požičiavateľa", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Adresa požičiavateľa", placeholder: "napr. Hlavná 12, 811 01 Bratislava", sirka: 46 },
        { id: 'v_jmeno', typ: 'text', popis: "Vypožičiavateľ – meno a priezvisko", placeholder: "napr. Peter Horváth", sirka: 34 },
        { id: 'v_id', typ: 'text', popis: "Dátum narodenia vypožičiavateľa", sirka: 14, polovina: true },
        { id: 'v_adresa', typ: 'text', popis: "Adresa vypožičiavateľa", placeholder: "napr. Mlynská 5, 040 01 Košice", sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: "Vec",
      pole: [
        { id: 'vec', typ: 'textarea', popis: "Požičiavaná vec", napoveda: "Výrobca, model, výrobné číslo, príslušenstvo.", placeholder: "napr. príves Agados, EČ BA123AB, s plachtou a kľúčom od zámku", sirka: 70 },
        { id: 'stav', typ: 'text', popis: "Stav pri odovzdaní", placeholder: "napr. funkčný, škrabance na ľavom blatníku", sirka: 56 },
        { id: 'hodnota', typ: 'castka', popis: "Hodnota veci (€, nepovinné)", napoveda: "Pre prípad straty alebo zničenia.", sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: "Účel užívania", placeholder: "napr. sťahovanie nábytku", sirka: 46 },
      ],
    },
    {
      id: 'doba',
      nazev: "Doba a vrátenie",
      pole: [
        { id: 'predano', typ: 'datum', popis: "Deň odovzdania", sirka: 14, polovina: true, vychozi: 'dnes' },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Na ako dlho",
          moznosti: [
            { hodnota: 'datum', popis: "Do určitého dňa" },
            { hodnota: 'ucel', popis: "Do splnenia účelu" },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: "Vrátiť najneskôr", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
        { id: 'misto_vraceni', typ: 'text', popis: "Miesto vrátenia", placeholder: "napr. na adrese požičiavateľa", sirka: 46 },
        { id: 'misto', typ: 'text', popis: "Miesto podpisu", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum podpisu", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: "Zmluvné strany",
      odstavce: ["**Požičiavateľ:** {{p_jmeno}}, dátum narodenia {{p_id}}, {{p_adresa}} (ďalej len „požičiavateľ“)", "**Vypožičiavateľ:** {{v_jmeno}}, dátum narodenia {{v_id}}, {{v_adresa}} (ďalej len „vypožičiavateľ“)"],
    },
    {
      nadpis: "Predmet výpožičky",
      vysvetleni: "Požičiavateľ prenecháva vec na bezplatné užívanie.",
      odstavce: ["Požičiavateľ prenecháva vypožičiavateľovi na bezplatné užívanie túto vec: {{vec}}.", "Stav veci pri odovzdaní: {{stav}}. Hodnota veci: {{hodnota}}.", "Vec sa prenecháva na účel: {{ucel}}. Požičiavateľ odovzdáva vec v stave spôsobilom na riadne užívanie."],
    },
    {
      nadpis: "Doba výpožičky a vrátenie",
      odstavce: [
        "Vec bola odovzdaná dňa {{predano}}.",
        {
          volba: 'doba',
          uvodVzor: "Doba výpožičky (zaškrtnite jednu možnosť):",
          moznosti: {
            datum: "Výpožička sa dojednáva do {{vratit_do}}. Najneskôr v tento deň vypožičiavateľ vec vráti.",
            ucel: "Výpožička sa dojednáva do splnenia uvedeného účelu. Vypožičiavateľ vráti vec, len čo ju už nepotrebuje.",
          },
        },
        "Vypožičiavateľ vráti vec v mieste: {{misto_vraceni}}, v stave, v akom ju prevzal, s prihliadnutím na obvyklé opotrebenie.",
        "Požičiavateľ môže žiadať vrátenie veci aj pred uplynutím dohodnutej doby, ak vypožičiavateľ vec neužíva riadne alebo ju užíva v rozpore s účelom (§ 662 ods. 2 OZ).",
      ],
    },
    {
      nadpis: "Užívanie veci",
      vysvetleni: "Ako sa s vecou zaobchádza.",
      odstavce: ["Vypožičiavateľ užíva vec riadne a v súlade s dohodnutým alebo obvyklým účelom a chráni ju pred poškodením, stratou alebo zničením.", "Vypožičiavateľ neprenechá vec na užívanie inej osobe bez súhlasu požičiavateľa.", "Obvyklé náklady spojené s užívaním veci znáša vypožičiavateľ. Potrebu väčšej opravy oznámi požičiavateľovi bez zbytočného odkladu.", "Za poškodenie, stratu alebo zničenie veci zodpovedá vypožičiavateľ podľa Občianskeho zákonníka."],
    },
    {
      nadpis: "Záverečné ustanovenia",
      odstavce: ["Ostatné práva a povinnosti sa riadia § 659 a nasl. Občianskeho zákonníka.", "Zmeny zmluvy možno robiť len písomne. Zmluva je vyhotovená v dvoch rovnopisoch, každá strana dostane jeden."],
    },
  ],
};
