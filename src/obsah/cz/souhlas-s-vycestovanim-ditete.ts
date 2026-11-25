import type { StrankaDokumentu } from '../typy';
import { souhlasVycestovaniDite as sablona } from '../../sablony/cz/souhlas-vycestovani-dite';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Souhlas s vycestováním dítěte",
  nazevA: "souhlas s vycestováním dítěte",
  katalog: {
    popis: "Cesta dítěte do zahraničí bez rodičů nebo s jedním z nich.",
    kategorie: "rodina",
    ilustrace: "plnamoc",
    slova: ["dítě","cesta","zahraničí","dovolená","tábor","souhlas rodičů","vycestování","nezletilý"],
  },
  souvisejici: 'bezne',
  landing: {
    title: "Souhlas s vycestováním dítěte do zahraničí {rok} – vzor PDF",
    description: 'Souhlas rodičů s cestou dítěte do zahraničí podle doporučení MZV: dítě, doprovod, země, termín. Zdarma v PDF i Wordu.',
    perex: "Dítě jede k moři s babičkou, na tábor nebo s jedním z rodičů? Souhlas zákonného zástupce s vycestováním dítěte do zahraničí podle doporučení ministerstva zahraničí, vyplněný za pár minut.",
    obsahPopis: "Obsah podle doporučení a vzorů Ministerstva zahraničních věcí ČR.",
    obsah: [
      { nazev: 'Zákonní zástupci', popis: 'Rodiče – jméno, datum narození, číslo dokladu, telefon.' },
      { nazev: 'Souhlas', popis: 'Dítě, doprovod, cílová a tranzitní země, termín a účel cesty.' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Jména a čísla dokladů přesně podle pasů a občanek.' },
      { nazev: 'Ověřte podmínky země', popis: 'Na stránkách MZV o státech světa nebo na velvyslanectví.' },
      { nazev: 'Ověřte podpis', popis: 'Doporučeno MZV – Czech POINT, obecní úřad, notář.' },
    ],
    online: ['Obsah podle doporučení MZV', 'Varianty doprovodu (rodič, jiná osoba, samo)', 'Odkazy na podmínky jednotlivých zemí', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['dítě cestuje s prarodiči, příbuznými, na tábor nebo se školou', 'dítě cestuje s jedním z rodičů, zvlášť mimo EU nebo s jiným příjmením', 'dítě cestuje samo'],
    nehodiSe: ['dlouhodobý pobyt nebo stěhování do ciziny – potřebný souhlas druhého rodiče nebo soudu', 'potřebujete dvojjazyčný text – použijte vzor MZV a ověření u notáře', 'cílová země vyžaduje vlastní formulář – použijte ten'],
    poNadpis: "Před cestou.",
    po: [
      { nazev: 'Ověřený podpis', popis: 'U obou rodičů, kteří souhlas dávají.' },
      { nazev: 'Doklady s sebou', popis: 'Originál souhlasu, cestovní doklad dítěte, ideálně kopie rodného listu.' },
      { nazev: 'Kontakt na rodiče', popis: 'Telefon je v souhlasu – mějte ho během cesty zapnutý.' },
    ],
    faq: [
      { q: 'Je souhlas povinný?', a: 'České právo ho u krátkých cest nevyžaduje, ale některé země nebo letecké společnosti ano. MZV ho důrazně doporučuje zejména při cestách mimo EU a když dítě necestuje s oběma rodiči.' },
      { q: 'Musí být podpis ověřený?', a: 'MZV doporučuje úřední ověření (Czech POINT na poště, obecní úřad, notář). Dvojjazyčný text ale pošta ani obecní úřad neověří.' },
      { q: 'Kde zjistím podmínky konkrétní země?', a: 'Na webu MZV v sekci Státy světa – informace na cesty, případně na velvyslanectví dané země. Ověřte i země, kterými se projíždí.' },
      { q: 'Potřebuji anglickou verzi?', a: 'MZV nabízí samostatný anglický vzor. Pro ověření podpisu na poště použijte samostatné jazykové verze, ne dvojjazyčný text.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Souhlas se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z doporučení a vzorů Ministerstva zahraničních věcí ČR (Cestování s dětmi). Podmínky jednotlivých zemí se liší a mění – vždy je ověřte před cestou.",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit souhlas s vycestováním dítěte online – PDF zdarma",
    description: "Průvodce souhlasem s cestou dítěte do zahraničí podle doporučení MZV. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty",
  },
};

export default stranka;
