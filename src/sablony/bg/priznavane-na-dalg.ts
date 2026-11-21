/** Признание на дълг – България (ЗЗД). Признаването на вземането от длъжника прекъсва давността (чл. 116, б. „а“); общата давност е 5 години (чл. 110). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, PODNOZHIE } from './izvori';

export const priznavaneDalg: Sablona = {
  kod: 'BG-PRIZNAVANE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Признание на дълг', podnadpis: 'писмено изявление на длъжника за съществуването и размера на дълга',
  souborPdf: 'priznavane-na-dalg', paticka: PODNOZHIE('BG-PRIZNAVANE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'длъжник', vpravo: 'получил (кредитор, по желание)' },
  cislovatClanky: false,
  slovo: { n: 'признание', g: 'признанието', a: 'признанието', l: 'признанието' },
  coDal: ['Оригиналът се пази от кредитора.', 'При неплащане кредиторът може да поиска заповед за изпълнение от районния съд.'],
  kontrola: [
    'Признаването на вземането от длъжника прекъсва давността и тя започва да тече отново (чл. 116, б. „а“ ЗЗД). Общата давност е 5 години (чл. 110).',
    'Впишете основанието на дълга (заем, неплатена цена, обезщетение), сумата и срока за плащане.',
    'Обикновената покана от кредитора не прекъсва давността – прекъсват я признаването от длъжника, искът пред съда и действията по принудително изпълнение.',
  ],
  zdroje: [ZZD],
  kroky: [{ id: 'danni', nazev: 'Длъжникът, кредиторът и дългът', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Длъжник – име, презиме и фамилия', placeholder: 'напр. Георги Стоянов Николов', sirka: 34, autocomplete: 'name' },
    { id: 'p_egn', typ: 'text', popis: 'ЕГН на длъжника', sirka: 12, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес на длъжника', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Кредитор – име или наименование', placeholder: 'напр. Иван Петров Иванов', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес на кредитора', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Дължима сума (евро)', sirka: 12, polovina: true },
    { id: 'osnovanie', typ: 'text', popis: 'Основание на дълга', placeholder: 'напр. заем по договор от 15.03.2026 г.', sirka: 56 },
    { id: 'srok', typ: 'datum', popis: 'Ще платя най-късно до', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN на кредитора', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka) },
  clanky: [{ nadpis: 'Признание', odstavce: [
    'Долуподписаният/ата **{{p_jmeno}}**, ЕГН {{p_egn}}, с адрес {{p_adresa}} (длъжник),',
    'признавам, че към датата на подписване дължа на кредитора {{k_jmeno}}, {{k_adresa}}, сумата от **{{castka}}** (словом: {{castka_slovom}}) на основание: {{osnovanie}}.',
    'Задължавам се да платя дълга най-късно до {{srok}} по сметка на кредитора IBAN {{iban}}. При забава дължа и законната лихва.',
  ] }],
};
