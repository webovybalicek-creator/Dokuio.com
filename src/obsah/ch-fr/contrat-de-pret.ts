import type { StrankaDokumentu } from '../typy';
import { pret as sablona } from '../../sablony/ch-fr/contrat-de-pret';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de prêt",
  nazevA: "le contrat de prêt",
  katalog: {"popis": "Prêter de l’argent, aussi par mensualités.", "kategorie": "geld", "ilustrace": "pujcka", "slova": ["contrat de prêt", "contrat de prêt entre particuliers", "prêt d’argent", "prêt à un ami", "reconnaissance de dette prêt", "contrat de prêt suisse"]},
  protejsky: {"ch": "darlehensvertrag"},
  souvisejici: "geld",
  landing: {
  "title": "Contrat de prêt {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat de prêt entre particuliers selon le CO : montant en lettres, remboursement en une fois ou par mensualités, intérêts facultatifs. PDF et Word.",
  "perex": "Pour prêter de l’argent à un ami ou un proche. Remboursement en une fois ou par mensualités avec plan en annexe, avec ou sans intérêts.",
  "obsahPopis": "Les articles du prêt (art. 312 ss CO).",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Prêteur et emprunteur."
    },
    {
      "nazev": "Prêt et versement",
      "popis": "Montant et mode de remise."
    },
    {
      "nazev": "Intérêts",
      "popis": "Sans intérêts ou taux convenu."
    },
    {
      "nazev": "Remboursement",
      "popis": "En une fois ou par mensualités, déchéance."
    },
    {
      "nazev": "Plan",
      "popis": "Annexe avec les échéances."
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
    "Plan de remboursement en annexe",
    "Rappels des mensualités dans le calendrier"
  ],
  "hodiSe": [
    "vous prêtez de l’argent à un ami ou un proche",
    "vous voulez une date de remboursement écrite"
  ],
  "nehodiSe": [
    "vous prêtez à titre professionnel – la loi sur le crédit à la consommation s’applique"
  ],
  "po": [
    {
      "nazev": "Versement",
      "popis": "Versez l’argent par virement avec la mention « prêt selon contrat »."
    },
    {
      "nazev": "Échéances",
      "popis": "Inscrivez les dates de remboursement dans votre calendrier."
    }
  ],
  "faq": [
    {
      "q": "Que se passe-t-il sans date de remboursement ?",
      "a": "Le prêt doit alors être remboursé dans les six semaines dès la première réclamation (art. 318 CO)."
    },
    {
      "q": "Des intérêts sont-ils dus ?",
      "a": "Entre particuliers, seulement s’ils sont convenus. Fixez un taux raisonnable ; certains cantons ont des taux maximaux."
    },
    {
      "q": "Le contrat aide-t-il en cas de poursuite ?",
      "a": "Oui. Signé par l’emprunteur, il vaut reconnaissance de dette et permet de requérir la mainlevée provisoire (art. 82 LP)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 312 ss du Code des obligations (CO) et l’art. 82 LP.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de prêt en ligne – PDF", "description": "Contrat de prêt entre particuliers avec plan de remboursement. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
