/**
 * Ugovor o zajmu između fizičkih osoba – Hrvatska (ZOO, ugovor o zajmu). Ugovorna kamata između osoba od kojih barem
 * jedna nije trgovac ne smije biti viša od stope zakonskih zateznih kamata uvećane za polovinu (ZOO čl. 26.).
 */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, SAVJET_GOTOVINA, PATICKA } from './izvori';

export const ugovorOZajmu: Sablona = {
  kod: 'HR-ZAJAM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Ugovor o zajmu',
  podnadpis: 'sklopljen prema odredbama Zakona o obveznim odnosima o ugovoru o zajmu',
  souborPdf: 'ugovor-o-zajmu',
  paticka: PATICKA('HR-ZAJAM'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'zajmodavac', vpravo: 'zajmoprimac' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: [
    'Ispišite ugovor u dva primjerka i oba potpišite.',
    'Novac predajte na račun – potvrda banke najbolji je dokaz. Pri gotovini neka zajmoprimac potpiše potvrdu o primitku novca.',
    'Spremite datume obroka u kalendar.',
  ],
  kontrola: [
    'Ugovorna kamata između građana ne smije biti viša od stope zakonskih zateznih kamata uvećane za polovinu te stope (ZOO čl. 26.).',
    'Ako zajmoprimac kasni, duguje zakonske zatezne kamate; njihovu stopu objavljuje se polugodišnje.',
    'Za veće iznose razmislite o solemnizaciji kod javnog bilježnika – ovršna isprava olakšava naplatu.',
    SAVJET_IDENTITET,
    SAVJET_GOTOVINA,
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'strane',
      nazev: 'Zajmodavac i zajmoprimac',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Zajmodavac – ime i prezime', napoveda: 'Tko posuđuje novac.', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB zajmodavca', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa zajmodavca', placeholder: 'npr. Ilica 12, 10000 Zagreb', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Zajmoprimac – ime i prezime', napoveda: 'Tko novac prima i vraća.', placeholder: 'npr. Marko Babić', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB zajmoprimca', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa zajmoprimca', sirka: 46 },
      ],
    },
    {
      id: 'zajam',
      nazev: 'Iznos i vraćanje',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Iznos zajma (€)', placeholder: 'npr. 3000', sirka: 12, polovina: true },
        {
          id: 'predaja', typ: 'volba', popis: 'Kako se novac predaje',
          moznosti: [ { hodnota: 'gotovina', popis: 'Gotovinom pri potpisu' }, { hodnota: 'racun', popis: 'Na račun zajmoprimca' } ],
        },
        { id: 'k_iban', typ: 'text', popis: 'IBAN zajmoprimca', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30, zobrazitKdyz: { pole: 'predaja', je: 'racun' } },
        {
          id: 'vraceni', typ: 'volba', popis: 'Vraćanje',
          moznosti: [ { hodnota: 'jednokratno', popis: 'Odjednom do određenog datuma' }, { hodnota: 'obroci', popis: 'U mjesečnim obrocima' } ],
        },
        { id: 'rok', typ: 'datum', popis: 'Vratiti najkasnije do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vraceni', je: 'jednokratno' } },
        { id: 'obrok', typ: 'castka', popis: 'Mjesečni obrok (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vraceni', je: 'obroci' } },
        { id: 'obrok_den', typ: 'cislo', popis: 'Dan u mjesecu', placeholder: 'npr. 15', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'vraceni', je: 'obroci' } },
        { id: 'prvni_obrok', typ: 'datum', popis: 'Prvi obrok', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vraceni', je: 'obroci' } },
        {
          id: 'kamata', typ: 'volba', popis: 'Kamata',
          moznosti: [ { hodnota: 'bez', popis: 'Bez kamata' }, { hodnota: 's', popis: 'S ugovornom kamatom' } ],
        },
        { id: 'kamata_stopa', typ: 'cislo', popis: 'Kamatna stopa (% godišnje)', placeholder: 'npr. 3', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'kamata', je: 's' } },
        { id: 'p_iban', typ: 'text', popis: 'IBAN zajmodavca za vraćanje', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', placeholder: 'npr. Zagreb', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum potpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [
    {
      nadpis: 'Ugovorne strane',
      odstavce: [
        '**Zajmodavac:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}',
        '**Zajmoprimac:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Predmet ugovora',
      vysvetleni: 'Koliko se posuđuje i kako se novac predaje.',
      odstavce: [
        'Zajmodavac daje zajmoprimcu u zajam iznos od **{{castka}}** (slovima: {{castka_slovima}}), a zajmoprimac se obvezuje vratiti isti iznos pod uvjetima iz ovog ugovora.',
        {
          volba: 'predaja',
          uvodVzor: 'Predaja novca (označite jednu mogućnost):',
          moznosti: {
            gotovina: 'Zajmoprimac je iznos zajma primio u gotovini pri potpisu ovog ugovora, što svojim potpisom potvrđuje.',
            racun: 'Zajmodavac će iznos zajma uplatiti na račun zajmoprimca IBAN {{k_iban}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Vraćanje zajma',
      vysvetleni: 'Do kada i na koji način.',
      odstavce: [
        {
          volba: 'vraceni',
          uvodVzor: 'Način vraćanja (označite jednu mogućnost):',
          moznosti: {
            jednokratno: 'Zajmoprimac će zajam vratiti odjednom najkasnije do {{rok}}.',
            obroci: 'Zajmoprimac će zajam vraćati u mjesečnim obrocima od {{obrok}}, uvijek do {{obrok_den}}. dana u mjesecu, počevši od {{prvni_obrok}}, do potpune otplate.',
          },
        },
        'Plaćanja se vrše na račun zajmodavca IBAN {{p_iban}}. Zajmoprimac može zajam vratiti i prije roka.',
        'Ako zajmoprimac zakasni s plaćanjem nekog obroka dulje od 30 dana, zajmodavac može zahtijevati vraćanje cijelog preostalog iznosa odjednom.',
      ],
    },
    {
      nadpis: 'Kamate',
      vysvetleni: 'Je li zajam besplatan ili uz kamatu.',
      odstavce: [
        {
          volba: 'kamata',
          uvodVzor: 'Kamata (označite jednu mogućnost):',
          moznosti: {
            bez: 'Zajam je beskamatan.',
            s: 'Zajmoprimac plaća ugovornu kamatu po stopi od {{kamata_stopa}} % godišnje na neotplaćeni dio zajma.',
          },
        },
        'U slučaju zakašnjenja zajmoprimac duguje zakonske zatezne kamate.',
      ],
    },
    {
      nadpis: 'Završne odredbe',
      odstavce: [
        'Na sve što nije uređeno ovim ugovorom primjenjuju se odredbe Zakona o obveznim odnosima.',
        'Ugovor je sastavljen u dva istovjetna primjerka, od kojih svaka strana zadržava po jedan.',
      ],
    },
  ],
};
