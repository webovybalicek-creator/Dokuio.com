import type { StrankaDokumentu } from '../typy';
import { voyageMineur as sablona } from '../../sablony/ch-fr/autorisation-voyage-mineur';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Autorisation de voyage pour mineur",
  nazevA: "l’autorisation de voyage pour mineur",
  katalog: {"popis": "L’enfant voyage à l’étranger sans ses parents ou avec un seul parent.", "kategorie": "familie", "ilustrace": "plnamoc", "slova": ["autorisation de voyage mineur", "autorisation parentale voyage", "déclaration de consentement voyage enfant", "enfant voyage seul", "autorisation sortie du territoire suisse"]},
  protejsky: {"ch": "einverstaendniserklaerung-reise-kind"},
  souvisejici: "familie",
  landing: {
  "title": "Autorisation de voyage mineur {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit d’autorisation de voyage pour un enfant mineur : parents, enfant, accompagnant, destination, dates, téléphone. Selon le DFAE. PDF et Word.",
  "perex": "Votre enfant voyage à l’étranger avec un seul parent, avec ses grands-parents ou seul. Le DFAE recommande vivement une déclaration de consentement signée par les parents.",
  "obsahPopis": "Une déclaration courte.",
  "obsah": [
    {
      "nazev": "Parents",
      "popis": "Noms, pièces d’identité, téléphones."
    },
    {
      "nazev": "Enfant",
      "popis": "Nom, date de naissance, pièce d’identité."
    },
    {
      "nazev": "Voyage",
      "popis": "Accompagnant, destination, dates, motif."
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
    "l’enfant voyage avec un seul parent ou sans ses parents",
    "l’enfant part en camp ou en séjour linguistique"
  ],
  "nehodiSe": [
    "le pays de destination impose son propre formulaire",
    "il s’agit d’un déménagement à l’étranger"
  ],
  "po": [
    {
      "nazev": "Légalisation",
      "popis": "Si le pays l’exige, faites légaliser la signature à la commune ou chez un notaire."
    },
    {
      "nazev": "Documents",
      "popis": "L’enfant emporte l’original et son passeport ou sa carte d’identité."
    }
  ],
  "faq": [
    {
      "q": "L’autorisation est-elle obligatoire ?",
      "a": "Pas en Suisse, mais certains pays l’exigent à l’entrée ou à la sortie. Le DFAE la recommande vivement lorsque l’enfant ne voyage pas avec ses représentants légaux."
    },
    {
      "q": "Faut-il faire légaliser la signature ?",
      "a": "Seulement si le pays de destination l’exige ou pour plus de sécurité. La commune de domicile ou un notaire peut légaliser la signature."
    },
    {
      "q": "Qui doit signer ?",
      "a": "Le ou les parents titulaires de l’autorité parentale qui n’accompagnent pas l’enfant."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon la recommandation du DFAE et les informations de l’Office fédéral de la justice.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir l’autorisation de voyage pour mineur – PDF", "description": "Autorisation des parents pour le voyage d’un enfant à l’étranger. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
