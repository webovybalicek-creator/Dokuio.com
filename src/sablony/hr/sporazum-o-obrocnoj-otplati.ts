/** Sporazum o obročnoj otplati duga – Hrvatska (ZOO): priznanje duga i plan obroka, prekid zastare, gubitak pogodnosti obroka. */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const sporazumOObrocnojOtplati: Sablona = {
  kod: 'HR-OBROCI', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Sporazum o obročnoj otplati duga', podnadpis: 'priznanje duga i plan otplate u obrocima',
  souborPdf: 'sporazum-o-obrocnoj-otplati', paticka: PATICKA('HR-OBROCI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vjerovnik', vpravo: 'dužnik' },
  slovo: { n: 'sporazum', g: 'sporazuma', a: 'sporazum', l: 'sporazumu' },
  coDal: ['Ispišite sporazum u dva primjerka i oba potpišite.', 'Spremite datume obroka u kalendar.', 'Sačuvajte potvrde o uplatama.'],
  kontrola: [
    'Dužnik u sporazumu priznaje dug – priznanjem se prekida zastara i rok počinje teći iznova (ZOO).',
    'Odredite što se događa ako dužnik zakasni s obrokom (npr. dospijeće cijelog ostatka).',
    'Za veće iznose razmislite o solemnizaciji kod javnog bilježnika – ovršna isprava olakšava naplatu.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO],
  kroky: [
    { id: 'strane', nazev: 'Vjerovnik i dužnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vjerovnik – ime i prezime ili naziv', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB vjerovnika', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa vjerovnika', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Dužnik – ime i prezime', placeholder: 'npr. Marko Babić', sirka: 34 },
      { id: 'k_oib', typ: 'text', popis: 'OIB dužnika', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresa dužnika', sirka: 46 },
    ] },
    { id: 'dug', nazev: 'Dug i obroci', pole: [
      { id: 'castka', typ: 'castka', popis: 'Ukupni dug (€)', sirka: 12, polovina: true },
      { id: 'temelj', typ: 'text', popis: 'Temelj duga', placeholder: 'npr. neplaćena cijena za automobil prema ugovoru od 1. 6. 2026.', sirka: 56 },
      { id: 'obrok', typ: 'castka', popis: 'Mjesečni obrok (€)', sirka: 12, polovina: true },
      { id: 'broj', typ: 'cislo', popis: 'Broj obroka', sirka: 6, polovina: true },
      { id: 'dan', typ: 'cislo', popis: 'Obrok dospijeva svakog … u mjesecu', placeholder: 'npr. 15', sirka: 6, polovina: true },
      { id: 'prvi', typ: 'datum', popis: 'Prvi obrok', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN vjerovnika', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka), obrok_slovima: (d) => iznosSlovima(d.obrok) },
  clanky: [
    { nadpis: 'Ugovorne strane', odstavce: ['**Vjerovnik:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}', '**Dužnik:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}'] },
    { nadpis: 'Priznanje duga', odstavce: ['Dužnik priznaje da vjerovniku na dan potpisa ovog sporazuma duguje **{{castka}}** (slovima: {{castka_slovima}}) po osnovi: {{temelj}}.'] },
    { nadpis: 'Obročna otplata', odstavce: ['Vjerovnik pristaje da dužnik dug otplati u {{broj}} mjesečnih obroka po **{{obrok}}** (slovima: {{obrok_slovima}}), posljednji obrok u visini preostalog duga.', 'Prvi obrok dospijeva {{prvi}}, a svaki sljedeći {{dan}}. dana u mjesecu. Obroci se uplaćuju na račun vjerovnika IBAN {{iban}}.', 'Dužnik smije dug ili njegov dio platiti i prije roka.'] },
    { nadpis: 'Zakašnjenje', odstavce: ['Ako dužnik zakasni s plaćanjem dva obroka, vjerovnik može pisanom obaviješću zahtijevati odjednom cijeli preostali dug, sa zakonskim zateznim kamatama od dana zakašnjenja.'] },
    { nadpis: 'Završne odredbe', odstavce: ['Na sve što nije uređeno ovim sporazumom primjenjuje se Zakon o obveznim odnosima.', 'Sporazum je sastavljen u dva istovjetna primjerka, po jedan za svaku stranu.'] },
  ],
};
