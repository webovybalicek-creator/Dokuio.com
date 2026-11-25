import type { StrankaDokumentu } from '../typy';
import { vlastni } from './_eigen';
import { preloz } from '../../sablony/motorka';
import auto from './kaufvertrag-auto';
import { kaufvertragMotorradCH as sablona, NAHRADY } from '../../sablony/ch/kaufvertrag-motorrad';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Kaufvertrag Motorrad",
  nazevA: "Kaufvertrag für ein Motorrad",
  katalog: { ...auto.katalog, popis: "Privatverkauf eines Motorrads, Rollers oder Quads.", ilustrace: 'motorka', slova: ["Motorrad verkaufen", "Occasion Motorrad", "Roller", "Quad", "Kaufvertrag Motorrad Schweiz"] },
  landing: {
    ...L,
    title: "Kaufvertrag Motorrad Schweiz {rok} – Vorlage kostenlos als PDF",
    description: "Kostenloser Kaufvertrag für ein Occasionsmotorrad, einen Roller oder ein Quad nach OR: Fahrgestellnummer, Stammnummer, MFK, Gewährleistung. PDF und Word.",
    perex: "Privatverkauf eines Occasionsmotorrads, Rollers oder Quads nach Obligationenrecht – mit Kilometerstand, Zubehör, Gewährleistung und Hinweisen zu Schildern und Einlösen.",
    hodiSe: ["Sie verkaufen oder kaufen ein Motorrad, einen Roller oder ein Quad von privat", "das Fahrzeug hat einen Fahrzeugausweis", "Sie wollen Preis, Zustand und Übergabe schriftlich festhalten"],
    nehodiSe: ["Sie kaufen beim Garagisten – der hat eigene Verträge", "das Motorrad ist geleast und die Leasinggesellschaft hat nicht zugestimmt"],
    faq: [
      {"q": "Unterscheidet sich der Vertrag vom Autokaufvertrag?", "a": "Rechtlich nicht – beides ist ein Kaufvertrag nach Art. 184 ff. OR. Praktisch anders: Die Fahrgestellnummer ist in den Rahmen eingeschlagen, und Zubehör wie Koffer oder Auspuff sollte im Vertrag stehen."},
      {"q": "Gehen die Kontrollschilder mit dem Motorrad mit?", "a": "Nein. Die Schilder gehören dem Halter. Der Verkäufer behält sie, der Käufer braucht eigene."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Kaufvertrag Motorrad (Schweiz) online ausfüllen – PDF kostenlos", description: "Privater Kaufvertrag für ein Occasionsmotorrad nach Schweizer Recht. PDF oder Word kostenlos." },
};

export default vlastni(stranka, 'kaufvertrag-motorrad');
