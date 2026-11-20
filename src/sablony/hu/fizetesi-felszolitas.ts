/**
 * Fizetési felszólítás – Magyarország. Késedelmi kamat: Ptk. 6:48. § (a késedelemmel érintett naptári félév első
 * napján érvényes jegybanki alapkamat); vállalkozások között Ptk. 6:155. § (+8 százalékpont, 40 eurónak megfelelő
 * behajtási költségátalány). Forrás: e-justice, szakirodalom (adózóna, KPMG); Ptk. szövege NJT-n nem töltődik be.
 */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { naDatum } from '../terminy';
import { PTK, PP } from './forrasok';

export const fizetesiFelszolitas: Sablona = {
  kod: 'HU-FIZETESI-FELSZOLITAS',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Fizetési felszólítás',
  podnadpis: 'a Polgári Törvénykönyv (2013. évi V. törvény) alapján',
  souborPdf: 'fizetesi-felszolitas',
  paticka: 'Ingyenesen készült · HU-FIZETESI-FELSZOLITAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a küldő felel',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'jogosult (hitelező)', vpravo: 'átvette a kötelezett (személyes átadáskor)' },
  slovo: { n: 'felszólítás', g: 'felszólítás', a: 'felszólítást', l: 'felszólításban' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => (naDatum(d.zaplatit_do) ? [{ nazev: 'A fizetési felszólítás határideje lejár', datum: String(d.zaplatit_do), popis: 'Ellenőrizze a befizetést. Ha nem érkezett meg, fizetési meghagyást vagy keresetet indíthat.' }] : []),
  coDal: [
    'Írja alá, és küldje tértivevényes ajánlott levélben – így bizonyítani tudja a kézbesítést.',
    'Őrizze meg a feladóvevényt és egy másolatot.',
    'Ha a kötelezett nem fizet, közjegyzőnél fizetési meghagyást kérhet, vagy pert indíthat.',
  ],
  kontrola: [
    'Késedelmi kamat: a késedelemmel érintett naptári félév első napján érvényes jegybanki alapkamat (Ptk. 6:48. §). Vállalkozások közötti szerződésnél ez 8 százalékponttal magasabb, és 40 eurónak megfelelő behajtási költségátalány is jár (Ptk. 6:155. §).',
    'Pontosan írja le, mi és milyen jogcímen jár (számla, szerződés, esedékesség), és mennyi.',
    'Fizetési határidő: általában 8–15 nap.',
    'Tértivevényes ajánlott levélben küldje – vita esetén a kézbesítést Önnek kell bizonyítania.',
    'Csak jogszerű lépéssel (fizetési meghagyás, per) fenyegessen – a nyilvános megszégyenítés vagy nyomásgyakorlás jogellenes lehet.',
  ],
  zdroje: [PTK, PP],
  kroky: [
    {
      id: 'felek',
      nazev: 'Jogosult és kötelezett',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Jogosult – név vagy cégnév', placeholder: 'pl. Kovács János', sirka: 34, autocomplete: 'name' },
        { id: 'k_adresa', typ: 'text', popis: 'Jogosult címe', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon vagy e-mail (nem kötelező)', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Kötelezett – név vagy cégnév', placeholder: 'pl. Nagy Péter', sirka: 34 },
        { id: 'p_adresa', typ: 'text', popis: 'Kötelezett címe', placeholder: 'pl. 4024 Debrecen, Piac utca 5.', sirka: 46 },
        {
          id: 'p_typ',
          typ: 'volba',
          popis: 'Kik a felek?',
          napoveda: 'Ettől függ a késedelmi kamat mértéke.',
          moznosti: [
            { hodnota: 'mag', popis: 'Legalább az egyik fél magánszemély' },
            { hodnota: 'b2b', popis: 'Mindkét fél vállalkozás' },
          ],
        },
      ],
    },
    {
      id: 'tartozas',
      nazev: 'Tartozás',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Tartozás összege (Ft)', placeholder: 'pl. 150000', sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'datum', popis: 'Eredeti esedékesség', sirka: 14, polovina: true },
        { id: 'duvod', typ: 'text', popis: 'Jogcím', napoveda: 'Számla vagy szerződés száma és kelte.', placeholder: 'pl. 2026/041. számú számla, kelte 2026. 10. 01.', sirka: 56 },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Késedelmi kamatot is kér?',
          moznosti: [
            { hodnota: 'igen', popis: 'Igen, törvényes késedelmi kamat' },
            { hodnota: 'nem', popis: 'Nem, csak a tőkét' },
          ],
        },
      ],
    },
    {
      id: 'fizetes',
      nazev: 'Határidő és fizetés',
      pole: [
        { id: 'zaplatit_do', typ: 'datum', popis: 'Fizetési határidő', napoveda: 'Általában 8–15 nap.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Bankszámlaszám', placeholder: '12345678-12345678-12345678', sirka: 30 },
        { id: 'kozlemeny', typ: 'text', popis: 'Közlemény (nem kötelező)', sirka: 24, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Hely', placeholder: 'pl. Budapest', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => osszegBetuvel(d.castka) },
  clanky: [
    { nadpis: 'Feladó és címzett', odstavce: ['**Jogosult:** {{k_jmeno}}, {{k_adresa}}, elérhetőség: {{k_kontakt}}', '**Kötelezett:** {{p_jmeno}}, {{p_adresa}}'] },
    {
      nadpis: 'Fizetési felszólítás',
      odstavce: [
        'Tisztelt Címzett!',
        'Nyilvántartásunk szerint Önnek {{duvod}} jogcímen {{castka}} (azaz {{castka_slovy}}) összegű tartozása áll fenn, amely {{splatnost}} napján járt le. A tartozás a mai napig nem került kiegyenlítésre.',
        'Felszólítom, hogy a fenti összeget legkésőbb {{zaplatit_do}} napjáig fizesse meg a(z) {{ucet}} számú bankszámlára, közlemény: {{kozlemeny}}.',
        {
          volba: 'urok',
          uvodVzor: 'Késedelmi kamat (jelöljön meg egyet):',
          moznosti: {
            igen: 'Egyúttal felszólítom az esedékességet követő naptól a kifizetés napjáig járó törvényes késedelmi kamat megfizetésére.',
            nem: 'Amennyiben a tartozást a megadott határidőben kiegyenlíti, késedelmi kamatot nem érvényesítek.',
          },
        },
        {
          volba: 'p_typ',
          kdyz: { pole: 'urok', je: 'igen' },
          uvodVzor: 'A kamat mértéke (jelöljön meg egyet):',
          moznosti: {
            mag: 'A késedelmi kamat mértéke a késedelemmel érintett naptári félév első napján érvényes jegybanki alapkamat (Ptk. 6:48. §).',
            b2b: 'A késedelmi kamat mértéke a késedelemmel érintett naptári félév első napján érvényes jegybanki alapkamat nyolc százalékponttal növelt értéke; emellett 40 eurónak megfelelő behajtási költségátalányt is érvényesítek (Ptk. 6:155. §).',
          },
        },
        'Ha a megadott határidőn belül nem fizet, további értesítés nélkül fizetési meghagyásos eljárást vagy pert indítok, amelynek költségei Önt terhelik.',
        'Amennyiben időközben fizetett, kérem, tekintse e levelet tárgytalannak.',
      ],
    },
  ],
};
