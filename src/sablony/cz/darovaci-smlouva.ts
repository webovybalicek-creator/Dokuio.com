/**
 * Darovací smlouva – Česko, movitá věc nebo peníze mezi soukromými osobami.
 * Podle § 2055 a násl. zákona č. 89/2012 Sb. (občanský zákoník). Písemná forma je nutná,
 * pokud se dar neodevzdává zároveň s uzavřením smlouvy (§ 2057 odst. 2). Nemovitosti záměrně ne.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';

export const darovaciSmlouva: Sablona = {
  kod: 'CZ-DAROVACI',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Darovací smlouva',
  podnadpis: 'uzavřená podle § 2055 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'darovaci-smlouva',
  paticka: 'Vytvořeno zdarma · šablona CZ-DAROVACI v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'dárce', vpravo: 'obdarovaný' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, dárce i obdarovaný podepíší oba výtisky.',
    'Předejte dar – hotovost nebo věc ideálně hned při podpisu, převod z účtu do sjednaného data.',
    'Smlouvu si obdarovaný uschová. Prokazuje, odkud peníze nebo věc má (banka, finanční úřad, dědictví).',
    'Dar nad 5 milionů Kč, i když je od daně osvobozený, je potřeba oznámit finančnímu úřadu.',
  ],

  overeno: '2026-11-19',
  kontrola: [
      "Dárce je skutečný vlastník daru (u auta zapsaný v osvědčení o registraci).",
      "Peníze převodem: v poznámce platby uveďte „dar podle darovací smlouvy ze dne …“.",
      "Dar od osoby, která není blízký příbuzný, je osvobozený od daně jen do 50 000 Kč za rok – nad limit se daní.",
      "Osvobozený dar nad 5 milionů Kč je potřeba oznámit finančnímu úřadu (i mezi příbuznými).",
      "U nezletilého obdarovaného podepisuje rodič; u velkých darů může být potřeba souhlas soudu.",
      "Darujete auto? Po darování podejte přepis v registru vozidel do 10 pracovních dnů."
  ],
  zdroje: [
      {
          "nazev": "Občanský zákoník č. 89/2012 Sb. (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2012/89"
      },
      {
          "nazev": "Zákon č. 586/1992 Sb., o daních z příjmů (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/1992/586"
      }
  ],

  kroky: [
    {
      id: 'strany',
      nazev: 'Dárce a obdarovaný',
      popis: 'Dárce dar dává, obdarovaný ho přijímá. Údaje opište z občanských průkazů.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Dárce – jméno a příjmení', napoveda: 'Kdo dar dává. Celé jméno jako v občanském průkazu.', placeholder: 'např. Marie Nováková', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození dárce', napoveda: 'Stačí datum narození, rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dárce', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Obdarovaný – jméno a příjmení', napoveda: 'Kdo dar dostává. Je-li obdarovaný nezletilý, podepisuje za něj rodič jako zákonný zástupce.', placeholder: 'např. Tomáš Novák', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození obdarovaného', napoveda: 'Podle občanského průkazu nebo rodného listu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa obdarovaného', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
        { id: 'vztah', typ: 'text', popis: 'Vztah obdarovaného k dárci (nepovinné)', napoveda: 'Např. syn, vnučka, sestra, manžel. Dary mezi blízkými příbuznými jsou od daně z příjmů osvobozené – zápis ve smlouvě to usnadní doložit.', placeholder: 'např. syn', sirka: 16, polovina: true },
      ],
    },
    {
      id: 'dar',
      nazev: 'Co se daruje',
      popis: 'Peníze nebo movitá věc (šperk, nábytek, elektronika, auto). Na nemovitosti tento vzor není.',
      pole: [
        {
          id: 'predmet',
          typ: 'volba',
          popis: 'Předmět daru',
          napoveda: 'Podle volby se ve smlouvě objeví správný text.',
          moznosti: [
            { hodnota: 'penize', popis: 'Peníze' },
            { hodnota: 'vec', popis: 'Věc' },
          ],
        },
        { id: 'castka', typ: 'castka', popis: 'Darovaná částka (Kč)', napoveda: 'Částku slovy doplníme do smlouvy sami.', placeholder: 'např. 200000', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
        { id: 'vec_popis', typ: 'textarea', popis: 'Popis věci', napoveda: 'Tak, aby se věc nedala zaměnit: značka, typ, výrobní číslo, barva. U auta uveďte VIN a SPZ.', placeholder: 'např. zlatý prsten s briliantem, značka …; nebo osobní automobil Škoda Fabia, VIN …, SPZ …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        { id: 'vec_hodnota', typ: 'castka', popis: 'Přibližná hodnota věci (Kč, nepovinné)', napoveda: 'Odhad obvyklé ceny. Hodí se pro daňové účely a případné dědické řízení.', placeholder: 'např. 30000', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
        {
          id: 'vady',
          typ: 'volba',
          popis: 'Vady věci',
          napoveda: 'Dárce má obdarovaného upozornit na vady, o kterých ví. Pokud o žádných neví, zvolte první možnost.',
          moznosti: [
            { hodnota: 'bez', popis: 'Dárci nejsou známy žádné vady' },
            { hodnota: 's', popis: 'Věc má vady, o kterých dárce ví' },
          ],
          zobrazitKdyz: { pole: 'predmet', je: 'vec' },
        },
        { id: 'vady_popis', typ: 'textarea', popis: 'Popis vad', placeholder: 'např. poškrábaný displej', sirka: 64, zobrazitKdyz: { pole: 'vady', je: 's' } },
      ],
    },
    {
      id: 'predani',
      nazev: 'Předání daru',
      pole: [
        {
          id: 'predani',
          typ: 'volba',
          popis: 'Kdy a jak se dar předá',
          napoveda: 'Nejjistější je předat dar hned při podpisu. U převodu z účtu nebo pozdějšího předání musí být smlouva písemná – proto je dobře, že ji máte.',
          moznosti: [
            { hodnota: 'hned', popis: 'Hned při podpisu smlouvy' },
            { hodnota: 'prevod', popis: 'Převodem na účet obdarovaného (jen peníze)' },
            { hodnota: 'pozdeji', popis: 'Později, do určitého data' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu obdarovaného', napoveda: 'Účet, na který dárce peníze pošle.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'predani', je: 'prevod' } },
        { id: 'predani_do', typ: 'datum', popis: 'Předat nejpozději do', napoveda: 'Poslední den, kdy má dárce dar předat nebo peníze odeslat.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predani', je: ['prevod', 'pozdeji'] } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy dárce, klidně přepište.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek. Pokud chcete datum dopsat rukou, pole vymažte.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => castkaSlovy(d.castka),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo dar dává a kdo ho dostává. Příbuzenský vztah pomůže doložit, že dar není zdaněný.',
      odstavce: [
        '**Dárce:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „dárce“)',
        '**Obdarovaný:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „obdarovaný“)',
        'Obdarovaný je ve vztahu k dárci: {{vztah}}.',
      ],
    },
    {
      nadpis: 'Předmět daru',
      vysvetleni: 'Co přesně se daruje. U peněz částka, u věci popis, podle kterého ji nikdo nezamění.',
      odstavce: [
        {
          volba: 'predmet',
          uvodVzor: 'Předmět daru (zaškrtněte jednu možnost):',
          moznosti: {
            penize: 'Dárce touto smlouvou bezplatně daruje obdarovanému peněžní částku {{castka}} (slovy: {{castka_slovy}}).',
            vec: 'Dárce touto smlouvou bezplatně daruje obdarovanému tuto věc: {{vec_popis}}. Přibližná hodnota věci činí {{vec_hodnota}}.',
          },
        },
        'Dárce prohlašuje, že je výlučným vlastníkem daru a že na daru nevázne žádné právo třetí osoby.',
        {
          volba: 'vady',
          kdyz: { pole: 'predmet', je: 'vec' },
          uvodVzor: 'Jde-li o věc – vady (zaškrtněte jednu možnost):',
          moznosti: {
            bez: 'Dárci nejsou známy žádné vady darované věci.',
            s: 'Dárce upozornil obdarovaného na tyto vady darované věci: {{vady_popis}}',
          },
        },
        'Obdarovaný dar přijímá.',
      ],
    },
    {
      nadpis: 'Předání daru',
      vysvetleni: 'Kdy obdarovaný dar skutečně dostane. Vlastníkem se stává jeho převzetím.',
      odstavce: [
        {
          volba: 'predani',
          uvodVzor: 'Předání daru (zaškrtněte jednu možnost):',
          moznosti: {
            hned: 'Dárce předal dar obdarovanému při podpisu této smlouvy a obdarovaný svým podpisem potvrzuje jeho převzetí.',
            prevod: 'Dárce převede darovanou částku na účet obdarovaného č. {{ucet}} nejpozději do {{predani_do}}.',
            pozdeji: 'Dárce předá dar obdarovanému nejpozději do {{predani_do}}.',
          },
        },
        'Vlastnické právo k daru přechází na obdarovaného jeho převzetím, u peněz převodem připsáním částky na účet obdarovaného.',
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      vysvetleni: 'Běžné formální body. Zákon dárci výjimečně dovoluje dar odvolat (nouze, hrubý nevděk) – to smlouvou nejde vyloučit.',
      odstavce: [
        'Práva a povinnosti smluvních stran neupravené touto smlouvou se řídí zákonem č. 89/2012 Sb., občanský zákoník, zejména § 2055 a násl.',
        'Smlouva je vyhotovena ve dvou stejnopisech, z nichž každá smluvní strana obdrží jeden.',
        'Smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.',
        'Smluvní strany prohlašují, že smlouvu uzavírají svobodně a vážně, přečetly ji a na důkaz souhlasu ji podepisují.',
      ],
    },
  ],
};
