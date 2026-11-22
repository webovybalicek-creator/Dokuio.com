import type { StrankaDokumentu } from '../typy';
import { attestation as sablona } from '../../sablony/ch-fr/attestation-sur-l-honneur';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Attestation sur l’honneur",
  nazevA: "l’attestation sur l’honneur",
  katalog: {"popis": "Déclaration écrite pour l’école, la banque ou le bailleur.", "kategorie": "alltag", "ilustrace": "plnamoc", "slova": ["attestation sur l’honneur", "déclaration sur l’honneur", "modèle attestation", "attestation de domicile", "déclaration écrite"]},
  protejsky: {"ch": "erklaerung"},
  souvisejici: "alltag",
  landing: {
  "title": "Attestation sur l’honneur {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit d’attestation sur l’honneur : qui atteste, pour qui, dans quel but et quoi exactement. Pour l’école, la banque, le bailleur ou une autorité. PDF et Word.",
  "perex": "Quand une école, une banque, un bailleur ou un club vous demande une déclaration écrite. Vous écrivez le contenu, nous ajoutons la forme.",
  "obsahPopis": "Une déclaration courte.",
  "obsah": [
    {
      "nazev": "Personne",
      "popis": "Nom, date de naissance, adresse."
    },
    {
      "nazev": "Attestation",
      "popis": "Destinataire, but et texte."
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
    "un organisme vous demande une déclaration écrite"
  ],
  "nehodiSe": [
    "une autorité a son propre formulaire – utilisez-le"
  ],
  "po": [
    {
      "nazev": "Copie",
      "popis": "Gardez une copie pour vos dossiers."
    }
  ],
  "faq": [
    {
      "q": "Une attestation sur l’honneur a-t-elle une valeur ?",
      "a": "Elle prouve ce que vous déclarez. De fausses indications peuvent avoir des conséquences civiles et pénales."
    },
    {
      "q": "Faut-il faire légaliser la signature ?",
      "a": "Seulement si l’organisme l’exige. Dans ce cas, signez devant le notaire ou, selon le canton, à la commune."
    },
    {
      "q": "Comment formuler le texte ?",
      "a": "Concrètement : qui, quoi, depuis quand – p. ex. « que j’habite depuis le 1.1.2025 dans le logement … »."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon le Code des obligations suisse (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir l’attestation sur l’honneur en ligne – PDF", "description": "Attestation sur l’honneur pour une école, une banque ou un bailleur. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
