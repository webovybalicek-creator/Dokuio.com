/**
 * Kupoprodajni ugovor za rabljeni automobil – Hrvatska, između fizičkih osoba. ZOO (kupoprodaja, pridržaj prava vlasništva).
 * Promjenu vlasništva novi vlasnik obavlja u stanici za tehnički pregled u roku od 15 dana od stjecanja; kupac plaća
 * upravnu pristojbu; potpis prodavatelja ne treba ovjeravati kod javnog bilježnika (Porezna uprava, 20. 11. 2026).
 */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { ZOO, PU_RABLJENO_VOZILO, SAVJET_IDENTITET, SAVJET_GOTOVINA, PATICKA } from './izvori';

export const kupoprodajniUgovorAutomobil: Sablona = {
  kod: 'HR-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Kupoprodajni ugovor za motorno vozilo',
  podnadpis: 'sklopljen prema odredbama Zakona o obveznim odnosima o ugovoru o kupoprodaji',
  souborPdf: 'kupoprodajni-ugovor-automobil',
  paticka: PATICKA('HR-AUTO'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodavatelj', vpravo: 'kupac' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: [
    'Ispišite ugovor u dva primjerka (po jedan za svaku stranu) i oba potpišite.',
    'Predajte vozilo, ključeve i dokumente – najbolje uz primopredajni zapisnik s vremenom predaje.',
    'Kupac: u roku od 15 dana od stjecanja registrirajte vozilo na svoje ime u stanici za tehnički pregled (ili ga odjavite) i platite upravnu pristojbu.',
    'Prodavatelj: obavijestite svoje osiguravajuće društvo o prodaji.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predaja_datum) ?? naDatum(d.datum_podpisu);
    if (!od) return [];
    return [{ nazev: 'Promjena vlasništva vozila (kupac)', datum: isoDatum(pridejDny(od, 15)), popis: 'Rok od 15 dana od stjecanja vozila – registracija na novog vlasnika ili odjava.' }];
  },
  kontrola: [
    'Prodavatelj je upisan kao vlasnik u prometnoj dozvoli – usporedite podatke s osobnom iskaznicom.',
    'Broj šasije (VIN) u prometnoj dozvoli mora se podudarati s brojem na vozilu.',
    'Vozilo ne smije biti na leasingu ni pod zalogom – inače prodavatelj njime ne može slobodno raspolagati.',
    'Potpis prodavatelja na ugovoru za promjenu vlasništva ne treba ovjeravati kod javnog bilježnika ([Porezna uprava](https://porezna-uprava.gov.hr/hr/kupac-u-tuzemstvu-rabljenog-motornog-vozila/4468)).',
    'Kupac pri promjeni vlasništva u stanici za tehnički pregled plaća upravnu pristojbu, čiji iznos ovisi o snazi i starosti vozila.',
    'Upišite datum i vrijeme predaje: do promjene vlasništva prometni prekršaji mogu stizati na prodavatelja, a s vremenom predaje dokazuje da vozilo više nije imao.',
    SAVJET_IDENTITET,
    SAVJET_GOTOVINA,
  ],
  zdroje: [ZOO, PU_RABLJENO_VOZILO],

  kroky: [
    {
      id: 'strane',
      nazev: 'Prodavatelj i kupac',
      popis: 'Podaci prema osobnoj iskaznici. OIB je potreban za promjenu vlasništva.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodavatelj – ime i prezime', napoveda: 'Vlasnik upisan u prometnoj dozvoli.', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
        { id: 'p_oib', typ: 'text', popis: 'OIB prodavatelja', napoveda: '11 znamenki, s osobne iskaznice.', placeholder: 'npr. 12345678901', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa prodavatelja', placeholder: 'npr. Ilica 12, 10000 Zagreb', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupac – ime i prezime', placeholder: 'npr. Ana Kovačević', sirka: 34 },
        { id: 'k_oib', typ: 'text', popis: 'OIB kupca', placeholder: 'npr. 10987654321', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa kupca', placeholder: 'npr. Riva 5, 21000 Split', sirka: 46 },
      ],
    },
    {
      id: 'vozilo',
      nazev: 'Vozilo',
      popis: 'Podatke prepišite iz prometne dozvole.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Marka i tip', napoveda: 'Polja D.1 i D.3 u prometnoj dozvoli.', placeholder: 'npr. Volkswagen Golf', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Broj šasije (VIN)', napoveda: '17 znakova, polje E u prometnoj dozvoli.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Registarska oznaka', placeholder: 'npr. ZG 1234-AB', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Godina proizvodnje', placeholder: 'npr. 2018', sirka: 8, polovina: true },
        { id: 'boja', typ: 'text', popis: 'Boja', placeholder: 'npr. siva metalik', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stanje brojila kilometara', napoveda: 'Očitajte na dan potpisa.', placeholder: 'npr. 154320', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'nedostaci',
          typ: 'volba',
          popis: 'Poznati nedostaci',
          napoveda: 'Iskreno navedite što znate – za nedostatke za koje je kupac znao prodavatelj kasnije ne odgovara.',
          moznosti: [
            { hodnota: 'ne', popis: 'Prodavatelju nisu poznati nedostaci' },
            { hodnota: 'da', popis: 'Vozilo ima poznate nedostatke' },
          ],
        },
        { id: 'nedostaci_opis', typ: 'textarea', popis: 'Opis nedostataka', placeholder: 'npr. napuklo vjetrobransko staklo, ne radi klima', sirka: 64, zobrazitKdyz: { pole: 'nedostaci', je: 'da' } },
      ],
    },
    {
      id: 'cijena',
      nazev: 'Cijena i plaćanje',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kupoprodajna cijena (€)', napoveda: 'Iznos slovima dopisat ćemo sami.', placeholder: 'npr. 9500', sirka: 14, polovina: true },
        {
          id: 'placanje',
          typ: 'volba',
          popis: 'Način plaćanja',
          moznosti: [
            { hodnota: 'gotovina', popis: 'Gotovinom pri potpisu' },
            { hodnota: 'racun', popis: 'Na račun prodavatelja' },
          ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN prodavatelja', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30, zobrazitKdyz: { pole: 'placanje', je: 'racun' } },
        { id: 'rok_placanja', typ: 'datum', popis: 'Plaćanje najkasnije do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'placanje', je: 'racun' } },
      ],
    },
    {
      id: 'predaja',
      nazev: 'Predaja i potpis',
      pole: [
        { id: 'predaja_datum', typ: 'datum', popis: 'Datum predaje vozila', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predaja_vrijeme', typ: 'text', popis: 'Vrijeme predaje', napoveda: 'Važno ako kasnije stigne kazna za prekršaj.', placeholder: 'npr. 14:30', sirka: 8, polovina: true },
        { id: 'kljucevi', typ: 'cislo', popis: 'Broj ključeva', placeholder: 'npr. 2', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Mjesto potpisa', placeholder: 'npr. Zagreb', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum potpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_slovima: (d) => iznosSlovima(d.cena) },

  clanky: [
    {
      nadpis: 'Ugovorne strane',
      vysvetleni: 'Tko sklapa ugovor. Podaci se moraju podudarati s osobnim iskaznicama.',
      odstavce: [
        '**Prodavatelj:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}',
        '**Kupac:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Predmet ugovora',
      vysvetleni: 'Koje se vozilo prodaje. Najvažniji je broj šasije.',
      odstavce: [
        'Prodavatelj prodaje, a kupac kupuje motorno vozilo marke i tipa {{znacka}}, broj šasije {{vin}}, registarske oznake {{spz}}, godina proizvodnje {{rok}}, boja {{boja}} (u daljnjem tekstu: vozilo).',
        'Prodavatelj izjavljuje da je jedini vlasnik vozila te da vozilo nije opterećeno pravima trećih osoba, osobito da nije predmet leasinga ni zaloga.',
      ],
    },
    {
      nadpis: 'Stanje vozila',
      vysvetleni: 'Što prodavatelj zna o vozilu.',
      odstavce: [
        'Stanje brojila kilometara na dan potpisa ugovora iznosi {{km}} km. Prodavatelju nije poznato da je brojilo kilometara mijenjano ili vraćano.',
        {
          volba: 'nedostaci',
          uvodVzor: 'Poznati nedostaci (označite jednu mogućnost):',
          moznosti: {
            ne: 'Prodavatelju nisu poznati nedostaci vozila.',
            da: 'Prodavatelj je kupca upozorio na sljedeće nedostatke vozila: {{nedostaci_opis}}',
          },
        },
        'Kupac izjavljuje da je vozilo pregledao, da mu je poznato njegovo stanje te da ga kupuje u tom stanju.',
      ],
    },
    {
      nadpis: 'Cijena i plaćanje',
      vysvetleni: 'Koliko, kako i do kada. Vlasništvo prelazi tek isplatom cijele cijene.',
      odstavce: [
        'Kupoprodajna cijena vozila iznosi **{{cena}}** (slovima: {{cena_slovima}}).',
        {
          volba: 'placanje',
          uvodVzor: 'Način plaćanja (označite jednu mogućnost):',
          moznosti: {
            gotovina: 'Kupac je cijenu platio gotovinom pri potpisu ovog ugovora. Prodavatelj svojim potpisom potvrđuje primitak cijelog iznosa.',
            racun: 'Kupac će cijenu platiti na račun prodavatelja IBAN {{iban}} najkasnije do {{rok_placanja}}.',
          },
        },
        'Prodavatelj zadržava pravo vlasništva na vozilu do isplate cijele kupoprodajne cijene.',
      ],
    },
    {
      nadpis: 'Predaja vozila',
      vysvetleni: 'Kada i s čime kupac preuzima vozilo.',
      odstavce: [
        'Prodavatelj predaje kupcu vozilo dana {{predaja_datum}} u {{predaja_vrijeme}} sati, zajedno s {{kljucevi}} ključa, prometnom dozvolom i ostalom dokumentacijom vozila.',
        'Predajom vozila na kupca prelazi rizik propasti i oštećenja vozila. Od tog trenutka kupac odgovara za uporabu vozila, uključujući prometne prekršaje.',
      ],
    },
    {
      nadpis: 'Promjena vlasništva i troškovi',
      vysvetleni: 'Tko što obavlja u stanici za tehnički pregled i tko plaća.',
      odstavce: [
        'Kupac se obvezuje u roku od 15 dana od stjecanja vozila obaviti promjenu vlasništva, odnosno registraciju vozila na svoje ime ili njegovu odjavu.',
        'Troškove promjene vlasništva, upravne pristojbe i registracije snosi kupac.',
      ],
    },
    {
      nadpis: 'Završne odredbe',
      vysvetleni: 'Formalnosti.',
      odstavce: [
        'Na sve što nije uređeno ovim ugovorom primjenjuju se odredbe Zakona o obveznim odnosima.',
        'Ugovor je sastavljen u dva istovjetna primjerka, od kojih svaka strana zadržava po jedan. Strane su ugovor pročitale, razumjele i u znak prihvaćanja potpisale.',
      ],
    },
  ],
};
