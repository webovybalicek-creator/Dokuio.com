import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'savetnik',
  nazev: 'Съветник',
  title: 'Съветник – продажба на кола, заем, наем и покупки',
  description: 'Ръководства стъпка по стъпка: продажба и регистрация на кола, заем между приятели, дарение, наем на жилище, отказ от покупка и рекламация. С безплатни образци.',
  h1: 'Съветник',
  h1Span: 'Ръководства стъпка по стъпка за ежедневни ситуации. Без тежък юридически език, по действащото законодателство.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Автомобили',
      popis: 'Продажба и покупка на употребявана кола, регистрация.',
      ilustrace: 'auto',
      temata: [
        { slug: 'prodazhba-na-kola', nazev: 'Продажба на кола', popis: 'Договор, нотариус и предаване.' },
        { slug: 'pokupka-na-kola', nazev: 'Покупка на употребявана кола', popis: 'Какво да проверите преди плащане.' },
        { slug: 'registratsiya', nazev: 'Регистрация', popis: 'Срокове, документи, пълномощно.' },
      ],
    },
    {
      slug: 'pari',
      nazev: 'Пари и дарения',
      popis: 'Заем между приятели, признаване на дълг, давност, дарение.',
      ilustrace: 'penize',
      temata: [
        { slug: 'zaem', nazev: 'Заемът', popis: 'Как да дадете пари на заем и да си ги върнете.' },
        { slug: 'dalgove', nazev: 'Дългове', popis: 'Признаване, вноски, давност.' },
        { slug: 'darenie', nazev: 'Дарението', popis: 'Форма и данък дарение.' },
      ],
    },
    {
      slug: 'zhilishte',
      nazev: 'Жилище и наем',
      popis: 'Наем на жилище, депозит, прекратяване и предаване.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'naem', nazev: 'Наемът', popis: 'Договор, депозит, данък.' },
        { slug: 'krai-na-naema', nazev: 'Краят на наема', popis: 'Предизвестие, предаване, депозит.' },
      ],
    },
    {
      slug: 'pokupki',
      nazev: 'Покупки и рекламации',
      popis: 'Отказ от онлайн покупка, стоки с дефект, продажба чрез обява.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'otkaz', nazev: 'Отказ от покупка', popis: '14 дни без причина.' },
        { slug: 'reklamatsiya', nazev: 'Рекламация', popis: 'Ремонт, замяна, връщане на парите.' },
        { slug: 'obyava', nazev: 'Продажба чрез обява', popis: 'Договор, плащане и измами.' },
        { slug: 'zaem-na-vesht', nazev: 'Заемане на вещ', popis: 'Безплатно ползване и повреди.' },
      ],
    },
    {
      slug: 'uslugi',
      nazev: 'Майстори и услуги',
      popis: 'Договорът с майстор, закъснения, недостатъци и плащане.',
      ilustrace: 'protokol',
      temata: [{ slug: 'maystori', nazev: 'Майстори', popis: 'Договор за изработка, срок и недостатъци.' }],
    },
    {
      slug: 'rabota',
      nazev: 'Работа',
      popis: 'Напускане на работа и предизвестие.',
      ilustrace: 'protokol',
      temata: [{ slug: 'napuskane', nazev: 'Напускане', popis: 'Предизвестие и по-ранно прекратяване.' }],
    },
    {
      slug: 'semeystvo',
      nazev: 'Семейство и пътуване',
      popis: 'Пътуване на дете без родители и нотариално съгласие.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'patuvane-na-dete', nazev: 'Пътуване на дете', popis: 'Съгласие на родителите и нотариус.' }],
    },
    {
      slug: 'palnomoshtno',
      nazev: 'Пълномощни и представителство',
      popis: 'Когато някой друг действа вместо вас.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'palnomoshtno', nazev: 'Пълномощно', popis: 'С обикновен подпис или при нотариус.' }],
    },
  ],
};
