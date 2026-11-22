/** Skolos pripažinimas – Lietuva. Skolininko veiksmai, rodantys, kad jis pripažįsta prievolę, nutraukia ieškinio senatį (Civilinio kodekso 1.130 str.); bendrasis terminas 10 metų (1.125). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const skolosPripazinimas: Sablona = {
  kod: 'LT-SKOLOS-PRIPAZINIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Skolos pripažinimas', podnadpis: 'rašytinis skolininko patvirtinimas apie skolą ir jos dydį',
  souborPdf: 'skolos-pripazinimas', paticka: PORASTE('LT-SKOLOS-PRIPAZINIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'skolininkas', vpravo: 'kreditorius (neprivaloma)' },
  slovo: { n: 'pripažinimas', g: 'pripažinimo', a: 'pripažinimą', l: 'pripažinime' },
  coDal: ['Pasirašytą originalą saugo kreditorius.', 'Mokėjimo terminą pasižymėkite kalendoriuje.'],
  kontrola: [
    `Skolininko veiksmai, rodantys, kad jis pripažįsta skolą, nutraukia ieškinio senaties terminą, ir jis pradedamas skaičiuoti iš naujo ([Civilinio kodekso 1.130 str.](${CK.url})). Bendrasis terminas – 10 metų, palūkanoms ir periodinėms išmokoms – 5 metai (1.125 str.).`,
    'Tiksliai įrašykite, iš ko skola kyla (paskola, kaina, nuoma), ir jos dydį.',
    'Be skolininko parašo dokumentas pripažinimo neįrodo.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Skolininkas ir kreditorius', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Skolininkas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Kreditorius – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    ] },
    { id: 'skola', nazev: 'Skola', pole: [
      { id: 'castka', typ: 'castka', popis: 'Skolos dydis (eurais)', sirka: 12, polovina: true },
      { id: 'pamats', typ: 'text', popis: 'Iš ko skola kyla', placeholder: 'pvz., 2025-03-10 paskola', sirka: 46 },
      { id: 'samaksa', typ: 'volba', popis: 'Mokėjimas', moznosti: [ { hodnota: 'vienreiz', popis: 'vienu kartu iki nustatytos datos' }, { hodnota: 'dalas', popis: 'mėnesinėmis įmokomis' } ] },
      { id: 'termins', typ: 'datum', popis: 'Sumokėti iki', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'vienreiz' } },
      { id: 'maksajums', typ: 'castka', popis: 'Mėnesinė įmoka (eurais)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'dalas' } },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmoji įmoka', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'dalas' } },
      { id: 'iban', typ: 'text', popis: 'Kreditoriaus IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Skolininkas:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}', '**Kreditorius:** {{p_jmeno}}, adresas {{p_adresa}}'] },
    { nadpis: 'Skolos pripažinimas', odstavce: ['Skolininkas pripažįsta, kad yra skolingas kreditoriui **{{castka}}** (žodžiais: {{castka_vardiem}}), kurie kyla iš: {{pamats}}.', 'Skolininkas patvirtina, kad skola yra tokio dydžio ir tokiu pagrindu ir kad jis neturi jai prieštaravimų.'] },
    { nadpis: 'Mokėjimas', odstavce: [{ volba: 'samaksa', uvodVzor: 'Mokėjimo būdas (pažymėkite vieną variantą):', moznosti: { vienreiz: 'Skolininkas sumoka visą sumą ne vėliau kaip {{termins}}.', dalas: 'Skolininkas sumoka skolą mėnesinėmis įmokomis po {{maksajums}}, pirmąją {{pirmais}}, o kiekvieną kitą – kiekvieno mėnesio tą pačią dieną.' } }, 'Mokėjimai atliekami į kreditoriaus sąskaitą IBAN {{iban}}. Jei skolininkas praleidžia dvi įmokas, visa likusi suma tampa mokėtina nedelsiant.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Dokumentas sudarytas dviem egzemplioriais, iš kurių kreditorius gavo originalą.'] },
  ],
};
