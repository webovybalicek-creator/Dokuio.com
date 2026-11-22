import type { StrankaDokumentu } from '../typy';
import { donation as sablona } from '../../sablony/ch-fr/contrat-de-donation';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de donation",
  nazevA: "le contrat de donation",
  katalog: {"popis": "Donner de l’argent ou une chose.", "kategorie": "geld", "ilustrace": "dar", "slova": ["contrat de donation", "donation d’argent", "donation entre vifs", "donation à un enfant", "impôt sur les donations", "modèle donation suisse"]},
  protejsky: {"ch": "schenkungsvertrag"},
  souvisejici: "geld",
  landing: {
  "title": "Contrat de donation {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat de donation d’argent ou d’une chose mobilière selon les art. 239 ss CO : remise immédiate, lien de parenté, impôt cantonal. PDF et Word.",
  "perex": "Pour donner de l’argent ou une chose – à un enfant, un neveu ou un ami. Le modèle règle la donation remise immédiatement ; l’impôt sur les donations dépend du canton.",
  "obsahPopis": "Les articles de la donation.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Donateur, donataire et lien de parenté."
    },
    {
      "nazev": "Objet",
      "popis": "Argent ou chose mobilière."
    },
    {
      "nazev": "Exécution",
      "popis": "Remise en espèces, virement ou remise de la chose."
    },
    {
      "nazev": "Dispositions finales",
      "popis": "Révocation légale et impôt cantonal."
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
    "vous donnez de l’argent ou une chose mobilière",
    "vous voulez une preuve pour l’administration fiscale"
  ],
  "nehodiSe": [
    "il s’agit d’un immeuble – un acte authentique est nécessaire",
    "vous promettez une donation pour plus tard"
  ],
  "po": [
    {
      "nazev": "Virement",
      "popis": "Versez l’argent le jour même avec la mention « donation »."
    },
    {
      "nazev": "Impôt",
      "popis": "Pour un montant important, renseignez-vous auprès de l’administration fiscale du canton du donateur."
    }
  ],
  "faq": [
    {
      "q": "Une donation doit-elle être écrite ?",
      "a": "La donation manuelle est valable sans forme. Seule la promesse de donner plus tard doit être écrite (art. 243 CO). L’écrit sert de preuve."
    },
    {
      "q": "Qui paie l’impôt sur les donations ?",
      "a": "En règle générale le donataire. Les conjoints et partenaires enregistrés sont exonérés partout, les descendants dans la plupart des cantons."
    },
    {
      "q": "Le donateur peut-il révoquer la donation ?",
      "a": "Seulement dans les cas prévus par la loi, par exemple en cas d’infraction grave du donataire envers lui (art. 249 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 239 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de donation en ligne – PDF", "description": "Donation d’argent ou d’une chose mobilière. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
