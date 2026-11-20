/**
 * Umowa podnajmu lokalu lub jego części – Polska. Art. 668 KC: podnajem, jeśli umowa najmu nie zabrania; najemca i podnajemca odpowiadają solidarnie wobec wynajmującego; podnajem kończy się najpóźniej z najmem. Art. 688² KC: lokal – bez zgody wynajmującego najemca nie może podnająć (wyjątek: osoby, wobec których ma obowiązek alimentacyjny).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { kwotaSlownie } from './liczby';
import { KC_TEKST, TIP_TOZSAMOSC } from './zrodla';

export const umowaPodnajmu: Sablona = {
  kod: 'PL-PODNAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: "Umowa podnajmu lokalu",
  podnadpis: "na podstawie art. 668 i art. 688² ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny",
  souborPdf: 'umowa-podnajmu',
  paticka: "Utworzono bezpłatnie · szablon PL-PODNAJEM v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "najemca (podnajmujący)", vpravo: "podnajemca" },
  slovo: {"n": "umowa", "g": "umowy", "a": "umowę", "l": "umowie"},
  pripominky: (d) => [
    ...(naDatum(d.od) ? [{ nazev: "Początek podnajmu", datum: String(d.od) }] : []),
    ...(d.doba === 'urcita' && naDatum(d.do) ? [{ nazev: "Koniec podnajmu", datum: String(d.do) }] : []),
  ],
  coDal: ["Wydrukuj umowę w dwóch egzemplarzach, obie strony podpisują oba.", "Dołącz kopię zgody wynajmującego.", "Przy wydaniu spiszcie protokół zdawczo-odbiorczy."],
  kontrola: [
    "Bez zgody wynajmującego najemca nie może podnająć lokalu ani jego części (art. 688² KC). Zgodę uzyskaj przed podpisaniem i dołącz ją.",
    "Najemca i podnajemca odpowiadają solidarnie wobec wynajmującego za używanie lokalu zgodnie z umową najmu (art. 668 KC).",
    "Podnajem kończy się najpóźniej z chwilą zakończenia najmu (art. 668 § 2 KC).",
    TIP_TOZSAMOSC,
  ],
  zdroje: [KC_TEKST],

  kroky: [
    {
      id: 'strany',
      nazev: "Najemca i podnajemca",
      popis: "Najemca oddaje lokal lub jego część podnajemcy.",
      pole: [
        { id: 'n_jmeno', typ: 'text', popis: "Najemca – imię i nazwisko", placeholder: "np. Jan Kowalski", sirka: 34, autocomplete: 'name' },
        { id: 'n_narozeni', typ: 'datum', popis: "Data urodzenia najemcy", sirka: 14, polovina: true },
        { id: 'n_adresa', typ: 'text', popis: "Adres najemcy", placeholder: "np. ul. Długa 12, 00-001 Warszawa", sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: "Podnajemca – imię i nazwisko", placeholder: "np. Piotr Nowak", sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: "Data urodzenia podnajemcy", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Adres stałego zamieszkania podnajemcy", sirka: 46 },
      ],
    },
    {
      id: 'byt',
      nazev: "Lokal i zgoda",
      pole: [
        { id: 'byt', typ: 'text', popis: "Lokal (adres i numer)", placeholder: "np. ul. Krótka 5 m. 12, Kraków", sirka: 46 },
        {
          id: 'rozsah',
          typ: 'volba',
          popis: "Zakres podnajmu",
          moznosti: [
            { hodnota: 'cast', popis: "Część lokalu (pokój)" },
            { hodnota: 'cely', popis: "Cały lokal" },
          ],
        },
        { id: 'cast_popis', typ: 'text', popis: "Która część", placeholder: "np. pokój 14 m² ze wspólnym korzystaniem z kuchni i łazienki", sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
        { id: 'pronajimatel', typ: 'text', popis: "Wynajmujący (właściciel lokalu)", napoveda: "Kto wyraził zgodę na podnajem.", sirka: 34 },
        { id: 'souhlas_datum', typ: 'datum', popis: "Data zgody wynajmującego", napoveda: "Zgodę dołącz do umowy.", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: "Okres i płatności",
      pole: [
        { id: 'od', typ: 'datum', popis: "Podnajem od", sirka: 14, polovina: true },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Okres podnajmu",
          moznosti: [
            { hodnota: 'urcita', popis: "Na czas oznaczony" },
            { hodnota: 'neurcita', popis: "Na czas nieoznaczony" },
          ],
        },
        { id: 'do', typ: 'datum', popis: "Podnajem do", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'najemne', typ: 'castka', popis: "Miesięczna opłata (zł)", napoveda: "Wraz z mediami, chyba że ustalicie inaczej.", sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'cislo', popis: "Termin płatności (dzień miesiąca)", placeholder: '15', sirka: 4, polovina: true },
        { id: 'kauce', typ: 'castka', popis: "Kaucja (zł, opcjonalnie)", sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: "Rachunek najemcy", sirka: 30 },
        { id: 'vypoved', typ: 'cislo', popis: "Okres wypowiedzenia (miesiące)", placeholder: '1', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: "Miejscowość", sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Data", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { najemne_slovy: (d) => kwotaSlownie(d.najemne) },

  clanky: [
    { nadpis: "Strony umowy", odstavce: ["**Najemca:** {{n_jmeno}}, data urodzenia {{n_narozeni}}, {{n_adresa}} (dalej „Najemca”)", "**Podnajemca:** {{p_jmeno}}, data urodzenia {{p_narozeni}}, zam. {{p_adresa}} (dalej „Podnajemca”)"] },
    {
      nadpis: "Przedmiot podnajmu",
      vysvetleni: "Co jest podnajmowane i na podstawie jakiej zgody.",
      odstavce: [
        {
          volba: 'rozsah',
          uvodVzor: "Zakres (zaznacz jedną możliwość):",
          moznosti: { cast: "Najemca oddaje Podnajemcy w podnajem część lokalu {{byt}}: {{cast_popis}}.", cely: "Najemca oddaje Podnajemcy w podnajem cały lokal {{byt}}." },
        },
        "Wynajmujący {{pronajimatel}} wyraził zgodę na podnajem w dniu {{souhlas_datum}}; zgoda stanowi załącznik do umowy.",
        "Podnajem kończy się najpóźniej z chwilą zakończenia najmu przysługującego Najemcy.",
      ],
    },
    {
      nadpis: "Okres podnajmu i rozwiązanie",
      odstavce: [
        {
          volba: 'doba',
          uvodVzor: "Okres (zaznacz jedną możliwość):",
          moznosti: { urcita: "Umowa zostaje zawarta na czas oznaczony od {{od}} do {{do}}.", neurcita: "Umowa zostaje zawarta na czas nieoznaczony od {{od}}." },
        },
        "Każda ze stron może wypowiedzieć umowę z zachowaniem {{vypoved}}-miesięcznego okresu wypowiedzenia na koniec miesiąca kalendarzowego.",
        "Po zakończeniu podnajmu Podnajemca zwróci lokal w stanie niepogorszonym, z uwzględnieniem zużycia wynikającego z prawidłowego używania.",
      ],
    },
    { nadpis: "Płatności", odstavce: ["Podnajemca płaci Najemcy miesięcznie {{najemne}} (słownie: {{najemne_slovy}}) wraz z opłatami, do {{splatnost}}. dnia każdego miesiąca, na rachunek {{ucet}}.", "Podnajemca wpłacił kaucję w kwocie {{kauce}}. Najemca zwróci ją w ciągu 30 dni od zwrotu lokalu, po potrąceniu ewentualnych należności."] },
    { nadpis: "Postanowienia końcowe", odstavce: ["Podnajemca przestrzega porządku domowego i nie oddaje lokalu dalszym osobom.", "Zmiany umowy wymagają formy pisemnej. Umowę sporządzono w dwóch egzemplarzach."] },
  ],
};
