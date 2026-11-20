import type { StrankaDokumentu } from '../typy';
import { vypovedZPracovnehoPomeru as sablona } from '../../sablony/sk/vypoved-z-pracovneho-pomeru';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Výpoveď z pracovného pomeru',
  nazevA: 'výpoveď z pracovného pomeru',
  katalog: {
    popis: 'Výpoveď zamestnanca, návrh dohody alebo skončenie v skúšobnej dobe.',
    kategorie: 'praca',
    ilustrace: 'protokol',
    slova: ['výpoveď z pracovného pomeru', 'výpoveď zo zamestnania', 'výpoveď zamestnanca', 'výpovedná doba', 'dohoda o skončení pracovného pomeru', 'skúšobná doba', 'odchod z práce', 'zákonník práce'],
  },
  souvisejici: 'praca',
  landing: {
    title: 'Výpoveď z pracovného pomeru {rok} – vzor PDF zadarmo',
    description: 'Výpoveď zamestnanca podľa Zákonníka práce: výpovedná doba 1 alebo 2 mesiace, návrh dohody o skončení aj skončenie v skúšobnej dobe. PDF aj Word zadarmo.',
    perex: 'Odchádzate z práce? Ako zamestnanec môžete dať výpoveď bez udania dôvodu. Vzor vyberie správnu výpovednú dobu a ponúkne aj dohodu, ak chcete skončiť skôr.',
    obsahPopis: 'Výpoveď zamestnanca podľa § 61, § 62 a § 67 Zákonníka práce, alternatívne návrh dohody (§ 60) alebo skončenie v skúšobnej dobe (§ 72).',
    obsah: [
      { nazev: 'Zamestnávateľ a zamestnanec', popis: 'Komu výpoveď doručujete a kto odchádza.' },
      { nazev: 'Skončenie', popis: 'Výpoveď, návrh dohody alebo skúšobná doba – s dĺžkou výpovednej doby.' },
      { nazev: 'Ďalšie žiadosti', popis: 'Potvrdenie o zamestnaní, pracovný posudok, ponuka skončiť skôr.' },
    ],
    kroky: [
      { nazev: 'Vyberte spôsob', popis: 'Výpoveď, dohoda alebo skúšobná doba.' },
      { nazev: 'Vytlačte a podpíšte', popis: 'Dva výtlačky – jeden si nechajte potvrdiť.' },
      { nazev: 'Doručte', popis: 'Na pracovisku proti podpisu alebo poštou doporučene.' },
    ],
    online: ['Správna výpovedná doba podľa dĺžky pracovného pomeru', 'Orientačný koniec pracovného pomeru do kalendára', 'Žiadosť o potvrdenie o zamestnaní a posudok', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['ste zamestnanec a chcete odísť', 'chcete zamestnávateľovi navrhnúť dohodu o skončení', 'chcete skončiť v skúšobnej dobe'],
    nehodiSe: ['ste zamestnávateľ – výpoveď zamestnancovi je možná len z dôvodov podľa Zákonníka práce', 'okamžité skončenie pracovného pomeru', 'dohody o prácach mimo pracovného pomeru'],
    poNadpis: 'Po doručení.',
    po: [
      { nazev: 'Výpovedná doba', popis: 'Začína prvým dňom mesiaca po doručení a končí posledným dňom mesiaca.' },
      { nazev: 'Odovzdanie práce', popis: 'Pracovné pomôcky, kľúče a rozpracovanú agendu.' },
      { nazev: 'Doklady', popis: 'Potvrdenie o zamestnaní pri odchode, posudok do 15 dní od požiadania.' },
    ],
    faq: [
      { q: 'Aká dlhá je výpovedná doba?', a: 'Najmenej jeden mesiac. Ak váš pracovný pomer trval aspoň jeden rok, najmenej dva mesiace (§ 62 Zákonníka práce). Dlhšiu dobu môže určovať pracovná zmluva.' },
      { q: 'Odkedy plynie výpovedná doba?', a: 'Od prvého dňa kalendárneho mesiaca nasledujúceho po doručení výpovede a končí posledným dňom kalendárneho mesiaca. Rozhoduje deň doručenia, nie odoslania.' },
      { q: 'Musím uviesť dôvod?', a: 'Nie. Zamestnanec môže dať výpoveď z akéhokoľvek dôvodu alebo bez uvedenia dôvodu (§ 67 Zákonníka práce).' },
      { q: 'Môžem skončiť skôr?', a: 'Len dohodou so zamestnávateľom – pracovný pomer potom skončí dohodnutým dňom. Dohoda musí byť písomná (§ 60). Ak odídete skôr bez dohody, zamestnávateľ môže žiadať náhradu, ak je písomne dohodnutá v pracovnej zmluve.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Výpoveď vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 38, § 60 až § 62, § 67, § 72 a § 75 zákona č. 311/2001 Z. z., Zákonník práce.',
    souvisejiciPopis: 'Ďalšie užitočné dokumenty, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť výpoveď z pracovného pomeru online – PDF zadarmo',
    description: 'Výpoveď zamestnanca podľa Zákonníka práce, návrh dohody alebo skončenie v skúšobnej dobe. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 2 minúty',
  },
};

export default stranka;
