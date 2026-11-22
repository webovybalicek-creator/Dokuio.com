import type { StrankaDokumentu } from '../typy';
import { revocation as sablona } from '../../sablony/ch-fr/revocation-contrat-demarchage';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Révocation d’un contrat",
  nazevA: "la révocation du contrat",
  katalog: {"popis": "Révoquer un achat à domicile ou par téléphone dans les 14 jours.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["révocation contrat démarchage", "droit de révocation suisse", "révoquer achat téléphone", "démarchage à domicile 14 jours", "annuler contrat téléphone"]},
  protejsky: {"ch": "widerruf-haustuergeschaeft"},
  souvisejici: "resiliations",
  landing: {
  "title": "Révocation démarchage {rok} – modèle de lettre PDF gratuit",
  "description": "Modèle gratuit de révocation d’un contrat conclu à domicile, au travail, dans la rue ou par téléphone : 14 jours, dès 100 francs. Selon les art. 40a ss CO, PDF et Word.",
  "perex": "On vous a vendu quelque chose à la porte, au téléphone ou dans la rue ? Vous pouvez révoquer le contrat dans les 14 jours, sans justification.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Fournisseur",
      "popis": "Entreprise et adresse."
    },
    {
      "nazev": "Contrat",
      "popis": "Marchandise, date, numéro."
    },
    {
      "nazev": "Lieu de l’offre",
      "popis": "Domicile, téléphone, travail, rue."
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
    "PDF et Word"
  ],
  "hodiSe": [
    "vous avez conclu un contrat à domicile ou par téléphone pour plus de 100 francs"
  ],
  "nehodiSe": [
    "vous avez acheté en ligne – il n’y a pas de droit légal de révocation",
    "vous avez demandé vous-même la visite du vendeur"
  ],
  "po": [
    {
      "nazev": "Restitution",
      "popis": "Rendez les prestations reçues ; le fournisseur rembourse les montants payés."
    }
  ],
  "faq": [
    {
      "q": "Quel est le délai ?",
      "a": "14 jours dès la conclusion du contrat et l’information écrite sur le droit de révocation (art. 40e CO). Il suffit d’envoyer la révocation dans le délai."
    },
    {
      "q": "Le droit vaut-il pour les achats en ligne ?",
      "a": "Non. En Suisse, il n’existe pas de droit légal de révocation pour les achats en ligne ; seuls certains magasins accordent un droit de retour volontaire."
    },
    {
      "q": "Quand le droit de révocation est-il exclu ?",
      "a": "Si vous avez expressément demandé les négociations, si vous avez commandé à un stand de marché ou de foire, ou si la prestation ne dépasse pas 100 francs."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 40a ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la révocation en ligne – PDF", "description": "Révocation d’un contrat conclu par démarchage ou téléphone. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
