import type { StrankaDokumentu } from '../typy';
import { resiliationBail as sablona } from '../../sablony/ch-fr/resiliation-bail';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Résiliation du bail",
  nazevA: "la résiliation du bail",
  katalog: {"popis": "Congé donné par le locataire.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["résiliation bail", "lettre de résiliation bail", "résilier son bail", "congé locataire", "résiliation bail locataire suisse", "locataire de remplacement"]},
  protejsky: {"ch": "kuendigung-mietvertrag"},
  souvisejici: "resiliations",
  landing: {
  "title": "Résiliation de bail {rok} – modèle de lettre PDF gratuit",
  "description": "Modèle gratuit de résiliation du bail par le locataire : préavis de trois mois pour un terme, logement de famille, garantie. Selon l’art. 266c CO, PDF et Word.",
  "perex": "Vous voulez quitter votre appartement. La lettre respecte le préavis de trois mois pour un terme, demande une date d’état des lieux et la restitution de la garantie.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Destinataire",
      "popis": "Bailleur ou gérance."
    },
    {
      "nazev": "Résiliation",
      "popis": "Logement, date du contrat, terme."
    },
    {
      "nazev": "Garantie",
      "popis": "IBAN pour la restitution."
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
    "Rappel de la fin du bail",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous résiliez votre bail en tant que locataire"
  ],
  "nehodiSe": [
    "vous voulez partir hors terme – proposez un locataire de remplacement ou une convention"
  ],
  "po": [
    {
      "nazev": "Envoi",
      "popis": "Recommandé, assez tôt avant le début du délai."
    },
    {
      "nazev": "Départ",
      "popis": "Fixez l’état des lieux de sortie et nettoyez le logement."
    }
  ],
  "faq": [
    {
      "q": "Quel est le délai pour un appartement ?",
      "a": "Au moins trois mois pour un terme prévu par le contrat ou usuel dans la localité (art. 266c CO). Vérifiez votre contrat de bail."
    },
    {
      "q": "Que faire pour partir plus tôt ?",
      "a": "Présentez un locataire de remplacement solvable et acceptable : vous êtes alors libéré de vos obligations (art. 264 CO). Ou convenez d’une fin d’un commun accord."
    },
    {
      "q": "Qui doit signer pour un logement de famille ?",
      "a": "Les deux époux ou partenaires enregistrés (art. 266m CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 264, 266c, 266l et 266m du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la lettre de résiliation du bail – PDF", "description": "Résiliation du bail par le locataire. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
