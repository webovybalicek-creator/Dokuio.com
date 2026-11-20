import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './kaufvertrag-gebrauchtwagen';
import { kaufvertragMotorrad as sablona, NAHRADY } from '../../sablony/de/kaufvertrag-motorrad';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Kaufvertrag Motorrad",
  nazevA: "Kaufvertrag für ein Motorrad",
  katalog: { ...auto.katalog, popis: "Privatverkauf eines Motorrads, Rollers oder Quads.", ilustrace: 'motorka', slova: ["Motorrad verkaufen", "Motorradkauf", "Roller", "Quad", "Kraftrad", "Kaufvertrag Motorroller"] },
  landing: {
    ...L,
    title: "Kaufvertrag Motorrad {rok} – Vorlage kostenlos als PDF",
    description: "Kostenloser Kaufvertrag für Motorrad, Roller oder Quad von privat: FIN, Kilometerstand, Unfälle, Haftungsausschluss nach § 444 BGB. PDF und Word.",
    perex: "Für den Privatverkauf eines gebrauchten Motorrads, Rollers oder Quads – mit Kilometerstand, Unfällen, Zubehör und Haftungsausschluss.",
    hodiSe: ["Sie verkaufen oder kaufen ein Motorrad, einen Roller oder ein Quad von privat", "das Fahrzeug ist zugelassen", "Sie wollen Preis, Zustand und Übergabe schriftlich festhalten"],
    nehodiSe: ["Sie kaufen beim Händler – der hat eigene Verträge und muss Gewährleistung geben", "das Motorrad ist geleast oder noch finanziert"],
    faq: [
      {"q": "Unterscheidet sich der Vertrag vom Autokaufvertrag?", "a": "Rechtlich nicht – beides ist ein Kaufvertrag über ein Kraftfahrzeug. Praktisch anders: Die FIN ist in den Rahmen eingeschlagen, und Zubehör wie Koffer oder Auspuff sollte im Vertrag stehen."},
      {"q": "Passt die Vorlage auch für ein Mofa mit Versicherungskennzeichen?", "a": "Ja. Kleinkrafträder mit Versicherungskennzeichen haben keine Zulassungsbescheinigung – die entsprechenden Felder lassen Sie einfach leer."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Kaufvertrag Motorrad online ausfüllen – PDF kostenlos", description: "Assistent für den privaten Motorrad-Kaufvertrag nach deutschem Recht. PDF oder Word kostenlos." },
};

export default stranka;
