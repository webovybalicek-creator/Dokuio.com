import type { StrankaDokumentu } from '../typy';
import de from '../de/darlehensvertrag';
import { darlehensvertragAT as sablona } from '../../sablony/at/darlehensvertrag';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: {
    ...de.landing,
    title: 'Privater Darlehensvertrag Österreich {rok} – Vorlage kostenlos mit Tilgungsplan',
    obsahPopis: 'Fünf Paragrafen nach §§ 983 ff. ABGB.',
    faq: [
      { q: 'Braucht ein Privatdarlehen einen schriftlichen Vertrag?', a: 'Es ist nicht zwingend, aber dringend zu empfehlen – als Nachweis über Betrag, Rückzahlung und Zinsen.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 983 ff. ABGB.',
  },
  vytvorit: { ...de.vytvorit, title: 'Darlehensvertrag (Österreich) online ausfüllen – PDF kostenlos' },
};

export default stranka;
