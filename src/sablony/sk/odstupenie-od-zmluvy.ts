/**
 * Odstúpenie od zmluvy uzavretej na diaľku (e-shop) do 14 dní – Slovensko.
 * § 19 a § 20 ods. 1 zákona č. 108/2024 Z. z. (14 dní), vzorový formulár podľa prílohy zákona, vrátenie platieb do 14 dní.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { ZAKON_SPOTREBITEL_SK, SOI } from './zdroje';

export const odstupenieOdZmluvy: Sablona = {
  kod: 'SK-ODSTUPENIE-14',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Odstúpenie od zmluvy',
  podnadpis: 'uzavretej na diaľku podľa § 19 zákona č. 108/2024 Z. z. o ochrane spotrebiteľa',
  souborPdf: 'odstupenie-od-zmluvy',
  paticka: 'Vytvorené zadarmo · šablóna SK-ODSTUPENIE-14 v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'spotrebiteľ', vpravo: 'prevzal za predávajúceho (pri osobnom podaní)' },
  slovo: { n: 'odstúpenie', g: 'odstúpenia', a: 'odstúpenie', l: 'odstúpení' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Predávajúci má vrátiť peniaze (orientačne)', datum: isoDatum(pridejDny(od, 14)), popis: 'Do 14 dní od doručenia odstúpenia; môže počkať, kým dostane tovar späť alebo preukážete jeho odoslanie.' }] : [];
  },
  coDal: [
    'Odstúpenie pošlite e-mailom, poštou alebo cez formulár či tlačidlo na odstúpenie v e-shope – doklad o odoslaní si nechajte.',
    'Tovar pošlite späť najneskôr do 14 dní od odstúpenia.',
    'Predávajúci vráti všetky platby vrátane najlacnejšieho ponúkaného doručenia do 14 dní.',
    'Nevracia peniaze? Obráťte sa na Slovenskú obchodnú inšpekciu.',
  ],
  kontrola: [
    'Lehota je 14 dní od prevzatia tovaru (pri službách od uzavretia zmluvy). Stačí odstúpenie v lehote odoslať.',
    'Platí len pri kúpe na diaľku (e-shop, telefón) alebo mimo prevádzkových priestorov od podnikateľa. V kamennom obchode a medzi súkromnými osobami zákonné právo nie je.',
    'Výnimky: tovar na mieru, rýchlo sa kaziaci, rozbalený hygienický tovar, rozbalené nosiče a softvér, ubytovanie a doprava na konkrétny termín.',
    'Náklady na vrátenie tovaru znášate len vtedy, ak vás o tom predávajúci vopred informoval.',
    'Ak vás predávajúci o práve na odstúpenie nepoučil, lehota sa predlžuje až o 12 mesiacov.',
  ],
  zdroje: [ZAKON_SPOTREBITEL_SK, SOI],
  kroky: [
    {
      id: 'obchod',
      nazev: 'Predávajúci',
      popis: 'Údaje nájdete v obchodných podmienkach alebo v pätičke e-shopu.',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Predávajúci (obchodné meno)', placeholder: 'napr. Alza.sk s.r.o.', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'IČO (nepovinné)', sirka: 12, polovina: true },
        { id: 'pr_adresa', typ: 'text', popis: 'Adresa alebo e-mail na odstúpenie', sirka: 46 },
      ],
    },
    {
      id: 'nakup',
      nazev: 'Nákup',
      pole: [
        { id: 'zbozi', typ: 'textarea', popis: 'Tovar alebo služba', placeholder: 'napr. bezdrôtové slúchadlá Sony WH-1000XM5, čierne', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Číslo objednávky', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Dátum objednania', sirka: 14, polovina: true },
        { id: 'prevzato', typ: 'datum', popis: 'Dátum prevzatia', napoveda: 'Od tohto dňa plynie 14 dní.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'vy',
      nazev: 'Vaše údaje',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Meno a priezvisko', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-mail alebo telefón', sirka: 30 },
        { id: 'ucet', typ: 'text', popis: 'IBAN na vrátenie peňazí (nepovinné)', napoveda: 'Bez neho predávajúci vráti peniaze rovnakým spôsobom, akým ste platili.', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Adresát', odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'] },
    {
      nadpis: 'Oznámenie o odstúpení od zmluvy',
      vysvetleni: 'Text podľa vzorového formulára zo zákona. Dôvod uvádzať nemusíte.',
      odstavce: [
        'Týmto oznamujem, že odstupujem od zmluvy na tento tovar / od zmluvy o poskytnutí tejto služby: {{zbozi}}',
        'Číslo objednávky: {{objednavka}} · Dátum objednania: {{objednano}} · Dátum prevzatia: {{prevzato}}',
        'Platbu prosím vráťte na účet IBAN {{ucet}}.',
      ],
    },
    { nadpis: 'Spotrebiteľ', odstavce: ['{{p_jmeno}}, {{p_adresa}}, kontakt: {{p_kontakt}}'] },
  ],
};
