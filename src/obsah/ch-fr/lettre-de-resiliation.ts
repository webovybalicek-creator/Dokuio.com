import type { StrankaDokumentu } from '../typy';
import { resiliation as sablona } from '../../sablony/ch-fr/lettre-de-resiliation';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lettre de résiliation",
  nazevA: "la lettre de résiliation",
  katalog: {"popis": "Résilier mobile, assurance, fitness ou abonnement.", "kategorie": "alltag", "ilustrace": "protokol", "slova": ["lettre de résiliation", "résiliation assurance", "résiliation caisse maladie", "résilier abonnement", "résiliation fitness", "résiliation mandat", "résilier contrat suisse"]},
  protejsky: {"ch": "kuendigung-vertrag"},
  souvisejici: "resiliations",
  landing: {
  "title": "Lettre de résiliation {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de lettre de résiliation : assurance (art. 35a LCA), caisse-maladie au 30 novembre, mobile, fitness, électricité, mandat. PDF et Word.",
  "perex": "Pour résilier un contrat : assurance, caisse-maladie, mobile, internet, fitness, abonnement ou mandat. Choisissez la variante – les règles applicables s’affichent dans les conseils.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Expéditeur et destinataire",
      "popis": "Vous et le fournisseur."
    },
    {
      "nazev": "Contrat",
      "popis": "Numéro et objet."
    },
    {
      "nazev": "Variante",
      "popis": "Prochaine échéance, date, LCA, caisse-maladie, mandat."
    },
    {
      "nazev": "Demandes",
      "popis": "Confirmation, décompte, appareils."
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
    "Variantes pour assurance, caisse-maladie et mandat",
    "Rappels de la confirmation et de la fin",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous résiliez un abonnement, une assurance ou un mandat",
    "vous déménagez et annoncez votre départ"
  ],
  "nehodiSe": [
    "vous résiliez votre bail ou votre emploi – il y a des modèles séparés"
  ],
  "po": [
    {
      "nazev": "Envoi",
      "popis": "Recommandé ou par le canal prévu par les conditions générales."
    },
    {
      "nazev": "Paiements",
      "popis": "Arrêtez les recouvrements seulement après le décompte final."
    }
  ],
  "faq": [
    {
      "q": "Quand puis-je résilier une assurance ?",
      "a": "Pour la fin de la troisième année ou de chacune des années suivantes, avec trois mois de préavis (art. 35a LCA). Le contrat peut prévoir des délais plus courts."
    },
    {
      "q": "Quel est le délai pour la caisse-maladie ?",
      "a": "Pour l’assurance de base, votre lettre doit arriver au plus tard le 30 novembre. Avec une franchise de 300 francs dans le modèle standard, aussi pour la fin juin."
    },
    {
      "q": "Peut-on mettre fin à un mandat à tout moment ?",
      "a": "Oui, un mandat peut être révoqué en tout temps ; en temps inopportun, il faut réparer le dommage (art. 404 CO)."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon la LCA, les art. 377 et 404 CO et les informations de ch.ch et de l’ElCom.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la lettre de résiliation en ligne – PDF", "description": "Résiliation d’un contrat, d’une assurance ou d’un abonnement. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
