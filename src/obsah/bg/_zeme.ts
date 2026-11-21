import type { Zeme } from '../typy';

/**
 * България. Образците са проверени на 21. 11. 2026 по ЗЗД, ЗДвП, ЗОПБ, ЗМДТ, ЗЗП, закона за продажба на стоки, КТ и ЗБЛД
 * (вж. src/sablony/bg/izvori.ts). Валута: евро от 1. 1. 2026 г.
 */
export const zeme: Zeme = {
  kod: 'bg',
  nazev: 'България',
  nazevEn: 'Bulgaria',
  jazyk: 'bg',
  hreflang: 'bg-BG',
  casovaZona: 'Europe/Sofia',
  aktivni: true,
  poradi: 11,
  kategorie: { auto: 'Автомобили', pari: 'Пари и дарения', zhilishte: 'Жилище и наем', pokupki: 'Покупки и документи', uslugi: 'Майстори и услуги', rabota: 'Работа', semeystvo: 'Семейство и пътуване' },
  skupiny: {
    auto: [
      { slug: 'dogovor-pokupko-prodazhba-avtomobil', popis: 'Продажба на употребявана кола между физически лица.' },
      { slug: 'priemo-predavatelen-protokol-avtomobil', popis: 'Пробег, повреди, ключове и час на предаване.' },
      { slug: 'palnomoshtno', popis: 'Когато някой друг подава документите.' },
      { slug: 'razpiska-poluchavane-pari', popis: 'Доказателство за плащане в брой.' },
      { slug: 'dogovor-pokupko-prodazhba-motor', popis: 'Мотоциклет, скутер или ATV.' },
    ],
    pari: [
      { slug: 'dogovor-za-zaem', popis: 'Заем на приятел или роднина, и на вноски.' },
      { slug: 'razpiska-poluchavane-pari', popis: 'Разписка за получени пари.' },
      { slug: 'priznavane-na-dalg', popis: 'Длъжникът признава писмено дълга и срока.' },
      { slug: 'dogovor-za-darenie', popis: 'Дарение на пари или вещ с предаване.' },
      { slug: 'pokana-za-plashtane', popis: 'Покана към длъжника със срок за плащане.' },
      { slug: 'sporazumenie-razsrochvane-dalg', popis: 'Дългът на месечни вноски.' },
    ],
    zhilishte: [
      { slug: 'dogovor-za-naem-zhilishte', popis: 'Отдаване на жилище под наем с депозит.' },
      { slug: 'priemo-predavatelen-protokol-zhilishte', popis: 'Уреди, ключове и състояние на жилището.' },
      { slug: 'predizvestie-prekratyavane-naem', popis: 'Наемателят прекратява наема с предизвестие.' },
      { slug: 'sporazumenie-prekratyavane-naem', popis: 'Край на наема по взаимно съгласие.' },
      { slug: 'dogovor-za-prenaemane', popis: 'Стая или цялото жилище от наемателя.' },
    ],
    pokupki: [
      { slug: 'dogovor-pokupko-prodazhba', popis: 'Продажба на употребявана вещ чрез обява.' },
      { slug: 'formulyar-otkaz-ot-dogovor', popis: 'Връщане на покупка от интернет в 14 дни.' },
      { slug: 'reklamatsiya', popis: 'Стока с дефект, законова гаранция 2 години.' },
      { slug: 'palnomoshtno', popis: 'Когато някой друг свършва нещо вместо вас.' },
      { slug: 'predizvestie-prekratyavane-dogovor', popis: 'Оператор, застраховка, фитнес, абонамент.' },
      { slug: 'dogovor-za-zaem-za-polzvane', popis: 'Безплатно даване на вещ за ползване.' },
      { slug: 'deklaratsiya', popis: 'Писмена декларация пред институция или банка.' },
    ],
    uslugi: [
      { slug: 'dogovor-za-izrabotka', popis: 'Майстор, ремонт, обновяване.' },
      { slug: 'pokana-za-plashtane', popis: 'Когато възложителят не плаща.' },
    ],
    rabota: [{ slug: 'predizvestie-napuskane-rabota', popis: 'Напускане на работа с предизвестие.' }],
    semeystvo: [{ slug: 'deklaratsiya-saglasie-patuvane-dete', popis: 'Детето пътува без единия или двамата родители.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'prodazhba-na-kola',
      nazev: 'Продажба на кола',
      popis: 'Договор за покупко-продажба, приемо-предавателен протокол и разписка.',
      ilustrace: 'auto',
      dokumenty: ['dogovor-pokupko-prodazhba-avtomobil', 'priemo-predavatelen-protokol-avtomobil', 'razpiska-poluchavane-pari'],
      title: 'Продажба на кола – всички документи в един PDF, безплатно',
      description: 'Всичко за продажбата на употребяван автомобил: договор за нотариус, протокол с часа на предаване и разписка. Безплатен образец, PDF и Word.',
      perex: 'Попълнете договора, останалите документи прехвърлят данните. После изтеглете всичко наведнъж, в един PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Не знаете от какъв документ имате нужда?',
    span: 'Изберете ситуацията и ще ви покажем какво трябва.',
    situace: [
      {
        nazev: 'Колата',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Продавам или купувам употребявана кола', dokumenty: ['dogovor-pokupko-prodazhba-avtomobil', 'priemo-predavatelen-protokol-avtomobil'], balicek: 'prodazhba-na-kola', tip: 'Подписите се заверяват от нотариус; регистрация до един месец.' },
          { text: 'Давам колата си на заем', dokumenty: ['priemo-predavatelen-protokol-avtomobil', 'dogovor-za-zaem-za-polzvane'] },
          { text: 'Продавам мотоциклет или скутер', dokumenty: ['dogovor-pokupko-prodazhba-motor', 'priemo-predavatelen-protokol-avtomobil'] },
        ],
      },
      {
        nazev: 'Пари',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Давам пари на заем', dokumenty: ['dogovor-za-zaem', 'razpiska-poluchavane-pari'] },
          { text: 'Давам или получавам пари в брой', dokumenty: ['razpiska-poluchavane-pari'], tip: 'От 5 000 евро нагоре – само по банков път.' },
          { text: 'Някой ми дължи пари', dokumenty: ['pokana-za-plashtane', 'priznavane-na-dalg', 'sporazumenie-razsrochvane-dalg'], tip: 'Признаването на дълга прекъсва давността.' },
          { text: 'Дарявам пари или вещ', dokumenty: ['dogovor-za-darenie'], tip: 'Между родители и деца и между съпрузи няма данък дарение.' },
        ],
      },
      {
        nazev: 'Жилище',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Отдавам или наемам жилище', dokumenty: ['dogovor-za-naem-zhilishte', 'priemo-predavatelen-protokol-zhilishte'], tip: 'Наемодателят декларира доходите от наем пред НАП.' },
          { text: 'Искам да прекратя наема', dokumenty: ['predizvestie-prekratyavane-naem', 'sporazumenie-prekratyavane-naem'], tip: 'С предизвестие – или по-бързо по взаимно съгласие.' },
          { text: 'Пренаемам стая или жилището', dokumenty: ['dogovor-za-prenaemane'], tip: 'Стая – ако договорът не го забранява; цялото жилище – със съгласие.' },
        ],
      },
      {
        nazev: 'Покупки и документи',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Искам да върна стока, купена онлайн', dokumenty: ['formulyar-otkaz-ot-dogovor'], tip: '14 дни от получаването на стоката.' },
          { text: 'Купената стока има дефект', dokumenty: ['reklamatsiya'], tip: 'Продавачът отговаря 2 години от доставката.' },
          { text: 'Продавам употребявана вещ', dokumenty: ['dogovor-pokupko-prodazhba'] },
          { text: 'Някой трябва да свърши нещо вместо мен', dokumenty: ['palnomoshtno'] },
          { text: 'Прекратявам абонамент, застраховка или фитнес', dokumenty: ['predizvestie-prekratyavane-dogovor'] },
          { text: 'Давам вещ на приятел', dokumenty: ['dogovor-za-zaem-za-polzvane'] },
        ],
      },
      {
        nazev: 'Работа, майстори и семейство',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Наемам майстор', dokumenty: ['dogovor-za-izrabotka'] },
          { text: 'Напускам работа', dokumenty: ['predizvestie-napuskane-rabota'], tip: '30 дни при безсрочен договор, ако не е уговорено друго.' },
          { text: 'Детето пътува без мен', dokumenty: ['deklaratsiya-saglasie-patuvane-dete'], tip: 'Подписът се заверява от нотариус.' },
          { text: 'Трябва ми писмена декларация', dokumenty: ['deklaratsiya'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Безплатни образци на договори в PDF – попълване онлайн',
    description: 'Безплатни образци на договори по българското право: продажба на кола, заем, дарение, наем, пълномощно, рекламация. Онлайн, в PDF или Word.',
    stitek: 'България',
    stitekSpan: 'договори по българското право',
    h1: 'Образци на договори',
    h1Span: 'Попълнете онлайн за няколко минути или изтеглете празния образец. И в Word, без регистрация.',
    hledaniNadpis: 'От какъв договор имате нужда?',
    hledaniSpan: 'Търсете по ситуация, не по членове от закона.',
    ogPopis: 'По българското право. Попълнете онлайн.',
  },
};
