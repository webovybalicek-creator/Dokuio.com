/** Приемо-предавателен протокол за жилище – България. Показания на уредите, ключове, обзавеждане и повреди при нанасяне или изнасяне. */
import type { Sablona } from '../typy';
import { ZZD, PODNOZHIE } from './izvori';

export const protokolZhilishte: Sablona = {
  kod: 'BG-PROTOKOL-ZHILISHTE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Приемо-предавателен протокол за жилище', podnadpis: 'състояние на жилището и показания на уредите',
  souborPdf: 'priemo-predavatelen-protokol-zhilishte', paticka: PODNOZHIE('BG-PROTOKOL-ZHILISHTE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'наемодател', vpravo: 'наемател' },
  cislovatClanky: false,
  slovo: { n: 'протокол', g: 'протокола', a: 'протокола', l: 'протокола' },
  coDal: ['Снимайте жилището и уредите с дата.', 'Всяка страна запазва по един екземпляр.'],
  kontrola: ['При изнасянето състоянието се сравнява с протокола от нанасянето – каквото не е записано, после трудно се доказва.', 'Обичайното изхабяване не е повреда.'],
  zdroje: [ZZD],
  kroky: [{ id: 'danni', nazev: 'Предаването', pole: [
    { id: 'vid', typ: 'volba', popis: 'Предаване при', moznosti: [ { hodnota: 'nanasyane', popis: 'нанасяне' }, { hodnota: 'iznasyane', popis: 'изнасяне' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Наемодател', sirka: 34, autocomplete: 'name' },
    { id: 'k_jmeno', typ: 'text', popis: 'Наемател', sirka: 34 },
    { id: 'adres_zhilishte', typ: 'text', popis: 'Адрес на жилището', sirka: 46 },
    { id: 'tok', typ: 'text', popis: 'Електромер', sirka: 14, polovina: true },
    { id: 'voda', typ: 'text', popis: 'Водомер', sirka: 14, polovina: true },
    { id: 'toplomer', typ: 'text', popis: 'Топломер или газ', sirka: 14, polovina: true },
    { id: 'klyuchove', typ: 'text', popis: 'Ключове', placeholder: 'напр. 2× врата, 1× пощенска кутия', sirka: 30 },
    { id: 'obzavezhdane', typ: 'textarea', popis: 'Обзавеждане и състояние', placeholder: 'напр. кухня без повреди, пералнята работи', sirka: 64 },
    { id: 'povredi', typ: 'textarea', popis: 'Повреди и бележки', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Протокол', odstavce: [
    { volba: 'vid', uvodVzor: 'Предаване (отбележете един вариант):', moznosti: { nanasyane: 'Наемодателят {{p_jmeno}} предава на наемателя {{k_jmeno}} жилището на адрес {{adres_zhilishte}} при нанасяне.', iznasyane: 'Наемателят {{k_jmeno}} предава на наемодателя {{p_jmeno}} жилището на адрес {{adres_zhilishte}} при изнасяне.' } },
    'Показания на уредите – електромер: {{tok}}, водомер: {{voda}}, топломер или газ: {{toplomer}}.',
    'Ключове: {{klyuchove}}.',
    'Обзавеждане и състояние: {{obzavezhdane}}',
    'Повреди и бележки: {{povredi}}',
  ] }],
};
