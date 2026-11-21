/**
 * Предизвестие за прекратяване на трудов договор от работника – България (Кодекс на труда, чл. 326). Писмено, без посочване на
 * причина; срокът при безсрочен договор е 30 дни, ако не е уговорен по-дълъг, но не повече от 3 месеца (чл. 326, ал. 2).
 */
import type { Sablona } from '../typy';
import { KT, PODNOZHIE } from './izvori';

export const predizvestieRabota: Sablona = {
  kod: 'BG-NAPUSKANE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Предизвестие за прекратяване на трудов договор', podnadpis: 'от работника по чл. 326 от Кодекса на труда',
  souborPdf: 'predizvestie-napuskane-rabota', paticka: PODNOZHIE('BG-NAPUSKANE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'работник/служител', vpravo: 'вх. № / дата при работодателя' },
  cislovatClanky: false,
  slovo: { n: 'предизвестие', g: 'предизвестието', a: 'предизвестието', l: 'предизвестието' },
  coDal: ['Подайте предизвестието в деловодството на работодателя и поискайте входящ номер на вашия екземпляр или го изпратете с препоръчано писмо.', 'Срокът на предизвестието тече от деня след връчването.', 'Уговорете използването на оставащия платен отпуск.'],
  kontrola: [
    'Работникът може да прекрати трудовия договор с писмено предизвестие, без да посочва причина (чл. 326 КТ).',
    'При безсрочен трудов договор срокът е 30 дни, освен ако е уговорен по-дълъг, но не повече от 3 месеца ([чл. 326, ал. 2 КТ](https://apps.eurofound.europa.eu/legislationdb/notice-period-to-employees/bulgaria)). Проверете срока в договора си.',
    'Ако искате да напуснете по-рано, можете да предложите прекратяване по взаимно съгласие – ако работодателят не го приеме, договорът се прекратява след изтичането на предизвестието.',
    'Ако не спазите предизвестието, работодателят може да поиска обезщетение за неспазения срок – затова се договорете писмено.',
  ],
  zdroje: [KT],
  kroky: [{ id: 'danni', nazev: 'Работникът и работодателят', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Работник – име, презиме и фамилия', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Работодател', placeholder: 'напр. Пример ЕООД', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Седалище на работодателя', sirka: 46 },
    { id: 'dlazhnost', typ: 'text', popis: 'Длъжност', placeholder: 'напр. продавач-консултант', sirka: 34 },
    { id: 'dogovor_nr', typ: 'text', popis: 'Трудов договор № / от', placeholder: 'напр. 112 от 03.02.2025 г.', sirka: 24, polovina: true },
    { id: 'predizvestie', typ: 'cislo', popis: 'Срок на предизвестие', placeholder: 'напр. 30', jednotka: 'дни', sirka: 6, polovina: true },
    { id: 'po_saglasie', typ: 'volba', popis: 'Предлагате ли по-ранно прекратяване по взаимно съгласие?', moznosti: [ { hodnota: 'ne', popis: 'не' }, { hodnota: 'da', popis: 'да, към определена дата' } ] },
    { id: 'data_prekratyavane', typ: 'datum', popis: 'Предложена дата на прекратяване', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'po_saglasie', je: 'da' } },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Предизвестие', odstavce: [
    '**Работник/служител:** {{p_jmeno}}, {{p_adresa}}',
    '**Работодател:** {{k_jmeno}}, {{k_adresa}}',
    'На основание чл. 326, ал. 1 от Кодекса на труда ви уведомявам, че прекратявам трудовия си договор № {{dogovor_nr}} за длъжността {{dlazhnost}}.',
    'Срокът на предизвестието е {{predizvestie}} дни и тече от деня, следващ връчването на настоящото предизвестие.',
    { volba: 'po_saglasie', uvodVzor: 'Искане (отбележете един вариант):', moznosti: { ne: 'Моля, дайте ми възможност да използвам оставащия платен годишен отпуск до изтичането на предизвестието или ми изплатете обезщетение за неизползвания отпуск.', da: 'Предлагам трудовият договор да бъде прекратен по взаимно съгласие на {{data_prekratyavane}}. Ако не приемете предложението, договорът се прекратява с изтичането на срока на предизвестието.' } },
  ] }],
};
