/** Договор за покупко-продажба на употребявана движима вещ между физически лица – България (ЗЗД). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, ZOPB, SAVET_SAMOLICHNOST, SAVET_V_BROI, PODNOZHIE } from './izvori';

export const dogovorProdazhba: Sablona = {
  kod: 'BG-PRODAZHBA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Договор за покупко-продажба', podnadpis: 'за употребявана движима вещ',
  souborPdf: 'dogovor-pokupko-prodazhba', paticka: PODNOZHIE('BG-PRODAZHBA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'продавач', vpravo: 'купувач' },
  slovo: { n: 'договор', g: 'договора', a: 'договора', l: 'договора' },
  coDal: ['Предайте вещта едва когато парите са при вас.', 'Всяка страна запазва по един екземпляр.'],
  kontrola: [
    'Опишете вещта и известните недостатъци – за недостатъци, известни на купувача, продавачът не отговаря.',
    'При продажба чрез обява не изпращайте данните на картата си и кодове от SMS – това е най-честата измама.',
    SAVET_SAMOLICHNOST,
    SAVET_V_BROI,
  ],
  zdroje: [ZZD, ZOPB],
  kroky: [
    { id: 'strani', nazev: 'Продавачът и купувачът', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Продавач – име и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес на продавача', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Купувач – име и фамилия', placeholder: 'напр. Мария Георгиева Димитрова', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Адрес на купувача', sirka: 46 },
    ] },
    { id: 'vesht', nazev: 'Вещта и цената', pole: [
      { id: 'vesht', typ: 'textarea', popis: 'Описание на вещта', placeholder: 'напр. велосипед Scott Aspect, размер L, сериен № …', sirka: 64 },
      { id: 'nedostatatsi', typ: 'text', popis: 'Известни недостатъци', placeholder: 'напр. драскотина по рамката, иначе без недостатъци', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Цена (евро)', sirka: 12, polovina: true },
      { id: 'plashtane', typ: 'volba', popis: 'Плащане', moznosti: [ { hodnota: 'broi', popis: 'в брой, при подписването' }, { hodnota: 'smetka', popis: 'по сметка, преди предаването' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN на продавача', sirka: 30, zobrazitKdyz: { pole: 'plashtane', je: 'smetka' } },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_slovom: (d) => sumaSlovom(d.cena) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Продавач:** {{p_jmeno}}, с адрес {{p_adresa}}', '**Купувач:** {{k_jmeno}}, с адрес {{k_adresa}}'] },
    { nadpis: 'Предмет и състояние', odstavce: ['Продавачът продава на купувача, а купувачът купува следната употребявана вещ: {{vesht}}.', 'Известни недостатъци: {{nedostatatsi}}. Купувачът е огледал вещта и я купува в това състояние.'] },
    { nadpis: 'Цена и предаване', odstavce: ['Цената е **{{cena}}** (словом: {{cena_slovom}}).', { volba: 'plashtane', uvodVzor: 'Плащане (отбележете един вариант):', moznosti: { broi: 'Купувачът заплати цената в брой при подписването; продавачът удостоверява получаването с подписа си.', smetka: 'Купувачът ще преведе цената по сметка на продавача IBAN {{iban}}; продавачът предава вещта след получаване на плащането.' } }, 'Собствеността преминава върху купувача с предаването на вещта след пълното заплащане на цената.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['За неуредените въпроси се прилагат разпоредбите на Закона за задълженията и договорите. Договорът се състави в два еднообразни екземпляра.'] },
  ],
};
