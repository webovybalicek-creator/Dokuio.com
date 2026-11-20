/** Kupoprodajni ugovor za pokretnu stvar između fizičkih osoba – Hrvatska (ZOO, kupoprodaja). */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, SAVJET_GOTOVINA, PATICKA } from './izvori';

export const kupoprodajniUgovor: Sablona = {
  kod: 'HR-KUPOPRODAJA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Kupoprodajni ugovor',
  podnadpis: 'za pokretnu stvar, prema Zakonu o obveznim odnosima',
  souborPdf: 'kupoprodajni-ugovor',
  paticka: PATICKA('HR-KUPOPRODAJA'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodavatelj', vpravo: 'kupac' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: ['Ispišite ugovor u dva primjerka i oba potpišite.', 'Stvar predajte tek kada je novac na računu ili u ruci.'],
  kontrola: [
    'Opišite stvar što preciznije (marka, model, serijski broj) i navedite poznate nedostatke.',
    'Kupac koji je znao za nedostatak ne može se na njega kasnije pozivati – zato ih iskreno upišite.',
    'Prijevare: tko šalje poveznicu za „sigurno plaćanje” ili „dostavu” i traži podatke kartice, vara. Za primitak novca ne trebate unositi podatke kartice.',
    SAVJET_IDENTITET,
    SAVJET_GOTOVINA,
  ],
  zdroje: [ZOO],
  kroky: [
    {
      id: 'strane',
      nazev: 'Prodavatelj i kupac',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodavatelj – ime i prezime', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa prodavatelja', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupac – ime i prezime', placeholder: 'npr. Ana Kovačević', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa kupca', sirka: 46 },
      ],
    },
    {
      id: 'stvar',
      nazev: 'Stvar i cijena',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'Što se prodaje', placeholder: 'npr. bicikl Trek Marlin 7, serijski broj …', sirka: 64 },
        {
          id: 'nedostaci', typ: 'volba', popis: 'Poznati nedostaci',
          moznosti: [ { hodnota: 'ne', popis: 'Bez poznatih nedostataka' }, { hodnota: 'da', popis: 'S nedostacima' } ],
        },
        { id: 'nedostaci_opis', typ: 'textarea', popis: 'Opis nedostataka', sirka: 64, zobrazitKdyz: { pole: 'nedostaci', je: 'da' } },
        { id: 'cena', typ: 'castka', popis: 'Cijena (€)', sirka: 12, polovina: true },
        {
          id: 'placanje', typ: 'volba', popis: 'Plaćanje',
          moznosti: [ { hodnota: 'gotovina', popis: 'Gotovinom pri predaji' }, { hodnota: 'racun', popis: 'Na račun prije predaje' } ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN prodavatelja', sirka: 30, zobrazitKdyz: { pole: 'placanje', je: 'racun' } },
        { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovima: (d) => iznosSlovima(d.cena) },
  clanky: [
    {
      nadpis: 'Ugovorne strane',
      odstavce: ['**Prodavatelj:** {{p_jmeno}}, adresa {{p_adresa}}', '**Kupac:** {{k_jmeno}}, adresa {{k_adresa}}'],
    },
    {
      nadpis: 'Predmet i stanje',
      odstavce: [
        'Prodavatelj prodaje, a kupac kupuje: {{predmet}}.',
        {
          volba: 'nedostaci',
          uvodVzor: 'Poznati nedostaci (označite jednu mogućnost):',
          moznosti: {
            ne: 'Prodavatelju nisu poznati nedostaci stvari.',
            da: 'Prodavatelj je kupca upozorio na sljedeće nedostatke: {{nedostaci_opis}}',
          },
        },
        'Kupac je stvar pregledao i kupuje je u zatečenom stanju.',
      ],
    },
    {
      nadpis: 'Cijena i predaja',
      odstavce: [
        'Cijena iznosi **{{cena}}** (slovima: {{cena_slovima}}).',
        {
          volba: 'placanje',
          uvodVzor: 'Plaćanje (označite jednu mogućnost):',
          moznosti: {
            gotovina: 'Kupac plaća cijenu gotovinom pri predaji stvari; prodavatelj potpisom potvrđuje primitak.',
            racun: 'Kupac plaća cijenu na račun prodavatelja IBAN {{iban}}; prodavatelj predaje stvar nakon primitka uplate.',
          },
        },
        'Predajom stvari na kupca prelaze vlasništvo i rizik.',
      ],
    },
    {
      nadpis: 'Završne odredbe',
      odstavce: ['Na sve što nije uređeno ovim ugovorom primjenjuju se odredbe Zakona o obveznim odnosima.', 'Ugovor je sastavljen u dva istovjetna primjerka.'],
    },
  ],
};
