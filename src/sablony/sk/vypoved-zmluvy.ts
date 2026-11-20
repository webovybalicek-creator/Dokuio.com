/**
 * Výpoveď zmluvy – Slovensko. Všeobecný dopis zákazníka firme (operátor, poistenie, energie, posilňovňa, predplatné, iné).
 * Lehoty len overené zo zákona: § 87 zák. č. 452/2021 Z. z. (elektronické komunikácie), § 17 ods. 6 a § 17c ods. 2
 * zák. č. 251/2012 Z. z. (energetika), § 800 OZ (poistenie), § 582 OZ (zmluvy na dobu neurčitú bez úpravy výpovede).
 * Inak „podľa zmluvy/podmienok“. OZ zrušený zákonom č. 260/2026 Z. z. (nový OZ od 1. 7. 2027) – sledovať.
 * Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { OZ_SK_ZAVAZKY, ZAKON_EK_SK, ZAKON_ENERGETIKA_SK, TIP_ZRUSENY_OZ_SK } from './zdroje';

export const vypovedZmluvy: Sablona = {
  kod: 'SK-VYPOVED-ZMLUVY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Výpoveď zmluvy',
  podnadpis: 'výpoveď zmluvy o poskytovaní služieb zo strany zákazníka',
  souborPdf: 'vypoved-zmluvy',
  paticka: 'Vytvorené zadarmo · šablóna SK-VYPOVED-ZMLUVY v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zákazník', vpravo: 'prevzal za spoločnosť (pri osobnom podaní)' },
  slovo: { n: 'výpoveď', g: 'výpovede', a: 'výpoveď', l: 'výpovedi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const odoslane = naDatum(d.datum);
    if (!odoslane) return [];
    return [
      {
        nazev: 'Skontrolovať potvrdenie výpovede',
        datum: isoDatum(pridejDny(odoslane, 14)),
        popis: 'Ak firma nepotvrdila prijatie výpovede a dátum skončenia zmluvy, ozvite sa jej.',
      },
    ];
  },
  coDal: [
    'Podpíšte výpoveď a doručte ju preukázateľne: doporučene s doručenkou, osobne proti potvrdeniu na kópii, alebo kanálom, ktorý uvádzajú obchodné podmienky (zákaznícka zóna, e-mail).',
    'Lehota sa počíta od doručenia, nie od odoslania. Neposielajte výpoveď na poslednú chvíľu.',
    'Odložte si podací lístok, doručenku alebo potvrdenie, kým vám firma nepotvrdí skončenie zmluvy.',
    'Zrušte trvalý príkaz alebo súhlas s inkasom v banke až po poslednej platbe podľa vyúčtovania.',
  ],
  kontrola: [
    'Najprv si v zmluve alebo obchodných podmienkach nájdite výpovednú lehotu, prípadnú viazanosť a spôsob doručenia výpovede – líšia sa podľa firmy.',
    'Operátor a internet: zmluvu na dobu neurčitú môžete vypovedať kedykoľvek, aj bez udania dôvodu. Po automatickom predĺžení zmluvy na dobu určitú ju môžete vypovedať kedykoľvek bez sankcií s výpovednou lehotou najviac jeden mesiac (§ 87 ods. 4 a 7 zákona č. 452/2021 Z. z.).',
    'Operátor zmenil zmluvu? Od zmluvy môžete bez sankcií odstúpiť do jedného mesiaca od oznámenia zmeny, ak nejde o zmenu výlučne vo váš prospech, čisto administratívnu alebo vyplývajúcu zo zákona (§ 87 ods. 9 zákona č. 452/2021 Z. z.).',
    'Ak máte viazanosť alebo zvýhodnený telefón, predčasné ukončenie môže znamenať doplatok podľa zmluvy – pozrite si dodatok o viazanosti.',
    'Elektrina a plyn: zmluvu na neurčitý čas vypoviete písomne, výpovedná doba je jeden mesiac od prvého dňa mesiaca po doručení výpovede (§ 17c ods. 2 zákona č. 251/2012 Z. z.). Pri nesúhlase so zmenou ceny alebo podmienok môžete zmluvu vypovedať bezodplatne; výpoveď musí dodávateľ dostať aspoň 15 dní pred účinnosťou zmeny (§ 17 ods. 6).',
    'Meníte dodávateľa energií? Spýtajte sa nového dodávateľa, či výpoveď a zmenu nevybaví za vás – aby ste neostali bez dodávky.',
    'Poistenie s bežným poistným možno vypovedať ku koncu poistného obdobia; výpoveď musí poisťovňa dostať aspoň šesť týždňov pred jeho uplynutím (§ 800 ods. 1 OZ). Pri povinnom zmluvnom poistení auta platia aj osobitné pravidlá – pozrite si poistnú zmluvu.',
    'Posilňovňa a predplatné: zákon osobitnú lehotu nestanovuje, rozhoduje zmluva a podmienky. Ak z nich ani zo zákona spôsob výpovede nevyplýva a zmluva je na dobu neurčitú, platí výpovedná lehota tri mesiace ku koncu kalendárneho štvrťroka (§ 582 OZ).',
    TIP_ZRUSENY_OZ_SK,
  ],
  zdroje: [ZAKON_EK_SK, ZAKON_ENERGETIKA_SK, OZ_SK_ZAVAZKY],

  kroky: [
    {
      id: 'zakaznik',
      nazev: 'Zákazník',
      popis: 'Ten, na koho je zmluva uzavretá. Firma vás podľa týchto údajov dohľadá.',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Meno a priezvisko', napoveda: 'Presne ako v zmluve. Pri firme názov a IČO.', placeholder: 'napr. Petra Kováčová', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Pomôže firme overiť, že výpoveď podávate vy. Rodné číslo písať nemusíte.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa, ktorú má firma v zmluve, alebo vaša aktuálna.', placeholder: 'napr. Mierová 25, 821 05 Bratislava', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefón alebo e-mail', napoveda: 'Na potvrdenie výpovede alebo doplnenie údajov.', placeholder: 'napr. petra@email.sk', sirka: 30 },
      ],
    },
    {
      id: 'firma',
      nazev: 'Firma a zmluva',
      popis: 'Údaje nájdete v zmluve, na faktúre alebo v zákazníckej zóne.',
      pole: [
        {
          id: 'typ',
          typ: 'volba',
          popis: 'Čo vypovedáte',
          napoveda: 'Podľa typu doplníme správne označenie zmluvy a v tipoch uvidíte zákonné lehoty.',
          moznosti: [
            { hodnota: 'operator', popis: 'Mobilný operátor, internet alebo televízia' },
            { hodnota: 'poistenie', popis: 'Poistenie' },
            { hodnota: 'energie', popis: 'Elektrina alebo plyn' },
            { hodnota: 'clenstvo', popis: 'Posilňovňa alebo členstvo' },
            { hodnota: 'predplatne', popis: 'Predplatné alebo iná služba' },
            { hodnota: 'ine', popis: 'Iná zmluva' },
          ],
        },
        { id: 'f_nazev', typ: 'text', popis: 'Firma – názov', napoveda: 'Obchodné meno zo zmluvy alebo faktúry.', placeholder: 'napr. Energia Slovensko, a. s.', sirka: 34 },
        { id: 'f_adresa', typ: 'text', popis: 'Adresa firmy', napoveda: 'Korešpondenčná adresa zo zmluvy alebo z webu firmy – na ňu výpoveď pošlite.', placeholder: 'napr. Hlavná 1, 811 01 Bratislava', sirka: 46 },
        { id: 'cislo_zmluvy', typ: 'text', popis: 'Číslo zmluvy alebo zákaznícke číslo', napoveda: 'Najdôležitejší údaj – podľa neho firma výpoveď priradí. Býva na faktúre.', placeholder: 'napr. 1234567890', sirka: 18, polovina: true },
        { id: 'zmluva_datum', typ: 'datum', popis: 'Dátum uzavretia zmluvy (nepovinné)', napoveda: 'Ak ho poznáte, pomôže pri zmluvách na dobu určitú a pri poistení.', sirka: 14, polovina: true },
        {
          id: 'predmet',
          typ: 'text',
          popis: 'Čoho sa zmluva týka',
          napoveda: 'Telefónne číslo, druh poistenia, číslo odberného miesta (EIC/POD), názov členstva alebo služby.',
          placeholder: 'napr. tel. č. 0905 123 456 alebo EIC 24ZSS…',
          sirka: 40,
        },
      ],
    },
    {
      id: 'vypoved',
      nazev: 'Výpoveď',
      pole: [
        {
          id: 'dovod',
          typ: 'volba',
          popis: 'Dôvod',
          napoveda: 'Dôvod uvádzať nemusíte. Pri nesúhlase so zmenou ceny alebo podmienok vám zákon pri operátoroch a energiách dáva právo skončiť bez sankcií.',
          moznosti: [
            { hodnota: 'bez', popis: 'Bez udania dôvodu' },
            { hodnota: 'zmena', popis: 'Nesúhlasím so zmenou ceny alebo podmienok' },
          ],
        },
        { id: 'zmena_datum', typ: 'datum', popis: 'Kedy vám firma zmenu oznámila', napoveda: 'Dátum listu, e-mailu alebo SMS o zmene. Od neho bežia zákonné lehoty.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'dovod', je: 'zmena' } },
        {
          id: 'termin',
          typ: 'volba',
          popis: 'Kedy má zmluva skončiť',
          napoveda: 'Ak si nie ste istí lehotou, vyberte najbližší možný termín – firma ho určí podľa zmluvy a zákona.',
          moznosti: [
            { hodnota: 'najskor', popis: 'K najbližšiemu možnému termínu' },
            { hodnota: 'datum', popis: 'K určitému dátumu' },
          ],
        },
        { id: 'ku_dnu', typ: 'datum', popis: 'Skončiť ku dňu', napoveda: 'Napr. koniec poistného obdobia alebo viazanosti. Ak to zmluva neumožní, skončí k najbližšiemu možnému termínu.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'termin', je: 'datum' } },
        {
          id: 'zadosti',
          typ: 'vice',
          popis: 'Čo ešte od firmy chcete',
          napoveda: 'Potvrdenie je dôkaz, že výpoveď dostali. Preplatok vám vrátia, len keď vedia kam.',
          moznosti: [
            { hodnota: 'potvrdenie', popis: 'Písomné potvrdenie výpovede a dátumu skončenia' },
            { hodnota: 'vyuctovanie', popis: 'Konečné vyúčtovanie a vrátenie preplatku' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN na vrátenie preplatku', napoveda: 'Váš účet, kam má firma poslať preplatok.', placeholder: 'SK12 0000 0000 0000 0000 0000', sirka: 30, zobrazitKdyz: { pole: 'zadosti', je: 'vyuctovanie' } },
        { id: 'misto', typ: 'text', popis: 'Miesto (obec)', napoveda: 'Predvyplníme podľa vašej adresy.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zákazník',
      vysvetleni: 'Kto výpoveď podáva – ten, na koho je zmluva uzavretá.',
      odstavce: ['{{k_jmeno}}, dátum narodenia {{k_narozeni}}, adresa {{k_adresa}}, kontakt: {{k_kontakt}}'],
    },
    {
      nadpis: 'Adresát',
      vysvetleni: 'Firma, ktorej výpoveď posielate.',
      odstavce: ['{{f_nazev}}, {{f_adresa}}'],
    },
    {
      nadpis: 'Výpoveď zmluvy',
      vysvetleni: 'Samotná výpoveď. Číslo zmluvy je kľúčové, aby ju firma vedela priradiť.',
      odstavce: [
        {
          volba: 'typ',
          uvodVzor: 'Týmto vypovedám (zaškrtnite jednu možnosť):',
          uvod: 'Týmto vypovedám',
          moznosti: {
            operator: 'zmluvu o poskytovaní elektronických komunikačných služieb č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} ({{predmet}}).',
            poistenie: 'poistnú zmluvu č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} ({{predmet}}).',
            energie: 'zmluvu o dodávke (združenej dodávke) elektriny alebo plynu č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} pre odberné miesto {{predmet}}.',
            clenstvo: 'zmluvu o členstve č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} ({{predmet}}).',
            predplatne: 'zmluvu o predplatnom (poskytovaní služieb) č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} ({{predmet}}).',
            ine: 'zmluvu č. {{cislo_zmluvy}} uzavretú dňa {{zmluva_datum}} ({{predmet}}).',
          },
        },
        {
          volba: 'dovod',
          uvodVzor: 'Dôvod (zaškrtnite jednu možnosť):',
          moznosti: {
            bez: 'Výpoveď podávam bez udania dôvodu.',
            zmena: 'Výpoveď podávam, pretože nesúhlasím so zmenou ceny alebo zmluvných podmienok, ktorú ste mi oznámili dňa {{zmena_datum}}. Ak mi zákon v tomto prípade dáva právo zmluvu ukončiť alebo od nej odstúpiť bez sankcií, uplatňujem ho týmto podaním.',
          },
        },
        {
          volba: 'termin',
          uvodVzor: 'Skončenie zmluvy (zaškrtnite jednu možnosť):',
          moznosti: {
            najskor: 'Žiadam o skončenie zmluvy k najbližšiemu možnému termínu podľa zmluvy, obchodných podmienok a zákona.',
            datum: 'Žiadam o skončenie zmluvy ku dňu {{ku_dnu}}. Ak to zmluva alebo zákon neumožňuje, žiadam o skončenie k najbližšiemu možnému termínu.',
          },
        },
      ],
    },
    {
      nadpis: 'Ďalšie žiadosti',
      vysvetleni: 'Potvrdenie a vyúčtovanie si vyžiadajte rovno vo výpovedi.',
      odstavce: [
        {
          vice: 'zadosti',
          uvod: 'Zároveň žiadam o:',
          moznosti: {
            potvrdenie: 'písomné potvrdenie prijatia výpovede s uvedením dátumu skončenia zmluvy',
            vyuctovanie: 'konečné vyúčtovanie a vrátenie preplatku na účet IBAN {{ucet}}',
          },
        },
      ],
    },
  ],
};
