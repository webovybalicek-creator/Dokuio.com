/**
 * Dohoda o skončení nájmu bytu – Slovensko. § 710 ods. 1 OZ (Slov-Lex): nájom bytu zanikne písomnou dohodou medzi prenajímateľom a nájomcom alebo písomnou výpoveďou. OZ zrušený zák. č. 260/2026 Z. z. – sledovať nový OZ.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum, cislo } from '../terminy';
import { OZ_SK } from './zdroje';

export const dohodaOSkonceniNajmuSK: Sablona = {
  kod: 'SK-DOHODA-NAJOM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: "Dohoda o skončení nájmu bytu",
  podnadpis: "podľa § 710 ods. 1 zákona č. 40/1964 Zb., Občiansky zákonník",
  souborPdf: 'dohoda-o-skonceni-najmu',
  paticka: "Vytvorené zadarmo · šablóna SK-DOHODA-NAJOM v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "prenajímateľ", vpravo: "nájomca" },
  slovo: {"n": "dohoda", "g": "dohody", "a": "dohodu", "l": "dohode"},
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: "Koniec nájmu", datum: d.konec_dne });
    const odevzdani = naDatum(d.odevzdani);
    if (odevzdani) {
      out.push({ nazev: "Odovzdanie bytu a preberací protokol", datum: isoDatum(odevzdani) });
      const dni = Math.round(cislo(d.jistota_dni));
      if (dni > 0) out.push({ nazev: "Vrátenie zábezpeky", datum: isoDatum(pridejDny(odevzdani, dni)) });
    }
    return out;
  },
  coDal: ["Vytlačte dohodu dvakrát, obe strany podpíšu oba exempláre.", "Pri odovzdaní bytu spíšte preberací protokol so stavmi meračov.", "Nájomca si zariadi odhlásenie elektriny a plynu, ak ich mal na seba.", "Sledujte termín vrátenia zábezpeky a vyúčtovanie služieb."],
  kontrola: [
    "Nájom bytu zaniká písomnou dohodou alebo písomnou výpoveďou (§ 710 ods. 1 OZ) – dohoda musí byť písomná a podpísaná oboma stranami.",
    "Dohodu musia podpísať všetci prenajímatelia aj všetci nájomcovia.",
    "Uveďte konkrétny deň skončenia nájmu a deň odovzdania bytu.",
    "Dohodnite, ako a kedy sa vráti zábezpeka a ako sa vyrovná vyúčtovanie služieb.",
    "Občiansky zákonník bol zrušený zákonom č. 260/2026 Z. z. a nahradí ho nový – po jeho účinnosti si overte aktuálne znenie.",
  ],
  zdroje: [OZ_SK],

  kroky: [
    {
      id: 'strany',
      nazev: "Strany a byt",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Prenajímateľ – meno a priezvisko", placeholder: "napr. Ján Kováč", sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: "Adresa prenajímateľa", placeholder: "napr. Hlavná 12, 811 01 Bratislava", sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: "Nájomca – meno a priezvisko", napoveda: "Viac nájomcov uveďte všetkých.", placeholder: "napr. Petra Horváthová", sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: "Dátum narodenia nájomcu", sirka: 14, polovina: true },
        { id: 'byt', typ: 'text', popis: "Byt (adresa a číslo bytu)", placeholder: "napr. Mlynská 5, Košice, byt č. 12", sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: "Dátum nájomnej zmluvy", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'konec',
      nazev: "Skončenie",
      pole: [
        { id: 'konec_dne', typ: 'datum', popis: "Nájom skončí dňa", napoveda: "Posledný deň nájmu. Dovtedy sa platí nájomné.", sirka: 14, polovina: true },
        { id: 'odevzdani', typ: 'datum', popis: "Odovzdanie bytu najneskôr", napoveda: "Kedy nájomca vráti kľúče.", sirka: 14, polovina: true },
        {
          id: 'jistota',
          typ: 'volba',
          popis: "Zábezpeka (kaucia)",
          moznosti: [
            { hodnota: 'odevzdani', popis: "Vráti sa do určitej doby od odovzdania bytu" },
            { hodnota: 'vyuctovani', popis: "Vráti sa po vyúčtovaní služieb" },
            { hodnota: 'zadna', popis: "Zábezpeka nebola zložená" },
          ],
        },
        { id: 'jistota_dni', typ: 'cislo', popis: "Vrátiť do (dní)", placeholder: '14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
        { id: 'ucet', typ: 'text', popis: "IBAN nájomcu na vrátenie zábezpeky", sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
        { id: 'dalsi', typ: 'textarea', popis: "Ďalšie dojednania (nepovinné)", placeholder: "napr. nájomca pred odovzdaním byt vymaľuje", sirka: 64 },
        { id: 'misto', typ: 'text', popis: "Miesto", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum podpisu", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    { nadpis: "Zmluvné strany", odstavce: ["**Prenajímateľ:** {{p_jmeno}}, trvale bytom {{p_adresa}}", "**Nájomca:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}"] },
    {
      nadpis: "Skončenie nájmu",
      vysvetleni: "Kedy nájom končí a kedy sa byt odovzdá.",
      odstavce: ["Strany sa dohodli, že nájom bytu {{byt}} podľa nájomnej zmluvy zo dňa {{smlouva_datum}} skončí dňom {{konec_dne}}.", "Nájomca odovzdá byt prenajímateľovi vrátane všetkých kľúčov najneskôr dňa {{odevzdani}} v stave, v akom ho prevzal, s prihliadnutím na obvyklé opotrebenie. O odovzdaní spíšu strany preberací protokol.", "Nájomné a zálohy na služby platí nájomca do dňa skončenia nájmu. Služby prenajímateľ vyúčtuje v obvyklej lehote."],
    },
    {
      nadpis: "Zábezpeka a ďalšie dojednania",
      odstavce: [
        {
          volba: 'jistota',
          uvodVzor: "Zábezpeka (zaškrtnite jednu možnosť):",
          moznosti: {
            odevzdani: "Prenajímateľ vráti nájomcovi zábezpeku do {{jistota_dni}} dní od odovzdania bytu na účet IBAN {{ucet}}; započíta si pritom, čo mu nájomca z nájmu dlhuje.",
            vyuctovani: "Prenajímateľ vráti nájomcovi zábezpeku po vyúčtovaní služieb za posledné obdobie na účet IBAN {{ucet}}; započíta si pritom, čo mu nájomca z nájmu dlhuje.",
            zadna: "Nájomca zábezpeku nezložil.",
          },
        },
        "Ďalšie dojednania: {{dalsi}}",
        "Dohoda je vyhotovená v dvoch rovnopisoch, každá strana dostane jeden. Nadobúda účinnosť podpisom oboch strán.",
      ],
    },
  ],
};
