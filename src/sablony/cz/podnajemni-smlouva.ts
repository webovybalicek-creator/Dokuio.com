/**
 * Podnájemní smlouva (podnájem bytu nebo jeho části) – Česko. § 2215, § 2216 a § 2274–2278 OZ.
 * Podnájem je odvozený od nájmu: končí s ním (§ 2276), celý byt jen s písemným souhlasem pronajímatele (§ 2275).
 * Pozor na stanovisko MMR a MSp z ledna 2026: firma, která byt „podnajímá“ koncovému uživateli, uzavírá ve skutečnosti nájem.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, OCHRANCE_NAJEM, TIP_TOTOZNOST } from './zdroje';

export const podnajemniSmlouva: Sablona = {
  kod: 'CZ-PODNAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Smlouva o podnájmu bytu',
  podnadpis: 'uzavřená podle § 2215 a § 2274 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'podnajemni-smlouva',
  paticka: 'Vytvořeno zdarma · šablona CZ-PODNAJEM v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'nájemce', vpravo: 'podnájemce' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.',
    'Je-li potřeba souhlas pronajímatele, přiložte jeho kopii ke smlouvě.',
    'Při předání sepište předávací protokol (stav, klíče, měřiče).',
    'Nájemce: příjem z podnájmu je zdanitelný příjem – myslete na daňové přiznání.',
  ],
  kontrola: [
    'Podnájemce: nechte si ukázat nájemní smlouvu nájemce a ověřte, že je opravdu nájemcem (a do kdy).',
    'Celý byt, nebo část bytu, když nájemce sám v bytě nebydlí, jde podnajmout jen s písemným souhlasem pronajímatele – nechte si ho ukázat a přiložte kopii.',
    'Podnájem končí spolu s nájmem. Pokud nájem nájemce skončí, skončí i váš podnájem – bez náhradního bydlení.',
    'Podnajímá vám byt firma, která sama v bytě nebydlí a podniká v pronájmu? Podle stanoviska MMR a Ministerstva spravedlnosti z ledna 2026 jde pak o nájem se vší ochranou nájemce.',
    TIP_TOTOZNOST,
    'Kauci a podnájemné platte převodem nebo proti písemnému potvrzení.',
  ],
  zdroje: [OZ, OCHRANCE_NAJEM, { nazev: 'MMR – stanovisko k praxi „podnájmů“ (leden 2026)', url: 'https://mmr.gov.cz/getmedia/a4dcd67b-9daf-43f5-a48d-ec536f3479d5/stanovisko-podnajmy_MSp.pdf.aspx?ext=.pdf' }],

  kroky: [
    {
      id: 'strany',
      nazev: 'Nájemce a podnájemce',
      popis: 'Nájemce má byt v nájmu od vlastníka a část nebo celý ho přenechává podnájemci.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Nájemce – jméno a příjmení', napoveda: 'Ten, kdo má byt v nájmu a dává ho do podnájmu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození nájemce', napoveda: 'Rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa nájemce', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Masarykova 1025/5, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Podnájemce – jméno a příjmení', napoveda: 'Kdo bude v bytě nebo pokoji bydlet.', placeholder: 'např. Tomáš Dvořák', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození podnájemce', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Dosavadní adresa podnájemce', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Palackého 3, 370 01 České Budějovice', sirka: 46 },
      ],
    },
    {
      id: 'predmet',
      nazev: 'Co se podnajímá',
      pole: [
        { id: 'byt', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Podle nájemní smlouvy nájemce.', placeholder: 'např. Masarykova 1025/5, Říčany, byt č. 12', sirka: 46 },
        { id: 'pronajimatel', typ: 'text', popis: 'Vlastník (pronajímatel) bytu', napoveda: 'Od koho má nájemce byt v nájmu.', placeholder: 'např. Marie Černá', sirka: 34 },
        { id: 'najem_datum', typ: 'datum', popis: 'Datum nájemní smlouvy nájemce', napoveda: 'Smlouva mezi vlastníkem a nájemcem.', sirka: 14, polovina: true },
        {
          id: 'rozsah',
          typ: 'volba',
          popis: 'Rozsah podnájmu',
          napoveda: 'Pokud nájemce v bytě sám trvale bydlí, smí podnajmout část bytu bez souhlasu pronajímatele. Jinak je souhlas nutný.',
          moznosti: [
            { hodnota: 'cast', popis: 'Část bytu (pokoj), nájemce v bytě bydlí' },
            { hodnota: 'cely', popis: 'Celý byt' },
          ],
        },
        { id: 'cast_popis', typ: 'text', popis: 'Která část bytu', napoveda: 'Pokoj a společné prostory, které smí podnájemce užívat.', placeholder: 'např. pokoj 14 m² s balkonem, společné užívání kuchyně a koupelny', sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
        {
          id: 'souhlas',
          typ: 'volba',
          popis: 'Souhlas pronajímatele',
          napoveda: 'Souhlas musí být písemný. Kopii přiložte ke smlouvě.',
          moznosti: [
            { hodnota: 'ano', popis: 'Pronajímatel dal písemný souhlas' },
            { hodnota: 'neni_treba', popis: 'Není potřeba (část bytu, nájemce v bytě bydlí)' },
          ],
        },
      ],
    },
    {
      id: 'podminky',
      nazev: 'Doba a platby',
      pole: [
        { id: 'od', typ: 'datum', popis: 'Podnájem od', napoveda: 'Od kdy smí podnájemce byt užívat.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Podnájem do', napoveda: 'Podnájem skončí nejpozději spolu s nájmem nájemce.', sirka: 14, polovina: true },
        { id: 'podnajemne', typ: 'castka', popis: 'Měsíční podnájemné (Kč)', napoveda: 'Včetně podílu na službách, nebo bez nich – upřesněte níže.', placeholder: 'např. 9000', sirka: 12, polovina: true },
        { id: 'sluzby', typ: 'text', popis: 'Služby a energie', napoveda: 'Co podnájemné zahrnuje (voda, teplo, elektřina, internet) nebo jak se dělí.', placeholder: 'např. podnájemné zahrnuje všechny služby, energie a internet', sirka: 56 },
        { id: 'splatnost', typ: 'cislo', popis: 'Splatnost (den v měsíci)', napoveda: 'Do kterého dne v měsíci se platí.', placeholder: 'např. 5', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Účet nájemce', napoveda: 'Kam se platí.', placeholder: '123456789/0100', sirka: 24, polovina: true },
        { id: 'kauce', typ: 'castka', popis: 'Kauce (Kč, nepovinné)', napoveda: 'Vrací se po skončení podnájmu sníženě o případné dluhy.', placeholder: 'např. 9000', sirka: 12, polovina: true },
        { id: 'vypovedni', typ: 'cislo', popis: 'Výpovědní doba (měsíce)', napoveda: 'Pro obě strany stejná. Obvykle 1–3 měsíce.', placeholder: 'např. 1', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy nájemce.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    podnajemne_slovy: (d) => castkaSlovy(d.podnajemne),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Nájemce přenechává byt nebo jeho část podnájemci. S vlastníkem bytu podnájemce smlouvu nemá.',
      odstavce: [
        '**Nájemce:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „nájemce“)',
        '**Podnájemce:** {{k_jmeno}}, datum narození {{k_narozeni}}, dosud bytem {{k_adresa}} (dále jen „podnájemce“)',
      ],
    },
    {
      nadpis: 'Předmět podnájmu',
      vysvetleni: 'Co se podnajímá a z jakého práva. Bez platného nájmu nemůže být podnájem.',
      odstavce: [
        'Nájemce prohlašuje, že je nájemcem bytu {{byt}} na základě nájemní smlouvy uzavřené dne {{najem_datum}} s pronajímatelem {{pronajimatel}}.',
        {
          volba: 'rozsah',
          uvodVzor: 'Rozsah (zaškrtněte jednu možnost):',
          moznosti: {
            cast: 'Nájemce, který v bytě sám trvale bydlí, přenechává podnájemci k užívání tuto část bytu: {{cast_popis}}.',
            cely: 'Nájemce přenechává podnájemci k užívání celý byt.',
          },
        },
        {
          volba: 'souhlas',
          uvodVzor: 'Souhlas pronajímatele (zaškrtněte jednu možnost):',
          moznosti: {
            ano: 'Pronajímatel udělil s podnájmem písemný souhlas; jeho kopie je přílohou této smlouvy.',
            neni_treba: 'Souhlas pronajímatele se podle § 2274 občanského zákoníku nevyžaduje; nájemce oznámí pronajímateli zvýšení počtu osob v bytě.',
          },
        },
      ],
    },
    {
      nadpis: 'Doba podnájmu',
      vysvetleni: 'Na jak dlouho. Podnájem nikdy nepřetrvá nájem.',
      odstavce: [
        'Podnájem se sjednává na dobu od {{od}} do {{do}}.',
        'Podnájem končí nejpozději spolu s nájmem nájemce. Končí-li nájem, nájemce to podnájemci bez zbytečného odkladu sdělí s uvedením dne skončení nájmu.',
        'Každá strana může podnájem vypovědět i bez udání důvodu s výpovědní dobou {{vypovedni}} měsíců, která začíná prvním dnem měsíce po doručení výpovědi.',
      ],
    },
    {
      nadpis: 'Podnájemné a kauce',
      vysvetleni: 'Kolik a kdy se platí.',
      odstavce: [
        'Podnájemce platí podnájemné ve výši {{podnajemne}} (slovy: {{podnajemne_slovy}}) měsíčně, vždy do {{splatnost}}. dne měsíce na účet nájemce č. {{ucet}}.',
        'Služby a energie: {{sluzby}}',
        'Podnájemce složí kauci ve výši {{kauce}}. Nájemce ji vrátí do jednoho měsíce od skončení podnájmu a odevzdání bytu; započte si přitom, co mu podnájemce dluží.',
      ],
    },
    {
      nadpis: 'Práva, povinnosti a závěr',
      vysvetleni: 'Pravidla soužití a formální body.',
      odstavce: [
        'Podnájemce užívá byt řádně, dodržuje pravidla domu a bez souhlasu nájemce nedává byt dalším osobám ani v něm neprovádí změny.',
        'Při skončení podnájmu podnájemce odevzdá byt nebo jeho část včetně klíčů ve stavu, v jakém je převzal, s přihlédnutím k obvyklému opotřebení.',
        'Práva a povinnosti neupravené touto smlouvou se řídí občanským zákoníkem. Smlouva je vyhotovena ve dvou stejnopisech a nabývá účinnosti podpisem obou stran.',
      ],
    },
  ],
};
