import type { StrankaDokumentu } from '../typy';
import { predavaciProtokolByt as sablona } from '../../sablony/cz/predavaci-protokol-byt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Předávací protokol k bytu",
  nazevA: "předávací protokol k bytu",
  katalog: {
    popis: "Stav bytu, měřiče a klíče při nastěhování i odchodu.",
    kategorie: "bydleni",
    ilustrace: "protokol",
    slova: ["předávací protokol","byt","nájem","měřiče","stěhování","předání bytu"],
  },
  souvisejici: 'bydleni',
  landing: {
    title: "Předávací protokol k bytu {rok} – vzor PDF zdarma",
    description: "Předávací protokol k bytu zdarma: stavy měřičů, stav bytu a vady, vybavení, klíče. Při nastěhování i odchodu. PDF i Word.",
    perex: "Při nastěhování i při odchodu. Zapíše stav bytu, měřiče, vybavení a klíče – hlavní důkaz, když se pak řeší kauce.",
    obsahPopis: "Tři části podle doporučení příručky „Jak pronajmout byt?“.",
    obsah: [
      { nazev: 'Strany a byt', popis: 'Pronajímatel, nájemce, byt, odkaz na nájemní smlouvu, začátek nebo konec nájmu.' },
      { nazev: 'Stavy měřičů', popis: 'Elektřina, plyn, voda, teplo.' },
      { nazev: 'Stav, vybavení a klíče', popis: 'Vady, vybavení, klíče a čipy, dohoda o odstranění vad.' },
    ],
    kroky: [
      { nazev: 'Projděte byt spolu', popis: 'Místnost po místnosti, za denního světla.' },
      { nazev: 'Opište měřiče', popis: 'A vyfoťte je.' },
      { nazev: 'Podepište', popis: 'Na obrazovce nebo na papíře, dva výtisky.' },
    ],
    online: ['Údaje převezmeme z nájemní smlouvy', 'Všechny měřiče na jednom místě', 'Podpis prstem na telefonu', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['nastěhování do nájemního bytu', 'vrácení bytu po skončení nájmu', 'předání bytu mezi rodinou nebo při prodeji'],
    nehodiSe: ['předání auta – použijte předávací protokol k vozidlu', 'předání nebytových prostor s technologiemi – rozšiřte o vlastní body', 'spor o škodu už probíhá – poraďte se s advokátem'],
    poNadpis: "Po podpisu.",
    po: [
      { nazev: 'Uschovejte fotky', popis: 'S datem, k protokolu.' },
      { nazev: 'Nahlaste měřiče', popis: 'Dodavatelům energií a správci domu.' },
      { nazev: 'Porovnejte při odchodu', popis: 'Rozdíl nad běžné opotřebení řeší jistota.' },
    ],
    faq: [
      { q: 'Je předávací protokol povinný?', a: 'Zákon ho nevyžaduje, ale je to nejlepší důkaz o stavu bytu. Bez něj se o kauci a škodách těžko rozhoduje.' },
      { q: 'Co je běžné opotřebení?', a: 'Změny, které vzniknou obvyklým bydlením (vybledlá malba, drobné stopy po nábytku). Za ty nájemce neodpovídá; za poškození nad jejich rámec ano.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Protokol se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází ze zákona č. 89/2012 Sb., občanský zákoník, a doporučení příručky „Jak pronajmout byt?“ (Iuridicum Remedium, s podporou MMR).",
    souvisejiciPopis: "Další dokumenty k bydlení, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit předávací protokol k bytu online – PDF zdarma",
    description: "Průvodce předávacím protokolem k bytu: měřiče, stav, vybavení, klíče. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty",
  },
};

export default stranka;
