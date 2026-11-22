from stranky import zapis, L
S='Ďalšie dokumenty, tiež zadarmo.'
P='Nie. Dokument vzniká iba vo vašom prehliadači.'
DS='Zadarmo · výsledok v PDF aj Worde · trvá asi 2 minúty'
ON=['Vyplnenie s vysvetlením každého poľa','Podpis na obrazovke','Stiahnutie v PDF aj Worde, alebo poslanie na e-mail']
zapis('sk','uznanie-dlhu','uznanie-dlhu','uznanieDlhu','Uznanie dlhu','uznanie dlhu',
 {'popis':'Písomné potvrdenie dlhu, aj so splátkami.','kategorie':'penize','ilustrace':'dluh','slova':['uznanie dlhu','dlh','splátky','splátkový kalendár','dlžník']},'penize',
 L('Uznanie dlhu {rok} – vzor zadarmo v PDF','Bezplatné uznanie dlhu podľa § 558 OZ: dôvod a výška dlhu, splatenie naraz alebo v splátkach so splátkovým kalendárom.',
  'Dlžník písomne potvrdí, koľko a za čo dlhuje a ako zaplatí. Premlčacia doba sa predĺži na 10 rokov.','Uznanie so spôsobom splatenia.',
  [('Strany','Dlžník a veriteľ.'),('Dlh','Dôvod a výška.'),('Splatenie','Naraz alebo v splátkach.')],
  [('Vyplniť','Sumu slovom doplníme sami.'),('Podpísať','Podpis dlžníka je nevyhnutný.'),('Uschovať','Originál si nechá veriteľ.')],
  ON+['Splátkový kalendár a splátky v kalendári'],['Nesplatená pôžička medzi známymi','Dohoda o splátkach za škodu'],['Dlhy voči bankám a inkasným spoločnostiam'],
  [('Splátky','Platby v hotovosti si dajte potvrdiť.')],
  [('Musí byť uznanie písomné?','Áno, inak je neplatné (§ 558 OZ).'),('Čo sa stane s premlčaním?','Od uznania plynie nová premlčacia doba 10 rokov (§ 110 OZ).'),('Ukladáte moje údaje?',P)],
  'Vzor vychádza z § 558 a § 110 Občianskeho zákonníka.',S),
 {'title':'Uznanie dlhu online – PDF zadarmo','description':'Uznanie dlhu so splátkovým kalendárom. PDF alebo Word zadarmo.','podnadpis':DS})
zapis('sk','kupna-zmluva','kupna-zmluva','kupnaZmluva','Kúpna zmluva na vec','kúpnu zmluvu',
 {'popis':'Predaj použitých vecí medzi súkromnými osobami.','kategorie':'bezne','ilustrace':'protokol','slova':['kúpna zmluva','predaj','bazár','bicykel','mobil','použitá vec']},'bezne',
 L('Kúpna zmluva na vec {rok} – vzor zadarmo v PDF','Bezplatná kúpna zmluva na hnuteľnú vec: opis, vady, cena, platba. Pre predaj bicykla, mobilu, nábytku medzi súkromnými osobami.',
  'Na predaj použitých vecí medzi súkromnými osobami – bicykel, mobil, nábytok, hudobný nástroj.','Krátka zmluva s opisom vecí a vád.',
  [('Strany','Kto predáva a kto kupuje.'),('Vec','Opis a známe vady.'),('Cena','Platba a odovzdanie.')],
  [('Vyplniť','Cenu slovom doplníme sami.'),('Prezrieť','Vec si spolu pozrite.'),('Podpísať','Obe strany.')],
  ON,['Predaj cez bazár alebo inzerát','Drahšie použité zariadenia'],['Autá – na to je kúpna zmluva na auto','Nehnuteľnosti'],
  [('Hotovosť','Pri vyšších sumách radšej prevodom.')],
  [('Musí byť kúpna zmluva písomná?','Pri hnuteľných veciach nie, ale písomná zmluva je najlepší dôkaz.'),('Ukladáte moje údaje?',P)],
  'Vzor vychádza z § 588 a nasl. Občianskeho zákonníka.',S),
 {'title':'Kúpna zmluva na vec online – PDF zadarmo','description':'Kúpna zmluva na použitú vec. PDF alebo Word zadarmo.','podnadpis':DS})
zapis('sk','odstupenie-od-zmluvy','odstupenie-od-zmluvy','odstupenieOdZmluvy','Odstúpenie od zmluvy','odstúpenie od zmluvy',
 {'popis':'Vrátenie tovaru z e-shopu do 14 dní.','kategorie':'bezne','ilustrace':'protokol','slova':['odstúpenie od zmluvy','vrátenie tovaru','e-shop','14 dní','formulár']},'bezne',
 L('Odstúpenie od zmluvy {rok} – formulár zadarmo v PDF','Bezplatný formulár na odstúpenie od zmluvy z e-shopu do 14 dní podľa zákona č. 108/2024 Z. z. PDF aj Word.',
  'Kúpili ste online a tovar nechcete? Do 14 dní od prevzatia môžete odstúpiť bez udania dôvodu.','Text podľa vzorového formulára zo zákona.',
  [('Predávajúci','Komu odstúpenie posielate.'),('Nákup','Tovar, objednávka, dátumy.'),('Vaše údaje','Meno, adresa, IBAN.')],
  [('Vyplniť','Údaje z potvrdenia objednávky.'),('Odoslať','E-mail, formulár v e-shope alebo pošta.'),('Vrátiť tovar','Do 14 dní.')],
  ON+['Pripomienka vrátenia peňazí v kalendári'],['Nákup v e-shope alebo cez telefón','Zmluva podpísaná u vás doma'],['Nákup v kamennej predajni','Kúpa od súkromnej osoby'],
  [('Peniaze','Predávajúci ich vráti do 14 dní.')],
  [('Musím uviesť dôvod?','Nie.'),('Dokedy môžem odstúpiť?','14 dní od prevzatia tovaru; stačí odstúpenie v lehote odoslať.'),('Ukladáte moje údaje?',P)],
  'Vzor vychádza z § 19 a § 20 zákona č. 108/2024 Z. z. o ochrane spotrebiteľa.',S),
 {'title':'Odstúpenie od zmluvy online – PDF zadarmo','description':'Formulár na odstúpenie od zmluvy z e-shopu. PDF alebo Word zadarmo.','podnadpis':'Zadarmo · výsledok v PDF aj Worde · trvá asi 1 minútu'})
zapis('sk','reklamacia','reklamacia','reklamacia','Reklamácia tovaru','reklamáciu',
 {'popis':'Reklamácia chybného tovaru u predávajúceho.','kategorie':'bezne','ilustrace':'protokol','slova':['reklamácia','vada','záruka','oprava','výmena','reklamačný list']},'bezne',
 L('Reklamácia tovaru {rok} – vzor zadarmo v PDF','Bezplatný reklamačný list: opis vady, požiadavka na opravu, výmenu, zľavu alebo vrátenie peňazí. Vybavenie spravidla do 30 dní.',
  'Tovar je chybný? Reklamujte ho písomne – s presným opisom vady a tým, čo požadujete.','Reklamácia s požiadavkou na vybavenie.',
  [('Predávajúci','Kde reklamujete.'),('Vada','Čo nefunguje.'),('Požiadavka','Oprava, výmena, zľava alebo vrátenie peňazí.')],
  [('Vyplniť','Vadu opíšte konkrétne.'),('Odovzdať','S tovarom a dokladom.'),('Počkať','Spravidla najviac 30 dní.')],
  ON+['Pripomienka lehoty v kalendári'],['Chybný tovar z obchodu alebo e-shopu'],['Kúpa od súkromnej osoby','Záruka výrobcu nad rámec zákona – podľa jeho podmienok'],
  [('Potvrdenie','Pýtajte si potvrdenie o uplatnení reklamácie.')],
  [('Ako dlho môžem reklamovať?','24 mesiacov od prevzatia, pri použitom tovare môže byť lehota 12 mesiacov.'),('Do kedy musí predávajúci reklamáciu vybaviť?','Spravidla najneskôr do 30 dní.'),('Ukladáte moje údaje?',P)],
  'Vzor vychádza z § 619 a nasl. Občianskeho zákonníka a zákona č. 108/2024 Z. z.',S),
 {'title':'Reklamácia tovaru online – PDF zadarmo','description':'Reklamačný list s požiadavkou na vybavenie. PDF alebo Word zadarmo.','podnadpis':DS})
