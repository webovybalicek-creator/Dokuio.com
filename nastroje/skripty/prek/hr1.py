import sys; sys.path.insert(0,'/home/claude/skripty/prek')
from gen import w
PB='porezna-uprava.gov.hr/hr/kupac-u-tuzemstvu-rabljenog-motornog-vozila/4468'
# ---------------- car EN
def auto_en(moto=False):
  V='motorcycle' if moto else 'vehicle'
  return dict(
 nazev='Motorcycle Purchase Agreement' if moto else 'Car Purchase Agreement',
 nazevA='the motorcycle purchase agreement' if moto else 'the car purchase agreement',
 katalog={'popis':'Sale of a used motorcycle, scooter or quad between private persons.' if moto else 'Sale of a used car between private persons.',
  'slova':(['motorcycle purchase agreement','sell a motorbike','scooter sale','used motorcycle','kupoprodajni ugovor motocikl'] if moto else ['car purchase agreement','used car sale','vehicle sale contract','change of ownership','kupoprodajni ugovor auto'])},
 landing=dict(
  description=('Motorcycle purchase agreement for Croatia (kupoprodajni ugovor): OIB, VIN, mileage, defects, payment and handover time. Free bilingual PDF or Word.' if moto else
               'Used car purchase agreement for Croatia (kupoprodajni ugovor): OIB, VIN, mileage, defects, payment and handover time. Free bilingual PDF or Word.'),
  perex=f'For selling a used {"motorcycle or scooter" if moto else "car"} between private persons. With the handover time, known defects and the 15-day deadline for the change of ownership.',
  obsahPopis='Seven articles under the Obligations Act (Zakon o obveznim odnosima).',
  obsah=[('Parties','Seller and buyer with OIB (personal identification number).'),('Subject','Vehicle, VIN, registration plate.'),('Condition','Mileage and known defects.'),('Price and payment','Amount, cash or bank transfer, retention of title.'),('Handover','Date, time, keys, documents.'),('Change of ownership','15-day deadline and costs.')],
  online=['Amount in words in Croatian added automatically','VIN check','Reminder of the 15-day deadline','The handover report takes over the details'],
  hodiSe=[f'you are selling or buying a used {"motorcycle" if moto else "car"} from a private person','you want the price, condition and handover time in writing'],
  nehodiSe=['you are buying from a dealer – they have their own contract','the vehicle is leased or pledged'],
  po=[('Handover','Handover report with the time and mileage.'),('Change of ownership','The buyer within 15 days at a vehicle inspection station (stanica za tehnički pregled), paying the administrative fee.'),('Insurance','The seller informs the insurer.')],
  faq=[('Does the seller’s signature have to be certified?','No. According to the Tax Administration (Porezna uprava), the seller’s signature on the purchase agreement does not need to be certified by a notary.'),
       ('By when must ownership be transferred?','The new owner must register the vehicle in their name or deregister it within 15 days of acquiring it.'),
       ('Who pays the administrative fee?','The buyer, when changing ownership at the vehicle inspection station. The amount depends on the engine power and age of the vehicle.')],
  zakony='The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima) and information from the Tax Administration (Porezna uprava) on acquiring a used motor vehicle.'),
 pruvodce=dict(
  slovo={'n':'agreement','g':'agreement','a':'agreement','l':'agreement'},
  kroky={'strane':{'nazev':'Seller and buyer','popis':'Details as in the identity card. The OIB is required for the change of ownership.'},
         'vozilo':{'nazev':'Vehicle','popis':'Copy the details from the registration certificate (prometna dozvola).'},
         'cijena':{'nazev':'Price and payment'},'predaja':{'nazev':'Handover and signature'}},
  pole={'p_jmeno':{'popis':'Seller – full name','napoveda':'The owner entered in the registration certificate (prometna dozvola).','placeholder':'e.g. Ivan Horvat'},
   'p_oib':{'popis':'Seller’s OIB','napoveda':'11 digits, from the identity card.','placeholder':'e.g. 12345678901'},
   'p_adresa':{'popis':'Seller’s address','placeholder':'e.g. Ilica 12, 10000 Zagreb'},
   'k_jmeno':{'popis':'Buyer – full name','placeholder':'e.g. Ana Kovačević'},
   'k_oib':{'popis':'Buyer’s OIB','placeholder':'e.g. 10987654321'},
   'k_adresa':{'popis':'Buyer’s address','placeholder':'e.g. Riva 5, 21000 Split'},
   'znacka':{'popis':'Make and model','napoveda':'Fields D.1 and D.3 of the registration certificate.','placeholder':'e.g. Yamaha MT-07' if moto else 'e.g. Volkswagen Golf'},
   'vin':{'popis':'VIN (chassis number)','napoveda':'17 characters, field E of the registration certificate.'},
   'spz':{'popis':'Registration plate','placeholder':'e.g. ZG 1234-AB'},
   'rok':{'popis':'Year of manufacture','placeholder':'e.g. 2018'},
   'boja':{'popis':'Colour','placeholder':'e.g. siva metalik (metallic grey)'},
   'km':{'popis':'Odometer reading','napoveda':'Read it on the day of signing.','placeholder':'e.g. 154320'},
   'nedostaci':{'popis':'Known defects','napoveda':'State honestly what you know – the seller is not later liable for defects the buyer knew about.','moznosti':{'ne':'The seller is not aware of any defects','da':'The vehicle has known defects'}},
   'nedostaci_opis':{'popis':'Description of the defects','placeholder':'e.g. napuklo vjetrobransko staklo, ne radi klima (cracked windscreen, air conditioning not working)'},
   'cena':{'popis':'Purchase price (€)','napoveda':'We add the amount in words in Croatian ourselves.','placeholder':'e.g. 9500'},
   'placanje':{'popis':'Method of payment','moznosti':{'gotovina':'In cash on signing','racun':'To the seller’s bank account'}},
   'iban':{'popis':'Seller’s IBAN','placeholder':'HR00 0000 0000 0000 0000 0'},
   'rok_placanja':{'popis':'Payment by'},
   'predaja_datum':{'popis':'Date of handover'},
   'predaja_vrijeme':{'popis':'Time of handover','napoveda':'Important if a traffic fine arrives later.','placeholder':'e.g. 14:30'},
   'kljucevi':{'popis':'Number of keys','placeholder':'e.g. 2'},
   'misto':{'popis':'Place of signing','placeholder':'e.g. Zagreb'},
   'datum_podpisu':{'popis':'Date of signing'}},
  vysvetleni=['Who is entering into the agreement. The details must match the identity cards.','Which vehicle is being sold. The VIN is the most important item.','What the seller knows about the vehicle.','How much, how and by when. Ownership passes only when the full price has been paid.','When and with what the buyer takes over the vehicle.','Who does what at the vehicle inspection station and who pays.','Formalities.'],
  coDal=['Print the agreement in two copies (one for each party) and sign both.','Hand over the vehicle, keys and documents – ideally with a handover report stating the time of handover.','Buyer: within 15 days of acquisition, register the vehicle in your name at a vehicle inspection station (or deregister it) and pay the administrative fee.','Seller: inform your insurance company about the sale.'],
  kontrola=['The seller is entered as the owner in the registration certificate – compare the details with the identity card.','The VIN in the registration certificate must match the number on the vehicle.','The vehicle must not be leased or pledged – otherwise the seller cannot freely dispose of it.',f'The seller’s signature on the agreement for the change of ownership does not need to be certified by a notary ([Porezna uprava](https://{PB})).','When changing ownership at the vehicle inspection station, the buyer pays an administrative fee whose amount depends on the engine power and age of the vehicle.','Enter the date and time of handover: until the change of ownership, traffic offences may be sent to the seller, and the handover time proves that they no longer had the vehicle.','Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.','Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence.'],
  pripominky={'Promjena vlasništva vozila (kupac)':{'nazev':'Change of vehicle ownership (buyer)','popis':'15-day deadline from acquiring the vehicle – registration in the new owner’s name or deregistration.'}}),
 dokument=dict(nazev='Motorcycle Purchase Agreement' if moto else 'Motor Vehicle Purchase Agreement',podnadpis='concluded under the provisions of the Obligations Act on purchase agreements',podpisy={'vlevo':'Seller','vpravo':'Buyer'},
  clanky=[{'nadpis':'Parties','odstavce':['**Seller:** {{p_jmeno}}, OIB {{p_oib}}, address {{p_adresa}}','**Buyer:** {{k_jmeno}}, OIB {{k_oib}}, address {{k_adresa}}']},
   {'nadpis':'Subject of the agreement','odstavce':['The Seller sells and the Buyer buys the motor vehicle of make and model {{znacka}}, VIN {{vin}}, registration plate {{spz}}, year of manufacture {{rok}}, colour {{boja}} (hereinafter: the vehicle).','The Seller declares that they are the sole owner of the vehicle and that the vehicle is not encumbered with third-party rights, in particular that it is not subject to leasing or a pledge.']},
   {'nadpis':'Condition of the vehicle','odstavce':['The odometer reading on the day of signing is {{km}} km. The Seller is not aware that the odometer has been replaced or turned back.',{'uvodVzor':'Known defects (tick one option):','moznosti':{'ne':'The Seller is not aware of any defects of the vehicle.','da':'The Seller has informed the Buyer of the following defects of the vehicle: {{nedostaci_opis}}'}},'The Buyer declares that they have inspected the vehicle, are aware of its condition and buy it in that condition.']},
   {'nadpis':'Price and payment','odstavce':['The purchase price of the vehicle is **{{cena}}**.',{'uvodVzor':'Method of payment (tick one option):','moznosti':{'gotovina':'The Buyer paid the price in cash on signing this agreement. By signing, the Seller confirms receipt of the full amount.','racun':'The Buyer will pay the price to the Seller’s account IBAN {{iban}} no later than {{rok_placanja}}.'}},'The Seller retains ownership of the vehicle until the full purchase price has been paid.']},
   {'nadpis':'Handover of the vehicle','odstavce':['The Seller hands over the vehicle to the Buyer on {{predaja_datum}} at {{predaja_vrijeme}}, together with {{kljucevi}} keys, the registration certificate and the other vehicle documents.','On handover, the risk of loss of and damage to the vehicle passes to the Buyer. From that moment the Buyer is responsible for the use of the vehicle, including traffic offences.']},
   {'nadpis':'Change of ownership and costs','odstavce':['The Buyer undertakes to carry out the change of ownership, i.e. to register the vehicle in their name or deregister it, within 15 days of acquiring the vehicle.','The costs of the change of ownership, administrative fees and registration are borne by the Buyer.']},
   {'nadpis':'Final provisions','odstavce':['Matters not governed by this agreement are subject to the provisions of the Obligations Act.','The agreement is drawn up in two identical copies, one for each party. The parties have read and understood the agreement and sign it in acceptance.']}]))
# ---------------- car UK
def auto_uk(moto=False):
  return dict(
 nazev='Договір купівлі-продажу мотоцикла' if moto else 'Договір купівлі-продажу авто',
 nazevA='договір купівлі-продажу мотоцикла' if moto else 'договір купівлі-продажу авто',
 katalog={'popis':'Продаж вживаного мотоцикла, скутера чи квадроцикла між приватними особами.' if moto else 'Продаж вживаного автомобіля між приватними особами.',
  'slova':(['договір купівлі-продажу мотоцикла','продаж мотоцикла','продаж скутера','вживаний мотоцикл','kupoprodajni ugovor motocikl'] if moto else ['договір купівлі-продажу авто','продаж авто Хорватія','продаж вживаного автомобіля','зміна власника','kupoprodajni ugovor auto'])},
 landing=dict(
  description=('Договір купівлі-продажу мотоцикла в Хорватії (kupoprodajni ugovor): OIB, VIN, пробіг, недоліки, оплата й час передачі. Двомовний PDF або Word безкоштовно.' if moto else
               'Договір купівлі-продажу вживаного авто в Хорватії (kupoprodajni ugovor): OIB, VIN, пробіг, недоліки, оплата й час передачі. Двомовний PDF або Word безкоштовно.'),
  perex=f'Для продажу вживаного {"мотоцикла чи скутера" if moto else "автомобіля"} між приватними особами. З часом передачі, відомими недоліками та 15-денним строком для зміни власника.',
  obsahPopis='Сім статей за Законом про зобов’язальні відносини (Zakon o obveznim odnosima).',
  obsah=[('Сторони','Продавець і покупець з OIB (особистим ідентифікаційним номером).'),('Предмет','Транспортний засіб, VIN, номерний знак.'),('Стан','Пробіг і відомі недоліки.'),('Ціна й оплата','Сума, готівка чи переказ, збереження права власності.'),('Передача','Дата, час, ключі, документи.'),('Зміна власника','Строк 15 днів і витрати.')],
  online=['Сума словами хорватською – автоматично','Перевірка VIN','Нагадування про 15-денний строк','Акт приймання-передачі переймає дані'],
  hodiSe=[f'ви продаєте або купуєте вживаний {"мотоцикл" if moto else "автомобіль"} у приватної особи','ви хочете зафіксувати письмово ціну, стан і час передачі'],
  nehodiSe=['ви купуєте в автосалоні – там свій договір','транспортний засіб у лізингу чи під заставою'],
  po=[('Передача','Акт приймання-передачі з часом і пробігом.'),('Зміна власника','Покупець протягом 15 днів на станції техогляду (stanica za tehnički pregled) сплачує адміністративний збір.'),('Страхування','Продавець повідомляє страховика.')],
  faq=[('Чи треба засвідчувати підпис продавця?','Ні. За даними Податкової управи (Porezna uprava), підпис продавця на договорі купівлі-продажу не потрібно засвідчувати в нотаріуса.'),
       ('До якого строку треба переоформити власність?','Новий власник зобов’язаний протягом 15 днів від набуття зареєструвати транспортний засіб на себе або зняти його з обліку.'),
       ('Хто сплачує адміністративний збір?','Покупець – під час зміни власника на станції техогляду. Сума залежить від потужності та віку транспортного засобу.')],
  zakony='Зразок ґрунтується на хорватському Законі про зобов’язальні відносини (Zakon o obveznim odnosima) та інформації Податкової управи (Porezna uprava) про набуття вживаного транспортного засобу.'),
 pruvodce=dict(
  slovo={'n':'договір','g':'договору','a':'договір','l':'договорі'},
  kroky={'strane':{'nazev':'Продавець і покупець','popis':'Дані за посвідченням особи. OIB потрібен для зміни власника.'},
         'vozilo':{'nazev':'Транспортний засіб','popis':'Перепишіть дані зі свідоцтва про реєстрацію (prometna dozvola).'},
         'cijena':{'nazev':'Ціна й оплата'},'predaja':{'nazev':'Передача й підпис'}},
  pole={'p_jmeno':{'popis':'Продавець – ім’я та прізвище','napoveda':'Власник, записаний у свідоцтві про реєстрацію (prometna dozvola).','placeholder':'напр. Ivan Horvat'},
   'p_oib':{'popis':'OIB продавця','napoveda':'11 цифр, з посвідчення особи.','placeholder':'напр. 12345678901'},
   'p_adresa':{'popis':'Адреса продавця','placeholder':'напр. Ilica 12, 10000 Zagreb'},
   'k_jmeno':{'popis':'Покупець – ім’я та прізвище','placeholder':'напр. Ana Kovačević'},
   'k_oib':{'popis':'OIB покупця','placeholder':'напр. 10987654321'},
   'k_adresa':{'popis':'Адреса покупця','placeholder':'напр. Riva 5, 21000 Split'},
   'znacka':{'popis':'Марка й модель','napoveda':'Поля D.1 і D.3 свідоцтва про реєстрацію.','placeholder':'напр. Yamaha MT-07' if moto else 'напр. Volkswagen Golf'},
   'vin':{'popis':'VIN (номер шасі)','napoveda':'17 знаків, поле E свідоцтва про реєстрацію.'},
   'spz':{'popis':'Номерний знак','placeholder':'напр. ZG 1234-AB'},
   'rok':{'popis':'Рік випуску','placeholder':'напр. 2018'},
   'boja':{'popis':'Колір','placeholder':'напр. siva metalik (сірий металік)'},
   'km':{'popis':'Показник одометра','napoveda':'Зчитайте в день підписання.','placeholder':'напр. 154320'},
   'nedostaci':{'popis':'Відомі недоліки','napoveda':'Чесно вкажіть, що знаєте, – за недоліки, про які покупець знав, продавець згодом не відповідає.','moznosti':{'ne':'Продавцю не відомі недоліки','da':'Транспортний засіб має відомі недоліки'}},
   'nedostaci_opis':{'popis':'Опис недоліків','placeholder':'напр. napuklo vjetrobransko staklo, ne radi klima (тріснуте лобове скло, не працює кондиціонер)'},
   'cena':{'popis':'Ціна (€)','napoveda':'Суму словами хорватською допишемо самі.','placeholder':'напр. 9500'},
   'placanje':{'popis':'Спосіб оплати','moznosti':{'gotovina':'Готівкою під час підписання','racun':'На рахунок продавця'}},
   'iban':{'popis':'IBAN продавця','placeholder':'HR00 0000 0000 0000 0000 0'},
   'rok_placanja':{'popis':'Оплата не пізніше'},
   'predaja_datum':{'popis':'Дата передачі'},
   'predaja_vrijeme':{'popis':'Час передачі','napoveda':'Важливо, якщо згодом прийде штраф за порушення ПДР.','placeholder':'напр. 14:30'},
   'kljucevi':{'popis':'Кількість ключів','placeholder':'напр. 2'},
   'misto':{'popis':'Місце підписання','placeholder':'напр. Zagreb'},
   'datum_podpisu':{'popis':'Дата підписання'}},
  vysvetleni=['Хто укладає договір. Дані мають збігатися з посвідченнями особи.','Який транспортний засіб продається. Найважливіший – VIN.','Що продавець знає про транспортний засіб.','Скільки, як і до коли. Право власності переходить лише після сплати всієї ціни.','Коли й з чим покупець отримує транспортний засіб.','Хто що робить на станції техогляду та хто платить.','Формальності.'],
  coDal=['Роздрукуйте договір у двох примірниках (по одному для кожної сторони) і підпишіть обидва.','Передайте транспортний засіб, ключі й документи – найкраще з актом приймання-передачі із зазначенням часу.','Покупець: протягом 15 днів від набуття зареєструйте транспортний засіб на себе на станції техогляду (або зніміть з обліку) і сплатіть адміністративний збір.','Продавець: повідомте свою страхову компанію про продаж.'],
  kontrola=['Продавець записаний як власник у свідоцтві про реєстрацію – порівняйте дані з посвідченням особи.','VIN у свідоцтві про реєстрацію має збігатися з номером на транспортному засобі.','Транспортний засіб не може бути в лізингу чи під заставою – інакше продавець не може ним вільно розпоряджатися.',f'Підпис продавця на договорі для зміни власника не потрібно засвідчувати в нотаріуса ([Porezna uprava](https://{PB})).','Під час зміни власника на станції техогляду покупець сплачує адміністративний збір, сума якого залежить від потужності та віку транспортного засобу.','Укажіть дату й час передачі: до зміни власника порушення ПДР можуть надходити продавцю, а час передачі доводить, що транспортного засобу в нього вже не було.','Перевірте особу іншої сторони за посвідченням особи та перепишіть ім’я й OIB точно як у документі.','Готівку перерахуйте під час підписання; більші суми краще платити переказом – банківське підтвердження найкращий доказ.'],
  pripominky={'Promjena vlasništva vozila (kupac)':{'nazev':'Зміна власника транспортного засобу (покупець)','popis':'15 днів від набуття – реєстрація на нового власника або зняття з обліку.'}}),
 dokument=dict(nazev='Договір купівлі-продажу мотоцикла' if moto else 'Договір купівлі-продажу транспортного засобу',podnadpis='укладений відповідно до положень Закону про зобов’язальні відносини про договір купівлі-продажу',podpisy={'vlevo':'Продавець','vpravo':'Покупець'},
  clanky=[{'nadpis':'Сторони договору','odstavce':['**Продавець:** {{p_jmeno}}, OIB {{p_oib}}, адреса {{p_adresa}}','**Покупець:** {{k_jmeno}}, OIB {{k_oib}}, адреса {{k_adresa}}']},
   {'nadpis':'Предмет договору','odstavce':['Продавець продає, а Покупець купує транспортний засіб марки й моделі {{znacka}}, VIN {{vin}}, номерний знак {{spz}}, рік випуску {{rok}}, колір {{boja}} (далі – транспортний засіб).','Продавець заявляє, що є єдиним власником транспортного засобу і що транспортний засіб не обтяжений правами третіх осіб, зокрема не є предметом лізингу чи застави.']},
   {'nadpis':'Стан транспортного засобу','odstavce':['Показник одометра в день підписання договору становить {{km}} км. Продавцю не відомо, щоб одометр замінювали чи скручували.',{'uvodVzor':'Відомі недоліки (позначте один варіант):','moznosti':{'ne':'Продавцю не відомі недоліки транспортного засобу.','da':'Продавець повідомив Покупця про такі недоліки транспортного засобу: {{nedostaci_opis}}'}},'Покупець заявляє, що оглянув транспортний засіб, йому відомий його стан і він купує його в такому стані.']},
   {'nadpis':'Ціна й оплата','odstavce':['Ціна транспортного засобу становить **{{cena}}**.',{'uvodVzor':'Спосіб оплати (позначте один варіант):','moznosti':{'gotovina':'Покупець сплатив ціну готівкою під час підписання цього договору. Своїм підписом Продавець підтверджує отримання всієї суми.','racun':'Покупець сплатить ціну на рахунок Продавця IBAN {{iban}} не пізніше {{rok_placanja}}.'}},'Продавець зберігає право власності на транспортний засіб до сплати всієї ціни.']},
   {'nadpis':'Передача транспортного засобу','odstavce':['Продавець передає Покупцю транспортний засіб {{predaja_datum}} о {{predaja_vrijeme}} разом із {{kljucevi}} ключами, свідоцтвом про реєстрацію та іншою документацією.','З передачею транспортного засобу на Покупця переходить ризик його загибелі та пошкодження. Відтоді Покупець відповідає за користування транспортним засобом, зокрема за порушення ПДР.']},
   {'nadpis':'Зміна власника та витрати','odstavce':['Покупець зобов’язується протягом 15 днів від набуття транспортного засобу здійснити зміну власника, тобто зареєструвати транспортний засіб на себе або зняти його з обліку.','Витрати на зміну власника, адміністративні збори та реєстрацію несе Покупець.']},
   {'nadpis':'Прикінцеві положення','odstavce':['До всього, що не врегульовано цим договором, застосовуються положення Закону про зобов’язальні відносини.','Договір складено у двох однакових примірниках, по одному для кожної сторони. Сторони прочитали договір, зрозуміли його й на знак згоди підписали.']}]))
w('hr','en','kupoprodajni-ugovor-automobil','HR-AUTO','1.0',auto_en())
w('hr','uk','kupoprodajni-ugovor-automobil','HR-AUTO','1.0',auto_uk())
def moto(d, j):
  L=d['landing']; p=d['pruvodce']['pole']
  if j=='en':
    p['znacka']['placeholder']='e.g. Honda CB500F'; p['km']['placeholder']='e.g. 24300'
    p['vin']['napoveda']='17 characters, field E of the registration certificate. On a motorcycle it is usually stamped into the frame at the steering head.'
    p['nedostaci_opis']['placeholder']='e.g. istrošen lanac, ogrebotine na spremniku (worn chain, scratches on the tank)'
    d['pruvodce']['kontrola'].append('List the equipment and modifications (panniers, crash bars, exhaust) and check that modifications requiring approval are entered in the registration certificate.')
    L['perex']='For selling a motorcycle, scooter, moped or quad between private persons. With the handover time, known defects and the 15-day deadline for the change of ownership.'
    L['description']='Purchase agreement for a motorcycle, scooter or quad in Croatia: OIB, VIN, mileage, defects, price and the 15-day ownership deadline. Free bilingual PDF or Word.'
    L['hodiSe']=['you are selling or buying a motorcycle, scooter or quad from a private person','the vehicle is registered and has a registration certificate','you want the price, condition and handover time in writing']
    L['nehodiSe']=['you are buying from a dealer – they have their own contract','the motorcycle is leased or pledged']
    L['faq']=[L['faq'][0], L['faq'][1]]
    L['faq'][0]={'q':'Is the agreement for a motorcycle different from one for a car?','a':'Legally no – both are purchase agreements for a motor vehicle. The practical difference: the VIN is stamped into the frame, and it is worth listing the equipment (panniers, exhaust) in the agreement.'}
  else:
    p['znacka']['placeholder']='напр. Honda CB500F'; p['km']['placeholder']='напр. 24300'
    p['vin']['napoveda']='17 знаків, поле E свідоцтва про реєстрацію. На мотоциклі зазвичай вибитий на рамі біля рульової колонки.'
    p['nedostaci_opis']['placeholder']='напр. istrošen lanac, ogrebotine na spremniku (зношений ланцюг, подряпини на баку)'
    d['pruvodce']['kontrola'].append('Укажіть обладнання й переробки (кофри, дуги безпеки, вихлоп) і перевірте, чи переробки, які потребують погодження, внесені до свідоцтва про реєстрацію.')
    L['perex']='Для продажу мотоцикла, скутера, мопеда чи квадроцикла між приватними особами. З часом передачі, відомими недоліками та 15-денним строком для зміни власника.'
    L['description']='Договір купівлі-продажу мотоцикла, скутера чи квадроцикла в Хорватії: OIB, VIN, пробіг, недоліки, ціна й 15-денний строк. Двомовний PDF або Word безкоштовно.'
    L['hodiSe']=['ви продаєте або купуєте мотоцикл, скутер чи квадроцикл у приватної особи','транспортний засіб зареєстрований і має свідоцтво про реєстрацію','ви хочете зафіксувати письмово ціну, стан і час передачі']
    L['nehodiSe']=['ви купуєте в продавця-підприємця – у нього свій договір','мотоцикл у лізингу чи під заставою']
    L['title']='Купівля-продаж мотоцикла Хорватія {rok} – зразок PDF безкоштовно'
    L['faq']=[{'q':'Чи відрізняється договір на мотоцикл від договору на авто?','a':'Юридично ні – обидва є договорами купівлі-продажу транспортного засобу. Практична різниця: VIN вибитий на рамі, а обладнання (кофри, вихлоп) варто вписати в договір.'}, L['faq'][1]]
  return d
w('hr','en','kupoprodajni-ugovor-motocikl','HR-MOTOCIKL','1.0',moto(auto_en(True),'en'))
w('hr','uk','kupoprodajni-ugovor-motocikl','HR-MOTOCIKL','1.0',moto(auto_uk(True),'uk'))
