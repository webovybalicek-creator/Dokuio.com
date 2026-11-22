import type { StrankaDokumentu } from '../typy';
import { contratEntreprise as sablona } from '../../sablony/ch-fr/contrat-d-entreprise';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat d’entreprise",
  nazevA: "le contrat d’entreprise",
  katalog: {"popis": "Artisan, rénovation ou réparation.", "kategorie": "dienst", "ilustrace": "protokol", "slova": ["contrat d’entreprise", "contrat artisan", "contrat de travaux", "devis artisan", "prix forfaitaire travaux", "réception de l’ouvrage"]},
  protejsky: {"ch": "werkvertrag"},
  souvisejici: "dienst",
  landing: {
  "title": "Contrat d’entreprise {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat d’entreprise pour un artisan : ouvrage, délais, prix ferme ou devis approximatif, acompte, réception et défauts. PDF et Word.",
  "perex": "Pour confier des travaux à un artisan – peinture, carrelage, réparation. Le contrat fixe l’ouvrage, les délais, le prix et la réception avec réserve des défauts.",
  "obsahPopis": "Les articles du contrat d’entreprise (art. 363 ss CO).",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Maître de l’ouvrage et entrepreneur."
    },
    {
      "nazev": "Ouvrage",
      "popis": "Description, lieu, matériaux."
    },
    {
      "nazev": "Délais",
      "popis": "Début et achèvement."
    },
    {
      "nazev": "Prix",
      "popis": "Prix ferme ou devis approximatif, acompte."
    },
    {
      "nazev": "Réception et défauts",
      "popis": "Vérification, avis, prescription."
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
    "Rappels du début et de la réception",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous confiez des travaux à un artisan ou à une petite entreprise"
  ],
  "nehodiSe": [
    "vous construisez une maison ou faites de grandes transformations"
  ],
  "po": [
    {
      "nazev": "Acompte",
      "popis": "Par virement ou contre quittance."
    },
    {
      "nazev": "Réception",
      "popis": "Vérifiez l’ouvrage et réservez les défauts par écrit."
    }
  ],
  "faq": [
    {
      "q": "Quelle différence entre prix ferme et devis approximatif ?",
      "a": "Avec un prix ferme, l’entrepreneur ne peut pas demander plus (art. 373 CO). Avec un devis approximatif, un dépassement excessif vous permet de vous départir du contrat (art. 375 CO)."
    },
    {
      "q": "Dans quel délai signaler un défaut ?",
      "a": "Immédiatement après la vérification ; pour un ouvrage immobilier, dans les 60 jours (art. 367 CO)."
    },
    {
      "q": "Combien de temps durent les droits pour les défauts ?",
      "a": "2 ans dès la réception, 5 ans pour un ouvrage immobilier (art. 371 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 363 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat d’entreprise en ligne – PDF", "description": "Contrat avec un artisan : ouvrage, prix et réception. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
