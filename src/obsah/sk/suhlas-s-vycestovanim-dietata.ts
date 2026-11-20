import type { StrankaDokumentu } from '../typy';
import { suhlasSVycestovanimDietata as sablona } from '../../sablony/sk/suhlas-s-vycestovanim-dietata';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Súhlas s vycestovaním dieťaťa',
  nazevA: 'súhlas s vycestovaním dieťaťa',
  katalog: {
    popis: 'Cesta dieťaťa do zahraničia bez rodičov alebo s jedným z nich.',
    kategorie: 'rodina',
    ilustrace: 'plnamoc',
    slova: ['súhlas s vycestovaním dieťaťa', 'súhlas rodiča', 'splnomocnenie pre dieťa do zahraničia', 'cesta dieťaťa', 'dovolenka so starými rodičmi', 'tábor v zahraničí', 'maloleté dieťa', 'vycestovanie'],
  },
  souvisejici: 'rodina',
  landing: {
    title: 'Súhlas s vycestovaním dieťaťa {rok} – vzor PDF zadarmo',
    description: 'Súhlas rodičov s cestou dieťaťa do zahraničia: dieťa, sprievod, krajina a termín. S tipmi k osvedčeniu podpisu u notára. PDF aj Word zadarmo.',
    perex: 'Dieťa ide k moru so starými rodičmi, na tábor alebo s jedným z rodičov? Písomný súhlas zákonného zástupcu sa odporúča a niektoré krajiny ho vyžadujú.',
    obsahPopis: 'Súhlas zákonných zástupcov s menovitým sprievodom, krajinou a termínom cesty.',
    obsah: [
      { nazev: 'Zákonní zástupcovia', popis: 'Rodičia – meno, dátum narodenia, číslo dokladu, telefón.' },
      { nazev: 'Súhlas', popis: 'Dieťa, sprievod, cieľová a tranzitné krajiny, termín a účel cesty.' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Mená a čísla dokladov presne podľa pasov a občianskych preukazov.' },
      { nazev: 'Overte podmienky krajiny', popis: 'Na zastupiteľskom úrade cieľovej krajiny.' },
      { nazev: 'Podpíšte u notára', popis: 'Ak krajina vyžaduje osvedčený podpis – obec ho na listinu do cudziny neosvedčí.' },
    ],
    online: ['Varianty sprievodu (rodič, iná osoba, samo)', 'Tipy k osvedčeniu podpisu a podmienkam krajín', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['dieťa cestuje so starými rodičmi, príbuznými, na tábor alebo so školou', 'dieťa cestuje s jedným z rodičov', 'dieťa cestuje samo'],
    nehodiSe: ['vysťahovanie dieťaťa do cudziny – pri nezhode rodičov rozhoduje súd', 'cieľová krajina vyžaduje vlastný formulár alebo text v cudzom jazyku – použite ten'],
    poNadpis: 'Pred cestou.',
    po: [
      { nazev: 'Podmienky krajiny', popis: 'Forma, jazyk a osvedčenie podpisu podľa zastupiteľského úradu.' },
      { nazev: 'Doklady so sebou', popis: 'Originál súhlasu, cestovný doklad dieťaťa, ideálne kópia rodného listu.' },
      { nazev: 'Kontakt na rodičov', popis: 'Telefón je v súhlase – majte ho počas cesty zapnutý.' },
    ],
    faq: [
      { q: 'Je súhlas povinný?', a: 'Slovenský štát ho pri bežných cestách nepredpisuje, ale odporúča sa, keď dieťa cestuje bez rodičov, a niektoré krajiny ho vyžadujú. Overte si to na zastupiteľskom úrade cieľovej krajiny.' },
      { q: 'Kto osvedčí podpis?', a: 'Na listinu, ktorá sa má použiť v cudzine, podpis obec ani okresný úrad neosvedčia (zákon č. 78/2026 Z. z.). Osvedčuje ho notár.' },
      { q: 'Musí byť súhlas v cudzom jazyku?', a: 'Závisí od krajiny. Jazyk a formu vám povie jej zastupiteľský úrad; prípadný preklad alebo osvedčenie riešte s notárom.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Súhlas vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z odporúčaní na slovensko.sk (cestovanie detí), zákona č. 78/2026 Z. z. o osvedčovaní listín a podpisov, § 58 Notárskeho poriadku a § 35 zákona č. 36/2005 Z. z. o rodine. Podmienky krajín sa líšia a menia – overte ich pred cestou.',
    souvisejiciPopis: 'Ďalšie užitočné dokumenty, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť súhlas s vycestovaním dieťaťa online – PDF zadarmo',
    description: 'Súhlas rodičov s cestou dieťaťa do zahraničia so sprievodom, krajinou a termínom. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty',
  },
};

export default stranka;
