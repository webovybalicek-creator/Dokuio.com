/**
 * Ugovor o darovanju novca ili pokretnine – Hrvatska. ZOO čl. 482: darovanje bez prave predaje stvari mora biti u obliku
 * javnobilježničkog akta ili solemnizirane isprave; darovanje nekretnine pisano (ovaj obrazac nije za nekretnine).
 * Porez na nasljedstva i darove 4 % (novac, pokretnine iznad 6.700 €), oslobođeni bračni drug, potomci, preci, posvojenici.
 */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, PU_DAROVI, GOV_POREZ_DAROVI, SAVJET_IDENTITET, PATICKA } from './izvori';

export const ugovorODarovanju: Sablona = {
  kod: 'HR-DAROVANJE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Ugovor o darovanju',
  podnadpis: 'darovanje novca ili pokretne stvari uz predaju, prema Zakonu o obveznim odnosima',
  souborPdf: 'ugovor-o-darovanju',
  paticka: PATICKA('HR-DAROVANJE'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'darovatelj', vpravo: 'daroprimatelj' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: [
    'Ispišite ugovor u dva primjerka i oba potpišite.',
    'Dar predajte odmah – novac najbolje uplatom na račun.',
    'Daroprimatelj: ako nije oslobođen, Porezna uprava utvrdit će porez na darove rješenjem; porez se plaća u 15 dana od dostave rješenja.',
  ],
  kontrola: [
    'Ovaj obrazac je za darovanje uz pravu predaju (novac ili stvar se predaje odmah). Darovanje bez predaje mora biti u obliku javnobilježničkog akta ili solemnizirane isprave (ZOO čl. 482.), nekretnine se daruju posebnim ugovorom.',
    'Porez na darove iznosi 4 % na novac i na pokretnine pojedinačne tržišne vrijednosti iznad 6.700 €. Oslobođeni su bračni drug, potomci i preci u uspravnoj liniji te posvojenici i posvojitelji ([Porezna uprava](https://porezna-uprava.gov.hr/hr/nasljednik-i-daroprimatelj-gotovine-novcane-trazbine-vrijednosnog-papira-i-pokretnine/4445)).',
    'Kod darovanja vozila daroprimatelj obavlja promjenu vlasništva u stanici za tehnički pregled; darovanje između bračnih drugova i u uspravnoj liniji oslobođeno je upravne pristojbe.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO, PU_DAROVI, GOV_POREZ_DAROVI],
  kroky: [
    {
      id: 'strane',
      nazev: 'Darovatelj i daroprimatelj',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Darovatelj – ime i prezime', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB darovatelja', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa darovatelja', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Daroprimatelj – ime i prezime', placeholder: 'npr. Petra Horvat', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB daroprimatelja', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa daroprimatelja', sirka: 46 },
        { id: 'srodstvo', typ: 'text', popis: 'Srodstvo (neobavezno)', napoveda: 'Važno za porez – npr. kći, sin, bračni drug.', placeholder: 'npr. kći', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'dar',
      nazev: 'Dar',
      pole: [
        {
          id: 'vrsta', typ: 'volba', popis: 'Što se daruje',
          moznosti: [ { hodnota: 'novac', popis: 'Novac' }, { hodnota: 'stvar', popis: 'Pokretna stvar (npr. automobil)' } ],
        },
        { id: 'castka', typ: 'castka', popis: 'Iznos (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vrsta', je: 'novac' } },
        { id: 'stvar', typ: 'textarea', popis: 'Opis stvari', napoveda: 'Kod vozila marka, broj šasije i registarska oznaka.', placeholder: 'npr. osobni automobil Škoda Fabia, broj šasije …, reg. oznaka …', sirka: 64, zobrazitKdyz: { pole: 'vrsta', je: 'stvar' } },
        { id: 'vrijednost', typ: 'castka', popis: 'Približna vrijednost stvari (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vrsta', je: 'stvar' } },
        { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum potpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [
    {
      nadpis: 'Ugovorne strane',
      odstavce: [
        '**Darovatelj:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}',
        '**Daroprimatelj:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}, srodstvo s darovateljem: {{srodstvo}}',
      ],
    },
    {
      nadpis: 'Predmet darovanja',
      vysvetleni: 'Što se daruje. Predaja se obavlja pri potpisu.',
      odstavce: [
        {
          volba: 'vrsta',
          uvodVzor: 'Predmet darovanja (označite jednu mogućnost):',
          moznosti: {
            novac: 'Darovatelj daruje daroprimatelju novčani iznos od **{{castka}}** (slovima: {{castka_slovima}}).',
            stvar: 'Darovatelj daruje daroprimatelju sljedeću stvar: {{stvar}}, približne vrijednosti {{vrijednost}}.',
          },
        },
        'Darovatelj predaje dar daroprimatelju pri potpisu ovog ugovora, a daroprimatelj dar prihvaća i potvrđuje njegov primitak.',
      ],
    },
    {
      nadpis: 'Završne odredbe',
      odstavce: [
        'Porez i druge troškove u vezi s darovanjem snosi daroprimatelj.',
        'Na sve što nije uređeno ovim ugovorom primjenjuju se odredbe Zakona o obveznim odnosima.',
        'Ugovor je sastavljen u dva istovjetna primjerka, od kojih svaka strana zadržava po jedan.',
      ],
    },
  ],
};
