/**
 * Výpověď smlouvy (obecný dopis) – Česko. Operátor/internet, pojištění, elektřina/plyn, členství, předplatné, jiné.
 * Ověřeno: § 1998, § 1999, § 2805, § 2807 OZ; § 63b zák. č. 127/2005 Sb. (odst. 3 automatické prodloužení,
 * odst. 5 změna smlouvy, odst. 8 úhrada jen do 3 měsíců od uzavření, max. 1/20); § 11a odst. 6, § 11b, § 11c
 * zák. č. 458/2000 Sb. Konkrétní výpovědní dobu jinak určuje smlouva / obchodní podmínky – text na ni odkazuje.
 * Povinné ručení má vlastní vzor (vypoved-povinneho-ruceni).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, ZAKON_EK, CTU_UKONCENI, ENERGETICKY_ZAKON, ERU_VYPOVED, COI } from './zdroje';
import { naDatum, pridejDny, isoDatum } from '../terminy';

const ZEK = 'zákona č. 127/2005 Sb., o elektronických komunikacích';
const EZ = 'zákona č. 458/2000 Sb., energetický zákon';

export const vypovedSmlouvy: Sablona = {
  kod: 'CZ-VYPOVED-SMLOUVY',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Výpověď smlouvy',
  podnadpis: 'výpověď smlouvy o poskytování služeb podle smlouvy, obchodních podmínek a právních předpisů',
  souborPdf: 'vypoved-smlouvy',
  paticka: 'Vytvořeno zdarma · šablona CZ-VYPOVED-SMLOUVY v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zákazník', vpravo: 'převzal za poskytovatele (při osobním podání)' },
  slovo: { n: 'výpověď', g: 'výpovědi', a: 'výpověď', l: 'výpovědi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const odeslano = naDatum(d.datum);
    return odeslano
      ? [{ nazev: 'Zkontrolovat potvrzení výpovědi', datum: isoDatum(pridejDny(odeslano, 14)), popis: 'Pokud firma výpověď nepotvrdila, ozvěte se jí a mějte po ruce doklad o doručení.' }]
      : [];
  },
  coDal: [
    'Podepište výpověď a doručte ji prokazatelně: doporučeně s dodejkou, do datové schránky, osobně proti potvrzení, nebo způsobem, který uvádějí obchodní podmínky (např. formulář v zákaznickém účtu).',
    'Výpovědní doba se zpravidla počítá od doručení, ne od odeslání. Neposílejte na poslední chvíli.',
    'Do konce výpovědní doby službu platíte. Zrušte trvalý příkaz nebo inkaso až po posledním vyúčtování.',
    'Vraťte zapůjčené zařízení (router, set-top box, čip) podle pokynů firmy a nechte si vrácení potvrdit.',
    'Schovejte si kopii výpovědi a doklad o doručení, dokud nedostanete potvrzení a konečné vyúčtování.',
  ],
  kontrola: [
    'Číslo smlouvy nebo zákaznické číslo opište přesně z faktury či smlouvy – podle něj firma výpověď přiřadí.',
    'Výpovědní dobu a způsob podání najdete ve smlouvě a v obchodních (všeobecných) podmínkách. Dopis ji nemusí uvádět – smlouva skončí k nejbližšímu možnému dni.',
    'Operátor: smlouvu na dobu určitou s automatickým prodloužením můžete po prodloužení vypovědět kdykoli bezplatně s nejvýše měsíční výpovědní dobou. Při nevýhodné změně smlouvy ji lze bezplatně vypovědět do 1 měsíce od oznámení změny. Úhradu za předčasné ukončení lze po spotřebiteli chtít jen při skončení do 3 měsíců od uzavření a nejvýše 1/20 zbývajících paušálů (zvlášť se platí dotovaný telefon). Podrobně [ČTÚ – ukončení smlouvy](https://ctu.gov.cz/ukonceni-smlouvy).',
    'Odcházíte k jinému operátorovi s číslem? Výpověď nepište – přenesení čísla a ukončení staré smlouvy zařídí nový operátor.',
    'Elektřina a plyn (domácnost): smlouvu na dobu neurčitou lze vypovědět s výpovědní dobou 3 měsíce od prvního dne měsíce po doručení (kratší sjednaná platí). Smlouvu na dobu určitou s automatickým prodloužením vypovězte nejpozději 20. den před koncem sjednané doby. Při zvýšení ceny lze vypovědět bez postihu nejpozději 10. den před účinností změny. Vzory a podrobnosti má [ERÚ](https://eru.gov.cz/vzory-pro-odstoupeni-nebo-vypoved-smlouvy).',
    'Pojištění: ke konci pojistného období musí pojišťovna výpověď dostat nejméně 6 týdnů předem; do 2 měsíců od uzavření je výpovědní doba 8 dní; po pojistné události do 3 měsíců od jejího oznámení s měsíční výpovědní dobou. Na povinné ručení použijte náš samostatný vzor výpovědi povinného ručení.',
    'Posilovna, předplatné, jiné služby: rozhoduje smlouva a obchodní podmínky. Smlouvu na dobu neurčitou s opakovaným plněním lze podle § 1999 občanského zákoníku zrušit ke konci kalendářního čtvrtletí výpovědí podanou alespoň 3 měsíce předem. Smlouvu na dobu určitou bez možnosti výpovědi obvykle nelze ukončit dřív – zkuste dohodu. Problém s poctivostí podmínek můžete řešit s [Českou obchodní inspekcí](https://www.coi.cz/).',
    'Smlouvu uzavřenou na dálku (online, po telefonu) nebo mimo provozovnu můžete jako spotřebitel zpravidla do 14 dnů zrušit odstoupením bez udání důvodu – použijte náš vzor odstoupení od smlouvy.',
  ],
  zdroje: [OZ, ZAKON_EK, CTU_UKONCENI, ENERGETICKY_ZAKON, ERU_VYPOVED, COI],

  kroky: [
    {
      id: 'zakaznik',
      nazev: 'Zákazník',
      popis: 'Kdo smlouvu uzavřel. Údaje pište tak, jak je má firma ve smlouvě.',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Jméno a příjmení', napoveda: 'Jak je uvedeno ve smlouvě (u firmy název a IČO).', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Datum narození (nepovinné)', napoveda: 'Pomůže firmě dohledat vás, pokud nemáte číslo smlouvy po ruce.', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa ze smlouvy, případně aktuální adresa pro korespondenci.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46, autocomplete: 'street-address' },
        { id: 'z_kontakt', typ: 'text', popis: 'Telefon nebo e-mail (nepovinné)', napoveda: 'Kam vám může firma poslat potvrzení výpovědi.', placeholder: 'např. jan.novak@email.cz', sirka: 30 },
      ],
    },
    {
      id: 'smlouva',
      nazev: 'Firma a smlouva',
      popis: 'Údaje najdete ve smlouvě, na faktuře nebo v zákaznickém účtu.',
      pole: [
        {
          id: 'typ',
          typ: 'volba',
          popis: 'Co vypovídáte',
          napoveda: 'Podle typu vám ukážeme zákonné lhůty a do dopisu doplníme správný paragraf. Povinné ručení má vlastní vzor.',
          moznosti: [
            { hodnota: 'operator', popis: 'Mobilní tarif, internet nebo televize (operátor)' },
            { hodnota: 'pojisteni', popis: 'Pojištění (domácnost, úraz, havarijní…), ne povinné ručení' },
            { hodnota: 'energie', popis: 'Dodávka elektřiny nebo plynu' },
            { hodnota: 'clenstvi', popis: 'Posilovna, fitness, klub nebo jiné členství' },
            { hodnota: 'predplatne', popis: 'Předplatné nebo služba (časopis, streaming, úklid…)' },
            { hodnota: 'jine', popis: 'Jiná smlouva' },
          ],
        },
        { id: 'f_nazev', typ: 'text', popis: 'Firma (poskytovatel)', napoveda: 'Přesný název z faktury nebo smlouvy.', placeholder: 'např. Sportcentrum Říčany s.r.o.', sirka: 34 },
        { id: 'f_ico', typ: 'text', popis: 'IČO (nepovinné)', napoveda: 'Najdete na faktuře. Tlačítkem doplníte název a sídlo z registru.', placeholder: 'např. 12345678', sirka: 12, polovina: true, ares: { nazev: 'f_nazev', adresa: 'f_adresa' } },
        { id: 'f_adresa', typ: 'text', popis: 'Adresa pro doručení', napoveda: 'Korespondenční adresa z obchodních podmínek nebo webu firmy (může se lišit od sídla). Na ni výpověď posílejte.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
        { id: 'cislo_smlouvy', typ: 'text', popis: 'Číslo smlouvy nebo zákaznické číslo', napoveda: 'Nejdůležitější údaj – podle něj firma výpověď přiřadí.', placeholder: 'např. 1234567890', sirka: 18, polovina: true },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum uzavření (nepovinné)', napoveda: 'Ze smlouvy. U pojištění a operátorů podle něj poznáte lhůty.', sirka: 14, polovina: true },
        { id: 'predmet', typ: 'text', popis: 'Čeho se výpověď týká (nepovinné)', napoveda: 'Upřesnění: telefonní číslo, adresa a EAN/EIC odběrného místa, číslo členské karty, název tarifu…', placeholder: 'např. tel. číslo 777 123 456 / odběrné místo Nerudova 12, EAN …', sirka: 56 },
      ],
    },
    {
      id: 'vypoved',
      nazev: 'Výpověď',
      pole: [
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Jak smlouvu ukončujete',
          napoveda: 'Nejčastější je běžná výpověď podle smlouvy. Zvláštní důvody dávají kratší nebo bezplatné ukončení – lhůty najdete v tipech níže.',
          moznosti: [
            { hodnota: 'smlouva', popis: 'Běžná výpověď k nejbližšímu možnému dni' },
            { hodnota: 'ke_dni', popis: 'Výpověď k určitému dni (pokud to výpovědní doba dovolí)' },
            { hodnota: 'prodlouzeni', popis: 'Smlouva se automaticky prodlužuje / byla prodloužena' },
            { hodnota: 'zmena', popis: 'Nesouhlasím s oznámenou změnou ceny nebo podmínek' },
            { hodnota: 'obdobi', popis: 'Pojištění: ke konci pojistného období' },
            { hodnota: 'dva_mesice', popis: 'Pojištění: do 2 měsíců od uzavření smlouvy' },
            { hodnota: 'udalost', popis: 'Pojištění: do 3 měsíců od oznámení pojistné události' },
          ],
        },
        { id: 'konec_datum', typ: 'datum', popis: 'Ukončit ke dni', napoveda: 'Pokud výpovědní doba do tohoto dne nestihne uběhnout, skončí smlouva k nejbližšímu pozdějšímu možnému dni.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'ke_dni' } },
        { id: 'zmena_datum', typ: 'datum', popis: 'Datum oznámení o změně', napoveda: 'Kdy vám firma změnu oznámila (dopis, e-mail, SMS). Od něj běží lhůta.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'zmena' } },
        { id: 'udalost_cislo', typ: 'text', popis: 'Číslo pojistné události (nepovinné)', napoveda: 'Číslo škody, které vám pojišťovna přidělila.', placeholder: 'např. 4321/2026', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'udalost' } },
        {
          id: 'zadosti',
          typ: 'vice',
          popis: 'Co ještě po firmě chcete (nepovinné)',
          napoveda: 'Potvrzení vám dá jistotu, kdy smlouva končí. Přeplatek vrátí rychleji, když uvedete účet.',
          moznosti: [
            { hodnota: 'potvrzeni', popis: 'Písemné potvrzení výpovědi a data ukončení' },
            { hodnota: 'vyuctovani', popis: 'Konečné vyúčtování a vrácení přeplatku' },
            { hodnota: 'zarizeni', popis: 'Pokyny k vrácení zapůjčeného zařízení' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu pro vrácení přeplatku', napoveda: 'Váš účet, kam má firma případný přeplatek poslat.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'zadosti', je: 'vyuctovani' } },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle vaší adresy.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    /** Právní základ podle typu smlouvy a důvodu; bez typu obecně smlouva a obchodní podmínky */
    zaklad: (d) => {
      if (!d.typ && !d.duvod) return '';
      if (d.duvod === 'prodlouzeni') {
        if (d.typ === 'operator') return `§ 63b odst. 3 ${ZEK}`;
        if (d.typ === 'energie') return `§ 11c odst. 1 ${EZ}`;
      }
      if (d.duvod === 'zmena') {
        if (d.typ === 'operator') return `§ 63b odst. 5 ${ZEK}`;
        if (d.typ === 'energie') return `§ 11a odst. 6 ${EZ}`;
      }
      return d.typ === 'pojisteni' ? 'pojistné smlouvy a pojistných podmínek' : 'smlouvy a obchodních podmínek';
    },
  },

  clanky: [
    {
      nadpis: 'Zákazník',
      vysvetleni: 'Kdo výpověď podává – ten, kdo smlouvu uzavřel.',
      odstavce: ['{{z_jmeno}}, datum narození {{z_narozeni}}, bytem {{z_adresa}}, kontakt: {{z_kontakt}}'],
    },
    {
      nadpis: 'Poskytovatel',
      vysvetleni: 'Komu výpověď posíláte.',
      odstavce: ['{{f_nazev}}, IČO {{f_ico}}, {{f_adresa}}'],
    },
    {
      nadpis: 'Výpověď smlouvy',
      vysvetleni: 'Samotná výpověď. Číslo smlouvy firmě řekne, o kterou smlouvu jde; důvod určuje, kdy smlouva skončí.',
      odstavce: [
        'Vypovídám smlouvu č. {{cislo_smlouvy}} uzavřenou dne {{smlouva_datum}} ({{predmet}}).',
        {
          volba: 'duvod',
          uvodVzor: 'Způsob ukončení (zaškrtněte jednu možnost):',
          moznosti: {
            smlouva: 'Smlouvu vypovídám k nejbližšímu dni, ke kterému ji lze podle smlouvy, obchodních podmínek a právních předpisů ukončit.',
            ke_dni: 'Smlouvu vypovídám ke dni {{konec_datum}}. Pokud do tohoto dne neuplyne výpovědní doba podle smlouvy nebo zákona, vypovídám ji k nejbližšímu pozdějšímu dni, ke kterému ji lze ukončit.',
            prodlouzeni: 'Smlouva je sjednána na dobu určitou s automatickým prodloužením. Vypovídám ji podle {{zaklad}} tak, aby skončila uplynutím sjednané doby, případně k nejbližšímu dni, ke kterému ji lze ukončit.',
            zmena: 'Nesouhlasím se změnou smlouvy (ceny nebo podmínek), kterou jste mi oznámili dne {{zmena_datum}}, a smlouvu z tohoto důvodu vypovídám podle {{zaklad}}.',
            obdobi: 'Pojištění vypovídám ke konci pojistného období podle § 2807 občanského zákoníku.',
            dva_mesice: 'Pojištění vypovídám do dvou měsíců ode dne uzavření smlouvy s osmidenní výpovědní dobou podle § 2805 písm. a) občanského zákoníku.',
            udalost: 'Pojištění vypovídám do tří měsíců ode dne oznámení pojistné události (č. {{udalost_cislo}}) s měsíční výpovědní dobou podle § 2805 písm. b) občanského zákoníku.',
          },
        },
      ],
    },
    {
      nadpis: 'Další žádosti',
      vysvetleni: 'Co od firmy ještě potřebujete. Vše je nepovinné.',
      odstavce: [
        {
          vice: 'zadosti',
          uvod: 'Současně žádám o:',
          moznosti: {
            potvrzeni: 'písemné potvrzení přijetí výpovědi a data, ke kterému smlouva skončí',
            vyuctovani: 'konečné vyúčtování a vrácení případného přeplatku na účet č. {{ucet}}',
            zarizeni: 'sdělení, jak a kam vrátit zapůjčené zařízení',
          },
        },
      ],
    },
  ],
};
