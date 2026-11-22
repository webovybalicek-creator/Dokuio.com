import type { StrankaDokumentu } from '../typy';
import { paiementEchelonne as sablona } from '../../sablony/ch-fr/convention-paiement-echelonne';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Convention de paiement échelonné",
  nazevA: "la convention de paiement échelonné",
  katalog: {"popis": "Payer une dette par mensualités, signée par les deux.", "kategorie": "geld", "ilustrace": "dluh", "slova": ["convention de paiement échelonné", "plan de paiement", "arrangement de paiement", "paiement par acomptes", "échelonnement dette", "plan de remboursement dette"]},
  protejsky: {"ch": "abzahlungsvereinbarung"},
  souvisejici: "geld",
  landing: {
  "title": "Convention de paiement échelonné – modèle PDF gratuit",
  "description": "Modèle gratuit de convention de paiement échelonné : reconnaissance de dette, mensualités avec plan, intérêts facultatifs, clause de déchéance. Selon le CO, PDF et Word.",
  "perex": "Une dette existe déjà et le débiteur veut la payer par mensualités. La convention fixe le plan, la reconnaissance de dette et ce qui se passe en cas de retard.",
  "obsahPopis": "Les articles de la convention.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Créancier et débiteur."
    },
    {
      "nazev": "Dette",
      "popis": "Montant, cause, reconnaissance."
    },
    {
      "nazev": "Mensualités",
      "popis": "Montant, échéance, intérêts."
    },
    {
      "nazev": "Déchéance",
      "popis": "Quand tout le solde devient exigible."
    },
    {
      "nazev": "Plan",
      "popis": "Annexe avec chaque mensualité."
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
    "Plan de paiement calculé automatiquement",
    "Rappels mensuels dans le calendrier",
    "Montant en lettres"
  ],
  "hodiSe": [
    "un client ou un proche vous doit de l’argent et propose des mensualités",
    "vous êtes débiteur et voulez un plan réaliste"
  ],
  "nehodiSe": [
    "l’argent n’est prêté que maintenant – prenez le contrat de prêt"
  ],
  "po": [
    {
      "nazev": "Paiements",
      "popis": "Mensualités par virement avec mention « mensualité 3/10 »."
    },
    {
      "nazev": "Fin",
      "popis": "Après la dernière mensualité, demandez une confirmation d’extinction de la dette."
    }
  ],
  "faq": [
    {
      "q": "Que signifie la clause de déchéance ?",
      "a": "En cas de retard, tout le solde devient immédiatement exigible. Un délai de grâce de 14 jours évite qu’un petit retard déclenche tout."
    },
    {
      "q": "Le créancier peut-il encore poursuivre ?",
      "a": "Tant que les mensualités sont payées, il y renonce. En cas de demeure, il peut introduire une poursuite et demander la mainlevée provisoire."
    },
    {
      "q": "La loi sur le crédit à la consommation s’applique-t-elle ?",
      "a": "Pas entre particuliers. Une entreprise qui accorde un délai de paiement avec intérêts ou frais doit la respecter ; les mensualités sans intérêts ni frais en sont exclues."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 17, 104 et 135 CO, l’art. 82 LP et l’art. 7 LCC.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la convention de paiement échelonné – PDF", "description": "Convention de mensualités avec plan et clause de déchéance. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
