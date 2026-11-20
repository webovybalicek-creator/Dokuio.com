/**
 * Zmluva o dielo – Slovensko. §§ 631–646 OZ: vykonanie diela za dohodnutú cenu, cena po vykonaní, preddavky
 * pri dlhšie trvajúcom diele, cena podľa rozpočtu len so súhlasom objednávateľa, podstatné prekročenie oznámiť
 * písomne, zodpovednosť za vady pri odovzdaní, pri stavbe záručná doba 3 roky (§ 646).
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum } from '../terminy';
import { OZ_SK, TIP_TOTOZNOST_SK } from './zdroje';

export const zmluvaODielo: Sablona = {
  kod: 'SK-ZMLUVA-O-DIELO',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Zmluva o dielo',
  podnadpis: 'podľa § 631 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'zmluva-o-dielo',
  paticka: 'Vytvorené zadarmo · šablóna SK-ZMLUVA-O-DIELO v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'objednávateľ', vpravo: 'zhotoviteľ' },
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },
  pripominky: (d) => [
    ...(naDatum(d.zahajeni) ? [{ nazev: 'Začatie prác', datum: String(d.zahajeni) }] : []),
    ...(naDatum(d.dokonceni) ? [{ nazev: 'Dokončenie a odovzdanie diela', datum: String(d.dokonceni), popis: 'Pri prevzatí spíšte preberací protokol so všetkými zistenými vadami.' }] : []),
  ],
  coDal: [
    'Vytlačte zmluvu dvakrát, obe strany podpíšu oba exempláre.',
    'Preddavok plaťte prevodom alebo oproti potvrdeniu o prevzatí peňazí.',
    'Zmeny rozsahu alebo ceny si dohodnite písomne.',
    'Pri prevzatí dielo skontrolujte a vady zapíšte do protokolu.',
  ],
  kontrola: [
    'Predmet diela opíšte čo najpresnejšie (rozsah, materiál, rozmery, prípadne ponuka ako príloha).',
    'Cena sa platí po vykonaní diela; pri dlhšie trvajúcom alebo nákladnom diele možno žiadať preddavky (§ 634 a nasl. OZ).',
    'Cenu určenú rozpočtom nemožno zvýšiť bez písomného súhlasu objednávateľa; podstatné prekročenie rozpočtu musí zhotoviteľ bez odkladu písomne oznámiť.',
    'Zhotoviteľ zodpovedá za vady, ktoré má dielo pri odovzdaní. Pri stavbe je záručná doba tri roky (§ 646 OZ).',
    'Občiansky zákonník bol zrušený zákonom č. 260/2026 Z. z. a nahradí ho nový – po jeho účinnosti si overte aktuálne znenie.',
    TIP_TOTOZNOST_SK,
  ],
  zdroje: [OZ_SK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Objednávateľ a zhotoviteľ',
      popis: 'Objednávateľ dielo objednáva a platí. Zhotoviteľ ho vykoná – remeselník, firma alebo aj súkromná osoba.',
      pole: [
        { id: 'o_jmeno', typ: 'text', popis: 'Objednávateľ – meno a priezvisko alebo firma', placeholder: 'napr. Ján Kováč', sirka: 34, autocomplete: 'name' },
        { id: 'o_id', typ: 'text', popis: 'Dátum narodenia alebo IČO objednávateľa', sirka: 14, polovina: true },
        { id: 'o_adresa', typ: 'text', popis: 'Adresa objednávateľa', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'z_jmeno', typ: 'text', popis: 'Zhotoviteľ – meno alebo firma', placeholder: 'napr. Stavby Horváth s.r.o.', sirka: 34 },
        { id: 'z_ico', typ: 'text', popis: 'IČO alebo dátum narodenia zhotoviteľa', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa alebo sídlo zhotoviteľa', placeholder: 'napr. Mlynská 5, 040 01 Košice', sirka: 46 },
      ],
    },
    {
      id: 'dielo',
      nazev: 'Dielo',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'Predmet diela', napoveda: 'Rozsah prác, materiál, rozmery. Môžete odkázať na ponuku.', placeholder: 'napr. výmena dlažby v kúpeľni (8 m²) vrátane demontáže starej dlažby a odvozu sutiny, podľa ponuky zo dňa 3. 11. 2026', sirka: 70 },
        { id: 'misto_dila', typ: 'text', popis: 'Miesto vykonania', sirka: 46 },
        {
          id: 'material',
          typ: 'volba',
          popis: 'Kto zabezpečí materiál',
          moznosti: [
            { hodnota: 'zhotovitel', popis: 'Zhotoviteľ (je v cene)' },
            { hodnota: 'objednatel', popis: 'Objednávateľ' },
          ],
        },
        { id: 'zahajeni', typ: 'datum', popis: 'Začatie prác', sirka: 14, polovina: true },
        { id: 'dokonceni', typ: 'datum', popis: 'Dokončenie a odovzdanie', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a platba',
      pole: [
        {
          id: 'typ_ceny',
          typ: 'volba',
          popis: 'Aká cena',
          moznosti: [
            { hodnota: 'pevna', popis: 'Pevná cena' },
            { hodnota: 'rozpocet', popis: 'Podľa rozpočtu' },
          ],
        },
        { id: 'cena', typ: 'castka', popis: 'Cena spolu (€)', placeholder: 'napr. 2000', sirka: 14, polovina: true },
        {
          id: 'zaloha_ano',
          typ: 'volba',
          popis: 'Preddavok',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez preddavku – všetko po odovzdaní' },
            { hodnota: 'ano', popis: 'Preddavok vopred, zvyšok po odovzdaní' },
          ],
        },
        { id: 'zaloha', typ: 'castka', popis: 'Výška preddavku (€)', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zaloha_ano', je: 'ano' } },
        { id: 'splatnost_dny', typ: 'cislo', popis: 'Splatnosť po odovzdaní (dni)', placeholder: 'napr. 7', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN zhotoviteľa (nepovinné)', sirka: 30 },
        { id: 'zaruka', typ: 'cislo', popis: 'Záruka (mesiace, nepovinné)', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'o_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum podpisu', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_slovy: (d) => sumaSlovom(d.cena) },

  clanky: [
    {
      nadpis: 'Zmluvné strany',
      odstavce: [
        '**Objednávateľ:** {{o_jmeno}}, dátum narodenia / IČO {{o_id}}, {{o_adresa}} (ďalej len „objednávateľ“)',
        '**Zhotoviteľ:** {{z_jmeno}}, IČO / dátum narodenia {{z_ico}}, {{z_adresa}} (ďalej len „zhotoviteľ“)',
      ],
    },
    {
      nadpis: 'Predmet zmluvy',
      vysvetleni: 'Zhotoviteľ vykoná dielo na vlastné nebezpečenstvo, objednávateľ ho prevezme a zaplatí.',
      odstavce: [
        'Zhotoviteľ sa zaväzuje vykonať pre objednávateľa toto dielo: {{predmet}}.',
        'Miesto vykonania diela: {{misto_dila}}.',
        {
          volba: 'material',
          uvodVzor: 'Materiál (zaškrtnite jednu možnosť):',
          moznosti: {
            zhotovitel: 'Materiál potrebný na vykonanie diela zabezpečí zhotoviteľ; jeho cena je zahrnutá v cene diela.',
            objednatel: 'Materiál potrebný na vykonanie diela zabezpečí objednávateľ. Zhotoviteľ ho pred použitím skontroluje a na nevhodný materiál objednávateľa bez odkladu upozorní.',
          },
        },
        'Objednávateľ sa zaväzuje dielo prevziať a zaplatiť dohodnutú cenu. Zhotoviteľ vykoná dielo riadne a včas, na vlastné nebezpečenstvo.',
      ],
    },
    {
      nadpis: 'Čas plnenia',
      odstavce: [
        'Zhotoviteľ začne práce dňa {{zahajeni}} a dielo dokončí a odovzdá najneskôr dňa {{dokonceni}}.',
        'Objednávateľ zabezpečí zhotoviteľovi prístup na miesto vykonania diela v obvyklom pracovnom čase.',
      ],
    },
    {
      nadpis: 'Cena a platba',
      odstavce: [
        {
          volba: 'typ_ceny',
          uvodVzor: 'Cena (zaškrtnite jednu možnosť):',
          moznosti: {
            pevna: 'Cena diela je dohodnutá ako pevná vo výške {{cena}} (slovom: {{cena_slovy}}). Zhotoviteľ nemá právo požadovať jej zvýšenie.',
            rozpocet: 'Cena diela je určená rozpočtom vo výške {{cena}} (slovom: {{cena_slovy}}). Bez písomného súhlasu objednávateľa ju nemožno zvýšiť. Ak sa ukáže, že rozpočet bude podstatne prekročený, zhotoviteľ to objednávateľovi bez odkladu písomne oznámi.',
          },
        },
        {
          volba: 'zaloha_ano',
          uvodVzor: 'Preddavok (zaškrtnite jednu možnosť):',
          moznosti: {
            ne: 'Cena je splatná po vykonaní a odovzdaní diela.',
            ano: 'Objednávateľ zaplatí preddavok vo výške {{zaloha}} pri podpise tejto zmluvy. Zvyšok ceny je splatný po vykonaní a odovzdaní diela.',
          },
        },
        'Cena je splatná do {{splatnost_dny}} dní od odovzdania diela, prevodom na účet IBAN {{ucet}} alebo v hotovosti oproti potvrdeniu.',
        'Práce nad rámec tejto zmluvy vykoná zhotoviteľ len po písomnej dohode o ich rozsahu a cene.',
      ],
    },
    {
      nadpis: 'Odovzdanie diela a vady',
      odstavce: [
        'O odovzdaní diela spíšu strany preberací protokol, v ktorom uvedú zistené vady a lehotu na ich odstránenie.',
        'Zhotoviteľ zodpovedá za vady, ktoré má dielo pri odovzdaní. Objednávateľ vady oznámi zhotoviteľovi bez zbytočného odkladu po ich zistení.',
        'Zhotoviteľ poskytuje na dielo záruku {{zaruka}} mesiacov od prevzatia. (Nevyplnené = platia zákonné ustanovenia o zodpovednosti za vady.)',
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      odstavce: [
        'Zmeny tejto zmluvy možno robiť len písomne. Ostatné práva a povinnosti sa riadia Občianskym zákonníkom, najmä § 631 a nasl.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, každá strana dostane jeden.',
      ],
    },
  ],
};
