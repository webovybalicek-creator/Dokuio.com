/** Protokół zdawczo-odbiorczy mieszkania – Polska, przy wydaniu i zwrocie lokalu. */
import type { Sablona } from '../typy';
import { KC_NAJEM, UOPL } from './zrodla';

export const protokolMieszkania: Sablona = {
  kod: 'PL-PROTOKOL-MIESZKANIE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Protokół zdawczo-odbiorczy mieszkania',
  podnadpis: 'protokół wydania i odbioru lokalu mieszkalnego',
  souborPdf: 'protokol-zdawczo-odbiorczy-mieszkania',
  paticka: 'Utworzono bezpłatnie · szablon PL-PROTOKOL-MIESZKANIE v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'miejsce',
  datumPodpisu: 'data',
  podpisy: { vlevo: 'wynajmujący', vpravo: 'najemca' },
  slovo: { n: 'protokół', g: 'protokołu', a: 'protokół', l: 'protokole' },
  cislovatClanky: false,
  coDal: ['Obejrzyjcie razem każde pomieszczenie i uzupełnijcie braki.', 'Zróbcie zdjęcia liczników i usterek.', 'Podpiszcie dwa egzemplarze.'],
  kontrola: [
    'Spisz wszystkie liczniki (prąd, gaz, woda, ciepło) z numerami seryjnymi.',
    'Każdą usterkę opisz z miejscem, np. „pęknięta płytka przy wannie”.',
    'Sprawdź sprzęty, wodę, ogrzewanie, okna i zamki.',
    'Policz klucze i piloty.',
    'Przy zwrocie: normalne zużycie obciąża wynajmującego, szkody ponad nie – najemcę i mogą być potrącone z kaucji.',
  ],
  zdroje: [KC_NAJEM, UOPL],
  prevzit: {
    kod: 'PL-NAJEM-MIESZKANIE',
    nazev: 'umowę najmu mieszkania',
    mapuj: (d) => ({ w_imie: d.w_imie, n_imie: d.n_imie, adres: d.adres_lokalu, wyposazenie: d.wyposazenie, data: d.wydanie, umowa_data: d.data_podpisu, powod: 'wydanie' }),
  },
  kroky: [
    {
      id: 'podstawa',
      nazev: 'Kto, gdzie i dlaczego',
      popis: 'Wypełniłeś już umowę najmu? Dane uzupełnimy z niej.',
      pole: [
        { id: 'w_imie', typ: 'text', popis: 'Wynajmujący – imię i nazwisko', napoveda: 'Właściciel mieszkania.', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'n_imie', typ: 'text', popis: 'Najemca – imię i nazwisko', napoveda: 'Kto korzysta z mieszkania.', placeholder: 'np. Anna Nowak', sirka: 34 },
        { id: 'adres', typ: 'text', popis: 'Adres mieszkania', napoveda: 'Jak w umowie.', placeholder: 'np. ul. Polna 7/12, Warszawa', sirka: 46 },
        { id: 'powod', typ: 'volba', popis: 'Przekazanie', napoveda: 'Na początku najemca odbiera, na końcu zwraca.', moznosti: [ { hodnota: 'wydanie', popis: 'Wydanie lokalu najemcy' }, { hodnota: 'zwrot', popis: 'Zwrot lokalu wynajmującemu' } ] },
        { id: 'umowa_data', typ: 'datum', popis: 'Data umowy najmu', napoveda: 'Protokół jest załącznikiem do umowy.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'liczniki',
      nazev: 'Liczniki',
      popis: 'Spisz i sfotografuj. Czego nie ma, zostaw puste.',
      pole: [
        { id: 'l_prad', typ: 'text', popis: 'Prąd (kWh)', napoveda: 'Przy taryfie dwustrefowej oba stany.', placeholder: 'np. 12 345', sirka: 12, polovina: true },
        { id: 'l_gaz', typ: 'text', popis: 'Gaz (m³)', napoveda: 'Stan gazomierza.', placeholder: 'np. 4 321', sirka: 12, polovina: true },
        { id: 'l_zimna', typ: 'text', popis: 'Woda zimna (m³)', napoveda: 'Wodomierz.', placeholder: 'np. 123,4', sirka: 12, polovina: true },
        { id: 'l_ciepla', typ: 'text', popis: 'Woda ciepła (m³)', napoveda: 'Wodomierz ciepłej wody.', placeholder: 'np. 56,7', sirka: 12, polovina: true },
        { id: 'l_cieplo', typ: 'text', popis: 'Ciepło / podzielniki', napoveda: 'Licznik ciepła lub podzielniki na grzejnikach.', placeholder: 'np. salon 123, sypialnia 87', sirka: 30 },
      ],
    },
    {
      id: 'stan',
      nazev: 'Stan mieszkania',
      pole: [
        { id: 'stan', typ: 'volba', popis: 'Stan lokalu', napoveda: 'Sprawdźcie ściany, podłogi, okna, sprzęty.', moznosti: [ { hodnota: 'bez', popis: 'Bez usterek, normalne zużycie' }, { hodnota: 'z', popis: 'Z następującymi usterkami' } ] },
        { id: 'usterki', typ: 'textarea', popis: 'Opis usterek', napoveda: 'Pomieszczenie i co dokładnie.', placeholder: 'np. kuchnia – odprysk na blacie', sirka: 64, zobrazitKdyz: { pole: 'stan', je: 'z' } },
        { id: 'wyposazenie', typ: 'textarea', popis: 'Wyposażenie i jego stan', napoveda: 'Sprzęty i meble.', placeholder: 'np. lodówka – sprawna; pralka – sprawna', sirka: 64 },
        { id: 'klucze', typ: 'text', popis: 'Klucze i piloty', napoveda: 'Liczba i do czego.', placeholder: 'np. 3× mieszkanie, 2× klatka, 1× piwnica', sirka: 46 },
        { id: 'ustalenia', typ: 'textarea', popis: 'Ustalenia (nieobowiązkowe)', napoveda: 'Kto i do kiedy usunie usterkę.', placeholder: 'np. wynajmujący naprawi kran do 30.11.', sirka: 64 },
        { id: 'miejsce', typ: 'text', popis: 'Miejsce', napoveda: 'Miejscowość.', placeholder: 'np. Warszawa', sirka: 18, polovina: true },
        { id: 'data', typ: 'datum', popis: 'Data', napoveda: 'Uzupełniliśmy dzisiejszą datę.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Strony i lokal',
      odstavce: [
        '**Wynajmujący:** {{w_imie}} · **Najemca:** {{n_imie}}',
        'Lokal: {{adres}}, zgodnie z umową najmu z dnia {{umowa_data}}.',
        { volba: 'powod', uvodVzor: 'Przekazanie (zaznacz):', moznosti: { wydanie: 'Wynajmujący wydaje, a najemca odbiera lokal na początku najmu.', zwrot: 'Najemca zwraca, a wynajmujący odbiera lokal po zakończeniu najmu.' } },
      ],
    },
    { nadpis: 'Stany liczników', odstavce: ['Prąd: {{l_prad}} kWh · Gaz: {{l_gaz}} m³ · Woda zimna: {{l_zimna}} m³ · Woda ciepła: {{l_ciepla}} m³ · Ciepło: {{l_cieplo}}'] },
    {
      nadpis: 'Stan lokalu, wyposażenie i klucze',
      odstavce: [
        { volba: 'stan', uvodVzor: 'Stan lokalu (zaznacz):', moznosti: { bez: 'Lokal jest bez usterek, z uwzględnieniem normalnego zużycia.', z: 'Lokal ma następujące usterki: {{usterki}}' } },
        'Wyposażenie: {{wyposazenie}}',
        'Przekazane klucze: {{klucze}}',
        'Ustalenia: {{ustalenia}}',
        'Strony potwierdzają podpisem, że obejrzały lokal, a jego stan odpowiada niniejszemu protokołowi.',
      ],
    },
  ],
};
