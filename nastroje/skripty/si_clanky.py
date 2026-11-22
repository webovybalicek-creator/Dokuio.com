import sys, os; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
os.makedirs('/home/claude/dokuio.com/src/content/poradna/si', exist_ok=True)
OZ=('Obligacijski zakonik (Uradni list RS)','https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2001-01-4287')
SZ1=('Stanovanjski zakon SZ-1 (Uradni list RS)','https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2003-01-3312')
ZVP=('Zakon o varstvu potrošnikov ZVPot-1 (Uradni list RS)','https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2022-01-3083')
ODST=('Obrazec za odstop od pogodbe (Uradni list RS, št. 139/22)','https://www.uradni-list.si/files/RS_-2022-139-03419-OB~P001-0000.PDF')
MZI=('Pri prodaji vozila je treba urediti tudi prenos lastništva (gov.si)','https://www.gov.si/novice/2024-02-06-pri-prodaji-vozila-je-treba-urediti-tudi-prenos-lastnistva-novemu-lastniku/')
TI=('Nakup rabljenega vozila: kaj mora vedeti potrošnik (gov.si)','https://www.gov.si/novice/2026-01-20-nakup-rabljenega-vozila-kaj-mora-vedeti-potrosnik/')
FD=('Prejel sem darilo (FURS)','https://fu.gov.si/zivljenjski_dogodki_prebivalci/prejel_sem_darilo')
FN=('Oddajam sobo, stanovanje, hišo v najem (FURS)','https://www.fu.gov.si/zivljenjski_dogodki_prebivalci/oddajam_sobo_stanovanje_hiso_garazo_v_najem/')
NT=('Notarska tarifa (Uradni list RS, št. 59/19)','https://www.uradni-list.si/files/RS_-2019-059-02624-OB~P001-0000.PDF')
ZDR=('Zakon o delovnih razmerjih ZDR-1 (PISRS)','https://pisrs.si/api/datoteke/integracije/355729653')
YE=('Potne listine za mladoletne osebe (Your Europe)','https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/index_sl.htm')
EJ=('Selitev otroka v tujino – Slovenija (e-pravosodje)','https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/si_sl')

def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    clanek('si', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo)

c('prodaja-avtomobila','Prodaja rabljenega avtomobila: pogodba, izročitev in rok 15 dni','Prodaja avtomobila',
 'Kako prodati rabljen avto fizični osebi: kupoprodajna pogodba, plačilo, izročitev s točno uro, prijava spremembe lastništva v 15 dneh in zavarovanje.',
 'Pogodba s številko šasije, denar na računu, zapisnik z uro izročitve. Spremembo lastništva je treba prijaviti v 15 dneh.',
 'avto','prodaja-avta',['kupoprodajna-pogodba-avto','zapisnik-o-izrocitvi-vozila','potrdilo-o-prejemu-denarja'],
 ['prodaja avtomobila','kupoprodajna pogodba avto','prodaja rabljenega avta','prepis vozila','izročitev vozila'],[OZ,MZI],
 [('Ali je treba podpis na pogodbi overiti?','Ni nujno. Če prepis ureja le kupec, naj ima pogodbo z overjenim podpisom prodajalca – overitev pri notarju stane največ 10 €.'),
  ('Kdaj naj izročim vozilo?','Ministrstvo za infrastrukturo svetuje, da vozila z dokumenti ne izročite, dokler prepis ni opravljen. Najbolje je, da prepis opravita skupaj.'),
  ('Kaj če kupec ne prijavi spremembe?','Do prepisa je vozilo vpisano na vas. Zapisnik z uro izročitve dokazuje, da ga od takrat niste več imeli.')],
'''
Prodaja avtomobila med fizičnimi osebami ni zapletena, a dve stvari se splača narediti skrbno: **pisno pogodbo** in **dokaz o uri izročitve**. Prav ti dve vas zaščitita, če kupec s prepisom zamuja.

## 1. Pripravite dokumente

- prometno dovoljenje in vse ključe,
- servisno knjižico in račune za večja popravila,
- osebno izkaznico – v pogodbo vpišete ime, naslov in davčno številko ali EMŠO obeh strank.

## 2. Kupoprodajna pogodba

Pogodba nima predpisanega obrazca, mora pa biti jasno:

- kdo prodaja in kdo kupuje,
- katero vozilo: znamka, model, **številka šasije (VIN)**, registrska oznaka,
- **stanje kilometrov** in znane napake – kar kupcu poveste, zapišite,
- **kupnina** s številko in z besedo ter način plačila,
- datum in **ura izročitve**.

Vsaka stranka obdrži en izvod.

## 3. Plačilo

Najvarnejše je plačilo **na račun** pred izročitvijo ključev. Če kupec plača z gotovino, denar preštejte in izdajte **potrdilo o prejemu denarja**. Večje zneske raje izročite v poslovalnici banke.

## 4. Izročitev in prepis

Spremembo lastništva je treba prijaviti **registracijski organizaciji v 15 dneh**. Ministrstvo za infrastrukturo svetuje, da vozila z dokumenti ne izročite pred opravljenim prepisom – najbolje je, da ga opravita skupaj. V **zapisnik o izročitvi** vpišite datum in točno uro, kilometre, gorivo, ključe in dokumente.

## 5. Po prodaji

- Obvestite svojo **zavarovalnico** o prodaji.
- Po dveh tednih preverite, ali je prepis opravljen; če ni, kupca pisno pozovite.

## Povzetek

Pogodba s številko šasije, denar na računu, zapisnik z uro izročitve in prepis v 15 dneh. Tako ste zaščiteni tudi, če kupec zamuja.
''')

c('nakup-rabljenega-avtomobila','Nakup rabljenega avtomobila od fizične osebe: kaj preveriti','Nakup rabljenega avtomobila',
 'Kaj preveriti pred nakupom rabljenega avta od fizične osebe: lastnik in dokumenti, številka šasije, kilometri, napake, plačilo in prepis v 15 dneh.',
 'Preverite, ali prodajalec res lastnik, primerjajte številko šasije in kilometre. Plačajte šele ob podpisu pogodbe.',
 'avto','nakup-avta',['kupoprodajna-pogodba-avto','zapisnik-o-izrocitvi-vozila'],
 ['nakup rabljenega avta','rabljen avto','kupoprodajna pogodba','preverjanje vozila','prepis vozila'],[OZ,TI,MZI],
 [('Kaj če kupim avto s skrito napako?','Pri nakupu od fizične osebe prodajalec odgovarja za stvarne napake po Obligacijskem zakoniku, če jih ne izključita s pogodbo in ni napake zamolčal. Zato v pogodbo zapišite vse, kar vam je povedal.'),
  ('Ali velja za nakup od fizične osebe garancija?','Ne. Varstvo potrošnikov velja pri nakupu od trgovca; pri nakupu od fizične osebe se uporablja Obligacijski zakonik.')],
'''
Pri nakupu rabljenega avtomobila od fizične osebe ste sami odgovorni za preverjanje. Nekaj korakov vam prihrani veliko težav.

## 1. Je prodajalec lastnik?

Ime v **prometnem dovoljenju** primerjajte z osebno izkaznico prodajalca. Če prodaja nekdo drug, naj ima **pooblastilo** lastnika.

## 2. Številka šasije in kilometri

- **Številko šasije (VIN)** na vozilu primerjajte s prometnim dovoljenjem.
- Kilometre primerjajte s servisno knjižico in računi. Nenavadno nizki kilometri so opozorilni znak.
- Vprašajte po nesrečah in popravilih – in odgovor zapišite v pogodbo.

## 3. Testna vožnja in pregled

Vozite v različnih pogojih in poslušajte motor, menjalnik in zavore. Pri dražjem vozilu se splača pregled v neodvisni delavnici.

## 4. Pogodba in plačilo

V **kupoprodajno pogodbo** vpišite številko šasije, kilometre, znane napake in uro izročitve. Plačajte na račun ali ob podpisu proti **potrdilu o prejemu denarja**.

## 5. Prepis

Spremembo lastništva prijavite na **registracijski organizaciji v 15 dneh**. Najbolje je, da prepis opravita s prodajalcem skupaj. Ne pozabite na **obvezno zavarovanje** na svoje ime.

## Povzetek

Lastnik, številka šasije, kilometri, pisna pogodba in prepis v 15 dneh – pet stvari, ki odločajo o varnem nakupu.
''')

c('prepis-vozila','Prepis vozila v Sloveniji: rok 15 dni, dokumenti in pooblastilo','Prepis vozila',
 'Kako poteka prepis vozila v Sloveniji: rok 15 dni za prijavo spremembe lastništva, potrebni dokumenti, pooblastilo, overitev podpisa in darilo vozila.',
 'Spremembo lastništva prijavite registracijski organizaciji v 15 dneh. Če gre le kupec, potrebuje pogodbo z overjenim podpisom.',
 'avto','prepis',['kupoprodajna-pogodba-avto','pooblastilo','darilna-pogodba'],
 ['prepis vozila','sprememba lastništva vozila','registracijska organizacija','rok 15 dni','prenos lastništva'],[MZI,NT],
 [('Koliko je rok za prepis?','Spremembo lastništva je treba prijaviti v 15 dneh.'),
  ('Ali lahko prepis uredi kdo drug?','Da, s pisnim pooblastilom. Upravna enota ali registracijska organizacija lahko zahteva overjen podpis – pri notarju stane 16 €.'),
  ('Kako prepišem podarjen avto?','Namesto kupoprodajne pogodbe predložite darilno pogodbo. Obdarjenec prvega dednega reda davka na darila ne plača.')],
'''
Prepis vozila je zadnji in najpomembnejši korak pri prodaji. Dokler ni opravljen, je vozilo v evidenci še vedno na prejšnjem lastniku.

## 1. Rok

Spremembo lastništva je treba prijaviti **registracijski organizaciji v 15 dneh**. Ministrstvo za infrastrukturo opozarja, da naj prodajalec vozila z dokumenti ne preda, dokler prepis ni opravljen.

## 2. Kaj potrebujete

- **kupoprodajno ali darilno pogodbo** (ali potrdilo o prenosu lastništva),
- prometno dovoljenje,
- osebni dokument,
- obvezno zavarovanje na novega lastnika.

## 3. Ko gre le ena stranka

Če prepis ureja samo kupec, naj ima pogodbo z **overjenim podpisom prodajalca** – overitev pri notarju stane največ 10 €. Če pošljete koga drugega, potrebuje **pooblastilo**.

## 4. Darilo ali dediščina

Pri podaritvi vozila uporabite **darilno pogodbo**. Zakonec, otroci in drugi potomci (prvi dedni red) davka na darila ne plačajo; drugi obdarjenci vložijo napoved na FURS v 15 dneh.

## Povzetek

Prepis v 15 dneh, pogodba z overjenim podpisom, če gre le ena stranka, in pooblastilo za zastopnika.
''')

c('kazen-po-prodaji-avta','Kazen za prekršek po prodaji avta: kako dokazati, da ste ga prodali','Kazen po prodaji avta',
 'Prišla vam je kazen za vozilo, ki ste ga že prodali? Kako z zapisnikom o izročitvi in pogodbo dokazati, kdo je vozil, in zakaj je prepis v 15 dneh pomemben.',
 'Dokler prepis ni opravljen, je vozilo vpisano na vas. Pogodba in zapisnik z uro izročitve sta vaš dokaz.',
 'avto','prodaja-avta',['zapisnik-o-izrocitvi-vozila','kupoprodajna-pogodba-avto'],
 ['kazen po prodaji avta','prekršek prodano vozilo','zapisnik o izročitvi','prepis vozila','lastnik vozila'],[MZI,OZ],
 [('Kaj storim, ko pride kazen?','V roku odgovorite organu in priložite kopijo pogodbe in zapisnika o izročitvi z uro predaje ter navedite podatke kupca.'),
  ('Kako se temu izognem?','Prepis opravite skupaj s kupcem pred izročitvijo vozila.')],
'''
Avto ste prodali, čez nekaj tednov pa pride kazen za prehitro vožnjo ali parkiranje. Zgodi se pogosteje, kot bi pričakovali – zlasti če kupec s prepisom zamuja.

## 1. Zakaj kazen pride k vam

Organ kazen pošlje osebi, ki je v evidenci vpisana kot lastnik ali uporabnik vozila. Če **prepis ni opravljen**, ste to še vedno vi.

## 2. Vaš dokaz

- **kupoprodajna pogodba** z datumom,
- **zapisnik o izročitvi** z datumom in **točno uro**, kilometri in podpisom kupca,
- po možnosti fotografije ob izročitvi.

Ura je ključna: prekršek, ki se je zgodil po izročitvi, ni vaš.

## 3. Kako odgovoriti

Organu v roku, ki je naveden na obvestilu, pisno odgovorite, da vozila takrat niste imeli, in navedite podatke kupca. Priložite kopijo pogodbe in zapisnika.

## 4. Kako se zaščititi vnaprej

- Prepis opravite **skupaj s kupcem** pred izročitvijo – tako svetuje tudi Ministrstvo za infrastrukturo.
- Če to ni mogoče, ne izročite vozila brez zapisnika z uro.
- Po dveh tednih preverite, ali je prepis opravljen.

## Povzetek

Zapisnik z uro izročitve je najcenejše zavarovanje pred kaznimi, ki niso vaše.
''')

c('prodaja-motorja','Prodaja rabljenega motorja ali skuterja: pogodba in prepis','Prodaja motorja',
 'Kako prodati rabljen motor, skuter ali štirikolesnik: kupoprodajna pogodba s številko šasije, oprema, plačilo, zapisnik o izročitvi in prepis v 15 dneh.',
 'Enaka pravila kot pri avtu: pogodba, zapisnik z uro izročitve in prepis v 15 dneh. Zapišite tudi opremo.',
 'avto','prodaja-avta',['kupoprodajna-pogodba-motor','zapisnik-o-izrocitvi-vozila','potrdilo-o-prejemu-denarja'],
 ['prodaja motorja','prodaja skuterja','kupoprodajna pogodba motor','prepis motorja','rabljen motor'],[OZ,MZI],
 [('Ali velja rok 15 dni tudi za skuter?','Da, za vsa registrirana vozila je treba spremembo lastništva prijaviti v 15 dneh.'),
  ('Ali v pogodbo vpišem tudi čelado?','Da – opremo, ki jo prodajate z motorjem (čelada, kovčki, ključavnica), zapišite, da ne bo sporov.')],
'''
Prodaja motorja poteka enako kot prodaja avtomobila, le da je pogosto zraven več opreme in več sezonskih vprašanj.

## 1. Pogodba

V **kupoprodajno pogodbo za motor** vpišite:

- znamko, model, **številko šasije** in registrsko oznako,
- kilometre in znane napake,
- **opremo**, ki je vključena v ceno,
- kupnino s številko in z besedo ter uro izročitve.

## 2. Testna vožnja

Kupcu dovolite vožnjo le z veljavnim vozniškim dovoljenjem ustrezne kategorije. Dogovorite se, kdo plača morebitno škodo.

## 3. Plačilo in izročitev

Plačilo na račun ali gotovina proti **potrdilu o prejemu denarja**. V **zapisnik o izročitvi** vpišite uro, kilometre, ključe in dokumente.

## 4. Prepis

Spremembo lastništva je treba prijaviti **v 15 dneh**. Prepis je najbolje opraviti skupaj pred izročitvijo. Obvestite zavarovalnico.

## Povzetek

Pogodba z opremo, zapisnik z uro in prepis v 15 dneh – kot pri avtu.
''')

c('prodaja-avta-na-obroke','Prodaja avta na obroke med fizičnimi osebami: kako se zavarovati','Prodaja avta na obroke',
 'Prodajate avto na obroke? Kako v pogodbo zapisati pridržek lastninske pravice, urnik obrokov, posledice zamude in kdaj izvesti prepis vozila.',
 'Pri prodaji na obroke se zavarujete s pridržkom lastninske pravice in dogovorom o obročnem odplačilu.',
 'avto','prodaja-avta',['kupoprodajna-pogodba-avto','dogovor-o-obrocnem-odplacilu'],
 ['prodaja avta na obroke','obroki','pridržek lastninske pravice','dogovor o obrokih','prodaja vozila'],[OZ,MZI],
 [('Kaj je pridržek lastninske pravice?','Dogovor, da kupec postane lastnik šele, ko plača celotno kupnino (OZ).'),
  ('Kaj če kupec preneha plačevati?','Po dogovoru zapade celoten ostanek. Lahko ga pozovete z opominom in nato predlagate izvršbo.')],
'''
Prodaja na obroke je med znanci pogosta, a za prodajalca tvegana. Pisni dogovor tveganje bistveno zmanjša.

## 1. Pridržek lastninske pravice

V **kupoprodajni pogodbi** izberite plačilo z **pridržkom lastninske pravice** – kupec postane lastnik šele, ko plača vse.

## 2. Urnik obrokov

V **dogovoru o obročnem odplačilu** zapišite:

- skupni znesek in prvi obrok (aro),
- število in višino obrokov ter datume,
- račun za plačilo,
- da ob zamudi z enim obrokom zapade celoten ostanek.

## 3. Prepis

Ker kupec ni lastnik, dokler ne plača, se dogovorite, kdaj bo prepis – pogosto šele po zadnjem obroku. Do takrat je vozilo vpisano na vas, zato se dogovorite o zavarovanju in kaznih.

## 4. Ko kupec zamuja

Najprej pošljite **opomin pred tožbo** z rokom. Dogovor o obrokih je hkrati pripoznava dolga, zato pretrga zastaranje.

## Povzetek

Pridržek lastninske pravice, pisni urnik in jasen dogovor o prepisu – tako je prodaja na obroke varna.
''')

c('darilo-avtomobila','Darilo avtomobila družinskemu članu: pogodba, davek in prepis','Darilo avtomobila',
 'Kako podariti avto otroku ali zakoncu: darilna pogodba, oprostitev davka na darila za prvi dedni red, napoved FURS v 15 dneh in prepis vozila.',
 'Za darilo avta uporabite darilno pogodbo. Prvi dedni red davka ne plača, prepis je treba opraviti v 15 dneh.',
 'avto','prepis',['darilna-pogodba','zapisnik-o-izrocitvi-vozila'],
 ['darilo avtomobila','podaritev avta','darilna pogodba vozilo','davek na darila','prepis vozila'],[FD,MZI],
 [('Ali otrok plača davek na podarjen avto?','Ne. Otroci, zakonec in drugi potomci (prvi dedni red) so davka na darila oproščeni.'),
  ('Kaj pa brat ali nečak?','Ti niso v prvem dednem redu. Če vrednost presega 5.000 €, vložijo napoved na FURS v 15 dneh.')],
'''
Ko starši podarijo avto otroku, je to darilo – ne prodaja. Zato potrebujete **darilno pogodbo**.

## 1. Darilna pogodba

V pogodbo vpišite darovalca in obdarjenca, sorodstvo, vozilo s **številko šasije** in vrednost. Darilna pogodba je podlaga za prepis.

## 2. Davek na darila

- **Prvi dedni red** (zakonec, otroci in drugi potomci) je davka oproščen.
- Premičnine v vrednosti do **5.000 €** se ne obdavčijo.
- Drugi obdarjenci vložijo **napoved na FURS v 15 dneh** od prejema darila.

## 3. Prepis

Spremembo lastništva je treba prijaviti **v 15 dneh**. Če prepis ureja le obdarjenec, naj ima pogodbo z overjenim podpisom darovalca.

## 4. Izročitev

Tudi v družini se splača **zapisnik o izročitvi** z uro – zaradi morebitnih kazni pred prepisom.

## Povzetek

Darilna pogodba, prepis v 15 dneh in pri drugih sorodnikih napoved FURS.
''')
print('OK1')
