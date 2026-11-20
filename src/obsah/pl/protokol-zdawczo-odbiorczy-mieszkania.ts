import type { StrankaDokumentu } from '../typy';
import { protokolMieszkania as sablona } from '../../sablony/pl/protokol-zdawczo-odbiorczy-mieszkania';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Protokół zdawczo-odbiorczy mieszkania',
  nazevA: 'protokół zdawczo-odbiorczy mieszkania',
  katalog: { popis: 'Liczniki, usterki i klucze przy wydaniu lokalu.', kategorie: 'mieszkanie', ilustrace: 'protokol', slova: ['protokół zdawczo-odbiorczy', 'mieszkanie', 'liczniki', 'klucze', 'kaucja', 'najem'] },
  souvisejici: 'mieszkanie',
  landing: {
    title: 'Protokół zdawczo-odbiorczy mieszkania {rok} – wzór PDF za darmo',
    description: 'Protokół zdawczo-odbiorczy mieszkania: stany liczników, usterki, wyposażenie, klucze. Przy wydaniu i zwrocie lokalu. PDF i Word za darmo.',
    perex: 'Najważniejszy dowód przy sporze o kaucję. Zapisz stan mieszkania na początku i na końcu najmu.',
    obsahPopis: 'Protokół wydania i odbioru lokalu.',
    obsah: [{ nazev: 'Strony i lokal', popis: 'Kto przekazuje i kto odbiera.' }, { nazev: 'Liczniki', popis: 'Prąd, gaz, woda, ciepło.' }, { nazev: 'Stan i klucze', popis: 'Usterki i ustalenia.' }],
    kroky: [{ nazev: 'Obejrzyjcie lokal', popis: 'Pokój po pokoju.' }, { nazev: 'Zapiszcie i sfotografujcie', popis: 'Liczniki i usterki.' }, { nazev: 'Podpiszcie', popis: 'Każdy zatrzymuje egzemplarz.' }],
    online: ['Dane z umowy najmu', 'Podpis na ekranie', 'Pobranie w PDF i Word'],
    hodiSe: ['wprowadzenie do wynajętego mieszkania', 'zwrot mieszkania po zakończeniu najmu'],
    nehodiSe: ['sprzedaż mieszkania – tam protokół jest częścią umowy notarialnej'],
    poNadpis: 'Po podpisaniu.',
    po: [{ nazev: 'Zdjęcia', popis: 'Przechowuj razem z protokołem.' }, { nazev: 'Media', popis: 'Zgłoś stany liczników dostawcom.' }],
    faq: [
      { q: 'Czy protokół jest obowiązkowy?', a: 'Przepisy go nie wymagają, ale bez niego trudno udowodnić stan lokalu i rozliczyć kaucję.' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Protokół powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na przepisach o najmie (art. 659 i nast. KC) i ustawie o ochronie praw lokatorów.',
    souvisejiciPopis: 'Inne dokumenty o mieszkaniu, również za darmo.',
  },
  vytvorit: {
    title: 'Wypełnij protokół zdawczo-odbiorczy mieszkania online',
    description: 'Protokół przekazania mieszkania z licznikami i usterkami. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 3 minuty',
  },
};

export default stranka;
