/**
 * Preberací (odovzdávací) protokol k vozidlu – Slovensko. Stav vozidla, kľúče, doklady a čas odovzdania.
 * Predvyplnenie z kúpnej zmluvy (SK-KUPNA-AUTO).
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { OZ_SK, SK_PREDAL_AUTO, SK_OVERENIE_VOZIDLA, TIP_TOTOZNOST_SK } from './zdroje';

export const preberaciProtokolVozidla: Sablona = {
  kod: 'SK-PROTOKOL-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Preberací protokol k vozidlu',
  podnadpis: 'záznam o odovzdaní a prevzatí motorového vozidla',
  souborPdf: 'preberaci-protokol-vozidla',
  paticka: 'Vytvorené zadarmo · šablóna SK-PROTOKOL-AUTO v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'odovzdávajúci', vpravo: 'preberajúci' },
  cislovatClanky: false,
  slovo: { n: 'protokol', g: 'protokolu', a: 'protokol', l: 'protokole' },
  coDal: [
    'Vytlačte protokol dvakrát, obe strany podpíšu oba výtlačky.',
    'Odfoťte vozidlo zo všetkých strán a stav tachometra – fotky si nechajte.',
    'Pri predaji podajte žiadosť o zmenu držby vozidla do 30 dní.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predani_datum);
    if (!od || d.duvod !== 'koupe') return [];
    return [{ nazev: 'Zmena držby vozidla – posledný deň', datum: isoDatum(pridejDny(od, 30)), popis: 'Žiadosť o zmenu držby treba podať do 30 dní (orientačne od odovzdania).' }];
  },
  kontrola: [
    'Stav tachometra a paliva odčítajte spoločne a zapíšte presne.',
    'Poškodenia opíšte konkrétne (miesto, rozsah) a odfoťte ich s dátumom.',
    'Čas odovzdania pomôže pri pokutách z kamier alebo nehode – podľa neho je jasné, kto vozidlo práve používal.',
    'VIN v dokladoch sa zhoduje s VIN na vozidle. Históriu si overte cez [Overenie vozidla na slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_overenie-detailov-a-historie-o/).',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK, SK_PREDAL_AUTO, SK_OVERENIE_VOZIDLA],
  prevzit: {
    kod: 'SK-KUPNA-AUTO',
    nazev: 'kúpnu zmluvu na auto',
    mapuj: (d) => ({
      duvod: 'koupe',
      smlouva_datum: d.datum_podpisu,
      p_jmeno: d.p_jmeno,
      p_narozeni: d.p_narozeni,
      p_adresa: d.p_adresa,
      k_jmeno: d.k_jmeno,
      k_narozeni: d.k_narozeni,
      k_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      km: d.km,
      klice: d.klice,
      doklady: d.doklady,
      vybava_jine: d.doklady_jine,
      predani_datum: d.predani_datum,
      misto: d.misto,
    }),
  },

  kroky: [
    {
      id: 'strany',
      nazev: 'Strany a dôvod',
      pole: [
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Prečo sa vozidlo odovzdáva',
          moznosti: [
            { hodnota: 'koupe', popis: 'Predaj (kúpna zmluva)' },
            { hodnota: 'zapujcka', popis: 'Požičanie vozidla' },
            { hodnota: 'vraceni', popis: 'Vrátenie požičaného vozidla' },
          ],
        },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Dátum kúpnej zmluvy', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'koupe' } },
        { id: 'p_jmeno', typ: 'text', popis: 'Odovzdávajúci – meno a priezvisko', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia odovzdávajúceho', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa odovzdávajúceho', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Preberajúci – meno a priezvisko', placeholder: 'napr. Petra Horváthová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia preberajúceho', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa preberajúceho', sirka: 46 },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo a jeho stav',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Továrenská značka a typ', placeholder: 'napr. Škoda Octavia Combi', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'VIN', napoveda: 'V osvedčení o evidencii kolónka E.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Evidenčné číslo (EČV)', placeholder: 'napr. BA123XY', sirka: 12, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stav tachometra', placeholder: 'napr. 154320', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'palivo',
          typ: 'volba',
          popis: 'Palivo v nádrži',
          moznosti: [
            { hodnota: 'rezerva', popis: 'Rezerva' },
            { hodnota: 'ctvrt', popis: '1/4' },
            { hodnota: 'pul', popis: '1/2' },
            { hodnota: 'tri', popis: '3/4' },
            { hodnota: 'plna', popis: 'Plná nádrž' },
          ],
        },
        {
          id: 'poskozeni',
          typ: 'volba',
          popis: 'Poškodenie',
          moznosti: [
            { hodnota: 'bez', popis: 'Bez viditeľného poškodenia' },
            { hodnota: 's', popis: 'Vozidlo má poškodenia' },
          ],
        },
        { id: 'poskozeni_popis', typ: 'textarea', popis: 'Opis poškodení', placeholder: 'napr. škrabanec na zadnom nárazníku vľavo', sirka: 64, zobrazitKdyz: { pole: 'poskozeni', je: 's' } },
      ],
    },
    {
      id: 'predavane',
      nazev: 'Kľúče, doklady, výbava',
      pole: [
        { id: 'klice', typ: 'cislo', popis: 'Počet kľúčov', placeholder: 'napr. 2', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Odovzdané doklady',
          moznosti: [
            { hodnota: 'orv', popis: 'Osvedčenie o evidencii časť I' },
            { hodnota: 'tp', popis: 'Osvedčenie o evidencii časť II' },
            { hodnota: 'servis', popis: 'Servisná knižka' },
            { hodnota: 'stk', popis: 'Protokol o technickej a emisnej kontrole' },
            { hodnota: 'navod', popis: 'Návod na obsluhu' },
          ],
        },
        {
          id: 'vybava',
          typ: 'vice',
          popis: 'Výbava',
          moznosti: [
            { hodnota: 'lekarnicka', popis: 'Lekárnička' },
            { hodnota: 'trojuhelnik', popis: 'Výstražný trojuholník' },
            { hodnota: 'vesta', popis: 'Reflexná vesta' },
            { hodnota: 'rezerva', popis: 'Rezerva alebo sada na opravu pneumatík' },
            { hodnota: 'hever', popis: 'Zdvihák a kľúč na kolesá' },
            { hodnota: 'pneu', popis: 'Druhá sada pneumatík' },
          ],
        },
        { id: 'vybava_jine', typ: 'text', popis: 'Ďalšie veci', placeholder: 'napr. strešný nosič', sirka: 40 },
      ],
    },
    {
      id: 'predani',
      nazev: 'Odovzdanie',
      pole: [
        { id: 'predani_datum', typ: 'datum', popis: 'Dátum odovzdania', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predani_cas', typ: 'text', popis: 'Čas odovzdania', placeholder: 'napr. 14:30', sirka: 8, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miesto odovzdania (obec)', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'poznamky', typ: 'textarea', popis: 'Poznámky', placeholder: 'napr. zimné pneumatiky si preberajúci vyzdvihne do konca mesiaca', sirka: 64 },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Strany',
      vysvetleni: 'Kto vozidlo odovzdáva a kto ho preberá.',
      odstavce: [
        '**Odovzdávajúci:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}}',
        '**Preberajúci:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Odovzdávané vozidlo',
      vysvetleni: 'Ktoré vozidlo sa odovzdáva a prečo.',
      odstavce: [
        'Továrenská značka a typ {{znacka}}, VIN {{vin}}, evidenčné číslo {{spz}} (ďalej len „vozidlo“).',
        {
          volba: 'duvod',
          uvodVzor: 'Dôvod odovzdania (zaškrtnite jednu možnosť):',
          moznosti: {
            koupe: 'Vozidlo sa odovzdáva na základe kúpnej zmluvy uzavretej medzi stranami dňa {{smlouva_datum}}.',
            zapujcka: 'Vozidlo sa odovzdáva preberajúcemu na dočasné užívanie.',
            vraceni: 'Preberajúci preberá späť vozidlo, ktoré odovzdávajúcemu predtým požičal.',
          },
        },
      ],
    },
    {
      nadpis: 'Stav vozidla pri odovzdaní',
      vysvetleni: 'Presný stav v okamihu odovzdania.',
      odstavce: [
        'Stav tachometra pri odovzdaní: {{km}}.',
        {
          volba: 'palivo',
          uvod: 'Množstvo paliva v nádrži:',
          uvodVzor: 'Množstvo paliva v nádrži (zaškrtnite):',
          moznosti: { rezerva: 'rezerva.', ctvrt: 'približne 1/4 nádrže.', pul: 'približne 1/2 nádrže.', tri: 'približne 3/4 nádrže.', plna: 'plná nádrž.' },
        },
        {
          volba: 'poskozeni',
          uvodVzor: 'Poškodenie vozidla (zaškrtnite jednu možnosť):',
          moznosti: {
            bez: 'Vozidlo nemá pri odovzdaní žiadne viditeľné poškodenie.',
            s: 'Vozidlo má pri odovzdaní tieto poškodenia: {{poskozeni_popis}}',
          },
        },
      ],
    },
    {
      nadpis: 'Odovzdané kľúče, doklady a výbava',
      vysvetleni: 'Čo preberajúci dostal spolu s vozidlom.',
      odstavce: [
        'Počet odovzdaných kľúčov: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Odovzdané doklady:',
          moznosti: {
            orv: 'osvedčenie o evidencii časť I',
            tp: 'osvedčenie o evidencii časť II',
            servis: 'servisná knižka',
            stk: 'protokol o poslednej technickej a emisnej kontrole',
            navod: 'návod na obsluhu',
          },
        },
        {
          vice: 'vybava',
          uvod: 'Odovzdaná výbava:',
          moznosti: {
            lekarnicka: 'lekárnička',
            trojuhelnik: 'výstražný trojuholník',
            vesta: 'reflexná vesta',
            rezerva: 'rezervné koleso alebo sada na opravu pneumatík',
            hever: 'zdvihák a kľúč na kolesá',
            pneu: 'druhá sada pneumatík',
          },
          dalsi: 'ďalšie odovzdané veci: {{vybava_jine}}',
        },
      ],
    },
    {
      nadpis: 'Prevzatie',
      vysvetleni: 'Potvrdenie, že odovzdanie prebehlo a kedy presne.',
      odstavce: [
        'Vozidlo bolo odovzdané dňa {{predani_datum}} o {{predani_cas}} hod.',
        'Preberajúci potvrdzuje, že vozidlo vrátane uvedených kľúčov, dokladov a výbavy prevzal v stave opísanom v tomto protokole.',
        'Poznámky: {{poznamky}}',
        'Protokol je vyhotovený v dvoch rovnopisoch, z ktorých každá strana dostane jeden.',
      ],
    },
  ],
};
