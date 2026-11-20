import type { StrankaDokumentu } from '../typy';
import { smlouvaODilo as sablona } from '../../sablony/cz/smlouva-o-dilo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Smlouva o dílo",
  nazevA: "smlouvu o dílo",
  katalog: {
    popis: "Řemeslník, rekonstrukce, oprava – cena, termín a převzetí.",
    kategorie: "sluzby",
    ilustrace: "protokol",
    slova: ["smlouva o dílo", "řemeslník", "rekonstrukce", "oprava", "zhotovitel", "objednatel", "zakázka"],
  },
  souvisejici: 'sluzby',
  landing: {
    title: "Smlouva o dílo {rok} – vzor zdarma pro řemeslníky (PDF, Word)",
    description: "Vzor smlouvy o dílo podle § 2586 občanského zákoníku zdarma: předmět, termín, pevná cena nebo rozpočet, záloha, převzetí a vady. PDF i Word.",
    perex: "Na rekonstrukci, opravu nebo jakoukoli zakázku od řemeslníka. Jasně stanoví, co se udělá, do kdy, za kolik a jak se dílo převezme.",
    obsahPopis: "Šest přehledných článků podle § 2586 a násl. občanského zákoníku.",
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Objednatel a zhotovitel, u firmy načtení z ARES.' },
      { nazev: 'Předmět smlouvy', popis: 'Co přesně se udělá, kde a kdo zajistí materiál.' },
      { nazev: 'Doba provedení', popis: 'Termín zahájení a dokončení.' },
      { nazev: 'Cena a platba', popis: 'Pevná cena, nebo rozpočet; záloha, splatnost, vícepráce jen písemně.' },
      { nazev: 'Předání díla a vady', popis: 'Předávací protokol, drobné vady, lhůta 2 roky, volitelná záruka.' },
      { nazev: 'Závěrečná ustanovení', popis: 'Písemné změny, dvě vyhotovení.' },
    ],
    kroky: [
      { nazev: 'Popište dílo', popis: 'Rozsah prací, místo, termíny.' },
      { nazev: 'Dohodněte cenu', popis: 'Pevnou nebo podle rozpočtu, se zálohou nebo bez.' },
      { nazev: 'Podepište', popis: 'Dvě vyhotovení, každý jedno.' },
    ],
    online: ['Cena slovy se dopočítá sama', 'Zhotovitel z ARES podle IČO', 'Termíny do kalendáře', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['objednáváte rekonstrukci koupelny, malování, podlahy', 'zadáváte opravu nebo výrobu na zakázku', 'jako řemeslník chcete jasné podmínky se zákazníkem'],
    nehodiSe: ['stavba domu se stavebním povolením – smlouvu nechte připravit odborníkem', 'opakovaná práce pro zaměstnavatele – to je pracovní poměr nebo dohoda', 'koupě hotové věci – použijte kupní smlouvu'],
    po: [
      { nazev: 'Záloha', popis: 'Převodem nebo proti potvrzení.' },
      { nazev: 'Změny písemně', popis: 'Vícepráce a nové ceny vždy odsouhlaste písemně.' },
      { nazev: 'Převzetí', popis: 'Předávací protokol s výpisem vad.' },
    ],
    faq: [
      { q: 'Musí být smlouva o dílo písemná?', a: 'Zákon to obecně nevyžaduje, ale písemná smlouva je jediný spolehlivý důkaz, co jste si dohodli – rozsah, cenu i termín.' },
      { q: 'Jaký je rozdíl mezi pevnou cenou a rozpočtem?', a: 'Pevná cena se nemění. U ceny podle rozpočtu může zhotovitel žádat navýšení jen kvůli okolnostem, které nemohl předvídat; když navýšení přesáhne 10 %, může objednatel od smlouvy odstoupit (§ 2622 OZ).' },
      { q: 'Kdy se platí?', a: 'Podle zákona po provedení díla. U díla prováděného po částech nebo s velkými náklady lze požadovat přiměřenou zálohu (§ 2611 OZ).' },
      { q: 'Do kdy můžu reklamovat vady?', a: 'Vady vytkněte bez zbytečného odkladu, nejpozději do dvou let od převzetí díla (§ 2618 OZ). Pokud zhotovitel dá záruku, platí navíc po celou záruční dobu.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dokument se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 2586–2635 zákona č. 89/2012 Sb., občanský zákoník.",
    souvisejiciPopis: "Další dokumenty ke službám a placení, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit smlouvu o dílo online – PDF zdarma",
    description: "Průvodce smlouvou o dílo s cenou, zálohou a předáním. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 4 minuty",
  },
};

export default stranka;
