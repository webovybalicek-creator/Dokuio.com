import type { StrankaDokumentu } from '../typy';
import { plnaMoc as sablona } from '../../sablony/cz/plna-moc';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Plná moc",
  nazevA: "plnou moc",
  katalog: {
    popis: "Zmocnění někoho, aby za vás něco vyřídil.",
    kategorie: "zastoupeni",
    ilustrace: "plnamoc",
    slova: ["zmocnění","zastoupení","úřad","pošta","power of attorney"],
  },
  souvisejici: 'penize',
  landing: {
    title: "Plná moc {rok} – vzor PDF zdarma",
    description: "Plná moc zdarma: k převzetí zásilek, jednání s úřadem nebo podpisu smlouvy. Vyplňte online nebo stáhněte vzor v PDF i Wordu.",
    perex: "Aby za vás někdo vyzvedl zásilku, vyřídil věc na úřadě nebo podepsal smlouvu. Vždy s přesně vymezeným rozsahem.",
    obsahPopis: "Speciální plná moc podle § 441 a násl. občanského zákoníku.",
    obsah: [
      { nazev: 'Zmocnitel', popis: 'Kdo plnou moc dává.' },
      { nazev: 'Zmocněnec', popis: 'Kdo bude jednat.' },
      { nazev: 'Rozsah a platnost', popis: 'Zásilky, úřad, smlouva nebo jiné úkony; jednorázově, do data nebo do odvolání.' },
    ],
    kroky: [
      { nazev: 'Vyberte, k čemu', popis: 'Čím přesněji, tím bezpečněji.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma.' },
      { nazev: 'Ověřte podpis, je-li třeba', popis: 'Pošta, banka nebo katastr ho často chtějí.' },
    ],
    online: ['Rozsah z hotových možností', 'Omezení platnosti jedním kliknutím', 'Tipy, kdy je potřeba ověřený podpis', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['někdo za vás má vyřídit konkrétní věc', 'potřebujete vyzvednout zásilku nebo podat žádost', 'chcete jasně omezený rozsah a platnost'],
    nehodiSe: ['přepis auta – použijte plnou moc k přepisu vozidla', 'nemovitosti, soudní spory, firmy – obvykle zvláštní forma nebo advokát', 'banka – většinou trvá na vlastním formuláři'],
    poNadpis: "Po podpisu.",
    po: [
      { nazev: 'Zjistěte požadavky instituce', popis: 'Ověřený podpis nebo vlastní formulář?' },
      { nazev: 'Předejte zmocněnci', popis: 'Originál; kopii si nechte.' },
      { nazev: 'Odvolání', popis: 'Plnou moc můžete kdykoli písemně odvolat.' },
    ],
    faq: [
      { q: 'Musí být podpis na plné moci ověřený?', a: 'Obecně ne, ale řada institucí (registr vozidel, katastr, pošta u některých služeb, banky) ověřený podpis nebo vlastní formulář vyžaduje. Zeptejte se předem.' },
      { q: 'Co je generální plná moc?', a: 'Zmocnění ke všem úkonům. Je riziková, proto ji vzor nenabízí – rozsah vždy vyjmenujte.' },
      { q: 'Jak plnou moc zrušit?', a: 'Písemným odvoláním. Oznamte ho zmocněnci i instituci, kde se plná moc používá.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Plná moc se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 441 a násl. zákona č. 89/2012 Sb., občanský zákoník.",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit plnou moc online – PDF zdarma",
    description: "Průvodce plnou mocí: pošta, úřad, smlouva. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
