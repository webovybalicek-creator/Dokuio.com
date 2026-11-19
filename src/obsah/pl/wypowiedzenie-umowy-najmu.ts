import type { StrankaDokumentu } from '../typy';
import { wypowiedzenieUmowyNajmu as sablona } from '../../sablony/pl/wypowiedzenie-umowy-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Wypowiedzenie umowy najmu',
  nazevA: 'wypowiedzenie umowy najmu',
  katalog: { popis: 'Wypowiedzenie najemcy, 3 miesiące na koniec miesiąca.', kategorie: 'mieszkanie', ilustrace: 'protokol', slova: ['wypowiedzenie umowy najmu', 'wypowiedzenie najmu', 'najemca', 'przeprowadzka', 'okres wypowiedzenia'] },
  souvisejici: 'mieszkanie',
  landing: {
    title: 'Wypowiedzenie umowy najmu mieszkania {rok} – wzór PDF',
    description: 'Wypowiedzenie umowy najmu przez najemcę: czas nieoznaczony (3 miesiące, art. 688 KC) i czas oznaczony według umowy. PDF i Word za darmo.',
    perex: 'Przeprowadzasz się? Wypowiedzenie umowy najmu z poprawnym okresem i prośbą o zwrot kaucji.',
    obsahPopis: 'Wypowiedzenie najemcy (art. 688 i 673 KC).',
    obsah: [{ nazev: 'Wynajmujący', popis: 'Komu doręczasz.' }, { nazev: 'Wypowiedzenie', popis: 'Lokal, umowa, podstawa, zwrot kaucji.' }],
    kroky: [{ nazev: 'Wybierz rodzaj umowy', popis: 'Oznaczony lub nieoznaczony.' }, { nazev: 'Pobierz i podpisz', popis: 'PDF lub Word za darmo.' }, { nazev: 'Doręcz', popis: 'Listem poleconym lub osobiście za podpisem.' }],
    online: ['Tekst zależny od rodzaju umowy', 'Orientacyjny koniec najmu w kalendarzu', 'Pobranie w PDF i Word'],
    hodiSe: ['jesteś najemcą i chcesz się wyprowadzić', 'umowa na czas nieoznaczony', 'umowa na czas oznaczony z zapisem o wypowiedzeniu'],
    nehodiSe: ['jesteś wynajmującym – wypowiedzenie lokatorowi jest możliwe tylko z przyczyn ustawowych', 'chcesz zakończyć najem od razu – zaproponuj porozumienie stron'],
    poNadpis: 'Po doręczeniu.',
    po: [{ nazev: 'Okres wypowiedzenia', popis: 'Do końca miesiąca kalendarzowego.' }, { nazev: 'Zwrot lokalu', popis: 'Z protokołem zdawczo-odbiorczym.' }, { nazev: 'Kaucja', popis: 'W ciągu miesiąca od opróżnienia lokalu.' }],
    faq: [
      { q: 'Jaki jest okres wypowiedzenia?', a: 'Przy umowie na czas nieoznaczony i czynszu płatnym miesięcznie – trzy miesiące naprzód na koniec miesiąca kalendarzowego, chyba że umowa przewiduje krótszy.' },
      { q: 'Czy mogę wypowiedzieć umowę na czas oznaczony?', a: 'Tylko jeśli umowa określa takie przypadki (art. 673 § 3 KC). Wpisz podstawę z umowy.' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Wypowiedzenie powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 673 i 688 Kodeksu cywilnego oraz art. 6 ustawy o ochronie praw lokatorów.',
    souvisejiciPopis: 'Inne dokumenty o mieszkaniu, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij wypowiedzenie umowy najmu online – PDF za darmo',
    description: 'Wypowiedzenie umowy najmu przez najemcę zgodne z KC. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty',
  },
};

export default stranka;
