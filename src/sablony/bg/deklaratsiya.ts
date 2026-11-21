/** Декларация – България. Писмена декларация пред институция, банка или работодател; неистинската писмена декларация пред орган на властта е престъпление (чл. 313 НК). */
import type { Sablona } from '../typy';
import { NK, PODNOZHIE } from './izvori';

export const deklaratsiya: Sablona = {
  kod: 'BG-DEKLARATSIYA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Декларация', podnadpis: 'писмена декларация на физическо лице',
  souborPdf: 'deklaratsiya', paticka: PODNOZHIE('BG-DEKLARATSIYA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'декларатор', vpravo: 'нотариална заверка (ако се изисква)' },
  cislovatClanky: false,
  slovo: { n: 'декларация', g: 'декларацията', a: 'декларацията', l: 'декларацията' },
  coDal: ['Проверете дали институцията изисква декларацията по свой образец или с нотариално заверен подпис – тогава я подпишете там.'],
  kontrola: [
    'Декларирайте само верни факти – за потвърждаване на неистина в писмена декларация пред орган на властта се носи наказателна отговорност (чл. 313 НК).',
    'Посочете за какво подавате декларацията (институцията или процедурата).',
    'Много институции имат собствен образец на декларация – проверете предварително.',
  ],
  zdroje: [NK],
  kroky: [{ id: 'danni', nazev: 'Декларацията', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Име, презиме и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
    { id: 'p_egn', typ: 'text', popis: 'ЕГН', sirka: 12, polovina: true },
    { id: 'p_lk', typ: 'text', popis: 'Лична карта №', placeholder: 'напр. 645123456', sirka: 12, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
    { id: 'pred', typ: 'text', popis: 'Пред коя институция / за какво', placeholder: 'напр. пред банка „…“ във връзка с откриване на сметка', sirka: 56 },
    { id: 'tekst', typ: 'textarea', popis: 'Текст на декларацията', placeholder: 'напр. не съм получавал/а помощ по същата програма', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Декларация', odstavce: [
    'Долуподписаният/ата **{{p_jmeno}}**, ЕГН {{p_egn}}, л. к. № {{p_lk}}, с адрес {{p_adresa}},',
    'декларирам, че {{tekst}}.',
    'Декларацията се подава {{pred}}. Известна ми е наказателната отговорност по чл. 313 от Наказателния кодекс за деклариране на неверни данни.',
  ] }],
};
