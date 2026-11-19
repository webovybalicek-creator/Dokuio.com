import type { StrankaDokumentu } from '../typy';
import { odstoupeniOdSmlouvy as sablona } from '../../sablony/cz/odstoupeni-od-smlouvy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odstoupení od smlouvy do 14 dnů",
  nazevA: "odstoupení od smlouvy",
  katalog: {
    popis: "Vrácení zboží z e-shopu bez udání důvodu.",
    kategorie: "nakupy",
    ilustrace: "protokol",
    slova: ["vrácení zboží","e-shop","eshop","14 dní","odstoupení","internet","vrátit peníze"],
  },
  souvisejici: 'bezne',
  landing: {
    title: "Odstoupení od smlouvy do 14 dnů {rok} – formulář PDF zdarma",
    description: "Formulář pro odstoupení od nákupu z e-shopu do 14 dnů podle vzoru z nařízení vlády. Vyplňte online, stáhněte PDF nebo Word zdarma.",
    perex: "Koupili jste na internetu a chcete zboží vrátit? Do 14 dnů od převzetí můžete odstoupit bez udání důvodu. Formulář vychází ze státního vzoru.",
    obsahPopis: "Obsah podle vzorového formuláře z nařízení vlády č. 29/2023 Sb.",
    obsah: [
      { nazev: 'Adresát', popis: 'Prodávající – název, IČO, adresa pro odstoupení.' },
      { nazev: 'Oznámení o odstoupení', popis: 'Zboží, číslo objednávky, data objednání a převzetí, účet pro vrácení peněz.' },
      { nazev: 'Spotřebitel', popis: 'Vaše jméno, adresa a kontakt.' },
    ],
    kroky: [
      { nazev: 'Vyplňte nákup', popis: 'Číslo objednávky a data najdete v potvrzovacím e-mailu.' },
      { nazev: 'Stáhněte a odešlete', popis: 'E-mailem, doporučeně nebo přes formulář obchodu – do 14 dnů od převzetí.' },
      { nazev: 'Vraťte zboží', popis: 'Do 14 dnů od odstoupení. Peníze musí přijít do 14 dnů.' },
    ],
    online: ['Podle státního vzorového formuláře', 'Kontrola lhůty 14 dnů', 'Účet pro vrácení peněz', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['nakoupili jste v e-shopu, po telefonu nebo od podomního prodejce', 'nakupovali jste jako spotřebitel (ne na IČO)', 'od převzetí neuplynulo 14 dnů'],
    nehodiSe: ['zboží je vadné – použijte reklamaci (máte na ni 24 měsíců)', 'nakupovali jste v kamenném obchodě – vrácení je jen dobrá vůle obchodu', 'kupovali jste od soukromé osoby (bazar, inzerát)'],
    poNadpis: "Po odeslání.",
    po: [
      { nazev: 'Doklad o odeslání', popis: 'Uschovejte e-mail, podací lístek nebo potvrzení obchodu.' },
      { nazev: 'Zboží zpět do 14 dnů', popis: 'Nepoškozené, s příslušenstvím.' },
      { nazev: 'Peníze do 14 dnů', popis: 'Obchod může počkat na zboží nebo doklad o jeho odeslání. Jinak pomůže ČOI.' },
    ],
    faq: [
      { q: 'Musím uvést důvod?', a: 'Ne. Při nákupu na dálku můžete odstoupit do 14 dnů bez udání důvodu.' },
      { q: 'Od kdy se počítá 14 dnů?', a: 'U zboží od jeho převzetí, u služeb od uzavření smlouvy. Stačí odstoupení v této lhůtě odeslat.' },
      { q: 'Kdo platí poštovné za vrácení?', a: 'Vy, pokud vás o tom obchod předem informoval. Jinak náklady nese obchod. Původní dopravu (nejlevnější nabízenou) vám obchod vrací.' },
      { q: 'Musím vrátit zboží v originálním obalu?', a: 'Ne, obal musí jen zboží chránit. Zboží ale nesmí být poškozené nad rámec nutného vyzkoušení.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Formulář se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 1829 a násl. zákona č. 89/2012 Sb., občanský zákoník, a vzorového formuláře z nařízení vlády č. 29/2023 Sb. (ve znění nařízení č. 66/2026 Sb.).",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit odstoupení od smlouvy do 14 dnů online – PDF zdarma",
    description: "Průvodce odstoupením od nákupu z e-shopu do 14 dnů podle vzorového formuláře. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
