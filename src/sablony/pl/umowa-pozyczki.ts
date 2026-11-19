/**
 * Umowa pożyczki – Polska, między osobami prywatnymi. Art. 720 i nast. Kodeksu cywilnego
 * (pożyczka powyżej 1000 zł wymaga formy dokumentowej). PCC 0,5% / zwolnienia: podatki.gov.pl.
 */
import type { Sablona } from '../typy';
import { kwotaSlownie } from './liczby';
import { naDatum, isoDatum, pripominkySplatek, splatky } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { KC, PCC_FORMULARZE, PCC_POZYCZKA_RODZINA, TIP_TOZSAMOSC, TIP_GOTOWKA } from './zrodla';

const zl = (n: number) => `${formatCislo(String(n))} zł`;

export const umowaPozyczki: Sablona = {
  kod: 'PL-POZYCZKA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Umowa pożyczki',
  podnadpis: 'zawarta na podstawie art. 720 i nast. ustawy z dnia 23 kwietnia 1964 r. – Kodeks cywilny',
  souborPdf: 'umowa-pozyczki',
  paticka: 'Utworzono za darmo · szablon PL-POZYCZKA v1.0 · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'pożyczkodawca', vpravo: 'pożyczkobiorca' },
  slovo: { n: 'umowa', g: 'umowy', a: 'umowę', l: 'umowie' },
  coDal: [
    'Wydrukuj umowę w dwóch egzemplarzach, obie strony podpisują oba.',
    'Pieniądze najlepiej przekaż przelewem – to najlepszy dowód.',
    'Pożyczkobiorca: sprawdź, czy musisz złożyć PCC-3 (0,5%) w 14 dni, czy przysługuje zwolnienie.',
  ],
  prilohy: (d) => {
    if (d.splaceni !== 'splatky') return [];
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: 'Załącznik nr 1 · Harmonogram spłat',
        popis: `Razem ${zl(Number(String(d.castka).replace(/\s/g, '')))} w ${s.length} miesięcznych ratach.`,
        hlavicka: ['Rata', 'Termin', 'Kwota', 'Pozostało'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum)), zl(x.castka), zl(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Harmonogram sporządzono według uzgodnionych rat; w razie rozbieżności rozstrzyga treść umowy.',
      },
    ];
  },
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    return [
      ...(od ? [{ nazev: 'PCC-3 od pożyczki – sprawdź obowiązek (pożyczkobiorca)', datum: isoDatum(new Date(od.getFullYear(), od.getMonth(), od.getDate() + 14)) }] : []),
      ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Rata pożyczki', 'zł', { celkem: (n) => `razem ${n} rat`, posledni: 'ostatnia' }) : []),
      ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Zwrot pożyczki', datum: String(d.vratit_do) }] : []),
    ];
  },
  kontrola: [
    'Pożyczka powyżej 1000 zł wymaga formy dokumentowej (art. 720 § 2 KC) – ta umowa ją spełnia.',
    'Pożyczka co do zasady podlega podatkowi PCC 0,5%, płaci go pożyczkobiorca w 14 dni. Zwolnienia, m.in. dla najbliższej rodziny, opisuje [podatki.gov.pl](https://www.podatki.gov.pl/poradniki-i-informatory/pozyczka-miedzy-czlonkami-najblizszej-rodziny-zwolnienie-od-podatku-pcc).',
    'Odsetki muszą mieścić się w ustawowych limitach odsetek maksymalnych (art. 359 KC).',
    TIP_TOZSAMOSC,
    TIP_GOTOWKA,
  ],
  zdroje: [KC, PCC_FORMULARZE, PCC_POZYCZKA_RODZINA],
  kroky: [
    {
      id: 'strony',
      nazev: 'Strony',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Pożyczkodawca – imię i nazwisko', napoveda: 'Kto pożycza pieniądze.', sirka: 34, autocomplete: 'name' },
        { id: 'p_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Pożyczkobiorca – imię i nazwisko', napoveda: 'Kto otrzymuje pieniądze.', sirka: 34 },
        { id: 'k_pesel', typ: 'text', popis: 'PESEL', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adres zamieszkania', sirka: 46 },
      ],
    },
    {
      id: 'pozyczka',
      nazev: 'Pożyczka',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Kwota (zł)', placeholder: 'np. 10000', sirka: 12, polovina: true },
        {
          id: 'odovzdanie',
          typ: 'volba',
          popis: 'Jak pieniądze zostaną przekazane',
          moznosti: [
            { hodnota: 'hotove', popis: 'Gotówką przy podpisaniu' },
            { hodnota: 'prevod', popis: 'Przelewem na rachunek pożyczkobiorcy' },
          ],
        },
        { id: 'ucet_k', typ: 'text', popis: 'Rachunek pożyczkobiorcy', sirka: 32, zobrazitKdyz: { pole: 'odovzdanie', je: 'prevod' } },
        { id: 'predani_do', typ: 'datum', popis: 'Przelew najpóźniej do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'odovzdanie', je: 'prevod' } },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Oprocentowanie',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez odsetek' },
            { hodnota: 'ano', popis: 'Z odsetkami' },
          ],
        },
        { id: 'urok_sazba', typ: 'cislo', popis: 'Oprocentowanie', jednotka: '% w skali roku', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
      ],
    },
    {
      id: 'zwrot',
      nazev: 'Zwrot',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Jak pożyczka zostanie zwrócona',
          moznosti: [
            { hodnota: 'naraz', popis: 'Jednorazowo do określonego dnia' },
            { hodnota: 'splatky', popis: 'W miesięcznych ratach' },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: 'Termin zwrotu', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Miesięczna rata (zł)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Dzień miesiąca', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Miesiąc pierwszej raty', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet_p', typ: 'text', popis: 'Rachunek pożyczkodawcy', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Data zawarcia umowy', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    castka_slovy: (d) => kwotaSlownie(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[2]}.${m[1]}` : '';
    },
  },
  clanky: [
    {
      nadpis: 'Strony umowy',
      odstavce: [
        '**Pożyczkodawca:** {{p_jmeno}}, PESEL {{p_pesel}}, zamieszkały/a {{p_adresa}}',
        '**Pożyczkobiorca:** {{k_jmeno}}, PESEL {{k_pesel}}, zamieszkały/a {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Przedmiot umowy',
      vysvetleni: 'Ile i jak pieniądze zostaną przekazane.',
      odstavce: [
        'Pożyczkodawca przenosi na własność pożyczkobiorcy kwotę {{castka}} (słownie: {{castka_slovy}}), a pożyczkobiorca zobowiązuje się zwrócić ją na warunkach umowy.',
        {
          volba: 'odovzdanie',
          uvodVzor: 'Przekazanie pieniędzy (zaznacz jedną opcję):',
          moznosti: {
            hotove: 'Pożyczkodawca przekazał całą kwotę gotówką przy podpisaniu umowy, co pożyczkobiorca potwierdza swoim podpisem.',
            prevod: 'Pożyczkodawca przeleje całą kwotę na rachunek pożyczkobiorcy nr {{ucet_k}} najpóźniej do dnia {{predani_do}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Oprocentowanie',
      odstavce: [
        {
          volba: 'urok',
          uvodVzor: 'Odsetki (zaznacz jedną opcję):',
          moznosti: {
            ne: 'Pożyczka jest nieoprocentowana.',
            ano: 'Pożyczkobiorca zapłaci odsetki w wysokości {{urok_sazba}} od kwoty pozostałej do spłaty, płatne wraz z ratami, najpóźniej z ostatnią z nich.',
          },
        },
      ],
    },
    {
      nadpis: 'Zwrot pożyczki',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Sposób zwrotu (zaznacz jedną opcję):',
          moznosti: {
            naraz: 'Pożyczkobiorca zwróci całą kwotę jednorazowo najpóźniej do dnia {{vratit_do}}.',
            splatky: 'Pożyczkobiorca zwróci kwotę w miesięcznych ratach po {{splatka}}, płatnych do {{splatka_den}}. dnia każdego miesiąca, począwszy od miesiąca {{prvni_mesic}}, aż do całkowitej spłaty. Ostatnia rata może być niższa.',
          },
        },
        'Spłaty będą dokonywane na rachunek pożyczkodawcy nr {{ucet_p}} albo gotówką za pokwitowaniem.',
      ],
    },
    {
      nadpis: 'Postanowienia końcowe',
      odstavce: [
        'W sprawach nieuregulowanych umową stosuje się przepisy Kodeksu cywilnego, w szczególności art. 720–724.',
        'Ewentualny podatek od czynności cywilnoprawnych ponosi pożyczkobiorca.',
        'Umowę sporządzono w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej ze stron.',
      ],
    },
  ],
};
