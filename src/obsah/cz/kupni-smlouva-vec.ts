import type { StrankaDokumentu } from '../typy';
import { kupniSmlouvaVec as sablona } from '../../sablony/cz/kupni-smlouva-vec';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kupní smlouva na věc",
  nazevA: "kupní smlouvu na věc",
  katalog: {
    popis: "Prodej kola, telefonu, nábytku a dalších věcí.",
    kategorie: "veci",
    ilustrace: "penize",
    slova: ["kupní smlouva","prodej","bazar","kolo","telefon","mobil","nábytek","movitá věc","obecná"],
  },
  souvisejici: 'penize',
  landing: {
    title: "Kupní smlouva na věc {rok} – vzor PDF zdarma",
    description: "Obecná kupní smlouva na movitou věc zdarma: kolo, telefon, nábytek, elektronika. Vyplňte online nebo stáhněte vzor v PDF i Wordu.",
    perex: "Na prodej kola, telefonu, nábytku, elektroniky a dalších věcí mezi soukromými osobami. Vyplňte online, nebo stáhněte prázdný vzor.",
    obsahPopis: "Čtyři články podle § 2079 a násl. občanského zákoníku.",
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Prodávající a kupující.' },
      { nazev: 'Předmět koupě', popis: 'Popis věci, výrobní číslo, příslušenství, známé vady.' },
      { nazev: 'Kupní cena', popis: 'Částka číslem i slovy, hotovost nebo převod.' },
      { nazev: 'Předání', popis: 'Hned, nebo do data; podpisy.' },
    ],
    kroky: [
      { nazev: 'Popište věc', popis: 'Značka, model, výrobní číslo – aby nešla zaměnit.' },
      { nazev: 'Vyzkoušejte ji', popis: 'Před podpisem; vady zapište.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma.' },
    ],
    online: ['Částka slovy se dopočítá sama', 'Nápověda, kde najít výrobní číslo', 'Každý odstavec můžete upravit', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['prodáváte věc z bazaru nebo inzerátu', 'jde o dražší věc (kolo, telefon, notebook, nábytek)', 'chcete doklad o koupi a o stavu věci'],
    nehodiSe: ['auto nebo motorka – mají vlastní smlouvu s přepisem', 'byt, dům, pozemek – katastr, advokát', 'kupujete od obchodníka – dostanete účtenku a máte spotřebitelská práva'],
    po: [
      { nazev: 'Dva podepsané výtisky', popis: 'Každá strana jeden.' },
      { nazev: 'Předejte doklady', popis: 'Účtenku, záruční list, návod.' },
      { nazev: 'Schovejte smlouvu', popis: 'Dokládá, odkud věc máte.' },
    ],
    faq: [
      { q: 'Musí být kupní smlouva na věc písemná?', a: 'Nemusí, u movitých věcí stačí ústní dohoda. Písemná smlouva ale dokazuje cenu, stav a původ věci.' },
      { q: 'Mám jako prodávající odpovědnost za vady?', a: 'Ano, i mezi soukromými osobami. Na vady, o kterých kupující při koupi věděl (jsou ve smlouvě), se ale nevztahuje.' },
      { q: 'Jak ověřit, že věc není kradená?', a: 'Chtějte doklad o koupi, zkontrolujte výrobní číslo a u telefonu, že je odhlášený z účtu výrobce. Podezřele nízká cena je varování.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Smlouva se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází ze zákona č. 89/2012 Sb., občanský zákoník (§ 2079 a násl.).",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit kupní smlouvu na věc online – PDF zdarma",
    description: "Průvodce kupní smlouvou na movitou věc: kolo, telefon, nábytek. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty",
  },
};

export default stranka;
