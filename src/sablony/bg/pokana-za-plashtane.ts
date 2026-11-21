/** Покана за доброволно плащане – България (ЗЗД). Поставяне на длъжника в забава със срок за плащане преди съда; при забава се дължи законната лихва. */
import type { Sablona } from '../typy';
import { sumaSlovom } from './chisla';
import { ZZD, PODNOZHIE } from './izvori';

export const pokanaPlashtane: Sablona = {
  kod: 'BG-POKANA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Покана за доброволно плащане', podnadpis: 'поставяне в забава и покана преди завеждане на дело',
  souborPdf: 'pokana-za-plashtane', paticka: PODNOZHIE('BG-POKANA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'кредитор', vpravo: 'получил (длъжник, по желание)' },
  cislovatClanky: false,
  slovo: { n: 'покана', g: 'поканата', a: 'поканата', l: 'поканата' },
  coDal: ['Изпратете поканата с препоръчано писмо с обратна разписка или чрез нотариус и запазете доказателството.', 'Ако длъжникът не плати, можете да поискате от районния съд заповед за изпълнение.'],
  kontrola: [
    'Дългът трябва да е изискуем – срокът за плащане по договора или фактурата е изтекъл.',
    'При забава длъжникът дължи законната лихва (ЗЗД). Ако няма уговорен срок за плащане, длъжникът изпада в забава след поканата.',
    'Самата покана не прекъсва давността – прекъсват я признаването на дълга от длъжника, искът пред съда и действията по принудително изпълнение (чл. 116 ЗЗД).',
    'Дайте разумен срок (напр. 7 или 14 дни) и впишете точно IBAN.',
  ],
  zdroje: [ZZD],
  kroky: [{ id: 'danni', nazev: 'Кредиторът, длъжникът и дългът', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Кредитор – име или наименование', placeholder: 'напр. Иван Петров Иванов', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес на кредитора', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Длъжник – име или наименование', placeholder: 'напр. Георги Стоянов Николов', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес на длъжника', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Дължима сума (евро)', sirka: 12, polovina: true },
    { id: 'osnovanie', typ: 'text', popis: 'Основание на дълга', placeholder: 'напр. заем по договор от 15.03.2026 г.', sirka: 56 },
    { id: 'padezh', typ: 'datum', popis: 'Дългът стана изискуем на', sirka: 14, polovina: true },
    { id: 'srok', typ: 'datum', popis: 'Платете най-късно до', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN на кредитора', placeholder: 'BG80 BNBG 9661 1020 3456 78', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovom: (d) => sumaSlovom(d.castka) },
  clanky: [{ nadpis: 'Покана', odstavce: [
    '**Кредитор:** {{p_jmeno}}, {{p_adresa}}',
    '**Длъжник:** {{k_jmeno}}, {{k_adresa}}',
    'Каня ви да ми заплатите изискуемия дълг в размер на **{{castka}}** (словом: {{castka_slovom}}) на основание: {{osnovanie}}. Дългът стана изискуем на {{padezh}} и до днес не е платен.',
    'Моля, платете сумата най-късно до **{{srok}}** по сметка IBAN {{iban}}.',
    'С настоящата ви поставям в забава. Обръщам внимание, че от изпадането в забава дължите и законната лихва. Ако не платите в посочения срок, ще се обърна към съда без допълнително уведомление, като разноските по делото ще бъдат за ваша сметка.',
  ] }],
};
