import type { StrankaDokumentu } from '../typy';
import { porozumienieOSplacieWRatach as sablona } from '../../sablony/pl/porozumienie-o-splacie-w-ratach';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Porozumienie o spłacie w ratach',
  nazevA: 'porozumienie o spłacie w ratach',
  katalog: {
    popis: 'Umowa wierzyciela z dłużnikiem z harmonogramem spłat.',
    kategorie: 'pieniadze',
    ilustrace: 'dluh',
    slova: ['porozumienie o spłacie', 'spłata w ratach', 'harmonogram spłat', 'rozłożenie długu na raty', 'ugoda ratalna', 'utrata dobrodziejstwa rat', 'dłużnik', 'wierzyciel'],
  },
  souvisejici: 'pieniadze',
  landing: {
    title: 'Porozumienie o spłacie zadłużenia w ratach {rok} – wzór PDF za darmo',
    description: 'Porozumienie o spłacie długu w ratach: harmonogram spłat, utrata dobrodziejstwa rat, opcjonalnie uznanie długu. Wzór za darmo w PDF i Word.',
    perex: 'Dłużnik nie zapłaci od razu, ale chce spłacać? Spiszcie porozumienie z harmonogramem rat i jasną zasadą, co się stanie przy zaległości.',
    obsahPopis: 'Umowa dwustronna według Kodeksu cywilnego z harmonogramem w załączniku.',
    obsah: [
      { nazev: 'Strony', popis: 'Wierzyciel i dłużnik.' },
      { nazev: 'Zadłużenie', popis: 'Tytuł, kwota, składniki, opcjonalnie uznanie długu.' },
      { nazev: 'Spłata w ratach', popis: 'Rata, termin, konto; wierzyciel wstrzymuje windykację.' },
      { nazev: 'Utrata dobrodziejstwa rat', popis: 'Zaległość, wezwanie, dodatkowy termin.' },
      { nazev: 'Ustępstwo', popis: 'Np. darowanie odsetek przy terminowej spłacie.' },
    ],
    kroky: [
      { nazev: 'Wpisz dług i ratę', popis: 'Harmonogram wyliczymy sami.' },
      { nazev: 'Ustal zasady zaległości', popis: 'Po ilu ratach i z jakim terminem na dopłatę.' },
      { nazev: 'Podpiszcie', popis: 'Dwa egzemplarze z harmonogramem.' },
    ],
    online: ['Harmonogram spłat w załączniku', 'Przypomnienia o ratach w kalendarzu', 'Kwota słownie automatycznie', 'Pobranie w PDF i Word'],
    hodiSe: ['niezapłacona faktura, pożyczka lub szkoda – dłużnik chce spłacać', 'chcesz wstrzymać windykację w zamian za regularne raty', 'chcesz darować odsetki za terminową spłatę'],
    nehodiSe: ['wystarczy samo potwierdzenie długu przez dłużnika – wybierz uznanie długu', 'nowa pożyczka – wybierz umowę pożyczki', 'długi wobec banku lub komornika – rozmawiaj bezpośrednio z nimi'],
    poNadpis: 'Podczas spłaty.',
    po: [
      { nazev: 'Raty', popis: 'Przelewem z tytułem lub gotówką za pokwitowaniem.' },
      { nazev: 'Zaległość', popis: 'Pisemne wezwanie z dodatkowym terminem.' },
      { nazev: 'Koniec spłaty', popis: 'Potwierdzenie spłaty całego długu.' },
    ],
    faq: [
      { q: 'Czym różni się od uznania długu?', a: 'Uznanie długu to jednostronne oświadczenie dłużnika. Porozumienie to umowa obu stron: wierzyciel zgadza się na raty i wstrzymuje windykację, dłużnik przyjmuje harmonogram i skutki zaległości.' },
      { q: 'Co to jest utrata dobrodziejstwa rat?', a: 'Postanowienie umowy, według którego przy zaległości cała reszta długu staje się wymagalna od razu. Kodeks cywilny pozwala stronom ułożyć umowę według swego uznania (art. 353¹ KC).' },
      { q: 'Czy przy opóźnieniu należą się odsetki?', a: 'Tak, wierzyciel może żądać odsetek ustawowych za opóźnienie, nawet jeśli nie poniósł szkody (art. 481 KC).' },
      { q: 'Czy porozumienie przerywa przedawnienie?', a: 'Jeśli dłużnik uznaje w nim dług – tak, uznanie roszczenia przerywa bieg przedawnienia (art. 123 § 1 pkt 2 KC).' },
      { q: 'Czy zapisujecie moje dane?', a: 'Nie. Porozumienie powstaje wyłącznie w Twojej przeglądarce.' },
    ],
    zakony: 'Wzór opiera się na art. 123, 353¹, 458 i 481 Kodeksu cywilnego.',
    souvisejiciPopis: 'Inne dokumenty o pieniądzach, również za darmo.',
  },
  vytvorit: {
    title: 'Porozumienie o spłacie w ratach online – PDF za darmo',
    description: 'Porozumienie o spłacie zadłużenia w ratach z harmonogramem spłat. PDF lub Word za darmo.',
    podnadpis: 'Za darmo · wynik w PDF i Word · zajmie ok. 3 minuty',
  },
};

export default stranka;
