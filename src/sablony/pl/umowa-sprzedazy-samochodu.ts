/**
 * Umowa kupna-sprzedaży samochodu – Polska, między osobami prywatnymi. Art. 535 i nast. Kodeksu cywilnego;
 * zastrzeżenie własności art. 589 KC. Zgłoszenie zbycia/nabycia 30 dni (art. 78 Prawa o ruchu drogowym),
 * PCC-3 2% w 14 dni (podatki.gov.pl). Bez kar umownych. Przy każdej zmianie podnieść `verze` i `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { KC, PORD, GOV_ZBYCIE, HISTORIA_POJAZDU, PCC_FORMULARZE, TIP_TOZSAMOSC, TIP_GOTOWKA } from './zrodla';

export const umowaSprzedazySamochodu: Sablona = {
  kod: 'PL-SPRZEDAZ-AUTO',
  verze: '1.1',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa kupna-sprzedaży samochodu',
  podnadpis: 'zawarta na podstawie art. 535 i nast. ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
  souborPdf: 'umowa-kupna-sprzedazy-samochodu',
  paticka: 'Utworzono za darmo · szablon PL-SPRZEDAZ-AUTO v1.1 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'sprzedający', vpravo: 'kupujący' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  coDal: [
    'Wydrukuj umowę w dwóch egzemplarzach, obie strony podpisują oba.',
    'Przekaż auto, kluczyki i dokumenty – najlepiej z protokołem zdawczo-odbiorczym.',
    'Sprzedający: zgłoś zbycie pojazdu w wydziale komunikacji w ciągu 30 dni (można online na gov.pl) i powiadom ubezpieczyciela OC.',
    'Kupujący: w 14 dni złóż PCC-3 i zapłać 2% podatku, w 30 dni zarejestruj pojazd.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    if (!od) return [];
    return [
      { nazev: 'PCC-3: deklaracja i 2% podatku (kupujący)', datum: isoDatum(pridejDny(od, 14)), popis: '14 dni od zawarcia umowy, jeśli wartość rynkowa auta przekracza 3000 zł (próg od 3.11.2026).' },
      { nazev: 'Zgłoszenie zbycia / rejestracja pojazdu', datum: isoDatum(pridejDny(od, 30)), popis: 'Sprzedający zgłasza zbycie, kupujący rejestruje pojazd – 30 dni od zawarcia umowy.' },
    ];
  },
  kontrola: [
    'Sprzedający jest właścicielem auta – sprawdź dowód rejestracyjny i ewentualnie dokument zakupu.',
    'VIN w dowodzie rejestracyjnym (pole E) zgadza się z VIN na aucie.',
    'Sprawdź za darmo historię auta, przebieg i ważność OC na [historiapojazdu.gov.pl](https://historiapojazdu.gov.pl/) – potrzebny numer rejestracyjny, VIN i data pierwszej rejestracji.',
    'Auto nie może być w leasingu ani objęte zastawem – wtedy sprzedający nie może nim swobodnie rozporządzać.',
    TIP_TOZSAMOSC,
    TIP_GOTOWKA,
    'Kupujący: [deklaracja PCC-3](https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/) w ciągu 14 dni (2% wartości rynkowej, jeśli przekracza 3000 zł – próg obowiązuje od 3 listopada 2026, wcześniej 1000 zł). Sprzedający: [zgłoszenie zbycia](https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne) w ciągu 30 dni.',
  ],
  zdroje: [KC, PORD, GOV_ZBYCIE, HISTORIA_POJAZDU, PCC_FORMULARZE],

  kroky: [
    {
      id: 'strony',
      nazev: 'Sprzedający i kupujący',
      popis: 'Danych kupującego możesz jeszcze nie znać. Zostaw je puste – w umowie będą linie do ręcznego uzupełnienia.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Sprzedający – imię i nazwisko', napoveda: 'Właściciel auta, tak jak w dowodzie osobistym.', placeholder: 'np. Jan Kowalski', sirka: 34, autocomplete: 'name' },
        { id: 'p_pesel', typ: 'text', popis: 'PESEL sprzedającego', napoveda: 'Urząd wymaga PESEL stron przy rejestracji pojazdu.', placeholder: 'np. 80010112345', sirka: 14, polovina: true },
        { id: 'p_doklad', typ: 'text', popis: 'Seria i nr dowodu osobistego', placeholder: 'np. ABC 123456', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres zamieszkania', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupujący – imię i nazwisko', placeholder: 'np. Anna Nowak', sirka: 34 },
        { id: 'k_pesel', typ: 'text', popis: 'PESEL kupującego', sirka: 14, polovina: true },
        { id: 'k_doklad', typ: 'text', popis: 'Seria i nr dowodu osobistego', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres zamieszkania', placeholder: 'np. ul. Krótka 5, 30-001 Kraków', sirka: 46 },
      ],
    },
    {
      id: 'pojazd',
      nazev: 'Pojazd',
      popis: 'Dane przepisz z dowodu rejestracyjnego.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Marka i model', napoveda: 'Pola D.1 i D.3 w dowodzie rejestracyjnym.', placeholder: 'np. Skoda Octavia', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Numer VIN', napoveda: '17 znaków, pole E w dowodzie rejestracyjnym.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Numer rejestracyjny', placeholder: 'np. WA 12345', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Rok produkcji', placeholder: 'np. 2018', sirka: 8, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Seria i nr dowodu rejestracyjnego', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Przebieg', napoveda: 'Odczytaj w dniu podpisania.', placeholder: 'np. 154320', jednotka: 'km', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'stan',
      nazev: 'Stan pojazdu',
      pole: [
        {
          id: 'vady',
          typ: 'volba',
          popis: 'Wady pojazdu',
          napoveda: 'Opisz uczciwie znane wady – kupujący, który o nich wiedział, nie może się na nie później powoływać.',
          moznosti: [
            { hodnota: 'bez', popis: 'Sprzedającemu nie są znane żadne wady' },
            { hodnota: 's', popis: 'Pojazd ma wady, o których sprzedający wie' },
          ],
        },
        { id: 'vady_popis', typ: 'textarea', popis: 'Opis wad', placeholder: 'np. pęknięta przednia szyba', sirka: 64, zobrazitKdyz: { pole: 'vady', je: 's' } },
        { id: 'klice', typ: 'cislo', popis: 'Liczba kluczyków', placeholder: 'np. 2', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Przekazywane dokumenty',
          moznosti: [
            { hodnota: 'orv', popis: 'Dowód rejestracyjny' },
            { hodnota: 'karta', popis: 'Karta pojazdu' },
            { hodnota: 'oc', popis: 'Polisa OC' },
            { hodnota: 'serwis', popis: 'Książka serwisowa' },
            { hodnota: 'zakup', popis: 'Dokument nabycia przez sprzedającego' },
          ],
        },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena i płatność',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Cena (zł)', napoveda: 'Kwotę słownie dopiszemy sami.', placeholder: 'np. 35000', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Jak kupujący zapłaci',
          moznosti: [
            { hodnota: 'hotove', popis: 'Gotówką przy podpisaniu umowy' },
            { hodnota: 'prevod', popis: 'Przelewem do określonego dnia' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Numer rachunku sprzedającego', placeholder: 'PL00 0000 0000 0000 0000 0000 0000', sirka: 32, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        { id: 'splatnost', typ: 'datum', popis: 'Termin zapłaty', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', placeholder: 'np. Warszawa', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Data zawarcia umowy', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_slovy: (d) => kwotaSlownie(d.cena) },

  clanky: [
    {
      nadpis: 'Strony umowy',
      vysvetleni: 'Kto zawiera umowę. Dane muszą zgadzać się z dowodami osobistymi.',
      odstavce: [
        '**Sprzedający:** {{p_jmeno}}, PESEL {{p_pesel}}, dowód osobisty {{p_doklad}}, zamieszkały/a {{p_adresa}}',
        '**Kupujący:** {{k_jmeno}}, PESEL {{k_pesel}}, dowód osobisty {{k_doklad}}, zamieszkały/a {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Przedmiot umowy',
      vysvetleni: 'Które auto jest sprzedawane. Najważniejszy jest VIN.',
      odstavce: [
        'Sprzedający oświadcza, że jest jedynym właścicielem samochodu marki i modelu {{znacka}}, VIN {{vin}}, numer rejestracyjny {{spz}}, rok produkcji {{rok}}, dowód rejestracyjny {{orv}} (dalej „pojazd”).',
        'Sprzedający oświadcza, że pojazd nie jest obciążony prawami osób trzecich, w szczególności zastawem, i nie jest przedmiotem leasingu.',
        'Sprzedający sprzedaje pojazd kupującemu, a kupujący pojazd kupuje i zobowiązuje się zapłacić cenę określoną w § 4.',
      ],
    },
    {
      nadpis: 'Stan pojazdu',
      vysvetleni: 'Co sprzedający wie o aucie.',
      odstavce: [
        'Przebieg pojazdu w dniu zawarcia umowy wynosi {{km}}. Sprzedający oświadcza, że według jego wiedzy licznik nie był cofany.',
        {
          volba: 'vady',
          uvodVzor: 'Wady pojazdu (zaznacz jedną opcję):',
          moznosti: {
            bez: 'Sprzedającemu nie są znane żadne wady pojazdu.',
            s: 'Sprzedający poinformował kupującego o następujących wadach pojazdu: {{vady_popis}}',
          },
        },
        'Kupujący oświadcza, że zapoznał się ze stanem technicznym pojazdu, obejrzał go i kupuje go w tym stanie.',
      ],
    },
    {
      nadpis: 'Cena i płatność',
      vysvetleni: 'Ile, jak i kiedy. Własność przechodzi dopiero po zapłacie całej ceny.',
      odstavce: [
        'Cena pojazdu wynosi {{cena}} (słownie: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Sposób zapłaty (zaznacz jedną opcję):',
          moznosti: {
            hotove: 'Kupujący zapłacił cenę gotówką przy podpisaniu umowy. Sprzedający swoim podpisem potwierdza otrzymanie całej ceny.',
            prevod: 'Kupujący zapłaci cenę przelewem na rachunek sprzedającego nr {{ucet}} najpóźniej do dnia {{splatnost}}.',
          },
        },
        'Strony zgodnie z art. 589 Kodeksu cywilnego zastrzegają, że własność pojazdu przechodzi na kupującego z chwilą zapłaty całej ceny.',
      ],
    },
    {
      nadpis: 'Wydanie pojazdu',
      vysvetleni: 'Co kupujący dostaje razem z autem.',
      odstavce: [
        'Sprzedający wyda kupującemu pojazd w dniu zawarcia umowy, po zapłacie ceny, wraz z następującą liczbą kluczyków: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Wraz z pojazdem sprzedający przekazuje kupującemu:',
          moznosti: {
            orv: 'dowód rejestracyjny',
            karta: 'kartę pojazdu',
            oc: 'polisę ubezpieczenia OC',
            serwis: 'książkę serwisową',
            zakup: 'dokument potwierdzający nabycie pojazdu przez sprzedającego',
          },
        },
        'Z chwilą wydania pojazdu na kupującego przechodzą korzyści i ciężary związane z pojazdem oraz niebezpieczeństwo jego przypadkowej utraty lub uszkodzenia.',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      vysvetleni: 'Formalności.',
      odstavce: [
        'W sprawach nieuregulowanych umową stosuje się przepisy Kodeksu cywilnego.',
        'Koszty związane z umową, w tym podatek od czynności cywilnoprawnych, ponosi kupujący.',
        'Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
