/**
 * Dohoda o skončení nájmu bytu – Česko. Nájem lze kdykoli ukončit dohodou stran (§ 1981 OZ).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, OCHRANCE_NAJEM } from './zdroje';

export const dohodaOSkonceniNajmu: Sablona = {
  kod: 'CZ-DOHODA-NAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Dohoda o skončení nájmu bytu',
  podnadpis: 'uzavřená podle zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'dohoda-o-skonceni-najmu',
  paticka: 'Vytvořeno zdarma · šablona CZ-DOHODA-NAJEM v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'pronajímatel', vpravo: 'nájemce' },
  slovo: { n: 'dohoda', g: 'dohody', a: 'dohodu', l: 'dohodě' },
  coDal: [
    'Vytiskněte dohodu dvakrát, obě strany podepíší oba výtisky.',
    'Při odevzdání bytu sepište předávací protokol se stavy měřičů.',
    'Nájemce si zařídí odhlášení elektřiny a plynu, pokud je měl na sebe.',
    'Hlídejte termín vrácení jistoty a vyúčtování služeb.',
  ],
  kontrola: [
    'Dohodu musí podepsat všichni pronajímatelé i všichni nájemci.',
    'Konkrétní den skončení nájmu a den odevzdání bytu.',
    'Jak a kdy se vrátí jistota (kauce) s úroky a jak se vypořádá vyúčtování služeb.',
    'Nájemce: dohoda nahrazuje výpověď – nebojte se domluvit dřívější konec, než by dovolila výpověď.',
    'Pronajímatel: nájemce nemůže být k dohodě nucen; dohoda pod nátlakem jde napadnout.',
  ],
  zdroje: [OZ, OCHRANCE_NAJEM],

  kroky: [
    {
      id: 'strany',
      nazev: 'Strany a byt',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Pronajímatel – jméno a příjmení', napoveda: 'Podle nájemní smlouvy.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa pronajímatele', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Nájemce – jméno a příjmení', napoveda: 'Podle nájemní smlouvy; více nájemců uveďte všechny.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození nájemce', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'byt', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Podle nájemní smlouvy.', placeholder: 'např. Masarykova 1025/5, Říčany, byt č. 12', sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum nájemní smlouvy', napoveda: 'Kdy byla smlouva podepsána.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'konec',
      nazev: 'Skončení',
      pole: [
        { id: 'konec_dne', typ: 'datum', popis: 'Nájem skončí dne', napoveda: 'Poslední den nájmu. Do tohoto dne se platí nájemné.', sirka: 14, polovina: true },
        { id: 'odevzdani', typ: 'datum', popis: 'Odevzdání bytu nejpozději', napoveda: 'Kdy nájemce vrátí klíče. Obvykle stejný den jako konec nájmu.', sirka: 14, polovina: true },
        {
          id: 'jistota',
          typ: 'volba',
          popis: 'Jistota (kauce)',
          napoveda: 'Vrácení po vyúčtování služeb pronajímatele chrání před nedoplatky; pro nájemce je to ale pozdější.',
          moznosti: [
            { hodnota: 'odevzdani', popis: 'Vrátí se do určité doby od odevzdání bytu' },
            { hodnota: 'vyuctovani', popis: 'Vrátí se po vyúčtování služeb' },
            { hodnota: 'zadna', popis: 'Jistota nebyla složena' },
          ],
        },
        { id: 'jistota_dni', typ: 'cislo', popis: 'Vrátit do (dnů)', napoveda: 'Např. 14 nebo 30 dnů od odevzdání bytu.', placeholder: 'např. 14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
        { id: 'ucet', typ: 'text', popis: 'Účet nájemce pro vrácení jistoty', napoveda: 'Kam pronajímatel kauci pošle.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
        { id: 'dalsi', typ: 'textarea', popis: 'Další ujednání (nepovinné)', napoveda: 'Např. co z vybavení nájemce nechá v bytě nebo kdo vymaluje.', placeholder: 'např. nájemce před odevzdáním byt vymaluje', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle adresy pronajímatele.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo dohodu uzavírá.',
      odstavce: [
        '**Pronajímatel:** {{p_jmeno}}, trvale bytem {{p_adresa}}',
        '**Nájemce:** {{k_jmeno}}, datum narození {{k_narozeni}}',
      ],
    },
    {
      nadpis: 'Skončení nájmu',
      vysvetleni: 'Kdy nájem končí a kdy se byt odevzdá.',
      odstavce: [
        'Strany se dohodly, že nájem bytu {{byt}} podle nájemní smlouvy ze dne {{smlouva_datum}} skončí dnem {{konec_dne}}.',
        'Nájemce odevzdá byt pronajímateli včetně všech klíčů nejpozději dne {{odevzdani}} ve stavu, v jakém ho převzal, s přihlédnutím k obvyklému opotřebení. O odevzdání strany sepíšou předávací protokol.',
        'Nájemné a zálohy na služby nájemce platí do dne skončení nájmu. Služby pronajímatel vyúčtuje v obvyklé lhůtě.',
      ],
    },
    {
      nadpis: 'Jistota a další ujednání',
      vysvetleni: 'Vrácení kauce a cokoli dalšího, na čem jste se dohodli.',
      odstavce: [
        {
          volba: 'jistota',
          uvodVzor: 'Jistota (zaškrtněte jednu možnost):',
          moznosti: {
            odevzdani: 'Pronajímatel vrátí nájemci jistotu s úroky do {{jistota_dni}} dnů od odevzdání bytu na účet č. {{ucet}}; započte si přitom, co mu nájemce z nájmu dluží.',
            vyuctovani: 'Pronajímatel vrátí nájemci jistotu s úroky po vyúčtování služeb za poslední období na účet č. {{ucet}}; započte si přitom, co mu nájemce z nájmu dluží.',
            zadna: 'Nájemce jistotu nesložil.',
          },
        },
        'Další ujednání: {{dalsi}}',
        'Dohoda je vyhotovena ve dvou stejnopisech, každá strana obdrží jeden. Nabývá účinnosti podpisem obou stran.',
      ],
    },
  ],
};
