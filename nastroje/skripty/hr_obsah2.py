import sys; sys.path.insert(0,'/home/claude/skripty')
exec(open('/home/claude/skripty/hr_obsah.py').read().split("d('kupoprodajni-ugovor-automobil'")[0])
import stranka
_orig=stranka.zapis
def zapis2(path,zeme,slug,ident,*a):
    # soubor šablony = slug
    return _orig(path,zeme,slug,ident,*a)

d('opomena-pred-tuzbu','opomenaPredTuzbu','Opomena pred tužbu','opomenu pred tužbu','Poziv dužniku na plaćanje s rokom i upozorenjem.','novac','dluh',
 ['opomena pred tužbu','opomena za dug','poziv na plaćanje','dužnik ne plaća','zatezne kamate'],'novac',
 'Opomena pred tužbu {rok} – besplatni obrazac PDF',
 'Besplatna opomena pred tužbu: dugovani iznos slovima, temelj duga, rok za plaćanje, IBAN i upozorenje na zatezne kamate i ovrhu. PDF i Word.',
 'Dužnik ne plaća? Pisana opomena s jasnim rokom često je dovoljna – a ako nije, dokaz je da ste ga pozvali na plaćanje.',
 'Kratka opomena u jednom dijelu.',[('Opomena','Dug, temelj, rok, račun i upozorenje.')],
 K3,['Iznos slovima automatski','PDF i Word'],
 ['netko vam duguje dospjeli iznos','želite pisano pozvati dužnika prije suda'],['dug još nije dospio','dužnik je tvrtka u stečaju'],
 [('Slanje','Preporučeno s povratnicom.'),('Ako ne plati','Ovrha kod javnog bilježnika ili tužba.')],
 [('Je li opomena obavezna prije tužbe?','Nije uvijek propisana, ali pokazuje da ste dužnika pozvali na plaćanje i često ubrza naplatu.'),('Od kada se računaju zatezne kamate?','Od dana dospijeća duga, ne tek od opomene.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (zakašnjenje dužnika, zatezne kamate).','Ispunite opomenu pred tužbu online – PDF besplatno','Opomena dužniku s rokom plaćanja. PDF ili Word besplatno.')

d('ugovor-o-djelu','ugovorODjelu','Ugovor o djelu','ugovor o djelu','Majstor, popravak ili obnova – posao, cijena i rok.','usluge','protokol',
 ['ugovor o djelu','ugovor s majstorom','izvođač radova','popravak','obnova stana'],'usluge',
 'Ugovor o djelu {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o djelu s majstorom ili izvođačem: opis posla, materijal, cijena slovima, predujam, rok završetka, primopredaja i nedostaci. PDF i Word.',
 'Za posao s majstorom – bojanje, popravak, obnovu kupaonice. S jasnim opsegom, cijenom i rokom.',
 'Šest članaka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Naručitelj i izvođač.'),('Predmet','Opis posla, mjesto, materijal.'),('Rok','Početak i završetak.'),('Cijena','Iznos, predujam, dodatni radovi.'),('Primopredaja','Pregled i nedostaci.'),('Završne odredbe','Primjerci.')],
 K3,['Iznos slovima automatski','PDF i Word'],
 ['angažirate majstora ili obrtnika','želite pisano imati cijenu i rok'],['gradite kuću – treba ugovor o građenju i dozvole'],
 [('Primopredaja','Pregledajte posao i nedostatke javite odmah pisano.'),('Plaćanje','Na račun, uz račun izvođača.')],
 [('Što ako majstor kasni?','Dajte mu pisano primjereni naknadni rok; nakon njega možete raskinuti ugovor i tražiti naknadu štete.'),('Kada javiti nedostatke?','Pregledajte posao čim je moguće i nedostatke javite izvođaču bez odgađanja.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o djelu).','Ispunite ugovor o djelu online – PDF besplatno','Ugovor s majstorom: posao, cijena i rok. PDF ili Word besplatno.')

d('ugovor-o-posudbi','ugovorOPosudbi','Ugovor o posudbi','ugovor o posudbi','Besplatna posudba stvari prijatelju ili susjedu.','svakodnevno','pujcka',
 ['ugovor o posudbi','posudba stvari','posuditi prikolicu','posudba bez naknade','posudovnik'],'svakodnevno',
 'Ugovor o posudbi {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o posudbi stvari bez naknade: opis i stanje stvari, vrijednost, namjena, rok povrata i odgovornost za štetu. PDF i Word.',
 'Posuđujete prikolicu, alat ili opremu? Kratki ugovor s rokom povrata i stanjem stvari sprječava nesporazume.',
 'Pet članaka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Posuditelj i posudovnik.'),('Predmet','Stvar, stanje i vrijednost.'),('Uporaba','Namjena i troškovi.'),('Povrat','Rok i šteta.'),('Završne odredbe','Primjerci.')],
 K3,['PDF i Word'],['posuđujete stvar bez naknade'],['naplaćujete naknadu – to je najam'],
 [('Predaja','Fotografirajte stvar.')],
 [('Po čemu se posudba razlikuje od najma?','Posudba je besplatna; ako se plaća naknada, radi se o najmu.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (ugovor o posudbi).','Ispunite ugovor o posudbi online – PDF besplatno','Ugovor o besplatnoj posudbi stvari. PDF ili Word besplatno.')

d('sporazum-o-obrocnoj-otplati','sporazumOObrocnojOtplati','Sporazum o obročnoj otplati duga','sporazum o obročnoj otplati','Dug u mjesečnim obrocima, s priznanjem duga.','novac','dluh',
 ['obročna otplata duga','sporazum o obrocima','otplata na rate','plan otplate','priznanje duga'],'novac',
 'Sporazum o obročnoj otplati duga {rok} – besplatni obrazac PDF',
 'Besplatan sporazum o obročnoj otplati duga: priznanje duga, iznos obroka slovima, broj i dospijeće obroka, posljedice zakašnjenja. PDF i Word.',
 'Dužnik ne može platiti odjednom? Sporazum o obrocima s priznanjem duga – i zastara počinje teći iznova.',
 'Pet članaka prema Zakonu o obveznim odnosima.',
 [('Ugovorne strane','Vjerovnik i dužnik.'),('Priznanje duga','Iznos i temelj.'),('Obroci','Iznos, broj, dospijeće.'),('Zakašnjenje','Dospijeće ostatka.'),('Završne odredbe','Primjerci.')],
 K3,['Iznos slovima automatski','Podsjetnici na obroke','PDF i Word'],
 ['dogovarate otplatu duga na rate','želite pisano priznanje duga'],['dug osporava – sporazum neće potpisati'],
 [('Obroci','Spremite datume u kalendar.')],
 [('Prekida li sporazum zastaru?','Da, dužnik u sporazumu priznaje dug, a priznanjem se zastara prekida.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima (priznanje duga, zastara, zatezne kamate).','Ispunite sporazum o obročnoj otplati online – PDF besplatno','Sporazum o otplati duga u obrocima. PDF ili Word besplatno.')

d('sporazumni-raskid-ugovora-o-najmu','sporazumniRaskidNajma','Sporazumni raskid ugovora o najmu','sporazum o raskidu najma','Kraj najma dogovorom, bez otkaznog roka.','stan','protokol',
 ['sporazumni raskid najma','raskid ugovora o najmu','prestanak najma','iseljenje dogovorom','povrat jamčevine'],'stan',
 'Sporazumni raskid ugovora o najmu stana {rok} – obrazac PDF',
 'Besplatan sporazum o raskidu ugovora o najmu stana: dan prestanka bez otkaznog roka, predaja stana, primopredajni zapisnik i povrat jamčevine. PDF i Word.',
 'Najmodavac i najmoprimac se slažu? Sporazumom najam prestaje kada se dogovorite – bez čekanja tri mjeseca.',
 'Pet članaka sporazuma.',
 [('Ugovorne strane','Najmodavac i najmoprimac.'),('Raskid','Dan prestanka najma.'),('Predaja stana','Ključevi i zapisnik.'),('Jamčevina','Iznos i rok povrata.'),('Završne odredbe','Bez daljnjih potraživanja.')],
 K3,['Iznos slovima automatski','PDF i Word'],['obje strane žele raniji kraj najma'],['druga strana se ne slaže – koristite otkaz'],
 [('Primopredaja','Zapisnik sa stanjem brojila.')],
 [('Treba li poštovati otkazni rok?','Ne – kod sporazumnog raskida strane same odrede dan prestanka.'),PRIV],
 'Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.','Ispunite sporazumni raskid najma online – PDF besplatno','Sporazum o raskidu najma stana. PDF ili Word besplatno.')

d('ugovor-o-podnajmu','ugovorOPodnajmu','Ugovor o podnajmu','ugovor o podnajmu','Podnajam sobe ili stana uz dopuštenje najmodavca.','stan','protokol',
 ['ugovor o podnajmu','podnajam sobe','podstanar','podnajam stana','cimer'],'stan',
 'Ugovor o podnajmu sobe ili stana {rok} – besplatni obrazac PDF',
 'Besplatan ugovor o podnajmu sobe ili stana: dopuštenje najmodavca, trajanje, podnajamnina slovima, jamčevina i otkaz od 30 dana. PDF i Word.',
 'Dajete sobu cimeru ili stan dalje u podnajam? Uz pisano dopuštenje najmodavca i jasan ugovor.',
 'Sedam članaka prema Zakonu o najmu stanova.',
 [('Ugovorne strane','Najmoprimac i podnajmoprimac.'),('Predmet','Soba ili cijeli stan, dopuštenje.'),('Trajanje','Od – do.'),('Plaćanje','Podnajamnina i jamčevina.'),('Obveze','Korištenje stana.'),('Otkaz','30 dana.'),('Završne odredbe','Primjerci.')],
 K3,['Iznos slovima automatski','PDF i Word'],['unajmljeni stan ili sobu dajete dalje','imate dopuštenje najmodavca'],['najmodavac nije dao dopuštenje'],
 [('Dopuštenje','Pisano, priloženo ugovoru.')],
 [('Smijem li dati stan u podnajam?','Samo uz dopuštenje najmodavca; podnajam bez dopuštenja razlog je za otkaz ugovora o najmu.'),PRIV],
 'Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.','Ispunite ugovor o podnajmu online – PDF besplatno','Ugovor o podnajmu sobe ili stana. PDF ili Word besplatno.')

d('izjava','izjava','Izjava','izjavu','Opća pisana izjava pod materijalnom i kaznenom odgovornošću.','svakodnevno','plnamoc',
 ['izjava','izjava pod materijalnom i kaznenom odgovornošću','pisana izjava','izjava o kućanstvu','ovjera potpisa'],'svakodnevno',
 'Izjava pod materijalnom i kaznenom odgovornošću {rok} – obrazac',
 'Besplatan obrazac izjave pod materijalnom i kaznenom odgovornošću: podaci davatelja, tekst izjave, svrha i mjesto za ovjeru potpisa. PDF i Word.',
 'Kada ured, banka ili škola traži vašu pisanu izjavu. Ako treba ovjera, potpišite je kod javnog bilježnika.',
 'Kratka izjava.',[('Izjava','Davatelj, tekst, svrha.')],
 K3,['PDF i Word'],['tijelo ili ustanova traži pisanu izjavu'],['postoji propisani službeni obrazac – koristite njega'],
 [('Ovjera','Kod javnog bilježnika, ako se traži.')],
 [('Treba li izjavu ovjeriti?','Ovisi o tome tko je traži – provjerite unaprijed.'),PRIV],
 'Obrazac je opća pisana izjava fizičke osobe.','Ispunite izjavu online – PDF besplatno','Izjava pod materijalnom i kaznenom odgovornošću. PDF ili Word besplatno.')

d('otkaz-ugovora','otkazUgovora','Otkaz ugovora','otkaz ugovora','Telekom, osiguranje, teretana, pretplata.','svakodnevno','protokol',
 ['otkaz ugovora','otkaz telekom','otkaz osiguranja','otkaz teretane','otkaz pretplate'],'svakodnevno',
 'Otkaz ugovora (telekom, osiguranje, teretana) {rok} – obrazac PDF',
 'Besplatan pisani otkaz ugovora s operatorom, osiguravateljem, teretanom ili pretplatom: broj ugovora, datum prestanka i zahtjev za potvrdu. PDF i Word.',
 'Želite otkazati mobilnu tarifu, internet, osiguranje ili članarinu? Pisani otkaz s brojem ugovora i zahtjevom za potvrdu.',
 'Kratki otkaz.',[('Otkaz','Usluga, broj ugovora, dan prestanka.')],
 K3,['PDF i Word'],['otkazujete uslugu s ugovorom'],['otkazujete najam stana ili posao – za to postoje posebni obrasci'],
 [('Slanje','Preporučeno ili e-poštom za otkaze.'),('Potvrda','Zatražite pisanu potvrdu.')],
 [('Koliki je otkazni rok?','Onaj iz ugovora ili općih uvjeta pružatelja.'),('Plaćam li naknadu?','Kod ugovora s obveznim trajanjem prijevremeni otkaz može značiti naknadu iz ugovora.'),PRIV],
 'Obrazac se temelji na Zakonu o obveznim odnosima i Zakonu o zaštiti potrošača.','Ispunite otkaz ugovora online – PDF besplatno','Otkaz ugovora o usluzi s potvrdom. PDF ili Word besplatno.')

d('otkaz-ugovora-o-radu','otkazUgovoraORadu','Otkaz ugovora o radu','otkaz ugovora o radu','Redoviti otkaz radnika, i prijedlog sporazuma.','posao','protokol',
 ['otkaz ugovora o radu','otkaz radnika','dati otkaz','otkazni rok','sporazumni prestanak'],'posao',
 'Otkaz ugovora o radu (radnik) {rok} – besplatni obrazac PDF',
 'Besplatan obrazac otkaza ugovora o radu od strane radnika: bez navođenja razloga, otkazni rok prema Zakonu o radu i prijedlog sporazumnog prestanka. PDF i Word.',
 'Odlazite s posla? Kao radnik otkazujete bez razloga, pisano, uz otkazni rok – ili predložite raniji sporazumni prestanak.',
 'Kratki pisani otkaz.',[('Otkaz','Radnik, poslodavac, otkazni rok, prijedlog.')],
 K3,['PDF i Word'],['vi ste radnik i odlazite s posla'],['vi ste poslodavac – otkaz mora imati opravdan razlog i obrazloženje'],
 [('Uručenje','Osobno uz potpis primitka ili preporučeno.'),('Godišnji','Dogovorite preostali odmor.')],
 [('Moram li navesti razlog?','Ne – radnik redovito otkazuje bez navođenja razloga, ali uz otkazni rok.'),('Koliki je otkazni rok?','Ovisi o trajanju rada kod poslodavca – npr. nakon jedne godine mjesec dana, nakon pet godina dva mjeseca; ugovor može odrediti kraći.'),PRIV],
 'Obrazac se temelji na Zakonu o radu (redoviti otkaz, otkazni rok).','Ispunite otkaz ugovora o radu online – PDF besplatno','Otkaz ugovora o radu od strane radnika. PDF ili Word besplatno.')

d('suglasnost-za-putovanje-djeteta','suglasnostZaPutovanjeDjeteta','Suglasnost za putovanje djeteta','suglasnost za putovanje djeteta','Dijete putuje s jednim roditeljem ili bez roditelja.','obitelj','plnamoc',
 ['suglasnost za putovanje djeteta','putovanje maloljetnika','suglasnost roditelja','dijete putuje u inozemstvo','ovjera suglasnosti'],'obitelj',
 'Suglasnost za putovanje maloljetnog djeteta {rok} – obrazac PDF',
 'Besplatna suglasnost roditelja za putovanje maloljetnog djeteta u inozemstvo s drugim roditeljem, pratiteljem ili bez pratnje. Za ovjeru kod bilježnika. PDF i Word.',
 'Dijete putuje s jednim roditeljem, s bakom ili na školski izlet u inozemstvo? Pisana suglasnost roditelja koji ne putuje.',
 'Kratka izjava roditelja.',[('Suglasnost','Roditelj, dijete, pratitelj, odredište i razdoblje.')],
 K3,['PDF i Word'],['dijete putuje bez jednog ili oba roditelja'],['dijete se seli u inozemstvo – treba suglasnost drugog roditelja ili odluka suda'],
 [('Ovjera','Kod javnog bilježnika.'),('Putne isprave','Dijete ima vlastitu osobnu ili putovnicu.')],
 [('Je li suglasnost obavezna?','Granična policija ili prijevoznik mogu tražiti dokument s potpisom roditelja kojim se odobrava putovanje; najbolje je imati ga ovjerenog.'),PRIV],
 'Obrazac se temelji na informacijama Your Europe o putovanju maloljetnika iz Hrvatske.','Ispunite suglasnost za putovanje djeteta online – PDF besplatno','Suglasnost roditelja za putovanje djeteta. PDF ili Word besplatno.')
print('ok')
