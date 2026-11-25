import type { StrankaDokumentu } from '../typy';
import { souhlasTrvalyPobyt as sablona } from '../../sablony/cz/souhlas-trvaly-pobyt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Souhlas s trvalým pobytem",
  nazevA: "souhlas s trvalým pobytem",
  katalog: {
    popis: "Souhlas vlastníka nebo nájemce s přihlášením na adresu.",
    kategorie: "bydleni",
    ilustrace: "plnamoc",
    slova: ["trvalý pobyt","trvalé bydliště","přihlášení","souhlas vlastníka","ohlašovna","byt"],
  },
  souvisejici: 'bezne',
  landing: {
    title: "Souhlas majitele s trvalým pobytem {rok} – vzor PDF zdarma",
    description: "Souhlas vlastníka nebo nájemce s přihlášením k trvalému pobytu zdarma. Vyplňte online, stáhněte PDF nebo Word a nechte ověřit podpis.",
    perex: "Souhlas majitele s přihlášením k trvalému pobytu: vlastník nebo nájemce bytu potvrzuje, že se k němu někdo smí přihlásit. Podpis je potřeba úředně ověřit.",
    obsahPopis: "Písemné potvrzení oprávněné osoby podle § 10 zákona č. 133/2000 Sb., o evidenci obyvatel.",
    obsah: [
      { nazev: 'Oprávněná osoba', popis: 'Vlastník nebo nájemce – jméno, datum narození, adresa.' },
      { nazev: 'Souhlas', popis: 'Adresa bytu nebo domu a kdo se přihlašuje (i další osoby, např. děti).' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Adresu přesně s číslem popisným.' },
      { nazev: 'Ověřte podpis', popis: 'Oprávněná osoba na Czech POINTu, obecním úřadě nebo u notáře.' },
      { nazev: 'Na ohlašovnu', popis: 'Přihlašovaný přinese souhlas a občanku, nebo ohlásí změnu přes Portál občana.' },
    ],
    online: ['Přesné formulace podle zákona o evidenci obyvatel', 'Více přihlašovaných osob najednou', 'Tipy, kdy souhlas není potřeba', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['přihlašujete někoho do svého bytu nebo domu', 'jako nájemce dáváte souhlas spolubydlícímu', 'oprávněná osoba nemůže jít na ohlašovnu osobně'],
    nehodiSe: ['přihlašujete se do vlastního bytu – stačí výpis z katastru (úřad si ho ověří sám)', 'máte vlastní nájemní smlouvu na byt – doložíte ji', 'oprávněná osoba půjde na ohlašovnu s vámi – souhlas potvrdí tam'],
    poNadpis: "Po podpisu.",
    po: [
      { nazev: 'Ověření podpisu', popis: 'Bez něj ohlašovna souhlas nepřijme.' },
      { nazev: 'Ohlášení změny', popis: 'Na obecním úřadě v místě nového pobytu nebo elektronicky. Poplatek 50 Kč, děti do 15 let zdarma.' },
      { nazev: 'Nový občanský průkaz', popis: 'Podle pokynů ohlašovny.' },
    ],
    faq: [
      { q: 'Musí být podpis ověřený?', a: 'Ano, písemné potvrzení oprávněné osoby musí mít úředně ověřený podpis. Ověření není potřeba, pokud oprávněná osoba potvrdí souhlas osobně na ohlašovně.' },
      { q: 'Dává trvalý pobyt právo v bytě bydlet?', a: 'Ne. Trvalý pobyt je jen evidenční údaj o adrese. Právo bydlet vzniká z vlastnictví, nájmu nebo jiné dohody.' },
      { q: 'Může nájemce dát souhlas?', a: 'Ano, nájemce je oprávněná osoba. Na ohlašovně se doloží i nájemní smlouva.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Souhlas se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 10 zákona č. 133/2000 Sb., o evidenci obyvatel, a informací Ministerstva vnitra o hlášení trvalého pobytu.",
    souvisejiciPopis: "Další užitečné dokumenty, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit souhlas s trvalým pobytem online – PDF zdarma",
    description: "Průvodce souhlasem vlastníka s přihlášením k trvalému pobytu. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
