/**
 * Vecāka piekrišana bērna ceļojumam – Latvija. Bērna pagaidu izceļošanai otra vecāka piekrišana nav vajadzīga (e-justice, Latvija);
 * pietiek ar viena vecāka piekrišanu. Ja bērns ārpus Šengenas zonas ceļo citas personas pavadībā vai viens, vajadzīga vismaz viena vecāka
 * notariāli apliecināta pilnvara vai piekrišana (Valsts robežsardze, LV portāls); Šengenas zonā tā nav obligāta.
 */
import type { Sablona } from '../typy';
import { BERNS, ROBEZA, KAJENE } from './avoti';

export const berncelojums: Sablona = {
  kod: 'LV-BERNA-CELOJUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Vecāka piekrišana bērna ceļojumam', podnadpis: 'viena vecāka piekrišana nepilngadīga bērna ceļojumam bez vecākiem',
  souborPdf: 'vecaka-piekrisana-berna-celojumam', paticka: KAJENE('LV-BERNA-CELOJUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vecāks', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'piekrišana', g: 'piekrišanas', a: 'piekrišanu', l: 'piekrišanā' },
  coDal: ['Iedodiet parakstīto piekrišanu pavadonim vai bērnam līdzi kopā ar bērna pasi vai personas apliecību.', 'Ja ceļojums ved ārpus Šengenas zonas, ar šo sagatavi dodieties pie zvērināta notāra – tur piekrišanu vai pilnvaru apliecina.', 'Pārbaudiet galamērķa valsts un aviokompānijas prasības – dažas prasa tulkojumu.'],
  kontrola: [
    `Bērna pagaidu izceļošanai (atvaļinājums, ārstēšanās) otra vecāka piekrišana nav vajadzīga – pietiek ar viena vecāka piekrišanu ([e-justice](${BERNS.url})).`,
    `Ja bērns ārpus Šengenas zonas ceļo citas personas pavadībā vai viens, vajadzīga vismaz viena vecāka notariāli apliecināta pilnvara vai piekrišana; to pārbauda uz ārējās robežas ([LV portāls](${ROBEZA.url})).`,
    'Ceļojot Šengenas zonā, pilnvara nav obligāta, taču tā noder, ja to jautā robežsargi, aviokompānija vai viesnīca.',
    'Bērna pārcelšanai uz pastāvīgu dzīvi citā valstī vajadzīga otra vecāka piekrišana, ja viņam ir aizgādības tiesības – šim gadījumam šis paraugs nav paredzēts.',
    'Ierakstiet precīzi ceļojuma laiku, valstis un pavadoņa datus.',
  ],
  zdroje: [BERNS, ROBEZA],
  kroky: [
    { id: 'vecaks', nazev: 'Vecāks un bērns', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vecāks – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Vecāka personas kods', sirka: 14, polovina: true },
      { id: 'p_tel', typ: 'text', popis: 'Tālrunis', sirka: 16, polovina: true, autocomplete: 'tel' },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Bērns – vārds, uzvārds', sirka: 34 },
      { id: 'd_ik', typ: 'text', popis: 'Bērna personas kods', sirka: 14, polovina: true },
      { id: 'd_dokuments', typ: 'text', popis: 'Bērna pases / personas apliecības Nr.', sirka: 14, polovina: true },
    ] },
    { id: 'celojums', nazev: 'Ceļojums', pole: [
      { id: 'pavadiba', typ: 'volba', popis: 'Bērns ceļo', moznosti: [ { hodnota: 'persona', popis: 'citas pieaugušas personas pavadībā' }, { hodnota: 'viens', popis: 'patstāvīgi (viens)' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Pavadonis – vārds, uzvārds', sirka: 34, zobrazitKdyz: { pole: 'pavadiba', je: 'persona' } },
      { id: 's_dokuments', typ: 'text', popis: 'Pavadoņa personas kods vai dokumenta Nr.', sirka: 20, zobrazitKdyz: { pole: 'pavadiba', je: 'persona' } },
      { id: 'valstis', typ: 'text', popis: 'Valsts/valstis', placeholder: 'piem., Somija, Zviedrija', sirka: 40 },
      { id: 'merkis', typ: 'text', popis: 'Ceļojuma mērķis', placeholder: 'piem., atvaļinājums', sirka: 34 },
      { id: 'no', typ: 'datum', popis: 'No', sirka: 14, polovina: true },
      { id: 'lidz', typ: 'datum', popis: 'Līdz', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Vecāka piekrišana', odstavce: [
    'Es, **{{p_jmeno}}**, personas kods {{p_ik}}, dzīvesvieta {{p_adresa}}, tālrunis {{p_tel}}, esmu nepilngadīgā bērna',
    '**{{d_jmeno}}**, personas kods {{d_ik}}, pase vai personas apliecība Nr. {{d_dokuments}}, vecāks.',
    { volba: 'pavadiba', uvodVzor: 'Pavadība (atzīmējiet vienu variantu):', moznosti: { persona: 'Piekrītu, ka bērns izceļo uz ārvalstīm kopā ar {{s_jmeno}} ({{s_dokuments}}), kuram uz ceļojuma laiku uzticu rūpes par bērnu.', viens: 'Piekrītu, ka bērns patstāvīgi izceļo uz ārvalstīm.' } },
    'Ceļojums: {{valstis}}, laikā no {{no}} līdz {{lidz}}, mērķis: {{merkis}}.',
    'Ceļojuma laikā esmu sasniedzams(-a) pa iepriekš norādīto tālruni.',
  ] }],
};
