/**
 * Texty uk/en verzí kupní smlouvy na motorku, které se liší od smlouvy na auto (SEO.md, pravidlo 4: shoda s autem pod 75 %).
 * Doplní se ve VERZE u dokumentů s ilustrací „motorka“ místo kroků, „online“ a „Po podpisu“ převzatých z auta.
 */
import type { StrankaDokumentu } from '../obsah/typy';

type L = StrankaDokumentu['landing'];
const P = (nazev: string, popis: string) => ({ nazev, popis });

const MOTO: Record<string, Pick<L, 'kroky' | 'online' | 'po'> & { faq: L['faq'] }> = {
  en: {
    kroky: [P('Check the frame number', 'Compare the VIN stamped on the frame with the registration document.'), P('List the extras', 'Cases, exhaust, crash bars, helmet, second key.'), P('Ride or trailer?', 'Agree how the motorcycle leaves – with plates and insurance, or on a trailer.')],
    online: ['Fields for accessories and modifications', 'Amount in words in the local language', 'Bilingual PDF and Word'],
    po: [P('Plates and insurance', 'Settle who keeps the number plates and when the seller’s insurance ends.'), P('Test ride documented', 'If the buyer rode it before buying, note it in the handover report.')],
    faq: [
      { q: 'Where is the VIN on a motorcycle?', a: 'Usually stamped into the steering head of the frame, sometimes also on a plate near it. It must match the registration document exactly.' },
      { q: 'Should the helmet and gear be in the contract?', a: 'Only if they are part of the price. List everything that is sold with the motorcycle so there is no dispute later.' },
    ],
  },
  uk: {
    kroky: [P('Перевірте номер рами', 'Порівняйте VIN, вибитий на рамі, із документом про реєстрацію.'), P('Перелічіть додатки', 'Кофри, вихлоп, захисні дуги, шолом, другий ключ.'), P('Своїм ходом чи на причепі?', 'Домовтеся, як мотоцикл поїде – з номерами й страховкою чи на причепі.')],
    online: ['Поля для приладдя й переобладнання', 'Сума словами місцевою мовою', 'Двомовні PDF і Word'],
    po: [P('Номери й страхування', 'Домовтеся, хто залишає номерні знаки й коли закінчується страхування продавця.'), P('Тест-драйв', 'Якщо покупець їздив перед купівлею, запишіть це в акт передання.')],
    faq: [
      { q: 'Де на мотоциклі VIN?', a: 'Зазвичай вибитий на рульовій колонці рами, іноді ще й на табличці поруч. Він має точно збігатися з документом про реєстрацію.' },
      { q: 'Чи вписувати в договір шолом і екіпірування?', a: 'Лише якщо вони входять у ціну. Перелічіть усе, що продається разом із мотоциклом, щоб потім не було суперечок.' },
    ],
  },
};

/** Odliší landing motorky od auta; FAQ: vlastní otázky motorky + poslední (obecná) otázka originálu. */
export function motorka(landing: L, jazyk: string, zeme: string): L {
  const M = MOTO[jazyk];
  // AT a CH mají vlastní texty motorky v src/preklady/at|ch/_eigen.ts
  if (!M || zeme === 'at' || zeme === 'ch') return landing;
  const posledni = landing.faq.length > 1 ? landing.faq.slice(-1) : [];
  const prvni = landing.faq.slice(0, 1);
  return { ...landing, kroky: M.kroky, online: M.online, po: M.po, faq: [...prvni, ...M.faq, ...posledni] };
}
