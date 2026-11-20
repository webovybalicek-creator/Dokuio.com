import type { StrankaDokumentu } from '../typy';
import { vypovedPracovniPomer as sablona } from '../../sablony/cz/vypoved-pracovni-pomer';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Výpověď z pracovního poměru',
  nazevA: 'výpověď z pracovního poměru',
  katalog: {
    popis: 'Výpověď zaměstnance nebo návrh dohody o skončení.',
    kategorie: 'prace',
    ilustrace: 'protokol',
    slova: ['výpověď', 'práce', 'zaměstnání', 'zaměstnanec', 'zaměstnavatel', 'pracovní poměr', 'dohoda o rozvázání', 'výpovědní doba', 'odchod z práce', 'zákoník práce'],
  },
  souvisejici: 'prace',
  landing: {
    title: 'Výpověď z pracovního poměru {rok} – vzor PDF zdarma',
    description: 'Vzor výpovědi zaměstnance podle zákoníku práce po novele 2025: výpovědní doba 2 měsíce od doručení, nebo návrh dohody k datu. PDF i Word zdarma.',
    perex: 'Odcházíte z práce? Výpověď zaměstnance bez udání důvodu s výpovědní dobou, která od června 2025 běží už ode dne doručení. Nebo návrh dohody o skončení k datu, které si zvolíte.',
    obsahPopis: 'Krátký dopis zaměstnavateli podle § 49 až § 51 zákoníku práce.',
    obsah: [
      { nazev: 'Zaměstnanec', popis: 'Jméno, datum narození nebo osobní číslo, adresa, pozice.' },
      { nazev: 'Zaměstnavatel', popis: 'Název, IČO a sídlo – lze načíst z registru.' },
      { nazev: 'Skončení pracovního poměru', popis: 'Výpověď s výpovědní dobou, nebo návrh dohody ke dni.' },
      { nazev: 'Další žádosti', popis: 'Potvrzení převzetí, potvrzení o zaměstnání, pracovní posudek.' },
    ],
    kroky: [
      { nazev: 'Výpověď, nebo dohoda', popis: 'Průvodce vysvětlí rozdíl.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma, podpis vlastní rukou.' },
      { nazev: 'Předejte osobně', popis: 'A na kopii si nechte potvrdit datum převzetí.' },
    ],
    online: ['Text podle aktuálního zákoníku práce (novela od 1. 6. 2025)', 'Výpověď i návrh dohody v jednom', 'Konec výpovědní doby do kalendáře', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['jste zaměstnanec a chcete odejít z práce', 'chcete skončit dřív než za 2 měsíce a navrhnout dohodu k datu', 'potřebujete připomenout potvrzení o zaměstnání a posudek'],
    nehodiSe: ['jste zaměstnavatel – výpověď zaměstnanci smí mít jen zákonné důvody, poraďte se s advokátem', 'jste ve zkušební době – stačí zrušení ve zkušební době', 'pracujete na dohodu o provedení práce nebo pracovní činnosti – ty se ukončují podle dohody', 'chcete okamžitě zrušit pracovní poměr kvůli nevyplacené mzdě – má přísné podmínky'],
    poNadpis: 'Po předání.',
    po: [
      { nazev: 'Výpovědní doba', popis: 'Začíná dnem doručení, trvá nejméně 2 měsíce. Pracujete a dostáváte mzdu.' },
      { nazev: 'Předání práce a věcí', popis: 'Notebook, klíče, karty – nechte si vrácení potvrdit.' },
      { nazev: 'Potvrzení o zaměstnání', popis: 'Zaměstnavatel ho vydá při skončení.' },
    ],
    faq: [
      { q: 'Jak dlouhá je výpovědní doba?', a: 'Nejméně 2 měsíce. Delší je jen tehdy, když ji zaměstnanec se zaměstnavatelem písemně sjednali – a musí platit stejně pro obě strany.' },
      { q: 'Kdy začíná výpovědní doba běžet?', a: 'Od 1. 6. 2025 dnem, kdy byla výpověď doručena zaměstnavateli, a končí dnem, který se s ním číslem shoduje. Doručíte-li výpověď 10. 3., pracovní poměr skončí 10. 5. Když takový den v měsíci není, končí posledním dnem měsíce.' },
      { q: 'Musím uvést důvod výpovědi?', a: 'Ne. Zaměstnanec může dát výpověď z jakéhokoli důvodu nebo bez udání důvodu.' },
      { q: 'Jak výpověď doručit?', a: 'Zpravidla osobním předáním zaměstnavateli; na vaši žádost vám musí převzetí písemně potvrdit. Lze ji poslat i do datové schránky zaměstnavatele nebo podepsanou elektronicky na adresu, kterou k tomu zaměstnavatel určil.' },
      { q: 'Můžu výpověď vzít zpět?', a: 'Jen se souhlasem zaměstnavatele. Odvolání výpovědi i souhlas s ním musí být písemné.' },
    ],
    zakony: 'Vzor vychází z § 49, § 50, § 51, § 313, § 314 a § 337 zákona č. 262/2006 Sb., zákoník práce, ve znění účinném od 1. 6. 2025, a z informací MPSV k flexibilní novele zákoníku práce.',
    souvisejiciPopis: 'Další dokumenty, které se hodí při změně práce, také zdarma.',
  },
  vytvorit: {
    title: 'Vyplnit výpověď z pracovního poměru online – PDF zdarma',
    description: 'Průvodce výpovědí zaměstnance nebo návrhem dohody o rozvázání pracovního poměru. Stáhněte PDF nebo Word zdarma.',
    podnadpis: 'Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty',
  },
};

export default stranka;
