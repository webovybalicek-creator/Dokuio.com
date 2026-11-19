import type { StrankaDokumentu } from '../typy';
import { vypovedZNajmu as sablona } from '../../sablony/sk/vypoved-z-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Výpoveď z nájmu bytu',
  nazevA: 'výpoveď z nájmu bytu',
  katalog: { popis: 'Výpoveď nájomcu s trojmesačnou lehotou.', kategorie: 'byvanie', ilustrace: 'protokol', slova: ['výpoveď z nájmu', 'výpoveď nájomnej zmluvy', 'nájomca', 'sťahovanie', 'výpovedná lehota'] },
  souvisejici: 'byvanie',
  landing: {
    title: 'Výpoveď z nájmu bytu {rok} – vzor zadarmo v PDF',
    description: 'Výpoveď nájmu bytu nájomcom podľa § 710 Občianskeho zákonníka: trojmesačná lehota, bez udania dôvodu, vrátenie zábezpeky. PDF aj Word zadarmo.',
    perex: 'Sťahujete sa? Nájomca môže vypovedať nájom bez udania dôvodu, výpovedná lehota je tri mesiace.',
    obsahPopis: 'Výpoveď nájomcu podľa § 710 Občianskeho zákonníka.',
    obsah: [{ nazev: 'Prenajímateľ', popis: 'Komu výpoveď doručujete.' }, { nazev: 'Výpoveď', popis: 'Byt, zmluva, lehota a vrátenie zábezpeky.' }],
    kroky: [
      { nazev: 'Vyplňte', popis: 'Byt a dátum zmluvy.' },
      { nazev: 'Stiahnite a podpíšte', popis: 'PDF alebo Word zadarmo.' },
      { nazev: 'Doručte preukázateľne', popis: 'Doporučene alebo osobne proti podpisu.' },
    ],
    online: ['Správny text podľa zákona', 'Orientačný koniec nájmu do kalendára', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['ste nájomca a chcete sa odsťahovať', 'nájom podľa Občianskeho zákonníka'],
    nehodiSe: ['ste prenajímateľ – výpoveď nájomcovi je možná len z dôvodov § 711', 'krátkodobý nájom podľa zákona č. 98/2014 Z. z.', 'chcete skončiť skôr – dohodnite sa s prenajímateľom písomne'],
    poNadpis: 'Po doručení.',
    po: [
      { nazev: 'Výpovedná lehota', popis: 'Tri mesiace od prvého dňa mesiaca po doručení.' },
      { nazev: 'Odovzdanie bytu', popis: 'S preberacím protokolom.' },
      { nazev: 'Zábezpeka', popis: 'Vráti sa po skončení nájmu.' },
    ],
    faq: [
      { q: 'Aká dlhá je výpovedná lehota?', a: 'Tri mesiace. Začína plynúť prvým dňom mesiaca nasledujúceho po mesiaci, v ktorom bola výpoveď doručená.' },
      { q: 'Musím uviesť dôvod?', a: 'Nie. Občiansky zákonník nestanovuje výpovedné dôvody pre nájomcu.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Výpoveď vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 710 zákona č. 40/1964 Zb., Občiansky zákonník (platí do 30. 6. 2027).',
    souvisejiciPopis: 'Ďalšie dokumenty k bývaniu, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť výpoveď z nájmu bytu online – PDF zadarmo',
    description: 'Výpoveď nájmu bytu nájomcom podľa slovenského práva. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 2 minúty',
  },
};

export default stranka;
