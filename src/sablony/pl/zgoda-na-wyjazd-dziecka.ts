/**
 * Zgoda rodziców na wyjazd dziecka za granicę – Polska.
 * Prawo polskie nie wymaga zgody na piśmie (konsulat RP, gov.pl), ale wyjazd za granicę to istotna sprawa dziecka (art. 97 § 2 KRO),
 * a Straż Graniczna może sprawdzać, czy dziecko nie wyjeżdża wbrew woli rodziców. Powroty.gov.pl zaleca podpis poświadczony notarialnie,
 * odpis aktu urodzenia i tłumaczenie przysięgłe. Wymogi kraju docelowego – MSZ „Informacje dla podróżujących”, ambasada/konsulat.
 * Przy każdej zmianie tekstu zwiększyć `verze` i `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { KRO, POWROTY_DZIECKO, STOP_UPROWADZENIOM, MSZ_PODROZE, SG_DZIECKO } from './zrodla';

export const zgodaNaWyjazdDziecka: Sablona = {
  kod: 'PL-ZGODA-WYJAZD-DZIECKA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'pl',
  jazyk: 'pl',
  nazev: 'Zgoda na wyjazd dziecka za granicę',
  podnadpis: 'zgoda rodziców (opiekunów prawnych) na podróż małoletniego za granicę',
  souborPdf: 'zgoda-na-wyjazd-dziecka',
  paticka: 'Utworzono za darmo · szablon PL-ZGODA-WYJAZD-DZIECKA v1.0 · według zaleceń gov.pl · wzór do wypełnienia, nie porada prawna · za treść odpowiadają strony, zalecamy konsultację z prawnikiem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'rodzic / opiekun prawny 1 (podpis poświadczony)', vpravo: 'rodzic / opiekun prawny 2 (podpis poświadczony)' },
  slovo: { n: 'zgoda', g: 'zgody', a: 'zgodę', l: 'zgodzie' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Portal powroty.gov.pl zaleca, by zgodę podpisać przed notariuszem i dołączyć klauzulę notarialną. Dlatego zgodę wydrukuj i podpisz własnoręcznie u notariusza – nie na ekranie.',
  coDal: [
    'Rodzic (rodzice), który nie jedzie z dzieckiem, podpisuje zgodę przed notariuszem – notariusz poświadcza podpis.',
    'Dołącz skrócony odpis aktu urodzenia dziecka. Przy wyjeździe poza Polskę warto mieć tłumaczenie przysięgłe na język kraju docelowego.',
    'Dziecko musi mieć własny ważny dokument: paszport, a w krajach UE wystarczy dowód osobisty. Sprawdź datę ważności.',
    'Sprawdź wymogi kraju docelowego i krajów tranzytowych w serwisie MSZ „Informacje dla podróżujących”, u przewoźnika lub w konsulacie.',
  ],
  kontrola: [
    'Prawo polskie nie wymaga zgody na piśmie, ale wyjazd za granicę jest istotną sprawą dziecka, o której rodzice decydują wspólnie, a w braku porozumienia – sąd opiekuńczy (art. 97 § 2 KRO).',
    'Straż Graniczna może dodatkowo sprawdzać dzieci podróżujące same, z jednym rodzicem lub z osobą obcą, czy nie wyjeżdżają wbrew woli rodziców – [Straż Graniczna](https://www.nadwislanski.strazgraniczna.pl/wis/aktualnosci/41816,Dziecko-w-podrozy.html).',
    'Wymogi państw są różne i nie ma jednolitych zasad w Europie. Sprawdź kraj docelowy i tranzytowy w serwisie [MSZ – Informacje dla podróżujących](https://www.gov.pl/web/dyplomacja/informacje-dla-podrozujacych) lub w ambasadzie.',
    'Dane dziecka i opiekuna przepisz dokładnie z dokumentów podróży: imię i nazwisko, data urodzenia, numer paszportu lub dowodu.',
    'Wpisz konkretny kraj i termin podróży – zgoda „dokądkolwiek i kiedykolwiek” może budzić wątpliwości.',
    'Wyjazd na stałe lub zmiana miejsca pobytu dziecka za granicą wymaga zgody drugiego rodzica albo sądu – ten wzór służy do podróży.',
  ],
  zdroje: [KRO, POWROTY_DZIECKO, STOP_UPROWADZENIOM, MSZ_PODROZE, SG_DZIECKO],

  kroky: [
    {
      id: 'rodzice',
      nazev: 'Rodzice',
      popis: 'Zwykle rodzice. Jeżeli dziecko jedzie z jednym z rodziców, wystarczy zgoda drugiego.',
      pole: [
        { id: 'r1_imie', typ: 'text', popis: 'Rodzic 1 – imię i nazwisko', napoveda: 'Rodzic lub opiekun prawny (z postanowieniem sądu).', placeholder: 'np. Anna Nowak', sirka: 34, autocomplete: 'name' },
        { id: 'r1_pesel', typ: 'text', popis: 'PESEL', napoveda: 'Z dowodu osobistego.', placeholder: 'np. 85020254321', sirka: 14, polovina: true },
        { id: 'r1_dokument', typ: 'text', popis: 'Seria i numer dowodu lub paszportu', napoveda: 'Notariusz i tak sprawdzi dokument – wpisz ten sam.', placeholder: 'np. ABC 123456', sirka: 14, polovina: true },
        { id: 'r1_adres', typ: 'text', popis: 'Adres zamieszkania', napoveda: 'Aktualny adres.', placeholder: 'np. ul. Polna 7/12, 00-001 Warszawa', sirka: 46 },
        { id: 'r1_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Żeby można było skontaktować się z Tobą na granicy lub lotnisku. Podaj z numerem kierunkowym +48.', placeholder: 'np. +48 600 100 200', sirka: 18, polovina: true },
        { id: 'r2_imie', typ: 'text', popis: 'Rodzic 2 – imię i nazwisko (nieobowiązkowe)', napoveda: 'Drugi rodzic. Jeżeli jedzie z dzieckiem, nie musi podpisywać zgody – zostaw puste.', placeholder: 'np. Piotr Nowak', sirka: 34 },
        { id: 'r2_pesel', typ: 'text', popis: 'PESEL', napoveda: 'Z dowodu osobistego drugiego rodzica.', placeholder: 'np. 83030312345', sirka: 14, polovina: true },
        { id: 'r2_dokument', typ: 'text', popis: 'Seria i numer dowodu lub paszportu', napoveda: 'Dokument drugiego rodzica.', placeholder: 'np. DEF 654321', sirka: 14, polovina: true },
        { id: 'r2_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Z numerem kierunkowym +48.', placeholder: 'np. +48 600 300 400', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'dziecko',
      nazev: 'Dziecko',
      pole: [
        { id: 'd_imie', typ: 'text', popis: 'Imię i nazwisko dziecka', napoveda: 'Dokładnie jak w paszporcie lub dowodzie dziecka.', placeholder: 'np. Zofia Nowak', sirka: 34 },
        { id: 'd_urodzenie', typ: 'datum', popis: 'Data urodzenia', napoveda: 'Z dokumentu dziecka.', sirka: 14, polovina: true },
        { id: 'd_pesel', typ: 'text', popis: 'PESEL dziecka', napoveda: 'Z dokumentu dziecka.', placeholder: 'np. 15210112345', sirka: 14, polovina: true },
        { id: 'd_dokument', typ: 'text', popis: 'Numer paszportu lub dowodu dziecka', napoveda: 'Dokument, z którym dziecko podróżuje.', placeholder: 'np. EA 1234567', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'podroz',
      nazev: 'Podróż',
      pole: [
        {
          id: 'opieka',
          typ: 'volba',
          popis: 'Z kim podróżuje dziecko',
          napoveda: 'Osoba towarzysząca musi być w zgodzie wymieniona z imienia i nazwiska.',
          moznosti: [
            { hodnota: 'rodzic', popis: 'Z drugim rodzicem' },
            { hodnota: 'inna', popis: 'Z inną osobą (dziadkowie, krewni, opiekun kolonii…)' },
            { hodnota: 'samo', popis: 'Samo (np. lot z opieką przewoźnika)' },
          ],
        },
        { id: 'o_imie', typ: 'text', popis: 'Osoba towarzysząca – imię i nazwisko', napoveda: 'Kto opiekuje się dzieckiem w podróży.', placeholder: 'np. Maria Kowalska', sirka: 34, zobrazitKdyz: { pole: 'opieka', je: ['rodzic', 'inna'] } },
        { id: 'o_urodzenie', typ: 'datum', popis: 'Data urodzenia osoby towarzyszącej', napoveda: 'Z jej dokumentu.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'opieka', je: ['rodzic', 'inna'] } },
        { id: 'o_dokument', typ: 'text', popis: 'Numer dokumentu osoby towarzyszącej', napoveda: 'Paszport lub dowód, z którym podróżuje.', placeholder: 'np. GHI 112233', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'opieka', je: ['rodzic', 'inna'] } },
        { id: 'o_relacja', typ: 'text', popis: 'Kim jest dla dziecka', napoveda: 'Np. babcia, ciocia, wychowawca kolonii.', placeholder: 'np. babcia', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'opieka', je: 'inna' } },
        { id: 'kraj', typ: 'text', popis: 'Kraj docelowy (i tranzytowe)', napoveda: 'Wszystkie kraje, do których dziecko jedzie lub przez które przejeżdża. Wymogi każdego sprawdź na stronie MSZ.', placeholder: 'np. Chorwacja (przez Czechy, Austrię i Słowenię)', sirka: 46 },
        { id: 'od', typ: 'datum', popis: 'Wyjazd', napoveda: 'Data wyjazdu.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Powrót', napoveda: 'Data powrotu.', sirka: 14, polovina: true },
        { id: 'cel', typ: 'text', popis: 'Cel podróży (nieobowiązkowe)', napoveda: 'Np. wakacje, kolonie, wymiana szkolna.', placeholder: 'np. wakacje letnie', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miejscowość', napoveda: 'Uzupełnimy z adresu rodzica.', placeholder: 'np. Warszawa', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adres' } },
        { id: 'datum', typ: 'datum', popis: 'Data', napoveda: 'Uzupełniliśmy dzisiejszą datę. U notariusza możesz ją poprawić.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Rodzice (opiekunowie prawni)',
      vysvetleni: 'Kto wyraża zgodę. Telefon pomoże służbom na granicy lub lotnisku.',
      odstavce: [
        '{{r1_imie}}, PESEL {{r1_pesel}}, dokument tożsamości {{r1_dokument}}, zamieszkały/a {{r1_adres}}, tel. {{r1_telefon}}',
        '{{r2_imie}}, PESEL {{r2_pesel}}, dokument tożsamości {{r2_dokument}}, tel. {{r2_telefon}}',
      ],
    },
    {
      nadpis: 'Zgoda',
      vysvetleni: 'Kto, z kim, dokąd i kiedy jedzie. Im konkretniej, tym mniej pytań na granicy.',
      odstavce: [
        'jako rodzic (rodzice) / opiekun prawny wyrażam (wyrażamy) zgodę na wyjazd małoletniego dziecka',
        '{{d_imie}}, urodzonego/ej {{d_urodzenie}}, PESEL {{d_pesel}}, numer dokumentu podróży {{d_dokument}},',
        {
          volba: 'opieka',
          uvodVzor: 'z kim (zaznacz jedną możliwość):',
          moznosti: {
            rodzic: 'pod opieką drugiego rodzica {{o_imie}}, urodzonego/ej {{o_urodzenie}}, numer dokumentu {{o_dokument}},',
            inna: 'pod opieką {{o_imie}}, urodzonego/ej {{o_urodzenie}}, numer dokumentu {{o_dokument}} ({{o_relacja}}),',
            samo: 'bez osoby towarzyszącej,',
          },
        },
        'do kraju: {{kraj}}, w okresie od {{od}} do {{do}}, w celu: {{cel}}.',
        'Na czas podróży upoważniam (upoważniamy) osobę towarzyszącą do sprawowania opieki nad dzieckiem i podejmowania w jego interesie niezbędnych decyzji, w tym zgody na niezbędną pomoc medyczną.',
        'Załącznik: skrócony odpis aktu urodzenia dziecka.',
      ],
    },
  ],
};
