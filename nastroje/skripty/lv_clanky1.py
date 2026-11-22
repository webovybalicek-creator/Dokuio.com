import sys; sys.path.insert(0,'/home/claude/skripty')
from lv_zdroje import *

c('lietota-auto-pardosana','Lietota auto pārdošana: līgums, samaksa un īpašnieka maiņa','Auto pārdošana',
 'Kā pārdot lietotu auto privātpersonai: pirkuma līgums, droša samaksa, nodošanas laiks un īpašnieka maiņa e-CSDD 5 dienu laikā.',
 'Līgums ar VIN, nauda ar pārskaitījumu un nodošanas akts ar laiku. Pircējs izdara atzīmi e-CSDD, jūs to apstiprināt 5 dienu laikā.',
 'auto','auto-pardosana',['auto-pirkuma-ligums','auto-nodosanas-akts','naudas-sanemsanas-kvits'],
 ['auto pārdošana','īpašnieka maiņa','pirkuma līgums','lietots auto','e-CSDD'],[CSDD,TEN,CL],
 [('Vai auto pārdošanai vajadzīgs notārs?','Nē. Starp privātpersonām pietiek ar rakstveida pirkuma līgumu un īpašnieka maiņu e-CSDD vai CSDD klientu apkalpošanas centrā.'),
  ('Kurš sāk īpašnieka maiņu?','Pircējs e-CSDD izdara atzīmi par vēlmi iegādāties transportlīdzekli, un pārdevējs to apstiprina 5 dienu laikā. Ar apstiprinājumu īpašuma tiesības pāriet pircējam.'),
  ('Kas jāzina par ekspluatācijas nodokli?','CSDD īpašnieka maiņu nereģistrē, ja par kārtējo gadu nav samaksāts transportlīdzekļa ekspluatācijas nodoklis. Vienojieties, kurš to sedz.')],
'''
Auto pārdošana starp privātpersonām sastāv no divām daļām: **vienošanās starp jums** (cena, stāvoklis, nodošana) un **īpašnieka maiņas reģistrā**. Ja abas izdarāt kārtīgi, vēlāk jums nepienāks paziņojumi par auto, kas vairs nav jūsu.

## 1. Pirms pārdošanas

Sagatavojiet reģistrācijas apliecību, visas atslēgas un servisa grāmatiņu. Pārbaudiet, vai auto nav līzingā vai ieķīlāts – ja transportlīdzeklim reģistrēts aizliegums vai komercķīla, CSDD īpašnieka maiņu neveiks.

## 2. Pirkuma līgums

Līgumā ierakstiet abu pušu vārdu, **personas kodu** un adresi, auto marku, reģistrācijas numuru un **VIN**, nobraukumu, zināmos defektus un cenu vārdiem.

Defekti, ko rakstveidā atzīmējat, vēlāk nevar kļūt par strīda iemeslu, jo pircējs par tiem zināja. Tāpēc esiet godīgi un konkrēti.

## 3. Samaksa

Visdrošākais ir **bankas pārskaitījums** pirms atslēgu nodošanas. Ja pircējs maksā skaidrā naudā, pārskaitiet naudu viņa klātbūtnē un parakstiet kvīti par naudas saņemšanu.

## 4. Nodošana un laiks

Sastādiet **nodošanas aktu** ar datumu un **laiku**, nobraukumu, atslēgām un dokumentiem. Līdz īpašnieka maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto – akts parāda, kura rokās auto bija.

## 5. Īpašnieka maiņa e-CSDD

Pircējs e-CSDD izdara atzīmi, ka vēlas iegādāties konkrēto transportlīdzekli. Jūs šo atzīmi apstiprināt **5 dienu laikā** – citādi tā tiek dzēsta. Ar jūsu apstiprinājumu īpašuma tiesības pāriet pircējam. Ja pircējs ar auto piedalīsies ceļu satiksmē, viņš 5 dienu laikā reģistrē īpašnieka maiņu savā vārdā un iegādājas OCTA polisi.

## Kopsavilkums

Līgums ar VIN, nauda ar pārskaitījumu, akts ar laiku un apstiprinājums e-CSDD tajā pašā dienā.
''')

c('lietota-auto-pirksana','Lietota auto pirkšana: kas jāpārbauda pirms samaksas','Lietota auto pirkšana',
 'Pērkat lietotu auto no privātpersonas? Kas jāpārbauda: īpašnieks, VIN, nobraukums, aizliegumi, ekspluatācijas nodoklis un kas jāieraksta līgumā.',
 'Pārdevējam jābūt reģistrētajam īpašniekam, un VIN jāsakrīt. Maksājiet tikai tad, kad īpašnieka maiņu var noformēt uzreiz.',
 'auto','auto-pirksana',['auto-pirkuma-ligums','auto-nodosanas-akts'],
 ['lietota auto pirkšana','VIN','nobraukums','auto pārbaude','ekspluatācijas nodoklis'],[CSDD,TEN,CL],
 [('Ko darīt, ja VIN nesakrīt?','Nepērciet. VIN reģistrācijas apliecībā jābūt tādam pašam kā uz auto.'),
  ('Vai pārdevējs atbild par defektiem?','Par slēptiem trūkumiem, par kuriem viņš zināja un noklusēja, parasti jā. Defektus, par kuriem zināt, ierakstiet līgumā – tad ir skaidrs, ko pirkāt.'),
  ('Kad pāriet īpašuma tiesības?','Brīdī, kad pārdevējs e-CSDD apstiprina jūsu atzīmi par vēlmi iegādāties transportlīdzekli.')],
'''
Labs lietots auto ir saprātīgs pirkums – ja pareizās lietas pārbaudāt **pirms** naudas atdošanas.

## 1. Pārdevējs un dokumenti

Salīdziniet pārdevēja personu apliecinošo dokumentu ar reģistrācijas apliecību: pārdevējam jābūt **reģistrētajam īpašniekam**. Ja auto pārdod kāds cits, prasiet pilnvaru.

## 2. VIN un auto

VIN atrodas reģistrācijas apliecības laukā E un uz paša auto – zem vējstikla vai durvju statnī. Tiem jāsakrīt **precīzi**.

## 3. Aizliegumi un nodoklis

Ja transportlīdzeklim reģistrēts aizliegums vai komercķīla, CSDD īpašnieka maiņu neveiks, kamēr tas nav dzēsts. Tāpat CSDD maiņu nereģistrē, ja par kārtējo gadu nav samaksāts **transportlīdzekļa ekspluatācijas nodoklis** – vienojieties līgumā, kurš to sedz.

## 4. Nobraukums un stāvoklis

Ierakstiet nobraukumu līgumā. Apskatiet auto dienasgaismā, izbrauciet un, ja varat, pārbaudiet to servisā. Ko redzat, ierakstiet līgumā kā zināmus defektus.

## 5. Samaksa un īpašnieka maiņa

Jūs e-CSDD izdarāt atzīmi, ka vēlaties auto iegādāties, un pārdevējs to apstiprina **5 dienu laikā**. Ideāli – samaksājiet un saņemiet apstiprinājumu tajā pašā tikšanās reizē. Pēc tam 5 dienu laikā reģistrējiet īpašnieka maiņu savā vārdā un pirms braukšanas iegādājieties OCTA polisi.

## Kopsavilkums

Pārbaudiet īpašnieku, VIN, aizliegumus un nodokli. Maksājiet ar pārskaitījumu un tikai tad, kad īpašnieka maiņa tiek noformēta.
''')

c('ipasnieka-maina-e-csdd','Īpašnieka maiņa e-CSDD: atzīme, apstiprinājums un 5 dienas','Īpašnieka maiņa',
 'Kā notiek transportlīdzekļa īpašnieka maiņa e-CSDD: pircēja atzīme, pārdevēja apstiprinājums 5 dienu laikā, reģistrācija un OCTA.',
 'Pircējs izdara atzīmi, pārdevējs to apstiprina 5 dienu laikā, un īpašuma tiesības pāriet. Pircējs 5 dienu laikā reģistrē maiņu savā vārdā.',
 'auto','ipasnieka-maina',['auto-pirkuma-ligums','auto-nodosanas-akts','pilnvara'],
 ['īpašnieka maiņa','e-CSDD','CSDD','auto pārreģistrācija','reģistrācijas apliecība'],[CSDD,TEN],
 [('Kas notiek, ja pārdevējs neapstiprina atzīmi?','Ja pārdevējs pircēja atzīmi neapstiprina 5 dienu laikā, tā tiek dzēsta. Pircējs var izdarīt jaunu atzīmi.'),
  ('Vai īpašnieka maiņu var noformēt klātienē?','Jā. Īpašnieka maiņu var reģistrēt arī jebkurā CSDD klientu apkalpošanas centrā.'),
  ('Kāpēc CSDD var atteikt reģistrāciju?','Piemēram, ja transportlīdzeklim ir aizliegums vai komercķīla vai ja par kārtējo gadu nav samaksāts transportlīdzekļa ekspluatācijas nodoklis.')],
'''
Īpašnieka maiņu Latvijā var noformēt pilnībā attālināti – e-CSDD. Svarīgi ir saprast, **kurā brīdī** pāriet īpašuma tiesības un atbildība.

## 1. Pircēja atzīme

Pircējs e-CSDD izdara atzīmi – pieteikumu, ka vēlas iegādāties konkrēto transportlīdzekli. Līdz pārdevēja apstiprinājumam pircējs atzīmi var dzēst.

## 2. Pārdevēja apstiprinājums

Pārdevējs atzīmi apstiprina **5 dienu laikā**. Ja to neizdara, atzīme tiek dzēsta. Ar apstiprinājumu **īpašuma tiesības pāriet pircējam**.

## 3. Reģistrācija pircēja vārdā

Ja pircējs piedalīsies ceļu satiksmē, viņš 5 dienu laikā pēc apstiprinājuma reģistrē īpašnieka maiņu e-CSDD vai CSDD klientu apkalpošanas centrā. Reģistrācijas apliecību var saņemt CSDD nodaļā vai pa pastu.

## 4. Kas var aizkavēt maiņu

CSDD īpašnieka maiņu neveic, ja transportlīdzeklim reģistrēts aizliegums vai komercķīla, un nereģistrē to, ja par kārtējo gadu nav samaksāts **transportlīdzekļa ekspluatācijas nodoklis**. Pārbaudiet to pirms pārdošanas.

## 5. OCTA

Pirms braukšanas pircējs iegādājas savu OCTA polisi.

## Kopsavilkums

Atzīme, apstiprinājums 5 dienu laikā, reģistrācija pircēja vārdā un OCTA. Līgumā ierakstiet nodošanas laiku – līdz maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto.
''')

c('sods-pec-auto-pardosanas','Sods pēc auto pārdošanas: kā pierādīt, ka auto vairs nebija jūsu','Sods pēc pārdošanas',
 'Pēc auto pārdošanas pienāca paziņojums par pārkāpumu? Kā palīdz pirkuma līgums un nodošanas akts ar laiku un kāpēc nekavēties ar e-CSDD.',
 'Līdz īpašnieka maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto. Nodošanas akts ar precīzu laiku pierāda, kura rokās auto bija.',
 'auto','ipasnieka-maina',['auto-nodosanas-akts','auto-pirkuma-ligums'],
 ['sods pēc auto pārdošanas','fotoradars','auto pārdots sods','nodošanas akts','īpašnieka maiņa'],[CSDD,CL],
 [('Kāpēc paziņojums pienāca man?','Līdz īpašnieka maiņai reģistrā par transportlīdzekļa īpašnieku uzskata pēdējo reģistrēto. Tāpēc ir svarīgi apstiprināt pircēja atzīmi e-CSDD bez kavēšanās.'),
  ('Kas man palīdzēs?','Pirkuma līgums un nodošanas akts ar datumu un laiku. Tie pierāda, ka pārkāpuma brīdī auto bija pircēja rokās.')],
'''
Visbiežākā problēma pēc auto pārdošanas: pēc nedēļas pienāk paziņojums par pārkāpumu, ko izdarīja jau jaunais lietotājs. To var novērst un, ja tā notiek, arī atrisināt.

## 1. Kāpēc tā notiek

Līdz brīdim, kad reģistrā veikta īpašnieka maiņa, par transportlīdzekļa īpašnieku uzskata **pēdējo reģistrēto**. Ja pircēja atzīmi apstiprināt tikai pēc dažām dienām, šajā laikā paziņojumi var pienākt jums.

## 2. Profilakse

Apstipriniet pircēja atzīmi e-CSDD **tajā pašā dienā**, kad nododat auto. Ar apstiprinājumu īpašuma tiesības pāriet pircējam.

## 3. Nodošanas akts ar laiku

Sastādiet nodošanas aktu ar **datumu un precīzu laiku**, nobraukumu un atslēgām. Līgumā ierakstiet, ka no nodošanas brīža pircējs atbild par transportlīdzekļa lietošanu un ceļu satiksmes noteikumu pārkāpumiem.

## 4. Ja paziņojums tomēr pienāk

Atbildiet iestādei, kas paziņojumu izsūtīja, un pievienojiet pirkuma līgumu un nodošanas aktu. Norādiet pircēja datus. Ievērojiet paziņojumā norādīto atbildes termiņu.

## Kopsavilkums

Akts ar laiku, apstiprinājums e-CSDD uzreiz un līguma kopija pie rokas.
''')

c('motocikla-pardosana','Motocikla pārdošana: līgums, VIN uz rāmja un īpašnieka maiņa','Motocikla pārdošana',
 'Kā pārdot motociklu vai motorolleru privātpersonai: pirkuma līgums, VIN uz rāmja, aprīkojums un pārbūves, īpašnieka maiņa e-CSDD.',
 'Tie paši noteikumi kā auto: līgums, samaksa, nodošanas akts un īpašnieka maiņa e-CSDD. Ierakstiet aprīkojumu un pārbūves.',
 'auto','auto-pardosana',['motocikla-pirkuma-ligums','auto-nodosanas-akts','naudas-sanemsanas-kvits'],
 ['motocikla pārdošana','motorollera pārdošana','motocikla pirkuma līgums','e-CSDD'],[CSDD,CL],
 [('Kur ir motocikla VIN?','Parasti tas ir iekalts rāmī pie stūres. Tam jāsakrīt ar reģistrācijas apliecībā norādīto.'),
  ('Vai īpašnieka maiņa notiek tāpat kā auto?','Jā. Pircējs izdara atzīmi e-CSDD, pārdevējs to apstiprina 5 dienu laikā, un pircējs reģistrē maiņu savā vārdā.')],
'''
Motocikla pārdošana juridiski ir tāda pati kā auto pārdošana. Atšķirība ir detaļās, kas motocikliem bieži rada strīdus.

## 1. VIN uz rāmja

Motocikla VIN parasti ir **iekalts rāmī pie stūres**. Pirms līguma parakstīšanas salīdziniet to ar reģistrācijas apliecību.

## 2. Aprīkojums un pārbūves

Līgumā ierakstiet, kas tiek pārdots kopā ar motociklu: kofri, aizsargi, ķivere, izpūtējs. Pārbaudiet, vai pārbūves, kurām vajadzīga atļauja, ir reģistrētas.

## 3. Stāvoklis

Ierakstiet nobraukumu un zināmos defektus – nodilusi ķēde, skrāpējumi, sezonas apkopes. Pircējs pērk motociklu esošajā stāvoklī.

## 4. Samaksa un nodošana

Labāk ar pārskaitījumu. Nododot sastādiet aktu ar laiku, atslēgām un dokumentiem.

## 5. Īpašnieka maiņa

Pircējs e-CSDD izdara atzīmi, jūs to apstiprināt **5 dienu laikā**. Pircējs pirms braukšanas iegādājas OCTA polisi.

## Kopsavilkums

VIN uz rāmja, aprīkojums līgumā, akts ar laiku un apstiprinājums e-CSDD.
''')

c('auto-pardosana-uz-nomaksu','Auto pārdošana uz nomaksu starp privātpersonām: kā sevi pasargāt','Auto uz nomaksu',
 'Pārdodat auto un pircējs maksās pa daļām? Kā ierakstīt maksājumus, kāpēc svarīgs e-CSDD apstiprinājuma brīdis un kas notiek, ja maksājumi kavējas.',
 'Īpašuma tiesības reģistrā pāriet ar jūsu apstiprinājumu e-CSDD. Maksājumu grafiku un sekas kavējuma gadījumā ierakstiet rakstveidā.',
 'auto','auto-pardosana',['auto-pirkuma-ligums','vienosanas-par-parada-atmaksu','parada-atzisana'],
 ['auto uz nomaksu','auto pa daļām','nomaksa starp privātpersonām','parāda atmaksa'],[CSDD,CL],
 [('Kad pircējs kļūst par īpašnieku?','Reģistrā – brīdī, kad pārdevējs e-CSDD apstiprina pircēja atzīmi par vēlmi iegādāties transportlīdzekli.'),
  ('Ko darīt, ja pircējs pārstāj maksāt?','Nosūtiet maksājuma pieprasījumu ar termiņu. Ja parāds ir rakstveidā atzīts, tas ir labs pierādījums tiesā.')],
'''
Pārdošana uz nomaksu starp privātpersonām ir iespējama, taču riskantāka nekā samaksa uzreiz. Galvenais ir skaidri zināt, **kad pāriet īpašuma tiesības**.

## 1. Apstiprinājuma brīdis

Reģistrā īpašuma tiesības pāriet tad, kad jūs e-CSDD apstiprināt pircēja atzīmi. Apsveriet, vai apstiprināt tikai pēc **visas summas** vai lielākās daļas saņemšanas.

## 2. Maksājumi rakstveidā

Pirkuma līgumā izvēlieties samaksu uz bankas kontu un papildus noslēdziet **vienošanos par parāda atmaksu**: kopsumma, maksājumu skaits, summa un datums.

## 3. Kavējuma sekas

Ierakstiet, ka, nokavējot divus maksājumus, viss atlikums kļūst samaksājams. Vienošanās ir arī parāda atzīšana, kas pārtrauc noilgumu.

## 4. Ja pircējs nemaksā

Nosūtiet maksājuma pieprasījumu ar jaunu termiņu. Atgādinājums parādniekam pārtrauc noilgumu. Ja nemaksā arī tad, varat vērsties tiesā.

## Kopsavilkums

Vislabāk – visa summa pirms apstiprinājuma. Ja tomēr nomaksa, tad viss rakstveidā un ar pārskaitījumiem.
''')

c('auto-davinasana','Auto dāvināšana ģimenē: līgums, nodoklis un īpašnieka maiņa','Auto dāvināšana',
 'Kā uzdāvināt auto radiniekam: dāvinājuma līgums, nodoklis no dāvanas (radiniekiem līdz 3. pakāpei nav) un īpašnieka maiņa e-CSDD.',
 'Dāvanas no laulātā un radiniekiem līdz trešajai pakāpei neapliek ar nodokli. Īpašnieka maiņu noformē tāpat kā pārdodot.',
 'nauda','davinajums',['davinajuma-ligums','auto-nodosanas-akts'],
 ['auto dāvināšana','dāvinājuma līgums','auto dāvana radiniekam','dāvinājums nodoklis'],[DAV,CSDD,CL],
 [('Vai par uzdāvinātu auto jāmaksā nodoklis?','Ja dāvinātājs ir laulātais vai radinieks līdz trešajai pakāpei, iedzīvotāju ienākuma nodoklis nav jāmaksā. No citām personām neapliek līdz 1425 eiro gadā.'),
  ('Kā noformēt īpašnieka maiņu?','Tāpat kā pārdodot: apdāvinātais izdara atzīmi e-CSDD, un dāvinātājs to apstiprina 5 dienu laikā.')],
'''
Auto dāvināšana ģimenē ir bieža – vecāki bērnam, vecvecāki mazbērnam. Vajadzīgas divas lietas: dāvinājuma līgums un īpašnieka maiņa.

## 1. Dāvinājuma līgums

Izvēlieties dāvanu kā **kustamu lietu**, ierakstiet auto marku, reģistrācijas numuru, VIN un vērtību. Ierakstiet arī radniecību – tā ir svarīga nodoklim.

## 2. Nodoklis

Dāvanas no **laulātā un radiniekiem līdz trešajai pakāpei** (vecāki, vecvecāki, bērni, mazbērni, brāļi, māsas, vecāku brāļi un māsas, brāļu un māsu bērni) neapliek ar iedzīvotāju ienākuma nodokli. No citām fiziskām personām neapliek līdz **1425 eiro gadā**; no pārsnieguma nodokli maksā apdāvinātais.

## 3. Deklarēšana

Arī radinieka dāvinājums jādeklarē, ja gadā tas pārsniedz 10 000 eiro. Pārbaudiet savu situāciju VID.

## 4. Īpašnieka maiņa

Apdāvinātais izdara atzīmi e-CSDD, dāvinātājs to apstiprina **5 dienu laikā**. Ievērojiet, ka par kārtējo gadu jābūt samaksātam transportlīdzekļa ekspluatācijas nodoklim.

## Kopsavilkums

Dāvinājuma līgums ar VIN un vērtību, radniecība līgumā un īpašnieka maiņa e-CSDD.
''')
print('ok')
