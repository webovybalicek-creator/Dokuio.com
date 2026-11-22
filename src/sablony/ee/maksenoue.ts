/** Maksenõue (meeldetuletus võlgnikule) – Eesti. Viivitamise korral võib võlausaldaja nõuda viivist (VÕS 113). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, TSUS, JALUS } from './allikad';

export const maksenoue: Sablona = {
  kod: 'EE-MAKSENOUE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Maksenõue', podnadpis: 'nõue võlgnikule võla tasumiseks tähtajaks',
  souborPdf: 'maksenoue', paticka: JALUS('EE-MAKSENOUE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'võlausaldaja', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'nõue', g: 'nõude', a: 'nõuet', l: 'nõudes' },
  coDal: ['Saatke nõue e-posti teel (soovitatavalt digiallkirjastatult) või tähtkirjaga ja hoidke alles saatmise tõend.', 'Kui võlgnik ei maksa, võite esitada kohtule maksekäsu kiirmenetluse avalduse.'],
  kontrola: [
    'Kirjutage täpselt, millest nõue tuleneb (leping, arve, laen) ja kui suur see on.',
    'Andke mõistlik maksetähtaeg, tavaliselt 7–14 päeva.',
    'Rahalise kohustuse täitmisega viivitamise korral võib nõuda viivist (VÕS § 113).',
    `Pidage silmas aegumist: tehingust tuleneva nõude aegumistähtaeg on 3 aastat ([TsÜS § 146](${TSUS.url})).`,
  ],
  zdroje: [VOS, TSUS],
  kroky: [{ id: 'andmed', nazev: 'Nõue', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Võlausaldaja – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Võlausaldaja aadress', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Võlgnik – nimi või ärinimi', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Võlgniku aadress', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Võla summa (eurot)', sirka: 12, polovina: true },
    { id: 'tahtaeg_moodus', typ: 'datum', popis: 'Maksetähtaeg möödus', sirka: 14, polovina: true },
    { id: 'pohjus', typ: 'text', popis: 'Võla alus', placeholder: 'nt remonditööde tasu 01.09.2026 töövõtulepingu järgi', sirka: 56 },
    { id: 'uus_tahtaeg', typ: 'datum', popis: 'Tasuda hiljemalt', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'Võlausaldaja IBAN', placeholder: 'EE38 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka) },
  clanky: [{ nadpis: 'Maksenõue', odstavce: [
    '**Saatja:** {{p_jmeno}}, {{p_adresa}}',
    '**Kellele:** {{k_jmeno}}, {{k_adresa}}',
    'Teil on minu ees võlg **{{castka}}** (sõnadega: {{castka_sonadega}}), mis tuleneb järgmisest: {{pohjus}}. Maksetähtaeg möödus {{tahtaeg_moodus}} ja võlg on tasumata.',
    'Palun tasuge summa hiljemalt {{uus_tahtaeg}} minu kontole IBAN {{iban}}.',
    'Vastasel juhul pöördun nõude sissenõudmiseks kohtusse ning nõuan lisaks viivist ja menetluskulude hüvitamist.',
  ] }],
};
