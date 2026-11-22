import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
CC=('Codul civil (Legea nr. 287/2009)','https://edirect.e-guvernare.ro/Uploads/Legi/35897/lege%20287%202009%20codul%20civil..html')
ITL=('Model 2026 ITL 054 – Ordinul 772/966/123/2026','https://alba24.ro/wp-content/uploads/2026/08/model-contract-de-instrainare-dobandire-a-unui-mijloc-de-transport.pdf')
NUM=('Disciplina financiară, Legea nr. 70/2015 (ANAF)','https://static.anaf.ro/static/10/Brasov/Brasov/disciplina_financiara.pdf')
OG13=('OG nr. 13/2011 privind dobânda legală','https://legislatie.just.ro/Public/DetaliiDocument/284919')
DON=('Precizări ANAF privind sumele primite de la rude','https://static.anaf.ro/static/3/Anaf/20250312115842_com%20281%20precizari%20anaf.pdf')
CHI=('Venituri din cedarea folosinței bunurilor (ANAF)','https://static.anaf.ro/static/10/Galati/ven_inch_2024.pdf')
O34=('OUG nr. 34/2014 privind drepturile consumatorilor (ANPC)','https://anpc.ro/wp-content/uploads/2025/05/Ordonanta-de-urgenta-nr.-34-2014-privind-drepturile-consumatorilor-in-cadrul-contractelor-incheiate-cu-profesionistii.pdf')
O140=('OUG nr. 140/2021 privind vânzarea de bunuri','https://legislatie.just.ro/Public/DetaliiDocumentAfis/303291')
CM=('Codul muncii (Legea nr. 53/2003)','https://legislatie.just.ro/Public/DetaliiDocument/228069')
L248=('Legea nr. 248/2005 privind libera circulație','https://legislatie.just.ro/Public/DetaliiDocument/63704')
PF=('Model de declarație pentru minor (Poliția de Frontieră)','https://www.politiadefrontiera.ro/files/docu/1477633035161-modeldeclaratieinsotitorcopilminorinstrainatatealtapersoanafizicamajora.pdf')
EJ=('Deplasarea copiilor în străinătate – România (e-Justiție)','https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/ro_ro')

def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    clanek('ro', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo)

c('vanzare-masina-second-hand','Vânzarea unei mașini second-hand: contract, ITL 054 și predare','Vânzarea mașinii',
 'Cum vindeți o mașină rulată unei persoane fizice: contractul, formularul Model 2026 ITL 054 cu viza fiscală, plata, ora predării și transcrierea în 90 de zile.',
 'Contract cu VIN, formularul oficial ITL 054 vizat la taxe locale, banii în cont și proces-verbal cu ora predării. Cumpărătorul are 90 de zile pentru transcriere.',
 'auto','vanzare-masina',['contract-vanzare-cumparare-auto','proces-verbal-predare-vehicul','chitanta-primire-bani'],
 ['vanzare masina','contract vanzare cumparare auto','itl 054','transcriere','masina second hand'],[CC,ITL,NUM],
 [('Ce formular se folosește în 2026?','Formularul tipizat „Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054”, aprobat prin Ordinul comun 772/966/123/2026. Pe el organul fiscal local verifică datoriile vânzătorului și ale cumpărătorului.'),
  ('Plătesc impozit pe banii din vânzare?','Veniturile din transferul bunurilor mobile din patrimoniul personal sunt, ca regulă, neimpozabile (Codul fiscal). Altfel stau lucrurile dacă vindeți mașini în mod repetat, ca activitate.'),
  ('Cât pot primi în numerar?','Între persoane fizice, cel mult 50.000 lei pe tranzacție (Legea nr. 70/2015). Peste această sumă, plata se face în cont.')],
'''
Vânzarea unei mașini între persoane fizice are două părți: **înțelegerea dintre voi** (preț, stare, predare) și **formalitățile oficiale** (viza fiscală și transcrierea). Dacă le faceți pe amândouă cu grijă, nu riscați amenzi pentru mașina pe care nu o mai aveți.

## 1. Pregătiți actele

- certificatul de înmatriculare (talonul) și cartea de identitate a vehiculului (CIV),
- toate cheile și carnetul de service,
- actul de identitate – în contract treceți numele, domiciliul și CNP-ul ambelor părți.

## 2. Contractul și formularul ITL 054

Transferul se înregistrează pe formularul oficial **Model 2026 ITL 054**, completat de regulă în 5 exemplare. Organul fiscal local verifică pe formular că **nici vânzătorul, nici cumpărătorul** nu au datorii la bugetul local – fără această verificare actul este nul de drept.

Formularul tipizat nu spune însă nimic despre defecte, ora predării sau modul de plată. Pentru acestea folosiți un contract de vânzare-cumpărare care îl completează.

## 3. Plata

- cel mai sigur este transferul în cont – extrasul este dovada plății,
- în numerar, între persoane fizice, cel mult **50.000 lei** pe tranzacție,
- la plata în numerar dați sau cereți o chitanță.

## 4. Predarea și ora exactă

Până la transcriere mașina figurează pe numele vânzătorului. Treceți în contract sau în procesul-verbal **data și ora predării**, kilometrajul și ce ați predat. Așa dovediți de când nu mai aveți vehiculul.

## 5. După semnare

- **cumpărătorul** cere transcrierea dreptului de proprietate în cel mult **90 de zile**,
- **vânzătorul** scoate mașina din evidența fiscală locală și anunță asigurătorul RCA.

## Pe scurt

Contract cu VIN, formularul ITL 054 vizat, banii în cont și ora predării pe hârtie – și vânzarea este încheiată corect.
''')

c('cumparare-masina-second-hand','Cumpărarea unei mașini second-hand: ce verificați înainte de plată','Cumpărarea unei mașini rulate',
 'Ce verificați la cumpărarea unei mașini rulate de la o persoană fizică: proprietarul, VIN-ul, kilometrajul, leasingul, datoriile la taxe locale și transcrierea.',
 'Înainte să plătiți verificați actele și VIN-ul, iar înainte de semnare asigurați-vă că nu aveți datorii la taxe locale – din 2026 se verifică și cumpărătorul.',
 'auto','cumparare-masina',['contract-vanzare-cumparare-auto','proces-verbal-predare-vehicul'],
 ['cumparare masina second hand','verificare masina','vin','kilometraj','certificat fiscal'],[CC,ITL],
 [('De ce trebuie să nu am eu datorii?','Formularul Model 2026 ITL 054 conține o rubrică în care organul fiscal local atestă că și cumpărătorul și-a achitat obligațiile la bugetul local. Fără ea transferul nu poate fi finalizat.'),
  ('Ce fac dacă VIN-ul nu corespunde?','Nu cumpărați. Numărul din certificatul de înmatriculare și cel de pe vehicul trebuie să fie identice.')],
'''
La o mașină rulată, cele mai multe probleme se pot evita cu o verificare atentă **înainte** de plată.

## 1. Verificați proprietarul

Vânzătorul trebuie să fie trecut ca proprietar în certificatul de înmatriculare și în CIV. Comparați numele cu actul de identitate. Dacă vinde altcineva, cereți procura.

## 2. VIN-ul și kilometrajul

- VIN-ul din certificatul de înmatriculare (rubrica **E**) trebuie să fie identic cu cel de pe vehicul,
- comparați kilometrajul cu carnetul de service și cu inspecțiile tehnice anterioare,
- întrebați direct dacă mașina este în **leasing** sau gajată.

## 3. Datoriile la taxe locale – și ale dvs.

Din 2026, la transferul unui vehicul se verifică situația fiscală **a ambelor părți**. Înainte de semnare asigurați-vă că nu aveți restanțe la impozitele locale – altfel formularul ITL 054 nu primește viza.

## 4. Contractul

Treceți în contract defectele cunoscute, prețul, modul de plată și ora predării. Pentru defectele pe care le cunoșteați la cumpărare vânzătorul nu mai răspunde ulterior.

## 5. Transcrierea

Aveți **90 de zile** pentru a cere transcrierea dreptului de proprietate. Încheiați asigurarea RCA pe numele dvs. înainte de a pleca cu mașina.

## Pe scurt

Proprietar, VIN, leasing, datorii locale – verificați-le înainte să plătiți, nu după.
''')

c('transcriere-masina-90-zile','Transcrierea mașinii: termenul de 90 de zile și actele necesare','Transcrierea mașinii',
 'Transcrierea dreptului de proprietate asupra unei mașini cumpărate: termenul de 90 de zile, formularul ITL 054 vizat fiscal, procura și ce face vânzătorul.',
 'Cumpărătorul cere transcrierea în 90 de zile, pe baza formularului ITL 054 vizat de taxe locale. Dacă se ocupă altcineva, aveți nevoie de procură.',
 'auto','transcriere',['contract-vanzare-cumparare-auto','procura','contract-donatie'],
 ['transcriere auto','90 de zile','itl 054','viza fiscala','procura transcriere'],[CC,ITL],
 [('Cine face transcrierea?','Cumpărătorul (noul proprietar). Vânzătorul nu poate cere singur înscrierea noului proprietar.'),
  ('Poate face altcineva transcrierea în locul meu?','Da, cu procură. Serviciile de înmatriculare cer de regulă procură notarială – întrebați înainte.')],
'''
După semnarea contractului, mașina trebuie trecută și oficial pe numele cumpărătorului. Acest pas se numește **transcrierea dreptului de proprietate**.

## 1. Termenul

Noul proprietar cere transcrierea în cel mult **90 de zile** de la dobândire. Termenul este menționat și pe noul formular Model 2026 ITL 054.

## 2. Viza fiscală

Înainte de transcriere, formularul ITL 054 se prezintă la direcția de taxe locale. Organul fiscal verifică dacă **vânzătorul și cumpărătorul** nu au datorii la bugetul local și aplică viza pe formular.

## 3. La serviciul de înmatriculări

Cumpărătorul depune dosarul la serviciul de înmatriculare din județul de domiciliu. De regulă sunt necesare:

- cererea de înmatriculare,
- formularul ITL 054 vizat,
- certificatul de înmatriculare și CIV-ul,
- actul de identitate și dovada asigurării RCA.

Lista exactă și taxele le găsiți la serviciul de înmatriculare.

## 4. Procura

Dacă transcrierea o face altcineva (o rudă, un intermediar), are nevoie de procură. Instituțiile cer de regulă **procură notarială**.

## 5. Ce face vânzătorul

Vânzătorul scoate mașina din evidența fiscală locală și anunță asigurătorul. Păstrează un exemplar al contractului și procesul-verbal cu ora predării.

## Pe scurt

ITL 054 vizat, dosar la înmatriculări, 90 de zile – și mașina e pe numele dvs.
''')

c('amenda-dupa-vanzarea-masinii','Amendă după vânzarea mașinii: cum dovediți că nu mai era a dvs.','Amendă după vânzare',
 'Ați vândut mașina, iar amenda vine tot la dvs.? Cum dovediți ora predării, de ce contează procesul-verbal și ce puteți face dacă cumpărătorul nu face transcrierea.',
 'Până la transcriere mașina figurează pe numele vânzătorului. Contractul și procesul-verbal cu ora exactă a predării dovedesc cine conducea.',
 'auto','vanzare-masina',['proces-verbal-predare-vehicul','contract-vanzare-cumparare-auto'],
 ['amenda dupa vanzare','masina vanduta amenda','proces verbal predare','transcriere','proprietar'],[CC,ITL],
 [('Pot face eu transcrierea în locul cumpărătorului?','Nu. Înscrierea noului proprietar o cere cumpărătorul. Dacă nu o face, rămâne să dovediți predarea cu actele semnate.'),
  ('Ce dovadă e cea mai bună?','Contractul și procesul-verbal semnat de ambele părți, cu data și ora predării, plus fotografii ale bordului.')],
'''
Ați vândut mașina, iar după câteva săptămâni primiți o amendă pentru o depășire de viteză. Se întâmplă când cumpărătorul **amână transcrierea**.

## 1. De ce vine amenda la dvs.

Până la transcriere, în evidențe figurează vechiul proprietar. Autoritatea trimite înștiințarea pe adresa din evidență – adică la dvs.

## 2. Dovada: ora predării

Cel mai important document este cel care arată **când** ați predat mașina:

- contractul de vânzare-cumpărare cu data și ora,
- procesul-verbal de predare-primire semnat de ambele părți,
- fotografii cu bordul și kilometrajul în ziua predării.

## 3. Ce faceți când primiți amenda

Răspundeți în termenul indicat pe înștiințare și atașați copia contractului și a procesului-verbal. Arătați că la data faptei vehiculul era predat cumpărătorului.

## 4. Cum preveniți

- treceți ora predării în contract,
- semnați formularul ITL 054 și mergeți împreună la taxe locale,
- păstrați datele de contact ale cumpărătorului și amintiți-i termenul de 90 de zile.

## Pe scurt

Fără oră pe hârtie e greu de dovedit. Cu procesul-verbal semnat, amenda nu este problema dvs.
''')

c('vanzare-motocicleta','Vânzarea unei motociclete sau a unui scuter: contract și ITL 054','Vânzarea motocicletei',
 'Cum vindeți o motocicletă sau un scuter unei persoane fizice: contractul, formularul ITL 054 cu viza fiscală, echipamentele, plata și transcrierea în 90 de zile.',
 'La motocicletă se aplică aceleași reguli ca la mașină: formularul ITL 054 vizat, transcriere în 90 de zile. Treceți și echipamentele și modificările.',
 'auto','vanzare-masina',['contract-vanzare-cumparare-moto','proces-verbal-predare-vehicul','chitanta-primire-bani'],
 ['vanzare motocicleta','contract moto','vanzare scuter','itl 054 moto','transcriere moto'],[CC,ITL],
 [('Am nevoie de alt formular decât la mașină?','Nu. Formularul Model 2026 ITL 054 se folosește pentru orice mijloc de transport, inclusiv motociclete.'),
  ('Trebuie trecute modificările?','Da. Treceți echipamentele (genți, protecții, eșapament) și verificați dacă modificările care cer omologare sunt înscrise în certificatul de înmatriculare.')],
'''
Vânzarea unei motociclete urmează aceiași pași ca vânzarea unei mașini. Câteva detalii merită însă atenție.

## 1. VIN-ul pe cadru

La motociclete VIN-ul este de regulă **ștanțat pe cadru**, lângă furcă. Comparați-l cu certificatul de înmatriculare.

## 2. Echipamente și modificări

Treceți în contract ce se vinde împreună cu motocicleta: genți, protecții, a doua cheie, eșapament original. Modificările care cer omologare trebuie să fie înscrise în acte.

## 3. Formularul ITL 054

Și la motociclete transferul se face pe formularul **Model 2026 ITL 054**, cu verificarea fiscală a ambelor părți la taxe locale.

## 4. Plata și predarea

- plata în cont sau, în numerar, cel mult 50.000 lei între persoane fizice,
- proces-verbal cu kilometrajul și **ora** predării,
- cumpărătorul cere transcrierea în **90 de zile**.

## Pe scurt

Același drum ca la mașină, plus lista echipamentelor. Motocicleta pleacă, actele rămân în ordine.
''')

c('vanzare-masina-in-rate','Vânzarea mașinii în rate între persoane fizice: cum vă protejați','Vânzarea mașinii în rate',
 'Vindeți mașina în rate unei persoane fizice? Cum stabiliți graficul de plată, ce înseamnă rezerva proprietății, când semnați ITL 054 și ce faceți la întârziere.',
 'Vânzarea în rate cere încredere și acte clare: un grafic de plată semnat, rezerva proprietății și formalitățile oficiale abia după plata integrală.',
 'auto','vanzare-masina',['contract-vanzare-cumparare-auto','acord-plata-esalonata'],
 ['vanzare masina in rate','plata in rate','rezerva proprietatii','grafic de plata','masina rate persoana fizica'],[CC,ITL],
 [('Ce este rezerva proprietății?','O clauză prin care vânzătorul rămâne proprietar până la plata integrală a prețului (Codul civil). Față de terți devine opozabilă doar în condițiile legii.'),
  ('Când să semnăm formularul ITL 054?','Cel mai sigur – după plata integrală. Odată transferul înregistrat, mașina este a cumpărătorului.')],
'''
O mașină vândută „în rate” prietenului sau unei cunoștințe pare o idee bună – până la prima rată întârziată. Cu acte clare, riscul scade mult.

## 1. Prețul și ratele în scris

Stabiliți în contract prețul total și separat un **acord de plată eșalonată**: numărul ratelor, suma, ziua scadenței și contul în care se plătește.

## 2. Rezerva proprietății

Prin contract puteți conveni ca **dreptul de proprietate să treacă abia după plata integrală**. Clauza vă protejează în relația cu cumpărătorul.

## 3. Formalitățile – la final

Formularul ITL 054 și transcrierea înregistrează oficial transferul. Cel mai prudent este să le faceți **după ultima rată**. Dacă predați mașina mai devreme, consemnați ora predării – de atunci cumpărătorul răspunde pentru folosire.

## 4. Întârzierea

Acordul trebuie să spună ce se întâmplă la întârziere, de exemplu că după **două rate neplătite** devine scadent întregul rest. Prin semnarea acordului cumpărătorul recunoaște datoria – ceea ce întrerupe prescripția.

## Pe scurt

Contract, grafic de rate semnat și formalitățile oficiale la final – așa vindeți în rate fără surprize.
''')

c('donatie-masina','Donația unei mașini în familie: dar manual sau notar','Donația mașinii',
 'Cum donați o mașină unei rude: când ajunge darul manual până la 25.000 lei, când e nevoie de notar, impozitul și transcrierea la noul proprietar.',
 'O mașină de până la 25.000 lei poate fi donată ca dar manual, cu predarea ei. Peste această valoare donația se face prin act autentic la notar.',
 'auto','transcriere',['contract-donatie','proces-verbal-predare-vehicul'],
 ['donatie masina','dar manual masina','donatie intre rude','notar donatie','transcriere donatie'],[CC,DON],
 [('Pot dona mașina fără notar?','Doar dacă valoarea ei este de cel mult 25.000 lei și o predați efectiv – atunci este un dar manual (art. 1011 Cod civil). Altfel donația trebuie încheiată prin înscris autentic.'),
  ('Se plătește impozit pe donație?','Potrivit ANAF, donațiile și darurile manuale între rude se încadrează la venituri neimpozabile.')],
'''
A da mașina copilului sau părinților pare simplu, dar legea română este strictă cu **forma donației**.

## 1. Regula: actul autentic

Donația se încheie prin **înscris autentic la notar**, altfel este nulă (art. 1011 Cod civil).

## 2. Excepția: darul manual

Bunurile mobile corporale de cel mult **25.000 lei** pot fi donate ca **dar manual** – prin acordul părților și predarea efectivă a bunului. O mașină mai veche, cu valoare redusă, se poate încadra aici; consemnați valoarea estimată în scris.

## 3. Mașinile mai valoroase

Peste 25.000 lei mergeți la notar. Notarul întocmește actul și vă spune ce documente aduceți (certificatul de înmatriculare, CIV-ul, evaluarea).

## 4. Impozitul

Potrivit ANAF, donațiile și darurile manuale între rude sunt **venituri neimpozabile**.

## 5. După donație

Noul proprietar face transcrierea la serviciul de înmatriculare. Întrebați înainte la taxe locale și la înmatriculări ce acte cer pentru transferul prin donație.

## Pe scurt

Până la 25.000 lei – dar manual cu predare; peste – notar. Apoi transcrierea pe numele noului proprietar.
''')

c('imprumut-prieten','Împrumut unui prieten: cum dați bani și îi primiți înapoi','Împrumut unui prieten',
 'Cum împrumutați bani unui prieten sau unei rude: contract scris, transfer în cont, rate, dobândă în limitele OG 13/2011, prescripția de 3 ani și notarul.',
 'Un contract scurt, banii în cont și un termen clar de restituire vă scutesc de discuții neplăcute. Dobânda se stabilește doar în scris.',
 'bani','imprumut',['contract-imprumut','chitanta-primire-bani','recunoastere-datorie'],
 ['imprumut prieten','contract de imprumut','imprumut intre persoane fizice','dobanda','restituire'],[CC,OG13],
 [('Este valabil un împrumut fără contract?','Da, dar e greu de dovedit. Un contract scris și transferul în cont sunt cea mai bună dovadă.'),
  ('Cât poate fi dobânda?','Între persoane care nu sunt profesioniști, dobânda convențională nu poate depăși dobânda legală cu mai mult de 50 % pe an (OG nr. 13/2011).'),
  ('Ce aduce notarul?','Un contract autentificat la notar este titlu executoriu – la neplată puteți merge direct la executor, fără proces.')],
'''
Împrumuturile între prieteni se strică de cele mai multe ori din cauza **neînțelegerilor**, nu a rea-voinței. Un contract scurt le previne.

## 1. Scrieți ce v-ați înțeles

- suma, în cifre și în litere,
- termenul de restituire – integral sau în rate,
- contul în care se restituie banii.

## 2. Banii în cont

Transferați suma cu mențiunea „împrumut conform contractului din …”. Extrasul bancar dovedește că banii au fost dați.

## 3. Dobânda

Dacă vreți dobândă, ea trebuie stabilită **în scris**. Între persoane fizice care nu sunt profesioniști dobânda nu poate depăși dobânda legală cu mai mult de 50 % pe an.

## 4. Când nu se plătește

Termenul general de prescripție este de **3 ani** (art. 2517 Cod civil). Dacă datornicul promite că plătește, cereți-i o **recunoaștere de datorie** scrisă – aceasta întrerupe prescripția.

## Pe scurt

Contract, transfer în cont, termen clar. Pentru sume mari – contract la notar.
''')

c('datornicul-nu-plateste','Datornicul nu plătește: notificare, recunoaștere și rate','Datornicul nu plătește',
 'Ce faceți când cineva nu vă returnează banii: notificarea de plată, recunoașterea datoriei, acordul de plată în rate, prescripția și ordonanța de plată.',
 'Începeți cu o notificare scrisă cu termen. Dacă datornicul vrea să plătească, dar nu poate deodată, semnați un acord de plată în rate.',
 'bani','datorie',['notificare-plata','recunoastere-datorie','acord-plata-esalonata'],
 ['datornic nu plateste','recuperare bani','notificare de plata','punere in intarziere','ordonanta de plata'],[CC,OG13],
 [('Notificarea întrerupe prescripția?','Doar dacă este urmată de chemarea în judecată în termenul prevăzut de Codul civil. Întrerupe prescripția recunoașterea datoriei de către datornic.'),
  ('Ce dobândă pot cere pentru întârziere?','De la scadență se datorează dobânda legală penalizatoare (OG nr. 13/2011), dacă nu ați convenit altceva.')],
'''
Ați împrumutat bani sau ați făcut o lucrare, iar plata nu vine. Iată pașii, de la cel mai blând la cel mai ferm.

## 1. Notificarea de plată

Trimiteți o **notificare scrisă** prin scrisoare recomandată cu confirmare de primire: suma, temeiul datoriei, data scadenței, termenul de plată și IBAN-ul. Prin ea îl puneți pe datornic în întârziere.

## 2. Recunoașterea datoriei

Dacă datornicul nu contestă datoria, cereți-i o **recunoaștere scrisă**. Aceasta întrerupe prescripția – termenul de 3 ani începe din nou.

## 3. Plata în rate

Când datornicul vrea să plătească, dar nu poate deodată, un **acord de plată eșalonată** stabilește ratele și ce se întâmplă la întârziere.

## 4. Instanța

Dacă nici așa nu plătește, vă puteți adresa instanței – pentru creanțe certe și scadente există procedura **ordonanței de plată**. Notificarea trimisă anterior și actele semnate vă ajută ca dovezi.

## 5. Atenție la termen

Termenul general de prescripție este de **3 ani**. Nu așteptați până în ultima clipă.

## Pe scurt

Notificare cu termen, recunoaștere sau rate, iar la nevoie – instanța. Totul în scris.
''')

c('recunoastere-datorie-prescriptie','Recunoașterea de datorie și prescripția: cum păstrați creanța','Recunoașterea datoriei',
 'Ce este recunoașterea de datorie, cum întrerupe prescripția de 3 ani din Codul civil și ce trebuie să conțină declarația debitorului ca să vă protejeze.',
 'O recunoaștere scrisă a datoriei întrerupe prescripția – termenul începe din nou. Treceți suma, temeiul și termenul de plată.',
 'bani','datorie',['recunoastere-datorie','contract-imprumut'],
 ['recunoastere de datorie','prescriptie','3 ani','intreruperea prescriptiei','creanta'],[CC],
 [('Ce înseamnă întreruperea prescripției?','Timpul scurs până la recunoaștere nu se mai socotește; termenul începe să curgă din nou (art. 2537 Cod civil).'),
  ('Ajunge un SMS?','Recunoașterea poate rezulta și din alte acte, dar o declarație scrisă și semnată este dovada cea mai sigură.')],
'''
Creanțele nu durează la nesfârșit. După expirarea termenului de prescripție, nu mai puteți obține cu succes plata în instanță. **Recunoașterea datoriei** oprește ceasul.

## 1. Ce este prescripția

Termenul general de prescripție este de **3 ani** (art. 2517 Cod civil). Pentru unele creanțe legea prevede alte termene.

## 2. Ce face recunoașterea

Când debitorul recunoaște datoria, prescripția se **întrerupe** – termenul începe să curgă din nou de la data recunoașterii (art. 2537).

## 3. Ce trebuie scris

- cine datorează și cui,
- **suma** în cifre și în litere,
- **temeiul** – împrumut, preț neplătit, prejudiciu,
- **termenul de plată** și contul.

## 4. Când o folosiți

- când debitorul promite plata, dar timpul trece,
- când împrumutul s-a dat fără contract,
- înainte de un acord de plată în rate.

## Pe scurt

O semnătură a debitorului pe o recunoaștere de datorie păstrează creanța în viață.
''')

c('donatie-bani-familie','Donația de bani în familie: dar manual, notar și impozit','Donația de bani',
 'Cum donați bani copiilor sau altor rude: darul manual de până la 25.000 lei, când e nevoie de notar, ce spune ANAF despre impozit și ce să scrieți.',
 'Banii sunt bunuri mobile: până la 25.000 lei se pot dona ca dar manual. Peste această sumă donația se face la notar. Între rude nu se plătește impozit.',
 'bani','donatie',['contract-donatie','chitanta-primire-bani'],
 ['donatie bani','dar manual','donatie copil','donatie notar','impozit donatie'],[CC,DON],
 [('Pot împărți o sumă mare în mai multe daruri manuale?','Nu este o soluție sigură. O donație cu valoare totală peste 25.000 lei nu mai este considerată dar manual – mergeți la notar.'),
  ('Trebuie declarată donația la ANAF?','Potrivit ANAF, sumele primite de la rude sunt donații sau daruri manuale și se încadrează la venituri neimpozabile.')],
'''
Părinții ajută adesea copiii cu bani – pentru o casă, o mașină sau studii. Iată ce trebuie să știți.

## 1. Darul manual

Bunurile mobile corporale, **inclusiv banii**, de cel mult **25.000 lei** pot fi donate ca dar manual – prin acordul părților și predarea efectivă (art. 1011 Cod civil). Un înscris scurt servește ca dovadă.

## 2. Peste 25.000 lei

Pentru sume mai mari donația se încheie prin **înscris autentic la notar**. Altfel este nulă. Fragmentarea artificială a unei sume mari nu este o soluție sigură.

## 3. Impozitul

ANAF a precizat că sumele primite de la rude sunt donații sau daruri manuale și se încadrează la **venituri neimpozabile**.

## 4. Cum transferați

- transfer în cont cu mențiunea „donație”,
- în numerar, între persoane fizice, cel mult 50.000 lei pe tranzacție,
- păstrați înscrisul semnat de ambele părți.

## Pe scurt

Până la 25.000 lei – dar manual cu un înscris simplu. Peste – notar. Impozit între rude – nu.
''')

c('inchiriere-apartament','Închirierea unui apartament: contract, garanție și ANAF','Închirierea apartamentului',
 'Ce trebuie să conțină contractul de închiriere a unui apartament: chiria, utilitățile, garanția, preavizul, procesul-verbal și înregistrarea la ANAF.',
 'Un contract scris, garanția clar stabilită și un proces-verbal cu indexurile la mutare. Proprietarul înregistrează contractul la ANAF în 30 de zile.',
 'locuinta','inchiriere',['contract-inchiriere-locuinta','proces-verbal-predare-locuinta','chitanta-primire-bani'],
 ['inchiriere apartament','contract de inchiriere','garantie chirie','inregistrare anaf','chirias'],[CC,CHI],
 [('Cât poate fi garanția?','Legea nu o limitează. Stabiliți suma și termenul de restituire în contract.'),
  ('De ce să ceară chiriașul înregistrarea la ANAF?','Înregistrarea este obligația proprietarului care obține venituri din chirii. Contractul înregistrat este titlu executoriu pentru plata chiriei.')],
'''
Fie că sunteți proprietar sau chiriaș, un contract bine scris evită cele mai multe conflicte.

## 1. Ce trebuie să conțină

- datele părților și ale persoanelor care vor locui,
- adresa, suprafața și dotările locuinței,
- durata – determinată sau nedeterminată,
- **chiria**, ziua plății și contul,
- utilitățile plătite de chiriaș.

## 2. Garanția

Cuantumul garanției **nu este limitat de lege**. Treceți suma și termenul în care se restituie după predare – de exemplu 30 de zile – și ce se poate reține.

## 3. Procesul-verbal de predare

La mutare consemnați **indexurile contoarelor**, cheile, dotările și eventualele deteriorări. La plecare starea se compară cu acest document.

## 4. ANAF

Proprietarul care obține venituri din chirii înregistrează contractul la organul fiscal în cel mult **30 de zile** (formular C168). Contractul înregistrat este **titlu executoriu** pentru chirie (art. 1798 Cod civil).

## 5. Încetarea

Treceți preavizul pentru chiriaș. Proprietarul poate denunța sau rezilia contractul numai în condițiile Codului civil.

## Pe scurt

Contract scris, garanție clară, proces-verbal la mutare – și înregistrare la ANAF.
''')

c('cum-inchiriezi-apartamentul','Cum închiriați apartamentul ca proprietar: pași și obligații','Cum închiriați apartamentul',
 'Ghid pentru proprietar: alegerea chiriașului, contractul, garanția, procesul-verbal, înregistrarea la ANAF în 30 de zile și declararea venitului din chirii.',
 'Verificați chiriașul, semnați un contract clar, consemnați starea la predare și nu uitați de ANAF: înregistrarea în 30 de zile și declarația unică.',
 'locuinta','inchiriere',['contract-inchiriere-locuinta','proces-verbal-predare-locuinta','chitanta-primire-bani'],
 ['inchiriere proprietar','venit din chirii','formular c168','declaratia unica','inchiriez apartamentul'],[CC,CHI],
 [('În cât timp înregistrez contractul?','În cel mult 30 de zile de la încheiere, la fel și modificările ulterioare – cu formularul C168, la ghișeu sau prin SPV.'),
  ('Cum declar venitul?','Venitul din chirii se declară prin declarația unică; detaliile și termenele le găsiți la ANAF.')],
'''
Închirierea unui apartament aduce un venit stabil – dacă începeți corect.

## 1. Alegeți chiriașul

Cereți actul de identitate și discutați despre locul de muncă și despre cine va locui în apartament. Treceți toate persoanele în contract.

## 2. Contractul

Stabiliți chiria, ziua plății, utilitățile, garanția și preavizul. Interziceți sau permiteți explicit subînchirierea și animalele.

## 3. Predarea

Faceți fotografii și semnați un **proces-verbal** cu indexurile contoarelor, cheile și dotările.

## 4. Obligațiile fiscale

- înregistrați contractul la ANAF în cel mult **30 de zile** (formular C168),
- declarați venitul din chirii prin **declarația unică**,
- comunicați în 30 de zile și modificările sau încetarea contractului.

Contractul înregistrat devine **titlu executoriu** pentru chirie – dacă chiriașul nu plătește, puteți merge direct la executor.

## Pe scurt

Chiriaș verificat, contract clar, proces-verbal și ANAF – patru pași pentru o închiriere fără griji.
''')

c('subinchiriere','Subînchirierea unei camere sau a apartamentului: ce trebuie știut','Subînchirierea',
 'Puteți subînchiria o cameră sau apartamentul închiriat? Ce spune contractul principal, de ce contează acordul scris al proprietarului și ce obligații fiscale aveți.',
 'Verificați contractul principal și cereți acordul scris al proprietarului. Subînchirierea nu poate dura mai mult decât închirierea dvs.',
 'locuinta','inchiriere',['contract-subinchiriere','proces-verbal-predare-locuinta'],
 ['subinchiriere','subinchiriere camera','acord proprietar','sublocatiune','coleg de apartament'],[CC,CHI],
 [('Am nevoie de acordul proprietarului?','Dacă contractul principal interzice subînchirierea, nu o faceți. Chiar dacă nu o interzice, acordul scris al proprietarului previne conflictele.'),
  ('Trebuie declarat venitul?','Da. Venitul din subînchiriere este venit din cedarea folosinței bunurilor; contractul se înregistrează la ANAF.')],
'''
Un coleg de apartament ajută la plata chiriei. Dar subînchirierea are reguli.

## 1. Contractul principal

Citiți-vă contractul de închiriere. Dacă **interzice subînchirierea**, nu subînchiriați – riscați rezilierea.

## 2. Acordul proprietarului

Chiar dacă contractul nu interzice subînchirierea, cereți **acordul scris** al proprietarului și atașați-l la contractul de subînchiriere.

## 3. Durata

Subînchirierea nu poate dura mai mult decât închirierea dvs. Când încetează contractul principal, încetează și subînchirierea.

## 4. Contractul de subînchiriere

- ce se subînchiriază – o cameră sau întreaga locuință,
- suma lunară cu utilități și garanția,
- preavizul pentru denunțare.

## 5. ANAF

Venitul din subînchiriere se înregistrează și se declară la fel ca venitul din chirii.

## Pe scurt

Contract principal verificat, acord scris al proprietarului și un contract de subînchiriere clar.
''')

c('denuntare-inchiriere-garantie','Încheierea închirierii: preaviz, predare și restituirea garanției','Denunțarea închirierii',
 'Cum încheiați închirierea ca chiriaș: notificarea de denunțare, preavizul din contract, procesul-verbal la predare și restituirea garanției.',
 'Trimiteți notificarea scrisă cu preavizul din contract, predați locuința cu proces-verbal și cereți garanția în contul indicat.',
 'locuinta','sfarsit-inchiriere',['denuntare-contract-inchiriere','proces-verbal-predare-locuinta'],
 ['denuntare contract inchiriere','preaviz chirias','restituire garantie','predare apartament','plecare din chirie'],[CC],
 [('De când curge preavizul?','De la data la care proprietarul primește notificarea. Trimiteți-o recomandat sau cereți semnătură de primire.'),
  ('Ce se poate reține din garanție?','Datoriile neplătite și pagubele consemnate la predare. Uzura normală nu este pagubă.')],
'''
Vă mutați? Iată cum încheiați închirierea fără să pierdeți garanția.

## 1. Notificarea scrisă

Trimiteți proprietarului o **notificare de denunțare** cu preavizul din contract. Preavizul curge de la primirea ei.

## 2. Contractul pe durată determinată

Verificați dacă acesta permite denunțarea înainte de termen. Dacă nu, propuneți un **acord de încetare** – prin acord puteți conveni orice dată.

## 3. Predarea

În ziua plecării semnați un **proces-verbal** cu indexurile contoarelor și starea locuinței. Comparați-l cu cel de la mutare.

## 4. Garanția

Cereți restituirea garanției în contul indicat. Proprietarul poate reține doar datoriile și pagubele consemnate – **uzura normală nu este pagubă**.

## Pe scurt

Notificare cu preaviz, proces-verbal la predare și IBAN pentru garanție.
''')

c('incetare-inchiriere-acordul-partilor','Încetarea închirierii prin acordul părților: fără preaviz','Încetarea prin acord',
 'Când proprietarul și chiriașul vor să încheie închirierea mai repede: acordul de încetare, data predării, restituirea garanției și notificarea la ANAF.',
 'Prin acord puteți încheia închirierea în orice zi, fără preaviz. Treceți data predării, garanția și ce se mai datorează.',
 'locuinta','sfarsit-inchiriere',['acord-incetare-inchiriere','proces-verbal-predare-locuinta','denuntare-contract-inchiriere'],
 ['incetare inchiriere','acordul partilor','fara preaviz','garantie','c168 incetare'],[CC,CHI],
 [('Trebuie anunțată ANAF?','Dacă proprietarul a înregistrat contractul la ANAF, încetarea se declară tot în 30 de zile.'),
  ('Ce se întâmplă cu chiria până la plecare?','Chiriașul plătește chiria și utilitățile până la data convenită în acord.')],
'''
Nu întotdeauna e nevoie de preaviz. Dacă proprietarul și chiriașul sunt de acord, închirierea se poate încheia **în orice zi**.

## 1. Acordul de încetare

Un document scurt, semnat de amândoi: contractul care încetează, **data încetării** și cine ce mai datorează.

## 2. Predarea locuinței

Până la data convenită chiriașul eliberează locuința și predă cheile. Consemnați predarea într-un **proces-verbal** cu indexurile contoarelor.

## 3. Garanția

Treceți suma de restituit, termenul și contul. Eventualele rețineri – concret, cu suma.

## 4. ANAF

Proprietarul care a înregistrat contractul declară încetarea în **30 de zile**.

## Pe scurt

Acord semnat, proces-verbal la predare, garanția restituită – și închirierea s-a încheiat corect.
''')

c('retur-produse-online-14-zile','Returul produselor cumpărate online: 14 zile fără motiv','Returul online',
 'Cum returnați un produs cumpărat online: dreptul de retragere în 14 zile conform OUG 34/2014, formularul de retragere, rambursarea în 14 zile și costurile.',
 'Aveți 14 zile să vă retrageți fără motiv. Trimiteți formularul înainte de termen, iar comerciantul vă rambursează banii în cel mult 14 zile.',
 'cumparaturi','retur',['formular-retragere','reclamatie-produs-neconform'],
 ['retur 14 zile','formular de retragere','retur online','rambursare','oug 34/2014'],[O34],
 [('De când curg cele 14 zile?','La produse, de regulă din ziua în care ați intrat în posesia produsului.'),
  ('Cine plătește transportul la retur?','Costurile directe de returnare le suportă, de regulă, consumatorul, dacă a fost informat. Livrarea standard inițială se rambursează.')],
'''
La cumpărăturile online sau prin telefon aveți un drept special: vă puteți **retrage în 14 zile**, fără să spuneți de ce.

## 1. Termenul

Pentru produse, cele 14 zile curg de regulă din ziua în care ați primit produsul. Este suficient să trimiteți notificarea **înainte** de expirarea termenului.

## 2. Cum vă retrageți

Folosiți formularul de retragere sau orice declarație clară. Trimiteți-l prin e-mail sau scrisoare recomandată și păstrați dovada.

## 3. Rambursarea

Comerciantul vă rambursează **toate plățile**, inclusiv livrarea standard, în cel mult **14 zile** de la informare (OUG nr. 34/2014). Poate aștepta până primește produsul înapoi sau dovada expedierii.

## 4. Returul

Trimiteți produsul înapoi în 14 zile de la retragere. Costul returului îl suportați de regulă dvs., dacă ați fost informat.

## Pe scurt

14 zile, formular trimis la timp, banii înapoi în 14 zile.
''')

c('reclamatie-produs-neconform-garantie','Produs cu defect: reclamația și garanția legală de 2 ani','Reclamația',
 'Ce faceți când un produs se strică: garanția legală de 2 ani din OUG 140/2021, reparare sau înlocuire, reducerea prețului, restituirea banilor și ANPC.',
 'Vânzătorul răspunde 2 ani pentru neconformitatea existentă la livrare. Cereți întâi reparare sau înlocuire, gratuit și într-un termen rezonabil.',
 'cumparaturi','reclamatie',['reclamatie-produs-neconform','formular-retragere'],
 ['reclamatie produs','garantie 2 ani','produs defect','neconformitate','anpc'],[O140],
 [('Garanția comercială înlocuiește garanția legală?','Nu. Garanția comercială oferită de producător se adaugă garanției legale de conformitate.'),
  ('Ce fac dacă reparația nu reușește?','Puteți cere reducerea proporțională a prețului sau rezoluțiunea contractului și restituirea banilor.')],
'''
Mașina de spălat se oprește după trei luni, telefonul nu mai încarcă. Aveți drepturi clare.

## 1. Garanția legală de conformitate

Vânzătorul răspunde pentru orice lipsă de conformitate existentă la livrare care se manifestă în **2 ani** (OUG nr. 140/2021).

## 2. Ce cereți întâi

- **repararea** sau **înlocuirea** produsului,
- gratuit și într-un termen rezonabil,
- fără inconveniente semnificative pentru dvs.

## 3. Când remedierea nu reușește

Puteți cere **reducerea prețului** sau **rezoluțiunea** contractului și restituirea banilor.

## 4. Cum faceți reclamația

Descrieți exact defectul, data cumpărării și ce cereți. Atașați bonul sau factura. Cereți confirmarea primirii.

## 5. Dacă vânzătorul refuză

Vă puteți adresa **ANPC**. Păstrați copia reclamației și răspunsul vânzătorului.

## Pe scurt

2 ani de garanție legală, reparare sau înlocuire întâi, apoi bani înapoi – totul în scris.
''')

c('reclamatie-respinsa','Reclamația a fost respinsă: ce mai puteți face','Reclamație respinsă',
 'Vânzătorul v-a respins reclamația? Cum cereți motivarea scrisă, o expertiză independentă, sesizarea ANPC și când are sens să mergeți în instanță.',
 'Nu vă opriți la primul refuz. Cereți motivarea în scris, contestați-o cu dovezi și sesizați ANPC.',
 'cumparaturi','reclamatie',['reclamatie-produs-neconform'],
 ['reclamatie respinsa','anpc','expertiza','garantie refuzata','drepturile consumatorului'],[O140],
 [('Vânzătorul spune că defectul e din vina mea. Ce fac?','Cereți raportul de constatare în scris și, la nevoie, o expertiză independentă. Apoi sesizați ANPC cu toate actele.')],
'''
Un „nu” al vânzătorului nu este ultimul cuvânt.

## 1. Cereți motivarea în scris

Fără motivare scrisă nu puteți contesta. Cereți raportul de constatare sau decizia scrisă a vânzătorului.

## 2. Verificați argumentele

- defectul a apărut în 2 ani de la livrare?
- „folosirea necorespunzătoare” este dovedită sau doar afirmată?
- produsul a fost folosit conform instrucțiunilor?

## 3. Expertiza independentă

Dacă nu sunteți de acord cu constatarea, o expertiză tehnică independentă poate fi o dovadă puternică.

## 4. ANPC

Sesizați **Autoritatea Națională pentru Protecția Consumatorilor** și atașați reclamația, răspunsul vânzătorului și dovezile.

## 5. Instanța

Pentru sume mari, ultima variantă este instanța. Actele scrise din pașii anteriori sunt dovezile principale.

## Pe scurt

Motivare scrisă, dovezi, ANPC – și abia apoi instanța.
''')

c('vanzare-prin-anunt','Vânzarea prin anunț online: contract, plată și înșelătorii','Vânzarea prin anunț',
 'Cum vindeți în siguranță prin anunț online: descrierea bunului și a defectelor, contractul simplu, plata înainte de predare și cele mai frecvente înșelătorii.',
 'Descrieți onest bunul, predați-l după ce primiți banii și nu trimiteți niciodată datele cardului sau coduri din SMS.',
 'cumparaturi','vanzare-anunt',['contract-vanzare-cumparare','chitanta-primire-bani'],
 ['vanzare prin anunt','vanzare online','inselatorie','contract vanzare bun','plata in avans'],[CC,NUM],
 [('Cum recunosc o înșelătorie?','Cumpărătorul vrea să „plătească” prin link și vă cere datele cardului sau un cod din SMS. Nu le dați niciodată.'),
  ('Am nevoie de contract la un bun mic?','Nu e obligatoriu, dar un contract simplu cu defectele cunoscute vă protejează dacă apar discuții.')],
'''
Vânzarea prin anunț e rapidă, dar atrage și escroci. Câteva reguli simple vă protejează.

## 1. Descrierea onestă

Treceți în anunț și în contract **defectele cunoscute**. Pentru defectele pe care cumpărătorul le cunoștea vânzătorul nu răspunde.

## 2. Plata înainte de predare

- în numerar la întâlnire – numărați banii,
- sau în cont – predați bunul după ce banii sunt în cont, nu după o „confirmare”.

## 3. Înșelătoriile

Cea mai frecventă: un „cumpărător” trimite un link pentru „încasarea banilor” și cere **datele cardului** sau un **cod din SMS**. Pentru a primi bani nu aveți nevoie de ele – nu le dați niciodată.

## 4. Contractul

Pentru bunurile mai valoroase semnați un contract simplu: bunul, starea, prețul și plata.

## Pe scurt

Descriere onestă, bani înainte, niciun cod din SMS. Și un contract scurt pentru liniștea ambelor părți.
''')

c('imprumut-bun-comodat','Împrumutul unui bun unui prieten: contractul de comodat','Comodatul',
 'Când împrumutați gratuit o remorcă, un cort sau mașina: ce este comodatul, ce scrieți în contract, cine răspunde pentru pagube și când se restituie bunul.',
 'Comodatul este împrumutul gratuit al unui bun. Treceți starea, valoarea și termenul de restituire – vă ajută dacă bunul se strică.',
 'cumparaturi','comodat',['contract-comodat','proces-verbal-predare-vehicul'],
 ['comodat','imprumut bun','imprumut masina prieten','contract de comodat','paguba'],[CC],
 [('Ce fac dacă bunul se strică?','Dacă bunul se deteriorează din culpa comodatarului, acesta despăgubește comodantul. Valoarea trecută în contract ușurează înțelegerea.'),
  ('Poate comodatarul să dea bunul altcuiva?','Nu, fără acordul comodantului (Codul civil).')],
'''
Împrumutați vecinului bormașina sau prietenului remorca? Juridic, acesta este un **comodat**.

## 1. Ce este comodatul

Un împrumut **gratuit** de folosință: comodatarul folosește bunul și îl restituie pe același. Dacă se plătește pentru folosință, este închiriere.

## 2. Ce scrieți

- bunul și **starea** lui la predare,
- **valoarea** estimată,
- scopul folosinței și **termenul** de restituire.

## 3. Reguli de folosință

Comodatarul folosește bunul cu prudență, doar în scopul convenit, și **nu îl dă altuia** fără acordul dvs.

## 4. Pagubele

Dacă bunul se deteriorează din vina comodatarului, acesta despăgubește. Uzura normală nu se plătește.

## 5. Mașina

Când împrumutați mașina, semnați și un **proces-verbal** cu kilometrajul și ora predării.

## Pe scurt

Gratuit, pe termen, cu starea consemnată – așa rămâneți prieteni și după împrumut.
''')

c('contract-cu-meseriasul','Contractul cu meseriașul: preț, termen, recepție și vicii','Contractul cu meseriașul',
 'Ce trebuie să conțină contractul cu un meseriaș sau o firmă: descrierea lucrării, materialele, prețul, avansul, termenul, recepția și remedierea viciilor.',
 'Descrieți exact lucrarea, stabiliți prețul și termenul, iar la recepție verificați imediat și comunicați viciile în scris.',
 'servicii','meseriasi',['contract-prestari-servicii','notificare-plata'],
 ['contract meserias','contract de antrepriza','renovare','avans','vicii lucrare'],[CC],
 [('Cât avans să dau?','Cât mai puțin – ideal doar pentru materiale. Plătiți avansul și restul în cont, pe bază de factură.'),
  ('Ce fac dacă meseriașul întârzie?','Acordați-i în scris un termen suplimentar rezonabil; după expirare puteți rezolvi contractul și cere despăgubiri.')],
'''
Cele mai multe conflicte cu meseriașii pornesc de la o înțelegere **doar verbală**.

## 1. Descrierea lucrării

Cât mai exact: volumul, materialele, cine le cumpără, calitatea și unde se lucrează.

## 2. Prețul și avansul

- preț fix sau mod clar de calcul,
- avans cât mai mic, plătit în cont,
- lucrările suplimentare doar cu **acord scris**.

## 3. Termenul

Data începerii și a finalizării. La întârziere acordați un **termen suplimentar** în scris.

## 4. Recepția

La final verificați lucrarea și comunicați **imediat, în scris**, viciile constatate. Antreprenorul le remediază pe cheltuiala lui.

## 5. Plata finală

Plătiți restul după recepția fără vicii.

## Pe scurt

Contract de antrepriză scris, avans mic, recepție atentă – și renovarea se termină fără ceartă.
''')

c('demisie-preaviz','Demisia: preavizul de 20 sau 45 de zile și cum o depuneți','Demisia',
 'Cum vă dați demisia conform art. 81 din Codul muncii: notificarea scrisă, preavizul de cel mult 20 sau 45 de zile lucrătoare, înregistrarea și renunțarea la preaviz.',
 'Demisia nu trebuie motivată. Preavizul este cel din contract, cel mult 20 de zile lucrătoare (execuție) sau 45 (conducere).',
 'munca','demisie',['demisie'],
 ['demisie','preaviz','codul muncii art 81','demisie fara preaviz','perioada de proba'],[CM],
 [('Pot pleca fără preaviz?','Da, dacă angajatorul renunță la preaviz sau dacă nu își îndeplinește obligațiile din contract (art. 81 Codul muncii). În perioada de probă contractul poate înceta printr-o notificare scrisă, fără preaviz.'),
  ('Ce fac dacă angajatorul refuză să înregistreze demisia?','Angajatorul este obligat să o înregistreze. Dacă refuză, o puteți dovedi prin orice mijloc de probă – de exemplu scrisoare recomandată.')],
'''
Ați găsit un loc de muncă nou? Demisia este simplă, dacă respectați câteva reguli.

## 1. Notificarea scrisă

Demisia este o **notificare scrisă** către angajator. Nu trebuie să o motivați (art. 81 Codul muncii).

## 2. Preavizul

Preavizul este cel din contractul individual sau colectiv de muncă, dar nu mai mult de:

- **20 de zile lucrătoare** pentru funcțiile de execuție,
- **45 de zile lucrătoare** pentru funcțiile de conducere.

Pe durata preavizului contractul continuă să producă toate efectele.

## 3. Înregistrarea

Depuneți demisia la registratură și cereți **număr de înregistrare** pe exemplarul dvs. Dacă angajatorul refuză, trimiteți-o prin scrisoare recomandată.

## 4. Plecare mai devreme

Angajatorul poate **renunța la preaviz**, total sau parțial. Dacă angajatorul nu își îndeplinește obligațiile din contract, puteți demisiona fără preaviz. În perioada de probă contractul poate înceta printr-o notificare scrisă, fără preaviz.

## 5. Concediul rămas

Cereți efectuarea concediului de odihnă rămas sau compensarea lui.

## Pe scurt

Notificare scrisă, număr de înregistrare, preaviz de cel mult 20 sau 45 de zile lucrătoare.
''')

c('calatorie-minor-fara-parinti','Copilul călătorește în străinătate fără părinți: declarația notarială','Călătoria minorului',
 'Ce acte trebuie când un minor iese din România cu un singur părinte, cu bunicii sau cu altă persoană: declarația notarială conform Legii 248/2005 și excepțiile.',
 'Cu un singur părinte – declarația notarială a celuilalt. Cu bunicii sau alt adult – declarația notarială a ambilor părinți. Plus actul de călătorie al copilului.',
 'familie','calatorie-minor',['declaratie-acord-calatorie-minor'],
 ['calatorie minor','procura minor','declaratie notariala minor','iesire din tara copil','acord parinti'],[L248,PF,EJ],
 [('Ajunge o declarație scrisă de mână?','Nu. La frontieră se cere declarația autentificată la notar (sau la consulat).'),
  ('Când nu e nevoie de declarație?','Când celălalt părinte a decedat, este decăzut din drepturi, părintele însoțitor exercită singur autoritatea părintească sau copilul are domiciliul ori reședința în țara de destinație – situații dovedite cu acte.')],
'''
Pentru ieșirea minorilor din România, regulile sunt stricte – și nu s-au schimbat odată cu intrarea în Schengen.

## 1. Cu un singur părinte

Părintele însoțitor prezintă la frontieră **declarația celuilalt părinte** privind acordul pentru călătorie (Legea nr. 248/2005, art. 30).

## 2. Cu bunicii sau cu altă persoană

Este nevoie de **declarația ambilor părinți**. Perioada pentru care se dă acordul nu poate depăși 3 ani de la întocmirea declarației.

## 3. La notar

Declarația se **autentifică la notar** (sau la consulatul României). Pregătiți:

- actele de identitate ale părinților,
- datele copilului și ale însoțitorului,
- destinația, scopul și perioada călătoriei.

Însoțitorul păstrează un duplicat, iar al doilea însoțește pașaportul minorului.

## 4. Excepțiile

Declarația nu este necesară dacă celălalt părinte a decedat, este decăzut din drepturile părintești, dacă părintele însoțitor exercită singur autoritatea părintească sau dacă minorul are domiciliul ori reședința în statul de destinație. Situațiile se dovedesc cu documente oficiale.

## 5. Actul de călătorie

Copilul are nevoie de propriul **pașaport** sau carte de identitate valabilă.

## Pe scurt

Text pregătit, notar, duplicatul la însoțitor – și copilul trece frontiera fără probleme.
''')

c('procura-cand-notar','Procura: când ajunge semnătura privată și când trebuie notar','Procura',
 'Când ajunge o împuternicire sub semnătură privată și când este nevoie de procură notarială: imobile, vehicule, bănci, instituții și revocarea procurii.',
 'Pentru acte simple ajunge o împuternicire scrisă. Pentru actele care cer formă autentică și la multe instituții este nevoie de procură notarială.',
 'procura','procura',['procura','contract-vanzare-cumparare-auto'],
 ['procura','imputernicire','procura notariala','procura auto','revocare procura'],[CC],
 [('Pot revoca procura?','Da, oricând. Comunicați revocarea mandatarului și celor cărora le-a fost prezentată procura.'),
  ('Ce trec în procură?','Actele cât mai exact – de exemplu „depunerea dosarului de transcriere pentru vehiculul cu nr. …” – și valabilitatea.')],
'''
Nu puteți ajunge personal la bancă, la primărie sau la înmatriculări? Altcineva poate merge în locul dvs. – cu o **procură**.

## 1. Împuternicirea sub semnătură privată

Pentru acte simple – ridicarea unui colet, depunerea unor acte – ajunge de multe ori o **împuternicire scrisă** și semnată.

## 2. Când trebuie notar

- pentru actele care trebuie încheiate în **formă autentică** (de ex. vânzarea sau donația unui imobil) procura trebuie să fie și ea autentică (Codul civil, mandatul),
- multe instituții – bănci, serviciile de înmatriculare – cer **procură notarială**.

Întrebați instituția înainte.

## 3. Ce scrieți

- datele mandantului și ale mandatarului,
- **actele** permise, cât mai exact,
- **valabilitatea** procurii.

## 4. Revocarea

Procura poate fi **revocată oricând**. Comunicați revocarea mandatarului și instituțiilor la care a fost prezentată.

## Pe scurt

Act simplu – împuternicire scrisă. Act important sau instituție pretențioasă – notar.
''')
print('ok')
