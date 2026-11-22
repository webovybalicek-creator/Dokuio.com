import type { StrankaDokumentu } from '../typy';
import { quittance as sablona } from '../../sablony/ch-fr/quittance';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Quittance",
  nazevA: "la quittance",
  katalog: {"popis": "Confirmation du paiement en espèces.", "kategorie": "geld", "ilustrace": "penize", "slova": ["quittance", "modèle quittance", "quittance de paiement", "reçu argent liquide", "quittance espèces", "quittance acompte"]},
  protejsky: {"ch": "quittung"},
  souvisejici: "geld",
  landing: {
  "title": "Quittance {rok} – modèle PDF gratuit à remplir",
  "description": "Modèle gratuit de quittance : qui a reçu, de qui, combien (aussi en lettres) et pour quoi. La preuve d’un paiement en espèces selon l’art. 88 CO. PDF et Word.",
  "perex": "Lorsque vous remettez ou recevez de l’argent liquide – prix de vente, prêt, acompte ou garantie. La quittance prouve le paiement.",
  "obsahPopis": "Une quittance courte.",
  "obsah": [
    {
      "nazev": "Quittance",
      "popis": "Bénéficiaire, payeur, montant en lettres et motif."
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
    "PDF et Word"
  ],
  "hodiSe": [
    "vous payez ou recevez de l’argent liquide",
    "vous versez un acompte"
  ],
  "nehodiSe": [
    "vous payez par virement – le relevé de compte suffit"
  ],
  "po": [
    {
      "nazev": "Conservation",
      "popis": "La personne qui a payé garde la quittance."
    }
  ],
  "faq": [
    {
      "q": "Qui signe la quittance ?",
      "a": "La personne qui reçoit l’argent. Celle qui paie peut l’exiger (art. 88 CO) et la conserve comme preuve."
    },
    {
      "q": "Faut-il écrire le montant en lettres ?",
      "a": "C’est conseillé : chiffres et lettres ensemble évitent les erreurs et les falsifications. Nous ajoutons les lettres automatiquement."
    },
    {
      "q": "Une quittance suffit-elle pour une grosse somme ?",
      "a": "Oui, mais pour un montant important, un virement laisse une trace plus sûre que les espèces."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon l’art. 88 du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la quittance en ligne – PDF", "description": "Quittance pour un paiement en espèces. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
