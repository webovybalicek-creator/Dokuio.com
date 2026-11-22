import type { StrankaDokumentu } from '../typy';
import { venteParticuliers as sablona } from '../../sablony/ch-fr/contrat-de-vente-entre-particuliers';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de vente entre particuliers",
  nazevA: "le contrat de vente entre particuliers",
  katalog: {"popis": "Vendre un objet d’occasion entre particuliers.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["contrat de vente entre particuliers", "contrat de vente objet", "vente vélo occasion", "vente d’occasion annonce", "contrat de vente meuble"]},
  protejsky: {"ch": "kaufvertrag-privat"},
  souvisejici: "alltag",
  landing: {
  "title": "Contrat de vente entre particuliers – modèle PDF gratuit",
  "description": "Modèle gratuit de contrat de vente d’un objet d’occasion entre particuliers : description, défauts connus, prix, paiement, exclusion de garantie. PDF et Word.",
  "perex": "Pour vendre un vélo, un appareil, un meuble ou du matériel d’occasion après une annonce. Le contrat décrit l’objet, les défauts connus et le paiement.",
  "obsahPopis": "Les articles du contrat de vente.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Vendeur et acheteur."
    },
    {
      "nazev": "Objet",
      "popis": "Description, numéro de série, défauts."
    },
    {
      "nazev": "Prix et remise",
      "popis": "Espèces ou virement."
    },
    {
      "nazev": "Garantie",
      "popis": "Exclue ou légale."
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
    "PDF et Word"
  ],
  "hodiSe": [
    "vous vendez un objet d’occasion après une annonce",
    "vous achetez un objet de valeur à un particulier"
  ],
  "nehodiSe": [
    "vous vendez une voiture ou une moto – il y a un modèle séparé"
  ],
  "po": [
    {
      "nazev": "Examen",
      "popis": "Examinez l’objet ensemble avant de signer."
    },
    {
      "nazev": "Espèces",
      "popis": "En cas de paiement en espèces, établissez une quittance."
    }
  ],
  "faq": [
    {
      "q": "Puis-je exclure la garantie ?",
      "a": "Oui, entre particuliers c’est usuel. L’exclusion ne vaut pas pour les défauts dissimulés frauduleusement (art. 199 CO)."
    },
    {
      "q": "Comment éviter les arnaques ?",
      "a": "Ne remettez l’objet qu’après réception de l’argent, méfiez-vous des faux justificatifs de paiement et des liens de paiement inconnus."
    },
    {
      "q": "L’acheteur doit-il vérifier l’objet ?",
      "a": "Oui, à la remise ; il doit signaler immédiatement les défauts (art. 201 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 184 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de vente entre particuliers – PDF", "description": "Vente d’un objet d’occasion entre particuliers. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
