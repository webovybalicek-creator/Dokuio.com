/** Splnomocnenie (všeobecné, s vymedzeným rozsahom) – Slovensko. § 31 až § 33b zákona č. 40/1964 Zb. */
import type { Sablona } from '../typy';
import { OZ_SK, TIP_TOTOZNOST_SK } from './zdroje';

export const splnomocnenie: Sablona = {
  kod: 'SK-SPLNOMOCNENIE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Splnomocnenie',
  podnadpis: 'udelené podľa § 31 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'splnomocnenie',
  paticka: 'Vytvorené zadarmo · šablóna SK-SPLNOMOCNENIE v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'splnomocniteľ', vpravo: 'splnomocnenec – plnomocenstvo prijímam' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'splnomocnenie', g: 'splnomocnenia', a: 'splnomocnenie', l: 'splnomocnení' },
  coDal: [
    'Vytlačte splnomocnenie, splnomocniteľ ho podpíše a splnomocnenec prijme.',
    'Niektoré úrady, banky alebo pošta vyžadujú úradne overený podpis – overte si to vopred.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Končí platnosť splnomocnenia', datum: d.platnost_do }] : []),
  kontrola: [
    'Rozsah opíšte konkrétne – čo presne môže splnomocnenec urobiť. Príliš všeobecné splnomocnenie úrady často odmietnu.',
    'Na niektoré úkony (prepis vozidla, kataster, banka) sa vyžaduje úradne overený podpis splnomocniteľa.',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK],
  kroky: [
    {
      id: 'osoby',
      nazev: 'Kto koho splnomocňuje',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Splnomocniteľ – meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'm_jmeno', typ: 'text', popis: 'Splnomocnenec – meno a priezvisko', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
      ],
    },
    {
      id: 'rozsah',
      nazev: 'Rozsah a platnosť',
      pole: [
        { id: 'rozsah', typ: 'textarea', popis: 'Na čo splnomocnenie platí', napoveda: 'Konkrétne a zrozumiteľne.', placeholder: 'napr. prevzatie doporučenej zásielky adresovanej splnomocniteľovi na pošte Bratislava 1', sirka: 64 },
        { id: 'platnost_do', typ: 'datum', popis: 'Platí do (nepovinné)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Splnomocnenie',
      odstavce: [
        'Ja, dolu podpísaný/á **{{z_jmeno}}**, dátum narodenia {{z_narozeni}}, trvalý pobyt {{z_adresa}} (ďalej len „splnomocniteľ“),',
        'splnomocňujem **{{m_jmeno}}**, dátum narodenia {{m_narozeni}}, trvalý pobyt {{m_adresa}} (ďalej len „splnomocnenec“),',
        'aby ma zastupoval/a v tejto veci: {{rozsah}}',
        'Splnomocnenie platí do {{platnost_do}}, inak do vybavenia uvedenej veci alebo do odvolania.',
      ],
    },
  ],
};
