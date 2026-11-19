/**
 * Výpoveď z nájmu bytu nájomcom – Slovensko. § 710 OZ: písomná výpoveď, trojmesačná výpovedná lehota
 * od prvého dňa mesiaca nasledujúceho po doručení. Nájomca nemusí uvádzať dôvod. Platí do 30. 6. 2027.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { SK_NAJOM_BYTU, TIP_NOVY_OZ_SK } from './zdroje';

export const vypovedZNajmu: Sablona = {
  kod: 'SK-VYPOVED-NAJOM',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const doruc = naDatum(d.datum);
    if (!doruc) return [];
    const koniec = new Date(doruc.getFullYear(), doruc.getMonth() + 4, 0);
    return [
      { nazev: 'Koniec nájmu po výpovedi (orientačne)', datum: isoDatum(koniec), popis: 'Počítané s doručením výpovede v deň podpisu.' },
      { nazev: 'Dohodnúť odovzdanie bytu a protokol', datum: isoDatum(pridejDny(koniec, -14)) },
    ];
  },
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Výpoveď z nájmu bytu',
  podnadpis: 'výpoveď nájomcu podľa § 710 zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'vypoved-z-najmu',
  paticka: 'Vytvorené zadarmo · šablóna SK-VYPOVED-NAJOM v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'nájomca', vpravo: 'prevzal prenajímateľ (dátum a podpis)' },
  slovo: { n: 'výpoveď', g: 'výpovede', a: 'výpoveď', l: 'výpovedi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Výpoveď doručte prenajímateľovi preukázateľne: doporučene s doručenkou alebo osobne proti podpisu na kópii.',
    'Výpovedná lehota (3 mesiace) začne plynúť prvým dňom mesiaca po doručení.',
    'Dohodnite termín odovzdania bytu a spíšte preberací protokol.',
    'Nájomné platíte do konca výpovednej lehoty. Zábezpeku vám prenajímateľ vráti po skončení nájmu.',
  ],
  kontrola: [
    'Výpoveď musí byť písomná a musí byť prenajímateľovi doručená – rozhoduje doručenie, nie odoslanie.',
    'Nájomca môže vypovedať nájom bez udania dôvodu; výpovedná lehota je tri mesiace (§ 710 ods. 3).',
    'Ak ste nájom uzavreli podľa zákona o krátkodobom nájme bytu (č. 98/2014 Z. z.), platia iné pravidlá – pozrite si zmluvu.',
    'Podpisujú všetci nájomcovia, pri spoločnom nájme manželov obaja.',
    TIP_NOVY_OZ_SK,
  ],
  zdroje: [SK_NAJOM_BYTU],
  kroky: [
    {
      id: 'strany',
      nazev: 'Nájomca a prenajímateľ',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Nájomca – meno a priezvisko', napoveda: 'Ako v nájomnej zmluve.', placeholder: 'napr. Petra Kováčová', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefón alebo e-mail', napoveda: 'Na dohodu o odovzdaní bytu.', placeholder: 'napr. petra@email.sk', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Prenajímateľ – meno a priezvisko', napoveda: 'Komu výpoveď doručujete.', placeholder: 'napr. Ján Novák', sirka: 34 },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa prenajímateľa', napoveda: 'Adresa na doručenie.', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
      ],
    },
    {
      id: 'najom',
      nazev: 'Nájom',
      pole: [
        { id: 'byt', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Podľa nájomnej zmluvy.', placeholder: 'napr. Mierová 25, Bratislava, byt č. 12', sirka: 46 },
        { id: 'zmluva_datum', typ: 'datum', popis: 'Dátum nájomnej zmluvy', napoveda: 'Kedy ste zmluvu podpísali.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN na vrátenie zábezpeky (nepovinné)', napoveda: 'Kam vám má prenajímateľ vrátiť kauciu.', placeholder: 'SK12 0000 0000 0000 0000 0000', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miesto (obec)', napoveda: 'Kde výpoveď podpisujete.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Dátum', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Prenajímateľ', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
    {
      nadpis: 'Výpoveď z nájmu bytu',
      odstavce: [
        'Ja, {{k_jmeno}}, dátum narodenia {{k_narozeni}}, kontakt {{k_kontakt}}, ako nájomca bytu {{byt}} podľa nájomnej zmluvy zo dňa {{zmluva_datum}},',
        'týmto vypovedám nájom bytu podľa § 710 Občianskeho zákonníka.',
        'Výpovedná lehota je tri mesiace a začína plynúť prvým dňom mesiaca nasledujúceho po doručení tejto výpovede.',
        'Žiadam o dohodu termínu odovzdania bytu a o vrátenie zábezpeky po skončení nájmu na účet IBAN {{ucet}}.',
      ],
    },
  ],
};
