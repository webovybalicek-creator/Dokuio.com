/**
 * Ugovor o najmu stana – Hrvatska, slobodno ugovorena najamnina. Zakon o najmu stanova: pisani oblik (čl. 4. st. 2.),
 * sadržaj (čl. 5.); otkaz najmodavca pisano s obrazloženjem, otkazni rok tri mjeseca od 1. dana sljedećeg mjeseca;
 * najmoprimac najam na neodređeno vrijeme otkazuje najmanje tri mjeseca prije iseljenja (gov.hr, zakon.hr, 20. 11. 2026).
 */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZNS, ZOO, GOV_NAJAM, SAVJET_IDENTITET, PATICKA } from './izvori';

export const ugovorONajmuStana: Sablona = {
  kod: 'HR-NAJAM',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Ugovor o najmu stana',
  podnadpis: 'sklopljen prema Zakonu o najmu stanova i Zakonu o obveznim odnosima',
  souborPdf: 'ugovor-o-najmu-stana',
  paticka: PATICKA('HR-NAJAM'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'najmodavac', vpravo: 'najmoprimac' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: [
    'Ispišite ugovor u dva primjerka i oba potpišite – ugovor o najmu stana mora biti u pisanom obliku.',
    'Pri predaji stana sastavite primopredajni zapisnik sa stanjem brojila i fotografijama.',
    'Jamčevinu predajte na račun ili uz potvrdu o primitku novca.',
    'Najmodavac: prihod od najma je oporeziv – kako ga prijaviti provjerite kod Porezne uprave.',
  ],
  kontrola: [
    'Ugovor o najmu stana sklapa se u pisanom obliku (Zakon o najmu stanova, čl. 4.).',
    'Najmodavac je vlasnik stana – provjerite u zemljišnoj knjizi (e-izvadak, Uređena zemlja).',
    'Najmodavac može otkazati najam samo iz zakonskih razloga, pisano i s obrazloženjem; otkazni rok je tri mjeseca i teče od prvog dana sljedećeg mjeseca ([gov.hr](https://gov.hr/hr/najam-nekretnine/1292)).',
    'Najmoprimac najam na neodređeno vrijeme može otkazati, ali mora najmodavca obavijestiti najmanje tri mjeseca prije iseljenja.',
    'Visinu jamčevine zakon ne ograničava – uobičajeno je jedna do dvije najamnine. Upišite kada i kako se vraća.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZNS, ZOO, GOV_NAJAM],
  kroky: [
    {
      id: 'strane',
      nazev: 'Najmodavac i najmoprimac',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Najmodavac – ime i prezime', napoveda: 'Vlasnik stana.', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB najmodavca', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa najmodavca', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Najmoprimac – ime i prezime', placeholder: 'npr. Ana Kovačević', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB najmoprimca', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Dosadašnja adresa najmoprimca', sirka: 46 },
        { id: 'osobe', typ: 'text', popis: 'Ostali korisnici stana (neobavezno)', placeholder: 'npr. bračni drug, dijete', sirka: 46 },
      ],
    },
    {
      id: 'stan',
      nazev: 'Stan',
      pole: [
        { id: 'stan_adresa', typ: 'text', popis: 'Adresa stana', placeholder: 'npr. Vukovarska 20, 10000 Zagreb, 3. kat', sirka: 46 },
        { id: 'povrsina', typ: 'cislo', popis: 'Površina', jednotka: 'm²', placeholder: 'npr. 55', sirka: 8, polovina: true },
        { id: 'sobe', typ: 'cislo', popis: 'Broj soba', placeholder: 'npr. 2', sirka: 4, polovina: true },
        { id: 'oprema', typ: 'textarea', popis: 'Namještaj i oprema (neobavezno)', placeholder: 'npr. kuhinja s uređajima, perilica, ormar', sirka: 64 },
      ],
    },
    {
      id: 'uvjeti',
      nazev: 'Trajanje, najamnina, jamčevina',
      pole: [
        {
          id: 'trajanje', typ: 'volba', popis: 'Trajanje najma',
          moznosti: [ { hodnota: 'neodredeno', popis: 'Na neodređeno vrijeme' }, { hodnota: 'odredeno', popis: 'Na određeno vrijeme' } ],
        },
        { id: 'od', typ: 'datum', popis: 'Početak najma', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Kraj najma', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'trajanje', je: 'odredeno' } },
        { id: 'najamnina', typ: 'castka', popis: 'Mjesečna najamnina (€)', sirka: 12, polovina: true },
        { id: 'dospijece', typ: 'cislo', popis: 'Plaćanje do (dan u mjesecu)', placeholder: 'npr. 5', sirka: 4, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN najmodavca', sirka: 30 },
        { id: 'rezije', typ: 'text', popis: 'Režije koje plaća najmoprimac', placeholder: 'npr. struja, voda, plin, internet, pričuva', sirka: 56 },
        { id: 'jamcevina', typ: 'castka', popis: 'Jamčevina (€)', sirka: 12, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum potpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { najamnina_slovima: (d) => iznosSlovima(d.najamnina), jamcevina_slovima: (d) => iznosSlovima(d.jamcevina) },
  clanky: [
    {
      nadpis: 'Ugovorne strane',
      odstavce: [
        '**Najmodavac:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}',
        '**Najmoprimac:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}',
        'Uz najmoprimca stan će koristiti: {{osobe}}',
      ],
    },
    {
      nadpis: 'Predmet najma',
      odstavce: [
        'Najmodavac daje najmoprimcu u najam stan na adresi {{stan_adresa}}, površine {{povrsina}} m², s {{sobe}} sobe/soba (u daljnjem tekstu: stan), radi stanovanja.',
        'Stan se predaje s ovim namještajem i opremom: {{oprema}}. Stanje stana pri predaji strane bilježe u primopredajnom zapisniku.',
      ],
    },
    {
      nadpis: 'Trajanje najma',
      odstavce: [
        {
          volba: 'trajanje',
          uvodVzor: 'Trajanje (označite jednu mogućnost):',
          moznosti: {
            neodredeno: 'Ugovor se sklapa na neodređeno vrijeme, počevši od {{od}}.',
            odredeno: 'Ugovor se sklapa na određeno vrijeme od {{od}} do {{do}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Najamnina i režije',
      odstavce: [
        'Mjesečna najamnina iznosi **{{najamnina}}** (slovima: {{najamnina_slovima}}) i plaća se unaprijed do {{dospijece}}. dana u mjesecu na račun najmodavca IBAN {{iban}}.',
        'Uz najamninu najmoprimac plaća sljedeće troškove: {{rezije}}.',
      ],
    },
    {
      nadpis: 'Jamčevina',
      odstavce: [
        'Najmoprimac pri potpisu ugovora predaje najmodavcu jamčevinu od {{jamcevina}} (slovima: {{jamcevina_slovima}}).',
        'Najmodavac vraća jamčevinu najkasnije 30 dana nakon predaje stana, umanjenu samo za dospjela neplaćena dugovanja iz najma i za štetu na stanu iznad uobičajenog trošenja.',
      ],
    },
    {
      nadpis: 'Prava i obveze',
      odstavce: [
        'Najmodavac održava stan u stanju pogodnom za stanovanje i o svom trošku pravodobno obavlja potrebne popravke.',
        'Najmoprimac koristi stan s pažnjom dobrog gospodara, o svom trošku obavlja sitne popravke vezane uz redovitu uporabu i obavješćuje najmodavca o potrebnim popravcima.',
        'Najmoprimac ne smije dati stan ili njegov dio u podnajam ni preinačavati stan bez pisane suglasnosti najmodavca.',
      ],
    },
    {
      nadpis: 'Prestanak najma',
      odstavce: [
        'Najmoprimac može otkazati ugovor sklopljen na neodređeno vrijeme pisanom obaviješću najmanje tri mjeseca prije dana iseljenja.',
        'Najmodavac može otkazati ugovor samo iz razloga propisanih Zakonom o najmu stanova, u pisanom obliku s obrazloženjem.',
        'Pri iseljenju najmoprimac predaje stan u stanju u kojem ga je primio, uzimajući u obzir uobičajeno trošenje.',
      ],
    },
    {
      nadpis: 'Završne odredbe',
      odstavce: [
        'Na sve što nije uređeno ovim ugovorom primjenjuju se odredbe Zakona o najmu stanova i Zakona o obveznim odnosima.',
        'Ugovor je sastavljen u dva istovjetna primjerka, od kojih svaka strana zadržava po jedan.',
      ],
    },
  ],
};
