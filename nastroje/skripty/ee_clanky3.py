import sys; sys.path.insert(0,'/home/claude/skripty')
from ee_zdroje import *

c('puudusega-kaup','Puudusega kaup: 2-aastane vastutus ja pretensioon','Puudusega kaup',
 'Ostetud kaup läks katki? Müüja vastutab 2 aastat. Mida nõuda – parandamine, asendamine, hinnaalandus või raha tagasi – ja kuidas esitada pretensioon.',
 'Müüja vastutab kauba lepingule mittevastavuse eest 2 aastat üleandmisest. Esitage pretensioon kirjalikult koos ostu tõendiga.',
 'ostud','garantii',['pretensioon'],
 ['puudusega kaup','pretensioon','garantii','2 aastat','tarbija õigused'],[GAR,VOS],
 [('Kui kaua müüja vastutab?','Kaks aastat alates kauba üleandmisest.'),
  ('Kas pean nõudma kõigepealt parandamist?','Üldjuhul valite parandamise või asendamise vahel. Hinnaalandust või raha tagasi võite nõuda, kui parandamine või asendamine ei ole võimalik või ei õnnestu.')],
'''
Kui ostetud kaup ei tööta nii, nagu peaks, vastutab selle eest **müüja** – mitte ainult tootja.

## 1. Kui kaua müüja vastutab

Müüja vastutab kauba lepingule mittevastavuse eest **2 aastat** alates kauba üleandmisest. Tootja lisagarantii on sellele lisaks.

## 2. Mida võite nõuda

1. **parandamist** või **asendamist**,
2. kui see ei ole võimalik või ei õnnestu – **hinnaalandust** või lepingust **taganemist** ja raha tagasi.

## 3. Kuidas pretensioon esitada

Kirjutage müüjale:

- millal ja kust kauba ostsite,
- mis on katki ja millal puudus ilmnes,
- mida nõuate.

Lisage ostutšekk või arve ja hoidke saatmise tõend alles.

## 4. Kui müüja keeldub

Kui müüja keeldub või ei vasta, võite pöörduda tarbijavaidluste komisjoni.

## Kokkuvõttes

2 aastat, kirjalik pretensioon ja selge nõue.
''')

c('muuja-keeldus-pretensioonist','Müüja keeldus pretensioonist: mida edasi teha','Pretensioonist keeldumine',
 'Müüja lükkas pretensiooni tagasi? Kuidas vastata, millal on keeldumine õigustatud ja kuidas pöörduda tarbijavaidluste komisjoni.',
 'Küsige keeldumise põhjust kirjalikult. Kui see ei veena, pöörduge tarbijavaidluste komisjoni.',
 'ostud','garantii',['pretensioon'],
 ['pretensioon tagasi lükatud','tarbijavaidluste komisjon','kauba puudus','müüja keeldus'],[GAR,VOS],
 [('Millal võib müüja keelduda?','Näiteks kui puudus tekkis kauba vale kasutamise või kahjustamise tõttu pärast üleandmist.'),
  ('Kuhu pöörduda?','Tarbijavaidluste komisjoni, mis lahendab tarbija ja kaupleja vaidlusi kohtuväliselt.')],
'''
Müüja vastas pretensioonile „ei“. See ei ole veel lõpp.

## 1. Küsige põhjust kirjalikult

Paluge müüjal keeldumist **kirjalikult põhjendada**. Kui ta väidab, et kaupa kasutati valesti, küsige ekspertiisi tulemust.

## 2. Kas keeldumine on õigustatud

Müüja ei vastuta puuduste eest, mis tekkisid pärast üleandmist näiteks kukkumise, vee või vale kasutamise tõttu. Ta vastutab aga puuduste eest, mis olid kaubas **juba üleandmisel**.

## 3. Vastake

Kirjutage müüjale lühidalt, miks keeldumisega ei nõustu, ja korrake oma nõuet. Lisage fotod ja ostu tõend.

## 4. Tarbijavaidluste komisjon

Kui müüja jääb keeldumise juurde, pöörduge **tarbijavaidluste komisjoni**. See lahendab tarbija ja kaupleja vaidlusi kohtuväliselt.

## Kokkuvõttes

Põhjus kirjalikult, oma vastus tõenditega ja vajadusel komisjon.
''')

c('muuk-kuulutuse-kaudu','Müük kuulutuse kaudu: leping, makse ja pettused','Müük kuulutuse kaudu',
 'Müüte kasutatud asja kuulutuse kaudu? Kuidas kirjutada lühike ostu-müügileping, kuidas võtta makse vastu turvaliselt ja kuidas ära tunda pettust.',
 'Lühike leping seisukorra ja hinnaga, raha enne üleandmist ja ettevaatus linkide ning „kulleri“ pakkumistega.',
 'ostud','kuulutus',['ostu-muugileping','raha-vastuvotmise-kviitung'],
 ['müük kuulutuse kaudu','kasutatud asi','ostu-müügileping','pettus','makse'],[VOS],
 [('Kas eraisik vastutab müüdud asja puuduste eest?','Jah, kui asi ei vasta lepingule. Kirjutage teadaolevad puudused lepingusse.'),
  ('Kuidas pettust ära tunda?','Ärge avage ostja saadetud makselinke ega sisestage kaardiandmeid, et raha „vastu võtta“.')],
'''
Kasutatud asja müük kuulutuse kaudu on lihtne – kui teate, kuidas makse vastu võtta ja pettust vältida.

## 1. Lühike leping

Kallima asja puhul kirjutage lühike **ostu-müügileping**: asi, seisukord, teadaolevad puudused, hind ja üleandmise päev. Puudused, mis on kirjas, ei saa hiljem vaidluse põhjuseks.

## 2. Makse

- **Sularaha** isikliku kohtumise ajal – lugege üle ja andke kviitung.
- **Pangaülekanne** – andke asi üle alles siis, kui raha on teie kontol.

## 3. Pettused

Levinud skeem: „ostja“ saadab lingi, mille kaudu peate raha „vastu võtma“ ja sisestama kaardiandmed. **Ärge seda tehke.** Raha vastuvõtmiseks ei ole vaja kaardiandmeid ega PIN-koode.

## 4. Üleandmine

Kohtuge avalikus kohas ja laske ostjal asi enne maksmist üle vaadata.

## Kokkuvõttes

Leping seisukorraga, raha enne üleandmist ja mitte ühtegi linki.
''')

c('asja-laenamine-sobrale','Asja laenamine sõbrale: kasutuslaenuleping','Asja laenamine',
 'Laenate sõbrale haagise, tööriista või auto? Kasutuslaenuleping paneb kirja asja seisukorra, tagastamise aja ja vastutuse kahjude eest.',
 'Kasutuslaen on tasuta. Kirjutage asja seisukord, tagastamise aeg ja kes kannab kulud.',
 'ostud','kasutuslaen',['kasutuslaenuleping','soiduki-uleandmise-akt'],
 ['asja laenamine','kasutuslaen','tasuta kasutamine','haagise laenamine'],[VOS],
 [('Mis vahe on kasutuslaenul ja üüril?','Kasutuslaen on tasuta. Kui kasutamise eest makstakse, on tegemist üürilepinguga.'),
  ('Kas laenaja võib asja edasi anda?','Ilma laenuandja loata mitte.')],
'''
Haagis kolimiseks, puur remondiks, auto nädalavahetuseks – sõbrale asja laenamine on tavaline. Kui midagi läheb katki, aitab **lühike leping**.

## 1. Mis on kasutuslaen

Kasutuslaen tähendab, et annate asja **tasuta** kasutada ja laenaja tagastab **sama asja**. Kui küsite tasu, on see üür.

## 2. Mida kirja panna

- asi – mark, mudel, seerianumber, tarvikud,
- **seisukord üleandmisel** ja fotod,
- tagastamise aeg – kuupäev või eesmärgi täitmine,
- asja väärtus kaotsimineku puhuks.

## 3. Kasutamine ja kulud

Laenaja kasutab asja hoolikalt, ainult kokkulepitud viisil ja ei anna seda ilma loata edasi. Tavapärased hoolduskulud kannab laenaja.

## 4. Tagastamine

Tagastamisel kontrollige asi koos üle. Tavapärane kulumine on lubatud, kahjustused tuleb hüvitada.

## Kokkuvõttes

Seisukord ja fotod, tagastamise aeg ja keeld anda edasi ilma loata.
''')

c('leping-meistriga','Leping meistriga: tähtaeg, tasu ja puudused','Leping meistriga',
 'Tellite remonti või renoveerimist? Mida kirjutada töövõtulepingusse: töö kirjeldus, tähtajad, tasu ja ettemaks, vastuvõtmine ja puudused.',
 'Töö täpne kirjeldus, valmimise tähtaeg ja tasu pärast vastuvõtmist – nii on vaidlusi vähem.',
 'teenused','meistrid',['toovotuleping','maksenoue'],
 ['leping meistriga','töövõtuleping','remont','renoveerimine','ettemaks'],[VOS],
 [('Kui suur ettemaks on mõistlik?','Seadus ei määra; mida väiksem ettemaks, seda väiksem risk. Suurem osa tasust makske pärast vastuvõtmist.'),
  ('Mida teha, kui meister hilineb?','Andke mõistlik lisatähtaeg; kui ka see möödub tulemusteta, võite lepingust taganeda.')],
'''
Suurem osa remondivaidlusi tekib sellest, et keegi ei pannud kirja, **mida täpselt** tehakse ja **millal**.

## 1. Töö kirjeldus

Kirjutage täpselt: tööd, kogused, materjalid ja kes need hangib. „Vannitoa remont“ ei ole kirjeldus; „vanade plaatide eemaldamine, 12 m² uusi plaate, dušinurga paigaldus“ on.

## 2. Tähtajad

Märkige **algus** ja **valmimise päev**. Kui meister hilineb, võite anda mõistliku lisatähtaja ja selle möödumisel lepingust taganeda.

## 3. Tasu ja ettemaks

Kirjutage kogutasu ja kas käibemaks sisaldub. Vältige suurt ettemaksu – suurem osa makske **pärast töö vastuvõtmist**. Lisatööd ainult kirjaliku kokkuleppega.

## 4. Vastuvõtmine ja puudused

Kontrollige tööd koos meistriga ja kirjutage puudused üles. Meister kõrvaldab puudused mõistliku aja jooksul.

## Kokkuvõttes

Täpne kirjeldus, kindel tähtaeg, väike ettemaks ja vastuvõtmine kirjalikult.
''')

c('toolepingu-ulesutlemine-tootaja','Töölt lahkumine: töölepingu ülesütlemine töötajana','Töölt lahkumine',
 'Kuidas töötaja ütleb töölepingu üles: vähemalt 30 kalendripäeva etteteatamist, kirjalikku taasesitamist võimaldav vorm, viimane tööpäev ja lõpparve.',
 'Tähtajatu töölepingu võib töötaja üles öelda põhjust esitamata, teatades sellest ette vähemalt 30 kalendripäeva.',
 'too','toolt-lahkumine',['toolepingu-ulesutlemine'],
 ['töölt lahkumine','töölepingu ülesütlemine','30 päeva','lahkumisavaldus','lõpparve'],[TLS],
 [('Kui pika etteteatamisega võin lahkuda?','Vähemalt 30 kalendripäeva, kui tööandjaga ei ole kokku lepitud teisiti.'),
  ('Kas avaldus võib olla e-kiri?','Jah, ülesütlemine peab olema kirjalikku taasesitamist võimaldavas vormis – e-kiri sobib.')],
'''
Uus töö või muu põhjus – töölt lahkumine on töötaja õigus. Tuleb vaid järgida **etteteatamistähtaega** ja **vormi**.

## 1. Etteteatamine

Tähtajatu töölepingu võib töötaja üles öelda **põhjust esitamata**, teatades sellest ette vähemalt **30 kalendripäeva**. Tähtaeg hakkab kulgema päevast, mil tööandja avalduse kätte saab.

## 2. Vorm

Ülesütlemine peab olema **kirjalikku taasesitamist võimaldavas vormis** – allkirjastatud paber, digiallkirjaga dokument või e-kiri.

## 3. Varasem lahkumine

Kui tööandja on nõus, võite lahkuda ka varem. Kirjutage kokkulepitud viimane tööpäev avaldusse või eraldi kokkuleppesse.

## 4. Lõpparve

Viimasel tööpäeval peab tööandja maksma töötasu ja **kasutamata puhkuse hüvitise**. Tööandja kannab töötamise lõppemise töötamise registrisse.

## 5. Tähtajaline leping

Tähtajalise töölepingu saab töötaja üldjuhul üles öelda ainult erakorraliselt mõjuval põhjusel. Muul juhul leppige lõpetamine kokku.

## Kokkuvõttes

30 kalendripäeva, kirjalik avaldus ja lõpparve kontroll.
''')

c('lapse-reis-ilma-vanemata','Lapse reis välismaale ilma vanemata: teise vanema nõusolek','Lapse reis',
 'Laps reisib välismaale ühe vanema või teise täiskasvanuga? Millal on vaja teise vanema nõusolekut ja mida nõusolekusse kirjutada.',
 'Ühise hooldusõiguse korral on lapse välismaale viimiseks – ka ajutiselt – üldjuhul vaja teise vanema nõusolekut.',
 'pere','lapse-reis',['nousolek-lapse-reisimiseks'],
 ['lapse reis','teise vanema nõusolek','laps välismaale','reisiluba'],[LAPS],
 [('Kas nõusolekut on vaja ka lühikeseks reisiks?','Ühise hooldusõiguse korral on üldjuhul vaja teise vanema nõusolekut ka ajutiseks reisiks.'),
  ('Kas nõusolek peab olema notariaalne?','Eesti õigus ei nõua alati notariaalset vormi, kuid sihtriik või lennufirma võib seda nõuda.')],
'''
Laps sõidab puhkusele ühe vanemaga, vanavanematega või klassiga. Kas teise vanema luba on vaja? **Enamasti jah.**

## 1. Millal on nõusolekut vaja

Kui vanematel on **ühine hooldusõigus**, on lapse välismaale viimiseks – ka **ajutiselt** – üldjuhul vaja teise vanema nõusolekut.

## 2. Kui laps reisib kellegi teisega

Kui last saadab vanavanem, treener või õpetaja, andke nõusolek **mõlema vanema allkirjaga**.

## 3. Mida nõusolekusse kirjutada

- vanema ja lapse nimi ning isikukood,
- lapse passi või ID-kaardi number,
- saatja andmed,
- **riigid** ja **ajavahemik**,
- vanema telefon.

## 4. Sihtriik ja lennufirma

Mõni riik või vedaja nõuab notariaalselt kinnitatud või tõlgitud nõusolekut. Kontrollige enne reisi.

## Kokkuvõttes

Ühise hooldusõiguse korral nõusolek kirjalikult, saatja ja reisi andmetega.
''')

c('volikiri-millal-notar','Volikiri: millal piisab lihtkirjalikust ja millal on vaja notarit','Volikiri',
 'Millal piisab lihtkirjalikust või digiallkirjaga volikirjast ja millal peab volikiri olema notariaalne. Mida volikirja kirjutada.',
 'Enamikuks toiminguks piisab lihtkirjalikust või digiallkirjastatud volikirjast. Kui tehing vajab notari vormi, vajab seda ka volikiri.',
 'volikiri','volikiri',['volikiri'],
 ['volikiri','lihtkirjalik volikiri','notariaalne volikiri','volitus','digiallkiri'],[TSUS],
 [('Kas digiallkirjaga volikiri kehtib?','Jah, digiallkiri on omakäelise allkirjaga samaväärne.'),
  ('Millal on vaja notariaalset volikirja?','Kui tehing ise vajab notariaalset vormi – näiteks kinnisasja võõrandamine.')],
'''
Volikiri lubab kellelgi teisel teie eest toiminguid teha. Kõige olulisem küsimus on **vorm**.

## 1. Lihtkirjalik või digiallkirjaga

Enamikuks igapäevaseks toiminguks – paki kättesaamine, asjaajamine, dokumendi esitamine – piisab **lihtkirjalikust** volikirjast. **Digiallkiri** on omakäelise allkirjaga samaväärne.

## 2. Millal on vaja notarit

Kui tehing ise vajab **notariaalset vormi**, peab ka volikiri olema notariaalselt tõestatud. Nii on see näiteks kinnisasja võõrandamisel.

## 3. Mida volikirja kirjutada

- volitaja ja volitatu nimi ning isikukood,
- **täpsed toimingud**,
- kas edasivolitamine on lubatud,
- kehtivuse aeg.

## 4. Volikirja lõppemine

Volikiri lõpeb tähtaja möödumisel või kui volitaja selle tagasi võtab. Tagasivõtmisest teatage volitatule ja asutusele, kellele volikiri esitati.

## Kokkuvõttes

Igapäevaseks lihtkirjalik või digiallkiri, notari vormiga tehinguks notariaalne volikiri.
''')
print('ok')
