import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './umowa-kupna-sprzedazy-samochodu';
import { umowaSprzedazyMotocykla as sablona, NAHRADY } from '../../sablony/pl/umowa-kupna-sprzedazy-motocykla';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Umowa kupna-sprzedaży motocykla",
  nazevA: "umowę kupna-sprzedaży motocykla",
  katalog: { ...auto.katalog, popis: "Sprzedaż motocykla, skutera lub quada.", ilustrace: 'motorka', slova: ["motocykl", "skuter", "motorower", "quad", "sprzedaż motocykla", "umowa motocykl"] },
  landing: {
    ...L,
    title: "Umowa kupna-sprzedaży motocykla {rok} – wzór PDF za darmo",
    description: "Umowa kupna-sprzedaży motocykla, skutera lub quada za darmo: VIN, przebieg, wady, płatność, PCC-3 i zgłoszenie zbycia. Wypełnij online, PDF i Word.",
    perex: "Do sprzedaży motocykla, skutera, motoroweru lub quada między osobami prywatnymi. Wypełnij online albo pobierz pusty wzór.",
    hodiSe: ["sprzedajesz lub kupujesz motocykl, skuter, motorower albo quad od osoby prywatnej", "pojazd jest zarejestrowany i ma dowód rejestracyjny", "chcesz mieć na piśmie cenę, stan i wydanie pojazdu"],
    nehodiSe: ["kupujesz w komisie lub u dealera – mają własną umowę", "motocykl nie jest zarejestrowany (np. pit bike) – wtedy wystarczy zwykła umowa sprzedaży rzeczy", "motocykl jest w leasingu albo na kredyt z zastawem"],
    faq: [
      {"q": "Czy umowa na motocykl różni się od umowy na samochód?", "a": "Prawnie nie – to ta sama umowa sprzedaży pojazdu. Różnią się sprawy praktyczne: VIN jest wybity na ramie, a dodatkowe wyposażenie (kufry, wydech) warto wpisać."},
      {"q": "Kto płaci PCC przy zakupie motocykla?", "a": "Kupujący – tak samo jak przy samochodzie: 2% wartości rynkowej, deklaracja PCC-3 w ciągu 14 dni. Od 3 listopada 2026 zwolnione są rzeczy o wartości rynkowej do 3000 zł."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Wypełnij umowę kupna-sprzedaży motocykla online – PDF za darmo", description: "Kreator umowy kupna-sprzedaży motocykla, skutera lub quada według polskiego prawa. PDF lub Word za darmo." },
};

export default stranka;
