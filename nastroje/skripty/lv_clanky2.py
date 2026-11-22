import sys; sys.path.insert(0,'/home/claude/skripty')
from lv_zdroje import *

c('aizdevums-draugam','Aizdevums draugam: kā aizdot naudu un to atgūt','Aizdevums draugam',
 'Kā aizdot naudu draugam vai radiniekam: aizdevuma līgums, pārskaitījums, atmaksa pa daļām, procenti un ko darīt, ja nauda netiek atdota.',
 'Rakstveida līgums un bankas pārskaitījums ir labākie pierādījumi. Vispārējais noilgums ir 10 gadi, atgādinājums to pārtrauc.',
 'nauda','aizdevums',['aizdevuma-ligums','naudas-sanemsanas-kvits','parada-atzisana'],
 ['aizdevums draugam','aizdevuma līgums','aizdevums ģimenē','aizdevuma atmaksa','noilgums'],[CL],
 [('Vai aizdevumam vajadzīgs rakstveida līgums?','Likums aizdevumam starp privātpersonām rakstveida formu neprasa, taču bez tā ir grūti pierādīt, ka nauda bija aizdevums, nevis dāvana.'),
  ('Kādi procenti pienākas par kavējumu?','Ja līgumā nav noteikts citādi, likumiskie procenti ir 6 % gadā.'),
  ('Cik ilgi var prasīt atpakaļ?','Vispārējais noilgums ir 10 gadi. Atgādinājums parādniekam vai parāda atzīšana to pārtrauc, un tas sāk tecēt no jauna.')],
'''
Aizdot naudu draugam ir cilvēcīgi. Lai draudzība izturētu arī atmaksu, ir vērts visu **uzrakstīt**.

## 1. Aizdevuma līgums

Ierakstiet summu (arī vārdiem), atmaksas termiņu vai ikmēneša maksājumus un to, vai aizdevums ir **bezprocentu** vai ar nolīgtiem procentiem.

## 2. Pārskaitījums, nevis skaidra nauda

Izsniedziet naudu ar **bankas pārskaitījumu** ar norādi “aizdevums saskaņā ar līgumu”. Ja dodat skaidru naudu, aizņēmējs parakstās līgumā vai kvītī, ka to saņēma.

## 3. Atmaksa pa daļām

Ierakstiet katra maksājuma summu un datumu. Vienojieties, ka, nokavējot divus maksājumus, aizdevējs var prasīt visu atlikumu.

## 4. Ja nauda netiek atdota

Vispirms atgādiniet rakstveidā – ar **maksājuma pieprasījumu**. Atgādinājums parādniekam pārtrauc noilgumu. Ja aizņēmējs atzīst parādu un lūdz laiku, noslēdziet vienošanos par atmaksu.

## 5. Noilgums

Vispārējais noilgums ir **10 gadi**. Par kavējumu, ja nav nolīgts citādi, pienākas likumiskie procenti 6 % gadā.

## Kopsavilkums

Līgums, pārskaitījums, skaidri termiņi un rakstveida atgādinājums, ja maksājumi kavējas.
''')

c('paradnieks-nemaksa','Parādnieks nemaksā: maksājuma pieprasījums un nākamie soļi','Parādnieks nemaksā',
 'Kāds jums ir parādā un nemaksā? Kā uzrakstīt maksājuma pieprasījumu, kāpēc atgādinājums pārtrauc noilgumu un kādi ir nākamie soļi.',
 'Sāciet ar rakstveida pieprasījumu un jaunu termiņu. Atgādinājums pārtrauc noilgumu; par kavējumu pienākas likumiskie procenti.',
 'nauda','paradi',['maksajuma-pieprasijums','vienosanas-par-parada-atmaksu','parada-atzisana'],
 ['parādnieks nemaksā','maksājuma pieprasījums','parāda piedziņa','atgādinājums par parādu'],[CL],
 [('Vai pieprasījums jāsūta ierakstītā vēstulē?','Likums formu nenosaka, taču jums jāspēj pierādīt, ka atgādinājums nonāca pie parādnieka. Ierakstīta vēstule vai e-pasts ar eParakstu to atvieglo.'),
  ('Cik lielus procentus var prasīt?','Ja nav nolīgts citādi, likumiskie nokavējuma procenti ir 6 % gadā.')],
'''
Kad kāds nemaksā, pirmais solis gandrīz vienmēr ir **rakstveida pieprasījums**. Bieži ar to pietiek, un, ja ne, tas ir labs sākums tālākiem soļiem.

## 1. Kas jāieraksta pieprasījumā

Parāda summa (arī vārdiem), no kā parāds izriet (aizdevums, rēķins, līgums), kad beidzās samaksas termiņš un **jauns termiņš**, parasti 7–14 dienas, kā arī konts samaksai.

## 2. Kā nosūtīt

Ierakstītā vēstulē vai pa e-pastu ar eParakstu. Saglabājiet pierādījumu par nosūtīšanu – **atgādinājums parādniekam pārtrauc noilgumu**.

## 3. Procenti

Par samaksas nokavējumu var prasīt nokavējuma procentus. Ja līgumā nav noteikts citādi, likumiskie procenti ir **6 % gadā**.

## 4. Ja parādnieks atbild, ka nevar samaksāt uzreiz

Noslēdziet **vienošanos par parāda atmaksu** pa daļām. Ar to parādnieks parādu atzīst, un tas ir labs pierādījums.

## 5. Ja nemaksā arī tad

Varat vērsties tiesā. Naudas prasījumiem pastāv arī vienkāršāka saistību izpildīšana brīdināšanas kārtībā.

## Kopsavilkums

Pieprasījums ar termiņu, pierādījums par nosūtīšanu, vienošanās par atmaksu vai tiesa.
''')

c('parada-atzisana-un-noilgums','Parāda atzīšana un noilgums: kad parāds noilgst','Parāda atzīšana',
 'Kad iestājas parāda noilgums Latvijā, kas to pārtrauc un kāpēc ir vērtīga parādnieka rakstveida parāda atzīšana. Ar bezmaksas paraugu.',
 'Vispārējais noilgums ir 10 gadi. To pārtrauc prasība tiesā, atgādinājums parādniekam un parāda atzīšana – tad tas sāk tecēt no jauna.',
 'nauda','paradi',['parada-atzisana','vienosanas-par-parada-atmaksu','maksajuma-pieprasijums'],
 ['parāda atzīšana','noilgums','parāda noilgums','10 gadi','atgādinājums parādniekam'],[CL],
 [('Cik ilgs ir noilgums?','Vispārējais noilgums saskaņā ar Civillikumu ir 10 gadi. No komercdarījumiem izrietošiem prasījumiem likumā noteikts īsāks termiņš – 3 gadi.'),
  ('Kas notiek pēc noilguma pārtraukuma?','Jau notecējušais laiks netiek ieskaitīts, un noilgums sāk tecēt no jauna.')],
'''
Parāds nav mūžīgs – ja kreditors ilgi nerīkojas, iestājas **noilgums**. Tāpēc ir svarīgi zināt, kas noilgumu pārtrauc.

## 1. Cik ilgs ir noilgums

Saskaņā ar Civillikumu vispārējais noilgums ir **10 gadi**. Prasījumiem no komercdarījumiem, piemēram, starp patērētāju un komersantu, likumā noteikts īsāks termiņš – 3 gadi.

## 2. Kas noilgumu pārtrauc

Civillikums paredz trīs gadījumus: **prasības celšana tiesā**, **atgādinājums parādniekam** un **prasījuma atzīšana**. Pēc pārtraukuma jau notecējušais laiks netiek ieskaitīts, un noilgums sāk tecēt no jauna.

## 3. Kāpēc atzīšana ir vērtīga

Rakstveida parāda atzīšana ar parādnieka parakstu pierāda, ka parāds pastāv, cik liels tas ir un no kā izriet. Tā pārtrauc noilgumu un ir labs pierādījums tiesā.

## 4. Kas jāieraksta

Parāda apmērs (arī vārdiem), pamats (piemēram, aizdevums ar datumu), samaksas veids – vienā reizē vai pa daļām – un konts. Oriģinālu patur kreditors.

## Kopsavilkums

10 gadi, atgādinājums vai atzīšana noilgumu pārtrauc. Rakstveida atzīšana ar parakstu ir labākais pierādījums.
''')

c('naudas-davinajums-gimene','Naudas dāvinājums ģimenē: kad jāmaksā nodoklis','Naudas dāvinājums',
 'Dāvināt naudu bērniem vai vecākiem? Kad dāvanu neapliek ar iedzīvotāju ienākuma nodokli, robeža 1425 eiro un kad dāvinājums jādeklarē.',
 'Dāvanas no laulātā un radiniekiem līdz trešajai pakāpei neapliek ar nodokli. No citām personām – līdz 1425 eiro gadā.',
 'nauda','davinajums',['davinajuma-ligums','naudas-sanemsanas-kvits'],
 ['naudas dāvinājums','dāvinājums nodoklis','1425 eiro','dāvana radiniekam','dāvinājuma deklarēšana'],[DAV,CL],
 [('Kuri ir radinieki līdz trešajai pakāpei?','Vecāki, vecvecāki, bērni, mazbērni, brāļi, māsas, vecāku brāļi un māsas, kā arī brāļu un māsu bērni. Brālēni un māsīcas ir ceturtā pakāpe.'),
  ('Kad dāvinājums jādeklarē?','Arī radinieka dāvinājums jādeklarē, ja gadā tas pārsniedz 10 000 eiro. No citām personām no summas virs 1425 eiro nākamajā gadā jāiesniedz deklarācija un jāsamaksā nodoklis.')],
'''
Nauda dzīvokļa iemaksai, kāzām vai studijām – ģimenē dāvinājumi ir ikdiena. Nodokļa ziņā izšķirošs ir tas, **kurš dāvina**.

## 1. Laulātais un tuvi radinieki

Dāvanas no **laulātā un radiniekiem līdz trešajai pakāpei** neapliek ar iedzīvotāju ienākuma nodokli – neatkarīgi no summas. Tie ir vecāki, vecvecāki, bērni, mazbērni, brāļi, māsas, vecāku brāļi un māsas, brāļu un māsu bērni.

## 2. Citas personas

No citām fiziskām personām dāvanu neapliek līdz **1425 eiro gadā**. No pārsnieguma nodokli maksā apdāvinātais, nākamajā gadā iesniedzot gada ienākumu deklarāciju.

## 3. Deklarēšana

Arī no radinieka saņemts dāvinājums jādeklarē, ja gadā tas pārsniedz **10 000 eiro**. Ja dāvina komersants vai saimnieciskās darbības veicējs, piemēro citus noteikumus.

## 4. Kāpēc līgums

Dāvinājuma līgums pierāda, ka nauda bija dāvana, nevis aizdevums vai ienākums, un kāda bija radniecība. Pārskaitiet naudu ar norādi “dāvinājums saskaņā ar līgumu”.

## Kopsavilkums

Tuvi radinieki – bez nodokļa. Citi – līdz 1425 eiro gadā. Lielākiem dāvinājumiem līgums un deklarācija.
''')

c('dzivokla-izireshana','Dzīvokļa izīrēšana: līgums, drošības nauda un nodokļi','Dzīvokļa izīrēšana',
 'Kā izīrēt dzīvokli pēc Dzīvojamo telpu īres likuma: rakstveida līgums uz noteiktu termiņu, drošības nauda līdz 2 mēnešiem, akts un zemesgrāmata.',
 'Līgums rakstveidā un uz noteiktu termiņu, drošības nauda ne vairāk kā divu mēnešu īres maksa. Akts ar skaitītājiem nodošanas dienā.',
 'majoklis','ire',['ires-ligums','dzivokla-nodosanas-akts'],
 ['dzīvokļa izīrēšana','īres līgums','drošības nauda','izīrētājs','Dzīvojamo telpu īres likums'],[DZTIL],
 [('Vai īres līgumu var noslēgt uz nenoteiktu laiku?','Nē. Dzīvojamo telpu īres likums paredz, ka līgumu slēdz uz noteiktu termiņu.'),
  ('Kas notiek, ja pārdodu izīrētu dzīvokli?','Ja īres līgums nav nostiprināts zemesgrāmatā, tas izbeidzas, kad ieguvējs nostiprina īpašuma tiesības. Īrniekam tad dzīvoklis jāatbrīvo divu mēnešu laikā pēc ieguvēja paziņojuma.'),
  ('Vai par īres ienākumu jāmaksā nodoklis?','Jā, par īres ienākumu izīrētājs maksā iedzīvotāju ienākuma nodokli. Kārtību pārbaudiet VID.')],
'''
Dzīvokļa izīrēšanu Latvijā regulē **Dzīvojamo telpu īres likums**. Tas paredz dažus obligātus noteikumus, kas jāzina jau pirms līguma parakstīšanas.

## 1. Rakstveidā un uz noteiktu termiņu

Īres līgumu slēdz **rakstveidā** un **uz noteiktu termiņu**. Līgumā jābūt adresei, platībai un aprakstam, termiņam, īres maksai, maksāšanas kārtībai, ar lietošanu saistītajiem maksājumiem un ziņām par personām, kas dzīvos kopā ar īrnieku.

## 2. Drošības nauda

Drošības nauda **nedrīkst pārsniegt divu mēnešu īres maksu**. Ja tā nav izlietota, to atdod ne vēlāk kā dienā, kad dzīvoklis tiek atbrīvots, ja līgumā nav noteikts citādi.

## 3. Pieņemšanas-nodošanas akts

Nododot atslēgas, ierakstiet skaitītāju rādījumus, iekārtojumu un esošos bojājumus. Nofotografējiet telpas. Īres beigās akts ļaus viegli salīdzināt stāvokli.

## 4. Zemesgrāmata

Īres tiesības var **nostiprināt zemesgrāmatā**. Ja līgums nav nostiprināts, tas izbeidzas, kad dzīvokļa ieguvējs nostiprina īpašuma tiesības.

## 5. Iemitināšana un apakšīre

Laulāto un bērnus īrnieks var iemitināt, iepriekš rakstveidā informējot izīrētāju. Citu personu iemitināšanai vajadzīga izīrētāja **rakstveida piekrišana**.

## Kopsavilkums

Rakstveida līgums uz noteiktu termiņu, drošības nauda līdz 2 mēnešiem, akts ar skaitītājiem un nodoklis par ienākumu.
''')

c('dzivokla-iresana','Dzīvokļa īrēšana: kas jāpārbauda pirms līguma parakstīšanas','Dzīvokļa īrēšana',
 'Īrējat dzīvokli? Kas jāpārbauda pirms parakstīšanas: izīrētājs, līguma termiņš, drošības nauda, maksājumi, zemesgrāmata un īrnieka tiesības aiziet.',
 'Pārbaudiet, vai izīrētājs ir īpašnieks, drošības nauda nepārsniedz divu mēnešu īres maksu un līgumā ir skaidri maksājumi.',
 'majoklis','ire',['ires-ligums','dzivokla-nodosanas-akts','ires-liguma-uzteikums'],
 ['dzīvokļa īrēšana','īrnieks','īres līgums','drošības nauda','īrnieka tiesības'],[DZTIL],
 [('Cik ātri varu aiziet, ja vajag?','Īrnieks var vienpusēji atkāpties no līguma, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš.'),
  ('Vai drošības nauda var būt trīs mēnešu īres maksa?','Nē. Likums atļauj ne vairāk kā divu mēnešu īres maksu.')],
'''
Īrniekam ir tiesības, kuras līgums nevar atņemt. Pirms parakstīšanas pārbaudiet dažas lietas.

## 1. Kas ir izīrētājs

Pārliecinieties, ka izīrētājs ir **īpašnieks** vai ir pilnvarots dzīvokli izīrēt. Īpašnieku var pārbaudīt zemesgrāmatā.

## 2. Termiņš

Līgums jāslēdz **uz noteiktu termiņu**. Īrnieks var atkāpties no līguma, rakstveidā brīdinot izīrētāju **vismaz vienu mēnesi iepriekš**.

## 3. Drošības nauda

Drošības nauda **nedrīkst pārsniegt divu mēnešu īres maksu**. Pierakstiet līgumā, kad un kā tā tiks atdota – likums paredz ne vēlāk kā atbrīvošanas dienā, ja nav nolīgts citādi.

## 4. Maksājumi

Līgumā jābūt skaidri ierakstītiem ar lietošanu saistītajiem maksājumiem: apsaimniekošana, siltums, ūdens, elektrība, internets – kas, cik un kam maksā.

## 5. Zemesgrāmata

Ja līgums nav nostiprināts zemesgrāmatā un dzīvoklis tiek pārdots, īre izbeidzas ar jaunā īpašnieka tiesību nostiprināšanu. Ja jums svarīga ilgtermiņa īre, apsveriet nostiprināšanu.

## Kopsavilkums

Īpašnieks, noteikts termiņš, drošības nauda līdz 2 mēnešiem, skaidri maksājumi un akts nodošanas dienā.
''')

c('drosibas-nauda-un-ires-beigas','Īres beigas un drošības nauda: kā atdot dzīvokli bez strīda','Īres beigas',
 'Īre beidzas? Kā atdot dzīvokli, kad jāatdod drošības nauda, ko drīkst ieturēt un kāpēc palīdz pieņemšanas-nodošanas akts.',
 'Neizlietotu drošības naudu atdod ne vēlāk kā dzīvokļa atbrīvošanas dienā, ja līgumā nav noteikts citādi. Akts ar skaitītājiem novērš strīdus.',
 'majoklis','ires-beigas',['ires-liguma-uzteikums','dzivokla-nodosanas-akts','vienosanas-par-ires-izbeigsanu'],
 ['drošības nauda','īres beigas','dzīvokļa atdošana','drošības naudas atmaksa'],[DZTIL],
 [('Kad jāatdod drošības nauda?','Ja drošības nauda nav izlietota vai izlietota daļēji, to vai atlikumu atdod ne vēlāk kā dienā, kad dzīvoklis tiek atbrīvots, ja līgumā nav noteikts citādi.'),
  ('Vai drīkst ieturēt par nolietojumu?','Parasto nolietojumu īrnieks nesedz. Ieturēt var par pamatotiem prasījumiem no līguma, piemēram, nesamaksātu īres maksu vai bojājumiem.')],
'''
Īres beigas ir brīdis, kad visbiežāk rodas strīdi – par stāvokli, rēķiniem un drošības naudu. Labi sagatavojoties, tos var novērst.

## 1. Kā izbeidzas īre

Līgums izbeidzas termiņa beigās, īrniekam atkāpjoties ar **mēneša brīdinājumu** vai pusēm vienojoties. Līdz izbeigšanās brīdim dzīvoklis jāatbrīvo.

## 2. Atdošanas akts

Atdodot dzīvokli, sastādiet **pieņemšanas-nodošanas aktu**: skaitītāju rādījumi, atslēgas, iekārtojums un bojājumi. Salīdziniet ar aktu īres sākumā.

## 3. Drošības nauda

Ja drošības nauda nav izlietota, to atdod **ne vēlāk kā dzīvokļa atbrīvošanas dienā**, ja līgumā nav noteikts citādi. Izīrētājs var ieturēt pamatotus prasījumus – nesamaksātu īres maksu, pakalpojumus vai bojājumus, kas radušies nolaidības dēļ.

## 4. Pēdējie rēķini

Vienojieties, kā tiks norēķināti pēdējā perioda pakalpojumi. Ja galīgie rēķini pienāk vēlāk, varat vienoties par drošības naudas atdošanu pēc norēķina.

## Kopsavilkums

Rakstveida uzteikums vai vienošanās, akts ar skaitītājiem un drošības nauda atbrīvošanas dienā.
''')

c('ires-izbeigsana-vienojoties','Īres līguma izbeigšana vienojoties: ātrāk un bez termiņiem','Izbeigšana vienojoties',
 'Kā izbeigt dzīvokļa īres līgumu, pusēm vienojoties: izbeigšanās datums, dzīvokļa atdošana, drošības nauda un citas vienošanās rakstveidā.',
 'Vienojoties īres līgumu var izbeigt jebkurā brīdī – bez uzteikuma termiņa. Ierakstiet datumus, drošības naudu un pēdējos maksājumus.',
 'majoklis','ires-beigas',['vienosanas-par-ires-izbeigsanu','dzivokla-nodosanas-akts'],
 ['īres izbeigšana vienojoties','vienošanās par īres izbeigšanu','īres līguma laušana'],[DZTIL],
 [('Kurš paraksta vienošanos?','Visi izīrētāji un visi īrnieki, kas parakstīja īres līgumu.'),
  ('Vai vienošanās var būt ātrāka nekā mēnesis?','Jā. Pusēm vienojoties, līgumu var izbeigt jebkurā brīdī.')],
'''
Ja abas puses vēlas īri izbeigt, labākais ceļš ir **vienošanās**. Nav jāievēro uzteikuma termiņš, un viss ir skaidri uzrakstīts.

## 1. Datumi

Ierakstiet, kurā dienā **līgums izbeidzas** un līdz kurai dienai īrnieks **atdod dzīvokli** ar visām atslēgām. Līdz izbeigšanai maksā īres maksu un pakalpojumus.

## 2. Drošības nauda

Vienojieties, vai drošības naudu atdod atbrīvošanas dienā vai pēc pēdējo pakalpojumu norēķina, un uz kuru kontu.

## 3. Citas vienošanās

Ja īrnieks pirms atdošanas, piemēram, nokrāso sienas vai atstāj mēbeles, ierakstiet to. Ko nav uzrakstījuši, par to vēlāk ir grūti vienoties.

## 4. Akts

Atdodot dzīvokli, sastādiet aktu ar skaitītāju rādījumiem un stāvokli.

## Kopsavilkums

Vienošanās ar datumiem, drošības naudas noteikumiem un aktu atdošanas dienā.
''')

c('apakssire','Apakšīre: kā izīrēt istabu tālāk un ko prasa likums','Apakšīre',
 'Gribat izīrēt istabu vai visu dzīvokli tālāk? Rakstveida apakšīres līgums, izīrētāja piekrišana citu personu iemitināšanai un jūsu atbildība.',
 'Apakšīres līgums jāslēdz rakstveidā. Citu personu iemitināšanai likums prasa izīrētāja rakstveida piekrišanu.',
 'majoklis','ire',['apakssires-ligums','ires-ligums'],
 ['apakšīre','istabas apakšīre','apakšīres līgums','izīrētāja piekrišana'],[DZTIL],
 [('Vai vajadzīga izīrētāja piekrišana?','Citu personu iemitināšanai Dzīvojamo telpu īres likums prasa izīrētāja rakstveida piekrišanu. Pārbaudiet arī savu īres līgumu – tajā var būt noteikumi par apakšīri.'),
  ('Cik ilgi var ilgt apakšīre?','Ne ilgāk par jūsu īres līgumu – ar tā izbeigšanos beidzas arī apakšīre.')],
'''
Apakšīre ir izdevīga, ja dzīvoklis ir lielāks, nekā vajag, vai uz laiku aizbraucat. Likums prasa dažus soļus.

## 1. Izīrētāja piekrišana

Citu personu iemitināšanai likums prasa izīrētāja **rakstveida piekrišanu**. Pārbaudiet arī īres līgumu – tajā var būt noteikumi par apakšīri. Piekrišanu iegūstiet pirms apakšīrnieka ievākšanās.

## 2. Rakstveida līgums

Apakšīrniekam dzīvokļa lietošanas pamats ir **rakstveidā noslēgts apakšīres līgums**. Ierakstiet, vai izīrējat istabu vai visu dzīvokli, termiņu, maksu un drošības naudu.

## 3. Termiņš

Apakšīre nevar ilgt ilgāk par jūsu īres līgumu.

## 4. Jūsu atbildība

Izīrētāja priekšā par apakšīrnieka rīcību atbildat jūs – par īres maksu, bojājumiem un kārtības noteikumiem.

## Kopsavilkums

Piekrišana, rakstveida līgums un termiņš, kas nepārsniedz jūsu īri.
''')
print('ok')
