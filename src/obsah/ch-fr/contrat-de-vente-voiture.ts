import type { StrankaDokumentu } from '../typy';
import { venteVoiture as sablona } from '../../sablony/ch-fr/contrat-de-vente-voiture';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de vente de voiture",
  nazevA: "le contrat de vente de voiture",
  katalog: {"popis": "Vente d’une voiture d’occasion entre particuliers.", "kategorie": "auto", "ilustrace": "auto", "slova": ["contrat de vente voiture", "contrat de vente véhicule occasion", "vente voiture entre particuliers", "contrat vente auto suisse", "vendre sa voiture", "acheter voiture occasion", "exclusion de garantie voiture"]},
  protejsky: {"ch": "kaufvertrag-auto"},
  souvisejici: "auto",
  landing: {
  "title": "Contrat de vente voiture {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat de vente d’une voiture d’occasion entre particuliers selon le CO : numéro de châssis, matricule, kilométrage, défauts, garantie. PDF et Word.",
  "perex": "Pour vendre une voiture d’occasion entre particuliers en Suisse romande. Le contrat fixe le prix, l’état, la garantie et l’heure exacte de la remise ; les plaques restent au vendeur.",
  "obsahPopis": "Les articles du contrat de vente du véhicule.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Vendeur et acheteur avec pièce d’identité."
    },
    {
      "nazev": "Véhicule",
      "popis": "Marque, numéro de châssis, matricule, expertise."
    },
    {
      "nazev": "État",
      "popis": "Kilométrage, accidents et défauts connus."
    },
    {
      "nazev": "Garantie",
      "popis": "Exclue entre particuliers ou garantie légale."
    },
    {
      "nazev": "Prix et remise",
      "popis": "Montant en lettres, espèces ou virement, heure."
    },
    {
      "nazev": "Plaques et immatriculation",
      "popis": "Les plaques restent au vendeur."
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
    "Contrôle du numéro de châssis",
    "Le procès-verbal de remise reprend les données",
    "Dossier complet avec procuration et quittance"
  ],
  "hodiSe": [
    "vous vendez ou achetez une voiture d’occasion à un particulier",
    "vous voulez fixer par écrit le prix, l’état et l’heure de la remise"
  ],
  "nehodiSe": [
    "vous achetez chez un garagiste – il a son propre contrat",
    "la voiture est en leasing sans accord de la société de leasing"
  ],
  "po": [
    {
      "nazev": "Plaques et assurance",
      "popis": "Le vendeur garde les plaques, les utilise pour un autre véhicule ou les dépose au service des automobiles, et informe son assurance."
    },
    {
      "nazev": "Immatriculation",
      "popis": "L’acheteur immatricule la voiture à son nom avec sa propre attestation d’assurance avant de rouler."
    },
    {
      "nazev": "Procès-verbal",
      "popis": "Notez l’heure, le kilométrage et les dommages dans le procès-verbal de remise."
    }
  ],
  "faq": [
    {
      "q": "Les plaques suivent-elles la voiture ?",
      "a": "Non. En Suisse, les plaques appartiennent au détenteur. Le vendeur les garde ; l’acheteur reçoit de nouvelles plaques au service des automobiles de son canton."
    },
    {
      "q": "Peut-on exclure la garantie ?",
      "a": "Oui, entre particuliers c’est usuel. L’exclusion ne vaut toutefois pas pour les défauts que le vendeur a frauduleusement dissimulés (art. 199 CO)."
    },
    {
      "q": "Faut-il une nouvelle expertise ?",
      "a": "Cela dépend du canton et de la date de la dernière expertise. Renseignez-vous auprès du service des automobiles avant la vente."
    },
    {
      "q": "Paiement en espèces ou virement ?",
      "a": "Les deux sont possibles. Pour un montant élevé, le virement avant la remise des clés est la meilleure preuve ; en espèces, faites signer une quittance."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 184 ss du Code des obligations (CO) et les informations de ch.ch sur l’immatriculation.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de vente de voiture en ligne – PDF", "description": "Assistant pour le contrat de vente d’une voiture d’occasion entre particuliers. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
