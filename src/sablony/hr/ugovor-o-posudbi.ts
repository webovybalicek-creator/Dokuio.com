/** Ugovor o posudbi – Hrvatska (ZOO, ugovor o posudbi): besplatna uporaba stvari i vraćanje iste stvari. */
import type { Sablona } from '../typy';
import { ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const ugovorOPosudbi: Sablona = {
  kod: 'HR-POSUDBA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Ugovor o posudbi', podnadpis: 'besplatna uporaba stvari prema Zakonu o obveznim odnosima',
  souborPdf: 'ugovor-o-posudbi', paticka: PATICKA('HR-POSUDBA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'posuditelj', vpravo: 'posudovnik' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: ['Pri predaji fotografirajte stvar i zapišite njezino stanje.', 'Pri povratu usporedite stanje s onim upisanim u ugovoru.'],
  kontrola: [
    'Posudba je besplatna – ako se plaća naknada, radi se o najmu, a ne o posudbi.',
    'Upišite vrijednost stvari: olakšava dogovor o naknadi ako se stvar ošteti ili izgubi.',
    'Posudovnik smije stvar upotrebljavati samo za ugovorenu namjenu i ne smije je dati drugome bez dopuštenja (ZOO).',
    'Za automobil uz ugovor ispunite i primopredajni zapisnik vozila s kilometrima i vremenom predaje.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZOO],
  kroky: [
    { id: 'strane', nazev: 'Posuditelj i posudovnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Posuditelj (daje stvar) – ime i prezime', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB posuditelja', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa posuditelja', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Posudovnik (prima stvar) – ime i prezime', placeholder: 'npr. Marko Babić', sirka: 34 },
      { id: 'k_oib', typ: 'text', popis: 'OIB posudovnika', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresa posudovnika', sirka: 46 },
    ] },
    { id: 'stvar', nazev: 'Stvar i povrat', pole: [
      { id: 'stvar', typ: 'textarea', popis: 'Stvar koja se posuđuje', placeholder: 'npr. kamp prikolica Adria, šator za 4 osobe, bušilica Bosch', sirka: 64 },
      { id: 'stanje', typ: 'text', popis: 'Stanje pri predaji', placeholder: 'npr. ispravna, ogrebotina na poklopcu', sirka: 56 },
      { id: 'vrijednost', typ: 'castka', popis: 'Vrijednost stvari (€)', sirka: 12, polovina: true },
      { id: 'namjena', typ: 'text', popis: 'Namjena uporabe', placeholder: 'npr. ljetovanje u Istri', sirka: 46 },
      { id: 'povrat', typ: 'datum', popis: 'Stvar se vraća najkasnije', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Ugovorne strane', odstavce: ['**Posuditelj:** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}', '**Posudovnik:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}'] },
    { nadpis: 'Predmet posudbe', odstavce: ['Posuditelj predaje posudovniku na besplatnu uporabu sljedeću stvar: {{stvar}}.', 'Stanje stvari pri predaji: {{stanje}}. Strane procjenjuju vrijednost stvari na {{vrijednost}}.'] },
    { nadpis: 'Uporaba', odstavce: ['Posudovnik će stvar upotrebljavati samo za namjenu: {{namjena}}, pažljivo i u skladu s njezinom naravi.', 'Posudovnik ne smije stvar dati drugome na uporabu bez pisanog dopuštenja posuditelja. Redovite troškove održavanja tijekom uporabe snosi posudovnik.'] },
    { nadpis: 'Povrat', odstavce: ['Posudovnik će stvar vratiti posuditelju najkasnije do {{povrat}}, u stanju u kojem ju je primio, uzimajući u obzir redovitu istrošenost.', 'Ako se stvar ošteti ili izgubi krivnjom posudovnika, posudovnik nadoknađuje štetu.'] },
    { nadpis: 'Završne odredbe', odstavce: ['Na sve što nije uređeno ovim ugovorom primjenjuje se Zakon o obveznim odnosima.', 'Ugovor je sastavljen u dva istovjetna primjerka, po jedan za svaku stranu.'] },
  ],
};
