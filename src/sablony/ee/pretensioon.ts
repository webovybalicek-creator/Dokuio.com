/** Pretensioon kauba puuduse kohta – Eesti. Müüja vastutab 2 aastat; esimesel aastal ilmnenud puuduse puhul eeldatakse, et see oli olemas juba üleandmisel. */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, GARANTII, JALUS } from './allikad';

export const pretensioon: Sablona = {
  kod: 'EE-PRETENSIOON', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Pretensioon kauba puuduse kohta', podnadpis: 'nõue müüjale lepingutingimustele mittevastava kauba tõttu',
  souborPdf: 'pretensioon', paticka: JALUS('EE-PRETENSIOON'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ostja', vpravo: 'kätte saanud (müüja, soovi korral)' },
  cislovatClanky: false,
  slovo: { n: 'pretensioon', g: 'pretensiooni', a: 'pretensiooni', l: 'pretensioonis' },
  coDal: ['Andke pretensioon üle kaupluses või saatke e-posti või tähtkirjaga; hoidke koopia alles.', 'Lisage ostu tõend ja puuduse fotod.', 'Küsige kauba vastuvõtmise kohta kirjalikku kinnitust.'],
  kontrola: [
    `Müüja vastutab puuduste eest, mis ilmnevad 2 aasta jooksul kauba üleandmisest ([Your Europe](${GARANTII.url})).`,
    'Kui puudus ilmneb esimese aasta jooksul, eeldatakse, et see oli olemas juba üleandmisel – vastupidist peab tõendama müüja.',
    'Esmalt võite nõuda parandamist või asendamist; kui seda mõistliku aja jooksul ei tehta, hinna alandamist või lepingust taganemist.',
    'Tootja kaubandusgarantii on lisaks – see ei asenda müüja seaduslikku vastutust.',
  ],
  zdroje: [GARANTII, VOS],
  kroky: [{ id: 'andmed', nazev: 'Puudus', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Müüja (kauplus)', placeholder: 'nt kaupluse nimi', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Müüja aadress või e-post', sirka: 46 },
    { id: 'kaup', typ: 'text', popis: 'Kaup', placeholder: 'nt pesumasin Bosch Serie 4', sirka: 40 },
    { id: 'ostetud', typ: 'datum', popis: 'Ostu kuupäev', sirka: 14, polovina: true },
    { id: 'tseki', typ: 'text', popis: 'Tšeki või arve number', sirka: 18, polovina: true },
    { id: 'cena', typ: 'castka', popis: 'Hind (eurot)', sirka: 12, polovina: true },
    { id: 'puudus', typ: 'textarea', popis: 'Puuduse kirjeldus', placeholder: 'nt tsentrifuug ei käivitu, ekraanil kood E18', sirka: 56 },
    { id: 'ilmnes', typ: 'datum', popis: 'Puudus ilmnes', sirka: 14, polovina: true },
    { id: 'noue', typ: 'volba', popis: 'Mida nõuate', moznosti: [ { hodnota: 'parandus', popis: 'parandamist' }, { hodnota: 'asendus', popis: 'asendamist' }, { hodnota: 'alandus', popis: 'hinna alandamist' }, { hodnota: 'taganemine', popis: 'lepingust taganemist ja raha tagastamist' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Teie ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Teie aadress', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { cena_sonadega: (d) => summaSonadega(d.cena) },
  clanky: [{ nadpis: 'Pretensioon', odstavce: [
    '**Kellele:** {{k_jmeno}}, {{k_adresa}}',
    'Ostsin teilt {{ostetud}} kauba {{kaup}} hinnaga {{cena}} (tšekk/arve nr {{tseki}}).',
    '{{ilmnes}} ilmnes järgmine puudus: {{puudus}}',
    { volba: 'noue', uvodVzor: 'Seoses sellega nõuan (märkige üks variant):', moznosti: { parandus: 'Seoses sellega nõuan kauba tasuta parandamist.', asendus: 'Seoses sellega nõuan kauba asendamist uue, puudusteta kaubaga.', alandus: 'Seoses sellega nõuan hinna mõistlikku alandamist.', taganemine: 'Seoses sellega taganen lepingust ja nõuan kogu hinna tagastamist.' } },
    'Palun teatage mulle mõistliku aja jooksul kirjalikult, kuidas puudus kõrvaldatakse.',
    '**Ostja:** {{p_jmeno}}, {{p_adresa}}',
  ] }],
};
