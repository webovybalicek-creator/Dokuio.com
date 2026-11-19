import type { StrankaDokumentu } from '../typy';
import { smlouvaOZapujcce as sablona } from '../../sablony/cz/smlouva-o-zapujcce';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Smlouva o zápůjčce",
  nazevA: "smlouvu o zápůjčce",
  katalog: {
    popis: "Půjčka peněz mezi známými, včetně splátek.",
    kategorie: "penize",
    ilustrace: "pujcka",
    slova: ["půjčka","zápůjčka","půjčit peníze","splátky","úvěr","loan"],
  },
  souvisejici: 'penize',
  landing: {
    title: "Smlouva o půjčce peněz {rok} – vzor PDF zdarma",
    description: "Smlouva o půjčce peněz mezi soukromými osobami zdarma: částka, úrok, splátky. Vyplňte online nebo stáhněte vzor v PDF i Wordu.",
    perex: "Půjčujete peníze známému nebo v rodině? Sepište si, kolik, s jakým úrokem a do kdy se vrací. Vyplňte online, nebo stáhněte prázdný vzor.",
    obsahPopis: "Pět článků podle § 2390 a násl. občanského zákoníku, bez smluvních pokut.",
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Zapůjčitel a vydlužitel – jméno, datum narození, adresa.' },
      { nazev: 'Předmět zápůjčky', popis: 'Částka číslem i slovy, předání v hotovosti nebo převodem.' },
      { nazev: 'Úrok', popis: 'Bezúročná zápůjčka, nebo roční úroková sazba.' },
      { nazev: 'Vrácení', popis: 'Najednou do data, nebo měsíční splátky. Předčasné splacení vždy možné.' },
      { nazev: 'Závěrečná ustanovení', popis: 'Dva stejnopisy, účinnost a podpisy obou stran.' },
    ],
    kroky: [
      { nazev: 'Odpovězte na otázky', popis: 'Kolik, jak se peníze předají, úrok a splácení. Co nevíte, přeskočte.' },
      { nazev: 'Upravte text, pokud chcete', popis: 'Každý odstavec můžete přepsat nebo smazat. Původní znění jde vždy vrátit.' },
      { nazev: 'Stáhněte PDF nebo Word', popis: 'Zdarma a bez registrace. Vytiskněte dvakrát a obě strany podepíší.' },
    ],
    online: ['Částka slovy se dopočítá sama', 'Splátky i úrok jedním kliknutím', 'Podpis prstem nebo myší rovnou v průvodci', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['půjčujete peníze známému, kamarádovi nebo v rodině', 'chcete se dohodnout na splátkách nebo pevném termínu vrácení', 'oba jste soukromé osoby'],
    nehodiSe: [
      'půjčujete v rámci podnikání – platí pravidla spotřebitelského úvěru',
      'peníze dáváte a nechcete zpět – použijte darovací smlouvu',
      'dluh už existuje a jen ho chcete písemně potvrdit – připravujeme uznání dluhu',
    ],
    poNadpis: "Po podpisu.",
    po: [
      { nazev: 'Podepište dva stejnopisy', popis: 'Každá strana si nechá jeden.' },
      { nazev: 'Předejte peníze', popis: 'Převod je nejlépe doložitelný. Hotovost podepisujte až s penězi v ruce.' },
      { nazev: 'Potvrzujte splátky', popis: 'Každou platbu v hotovosti si nechte potvrdit, třeba naším potvrzením o převzetí peněz.' },
    ],
    faq: [
      { q: 'Jaký je rozdíl mezi půjčkou a zápůjčkou?', a: 'Běžně se říká „půjčka“, ale u peněz občanský zákoník používá pojem zápůjčka: vydlužitel vrací stejnou částku, ne tytéž bankovky. Výpůjčka je naopak bezplatné půjčení konkrétní věci, která se vrací.' },
      { q: 'Musí být smlouva o zápůjčce písemná?', a: 'Zákon to nevyžaduje, ale bez písemné smlouvy se těžko dokazuje, kolik a za jakých podmínek jste půjčili. Písemnou smlouvu doporučujeme vždy.' },
      { q: 'Jaký úrok je přiměřený?', a: 'Zákon pevný strop nestanoví, ale úrok, který je v hrubém nepoměru k běžným sazbám, je lichevní a neplatný. Mezi známými se nejčastěji půjčuje bez úroku. Přijaté úroky jsou zdanitelný příjem.' },
      { q: 'Co když vydlužitel nesplácí?', a: 'Od prvního dne prodlení platí zákonný úrok z prodlení. U splátek může zapůjčitel po 30 dnech prodlení písemně žádat vrácení celé zbývající částky. Nepomůže-li výzva, lze podat žalobu nebo návrh na platební rozkaz.' },
      { q: 'Proč ve smlouvě nejsou smluvní pokuty?', a: 'Vysoké pokuty mezi soukromými osobami soudy často snižují nebo ruší a zbytečně vyhrocují vztahy. Vzor proto spoléhá na zákonný úrok z prodlení. Pokud chcete pokutu, můžete ji přidat jako vlastní ustanovení.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Smlouva se skládá přímo ve vašem prohlížeči a údaje se na server neodesílají.' },
    ],
    zakony: "Vzor vychází ze zákona č. 89/2012 Sb., občanský zákoník (§ 2390 a násl. o zápůjčce, § 1970 o úroku z prodlení).",
    souvisejiciPopis: "Další dokumenty k penězům a darům, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit smlouvu o zápůjčce (půjčka peněz) online – PDF zdarma",
    description: "Průvodce smlouvou o zápůjčce: částka, úrok, splátky. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty",
  },
};

export default stranka;
