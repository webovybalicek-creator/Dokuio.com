import type { StrankaDokumentu } from '../typy';
import { dohodaOSkonceniNajmu as sablona } from '../../sablony/cz/dohoda-o-skonceni-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Dohoda o skončení nájmu",
  nazevA: "dohodu o skončení nájmu",
  katalog: {
    popis: "Ukončení nájmu bytu dohodou, včetně vrácení kauce.",
    kategorie: "bydleni",
    ilustrace: "protokol",
    slova: ["dohoda","skončení nájmu","ukončení nájmu","byt","kauce","jistota"],
  },
  souvisejici: 'bydleni',
  landing: {
    title: "Dohoda o skončení nájmu bytu {rok} – vzor PDF zdarma",
    description: "Dohoda o skončení nájmu bytu zdarma: den skončení, odevzdání bytu, vrácení kauce, vyúčtování služeb. PDF i Word.",
    perex: "Nejrychlejší a nejklidnější konec nájmu: datum si určíte sami, bez výpovědní doby. Včetně vrácení kauce.",
    obsahPopis: "Tři krátké články, nájem končí dohodou stran.",
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Pronajímatel a nájemce.' },
      { nazev: 'Skončení nájmu', popis: 'Den skončení, odevzdání bytu, platby do konce.' },
      { nazev: 'Jistota a další ujednání', popis: 'Kdy a kam se vrátí kauce, malování, vybavení.' },
    ],
    kroky: [
      { nazev: 'Domluvte datum', popis: 'Konec nájmu a odevzdání bytu.' },
      { nazev: 'Dohodněte kauci', popis: 'Kdy a kam se vrátí.' },
      { nazev: 'Podepište', popis: 'Oba, dva výtisky.' },
    ],
    online: ['Vrácení kauce jedním kliknutím', 'Navazuje na předávací protokol', 'Podpis na obrazovce', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['obě strany chtějí nájem ukončit', 'nájemce chce odejít dřív, než dovolí výpověď', 'chcete jasně vyřešit kauci a vyúčtování'],
    nehodiSe: ['druhá strana nesouhlasí – zbývá výpověď', 'spor o dluhy nebo škodu – poraďte se s advokátem', 'podnájem – dohodu uzavírá podnájemník s nájemcem'],
    poNadpis: "Po podpisu.",
    po: [
      { nazev: 'Předávací protokol', popis: 'Při odevzdání bytu.' },
      { nazev: 'Energie', popis: 'Odhlášení nebo přepis elektřiny a plynu.' },
      { nazev: 'Kauce a vyúčtování', popis: 'Hlídejte dohodnutý termín.' },
    ],
    faq: [
      { q: 'Lze nájem ukončit kdykoli dohodou?', a: 'Ano, dohodou lze nájem ukončit kdykoli, bez výpovědní doby i bez důvodu, pokud souhlasí obě strany.' },
      { q: 'Musí být dohoda písemná?', a: 'Doporučujeme ji vždy písemně – je to důkaz o datu skončení a o domluvě ohledně kauce.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dohoda se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází ze zákona č. 89/2012 Sb., občanský zákoník (§ 1981, § 2254 a § 2235 a násl.).",
    souvisejiciPopis: "Další dokumenty k bydlení, také zdarma.",
  },
  vytvorit: {
    title: "Vyplnit dohodu o skončení nájmu bytu online – PDF zdarma",
    description: "Průvodce dohodou o skončení nájmu bytu včetně vrácení kauce. PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
