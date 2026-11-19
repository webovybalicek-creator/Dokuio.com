import type { StrankaDokumentu } from '../typy';
import { podnajemniSmlouva as sablona } from '../../sablony/cz/podnajemni-smlouva';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Podnájemní smlouva',
  nazevA: 'podnájemní smlouvu',
  katalog: {
    popis: 'Podnájem pokoje nebo celého bytu od nájemce.',
    kategorie: 'bydleni',
    ilustrace: 'protokol',
    slova: ['podnájem', 'podnajmout', 'pokoj', 'spolubydlící', 'smlouva o podnájmu', 'podnájemník', 'byt'],
  },
  souvisejici: 'bydleni',
  landing: {
    title: 'Podnájemní smlouva {rok} – vzor PDF zdarma (pokoj i celý byt)',
    description:
      'Podnájemní smlouva na pokoj nebo celý byt zdarma: souhlas pronajímatele, doba, podnájemné, kauce, výpověď. Podle § 2274 OZ. PDF i Word.',
    perex:
      'Když nájemce přenechává pokoj nebo celý byt dalšímu člověku. Hlídá souhlas pronajímatele a to, že podnájem končí spolu s nájmem.',
    obsahPopis: 'Pět článků podle § 2215 a § 2274 a násl. občanského zákoníku.',
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Nájemce a podnájemce.' },
      { nazev: 'Předmět podnájmu', popis: 'Byt, z jaké nájemní smlouvy, pokoj nebo celý byt, souhlas pronajímatele.' },
      { nazev: 'Doba podnájmu', popis: 'Od kdy do kdy, konec spolu s nájmem, výpověď.' },
      { nazev: 'Podnájemné a kauce', popis: 'Částka, splatnost, služby a energie, vrácení kauce.' },
      { nazev: 'Práva a povinnosti', popis: 'Užívání bytu, odevzdání, závěrečná ustanovení.' },
    ],
    kroky: [
      { nazev: 'Ověřte nájem', popis: 'Nájemní smlouva nájemce a případně souhlas pronajímatele.' },
      { nazev: 'Vyplňte podmínky', popis: 'Pokoj nebo byt, doba, podnájemné, kauce.' },
      { nazev: 'Podepište', popis: 'Oba, dva výtisky, souhlas jako příloha.' },
    ],
    online: ['Pokoj i celý byt', 'Hlídá souhlas pronajímatele', 'Částka slovy automaticky', 'Stažení v PDF i ve Wordu'],
    hodiSe: [
      'podnajímáte pokoj v bytě, kde sami bydlíte',
      'podnajímáte celý byt a máte písemný souhlas pronajímatele',
      'jste podnájemce a chcete mít podmínky černé na bílém',
    ],
    nehodiSe: [
      'pronajímáte vlastní byt – použijte nájemní smlouvu',
      'byt „podnajímá“ firma, která v něm nebydlí – ve skutečnosti jde o nájem',
      'nemáte souhlas pronajímatele k podnájmu celého bytu – nejdřív si o něj písemně požádejte',
    ],
    po: [
      { nazev: 'Předávací protokol', popis: 'Stav pokoje nebo bytu, měřiče a klíče.' },
      { nazev: 'Počet osob v domě', popis: 'Nájemce oznámí pronajímateli, že v bytě bydlí další člověk.' },
      { nazev: 'Daně', popis: 'Příjem z podnájmu je u nájemce zdanitelný příjem.' },
    ],
    faq: [
      {
        q: 'Potřebuji souhlas pronajímatele?',
        a: 'Pokud v bytě sami trvale bydlíte a podnajímáte jen část (pokoj), souhlas nepotřebujete. K podnájmu celého bytu, nebo když v bytě nebydlíte, je potřeba písemný souhlas pronajímatele (§ 2274 a § 2275 OZ). Smlouva o nájmu ho může podnájem i zakazovat.',
      },
      {
        q: 'Co když pronajímatel na žádost nereaguje?',
        a: 'Občanský zákoník počítá s tím, že když pronajímatel na písemnou žádost do jednoho měsíce neodpoví, souhlas se považuje za udělený – ledaže nájemní smlouva podnájem zakazuje. Bezpečnější je mít souhlas výslovně písemně.',
      },
      {
        q: 'Co se stane s podnájmem, když skončí nájem?',
        a: 'Podnájem skončí spolu s nájmem nájemce. Podnájemce nemá právo na náhradní bydlení, proto je dobré vědět, do kdy má nájemce byt najatý.',
      },
      {
        q: 'Je to podnájem, když mi byt pronajímá firma?',
        a: 'Podle společného stanoviska Ministerstva pro místní rozvoj a Ministerstva spravedlnosti z ledna 2026 jde o nájem, pokud firma byt v rámci podnikání přenechává koncovému uživateli a sama v něm nebydlí. Pak platí ochrana nájemce.',
      },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Smlouva se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: 'Vzor vychází ze zákona č. 89/2012 Sb., občanský zákoník (§ 2215, § 2216 a § 2274–2278).',
    souvisejiciPopis: 'Další dokumenty k bydlení, také zdarma.',
  },
  vytvorit: {
    title: 'Vyplnit podnájemní smlouvu online – PDF zdarma',
    description: 'Průvodce podnájemní smlouvou na pokoj nebo celý byt: souhlas pronajímatele, podnájemné, kauce. PDF nebo Word zdarma.',
    podnadpis: 'Zdarma · výsledek v PDF i ve Wordu · zabere asi 4 minuty',
  },
};

export default stranka;
