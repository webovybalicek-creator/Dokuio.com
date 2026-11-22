import type { StrankaDokumentu } from '../typy';
import { procurationSAN as sablona } from '../../sablony/ch-fr/procuration-service-des-automobiles';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Procuration pour le service des automobiles",
  nazevA: "la procuration pour le service des automobiles",
  katalog: {"popis": "Si quelqu’un d’autre va au service des automobiles.", "kategorie": "auto", "ilustrace": "plnamoc", "slova": ["procuration service des automobiles", "procuration immatriculation", "procuration changement de détenteur", "procuration dépôt plaques", "procuration SAN", "procuration OCV"]},
  protejsky: {"ch": "vollmacht-strassenverkehrsamt"},
  souvisejici: "auto",
  landing: {
  "title": "Procuration service des automobiles – modèle PDF gratuit",
  "description": "Modèle gratuit de procuration pour le service des automobiles : changement de détenteur, immatriculation, retrait de la circulation et dépôt des plaques. PDF et Word.",
  "perex": "Quand une autre personne se rend pour vous au service des automobiles du canton : immatriculer une voiture achetée, changer de détenteur ou déposer les plaques.",
  "obsahPopis": "Une procuration courte.",
  "obsah": [
    {
      "nazev": "Procuration",
      "popis": "Mandant, mandataire, démarche et véhicule."
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
    "Reprend les données du contrat de vente",
    "Contrôle du numéro de châssis",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous ne pouvez pas aller vous-même au guichet",
    "quelqu’un dépose les plaques pour vous"
  ],
  "nehodiSe": [
    "votre canton exige son propre formulaire – utilisez-le"
  ],
  "po": [
    {
      "nazev": "Documents",
      "popis": "Le mandataire apporte la procuration, sa pièce d’identité, une copie de la vôtre et le permis de circulation."
    }
  ],
  "faq": [
    {
      "q": "Chaque canton a-t-il son formulaire ?",
      "a": "De nombreux services des automobiles proposent leur propre procuration. Regardez d’abord sur le site de votre canton ; sinon ce modèle sert de procuration simple."
    },
    {
      "q": "Que faut-il pour immatriculer ?",
      "a": "Une attestation d’assurance valable, que l’assurance transmet en général par voie électronique, ainsi que le permis de circulation du détenteur précédent."
    },
    {
      "q": "Combien de temps la procuration est-elle valable ?",
      "a": "Jusqu’à la date indiquée, sinon jusqu’à l’accomplissement de la démarche ou jusqu’à sa révocation."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 32 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la procuration pour le service des automobiles – PDF", "description": "Procuration pour l’immatriculation ou le dépôt des plaques. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
