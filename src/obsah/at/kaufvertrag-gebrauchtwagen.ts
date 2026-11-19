import type { StrankaDokumentu } from '../typy';
import de from '../de/kaufvertrag-gebrauchtwagen';
import { kaufvertragGebrauchtwagenAT as sablona } from '../../sablony/at/kaufvertrag-gebrauchtwagen';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: {
    ...de.landing,
    title: 'Kaufvertrag Gebrauchtwagen Österreich {rok} – Vorlage kostenlos als PDF',
    description:
      'Kostenloser Kfz-Kaufvertrag von privat nach österreichischem Recht (ABGB): FIN, Kilometerstand, Unfallschäden, Gewährleistungsausschluss, Typenschein, Pickerl. PDF und Word.',
    perex: 'Privatverkauf eines gebrauchten Autos nach ABGB – mit Kilometerstand, Unfallschäden, Gewährleistungsausschluss und Hinweisen zu Ab- und Anmeldung.',
    obsahPopis: 'Sechs Paragrafen nach §§ 1053 ff. ABGB.',
    po: [
      { nazev: 'Abmeldung', popis: 'Verkäufer meldet bei einer Zulassungsstelle ab – kostenlos.' },
      { nazev: 'Versicherung', popis: 'Verkäufer verständigt den Versicherer.' },
      { nazev: 'Anmeldung', popis: 'Käufer meldet mit Kaufvertrag, Typenschein und Pickerl an.' },
    ],
    faq: [
      { q: 'Darf ich als Privatperson die Gewährleistung ausschließen?', a: 'Ja, unter Privatpersonen ist das möglich – nicht aber für listig verschwiegene Mängel und zugesicherte Eigenschaften.' },
      { q: 'Was braucht der Käufer zur Anmeldung?', a: 'Lichtbildausweis, Versicherungsbestätigung, Typenschein bzw. Genehmigungsnachweis, Kaufvertrag und – wenn fällig – ein gültiges Gutachten nach § 57a KFG.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 1053 ff. und §§ 922 ff. ABGB sowie dem Kraftfahrgesetz 1967.',
  },
  vytvorit: { ...de.vytvorit, title: 'Kaufvertrag Gebrauchtwagen (Österreich) online ausfüllen – PDF kostenlos', description: 'Privater Kfz-Kaufvertrag nach österreichischem Recht. PDF oder Word kostenlos.' },
};

export default stranka;
