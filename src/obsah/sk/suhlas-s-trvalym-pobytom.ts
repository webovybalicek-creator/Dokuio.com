import type { StrankaDokumentu } from '../typy';
import { suhlasTrvalyPobytSK as sablona } from '../../sablony/sk/suhlas-trvaly-pobyt';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Súhlas s trvalým pobytom',
  nazevA: 'súhlas s trvalým pobytom',
  katalog: {
    popis: 'Súhlas vlastníka s prihlásením na trvalý pobyt.',
    kategorie: 'byvanie',
    ilustrace: 'plnamoc',
    slova: ['trvalý pobyt', 'súhlas vlastníka', 'prihlásenie na trvalý pobyt', 'ohlasovňa', 'prihlasovací lístok', 'byt'],
  },
  souvisejici: 'byvanie',
  landing: {
    title: 'Súhlas s trvalým pobytom {rok} – vzor PDF zadarmo',
    description: 'Súhlas vlastníka s prihlásením na trvalý pobyt podľa zákona č. 253/1998 Z. z. zadarmo. Vyplňte online, stiahnite PDF alebo Word a dajte si osvedčiť podpis.',
    perex: 'Vlastník (a všetci spoluvlastníci) písomne súhlasí, že sa niekto prihlási na trvalý pobyt v jeho byte alebo dome. Podpis treba osvedčiť.',
    obsahPopis: 'Písomné potvrdenie o súhlase podľa § 3 ods. 8 písm. d) zákona č. 253/1998 Z. z.',
    obsah: [
      { nazev: 'Vlastník', popis: 'Meno, dátum narodenia, adresa; aj spoluvlastníci.' },
      { nazev: 'Súhlas', popis: 'Adresa nehnuteľnosti a kto sa prihlasuje (aj deti).' },
    ],
    kroky: [
      { nazev: 'Vyplňte údaje', popis: 'Adresu presne so súpisným číslom.' },
      { nazev: 'Osvedčte podpis', popis: 'Vlastník a spoluvlastníci na obci alebo u notára.' },
      { nazev: 'Do ohlasovne', popis: 'Prihlasovaný príde so súhlasom a občianskym preukazom.' },
    ],
    online: ['Presné znenie podľa zákona o hlásení pobytu', 'Viac prihlasovaných osôb naraz', 'Kedy súhlas netreba', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['prihlasujete niekoho do svojho bytu alebo domu', 'vlastník nemôže ísť do ohlasovne osobne', 'nehnuteľnosť má viac spoluvlastníkov'],
    nehodiSe: ['prihlasujete sa do vlastnej nehnuteľnosti', 'vlastník pôjde s vami do ohlasovne – podpíše súhlas na prihlasovacom lístku', 'ste nájomca – súhlas musí dať vlastník'],
    po: [
      { nazev: 'Osvedčenie podpisu', popis: 'Bez neho ohlasovňa súhlas neprijme.' },
      { nazev: 'Prihlásenie', popis: 'Osobne v ohlasovni obce alebo elektronicky cez slovensko.sk.' },
    ],
    faq: [
      { q: 'Musí byť podpis osvedčený?', a: 'Áno, písomné potvrdenie o súhlase musí mať osvedčený podpis vlastníka alebo všetkých spoluvlastníkov. Netreba ho, ak vlastníci podpíšu súhlas na prihlasovacom lístku priamo pred zamestnancom ohlasovne.' },
      { q: 'Môže súhlas dať nájomca?', a: 'Nie. Zákon vyžaduje súhlas vlastníka alebo všetkých spoluvlastníkov budovy alebo jej časti.' },
      { q: 'Dáva trvalý pobyt právo v byte bývať?', a: 'Nie. Prihlásenie na trvalý pobyt má len evidenčný charakter a nezakladá žiadne právo k nehnuteľnosti.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Súhlas sa skladá priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 3 zákona č. 253/1998 Z. z. o hlásení pobytu občanov Slovenskej republiky a informácií na slovensko.sk.',
    souvisejiciPopis: 'Ďalšie dokumenty k bývaniu, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť súhlas s trvalým pobytom online – PDF zadarmo',
    description: 'Sprievodca súhlasom vlastníka s prihlásením na trvalý pobyt. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 2 minúty',
  },
};

export default stranka;
