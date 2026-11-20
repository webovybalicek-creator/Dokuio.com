/**
 * Smlouva o dílo – Česko. § 2586 a násl. OZ: provedení a předání díla (§ 2604–2605), cena splatná po provedení,
 * přiměřená část u díla po částech (§ 2610–2611), pevná cena / rozpočet a překročení o víc než 10 % (§ 2620–2622),
 * vytknutí vad bez zbytečného odkladu, nejpozději do 2 let od převzetí (§ 2615–2619).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, TIP_TOTOZNOST } from './zdroje';
import { naDatum } from '../terminy';

export const smlouvaODilo: Sablona = {
  kod: 'CZ-SMLOUVA-O-DILO',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Smlouva o dílo',
  podnadpis: 'podle § 2586 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'smlouva-o-dilo',
  paticka: 'Vytvořeno zdarma · šablona CZ-SMLOUVA-O-DILO v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'objednatel', vpravo: 'zhotovitel' },
  pripominky: (d) => [
    ...(naDatum(d.zahajeni) ? [{ nazev: 'Zahájení díla', datum: String(d.zahajeni) }] : []),
    ...(naDatum(d.dokonceni) ? [{ nazev: 'Termín dokončení a předání díla', datum: String(d.dokonceni), popis: 'Při převzetí sepište předávací protokol a vypište všechny viditelné vady.' }] : []),
  ],
  coDal: [
    'Vytiskněte smlouvu dvakrát, každá strana podepíše oba výtisky a jeden si nechá.',
    'Zálohu plaťte převodem nebo proti potvrzení o převzetí peněz.',
    'Změny rozsahu nebo ceny během prací si dohodněte písemně (stačí e-mail nebo dodatek).',
    'Při převzetí dílo prohlédněte a viditelné vady zapište do předávacího protokolu – později se to dokazuje hůř.',
  ],
  kontrola: [
    'Předmět díla popište co nejpřesněji (rozsah, materiál, rozměry, případně odkaz na nabídku nebo výkres a přiložte ji).',
    'Pevná cena se nemění. U ceny podle rozpočtu může zhotovitel žádat navýšení jen kvůli nepředvídatelným okolnostem; když navýšení přesáhne 10 %, může objednatel od smlouvy odstoupit (§ 2620–2622 OZ).',
    'Cena se platí po provedení díla; u díla prováděného po částech lze zálohovat přiměřenou část (§ 2610–2611 OZ).',
    'Při převzetí dílo prohlédněte. Vady vytkněte bez zbytečného odkladu, nejpozději do 2 let od převzetí (§ 2618 OZ). U staveb platí zvláštní pravidla – poraďte se s odborníkem.',
    'Zhotovitele-podnikatele si ověřte v obchodním nebo živnostenském rejstříku (IČO načtete z ARES).',
    TIP_TOTOZNOST,
  ],
  zdroje: [OZ],

  kroky: [
    {
      id: 'strany',
      nazev: 'Objednatel a zhotovitel',
      popis: 'Objednatel dílo objednává a platí. Zhotovitel ho provede – řemeslník, firma nebo i soukromá osoba.',
      pole: [
        { id: 'o_jmeno', typ: 'text', popis: 'Objednatel – jméno a příjmení nebo firma', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'o_id', typ: 'text', popis: 'Datum narození nebo IČO objednatele', placeholder: 'např. 1. 5. 1985', sirka: 14, polovina: true },
        { id: 'o_adresa', typ: 'text', popis: 'Adresa objednatele', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'z_ico', typ: 'text', popis: 'IČO zhotovitele', napoveda: 'U podnikatele načteme název a sídlo z ARES. Soukromá osoba uvede datum narození.', placeholder: 'např. 12345678', sirka: 14, polovina: true, ares: { nazev: 'z_jmeno', adresa: 'z_adresa' } },
        { id: 'z_jmeno', typ: 'text', popis: 'Zhotovitel – jméno nebo firma', placeholder: 'např. Stavby Dvořák s.r.o.', sirka: 34 },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa nebo sídlo zhotovitele', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'dilo',
      nazev: 'Dílo',
      popis: 'Co přesně se má udělat, kde a kdy.',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'Předmět díla', napoveda: 'Rozsah prací, materiál, rozměry. Můžete odkázat na nabídku a přiložit ji.', placeholder: 'např. výměna dlažby v koupelně (8 m²) včetně demontáže staré dlažby a odvozu suti, podle nabídky ze dne 3. 11. 2026', sirka: 70 },
        { id: 'misto_dila', typ: 'text', popis: 'Místo provedení', placeholder: 'např. byt č. 12, Nerudova 12, Říčany', sirka: 46 },
        {
          id: 'material',
          typ: 'volba',
          popis: 'Kdo zajistí materiál',
          moznosti: [
            { hodnota: 'zhotovitel', popis: 'Zhotovitel (je v ceně)' },
            { hodnota: 'objednatel', popis: 'Objednatel' },
          ],
        },
        { id: 'zahajeni', typ: 'datum', popis: 'Zahájení prací', sirka: 14, polovina: true },
        { id: 'dokonceni', typ: 'datum', popis: 'Dokončení a předání', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a platba',
      pole: [
        {
          id: 'typ_ceny',
          typ: 'volba',
          popis: 'Jaká cena',
          napoveda: 'Pevná cena je pro objednatele jistější. Cena podle rozpočtu se může zvýšit jen z nepředvídatelných důvodů.',
          moznosti: [
            { hodnota: 'pevna', popis: 'Pevná cena (nemění se)' },
            { hodnota: 'rozpocet', popis: 'Podle rozpočtu (orientační)' },
          ],
        },
        { id: 'cena', typ: 'castka', popis: 'Cena celkem (Kč)', napoveda: 'Včetně DPH, pokud ji zhotovitel účtuje.', placeholder: 'např. 48000', sirka: 14, polovina: true },
        {
          id: 'zaloha_ano',
          typ: 'volba',
          popis: 'Záloha',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez zálohy – vše po předání' },
            { hodnota: 'ano', popis: 'Záloha předem, zbytek po předání' },
          ],
        },
        { id: 'zaloha', typ: 'castka', popis: 'Výše zálohy (Kč)', napoveda: 'Typicky na materiál.', placeholder: 'např. 15000', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zaloha_ano', je: 'ano' } },
        { id: 'splatnost_dny', typ: 'cislo', popis: 'Splatnost po předání (dny)', placeholder: 'např. 7', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Účet zhotovitele (nepovinné)', placeholder: '123456789/0100', sirka: 24, polovina: true },
        { id: 'zaruka', typ: 'cislo', popis: 'Záruka za jakost (měsíce, nepovinné)', napoveda: 'Nad rámec zákona. Nechte prázdné, když se nesjednává.', placeholder: 'např. 24', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'o_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    cena_slovy: (d) => castkaSlovy(d.cena),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo dílo objednává a kdo ho provede.',
      odstavce: [
        '**Objednatel:** {{o_jmeno}}, datum narození / IČO {{o_id}}, {{o_adresa}} (dále jen „objednatel“)',
        '**Zhotovitel:** {{z_jmeno}}, IČO / datum narození {{z_ico}}, {{z_adresa}} (dále jen „zhotovitel“)',
      ],
    },
    {
      nadpis: 'Předmět smlouvy',
      vysvetleni: 'Zhotovitel provede dílo na svůj náklad a nebezpečí, objednatel ho převezme a zaplatí.',
      odstavce: [
        'Zhotovitel se zavazuje provést pro objednatele toto dílo: {{predmet}}.',
        'Místo provedení díla: {{misto_dila}}.',
        {
          volba: 'material',
          uvodVzor: 'Materiál (zaškrtněte jednu možnost):',
          moznosti: {
            zhotovitel: 'Materiál potřebný k provedení díla zajistí zhotovitel; jeho cena je zahrnuta v ceně díla.',
            objednatel: 'Materiál potřebný k provedení díla zajistí objednatel. Zhotovitel ho před použitím zkontroluje a na nevhodný materiál objednatele bez zbytečného odkladu upozorní.',
          },
        },
        'Objednatel se zavazuje dílo převzít a zaplatit cenu podle této smlouvy. Zhotovitel provede dílo s potřebnou péčí, na svůj náklad a na své nebezpečí.',
      ],
    },
    {
      nadpis: 'Doba provedení',
      vysvetleni: 'Kdy se začne a kdy má být hotovo.',
      odstavce: [
        'Zhotovitel zahájí práce dne {{zahajeni}} a dílo dokončí a předá objednateli nejpozději dne {{dokonceni}}.',
        'Objednatel zajistí zhotoviteli přístup na místo provedení díla v obvyklé pracovní době.',
      ],
    },
    {
      nadpis: 'Cena a platba',
      vysvetleni: 'Kolik dílo stojí a kdy se platí.',
      odstavce: [
        {
          volba: 'typ_ceny',
          uvodVzor: 'Cena (zaškrtněte jednu možnost):',
          moznosti: {
            pevna: 'Cena díla je sjednána jako pevná ve výši {{cena}} (slovy: {{cena_slovy}}). Zhotovitel nemá právo požadovat její zvýšení.',
            rozpocet: 'Cena díla je sjednána podle rozpočtu ve výši {{cena}} (slovy: {{cena_slovy}}). Rozpočet není závazný; zvýšení ceny je možné jen podle § 2622 občanského zákoníku. Překročí-li zvýšení rozpočet o více než 10 %, může objednatel od smlouvy odstoupit.',
          },
        },
        {
          volba: 'zaloha_ano',
          uvodVzor: 'Záloha (zaškrtněte jednu možnost):',
          moznosti: {
            ne: 'Cena je splatná po provedení a předání díla.',
            ano: 'Objednatel zaplatí zálohu ve výši {{zaloha}} při podpisu této smlouvy. Zbytek ceny je splatný po provedení a předání díla.',
          },
        },
        'Cena je splatná do {{splatnost_dny}} dnů od předání díla, převodem na účet zhotovitele č. {{ucet}} nebo v hotovosti proti potvrzení.',
        'Práce nad rámec této smlouvy provede zhotovitel jen po písemné dohodě o jejich rozsahu a ceně.',
      ],
    },
    {
      nadpis: 'Předání díla a vady',
      vysvetleni: 'Při převzetí se dílo prohlédne. Vady je třeba vytknout včas.',
      odstavce: [
        'Dílo je dokončené, je-li předvedena jeho způsobilost sloužit svému účelu. O předání sepíší strany předávací protokol, ve kterém uvedou zjištěné vady a termín jejich odstranění.',
        'Objednatel může dílo převzít i s drobnými vadami, které nebrání jeho užívání; tyto vady zhotovitel odstraní bez zbytečného odkladu.',
        'Objednatel vytkne vady díla bez zbytečného odkladu poté, co je zjistil, nejpozději do dvou let od převzetí díla.',
        'Zhotovitel poskytuje na dílo záruku za jakost v délce {{zaruka}} měsíců od převzetí. (Nevyplněno = záruka se nesjednává, platí zákonná práva z vad.)',
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      odstavce: [
        'Změny této smlouvy lze dělat jen písemně. Ostatní práva a povinnosti se řídí občanským zákoníkem, zejména § 2586 a násl.',
        'Smlouva je sepsána ve dvou vyhotoveních, každá strana obdrží jedno.',
      ],
    },
  ],
};
