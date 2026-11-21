/** Podnajemna pogodba – Slovenija. Oddaja v podnajem brez soglasja lastnika je krivdni razlog za odpoved najemne pogodbe (103. člen SZ-1). */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { SZ1, OZ, FURS_NAJEM, NASVET_IDENTITETA, NOGA } from './viri';

export const podnajemnaPogodba: Sablona = {
  kod: 'SI-PODNAJEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Podnajemna pogodba', podnadpis: 'podnajem stanovanja ali sobe s soglasjem lastnika',
  souborPdf: 'podnajemna-pogodba', paticka: NOGA('SI-PODNAJEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najemnik (podnajemodajalec)', vpravo: 'podnajemnik' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Priložite pisno soglasje lastnika stanovanja.', 'Ob vselitvi podpišite zapisnik o predaji.'],
  kontrola: [
    'Oddaja stanovanja ali dela stanovanja v podnajem brez soglasja lastnika je krivdni razlog za odpoved najemne pogodbe (103. člen SZ-1) – soglasje pridobite pisno.',
    'Podnajem ne more trajati dlje kot glavni najem.',
    'Dohodek od podnajemnine je dohodek od oddajanja premoženja v najem – prijavite ga FURS.',
    NASVET_IDENTITETA,
  ],
  zdroje: [SZ1, OZ, FURS_NAJEM],
  kroky: [
    { id: 'stranki', nazev: 'Stranki', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Najemnik (oddaja v podnajem) – ime in priimek', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Podnajemnik – ime in priimek', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Dosedanji naslov podnajemnika', sirka: 46 },
      { id: 'lastnik', typ: 'text', popis: 'Lastnik, ki je dal soglasje', sirka: 34 },
    ] },
    { id: 'predmet', nazev: 'Stanovanje, trajanje in plačilo', pole: [
      { id: 'stanovanje', typ: 'text', popis: 'Naslov stanovanja', sirka: 46 },
      { id: 'del', typ: 'volba', popis: 'V podnajem se daje', moznosti: [ { hodnota: 'soba', popis: 'soba s souporabo kuhinje in kopalnice' }, { hodnota: 'celo', popis: 'celo stanovanje' } ] },
      { id: 'soba_opis', typ: 'text', popis: 'Katera soba', placeholder: 'npr. manjša soba na dvorišče, 12 m²', sirka: 46, zobrazitKdyz: { pole: 'del', je: 'soba' } },
      { id: 'od', typ: 'datum', popis: 'Podnajem od', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Podnajem do', sirka: 14, polovina: true },
      { id: 'castka', typ: 'castka', popis: 'Mesečna podnajemnina s stroški (€)', sirka: 12, polovina: true },
      { id: 'varscina', typ: 'castka', popis: 'Varščina (€)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN za plačilo', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka), varscina_z_besedo: (d) => znesekZBesedo(d.varscina) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Najemnik (podnajemodajalec):** {{p_jmeno}}, naslov {{p_adresa}}', '**Podnajemnik:** {{k_jmeno}}, naslov {{k_adresa}}'] },
    { nadpis: 'Predmet podnajema', odstavce: [{ volba: 'del', uvodVzor: 'Predmet (označite eno možnost):', moznosti: { soba: 'Najemnik daje v podnajem sobo ({{soba_opis}}) v stanovanju na naslovu {{stanovanje}}, s souporabo kuhinje, kopalnice in predsobe.', celo: 'Najemnik daje v podnajem celo stanovanje na naslovu {{stanovanje}}.' } }, 'Najemnik izjavlja, da mu je lastnik {{lastnik}} dal pisno soglasje za podnajem.'] },
    { nadpis: 'Trajanje', odstavce: ['Podnajem se sklepa za obdobje od {{od}} do {{do}}.', 'Podnajem v vsakem primeru preneha s prenehanjem najemne pogodbe med najemnikom in lastnikom.'] },
    { nadpis: 'Podnajemnina in varščina', odstavce: ['Podnajemnik plačuje mesečno **{{castka}}** (z besedo: {{castka_z_besedo}}), vključno s stroški, najpozneje do 5. dne v mesecu na račun IBAN {{iban}}.', 'Podnajemnik ob podpisu plača varščino {{varscina}} (z besedo: {{varscina_z_besedo}}), ki se vrne v 30 dneh po predaji, zmanjšana za neplačane obveznosti ali škodo.'] },
    { nadpis: 'Obveznosti podnajemnika', odstavce: ['Podnajemnik bo stanovanje uporabljal skrbno, spoštoval hišni red in ga ne bo oddajal naprej v podnajem niti predeloval.'] },
    { nadpis: 'Odpoved', odstavce: ['Vsaka stranka lahko podnajem pisno odpove z odpovednim rokom 30 dni. Ob izselitvi podnajemnik vrne vse ključe.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporabljata Obligacijski zakonik in Stanovanjski zakon. Pogodba je sestavljena v dveh enakih izvodih.'] },
  ],
};
