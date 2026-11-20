import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './kupoprodajni-ugovor-automobil';
import { kupoprodajniUgovorMotocikl as sablona, NAHRADY } from '../../sablony/hr/kupoprodajni-ugovor-motocikl';

/** Isti provjereni sadržaj kao stranica za automobil; razlikuju se tekstovi za motocikl. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: 'Kupoprodajni ugovor za motocikl',
  nazevA: 'kupoprodajni ugovor za motocikl',
  katalog: { ...auto.katalog, popis: 'Prodaja motocikla, skutera ili quada između građana.', ilustrace: 'motorka', slova: ['kupoprodajni ugovor motocikl', 'prodaja motora', 'skuter', 'moped', 'quad', 'rabljeni motocikl'] },
  landing: {
    ...L,
    title: 'Kupoprodajni ugovor za motocikl {rok} – besplatni obrazac PDF',
    description: 'Besplatan kupoprodajni ugovor za motocikl, skuter ili quad: OIB, broj šasije, kilometri, nedostaci, cijena slovima i rok od 15 dana za promjenu vlasništva. PDF i Word.',
    perex: 'Za prodaju motocikla, skutera, mopeda ili quada između građana. S vremenom predaje, poznatim nedostacima i rokom od 15 dana za promjenu vlasništva.',
    hodiSe: ['prodajete ili kupujete motocikl, skuter ili quad od građanina', 'vozilo je registrirano i ima prometnu dozvolu', 'želite pisano imati cijenu, stanje i vrijeme predaje'],
    nehodiSe: ['kupujete od trgovca – on ima vlastiti ugovor', 'motocikl je na leasingu ili pod zalogom'],
    faq: [
      { q: 'Je li ugovor za motocikl drukčiji nego za automobil?', a: 'Pravno nije – oba su kupoprodajni ugovori za motorno vozilo. Praktična razlika: broj šasije utisnut je u okvir, a opremu (kofere, ispuh) isplati se upisati u ugovor.' },
      { q: 'Do kada treba prenijeti vlasništvo?', a: 'Novi vlasnik dužan je vozilo u roku od 15 dana od stjecanja registrirati na svoje ime ili ga odjaviti.' },
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: 'Ispunite kupoprodajni ugovor za motocikl online – PDF besplatno', description: 'Kupoprodajni ugovor za motocikl, skuter ili quad s cijenom slovima. PDF ili Word besplatno.' },
};
export default stranka;
