/** Приемо-предавателен протокол за автомобил – България. Час на предаването, пробег, ключове, документи и повреди. */
import type { Sablona } from '../typy';
import { ZZD, ZDVP, PODNOZHIE } from './izvori';

export const protokolAvtomobil: Sablona = {
  kod: 'BG-PROTOKOL-AVTO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Приемо-предавателен протокол за автомобил', podnadpis: 'състояние на автомобила при предаването и точен час на приемането',
  souborPdf: 'priemo-predavatelen-protokol-avtomobil', paticka: PODNOZHIE('BG-PROTOKOL-AVTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'предал', vpravo: 'приел' },
  cislovatClanky: false,
  slovo: { n: 'протокол', g: 'протокола', a: 'протокола', l: 'протокола' },
  prevzit: {
    kod: 'BG-AVTO',
    nazev: 'договора за покупко-продажба на автомобил',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, klyuchove: d.klyuchove, chas: d.predavane_chas, misto: d.misto, datum: d.predavane_datum }),
  },
  coDal: ['Всяка страна запазва по един екземпляр.', 'Снимайте таблото с пробега и автомобила от всички страни.'],
  kontrola: [
    'Впишете точния час на предаването – докато купувачът не регистрира автомобила, глобите може да стигнат до бившия собственик.',
    'Отбележете всички видими повреди и какво е предадено (ключове, свидетелство за регистрация, сервизна книжка, зимни гуми).',
    'Номерът на рамата в протокола трябва да е същият като в договора и в свидетелството за регистрация.',
  ],
  zdroje: [ZZD, ZDVP],
  kroky: [
    { id: 'litsa', nazev: 'Кой предава и кой приема', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Предава – име и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Приема – име и фамилия', placeholder: 'напр. Мария Георгиева Димитрова', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
    ] },
    { id: 'avtomobil', nazev: 'Автомобилът и състоянието му', pole: [
      { id: 'znacka', typ: 'text', popis: 'Марка и модел', placeholder: 'напр. Volkswagen Golf', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Рама (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Регистрационен номер', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Пробег', jednotka: 'км', sirka: 12, polovina: true },
      { id: 'gorivo', typ: 'text', popis: 'Гориво в резервоара', placeholder: 'напр. половин резервоар', sirka: 14, polovina: true },
      { id: 'klyuchove', typ: 'cislo', popis: 'Брой ключове', sirka: 4, polovina: true },
      { id: 'dokumenti', typ: 'text', popis: 'Предадени документи', placeholder: 'напр. свидетелство за регистрация част I и II, сервизна книжка', sirka: 56 },
      { id: 'povredi', typ: 'textarea', popis: 'Повреди и бележки', placeholder: 'напр. драскотина по задната броня', sirka: 64 },
      { id: 'chas', typ: 'text', popis: 'Час на предаване', placeholder: 'напр. 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата на предаване', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Протокол', odstavce: [
    '**Предал:** {{p_jmeno}}, {{p_adresa}}',
    '**Приел:** {{k_jmeno}}, {{k_adresa}}',
    'Автомобил {{znacka}}, рама (VIN) {{vin}}, регистрационен номер {{spz}}, е предаден на {{datum}} в **{{chas}}** ч.',
    'Пробег: {{km}} км. Гориво: {{gorivo}}. Брой ключове: {{klyuchove}}. Предадени документи: {{dokumenti}}.',
    'Повреди и бележки: {{povredi}}',
    'От посочения час приелият автомобила отговаря за ползването му, включително за нарушенията на правилата за движение.',
  ] }],
};
