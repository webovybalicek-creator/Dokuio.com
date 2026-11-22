import sys; sys.path.insert(0,'/home/claude/skripty')
from stranka import zapis
O='/home/claude/dokuio.com/src/obsah/hr/'
P=lambda n,p:{'nazev':n,'popis':p}
def d(slug, ident, nazev, nazevA, popis, kat, il, slova, souv, title, desc, perex, obsahPopis, obsah, kroky, online, hodi, nehodi, po, faq, zakony, vt, vd):
    landing={'title':title,'description':desc,'perex':perex,'obsahPopis':obsahPopis,'obsah':[P(*x) for x in obsah],'kroky':[P(*x) for x in kroky],'online':online,'hodiSe':hodi,'nehodiSe':nehodi,'po':[P(*x) for x in po],'faq':[{'q':q,'a':a} for q,a in faq],'zakony':zakony,'souvisejiciPopis':'Ostali dokumenti, također besplatno.'}
    assert 70<=len(desc)<=170, (slug,len(desc))
    zapis(O+slug+'.ts','hr',slug,ident,nazev,nazevA,{'popis':popis,'kategorie':kat,'ilustrace':il,'slova':slova},souv,landing,{'title':vt,'description':vd,'podnadpis':'Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta'})
K3=[('Ispunite podatke','Što ne znate, preskočite – ostat će crta za ispunjavanje rukom.'),('Provjerite tekst','Svaki odlomak možete urediti.'),('Preuzmite i potpišite','PDF ili Word besplatno.')]
PRIV=('Spremate li moje podatke?','Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj.')

d('kupoprodajni-ugovor-automobil','kupoprodajniUgovorAutomobil','Kupoprodajni ugovor za automobil','kupoprodajni ugovor za automobil','Prodaja rabljenog automobila između građana.','auto','auto',
 ['kupoprodajni ugovor auto','ugovor o kupoprodaji vozila','prodaja automobila','rabljeni automobil','promjena vlasništva'],'auto',
 'Kupoprodajni ugovor za automobil {rok} – besplatni obrazac PDF',
 'Besplatan kupoprodajni ugovor za rabljeni automobil prema hrvatskom pravu: OIB, broj šasije, kilometri, nedostaci, plaćanje i vrijeme predaje. PDF i Word.',
 'Za prodaju rabljenog automobila između građana. S vremenom predaje, poznatim nedostacima i rokom od 15 dana za promjenu vlasništva.',
 'Sedam članaka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Prodavatelj i kupac s OIB-om.'),('Predmet ugovora','Vozilo, broj šasije, registarska oznaka.'),('Stanje vozila','Kilometri i poznati nedostaci.'),('Cijena i plaćanje','Iznos slovima, gotovina ili račun, pridržaj vlasništva.'),('Predaja vozila','Datum, vrijeme, ključevi, dokumenti.'),('Promjena vlasništva','Rok od 15 dana i troškovi.')],
 K3,['Iznos slovima automatski','Provjera broja šasije','Podsjetnik na rok od 15 dana','Primopredajni zapisnik preuzima podatke'],
 ['prodajete ili kupujete rabljeni automobil od građanina','želite pisano imati cijenu, stanje i vrijeme predaje'],
 ['kupujete od autokuće – ona ima vlastiti ugovor','vozilo je na leasingu ili pod zalogom'],
 [('Predaja','Primopredajni zapisnik s vremenom i kilometrima.'),('Promjena vlasništva','Kupac u 15 dana u stanici za tehnički pregled, plaća upravnu pristojbu.'),('Osiguranje','Prodavatelj obavijesti osiguratelja.')],
 [('Treba li ovjeriti potpis prodavatelja?','Ne. Prema Poreznoj upravi potpis prodavatelja na kupoprodajnom ugovoru ne treba ovjeravati kod javnog bilježnika.'),('Do kada treba prenijeti vlasništvo?','Novi vlasnik dužan je vozilo u roku od 15 dana od stjecanja registrirati na svoje ime ili ga odjaviti.'),('Tko plaća upravnu pristojbu?','Kupac, pri promjeni vlasništva u stanici za tehnički pregled. Iznos ovisi o snazi i starosti vozila.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima i informacijama Porezne uprave o stjecanju rabljenog motornog vozila.',
 'Ispunite kupoprodajni ugovor za automobil online – PDF besplatno','Vodič za kupoprodajni ugovor za rabljeni automobil prema hrvatskom pravu. PDF ili Word besplatno.')

d('primopredajni-zapisnik-vozila','primopredajniZapisnikVozila','Primopredajni zapisnik vozila','primopredajni zapisnik vozila','Kilometri, oštećenja, ključevi i vrijeme predaje.','auto','protokol',
 ['primopredajni zapisnik vozila','predaja automobila','zapisnik o predaji vozila','kilometri','oštećenja vozila'],'auto',
 'Primopredajni zapisnik vozila {rok} – besplatni obrazac PDF',
 'Besplatan primopredajni zapisnik vozila: točno vrijeme predaje, kilometri, gorivo, ključevi, dokumenti i oštećenja. Dokaz u slučaju prekršaja. PDF i Word.',
 'Bilježi stanje vozila i točno vrijeme predaje – važno ako nakon prodaje stigne kazna za prekršaj.',
 'Kratki zapisnik u tri dijela.',
 [('Predaja','Tko, kome, kada i u koliko sati.'),('Ključevi i dokumenti','Što je predano uz vozilo.'),('Stanje','Oštećenja i napomene.')],
 K3,['Podaci iz kupoprodajnog ugovora','Provjera broja šasije','Preuzimanje PDF i Word'],
 ['prodajete ili posuđujete automobil','vraćate vozilo nakon posudbe'],['trebate i ugovor – koristite kupoprodajni ugovor'],
 [('Fotografije','Fotografirajte vozilo i kilometražu.'),('Primjerci','Svaka strana čuva jedan.')],
 [('Zašto upisati vrijeme predaje?','Do promjene vlasništva prekršaji mogu stizati na prethodnog vlasnika – zapisnik s vremenom dokazuje tko je imao vozilo.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima.','Ispunite primopredajni zapisnik vozila online – PDF besplatno','Primopredajni zapisnik vozila s vremenom predaje. PDF ili Word besplatno.')

d('potvrda-o-primitku-novca','potvrdaOPrimitkuNovca','Potvrda o primitku novca','potvrdu o primitku novca','Priznanica za primljenu gotovinu.','novac','penize',
 ['potvrda o primitku novca','priznanica','primitak gotovine','potvrda o plaćanju','kapara'],'novac',
 'Potvrda o primitku novca {rok} – besplatni obrazac PDF',
 'Besplatna potvrda o primitku novca (priznanica): iznos brojkama i slovima, svrha plaćanja, platitelj i primatelj. Jednostavan dokaz o gotovini. PDF i Word.',
 'Jednostavan dokaz da je gotovina promijenila vlasnika. Iznos slovima dopisujemo sami.',
 'Kratka potvrda sa svrhom plaćanja.',[('Potvrda','Tko je od koga primio koliko i zašto.')],
 K3,['Iznos slovima automatski','Potpis na zaslonu','PDF i Word'],
 ['plaćate gotovinom automobil ili stvar','predajete jamčevinu, kaparu ili obrok'],['plaćate na račun – dokaz je potvrda banke'],
 [('Primjerak','Svaka strana čuva jedan.')],
 [('Moram li dati potvrdu?','Tko plaća, može zahtijevati potvrdu (priznanicu) od onoga tko novac prima.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima.','Ispunite potvrdu o primitku novca online – PDF besplatno','Potvrda o primitku gotovine s iznosom slovima. PDF ili Word besplatno.')

d('ugovor-o-zajmu','ugovorOZajmu','Ugovor o zajmu','ugovor o zajmu','Zajam prijatelju ili članu obitelji, i na obroke.','novac','pujcka',
 ['ugovor o zajmu','pozajmica','zajam između fizičkih osoba','posudba novca','obroci'],'novac',
 'Ugovor o zajmu {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o zajmu između građana: iznos slovima, vraćanje odjednom ili u obrocima, kamata u zakonskom okviru, zatezne kamate. PDF i Word.',
 'Za zajam prijatelju ili članu obitelji. Odjednom ili u mjesečnim obrocima, s kamatom ili bez.',
 'Pet članaka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Zajmodavac i zajmoprimac s OIB-om.'),('Predmet','Iznos i način predaje.'),('Vraćanje','Odjednom ili obroci, prijevremena otplata.'),('Kamate','Bez kamata ili ugovorna kamata.'),('Završne odredbe','Primjerci.')],
 K3,['Iznos slovima automatski','Podsjetnici na obroke u kalendaru','PDF i Word'],
 ['posuđujete novac prijatelju ili obitelji','želite pisano imati rok i obroke'],['posuđujete kao tvrtka ili uz naknadu u okviru djelatnosti'],
 [('Predaja novca','Najbolje na račun.'),('Obroci','Spremite datume u kalendar.')],
 [('Koliko smije biti kamata?','Između građana ugovorna kamata ne smije biti viša od stope zakonskih zateznih kamata uvećane za polovinu te stope.'),('Što ako dužnik kasni?','Duguje zakonske zatezne kamate; prema ugovoru možete tražiti i cijeli ostatak odjednom.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o zajmu, kamate).','Ispunite ugovor o zajmu online – PDF besplatno','Ugovor o zajmu između građana, i na obroke. PDF ili Word besplatno.')

d('izjava-o-priznanju-duga','izjavaOPriznanjuDuga','Izjava o priznanju duga','izjavu o priznanju duga','Dužnik pisano priznaje dug i rok plaćanja.','novac','dluh',
 ['izjava o priznanju duga','priznanje duga','dug','zastara','dužnik'],'novac',
 'Izjava o priznanju duga {rok} – besplatni obrazac PDF',
 'Besplatna izjava o priznanju duga: iznos slovima, pravni temelj, rok plaćanja i zatezne kamate. Priznanje duga prekida zastaru. PDF i Word.',
 'Dužnik pisano priznaje koliko duguje i do kada će platiti. Priznanjem se prekida zastara.',
 'Kratka jednostrana izjava dužnika.',[('Izjava','Dug, temelj, rok i račun.')],
 K3,['Iznos slovima automatski','PDF i Word'],
 ['netko vam duguje i pristaje to potvrditi','želite produžiti zastaru'],['dužnik dug osporava – tada pomaže opomena ili odvjetnik'],
 [('Izvornik','Vjerovnik čuva izvornik.')],
 [('Što znači prekid zastare?','Kada dužnik prizna dug, zastara se prekida i rok počinje teći iznova; opći zastarni rok je pet godina.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (priznanje duga, zastara).','Ispunite izjavu o priznanju duga online – PDF besplatno','Izjava o priznanju duga s rokom plaćanja. PDF ili Word besplatno.')

d('ugovor-o-darovanju','ugovorODarovanju','Ugovor o darovanju','ugovor o darovanju','Darovanje novca ili stvari, porez na darove.','novac','dar',
 ['ugovor o darovanju','darovanje novca','darovni ugovor','porez na darove','darovanje automobila'],'novac',
 'Ugovor o darovanju {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o darovanju novca ili pokretne stvari uz predaju: porez na darove 4 %, oslobođenja za obitelj, darovanje vozila. PDF i Word.',
 'Za darovanje novca ili stvari koja se predaje odmah. Bračni drug, djeca, roditelji i unuci ne plaćaju porez na darove.',
 'Tri članka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Darovatelj i daroprimatelj, srodstvo.'),('Predmet darovanja','Novac ili stvar i predaja.'),('Završne odredbe','Porez i troškovi.')],
 K3,['Iznos slovima automatski','Savjeti o porezu na darove','PDF i Word'],
 ['darujete novac djetetu ili unuku','darujete automobil ili drugu stvar uz predaju'],['darujete nekretninu – treba poseban ugovor','dar se predaje tek kasnije – treba javnobilježnički akt'],
 [('Predaja','Novac najbolje na račun.'),('Porez','Porezna uprava utvrđuje porez rješenjem, ako niste oslobođeni.')],
 [('Plaća li se porez na darove?','Porez iznosi 4 % na novac i pokretnine vrijednosti iznad 6.700 €. Oslobođeni su bračni drug, potomci i preci te posvojenici i posvojitelji.'),('Treba li javni bilježnik?','Za darovanje uz pravu predaju ne. Darovanje bez prave predaje mora biti u obliku javnobilježničkog akta ili solemnizirane isprave.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima i informacijama Porezne uprave o porezu na nasljedstva i darove.','Ispunite ugovor o darovanju online – PDF besplatno','Ugovor o darovanju novca ili stvari uz predaju. PDF ili Word besplatno.')

d('punomoc','punomoc','Punomoć','punomoć','Kada nešto umjesto vas obavlja netko drugi.','svakodnevno','plnamoc',
 ['punomoć','opunomoćenje','ovlaštenje','punomoć za zastupanje','punomoć za poštu'],'svakodnevno',
 'Punomoć {rok} – besplatni obrazac PDF',
 'Besplatna punomoć za zastupanje fizičke osobe: tko koga ovlašćuje, za koje poslove i do kada. Savjeti kada treba ovjera potpisa. PDF i Word.',
 'Kada nešto umjesto vas treba obaviti netko drugi – pošta, ured, banka ili stanica za tehnički pregled.',
 'Kratka punomoć s opisom poslova.',[('Punomoć','Opunomoćitelj, opunomoćenik, poslovi, rok.')],
 K3,['Potpis na zaslonu','PDF i Word'],
 ['ne možete nešto obaviti osobno','želite ovlastiti člana obitelji'],['trebate punomoć za nekretnine ili sud – obratite se javnom bilježniku ili odvjetniku'],
 [('Ovjera','Ako je traži tijelo ili banka, kod javnog bilježnika.')],
 [('Treba li ovjeriti potpis?','Ovisi o tome gdje se punomoć koristi – tijela i banke je često traže. Provjerite unaprijed.'),('Mogu li punomoć opozvati?','Da, u svakom trenutku.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (zastupanje, punomoć).','Ispunite punomoć online – PDF besplatno','Punomoć za zastupanje fizičke osobe. PDF ili Word besplatno.')

d('kupoprodajni-ugovor','kupoprodajniUgovor','Kupoprodajni ugovor','kupoprodajni ugovor','Prodaja rabljene stvari preko oglasa.','svakodnevno','protokol',
 ['kupoprodajni ugovor','prodaja rabljene stvari','oglas','Njuškalo','ugovor o prodaji'],'svakodnevno',
 'Kupoprodajni ugovor {rok} – besplatni obrazac PDF',
 'Besplatan kupoprodajni ugovor za pokretnu stvar između građana: opis, poznati nedostaci, cijena slovima, plaćanje i predaja. Savjeti protiv prijevara. PDF i Word.',
 'Za prodaju rabljene stvari preko oglasa – bicikla, mobitela, namještaja. S opisom nedostataka i cijenom slovima.',
 'Četiri članka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Prodavatelj i kupac.'),('Predmet i stanje','Opis i poznati nedostaci.'),('Cijena i predaja','Iznos, plaćanje, prijelaz vlasništva.'),('Završne odredbe','Primjerci.')],
 K3,['Iznos slovima automatski','PDF i Word'],
 ['prodajete rabljenu stvar preko oglasa','želite pisano imati stanje i cijenu'],['prodajete automobil – koristite ugovor za automobil'],
 [('Predaja','Tek kada je novac kod vas.')],
 [('Treba li pisani ugovor?','Nije obvezan, ali kod skupljih stvari štiti obje strane.'),('Kako prepoznati prijevaru?','Kupac šalje poveznicu za „sigurno plaćanje” ili „dostavu” i traži podatke kartice ili kod iz SMS-a.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (kupoprodaja).','Ispunite kupoprodajni ugovor online – PDF besplatno','Kupoprodajni ugovor za rabljenu stvar. PDF ili Word besplatno.')

d('jednostrani-raskid-ugovora','jednostraniRaskid','Jednostrani raskid ugovora','obrazac za jednostrani raskid ugovora','Povrat robe kupljene na internetu u 14 dana.','svakodnevno','protokol',
 ['jednostrani raskid ugovora','povrat robe','odustanak od kupnje','kupnja na internetu','14 dana'],'svakodnevno',
 'Obrazac za jednostrani raskid ugovora {rok} – besplatni PDF',
 'Besplatan obrazac za jednostrani raskid ugovora sklopljenog na daljinu: povrat robe kupljene na internetu u 14 dana prema Zakonu o zaštiti potrošača. PDF i Word.',
 'Kupili ste nešto na internetu i predomislili ste se? Imate 14 dana za jednostrani raskid bez navođenja razloga.',
 'Izjava prema obrascu iz Pravilnika (NN 117/22).',[('Izjava','Trgovac, roba, narudžba i povrat novca.')],
 K3,['Prema službenom obrascu','PDF i Word'],
 ['kupili ste na internetu ili telefonom','kupili ste izvan poslovnih prostorija'],['kupili ste u trgovini – tada vrijedi samo reklamacija ili dobra volja trgovca'],
 [('Slanje','E-poštom ili preporučeno, prije isteka roka.'),('Povrat robe','U 14 dana od slanja izjave.')],
 [('Koliki je rok?','14 dana, kod robe obično od dana kada ste je primili.'),('Kada dobivam novac?','Trgovac mora vratiti novac najkasnije 14 dana od primitka vaše izjave.'),PRIV],
 'Obrazac se temelji na Zakonu o zaštiti potrošača i Pravilniku o obavijesti o pravu na jednostrani raskid (NN 117/22).','Ispunite obrazac za jednostrani raskid online – PDF besplatno','Izjava o jednostranom raskidu kupnje na internetu. PDF ili Word besplatno.')

d('reklamacija','reklamacija','Reklamacija (pisani prigovor)','pisani prigovor (reklamaciju)','Pisani prigovor zbog neispravne robe.','svakodnevno','protokol',
 ['reklamacija','pisani prigovor','neispravna roba','materijalni nedostatak','jamstvo'],'svakodnevno',
 'Reklamacija – pisani prigovor {rok} – besplatni obrazac PDF',
 'Besplatan obrazac za reklamaciju: pisani prigovor zbog materijalnog nedostatka, rok od dva mjeseca, odgovornost dvije godine, odgovor trgovca u 15 dana. PDF i Word.',
 'Roba se pokvarila ili ne radi kako treba? Pisani prigovor trgovcu, s odgovorom u 15 dana.',
 'Pisani prigovor sa zahtjevom.',[('Podnositelj i trgovac','Tko reklamira.'),('Prigovor','Roba, nedostatak, zahtjev i prilog.')],
 K3,['PDF i Word','Izbor zahtjeva'],
 ['kupljena roba ima nedostatak','trgovac ne želi riješiti kvar'],['želite samo vratiti ispravnu robu kupljenu na internetu – koristite jednostrani raskid'],
 [('Predaja','Uz potvrdu primitka.'),('Odgovor','Trgovac ima 15 dana.')],
 [('Koliki je rok za reklamaciju?','Trgovca obavijestite u roku od dva mjeseca od otkrivanja nedostatka; trgovac odgovara za nedostatke koji se pojave u dvije godine od predaje.'),('Što mogu zahtijevati?','Uklanjanje nedostatka, zamjenu, sniženje cijene ili raskid ugovora.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima i Zakonu o zaštiti potrošača.','Ispunite reklamaciju online – PDF besplatno','Pisani prigovor zbog neispravne robe. PDF ili Word besplatno.')

d('ugovor-o-najmu-stana','ugovorONajmuStana','Ugovor o najmu stana','ugovor o najmu stana','Najam stana s jamčevinom.','stan','protokol',
 ['ugovor o najmu stana','najam stana','iznajmljivanje stana','jamčevina','najamnina'],'stan',
 'Ugovor o najmu stana {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o najmu stana prema Zakonu o najmu stanova: pisani oblik, najamnina, režije, jamčevina, otkaz i otkazni rok od tri mjeseca. PDF i Word.',
 'Za iznajmljivanje stana uz slobodno ugovorenu najamninu. S jamčevinom, režijama i pravilima otkaza.',
 'Osam članaka prema Zakonu o najmu stanova.',
 [('Ugovorne strane','Najmodavac i najmoprimac.'),('Predmet najma','Stan i oprema.'),('Trajanje','Određeno ili neodređeno.'),('Najamnina i režije','Iznos i rok plaćanja.'),('Jamčevina','Iznos i povrat.'),('Prestanak najma','Otkaz i iseljenje.')],
 K3,['Iznos slovima automatski','Primopredajni zapisnik preuzima podatke','PDF i Word'],
 ['iznajmljujete ili unajmljujete stan','želite pisano imati najamninu i jamčevinu'],['iznajmljujete turistima – to je ugostiteljska djelatnost','iznajmljujete poslovni prostor – to je zakup'],
 [('Primopredaja','Zapisnik sa stanjem brojila.'),('Porez','Najmodavac prijavljuje prihod od najma Poreznoj upravi.')],
 [('Mora li ugovor biti pisan?','Da, ugovor o najmu stana sklapa se u pisanom obliku.'),('Koliki je otkazni rok?','Najmodavac otkazuje samo iz zakonskih razloga, s otkaznim rokom od tri mjeseca; najmoprimac najam na neodređeno otkazuje najmanje tri mjeseca prije iseljenja.'),PRIV],
 'Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.','Ispunite ugovor o najmu stana online – PDF besplatno','Ugovor o najmu stana s jamčevinom. PDF ili Word besplatno.')

d('otkaz-ugovora-o-najmu','otkazUgovoraONajmu','Otkaz ugovora o najmu','otkaz ugovora o najmu','Otkaz najmoprimca, tri mjeseca unaprijed.','stan','stehovani',
 ['otkaz najma','otkaz ugovora o najmu stana','iseljenje','otkazni rok','povrat jamčevine'],'stan',
 'Otkaz ugovora o najmu stana {rok} – besplatni obrazac PDF',
 'Besplatan otkaz ugovora o najmu stana od strane najmoprimca: najmanje tri mjeseca prije iseljenja, dan predaje stana i povrat jamčevine. PDF i Word.',
 'Selite se? Najam na neodređeno otkazujete najmanje tri mjeseca prije iseljenja.',
 'Kratki pisani otkaz.',[('Otkaz','Najam, dan iseljenja, povrat jamčevine.')],
 K3,['PDF i Word'],
 ['vi ste najmoprimac i selite se'],['vi ste najmodavac – otkaz mora imati zakonski razlog i obrazloženje'],
 [('Predaja otkaza','Uz potpis ili preporučeno.'),('Primopredaja','Zapisnik sa stanjem brojila.')],
 [('Koliko unaprijed moram otkazati?','Najmanje tri mjeseca prije dana iseljenja kod najma na neodređeno vrijeme.'),PRIV],
 'Obrazac se temelji na Zakonu o najmu stanova.','Ispunite otkaz ugovora o najmu online – PDF besplatno','Otkaz najma stana od strane najmoprimca. PDF ili Word besplatno.')

d('primopredajni-zapisnik-stana','primopredajniZapisnikStana','Primopredajni zapisnik stana','primopredajni zapisnik stana','Brojila, ključevi i stanje stana.','stan','protokol',
 ['primopredajni zapisnik stana','predaja stana','stanje brojila','useljenje','iseljenje'],'stan',
 'Primopredajni zapisnik stana {rok} – besplatni obrazac PDF',
 'Besplatan primopredajni zapisnik stana pri useljenju ili iseljenju: stanje brojila, ključevi, namještaj i oštećenja. Osnova za povrat jamčevine. PDF i Word.',
 'Bilježi stanje stana pri useljenju i iseljenju – osnova za povrat jamčevine bez svađe.',
 'Zapisnik u tri dijela.',[('Primopredaja','Useljenje ili iseljenje.'),('Brojila','Struja, voda, plin, grijanje.'),('Stanje','Ključevi, oprema, oštećenja.')],
 K3,['Podaci iz ugovora o najmu','PDF i Word'],
 ['useljavate se ili iseljavate iz unajmljenog stana'],['kupujete stan – trebate drugi dokument'],
 [('Fotografije','S datumom.')],
 [('Zašto zapisnik?','Pri iseljenju se uspoređuje stanje – ono što nije upisano teško je kasnije dokazati.'),PRIV],
 'Obrazac se temelji na Zakonu o najmu stanova.','Ispunite primopredajni zapisnik stana online – PDF besplatno','Zapisnik o predaji stana sa stanjem brojila. PDF ili Word besplatno.')
print('ok')
