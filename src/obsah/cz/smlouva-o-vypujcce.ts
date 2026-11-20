import type { StrankaDokumentu } from '../typy';
import { smlouvaOVypujcce as sablona } from '../../sablony/cz/smlouva-o-vypujcce';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Smlouva o výpůjčce",
  nazevA: "smlouvu o výpůjčce",
  katalog: {"popis": "Bezplatné půjčení věci – vozík, nářadí, auto, vybavení.", "kategorie": "veci", "ilustrace": "protokol", "slova": ["smlouva o výpůjčce", "výpůjčka", "půjčení věci", "půjčitel", "vypůjčitel", "zapůjčení"]},
  souvisejici: "bezne",
  landing: {
  "title": "Smlouva o výpůjčce {rok} – vzor zdarma (PDF, Word)",
  "description": "Vzor smlouvy o výpůjčce podle § 2193 OZ zdarma: bezplatné půjčení věci, stav při předání, doba, vrácení a náklady. Vyplňte online, stáhněte PDF nebo Word.",
  "perex": "Půjčujete vozík, nářadí, auto nebo vybavení zadarmo? Smlouva o výpůjčce zachytí, co jste půjčili, v jakém stavu a kdy se to vrátí.",
  "obsahPopis": "Pět článků podle § 2193 a násl. občanského zákoníku.",
  "obsah": [
    {
      "nazev": "Smluvní strany",
      "popis": "Půjčitel a vypůjčitel."
    },
    {
      "nazev": "Předmět výpůjčky",
      "popis": "Věc, stav při předání, hodnota, účel."
    },
    {
      "nazev": "Doba a vrácení",
      "popis": "Do určitého dne nebo do splnění účelu, místo vrácení, předčasné vrácení."
    },
    {
      "nazev": "Užívání věci",
      "popis": "Jak věc užívat, zákaz půjčení dál, náklady, škody."
    },
    {
      "nazev": "Závěrečná ustanovení",
      "popis": "Lhůta 3 měsíce na uplatnění práv, dvě vyhotovení."
    }
  ],
  "kroky": [
    {
      "nazev": "Popište věc",
      "popis": "Co půjčujete a v jakém stavu."
    },
    {
      "nazev": "Nastavte dobu",
      "popis": "Do kdy, nebo k jakému účelu."
    },
    {
      "nazev": "Podepište",
      "popis": "Dvě vyhotovení."
    }
  ],
  "online": [
    "Připomínka vrácení do kalendáře",
    "Vysvětlení ke každému poli",
    "Stažení v PDF i ve Wordu",
    "Prázdný vzor k ručnímu vyplnění"
  ],
  "hodiSe": [
    "půjčujete známému vozík, nářadí nebo auto",
    "zapůjčujete vybavení nebo techniku zdarma",
    "chcete mít doklad o stavu věci při předání"
  ],
  "nehodiSe": [
    "za půjčení chcete peníze – to je nájem",
    "půjčujete peníze – použijte smlouvu o zápůjčce"
  ],
  "po": [
    {
      "nazev": "Předání",
      "popis": "Prohlédněte věc a doplňte vady."
    },
    {
      "nazev": "Vrácení",
      "popis": "Připomínka v kalendáři."
    },
    {
      "nazev": "Kontrola",
      "popis": "Škody uplatněte do 3 měsíců od vrácení."
    }
  ],
  "faq": [
    {
      "q": "Jaký je rozdíl mezi výpůjčkou a zápůjčkou?",
      "a": "Výpůjčka je bezplatné půjčení konkrétní věci, která se vrací (§ 2193 OZ). Zápůjčka je půjčka peněz nebo jiných zastupitelných věcí, kde se vrací věc stejného druhu."
    },
    {
      "q": "Může půjčitel chtít věc zpět dřív?",
      "a": "Jen když ji vypůjčitel užívá v rozporu se smlouvou. Kvůli vlastní nepředvídané potřebě jen tehdy, je-li to ve smlouvě ujednáno (§ 2198 OZ) – náš vzor to ujednává."
    },
    {
      "q": "Kdo platí běžné náklady?",
      "a": "Obvyklé náklady spojené s užíváním věci nese vypůjčitel (§ 2199 OZ)."
    },
    {
      "q": "Do kdy můžu chtít náhradu škody?",
      "a": "Práva z výpůjčky je nutné uplatnit do tří měsíců od vrácení věci (§ 2200 OZ)."
    },
    {
      "q": "Ukládáte moje údaje?",
      "a": "Ne. Dokument se skládá přímo ve vašem prohlížeči."
    }
  ],
  "zakony": "Vzor vychází z § 2193–2200 zákona č. 89/2012 Sb., občanský zákoník.",
  "souvisejiciPopis": "Další běžné dokumenty, také zdarma."
},
  vytvorit: {"title": "Vyplnit smlouvu o výpůjčce online – PDF zdarma", "description": "Průvodce smlouvou o výpůjčce. Stáhněte PDF nebo Word zdarma.", "podnadpis": "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty"},
};

export default stranka;
