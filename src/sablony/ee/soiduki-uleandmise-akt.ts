/** Sõiduki üleandmise-vastuvõtmise akt – Eesti. Täpne üleandmise aeg on oluline trahvide puhul kuni omanikuvahetuse vormistamiseni. */
import type { Sablona } from '../typy';
import { VOS, JALUS } from './allikad';

export const soidukiAkt: Sablona = {
  kod: 'EE-AKT-SOIDUK', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Sõiduki üleandmise-vastuvõtmise akt', podnadpis: 'sõiduki seisukord üleandmisel ja vastuvõtmise täpne aeg',
  souborPdf: 'soiduki-uleandmise-akt', paticka: JALUS('EE-AKT-SOIDUK'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üle andis', vpravo: 'vastu võttis' },
  cislovatClanky: false,
  slovo: { n: 'akt', g: 'akti', a: 'akti', l: 'aktis' },
  prevzit: {
    kod: 'EE-AUTO',
    nazev: 'sõiduki ostu-müügileping',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, votmed: d.votmed, kell: d.predavane_ora, misto: d.misto, datum: d.predavane_datum }),
  },
  coDal: ['Kumbki pool hoiab alles ühe eksemplari.', 'Pildistage näidikuplokki läbisõiduga ja sõidukit igast küljest.'],
  kontrola: [
    'Kirjutage üleandmise täpne kellaaeg – kuni omanikuvahetuse vormistamiseni võivad trahvid jõuda endise omanikuni.',
    'Märkige kõik nähtavad kahjustused ja see, mis üle anti (võtmed, registreerimistunnistus, hooldusraamat, talverehvid).',
    'Akti VIN-kood peab olema sama mis lepingus ja registreerimistunnistusel.',
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'isikud', nazev: 'Kes annab üle ja kes võtab vastu', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Üleandja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Vastuvõtja – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    ] },
    { id: 'soiduk', nazev: 'Sõiduk ja seisukord', pole: [
      { id: 'znacka', typ: 'text', popis: 'Mark ja mudel', placeholder: 'nt Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'VIN-kood', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Registreerimismärk', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Läbisõit', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'kutus', typ: 'text', popis: 'Kütus paagis', placeholder: 'nt pool paaki', sirka: 18, polovina: true },
      { id: 'votmed', typ: 'cislo', popis: 'Võtmete arv', sirka: 6, polovina: true },
      { id: 'dokumendid', typ: 'text', popis: 'Üle antud dokumendid', placeholder: 'nt registreerimistunnistus, hooldusraamat', sirka: 46 },
      { id: 'kahjustused', typ: 'textarea', popis: 'Kahjustused ja märkused', placeholder: 'nt kriimustus tagumisel põrkeraual', sirka: 56 },
      { id: 'kell', typ: 'text', popis: 'Üleandmise kellaaeg', placeholder: 'nt 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Üleandmise kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Akt', odstavce: [
    '**Üle andis:** {{p_jmeno}}, {{p_adresa}}',
    '**Vastu võttis:** {{k_jmeno}}, {{k_adresa}}',
    'Sõiduk {{znacka}}, VIN-kood {{vin}}, registreerimismärk {{spz}}, anti üle {{datum}} kell **{{kell}}**.',
    'Läbisõit: {{km}} km. Kütus: {{kutus}}. Võtmete arv: {{votmed}}. Üle antud dokumendid: {{dokumendid}}.',
    'Kahjustused ja märkused: {{kahjustused}}',
    'Sellest ajast vastutab vastuvõtja sõiduki kasutamise, eelkõige liikluseeskirja rikkumiste eest.',
  ] }],
};
