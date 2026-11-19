/**
 * Wypowiedzenie umowy najmu mieszkania przez najemcę – Polska. Art. 688 KC (czas nieoznaczony, czynsz miesięczny:
 * 3 miesiące naprzód na koniec miesiąca kalendarzowego); czas oznaczony – tylko gdy umowa przewiduje (art. 673 § 3 KC).
 */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { KC_NAJEM, UOPL } from './zrodla';

export const wypowiedzenieUmowyNajmu: Sablona = {
  kod: 'PL-WYPOWIEDZENIE-NAJEM',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const dz = naDatum(d.data);
    if (!dz) return [];
    const koniec = new Date(dz.getFullYear(), dz.getMonth() + 4, 0);
    return [
      { nazev: 'Koniec najmu po wypowiedzeniu (orientacyjnie)', datum: isoDatum(koniec), popis: 'Przy doręczeniu w dniu podpisu i 3-miesięcznym okresie.' },
      { nazev: 'Umówić zwrot mieszkania i protokół', datum: isoDatum(pridejDny(koniec, -14)) },
    ];
  },
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Wypowiedzenie umowy najmu lokalu',
  podnadpis: 'wypowiedzenie najemcy na podstawie art. 688 Kodeksu cywilnego',
  souborPdf: 'wypowiedzenie-umowy-najmu',
  paticka: 'Utworzono bezpłatnie · szablon PL-WYPOWIEDZENIE-NAJEM v1.0 · wzór do wypełnienia, nie stanowi porady prawnej · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'miejsce',
  datumPodpisu: 'data',
  podpisy: { vlevo: 'najemca', vpravo: 'odebrał wynajmujący (data i podpis)' },
  slovo: { n: 'wypowiedzenie', g: 'wypowiedzenia', a: 'wypowiedzenie', l: 'wypowiedzeniu' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Doręcz wypowiedzenie tak, by dało się to udowodnić: listem poleconym za potwierdzeniem odbioru lub osobiście za podpisem na kopii.',
    'Okres wypowiedzenia liczy się do końca miesiąca kalendarzowego – im wcześniej w miesiącu doręczysz, tym lepiej.',
    'Umów zwrot mieszkania i spiszcie protokół zdawczo-odbiorczy.',
  ],
  kontrola: [
    'Wypowiedzenie musi być pisemne (z własnoręcznym podpisem).',
    'Umowę na czas nieoznaczony z czynszem płatnym miesięcznie wypowiada się na trzy miesiące naprzód na koniec miesiąca kalendarzowego (art. 688 KC), chyba że umowa przewiduje krótszy termin.',
    'Umowę na czas oznaczony można wypowiedzieć tylko w przypadkach wskazanych w umowie (art. 673 § 3 KC). Sprawdź swoją umowę i podaj podstawę.',
    'Podpisują wszyscy najemcy.',
  ],
  zdroje: [KC_NAJEM, UOPL],
  kroky: [
    {
      id: 'strony',
      nazev: 'Najemca i wynajmujący',
      pole: [
        { id: 'n_imie', typ: 'text', popis: 'Najemca – imię i nazwisko', napoveda: 'Jak w umowie.', placeholder: 'np. Anna Nowak', sirka: 34, autocomplete: 'name' },
        { id: 'n_kontakt', typ: 'text', popis: 'Telefon lub e-mail', napoveda: 'Do ustalenia zwrotu mieszkania.', placeholder: 'np. anna@email.pl', sirka: 30 },
        { id: 'w_imie', typ: 'text', popis: 'Wynajmujący – imię i nazwisko', napoveda: 'Komu doręczasz.', placeholder: 'np. Jan Kowalski', sirka: 34 },
        { id: 'w_adres', typ: 'text', popis: 'Adres wynajmującego', napoveda: 'Adres do doręczeń.', placeholder: 'np. ul. Długa 12, 00-001 Warszawa', sirka: 46 },
      ],
    },
    {
      id: 'najem',
      nazev: 'Najem',
      pole: [
        { id: 'lokal', typ: 'text', popis: 'Adres mieszkania', napoveda: 'Jak w umowie.', placeholder: 'np. ul. Polna 7/12, Warszawa', sirka: 46 },
        { id: 'umowa_data', typ: 'datum', popis: 'Data umowy najmu', napoveda: 'Kiedy podpisaliście umowę.', sirka: 14, polovina: true },
        { id: 'rodzaj', typ: 'volba', popis: 'Umowa jest zawarta', napoveda: 'Sprawdź w umowie.', moznosti: [ { hodnota: 'nieoznaczony', popis: 'Na czas nieoznaczony' }, { hodnota: 'oznaczony', popis: 'Na czas oznaczony' } ] },
        { id: 'podstawa', typ: 'textarea', popis: 'Podstawa wypowiedzenia z umowy', napoveda: 'Który punkt umowy pozwala wypowiedzieć i dlaczego.', placeholder: 'np. § 7 ust. 2 umowy – zmiana miejsca pracy od 1.02.2027', sirka: 64, zobrazitKdyz: { pole: 'rodzaj', je: 'oznaczony' } },
        { id: 'konto', typ: 'text', popis: 'Konto do zwrotu kaucji (nieobowiązkowe)', napoveda: 'Gdzie wynajmujący ma zwrócić kaucję.', placeholder: 'PL00 0000 0000 0000 0000 0000 0000', sirka: 34 },
        { id: 'miejsce', typ: 'text', popis: 'Miejsce', napoveda: 'Miejscowość.', placeholder: 'np. Warszawa', sirka: 18, polovina: true },
        { id: 'data', typ: 'datum', popis: 'Data', napoveda: 'Uzupełniliśmy dzisiejszą datę.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Wynajmujący', odstavce: ['{{w_imie}}, {{w_adres}}'] },
    {
      nadpis: 'Wypowiedzenie umowy najmu',
      odstavce: [
        'Ja, {{n_imie}}, kontakt {{n_kontakt}}, jako najemca lokalu {{lokal}} na podstawie umowy najmu z dnia {{umowa_data}},',
        { volba: 'rodzaj', uvodVzor: 'wypowiadam umowę (zaznacz):', moznosti: { nieoznaczony: 'wypowiadam umowę najmu zawartą na czas nieoznaczony z zachowaniem trzymiesięcznego okresu wypowiedzenia na koniec miesiąca kalendarzowego (art. 688 Kodeksu cywilnego).', oznaczony: 'wypowiadam umowę najmu zawartą na czas oznaczony na podstawie postanowień umowy (art. 673 § 3 Kodeksu cywilnego): {{podstawa}}' } },
        'Proszę o ustalenie terminu zwrotu lokalu oraz o zwrot kaucji w ciągu miesiąca od opróżnienia lokalu na rachunek nr {{konto}}.',
      ],
    },
  ],
};
