import type { StrankaDokumentu } from '../typy';
import { wypowiedzenieUmowyOPrace as sablona } from '../../sablony/pl/wypowiedzenie-umowy-o-prace';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Wypowiedzenie umowy o pracę',
  nazevA: 'wypowiedzenie umowy o pracę',
  katalog: {
    popis: 'Wypowiedzenie pracownika lub porozumienie stron.',
    kategorie: 'praca',
    ilustrace: 'protokol',
    slova: ['wypowiedzenie umowy o pracę', 'wypowiedzenie pracownika', 'rezygnacja z pracy', 'zwolnienie się z pracy', 'okres wypowiedzenia', 'porozumienie stron', 'odejście z pracy'],
  },
  souvisejici: 'praca',
  landing: {
    title: 'Wypowiedzenie umowy o pracę {rok} – wzór PDF za darmo',
    description: 'Wypowiedzenie umowy o pracę przez pracownika: okres 2 tygodnie, 1 lub 3 miesiące (art. 36 KP) albo porozumienie stron. Wzór za darmo w PDF i Word.',
    perex: 'Odchodzisz z pracy? Wypowiedzenie z właściwym okresem z Kodeksu pracy – albo propozycja rozwiązania umowy za porozumieniem stron.',
    obsahPopis: 'Oświadczenie pracownika według art. 30, 34 i 36 Kodeksu pracy.',
    obsah: [
      { nazev: 'Pracownik i pracodawca', popis: 'Kto komu doręcza wypowiedzenie.' },
      { nazev: 'Rozwiązanie umowy', popis: 'Wypowiedzenie, wcześniejszy termin albo porozumienie stron; okres wypowiedzenia.' },
      { nazev: 'Prośby', popis: 'Urlop, świadectwo pracy, potwierdzenie daty.' },
    ],
    kroky: [
      { nazev: 'Wybierz okres', popis: 'Według stażu u tego pracodawcy.' },
      { nazev: 'Podpisz', popis: 'Własnoręcznie lub kwalifikowanym podpisem elektronicznym.' },
      { nazev: 'Wręcz', popis: 'Za podpisem pracodawcy na Twojej kopii.' },
    ],
    online: ['Okres wypowiedzenia według stażu', 'Koniec okresu w kalendarzu (orientacyjnie)', 'Wariant: porozumienie stron', 'Pobranie w PDF i Word'],
    hodiSe: ['jesteś pracownikiem i odchodzisz z pracy', 'umowa na czas nieokreślony, określony lub na okres próbny', 'chcesz zaproponować szybsze odejście za zgodą pracodawcy'],
    nehodiSe: ['jesteś pracodawcą – wypowiedzenie pracownikowi ma inne wymogi', 'umowa zlecenia lub o dzieło – to nie umowa o pracę', 'rozwiązanie umowy bez wypowiedzenia'],
    poNadpis: 'Po wręczeniu.',
    po: [
      { nazev: 'Okres wypowiedzenia', popis: 'Pracujesz do jego końca, chyba że ustalicie wcześniejszy termin.' },
      { nazev: 'Urlop', popis: 'Ustal z pracodawcą wykorzystanie lub rozliczenie urlopu.' },
      { nazev: 'Świadectwo pracy', popis: 'Odbierz je po zakończeniu pracy.' },
    ],
    faq: [
      { q: 'Jaki mam okres wypowiedzenia?', a: 'Zależy od stażu u tego pracodawcy: 2 tygodnie (poniżej 6 miesięcy), 1 miesiąc (co najmniej 6 miesięcy), 3 miesiące (co najmniej 3 lata) – art. 36 § 1 Kodeksu pracy. Przy okresie próbnym: 3 dni robocze, 1 tydzień lub 2 tygodnie (art. 34).' },
      { q: 'Kiedy kończy się okres wypowiedzenia?', a: 'Okres liczony w tygodniach kończy się w sobotę, a w miesiącach – ostatniego dnia miesiąca (art. 30 § 2¹ Kodeksu pracy).' },
      { q: 'Czy mogę wysłać wypowiedzenie e-mailem?', a: 'Wypowiedzenie musi być na piśmie (art. 30 § 3 KP). Zwykły e-mail nie wystarczy; równoważny jest dokument z kwalifikowanym podpisem elektronicznym (art. 78¹ KC).' },
      { q: 'Czy muszę podać przyczynę?', a: 'Nie. Kodeks pracy wymaga podania przyczyny tylko w wypowiedzeniu pracodawcy (art. 30 § 4).' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Wypowiedzenie powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 30, 34 i 36 Kodeksu pracy oraz art. 61 i 78¹ Kodeksu cywilnego.',
    souvisejiciPopis: 'Inne dokumenty, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij wypowiedzenie umowy o pracę online – PDF za darmo',
    description: 'Wypowiedzenie umowy o pracę przez pracownika z okresem z Kodeksu pracy. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty',
  },
};

export default stranka;
