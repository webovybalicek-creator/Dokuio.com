import type { StrankaDokumentu } from '../typy';
import { procuration as sablona } from '../../sablony/ch-fr/procuration';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Procuration",
  nazevA: "la procuration",
  katalog: {"popis": "Pour qu’une personne règle une affaire à votre place.", "kategorie": "alltag", "ilustrace": "plnamoc", "slova": ["procuration", "modèle procuration", "procuration simple", "procuration retrait recommandé", "procuration poste", "procuration suisse"]},
  protejsky: {"ch": "vollmacht"},
  souvisejici: "familie",
  landing: {
  "title": "Procuration {rok} – modèle PDF gratuit à remplir (Suisse)",
  "description": "Modèle gratuit de procuration simple selon les art. 32 ss CO : mandant, mandataire, étendue concrète et durée. Pour la poste, l’école ou une démarche. PDF et Word.",
  "perex": "Pour qu’une personne de confiance règle une affaire précise à votre place – retirer un recommandé, signer un document, représenter vous lors d’une démarche.",
  "obsahPopis": "Une procuration courte.",
  "obsah": [
    {
      "nazev": "Procuration",
      "popis": "Mandant, mandataire, étendue et durée."
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
    "Rappel de l’expiration",
    "PDF et Word"
  ],
  "hodiSe": [
    "quelqu’un doit régler une affaire concrète à votre place"
  ],
  "nehodiSe": [
    "il s’agit d’un immeuble ou d’une banque – formes particulières",
    "vous voulez régler votre propre incapacité – mandat pour cause d’inaptitude"
  ],
  "po": [
    {
      "nazev": "Original",
      "popis": "Le mandataire présente l’original avec sa pièce d’identité."
    }
  ],
  "faq": [
    {
      "q": "Faut-il légaliser la signature ?",
      "a": "Pour une procuration simple, non. Pour un immeuble, une société ou certaines autorités, une légalisation ou un formulaire particulier peut être exigé."
    },
    {
      "q": "Une procuration générale est-elle acceptée ?",
      "a": "Souvent non. Décrivez l’affaire concrètement – une procuration précise est plus facilement acceptée."
    },
    {
      "q": "Que faire pour le cas de mon incapacité ?",
      "a": "Il faut un mandat pour cause d’inaptitude (art. 360 ss CC), soumis à une forme plus stricte. Ce modèle ne le remplace pas."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 32 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la procuration en ligne – PDF", "description": "Procuration simple pour une affaire précise. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
