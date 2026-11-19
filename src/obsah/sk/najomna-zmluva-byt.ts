import type { StrankaDokumentu } from '../typy';
import { najomnaZmluvaByt as sablona } from '../../sablony/sk/najomna-zmluva-byt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Nájomná zmluva na byt',
  nazevA: 'nájomnú zmluvu na byt',
  katalog: { popis: 'Prenájom bytu podľa Občianskeho zákonníka.', kategorie: 'byvanie', ilustrace: 'protokol', slova: ['nájomná zmluva', 'prenájom bytu', 'nájom', 'zábezpeka', 'kaucia', 'prenajímateľ', 'nájomca'] },
  souvisejici: 'byvanie',
  landing: {
    title: 'Nájomná zmluva na byt {rok} – vzor zadarmo v PDF',
    description: 'Nájomná zmluva na byt podľa slovenského Občianskeho zákonníka: nájomné, zálohy, zábezpeka, drobné opravy, skončenie nájmu. PDF aj Word zadarmo.',
    perex: 'Prenajímate alebo si prenajímate byt? Zmluva podľa § 685 a nasl. Občianskeho zákonníka s nájomným, zálohami, zábezpekou a pravidlami skončenia.',
    obsahPopis: 'Nájomná zmluva podľa § 685 a nasl. zákona č. 40/1964 Zb.',
    obsah: [
      { nazev: 'Strany a byt', popis: 'Prenajímateľ, nájomca, adresa, príslušenstvo, vybavenie.' },
      { nazev: 'Doba nájmu', popis: 'Určitý alebo neurčitý čas, odovzdanie bytu.' },
      { nazev: 'Platby a zábezpeka', popis: 'Nájomné, zálohy, splatnosť, kaucia a jej vrátenie.' },
      { nazev: 'Práva, povinnosti a skončenie', popis: 'Drobné opravy, podnájom, zvieratá, výpoveď.' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Strany, byt, doba a platby.' },
      { nazev: 'Stiahnite PDF alebo Word', popis: 'Zadarmo, bez registrácie.' },
      { nazev: 'Podpíšte a odovzdajte byt', popis: 'S preberacím protokolom.' },
    ],
    online: ['Nájomné a zábezpeka slovom', 'Pripomienky platieb do kalendára', 'Nadväzný preberací protokol', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['prenajímate svoj byt súkromnej osobe', 'nájom na určitý aj neurčitý čas', 'chcete jasné pravidlá platieb a zábezpeky'],
    nehodiSe: ['krátkodobý nájom podľa zákona č. 98/2014 Z. z. – má osobitné pravidlá', 'nebytové priestory a podnikanie', 'nájom od 1. 7. 2027 – vtedy platí nový Občiansky zákonník'],
    poNadpis: 'Po podpise.',
    po: [
      { nazev: 'Preberací protokol', popis: 'Stavy meračov, vady a kľúče pri odovzdaní.' },
      { nazev: 'Zábezpeka', popis: 'Prevodom alebo proti potvrdeniu.' },
      { nazev: 'Energie', popis: 'Nájomca si prepíše elektrinu a plyn.' },
    ],
    faq: [
      { q: 'Musí byť nájomná zmluva písomná?', a: 'Občiansky zákonník to výslovne nevyžaduje, ale písomná zmluva je jediný spoľahlivý dôkaz o nájomnom, zábezpeke a dobe nájmu.' },
      { q: 'Aká je výpovedná lehota?', a: 'Tri mesiace. Začína plynúť prvým dňom mesiaca nasledujúceho po doručení výpovede (§ 710 Občianskeho zákonníka).' },
      { q: 'Môže prenajímateľ dať výpoveď kedykoľvek?', a: 'Nie. Nájom na neurčitý čas môže prenajímateľ vypovedať len z dôvodov uvedených v § 711 Občianskeho zákonníka.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Zmluva vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 685 až § 716 zákona č. 40/1964 Zb., Občiansky zákonník, a nariadenia vlády č. 87/1995 Z. z. Platí do 30. 6. 2027.',
    souvisejiciPopis: 'Ďalšie dokumenty k bývaniu, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť nájomnú zmluvu na byt online – PDF zadarmo',
    description: 'Sprievodca nájomnou zmluvou na byt podľa slovenského práva. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 5 minút',
  },
};

export default stranka;
