/** Ugovor o podnajmu stana ili sobe – Hrvatska. Podnajam samo uz dopuštenje najmodavca (Zakon o najmu stanova – bez dopuštenja razlog za otkaz). */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZNS, ZOO, SAVJET_IDENTITET, PATICKA } from './izvori';

export const ugovorOPodnajmu: Sablona = {
  kod: 'HR-PODNAJAM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Ugovor o podnajmu', podnadpis: 'podnajam stana ili dijela stana uz dopuštenje najmodavca',
  souborPdf: 'ugovor-o-podnajmu', paticka: PATICKA('HR-PODNAJAM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najmoprimac (podnajmodavac)', vpravo: 'podnajmoprimac' },
  slovo: { n: 'ugovor', g: 'ugovora', a: 'ugovor', l: 'ugovoru' },
  coDal: ['Priložite pisano dopuštenje najmodavca ili ga neka najmodavac potpiše na ovom ugovoru.', 'Pri useljenju potpišite primopredajni zapisnik.'],
  kontrola: [
    'Bez dopuštenja najmodavca podnajam je razlog za otkaz glavnog ugovora o najmu (Zakon o najmu stanova) – dopuštenje pribavite pisano.',
    'Podnajam ne može trajati dulje od glavnog najma; kad prestane najam, prestaje i podnajam.',
    'Prihod od podnajma oporeziv je kao prihod od najma – prijavite ga Poreznoj upravi.',
    SAVJET_IDENTITET,
  ],
  zdroje: [ZNS, ZOO],
  kroky: [
    { id: 'strane', nazev: 'Strane', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Najmoprimac (daje u podnajam) – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
      { id: 'p_oib', typ: 'text', popis: 'OIB', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Podnajmoprimac – ime i prezime', placeholder: 'npr. Luka Perić', sirka: 34 },
      { id: 'k_oib', typ: 'text', popis: 'OIB podnajmoprimca', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Dosadašnja adresa podnajmoprimca', sirka: 46 },
      { id: 'najmodavac', typ: 'text', popis: 'Najmodavac (vlasnik stana) koji je dao dopuštenje', placeholder: 'npr. Ivan Horvat', sirka: 34 },
    ] },
    { id: 'predmet', nazev: 'Stan, trajanje i plaćanje', pole: [
      { id: 'stan', typ: 'text', popis: 'Adresa stana', placeholder: 'npr. Vukovarska 20, 10000 Zagreb', sirka: 46 },
      { id: 'dio', typ: 'volba', popis: 'Što se daje u podnajam', moznosti: [ { hodnota: 'soba', popis: 'soba uz zajedničko korištenje kuhinje i kupaonice' }, { hodnota: 'cijeli', popis: 'cijeli stan' } ] },
      { id: 'soba_opis', typ: 'text', popis: 'Koja soba', placeholder: 'npr. manja soba prema dvorištu, 12 m²', sirka: 46, zobrazitKdyz: { pole: 'dio', je: 'soba' } },
      { id: 'od', typ: 'datum', popis: 'Podnajam od', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Podnajam do', sirka: 14, polovina: true },
      { id: 'castka', typ: 'castka', popis: 'Mjesečna podnajamnina s troškovima (€)', sirka: 12, polovina: true },
      { id: 'jamcevina', typ: 'castka', popis: 'Jamčevina (€)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN za plaćanje', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka), jamcevina_slovima: (d) => iznosSlovima(d.jamcevina) },
  clanky: [
    { nadpis: 'Ugovorne strane', odstavce: ['**Najmoprimac (podnajmodavac):** {{p_jmeno}}, OIB {{p_oib}}, adresa {{p_adresa}}', '**Podnajmoprimac:** {{k_jmeno}}, OIB {{k_oib}}, adresa {{k_adresa}}'] },
    { nadpis: 'Predmet podnajma', odstavce: [{ volba: 'dio', uvodVzor: 'Predmet podnajma (označite jednu mogućnost):', moznosti: { soba: 'Najmoprimac daje u podnajam sobu ({{soba_opis}}) u stanu na adresi {{stan}}, uz zajedničko korištenje kuhinje, kupaonice i predsoblja.', cijeli: 'Najmoprimac daje u podnajam cijeli stan na adresi {{stan}}.' } }, 'Najmoprimac izjavljuje da mu je najmodavac {{najmodavac}} dao pisano dopuštenje za podnajam.'] },
    { nadpis: 'Trajanje', odstavce: ['Podnajam se sklapa za razdoblje od {{od}} do {{do}}.', 'Podnajam u svakom slučaju prestaje prestankom ugovora o najmu između najmoprimca i najmodavca.'] },
    { nadpis: 'Podnajamnina i jamčevina', odstavce: ['Podnajmoprimac plaća mjesečno **{{castka}}** (slovima: {{castka_slovima}}), uključujući troškove stanovanja, najkasnije do 5. dana u mjesecu na račun IBAN {{iban}}.', 'Podnajmoprimac pri potpisu plaća jamčevinu od {{jamcevina}} (slovima: {{jamcevina_slovima}}), koja se vraća u roku od 30 dana od predaje, umanjena za neplaćene obveze ili štetu.'] },
    { nadpis: 'Obveze podnajmoprimca', odstavce: ['Podnajmoprimac će stan koristiti pažljivo, poštovati kućni red i neće ga davati dalje u podnajam niti vršiti preinake.'] },
    { nadpis: 'Otkaz', odstavce: ['Svaka strana može pisano otkazati podnajam uz otkazni rok od 30 dana. Pri iseljenju podnajmoprimac vraća sve ključeve.'] },
    { nadpis: 'Završne odredbe', odstavce: ['Na sve što nije uređeno ovim ugovorom primjenjuju se Zakon o obveznim odnosima i Zakon o najmu stanova.', 'Ugovor je sastavljen u dva istovjetna primjerka, po jedan za svaku stranu.'] },
  ],
};
