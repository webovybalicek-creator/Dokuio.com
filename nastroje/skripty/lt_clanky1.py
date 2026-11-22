import sys; sys.path.insert(0,'/home/claude/skripty')
from lt_zdroje import *
A='automobilio-pirkimo-pardavimo-sutartis'; AK='automobilio-perdavimo-aktas'; PK='pinigu-gavimo-pakvitavimas'

c('naudoto-automobilio-pardavimas','Naudoto automobilio pardavimas: sutartis, atsiskaitymas ir Regitra','Automobilio pardavimas',
 'Kaip parduoti naudotą automobilį fiziniam asmeniui: pirkimo–pardavimo sutartis, saugus atsiskaitymas, perdavimo laikas ir deklaravimas Regitroje.',
 'Sutartis su VIN ir SDK, pinigai pavedimu ir perdavimo aktas su laiku. Pirkėjas deklaruoja per 5 darbo dienas, jūs patvirtinate per 5 darbo dienas.',
 'auto','automobilio-pardavimas',[A,AK,PK],
 ['automobilio pardavimas','pirkimo pardavimo sutartis','SDK','Regitra','naudotas automobilis'],[REG,CK,GRYN],
 [('Ar automobilio pardavimui reikia notaro?','Ne. Tarp fizinių asmenų pakanka rašytinės pirkimo–pardavimo sutarties ir nuosavybės pasikeitimo deklaravimo Regitroje.'),
  ('Kas pirmas deklaruoja Regitroje?','Pirkėjas per 5 darbo dienas nuo sandorio pateikia įgijimo deklaraciją, o pardavėjas per 5 darbo dienas ją patvirtina.'),
  ('Ar galima imti grynuosius?','Pagal vieną sandorį grynaisiais galima atsiskaityti ne daugiau kaip 5 000 €. Didesnę sumą imkite pavedimu.')],
'''
Automobilio pardavimą tarp fizinių asmenų sudaro dvi dalys: **jūsų susitarimas** (kaina, būklė, perdavimas) ir **nuosavybės pasikeitimo deklaravimas Regitroje**. Jei abi atliksite tvarkingai, vėliau negausite pranešimų apie automobilį, kuris jau nebe jūsų.

## 1. Prieš pardavimą

Pasiruoškite registracijos liudijimą, visus raktelius ir serviso knygelę. Įsitikinkite, kad turite galiojantį **savininko deklaravimo kodą (SDK)** – be jo pirkėjas negalės deklaruoti įsigijimo.

## 2. Pirkimo–pardavimo sutartis

Sutartyje įrašykite abiejų šalių vardą, pavardę, **asmens kodą** ir adresą, automobilio markę, registracijos numerį, **VIN** ir SDK, ridą, žinomus trūkumus ir kainą žodžiais.

Raštu pažymėti trūkumai vėliau negali tapti ginčo priežastimi, nes pirkėjas apie juos žinojo. Todėl būkite sąžiningi ir konkretūs.

## 3. Atsiskaitymas

Saugiausia – **banko pavedimas** prieš perduodant raktelius. Grynaisiais pagal vieną sandorį galima atsiskaityti ne daugiau kaip **5 000 €**; jei mokama grynaisiais, perskaičiuokite pinigus ir pasirašykite pakvitavimą.

## 4. Perdavimas ir laikas

Surašykite **perdavimo aktą** su data ir **laiku**, rida, rakteliais ir dokumentais. Kol nuosavybės pasikeitimas nedeklaruotas, savininku laikomas registruotas asmuo – aktas parodo, kieno rankose buvo automobilis.

## 5. Deklaravimas Regitroje

Pirkėjas per **5 darbo dienas** nuo sandorio pateikia įgijimo deklaraciją, o jūs per **5 darbo dienas** ją patvirtinate – internetu arba padalinyje. Regitra rekomenduoja raktelius atiduoti tik po abiejų deklaracijų. Tada pirkėjas gauna naują SDK ir, norėdamas važiuoti, per 10 kalendorinių dienų registruoja automobilį savo vardu.

## Santrauka

Sutartis su VIN ir SDK, pinigai pavedimu, aktas su laiku ir patvirtinimas Regitroje tą pačią dieną.
''')

c('naudoto-automobilio-pirkimas','Naudoto automobilio pirkimas: ką patikrinti prieš mokant','Naudoto automobilio pirkimas',
 'Perkate naudotą automobilį iš fizinio asmens? Ką patikrinti: savininką, VIN, SDK, ridą, areštus ir įkeitimus bei ką įrašyti į sutartį.',
 'Pardavėjas turi būti registruotas savininkas, VIN turi sutapti, o SDK – galioti. Mokėkite tik tada, kai įgijimą galima deklaruoti iš karto.',
 'auto','automobilio-pirkimas',[A,AK],
 ['naudoto automobilio pirkimas','VIN','SDK','rida','automobilio patikra'],[REG,CK],
 [('Ką daryti, jei VIN nesutampa?','Nepirkite. VIN registracijos liudijime turi būti toks pat kaip ant automobilio.'),
  ('Kas yra SDK ir kodėl jis svarbus?','Savininko deklaravimo kodas. Be galiojančio SDK įsigijimo nepavyks deklaruoti ir automobilio – įregistruoti savo vardu.'),
  ('Ar pardavėjas atsako už trūkumus?','Už paslėptus trūkumus, apie kuriuos jis žinojo ir nutylėjo, paprastai taip. Žinomus trūkumus įrašykite į sutartį – tada aišku, ką pirkote.')],
'''
Geras naudotas automobilis yra protingas pirkinys – jei svarbiausius dalykus patikrinate **prieš** atiduodami pinigus.

## 1. Pardavėjas ir dokumentai

Palyginkite pardavėjo asmens dokumentą su registracijos liudijimu: pardavėjas turi būti **registruotas savininkas**. Jei automobilį parduoda kitas asmuo, prašykite įgaliojimo.

## 2. VIN ir SDK

VIN yra registracijos liudijimo laukelyje E ir ant paties automobilio. Jie turi sutapti **tiksliai**. Paprašykite SDK ir jo galiojimą patikrinkite Regitros elektroninėse paslaugose – ten pat matysite, ar automobilis neareštuotas ir neįkeistas.

## 3. Rida ir būklė

Patikrinkite serviso įrašus ir techninės apžiūros galiojimą. Jei abejojate, važiuokite į servisą apžiūrai dar prieš pasirašydami.

## 4. Sutartis

Į sutartį įrašykite ridą, žinomus trūkumus, kainą žodžiais ir atsiskaitymo būdą. Pasirašę iš karto pateikite **įgijimo deklaraciją** – tam turite 5 darbo dienas.

## 5. Po pirkimo

Kai pardavėjas patvirtina perleidimą, gaunate naują SDK. Norėdami važiuoti, automobilį per 10 kalendorinių dienų registruokite savo vardu ir pasirūpinkite privalomuoju draudimu.

## Santrauka

Savininkas pagal liudijimą, sutampantis VIN, galiojantis SDK ir jokių apribojimų – tik tada mokėkite.
''')

c('savininko-pasikeitimas-regitroje','Savininko pasikeitimas Regitroje: deklaracijos, SDK ir terminai','Savininko pasikeitimas',
 'Kaip deklaruoti automobilio savininko pasikeitimą Regitroje: pirkėjo įgijimo ir pardavėjo perleidimo deklaracijos, SDK ir 5 darbo dienų terminai.',
 'Pirkėjas deklaruoja įgijimą per 5 darbo dienas, pardavėjas patvirtina per 5 darbo dienas. Tada naujas savininkas gauna SDK ir gali registruoti automobilį.',
 'auto','regitra',[A,AK],
 ['Regitra','savininko pasikeitimas','SDK','įgijimo deklaracija','eregitra'],[REG,CK],
 [('Kiek laiko turi pirkėjas ir pardavėjas?','Pirkėjas – 5 darbo dienas nuo sandorio, pardavėjas – 5 darbo dienas nuo pirkėjo deklaracijos pateikimo.'),
  ('Ar būtina registruoti automobilį savo vardu?','Jei automobiliu ketinate dalyvauti eisme – taip, per 10 kalendorinių dienų nuo deklaravimo. Priešingu atveju jis išregistruojamas.'),
  ('Ar deklaruoti galima internetu?','Taip, per Regitros elektronines paslaugas arba atvykus į padalinį.')],
'''
Lietuvoje automobilio savininko pasikeitimas vyksta per **deklaracijas Regitroje**. Sutartis tarp šalių yra pagrindas, bet valstybė naują savininką mato tik po deklaravimo.

## 1. Pirkėjo įgijimo deklaracija

Pirmasis veikia **pirkėjas**: per **5 darbo dienas** nuo sandorio jis pateikia įgijimo deklaraciją. Jai reikia galiojančio SDK, kurį pirkėjui duoda pardavėjas.

## 2. Pardavėjo perleidimo deklaracija

Tada **pardavėjas** per **5 darbo dienas** nuo pirkėjo deklaracijos ją patvirtina. Pardavėjui tai svarbu, kad su automobiliu jis nebebūtų siejamas.

## 3. Naujas SDK

Tik abiem šalims atlikus deklaracijas naujam savininkui suteikiamas **naujas SDK**. Be jo transporto priemonės įregistruoti savo vardu neįmanoma.

## 4. Registracija

Jei automobiliu važiuosite, per **10 kalendorinių dienų** nuo deklaravimo jį registruokite savo vardu. Prieš važiuodami pasirūpinkite privalomuoju civilinės atsakomybės draudimu.

## 5. Patarimas dėl raktelių

Regitra rekomenduoja raktelių neatiduoti, kol nedeklaruotas abipusis įgijimas ir perleidimas. Taip abi šalys apsaugotos.

## Santrauka

Sutartis → pirkėjo deklaracija (5 d. d.) → pardavėjo patvirtinimas (5 d. d.) → naujas SDK → registracija.
''')

c('bauda-po-automobilio-pardavimo','Bauda po automobilio pardavimo: kaip įrodyti, kad vairavo pirkėjas','Bauda po pardavimo',
 'Gavote baudą ar pranešimą jau pardavę automobilį? Kaip padeda perdavimo aktas su laiku, sutartis ir deklaravimas Regitroje.',
 'Iki deklaravimo savininku laikomas registruotas asmuo. Sutartis ir aktas su tiksliu laiku įrodo, kas tuo metu vairavo automobilį.',
 'auto','automobilio-pardavimas',[AK,A],
 ['bauda po pardavimo','perdavimo aktas','automobilio pardavimas','Regitra','greičio matuoklis'],[REG,CK],
 [('Kodėl bauda atėjo man?','Kol nuosavybės pasikeitimas nedeklaruotas Regitroje, savininku laikomas registruotas asmuo, todėl pranešimai siunčiami jam.'),
  ('Ką pateikti institucijai?','Sutarties ir perdavimo akto kopiją, iš kurių matyti tikslus perdavimo laikas ir pirkėjas.'),
  ('Kaip to išvengti?','Deklaruokite ir patvirtinkite savininko pasikeitimą tą pačią dieną ir raktelius atiduokite po deklaracijų.')],
'''
Pardavėte automobilį, o po savaitės gaunate pranešimą apie greičio viršijimą? Taip nutinka, kai deklaravimas užtrunka arba perdavimo laikas neužfiksuotas.

## 1. Kodėl taip nutinka

Kol nuosavybės pasikeitimas **nedeklaruotas Regitroje**, valstybė savininku laiko registruotą asmenį. Pranešimai ir baudos siunčiami jam.

## 2. Kas padeda

Svarbiausi įrodymai – **pirkimo–pardavimo sutartis** ir **perdavimo aktas su tiksliu laiku**. Iš jų matyti, kad pažeidimo metu automobilį jau valdė pirkėjas.

## 3. Ką daryti gavus pranešimą

Atsakykite institucijai per nurodytą terminą, pridėkite sutarties ir akto kopijas, nurodykite pirkėjo duomenis. Patikrinkite, ar deklaracijos Regitroje baigtos.

## 4. Kaip apsisaugoti ateityje

Deklaracijas atlikite **tą pačią dieną** kartu su pirkėju – internetu tai užtrunka kelias minutes. Raktelius atiduokite tik po abiejų deklaracijų.

## Santrauka

Aktas su laiku, sutartis su pirkėjo duomenimis ir greitas deklaravimas – geriausia apsauga nuo svetimų baudų.
''')

c('motociklo-pardavimas','Motociklo pardavimas: sutartis, VIN ant rėmo ir Regitra','Motociklo pardavimas',
 'Kaip parduoti motociklą ar motorolerį: pirkimo–pardavimo sutartis, VIN ant rėmo, SDK, įranga ir nuosavybės pasikeitimo deklaravimas Regitroje.',
 'Motociklui taikomos tos pačios taisyklės kaip automobiliui: sutartis su VIN ir SDK, deklaracijos Regitroje per 5 + 5 darbo dienas.',
 'auto','automobilio-pardavimas',['motociklo-pirkimo-pardavimo-sutartis',AK],
 ['motociklo pardavimas','motoroleris','VIN rėme','SDK','Regitra'],[REG,CK],
 [('Ar motociklui reikia kitokios sutarties?','Ne. Teisinis tekstas toks pat kaip automobiliui, skiriasi tik aprašymas – VIN rėme, įranga, pakeitimai.'),
  ('Kur rasti motociklo VIN?','Dažniausiai jis įkaltas rėme prie vairo. Jis turi sutapti su registracijos liudijimu.'),
  ('Ar reikia deklaruoti Regitroje?','Taip. Pirkėjas pateikia įgijimo deklaraciją per 5 darbo dienas, pardavėjas ją patvirtina per 5 darbo dienas.')],
'''
Motociklo pardavimas vyksta taip pat kaip automobilio, tik verta atkreipti dėmesį į kelis motociklams būdingus dalykus.

## 1. VIN ant rėmo

Motociklo VIN paprastai **įkaltas rėme** prie vairo. Patikrinkite, ar jis sutampa su registracijos liudijimu ir ar nėra pažeidimo žymių.

## 2. Įranga ir pakeitimai

Į sutartį įrašykite kofrus, apsaugas, kitą duslintuvą ar kitus pakeitimus. Pakeitimams, kuriems reikia leidimo, patikrinkite, ar jie įregistruoti.

## 3. Sutartis ir atsiskaitymas

Įrašykite VIN, SDK, ridą, žinomus trūkumus ir kainą. Grynaisiais – ne daugiau kaip 5 000 € pagal sandorį.

## 4. Deklaravimas

Pirkėjas per **5 darbo dienas** pateikia įgijimo deklaraciją, jūs per **5 darbo dienas** ją patvirtinate. Perdavimo aktas su laiku apsaugo nuo vėlesnių baudų.

## Santrauka

VIN rėme, įranga sutartyje, deklaracijos Regitroje tą pačią dieną.
''')

c('automobilio-pardavimas-dalimis','Automobilio pardavimas dalimis tarp fizinių asmenų: kaip apsisaugoti','Pardavimas dalimis',
 'Parduodate automobilį ir pirkėjas mokės dalimis? Kaip tai užfiksuoti: sutartis, skolos pripažinimas, grąžinimo grafikas ir deklaravimo laikas.',
 'Pardavimas dalimis – tai pasitikėjimo klausimas. Įrašykite grafiką, pasekmes vėluojant ir apsvarstykite, kada deklaruoti perleidimą Regitroje.',
 'auto','automobilio-pardavimas',[A,'susitarimas-del-skolos-grazinimo','skolos-pripazinimas'],
 ['automobilis dalimis','išsimokėtinai','skolos grąžinimas','pirkimo pardavimo sutartis','Regitra'],[CK,REG],
 [('Ar galima parduoti automobilį dalimis?','Taip, šalys gali susitarti dėl mokėjimo dalimis. Įrašykite grafiką ir pasekmes, jei įmokos vėluoja.'),
  ('Kada patvirtinti perleidimą Regitroje?','Įgijimo deklaraciją pirkėjas turi pateikti per 5 darbo dienas nuo sandorio, o jūs patvirtinti per 5 darbo dienas. Todėl dalimis parduodama tik tam, kuo pasitikite.'),
  ('Kaip įrodyti skolą?','Skolos pripažinimu ar susitarimu dėl grąžinimo – jie taip pat nutraukia ieškinio senatį.')],
'''
Kartais pirkėjas neturi visos sumos iš karto. Pardavimas dalimis įmanomas, bet reikalauja aiškių taisyklių.

## 1. Svarbiausia rizika

Deklaracijų terminai Regitroje trumpi: po jų savininku tampa pirkėjas, net jei dar nesumokėjo visko. Todėl parduokite dalimis **tik žmogui, kuriuo pasitikite**, ir prašykite didelės pirmosios įmokos.

## 2. Ką įrašyti

Į sutartį įrašykite visą kainą, pradinę įmoką ir likučio grafiką. Atskirai pasirašykite **susitarimą dėl skolos grąžinimo** su įmokų dydžiu, datomis ir pasekmėmis vėluojant.

## 3. Mokėjimai

Visas įmokas imkite **banko pavedimu** – išrašas įrodo kiekvieną mokėjimą.

## 4. Jei pirkėjas nemoka

Siųskite raginimą sumokėti. Susitarimas yra skolos pripažinimas, todėl ieškinio senatis skaičiuojama iš naujo, o teisme jis tampa svariu įrodymu.

## Santrauka

Didelė pradinė įmoka, rašytinis grafikas, mokėjimai pavedimu ir pasitikėjimas pirkėju.
''')

c('automobilio-dovanojimas-seimoje','Automobilio dovanojimas šeimoje: sutartis, mokesčiai ir Regitra','Automobilio dovanojimas',
 'Dovanojate automobilį vaikui ar sutuoktiniui? Dovanojimo sutarties forma, kada reikia notaro, pajamų mokestis ir deklaravimas Regitroje.',
 'Automobiliui notarinė forma privaloma tik tada, kai jo vertė viršija 14 500 €. Dovana iš artimų giminaičių neapmokestinama.',
 'auto','automobilio-pardavimas',['dovanojimo-sutartis',AK],
 ['automobilio dovanojimas','dovanojimo sutartis','dovana vaikui','Regitra','GPM'],[CK,DOV,REG],
 [('Ar automobilio dovanojimui reikia notaro?','Tik jei dovanos vertė didesnė kaip 14 500 €. Virš 1 500 € sutartis turi būti rašytinė.'),
  ('Ar apdovanotasis moka mokestį?','Dovanos iš sutuoktinio, vaikų, tėvų, senelių, brolių, seserų ir vaikaičių neapmokestinamos. Iš kitų asmenų neapmokestinama 2 500 € per metus.'),
  ('Ar reikia deklaruoti Regitroje?','Taip, nuosavybės pasikeitimas deklaruojamas taip pat kaip pardavimo atveju.')],
'''
Automobilio dovanojimas šeimoje dažnai paprastesnis nei pardavimas, tačiau turi savų formalumų.

## 1. Sutarties forma

Kai dovanojama daugiau kaip **1 500 €**, sutartis turi būti **rašytinė**. Jei automobilio vertė viršija **14 500 €**, dovanojimo sutartis turi būti **notarinė** – tada mūsų pavyzdys tinka kaip juodraštis.

## 2. Mokesčiai

Dovanos iš **sutuoktinio, vaikų, tėvų, senelių, brolių, seserų ir vaikaičių** pajamų mokesčiu neapmokestinamos. Iš kitų asmenų per metus neapmokestinama 2 500 €, o viršijančią dalį reikia deklaruoti ir apmokestinti.

## 3. Regitra

Ir dovanojant nuosavybės pasikeitimą reikia **deklaruoti Regitroje**: apdovanotasis pateikia įgijimo deklaraciją, dovanotojas ją patvirtina.

## 4. Perdavimo aktas

Net šeimoje verta surašyti trumpą aktą su laiku ir rida – jis apsaugo nuo nesusipratimų dėl baudų.

## Santrauka

Rašytinė sutartis (notarinė virš 14 500 €), artimiems – be mokesčio, deklaracijos Regitroje.
''')

c('paskola-draugui','Paskola draugui: kaip paskolinti pinigus ir juos atgauti','Paskola draugui',
 'Skolinate pinigus draugui ar giminaičiui? Kada paskolos sutartis turi būti rašytinė, kaip perduoti pinigus, palūkanos ir ką daryti, jei negrąžina.',
 'Virš 600 € paskolos sutartis turi būti rašytinė. Pinigus perveskite bankui, grąžinimo datas įrašykite, o palūkanas – tik jei dėl jų susitarėte.',
 'nauda','paskola',['paskolos-sutartis',PK,'skolos-pripazinimas'],
 ['paskola draugui','paskolos sutartis','paskola tarp fizinių asmenų','palūkanos','skolos grąžinimas'],[CK,GRYN],
 [('Ar paskolos sutartis turi būti rašytinė?','Fizinių asmenų paskolos sutartis turi būti rašytinė, kai suma viršija 600 €.'),
  ('Kokios palūkanos, jei draugas vėluoja?','Jei nesusitarta kitaip – 5 % metinių už pavėluotą sumą (Civilinio kodekso 6.210 str.).'),
  ('Per kiek laiko galima reikalauti skolos?','Bendrasis ieškinio senaties terminas – 10 metų. Skolininkui pripažinus skolą, jis skaičiuojamas iš naujo.')],
'''
Paskola draugui – geras darbas, bet ir dažna ginčų priežastis. Keli paprasti žingsniai apsaugo ir pinigus, ir draugystę.

## 1. Rašytinė sutartis

Fizinių asmenų paskolos sutartis turi būti **rašytinė**, kai suma viršija **600 €**. Įrašykite sumą žodžiais, grąžinimo terminą ar grafiką ir tai, ar mokamos palūkanos.

## 2. Pinigų perdavimas

Pinigus **perveskite bankui** su paskirtimi „paskola pagal sutartį“. Grynaisiais pagal vieną sandorį galima perduoti ne daugiau kaip 5 000 €; tada paskolos gavėjas pasirašo pakvitavimą.

## 3. Palūkanos

Palūkanos mokamos tik jei dėl jų susitarėte. Už pavėluotą grąžinimą, jei sutartis nenustato kitaip, mokamos **5 % metinės palūkanos**.

## 4. Jei draugas negrąžina

Pirmiausia pasikalbėkite ir pasiūlykite **grąžinimą dalimis**. Jei nepavyksta – siųskite raginimą su nauju terminu, o tada galite kreiptis į teismą.

## Santrauka

Rašytinė sutartis, pavedimas bankui, aiškūs terminai ir ramus pokalbis, jei kas nors vėluoja.
''')

c('skolininkas-nemoka','Skolininkas nemoka: raginimas sumokėti ir kiti žingsniai','Skolininkas nemoka',
 'Kas daryti, kai skolininkas nemoka: raginimas su terminu, skolos pripažinimas, grąžinimas dalimis, palūkanos ir kreipimasis į teismą.',
 'Pradėkite nuo rašytinio raginimo su nauju terminu. Jei skolininkas sutinka mokėti dalimis – pasirašykite susitarimą, kuris kartu yra skolos pripažinimas.',
 'nauda','skolos',['raginimas-sumoketi','susitarimas-del-skolos-grazinimo','skolos-pripazinimas'],
 ['skolininkas nemoka','raginimas sumokėti','skolos išieškojimas','teismo įsakymas','palūkanos'],[CK],
 [('Ar raginimas nutraukia senatį?','Ne. Ieškinio senatį nutraukia ieškinio pareiškimas arba skolininko skolos pripažinimas.'),
  ('Kokių palūkanų galiu reikalauti?','Jei nesusitarta kitaip – 5 % metinių, tarp verslininkų – 6 %.'),
  ('Ar yra greitesnis teismo procesas?','Piniginiams reikalavimams yra supaprastintas teismo įsakymo išdavimo procesas.')],
'''
Skolininkas vėluoja ir neatsiliepia? Eikite žingsnis po žingsnio – dauguma skolų sugrąžinama dar iki teismo.

## 1. Rašytinis raginimas

Išsiųskite **raginimą sumokėti** su suma, pagrindu, nauju terminu (paprastai 7–14 dienų) ir sąskaitos numeriu. Siųskite registruotu laišku ar el. paštu ir išsaugokite įrodymą.

## 2. Pasiūlykite grafiką

Jei skolininkas negali sumokėti visko iš karto, pasirašykite **susitarimą dėl skolos grąžinimo**. Jis kartu yra skolos pripažinimas – ieškinio senatis skaičiuojama iš naujo.

## 3. Palūkanos

Už pavėluotą mokėjimą galima reikalauti **5 % metinių palūkanų**, jei nesusitarta kitaip.

## 4. Teismas

Jei nieko nepadeda, kreipkitės į teismą. Piniginiams reikalavimams yra **supaprastintas teismo įsakymo procesas**. Turėkite sutartį, raginimą ir mokėjimų įrodymus.

## Santrauka

Raginimas → grafikas ir pripažinimas → teismas. Visus žingsnius dokumentuokite raštu.
''')
print('ok1')
