import type { StrankaDokumentu } from '../typy';
import { demission as sablona } from '../../sablony/ch-fr/lettre-de-demission';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Lettre de démission",
  nazevA: "la lettre de démission",
  katalog: {"popis": "Démissionner en tant qu’employé(e).", "kategorie": "arbeit", "ilustrace": "protokol", "slova": ["lettre de démission", "modèle lettre de démission", "démission suisse", "délai de congé", "démission temps d’essai", "certificat de travail"]},
  protejsky: {"ch": "kuendigung-arbeitsvertrag"},
  souvisejici: "resiliations",
  landing: {
  "title": "Lettre de démission {rok} – modèle PDF gratuit (Suisse)",
  "description": "Modèle gratuit de lettre de démission selon le CO : temps d’essai ou résiliation ordinaire, fin de mois, certificat de travail, vacances restantes. PDF et Word.",
  "perex": "Vous quittez votre emploi. La lettre respecte le délai de congé – 7 jours pendant le temps d’essai, ensuite 1 à 3 mois pour la fin d’un mois – et demande le certificat de travail.",
  "obsahPopis": "Une lettre courte.",
  "obsah": [
    {
      "nazev": "Expéditeur et employeur",
      "popis": "Vos données et l’entreprise."
    },
    {
      "nazev": "Démission",
      "popis": "Temps d’essai, ordinaire ou départ anticipé."
    },
    {
      "nazev": "Demandes",
      "popis": "Confirmation, certificat, vacances."
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
    "Rappels de la fin et du certificat",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous démissionnez en tant qu’employé(e)",
    "vous voulez proposer un départ anticipé"
  ],
  "nehodiSe": [
    "votre employeur vous licencie"
  ],
  "po": [
    {
      "nazev": "Remise",
      "popis": "En mains propres avec confirmation ou en recommandé, quelques jours avant la fin du mois."
    },
    {
      "nazev": "ORP",
      "popis": "Sans nouvel emploi, inscrivez-vous tôt à l’ORP."
    }
  ],
  "faq": [
    {
      "q": "Quel est le délai de démission ?",
      "a": "Pendant le temps d’essai, 7 jours. Ensuite, sauf autre accord écrit : 1 mois la 1re année, 2 mois de la 2e à la 9e année, 3 mois dès la 10e année, pour la fin d’un mois (art. 335c CO)."
    },
    {
      "q": "Dois-je motiver ma démission ?",
      "a": "Non. Si l’employeur le demande, vous devez toutefois donner le motif par écrit."
    },
    {
      "q": "Puis-je démissionner pendant une maladie ?",
      "a": "Oui. Les périodes de protection ne protègent que contre un licenciement par l’employeur."
    },
    {
      "q": "Une démission influence-t-elle le chômage ?",
      "a": "Sans nouvel emploi, une démission peut entraîner une suspension temporaire des indemnités."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon les art. 335 ss du Code des obligations (CO) et les informations de ch.ch et du SECO.",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la lettre de démission en ligne – PDF", "description": "Lettre de démission avec délai et certificat de travail. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
