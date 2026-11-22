import sys; sys.path.insert(0,'/home/claude/skripty')
from chfr_zdroje import *
B='contrat-de-bail-appartement'; E='etat-des-lieux'; R='resiliation-bail'; CR='convention-resiliation-bail'

c('louer-son-appartement','Louer son appartement en Suisse : bail, loyer et frais accessoires','Louer son appartement',
 'Louer un appartement entre particuliers en Suisse romande : bail, loyer net, frais accessoires énumérés, garantie de loyer, formule officielle, état des lieux.',
 'Un bail écrit avec les frais accessoires énumérés un par un, une garantie bloquée au nom du locataire et un état des lieux à la remise des clés.',
 'logement','bail',[B,E],
 ['louer son appartement','contrat de bail','frais accessoires','loyer initial formule officielle','bail à loyer suisse'],[CO,BAIL],
 [('Le bail doit-il être écrit ?','Non, il pourrait même être oral. Un écrit est pourtant indispensable pour prouver le loyer, les frais accessoires et les termes de résiliation.'),
  ('Quels frais accessoires puis-je facturer ?','Uniquement ceux énumérés un par un dans le contrat (art. 257a CO). Les autres sont compris dans le loyer.'),
  ('Faut-il utiliser la formule officielle ?','Dans certains cantons, le loyer initial doit être communiqué au moyen de la formule officielle (art. 270 al. 2 CO). Renseignez-vous auprès de l’autorité cantonale de conciliation.')],
'''
Louer un appartement à un particulier est courant en Suisse romande. Un bail clair évite la plupart des litiges.

## 1. Le contrat de bail

Le bail n’exige aucune forme, mais un écrit est indispensable. Il indique les **parties**, l’**objet loué** (logement, cave, place de parc), la **durée** et les **termes de résiliation**. Seuls les signataires sont locataires en titre.

## 2. Loyer et frais accessoires

Indiquez le **loyer net** et, séparément, l’acompte de **frais accessoires**. Le locataire ne paie que les frais **énumérés un par un** (chauffage, eau chaude, conciergerie…) ; tout le reste est compris dans le loyer (art. 257a CO).

## 3. La formule officielle

Dans certains cantons, le **loyer initial** doit être communiqué au moyen de la **formule officielle** (art. 270 al. 2 CO). Demandez à l’autorité cantonale de conciliation si c’est le cas chez vous.

## 4. La garantie

Au maximum **trois loyers mensuels**, déposés sur un compte bloqué au nom du locataire (art. 257e CO).

## 5. La remise

Établissez un **état des lieux** avec les compteurs, les défauts et les clés. Le locataire s’annonce au contrôle des habitants de sa commune dans les 14 jours.

## En résumé

Bail écrit, frais accessoires énumérés, formule officielle si le canton l’exige, garantie bloquée et état des lieux.
''')

c('garantie-de-loyer','Garantie de loyer : montant, compte bloqué et restitution','Garantie de loyer',
 'Tout sur la garantie de loyer en Suisse : trois loyers au maximum, compte bloqué au nom du locataire, restitution après le départ et délai d’un an pour le bailleur.',
 'Au maximum trois loyers, sur un compte bloqué au nom du locataire. La banque ne la libère qu’avec l’accord des deux, une décision – ou après un an sans prétention du bailleur.',
 'logement','bail',[B,E,CR],
 ['garantie de loyer','dépôt de garantie','compte de garantie de loyer','restitution garantie','caution loyer suisse'],[CO,BAIL],
 [('Combien peut demander le bailleur ?','Au maximum trois mois de loyer pour un logement (art. 257e CO).'),
  ('Le bailleur peut-il garder la garantie en espèces ?','Non. Elle doit être déposée auprès d’une banque sur un compte d’épargne ou un dépôt au nom du locataire.'),
  ('Quand récupérer la garantie ?','Avec l’accord du bailleur ou une décision. Si, dans l’année suivant la fin du bail, le bailleur n’a fait valoir aucune prétention par une poursuite ou une action, le locataire peut exiger la restitution de la banque.')],
'''
La garantie de loyer protège le bailleur – mais elle reste l’argent du locataire. La loi encadre strictement son dépôt et sa restitution.

## 1. Le montant

Pour un logement, la garantie ne peut pas dépasser **trois loyers mensuels** (art. 257e CO).

## 2. Le compte bloqué

Le bailleur doit déposer la garantie **auprès d’une banque**, sur un compte d’épargne ou un dépôt **au nom du locataire**. Elle porte intérêt au profit du locataire. Des sociétés de cautionnement proposent aussi des garanties sans dépôt, contre une prime annuelle.

## 3. La restitution

La banque ne libère la garantie qu’avec l’**accord des deux parties** ou sur la base d’une **décision** entrée en force. Si le bailleur ne fait valoir **aucune prétention** par une poursuite ou une action dans l’année qui suit la fin du bail, le locataire peut exiger la restitution.

## 4. L’état des lieux

C’est lui qui décide souvent du sort de la garantie. À la restitution, le bailleur doit **aviser immédiatement** les défauts (art. 267a CO). Le locataire ne répond pas de l’usure normale.

## En résumé

Trois loyers au maximum, compte bloqué au nom du locataire, restitution avec accord – ou après un an sans prétention.
''')

c('sous-location-consentement','Sous-louer une chambre ou son appartement : ce que dit la loi','Sous-location',
 'Sous-louer en Suisse : consentement du bailleur, motifs de refus, loyer de la sous-location, responsabilité du locataire principal et fin avec le bail principal.',
 'La sous-location est permise avec le consentement du bailleur, qui ne peut le refuser que pour des motifs précis. Le locataire principal reste responsable.',
 'logement','bail',['contrat-de-sous-location'],
 ['sous-location','sous-louer appartement','consentement bailleur','colocation','sous-location chambre'],[CO,SOUS],
 [('Le bailleur peut-il refuser ?','Seulement si vous refusez de lui communiquer les conditions, si elles sont abusives par rapport au bail principal ou si la sous-location lui cause des inconvénients majeurs (art. 262 CO).'),
  ('Qui répond des dégâts du sous-locataire ?','Le locataire principal, envers le bailleur, si le sous-locataire utilise la chose autrement que ce qui lui est permis.'),
  ('Le sous-locataire est-il protégé contre le congé ?','En principe comme un autre locataire. Si le bail principal prend fin, la sous-location prend toutefois fin aussi.')],
'''
Une chambre libre, un séjour à l’étranger : la sous-location est fréquente. Elle exige une étape préalable – le consentement du bailleur.

## 1. Le consentement

Demandez **par écrit** le consentement du bailleur en indiquant le sous-locataire, la durée et le loyer. Il ne peut refuser que si vous ne communiquez pas les conditions, si elles sont **abusives** par rapport au bail principal ou si la sous-location lui cause des **inconvénients majeurs** (art. 262 CO).

## 2. Le loyer

Un loyer de sous-location nettement supérieur au loyer principal peut être jugé abusif. Restez proche du loyer effectif, plus une part raisonnable pour le mobilier.

## 3. Le contrat

Le contrat de sous-location indique la partie louée (chambre ou logement entier), la durée, le loyer, la garantie et le préavis. Joignez une copie du consentement du bailleur.

## 4. La responsabilité

Envers le bailleur, vous restez **responsable** : si le sous-locataire utilise la chose autrement que ce qui vous est permis, c’est vous qui répondez.

## 5. La fin

La sous-location prend fin **au plus tard avec le bail principal**. Prévoyez un état des lieux à l’entrée et à la sortie.

## En résumé

Consentement écrit, loyer raisonnable, contrat clair – et vous restez responsable envers le bailleur.
''')

c('resilier-son-bail-delais-et-termes','Résilier son bail : délai de trois mois, termes et départ anticipé','Résilier son bail',
 'Comment résilier son bail en Suisse romande : préavis de trois mois, termes usuels, lettre recommandée, logement de famille et locataire de remplacement.',
 'Trois mois au moins pour un terme usuel ou convenu, par lettre signée qui doit arriver à temps. Pour partir plus tôt : un locataire de remplacement ou une convention.',
 'logement','resiliation',[R,CR],
 ['résilier son bail','délai de résiliation bail','termes de résiliation','locataire de remplacement','résiliation anticipée'],[CO,BAIL],
 [('Quel est le délai de résiliation d’un appartement ?','Au moins trois mois pour un terme prévu par le contrat ou usuel dans la localité (art. 266c CO). Votre contrat peut prévoir plus.'),
  ('Quand ma lettre doit-elle arriver ?','Avant le début du délai. Le bailleur doit la recevoir au plus tard le dernier jour avant le délai de trois mois ; envoyez-la en recommandé quelques jours à l’avance.'),
  ('Comment partir avant le terme ?','En présentant un locataire de remplacement solvable et acceptable, vous êtes libéré de vos obligations (art. 264 CO). Une convention avec le bailleur est l’autre solution.')],
'''
Résilier un bail en Suisse obéit à deux règles : le **délai** et le **terme**. Une lettre qui arrive un jour trop tard repousse le départ de plusieurs mois.

## 1. Délai et terme

Le délai est d’**au moins trois mois** pour un **terme** prévu par le contrat ou usuel dans la localité (art. 266c CO). Lisez votre contrat : il indique souvent les termes et parfois un délai plus long.

## 2. La lettre

Le congé doit être donné **par écrit, signé à la main** (art. 266l CO). Envoyez-le en **recommandé**, assez tôt : c’est la **réception** par le bailleur avant le début du délai qui compte.

## 3. Le logement de famille

Pour un logement de famille, les **deux époux** ou partenaires enregistrés doivent signer la résiliation (art. 266m CO).

## 4. Partir plus tôt

Si vous ne pouvez pas attendre le terme, présentez un **locataire de remplacement** solvable et prêt à reprendre le bail aux mêmes conditions : vous êtes alors libéré (art. 264 CO). Ou convenez d’une **fin d’un commun accord** avec le bailleur.

## 5. Le départ

Fixez la date de l’**état des lieux de sortie**, nettoyez le logement et demandez la restitution de la garantie.

## En résumé

Trois mois pour un terme, lettre signée et reçue à temps – ou un locataire de remplacement.
''')

c('etat-des-lieux-de-sortie','État des lieux de sortie : défauts, usure normale et garantie','État des lieux de sortie',
 'L’état des lieux de sortie d’un appartement en Suisse : avis immédiat des défauts par le bailleur, usure normale, compteurs, clés et restitution de la garantie.',
 'Le bailleur doit vérifier l’état et aviser immédiatement les défauts, sinon il perd ses droits (sauf défauts cachés). Le locataire ne répond pas de l’usure normale.',
 'logement','resiliation',[E,CR],
 ['état des lieux de sortie','usure normale','défauts appartement départ','restitution appartement','garantie de loyer restitution'],[CO,BAIL],
 [('Le bailleur peut-il réclamer des défauts plus tard ?','Seulement les défauts cachés. Pour les autres, il doit aviser le locataire immédiatement après la restitution (art. 267a CO).'),
  ('Dois-je repeindre en partant ?','Pas pour l’usure normale résultant d’un usage conforme. Seuls les dégâts qui dépassent cette usure sont à la charge du locataire.'),
  ('Que noter dans l’état des lieux ?','Les relevés des compteurs, les défauts pièce par pièce, l’équipement et les clés remises, ainsi que les éventuels accords de réparation.')],
'''
L’état des lieux de sortie décide souvent du sort de la garantie de loyer. Bien préparé, il prend une heure et évite des mois de discussion.

## 1. Préparer le logement

Nettoyez soigneusement, réparez les menus défauts dont vous êtes responsable et rassemblez **toutes les clés** – logement, immeuble, cave, boîte aux lettres.

## 2. Pièce par pièce

Parcourez le logement ensemble. Notez les **défauts** précisément (« fissure dans le carrelage à côté de la baignoire »). L’**usure normale** due à un usage conforme n’est pas à la charge du locataire.

## 3. L’avis immédiat

À la restitution, le bailleur doit **vérifier l’état** et **aviser immédiatement** le locataire des défauts dont il le tient responsable. Sinon, il perd ses droits, sauf pour les défauts qu’on ne pouvait pas déceler (art. 267a CO).

## 4. Compteurs et photos

Relevez électricité, gaz, eau et chauffage, et photographiez les compteurs et les défauts avec la date.

## 5. La garantie

Si l’état des lieux est signé sans réserve, demandez la libération de la garantie. Sans accord, le bailleur doit agir dans l’année suivant la fin du bail ; à défaut, le locataire peut exiger la restitution de la banque.

## En résumé

Logement propre, toutes les clés, défauts notés précisément – et un avis immédiat du bailleur, sinon la garantie revient.
''')

c('achat-en-ligne-droit-de-retour','Achat en ligne en Suisse : y a-t-il un droit de retour ?','Retour d’un achat en ligne',
 'Achat en ligne en Suisse : pas de droit légal de retour ni de révocation, seulement les conditions du magasin. Ce qui vaut pour les défauts et comment réclamer.',
 'Contrairement à l’UE, la Suisse ne connaît pas de droit légal de retour pour les achats en ligne. Seul le magasin peut l’accorder ; en cas de défaut, la garantie s’applique.',
 'achats','retour',['revocation-contrat-demarchage','avis-des-defauts'],
 ['achat en ligne retour','droit de rétractation suisse','droit de retour','boutique en ligne suisse','renvoyer un article'],[RET,CO],
 [('Ai-je 14 jours pour renvoyer un achat en ligne ?','Pas selon la loi suisse. De nombreux magasins accordent volontairement un droit de retour de 14 jours ou plus – vérifiez leurs conditions générales.'),
  ('Et si l’article est défectueux ?','La garantie légale s’applique : signalez le défaut immédiatement. En Suisse, les produits neufs sont garantis deux ans.'),
  ('Le droit de révocation de 14 jours existe-t-il ?','Oui, mais seulement pour les contrats conclus à domicile, au travail, dans la rue, en excursion publicitaire ou par téléphone, pour plus de 100 francs.')],
'''
Beaucoup pensent avoir 14 jours pour renvoyer un achat en ligne. En Suisse, ce n’est **pas un droit légal**.

## 1. Pas de droit légal de retour

Qu’il s’agisse d’un livre, de vêtements ou d’un appareil, la loi suisse ne prévoit **ni droit de retour ni droit d’échange** pour les achats en ligne ou en magasin. Chaque magasin fixe ses propres règles.

## 2. Le droit de retour volontaire

Beaucoup de boutiques accordent un **droit de retour de 14 jours ou plus**. Lisez les conditions générales avant d’acheter : délai, état de l’article, frais de renvoi, remboursement ou bon d’achat.

## 3. La révocation de 14 jours

Elle existe, mais seulement pour certains contrats : conclus **à domicile**, au **travail**, dans la **rue**, les **transports publics**, en **excursion publicitaire** ou par **téléphone**, pour plus de **100 francs** (art. 40a ss CO).

## 4. En cas de défaut

Si l’article est défectueux, c’est la **garantie** qui s’applique : deux ans pour les produits neufs. Signalez le défaut **immédiatement** par écrit.

## 5. Conseils

Gardez la quittance, renvoyez si possible dans l’emballage d’origine et faites confirmer par écrit un éventuel droit de retour.

## En résumé

En ligne : les conditions du magasin. À la porte ou par téléphone : 14 jours de révocation. En cas de défaut : la garantie.
''')

c('demarchage-telephonique-revocation-14-jours','Démarchage à domicile ou par téléphone : révoquer en 14 jours','Révocation en 14 jours',
 'Contrat conclu à la porte, au téléphone ou dans la rue ? Le droit de révocation de 14 jours en Suisse : conditions, délai, exceptions et lettre de révocation.',
 'Pour un contrat de plus de 100 francs conclu à domicile, au travail, dans la rue ou par téléphone, vous pouvez révoquer dans les 14 jours – sans justification.',
 'achats','retour',['revocation-contrat-demarchage'],
 ['démarchage téléphonique','révocation contrat','droit de révocation 14 jours','vente à domicile','annuler abonnement téléphone'],[CO,RET],
 [('Quand commence le délai de 14 jours ?','Dès que vous avez conclu le contrat et que le fournisseur vous a informé par écrit du droit de révocation (art. 40e CO).'),
  ('Faut-il justifier la révocation ?','Non. Il suffit de l’envoyer dans le délai et de pouvoir le prouver.'),
  ('Quand le droit est-il exclu ?','Si vous avez expressément demandé la visite ou l’appel, si vous avez commandé à un stand de marché ou de foire, ou si la prestation ne dépasse pas 100 francs (art. 40c CO).')],
'''
Un vendeur à la porte, un appel pour un abonnement, un stand dans la rue : la loi vous laisse **14 jours** pour changer d’avis.

## 1. Les situations couvertes

Le droit de révocation vaut si l’offre vous a été faite **à domicile** ou à la porte, sur votre **lieu de travail**, dans les **transports publics**, dans la **rue**, lors d’une **excursion publicitaire** ou par **téléphone** – et si la prestation dépasse **100 francs** (art. 40a ss CO).

## 2. Les exceptions

Pas de révocation si vous avez **expressément demandé** les négociations, si vous avez commandé à un **stand de marché ou de foire**, ou pour les petites prestations (art. 40c CO).

## 3. Le délai

**14 jours** dès la conclusion du contrat et l’information écrite sur le droit de révocation (art. 40e CO). Il suffit d’**envoyer** la révocation dans le délai.

## 4. La lettre

Écrivez au fournisseur : la marchandise ou le service, la date, le numéro de contrat et où l’offre vous a été faite. Envoyez en recommandé ou par e-mail avec accusé de lecture.

## 5. Les suites

Rendez ce que vous avez reçu ; le fournisseur doit **rembourser** les montants déjà payés (art. 40f CO).

## En résumé

Plus de 100 francs, offre faite chez vous, au travail, dans la rue ou par téléphone : 14 jours, sans justification.
''')

c('garantie-produit-defectueux','Produit défectueux : garantie, avis immédiat et vos droits','Garantie pour défaut',
 'Un produit acheté est défectueux ? La garantie en Suisse : avis immédiat, deux ans pour le neuf, un an possible pour l’occasion, annulation, réduction ou remplacement.',
 'Signalez le défaut immédiatement par écrit. La loi prévoit l’annulation de la vente ou la réduction du prix ; la réparation dépend de la garantie du commerçant.',
 'achats','garantie',['avis-des-defauts'],
 ['produit défectueux','garantie suisse','avis des défauts','réclamation garantie','réparation remplacement'],[CO,RET],
 [('Combien de temps dure la garantie ?','Deux ans dès la livraison pour les produits neufs. Pour une chose d’occasion, le commerçant peut réduire le délai à un an (art. 210 CO).'),
  ('Ai-je droit à une réparation ?','La loi prévoit l’annulation de la vente ou la réduction du prix, et le remplacement pour une chose de genre. La réparation n’est due que si la garantie ou les conditions générales la prévoient.'),
  ('Que se passe-t-il si j’attends ?','Si vous ne signalez pas le défaut immédiatement, la marchandise est réputée acceptée (art. 201 CO).')],
'''
Un téléphone qui s’éteint, un lave-linge qui s’arrête : en Suisse, la garantie protège l’acheteur, mais il doit agir **vite**.

## 1. L’avis immédiat

Dès que vous découvrez le défaut, **signalez-le par écrit** au vendeur. Sans avis immédiat, la marchandise est **réputée acceptée** (art. 201 CO). Gardez une preuve de l’envoi.

## 2. Les délais

Les droits se prescrivent par **deux ans** dès la livraison. Pour une chose **d’occasion**, le commerçant peut réduire ce délai à **un an** (art. 210 CO).

## 3. Vos droits selon la loi

Vous pouvez **annuler la vente** (action rédhibitoire) ou demander une **réduction du prix** ; pour une chose de genre, aussi son **remplacement** (art. 205 et 206 CO).

## 4. La réparation

Beaucoup de commerçants remplacent ces droits par une **garantie de réparation** dans leurs conditions générales. Lisez-les : la réparation n’est due que si elle est prévue.

## 5. Les preuves

Décrivez le défaut concrètement, photographiez-le et gardez la quittance ou la confirmation de commande. Fixez un délai de réponse, en général 14 jours.

## En résumé

Avis écrit immédiat, deux ans pour le neuf, et les conditions de garantie du commerçant en main.
''')

c('vente-entre-particuliers-annonce','Vendre un objet sur une annonce : contrat, paiement et arnaques','Vente sur annonce',
 'Vendre un objet d’occasion à un particulier après une annonce en Suisse : contrat de vente, exclusion de garantie, paiement sûr et arnaques fréquentes à éviter.',
 'Un contrat court, l’objet remis seulement après le paiement, et de la méfiance envers les faux justificatifs et les liens de paiement inconnus.',
 'achats','vente-particuliers',['contrat-de-vente-entre-particuliers','quittance'],
 ['vente entre particuliers','annonce occasion','arnaque vente en ligne','contrat de vente objet','paiement vente particulier'],[CO],
 [('Faut-il un contrat pour vendre un objet ?','Non, mais pour un objet de valeur, un contrat court prouve le prix, l’état et l’exclusion de garantie.'),
  ('Puis-je exclure la garantie ?','Oui, entre particuliers c’est usuel. L’exclusion ne vaut pas pour les défauts dissimulés frauduleusement (art. 199 CO).'),
  ('Quelles arnaques sont fréquentes ?','Faux justificatifs de virement, liens de paiement envoyés par message, acheteurs qui demandent vos données de carte ou un code. Ne remettez l’objet qu’une fois l’argent reçu.')],
'''
Vélo, appareil photo, meuble : vendre sur une annonce est simple. Deux choses comptent – un **contrat clair** et un **paiement sûr**.

## 1. La description

Décrivez l’objet avec la marque, le modèle, le numéro de série et les accessoires. Indiquez **tous les défauts connus** – un défaut dissimulé annule l’exclusion de la garantie.

## 2. Le contrat

Pour un objet de valeur, un contrat de vente court fixe le prix, l’état et l’**exclusion de garantie** usuelle entre particuliers (art. 199 CO).

## 3. Le paiement

En main propre : espèces comptées sur place avec quittance, ou paiement instantané visible sur votre compte. À distance : n’envoyez l’objet qu’**après le crédit** sur votre compte.

## 4. Les arnaques

Méfiez-vous des **faux justificatifs de virement**, des **liens de paiement** reçus par message et des « acheteurs » qui demandent vos données de carte ou un code. Aucun acheteur n’a besoin de votre code pour vous payer.

## 5. La remise

L’acheteur examine l’objet à la remise et signale immédiatement les défauts (art. 201 CO).

## En résumé

Défauts déclarés, contrat court, argent reçu avant la remise – et aucun code partagé.
''')

c('contrat-avec-un-artisan','Travaux avec un artisan : contrat d’entreprise, prix et réception','Contrat avec un artisan',
 'Faire des travaux avec un artisan en Suisse : contrat d’entreprise, prix ferme ou devis approximatif, acompte, réception de l’ouvrage, défauts et prescription.',
 'Une description précise, un prix ferme ou un devis approximatif, et une réception soigneuse où l’on réserve les défauts. Pour un ouvrage immobilier, 60 jours pour signaler un défaut.',
 'achats','artisans',['contrat-d-entreprise','quittance'],
 ['contrat avec un artisan','contrat d’entreprise','devis approximatif','prix forfaitaire','réception des travaux','défauts travaux'],[CO],
 [('Quelle différence entre prix ferme et devis approximatif ?','Avec un prix ferme, l’artisan ne peut pas demander plus (art. 373 CO). Avec un devis approximatif, un dépassement excessif vous permet de vous départir du contrat (art. 375 CO).'),
  ('Dans quel délai signaler un défaut ?','Immédiatement après la vérification ; pour un ouvrage immobilier, dans les 60 jours (art. 367 CO).'),
  ('Combien de temps durent les droits ?','2 ans dès la réception, 5 ans pour un ouvrage immobilier (art. 371 CO).')],
'''
Peinture, carrelage, réparation : avec un artisan, vous concluez un **contrat d’entreprise**. Il doit un ouvrage terminé et sans défaut, pas seulement des heures.

## 1. La description

Décrivez l’ouvrage le plus précisément possible : étendue, matériaux, dimensions. Joignez l’**offre** en annexe.

## 2. Le prix

**Prix ferme** : l’artisan ne peut pas demander plus, même si le travail est plus long (art. 373 CO). **Devis approximatif** : s’il est dépassé de manière excessive sans votre fait, vous pouvez vous départir du contrat (art. 375 CO).

## 3. Acompte et travaux supplémentaires

Versez un éventuel acompte par virement ou contre quittance. Convenez des **travaux supplémentaires** et de leur prix **par écrit** – un e-mail suffit.

## 4. La réception

À la fin, **vérifiez l’ouvrage** et signalez immédiatement les défauts ; pour un ouvrage immobilier, le délai est de **60 jours** (art. 367 CO). Si vous acceptez l’ouvrage sans réserve, vous perdez vos droits pour les défauts reconnaissables.

## 5. La prescription

Les droits pour les défauts se prescrivent par **2 ans** dès la réception, **5 ans** pour un ouvrage immobilier (art. 371 CO).

## En résumé

Offre en annexe, prix clair, suppléments par écrit et réception avec réserve des défauts.
''')

c('procuration-quand-suffit-elle','Procuration simple : quand suffit-elle et quand faut-il plus ?','Procuration',
 'Quand une procuration simple suffit en Suisse : poste, école, service des automobiles. Et quand il faut une forme particulière ou un mandat pour cause d’inaptitude.',
 'Pour une affaire concrète – retirer un recommandé, une démarche au guichet – une procuration simple et précise suffit. Pour votre propre incapacité, il faut un mandat pour cause d’inaptitude.',
 'quotidien','procuration',['procuration','procuration-service-des-automobiles'],
 ['procuration simple','procuration poste','procuration suisse','mandat pour cause d’inaptitude','représentation'],[CO,CC360],
 [('Une procuration doit-elle être légalisée ?','Pour une procuration simple, non. Pour un immeuble, une société ou certaines autorités, une légalisation ou un formulaire particulier peut être exigé.'),
  ('Une procuration générale est-elle acceptée ?','Souvent pas. Décrivez concrètement l’affaire : une procuration précise est mieux acceptée.'),
  ('Et si je deviens incapable de discernement ?','Il faut un mandat pour cause d’inaptitude (art. 360 ss CC), rédigé à la main ou authentifié. Une procuration simple ne suffit pas.')],
'''
Quelqu’un peut agir à votre place si vous lui donnez **procuration** (art. 32 ss CO). Le plus important : être **précis**.

## 1. Quand une procuration simple suffit

Pour retirer un **recommandé**, accompagner une démarche à l’**école**, déposer des **plaques** ou régler une affaire au guichet, une procuration écrite et signée suffit en général.

## 2. Ce qu’elle doit contenir

Le mandant et le mandataire avec date de naissance et adresse, l’**affaire concrète** et, si possible, une **date de validité**. Une procuration « pour tout » est souvent refusée.

## 3. Quand il faut plus

Pour un **immeuble**, une **société**, la **banque** ou certaines autorités, des formes particulières s’appliquent souvent : signature légalisée, formulaire de la banque. Renseignez-vous avant.

## 4. Pour sa propre incapacité

Pour le cas où vous ne pourriez plus décider vous-même, il faut un **mandat pour cause d’inaptitude** (art. 360 ss CC), rédigé entièrement à la main ou authentifié.

## 5. La révocation

Vous pouvez révoquer une procuration en tout temps. Reprenez l’original et informez les personnes concernées.

## En résumé

Affaire concrète, procuration précise, forme particulière pour les affaires importantes.
''')

c('enfant-voyage-sans-ses-parents','Enfant en voyage sans ses parents : l’autorisation recommandée','Enfant en voyage',
 'Votre enfant voyage à l’étranger seul, avec un seul parent ou des proches ? Ce que recommande le DFAE, ce que demandent certains pays, comment préparer l’autorisation.',
 'Le DFAE recommande vivement une déclaration de consentement signée par les parents. Certains pays l’exigent ; vérifiez les règles du pays de destination.',
 'quotidien','enfants',['autorisation-voyage-mineur'],
 ['enfant voyage sans parents','autorisation de voyage mineur','déclaration de consentement','voyage enfant seul','camp à l’étranger'],[DFAE,OFJ],
 [('L’autorisation est-elle obligatoire ?','La Suisse ne l’exige pas, mais certains pays la demandent à l’entrée ou à la sortie. Le DFAE la recommande vivement.'),
  ('Faut-il faire légaliser la signature ?','Si le pays de destination l’exige ou pour plus de sécurité. La commune de domicile ou un notaire peut le faire, avec une signature manuscrite sur papier.'),
  ('Quels documents l’enfant doit-il emporter ?','Son passeport ou sa carte d’identité valable et l’original de l’autorisation ; gardez une copie à la maison.')],
'''
Camp de vacances, séjour linguistique, voyage avec les grands-parents : quand un enfant ne voyage pas avec ses deux parents, une autorisation écrite évite les blocages à la frontière.

## 1. La recommandation du DFAE

Pour les mineurs voyageant **seuls** ou **sans leurs représentants légaux**, le DFAE recommande **vivement** une déclaration de consentement signée par les parents.

## 2. Les règles du pays

Chaque pays fixe ses conditions d’entrée. Demandez à l’**ambassade** ou au **consulat** du pays de destination si une autorisation est nécessaire et sous quelle forme. Certains pays ont leur propre formulaire.

## 3. Le contenu

Les **parents** avec pièces d’identité et téléphones (indicatif +41), l’**enfant**, la **personne accompagnante**, la **destination**, les **dates** et le **motif** du voyage. Plus c’est précis, moins il y a de questions.

## 4. La signature

Signez **à la main**. Si nécessaire, faites légaliser la signature à la **commune** ou chez un **notaire**.

## 5. Voyage ou déménagement

L’autorisation vaut pour un voyage. Un **déménagement** à l’étranger est autre chose : en cas d’autorité parentale conjointe, les parents décident ensemble du lieu de résidence de l’enfant.

## En résumé

Autorisation signée, règles du pays vérifiées, pièce d’identité valable – et des parents joignables.
''')

c('preter-un-objet-a-un-ami','Prêter un objet à un ami : prêt à usage et restitution','Prêter une chose',
 'Prêter gratuitement une remorque, un outil ou du matériel en Suisse : le prêt à usage selon le CO, l’état à la remise, la durée, les frais et la restitution.',
 'Un prêt gratuit est un prêt à usage. Fixez la durée ou l’usage, notez l’état à la remise – sinon le prêteur peut réclamer la chose en tout temps.',
 'quotidien','pret-a-usage',['contrat-de-pret-a-usage'],
 ['prêter un objet','prêt à usage','prêter sa remorque','restitution objet prêté','commodat'],[CO],
 [('Quand puis-je récupérer la chose ?','À la date convenue ou quand l’usage est accompli. Sans durée ni usage déterminés, en tout temps (art. 310 CO).'),
  ('Qui paie l’entretien ?','L’emprunteur supporte les frais ordinaires d’entretien (art. 307 CO).'),
  ('L’emprunteur peut-il la prêter à quelqu’un d’autre ?','Non, pas sans votre autorisation. S’il le fait, il répond même du cas fortuit (art. 306 CO).')],
'''
Une remorque pour un déménagement, une perceuse, du matériel de camping : prêter rend service. Quelques lignes écrites évitent les malentendus.

## 1. Prêt à usage ou bail ?

Si la chose est prêtée **gratuitement**, c’est un **prêt à usage** (art. 305 CO). Si un prix est payé, c’est un bail.

## 2. L’état à la remise

Décrivez la chose (modèle, numéro de série, accessoires) et son **état**, avec des photos. Indiquez sa valeur pour le cas de perte.

## 3. La durée

Fixez une **date** ou l’**usage** prévu. Sans l’un ni l’autre, le prêteur peut réclamer la chose **en tout temps** (art. 310 CO). Il peut aussi la reprendre plus tôt en cas d’usage contraire au contrat ou de besoin urgent et imprévu (art. 309 CO).

## 4. Usage et frais

L’emprunteur n’en fait que l’usage convenu, ne la prête pas à un tiers et paie les **frais ordinaires d’entretien** (art. 306 et 307 CO).

## 5. La restitution

Examinez la chose ensemble au retour et confirmez son état.

## En résumé

Gratuit = prêt à usage. État noté, durée fixée, restitution contrôlée.
''')

c('demissionner-delais-de-conge','Démissionner en Suisse : délais de congé, temps d’essai et chômage','Démissionner',
 'Comment démissionner en Suisse : délais de congé selon l’année de service, temps d’essai de 7 jours, lettre et réception, certificat de travail et chômage.',
 'Pendant le temps d’essai, 7 jours. Ensuite 1 à 3 mois pour la fin d’un mois. La démission compte dès sa réception ; sans nouvel emploi, les indemnités peuvent être suspendues.',
 'travail','demission',['lettre-de-demission'],
 ['démissionner suisse','délai de congé','lettre de démission','temps d’essai démission','certificat de travail','chômage démission'],[CO,DEM,ESSAI,SECO,CHOM],
 [('Quel est le délai de congé ?','Sauf autre accord écrit : 7 jours pendant le temps d’essai ; ensuite 1 mois la 1re année, 2 mois de la 2e à la 9e année, 3 mois dès la 10e, pour la fin d’un mois (art. 335b et 335c CO).'),
  ('La démission doit-elle être écrite ?','La loi ne l’exige pas, sauf si le contrat, la CCT ou le CTT le prévoit. L’écrit reste la meilleure preuve.'),
  ('Puis-je démissionner pendant une maladie ?','Oui. Les périodes de protection (30, 90 ou 180 jours) ne protègent que contre un licenciement par l’employeur.')],
'''
Quitter son emploi en Suisse est simple, à condition de respecter le **délai de congé** et de prouver la **réception** de la lettre.

## 1. Le temps d’essai

Il dure en général **un mois**, au maximum trois. Pendant ce temps, le délai de congé est de **7 jours**, et la démission doit arriver au plus tard le dernier jour du temps d’essai.

## 2. Après le temps d’essai

Sauf autre accord écrit ou CCT : **1 mois** la 1re année, **2 mois** de la 2e à la 9e, **3 mois** dès la 10e année – chaque fois **pour la fin d’un mois** (art. 335c CO). Exemple de ch.ch : démission le 13 juin avec un mois de délai → fin le 31 juillet.

## 3. La lettre

Indiquez vos données, celles de l’employeur, le contrat et la date de fin, « subsidiairement pour la prochaine échéance possible ». Remettez-la **en mains propres** contre signature ou en **recommandé**, quelques jours avant la fin du mois.

## 4. Le certificat et les vacances

Demandez un **certificat de travail** (art. 330a CO) et réglez les **vacances restantes** et heures supplémentaires.

## 5. Le chômage

Sans nouvel emploi, une démission peut entraîner une **suspension** temporaire des indemnités. Inscrivez-vous tôt à l’**ORP**.

## En résumé

Délai selon l’année de service, fin de mois, réception prouvée – et un certificat de travail.
''')

c('resilier-assurance-caisse-maladie-abonnement','Résilier une assurance, la caisse-maladie ou un abonnement','Résilier un contrat',
 'Comment résilier en Suisse : assurance après trois ans (art. 35a LCA), caisse-maladie au 30 novembre, mobile, fitness, électricité lors d’un déménagement et mandat.',
 'Chaque contrat a ses règles : trois ans et trois mois de préavis pour une assurance, 30 novembre pour l’assurance de base, conditions générales pour le mobile et le fitness.',
 'travail','resilier-contrat',['lettre-de-resiliation'],
 ['résilier assurance','résilier caisse maladie','résiliation abonnement','résilier fitness','résiliation mandat','délai de résiliation suisse'],[LCA,CAISSE,ELCOM,OMB,CO],
 [('Quand résilier une assurance ?','Pour la fin de la troisième année ou de chacune des suivantes, avec trois mois de préavis (art. 35a LCA). Le contrat peut prévoir des délais plus courts.'),
  ('Quel est le délai pour la caisse-maladie ?','Pour l’assurance de base, la lettre doit arriver au plus tard le 30 novembre ; avec une franchise de 300 francs dans le modèle standard, aussi pour fin juin avec trois mois de préavis.'),
  ('Puis-je changer de fournisseur d’électricité ?','Non, si votre ménage consomme moins de 100 MWh par an. Lors d’un déménagement, vous annoncez simplement votre départ au gestionnaire local.')],
'''
En Suisse, il n’y a pas une règle unique pour résilier. Chaque type de contrat a ses délais – et c’est presque toujours la **réception** qui compte.

## 1. Assurances

Tout contrat d’assurance peut être résilié pour la **fin de la troisième année** ou de chacune des suivantes, avec **trois mois** de préavis, par écrit ou par un moyen qui laisse une trace écrite (art. 35a LCA). Après un **sinistre partiel**, vous pouvez aussi vous départir du contrat (art. 42 LCA).

## 2. Caisse-maladie

Pour l’**assurance de base**, votre lettre doit arriver au plus tard le **30 novembre**. Avec une franchise de 300 francs dans le modèle standard, c’est aussi possible pour **fin juin**. Les complémentaires ont leurs propres délais.

## 3. Mobile, internet, fitness

La durée minimale, le renouvellement automatique et le délai figurent dans les **conditions générales**. En cas de litige avec un opérateur, l’organe de conciliation **ombudscom** peut aider.

## 4. Électricité

Les ménages sous **100 MWh** par an ne choisissent pas leur fournisseur. Lors d’un déménagement, annoncez votre départ au gestionnaire local et notez le compteur.

## 5. Mandats

Un mandat (nettoyage, conseil, fiduciaire) peut être **révoqué en tout temps** ; en temps inopportun, il faut réparer le dommage (art. 404 CO).

## En résumé

Recommandé, numéro de contrat, et le bon délai pour chaque type de contrat.
''')
print('ok')
