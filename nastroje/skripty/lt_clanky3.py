import sys; sys.path.insert(0,'/home/claude/skripty')
from lt_zdroje import *

c('preke-su-trukumu','Prekė su trūkumu: 2 metų garantija ir ko reikalauti iš pardavėjo','Prekė su trūkumu',
 'Prekė sugedo? Ką reikalauti iš pardavėjo pagal 2 metų teisinę garantiją: taisymo, pakeitimo, kainos sumažinimo ar pinigų grąžinimo, ir kaip pateikti pretenziją.',
 'Pardavėjas atsako už trūkumus, paaiškėjusius per 2 metus. Jei trūkumas paaiškėja per metus, laikoma, kad jis buvo nuo pradžių.',
 'pirkumi','garantija',['pretenzija','sutarties-atsisakymo-forma'],
 ['prekė su trūkumu','garantija 2 metai','pretenzija','reklamacija','prekės taisymas'],[GAR,CK],
 [('Kiek laiko pardavėjas atsako už trūkumus?','Bent 2 metus nuo prekės pristatymo.'),
  ('Ką reikalauti pirmiausia?','Nemokamai pataisyti ar pakeisti prekę. Jei tai neįmanoma ar nepadaroma per protingą laiką – sumažinti kainą ar grąžinti pinigus.'),
  ('Ar reikia įrodyti, kad trūkumas buvo nuo pradžių?','Ne, jei trūkumas paaiškėja per metus nuo pristatymo – tada priešingai turi įrodyti pardavėjas.')],
'''
Sugedusi prekė – nemalonu, bet įstatymas jus saugo. Svarbu žinoti, ko ir kaip reikalauti.

## 1. Teisinė garantija

Pardavėjas atsako už prekės trūkumus, kurie buvo pristatymo metu ir paaiškėjo per **2 metus**. Tai teisinė garantija – ji galioja nepriklausomai nuo gamintojo komercinės garantijos.

## 2. Įrodinėjimas

Jei trūkumas paaiškėja **per metus** nuo pristatymo, laikoma, kad jis buvo jau tada – priešingai turi įrodyti pardavėjas. Vėliau įrodinėti gali tekti jums.

## 3. Ko reikalauti

Pirmiausia – **pataisyti** arba **pakeisti** prekę nemokamai. Jei tai neįmanoma ar nepadaroma per protingą laiką – **sumažinti kainą** arba **nutraukti sutartį** ir grąžinti pinigus.

## 4. Kaip pateikti pretenziją

Pateikite **rašytinę pretenziją**: prekė, pirkimo data, trūkumas ir jūsų reikalavimas. Pridėkite čekį ir nuotraukas. Praneškite kuo greičiau po to, kai trūkumą pastebėjote.

## Santrauka

2 metai atsakomybės, pirmi metai – be įrodinėjimo, pirmiausia taisymas ar pakeitimas.
''')

c('pardavejas-atmeta-pretenzija','Pardavėjas atmeta pretenziją: ką daryti toliau','Pretenzija atmesta',
 'Pardavėjas atsisakė pataisyti ar pakeisti prekę? Kaip pagrįsti reikalavimą, kreiptis į Valstybinę vartotojų teisių apsaugos tarnybą ir ką pasiruošti.',
 'Paprašykite atsisakymo raštu, surinkite įrodymus ir kreipkitės į VVTAT – vartojimo ginčus ji nagrinėja ne teismo tvarka.',
 'pirkumi','garantija',['pretenzija'],
 ['pretenzija atmesta','VVTAT','vartotojų teisės','ginčas su pardavėju','ekspertizė'],[GAR,CK],
 [('Kur kreiptis, jei pardavėjas atsisako?','Į Valstybinę vartotojų teisių apsaugos tarnybą (VVTAT), kuri nagrinėja vartojimo ginčus ne teismo tvarka.'),
  ('Ar pardavėjas gali atsisakyti dėl to, kad praėjo 6 mėnesiai?','Teisinė garantija trunka 2 metus. Per pirmus metus trūkumas preziumuojamas buvęs nuo pradžių.'),
  ('Ar verta užsakyti ekspertizę?','Jei ginčijama trūkumo priežastis, nepriklausoma ekspertizė gali būti svarbus įrodymas.')],
'''
Pardavėjas atmetė pretenziją? Tai dar ne pabaiga.

## 1. Atsakymas raštu

Paprašykite, kad pardavėjas **atsisakymą ir jo priežastis** pateiktų raštu. Be to sunku ginčytis toliau.

## 2. Įvertinkite priežastis

Dažniausi argumentai – „naudojote netinkamai“ arba „praėjo garantija“. Prisiminkite: teisinė garantija trunka **2 metus**, o per **pirmus metus** trūkumas laikomas buvusiu nuo pradžių.

## 3. Įrodymai

Surinkite čekį, pretenziją, susirašinėjimą, nuotraukas. Jei ginčijama trūkumo priežastis, gali padėti **nepriklausoma ekspertizė**.

## 4. VVTAT

Kreipkitės į **Valstybinę vartotojų teisių apsaugos tarnybą** – ji vartojimo ginčus nagrinėja ne teismo tvarka. Pridėkite visus dokumentus.

## Santrauka

Atsisakymas raštu, įrodymai, VVTAT – o tik tada teismas.
''')

c('pardavimas-pagal-skelbima','Pardavimas pagal skelbimą: sutartis, atsiskaitymas ir sukčiai','Pardavimas pagal skelbimą',
 'Parduodate ar perkate daiktą pagal skelbimą? Kaip užfiksuoti sandorį sutartimi, saugiai atsiskaityti ir atpažinti sukčius su netikromis nuorodomis.',
 'Trumpa sutartis su būkle ir trūkumais, atsiskaitymas akis į akį ar pavedimu ir jokių nuorodų „pinigams gauti“ – taip išvengsite problemų.',
 'pirkumi','skelbimas',['pirkimo-pardavimo-sutartis','pinigu-gavimo-pakvitavimas'],
 ['pardavimas pagal skelbimą','sukčiai','pirkimo pardavimo sutartis','atsiskaitymas','naudotas daiktas'],[CK,GRYN],
 [('Ar reikia sutarties parduodant daiktą?','Ne visada, bet ji naudinga. Sandoriai virš 1 500 € sudaromi raštu, išskyrus įvykdomus iš karto.'),
  ('Kaip atpažinti sukčių?','Jei „pirkėjas“ siunčia nuorodą, kurioje reikia įvesti kortelės duomenis, kad gautumėte pinigus – tai apgaulė.'),
  ('Ar už naudotą daiktą atsakau kaip parduotuvė?','Ne, privatus pardavėjas nėra prekiautojas, tačiau už nutylėtus žinomus trūkumus atsakyti gali.')],
'''
Pardavimas pagal skelbimą dažniausiai sklandus, jei laikotės kelių taisyklių.

## 1. Sutartis

Trumpa **pirkimo–pardavimo sutartis** su daikto aprašymu, būkle, žinomais trūkumais ir kaina apsaugo abi šalis. Sandoriai virš 1 500 € sudaromi raštu, išskyrus tuos, kurie įvykdomi iš karto.

## 2. Atsiskaitymas

Saugiausia – susitikti ir atsiskaityti **akis į akį** arba sulaukti **pavedimo** įskaitymo prieš perduodant daiktą. Grynaisiais pagal sandorį – ne daugiau kaip 5 000 €.

## 3. Sukčiai

Niekada neįveskite kortelės duomenų per „pirkėjo“ atsiųstą nuorodą „pinigams gauti“. Pinigams gauti užtenka sąskaitos numerio.

## 4. Trūkumai

Žinomus trūkumus įrašykite – už tai, apie ką pirkėjas žinojo, neatsakote.

## Santrauka

Sutartis, saugus atsiskaitymas ir jokių įtartinų nuorodų.
''')

c('daikto-paskolinimas-draugui','Daikto paskolinimas draugui: panaudos sutartis ir pažeidimai','Daikto paskolinimas',
 'Skolinate draugui priekabą, įrankius ar automobilį? Kaip panaudos sutartis padeda užfiksuoti būklę, grąžinimą ir atsakomybę už pažeidimus.',
 'Panauda – neatlygintinas naudojimasis daiktu. Užrašykite būklę, terminą ir kas atsako už sugadinimą.',
 'pirkumi','panauda',['panaudos-sutartis','automobilio-perdavimo-aktas'],
 ['panauda','daikto paskolinimas','panaudos sutartis','pažeidimai','grąžinimas'],[CK],
 [('Kuo panauda skiriasi nuo nuomos?','Panauda neatlygintina. Jei imamas mokestis, tai nuoma.'),
  ('Ar draugas gali daiktą perleisti kitam?','Ne be jūsų sutikimo.'),
  ('Kas apmoka įprastą priežiūrą?','Įprastai – panaudos gavėjas, jei nesusitarta kitaip.')],
'''
Paskolinti daiktą draugui – paprasta, bet sugadinimas gali sugadinti ir draugystę.

## 1. Panaudos sutartis

**Panauda** – tai daikto perdavimas **neatlygintinai** naudotis. Jei imate mokestį, tai jau nuoma.

## 2. Ką užrašyti

Daiktą, jo **būklę** perdavimo metu, vertę, naudojimo tikslą, **grąžinimo terminą** ir vietą.

## 3. Naudojimas

Panaudos gavėjas daiktu naudojasi rūpestingai ir pagal paskirtį, **neperduoda jo kitiems** be jūsų sutikimo ir apmoka įprastą priežiūrą.

## 4. Grąžinimas

Grąžinant patikrinkite daiktą kartu. Normalus nusidėvėjimas – normalu; dėl kaltės atsiradę pažeidimai atlyginami.

## Santrauka

Raštu būklė, terminas ir atsakomybė – ir draugystė lieka.
''')

c('sutartis-su-meistru','Sutartis su meistru: darbų aprašymas, terminas ir trūkumai','Sutartis su meistru',
 'Užsakote remontą? Ką įrašyti į rangos sutartį: darbų apimtį, medžiagas, terminą, kainą, avansą, priėmimą ir trūkumų šalinimą.',
 'Tikslus darbų aprašymas, terminas, nedidelis avansas ir priėmimas su trūkumų sąrašu – pagrindas be ginčų.',
 'pakalpojumi','meistrai',['rangos-sutartis','raginimas-sumoketi'],
 ['sutartis su meistru','rangos sutartis','remontas','avansas','darbų priėmimas'],[CK],
 [('Kiek avanso mokėti?','Įstatymas to nenustato. Saugiau nedidelis avansas medžiagoms, likusi suma – priėmus darbus.'),
  ('Kas, jei meistras vėluoja?','Nustatykite protingą papildomą terminą; jam praėjus be rezultato galima nutraukti sutartį.'),
  ('Kaip elgtis su papildomais darbais?','Juos atlikite ir apmokėkite tik pagal rašytinį susitarimą.')],
'''
Remontas be sutarties – dažnas ginčų šaltinis. Rangos sutartis viską susidėlioja į vietas.

## 1. Darbų aprašymas

Kuo tiksliau – tuo geriau: kokie darbai, kiek kvadratinių metrų, kokios medžiagos ir kas jas perka.

## 2. Terminai

Įrašykite pradžios ir pabaigos datas bei tai, kas bus vėlavimo atveju.

## 3. Kaina ir avansas

Įrašykite bendrą kainą ir ar įskaičiuotas PVM. Avansą mokėkite **nedidelį**, likusią sumą – **priėmę darbus**. Papildomi darbai – tik raštu.

## 4. Priėmimas ir trūkumai

Darbus priimkite kartu, trūkumus užrašykite akte. Rangovas juos pašalina per protingą terminą.

## 5. Kas yra rangovas

Patikrinkite, ar meistras registruotas kaip įmonė ar dirba pagal individualią veiklą, o statybos darbams – ar nereikia statybą leidžiančio dokumento.

## Santrauka

Aprašymas, terminai, mažas avansas ir priėmimas su aktu.
''')

c('isejimas-is-darbo','Išėjimas iš darbo: pareiškimas ir 20 dienų įspėjimas','Išėjimas iš darbo',
 'Kaip išeiti iš darbo savo iniciatyva Lietuvoje: rašytinis pareiškimas, įspėjimas prieš 20 kalendorinių dienų, atšaukimas per 3 darbo dienas ir galutinis atsiskaitymas.',
 'Darbuotojas darbo sutartį nutraukia rašytiniu pareiškimu, įspėjęs darbdavį ne vėliau kaip prieš 20 kalendorinių dienų.',
 'darbs','isejimas-is-darbo',['pareiskimas-del-darbo-sutarties-nutraukimo'],
 ['išėjimas iš darbo','prašymas atleisti','20 dienų įspėjimas','Darbo kodekso 55 straipsnis','galutinis atsiskaitymas'],[DK],
 [('Per kiek laiko reikia įspėti?','Ne vėliau kaip prieš 20 kalendorinių dienų (Darbo kodekso 55 str.).'),
  ('Ar galiu pareiškimą atšaukti?','Taip, per tris darbo dienas nuo pateikimo; vėliau – tik darbdaviui sutikus.'),
  ('Ar galiu išeiti greičiau?','Susitarę su darbdaviu – taip, tada sutartis nutraukiama šalių susitarimu.')],
'''
Išeiti iš darbo savo iniciatyva Lietuvoje paprasta, jei laikotės formos ir termino.

## 1. Rašytinis pareiškimas

Darbuotojas darbo sutartį nutraukia **rašytiniu pareiškimu**. Tai taikoma tiek neterminuotai, tiek terminuotai sutarčiai.

## 2. 20 dienų įspėjimas

Darbdavį reikia įspėti **ne vėliau kaip prieš 20 kalendorinių dienų**. Sutartis baigiasi pasibaigus įspėjimo terminui.

## 3. Atšaukimas

Pareiškimą galite **atšaukti per tris darbo dienas** nuo jo padavimo. Vėliau – tik darbdaviui sutikus.

## 4. Greičiau – susitarus

Jei norite išeiti anksčiau, susitarkite su darbdaviu – tada sutartis nutraukiama **šalių susitarimu**.

## 5. Atsiskaitymas

Darbdavys ne vėliau kaip paskutinę darbo dieną įformina sutarties pabaigą. Patikrinkite darbo užmokestį ir **kompensaciją už nepanaudotas atostogas**.

## Santrauka

Raštu, prieš 20 kalendorinių dienų, 3 darbo dienos apsigalvoti.
''')

c('vaikas-keliauja-be-tevu','Vaikas keliauja be tėvų: kada reikia sutikimo ir notaro','Vaiko kelionė',
 'Vaikas vyksta į stovyklą ar pas senelius užsienyje? Kada užtenka paprasto sutikimo, kada reikia notaro patvirtinto tėvų sutikimo ir ką jame nurodyti.',
 'Šengeno erdvėje notarinis sutikimas neprivalomas. Už Šengeno erdvės vaikui be tėvų reikia notaro patvirtinto tėvų sutikimo.',
 'gimene','vaiko-kelione',['tevu-sutikimas-del-vaiko-keliones'],
 ['vaikas keliauja be tėvų','tėvų sutikimas','notarinis sutikimas','Šengeno erdvė','vaiko kelionė'],[VAIK,NOT],
 [('Ar reikia abiejų tėvų sutikimo?','Laikinai išvykti su vaiku į užsienį be kito iš tėvų sutikimo galima. Abiejų sutikimas reikalingas keičiant vaiko gyvenamosios vietos valstybę.'),
  ('Kada reikia notaro?','Kai vaikas be tėvų keliauja į valstybę, nepriklausančią Šengeno erdvei. Tėvams išsiskyrus pakanka vieno iš jų sutikimo.'),
  ('Ką nurodyti sutikime?','Vaiko ir lydinčio asmens vardą, pavardę, gimimo datą, dokumento numerį ir galiojimą, kelionės valstybes ir laikotarpį.')],
'''
Stovyklos, sporto varžybos ar atostogos su seneliais – vaikai vis dažniau keliauja be tėvų.

## 1. Kelionė su vienu iš tėvų

Laikinai išvykti su vaiku į užsienį **be kito iš tėvų sutikimo** galima. Kito iš tėvų sutikimas ar teismo sprendimas reikalingas tik tada, kai keičiama vaiko **gyvenamosios vietos valstybė**.

## 2. Vaikas be tėvų Šengeno erdvėje

Keliaujant Šengeno erdvėje **notarinis sutikimas neprivalomas**. Vis dėlto paprastas rašytinis sutikimas praverčia, jei jo paprašo pareigūnai, avialinija ar viešbutis.

## 3. Už Šengeno erdvės

Kai vaikas be tėvų keliauja į valstybę, **nepriklausančią Šengeno erdvei**, reikia **notaro patvirtinto tėvų sutikimo**. Tėvams išsiskyrus pakanka vieno iš jų sutikimo. Kreiptis galima į bet kurį notarų biurą – vizitą planuokite iš anksto.

## 4. Ką nurodyti

Vaiko ir lydinčio asmens vardą, pavardę, gimimo datą, **dokumento numerį ir galiojimą**, kelionės valstybes ir laikotarpį.

## Santrauka

Šengene – užtenka paprasto sutikimo, už jo ribų – notaras.
''')

c('igaliojimas-kada-notaras','Įgaliojimas: kada pakanka paprasto, o kada reikia notaro','Įgaliojimas',
 'Kada užtenka paprasto rašytinio įgaliojimo, o kada jį turi patvirtinti notaras, ką įrašyti, kiek jis galioja ir kaip jį atšaukti.',
 'Paprastas rašytinis įgaliojimas tinka daugeliui reikalų. Sandoriams, kuriems būtina notarinė forma, ir įgaliojimas turi būti notarinis.',
 'igaliojimas','igaliojimas',['igaliojimas','deklaracija'],
 ['įgaliojimas','notarinis įgaliojimas','paprastas įgaliojimas','įgaliojimo atšaukimas','įgaliotinis'],[CK],
 [('Kada reikia notaro?','Kai įgaliojama sudaryti sandorį, kuriam būtina notarinė forma, pavyzdžiui, perleisti nekilnojamąjį turtą.'),
  ('Ar bankas priims paprastą įgaliojimą?','Bankai ir kai kurios įstaigos dažnai reikalauja notaro patvirtinto įgaliojimo ar savos formos – pasitikrinkite iš anksto.'),
  ('Kaip atšaukti įgaliojimą?','Bet kada praneškite įgaliotiniui ir įstaigoms, kur jis pateiktas.')],
'''
Įgaliojimas leidžia kitam žmogui veikti jūsų vardu – atsiimti siuntą, pateikti prašymą ar pasirašyti dokumentą.

## 1. Paprastas įgaliojimas

Daugeliui kasdienių reikalų pakanka **paprasto rašytinio įgaliojimo**: kas įgalioja, ką, kokius veiksmus ir iki kada.

## 2. Kada reikia notaro

Įgaliojimas sudaryti sandorius, kuriems **būtina notarinė forma** (pavyzdžiui, nekilnojamojo turto perleidimas), turi būti **patvirtintas notaro**. Be to, bankai ir kai kurios įstaigos gali reikalauti notarinio įgaliojimo ar savos formos.

## 3. Ką įrašyti

Kuo **konkrečiau** – tuo geriau. Transporto priemonės atveju – registracijos numeris ir VIN. Nurodykite, ar įgaliotinis gali perįgalioti kitą asmenį, ir galiojimo terminą.

## 4. Atšaukimas

Įgaliojimą galite **atšaukti bet kada** – praneškite įgaliotiniui ir įstaigoms, kur jis pateiktas.

## Santrauka

Paprastas – kasdieniams reikalams, notarinis – kai to reikalauja sandoris ar įstaiga.
''')
print('ok3')
