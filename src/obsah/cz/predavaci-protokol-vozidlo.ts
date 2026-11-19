import type { StrankaDokumentu } from '../typy';
import { predavaciProtokolVozidlo as sablona } from '../../sablony/cz/predavaci-protokol-vozidlo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Předávací protokol k vozidlu",
  nazevA: "předávací protokol k vozidlu",
  katalog: {
    popis: "Stav vozu, klíče a doklady při předání.",
    kategorie: "auto",
    ilustrace: "protokol",
    slova: ["auto","předání auta","protokol","předávací","převzetí vozidla"],
  },
  souvisejici: 'auto',
  landing: {
    title: "Předávací protokol k autu {rok} – vzor PDF zdarma",
    description: "Předávací protokol k vozidlu zdarma: stav tachometru a paliva, poškození, klíče, doklady a výbava. Vyplňte online nebo stáhněte vzor v PDF i Wordu.",
    perex: "Zapište stav auta v okamžiku předání: kilometry, palivo, poškození, klíče a výbavu. Ke kupní smlouvě i k zapůjčení auta.",
    obsahPopis: "Pět krátkých částí. Přesně to, na co se při sporu ptá pojišťovna nebo soud.",
    obsah: [
      { nazev: 'Strany', popis: 'Kdo auto předává a kdo ho přebírá – jméno, datum narození, adresa.' },
      { nazev: 'Předávané vozidlo', popis: 'Značka a typ, VIN, SPZ a důvod předání s odkazem na kupní smlouvu.' },
      { nazev: 'Stav při předání', popis: 'Stav tachometru, množství paliva a popis poškození.' },
      { nazev: 'Klíče, doklady a výbava', popis: 'Počet klíčů, předané doklady, povinná výbava a další věci.' },
      { nazev: 'Převzetí', popis: 'Datum a čas předání, poznámky a podpisy obou stran.' },
    ],
    kroky: [
      { nazev: 'Odpovězte na otázky', popis: 'Máte už kupní smlouvu na auto? Průvodce z ní převezme jména i údaje o voze.' },
      { nazev: 'Projděte auto spolu', popis: 'Zapište kilometry, palivo a každé poškození. Co nevíte, zůstane jako linka k doplnění rukou.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma. Podepsat můžete i rovnou na obrazovce.' },
    ],
    online: [
      'Údaje převezmeme z kupní smlouvy',
      'Zaškrtávací seznam výbavy a dokladů',
      'Podpis prstem nebo myší rovnou v průvodci',
      'Stažení v PDF i ve Wordu',
    ],
    hodiSe: [
      'předáváte prodané auto kupujícímu',
      'půjčujete auto známému nebo ho přebíráte zpět',
      'chcete mít písemně, v jakém stavu auto bylo a kdy se předalo',
    ],
    nehodiSe: [
      'jde o prodej samotný – k tomu je kupní smlouva (protokol ji jen doplňuje)',
      'auto vracíte půjčovně nebo leasingové firmě (mají vlastní protokol)',
      'předáváte služební auto zaměstnanci (řeší interní předpisy firmy)',
    ],
    poNadpis: "Při předání.",
    po: [
      { nazev: 'Projděte auto společně', popis: 'Obejděte vůz, zkontrolujte skla, kola i interiér a vše zapište.' },
      { nazev: 'Vyfoťte, co je důležité', popis: 'Tachometr, palivoměr a poškozená místa. Fotky s datem jsou silný doplněk protokolu.' },
      { nazev: 'Podepište dva výtisky', popis: 'Každá strana si nechá jeden. Při prodeji nezapomeňte na přepis do 10 pracovních dnů.' },
    ],
    faq: [
      { q: 'Je předávací protokol povinný?', a: 'Zákon ho nevyžaduje. Je to ale nejjednodušší důkaz, v jakém stavu auto bylo a kdy přesně se předalo. Hodí se při sporu o poškození, ujeté kilometry nebo pokutu z kamery.' },
      { q: 'Nestačí kupní smlouva?', a: 'Kupní smlouva řeší prodej: cenu, vlastnictví a přepis. Auto se ale často předává jindy, než se smlouva podepisuje. Protokol zachytí stav přesně v okamžiku předání, včetně času.' },
      { q: 'Proč zapisovat i čas předání?', a: 'Podle času se pozná, kdo auto v danou chvíli používal. To se hodí u pokut z radarů a kamer, parkování nebo dopravní nehody.' },
      { q: 'Můžu protokol podepsat na mobilu?', a: 'Ano. V průvodci se obě strany mohou podepsat prstem na jednom telefonu nebo tabletu a podpisy se vloží do PDF. Klidně ale protokol vytiskněte a podepište rukou.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Protokol se skládá přímo ve vašem prohlížeči a údaje se na server neodesílají. Podpisy se neukládají vůbec.' },
    ],
    zakony: "Protokol je doplňkem ke kupní smlouvě podle zákona č. 89/2012 Sb., občanský zákoník, nebo k ujednání o zápůjčce vozidla.",
  },
  vytvorit: {
    title: "Vyplnit předávací protokol k autu online – PDF zdarma",
    description: "Průvodce předávacím protokolem k vozidlu: stav km, palivo, poškození, klíče a výbava. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
