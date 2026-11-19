import type { StrankaDokumentu } from '../typy';
import { umowaNajmuMieszkania as sablona } from '../../sablony/pl/umowa-najmu-mieszkania';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Umowa najmu mieszkania',
  nazevA: 'umowę najmu mieszkania',
  katalog: { popis: 'Zwykły najem mieszkania z kaucją i protokołem.', kategorie: 'mieszkanie', ilustrace: 'protokol', slova: ['umowa najmu', 'najem mieszkania', 'wynajem', 'kaucja', 'czynsz', 'najemca', 'wynajmujący'] },
  souvisejici: 'mieszkanie',
  landing: {
    title: 'Umowa najmu mieszkania {rok} – wzór za darmo PDF',
    description: 'Umowa najmu mieszkania zgodna z Kodeksem cywilnym i ustawą o ochronie praw lokatorów: czynsz, opłaty, kaucja, wypowiedzenie. PDF i Word za darmo.',
    perex: 'Wynajmujesz lub wynajmujesz od kogoś mieszkanie? Zwykła umowa najmu z czynszem, opłatami, kaucją i jasnymi zasadami wypowiedzenia.',
    obsahPopis: 'Umowa najmu lokalu mieszkalnego (art. 659 i nast. KC).',
    obsah: [
      { nazev: 'Strony i lokal', popis: 'Wynajmujący, najemca, adres, wyposażenie.' },
      { nazev: 'Czas najmu', popis: 'Oznaczony lub nieoznaczony, wydanie lokalu.' },
      { nazev: 'Czynsz i kaucja', popis: 'Opłaty, termin płatności, zwrot kaucji.' },
      { nazev: 'Wypowiedzenie', popis: 'Zasady zakończenia najmu.' },
    ],
    kroky: [
      { nazev: 'Wypełnij dane', popis: 'Strony, lokal, czynsz.' },
      { nazev: 'Pobierz PDF lub Word', popis: 'Za darmo, bez rejestracji.' },
      { nazev: 'Podpiszcie i przekażcie lokal', popis: 'Z protokołem zdawczo-odbiorczym.' },
    ],
    online: ['Kwoty słownie automatycznie', 'Przypomnienia o płatnościach', 'Protokół wypełni się z umowy', 'Pobranie w PDF i Word'],
    hodiSe: ['wynajmujesz mieszkanie jako osoba prywatna', 'najem na czas oznaczony lub nieoznaczony'],
    nehodiSe: ['najem okazjonalny z oświadczeniem u notariusza', 'najem instytucjonalny', 'lokale użytkowe i biura'],
    poNadpis: 'Po podpisaniu.',
    po: [
      { nazev: 'Protokół', popis: 'Liczniki, usterki, klucze.' },
      { nazev: 'Kaucja', popis: 'Przelewem lub za pokwitowaniem.' },
      { nazev: 'Podatek', popis: 'Wynajmujący rozlicza przychód z najmu.' },
    ],
    faq: [
      { q: 'Ile może wynosić kaucja?', a: 'Najwyżej 12-krotność miesięcznego czynszu (art. 6 ustawy o ochronie praw lokatorów). Zwrot następuje w ciągu miesiąca od opróżnienia lokalu.' },
      { q: 'Jaki jest okres wypowiedzenia?', a: 'Przy umowie na czas nieoznaczony i czynszu płatnym miesięcznie – trzy miesiące naprzód na koniec miesiąca kalendarzowego (art. 688 KC).' },
      { q: 'Czy umowę na czas oznaczony można wypowiedzieć?', a: 'Tylko w przypadkach określonych w umowie (art. 673 § 3 KC). Dlatego wzór pozwala je wpisać.' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Umowa powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 659–692 Kodeksu cywilnego i ustawie z 21 czerwca 2001 r. o ochronie praw lokatorów.',
    souvisejiciPopis: 'Inne dokumenty o mieszkaniu, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij umowę najmu mieszkania online – PDF za darmo',
    description: 'Kreator umowy najmu mieszkania zgodnej z polskim prawem. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 5 minut',
  },
};

export default stranka;
