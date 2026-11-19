import type { StrankaDokumentu } from '../typy';
import { vypovedNajmuNajemce as sablona } from '../../sablony/cz/vypoved-najmu-najemce';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Výpověď z nájmu bytu",
  nazevA: "výpověď z nájmu bytu",
  katalog: {
    popis: "Výpověď nájemce – doba neurčitá i určitá.",
    kategorie: "bydleni",
    ilustrace: "protokol",
    slova: ["výpověď","nájem","byt","odstěhování","ukončení nájmu","nájemce"],
  },
  souvisejici: 'bydleni',
  landing: {
    title: "Výpověď z nájmu bytu {rok} – vzor PDF zdarma",
    description: "Výpověď nájmu bytu nájemcem zdarma: doba neurčitá i určitá, tříměsíční výpovědní doba, vrácení kauce. PDF i Word.",
    perex: "Stěhujete se? Výpověď nájemce s tříměsíční výpovědní dobou – u nájmu na dobu neurčitou bez udání důvodu, u doby určité při změně okolností.",
    obsahPopis: "Výpověď nájemce podle § 2231 a § 2287 občanského zákoníku.",
    obsah: [
      { nazev: 'Pronajímatel', popis: 'Komu výpověď doručujete.' },
      { nazev: 'Výpověď', popis: 'Byt, smlouva, typ nájmu, případně důvod, výpovědní doba a vrácení kauce.' },
    ],
    kroky: [
      { nazev: 'Vyberte typ nájmu', popis: 'Najdete ho v nájemní smlouvě.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma.' },
      { nazev: 'Doručte prokazatelně', popis: 'Doporučeně s dodejkou nebo osobně proti podpisu.' },
    ],
    online: ['Správný text podle typu nájmu', 'Vysvětlená výpovědní doba', 'Žádost o vrácení kauce', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['jste nájemce a chcete se odstěhovat', 'máte nájem na dobu neurčitou', 'u doby určité se vám zásadně změnily okolnosti'],
    nehodiSe: ['jste pronajímatel – výpověď nájemci má přísné náležitosti (důvod, poučení o přezkumu), poraďte se s advokátem', 'chcete skončit dřív, než dovolí výpověď – použijte dohodu o skončení nájmu', 'podnájem – vypovídá se nájemci, ne vlastníkovi'],
    poNadpis: "Po doručení.",
    po: [
      { nazev: 'Výpovědní doba', popis: 'Tři měsíce od prvního dne měsíce po doručení.' },
      { nazev: 'Předání bytu', popis: 'Domluvte termín a sepište předávací protokol.' },
      { nazev: 'Kauce zpět', popis: 'Po skončení nájmu s úroky, snížená o případné dluhy.' },
    ],
    faq: [
      { q: 'Jak dlouhá je výpovědní doba?', a: 'Tři měsíce. Začíná prvním dnem kalendářního měsíce následujícího po doručení výpovědi pronajímateli.' },
      { q: 'Můžu vypovědět nájem na dobu určitou?', a: 'Ano, pokud se změnily okolnosti, z nichž jste při uzavření smlouvy vycházeli, tak, že po vás nelze rozumně chtít, abyste v nájmu pokračovali. Důvod uveďte ve výpovědi.' },
      { q: 'Musím uvádět důvod?', a: 'U nájmu na dobu neurčitou ne. U doby určité ano – změnu okolností.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Výpověď se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 2231, § 2286 a § 2287 zákona č. 89/2012 Sb., občanský zákoník, a letáku Veřejného ochránce práv „Nájem bytu“.",
    souvisejiciPopis: "Další dokumenty k bydlení, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit výpověď z nájmu bytu online – PDF zdarma",
    description: "Průvodce výpovědí nájmu bytu nájemcem. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
