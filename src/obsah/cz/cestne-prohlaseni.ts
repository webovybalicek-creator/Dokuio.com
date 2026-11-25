import type { StrankaDokumentu } from '../typy';
import { cestneProhlaseni as sablona } from '../../sablony/cz/cestne-prohlaseni';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Čestné prohlášení",
  nazevA: "čestné prohlášení",
  katalog: {
    popis: "Písemné prohlášení pro úřad, školu nebo banku.",
    kategorie: "zastoupeni",
    ilustrace: "plnamoc",
    slova: ["čestné prohlášení", "prohlášení", "úřad", "bezdlužnost", "bydliště", "vzor"],
  },
  souvisejici: 'bezne',
  landing: {
    title: "Čestné prohlášení {rok} – vzor ke stažení zdarma (PDF, Word)",
    description: "Univerzální vzor čestného prohlášení zdarma: kdo prohlašuje, pro koho a co. Vyplňte online a stáhněte v PDF nebo Wordu. S tipy, kdy je potřeba ověřit podpis.",
    perex: "Když po vás úřad, škola, banka nebo pronajímatel chce „čestné prohlášení“. Vyplníte, kdo jste a co prohlašujete, a máte hotovo.",
    obsahPopis: "Jednoduchá listina na jednu stránku.",
    obsah: [
      { nazev: 'Prohlašující', popis: 'Jméno, datum narození, trvalé bydliště.' },
      { nazev: 'Prohlášení', popis: 'Pro koho a k jakému účelu, text prohlášení vlastními slovy, potvrzení pravdivosti.' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Kdo prohlašuje.' },
      { nazev: 'Napište prohlášení', popis: 'Konkrétně a pravdivě.' },
      { nazev: 'Podepište', popis: 'Vlastní rukou, případně před úředníkem kvůli ověření.' },
    ],
    online: ['Úvodní formulace se doplní sama', 'Tipy ke správné formulaci', 'Stažení v PDF i ve Wordu', 'Prázdný vzor k ručnímu vyplnění'],
    hodiSe: ['úřad nebo škola chce čestné prohlášení', 'potvrzujete bydliště, bezdlužnost nebo jinou skutečnost', 'žádáte o příspěvek, dotaci nebo slevu'],
    nehodiSe: ['instituce má vlastní formulář – použijte ten', 'zákon vyžaduje úřední doklad (např. výpis z rejstříku trestů)', 'souhlas s trvalým pobytem – na to máme samostatný vzor'],
    po: [
      { nazev: 'Podpis', popis: 'Vlastní rukou.' },
      { nazev: 'Ověření, je-li třeba', popis: 'Czech POINT, matrika nebo notář – podepíšete až na místě.' },
      { nazev: 'Kopie pro vás', popis: 'Schovejte si ji.' },
    ],
    faq: [
      { q: 'Musí být podpis na čestném prohlášení ověřený?', a: 'Jen když to příjemce (úřad, banka) výslovně vyžaduje. Ověření (legalizaci) udělá Czech POINT, obecní úřad nebo notář; podepíšete až před úředníkem.' },
      { q: 'Co když prohlásím něco nepravdivého?', a: 'Nepravdivé čestné prohlášení může mít právní následky – vůči úřadu jde o přestupek a v závažných případech (např. při žádosti o dávky nebo dotace) i o trestný čin.' },
      { q: 'Je nějaký předepsaný vzor?', a: 'Obecně ne. Pokud ale instituce má vlastní formulář, použijte jeho text.' },
      { q: 'Potřebuji čestné prohlášení v angličtině?', a: 'Když ho předkládáte v zahraničí nebo cizojazyčné instituci, ano. Máme i anglickou verzi vzoru (odkaz English nahoře). Pro úřad v cizině může být nutný úřední překlad nebo apostila – ověřte si to u příjemce.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dokument se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Ověření podpisu upravuje zákon č. 21/2006 Sb., o ověřování shody opisu nebo kopie s listinou a o ověřování pravosti podpisu.",
    souvisejiciPopis: "Další běžné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit čestné prohlášení online – PDF zdarma",
    description: "Průvodce čestným prohlášením. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 1 minutu",
  },
};

export default stranka;
