/**
 * Zmluva o pôžičke – Slovensko, medzi súkromnými osobami. § 657 a § 658 zákona č. 40/1964 Zb.
 * Zmluva vzniká až odovzdaním peňazí (§ 657), preto potvrdenie o odovzdaní. Splátkový kalendár ako príloha.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum, isoDatum, pripominkySplatek, splatky, souhrnSplatek } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { OZ_SK, ZAKON_HOTOVOST_SK, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK } from './zdroje';

const eur = (n: number) => `${formatCislo(String(n))} €`;

export const zmluvaOPozicke: Sablona = {
  kod: 'SK-POZICKA',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Zmluva o pôžičke',
  podnadpis: 'uzavretá podľa § 657 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'zmluva-o-pozicke',
  paticka: 'Vytvorené zadarmo · šablóna SK-POZICKA v1.1 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'veriteľ', vpravo: 'dlžník' },
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },
  coDal: [
    'Vytlačte zmluvu dvakrát, obe strany podpíšu oba výtlačky.',
    'Peniaze pošlite radšej prevodom – výpis je najlepší dôkaz, že pôžička bola odovzdaná.',
    'Pri hotovosti si dajte podpísať potvrdenie o prevzatí peňazí.',
  ],
  prilohy: (d) => {
    if (d.splaceni !== 'splatky') return [];
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Príloha č. 1 · Splátkový kalendár',
        popis: `Spolu ${eur(Number(String(d.castka).replace(/\s/g, '')))} v ${s.length} mesačných splátkach.`,
        souhrn: souhrnSplatek(s, eur(Number(String(d.castka).replace(/\s/g, '')))),
        hlavicka: ['Splátka', 'Splatná do', 'Suma', 'Zostáva splatiť'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), eur(x.castka), eur(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: `${d.urok === 'ano' ? 'Tabuľka uvádza len istinu, úroky sa platia podľa článku o úrokoch. ' : ''}Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text zmluvy.`,
      },
    ];
  },
  pripominky: (d) => [
    ...(typeof d.predani_do === 'string' && d.predani_do ? [{ nazev: 'Odovzdať peniaze z pôžičky', datum: d.predani_do }] : []),
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Splátka pôžičky', '€', { celkem: (n) => `spolu ${n} splátok`, posledni: 'posledná' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Vrátiť pôžičku', datum: String(d.vratit_do) }] : []),
  ],
  kontrola: [
    'Zmluva o pôžičke vzniká až odovzdaním peňazí. Pošlite ich prevodom alebo si dajte potvrdiť prevzatie hotovosti.',
    'Úrok musí byť primeraný – neprimerane vysoký úrok môže byť v rozpore s dobrými mravmi a teda neplatný.',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
  ],
  zdroje: [OZ_SK, ZAKON_HOTOVOST_SK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Veriteľ a dlžník',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Veriteľ – meno a priezvisko', napoveda: 'Kto peniaze požičiava.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Dlžník – meno a priezvisko', napoveda: 'Kto si peniaze požičiava.', placeholder: 'napr. Peter Kováč', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
      ],
    },
    {
      id: 'pozicka',
      nazev: 'Pôžička',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Požičaná suma (€)', placeholder: 'napr. 3000', sirka: 12, polovina: true },
        {
          id: 'odovzdanie',
          typ: 'volba',
          popis: 'Ako veriteľ peniaze odovzdá',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti pri podpise zmluvy' },
            { hodnota: 'prevod', popis: 'Prevodom na účet dlžníka' },
          ],
        },
        { id: 'ucet_k', typ: 'text', popis: 'IBAN dlžníka', sirka: 30, zobrazitKdyz: { pole: 'odovzdanie', je: 'prevod' } },
        { id: 'predani_do', typ: 'datum', popis: 'Odovzdať najneskôr do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'odovzdanie', je: 'prevod' } },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Úrok',
          napoveda: 'Medzi známymi sa často požičiava bez úroku.',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez úroku' },
            { hodnota: 'ano', popis: 'S úrokom' },
          ],
        },
        { id: 'urok_sazba', typ: 'cislo', popis: 'Úroková sadzba', jednotka: '% ročne', placeholder: 'napr. 3', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
      ],
    },
    {
      id: 'vraceni',
      nazev: 'Vrátenie',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Ako dlžník pôžičku vráti',
          moznosti: [
            { hodnota: 'naraz', popis: 'Naraz do určitého dátumu' },
            { hodnota: 'splatky', popis: 'V mesačných splátkach' },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: 'Vrátiť najneskôr do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Mesačná splátka (€)', placeholder: 'napr. 250', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Deň v mesiaci', placeholder: 'napr. 15', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Mesiac prvej splátky', napoveda: 'Vyberte ľubovoľný deň v mesiaci, keď sa začne splácať.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet_p', typ: 'text', popis: 'IBAN veriteľa', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Dátum podpisu', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => sumaSlovom(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${Number(m[2])}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Zmluvné strany',
      vysvetleni: 'Kto požičiava a kto si požičiava.',
      odstavce: [
        '**Veriteľ:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}} (ďalej len „veriteľ“)',
        '**Dlžník:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}} (ďalej len „dlžník“)',
      ],
    },
    {
      nadpis: 'Predmet zmluvy',
      vysvetleni: 'Koľko a ako sa peniaze odovzdajú. Zmluva vzniká až ich odovzdaním.',
      odstavce: [
        'Veriteľ prenecháva dlžníkovi peňažné prostriedky vo výške {{castka}} (slovom: {{castka_slovy}}) a dlžník sa zaväzuje vrátiť ich podľa tejto zmluvy.',
        {
          volba: 'odovzdanie',
          uvodVzor: 'Odovzdanie peňazí (zaškrtnite jednu možnosť):',
          moznosti: {
            hotove: 'Veriteľ odovzdal dlžníkovi celú sumu v hotovosti pri podpise tejto zmluvy. Dlžník svojím podpisom potvrdzuje jej prevzatie.',
            prevod: 'Veriteľ pošle celú sumu na účet dlžníka IBAN {{ucet_k}} najneskôr do {{predani_do}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Úroky',
      vysvetleni: 'Či sa platí úrok. Bez dohody sa úrok neplatí.',
      odstavce: [
        {
          volba: 'urok',
          uvodVzor: 'Úroky (zaškrtnite jednu možnosť):',
          moznosti: {
            ne: 'Pôžička sa poskytuje bez úrokov.',
            ano: 'Dlžník zaplatí z nesplatenej sumy úrok vo výške {{urok_sazba}}. Úrok je splatný spolu so splátkami, najneskôr s poslednou z nich.',
          },
        },
      ],
    },
    {
      nadpis: 'Vrátenie pôžičky',
      vysvetleni: 'Kedy a ako dlžník peniaze vráti.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Spôsob vrátenia (zaškrtnite jednu možnosť):',
          moznosti: {
            naraz: 'Dlžník vráti celú sumu naraz najneskôr do {{vratit_do}}.',
            splatky: 'Dlžník bude sumu vracať v mesačných splátkach vo výške {{splatka}}, splatných vždy do {{splatka_den}}. dňa v mesiaci, prvýkrát v mesiaci {{prvni_mesic}}, až do úplného vrátenia. Posledná splátka môže byť nižšia.',
          },
        },
        'Platby budú pripísané na účet veriteľa IBAN {{ucet_p}}, prípadne odovzdané v hotovosti proti písomnému potvrdeniu.',
        {
          volba: 'splaceni',
          kdyz: { pole: 'splaceni', je: 'splatky' },
          uvodVzor: 'Ak ide o splátky:',
          moznosti: {
            splatky: 'Ak sa dlžník omešká so zaplatením niektorej splátky o viac ako 15 dní, môže veriteľ požadovať vrátenie celej nesplatenej sumy (§ 565 Občianskeho zákonníka). Toto právo môže veriteľ použiť písomnou výzvou doručenou dlžníkovi najneskôr do splatnosti najbližšie nasledujúcej splátky; nesplatená suma je potom splatná do 30 dní od doručenia výzvy.',
          },
        },
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      vysvetleni: 'Bežné formálne body.',
      odstavce: [
        'Práva a povinnosti neupravené touto zmluvou sa riadia zákonom č. 40/1964 Zb., Občiansky zákonník, najmä § 657 a § 658.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, z ktorých každá strana dostane jeden. Nadobúda platnosť a účinnosť podpisom oboch strán, pri odovzdaní prevodom pripísaním peňazí na účet dlžníka.',
      ],
    },
  ],
};
