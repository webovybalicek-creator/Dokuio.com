/** Umowa kupna-sprzedaży motocykla – Polska. Ten sam sprawdzony tekst co umowa na samochód (art. 535 i nast. KC). */
import type { Sablona } from '../typy';
import { umowaSprzedazySamochodu as a } from './umowa-sprzedazy-samochodu';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Skoda Octavia/g, 'Honda CB500F'],
  [/Auto nie może być w leasingu ani objęte zastawem/g, 'Motocykl nie może być w leasingu ani objęty zastawem'],
  [/Które auto jest sprzedawane/g, 'Który motocykl jest sprzedawany'],
  [/z VIN na aucie/g, 'z VIN na ramie motocykla'],
  [/samochodu marki/g, 'motocykla marki'],
  [/pęknięta przednia szyba/g, 'zużyty napęd, porysowany zbiornik'],
  [/np\. 154320/g, 'np. 24300'],
  [/np\. 35000/g, 'np. 18000'],
  [/\bauta\b/g, 'motocykla'],
  [/\bauto\b/g, 'motocykl'],
  [/\bAuto\b/g, 'Motocykl'],
];

export const umowaSprzedazyMotocykla: Sablona = naMotorku(a, {
  kod: 'PL-SPRZEDAZ-MOTO',
  nazev: 'Umowa kupna-sprzedaży motocykla',
  souborPdf: 'umowa-kupna-sprzedazy-motocykla',
  paticka: a.paticka!.replace('PL-SPRZEDAZ-AUTO', 'PL-SPRZEDAZ-MOTO'),
  clanky: true,
  nahrady: NAHRADY,
  vin: 'W motocyklu jest wybity na ramie przy główce ramy.',
  tip: 'Wyposażenie dodatkowe (kufry, gmole, wydech) wpisz do umowy. Sprawdź też, czy motocykl ma aktualne badanie techniczne.',
});
