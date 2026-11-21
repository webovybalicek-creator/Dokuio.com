/** Споразумение за разсрочено плащане на дълг – България (ЗЗД). Признаване на дълга и погасителен план; признаването прекъсва давността (чл. 116). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, SAVET_SAMOLICHNOST, PODNOZHIE } from './izvori';

export const sporazumenieRazsrochvane: Sablona = {
  kod: 'BG-RAZSROCHVANE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Споразумение за разсрочено плащане на дълг', podnadpis: 'признаване на дълга и погасителен план на вноски',
  souborPdf: 'sporazumenie-razsrochvane-dalg', paticka: PODNOZHIE('BG-RAZSROCHVANE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'кредитор', vpravo: 'длъжник' },
  slovo: { n: 'споразумение', g: 'споразумението', a: 'споразумението', l: 'споразумението' },
  coDal: ['Разпечатайте споразумението в два екземпляра и подпишете и двата.', 'Запишете датите на вноските в календара.', 'Пазете доказателствата за плащанията.'],
  kontrola: [
    'Със споразумението длъжникът признава дълга – признаването прекъсва давността и тя започва да тече отново (чл. 116 ЗЗД).',
    'Уговорете какво става при забава на вноска (напр. предсрочна изискуемост на целия остатък).',
    'Плащайте по банков път – извлеченията доказват всяка вноска.',
    SAVET_SAMOLICHNOST,
  ],
  zdroje: [ZZD],
  kroky: [
    { id: 'strani', nazev: 'Кредиторът и длъжникът', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Кредитор – име или наименование', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес на кредитора', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Длъжник – име и фамилия', sirka: 34 },
      { id: 'k_egn', typ: 'text', popis: 'ЕГН на длъжника', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Адрес на длъжника', sirka: 46 },
    ] },
    { id: 'dalg', nazev: 'Дългът и вноските', pole: [
      { id: 'castka', typ: 'castka', popis: 'Общ дълг (евро)', sirka: 12, polovina: true },
      { id: 'osnovanie', typ: 'text', popis: 'Основание на дълга', placeholder: 'напр. неплатена цена на автомобил по договор от 01.06.2026 г.', sirka: 56 },
      { id: 'vnoska', typ: 'castka', popis: 'Месечна вноска (евро)', sirka: 12, polovina: true },
      { id: 'broy', typ: 'cislo', popis: 'Брой вноски', sirka: 6, polovina: true },
      { id: 'den', typ: 'cislo', popis: 'Вноската е дължима до … число', placeholder: 'напр. 15', sirka: 6, polovina: true },
      { id: 'parva', typ: 'datum', popis: 'Първа вноска', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN на кредитора', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka), vnoska_slovom: (d) => sumaSlovom(d.vnoska) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Кредитор:** {{p_jmeno}}, с адрес {{p_adresa}}', '**Длъжник:** {{k_jmeno}}, ЕГН {{k_egn}}, с адрес {{k_adresa}}'] },
    { nadpis: 'Признаване на дълга', odstavce: ['Длъжникът признава, че към датата на подписване на настоящото споразумение дължи на кредитора **{{castka}}** (словом: {{castka_slovom}}) на основание: {{osnovanie}}.'] },
    { nadpis: 'Разсрочено плащане', odstavce: ['Кредиторът е съгласен длъжникът да изплати дълга на {{broy}} месечни вноски от **{{vnoska}}** (словом: {{vnoska_slovom}}), като последната вноска е равна на остатъка от дълга.', 'Първата вноска е дължима на {{parva}}, а всяка следваща – до {{den}}-о число на месеца. Вноските се плащат по сметка на кредитора IBAN {{iban}}.', 'Длъжникът може да изплати дълга или част от него и предсрочно.'] },
    { nadpis: 'Забава', odstavce: ['Ако длъжникът забави плащането на две вноски, кредиторът може с писмено уведомление да поиска незабавно плащане на целия остатък от дълга заедно със законната лихва за забава.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['За неуредените въпроси се прилагат разпоредбите на Закона за задълженията и договорите. Споразумението се състави в два еднообразни екземпляра.'] },
  ],
};
