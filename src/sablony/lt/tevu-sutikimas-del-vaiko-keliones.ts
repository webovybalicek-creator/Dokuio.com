/**
 * Tėvų sutikimas dėl vaiko kelionės – Lietuva. Laikinai išvykti į užsienį be kito iš tėvų sutikimo galima (e-justice, Lietuva).
 * Vaikui, keliaujančiam be tėvų už Šengeno erdvės, reikia notaro patvirtinto tėvų sutikimo; tėvams išsiskyrus pakanka vieno iš jų
 * sutikimo (Notarų rūmai, LRT). Šengeno erdvėje notarinis sutikimas neprivalomas.
 */
import type { Sablona } from '../typy';
import { VAIKAS, NOTARAS, PORASTE } from './saltiniai';

export const vaikoKelione: Sablona = {
  kod: 'LT-VAIKO-KELIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Tėvų sutikimas dėl vaiko kelionės', podnadpis: 'vieno iš tėvų sutikimas, kad nepilnametis vaikas keliautų be tėvų',
  souborPdf: 'tevu-sutikimas-del-vaiko-keliones', paticka: PORASTE('LT-VAIKO-KELIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vienas iš tėvų', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'sutikimas', g: 'sutikimo', a: 'sutikimą', l: 'sutikime' },
  coDal: ['Pasirašytą sutikimą duokite lydinčiam asmeniui arba vaikui kartu su vaiko pasu ar asmens tapatybės kortele.', 'Jei kelionė vyksta už Šengeno erdvės, su šiuo juodraščiu kreipkitės į bet kurį notarų biurą – ten sutikimas patvirtinamas. Vizitą planuokite iš anksto.', 'Patikrinkite paskirties šalies ir avialinijos reikalavimus – kai kurios prašo vertimo.'],
  kontrola: [
    `Laikinai išvykti su vaiku į užsienį (atostogos, gydymas) be kito iš tėvų sutikimo galima; kito iš tėvų sutikimas ar teismo sprendimas reikalingas tik keičiant vaiko gyvenamosios vietos valstybę ([e-justice](${VAIKAS.url})).`,
    `Notaro patvirtinto tėvų sutikimo reikia tik tada, kai vaikas be tėvų keliauja į valstybę, nepriklausančią Šengeno erdvei. Tėvams išsiskyrus pakanka vieno iš jų sutikimo ([LRT, Notarų rūmai](${NOTARAS.url})).`,
    'Keliaujant Šengeno erdvėje sutikimas neprivalomas, tačiau praverčia, jei jo paprašo pareigūnai, avialinija ar viešbutis.',
    'Sutikime nurodomi vaiko ir lydinčio asmens vardas, pavardė, gimimo data, asmens dokumento numeris ir galiojimo terminas, kelionės valstybės ir laikotarpis.',
    'Vaiko persikėlimui nuolat gyventi kitoje valstybėje reikalingas kito iš tėvų sutikimas – šiam atvejui pavyzdys neskirtas.',
  ],
  zdroje: [VAIKAS, NOTARAS],
  kroky: [
    { id: 'tevai', nazev: 'Vienas iš tėvų ir vaikas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vienas iš tėvų – vardas, pavardė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'p_tel', typ: 'text', popis: 'Telefonas', sirka: 16, polovina: true, autocomplete: 'tel' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Vaikas – vardas, pavardė', sirka: 34 },
      { id: 'd_ik', typ: 'text', popis: 'Vaiko asmens kodas arba gimimo data', sirka: 14, polovina: true },
      { id: 'd_dokuments', typ: 'text', popis: 'Vaiko paso / asmens tapatybės kortelės Nr. ir galiojimas', sirka: 24 },
    ] },
    { id: 'kelione', nazev: 'Kelionė', pole: [
      { id: 'pavadiba', typ: 'volba', popis: 'Vaikas keliauja', moznosti: [ { hodnota: 'persona', popis: 'lydimas kito suaugusio asmens' }, { hodnota: 'viens', popis: 'savarankiškai (vienas)' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Lydintis asmuo – vardas, pavardė', sirka: 34, zobrazitKdyz: { pole: 'pavadiba', je: 'persona' } },
      { id: 's_dokuments', typ: 'text', popis: 'Lydinčio asmens gimimo data, dokumento Nr. ir galiojimas', sirka: 30, zobrazitKdyz: { pole: 'pavadiba', je: 'persona' } },
      { id: 'valstis', typ: 'text', popis: 'Valstybė (-ės)', placeholder: 'pvz., Suomija, Švedija', sirka: 40 },
      { id: 'merkis', typ: 'text', popis: 'Kelionės tikslas', placeholder: 'pvz., atostogos, sporto stovykla', sirka: 34 },
      { id: 'no', typ: 'datum', popis: 'Nuo', sirka: 14, polovina: true },
      { id: 'lidz', typ: 'datum', popis: 'Iki', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Sutikimas', odstavce: [
    'Aš, **{{p_jmeno}}**, asmens kodas {{p_ik}}, gyvenamoji vieta {{p_adresa}}, telefonas {{p_tel}}, esu nepilnamečio vaiko',
    '**{{d_jmeno}}**, asmens kodas arba gimimo data {{d_ik}}, pasas ar asmens tapatybės kortelė Nr. {{d_dokuments}}, vienas iš tėvų.',
    { volba: 'pavadiba', uvodVzor: 'Lydėjimas (pažymėkite vieną variantą):', moznosti: { persona: 'Sutinku, kad vaikas išvyktų į užsienį kartu su {{s_jmeno}} ({{s_dokuments}}), kuriam kelionės metu patikiu rūpintis vaiku.', viens: 'Sutinku, kad vaikas savarankiškai išvyktų į užsienį.' } },
    'Kelionė: {{valstis}}, laikotarpiu nuo {{no}} iki {{lidz}}, tikslas: {{merkis}}.',
    'Kelionės metu esu pasiekiamas (-a) aukščiau nurodytu telefonu.',
  ] }],
};
