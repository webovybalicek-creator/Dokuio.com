import sys; sys.path.insert(0,'/home/claude/skripty')
src=open('/home/claude/skripty/hr_clanky.py').read().split("c('prodaja-automobila'")[0]
exec(src)
ZR=('Zakon o radu (Narodne novine)','https://narodne-novine.nn.hr/clanci/sluzbeni/2014_07_93_1872.html')
GOVOT=('Redoviti otkaz (gov.hr)','https://www.gov.hr/hr/redoviti-otkaz/840')
EU=('Dokumenti za maloljetne osobe koje putuju u EU-u (Your Europe)','https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/croatia/index_hr.htm')

c('duznik-ne-placa','Dužnik ne plaća: opomena, priznanje duga i ovrha','Dužnik ne plaća',
 'Što učiniti kada vam netko ne vraća novac: pisana opomena s rokom, priznanje duga ili obroci, zatezne kamate i ovrha kod javnog bilježnika.',
 'Prvo pisana opomena s rokom, zatim dogovor o obrocima ili priznanje duga. Ako ništa ne pomaže, ovrha ili tužba.',
 'novac','dug',['opomena-pred-tuzbu','izjava-o-priznanju-duga','sporazum-o-obrocnoj-otplati'],
 ['dužnik ne plaća','opomena','naplata duga','ovrha','zatezne kamate'],[ZOO],
 [('Od kada teku zatezne kamate?','Od dana kada je dug dospio, a ne tek od opomene.'),('Mogu li izbjeći tužbu?','Ako imate vjerodostojnu ispravu, poput računa, ovrhu možete predložiti javnom bilježniku.')],
'''
Posudili ste novac ili obavili posao, a plaćanja nema. Ovo je redoslijed koji obično najbrže dovodi do novca.

## 1. Pisana opomena

Pošaljite **opomenu pred tužbu**: koliko duguje, za što, do kada mora platiti i na koji račun. Pošaljite je **preporučeno s povratnicom** ili e-poštom i sačuvajte dokaz. Pisana opomena s jasnim rokom često je dovoljna.

## 2. Dogovor: priznanje duga ili obroci

Ako dužnik želi platiti, ali ne može odjednom, dogovorite **sporazum o obročnoj otplati**. Dužnik u njemu priznaje dug – a **priznanje prekida zastaru** i rok počinje teći iznova.

## 3. Zatezne kamate

Od dana dospijeća dužnik duguje i **zakonske zatezne kamate**. Stopu objavljuje Hrvatska narodna banka svakih šest mjeseci.

## 4. Ovrha ili tužba

- Ako imate **vjerodostojnu ispravu** (npr. račun), možete predložiti **ovrhu javnom bilježniku**.
- U ostalim slučajevima slijedi tužba. Za veće iznose isplati se savjet odvjetnika.

## 5. Pazite na zastaru

Opći zastarni rok je **pet godina**. Ne čekajte predugo s opomenom i priznanjem duga.

## Sažetak

Opomena s rokom → priznanje duga ili obroci → ovrha. Sve pisano i na vrijeme.
''')

c('ugovor-s-majstorom','Ugovor s majstorom: posao, cijena, rok i nedostaci','Ugovor s majstorom',
 'Kako sklopiti ugovor o djelu s majstorom ili obrtnikom: opis posla, materijal, cijena i predujam, rok završetka, primopredaja i nedostaci.',
 'Jasan opis posla, fiksna cijena, rok i pravilo za dodatne radove – i obnova prolazi bez svađe.',
 'usluge','majstori',['ugovor-o-djelu','opomena-pred-tuzbu'],
 ['ugovor s majstorom','ugovor o djelu','obnova stana','izvođač radova','predujam'],[ZOO],
 [('Što ako majstor kasni?','Dajte mu pisano primjereni naknadni rok; nakon njega možete raskinuti ugovor i tražiti naknadu štete.'),('Kada javiti nedostatke?','Pregledajte posao čim je moguće i nedostatke javite izvođaču bez odgađanja.')],
'''
Bojanje, nova kupaonica, popravak krova – kod posla s majstorom najviše problema stvara ono što nije zapisano.

## 1. Opis posla

Napišite **što točno** treba napraviti, gdje i u kojoj kvaliteti. „Obnova kupaonice” nije dovoljno; navedite pločice, sanitarije, tko odvozi otpad.

## 2. Materijal

Dogovorite **tko nabavlja materijal** i je li uključen u cijenu. Ako ga kupujete vi, majstor vam mora na vrijeme reći što treba.

## 3. Cijena i predujam

- Najsigurnija je **fiksna cijena** za cijeli posao.
- Predujam neka bude razuman – ostatak platite nakon primopredaje.
- **Dodatne radove** dogovorite pisano prije nego što počnu.
- Plaćajte na račun i tražite račun.

## 4. Rok

Upišite **početak i završetak**. Ako majstor kasni, dajte mu pisano **primjereni naknadni rok**; nakon njega možete raskinuti ugovor i tražiti naknadu štete.

## 5. Primopredaja i nedostaci

Posao **pregledajte čim je gotov** i nedostatke odmah pisano javite izvođaču. On ih mora otkloniti o svom trošku.

## Sažetak

Opis posla, fiksna cijena, rok i pisani dogovor o dodatnim radovima – to je ugovor o djelu koji štiti obje strane.
''')

c('putovanje-djeteta-bez-roditelja','Dijete putuje bez roditelja: suglasnost i ovjera','Putovanje djeteta bez roditelja',
 'Dijete putuje u inozemstvo s jednim roditeljem, bakom ili na školski izlet? Što napisati u suglasnost roditelja, ovjera kod bilježnika i putne isprave.',
 'Pisana suglasnost roditelja koji ne putuje, ovjerena kod javnog bilježnika, i vlastita putna isprava djeteta.',
 'obitelj','putovanje-djeteta',['suglasnost-za-putovanje-djeteta'],
 ['putovanje djeteta','suglasnost roditelja','dijete putuje u inozemstvo','maloljetnik na granici','ovjera suglasnosti'],[EU],
 [('Treba li dijete vlastitu ispravu?','Da, dijete mora imati vlastitu valjanu osobnu iskaznicu ili putovnicu.'),('Je li suglasnost uvijek obavezna?','Ne uvijek, ali granična policija ili prijevoznik mogu tražiti dokument s potpisom roditelja kojim se odobrava putovanje.')],
'''
Dijete ide s jednim roditeljem na more u Italiju, s bakom u Austriju ili sa školom na izlet? Pisana suglasnost roditelja ušteđuje neugodnosti na granici.

## 1. Kada treba suglasnost

Ako maloljetnik putuje **sam ili bez jednog roditelja**, granična policija ili prijevoznik mogu tražiti **dokument s potpisom roditelja ili skrbnika** kojim se odobrava putovanje. Pravila se razlikuju po državama, pa je najbolje imati suglasnost uvijek.

## 2. Što upisati

- podatke roditelja (ime, OIB, broj osobne iskaznice, telefon),
- podatke djeteta i broj njegove putne isprave,
- **s kim putuje** (drugi roditelj, druga osoba, organizirano putovanje),
- **odredište i razdoblje** putovanja.

## 3. Ovjera

Potpis ovjerite kod **javnog bilježnika** – ovjerenu izjavu strane granične službe prihvaćaju lakše. Djetetu dajte izvornik i presliku osobne iskaznice roditelja.

## 4. Putne isprave

Dijete mora imati **vlastitu valjanu osobnu iskaznicu ili putovnicu**. Prijevoznici (osobito avio-kompanije) mogu imati vlastite obrasce – provjerite unaprijed.

## 5. Preseljenje nije putovanje

Za **preseljenje** djeteta u inozemstvo treba suglasnost drugog roditelja za promjenu prebivališta ili odluka suda – obična suglasnost za putovanje nije dovoljna.

## Sažetak

Suglasnost s podacima o putovanju, ovjera kod bilježnika, vlastita isprava djeteta.
''')

c('posudba-stvari-prijatelju','Posudba stvari prijatelju: kako izbjeći svađu oko štete','Posudba stvari prijatelju',
 'Posuđujete prikolicu, alat ili opremu? Ugovor o posudbi, stanje stvari pri predaji, rok povrata i tko plaća štetu ako se stvar ošteti.',
 'Posudba je besplatna. Zapišite stanje stvari, rok povrata i vrijednost – tada se o šteti lako dogovorite.',
 'kupnja','posudba',['ugovor-o-posudbi','primopredajni-zapisnik-vozila'],
 ['posudba stvari','ugovor o posudbi','posuditi prikolicu','šteta na posuđenoj stvari','posudba automobila'],[ZOO],
 [('Što ako se stvar ošteti?','Ako je šteta nastala krivnjom posudovnika, on je nadoknađuje; redovita istrošenost nije šteta.'),('Smije li prijatelj stvar posuditi dalje?','Ne bez dopuštenja onoga tko ju je posudio.')],
'''
Posudili ste prijatelju prikolicu, a vratila se s ogrebotinom? Kratki ugovor o posudbi sprječava takve rasprave.

## 1. Posudba ili najam?

**Posudba je besplatna.** Ako se plaća naknada, radi se o najmu. Kod posudbe posudovnik stvar vraća – istu stvar, ne drugu.

## 2. Stanje i vrijednost

Upišite **stanje stvari pri predaji** i fotografirajte je. Upišite i **vrijednost** – olakšava dogovor ako se stvar izgubi ili ošteti.

## 3. Namjena i rok

- Stvar se smije koristiti samo za **dogovorenu namjenu**.
- Bez dopuštenja se **ne smije dati dalje**.
- Upišite **rok povrata**.

## 4. Šteta

Za štetu nastalu **krivnjom posudovnika** odgovara posudovnik. Uobičajena istrošenost nije šteta.

## 5. Automobil

Kod posudbe automobila ispunite i **primopredajni zapisnik vozila** s kilometrima i vremenom predaje – tako je jasno tko je vozio kada je stigla kazna.

## Sažetak

Opis stanja, vrijednost, namjena, rok povrata – i posudba ne košta prijateljstvo.
''')
print('ok')
