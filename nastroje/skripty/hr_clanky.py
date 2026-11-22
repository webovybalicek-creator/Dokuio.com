import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
ZOO=('Zakon o obveznim odnosima (Narodne novine)','https://narodne-novine.nn.hr/clanci/sluzbeni/2005_03_35_707.html')
ZNS=('Zakon o najmu stanova (Narodne novine)','https://narodne-novine.nn.hr/clanci/sluzbeni/1996_10_91_1598.html')
ZZP=('Zakon o zaštiti potrošača (Narodne novine)','https://narodne-novine.nn.hr/clanci/sluzbeni/2022_02_19_203.html')
NAJAM=('Najam nekretnine (gov.hr)','https://gov.hr/hr/najam-nekretnine/1292')
REKL=('Reklamacija proizvoda i usluga s nedostatkom (gov.hr)','https://www.gov.hr/hr/reklamacija-proizvoda-i-usluga-s-nedostatkom/548')
PU_VOZ=('Stjecanje rabljenog motornog vozila (Porezna uprava)','https://porezna-uprava.gov.hr/hr/kupac-u-tuzemstvu-rabljenog-motornog-vozila/4468')
PU_DAR=('Porez na nasljedstva i darove – gotovina i pokretnine (Porezna uprava)','https://porezna-uprava.gov.hr/hr/nasljednik-i-daroprimatelj-gotovine-novcane-trazbine-vrijednosnog-papira-i-pokretnine/4445')
GOV_DAR=('Porez na nasljedstva i darove (gov.hr)','https://www.gov.hr/hr/porez-na-nasljedstva-i-darove/1462')
PRAV=('Pravilnik o obavijesti o pravu na jednostrani raskid ugovora (NN 117/22)','https://narodne-novine.nn.hr/clanci/sluzbeni/2022_10_117_1795.html')

def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    clanek('hr', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo)

c('prodaja-automobila','Prodaja rabljenog automobila: ugovor, predaja i rok od 15 dana','Prodaja automobila',
 'Kako prodati rabljeni automobil građaninu: kupoprodajni ugovor, plaćanje, primopredaja s točnim vremenom, promjena vlasništva u 15 dana i osiguranje.',
 'Ugovor s OIB-om i brojem šasije, novac na računu, zapisnik s vremenom predaje. Kupac ima 15 dana za promjenu vlasništva.',
 'auto','prodaja-auta',['kupoprodajni-ugovor-automobil','primopredajni-zapisnik-vozila','potvrda-o-primitku-novca'],
 ['prodaja automobila','kupoprodajni ugovor auto','prodaja rabljenog auta','promjena vlasništva','primopredaja vozila'],
 [ZOO,PU_VOZ],
 [('Treba li ovjeriti potpis na kupoprodajnom ugovoru?','Ne. Potpis prodavatelja na ugovoru o kupoprodaji rabljenog vozila ne treba ovjeravati kod javnog bilježnika.'),
  ('Tko plaća upravnu pristojbu?','Kupac, pri registraciji vozila na svoje ime u stanici za tehnički pregled.'),
  ('Što ako kupac ne prenese vlasništvo?','Do promjene vlasništva vozilo se vodi na vas. Zapisnik s vremenom predaje dokazuje da vozilo od tog trenutka više niste imali.')],
'''
Prodaja automobila između građana nije komplicirana, ali dvije stvari se isplati napraviti pažljivo: **pisani ugovor** i **dokaz o vremenu predaje**. Upravo oni vas štite ako kupac zakasni s promjenom vlasništva.

## 1. Pripremite dokumente

- prometnu dozvolu i ključeve (svi primjerci),
- servisnu knjižicu i račune za veće popravke,
- osobnu iskaznicu – u ugovor upisujete ime, adresu i **OIB** obiju strana.

## 2. Kupoprodajni ugovor

Ugovor nije propisan obrascem, ali u njemu mora biti jasno:

- tko prodaje i tko kupuje (s OIB-om),
- koje vozilo: marka, model, **broj šasije (VIN)**, registarska oznaka,
- **stanje kilometara** i poznati nedostaci – sve što kupcu kažete, napišite,
- **cijena** brojkama i slovima te način plaćanja,
- datum i **vrijeme predaje**.

Potpis prodavatelja ne treba ovjeravati kod javnog bilježnika. Svaka strana zadržava jedan primjerak.

## 3. Plaćanje

Najsigurnije je plaćanje **na račun** prije predaje ključeva. Ako kupac plaća gotovinom, novac izbrojite i izdajte **potvrdu o primitku novca**. Kod gotovine pazite na krivotvorene novčanice – dogovorite plaćanje u poslovnici banke.

## 4. Predaja vozila

U **primopredajni zapisnik** upišite datum i točno vrijeme, kilometre, gorivo, ključeve i dokumente. Fotografirajte kilometražu i vozilo sa svih strana.

## 5. Nakon prodaje

- Kupac je dužan vozilo u roku od **15 dana** registrirati na svoje ime (ili ga odjaviti). To se obavlja u stanici za tehnički pregled, gdje kupac plaća i upravnu pristojbu.
- Obavijestite svog **osiguratelja** o prodaji.
- Provjerite nakon dva tjedna je li promjena provedena; ako nije, javite se kupcu pisanim putem.

## Sažetak

Ugovor s brojem šasije, novac na računu, zapisnik s točnim vremenom predaje. Tako ste zaštićeni i ako kupac s promjenom vlasništva zakasni.
''')

c('kupnja-rabljenog-automobila','Kupnja rabljenog automobila: što provjeriti prije plaćanja','Kupnja rabljenog automobila',
 'Kupujete rabljeni automobil od građanina? Provjerite vlasnika, broj šasije, kilometre i servisnu povijest, ugovorite nedostatke i platite na račun.',
 'Usporedite broj šasije s prometnom dozvolom, provjerite je li prodavatelj vlasnik i platite tek kada imate ključeve i dokumente.',
 'auto','kupnja-auta',['kupoprodajni-ugovor-automobil','primopredajni-zapisnik-vozila'],
 ['kupnja rabljenog automobila','provjera vozila','broj šasije','kilometri','rabljeni auto'],
 [ZOO,PU_VOZ],
 [('Na što najviše paziti?','Je li prodavatelj upisan kao vlasnik u prometnoj dozvoli, odgovara li broj šasije na vozilu dozvoli i jesu li kilometri uvjerljivi s obzirom na servisnu povijest.'),
  ('Mogu li tražiti pregled kod mehaničara?','Da. Ozbiljan prodavatelj obično pristaje na pregled u servisu ili stanici za tehnički pregled prije kupnje.')],
'''
Kod rabljenog automobila kupujete i njegovu prošlost. Nekoliko provjera prije plaćanja može vas poštedjeti velike štete.

## 1. Tko prodaje

Usporedite ime u **prometnoj dozvoli** s osobnom iskaznicom prodavatelja. Ako prodaje netko drugi, mora imati **punomoć** vlasnika. Pazite na prodavatelje koji „prodaju za prijatelja” i žure.

## 2. Vozilo i dokumenti

- **Broj šasije (VIN)** na vozilu mora odgovarati prometnoj dozvoli.
- Servisna knjižica i računi – odgovaraju li kilometri servisima?
- Tragovi popravaka, različite nijanse boje, razmaci između dijelova karoserije.
- Probna vožnja: kočnice, mjenjač, zvukovi, lampice na ploči.

## 3. Pregled u servisu

Za nekoliko desetaka eura mehaničar može otkriti skrivene kvarove. Ako prodavatelj odbija svaki pregled, to je znak opreza.

## 4. Ugovor

U **kupoprodajni ugovor** neka se upišu kilometri i **svi nedostaci** za koje vam je prodavatelj rekao. Ako se kasnije pokaže nedostatak koji je prodavatelj prešutio, pisani ugovor vam pomaže dokazati što ste ugovorili.

## 5. Plaćanje i predaja

- Platite **na račun** ili u banci, tek uz predaju ključeva i dokumenata.
- Potpišite **primopredajni zapisnik** s vremenom predaje i kilometrima.
- U roku od **15 dana** registrirajte vozilo na svoje ime u stanici za tehnički pregled.

## Sažetak

Provjerite vlasnika i broj šasije, dajte vozilo pregledati, upišite nedostatke u ugovor i platite tek pri predaji.
''')

c('promjena-vlasnistva-vozila','Promjena vlasništva vozila: rok, dokumenti i pristojba','Promjena vlasništva vozila',
 'Kako provesti promjenu vlasništva rabljenog vozila u Hrvatskoj: rok od 15 dana, stanica za tehnički pregled, upravna pristojba, osiguranje i punomoć.',
 'Novi vlasnik u 15 dana dolazi u stanicu za tehnički pregled s ugovorom, prometnom dozvolom i osobnom iskaznicom.',
 'auto','promjena-vlasnistva',['kupoprodajni-ugovor-automobil','punomoc','ugovor-o-darovanju'],
 ['promjena vlasništva vozila','prijenos vlasništva auta','upravna pristojba','stanica za tehnički pregled','registracija rabljenog vozila'],
 [PU_VOZ,ZOO],
 [('Gdje se obavlja promjena vlasništva?','U stanici za tehnički pregled vozila, gdje se obračunava i upravna pristojba, pa se cijeli postupak može obaviti na jednom mjestu.'),
  ('Plaća li se pristojba kod darovanja u obitelji?','Ne plaća se kada vozilo na temelju ugovora o darovanju stječu bračni drug, potomci ili preci u uspravnoj liniji te posvojenik i posvojitelj.')],
'''
Nakon kupnje rabljenog vozila novi vlasnik mora vozilo prepisati na sebe. Postupak je jednostavan i obavlja se na jednom mjestu.

## 1. Rok

Novi vlasnik dužan je vozilo u roku od **15 dana** od stjecanja registrirati na svoje ime ili ga odjaviti.

## 2. Što ponijeti

- **kupoprodajni ugovor** (ili ugovor o darovanju),
- prometnu dozvolu,
- osobnu iskaznicu,
- policu obveznog osiguranja na novog vlasnika (ako vozilo ostaje registrirano).

## 3. Gdje i koliko

Promjena se obavlja u **stanici za tehnički pregled**. Tamo se obračunava i **upravna pristojba** na stjecanje rabljenog vozila, koju plaća kupac. Iznos ovisi o vrijednosti i starosti vozila – točan iznos dobit ćete u stanici.

Ako je vozilo stečeno **darovanjem** od bračnog druga, roditelja, djeteta ili unuka, pristojba se ne plaća.

## 4. Kada ne možete osobno

Promjenu može obaviti i druga osoba na temelju **punomoći**. Provjerite unaprijed u stanici zahtijevaju li ovjeru potpisa.

## Sažetak

Ugovor, prometna dozvola, osobna iskaznica i osiguranje – i u roku od 15 dana u stanicu za tehnički pregled.
''')

c('zajam-prijatelju','Zajam prijatelju ili obitelji: kako posuditi i dobiti novac natrag','Zajam prijatelju',
 'Kako posuditi novac prijatelju ili članu obitelji: pisani ugovor o zajmu, iznos slovima, obroci, kamata u zakonskim granicama i što ako dužnik kasni.',
 'Kratak pisani ugovor, novac na račun i jasan plan vraćanja štite obje strane – i prijateljstvo.',
 'novac','zajam',['ugovor-o-zajmu','potvrda-o-primitku-novca','izjava-o-priznanju-duga'],
 ['zajam prijatelju','ugovor o zajmu','pozajmica','posudba novca','vraćanje duga'],
 [ZOO],
 [('Smijem li ugovoriti kamatu?','Da. Između građana ugovorna kamata ne smije biti viša od stope zakonskih zateznih kamata uvećane za polovinu te stope.'),
  ('Koliko imam vremena za naplatu?','Opći zastarni rok je pet godina. Ako dužnik pisano prizna dug, zastara se prekida i počinje teći iznova.')],
'''
Između prijatelja i u obitelji zajam se rijetko zapisuje – sve dok ne zapne s vraćanjem. Kratak pisani ugovor štiti obje strane.

## 1. Zašto pisano

Ugovor o zajmu vrijedi i usmeno. Ali ako novac ne vrate, **vi morate dokazati** da se radilo o zajmu (a ne o daru), koliko ste posudili i do kada. Potpisani ugovor to čini jasnim.

## 2. Što upisati u ugovor

- podatke obiju strana s **OIB-om**,
- **iznos brojkama i slovima** i kako se predaje,
- **bez kamata** ili s ugovorenom kamatom (godišnji postotak),
- **vraćanje**: odjednom do određenog dana ili u mjesečnim obrocima,
- što ako dužnik kasni – npr. nakon dva neplaćena obroka dospijeva cijeli ostatak.

## 3. Kamata u granicama zakona

Između građana ugovorna kamata ne smije prijeći **stopu zakonskih zateznih kamata uvećanu za polovinu**. Viša kamata se ne može naplatiti. Ako dužnik kasni, duguje i **zatezne kamate**.

## 4. Predaja novca

Najbolje **na račun**, u opisu plaćanja navedite „zajam prema ugovoru od …”. Kod gotovine neka zajmoprimac potpiše **potvrdu o primitku novca**.

## 5. Kada vraćanje kasni

- Pisano pozovite dužnika i dajte mu rok.
- Predložite **izjavu o priznanju duga** s planom obroka – prekida zastaru.
- Opći zastarni rok je **pet godina**.

## Sažetak

Pisani ugovor, novac na račun, jasan plan vraćanja. Ako zapne, priznanje duga i obroci – na vrijeme.
''')

c('priznanje-duga-i-zastara','Priznanje duga i zastara: kako produžiti rok za naplatu','Priznanje duga i zastara',
 'Što je izjava o priznanju duga, zašto prekida zastaru, koliki je opći zastarni rok i kako dogovoriti obroke s dužnikom. S besplatnim obrascem.',
 'Kada dužnik pisano prizna dug, zastara se prekida i počinje teći iznova. Uz to možete dogovoriti obroke.',
 'novac','dug',['izjava-o-priznanju-duga','ugovor-o-zajmu'],
 ['priznanje duga','zastara','zastara duga','izjava o priznanju duga','obroci'],
 [ZOO],
 [('Koliki je opći zastarni rok?','Pet godina, ako zakon za pojedinu tražbinu ne određuje drugačije.'),
  ('Mora li priznanje biti pisano?','Dug se može priznati i drugim radnjama (npr. djelomičnim plaćanjem), ali pisana izjava je najjasniji dokaz.')],
'''
Ako vam netko duguje novac, vrijeme ne radi za vas: nakon isteka zastare dug se više ne može prisilno naplatiti. Izjava o priznanju duga to rješava.

## 1. Zastara ukratko

Opći zastarni rok prema Zakonu o obveznim odnosima iznosi **pet godina**. Za neke tražbine vrijede kraći rokovi. Nakon zastare dužnik može odbiti platiti.

## 2. Što je priznanje duga

Dužnik pisano izjavljuje **koliko duguje, po kojoj osnovi i do kada će platiti**. Priznanjem se **prekida zastara** – rok počinje teći ispočetka.

## 3. Što upisati

- dužnika i vjerovnika s OIB-om,
- **iznos brojkama i slovima**,
- osnovu duga (zajam, neplaćena cijena, šteta…),
- rok plaćanja ili **obroke**,
- račun za uplatu.

## 4. Kada dužnik ne potpisuje

Ako dug osporava, priznanje neće dobiti. Tada slijedi pisana opomena, a zatim savjet odvjetnika ili javnog bilježnika o ovrsi na temelju vjerodostojne isprave.

## Sažetak

Priznanje duga je jednostavan papir koji vjerovniku vraća vrijeme. Tražite ga na vrijeme, s jasnim rokom plaćanja.
''')

c('darovanje-u-obitelji','Darovanje novca u obitelji: kada se ne plaća porez na darove','Darovanje u obitelji',
 'Darovanje novca ili automobila: ugovor o darovanju, porez na darove 4 % iznad 6.700 €, oslobođenja za bračnog druga, djecu, roditelje i unuke.',
 'Bračni drug, djeca, unuci i roditelji ne plaćaju porez na darove. Ostali plaćaju 4 % na novac i pokretnine iznad 6.700 €.',
 'novac','darovanje',['ugovor-o-darovanju','potvrda-o-primitku-novca'],
 ['darovanje','porez na darove','ugovor o darovanju','darovanje novca','darovanje automobila'],
 [PU_DAR,GOV_DAR,ZOO],
 [('Koliki je porez na darove?','4 % na gotov novac, novčane tražbine i vrijednosne papire te na pokretnine pojedinačne vrijednosti veće od 6.700 €.'),
  ('Tko je oslobođen?','Bračni drug, potomci i preci u uspravnoj liniji te posvojenik i posvojitelj.'),
  ('Kada se porez plaća?','Porezna uprava utvrđuje porez rješenjem; plaća se u roku od 15 dana od dostave rješenja.')],
'''
Darovati novac djetetu ili automobil unuku je čest obiteljski korak. Pisani ugovor i znanje o porezu na darove pomažu da sve prođe bez iznenađenja.

## 1. Porez na darove

Porez na nasljedstva i darove plaća se po stopi od **4 %**:

- na gotov novac, novčane tražbine i vrijednosne papire,
- na pokretnine (npr. automobil) ako je pojedinačna tržišna vrijednost **veća od 6.700 €**.

## 2. Tko ne plaća

Oslobođeni su **bračni drug, potomci i preci** (djeca, unuci, roditelji, djedovi i bake) te **posvojenik i posvojitelj**. Braća, sestre, nećaci ili prijatelji porez u pravilu plaćaju.

## 3. Ugovor o darovanju

Za darovanje uz **stvarnu predaju** (novac na račun, ključevi automobila) dovoljan je običan pisani ugovor. Ako se dar predaje tek kasnije, ugovor mora biti u obliku **javnobilježničkog akta** ili solemnizirane isprave.

U ugovor upišite strane, srodstvo, predmet dara i način predaje.

## 4. Darovanje automobila

Kada automobil darujete bračnom drugu, djetetu ili roditelju, novi vlasnik pri promjeni vlasništva **ne plaća upravnu pristojbu** na stjecanje rabljenog vozila.

## Sažetak

U užoj obitelji bez poreza, za ostale 4 %. Pisani ugovor o darovanju i predaja na račun su najbolji dokaz.
''')

c('najam-stana','Najam stana: ugovor, jamčevina i primopredaja','Najam stana',
 'Iznajmljujete ili unajmljujete stan? Pisani ugovor o najmu, najamnina i režije, jamčevina, zapisnik sa stanjem brojila i obveze najmodavca.',
 'Ugovor o najmu stana sklapa se pisano. Uz jamčevinu i zapisnik sa stanjem brojila izbjegnete većinu sporova.',
 'stan','najam',['ugovor-o-najmu-stana','primopredajni-zapisnik-stana','potvrda-o-primitku-novca'],
 ['najam stana','ugovor o najmu stana','jamčevina','najamnina','iznajmljivanje stana'],
 [ZNS,NAJAM],
 [('Mora li ugovor biti pisan?','Da, ugovor o najmu stana sklapa se u pisanom obliku.'),
  ('Koliko iznosi jamčevina?','Zakon je ne ograničava; uobičajeno je jedna do dvije mjesečne najamnine. Upišite u ugovor iznos i kada se vraća.'),
  ('Što najmodavac mora prijaviti?','Ugovor i promjene najamnine dostavlja upravnom odjelu jedinice lokalne samouprave, a prihod od najma prijavljuje Poreznoj upravi.')],
'''
Dobar ugovor o najmu je kratak, ali jasan: koliko se plaća, što je uključeno, kada se vraća jamčevina i kako se najam otkazuje.

## 1. Pisani ugovor

Prema Zakonu o najmu stanova ugovor se sklapa **u pisanom obliku**. U njemu su:

- strane i stan (adresa, površina, oprema),
- **trajanje** – na određeno ili neodređeno vrijeme,
- **najamnina**, rok plaćanja i tko plaća **režije**,
- **jamčevina** i pravila njezina povrata,
- otkazni rok.

## 2. Jamčevina

Jamčevina pokriva neplaćenu najamninu, režije ili štetu. Zakon ne određuje iznos – uobičajeno je **jedna do dvije najamnine**. Primitak potvrdite pisano.

## 3. Primopredaja

Pri useljenju potpišite **primopredajni zapisnik**: stanje brojila (struja, voda, plin), ključevi, oprema i postojeća oštećenja, uz fotografije s datumom. Pri iseljenju se uspoređuje upravo s ovim zapisnikom.

## 4. Obveze strana

- Najmodavac održava stan u stanju pogodnom za stanovanje i snosi nužne popravke.
- Najmoprimac čuva stan od oštećenja i javlja potrebne popravke.
- Najmodavac dostavlja ugovor **upravnom odjelu jedinice lokalne samouprave** i prihod od najma prijavljuje **Poreznoj upravi**.

## Sažetak

Pisani ugovor, potvrđena jamčevina i zapisnik sa stanjem brojila – tri dokumenta koji sprječavaju većinu svađa.
''')

c('otkaz-najma-i-jamcevina','Kraj najma stana: otkaz, predaja i povrat jamčevine','Kraj najma stana',
 'Kako otkazati najam stana: pisani otkaz, otkazni rok od tri mjeseca, primopredajni zapisnik pri iseljenju i povrat jamčevine bez spora.',
 'Otkaz pisano, tri mjeseca unaprijed. Pri predaji stana zapisnik sa stanjem brojila – i jamčevina se može obračunati bez svađe.',
 'stan','kraj-najma',['otkaz-ugovora-o-najmu','primopredajni-zapisnik-stana'],
 ['otkaz najma','otkazni rok najam','povrat jamčevine','iseljenje iz stana','predaja stana'],
 [ZNS,NAJAM],
 [('Od kada teče otkazni rok?','Otkazni rok od tri mjeseca počinje teći prvoga dana sljedećeg mjeseca od mjeseca u kojem je otkaz primljen.'),
  ('Može li najmodavac otkazati bez razloga?','Ne. Najmodavac otkazuje pisano, s obrazloženjem i iz razloga koje propisuje zakon.')],
'''
Kraj najma je trenutak kada se najčešće svađa – oko jamčevine. Pisani otkaz i zapisnik pri predaji stana to sprječavaju.

## 1. Otkaz najmoprimca

Otkaz dajte **pisano** – uz potpis najmodavca ili **preporučenom poštom**. Kod najma na neodređeno vrijeme računajte s otkaznim rokom od **tri mjeseca**, koji počinje teći prvoga dana sljedećeg mjeseca nakon primitka otkaza. Kod najma na određeno vrijeme vrijedi ono što piše u ugovoru.

## 2. Otkaz najmodavca

Najmodavac može otkazati samo iz razloga koje propisuje zakon (npr. neplaćanje, korištenje stana protivno ugovoru), **pisano i s obrazloženjem**. U pravilu prethodi pisana opomena.

## 3. Predaja stana

- Stan očistite i vratite sve ključeve.
- Potpišite **primopredajni zapisnik** sa stanjem brojila i fotografijama.
- Usporedite stanje sa zapisnikom pri useljenju – uobičajeno trošenje nije šteta.

## 4. Povrat jamčevine

Najmodavac može od jamčevine odbiti neplaćenu najamninu, režije i dokazanu štetu. Ostatak vraća – rok upišite u ugovor ili otkaz (npr. 30 dana nakon predaje).

## Sažetak

Pisani otkaz, poštivanje otkaznog roka, zapisnik pri predaji. Tako jamčevina ne postaje predmet spora.
''')

c('povrat-robe-kupljene-na-internetu','Povrat robe kupljene na internetu: 14 dana bez razloga','Povrat robe kupljene na internetu',
 'Jednostrani raskid ugovora sklopljenog na daljinu: 14 dana bez navođenja razloga, kako poslati izjavu, rok za vraćanje robe i povrat novca.',
 'Za robu kupljenu na internetu imate 14 dana za jednostrani raskid. Trgovac mora vratiti novac najkasnije 14 dana od primitka izjave.',
 'kupnja','povrat-robe',['jednostrani-raskid-ugovora','reklamacija'],
 ['povrat robe','jednostrani raskid ugovora','kupnja na internetu','14 dana','odustanak od kupnje'],
 [ZZP,PRAV],
 [('Od kada teče rok od 14 dana?','Kod kupnje robe u pravilu od dana kada ste robu primili.'),
  ('Tko plaća poštarinu za povrat?','U pravilu kupac, ako ga je trgovac o tome unaprijed obavijestio. Trgovac vraća i trošak standardne dostave.')],
'''
Kod kupnje na internetu, telefonom ili izvan poslovnih prostorija trgovca imate pravo predomisliti se – bez objašnjenja.

## 1. Rok

Imate **14 dana** za jednostrani raskid ugovora. Kod robe rok u pravilu teče od dana kada ste je primili. Ako vas trgovac nije obavijestio o tom pravu, rok se produljuje.

## 2. Kako odustati

Pošaljite trgovcu **izjavu o jednostranom raskidu** – e-poštom ili preporučeno, prije isteka roka. Može se koristiti obrazac iz Pravilnika (NN 117/22). Sačuvajte dokaz o slanju.

## 3. Vraćanje robe

Robu vratite najkasnije **14 dana** nakon slanja izjave. Trošak povrata u pravilu snosite vi, ako vas je trgovac o tome obavijestio. Roba smije biti isprobana kao u trgovini, ali ne korištena.

## 4. Povrat novca

Trgovac vraća sve uplate, uključujući standardnu dostavu, najkasnije **14 dana** od primitka vaše izjave. Smije pričekati dok ne primi robu ili dokaz o slanju.

## 5. Kada pravo ne postoji

Npr. kod robe izrađene po mjeri, brzo kvarljive robe ili otpakiranih higijenskih proizvoda. Kod kupnje u fizičkoj trgovini pravo na raskid ne postoji – tada vrijedi samo reklamacija ili dobra volja trgovca.

## Sažetak

14 dana, pisana izjava, vraćanje robe u 14 dana i novac natrag u 14 dana.
''')

c('reklamacija-neispravne-robe','Reklamacija neispravne robe: rokovi i prava kupca','Reklamacija neispravne robe',
 'Kako reklamirati neispravnu robu: pisani prigovor, obavijest u dva mjeseca, odgovornost trgovca dvije godine, odgovor u 15 dana i što možete zahtijevati.',
 'Trgovac odgovara za materijalne nedostatke dvije godine od predaje. Na pisani prigovor mora odgovoriti u 15 dana.',
 'kupnja','reklamacija',['reklamacija','jednostrani-raskid-ugovora'],
 ['reklamacija','pisani prigovor','neispravna roba','materijalni nedostatak','prava potrošača'],
 [ZOO,ZZP,REKL],
 [('Koliko imam vremena?','Trgovca obavijestite u roku od dva mjeseca od otkrivanja nedostatka. Trgovac odgovara za nedostatke koji se pojave u dvije godine od predaje.'),
  ('Što mogu tražiti?','Uklanjanje nedostatka, zamjenu, sniženje cijene ili raskid ugovora i povrat novca.'),
  ('Je li jamstvo isto što i reklamacija?','Ne. Jamstvo je dobrovoljna obveza proizvođača; odgovornost trgovca za materijalne nedostatke vrijedi uvijek.')],
'''
Kada se kupljena stvar pokvari ili ne radi kako treba, imate zakonska prava prema trgovcu – neovisno o jamstvu proizvođača.

## 1. Odgovornost trgovca

Trgovac odgovara za **materijalne nedostatke** koji se pojave u **dvije godine** od predaje stvari. Nedostatak je npr. kvar, stvar ne odgovara opisu ili nema svojstva koja su ugovorena.

## 2. Rok za obavijest

O nedostatku obavijestite trgovca u roku od **dva mjeseca** od dana kada ste ga otkrili. Ne čekajte – opišite nedostatak što konkretnije.

## 3. Pisani prigovor

Pošaljite **pisani prigovor** (e-poštom, poštom ili predajte u trgovini uz potvrdu primitka). Priložite račun ili drugi dokaz kupnje. Trgovac mora na pisani prigovor **odgovoriti u roku od 15 dana**.

## 4. Što zahtijevati

- **uklanjanje nedostatka** (popravak),
- **zamjenu** za ispravnu stvar,
- **sniženje cijene**,
- **raskid ugovora** i povrat novca – ako nedostatak nije neznatan.

## 5. Ako trgovac odbije

Možete se obratiti tijelu za izvansudsko rješavanje potrošačkih sporova ili tržišnoj inspekciji, a u krajnjem slučaju sudu.

## Sažetak

Dva mjeseca za obavijest, dvije godine odgovornosti, odgovor u 15 dana. Sve pisano i s računom.
''')

c('prodaja-preko-oglasa','Prodaja rabljenih stvari preko oglasa: ugovor i prijevare','Prodaja preko oglasa',
 'Prodajete bicikl, mobitel ili namještaj preko oglasa? Kada napisati kupoprodajni ugovor, kako sigurno primiti novac i kako prepoznati prijevaru.',
 'Kod skupljih stvari kratki ugovor s opisom nedostataka. I nikada ne dajte podatke kartice ili kodove iz SMS-a.',
 'kupnja','prodaja-oglas',['kupoprodajni-ugovor','potvrda-o-primitku-novca'],
 ['prodaja preko oglasa','kupoprodajni ugovor','prodaja rabljenih stvari','prijevara oglas','sigurno plaćanje'],
 [ZOO],
 [('Treba li ugovor za prodaju preko oglasa?','Nije obvezan, ali kod skupljih stvari jasno dokazuje cijenu, stanje i poznate nedostatke.'),
  ('Kako izgleda najčešća prijevara?','„Kupac” šalje poveznicu na lažnu stranicu dostave ili plaćanja i traži podatke kartice ili kod iz SMS-a.')],
'''
Prodaja rabljenih stvari preko oglasa je brza – ali privlači i prevarante. Nekoliko pravila čini je sigurnom.

## 1. Opis u oglasu

Opišite stanje iskreno, s fotografijama i poznatim nedostacima. Što je napisano, kasnije se ne može osporiti.

## 2. Kupoprodajni ugovor

Kod skupljih stvari (bicikl, računalo, namještaj) napišite kratak **kupoprodajni ugovor**: strane, opis stvari, **poznate nedostatke**, cijenu slovima, plaćanje i predaju. Svaka strana zadržava primjerak.

## 3. Plaćanje

- Osobna predaja: gotovina uz brojanje ili uplata na račun prije predaje.
- Slanje: tek kada je novac stvarno na vašem računu.
- Kod gotovine izdajte **potvrdu o primitku novca**.

## 4. Prepoznajte prijevaru

- „Kupac” bez pitanja odmah kupuje i inzistira na „dostavi” ili „sigurnom plaćanju”.
- Šalje **poveznicu** na stranicu koja izgleda kao dostavna služba ili banka.
- Traži **podatke kartice, PIN ili kod iz SMS-a** – nikada ih ne dajte.

## Sažetak

Iskren opis, kratak ugovor kod skupljih stvari, predaja tek kada je novac kod vas.
''')

c('punomoc-kada-treba-ovjera','Punomoć: kada je potrebna i kada treba ovjera potpisa','Punomoć',
 'Kako napisati punomoć za poštu, ured, banku ili promjenu vlasništva vozila, kada treba ovjera potpisa kod javnog bilježnika i kako je opozvati.',
 'Punomoć ovlašćuje drugu osobu da umjesto vas obavi posao. Za ured ili banku često treba ovjeren potpis.',
 'punomoc','punomoc',['punomoc','kupoprodajni-ugovor-automobil'],
 ['punomoć','ovjera potpisa','javni bilježnik','opunomoćenik','opoziv punomoći'],
 [ZOO],
 [('Mogu li punomoć opozvati?','Da, u svakom trenutku. Opoziv javite opunomoćeniku i onima kojima je punomoć predočena.'),
  ('Treba li punomoć uvijek ovjeriti?','Ne. Ovjera potpisa ovisi o tome gdje se punomoć koristi – tijela, banke i stanice za tehnički pregled je često traže.')],
'''
Ne možete nešto obaviti osobno? Punomoć ovlašćuje drugu osobu da to učini umjesto vas – u vaše ime i za vaš račun.

## 1. Što upisati

- **opunomoćitelja** i **opunomoćenika** s OIB-om i adresom,
- **koje poslove** smije obaviti – što konkretnije (npr. „promjena vlasništva vozila reg. oznake …”),
- **rok** važenja,
- datum, mjesto i potpis.

## 2. Ovjera potpisa

Za mnoge poslove dovoljna je obična pisana punomoć (npr. preuzimanje pošiljke). Tijela, banke ili stanice za tehnički pregled često traže **ovjeren potpis** kod javnog bilježnika. Provjerite unaprijed.

Za poslove s nekretninama ili zastupanje pred sudom obratite se javnom bilježniku ili odvjetniku.

## 3. Opoziv

Punomoć možete **opozvati u svakom trenutku**. Javite to opunomoćeniku pisano i zatražite povrat izvornika.

## Sažetak

Jasno navedeni poslovi i rok, ovjera ako je traže – i punomoć je spremna.
''')
print('ok')
