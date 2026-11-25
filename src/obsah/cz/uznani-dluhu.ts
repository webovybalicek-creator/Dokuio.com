import type { StrankaDokumentu } from '../typy';
import { uznaniDluhu as sablona } from '../../sablony/cz/uznani-dluhu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Uznání dluhu",
  nazevA: "uznání dluhu",
  katalog: {
    popis: "Dlužník písemně uzná, kolik a do kdy vrátí.",
    kategorie: "penize",
    ilustrace: "dluh",
    slova: ["dluh","dlužník","splátkový kalendář","uznání"],
  },
  souvisejici: 'penize',
  landing: {
    title: "Uznání dluhu a splátkový kalendář {rok} – vzor PDF zdarma",
    description: "Uznání dluhu zdarma podle § 2053 občanského zákoníku: důvod, výše, splátky. Vyplňte online nebo stáhněte vzor v PDF i Wordu.",
    perex: "Dlužník písemně potvrdí, kolik a proč dluží, a případně jak bude splácet. Věřitel tím získá silný důkaz a novou desetiletou promlčecí lhůtu.",
    obsahPopis: "Tři krátké části podle § 2053 občanského zákoníku.",
    obsah: [
      { nazev: 'Strany', popis: 'Dlužník a věřitel – jméno, datum narození, adresa.' },
      { nazev: 'Uznání dluhu', popis: 'Výše dluhu číslem i slovy a jeho důvod.' },
      { nazev: 'Splacení', popis: 'Najednou do data, nebo měsíční splátky; předčasné splacení možné.' },
    ],
    kroky: [
      { nazev: 'Odpovězte na otázky', popis: 'Kdo, kolik a z jakého důvodu.' },
      { nazev: 'Dohodněte splácení', popis: 'Termín nebo splátky – nepovinné, ale užitečné.' },
      { nazev: 'Podpis dlužníka', popis: 'Bez něj uznání neplatí. Originál si nechá věřitel.' },
    ],
    online: ['Částka slovy se dopočítá sama', 'Splátkový kalendář jedním kliknutím', 'Vysvětlené účinky uznání', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['někdo vám dluží peníze a chcete to mít písemně', 'blíží se promlčení dluhu (obecně po 3 letech)', 'dlužník chce splácet a vy souhlasíte se splátkami'],
    nehodiSe: ['peníze teprve půjčujete – použijte smlouvu o zápůjčce', 'dlužník je firma v insolvenci', 'dluh je sporný – poraďte se s advokátem'],
    po: [
      { nazev: 'Originál k věřiteli', popis: 'Podepsaný dlužníkem.' },
      { nazev: 'Potvrzujte splátky', popis: 'Hotovost proti potvrzení, převody na účet.' },
      { nazev: 'Hlídejte termíny', popis: 'Když dlužník nezaplatí, začněte výzvou k zaplacení.' },
    ],
    faq: [
      { q: 'Co uznání dluhu přinese?', a: 'Má se za to, že dluh v uznané výši existuje – dlužník by musel dokazovat opak. A od uznání běží nová promlčecí lhůta 10 let (pokud je určen termín splacení, 10 let od tohoto termínu).' },
      { q: 'Musí být uznání písemné?', a: 'Ano. Podle § 2053 občanského zákoníku musí dlužník uznat dluh písemně a uvést důvod i výši.' },
      { q: 'Lze uznat i promlčený dluh?', a: 'Ano. Uznáním se nárok obnoví a začne běžet nová desetiletá promlčecí lhůta.' },
      { q: 'Musí podepsat i věřitel?', a: 'Ne, rozhodující je podpis dlužníka. Podpis věřitele potvrzuje souhlas se splátkami.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dokument se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 2053 a § 639 zákona č. 89/2012 Sb., občanský zákoník.",
    souvisejiciPopis: "Další dokumenty k penězům a darům, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit uznání dluhu online – PDF zdarma",
    description: "Průvodce uznáním dluhu se splátkami. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
