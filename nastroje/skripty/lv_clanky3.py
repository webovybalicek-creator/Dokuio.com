import sys; sys.path.insert(0,'/home/claude/skripty')
from lv_zdroje import *

c('atteikums-14-dienas','Atteikuma tiesības: pirkuma internetā atgriešana 14 dienu laikā','Atteikums 14 dienas',
 'Kā atgriezt internetā pirktu preci 14 dienu laikā bez iemesla: no kura brīža skaita termiņu, kā nosūtīt paziņojumu un kad tirgotājs atmaksā naudu.',
 'No distances līguma varat atkāpties 14 dienu laikā bez iemesla. Termiņš precēm sākas ar saņemšanu, un pietiek nosūtīt paziņojumu laikus.',
 'pirkumi','atteikums',['atteikuma-veidlapa','pretenzija'],
 ['atteikuma tiesības','preces atgriešana','14 dienas','e-veikals','distances līgums'],[ATT,PTAL],
 [('Vai 14 dienu tiesības ir arī veikalā?','Nē. Tās attiecas uz līgumiem, kas noslēgti attālināti (internetā, pa telefonu) vai ārpus tirdzniecības telpām. Veikalā preci var atgriezt tikai tad, ja tai ir defekts vai to atļauj tirgotājs.'),
  ('Kurš maksā par atpakaļ sūtīšanu?','Parasti patērētājs, ja tirgotājs par to iepriekš informēja. Parastās piegādes izmaksas tirgotājs atmaksā.')],
'''
Internetā pirktu preci varat atgriezt **bez iemesla** – likums dod laiku to apskatīt un pārdomāt.

## 1. Kad tiesības pastāv

Ja līgums noslēgts attālināti – e-veikalā, pa telefonu – vai ārpus tirdzniecības telpām, varat no tā atkāpties **14 dienu laikā** bez iemesla norādīšanas.

## 2. No kura brīža

Precēm termiņš sākas dienā, kad **preci saņēmāt**. Pakalpojumiem – no līguma noslēgšanas dienas.

## 3. Kā paziņot

Nosūtiet tirgotājam **paziņojumu par atteikumu** – pa e-pastu vai ierakstītā vēstulē. Pietiek, ja to nosūtāt pirms termiņa beigām. Saglabājiet nosūtīšanas pierādījumu.

## 4. Preces atgriešana

Nosūtiet preci atpakaļ **14 dienu laikā** pēc atteikuma. Tiešās atpakaļ sūtīšanas izmaksas parasti sedzat jūs, ja tirgotājs par to informēja.

## 5. Naudas atmaksa

Tirgotājs atmaksā visus maksājumus, arī parastās piegādes izmaksas, **14 dienu laikā** pēc tam, kad uzzināja par atteikumu. Viņš var nogaidīt, līdz prece atgriezta.

## Kopsavilkums

14 dienas no saņemšanas, rakstveida paziņojums un prece atpakaļ. Strīda gadījumā varat vērsties PTAC.
''')

c('prece-ar-defektu','Prece ar defektu: 2 gadu garantija un ko prasīt no pārdevēja','Prece ar defektu',
 'Precei parādījās defekts? Pārdevējs atbild 2 gadus no piegādes. Kā iesniegt pretenziju 2 mēnešu laikā un ko var prasīt: salabošanu, apmaiņu vai naudu.',
 'Pārdevējs atbild 2 gadus. Pretenziju iesniedziet 2 mēnešu laikā pēc defekta atklāšanas; pirmajā gadā pierādīšana ir pārdevēja ziņā.',
 'pirkumi','garantija',['pretenzija','atteikuma-veidlapa'],
 ['prece ar defektu','pretenzija','2 gadu garantija','preces neatbilstība','salabošana','apmaiņa'],[PTAL,GAR],
 [('Vai garantija attiecas arī uz lietotām precēm?','Jā. Patērētāju tiesības attiecas arī uz lietotām precēm, kas pirktas no komersanta.'),
  ('Ko darīt, ja pārdevējs atsūta pie ražotāja?','Jūsu likumiskais prasījums ir pret pārdevēju. Ražotāja komercgarantija ir papildus un to neaizstāj.')],
'''
Ja nopirktai precei parādās defekts, likums jūs aizsargā – neatkarīgi no tā, vai ražotājs devis garantiju.

## 1. Cik ilgi pārdevējs atbild

Prasījumu par preces neatbilstību līguma noteikumiem varat pieteikt **2 gadu laikā** no preces piegādes.

## 2. Pirmais gads

Ja neatbilstība atklājas **gada laikā** pēc piegādes, pieņem, ka tā pastāvēja jau piegādes brīdī. Pretējo jāpierāda pārdevējam.

## 3. Termiņš pretenzijai

Pretenziju pārdevējam iesniedziet **2 mēnešu laikā** no dienas, kad defektu atklājāt. Nevilcinieties.

## 4. Ko varat prasīt

Vispirms **salabošanu vai apmaiņu**. Ja tas nav iespējams vai netiek izdarīts saprātīgā laikā, varat prasīt **cenas samazinājumu** vai **līguma atcelšanu** un naudas atmaksu.

## 5. Kā iesniegt

Rakstveidā – veikalā, pa e-pastu vai ierakstītā vēstulē. Pievienojiet čeku un fotogrāfijas, saglabājiet kopiju.

## Kopsavilkums

2 gadi atbildības, 2 mēneši pretenzijai, pirmajā gadā pierāda pārdevējs.
''')

c('pardevejs-atsaka-pretenziju','Pārdevējs noraida pretenziju: ko darīt tālāk','Pretenzija noraidīta',
 'Pārdevējs atteicās salabot vai apmainīt preci? Kā pārbaudīt savas tiesības, uzrakstīt atkārtotu prasījumu un vērsties PTAC.',
 'Pārbaudiet termiņus un pierādījumus, pieprasiet atbildi rakstveidā. Ja pārdevējs neatbild vai atsaka, varat vērsties PTAC.',
 'pirkumi','garantija',['pretenzija'],
 ['pretenzija noraidīta','PTAC','patērētāju tiesības','preces defekts'],[PTAL,GAR],
 [('Vai pārdevējs drīkst atteikt, jo prece ir lietota ilgāk par gadu?','Prasījumu var pieteikt 2 gadu laikā. Pēc pirmā gada gan jums var nākties pierādīt, ka defekts pastāvēja jau piegādes brīdī.'),
  ('Kur var sūdzēties?','Patērētāju tiesību aizsardzības centrā (PTAC).')],
'''
Ne katrs pārdevējs pretenziju pieņem uzreiz. Ja atsaka, rīkojieties mierīgi un rakstveidā.

## 1. Pārbaudiet termiņus

Prasījumu var pieteikt **2 gadu laikā** no piegādes, un pretenzija jāiesniedz **2 mēnešu laikā** pēc defekta atklāšanas.

## 2. Pierādīšana

Ja defekts atklājās **pirmajā gadā**, pieņem, ka tas pastāvēja jau piegādes brīdī – pretējo jāpierāda pārdevējam. Vēlāk var būt vajadzīgs eksperta atzinums.

## 3. Prasiet atbildi rakstveidā

Ja atteikums bija mutisks, lūdziet to rakstveidā ar pamatojumu. Atkārtoti nosūtiet pretenziju un norādiet, ko prasāt.

## 4. Lietošanas noteikumi

Bojājums nepareizas lietošanas dēļ nav neatbilstība. Ja pārdevējs to apgalvo, prasiet pamatojumu.

## 5. PTAC

Ja pārdevējs neatbild vai pamatoti neatrisina jautājumu, varat vērsties **Patērētāju tiesību aizsardzības centrā**.

## Kopsavilkums

Termiņi, rakstveida pretenzija un atbilde, pēc tam PTAC.
''')

c('pardosana-pec-sludinajuma','Pārdošana pēc sludinājuma: līgums, samaksa un krāpnieki','Pārdošana pēc sludinājuma',
 'Pārdodat lietotu lietu pēc sludinājuma? Kā uzrakstīt pirkuma līgumu, droši saņemt samaksu un atpazīt krāpniekus ar viltus maksājumiem.',
 'Ierakstiet lietas stāvokli un zināmos defektus. Nododiet lietu tikai pēc tam, kad nauda redzama jūsu kontā.',
 'pirkumi','sludinajums',['pirkuma-ligums','naudas-sanemsanas-kvits'],
 ['pārdošana pēc sludinājuma','pirkuma līgums','krāpniecība','lietota lieta'],[CL],
 [('Vai privātpersonai jādod 2 gadu garantija?','Patērētāju tiesības attiecas uz komersantiem. Privātpersona atbild par slēptiem trūkumiem, par kuriem zināja un noklusēja – tāpēc ierakstiet zināmos defektus.'),
  ('Kā atpazīt krāpnieku?','Uzmanieties no saitēm uz “drošu samaksu”, kurās jāievada kartes dati, un no apgalvojumiem, ka nauda jau nosūtīta, ja kontā tās nav.')],
'''
Pārdošana pēc sludinājuma ir ātra, taču gan pārdevējam, gan pircējam ir vērts pierakstīt pamatlietas.

## 1. Līgums

Ierakstiet lietas aprakstu (marka, modelis, sērijas numurs), stāvokli, **zināmos defektus** un cenu vārdiem. Pircējs pērk lietu esošajā stāvoklī.

## 2. Samaksa

Ja maksā ar pārskaitījumu, nododiet lietu tikai pēc tam, kad nauda **redzama jūsu kontā**. Skaidru naudu pārskaitiet klātienē un, ja vajag, parakstiet kvīti.

## 3. Krāpnieki

Neievadiet kartes datus saitēs, ko sūta “pircējs” vai “kurjers”. Nekad nedodiet internetbankas kodus. Ja kāds apgalvo, ka pārmaksāja un lūdz starpību atpakaļ, pārbaudiet savu kontu.

## 4. Nodošana

Nododiet lietu ar piederumiem un dokumentiem. Ar nodošanu pircējs kļūst par īpašnieku, un uz viņu pāriet nejaušas bojāejas risks.

## Kopsavilkums

Līgums ar defektiem, nauda kontā pirms nodošanas un uzmanība pret viltus saitēm.
''')

c('lietas-aizdosana-draugam','Lietas aizdošana draugam: patapinājuma līgums un bojājumi','Lietas aizdošana',
 'Aizdodat draugam piekabi, instrumentus vai tehniku? Kā ar patapinājuma līgumu ierakstīt stāvokli, termiņu un atbildību par bojājumiem.',
 'Patapinājums ir bez atlīdzības. Ierakstiet lietas stāvokli, vērtību un atdošanas termiņu – tad strīdu par bojājumiem būs mazāk.',
 'pirkumi','patapinajums',['patapinajuma-ligums','auto-nodosanas-akts'],
 ['lietas aizdošana','patapinājums','patapinājuma līgums','bojājumi'],[CL],
 [('Ar ko patapinājums atšķiras no nomas?','Patapinājums ir bez atlīdzības. Ja par lietošanu prasāt maksu, tas ir nomas līgums.'),
  ('Vai lietu drīkst nodot tālāk?','Tikai ar patapinātāja atļauju.')],
'''
Aizdot lietu draugam šķiet vienkārši – līdz brīdim, kad tā atgriežas ar skrāpējumu. Īss līgums palīdz.

## 1. Lietas apraksts

Ierakstiet marku, modeli, sērijas vai reģistrācijas numuru, piederumus un **stāvokli** nodošanas brīdī. Nofotografējiet.

## 2. Vērtība

Ierakstiet lietas vērtību – tā noder, ja lieta pazūd vai iet bojā.

## 3. Termiņš

Vienojieties, vai lieta tiek atdota līdz konkrētam datumam vai tad, kad mērķis sasniegts.

## 4. Lietošana

Ņēmējs lieto lietu rūpīgi, tikai nolīgtajā veidā, un nenodod to tālāk bez atļaujas. Parastos uzturēšanas izdevumus sedz ņēmējs.

## 5. Atdošana

Atdodot pārbaudiet lietu kopā. Parasto nolietojumu ņēmējs nesedz.

## Kopsavilkums

Apraksts, stāvoklis, vērtība un termiņš rakstveidā.
''')

c('ligums-ar-meistaru','Līgums ar meistaru: darbu apraksts, termiņš un trūkumi','Līgums ar meistaru',
 'Pasūtāt remontu vai renovāciju? Kas jāieraksta uzņēmuma līgumā: darbu apraksts, materiāli, termiņi, atlīdzība, avanss un darba pieņemšana.',
 'Detalizēts darbu apraksts, skaidrs termiņš un neliels avanss. Darbu pieņemiet kopā un trūkumus pierakstiet.',
 'pakalpojumi','meistari',['uznemuma-ligums','maksajuma-pieprasijums'],
 ['līgums ar meistaru','uzņēmuma līgums','remonts','renovācija','avanss'],[CL],
 [('Cik lielu avansu maksāt?','Iespējami mazu. Lielāko daļu maksājiet pēc darba pieņemšanas bez būtiskiem trūkumiem.'),
  ('Ko darīt, ja meistars kavē?','Nosakiet saprātīgu papildu termiņu rakstveidā. Ja arī tas nesekmīgi notek, varat atkāpties no līguma.')],
'''
Lielākā daļa strīdu ar meistariem rodas tāpēc, ka kaut kas **nav uzrakstīts**. Uzņēmuma līgums to novērš.

## 1. Darbu apraksts

Ierakstiet konkrēti: kādi darbi, kādi materiāli, kādi apjomi. “Vannas istabas remonts” ir par maz; “flīžu demontāža, 12 m² jaunu flīžu, dušas uzstādīšana” ir labāk.

## 2. Materiāli

Vienojieties, kurš nodrošina materiālus un vai tie ir iekļauti cenā.

## 3. Termiņi

Sākuma un pabeigšanas datums. Ja meistars kavē, nosakiet rakstveidā papildu termiņu.

## 4. Atlīdzība

Kopsumma (ierakstiet, vai PVN ir iekļauts), avanss un atlikums pēc pieņemšanas. Papildu darbi – tikai ar rakstveida vienošanos. Prasiet rēķinus.

## 5. Pieņemšana

Pārbaudiet darbu kopā un pierakstiet trūkumus. Meistars tos novērš bez maksas saprātīgā laikā. Būvdarbiem pārbaudiet, vai vajadzīga būvatļauja vai paskaidrojuma raksts.

## Kopsavilkums

Detalizēts apraksts, termiņi, mazs avanss un rakstveida pieņemšana.
''')

c('darbinieka-uzteikums','Atlūgums: kā uzteikt darbu un cik ilgi jāstrādā','Darbinieka uzteikums',
 'Kā uzrakstīt atlūgumu (darbinieka uzteikumu) pēc Darba likuma 100. panta: rakstveidā vienu mēnesi iepriekš, īsāks termiņš pēc vienošanās, gala norēķins.',
 'Darbinieks var uzteikt darba līgumu rakstveidā vienu mēnesi iepriekš. Vienojoties ar darba devēju, var aiziet ātrāk.',
 'darbs','aiziesana-no-darba',['darba-liguma-uzteikums'],
 ['atlūgums','darbinieka uzteikums','uzteikuma termiņš','aiziešana no darba','Darba likums 100. pants'],[DL],
 [('No kura brīža skaita mēnesi?','No dienas, kad uzteikums rakstveidā paziņots darba devējam.'),
  ('Vai slimības laiks skaitās?','Pēc darbinieka pieprasījuma pārejošas darbnespējas laiku uzteikuma termiņā neieskaita.'),
  ('Vai darba devējs var atteikties pieņemt atlūgumu?','Nē. Darbinieka uzteikums darba devējam ir saistošs.')],
'''
Aiziet no darba ir jūsu tiesības. Darba likums nosaka, kā to izdarīt pareizi.

## 1. Rakstveidā

Uzteikumam jābūt **rakstveidā**. Iesniedziet to darba devējam un lūdziet uz sava eksemplāra apliecināt saņemšanu, vai nosūtiet ar eParakstu.

## 2. Viens mēnesis

Darbinieks var uzteikt darba līgumu **vienu mēnesi iepriekš**, ja darba koplīgumā vai darba līgumā nav noteikts īsāks termiņš. Termiņu skaita no dienas, kad uzteikums paziņots darba devējam.

## 3. Ātrāk pēc vienošanās

Vienojoties ar darba devēju, darba attiecības var izbeigt arī pirms termiņa beigām. Noformējiet to rakstveidā.

## 4. Slimība

Pēc jūsu pieprasījuma pārejošas darbnespējas laiku uzteikuma termiņā neieskaita.

## 5. Gala norēķins

Pārbaudiet darba samaksu un kompensāciju par neizmantoto ikgadējo atvaļinājumu.

## Kopsavilkums

Rakstveida uzteikums, viens mēnesis vai īsāk pēc vienošanās, un gala norēķins.
''')

c('berns-celo-bez-vecakiem','Bērns ceļo bez vecākiem: kad vajadzīga piekrišana un notārs','Bērna ceļojums',
 'Bērns brauc ar vecvecākiem vai viens? Pagaidu ceļojumam pietiek ar viena vecāka piekrišanu; ārpus Šengenas zonas tai jābūt notariāli apliecinātai.',
 'Otra vecāka piekrišana pagaidu ceļojumam nav vajadzīga. Ja bērns bez vecākiem šķērso ārējo Šengenas robežu, vajadzīga notariāla piekrišana.',
 'gimene','berna-celojums',['vecaka-piekrisana-berna-celojumam'],
 ['bērns ceļo bez vecākiem','pilnvara bērna izceļošanai','vecāka piekrišana','notārs','Šengenas zona'],[BERNS,ROB],
 [('Vai vajadzīga abu vecāku piekrišana?','Pagaidu izceļošanai (atvaļinājums, ārstēšanās) otra vecāka piekrišana nav vajadzīga. Abu vecāku piekrišana vajadzīga, ja bērns pārceļas uz pastāvīgu dzīvi citā valstī.'),
  ('Vai Šengenas zonā vajadzīga pilnvara?','Nav obligāta, jo robežpārbaudes nenotiek, taču to var prasīt aviokompānija, viesnīca vai citas valsts iestādes.')],
'''
Bērns dodas uz nometni, pie vecvecākiem uz ārzemēm vai lido viens. Kādi dokumenti vajadzīgi, atkarīgs no tā, **kur** un **ar ko** viņš ceļo.

## 1. Ar vienu no vecākiem

Bērna **pagaidu izceļošanai** otra vecāka piekrišana nav vajadzīga. Pietiek ar bērna derīgu pasi vai personas apliecību.

## 2. Ar citu personu vai viens – Šengenas zonā

Uz iekšējām robežām pārbaudes nenotiek, tāpēc pilnvara **nav obligāta**. Tomēr rakstveida vecāka piekrišana noder aviokompānijai, viesnīcai vai, ja jautā policija.

## 3. Ārpus Šengenas zonas

Ja bērns ārpus Šengenas zonas ceļo citas personas pavadībā vai viens, vajadzīga vismaz viena vecāka **notariāli apliecināta** pilnvara vai piekrišana. To pārbauda uz ārējās robežas. Piekrišanu sagatavo zvērināts notārs.

## 4. Pārcelšanās

Bērna pārcelšanai uz **pastāvīgu dzīvi** citā valstī vajadzīga otra vecāka piekrišana, ja viņam ir aizgādības tiesības, vai tiesas lēmums.

## 5. Galamērķa prasības

Pārbaudiet galamērķa un aviokompānijas prasības – dažas prasa tulkojumu.

## Kopsavilkums

Viena vecāka piekrišana pietiek; ārpus Šengenas – pie notāra; pārcelšanās – abi vecāki.
''')

c('pilnvara-kad-notars','Pilnvara: kad pietiek ar vienkāršu un kad vajadzīgs notārs','Pilnvara',
 'Kā uzrakstīt pilnvaru: kas jāieraksta, cik ilgi tā derīga, kā to atsaukt un kad vajadzīga notariāli apliecināta pilnvara.',
 'Ikdienas darbībām pietiek ar vienkāršu rakstveida pilnvaru. Darījumiem ar notariālu formu vai zemesgrāmatai vajadzīga notariāla pilnvara.',
 'pilnvara','pilnvara',['pilnvara','apliecinajums'],
 ['pilnvara','notariāla pilnvara','pilnvaras paraugs','pilnvaras atsaukšana'],[CL],
 [('Vai pilnvaru var parakstīt elektroniski?','Jā, ar drošu elektronisko parakstu (eParaksts). Iestādes un bankas gan var prasīt savu veidlapu vai notariālu pilnvaru.'),
  ('Kā pilnvaru atsaukt?','Paziņojiet pilnvarniekam un iestādēm, kurām pilnvara iesniegta. Pilnvaru var atsaukt jebkurā laikā.')],
'''
Pilnvara ļauj kādam citam rīkoties jūsu vārdā. Svarīgi ir ierakstīt, **ko tieši** viņš drīkst.

## 1. Kas jāieraksta

Pilnvaras devēja un pilnvarnieka vārds, uzvārds, personas kods un adrese, **konkrētas darbības**, vai pilnvarnieks drīkst pārpilnvarot citu un derīguma termiņš.

## 2. Vienkārša pilnvara

Ikdienas darbībām – sūtījuma saņemšanai, iesnieguma iesniegšanai – parasti pietiek ar rakstveida pilnvaru ar jūsu parakstu vai eParakstu.

## 3. Notariāla pilnvara

Ja darījumam vajadzīga **notariāla forma** vai notariāli apliecināts paraksts, piemēram, nostiprinot īpašuma tiesības zemesgrāmatā, arī pilnvarai jābūt notariālai.

## 4. Iestādes un bankas

CSDD, bankas un citas iestādes var prasīt savu veidlapu vai notariāli apliecinātu pilnvaru. Pārbaudiet iepriekš.

## 5. Atsaukšana

Pilnvaru var **atsaukt jebkurā laikā**. Paziņojiet par to pilnvarniekam un iestādēm.

## Kopsavilkums

Konkrētas darbības, termiņš, notārs tikai tur, kur to prasa darījuma forma.
''')
print('ok')
