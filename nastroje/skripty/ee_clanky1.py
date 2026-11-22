import sys; sys.path.insert(0,'/home/claude/skripty')
from ee_zdroje import *

c('kasutatud-auto-muuk','Kasutatud auto müük: leping, makse ja omanikuvahetus','Auto müük',
 'Kuidas müüa kasutatud autot eraisikule: ostu-müügileping, turvaline makse, üleandmise kellaaeg ja omanikuvahetus Transpordiameti e-teeninduses.',
 'Leping VIN-iga, raha pangaülekandega ja üleandmise akt kellaajaga. Omanikuvahetus tuleb teha 5 tööpäeva jooksul.',
 'auto','auto-muuk',['soiduki-ostu-muugileping','soiduki-uleandmise-akt','raha-vastuvotmise-kviitung'],
 ['auto müük','omanikuvahetus','ostu-müügileping','kasutatud auto','Transpordiamet'],[OMANIK,MSM,VOS],
 [('Kas auto müügiks on vaja notarit?','Ei. Eraisikute vahel piisab lihtkirjalikust ostu-müügilepingust ja omanikuvahetusest Transpordiameti e-teeninduses.'),
  ('Kes alustab omanikuvahetust?','Müüja alustab toimingut e-teeninduses ja ostja kinnitab selle. Registreeringu muudatus tuleb teha 5 tööpäeva jooksul.'),
  ('Kes maksab selle aasta mootorsõidukimaksu?','Müümisel jääb jooksva aasta maks endisele omanikule. Ostja maksab mootorsõidukimaksu alates järgmisest aastast.')],
'''
Auto müük eraisikute vahel koosneb kahest osast: **kokkulepe teie vahel** (hind, seisukord, üleandmine) ja **omanikuvahetus registris**. Kui teete mõlemad korralikult, ei tule teile hiljem teateid auto kohta, mis pole enam teie oma.

## 1. Enne müüki

Pange valmis registreerimistunnistus, kõik võtmed ja hooldusraamat. Kontrollige, et autol ei oleks liisingut ega järelmaksu – siis ei ole te selle ainuomanik ja müük vajab finantseerija nõusolekut.

## 2. Ostu-müügileping

Lepingusse kirjutage mõlema poole nimi, **isikukood** ja aadress, auto mark, registreerimismärk ja **VIN**, läbisõit, teadaolevad puudused ja hind sõnadega.

Puudused, mille te kirjalikult üles märgite, ei saa hiljem vaidluse põhjuseks, sest ostja teadis neist. Olge seega aus ja konkreetne.

## 3. Makse

Kõige kindlam on **pangaülekanne** enne võtmete üleandmist. Kui ostja maksab sularahas, lugege raha tema juuresolekul üle ja allkirjastage raha vastuvõtmise kviitung.

## 4. Üleandmine ja kellaaeg

Koostage **üleandmise akt** kuupäeva ja **kellaajaga**, läbisõidu, võtmete ja dokumentidega. Kui auto jääb pärast üleandmist kaamerasse, enne kui omanikuvahetus on registris tehtud, näitab akt, kelle käes auto oli.

## 5. Omanikuvahetus

Müüja alustab omanikuvahetust Transpordiameti e-teeninduses ja ostja kinnitab selle. Muudatus tuleb teha **5 tööpäeva jooksul**. Kui ostja seda ei tee, võib müüja teavitada võõrandamisest – sõiduk kantakse siis registrist ajutiselt maha.

## Kokkuvõttes

Leping VIN-iga, raha pangaülekandega, akt kellaajaga ja omanikuvahetus e-teeninduses kohe samal päeval.
''')

c('kasutatud-auto-ost','Kasutatud auto ost: mida kontrollida enne maksmist','Kasutatud auto ost',
 'Ostate kasutatud autot eraisikult? Mida kontrollida: omanik, VIN, läbisõit, liising, registreerimistasu ja mida lepingusse kirjutada.',
 'Müüja peab olema registris omanik ja VIN peab kokku langema. Makske alles siis, kui omanikuvahetus saab kohe toimuda.',
 'auto','auto-ost',['soiduki-ostu-muugileping','soiduki-uleandmise-akt'],
 ['kasutatud auto ost','VIN','läbisõit','registreerimistasu','auto kontroll'],[OMANIK,VOS],
 [('Mis siis, kui VIN ei lange kokku?','Ärge ostke. Registreerimistunnistuse VIN peab olema sama mis autol endal.'),
  ('Kas müüja vastutab puuduste eest?','Puuduste eest, millest ta teile ei rääkinud, üldjuhul jah. Puudused, mida teadsite, kirjutage lepingusse – siis on selge, mida ostsite.'),
  ('Mis on registreerimistasu?','Kui autolt ei ole registreerimistasu varem makstud, tuleb see tasuda esimesel omanikuvahetusel. Küsige müüjalt või kontrollige enne ostu.')],
'''
Hea kasutatud auto on mõistlik ost – kui kontrollite õigeid asju **enne**, kui raha annate.

## 1. Müüja ja dokumendid

Võrrelge müüja isikut tõendavat dokumenti registreerimistunnistusega: müüja peab olema **registris omanik**. Kui autot müüb keegi teine, küsige volikirja.

## 2. VIN ja auto

VIN asub registreerimistunnistuse lahtris E ja autol endal – esiklaasi all või ukse piilaril. Need peavad **täpselt kokku langema**.

Vaadake läbisõitu ja võrrelge seda hooldusraamatu ning ülevaatuse andmetega. Suur vahe on hoiatusmärk.

## 3. Liising, järelmaks ja tasud

Kui autol on liising või järelmaks, ei saa müüja seda üksi müüa. Kontrollige ka, kas registreerimistasu on varem makstud – kui ei ole, tuleb see tasuda omanikuvahetusel.

## 4. Leping ja makse

Ostu-müügilepingusse kirjutage VIN, läbisõit, teadaolevad puudused ja hind sõnadega. Makske pangaülekandega ja võtke võtmed ning dokumendid üle koos **üleandmise aktiga**.

## 5. Pärast ostu

Kinnitage müüja alustatud omanikuvahetus e-teeninduses 5 tööpäeva jooksul ja sõlmige enne sõitu liikluskindlustus.

## Kokkuvõttes

Õige omanik, ühtiv VIN, usutav läbisõit, liisinguta auto, pangamakse ja omanikuvahetus kohe.
''')

c('omanikuvahetus-transpordiametis','Omanikuvahetus Transpordiameti e-teeninduses: kuidas käib','Omanikuvahetus',
 'Kuidas teha sõiduki omanikuvahetus Transpordiameti e-teeninduses: kes alustab, 5 tööpäeva tähtaeg, mootorsõidukimaks ja mis juhtub, kui ostja ei kinnita.',
 'Müüja alustab, ostja kinnitab – kõik e-teeninduses, 5 tööpäeva jooksul. Jooksva aasta mootorsõidukimaks jääb müüjale.',
 'auto','omanikuvahetus',['soiduki-ostu-muugileping','volikiri'],
 ['omanikuvahetus','Transpordiamet','e-teenindus','mootorsõidukimaks','registreerimistasu'],[OMANIK,MSM],
 [('Mis tähtaja jooksul tuleb omanikuvahetus teha?','Registriandmete muudatus tuleb teha 5 tööpäeva jooksul.'),
  ('Mis juhtub, kui ostja ei kinnita omanikuvahetust?','Müüja võib teavitada sõiduki võõrandamisest. Sõiduk kantakse siis registrist ajutiselt maha.')],
'''
Omanikuvahetus on samm, millega auto läheb **ka registris** uuele omanikule. Enamasti saab selle teha täielikult veebis.

## 1. Kes mida teeb

**Müüja** alustab omanikuvahetust Transpordiameti e-teeninduses ja sisestab ostja andmed. **Ostja** logib sisse ja kinnitab toimingu. Mõlemal on vaja ID-kaarti, Mobiil-ID-d või Smart-ID-d.

## 2. Tähtaeg

Registriandmete muudatus tuleb teha **5 tööpäeva jooksul**. Kõige kindlam on teha see samal päeval, kui auto üle antakse.

## 3. Maksud ja tasud

Võõrandamisel jääb **jooksva aasta mootorsõidukimaks endisele omanikule**. Kui autolt ei ole registreerimistasu varem makstud, tuleb see tasuda esimesel omanikuvahetusel.

## 4. Kui ostja ei kinnita

Kui ostja omanikuvahetust ei kinnita, võib müüja teavitada võõrandamisest. Sõiduk kantakse siis registrist **ajutiselt maha** – nii ei jää müüja vastutama auto eest, mida tal enam ei ole.

## 5. Kui toimingu teeb keegi teine

Kui müüja või ostja ei saa ise e-teenindust kasutada, võib toimingu teha volitatud isik. Koostage selleks volikiri.

## Kokkuvõttes

Müüja alustab, ostja kinnitab, 5 tööpäeva jooksul. Maks jääb selle aasta eest müüjale.
''')

c('trahv-parast-auto-muuki','Trahv pärast auto müüki: kuidas tõendada, et auto oli ostja käes','Trahv pärast müüki',
 'Tuli trahv või parkimisteade auto eest, mille müüsite? Kuidas aitavad üleandmise akt kellaajaga, ostu-müügileping ja õigeaegne omanikuvahetus.',
 'Kuni omanikuvahetus ei ole registris tehtud, võivad teated jõuda teile. Akt kellaajaga ja leping tõendavad, kelle käes auto oli.',
 'auto','auto-muuk',['soiduki-uleandmise-akt','soiduki-ostu-muugileping'],
 ['trahv pärast müüki','parkimistrahv','üleandmise akt','kiiruskaamera','omanikuvahetus'],[OMANIK,VOS],
 [('Miks tuli trahv mulle, kuigi auto on müüdud?','Teated saadetakse registris olevale isikule. Kui omanikuvahetus ei olnud veel tehtud, jõudis teade teile.'),
  ('Mida teha?','Vastake teate saatjale ja lisage ostu-müügileping ning üleandmise akt kuupäeva ja kellaajaga.')],
'''
Auto on müüdud, kuid postkasti tuleb teade kiiruskaamerast või parkimisfirmalt. Enamasti on põhjus lihtne: **register ei teadnud veel**, et auto on uue omaniku käes.

## 1. Miks see juhtub

Trahvid ja parkimisteated saadetakse registris olevale isikule. Kui omanikuvahetus jäi tegemata või venis, on registris endiselt teie nimi.

## 2. Mis teid kaitseb

- **Ostu-müügileping** – näitab, et auto on müüdud.
- **Üleandmise akt kuupäeva ja kellaajaga** – näitab täpselt, millal auto teie käest läks.
- Ostja andmed – nimi, isikukood ja aadress.

Kui rikkumine juhtus pärast akti kellaaega, saate tõendada, et autot juhtis keegi teine.

## 3. Kuidas vastata

Kirjutage teate saatjale, et sõiduk oli rikkumise ajal võõrandatud, ja lisage lepingu ning akti koopia. Märkige ostja andmed.

## 4. Kuidas seda vältida

Tehke omanikuvahetus **samal päeval**. Kui ostja ei kinnita, teavitage võõrandamisest – sõiduk kantakse registrist ajutiselt maha.

## Kokkuvõttes

Akt kellaajaga on parim tõend. Omanikuvahetus kohe – siis teateid ei tulegi.
''')

c('mootorratta-muuk','Mootorratta või rolleri müük: leping ja omanikuvahetus','Mootorratta müük',
 'Kuidas müüa mootorratast, rollerit või ATV-d eraisikule: ostu-müügileping VIN-iga, makse, üleandmine ja omanikuvahetus Transpordiameti e-teeninduses.',
 'Reeglid on samad mis autol: leping VIN-iga, pangamakse, akt kellaajaga ja omanikuvahetus 5 tööpäeva jooksul.',
 'auto','auto-muuk',['mootorratta-ostu-muugileping','soiduki-uleandmise-akt'],
 ['mootorratta müük','rolleri müük','ATV müük','omanikuvahetus'],[OMANIK,VOS],
 [('Kas mootorrattal on omanikuvahetus sama?','Jah. Ka mootorratta omanikuvahetus tehakse Transpordiameti e-teeninduses ja muudatus tuleb teha 5 tööpäeva jooksul.')],
'''
Mootorratas, roller või ATV müüakse samamoodi kui auto. Erinevus on peamiselt selles, **kust VIN leida**.

## 1. VIN mootorrattal

Mootorrattal on VIN tavaliselt **raami sisse löödud** esikahvli juures. Võrrelge seda registreerimistunnistuse lahtriga E – need peavad kokku langema.

## 2. Ostu-müügileping

Kirjutage lepingusse pooled isikukoodidega, sõiduk koos VIN-i ja registreerimismärgiga, läbisõit, teadaolevad puudused ja hind sõnadega. Märkige ka lisavarustus – kiiver, kohvrid, talverehvid.

## 3. Makse ja üleandmine

Makske pangaülekandega. Üleandmisel koostage akt kuupäeva, kellaaja, võtmete ja dokumentidega.

## 4. Omanikuvahetus

Müüja alustab omanikuvahetust e-teeninduses ja ostja kinnitab selle **5 tööpäeva jooksul**. Ostja sõlmib enne sõitu liikluskindlustuse.

## Kokkuvõttes

Sama protsess mis autol: leping, pangamakse, akt ja omanikuvahetus kohe.
''')

c('auto-muuk-jarelmaksuga','Auto müük osamaksetena: kuidas end kaitsta','Auto müük osamaksetena',
 'Müüte autot nii, et ostja maksab osade kaupa? Kuidas kirjutada maksegraafik, omandireservatsioon ja mis teha, kui osamakse jääb tasumata.',
 'Kokkulepe maksegraafikuga, omand alles pärast viimast makset ja selge reegel viivitamise kohta – nii on müüjal kindlam.',
 'auto','auto-muuk',['soiduki-ostu-muugileping','maksegraafiku-kokkulepe','raha-vastuvotmise-kviitung'],
 ['auto osamaksetega','järelmaks eraisikult','omandireservatsioon','maksegraafik'],[VOS,TSUS,OMANIK],
 [('Kas omand võib jääda müüjale kuni viimase makseni?','Jah, pooled võivad kokku leppida, et omand läheb ostjale üle alles pärast kogu hinna tasumist (omandireservatsioon).'),
  ('Mis siis, kui ostja jätab maksmata?','Andke kirjalik nõue ja tähtaeg. Kui kokkulepe seda ette näeb, võite nõuda kogu jäägi kohe.')],
'''
Kui ostja ei saa kogu summat korraga maksta, võib auto müüa ka osamaksetena. Müüja jaoks on see **riskantsem** – seega pange kõik kirja.

## 1. Mida kirja panna

- kogu hind ja **esimene makse**,
- osamaksete summa, arv ja maksepäev,
- mis juhtub, kui osamakse jääb tasumata.

Maksegraafiku kokkulepe teeb võlast ja osamaksetest selge ülevaate.

## 2. Omand ja omanikuvahetus

Pooled võivad kokku leppida, et omand läheb ostjale üle alles pärast kogu hinna tasumist – **omandireservatsioon**. Mõelge läbi, millal teete omanikuvahetuse: kuni auto on registris teie nimel, tulevad teated teile.

## 3. Viivitamine

Kirjutage kokkuleppesse, et kahe osamakse hilinemisel võite nõuda kogu jäägi kohe. Rahalise kohustuse täitmisega viivitamise korral võib nõuda ka viivist.

## 4. Tõendid

Laske maksed teha pangaülekandega. Iga sularahamakse kohta allkirjastage kviitung.

## Kokkuvõttes

Suurem esimene makse, kirjalik maksegraafik ja selge reegel viivitamise kohta.
''')

c('auto-kinkimine','Auto kinkimine pereliikmele: leping ja omanikuvahetus','Auto kinkimine',
 'Kuidas kinkida autot lapsele või abikaasale: kinkeleping, omanikuvahetus Transpordiameti e-teeninduses ning kas kingituselt makstakse maksu.',
 'Kinkeleping, auto üleandmine ja omanikuvahetus e-teeninduses. Eestis kingimaksu ei ole.',
 'auto','auto-muuk',['kinkeleping','soiduki-uleandmise-akt'],
 ['auto kinkimine','kinkeleping','kingitus pereliikmele','omanikuvahetus'],[VOS,KING,OMANIK],
 [('Kas auto kinkimiselt tuleb maksu maksta?','Eestis kingimaksu ei ole ja eraisikute vahelisi kingitusi üldjuhul tulumaksuga ei maksustata.'),
  ('Kas kinkelepingut on vaja?','Kohe üle antud kingitus kehtib ka vormita, kuid kirjalik leping tõendab, et tegemist oli kingitusega, mitte müügiga.')],
'''
Auto kinkimine pereliikmele on lihtne, kuid üks samm on sama mis müügil: **omanikuvahetus registris**.

## 1. Kinkeleping

Kohe üle antud kingitus kehtib ka vormita. Kirjalik kinkeleping on siiski kasulik: see näitab, et tegemist oli **kingitusega**, mitte müügiga, ja paneb kirja auto andmed ja üleandmise päeva.

## 2. Maksud

Eestis **kingimaksu ei ole**. Eraisikute vahelisi kingitusi üldjuhul tulumaksuga ei maksustata.

## 3. Omanikuvahetus

Kinkija alustab omanikuvahetust Transpordiameti e-teeninduses ja kingisaaja kinnitab selle 5 tööpäeva jooksul – täpselt nagu müügi puhul. Kingisaaja sõlmib liikluskindlustuse.

## 4. Kui lubate kinkida alles tulevikus

Kinkelubadus – lubadus kinkida hiljem – vajab notariaalset vormi. Kui annate auto kohe üle, seda vaja ei ole.

## Kokkuvõttes

Kinkeleping, auto ja võtmed üle, omanikuvahetus e-teeninduses. Maksu ei ole.
''')

c('laen-sobrale','Laen sõbrale või sugulasele: kuidas raha tagasi saada','Laen sõbrale',
 'Laenate raha sõbrale või sugulasele? Kuidas kirjutada laenuleping, tagastamine korraga või osamaksetena, intress ja mis teha, kui laenu ei tagastata.',
 'Kirjalik laenuleping, raha pangaülekandega ja selge tähtaeg. Nõue aegub 3 aastaga – võla tunnistamine katkestab aegumise.',
 'raha','laen',['laenuleping','raha-vastuvotmise-kviitung','volatunnistus'],
 ['laen sõbrale','laenuleping','eraisikute laen','võlg','aegumine'],[VOS,TSUS],
 [('Kas laenuleping peab olema kirjalik?','Seadus ei nõua eraisikute vahel kirjalikku vormi, kuid kirjalik leping on parim tõend summa ja tähtaja kohta.'),
  ('Kas võin küsida intressi?','Jah, kui see on kokku lepitud. Kui intressi ei ole lepingusse kirjutatud, on laen intressita.'),
  ('Millal laenunõue aegub?','Lepingust tuleneva nõude aegumistähtaeg on 3 aastat. Võla tunnistamine katkestab aegumise.')],
'''
Raha laenamine sõbrale on usalduse küsimus – kuid kirjalik leping hoiab ära arusaamatused, mis rikuvad sõpruse kiiremini kui võlg ise.

## 1. Mida lepingusse kirjutada

- pooled ja **summa sõnadega**,
- kuidas raha üle anti (pank või sularaha),
- **tagastamise tähtaeg** – korraga või osamaksetena,
- kas laen on intressiga või ilma.

## 2. Raha üleandmine

Kandke raha üle **pangaga** ja märkige selgitusse „laen“. Kui annate sularaha, laske laenusaajal allkirjastada kviitung.

## 3. Kui raha ei tagastata

Alustage meeldetuletusest ja seejärel saatke **kirjalik maksenõue** uue tähtajaga. Kui laenusaaja on nõus, sõlmige maksegraafiku kokkulepe. Viimane samm on maksekäsu kiirmenetlus kohtus.

## 4. Aegumine

Lepingust tuleneva nõude aegumistähtaeg on **3 aastat**. Kui laenusaaja tunnistab võlga kirjalikult, aegumine katkeb ja tähtaeg hakkab uuesti kulgema.

## Kokkuvõttes

Kirjalik leping, pangaülekanne, selge tähtaeg. Probleemide korral nõue ja võla tunnistamine.
''')

c('volgnik-ei-maksa','Võlgnik ei maksa: nõue, maksegraafik ja kohus','Võlgnik ei maksa',
 'Mida teha, kui keegi ei maksa võlga: meeldetuletus, kirjalik maksenõue, võla tunnistamine, maksegraafik ja maksekäsu kiirmenetlus.',
 'Alustage kirjalikust nõudest tähtajaga. Kui võlgnik on nõus, leppige kokku osamaksed – see katkestab ka aegumise.',
 'raha','volad',['maksenoue','maksegraafiku-kokkulepe','volatunnistus'],
 ['võlgnik ei maksa','maksenõue','maksekäsk','võla sissenõudmine','viivis'],[VOS,TSUS],
 [('Kas võin nõuda viivist?','Jah, rahalise kohustuse täitmisega viivitamise korral võib nõuda seadusjärgset viivist.'),
  ('Mis on maksekäsu kiirmenetlus?','Lihtsustatud kohtumenetlus rahaliste nõuete sissenõudmiseks. Avalduse saab esitada e-toimiku kaudu.')],
'''
Võlg on tähtaegselt tasumata ja võlgnik vaikib. Enne kohtusse minekut on mõistlik teha **kolm sammu**.

## 1. Kirjalik maksenõue

Saatke võlgnikule kirjalik nõue: võla summa, alus, möödunud tähtaeg ja **uus maksetähtaeg** (tavaliselt 7–14 päeva). Hoidke saatmise tõend alles.

## 2. Kokkulepe

Kui võlgnik soovib maksta, kuid ei suuda korraga, sõlmige **maksegraafiku kokkulepe**. Selles võlgnik tunnustab võlga – see katkestab aegumise.

Kui osamakseid ei ole vaja, piisab **võla tunnistamisest**: võlgnik kinnitab kirjalikult võla summat ja tasumise tähtaega.

## 3. Kohus

Kui võlgnik ei reageeri, võite esitada **maksekäsu kiirmenetluse** avalduse. See on lihtsustatud menetlus rahaliste nõuete jaoks.

## 4. Aegumine

Tehingust tuleneva nõude aegumistähtaeg on 3 aastat, tahtliku rikkumise korral 10 aastat. Ärge oodake liiga kaua.

## Kokkuvõttes

Nõue tähtajaga, siis kokkulepe või võla tunnistamine, viimasena maksekäsk.
''')
print('ok')
