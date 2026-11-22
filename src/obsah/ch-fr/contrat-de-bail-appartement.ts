import type { StrankaDokumentu } from '../typy';
import { bail as sablona } from '../../sablony/ch-fr/contrat-de-bail-appartement';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de bail",
  nazevA: "le contrat de bail",
  katalog: {"popis": "Bail à loyer pour un appartement.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["contrat de bail", "contrat de bail appartement", "bail à loyer", "contrat de location appartement suisse", "garantie de loyer", "frais accessoires"]},
  protejsky: {"ch": "mietvertrag-wohnung"},
  souvisejici: "wohnen",
  landing: {
  "title": "Contrat de bail {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat de bail à loyer pour un appartement : loyer net, frais accessoires, garantie de loyer, termes de résiliation, animaux. Selon le CO, PDF et Word.",
  "perex": "Pour louer un appartement entre particuliers en Suisse romande. Le contrat énumère les frais accessoires, fixe la garantie sur un compte bloqué et les termes de résiliation.",
  "obsahPopis": "Les articles du bail (art. 253 ss CO).",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Bailleur et locataire."
    },
    {
      "nazev": "Chose louée",
      "popis": "Adresse, pièces, surface, annexes."
    },
    {
      "nazev": "Loyer et frais accessoires",
      "popis": "Loyer net, acompte, échéance."
    },
    {
      "nazev": "Garantie",
      "popis": "Au maximum trois loyers, compte bloqué."
    },
    {
      "nazev": "Usage",
      "popis": "Menus défauts, sous-location, animaux."
    },
    {
      "nazev": "Résiliation",
      "popis": "Trois mois pour les termes convenus."
    }
  ],
  "kroky": [
    {
      "nazev": "Saisissez les données",
      "popis": "Ce que vous ne savez pas, laissez-le – une ligne à compléter à la main restera."
    },
    {
      "nazev": "Vérifiez le texte",
      "popis": "Chaque paragraphe peut être modifié."
    },
    {
      "nazev": "Téléchargez et signez",
      "popis": "PDF ou Word, gratuitement."
    }
  ],
  "online": [
    "Montant en lettres automatiquement",
    "Rappel du loyer mensuel",
    "L’état des lieux reprend les données"
  ],
  "hodiSe": [
    "vous louez votre appartement à un particulier",
    "vous voulez un bail simple et clair"
  ],
  "nehodiSe": [
    "votre canton impose un formulaire de bail ou la formule officielle pour le loyer initial – ajoutez-la",
    "il s’agit de locaux commerciaux"
  ],
  "po": [
    {
      "nazev": "Garantie",
      "popis": "Versez la garantie sur un compte de garantie de loyer au nom du locataire."
    },
    {
      "nazev": "État des lieux",
      "popis": "Établissez un état des lieux à la remise des clés."
    },
    {
      "nazev": "Annonce",
      "popis": "Le locataire s’annonce à la commune dans les 14 jours."
    }
  ],
  "faq": [
    {
      "q": "Combien peut coûter la garantie de loyer ?",
      "a": "Au maximum trois loyers mensuels. Elle doit être déposée sur un compte bloqué au nom du locataire (art. 257e CO)."
    },
    {
      "q": "Quels frais accessoires le locataire paie-t-il ?",
      "a": "Seulement ceux énumérés un par un dans le contrat. Les autres sont compris dans le loyer (art. 257a CO)."
    },
    {
      "q": "Faut-il la formule officielle pour le loyer initial ?",
      "a": "Dans certains cantons, oui (art. 270 al. 2 CO). Renseignez-vous auprès de l’autorité cantonale de conciliation avant la signature."
    },
    {
      "q": "Quel est le délai de résiliation ?",
      "a": "Au moins trois mois pour un terme usuel ou convenu. Le bailleur doit résilier au moyen de la formule officielle."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 253 ss du Code des obligations (CO) et les informations de ch.ch.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de bail en ligne – PDF", "description": "Bail à loyer pour un appartement avec garantie et frais accessoires. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
