import type { StrankaDokumentu } from '../typy';
import { pvVehicule as sablona } from '../../sablony/ch-fr/proces-verbal-remise-vehicule';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Procès-verbal de remise du véhicule",
  nazevA: "le procès-verbal de remise du véhicule",
  katalog: {"popis": "Kilométrage, dommages et clés à la remise.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["procès-verbal de remise véhicule", "pv remise voiture", "état du véhicule à la remise", "remise voiture vente", "prêt de voiture"]},
  protejsky: {"ch": "uebergabeprotokoll-fahrzeug"},
  souvisejici: "auto",
  landing: {
  "title": "Procès-verbal de remise véhicule {rok} – modèle PDF gratuit",
  "description": "Modèle gratuit de procès-verbal de remise d’un véhicule : heure exacte, kilométrage, réservoir, clés, documents et dommages. Pour une vente ou un prêt. PDF et Word.",
  "perex": "Consigne l’état du véhicule et l’heure exacte de la remise – utile si une amende ou un accident survient juste après la vente ou pendant un prêt.",
  "obsahPopis": "Un procès-verbal court.",
  "obsah": [
    {
      "nazev": "Remise",
      "popis": "Qui, à qui, quand et à quelle heure."
    },
    {
      "nazev": "État",
      "popis": "Kilométrage, réservoir, dommages."
    },
    {
      "nazev": "Clés et documents",
      "popis": "Ce qui est remis avec le véhicule."
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
    "vous vendez ou prêtez votre voiture",
    "vous récupérez un véhicule prêté"
  ],
  "nehodiSe": [
    "il vous faut aussi le contrat – prenez le contrat de vente"
  ],
  "po": [
    {
      "nazev": "Photos",
      "popis": "Photographiez le véhicule sous tous les angles et le compteur."
    },
    {
      "nazev": "Exemplaires",
      "popis": "Chaque partie garde le sien."
    }
  ],
  "faq": [
    {
      "q": "Pourquoi noter l’heure ?",
      "a": "L’heure montre qui avait le véhicule au moment d’une amende ou d’un accident. Sans elle, il est difficile de prouver que la voiture n’était plus chez vous."
    },
    {
      "q": "Le procès-verbal remplace-t-il le contrat ?",
      "a": "Non. Il complète le contrat de vente ou de prêt en décrivant l’état au moment précis de la remise."
    },
    {
      "q": "Que faire des plaques lors d’une vente ?",
      "a": "Le vendeur les démonte et les garde pour un autre véhicule ou les dépose au service des automobiles."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon le Code des obligations suisse (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir le procès-verbal de remise du véhicule – PDF", "description": "Procès-verbal de remise d’un véhicule avec l’heure. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
