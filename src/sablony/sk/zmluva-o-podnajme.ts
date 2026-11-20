/**
 * Zmluva o podnájme bytu alebo jeho časti – Slovensko. § 719 OZ (Slov-Lex): podnájom len s písomným súhlasom prenajímateľa; zánik podľa zmluvy, inak výpoveď bez udania dôvodu v lehote podľa § 710 ods. 3; na dobu určitú uplynutím; podnájomník nemá nárok na náhradný podnájom.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { sumaSlovom } from './cisla';
import { OZ_SK, TIP_TOTOZNOST_SK } from './zdroje';

export const zmluvaOPodnajme: Sablona = {
  kod: 'SK-PODNAJOM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: "Zmluva o podnájme bytu",
  podnadpis: "podľa § 719 zákona č. 40/1964 Zb., Občiansky zákonník",
  souborPdf: 'zmluva-o-podnajme',
  paticka: "Vytvorené zadarmo · šablóna SK-PODNAJOM v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "nájomca (prenajímateľ v podnájme)", vpravo: "podnájomník" },
  slovo: {"n": "zmluva", "g": "zmluvy", "a": "zmluvu", "l": "zmluve"},
  pripominky: (d) => [
    ...(naDatum(d.od) ? [{ nazev: "Začiatok podnájmu", datum: String(d.od) }] : []),
    ...(d.doba === 'urcita' && naDatum(d.do) ? [{ nazev: "Koniec podnájmu", datum: String(d.do) }] : []),
  ],
  coDal: ["Vytlačte zmluvu dvakrát, obe strany podpíšu oba exempláre.", "Kópiu písomného súhlasu prenajímateľa priložte k zmluve.", "Pri odovzdaní spíšte preberací protokol."],
  kontrola: [
    "Byt alebo jeho časť možno prenechať do podnájmu len s písomným súhlasom prenajímateľa (§ 719 ods. 1 OZ). Súhlas si vyžiadajte vopred a priložte ho.",
    "Ak zmluva nič iné neurčuje, podnájom možno vypovedať aj bez udania dôvodu v lehote podľa § 710 ods. 3 OZ.",
    "Po skončení podnájmu nemá podnájomník nárok na náhradný podnájom (§ 719 ods. 3 OZ).",
    "Podnájom nemôže trvať dlhšie ako nájom nájomcu.",
    "Občiansky zákonník bol zrušený zákonom č. 260/2026 Z. z. a nahradí ho nový – po jeho účinnosti si overte aktuálne znenie.",
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK],

  kroky: [
    {
      id: 'strany',
      nazev: "Nájomca a podnájomník",
      popis: "Nájomca prenecháva byt alebo jeho časť podnájomníkovi.",
      pole: [
        { id: 'n_jmeno', typ: 'text', popis: "Nájomca – meno a priezvisko", placeholder: "napr. Ján Kováč", sirka: 34, autocomplete: 'name' },
        { id: 'n_narozeni', typ: 'datum', popis: "Dátum narodenia nájomcu", sirka: 14, polovina: true },
        { id: 'n_adresa', typ: 'text', popis: "Adresa nájomcu", placeholder: "napr. Hlavná 12, 811 01 Bratislava", sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: "Podnájomník – meno a priezvisko", placeholder: "napr. Peter Horváth", sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: "Dátum narodenia podnájomníka", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Trvalý pobyt podnájomníka", sirka: 46 },
      ],
    },
    {
      id: 'byt',
      nazev: "Byt a súhlas",
      pole: [
        { id: 'byt', typ: 'text', popis: "Byt (adresa a číslo bytu)", placeholder: "napr. Mlynská 5, Košice, byt č. 12", sirka: 46 },
        {
          id: 'rozsah',
          typ: 'volba',
          popis: "Rozsah podnájmu",
          moznosti: [
            { hodnota: 'cast', popis: "Časť bytu (izba)" },
            { hodnota: 'cely', popis: "Celý byt" },
          ],
        },
        { id: 'cast_popis', typ: 'text', popis: "Ktorá časť", placeholder: "napr. izba 14 m² so spoločným užívaním kuchyne a kúpeľne", sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
        { id: 'pronajimatel', typ: 'text', popis: "Prenajímateľ (vlastník bytu)", napoveda: "Kto dal písomný súhlas s podnájmom.", sirka: 34 },
        { id: 'souhlas_datum', typ: 'datum', popis: "Dátum písomného súhlasu", napoveda: "Súhlas priložte k zmluve.", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: "Doba a platby",
      pole: [
        { id: 'od', typ: 'datum', popis: "Podnájom od", sirka: 14, polovina: true },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Doba podnájmu",
          moznosti: [
            { hodnota: 'urcita', popis: "Na dobu určitú" },
            { hodnota: 'neurcita', popis: "Na dobu neurčitú" },
          ],
        },
        { id: 'do', typ: 'datum', popis: "Podnájom do", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'najemne', typ: 'castka', popis: "Mesačná platba (€)", napoveda: "Vrátane služieb, ak sa nedohodne inak.", sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'cislo', popis: "Splatnosť (deň v mesiaci)", placeholder: '15', sirka: 4, polovina: true },
        { id: 'kauce', typ: 'castka', popis: "Zábezpeka (€, nepovinné)", sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: "IBAN nájomcu", sirka: 30 },
        { id: 'vypoved', typ: 'cislo', popis: "Výpovedná lehota (mesiace)", placeholder: '1', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: "Miesto", sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { najemne_slovy: (d) => sumaSlovom(d.najemne) },

  clanky: [
    { nadpis: "Zmluvné strany", odstavce: ["**Nájomca:** {{n_jmeno}}, dátum narodenia {{n_narozeni}}, {{n_adresa}} (ďalej len „nájomca“)", "**Podnájomník:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvale bytom {{p_adresa}} (ďalej len „podnájomník“)"] },
    {
      nadpis: "Predmet podnájmu",
      vysvetleni: "Čo sa prenecháva do podnájmu a na základe akého súhlasu.",
      odstavce: [
        {
          volba: 'rozsah',
          uvodVzor: "Rozsah (zaškrtnite jednu možnosť):",
          moznosti: { cast: "Nájomca prenecháva podnájomníkovi do podnájmu časť bytu {{byt}}: {{cast_popis}}.", cely: "Nájomca prenecháva podnájomníkovi do podnájmu celý byt {{byt}}." },
        },
        "Prenajímateľ bytu {{pronajimatel}} dal s podnájmom písomný súhlas dňa {{souhlas_datum}}; súhlas je prílohou tejto zmluvy.",
        "Podnájom nemôže trvať dlhšie ako nájom nájomcu.",
      ],
    },
    {
      nadpis: "Doba podnájmu a skončenie",
      odstavce: [
        {
          volba: 'doba',
          uvodVzor: "Doba (zaškrtnite jednu možnosť):",
          moznosti: { urcita: "Podnájom sa dojednáva od {{od}} do {{do}}. Uplynutím tejto doby zaniká.", neurcita: "Podnájom sa dojednáva od {{od}} na dobu neurčitú." },
        },
        "Každá strana môže podnájom vypovedať aj bez udania dôvodu; výpovedná lehota je {{vypoved}} mesiac(e).",
        "Po skončení podnájmu podnájomník vráti priestory v stave, v akom ich prevzal, s prihliadnutím na obvyklé opotrebenie. Nárok na náhradný podnájom nemá.",
      ],
    },
    { nadpis: "Platby", odstavce: ["Podnájomník platí nájomcovi mesačne {{najemne}} (slovom: {{najemne_slovy}}) vrátane služieb, vždy do {{splatnost}}. dňa v mesiaci na účet IBAN {{ucet}}.", "Podnájomník zložil zábezpeku {{kauce}}. Nájomca ju vráti do 30 dní po skončení podnájmu po odpočítaní prípadných dlžôb."] },
    { nadpis: "Záverečné ustanovenia", odstavce: ["Podnájomník dodržiava domový poriadok a neprenechá priestory ďalšej osobe.", "Zmeny zmluvy len písomne. Zmluva je vyhotovená v dvoch rovnopisoch."] },
  ],
};
