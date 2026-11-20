/**
 * Dohoda o splátkach (splátkový kalendár existujúceho dlhu) – Slovensko. Dvojstranná dohoda veriteľa a dlžníka.
 * § 565 OZ (strata výhody splátok len ak je dohodnutá; uplatniť najneskôr do splatnosti najbližšej nasledujúcej splátky),
 * § 566 ods. 2 OZ (čiastočné plnenie najprv na istinu, potom na úroky), voliteľne § 558 a § 110 ods. 1 OZ (uznanie dlhu).
 * Na rozdiel od `uznanie-dlhu` (jednostranný úkon dlžníka) podpisujú obe strany a veriteľ sa zaväzuje dlh pri riadnom
 * splácaní nevymáhať. OZ zrušený zákonom č. 260/2026 Z. z. (nový OZ od 1. 7. 2027) – sledovať.
 * Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { pripominkySplatek, splatky, isoDatum, cislo, souhrnSplatek } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { OZ_SK, OZ_SK_ZAVAZKY, ZAKON_HOTOVOST_SK, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK, TIP_ZRUSENY_OZ_SK } from './zdroje';

const eur = (n: number) => `${formatCislo(String(n))} €`;

export const dohodaOSplatkach: Sablona = {
  kod: 'SK-DOHODA-SPLATKY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Dohoda o splátkach dlhu',
  podnadpis: 'dohoda veriteľa a dlžníka o splatení dlhu v splátkach podľa zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'dohoda-o-splatkach',
  paticka: 'Vytvorené zadarmo · šablóna SK-DOHODA-SPLATKY v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'veriteľ', vpravo: 'dlžník' },
  slovo: { n: 'dohoda', g: 'dohody', a: 'dohodu', l: 'dohode' },
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Príloha č. 1 · Splátkový kalendár',
        popis: `Spolu ${eur(cislo(d.castka))} v ${s.length} mesačných splátkach.`,
        souhrn: souhrnSplatek(s, eur(cislo(d.castka))),
        hlavicka: ['Splátka', 'Splatná do', 'Suma', 'Zostáva splatiť'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), eur(x.castka), eur(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Prehľad je zostavený podľa dohodnutých splátok; pri rozpore má prednosť text dohody.',
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Splátka dlhu', '€', { celkem: (n) => `spolu ${n} splátok`, posledni: 'posledná' }),
  coDal: [
    'Vytlačte dohodu dvakrát, obe strany podpíšu oba výtlačky. Každá strana si nechá jeden.',
    'Splátky posielajte prevodom s variabilným symbolom alebo poznámkou – výpis je najlepší dôkaz zaplatenia.',
    'Splátky v hotovosti si dajte vždy písomne potvrdiť.',
    'Ak dlžník mešká, veriteľ musí o zaplatenie celého zostatku požiadať najneskôr do splatnosti najbližšej ďalšej splátky.',
  ],
  kontrola: [
    'Dohoda o splátkach je dvojstranná – podpisujú ju veriteľ aj dlžník. Ak potrebujete len písomné priznanie dlhu od dlžníka, stačí uznanie dlhu.',
    'Celý zostatok môže veriteľ pri nezaplatení splátky žiadať, len ak je to dohodnuté – a to najneskôr do splatnosti najbližšie nasledujúcej splátky (§ 565 OZ). Tento vzor to dohodnuté má.',
    'Uznanie dlhu musí byť písomné a určiť dôvod aj výšku dlhu (§ 558 OZ). Od uznania plynie nová premlčacia doba 10 rokov (§ 110 ods. 1 OZ).',
    'Dôvod dlhu opíšte konkrétne: z akej zmluvy alebo udalosti a z ktorého dňa.',
    'Čiastočné platby sa započítavajú najprv na istinu a potom na úroky, ak dlžník neurčí inak (§ 566 ods. 2 OZ).',
    'Úroky a zmluvné pokuty tento vzor nerieši. Ak ich chcete dohodnúť, dajte si dohodu skontrolovať advokátom.',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
    TIP_ZRUSENY_OZ_SK,
  ],
  zdroje: [OZ_SK, OZ_SK_ZAVAZKY, ZAKON_HOTOVOST_SK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Veriteľ a dlžník',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Veriteľ – meno a priezvisko', napoveda: 'Komu sa dlhuje. Pri firme názov a IČO.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', napoveda: 'Podľa občianskeho preukazu.', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Dlžník – meno a priezvisko', napoveda: 'Kto dlh spláca.', placeholder: 'napr. Peter Kováč', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', napoveda: 'Podľa občianskeho preukazu.', placeholder: 'napr. Mierová 25, 821 05 Bratislava', sirka: 46 },
      ],
    },
    {
      id: 'dlh',
      nazev: 'Dlh',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Nesplatená výška dlhu (€)', napoveda: 'Koľko dlžník dlhuje dnes, po odpočítaní toho, čo už zaplatil. Slovom doplníme sami.', placeholder: 'napr. 2400', sirka: 14, polovina: true },
        { id: 'duvod_popis', typ: 'text', popis: 'Dôvod dlhu', napoveda: 'Z čoho dlh vznikol – zmluva, faktúra, škoda – a z ktorého dňa.', placeholder: 'napr. nevrátená pôžička podľa zmluvy o pôžičke zo dňa 3. 3. 2026', sirka: 56 },
        {
          id: 'uznanie',
          typ: 'volba',
          popis: 'Má dlžník dlh zároveň uznať?',
          napoveda: 'Uznanie posilní postavenie veriteľa: predĺži premlčaciu dobu na 10 rokov od uznania.',
          moznosti: [
            { hodnota: 'ano', popis: 'Áno, dlžník dlh uznáva' },
            { hodnota: 'nie', popis: 'Nie, len dohoda o splátkach' },
          ],
        },
      ],
    },
    {
      id: 'splatky',
      nazev: 'Splátky',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Mesačná splátka (€)', napoveda: 'Posledná splátka môže byť nižšia. Splátkový kalendár vypočítame sami.', placeholder: 'napr. 200', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'Deň v mesiaci', napoveda: 'Do ktorého dňa v mesiaci sa splátka platí.', placeholder: 'napr. 15', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Mesiac prvej splátky', napoveda: 'Vyberte ľubovoľný deň v mesiaci, keď sa začne splácať.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN veriteľa', napoveda: 'Kam sa budú splátky posielať.', placeholder: 'SK12 0000 0000 0000 0000 0000', sirka: 30 },
        {
          id: 'strata',
          typ: 'volba',
          popis: 'Kedy sa stáva splatným celý zostatok',
          napoveda: 'Strata výhody splátok platí, len ak je dohodnutá (§ 565 OZ).',
          moznosti: [
            { hodnota: 'jedna', popis: 'Pri omeškaní s jednou splátkou o viac ako 15 dní' },
            { hodnota: 'dve', popis: 'Pri omeškaní s dvoma splátkami' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu', napoveda: 'Predvyplníme podľa adresy veriteľa.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum podpisu', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => sumaSlovom(d.castka),
    splatka_slovy: (d) => sumaSlovom(d.splatka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${Number(m[2])}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Zmluvné strany',
      vysvetleni: 'Kto komu dlhuje.',
      odstavce: [
        '**Veriteľ:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}} (ďalej len „veriteľ“)',
        '**Dlžník:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}} (ďalej len „dlžník“)',
      ],
    },
    {
      nadpis: 'Dlh',
      vysvetleni: 'Koľko a z akého dôvodu sa dlhuje. Uznanie dlhu predĺži premlčaciu dobu.',
      odstavce: [
        'Dlžník dlhuje veriteľovi ku dňu podpisu tejto dohody sumu **{{castka}}** (slovom: {{castka_slovy}}). Dôvod dlhu: {{duvod_popis}}.',
        {
          volba: 'uznanie',
          uvodVzor: 'Uznanie dlhu (zaškrtnite jednu možnosť):',
          moznosti: {
            ano: 'Dlžník podľa § 558 Občianskeho zákonníka písomne uznáva svoj dlh v uvedenej výške a z uvedeného dôvodu a zaväzuje sa ho zaplatiť. Ak by bol dlh už premlčaný, dlžník vyhlasuje, že o jeho premlčaní vie.',
            nie: 'Strany touto dohodou upravujú len spôsob splatenia dlhu.',
          },
        },
      ],
    },
    {
      nadpis: 'Splátky',
      vysvetleni: 'Kedy a koľko sa platí. Presný rozpis je v splátkovom kalendári v prílohe.',
      odstavce: [
        'Veriteľ súhlasí, aby dlžník zaplatil dlh v pravidelných mesačných splátkach vo výške **{{splatka}}** (slovom: {{splatka_slovy}}), splatných vždy do {{splatka_den}}. dňa v mesiaci, prvýkrát v mesiaci {{prvni_mesic}}, až do úplného zaplatenia dlhu. Posledná splátka môže byť nižšia. Rozpis splátok je v prílohe č. 1.',
        'Splátky sa platia na účet veriteľa IBAN {{ucet}}, prípadne v hotovosti proti písomnému potvrdeniu. Splátka je zaplatená dňom pripísania na účet veriteľa alebo dňom prevzatia hotovosti.',
        'Dlžník môže dlh kedykoľvek zaplatiť aj skôr, celý alebo po častiach.',
        'Kým dlžník platí splátky riadne a včas, veriteľ nebude zaplatenie dlhu vymáhať.',
      ],
    },
    {
      nadpis: 'Strata výhody splátok',
      vysvetleni: 'Ak dlžník prestane platiť, veriteľ môže chcieť celý zostatok naraz – zákon to dovoľuje len pri takejto dohode.',
      odstavce: [
        {
          volba: 'strata',
          uvodVzor: 'Strany sa dohodli podľa § 565 Občianskeho zákonníka (zaškrtnite jednu možnosť):',
          uvod: 'Strany sa podľa § 565 Občianskeho zákonníka dohodli, že',
          moznosti: {
            jedna: 'ak sa dlžník omešká so zaplatením ktorejkoľvek splátky o viac ako 15 dní, môže veriteľ žiadať o zaplatenie celého zostatku dlhu naraz.',
            dve: 'ak sa dlžník omešká so zaplatením dvoch splátok, môže veriteľ žiadať o zaplatenie celého zostatku dlhu naraz.',
          },
        },
        'Toto právo môže veriteľ použiť najneskôr do splatnosti najbližšie nasledujúcej splátky. Zostatok je splatný do 15 dní od doručenia písomnej výzvy veriteľa dlžníkovi.',
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      vysvetleni: 'Bežné formálne body.',
      odstavce: [
        'Práva a povinnosti neupravené touto dohodou sa riadia zákonom č. 40/1964 Zb., Občiansky zákonník.',
        'Dohoda je vyhotovená v dvoch rovnopisoch, z ktorých každá strana dostane jeden. Nadobúda platnosť a účinnosť dňom podpisu oboma stranami. Meniť ju možno len písomne.',
      ],
    },
  ],
};
