/**
 * Překlady vlastních textů švýcarských landingů (src/obsah/ch/_eigen.ts) do angličtiny a ukrajinštiny.
 * Soubor leží mimo ./<země>/<jazyk>/, takže ho glob překladů nenačte jako dokument.
 */
import type { PrekladDokumentu } from '../typy';

type L = Partial<PrekladDokumentu['landing']>;
const P = (nazev: string, popis: string) => ({ nazev, popis });

export const EIGEN: Record<'en' | 'uk', Record<string, L>> = {
  en: {
    erklaerung: {
      perex: 'A written confirmation of facts for an administration, school, bank or employer – for example who lives in the flat or that you have not received a benefit.',
      obsahPopis: 'A short declaration with your details, the recipient and the content.',
      kroky: [P('Write the content', 'Only facts you know yourself.'), P('Name the recipient', 'Which office the declaration is for.'), P('Sign it', 'By hand or with a qualified electronic signature.')],
      online: ['Template for free text', 'Signature on screen', 'PDF and Word'],
      hodiSe: ['an office asks you for a simple written confirmation'],
      nehodiSe: ['the authority has its own form', 'an officially certified signature is required'],
      po: [P('Keep a copy', 'For any queries.')],
      faq: [
        { q: 'Is there a statutory declaration in Switzerland?', a: 'Not as a general instrument as in Germany. This template is a simple written confirmation; if an office needs more, it will say so.' },
        { q: 'Who certifies a signature?', a: 'Depending on the canton, a notary or the municipal administration. Only the authenticity of the signature is certified, not the content.' },
        { q: 'Is an electronic signature valid?', a: 'A qualified electronic signature is equivalent to a handwritten one (Art. 14(2bis) CO). A scanned signature is not.' },
      ],
    },
    'aufhebungsvereinbarung-mietvertrag': {
      obsahPopis: 'Agreement with end date, return of the flat, rent deposit and service charges.',
      kroky: [P('Agree on the date', 'End of the tenancy and return of the flat.'), P('Settle the deposit', 'Record the release of the rent deposit.'), P('Everyone signs', 'All tenants and landlords.')],
      online: ['Reminders of the end date and handover (.ics)', 'The handover report takes over the details', 'PDF and Word'],
      hodiSe: ['you want to move out outside the notice dates', 'the landlord agrees'],
      nehodiSe: ['the landlord does not agree – then ordinary notice or a replacement tenant remains (Art. 264 CO)'],
      po: [P('Return the flat', 'With a handover report and meter readings.'), P('Re-register', 'Deregister with the municipality and register at your new place.')],
      faq: [
        { q: 'Do I have to find a replacement tenant without an agreement?', a: 'If you move out outside the notice dates, you are only released if you propose a reasonable, solvent replacement tenant who takes over the lease (Art. 264 CO). With a termination agreement this is not necessary.' },
        { q: 'How do I get the rent deposit back?', a: 'The bank releases it with the consent of both parties. If the landlord makes no claim within one year of the end of the tenancy, the tenant can request it alone (Art. 257e CO).' },
        { q: 'Is a particular form required?', a: 'No (Art. 115 CO), but in writing the agreement can be proved. All tenants and landlords should sign.' },
      ],
    },
    untermietvertrag: {
      perex: 'When you, as a tenant, sublet a room or the whole flat – for example during a stay abroad. With the landlord’s consent, rent in CHF and deposit under Art. 262 CO.',
      obsahPopis: 'Five sections: parties, premises, duration, rent and deposit, final provisions.',
      kroky: [P('Obtain consent', 'Disclose the terms to the landlord.'), P('Room or flat', 'Define the premises and shared use.'), P('Sign it', 'Two copies.')],
      online: ['Rent in words in CHF (in German)', 'Fixed term up to the end of the main lease', 'PDF and Word'],
      hodiSe: ['you sublet a room in your rented flat', 'you pass on the flat for a limited time during a stay abroad'],
      nehodiSe: ['you are the owner – use the residential lease agreement', 'you rent out by the day to tourists – cantonal rules often apply'],
      po: [P('Attach the consent', 'Add a copy of the written consent to the agreement.'), P('Registration', 'The subtenant registers with the municipality.')],
      faq: [
        { q: 'Can the landlord prohibit subletting?', a: 'They may only refuse consent if you do not disclose the terms, the terms are abusive or subletting causes them substantial disadvantages (Art. 262 CO).' },
        { q: 'How much may I charge the subtenant?', a: 'Not significantly more than you pay yourself – a surcharge for furniture is allowed. A clearly higher rent counts as an abusive term.' },
        { q: 'Who is liable to the landlord?', a: 'You are. The main tenant is liable for the subtenant not using the premises differently from what the tenant is allowed (Art. 262(3) CO).' },
      ],
    },
    'kaufvertrag-motorrad': {
      obsahPopis: 'Sale agreement for a two-wheeler or quad with accessories and frame number.',
      kroky: [P('Check the frame number', 'Compare it with the vehicle registration document.'), P('List accessories', 'Cases, exhaust, helmet, second key.'), P('Remove the plates', 'The number plates stay with the seller.')],
      online: ['Fields for accessories and modifications', 'Amount in words in CHF (in German)', 'PDF and Word'],
      po: [P('Return or reuse the plates', 'Deposit them at the road traffic office or transfer them to another vehicle.'), P('Registration', 'The buyer registers the motorcycle with their own insurance.')],
    },
  },
  uk: {
    erklaerung: {
      perex: 'Письмове підтвердження фактів для адміністрації, школи, банку чи роботодавця – наприклад, хто живе в квартирі або що ви не отримували виплату.',
      obsahPopis: 'Коротка заява з вашими даними, адресатом і змістом.',
      kroky: [P('Сформулюйте зміст', 'Лише факти, які знаєте самі.'), P('Назвіть адресата', 'Для якої установи заява.'), P('Підпишіть', 'Власноруч або кваліфікованим електронним підписом.')],
      online: ['Зразок для вільного тексту', 'Підпис на екрані', 'PDF і Word'],
      hodiSe: ['установа просить від вас просте письмове підтвердження'],
      nehodiSe: ['орган має власну форму', 'потрібен офіційно засвідчений підпис'],
      po: [P('Збережіть копію', 'На випадок запитань.')],
      faq: [
        { q: 'Чи є у Швейцарії заява під присягою?', a: 'Не як загальний інструмент, як у Німеччині. Цей зразок – просте письмове підтвердження; якщо установі потрібно більше, вона про це скаже.' },
        { q: 'Хто засвідчує підпис?', a: 'Залежно від кантону – нотаріус або адміністрація громади. Засвідчується лише справжність підпису, а не зміст.' },
        { q: 'Чи дійсний електронний підпис?', a: 'Кваліфікований електронний підпис прирівнюється до власноручного (ст. 14 абз. 2bis OR). Відсканований підпис – ні.' },
      ],
    },
    'aufhebungsvereinbarung-mietvertrag': {
      obsahPopis: 'Угода з датою закінчення, поверненням квартири, орендною заставою й комунальними платежами.',
      kroky: [P('Домовтеся про дату', 'Кінець оренди й повернення квартири.'), P('Врегулюйте заставу', 'Запишіть звільнення орендної застави.'), P('Усі підписують', 'Усі орендарі й орендодавці.')],
      online: ['Нагадування про дату закінчення й передання (.ics)', 'Акт передання переймає дані', 'PDF і Word'],
      hodiSe: ['ви хочете виїхати поза строками розірвання', 'орендодавець згоден'],
      nehodiSe: ['орендодавець не згоден – тоді лишається звичайне розірвання чи новий орендар (ст. 264 OR)'],
      po: [P('Повернення квартири', 'З актом приймання й показниками лічильників.'), P('Перереєстрація', 'Зніміться з обліку в громаді й зареєструйтеся на новому місці.')],
      faq: [
        { q: 'Чи мушу я без угоди шукати нового орендаря?', a: 'Хто виїжджає поза строками, звільняється лише тоді, коли запропонує прийнятного й платоспроможного орендаря, який перейме договір (ст. 264 OR). З угодою про розірвання це не потрібно.' },
        { q: 'Як повернути орендну заставу?', a: 'Банк звільняє її за згодою обох сторін. Якщо орендодавець протягом року після закінчення оренди не заявить вимог, орендар може вимагати її сам (ст. 257e OR).' },
        { q: 'Чи потрібна особлива форма?', a: 'Ні (ст. 115 OR), але письмово угоду можна довести. Підписати мають усі орендарі й орендодавці.' },
      ],
    },
    untermietvertrag: {
      perex: 'Коли ви як орендар здаєте в суборенду кімнату чи всю квартиру – наприклад, на час перебування за кордоном. Зі згодою орендодавця, платою в CHF і заставою за ст. 262 OR.',
      obsahPopis: 'П’ять розділів: сторони, приміщення, строк, плата й застава, прикінцеві положення.',
      kroky: [P('Отримайте згоду', 'Повідомте орендодавцю умови.'), P('Кімната чи квартира', 'Визначте приміщення й спільне користування.'), P('Підпишіть', 'Два примірники.')],
      online: ['Плата словами в CHF (німецькою)', 'Строк до закінчення основної оренди', 'PDF і Word'],
      hodiSe: ['ви здаєте кімнату у своїй орендованій квартирі', 'ви передаєте квартиру на час перебування за кордоном'],
      nehodiSe: ['ви власник – використайте договір оренди житла', 'ви здаєте подобово туристам – часто діють кантональні правила'],
      po: [P('Додайте згоду', 'Копію письмової згоди – до договору.'), P('Реєстрація', 'Суборендар реєструється в громаді.')],
      faq: [
        { q: 'Чи може орендодавець заборонити суборенду?', a: 'Він може відмовити в згоді лише тоді, коли ви не повідомили умов, умови є зловживанням або суборенда завдає йому суттєвих незручностей (ст. 262 OR).' },
        { q: 'Скільки можна брати із суборендаря?', a: 'Не суттєво більше, ніж платите самі, – надбавка за меблі допустима. Помітно вища плата вважається умовою-зловживанням.' },
        { q: 'Хто відповідає перед орендодавцем?', a: 'Ви. Основний орендар відповідає за те, щоб суборендар не користувався приміщенням інакше, ніж дозволено самому орендарю (ст. 262 абз. 3 OR).' },
      ],
    },
    'kaufvertrag-motorrad': {
      obsahPopis: 'Договір купівлі-продажу двоколісного транспорту чи квадроцикла з приладдям і номером рами.',
      kroky: [P('Перевірте номер рами', 'Порівняйте з посвідченням транспортного засобу.'), P('Перелічіть приладдя', 'Кофри, вихлоп, шолом, другий ключ.'), P('Зніміть номери', 'Номерні знаки лишаються в продавця.')],
      online: ['Поля для приладдя й переобладнання', 'Сума словами в CHF (німецькою)', 'PDF і Word'],
      po: [P('Повернути чи використати номери', 'Здайте в управління дорожнього руху або перенесіть на інше авто.'), P('Реєстрація', 'Покупець реєструє мотоцикл зі своїм страхуванням.')],
    },
  },
};
