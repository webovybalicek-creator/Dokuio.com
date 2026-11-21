/**
 * Surse oficiale pentru modelele românești. Verificat 21. 11. 2026 (legislatie.just.ro, ANAF, ANPC, Poliția de Frontieră, e-Justice):
 * Codul civil – donația se încheie prin înscris autentic, cu excepția darului manual (bunuri mobile corporale de până la 25.000 lei,
 * cu predarea bunului, art. 1011); termenul general de prescripție 3 ani (art. 2517), recunoașterea datoriei întrerupe prescripția
 * (art. 2537); contractele de locațiune înregistrate la organul fiscal sunt titlu executoriu pentru chirie (art. 1798).
 * Cod fiscal – contractul de închiriere se înregistrează la ANAF în 30 de zile (formular C168). OG 13/2011 – dobânda se stabilește
 * prin act scris (art. 6); între persoane care nu sunt profesioniști, dobânda convențională nu poate depăși dobânda legală cu
 * peste 50 % pe an (art. 5). Legea 70/2015 – numerar între persoane fizice până la 50.000 lei pe tranzacție. Ordinul comun
 * 772/966/123/2026 (MO nr. 680/17.08.2026) – formularul tipizat „Contract de înstrăinare-dobândire a unui mijloc de transport –
 * Model 2026 ITL 054”, verificarea fiscală a vânzătorului și a cumpărătorului, transcriere în 90 de zile. OUG 34/2014 – retragere
 * în 14 zile, rambursare în 14 zile. OUG 140/2021 – răspunderea vânzătorului pentru neconformitate 2 ani. Codul muncii art. 81 –
 * preaviz la demisie cel mult 20 de zile lucrătoare (execuție) sau 45 (conducere). Legea 248/2005 art. 30 – ieșirea minorului
 * din țară fără un părinte: declarația notarială a celuilalt părinte.
 */
export const COD_CIVIL = { nazev: 'Codul civil (Legea nr. 287/2009, republicată)', url: 'https://edirect.e-guvernare.ro/Uploads/Legi/35897/lege%20287%202009%20codul%20civil..html' };
export const CODUL_MUNCII = { nazev: 'Codul muncii (Legea nr. 53/2003, republicată) – art. 81, demisia', url: 'https://legislatie.just.ro/Public/DetaliiDocument/228069' };
export const OG13 = { nazev: 'OG nr. 13/2011 privind dobânda legală remuneratorie și penalizatoare', url: 'https://legislatie.just.ro/Public/DetaliiDocument/284919' };
export const OUG34 = { nazev: 'OUG nr. 34/2014 privind drepturile consumatorilor în contractele cu profesioniștii (ANPC)', url: 'https://anpc.ro/wp-content/uploads/2025/05/Ordonanta-de-urgenta-nr.-34-2014-privind-drepturile-consumatorilor-in-cadrul-contractelor-incheiate-cu-profesionistii.pdf' };
export const OUG140 = { nazev: 'OUG nr. 140/2021 privind contractele de vânzare de bunuri (conformitate)', url: 'https://legislatie.just.ro/Public/DetaliiDocumentAfis/303291' };
export const L248 = { nazev: 'Legea nr. 248/2005 privind libera circulație a cetățenilor români în străinătate', url: 'https://legislatie.just.ro/Public/DetaliiDocument/63704' };
export const PF_MODEL_MINOR = { nazev: 'Model de declarație pentru ieșirea din țară a minorului (Poliția de Frontieră Română)', url: 'https://www.politiadefrontiera.ro/files/docu/1477633035161-modeldeclaratieinsotitorcopilminorinstrainatatealtapersoanafizicamajora.pdf' };
export const EJUSTICE_MINOR = { nazev: 'Deplasarea copiilor în străinătate – România (portalul e-Justiție)', url: 'https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/ro_ro' };
export const ANAF_CHIRII = { nazev: 'Venituri din cedarea folosinței bunurilor – înregistrarea contractelor (ANAF)', url: 'https://static.anaf.ro/static/10/Galati/ven_inch_2024.pdf' };
export const ANAF_NUMERAR = { nazev: 'Disciplina financiară – plăți în numerar, Legea nr. 70/2015 (ANAF)', url: 'https://static.anaf.ro/static/10/Brasov/Brasov/disciplina_financiara.pdf' };
export const ANAF_DONATII = { nazev: 'Precizări ANAF privind sumele primite de la rude (donații, dar manual)', url: 'https://static.anaf.ro/static/3/Anaf/20250312115842_com%20281%20precizari%20anaf.pdf' };
export const ITL054 = { nazev: 'Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054 (anexa la Ordinul 772/966/123/2026, MO nr. 680/2026)', url: 'https://alba24.ro/wp-content/uploads/2026/08/model-contract-de-instrainare-dobandire-a-unui-mijloc-de-transport.pdf' };

export const SFAT_IDENTITATE = 'Verificați identitatea celeilalte părți după actul de identitate și copiați numele și CNP-ul exact cum apar în act.';
export const SFAT_NUMERAR = 'Numărați banii la semnare; sumele mari plătiți-le în cont – extrasul bancar este cea mai bună dovadă. Între persoane fizice, numerarul este permis până la 50.000 lei pe tranzacție (Legea nr. 70/2015).';
export const SUBSOL = (kod: string) =>
  `Pregătit gratuit · șablon ${kod} v1.0 · model pentru completare, nu consultanță juridică · pentru conținut răspund părțile`;
