import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './kaufvertrag-gebrauchtwagen';
import { kaufvertragMotorradAT as sablona, NAHRADY } from '../../sablony/at/kaufvertrag-motorrad';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Kaufvertrag Motorrad",
  nazevA: "Kaufvertrag für ein Motorrad",
  katalog: { ...auto.katalog, popis: "Privatverkauf eines Motorrads, Mopeds oder Quads.", ilustrace: 'motorka', slova: ["Motorrad verkaufen", "Motorradkauf", "Moped", "Roller", "Quad", "Kaufvertrag Motorrad Österreich"] },
  landing: {
    ...L,
    title: "Kaufvertrag Motorrad Österreich {rok} – Vorlage kostenlos als PDF",
    description: "Kostenloser Kaufvertrag für Motorrad, Moped oder Quad von privat nach ABGB: FIN, Kilometerstand, Gewährleistungsausschluss, Typenschein, Pickerl. PDF und Word.",
    perex: "Privatverkauf eines gebrauchten Motorrads, Mopeds oder Quads nach ABGB – mit Kilometerstand, Zubehör, Gewährleistungsausschluss und Hinweisen zu Ab- und Anmeldung.",
    hodiSe: ["Sie verkaufen oder kaufen ein Motorrad, Moped oder Quad von privat", "das Fahrzeug ist zugelassen", "Sie wollen Preis, Zustand und Übergabe schriftlich festhalten"],
    nehodiSe: ["Sie kaufen beim Händler – der hat eigene Verträge und muss Gewährleistung geben", "das Motorrad ist geleast oder noch finanziert"],
    faq: [
      {"q": "Unterscheidet sich der Vertrag vom Autokaufvertrag?", "a": "Rechtlich nicht – beides ist ein Kaufvertrag über ein Kraftfahrzeug nach ABGB. Praktisch anders: Die FIN ist in den Rahmen eingeschlagen, und Zubehör wie Koffer oder Auspuff sollte im Vertrag stehen."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Kaufvertrag Motorrad (Österreich) online ausfüllen – PDF kostenlos", description: "Privater Motorrad-Kaufvertrag nach österreichischem Recht. PDF oder Word kostenlos." },
};

export default stranka;
