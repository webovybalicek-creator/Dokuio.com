/** Предизвестие за прекратяване на договор за наем от наемателя – България (ЗЗД, чл. 238: при наем без срок – един месец, ако не е уговорено друго). */
import type { Sablona } from '../typy';
import { ZZD, PODNOZHIE } from './izvori';

export const predizvestieNaem: Sablona = {
  kod: 'BG-PREDIZVESTIE-NAEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Предизвестие за прекратяване на договор за наем', podnadpis: 'едностранно прекратяване от наемателя с предизвестие',
  souborPdf: 'predizvestie-prekratyavane-naem', paticka: PODNOZHIE('BG-PREDIZVESTIE-NAEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'наемател', vpravo: 'получил (наемодател, дата)' },
  cislovatClanky: false,
  slovo: { n: 'предизвестие', g: 'предизвестието', a: 'предизвестието', l: 'предизвестието' },
  coDal: ['Връчете предизвестието срещу подпис или го изпратете с препоръчано писмо с обратна разписка.', 'В деня на изнасянето подпишете протокол с показанията на уредите.'],
  kontrola: [
    'При наем без определен срок предизвестието е един месец, ако в договора не е уговорено друго (чл. 238 ЗЗД). Тече от деня, в който наемодателят получи предизвестието.',
    'При договор за определен срок проверете дали договорът допуска предсрочно прекратяване; иначе опитайте споразумение.',
    'Уговорете деня на предаване на ключовете и връщането на депозита.',
  ],
  zdroje: [ZZD],
  kroky: [{ id: 'danni', nazev: 'Предизвестието', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Наемател – име и фамилия', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес (наетото жилище)', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Наемодател – име и фамилия', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес на наемодателя', sirka: 46 },
    { id: 'dogovor_ot', typ: 'datum', popis: 'Договор за наем от', sirka: 14, polovina: true },
    { id: 'predizvestie', typ: 'cislo', popis: 'Срок на предизвестие', placeholder: 'напр. 1', jednotka: 'месец(а)', sirka: 6, polovina: true },
    { id: 'osvobozhdavane', typ: 'datum', popis: 'Очаквана дата на освобождаване', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN за връщане на депозита', placeholder: 'BG80 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Предизвестие', odstavce: [
    '**Наемател:** {{p_jmeno}}, {{p_adresa}}',
    '**Наемодател:** {{k_jmeno}}, {{k_adresa}}',
    'С настоящото прекратявам договора за наем от {{dogovor_ot}} за жилището на адрес {{p_adresa}} с предизвестие от {{predizvestie}} месец(а), което тече от получаването му.',
    'Ще освободя и предам жилището на {{osvobozhdavane}}. Моля, върнете ми депозита по сметка IBAN {{iban}}, като задържите само евентуалните суми, установени при предаването.',
  ] }],
};
