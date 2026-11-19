/**
 * Kupní smlouva na motocykl (i skútr, moped, čtyřkolku) – Česko. Stejný ověřený text jako kupní smlouva
 * na auto (§ 2079 a násl. OZ, přepis podle zák. č. 56/2001 Sb.); liší se jen nápovědy a příklady.
 * Při změně textu auta se změní i tady – zvýšit `verze` a `aktualizovano` u obou.
 */
import type { Sablona } from '../typy';
import { kupniSmlouvaAuto } from './kupni-smlouva-auto';

/** Slova v nápovědách a tipech (ne v právním textu článků) */
const NAHRADY: [RegExp, string][] = [
  [/kupní smlouvu na auto/g, 'kupní smlouvu na motorku'],
  [/Škoda Octavia Combi/g, 'Honda CB500F'],
  [/za čelním sklem v rohu u řidiče nebo na štítku ve dveřích řidiče/g, 'vyražený na rámu u hlavy řízení nebo na štítku na rámu'],
  [/za čelním sklem a na štítku ve dveřích/g, 'na rámu u hlavy řízení a na štítku'],
  [/Předejte vůz/g, 'Předejte motorku'],
  [/Že auto není/g, 'Že motorka není'],
  [/že auto už není vedené/g, 'že motorka už není vedená'],
  [/jste auto koupili ojeté/g, 'jste motorku koupili ojetou'],
  [/vůz/g, 'motorku'],
  [/\bauto\b/g, 'motorku'],
  [/\bAuto\b/g, 'Motorku'],
  [/\bauta\b/g, 'motorky'],
  [/\bautě\b/g, 'motorce'],
];
const prelozit = <T>(x: T): T => {
  if (typeof x === 'string') return NAHRADY.reduce((t, [a, b]) => t.replace(a, b), x as string) as T;
  if (Array.isArray(x)) return x.map(prelozit) as T;
  if (x && typeof x === 'object' && typeof x !== 'function') {
    return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, typeof v === 'function' ? v : prelozit(v)])) as T;
  }
  return x;
};

const a = kupniSmlouvaAuto;
export const kupniSmlouvaMotorka: Sablona = {
  ...a,
  kod: 'CZ-KUPNI-MOTO',
  nazev: 'Kupní smlouva na motorové vozidlo',
  souborPdf: 'kupni-smlouva-motorka',
  paticka: 'Vytvořeno zdarma · šablona CZ-KUPNI-MOTO v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  // Nápovědy a průvodce přeložené pro motorku; právní text článků zůstává stejný (mluví o „vozidle“)
  kroky: prelozit(a.kroky),
  coDal: prelozit(a.coDal),
  kontrola: [
    ...prelozit(a.kontrola),
    'Výbavu a doplňky (kufry, padací rámy, výfuk) zapište do smlouvy – neschválené úpravy musí projít technickou kontrolou.',
  ],
  odvozene: a.odvozene,
  clanky: a.clanky,
};
