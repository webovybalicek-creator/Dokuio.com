/**
 * Декларация-съгласие за пътуване на дете в чужбина – България (ЗБЛД, чл. 76, т. 9). За напускане на страната от детето е
 * необходимо писмено съгласие на родителя, който не го придружава, с нотариално заверен подпис. Текстът се подписва пред нотариус.
 */
import type { Sablona } from '../typy';
import { ZBLD_DETE, PODNOZHIE } from './izvori';

export const deklaratsiyaDete: Sablona = {
  kod: 'BG-DETE-PATUVANE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Декларация-съгласие за пътуване на дете в чужбина', podnadpis: 'съгласие на родител по чл. 76, т. 9 от Закона за българските лични документи, с нотариална заверка на подписа',
  souborPdf: 'deklaratsiya-saglasie-patuvane-dete', paticka: PODNOZHIE('BG-DETE-PATUVANE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'родител (декларатор)', vpravo: 'втори родител (ако също подписва)' },
  cislovatClanky: false,
  slovo: { n: 'декларация', g: 'декларацията', a: 'декларацията', l: 'декларацията' },
  podpisNaZarizeni: false,
  podpisPoznamka: 'Подписът на родителя се заверява от нотариус (чл. 76, т. 9 ЗБЛД). Затова тук не се подписва на екрана – разпечатайте декларацията и я подпишете пред нотариус.',
  coDal: ['Занесете текста на нотариус (или в българско консулство в чужбина) – подписът се полага и заверява там.', 'Придружителят носи декларацията и документа за самоличност на детето при преминаване на границата.', 'Проверете и изискванията на държавата, за която пътувате, и на превозвача.'],
  kontrola: [
    'Когато детето напуска България без единия или без двамата родители, е нужно писмено съгласие на родителя, който не го придружава, с нотариално заверен подпис ([чл. 76, т. 9 ЗБЛД](https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/bg_bg)).',
    'Съгласието е нужно и когато родителските права са предоставени само на другия родител.',
    'Подпис, положен само на ръка без нотариална заверка, не е достатъчен на границата.',
    'Ако детето пътува с друго пълнолетно лице (баба, треньор, учител), съгласие дават двамата родители.',
    'Впишете точно периода, държавите и данните на придружителя.',
  ],
  zdroje: [ZBLD_DETE],
  kroky: [
    { id: 'roditel', nazev: 'Родителят и детето', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Родител – име, презиме и фамилия', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
      { id: 'p_egn', typ: 'text', popis: 'ЕГН на родителя', sirka: 12, polovina: true },
      { id: 'p_lk', typ: 'text', popis: 'Лична карта №', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Постоянен адрес', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Дете – име, презиме и фамилия', placeholder: 'напр. Петър Иванов Петров', sirka: 34 },
      { id: 'd_egn', typ: 'text', popis: 'ЕГН на детето', sirka: 12, polovina: true },
      { id: 'd_dokument', typ: 'text', popis: 'Паспорт / лична карта на детето №', sirka: 14, polovina: true },
    ] },
    { id: 'patuvane', nazev: 'Пътуването', pole: [
      { id: 'pridruzhitel', typ: 'volba', popis: 'Детето пътува', moznosti: [ { hodnota: 'roditel', popis: 'с другия родител' }, { hodnota: 'litse', popis: 'с друго пълнолетно лице' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Придружител – име, презиме и фамилия', sirka: 34 },
      { id: 's_dokument', typ: 'text', popis: 'Документ за самоличност на придружителя №', sirka: 20 },
      { id: 'darzhavi', typ: 'text', popis: 'Държава/и', placeholder: 'напр. Гърция', sirka: 40 },
      { id: 'tsel', typ: 'text', popis: 'Цел на пътуването', placeholder: 'напр. почивка', sirka: 34 },
      { id: 'ot', typ: 'datum', popis: 'От', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'До', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Декларация-съгласие', odstavce: [
    'Долуподписаният/ата **{{p_jmeno}}**, ЕГН {{p_egn}}, л. к. № {{p_lk}}, с постоянен адрес {{p_adresa}}, в качеството си на родител на детето',
    '**{{d_jmeno}}**, ЕГН {{d_egn}}, документ за самоличност № {{d_dokument}},',
    { volba: 'pridruzhitel', uvodVzor: 'Придружител (отбележете един вариант):', moznosti: { roditel: 'декларирам, че съм съгласен/съгласна детето да пътува в чужбина, придружавано от другия родител {{s_jmeno}}, документ № {{s_dokument}},', litse: 'декларирам, че съм съгласен/съгласна детето да пътува в чужбина, придружавано от {{s_jmeno}}, документ № {{s_dokument}}, на когото поверявам грижата за детето по време на пътуването,' } },
    'за периода {{ot}} – {{do}}, до {{darzhavi}}, с цел {{tsel}}.',
    'Декларацията се подписва пред нотариус съгласно чл. 76, т. 9 от Закона за българските лични документи.',
  ] }],
};
