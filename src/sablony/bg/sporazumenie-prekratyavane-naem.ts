/** Споразумение за прекратяване на договор за наем – България (ЗЗД). Страните уговарят датата на прекратяване без предизвестие. */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, SAVET_SAMOLICHNOST, PODNOZHIE } from './izvori';

export const sporazumenieNaem: Sablona = {
  kod: 'BG-SPORAZUMENIE-NAEM', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Споразумение за прекратяване на договор за наем', podnadpis: 'прекратяване на наема по взаимно съгласие, без предизвестие',
  souborPdf: 'sporazumenie-prekratyavane-naem', paticka: PODNOZHIE('BG-SPORAZUMENIE-NAEM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'наемодател', vpravo: 'наемател' },
  slovo: { n: 'споразумение', g: 'споразумението', a: 'споразумението', l: 'споразумението' },
  coDal: ['В деня на предаването подпишете приемо-предавателен протокол с показанията на уредите.', 'Наемодателят: прехвърлете партидите за ток, вода и парно, ако са били на името на наемателя.'],
  kontrola: [
    'По взаимно съгласие страните могат да уговорят всяка дата на прекратяване – предизвестието не се прилага.',
    'Впишете точния ден на освобождаване и предаване на ключовете.',
    'Уговорете колко от депозита се връща и до кога; евентуалните удръжки впишете конкретно.',
    'Вземанията за наем се погасяват с 3-годишна давност (чл. 111 ЗЗД) – разчистете сметките при предаването.',
    SAVET_SAMOLICHNOST,
  ],
  zdroje: [ZZD],
  kroky: [
    { id: 'strani', nazev: 'Страните и наемът', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Наемодател – име и фамилия', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Адрес на наемодателя', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Наемател – име и фамилия', sirka: 34 },
      { id: 'zhilishte', typ: 'text', popis: 'Адрес на жилището', sirka: 46 },
      { id: 'dogovor_ot', typ: 'datum', popis: 'Договор за наем от', sirka: 14, polovina: true },
    ] },
    { id: 'prekratyavane', nazev: 'Прекратяването и депозитът', pole: [
      { id: 'data_prekratyavane', typ: 'datum', popis: 'Наемът се прекратява на', sirka: 14, polovina: true },
      { id: 'depozit', typ: 'castka', popis: 'Депозит за връщане (евро)', sirka: 12, polovina: true },
      { id: 'srok_depozit', typ: 'datum', popis: 'Депозитът се връща до', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN на наемателя', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { depozit_slovom: (d) => sumaSlovom(d.depozit) },
  clanky: [
    { nadpis: 'Страни', odstavce: ['**Наемодател:** {{p_jmeno}}, с адрес {{p_adresa}}', '**Наемател:** {{k_jmeno}}'] },
    { nadpis: 'Прекратяване', odstavce: ['Страните се споразумяват договорът за наем от {{dogovor_ot}} за жилището на адрес {{zhilishte}} да бъде прекратен на **{{data_prekratyavane}}**.', 'До тази дата наемателят плаща наема и разходите съгласно договора.'] },
    { nadpis: 'Предаване на жилището', odstavce: ['Най-късно на {{data_prekratyavane}} наемателят освобождава жилището, предава го в състоянието, в което го е получил, като се отчита обичайното изхабяване, и връща всички ключове. Предаването се удостоверява с протокол с показанията на уредите.'] },
    { nadpis: 'Депозит', odstavce: ['Наемодателят връща на наемателя депозита от {{depozit}} (словом: {{depozit_slovom}}) най-късно до {{srok_depozit}} по сметка IBAN {{iban}}, като задържа само задълженията или повредите, описани в протокола.'] },
    { nadpis: 'Заключителни разпоредби', odstavce: ['След изпълнението на настоящото споразумение страните нямат други претенции по договора за наем, освен описаните в протокола.', 'Споразумението се състави в два еднообразни екземпляра.'] },
  ],
};
