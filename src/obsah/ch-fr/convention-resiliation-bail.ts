import type { StrankaDokumentu } from '../typy';
import { conventionResiliation as sablona } from '../../sablony/ch-fr/convention-resiliation-bail';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Convention de résiliation du bail",
  nazevA: "la convention de résiliation du bail",
  katalog: {"popis": "Fin du bail d’un commun accord.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["convention de résiliation bail", "résiliation bail d’un commun accord", "fin du bail anticipée", "accord de résiliation bail", "quitter appartement avant terme"]},
  protejsky: {"ch": "aufhebungsvereinbarung-mietvertrag"},
  souvisejici: "wohnen",
  landing: {
  "title": "Convention de résiliation du bail – modèle PDF gratuit",
  "description": "Modèle gratuit de convention de résiliation du bail d’un commun accord : date de fin, restitution, garantie de loyer et conventions. Selon l’art. 115 CO, PDF et Word.",
  "perex": "Bailleur et locataire veulent mettre fin au bail à une date précise, sans délai ni terme. La convention fixe la fin, la restitution et le sort de la garantie.",
  "obsahPopis": "Les articles de la convention.",
  "obsah": [
    {
      "nazev": "Parties",
      "popis": "Bailleur et locataire."
    },
    {
      "nazev": "Fin du bail",
      "popis": "Date de fin et de restitution."
    },
    {
      "nazev": "Garantie",
      "popis": "Restitution et compensation."
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
    "Rappels de la fin et de la restitution",
    "PDF et Word"
  ],
  "hodiSe": [
    "vous voulez partir avant le terme et le bailleur est d’accord",
    "vous avez trouvé un nouveau locataire avec le bailleur"
  ],
  "nehodiSe": [
    "le bailleur refuse – résiliez pour le prochain terme"
  ],
  "po": [
    {
      "nazev": "Restitution",
      "popis": "État des lieux avec relevés des compteurs."
    },
    {
      "nazev": "Garantie",
      "popis": "Surveillez la date de restitution de la garantie."
    }
  ],
  "faq": [
    {
      "q": "Une convention orale suffit-elle ?",
      "a": "Juridiquement oui (art. 115 CO), mais l’écrit est la seule vraie preuve de la date de fin et de l’accord sur la garantie."
    },
    {
      "q": "Le loyer est-il dû jusqu’à la fin ?",
      "a": "Oui, jusqu’à la date de fin convenue. Les frais accessoires sont décomptés pour la période usuelle."
    },
    {
      "q": "Qui doit signer ?",
      "a": "Tous les bailleurs et tous les locataires inscrits au contrat de bail."
    },
    {
      "q": "Enregistrez-vous mes données ?",
      "a": "Non. Le document est créé directement dans votre navigateur ; les données ne sont pas envoyées à un serveur."
    }
  ],
  "zakony": "Modèle établi selon l’art. 115 du Code des obligations (CO).",
  "souvisejiciPopis": "D’autres documents, également gratuits."
},
  vytvorit: {"title": "Remplir la convention de résiliation du bail – PDF", "description": "Fin du bail d’un commun accord avec garantie. PDF ou Word, gratuit.", "podnadpis": "Gratuit · résultat en PDF et Word · quelques minutes"},
};

export default stranka;
