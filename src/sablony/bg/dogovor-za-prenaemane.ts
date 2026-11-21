/** Договор за пренаемане – България (ЗЗД, чл. 234: наемателят може да пренаеме части от вещта, ако не е уговорено противното; пренаемателят няма повече права от наемателя). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, ZDDFL_NAEM, SAVET_SAMOLICHNOST, PODNOZHIE } from './izvori';

export const dogovorPrenaem: Sablona = {
  kod: 'BG-PRENAEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Договор за пренаемане', podnadpis: 'пренаемане на стая или на цялото жилище от наемателя',
  souborPdf: 'dogovor-za-prenaemane', paticka: PODNOZHIE('BG-PRENAEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'наемател (пренаемодател)', vpravo: 'пренаемател' },
  slovo: { n: 'договор', g: 'договора', a: 'договора', l: 'договора' },
  coDal: ['При цялото жилище приложете писменото съгласие на наемодателя.', 'При нанасянето подпишете приемо-предавателен протокол.'],
  kontrola: [
    'Наемателят може да пренаеме части от жилището (стая) без съгласието на наемодателя, ако в договора за наем не е уговорено противното (чл. 234 ЗЗД). Проверете договора си.',
    'За пренаемане на цялото жилище поискайте писменото съгласие на наемодателя.',
    'Наемателят остава отговорен пред наемодателя, а пренаемателят не може да има повече права от наемателя. Пренаемането не може да продължи след края на основния наем.',
    'Доходите от пренаемане се облагат като доходи от наем.',
    SAVET_SAMOLICHNOST,
  ],
  zdroje: [ZZD, ZDDFL_NAEM],
  kroky: [
    { id: 'strani', nazev: 'Страните', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Наемател (пренаема) – име и фамилия', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Пренаемател – име и фамилия', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Сегашен адрес на пренаемателя', sirka: 46 },
      { id: 'naemodatel', typ: 'text', popis: 'Наемодател (собственик)', sirka: 34 },
    ] },
    { id: 'predmet', nazev: 'Жилището, срокът и плащането', pole: [
      { id: 'zhilishte', typ: 'text', popis: 'Адрес на жилището', sirka: 46 },
      { id: 'chast', typ: 'volba', popis: 'Пренаема се', moznosti: [ { hodnota: 'staya', popis: 'стая, с ползване на кухнята и банята' }, { hodnota: 'tsyalo', popis: 'цялото жилище (със съгласие на наемодателя)' } ] },
      { id: 'staya', typ: 'text', popis: 'Коя стая', placeholder: 'напр. малката стая към двора, 12 м²', sirka: 46, zobrazitKdyz: { pole: 'chast', je: 'staya' } },
      { id: 'ot', typ: 'datum', popis: 'Пренаемане от', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Пренаемане до', sirka: 14, polovina: true },
      { id: 'castka', typ: 'castka', popis: 'Месечна сума с разходите (евро)', sirka: 12, polovina: true },
      { id: 'depozit', typ: 'castka', popis: 'Депозит (евро)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN за плащане', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka), depozit_slovom: (d) => sumaSlovom(d.depozit) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Наемател (пренаемодател):** {{p_jmeno}}, с адрес {{p_adresa}}', '**Пренаемател:** {{k_jmeno}}, с адрес {{k_adresa}}'] },
    { nadpis: 'Предмет на пренаемането', odstavce: [{ volba: 'chast', uvodVzor: 'Предмет (отбележете един вариант):', moznosti: { staya: 'Наемателят пренаема стаята ({{staya}}) в жилището на адрес {{zhilishte}}, с общо ползване на кухнята, банята и коридора.', tsyalo: 'Наемателят пренаема цялото жилище на адрес {{zhilishte}} с писменото съгласие на наемодателя {{naemodatel}}.' } }] },
    { nadpis: 'Срок', odstavce: ['Пренаемането се сключва за периода {{ot}} – {{do}}.', 'Пренаемането се прекратява във всеки случай с прекратяването на договора за наем между наемателя и наемодателя.'] },
    { nadpis: 'Плащане и депозит', odstavce: ['Пренаемателят плаща месечно **{{castka}}** (словом: {{castka_slovom}}), включително разходите, най-късно до 5-о число на месеца по сметка IBAN {{iban}}.', 'При подписването пренаемателят плаща депозит от {{depozit}} (словом: {{depozit_slovom}}), който се връща в срок до 30 дни от предаването, като се задържат задълженията или повредите.'] },
    { nadpis: 'Задължения на пренаемателя', odstavce: ['Пренаемателят ползва жилището с грижата на добър стопанин, спазва правилника на етажната собственост, не го пренаема на други лица и не извършва преустройства.'] },
    { nadpis: 'Прекратяване', odstavce: ['Всяка от страните може да прекрати пренаемането с писмено предизвестие от един месец. При освобождаването пренаемателят връща всички ключове.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['За неуредените въпроси се прилагат разпоредбите на Закона за задълженията и договорите. Договорът се състави в два еднообразни екземпляра.'] },
  ],
};
