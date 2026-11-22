import type { StrankaDokumentu } from '../typy';
import { avisDefauts as sablona } from '../../sablony/ch-fr/avis-des-defauts';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Avis des défauts",
  nazevA: "l’avis des défauts",
  katalog: {"popis": "Signaler immédiatement une marchandise défectueuse.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["avis des défauts", "lettre réclamation défaut", "garantie produit suisse", "réclamation marchandise défectueuse", "action rédhibitoire", "réduction du prix"]},
  protejsky: {"ch": "maengelruege"},
  souvisejici: "alltag",
  landing: {
  "title": "Avis des défauts {rok} – modèle de lettre PDF gratuit",
  "description": "Modèle gratuit d’avis des défauts : marchandise, défaut, date de découverte et demande – réparation, remplacement, réduction ou annulation. PDF et Word.",
  "perex": "Une marchandise achetée est défectueuse. Signalez-le immédiatement par écrit – sinon elle est réputée acceptée. La lettre fixe un délai de réponse au vendeur.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Marchandise",
      "popis": "Achat, numéro de pièce, date."
    },
    {
      "nazev": "Défaut",
      "popis": "Description et date de découverte."
    },
    {
      "nazev": "Demande",
      "popis": "Réparation, remplacement, réduction ou annulation."
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
    "Délai de réponse calculé automatiquement",
    "Rappel dans le calendrier",
    "PDF et Word"
  ],
  "hodiSe": [
    "un produit acheté présente un défaut",
    "vous voulez faire valoir la garantie par écrit"
  ],
  "nehodiSe": [
    "vous voulez simplement rendre un article en ligne – il n’y a pas de droit légal de retour"
  ],
  "po": [
    {
      "nazev": "Preuves",
      "popis": "Photos du défaut, quittance ou relevé."
    },
    {
      "nazev": "Sans accord",
      "popis": "Organisations de consommateurs ou autorité de conciliation."
    }
  ],
  "faq": [
    {
      "q": "Combien de temps dure la garantie ?",
      "a": "Deux ans dès la livraison ; pour une chose d’occasion, le commerçant peut la réduire à un an (art. 210 CO)."
    },
    {
      "q": "Ai-je droit à une réparation ?",
      "a": "Selon la loi, vous pouvez annuler la vente ou réduire le prix ; la réparation n’est due que si elle est prévue par la garantie ou les conditions générales."
    },
    {
      "q": "Que se passe-t-il si je signale le défaut trop tard ?",
      "a": "La marchandise est réputée acceptée et vous perdez vos droits pour ce défaut (art. 201 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 197 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir l’avis des défauts en ligne – PDF", "description": "Avis des défauts avec délai de réponse. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
