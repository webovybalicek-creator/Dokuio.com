/**
 * Izjava o jednostranom raskidu ugovora sklopljenog na daljinu ili izvan poslovnih prostorija – Hrvatska.
 * ZZP (NN 19/22, 59/23, 59/26): rok 14 dana; obrazac prema Pravilniku NN 117/22 (dio II priloga).
 */
import type { Sablona } from '../typy';
import { ZZP, PRAVILNIK_RASKID, PATICKA } from './izvori';

export const jednostraniRaskid: Sablona = {
  kod: 'HR-RASKID',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Obrazac za jednostrani raskid ugovora',
  podnadpis: 'ugovor sklopljen na daljinu ili izvan poslovnih prostorija – Zakon o zaštiti potrošača',
  souborPdf: 'jednostrani-raskid-ugovora',
  paticka: PATICKA('HR-RASKID'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'potrošač', vpravo: 'potvrda primitka (neobavezno)' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'izjava', g: 'izjave', a: 'izjavu', l: 'izjavi' },
  coDal: [
    'Pošaljite izjavu trgovcu prije isteka 14 dana – e-poštom ili preporučeno poštom. Sačuvajte dokaz o slanju.',
    'Robu vratite najkasnije 14 dana od slanja izjave.',
    'Trgovac vam mora vratiti uplaćeni novac, uključujući osnovnu dostavu, najkasnije 14 dana od primitka izjave.',
  ],
  kontrola: [
    'Rok je 14 dana – kod robe obično od dana kada ste je primili ([Pravilnik, NN 117/22](https://narodne-novine.nn.hr/clanci/sluzbeni/2022_10_117_1795.html)).',
    'Pravo vrijedi za kupnju na daljinu (internet, telefon) i izvan poslovnih prostorija, ne za kupnju u trgovini.',
    'Odgovarate za umanjenje vrijednosti robe nastalo rukovanjem većim od potrebnog za utvrđivanje njezine prirode i funkcionalnosti.',
    'Iznimke: npr. roba izrađena po mjeri, brzo kvarljiva roba ili otpakirana roba koja se iz zdravstvenih razloga ne može vratiti.',
  ],
  zdroje: [ZZP, PRAVILNIK_RASKID],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Trgovac i narudžba',
      pole: [
        { id: 'obchod', typ: 'text', popis: 'Trgovac – naziv i adresa', napoveda: 'Iz potvrde narudžbe ili uvjeta trgovine.', placeholder: 'npr. Primjer d.o.o., Ulica 1, 10000 Zagreb', sirka: 56 },
        { id: 'obchod_email', typ: 'text', popis: 'E-pošta trgovca', sirka: 30 },
        { id: 'zbozi', typ: 'textarea', popis: 'Roba ili usluga', placeholder: 'npr. tenisice Nike, vel. 42', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Broj narudžbe', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Naručeno dana', sirka: 14, polovina: true },
        { id: 'prijato', typ: 'datum', popis: 'Primljeno dana', sirka: 14, polovina: true },
        { id: 'jmeno', typ: 'text', popis: 'Vaše ime i prezime', sirka: 34, autocomplete: 'name' },
        { id: 'adresa', typ: 'text', popis: 'Vaša adresa', sirka: 46 },
        { id: 'iban', typ: 'text', popis: 'IBAN za povrat novca (neobavezno)', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Izjava o jednostranom raskidu',
      odstavce: [
        '**Prima:** {{obchod}}, e-pošta: {{obchod_email}}',
        'Ja, **{{jmeno}}**, adresa {{adresa}}, ovim izjavljujem da jednostrano raskidam ugovor o prodaji sljedeće robe / o pružanju sljedeće usluge: {{zbozi}}',
        'Broj narudžbe: {{objednavka}}, naručeno dana {{objednano}}, primljeno dana {{prijato}}.',
        'Molim povrat plaćenog iznosa na račun IBAN {{iban}}.',
      ],
    },
  ],
};
