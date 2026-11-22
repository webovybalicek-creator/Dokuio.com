import sys; sys.path.insert(0,'/home/claude/skripty')
from lt_zdroje import *
N='buto-nuomos-sutartis'; NA='buto-perdavimo-aktas'

c('skolos-pripazinimas-ir-senatis','Skolos pripažinimas ir ieškinio senatis: kada skola pasensta','Skolos pripažinimas',
 'Kada skola pasensta Lietuvoje: bendrasis 10 metų ieškinio senaties terminas, 5 metai palūkanoms ir kaip skolos pripažinimas senatį nutraukia.',
 'Bendrasis senaties terminas – 10 metų. Skolininkui raštu pripažinus skolą, senatis nutrūksta ir pradedama skaičiuoti iš naujo.',
 'nauda','skolos',['skolos-pripazinimas','susitarimas-del-skolos-grazinimo','raginimas-sumoketi'],
 ['ieškinio senatis','skolos pripažinimas','kada skola pasensta','10 metų','senaties nutraukimas'],[CK],
 [('Koks bendrasis ieškinio senaties terminas?','10 metų (Civilinio kodekso 1.125 str.). Palūkanoms ir kitoms periodinėms išmokoms – 5 metai.'),
  ('Kas nutraukia senatį?','Ieškinio pareiškimas ir skolininko veiksmai, rodantys, kad jis pripažįsta prievolę (1.130 str.).'),
  ('Ar galima susitarti dėl kitokio termino?','Ne. Šalių susitarimu keisti ieškinio senaties terminus draudžiama.')],
'''
Skola nedingsta savaime, tačiau po tam tikro laiko ją išieškoti teisme tampa sunku. Svarbu žinoti terminus ir kaip juos „atnaujinti“.

## 1. Kiek laiko turite

Bendrasis **ieškinio senaties terminas – 10 metų**. Reikalavimams dėl palūkanų ir kitų periodinių išmokų taikomas **5 metų** terminas. Terminas pradedamas skaičiuoti nuo dienos, kai sužinojote ar turėjote sužinoti apie pažeistą teisę – paprastai nuo mokėjimo termino pabaigos.

## 2. Kas nutraukia senatį

Senatį nutraukia **ieškinio pareiškimas** teisme ir **skolininko veiksmai, rodantys, kad jis pripažįsta skolą** – pavyzdžiui, rašytinis skolos pripažinimas, susitarimas dėl grąžinimo ar dalinis mokėjimas. Po nutraukimo terminas skaičiuojamas iš naujo.

## 3. Ko senatis nenutraukia

Paprastas raginimas ar priminimas senaties **nenutraukia**. Jis vis tiek naudingas – įrodo, kad skolos reikalavote.

## 4. Praktiškai

Jei terminas artėja prie pabaigos, paprašykite skolininko pasirašyti **skolos pripažinimą** arba **susitarimą dėl grąžinimo dalimis**. Jei atsisako – laiku kreipkitės į teismą.

## Santrauka

10 metų (5 – palūkanoms), pripažinimas ar ieškinys senatį nutraukia, raginimas – ne.
''')

c('pinigu-dovanojimas-seimoje','Pinigų dovanojimas šeimoje: forma ir pajamų mokestis','Pinigų dovanojimas',
 'Dovanojate pinigus vaikui ar giminaičiui? Kada reikia rašytinės ar notarinės sutarties, kas atleidžiama nuo GPM ir kada dovaną reikia deklaruoti.',
 'Virš 1 500 € dovanojimo sutartis turi būti rašytinė, virš 14 500 € – notarinė. Dovanos iš artimų giminaičių pajamų mokesčiu neapmokestinamos.',
 'nauda','dovanojimas',['dovanojimo-sutartis','pinigu-gavimo-pakvitavimas'],
 ['pinigų dovanojimas','dovana vaikui','dovanos mokestis','GPM dovanoms','dovanojimo sutartis'],[CK,DOV],
 [('Kas atleidžiama nuo mokesčio?','Dovanos iš sutuoktinio, vaikų (įvaikių), tėvų (įtėvių), senelių, brolių, seserų ir vaikaičių.'),
  ('Kiek galima gauti iš kitų asmenų be mokesčio?','2 500 € per kalendorinius metus. Nuo viršijančios dalies mokamas GPM.'),
  ('Kada reikia notaro?','Kai dovanojimo suma didesnė kaip 14 500 € arba dovanojamas nekilnojamasis daiktas.')],
'''
Pinigų dovanojimas šeimoje dažniausiai nekelia mokesčių, tačiau turi formos taisyklių.

## 1. Sutarties forma

Kai dovanojama daugiau kaip **1 500 €**, dovanojimo sutartis turi būti **rašytinė**. Kai suma didesnė kaip **14 500 €**, sutartis turi būti **notarinė**. Nekilnojamojo daikto dovanojimas visada notarinis.

## 2. Kas atleidžiama nuo mokesčio

Pajamų mokesčiu neapmokestinamos dovanos iš **sutuoktinio, vaikų (įvaikių), tėvų (įtėvių), senelių, brolių, seserų ir vaikaičių** – nepriklausomai nuo sumos. Atkreipkite dėmesį: sutuoktinio tėvai ar broliai nėra artimi giminaičiai.

## 3. Dovanos iš kitų asmenų

Iš kitų asmenų per metus neapmokestinama **2 500 €**. Nuo viršijančios dalies GPM moka apdovanotasis, o visą sumą deklaruoja metinėje pajamų deklaracijoje.

## 4. Pavedimas ir įrodymai

Perveskite pinigus su paskirtimi „dovana“. Sutartis kartu su pavedimu aiškiai parodo, kad tai dovana, o ne paskola.

## Santrauka

Raštu virš 1 500 €, pas notarą virš 14 500 €, artimiems – be mokesčio.
''')

c('buto-isnuomojimas','Buto išnuomojimas: sutartis, užstatas ir mokesčiai','Buto išnuomojimas',
 'Išnuomojate butą? Ką įrašyti į nuomos sutartį: terminą, nuomos mokestį, užstatą, mokesčius už paslaugas, gyvenamosios vietos deklaravimą ir pajamų mokestį.',
 'Rašytinė sutartis, aiškus užstatas ir perdavimo aktas su skaitiklių rodmenimis. Nuomos pajamas reikia deklaruoti ir apmokestinti.',
 'majoklis','nuoma',[N,NA],
 ['buto nuoma','buto išnuomojimas','nuomos sutartis','užstatas','nuomos pajamos'],[CK],
 [('Ar nuomininkas gali nutraukti sutartį anksčiau?','Taip. Tiek terminuotą, tiek neterminuotą sutartį jis gali nutraukti raštu įspėjęs prieš mėnesį.'),
  ('Kiek gali būti užstatas?','Įstatymas užstato dydžio neriboja; įprastai vieno ar dviejų mėnesių nuomos mokestis.'),
  ('Ar reikia mokėti mokestį nuo nuomos pajamų?','Taip, nuomotojas nuomos pajamas deklaruoja VMI ir moka pajamų mokestį.')],
'''
Buto nuoma gali būti paprasta, jei nuo pradžių viską susitarsite raštu.

## 1. Sutartis

Sudarykite **rašytinę nuomos sutartį**: šalys, buto adresas, terminas, nuomos mokestis, užstatas ir mokesčiai už paslaugas. Rašytinė sutartis – geriausias įrodymas abiem pusėms.

## 2. Terminas ir nutraukimas

Sutartis gali būti **terminuota** arba **neterminuota**. Nuomininkas bet kurią iš jų gali nutraukti, **raštu įspėjęs prieš vieną mėnesį** – šios teisės sutartimi apriboti negalima. Nuomotojas sutartį nutraukti gali tik įstatyme numatytais pagrindais.

## 3. Užstatas

Įstatymas užstato dydžio neriboja – įprastai tai **vienas ar du** mėnesio mokesčiai. Įrašykite, kada ir kaip jis grąžinamas ir ką iš jo galima išskaičiuoti.

## 4. Gyvenamosios vietos deklaravimas

Jei nuomininkas nori deklaruoti gyvenamąją vietą, įrašykite savo sutikimą į sutartį – tada savivaldybei pakanka pateikti sutartį.

## 5. Mokesčiai

Nuomos pajamas nuomotojas **deklaruoja VMI** ir moka pajamų mokestį.

## Santrauka

Rašytinė sutartis, aiškus užstatas, perdavimo aktas su skaitikliais ir deklaruotos pajamos.
''')

c('buto-nuomojimas','Buto nuomojimasis: ką patikrinti prieš pasirašant nuomos sutartį','Buto nuomojimasis',
 'Nuomojatės butą? Ką patikrinti prieš pasirašant: savininką, sutarties terminą, užstatą, mokesčius už paslaugas, deklaravimą ir nutraukimo sąlygas.',
 'Patikrinkite, ar nuomotojas tikrai savininkas, ką apima nuomos mokestis ir kaip grąžinamas užstatas. Nutraukti galite įspėję prieš mėnesį.',
 'majoklis','nuoma',[N,NA],
 ['buto nuomojimasis','nuomininko teisės','nuomos sutartis','užstatas','gyvenamosios vietos deklaravimas'],[CK],
 [('Kaip patikrinti savininką?','Paprašykite Nekilnojamojo turto registro išrašo arba patikrinkite jį pagal buto unikalų numerį.'),
  ('Ar galiu nutraukti terminuotą sutartį?','Taip, raštu įspėję nuomotoją prieš vieną mėnesį (Civilinio kodekso 6.609 str.).'),
  ('Ar galėsiu deklaruoti gyvenamąją vietą?','Jei nuomotojas sutinka. Geriausia, kad sutikimas būtų įrašytas sutartyje.')],
'''
Prieš pasirašydami nuomos sutartį skirkite pusvalandį patikrinimui – sutaupysite nervų vėliau.

## 1. Kas nuomoja

Įsitikinkite, kad nuomotojas yra **savininkas** arba turi teisę nuomoti. Paprašykite Nekilnojamojo turto registro išrašo.

## 2. Ką apima mokestis

Išsiaiškinkite, ar į nuomos mokestį įskaičiuotas šildymas, vanduo, elektra ir namo administravimas, ar jie mokami atskirai pagal sąskaitas.

## 3. Užstatas

Įrašykite užstato dydį, kada ir kaip jis grąžinamas. Nuomos pradžioje surašykite **perdavimo aktą** su skaitikliais ir esamais pažeidimais – tai apsaugos užstatą.

## 4. Nutraukimas

Nuomininkas sutartį gali nutraukti, **raštu įspėjęs prieš mėnesį** – net jei sutartis terminuota. Netesybos už šios teisės naudojimą neturėtų jos paneigti.

## 5. Deklaravimas

Jei reikia deklaruoti gyvenamąją vietą, paprašykite, kad nuomotojo sutikimas būtų sutartyje.

## Santrauka

Savininkas, aiškūs mokesčiai, užstatas ir aktas, mėnesio įspėjimo teisė.
''')

c('nuomos-pabaiga-ir-uzstatas','Nuomos pabaiga ir užstatas: kaip grąžinti butą be ginčo','Nuomos pabaiga',
 'Kaip baigti buto nuomą be ginčo: pranešimas prieš mėnesį, perdavimo aktas, skaitikliai, normalus nusidėvėjimas ir užstato grąžinimas.',
 'Įspėkite raštu prieš mėnesį, grąžinkite butą su aktu ir skaitiklių rodmenimis. Už normalų nusidėvėjimą nuomininkas neatsako.',
 'majoklis','nuomos-pabaiga',['pranesimas-apie-nuomos-nutraukima',NA,'susitarimas-nutraukti-nuoma'],
 ['nuomos pabaiga','užstato grąžinimas','buto grąžinimas','perdavimo aktas','normalus nusidėvėjimas'],[CK],
 [('Ar nuomotojas gali išskaičiuoti už nusidėvėjimą?','Už normalų nusidėvėjimą – ne. Išskaičiuoti galima tik pagrįstus reikalavimus, pavyzdžiui, už nuomininko kaltės pažeidimus ar neapmokėtas sąskaitas.'),
  ('Ar užstatą galima įskaityti į paskutinį mėnesį?','Tik jei taip susitarsite raštu.'),
  ('Kaip įrodyti buto būklę?','Perdavimo aktais nuomos pradžioje ir pabaigoje bei nuotraukomis.')],
'''
Nuomos pabaigoje dažniausiai ginčijamasi dėl užstato. Tvarkingas grąžinimas apsaugo abi šalis.

## 1. Pranešimas

Nuomininkas sutartį gali nutraukti, **raštu įspėjęs prieš vieną mėnesį**. Išsaugokite įrodymą, kada nuomotojas gavo pranešimą. Arba susitarkite dėl pabaigos – tada termino nereikia.

## 2. Grąžinimas su aktu

Grąžindami butą surašykite **perdavimo–priėmimo aktą**: skaitiklių rodmenys, raktai, įranga ir pažeidimai. Palyginkite su aktu nuomos pradžioje.

## 3. Normalus nusidėvėjimas

Už **normalų nusidėvėjimą** – išblukusius dažus, nusitrynusias grindis – nuomininkas neatsako. Už pažeidimus dėl savo kaltės – atsako.

## 4. Užstatas

Užstatas grąžinamas pagal sutartį, išskaičiavus tik **pagrįstus reikalavimus**. Jei sutartis nieko nenustato, susitarkite raštu, kada ir į kokią sąskaitą jis grąžinamas.

## Santrauka

Pranešimas prieš mėnesį, aktas su skaitikliais, nuotraukos ir aiškus užstato grąžinimas.
''')

c('nuomos-nutraukimas-susitarimu','Nuomos nutraukimas šalių susitarimu: greičiau ir be terminų','Nutraukimas susitarimu',
 'Kaip nutraukti buto nuomos sutartį šalių susitarimu: be įspėjimo termino, su konkrečia pabaigos data, užstato grąžinimu ir perdavimo aktu.',
 'Šalių susitarimu nuomą galima baigti bet kurią dieną. Įrašykite pabaigos ir grąžinimo datą bei užstatą.',
 'majoklis','nuomos-pabaiga',['susitarimas-nutraukti-nuoma',NA],
 ['nuomos nutraukimas','šalių susitarimas','nuomos pabaiga','užstatas','buto grąžinimas'],[CK],
 [('Ar reikia laikytis mėnesio įspėjimo?','Ne. Susitarimu galima pasirinkti bet kurią datą.'),
  ('Kas pasirašo susitarimą?','Visi nuomotojai ir visi nuomininkai.'),
  ('Ką įrašyti dėl užstato?','Kada ir į kokią sąskaitą jis grąžinamas ir ar iš jo kas nors išskaičiuojama.')],
'''
Kai abi šalys nori baigti nuomą, paprasčiausias kelias – **susitarimas**.

## 1. Kodėl susitarimas

Šalių susitarimu nuomos sutartį galima nutraukti **bet kurią dieną** – be mėnesio įspėjimo. Tai patogu, kai nuomininkas randa naują būstą arba nuomotojui reikia buto.

## 2. Ką įrašyti

Sutarties datą, buto adresą, **pabaigos dieną**, iki kada grąžinamas butas, kaip apmokamos paskutinio laikotarpio paslaugos ir kaip grąžinamas **užstatas**.

## 3. Grąžinimas

Grąžindami butą surašykite aktą su skaitiklių rodmenimis ir raktais.

## Santrauka

Susitarimas su konkrečiomis datomis, užstato sąlygos ir aktas grąžinant.
''')

c('subnuoma','Subnuoma: kaip subnuomoti kambarį ir ko reikalauja įstatymas','Subnuoma',
 'Norite subnuomoti kambarį ar butą? Kodėl reikia rašytinio nuomotojo ir šeimos narių sutikimo, kaip ilgai gali trukti subnuoma ir ką įrašyti į sutartį.',
 'Subnuomoti gyvenamąją patalpą galima tik gavus rašytinį nuomotojo ir kartu gyvenančių šeimos narių sutikimą. Subnuoma negali trukti ilgiau nei nuoma.',
 'majoklis','nuoma',['subnuomos-sutartis'],
 ['subnuoma','kambario subnuoma','nuomotojo sutikimas','subnuomos sutartis','buto subnuoma'],[CK],
 [('Ar reikia nuomotojo sutikimo?','Taip, rašytinio – ir kartu gyvenančių šeimos narių (Civilinio kodekso 6.595 str.).'),
  ('Kiek gali trukti subnuoma?','Ne ilgiau nei jūsų nuomos sutartis.'),
  ('Kas atsako už subnuomininką?','Nuomotojui už subnuomininko veiksmus atsakote jūs.')],
'''
Subnuoma padeda pasidalinti nuomos išlaidomis, bet be sutikimo ji gali kainuoti nuomos sutartį.

## 1. Sutikimas

Gyvenamąją patalpą subnuomoti galima tik gavus **rašytinį nuomotojo sutikimą** ir **kartu gyvenančių šeimos narių sutikimą**. Pirmiausia patikrinkite, ką apie subnuomą sako jūsų nuomos sutartis.

## 2. Terminas

Subnuoma **negali trukti ilgiau** nei jūsų nuomos sutartis. Baigiantis jūsų nuomai, baigiasi ir subnuoma.

## 3. Sutartis

Įrašykite, ar subnuomojamas kambarys ar visas butas, kokios patalpos naudojamos bendrai, mokestį, užstatą ir tvarkos taisykles. Pridėkite nuomotojo sutikimo kopiją.

## 4. Atsakomybė

Nuomotojui už subnuomininką **atsakote jūs** – rinkitės patikimą žmogų.

## Santrauka

Rašytinis sutikimas, terminas ne ilgesnis už nuomą, aiški sutartis.
''')

c('sutarties-atsisakymas-14-dienu','Sutarties atsisakymas: pirkinio internetu grąžinimas per 14 dienų','Atsisakymas per 14 dienų',
 'Kaip grąžinti internetu pirktą prekę per 14 dienų be priežasties: nuo kada skaičiuojamas terminas, kaip pranešti, kas apmoka grąžinimą ir kada grąžinami pinigai.',
 'Perkant internetu ar telefonu, sutarties galima atsisakyti per 14 dienų nuo prekės gavimo. Pakanka išsiųsti pranešimą iki termino pabaigos.',
 'pirkumi','atsisakymas',['sutarties-atsisakymo-forma','pretenzija'],
 ['14 dienų grąžinimas','sutarties atsisakymas','prekės grąžinimas','e. parduotuvė','nuotolinė sutartis'],[ATS,CK],
 [('Nuo kada skaičiuojamos 14 dienų?','Prekių atveju – nuo dienos, kai prekę gavote.'),
  ('Kada prekiautojas turi grąžinti pinigus?','Per 14 dienų nuo sužinojimo apie atsisakymą; jis gali palaukti, kol gaus prekę atgal arba įrodymą, kad ją išsiuntėte.'),
  ('Ar galima atsisakyti visų pirkinių?','Ne. Išimtys – pavyzdžiui, pagal užsakymą pagamintos prekės ar greitai gendantys produktai.')],
'''
Pirkote internetu ir persigalvojote? ES teisė leidžia atsisakyti sutarties **per 14 dienų be priežasties**.

## 1. Kada tai galioja

Teisė atsisakyti taikoma sutartims, sudarytoms **internetu, telefonu** ar **ne prekybos patalpose**. Parduotuvėje pirktos prekės grąžinimas priklauso nuo parduotuvės taisyklių.

## 2. Terminas

Prekių atveju 14 dienų skaičiuojama **nuo dienos, kai prekę gavote**. Pakanka, kad pranešimą išsiųstumėte iki paskutinės dienos.

## 3. Kaip pranešti

Išsiųskite **pranešimą apie sutarties atsisakymą** el. paštu ar registruotu laišku: prekė, užsakymo numeris, datos ir sąskaita pinigams grąžinti. Išsaugokite išsiuntimo įrodymą.

## 4. Prekės grąžinimas ir pinigai

Prekę grąžinkite per 14 dienų nuo atsisakymo. Prekiautojas grąžina visus mokėjimus, įskaitant įprasto pristatymo išlaidas, per 14 dienų. Tiesiogines grąžinimo išlaidas paprastai apmokate jūs, jei apie tai buvote informuoti.

## Santrauka

14 dienų nuo gavimo, rašytinis pranešimas, prekė atgal – pinigai grąžinami.
''')
print('ok2')
