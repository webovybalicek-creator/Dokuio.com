import type { StrankaDokumentu } from '../typy';
import { venteMoto as sablona } from '../../sablony/ch-fr/contrat-de-vente-moto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contrat de vente de moto",
  nazevA: "le contrat de vente de moto",
  katalog: {"popis": "Moto, scooter ou quad.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["contrat de vente moto", "vente moto entre particuliers", "contrat vente scooter", "vendre sa moto", "acheter moto occasion"]},
  protejsky: {"ch": "kaufvertrag-motorrad"},
  souvisejici: "auto",
  landing: {
  "title": "Contrat de vente moto {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de contrat de vente d’une moto, d’un scooter ou d’un quad d’occasion : numéro de châssis, accessoires, transformations, garantie. PDF et Word.",
  "perex": "Pour une moto, un scooter ou un quad vendu entre particuliers. Notez les accessoires et transformations – valises, échappement, pare-carters – et vérifiez qu’ils figurent au permis de circulation.",
  "obsahPopis": "Les articles du contrat de vente de la moto.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Vendeur et acheteur."
    },
    {
      "nazev": "Moto",
      "popis": "Marque, numéro de châssis sur le cadre, matricule."
    },
    {
      "nazev": "Accessoires",
      "popis": "Valises, échappement, transformations."
    },
    {
      "nazev": "Garantie",
      "popis": "Exclusion usuelle entre particuliers."
    },
    {
      "nazev": "Prix et remise",
      "popis": "Montant en lettres et heure."
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
    "Conseils pour les transformations"
  ],
  "hodiSe": [
    "vous vendez ou achetez une moto ou un scooter d’occasion à un particulier"
  ],
  "nehodiSe": [
    "vous achetez chez un concessionnaire"
  ],
  "po": [
    {
      "nazev": "Transformations",
      "popis": "Vérifiez avec l’acheteur que l’échappement ou les autres pièces soumises à autorisation sont inscrits au permis de circulation."
    },
    {
      "nazev": "Plaques",
      "popis": "Les plaques de moto restent aussi au vendeur."
    }
  ],
  "faq": [
    {
      "q": "Où se trouve le numéro de châssis d’une moto ?",
      "a": "En général frappé sur le cadre près de la colonne de direction ; il figure aussi au champ 23 du permis de circulation."
    },
    {
      "q": "Les accessoires font-ils partie de la vente ?",
      "a": "Seulement ce qui est écrit. Inscrivez valises, top-case, housse ou deuxième jeu de pneus dans le contrat pour éviter un litige."
    },
    {
      "q": "Un échappement non homologué pose-t-il problème ?",
      "a": "Oui : sans inscription au permis de circulation, la moto peut être refusée à l’expertise. Indiquez-le honnêtement comme défaut connu."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 184 ss du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le contrat de vente de moto en ligne – PDF", "description": "Contrat de vente d’une moto ou d’un scooter d’occasion. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
