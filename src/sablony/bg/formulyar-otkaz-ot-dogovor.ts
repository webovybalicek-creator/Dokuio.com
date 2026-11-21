/**
 * Формуляр за отказ от договор от разстояние или извън търговския обект – България (Закон за защита на потребителите).
 * 14 дни без посочване на причина; търговецът възстановява плащанията, включително стандартната доставка, до 14 дни от уведомяването.
 */
import type { Sablona } from '../typy';
import { ZZP_OTKAZ, PODNOZHIE } from './izvori';

export const formulyarOtkaz: Sablona = {
  kod: 'BG-OTKAZ', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Формуляр за упражняване на право на отказ', podnadpis: 'уведомление за отказ от договор, сключен от разстояние',
  souborPdf: 'formulyar-otkaz-ot-dogovor', paticka: PODNOZHIE('BG-OTKAZ'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'потребител', vpravo: 'получил (търговец, по желание)' },
  cislovatClanky: false,
  slovo: { n: 'формуляр', g: 'формуляра', a: 'формуляра', l: 'формуляра' },
  coDal: ['Изпратете формуляра по имейл или с препоръчано писмо преди изтичането на 14-те дни и запазете доказателство за изпращането.', 'Върнете стоката в срок до 14 дни от отказа.'],
  kontrola: [
    'При договор от разстояние (онлайн, по телефона) или извън търговския обект потребителят може да се откаже в 14 дни, без да посочва причина (Закон за защита на потребителите).',
    'При стоки срокът тече от деня, в който сте получили стоката.',
    'Достатъчно е да изпратите уведомлението преди изтичането на срока.',
    'Търговецът ви възстановява всички плащания, включително разходите за стандартна доставка, до 14 дни от деня, в който е уведомен за отказа.',
    'Преките разходи за връщане обикновено са за сметка на потребителя, ако търговецът ви е уведомил за това.',
  ],
  zdroje: [ZZP_OTKAZ],
  kroky: [{ id: 'danni', nazev: 'Отказът', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Търговецът', placeholder: 'напр. името на онлайн магазина', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес или имейл на търговеца', sirka: 46 },
    { id: 'stoka', typ: 'textarea', popis: 'Стока или услуга', placeholder: 'напр. зимно яке, размер M', sirka: 64 },
    { id: 'porachka', typ: 'text', popis: 'Номер на поръчката', sirka: 20, polovina: true },
    { id: 'poracheno', typ: 'datum', popis: 'Поръчано на', sirka: 14, polovina: true },
    { id: 'polucheno', typ: 'datum', popis: 'Получено на', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Вашето име', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Вашият адрес', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN за възстановяване (по желание)', placeholder: 'BG80 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Отказ', odstavce: [
    '**До:** {{k_jmeno}}, {{k_adresa}}',
    'С настоящото уведомявам, че се отказвам от сключения от мен договор за покупка на следните стоки или за предоставяне на следната услуга: {{stoka}}.',
    'Номер на поръчката: {{porachka}}. Поръчано на {{poracheno}}, получено на {{polucheno}}.',
    '**Потребител:** {{p_jmeno}}, {{p_adresa}}',
    'Моля, възстановете плащанията по сметка IBAN {{iban}}.',
  ] }],
};
