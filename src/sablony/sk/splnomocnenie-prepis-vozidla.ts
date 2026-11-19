/**
 * Splnomocnenie na prepis (zmenu držby) vozidla – Slovensko.
 * Podľa slovensko.sk musí byť podpis splnomocniteľa úradne overený (listinné splnomocnenie), alebo elektronické.
 * Preto bez podpisu na obrazovke.
 */
import type { Sablona } from '../typy';
import { OZ_SK, ZAKON_PREMAVKA, SK_PREDAL_AUTO, SK_PREDAJ_AUTA, SK_ELEKTRONICKE_SLUZBY, TIP_TOTOZNOST_SK } from './zdroje';

export const splnomocneniePrepisVozidla: Sablona = {
  kod: 'SK-SPLNOMOCNENIE-PREPIS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Splnomocnenie',
  podnadpis: 'na zastupovanie pri zmene držby vozidla podľa § 31 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'splnomocnenie-prepis-vozidla',
  paticka: 'Vytvorené zadarmo · šablóna SK-SPLNOMOCNENIE-PREPIS v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'splnomocniteľ (úradne overený podpis)', vpravo: 'splnomocnenec – plnomocenstvo prijímam' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka: 'Podpis splnomocniteľa musí byť úradne overený (matrika obecného úradu, notár, vybraná pobočka Slovenskej pošty). Preto ho tu na obrazovke nepodpisujte – podpíšte ho až pred osobou, ktorá podpis overuje.',
  slovo: { n: 'splnomocnenie', g: 'splnomocnenia', a: 'splnomocnenie', l: 'splnomocnení' },
  coDal: [
    'Vytlačte splnomocnenie a nechajte si úradne overiť podpis splnomocniteľa (podpisujte až na mieste).',
    'Splnomocnenec ho priloží k žiadosti o zmenu držby vozidla na dopravnom inšpektoráte.',
    'Žiadosť o zmenu držby treba podať do 30 dní od prevodu vozidla.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Končí platnosť splnomocnenia na prepis', datum: d.platnost_do }] : []),
  kontrola: [
    'Podpis splnomocniteľa musí byť úradne overený – bez toho ho dopravný inšpektorát neprijme ([slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/)).',
    'Údaje o vozidle (VIN, EČV, číslo osvedčenia) opíšte presne z osvedčenia o evidencii.',
    'Zmenu držby možno vybaviť aj elektronicky cez [elektronické služby evidencie vozidiel](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_elektronicke-sluzby-evidencie/) – potom splnomocnenie možno nebude treba.',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK, ZAKON_PREMAVKA, SK_PREDAL_AUTO, SK_PREDAJ_AUTA, SK_ELEKTRONICKE_SLUZBY],
  prevzit: {
    kod: 'SK-KUPNA-AUTO',
    nazev: 'kúpnu zmluvu na auto',
    mapuj: (d) => ({
      z_jmeno: d.p_jmeno,
      z_narozeni: d.p_narozeni,
      z_adresa: d.p_adresa,
      m_jmeno: d.prepis === 'kupujici' ? d.k_jmeno : undefined,
      m_narozeni: d.prepis === 'kupujici' ? d.k_narozeni : undefined,
      m_adresa: d.prepis === 'kupujici' ? d.k_adresa : undefined,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      orv: d.orv,
      novy: d.k_jmeno,
      misto: d.misto,
    }),
  },

  kroky: [
    {
      id: 'osoby',
      nazev: 'Kto koho splnomocňuje',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Splnomocniteľ – meno a priezvisko', napoveda: 'Držiteľ vozidla, ktorý nemôže ísť osobne.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
        { id: 'm_jmeno', typ: 'text', popis: 'Splnomocnenec – meno a priezvisko', napoveda: 'Kto to vybaví (napr. kupujúci).', placeholder: 'napr. Petra Horváthová', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Dátum narodenia', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', sirka: 46 },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Továrenská značka a typ', placeholder: 'napr. Škoda Octavia', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'VIN', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Evidenčné číslo (EČV)', sirka: 12, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Číslo osvedčenia o evidencii časť I', sirka: 14, polovina: true },
        { id: 'novy', typ: 'text', popis: 'Nový držiteľ (nepovinné)', napoveda: 'Na koho sa vozidlo prepisuje.', sirka: 34 },
      ],
    },
    {
      id: 'platnost',
      nazev: 'Platnosť a podpis',
      pole: [
        { id: 'platnost_do', typ: 'datum', popis: 'Platí do (nepovinné)', napoveda: 'Bez dátumu platí do odvolania alebo vybavenia veci.', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Splnomocniteľ a splnomocnenec',
      odstavce: [
        'Ja, dolu podpísaný/á **{{z_jmeno}}**, dátum narodenia {{z_narozeni}}, trvalý pobyt {{z_adresa}} (ďalej len „splnomocniteľ“),',
        'splnomocňujem **{{m_jmeno}}**, dátum narodenia {{m_narozeni}}, trvalý pobyt {{m_adresa}} (ďalej len „splnomocnenec“),',
      ],
    },
    {
      nadpis: 'Rozsah splnomocnenia',
      odstavce: [
        'aby ma zastupoval/a na orgáne Policajného zboru (dopravnom inšpektoráte) vo všetkých úkonoch súvisiacich so zmenou držby vozidla továrenskej značky a typu {{znacka}}, VIN {{vin}}, evidenčné číslo {{spz}}, číslo osvedčenia o evidencii časť I {{orv}}, na nového držiteľa {{novy}}, najmä aby podal/a žiadosť, podpisoval/a potrebné tlačivá, odovzdal/a a prevzal/a doklady a tabuľky s evidenčným číslom a zaplatil/a správne poplatky.',
        'Toto splnomocnenie platí do {{platnost_do}}, inak do vybavenia uvedenej veci alebo do odvolania.',
      ],
    },
  ],
};
