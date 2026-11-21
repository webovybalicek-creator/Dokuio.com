/** Предизвестие за прекратяване на договор за услуги – България (оператор, застраховка, фитнес, абонамент). Срокове според договора; ЗЗД. */
import type { Sablona } from '../typy';
import { ZZD, PODNOZHIE } from './izvori';

export const predizvestieDogovor: Sablona = {
  kod: 'BG-PREDIZVESTIE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'bg', jazyk: 'bg',
  nazev: 'Предизвестие за прекратяване на договор', podnadpis: 'прекратяване на договор за услуга или абонамент',
  souborPdf: 'predizvestie-prekratyavane-dogovor', paticka: PODNOZHIE('BG-PREDIZVESTIE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'клиент', vpravo: 'получил (доставчик, по желание)' },
  cislovatClanky: false,
  slovo: { n: 'предизвестие', g: 'предизвестието', a: 'предизвестието', l: 'предизвестието' },
  coDal: ['Изпратете предизвестието с препоръчано писмо с обратна разписка или на имейла, посочен в общите условия.', 'Поискайте писмено потвърждение за прекратяването и датата му.'],
  kontrola: [
    'Проверете в договора или в общите условия срока на предизвестие и начина на прекратяване (писмено, имейл, клиентски профил).',
    'При договори с минимален срок (напр. оператор за 24 месеца) предсрочното прекратяване може да доведе до неустойка – сумата е в договора.',
    'Впишете номера на договора или клиентския номер.',
    'Ако доставчикът е променил условията във ваша вреда, обикновено можете да прекратите договора без неустойка – позовете се на това.',
  ],
  zdroje: [ZZD],
  kroky: [{ id: 'danni', nazev: 'Прекратяването', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Клиент – име и фамилия', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Адрес', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Доставчик на услугата', placeholder: 'напр. оператор, застраховател, фитнес', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Адрес на доставчика', sirka: 46 },
    { id: 'usluga', typ: 'text', popis: 'Услугата', placeholder: 'напр. мобилен абонамент, интернет, карта за фитнес', sirka: 40 },
    { id: 'nomer', typ: 'text', popis: '№ на договор / клиентски номер', sirka: 24, polovina: true },
    { id: 'koga', typ: 'volba', popis: 'Прекратявам договора', moznosti: [ { hodnota: 'predizvestie', popis: 'с предизвестието по договора (най-ранната възможна дата)' }, { hodnota: 'data', popis: 'към определена дата' } ] },
    { id: 'data_prekratyavane', typ: 'datum', popis: 'Дата на прекратяване', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'koga', je: 'data' } },
    { id: 'misto', typ: 'text', popis: 'Място', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Дата', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Предизвестие', odstavce: [
    '**Клиент:** {{p_jmeno}}, {{p_adresa}}',
    '**Доставчик:** {{k_jmeno}}, {{k_adresa}}',
    { volba: 'koga', uvodVzor: 'Прекратяване (отбележете един вариант):', moznosti: { predizvestie: 'С настоящото прекратявам договора за услугата {{usluga}}, № {{nomer}}, при спазване на срока на предизвестие по договора, съответно към най-ранната възможна дата.', data: 'С настоящото прекратявам договора за услугата {{usluga}}, № {{nomer}}, считано от {{data_prekratyavane}}.' } },
    'Моля, потвърдете ми писмено получаването на предизвестието и датата на прекратяване на договора и не начислявайте услуги след тази дата.',
  ] }],
};
