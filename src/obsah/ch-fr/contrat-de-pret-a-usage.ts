import type { StrankaDokumentu } from '../typy';
import { pretUsage as sablona } from '../../sablony/ch-fr/contrat-de-pret-a-usage';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de prêt à usage",
  nazevA: "le contrat de prêt à usage",
  katalog: {"popis": "Prêter une chose gratuitement.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["contrat de prêt à usage", "prêt d’une chose", "prêter sa remorque", "prêt gratuit objet", "commodat"]},
  protejsky: {"ch": "leihvertrag"},
  souvisejici: "alltag",
  landing: {
  "title": "Contrat de prêt à usage {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit de contrat de prêt à usage : chose prêtée, état à la remise, durée ou usage, restitution et frais d’entretien. Selon les art. 305 ss CO, PDF et Word.",
  "perex": "Vous prêtez gratuitement une chose – remorque, outil, matériel de camping. Le contrat fixe l’état, l’usage prévu et la date de restitution.",
  "obsahPopis": "Les articles du prêt à usage.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Prêteur et emprunteur."
    },
    {
      "nazev": "Chose",
      "popis": "Description, état, valeur."
    },
    {
      "nazev": "Durée et restitution",
      "popis": "Date ou usage, lieu de restitution."
    },
    {
      "nazev": "Usage",
      "popis": "Interdiction de céder, frais d’entretien."
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
    "Rappel de la restitution",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous prêtez gratuitement une chose de valeur"
  ],
  "nehodiSe": [
    "vous demandez un loyer – c’est un bail",
    "vous prêtez de l’argent – prenez le contrat de prêt"
  ],
  "po": [
    {
      "nazev": "Remise",
      "popis": "Examinez la chose ensemble et notez les défauts."
    },
    {
      "nazev": "Restitution",
      "popis": "Faites confirmer l’état au retour."
    }
  ],
  "faq": [
    {
      "q": "Quand puis-je reprendre la chose ?",
      "a": "À la date convenue ou une fois l’usage accompli. Sans durée ni usage déterminés, en tout temps (art. 310 CO)."
    },
    {
      "q": "Qui paie les frais d’entretien ?",
      "a": "L’emprunteur supporte les frais ordinaires d’entretien, p. ex. le plein ou le nettoyage (art. 307 CO)."
    },
    {
      "q": "L’emprunteur peut-il prêter la chose à un ami ?",
      "a": "Non, pas sans votre autorisation. S’il le fait, il répond même du cas fortuit (art. 306 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 305 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de prêt à usage en ligne – PDF", "description": "Prêt gratuit d’une chose avec restitution. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
