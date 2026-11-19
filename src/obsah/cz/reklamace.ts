import type { StrankaDokumentu } from '../typy';
import { reklamace as sablona } from '../../sablony/cz/reklamace';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reklamace zboží",
  nazevA: "reklamaci zboží",
  katalog: {
    popis: "Vadné zboží: oprava, výměna, sleva nebo vrácení peněz.",
    kategorie: "nakupy",
    ilustrace: "protokol",
    slova: ["reklamace","vada","záruka","reklamační protokol","oprava","výměna","obchod"],
  },
  souvisejici: 'bezne',
  landing: {
    title: "Reklamace zboží {rok} – vzor reklamačního dopisu PDF zdarma",
    description: "Vzor reklamace zboží zdarma: vada, požadavek na opravu, výměnu, slevu nebo vrácení peněz, vyřízení do 30 dnů. PDF i Word.",
    perex: "Zboží je vadné? Sepište reklamaci, která obsahuje vše podstatné: co je vadou, co požadujete a lhůtu 30 dnů na vyřízení.",
    obsahPopis: "Uplatnění práv z vadného plnění podle § 2161 a násl. občanského zákoníku.",
    obsah: [
      { nazev: 'Prodávající', popis: 'U koho reklamujete.' },
      { nazev: 'Reklamace', popis: 'Zboží, doklad, popis vady a požadovaný způsob vyřízení; žádost o potvrzení.' },
      { nazev: 'Kupující', popis: 'Vaše údaje a kontakt.' },
    ],
    kroky: [
      { nazev: 'Popište vadu', popis: 'Konkrétně – co nefunguje a kdy.' },
      { nazev: 'Vyberte požadavek', popis: 'Oprava, výměna, sleva, nebo vrácení peněz.' },
      { nazev: 'Předejte se zbožím', popis: 'A chtějte písemné potvrzení o uplatnění.' },
    ],
    online: ['Správné formulace a lhůta 30 dnů', 'Žádost o potvrzení reklamace', 'Vysvětlení, co můžete požadovat', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['koupili jste od obchodu nebo e-shopu jako spotřebitel', 'vada se projevila do 24 měsíců od převzetí', 'chcete mít reklamaci písemně'],
    nehodiSe: ['zboží je v pořádku, jen ho nechcete – u e-shopu odstoupení do 14 dnů', 'kupovali jste od soukromé osoby – řeší se podle kupní smlouvy', 'nákup na IČO – platí jiná pravidla než pro spotřebitele'],
    poNadpis: "Po uplatnění.",
    po: [
      { nazev: 'Potvrzení o uplatnění', popis: 'S datem, popisem vady a požadavkem.' },
      { nazev: 'Hlídejte 30 dnů', popis: 'Od uplatnění. Delší lhůta jen s vaším souhlasem.' },
      { nazev: 'Nevyřízeno? ČOI', popis: 'Můžete odstoupit od smlouvy a obrátit se na Českou obchodní inspekci.' },
    ],
    faq: [
      { q: 'Jak dlouho mohu reklamovat?', a: 'Vady nového zboží můžete uplatnit do 24 měsíců od převzetí. Vada, která se projeví do 1 roku, se považuje za vadu, kterou zboží mělo už při převzetí.' },
      { q: 'Jak rychle musí obchod reklamaci vyřídit?', a: 'Nejpozději do 30 dnů od uplatnění, pokud se s vámi nedohodne na delší lhůtě.' },
      { q: 'Mohu rovnou chtít peníze zpět?', a: 'Obvykle se nejdřív opravuje nebo vyměňuje. Slevu nebo odstoupení můžete požadovat, když oprava ani výměna nejde, obchod ji odmítne, nestihne nebo se vada opakuje.' },
      { q: 'Co když reklamaci zamítnou?', a: 'Chtějte písemné odůvodnění. Můžete nechat vadu posoudit znalcem a obrátit se na Českou obchodní inspekci, která řeší spory zdarma.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Reklamace se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 2161 a násl. zákona č. 89/2012 Sb., občanský zákoník, ve znění zákona č. 374/2022 Sb.",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit reklamaci zboží online – PDF zdarma",
    description: "Průvodce reklamací vadného zboží: oprava, výměna, sleva, vrácení peněz. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty",
  },
};

export default stranka;
