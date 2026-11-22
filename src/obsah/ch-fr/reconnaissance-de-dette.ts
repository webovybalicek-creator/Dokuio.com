import type { StrankaDokumentu } from '../typy';
import { reconnaissanceDette as sablona } from '../../sablony/ch-fr/reconnaissance-de-dette';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reconnaissance de dette",
  nazevA: "la reconnaissance de dette",
  katalog: {"popis": "Confirmer une dette par écrit – utile en cas de poursuite.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["reconnaissance de dette", "modèle reconnaissance de dette", "reconnaissance de dette mainlevée", "reconnaissance de dette suisse", "dette entre particuliers"]},
  protejsky: {"ch": "schuldanerkennung"},
  souvisejici: "geld",
  landing: {
  "title": "Reconnaissance de dette {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de reconnaissance de dette selon l’art. 17 CO : montant en lettres, cause, paiement en une fois ou par mensualités. Pour la mainlevée. PDF et Word.",
  "perex": "Le débiteur confirme par écrit qu’il doit une somme précise. Signée, la reconnaissance permet la mainlevée provisoire dans une poursuite et fait recommencer la prescription.",
  "obsahPopis": "Les articles de la reconnaissance.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Débiteur et créancier."
    },
    {
      "nazev": "Reconnaissance",
      "popis": "Montant et cause de la dette."
    },
    {
      "nazev": "Paiement",
      "popis": "En une fois ou par mensualités avec plan."
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
    "Plan de paiement en annexe",
    "Rappels des échéances"
  ],
  "hodiSe": [
    "quelqu’un vous doit de l’argent et l’admet",
    "vous voulez une preuve solide pour une éventuelle poursuite"
  ],
  "nehodiSe": [
    "le débiteur conteste la dette"
  ],
  "po": [
    {
      "nazev": "Original",
      "popis": "Le créancier garde l’original signé."
    },
    {
      "nazev": "Paiements",
      "popis": "Faites quittancer les paiements en espèces."
    }
  ],
  "faq": [
    {
      "q": "Qu’est-ce que la mainlevée provisoire ?",
      "a": "Si le débiteur fait opposition au commandement de payer, le créancier peut demander au juge de lever l’opposition sur la base de la reconnaissance de dette signée (art. 82 LP)."
    },
    {
      "q": "La reconnaissance interrompt-elle la prescription ?",
      "a": "Oui. La prescription est interrompue et un nouveau délai commence à courir (art. 135 CO)."
    },
    {
      "q": "Quelle différence avec la convention de paiement échelonné ?",
      "a": "La reconnaissance est signée surtout par le débiteur. La convention est signée par les deux parties et règle aussi la renonciation à la poursuite et la déchéance."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 17 et 135 CO et l’art. 82 LP.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la reconnaissance de dette en ligne – PDF", "description": "Reconnaissance de dette avec plan de paiement. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
