/**
 * Najemna pogodba za stanovanje – Slovenija (SZ-1). Pisna pogodba z obveznimi sestavinami (identifikacijska oznaka iz katastra
 * stavb, davčna številka lastnika, osebe, ki bodo stanovale, odpovedni razlogi iz 103. člena). Lastnik odpove le iz krivdnih
 * razlogov po predhodnem pisnem opozorilu; odpovedni rok ne sme biti krajši od 90 dni. Dohodek od najemnine prijavi lastnik FURS.
 */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { SZ1, OZ, FURS_NAJEM, NASVET_IDENTITETA, NOGA } from './viri';

export const najemnaPogodba: Sablona = {
  kod: 'SI-NAJEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Najemna pogodba za stanovanje', podnadpis: 'sklenjena po določbah Stanovanjskega zakona (SZ-1)',
  souborPdf: 'najemna-pogodba-stanovanje', paticka: NOGA('SI-NAJEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najemodajalec', vpravo: 'najemnik' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Ob vselitvi podpišite zapisnik o predaji stanovanja s stanjem števcev.', 'Najemodajalec: dohodek od najemnine prijavite finančni upravi (napoved za odmero dohodnine).'],
  kontrola: [
    'Najemna pogodba za stanovanje mora biti pisna in vsebovati obvezne sestavine – med drugim identifikacijsko oznako stanovanja iz katastra stavb, davčno številko lastnika in osebe, ki bodo stanovale z najemnikom.',
    'Lastnik lahko odpove pogodbo le iz zakonskih razlogov in po predhodnem pisnem opozorilu najemniku; odpovedni rok ne sme biti krajši od 90 dni.',
    'Višina varščine za tržni najem ni zakonsko omejena – dogovorite jo v pogodbi, skupaj z rokom vračila.',
    'Če stanovanje več kot 60 dni v treh mesecih uporablja oseba, ki ni navedena v pogodbi, brez soglasja lastnika, je to krivdni odpovedni razlog.',
    NASVET_IDENTITETA,
  ],
  zdroje: [SZ1, OZ, FURS_NAJEM],
  kroky: [
    { id: 'stranki', nazev: 'Najemodajalec in najemnik', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Najemodajalec (lastnik) – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_davcna', typ: 'text', popis: 'Davčna številka lastnika', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov lastnika', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Najemnik – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
      { id: 'k_davcna', typ: 'text', popis: 'Davčna številka najemnika', sirka: 12, polovina: true },
      { id: 'osebe', typ: 'text', popis: 'Druge osebe, ki bodo stanovale', placeholder: 'npr. Luka Horvat (sin)', sirka: 56 },
    ] },
    { id: 'stanovanje', nazev: 'Stanovanje in trajanje', pole: [
      { id: 'naslov', typ: 'text', popis: 'Naslov stanovanja', placeholder: 'npr. Celovška cesta 20, 1000 Ljubljana', sirka: 46 },
      { id: 'id_oznaka', typ: 'text', popis: 'Identifikacijska oznaka iz katastra stavb', placeholder: 'npr. 1736-1234-5', napoveda: 'Najdete jo v vpogledu v nepremičnine (GURS) ali v zemljiški knjigi.', sirka: 22 },
      { id: 'povrsina', typ: 'cislo', popis: 'Površina', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'oprema', typ: 'text', popis: 'Oprema', placeholder: 'npr. kuhinja z aparati, pralni stroj, postelja', sirka: 56 },
      { id: 'trajanje', typ: 'volba', popis: 'Trajanje', moznosti: [ { hodnota: 'nedolocen', popis: 'za nedoločen čas' }, { hodnota: 'dolocen', popis: 'za določen čas' } ] },
      { id: 'od', typ: 'datum', popis: 'Začetek najema', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Konec najema', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'trajanje', je: 'dolocen' } },
    ] },
    { id: 'placila', nazev: 'Najemnina, stroški in varščina', pole: [
      { id: 'najemnina', typ: 'castka', popis: 'Mesečna najemnina (€)', sirka: 12, polovina: true },
      { id: 'dan', typ: 'cislo', popis: 'Plačilo do … dne v mesecu', placeholder: 'npr. 5', sirka: 4, polovina: true },
      { id: 'stroski', typ: 'text', popis: 'Obratovalni stroški, ki jih plača najemnik', placeholder: 'npr. elektrika, voda, ogrevanje, odvoz odpadkov po računih', sirka: 56 },
      { id: 'varscina', typ: 'castka', popis: 'Varščina (€)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN najemodajalca', placeholder: 'SI56 0000 0000 0000 000', sirka: 30 },
      { id: 'odpovedni', typ: 'cislo', popis: 'Odpovedni rok najemnika', placeholder: 'npr. 90', jednotka: 'dni', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemnina_z_besedo: (d) => znesekZBesedo(d.najemnina), varscina_z_besedo: (d) => znesekZBesedo(d.varscina) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Najemodajalec:** {{p_jmeno}}, davčna številka {{p_davcna}}, naslov {{p_adresa}}', '**Najemnik:** {{k_jmeno}}, davčna številka {{k_davcna}}', 'Z najemnikom bodo v stanovanju stanovale tudi naslednje osebe: {{osebe}}.'] },
    { nadpis: 'Predmet najema', odstavce: ['Najemodajalec daje v najem stanovanje na naslovu {{naslov}}, identifikacijska oznaka {{id_oznaka}}, v izmeri {{povrsina}} m², z naslednjo opremo: {{oprema}}.', 'Stanje stanovanja in števcev ob predaji stranki zabeležita v zapisniku, ki je priloga te pogodbe.'] },
    { nadpis: 'Trajanje', odstavce: [{ volba: 'trajanje', uvodVzor: 'Trajanje (označite eno možnost):', moznosti: { nedolocen: 'Pogodba je sklenjena za nedoločen čas od {{od}}.', dolocen: 'Pogodba je sklenjena za določen čas od {{od}} do {{do}}.' } }] },
    { nadpis: 'Najemnina in stroški', odstavce: ['Mesečna najemnina znaša **{{najemnina}}** (z besedo: {{najemnina_z_besedo}}) in se plača do {{dan}}. dne v mesecu na račun IBAN {{iban}}.', 'Poleg najemnine najemnik plačuje: {{stroski}}.'] },
    { nadpis: 'Varščina', odstavce: ['Najemnik ob podpisu plača varščino {{varscina}} (z besedo: {{varscina_z_besedo}}).', 'Najemodajalec varščino vrne v 30 dneh po izpraznitvi in predaji stanovanja, zmanjšano le za neplačane obveznosti in škodo, ugotovljeno v zapisniku ob predaji.'] },
    { nadpis: 'Obveznosti strank', odstavce: ['Najemnik bo stanovanje uporabljal skrbno, kot dober gospodar, redno plačeval najemnino in stroške ter brez soglasja najemodajalca ne bo izvajal predelav in stanovanja ne bo oddajal v podnajem.', 'Najemodajalec zagotavlja, da je stanovanje primerno za bivanje, in krije stroške nujnih popravil, ki niso posledica najemnikove uporabe.'] },
    { nadpis: 'Prenehanje najema', odstavce: ['Najemnik lahko pogodbo pisno odpove z odpovednim rokom {{odpovedni}} dni.', 'Najemodajalec lahko pogodbo odpove le iz razlogov, ki jih določa Stanovanjski zakon (103. člen), po predhodnem pisnem opozorilu najemniku in z odpovednim rokom, ki ne sme biti krajši od 90 dni.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporabljata Stanovanjski zakon in Obligacijski zakonik.', 'Pogodba je sestavljena v dveh enakih izvodih, po enega za vsako stranko.'] },
  ],
};
