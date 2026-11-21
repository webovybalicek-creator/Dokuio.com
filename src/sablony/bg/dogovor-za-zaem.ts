/**
 * Договор за заем на пари между физически лица – България (ЗЗД, чл. 240). Лихва се дължи само ако е уговорена писмено
 * (чл. 240, ал. 2). Общата давност е 5 години (чл. 110), за лихви и периодични плащания – 3 години (чл. 111).
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, ZOPB, SAVET_SAMOLICHNOST, PODNOZHIE } from './izvori';

export const dogovorZaem: Sablona = {
  kod: 'BG-ZAEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Договор за заем', podnadpis: 'паричен заем между физически лица по чл. 240 от Закона за задълженията и договорите',
  souborPdf: 'dogovor-za-zaem', paticka: PODNOZHIE('BG-ZAEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'заемодател', vpravo: 'заемател' },
  slovo: { n: 'договор', g: 'договора', a: 'договора', l: 'договора' },
  coDal: ['Разпечатайте договора в два екземпляра и подпишете и двата.', 'Преведете парите по сметка с основание „заем по договор от …“.', 'Запишете датите на вноските в календара.'],
  kontrola: [
    'Най-добре превеждайте заема по банков път – извлечението доказва, че парите са предадени. Плащания от 5 000 евро нагоре се извършват само по банков път.',
    'Лихва се дължи само ако е уговорена писмено (чл. 240, ал. 2 ЗЗД) – затова я впишете в договора.',
    'Уговорете какво става при закъснение на вноските (напр. предсрочна изискуемост на целия остатък).',
    'Общата давност е 5 години (чл. 110 ЗЗД), а за лихвите – 3 години (чл. 111). Признаването на дълга прекъсва давността.',
    SAVET_SAMOLICHNOST,
  ],
  zdroje: [ZZD, ZOPB],
  kroky: [
    { id: 'strani', nazev: 'Заемодателят и заемателят', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Заемодател – име, презиме и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
      { id: 'p_egn', typ: 'text', popis: 'ЕГН', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Заемател – име, презиме и фамилия', placeholder: 'напр. Мария Георгиева Димитрова', sirka: 34 },
      { id: 'k_egn', typ: 'text', popis: 'ЕГН', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
    ] },
    { id: 'zaem', nazev: 'Заемът и връщането', pole: [
      { id: 'castka', typ: 'castka', popis: 'Сума на заема (евро)', sirka: 12, polovina: true },
      { id: 'predavane', typ: 'volba', popis: 'Предаване на парите', moznosti: [ { hodnota: 'smetka', popis: 'по сметка на заемателя' }, { hodnota: 'broi', popis: 'в брой, при подписването' } ] },
      { id: 'k_iban', typ: 'text', popis: 'IBAN на заемателя', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30, zobrazitKdyz: { pole: 'predavane', je: 'smetka' } },
      { id: 'vrashtane', typ: 'volba', popis: 'Връщане', moznosti: [ { hodnota: 'navednazh', popis: 'наведнъж, до определена дата' }, { hodnota: 'vnoski', popis: 'на месечни вноски' } ] },
      { id: 'srok', typ: 'datum', popis: 'Връщане най-късно до', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vrashtane', je: 'navednazh' } },
      { id: 'vnoska', typ: 'castka', popis: 'Месечна вноска (евро)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vrashtane', je: 'vnoski' } },
      { id: 'parva', typ: 'datum', popis: 'Първа вноска', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vrashtane', je: 'vnoski' } },
      { id: 'lihva', typ: 'volba', popis: 'Лихва', moznosti: [ { hodnota: 'bez', popis: 'без лихва' }, { hodnota: 's', popis: 'с договорна лихва' } ] },
      { id: 'lihva_procent', typ: 'text', popis: 'Годишна лихва', placeholder: 'напр. 5 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'lihva', je: 's' } },
      { id: 'p_iban', typ: 'text', popis: 'IBAN на заемодателя (за връщането)', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Заемодател:** {{p_jmeno}}, ЕГН {{p_egn}}, с адрес {{p_adresa}}', '**Заемател:** {{k_jmeno}}, ЕГН {{k_egn}}, с адрес {{k_adresa}}'] },
    { nadpis: 'Предмет на договора', odstavce: ['Заемодателят предава в собственост на заемателя сумата от **{{castka}}** (словом: {{castka_slovom}}), а заемателят се задължава да върне същата сума.', { volba: 'predavane', uvodVzor: 'Предаване (отбележете един вариант):', moznosti: { smetka: 'Заемодателят ще преведе сумата по сметка на заемателя IBAN {{k_iban}}.', broi: 'Заемателят получи сумата в брой при подписването на настоящия договор, което удостоверява с подписа си.' } }] },
    { nadpis: 'Връщане', odstavce: [{ volba: 'vrashtane', uvodVzor: 'Начин на връщане (отбележете един вариант):', moznosti: { 'navednazh': 'Заемателят ще върне цялата сума най-късно до {{srok}}.', vnoski: 'Заемателят ще връща сумата на месечни вноски от {{vnoska}}, първата на {{parva}}, а всяка следваща на същата дата от месеца до пълното погасяване.' } }, 'Плащанията се извършват по сметка на заемодателя IBAN {{p_iban}}. Заемателят може да върне сумата и предсрочно.', 'Ако заемателят забави плащането на две вноски, заемодателят може с писмено уведомление да обяви целия остатък за предсрочно изискуем.'] },
    { nadpis: 'Лихва', odstavce: [{ volba: 'lihva', uvodVzor: 'Лихва (отбележете един вариант):', moznosti: { bez: 'Заемът е безлихвен.', s: 'Заемателят дължи договорна лихва от {{lihva_procent}} годишно върху непогасения остатък.' } }, 'При забава заемателят дължи законната лихва за забава.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['За неуредените въпроси се прилагат разпоредбите на Закона за задълженията и договорите.', 'Договорът се състави в два еднообразни екземпляра – по един за всяка от страните.'] },
  ],
};
