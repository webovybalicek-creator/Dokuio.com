/**
 * Darovacia zmluva (peniaze alebo hnuteľná vec) – Slovensko. § 628 až § 630 zákona č. 40/1964 Zb.
 * Ak sa hnuteľná vec pri darovaní neodovzdáva, zmluva musí byť písomná (§ 628 ods. 2). Nie pre nehnuteľnosti.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { OZ_SK, ZAKON_HOTOVOST_SK, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK } from './zdroje';

export const darovaciaZmluva: Sablona = {
  kod: 'SK-DAROVACIA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Darovacia zmluva',
  podnadpis: 'uzavretá podľa § 628 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'darovacia-zmluva',
  paticka: 'Vytvorené zadarmo · šablóna SK-DAROVACIA v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'darca', vpravo: 'obdarovaný' },
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },
  coDal: ['Vytlačte zmluvu dvakrát, obe strany podpíšu oba výtlačky.', 'Peniaze pošlite radšej prevodom s poznámkou „dar“.'],
  pripominky: (d) => (typeof d.predani_do === 'string' && d.predani_do ? [{ nazev: 'Odovzdať dar', datum: d.predani_do }] : []),
  kontrola: [
    'Táto zmluva je pre peniaze a hnuteľné veci. Darovanie nehnuteľnosti (byt, pozemok) vyžaduje vklad do katastra – poraďte sa s advokátom alebo notárom.',
    'Pri darovaní vozidla nezabudnite na zmenu držby vozidla do 30 dní.',
    'Darca sa môže domáhať vrátenia daru, ak sa obdarovaný voči nemu alebo členom jeho rodiny správa tak, že hrubo porušuje dobré mravy (§ 630 OZ).',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
  ],
  zdroje: [OZ_SK, ZAKON_HOTOVOST_SK],
  kroky: [
    {
      id: 'strany',
      nazev: 'Darca a obdarovaný',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Darca – meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Obdarovaný – meno a priezvisko', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'vztah', typ: 'text', popis: 'Vzťah (nepovinné)', napoveda: 'Napr. syn, sestra – môže byť dôležité pri daniach alebo dedičstve.', sirka: 20 },
      ],
    },
    {
      id: 'dar',
      nazev: 'Dar',
      pole: [
        {
          id: 'predmet',
          typ: 'volba',
          popis: 'Čo sa daruje',
          moznosti: [
            { hodnota: 'penize', popis: 'Peniaze' },
            { hodnota: 'vec', popis: 'Hnuteľná vec (napr. auto, šperk, nábytok)' },
          ],
        },
        { id: 'castka', typ: 'castka', popis: 'Suma (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        { id: 'vec_popis', typ: 'textarea', popis: 'Opis veci', placeholder: 'napr. osobné auto Škoda Fabia, VIN …, EČV …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'vady_popis', typ: 'textarea', popis: 'Známe vady veci (nepovinné)', napoveda: 'Darca má upozorniť na vady, o ktorých vie.', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        {
          id: 'predani',
          typ: 'volba',
          popis: 'Kedy sa dar odovzdá',
          moznosti: [
            { hodnota: 'ihned', popis: 'Pri podpise zmluvy' },
            { hodnota: 'pozdeji', popis: 'Do určitého dátumu' },
          ],
        },
        { id: 'predani_do', typ: 'datum', popis: 'Odovzdať najneskôr do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predani', je: 'pozdeji' } },
        { id: 'ucet', typ: 'text', popis: 'IBAN obdarovaného (pri prevode)', sirka: 30, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Dátum podpisu', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => sumaSlovom(d.castka) },
  clanky: [
    {
      nadpis: 'Zmluvné strany',
      vysvetleni: 'Kto daruje a kto dar prijíma.',
      odstavce: [
        '**Darca:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}} (ďalej len „darca“)',
        '**Obdarovaný:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}}, vzťah k darcovi: {{vztah}} (ďalej len „obdarovaný“)',
      ],
    },
    {
      nadpis: 'Predmet daru',
      vysvetleni: 'Čo sa daruje.',
      odstavce: [
        {
          volba: 'predmet',
          uvodVzor: 'Predmet daru (zaškrtnite jednu možnosť):',
          moznosti: {
            penize: 'Darca bezplatne prenecháva obdarovanému peňažnú sumu {{castka}} (slovom: {{castka_slovy}}).',
            vec: 'Darca bezplatne prenecháva obdarovanému túto hnuteľnú vec: {{vec_popis}}. Darca upozornil obdarovaného na tieto vady veci: {{vady_popis}}',
          },
        },
        'Obdarovaný dar prijíma.',
      ],
    },
    {
      nadpis: 'Odovzdanie daru',
      vysvetleni: 'Kedy a ako sa dar odovzdá.',
      odstavce: [
        {
          volba: 'predani',
          uvodVzor: 'Odovzdanie (zaškrtnite jednu možnosť):',
          moznosti: {
            ihned: 'Dar bol odovzdaný pri podpise tejto zmluvy a obdarovaný svojím podpisom potvrdzuje jeho prevzatie.',
            pozdeji: 'Darca odovzdá dar obdarovanému najneskôr do {{predani_do}}, peniaze prípadne prevodom na účet IBAN {{ucet}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      vysvetleni: 'Bežné formálne body.',
      odstavce: [
        'Práva a povinnosti neupravené touto zmluvou sa riadia § 628 až § 630 zákona č. 40/1964 Zb., Občiansky zákonník.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, z ktorých každá strana dostane jeden, a nadobúda platnosť a účinnosť podpisom oboch strán.',
      ],
    },
  ],
};
