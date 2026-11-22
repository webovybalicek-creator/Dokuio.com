import type { StrankaDokumentu } from '../typy';
import { etatDesLieux as sablona } from '../../sablony/ch-fr/etat-des-lieux';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "État des lieux",
  nazevA: "l’état des lieux",
  katalog: {"popis": "Compteurs, défauts et clés.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["état des lieux", "état des lieux appartement", "état des lieux de sortie", "état des lieux d’entrée", "procès-verbal état des lieux", "remise appartement"]},
  protejsky: {"ch": "uebergabeprotokoll-wohnung"},
  souvisejici: "wohnen",
  landing: {
  "title": "État des lieux appartement {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit d’état des lieux d’entrée ou de sortie : relevés des compteurs, défauts pièce par pièce, équipement, clés et conventions. PDF et Word.",
  "perex": "À la remise ou à la restitution d’un appartement. L’état des lieux consigne les compteurs, les défauts et les clés – et évite les litiges sur la garantie.",
  "obsahPopis": "Un procès-verbal court.",
  "obsah": [
    {
      "nazev": "Logement",
      "popis": "Parties, adresse, entrée ou sortie."
    },
    {
      "nazev": "Compteurs",
      "popis": "Électricité, gaz, eau, chauffage."
    },
    {
      "nazev": "État",
      "popis": "Défauts, équipement, clés, conventions."
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
    "Reprend les données du contrat de bail",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous remettez ou reprenez un appartement"
  ],
  "nehodiSe": [
    "il vous faut aussi le contrat – prenez le contrat de bail"
  ],
  "po": [
    {
      "nazev": "Photos",
      "popis": "Photographiez les compteurs et les défauts."
    },
    {
      "nazev": "Exemplaires",
      "popis": "Chaque partie garde un exemplaire signé."
    }
  ],
  "faq": [
    {
      "q": "Le bailleur doit-il signaler les défauts tout de suite ?",
      "a": "Oui. À la restitution, il doit vérifier l’état et aviser immédiatement le locataire des défauts ; sinon il perd ses droits, sauf pour les défauts cachés (art. 267a CO)."
    },
    {
      "q": "Le locataire répond-il de l’usure ?",
      "a": "Non, pas de l’usure résultant d’un usage normal. Il répond des dégâts qui dépassent cette usure."
    },
    {
      "q": "Que faire si un défaut apparaît après l’entrée ?",
      "a": "Signalez-le par écrit au bailleur dès que vous le découvrez, idéalement dans les premiers jours."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 253 ss et 267a du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir l’état des lieux en ligne – PDF", "description": "État des lieux d’entrée ou de sortie d’un appartement. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
