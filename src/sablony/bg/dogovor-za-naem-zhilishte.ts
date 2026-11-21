/**
 * Договор за наем на жилище – България (ЗЗД, чл. 228–239). Наем без определен срок се прекратява с едномесечно предизвестие
 * (чл. 238); давността за вземанията за наем е 3 години (чл. 111). Наемодателят – физическо лице декларира доходите от наем
 * в годишната данъчна декларация (чл. 31 ЗДДФЛ: облагаемият доход е наемът, намален с 10 % разходи).
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, ZDDFL_NAEM, SAVET_SAMOLICHNOST, PODNOZHIE } from './izvori';

export const dogovorNaem: Sablona = {
  kod: 'BG-NAEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Договор за наем на жилище', podnadpis: 'сключен по чл. 228 и сл. от Закона за задълженията и договорите',
  souborPdf: 'dogovor-za-naem-zhilishte', paticka: PODNOZHIE('BG-NAEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'наемодател', vpravo: 'наемател' },
  slovo: { n: 'договор', g: 'договора', a: 'договора', l: 'договора' },
  coDal: [
    'При нанасянето подпишете приемо-предавателен протокол с показанията на уредите.',
    'Наемодателят: декларирайте доходите от наем в годишната данъчна декларация пред НАП.',
  ],
  kontrola: [
    'Ако договорът е без определен срок, всяка страна може да го прекрати с едномесечно предизвестие (чл. 238 ЗЗД) – по-дълъг срок уговорете изрично.',
    'Размерът на депозита не е ограничен със закон – уговорете го в договора заедно със срока за връщане.',
    'Наемодателят – физическо лице декларира доходите от наем в годишната данъчна декларация; облагаемият доход е наемът, намален с 10 % разходи ([НАП](https://nra.bg/wps/portal/nra/zakonodatelstvo/zakonodatelstvo_priority/da0cc1aa-c4b2-4863-b1de-5f2f94d9f2d6)).',
    'Впишете лицата, които ще живеят с наемателя, и правилата за домашни любимци и пренаемане.',
    SAVET_SAMOLICHNOST,
  ],
  zdroje: [ZZD, ZDDFL_NAEM],
  kroky: [
    { id: 'strani', nazev: 'Наемодателят и наемателят', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Наемодател – име, презиме и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
      { id: 'p_egn', typ: 'text', popis: 'ЕГН на наемодателя', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес на наемодателя', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Наемател – име, презиме и фамилия', placeholder: 'напр. Мария Георгиева Димитрова', sirka: 34 },
      { id: 'k_egn', typ: 'text', popis: 'ЕГН на наемателя', sirka: 12, polovina: true },
      { id: 'litsa', typ: 'text', popis: 'Други лица, които ще живеят в жилището', placeholder: 'напр. Петър Димитров (син)', sirka: 56 },
    ] },
    { id: 'zhilishte', nazev: 'Жилището и срокът', pole: [
      { id: 'adres_zhilishte', typ: 'text', popis: 'Адрес на жилището', placeholder: 'напр. ж.к. „Младост 1“, бл. 20, вх. А, ет. 3, ап. 5, София', sirka: 46 },
      { id: 'ploshtadi', typ: 'cislo', popis: 'Площ', jednotka: 'м²', sirka: 8, polovina: true },
      { id: 'obzavezhdane', typ: 'text', popis: 'Обзавеждане', placeholder: 'напр. обзаведена кухня, перална машина, легло', sirka: 56 },
      { id: 'srok', typ: 'volba', popis: 'Срок', moznosti: [ { hodnota: 'opredelen', popis: 'за определен срок' }, { hodnota: 'neopredelen', popis: 'без определен срок' } ] },
      { id: 'ot', typ: 'datum', popis: 'Начало на наема', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Край на наема', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'srok', je: 'opredelen' } },
    ] },
    { id: 'plashtaniya', nazev: 'Наемът, разходите и депозитът', pole: [
      { id: 'naem', typ: 'castka', popis: 'Месечен наем (евро)', sirka: 12, polovina: true },
      { id: 'den', typ: 'cislo', popis: 'Плащане до … число на месеца', placeholder: 'напр. 5', sirka: 4, polovina: true },
      { id: 'razhodi', typ: 'text', popis: 'Разходи, които плаща наемателят', placeholder: 'напр. ток, вода, парно, вход, интернет', sirka: 56 },
      { id: 'depozit', typ: 'castka', popis: 'Депозит (евро)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN на наемодателя', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30 },
      { id: 'predizvestie', typ: 'cislo', popis: 'Срок на предизвестие', placeholder: 'напр. 1', jednotka: 'месец(а)', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { naem_slovom: (d) => sumaSlovom(d.naem), depozit_slovom: (d) => sumaSlovom(d.depozit) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Наемодател:** {{p_jmeno}}, ЕГН {{p_egn}}, с адрес {{p_adresa}}', '**Наемател:** {{k_jmeno}}, ЕГН {{k_egn}}', 'Заедно с наемателя в жилището ще живеят: {{litsa}}.'] },
    { nadpis: 'Предмет на договора', odstavce: ['Наемодателят предоставя на наемателя за временно ползване жилище, находящо се на адрес {{adres_zhilishte}}, с площ {{ploshtadi}} м², със следното обзавеждане: {{obzavezhdane}}.', 'Състоянието на жилището и показанията на уредите при предаването се описват в приемо-предавателен протокол, който е неразделна част от договора.'] },
    { nadpis: 'Срок', odstavce: [{ volba: 'srok', uvodVzor: 'Срок (отбележете един вариант):', moznosti: { opredelen: 'Договорът се сключва за определен срок – от {{ot}} до {{do}}.', neopredelen: 'Договорът се сключва без определен срок, считано от {{ot}}.' } }] },
    { nadpis: 'Наем и разходи', odstavce: ['Месечният наем е **{{naem}}** (словом: {{naem_slovom}}) и се плаща до {{den}}-о число на всеки месец по сметка IBAN {{iban}}.', 'Освен наема наемателят плаща: {{razhodi}}.'] },
    { nadpis: 'Депозит', odstavce: ['При подписването наемателят плаща депозит от {{depozit}} (словом: {{depozit_slovom}}).', 'Наемодателят връща депозита в срок до 30 дни от освобождаването и предаването на жилището, като задържа само дължимите суми и стойността на повредите, описани в приемо-предавателния протокол.'] },
    { nadpis: 'Права и задължения', odstavce: ['Наемателят ползва жилището с грижата на добър стопанин, плаща в срок наема и разходите, не извършва преустройства и не преотдава жилището без писменото съгласие на наемодателя.', 'Наемодателят предава жилището в състояние, годно за ползване, и поема поправките, които не се дължат на ползването от наемателя.'] },
    { nadpis: 'Прекратяване', odstavce: ['Всяка от страните може да прекрати договора с писмено предизвестие от {{predizvestie}} месец(а).', 'Договорът може да бъде прекратен и по взаимно съгласие или при неизпълнение на задълженията по него.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['За неуредените въпроси се прилагат разпоредбите на Закона за задълженията и договорите.', 'Договорът се състави в два еднообразни екземпляра – по един за всяка от страните.'] },
  ],
};
