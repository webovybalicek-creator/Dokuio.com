/** Разписка за получени пари – България. Кой е получил, от кого, колко и за какво (ЗЗД – длъжникът има право на разписка). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, ZOPB, SAVET_V_BROI, PODNOZHIE } from './izvori';

export const razpiska: Sablona = {
  kod: 'BG-RAZPISKA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Разписка за получена сума', podnadpis: 'доказателство за плащане в брой между физически лица',
  souborPdf: 'razpiska-poluchavane-pari', paticka: PODNOZHIE('BG-RAZPISKA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'получил', vpravo: 'платил (по желание)' },
  cislovatClanky: false,
  slovo: { n: 'разписка', g: 'разписката', a: 'разписката', l: 'разписката' },
  coDal: ['Разписката се пази от този, който е платил – с нея доказва плащането.', 'Ако е платено за автомобил или вещ, нека разписката препраща към договора.'],
  kontrola: [
    'Който плаща, има право да получи разписка (ЗЗД).',
    'Впишете за какво се плаща (цена, заем, депозит, капаро), за да е ясно за какво са дадени парите.',
    SAVET_V_BROI,
  ],
  zdroje: [ZZD, ZOPB],
  kroky: [{ id: 'danni', nazev: 'Плащането', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Получател – име и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес на получателя', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Платец – име и фамилия', placeholder: 'напр. Мария Георгиева Димитрова', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес на платеца', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Сума (евро)', sirka: 12, polovina: true },
    { id: 'osnovanie', typ: 'text', popis: 'За какво се плаща', placeholder: 'напр. цена на автомобила по договор от 21.11.2026 г.', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka) },
  clanky: [{ nadpis: 'Разписка', odstavce: [
    'Долуподписаният/ата **{{p_jmeno}}**, с адрес {{p_adresa}}, удостоверявам, че получих от {{k_jmeno}}, с адрес {{k_adresa}}, сумата от **{{castka}}** (словом: {{castka_slovom}}) в брой.',
    'Основание за плащането: {{osnovanie}}.',
  ] }],
};
