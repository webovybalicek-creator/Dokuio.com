import type { StrankaDokumentu } from '../typy';
import { predzalobniVyzva as sablona } from '../../sablony/cz/predzalobni-vyzva';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Předžalobní výzva",
  nazevA: "předžalobní výzvu",
  katalog: {
    popis: "Poslední výzva dlužníkovi před žalobou podle § 142a OSŘ.",
    kategorie: "penize",
    ilustrace: "dluh",
    slova: ["předžalobní výzva", "výzva k zaplacení", "upomínka", "dlužník", "faktura", "žaloba", "142a"],
  },
  souvisejici: 'penize',
  landing: {
    title: "Předžalobní výzva {rok} – vzor k zaplacení zdarma (PDF, Word)",
    description: "Vzor předžalobní výzvy podle § 142a OSŘ zdarma: dlužná částka, důvod, lhůta, úrok z prodlení. Vyplňte online a stáhněte v PDF nebo ve Wordu.",
    perex: "Než podáte žalobu, musíte dlužníka aspoň 7 dnů předem vyzvat k zaplacení. Jinak vám soud nemusí přiznat náhradu nákladů řízení. Tahle výzva má vše, co zákon vyžaduje.",
    obsahPopis: "Krátký dopis ve třech částech podle § 142a občanského soudního řádu.",
    obsah: [
      { nazev: 'Odesílatel a adresát', popis: 'Věřitel a dlužník – jméno nebo firma, IČO, adresa pro doručování.' },
      { nazev: 'Výzva k zaplacení', popis: 'Důvod a výše dluhu, původní splatnost, nová lhůta a účet, úrok z prodlení.' },
      { nazev: 'Upozornění', popis: 'Že jde o výzvu podle § 142a OSŘ a po marné lhůtě následuje žaloba.' },
    ],
    kroky: [
      { nazev: 'Vyplňte dluh', popis: 'Kdo, kolik a z jaké faktury nebo smlouvy.' },
      { nazev: 'Nastavte lhůtu', popis: 'Aspoň 7 dnů od odeslání, rozumné je 10–15 dnů.' },
      { nazev: 'Pošlete doporučeně', popis: 'Podací lístek dokazuje odeslání. Žalobu podejte nejdřív za 7 dnů.' },
    ],
    online: ['Částka slovy se dopočítá sama', 'Načtení dlužníka z ARES podle IČO', 'Připomínka konce lhůty do kalendáře', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['dlužník nezaplatil fakturu nebo nevrátil půjčku', 'chystáte se podat žalobu nebo návrh na platební rozkaz', 'chcete dlužníkovi dát poslední šanci zaplatit bez soudu'],
    nehodiSe: ['dlužník je v insolvenci – přihlaste pohledávku v insolvenčním řízení', 'pohledávka je sporná nebo vysoká – poraďte se s advokátem', 'dlužník dluh uznává a chce splácet – sepište uznání dluhu'],
    po: [
      { nazev: 'Odešlete doporučeně', popis: 'Na adresu pro doručování nebo poslední známou adresu.' },
      { nazev: 'Počkejte na lhůtu', popis: 'Připomínku si uložte do kalendáře.' },
      { nazev: 'Žaloba', popis: 'Nejdříve 7 dnů po odeslání výzvy, u okresního soudu dlužníka.' },
    ],
    faq: [
      { q: 'Je předžalobní výzva povinná?', a: 'Žalobu můžete podat i bez ní, ale soud vám pak zpravidla nepřizná náhradu nákladů řízení (soudní poplatek, advokát). Podle § 142a OSŘ je potřeba výzvu odeslat nejméně 7 dnů před podáním žaloby.' },
      { q: 'Kam výzvu poslat?', a: 'Na adresu dlužníka pro doručování, u firmy do sídla, a když ji neznáte, na poslední známou adresu. Rozhoduje, že jste výzvu prokazatelně odeslali – dlužník ji nemusí převzít.' },
      { q: 'Stačí výzva e-mailem?', a: 'Zákon formu nepředepisuje, ale u soudu musíte odeslání prokázat. Nejjistější je doporučený dopis s dodejkou nebo datová schránka. E-mail použijte jen jako doplněk.' },
      { q: 'Kolik je úrok z prodlení?', a: 'Ročně repo sazba ČNB platná k prvnímu dni pololetí, ve kterém prodlení začalo, plus 8 procentních bodů (nařízení vlády č. 351/2013 Sb.). Ve výzvě stačí úrok požadovat.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dokument se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 142a zákona č. 99/1963 Sb., občanský soudní řád, § 1970 zákona č. 89/2012 Sb., občanský zákoník, a nařízení vlády č. 351/2013 Sb.",
    souvisejiciPopis: "Další dokumenty k penězům a dluhům, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit předžalobní výzvu online – PDF zdarma",
    description: "Průvodce předžalobní výzvou k zaplacení podle § 142a OSŘ. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
