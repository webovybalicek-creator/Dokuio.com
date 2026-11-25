import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import de from '../de/quittung';
import { quittungAT as sablona } from '../../sablony/at/quittung';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: {
    ...de.landing,
    "description": "Kostenlose Quittung über eine Barzahlung nach österreichischem Recht (§ 1426 ABGB): Betrag in Ziffern und Worten, Zahlungsgrund, Unterschrift. Als PDF und Word.",
    title: 'Quittung Österreich {rok} – Vorlage kostenlos als PDF',
    faq: [
      { q: 'Kann ich eine Quittung verlangen?', a: 'Ja, wer zahlt, kann eine Quittung verlangen (§ 1426 ABGB).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Quittung entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf § 1426 ABGB.',
  },
  vytvorit: { ...de.vytvorit, title: 'Quittung (Österreich) online ausfüllen – PDF kostenlos' },
};

export default vlastni(stranka, 'quittung');
