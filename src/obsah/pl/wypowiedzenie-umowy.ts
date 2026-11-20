import type { StrankaDokumentu } from '../typy';
import { wypowiedzenieUmowy as sablona } from '../../sablony/pl/wypowiedzenie-umowy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Wypowiedzenie umowy',
  nazevA: 'wypowiedzenie umowy',
  katalog: {
    popis: 'Abonament, internet, prąd, gaz, ubezpieczenie, siłownia.',
    kategorie: 'codzienne',
    ilustrace: 'protokol',
    slova: ['wypowiedzenie umowy', 'wypowiedzenie abonamentu', 'rezygnacja', 'operator', 'internet', 'prąd', 'gaz', 'siłownia', 'karnet', 'ubezpieczenie', 'prenumerata'],
  },
  souvisejici: 'codzienne',
  landing: {
    title: 'Wypowiedzenie umowy {rok} – wzór PDF za darmo',
    description: 'Wypowiedzenie umowy z operatorem, sprzedawcą prądu lub gazu, ubezpieczycielem czy siłownią, ze zwrotem nadpłaty. Wzór za darmo w PDF i Word.',
    perex: 'Rezygnujesz z abonamentu, internetu, prądu, ubezpieczenia lub karnetu? Wypowiedzenie z właściwą podstawą prawną dla danej umowy i prośbą o potwierdzenie.',
    obsahPopis: 'List do firmy z wyborem rodzaju umowy.',
    obsah: [
      { nazev: 'Nadawca i adresat', popis: 'Twoje dane i dane firmy.' },
      { nazev: 'Wypowiedzenie', popis: 'Numer umowy, podstawa według rodzaju umowy, termin rozwiązania.' },
      { nazev: 'Prośby', popis: 'Potwierdzenie, zwrot nadpłaty, koniec płatności, cofnięcie zgód marketingowych.' },
    ],
    kroky: [
      { nazev: 'Sprawdź umowę', popis: 'Okres wypowiedzenia i dozwoloną formę w umowie lub regulaminie.' },
      { nazev: 'Wypełnij', popis: 'Wybierz rodzaj umowy – podstawę prawną wpiszemy sami.' },
      { nazev: 'Doręcz', popis: 'Poleconym za potwierdzeniem odbioru, osobiście lub e-mailem, jeśli umowa pozwala.' },
    ],
    online: ['Podstawa prawna dopasowana do rodzaju umowy', 'Przypomnienie o potwierdzeniu w kalendarzu', 'Pobranie w PDF i Word'],
    hodiSe: ['abonament komórkowy, internet lub telewizja', 'umowa na prąd lub gaz w domu', 'ubezpieczenie (poza OC samochodu)', 'siłownia, klub, prenumerata, inne usługi'],
    nehodiSe: ['OC samochodu – ma odrębne zasady', 'umowa o pracę – użyj wypowiedzenia umowy o pracę', 'najem mieszkania – użyj wypowiedzenia umowy najmu', 'zakup przez internet w 14 dni – to odstąpienie od umowy'],
    poNadpis: 'Po wysłaniu.',
    po: [
      { nazev: 'Potwierdzenie', popis: 'Operator telekomunikacyjny potwierdza wypowiedzenie na trwałym nośniku w 14 dni.' },
      { nazev: 'Okres wypowiedzenia', popis: 'Płacisz do końca okresu wypowiedzenia.' },
      { nazev: 'Rozliczenie', popis: 'Sprawdź ostatnią fakturę i zwrot nadpłaty.' },
    ],
    faq: [
      { q: 'Jaki jest okres wypowiedzenia u operatora?', a: 'Umowę, która po okresie zobowiązania przedłużyła się automatycznie, wypowiesz w każdej chwili z miesięcznym okresem wypowiedzenia (art. 302 ust. 1 Prawa komunikacji elektronicznej). Wcześniejsze wypowiedzenie umowy na czas określony może kosztować odszkodowanie (art. 304).' },
      { q: 'Czy mogę wypowiedzieć umowę e-mailem?', a: 'U operatora, u którego można zawrzeć umowę w formie dokumentowej – tak (art. 295 PKE). W innych umowach decyduje umowa lub regulamin; najbezpieczniej list polecony za potwierdzeniem odbioru.' },
      { q: 'Kiedy skończy się umowa na prąd lub gaz?', a: 'W gospodarstwie domowym – z ostatnim dniem miesiąca następującego po miesiącu, w którym wypowiedzenie dotarło do sprzedawcy, chyba że wskażesz późniejszy termin (art. 4j ust. 4 Prawa energetycznego). Umowę na czas nieoznaczony wypowiadasz bez kosztów.' },
      { q: 'Czy odzyskam składkę za ubezpieczenie?', a: 'Tak, za okres niewykorzystanej ochrony należy się zwrot składki (art. 813 § 1 Kodeksu cywilnego).' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Wypowiedzenie powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 61, 365¹, 813 i 830 Kodeksu cywilnego, art. 295, 301, 302 i 304 ustawy – Prawo komunikacji elektronicznej oraz art. 4j ustawy – Prawo energetyczne. W pozostałych umowach decyduje umowa i regulamin.',
    souvisejiciPopis: 'Inne dokumenty na co dzień, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij wypowiedzenie umowy online – PDF za darmo',
    description: 'Wypowiedzenie abonamentu, prądu, gazu, ubezpieczenia lub siłowni z podstawą prawną. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty',
  },
};

export default stranka;
