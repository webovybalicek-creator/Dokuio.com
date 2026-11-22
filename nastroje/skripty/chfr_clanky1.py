import sys; sys.path.insert(0,'/home/claude/skripty')
from chfr_zdroje import *
V='contrat-de-vente-voiture'; PV='proces-verbal-remise-vehicule'; Q='quittance'; SAN='procuration-service-des-automobiles'

c('vendre-sa-voiture-en-suisse','Vendre sa voiture en Suisse : contrat, plaques et paiement','Vendre sa voiture',
 'Comment vendre une voiture d’occasion entre particuliers en Suisse : contrat de vente, paiement sûr, heure de la remise, plaques et assurance. Avec un modèle gratuit.',
 'Un contrat avec le numéro de châssis, l’argent avant les clés, un procès-verbal avec l’heure – et vous gardez les plaques. Voici l’ordre qui évite les mauvaises surprises.',
 'auto','vendre-voiture',[V,PV,Q],
 ['vendre sa voiture','vente voiture entre particuliers','contrat de vente voiture','plaques vente voiture','paiement vente voiture'],[CO,IMM,EXP],
 [('Faut-il un contrat écrit pour vendre une voiture ?','La loi ne l’exige pas, mais un contrat écrit prouve le prix, l’état déclaré, l’exclusion de garantie et le moment de la remise. C’est votre meilleure protection.'),
  ('Que faire des plaques après la vente ?','Vous les gardez. Vous pouvez les utiliser pour un autre véhicule ou les déposer au service des automobiles ; informez aussi votre assurance.'),
  ('Dois-je faire expertiser la voiture avant la vente ?','Ce n’est pas obligatoire pour vendre. Une expertise récente rassure toutefois l’acheteur ; le canton fixe quand une nouvelle expertise est nécessaire.')],
'''
Vendre une voiture d’occasion à un particulier se fait en une seule rencontre : contrat, paiement, remise des clés. Ce qui compte, c’est de **tout fixer par écrit** et de **garder les plaques**.

## 1. Avant l’annonce

Rassemblez le **permis de circulation**, toutes les clés, le carnet d’entretien et le dernier rapport d’expertise. Vérifiez que le numéro de châssis du permis correspond à celui du véhicule. Si la voiture est en leasing, il faut l’accord de la société de leasing.

## 2. Le contrat de vente

Notez les deux parties avec leur pièce d’identité, la marque, le **numéro de châssis**, le **numéro matricule**, le kilométrage et les **défauts connus**. Entre particuliers, l’exclusion de la garantie est usuelle et admise – mais elle ne vaut pas pour un défaut que vous auriez frauduleusement dissimulé (art. 199 CO). Soyez donc honnête et précis.

## 3. Le paiement

Le plus sûr est un **virement crédité avant la remise des clés**. En espèces, comptez l’argent devant l’acheteur et signez une quittance. Méfiez-vous des faux justificatifs de paiement envoyés par message.

## 4. La remise et l’heure

Établissez un **procès-verbal de remise** avec la date, l’**heure**, le kilométrage, les clés et les dommages visibles. Si une amende arrive quelques jours plus tard, l’heure prouve qui conduisait le véhicule.

## 5. Plaques et assurance

En Suisse, les **plaques restent au détenteur**. Démontez-les, utilisez-les pour un autre véhicule ou déposez-les au service des automobiles, et annoncez la vente à votre assurance. L’acheteur fait immatriculer la voiture à son nom avec sa propre attestation d’assurance avant de rouler.

## En résumé

Contrat avec numéro de châssis, argent avant les clés, procès-verbal avec l’heure, plaques démontées et assurance informée – le même jour.
''')

c('acheter-une-voiture-d-occasion','Acheter une voiture d’occasion : ce qu’il faut vérifier','Acheter une occasion',
 'Acheter une voiture d’occasion à un particulier en Suisse : permis de circulation, numéro de châssis, expertise, défauts, paiement et immatriculation. Liste de contrôle.',
 'Avant de payer : le vendeur est-il le détenteur, le numéro de châssis correspond-il, quand a eu lieu la dernière expertise ? Puis contrat écrit et immatriculation à votre nom.',
 'auto','acheter-occasion',[V,PV],
 ['acheter voiture occasion','vérifier voiture occasion','numéro de châssis','expertise voiture','immatriculation voiture'],[CO,IMM,EXP],
 [('Ai-je une garantie si j’achète à un particulier ?','Souvent non : l’exclusion de la garantie est usuelle entre particuliers. Elle ne couvre pas les défauts dissimulés frauduleusement (art. 199 CO).'),
  ('Quand une voiture doit-elle passer à l’expertise ?','Selon ch.ch, la première expertise a lieu 5 ans après la première mise en circulation, la deuxième 3 ans plus tard, puis tous les 2 ans.'),
  ('Puis-je rouler avec les plaques du vendeur ?','Non. Les plaques restent au vendeur. Vous devez immatriculer la voiture à votre nom avec votre propre assurance avant le premier trajet.')],
'''
Une occasion achetée à un particulier se vend en général **sans garantie**. Tout ce que vous ne vérifiez pas avant de payer devient votre problème.

## 1. Le vendeur et les papiers

Le vendeur doit être inscrit comme **détenteur** dans le permis de circulation ou prouver que la voiture lui appartient. Comparez le nom avec sa pièce d’identité. Une voiture en leasing ne peut pas être vendue sans l’accord de la société de leasing.

## 2. Numéro de châssis et kilométrage

Le **numéro de châssis** du permis (champ 23) doit correspondre à celui frappé sur le véhicule. Un kilométrage cohérent avec le carnet d’entretien et les rapports d’expertise est un bon signe.

## 3. Expertise et état

Regardez la date de la **dernière expertise** : la première a lieu 5 ans après la première mise en circulation, puis après 3 ans, puis tous les 2 ans. Faites un essai, et si possible un contrôle chez un garagiste.

## 4. Vérification immédiate

Vérifiez la voiture dès la remise et signalez immédiatement tout défaut au vendeur (art. 201 CO). Ce qui figure dans le contrat comme défaut connu ne pourra plus être réclamé.

## 5. Immatriculation

Les plaques restent au vendeur. Avec le permis de circulation, votre **attestation d’assurance** et une pièce d’identité, vous faites immatriculer la voiture au service des automobiles de votre canton – avant de rouler.

## En résumé

Détenteur vérifié, numéro de châssis contrôlé, expertise récente, contrat écrit, puis immatriculation à votre nom.
''')

c('plaques-et-assurance-apres-la-vente','Plaques et assurance après la vente d’une voiture en Suisse','Plaques et immatriculation',
 'Que deviennent les plaques et l’assurance quand on vend sa voiture en Suisse ? Dépôt des plaques, immatriculation par l’acheteur, procuration.',
 'Les plaques appartiennent au détenteur, pas à la voiture. Le vendeur les garde ou les dépose ; l’acheteur immatricule avec sa propre assurance. Une procuration aide si quelqu’un d’autre se déplace.',
 'auto','service-des-automobiles',[SAN,V],
 ['plaques voiture vente','déposer plaques','immatriculation voiture suisse','service des automobiles procuration','assurance vente voiture'],[IMM,ASA],
 [('Puis-je transférer mes plaques sur ma nouvelle voiture ?','Oui, les plaques peuvent être utilisées pour un autre véhicule de même type, au même détenteur et dans le même canton.'),
  ('Que faut-il pour immatriculer une voiture d’occasion ?','Selon ch.ch : l’attestation d’assurance responsabilité civile, le permis de circulation du détenteur précédent, le rapport d’expertise s’il y en a un et une pièce d’identité.'),
  ('Quelqu’un peut-il faire la démarche pour moi ?','Oui, avec une procuration. Beaucoup de cantons ont leur propre formulaire ; sinon, une procuration simple avec le numéro de châssis suffit souvent.')],
'''
En Suisse, la vente d’une voiture ne passe pas par un « transfert » de plaques. Le vendeur garde ses plaques, l’acheteur obtient les siennes.

## 1. Côté vendeur

Après la remise, **démontez les plaques**. Vous pouvez les réutiliser pour un nouveau véhicule ou les déposer au service des automobiles. Informez votre **assurance** de la vente ; tant que les plaques ne sont pas déposées ou réutilisées, la couverture et l’impôt peuvent continuer.

## 2. Côté acheteur

L’acheteur reçoit le **permis de circulation** du vendeur. Avec son **attestation d’assurance** (souvent transmise électroniquement par l’assureur), le rapport d’expertise éventuel et une pièce d’identité, il fait immatriculer la voiture au service des automobiles de son canton.

## 3. Si vous ne pouvez pas y aller

Une **procuration** permet à une autre personne de faire la démarche : changement de détenteur, immatriculation ou dépôt des plaques. Indiquez le numéro de châssis et la démarche exacte. Le mandataire apporte la procuration, sa pièce d’identité, une copie de la vôtre et le permis de circulation.

## 4. Formulaires cantonaux

Les services des automobiles sont cantonaux. Beaucoup proposent leur propre formulaire de procuration et des rendez-vous en ligne – consultez leur site avant de vous déplacer.

## En résumé

Vendeur : plaques et assurance. Acheteur : assurance et immatriculation. Procuration si quelqu’un d’autre se déplace.
''')

c('amende-apres-la-vente-de-la-voiture','Amende après la vente de la voiture : comment se protéger','Amende après la vente',
 'Vous avez vendu votre voiture et recevez une amende ? Pourquoi l’heure de la remise compte, comment le procès-verbal vous protège et pourquoi démonter les plaques.',
 'Une amende pour un excès de vitesse commis après la vente ? L’heure exacte de la remise et le procès-verbal signé montrent que vous n’aviez plus le véhicule.',
 'auto','vendre-voiture',[PV,V],
 ['amende après vente voiture','procès-verbal remise véhicule','heure de remise','excès de vitesse après vente','plaques après vente'],[IMM,CO],
 [('Pourquoi noter l’heure et pas seulement la date ?','Une infraction peut avoir lieu le jour même de la vente. Seule l’heure permet de savoir si vous conduisiez encore ou non.'),
  ('Que faire si une amende arrive quand même ?','Répondez à l’autorité en joignant une copie du contrat et du procès-verbal avec l’heure, et indiquez les données de l’acheteur.'),
  ('Les plaques jouent-elles un rôle ?','Oui. Si vous démontez vos plaques à la remise, la voiture ne peut plus circuler sous votre nom.')],
'''
Après une vente, la voiture circule déjà sous la responsabilité de l’acheteur – mais l’autorité ne le sait pas forcément tout de suite. Une bonne documentation évite les malentendus.

## 1. Démonter les plaques

En Suisse, les plaques restent au vendeur. Si vous les démontez au moment de la remise, la voiture ne peut plus rouler sous votre nom. C’est la meilleure protection.

## 2. L’heure de la remise

Dans le contrat et le **procès-verbal de remise**, inscrivez la date **et l’heure**. Ajoutez le kilométrage et faites signer les deux parties. Photographiez le compteur au moment de la remise.

## 3. Les données de l’acheteur

Notez le nom, l’adresse et le numéro de pièce d’identité de l’acheteur. En cas d’amende, vous pourrez indiquer à l’autorité qui conduisait le véhicule.

## 4. Si une amende arrive

Répondez dans le délai indiqué. Joignez une copie du contrat et du procès-verbal avec l’heure. Ne payez pas une amende pour une infraction commise après la remise.

## En résumé

Plaques démontées, heure dans le procès-verbal, données de l’acheteur – et une copie de tout.
''')

c('vendre-sa-moto','Vendre sa moto : contrat, accessoires et transformations','Vendre sa moto',
 'Vendre une moto ou un scooter d’occasion en Suisse : numéro de châssis sur le cadre, accessoires, transformations inscrites au permis, plaques et paiement.',
 'Les règles sont celles de la voiture, avec deux pièges en plus : les accessoires et les transformations qui doivent figurer au permis de circulation.',
 'auto','vendre-voiture',['contrat-de-vente-moto',PV],
 ['vendre sa moto','contrat de vente moto','accessoires moto vente','échappement homologué','plaques moto'],[CO,IMM],
 [('Où se trouve le numéro de châssis d’une moto ?','En général frappé sur le cadre, près de la colonne de direction. Il doit correspondre au champ 23 du permis de circulation.'),
  ('Les valises et le top-case sont-ils inclus ?','Seulement s’ils sont inscrits dans le contrat. Listez tous les accessoires vendus avec la moto.'),
  ('Que faire d’un échappement non homologué ?','Indiquez-le comme défaut connu. Une transformation non inscrite au permis peut poser problème à l’expertise.')],
'''
Une moto se vend comme une voiture : contrat, paiement, remise, plaques. Mais il faut être plus précis sur ce qui accompagne la machine.

## 1. Le numéro de châssis

Sur une moto, il est **frappé sur le cadre**, près de la colonne de direction. Comparez-le avec le **champ 23** du permis de circulation avant de signer.

## 2. Accessoires

Valises, top-case, pare-carters, housse, deuxième jeu de pneus : **écrivez-les dans le contrat**. Ce qui n’y figure pas peut devenir une source de litige.

## 3. Transformations

Échappement, rétroviseurs, guidon : certaines pièces doivent être **inscrites au permis de circulation**. Vérifiez-le avec l’acheteur et indiquez honnêtement ce qui ne l’est pas.

## 4. Paiement et remise

Virement crédité avant la remise ou espèces contre quittance. Procès-verbal avec l’heure, le kilométrage et les clés.

## 5. Plaques

Comme pour la voiture, les **plaques de moto restent au vendeur**. L’acheteur immatricule la moto à son nom avec sa propre assurance.

## En résumé

Numéro de châssis contrôlé, accessoires et transformations dans le contrat, plaques démontées.
''')

c('preter-de-l-argent-a-un-ami','Prêter de l’argent à un ami : contrat, intérêts et remboursement','Prêter de l’argent',
 'Comment prêter de l’argent à un ami ou un proche en Suisse : contrat de prêt écrit, virement, intérêts seulement s’ils sont convenus, mensualités et remboursement.',
 'Un contrat signé, l’argent par virement et une date de remboursement claire. Sans date, le prêt est remboursable dans les six semaines dès la première réclamation.',
 'argent','pret',['contrat-de-pret',Q],
 ['prêter de l’argent','contrat de prêt ami','prêt entre particuliers','intérêts prêt privé','remboursement prêt'],[CO,LP],
 [('Un prêt entre amis doit-il être écrit ?','La loi ne l’exige pas, mais sans écrit il est difficile de prouver le montant et la date de remboursement. Le contrat signé vaut en plus reconnaissance de dette.'),
  ('Puis-je demander des intérêts ?','Oui, s’ils sont convenus. Entre particuliers, sans convention, aucun intérêt n’est dû. Le taux doit rester raisonnable.'),
  ('Que se passe-t-il sans date de remboursement ?','L’emprunteur doit rembourser dans les six semaines dès la première réclamation (art. 318 CO).')],
'''
Prêter de l’argent à quelqu’un de proche est un geste de confiance. Un contrat simple protège aussi l’amitié : chacun sait à quoi il s’engage.

## 1. Le contrat de prêt

Indiquez le **montant** (en chiffres et en lettres), les deux parties et la manière dont l’argent est remis. Le contrat signé par l’emprunteur **vaut reconnaissance de dette** : en cas de poursuite, il permet de demander la mainlevée provisoire (art. 82 LP).

## 2. Le versement

Préférez le **virement** avec la mention « prêt selon contrat du … ». En espèces, faites signer une quittance.

## 3. Le remboursement

En une fois à une date précise ou par **mensualités**. Pour des mensualités, un plan en annexe indique chaque échéance. Sans date convenue, le prêt est remboursable **dans les six semaines dès la première réclamation** (art. 318 CO).

## 4. Les intérêts

Entre particuliers, des intérêts ne sont dus **que s’ils sont convenus**. Restez raisonnable : les intérêts usuraires sont interdits.

## 5. Si les remboursements s’arrêtent

Une clause prévoit que tout le solde devient exigible après deux mensualités impayées. Ensuite : mise en demeure, puis poursuite si nécessaire.

## En résumé

Contrat signé, virement, date ou plan de remboursement – et des intérêts seulement s’ils sont écrits.
''')

c('le-debiteur-ne-paie-pas-poursuite','Le débiteur ne paie pas : mise en demeure et poursuite','Débiteur qui ne paie pas',
 'Que faire quand quelqu’un ne vous paie pas en Suisse : mise en demeure, intérêt moratoire de 5 %, réquisition de poursuite, opposition et mainlevée provisoire.',
 'D’abord une mise en demeure avec un délai, puis la poursuite à l’office du domicile du débiteur. Une reconnaissance de dette signée accélère tout.',
 'argent','dettes',['mise-en-demeure','reconnaissance-de-dette','convention-paiement-echelonne'],
 ['débiteur ne paie pas','mise en demeure','poursuite','commandement de payer','opposition','mainlevée provisoire'],[CO,LP,POUR],
 [('Combien d’intérêt moratoire puis-je demander ?','5 % l’an sur une dette d’argent dès la demeure (art. 104 CO), même si un intérêt contractuel plus bas avait été convenu.'),
  ('Où introduire une poursuite ?','À l’office des poursuites du domicile du débiteur, par une réquisition de poursuite.'),
  ('Que se passe-t-il si le débiteur fait opposition ?','La poursuite est suspendue. Avec une reconnaissance de dette signée, vous pouvez demander au juge la mainlevée provisoire de l’opposition (art. 82 LP).')],
'''
Une facture impayée ou un prêt non remboursé : la Suisse a une procédure simple, la **poursuite**. Elle commence souvent par une lettre.

## 1. La mise en demeure

Si aucun jour d’échéance précis n’a été convenu, c’est la **mise en demeure** qui fait tomber le débiteur en demeure (art. 102 CO). Indiquez la créance, le montant, un délai (souvent 7 à 14 jours) et votre compte. Envoyez-la en recommandé.

## 2. L’intérêt moratoire

Dès la demeure, un **intérêt de 5 % l’an** est dû sur les dettes d’argent (art. 104 CO). Vous pouvez y renoncer en cas de paiement dans le délai.

## 3. La réquisition de poursuite

Sans paiement, déposez une **réquisition de poursuite** à l’office des poursuites du domicile du débiteur. L’office lui notifie un **commandement de payer**.

## 4. Opposition et mainlevée

Le débiteur peut faire **opposition** dans les dix jours ; la poursuite s’arrête alors. Avec une **reconnaissance de dette signée** (ou un contrat de prêt signé), vous pouvez demander au juge la **mainlevée provisoire** (art. 82 LP).

## 5. Un accord vaut souvent mieux

Si le débiteur veut payer mais ne peut pas tout d’un coup, une **convention de paiement échelonné** avec reconnaissance de dette vous protège et évite la procédure.

## En résumé

Mise en demeure écrite, puis poursuite. Avec une reconnaissance de dette, l’opposition se lève plus facilement.
''')

c('reconnaissance-de-dette-et-prescription','Reconnaissance de dette et prescription : quand une dette se prescrit','Prescription des dettes',
 'Quand une dette se prescrit en Suisse : délai général de 10 ans, 5 ans pour les intérêts et loyers, et comment une reconnaissance de dette interrompt la prescription.',
 'La plupart des créances se prescrivent par 10 ans, les intérêts et loyers par 5 ans. Une reconnaissance de dette interrompt la prescription : un nouveau délai commence.',
 'argent','dettes',['reconnaissance-de-dette','convention-paiement-echelonne'],
 ['prescription dette','reconnaissance de dette','délai de prescription suisse','interruption prescription','10 ans'],[CO],
 [('Quel est le délai de prescription général ?','10 ans pour la plupart des créances (art. 127 CO). Les intérêts, loyers et autres prestations périodiques se prescrivent par 5 ans (art. 128 CO).'),
  ('Qu’est-ce qui interrompt la prescription ?','Notamment la reconnaissance de la dette par le débiteur et la poursuite (art. 135 CO). Un nouveau délai commence alors à courir.'),
  ('Un simple rappel suffit-il ?','Non. Une lettre de rappel n’interrompt pas la prescription ; il faut une reconnaissance du débiteur ou un acte de poursuite.')],
'''
Une dette ne disparaît pas, mais après un certain temps elle ne peut plus être exigée contre la volonté du débiteur. Il faut connaître les délais – et savoir les faire repartir.

## 1. Les délais

La plupart des créances se prescrivent par **10 ans** (art. 127 CO). Les **intérêts, loyers** et autres prestations périodiques se prescrivent par **5 ans** (art. 128 CO).

## 2. Ce qui interrompt la prescription

La prescription est interrompue notamment lorsque le débiteur **reconnaît la dette** – par écrit, par un paiement partiel ou un acompte – et par un **acte de poursuite** (art. 135 CO). Un nouveau délai complet commence alors.

## 3. Ce qui ne suffit pas

Un rappel ou un e-mail du créancier **n’interrompt pas** la prescription. Il reste utile pour montrer que vous avez réclamé.

## 4. En pratique

Faites signer une **reconnaissance de dette** avec le montant et la cause. Elle interrompt la prescription et, en cas de poursuite, permet de demander la mainlevée provisoire (art. 82 LP).

## En résumé

10 ans en général, 5 ans pour les prestations périodiques. Une reconnaissance signée relance le délai et renforce votre position.
''')

c('paiement-par-mensualites-entre-particuliers','Payer une dette par mensualités : convention et plan de paiement','Paiement échelonné',
 'Comment convenir d’un paiement par mensualités d’une dette en Suisse : reconnaissance de dette, plan de paiement, intérêts, clause de déchéance et délai de grâce.',
 'Une convention écrite fixe les mensualités, contient une reconnaissance de dette et prévoit ce qui se passe en cas de retard. Le créancier renonce à la poursuite tant que tout est payé.',
 'argent','dettes',['convention-paiement-echelonne','reconnaissance-de-dette'],
 ['paiement par mensualités','convention de paiement échelonné','plan de paiement','clause de déchéance','délai de grâce'],[CO,LP],
 [('Faut-il une reconnaissance de dette dans la convention ?','C’est conseillé : elle interrompt la prescription et permet la mainlevée provisoire en cas de poursuite.'),
  ('Qu’est-ce que la clause de déchéance ?','En cas de retard, tout le solde devient exigible d’un coup. Un délai de grâce de 14 jours évite qu’un petit retard déclenche tout.'),
  ('Peut-on demander des intérêts ?','Oui, s’ils sont convenus et raisonnables. Une entreprise qui accorde un délai de paiement avec intérêts ou frais doit respecter la loi sur le crédit à la consommation.')],
'''
Quand un débiteur veut payer mais pas tout d’un coup, une convention de paiement échelonné est souvent plus utile qu’une poursuite.

## 1. Le montant et la cause

Inscrivez le **montant encore dû** le jour de la signature et sa **cause** : quelle facture, quel contrat, quelle date. Le débiteur **reconnaît la dette** (art. 17 CO).

## 2. Les mensualités

Fixez une **mensualité réaliste**, le jour d’échéance et le mois de la première. Un **plan de paiement** en annexe indique chaque mensualité et le solde restant.

## 3. La clause de déchéance

Choisissez quand tout le solde devient exigible : dès le premier retard, après un **délai de grâce de 14 jours** ou après deux mensualités manquées. Le créancier l’annonce par écrit.

## 4. Les intérêts

Facultatifs. Entre particuliers, on s’en passe souvent. Pour une entreprise, la loi sur le crédit à la consommation peut s’appliquer si elle facture des intérêts ou des frais ; les mensualités sans intérêts ni frais n’y sont pas soumises.

## 5. Le suivi

Payez par virement avec une mention (« mensualité 3/10 »). Après la dernière, le débiteur peut demander une confirmation que la dette est éteinte.

## En résumé

Reconnaissance de dette, plan réaliste, clause de déchéance claire – signés par les deux.
''')

c('donation-d-argent-impot-cantonal','Donner de l’argent à ses enfants : forme et impôt sur les donations','Donation d’argent',
 'Donner de l’argent en Suisse : donation manuelle sans forme, promesse écrite, contrat comme preuve et impôt cantonal (conjoints et descendants souvent exonérés).',
 'Une donation de la main à la main est valable sans forme ; un contrat écrit sert de preuve. L’impôt sur les donations dépend du canton.',
 'argent','donation',['contrat-de-donation'],
 ['donation d’argent','donner de l’argent à ses enfants','impôt sur les donations','contrat de donation','donation manuelle'],[CO,DON],
 [('Une donation doit-elle être écrite ?','La donation manuelle est valable sans forme. La promesse de donner plus tard doit être écrite (art. 243 CO). Pour un immeuble, un acte authentique est nécessaire.'),
  ('Qui paie l’impôt sur les donations ?','En règle générale le bénéficiaire. Il n’existe pas d’impôt fédéral sur les donations ; la plupart des cantons en perçoivent un.'),
  ('Les enfants sont-ils exonérés ?','Les conjoints et partenaires enregistrés sont exonérés partout ; les descendants dans la plupart des cantons. Vérifiez auprès de l’administration fiscale de votre canton.')],
'''
Aider un enfant à acheter un logement ou une voiture, faire un cadeau à un neveu : en Suisse, une donation est simple, mais l’impôt dépend du canton.

## 1. La forme

Une **donation manuelle** – l’argent est remis tout de suite – est valable **sans forme**. Seule la **promesse de donner** plus tard doit être écrite (art. 243 CO). Un contrat écrit reste la meilleure **preuve**, par exemple face à l’administration fiscale ou aux autres héritiers.

## 2. Le contrat

Indiquez le donateur, le donataire, le **lien de parenté**, le montant en lettres et la manière dont l’argent est remis. Un virement avec la mention « donation » laisse une trace.

## 3. L’impôt cantonal

Il n’y a pas d’impôt fédéral sur les donations. La **plupart des cantons** en perçoivent un, payé en général par le bénéficiaire. Les **conjoints** et partenaires enregistrés sont exonérés partout, les **descendants** dans la plupart des cantons.

## 4. Les immeubles

Pour donner un immeuble, un **acte authentique** est toujours nécessaire – un modèle de contrat privé ne suffit pas.

## En résumé

Donation remise tout de suite, contrat comme preuve, et un coup d’œil aux règles fiscales de votre canton.
''')
print('ok')
