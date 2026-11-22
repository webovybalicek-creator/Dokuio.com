import type { StrankaDokumentu } from '../typy';
import { sousLocation as sablona } from '../../sablony/ch-fr/contrat-de-sous-location';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de sous-location",
  nazevA: "le contrat de sous-location",
  katalog: {"popis": "Sous-louer une chambre ou l’appartement.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["contrat de sous-location", "sous-location chambre", "sous-louer appartement", "sous-location suisse consentement", "colocation sous-location"]},
  protejsky: {"ch": "untermietvertrag"},
  souvisejici: "wohnen",
  landing: {
  "title": "Contrat de sous-location {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit de contrat de sous-location d’une chambre ou d’un appartement : consentement du bailleur, durée, loyer et garantie. Selon l’art. 262 CO, PDF et Word.",
  "perex": "Vous louez une chambre ou votre appartement à un sous-locataire. Le contrat mentionne le consentement du bailleur et prend fin au plus tard avec le bail principal.",
  "obsahPopis": "Les articles de la sous-location.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Locataire principal et sous-locataire."
    },
    {
      "nazev": "Objet",
      "popis": "Chambre ou logement, consentement du bailleur."
    },
    {
      "nazev": "Durée",
      "popis": "Déterminée ou indéterminée, préavis."
    },
    {
      "nazev": "Loyer et garantie",
      "popis": "Montant, échéance, compte."
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
    "Rappels du début et de la fin",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous sous-louez une chambre en colocation",
    "vous sous-louez votre appartement pendant une absence"
  ],
  "nehodiSe": [
    "le bailleur n’a pas donné son consentement"
  ],
  "po": [
    {
      "nazev": "Consentement",
      "popis": "Joignez une copie du consentement du bailleur."
    },
    {
      "nazev": "État des lieux",
      "popis": "Établissez un état des lieux à l’entrée."
    }
  ],
  "faq": [
    {
      "q": "Faut-il l’accord du bailleur ?",
      "a": "Oui. Il ne peut le refuser que si vous refusez de communiquer les conditions, si elles sont abusives ou si la sous-location lui cause des inconvénients majeurs (art. 262 CO)."
    },
    {
      "q": "Puis-je demander un loyer plus élevé ?",
      "a": "Un loyer nettement supérieur au loyer principal peut être abusif et justifier le refus du bailleur. Restez proche du loyer effectif."
    },
    {
      "q": "Que se passe-t-il si le bail principal prend fin ?",
      "a": "La sous-location prend fin au plus tard en même temps."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon l’art. 262 du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de sous-location en ligne – PDF", "description": "Sous-location d’une chambre ou d’un appartement. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
