import type { StrankaDokumentu } from '../typy';
import { miseEnDemeure as sablona } from '../../sablony/ch-fr/mise-en-demeure';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mise en demeure",
  nazevA: "la mise en demeure",
  katalog: {"popis": "Sommation de payer avec un délai.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["mise en demeure", "lettre de mise en demeure", "rappel de paiement", "sommation de payer", "dernier rappel avant poursuite", "intérêt moratoire"]},
  protejsky: {"ch": "mahnung"},
  souvisejici: "geld",
  landing: {
  "title": "Mise en demeure de payer {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit de mise en demeure : créance, délai, intérêt moratoire de 5 %, premier ou dernier rappel avant poursuite. Selon les art. 102 et 104 CO. PDF et Word.",
  "perex": "Quand une facture ou un prêt n’est pas payé. La lettre fixe un délai, met le débiteur en demeure et annonce la poursuite en cas de dernier rappel.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Créance",
      "popis": "Montant, échéance, cause."
    },
    {
      "nazev": "Délai et compte",
      "popis": "Jusqu’à quand et où payer."
    },
    {
      "nazev": "Intérêt moratoire",
      "popis": "5 % l’an selon l’art. 104 CO."
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
    "Rappel de la fin du délai",
    "PDF et Word"
  ],
  "hodiSe": [
    "une facture ou un prêt n’a pas été payé",
    "vous voulez annoncer la poursuite"
  ],
  "nehodiSe": [
    "la créance est contestée – cherchez d’abord un accord"
  ],
  "po": [
    {
      "nazev": "Envoi",
      "popis": "Recommandé, avec copie et récépissé."
    },
    {
      "nazev": "Ensuite",
      "popis": "Sans paiement : réquisition de poursuite à l’office des poursuites du domicile du débiteur."
    }
  ],
  "faq": [
    {
      "q": "Faut-il une mise en demeure ?",
      "a": "Si un jour d’échéance précis a été convenu, la demeure survient sans mise en demeure. Sinon, c’est la mise en demeure qui fait courir la demeure (art. 102 CO)."
    },
    {
      "q": "Quel intérêt moratoire puis-je demander ?",
      "a": "5 % l’an sur les dettes d’argent dès la demeure, même si un intérêt contractuel plus bas avait été convenu (art. 104 CO)."
    },
    {
      "q": "Où introduire une poursuite ?",
      "a": "À l’office des poursuites du domicile du débiteur, avec une réquisition de poursuite."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 102 et 104 du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la mise en demeure en ligne – PDF", "description": "Mise en demeure de payer avec délai et intérêt moratoire. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
