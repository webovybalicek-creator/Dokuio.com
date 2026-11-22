from moto_all import *
E,U='en','uk'
def de_like(z,car,cn,cu,law_en,law_uk,extra_faq_en=None,extra_faq_uk=None):
    pass
# ---------- DE
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Purchase Agreement Germany {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Німеччина {rok} – зразок PDF безкоштовно',
      description=('Free agreement for a private motorcycle, scooter or quad sale in Germany: VIN, mileage, accidents, exclusion of liability (Section 444 BGB). Bilingual PDF.' if en else
                   'Договір купівлі-продажу мотоцикла, скутера чи квадроцикла між приватними особами в Німеччині: VIN, пробіг, аварії, виключення відповідальності. Двомовний PDF безкоштовно.'),
      perex=('For the private sale of a used motorcycle, scooter or quad in Germany – with mileage, accidents, accessories and an exclusion of liability.' if en else
             'Для приватного продажу вживаного мотоцикла, скутера чи квадроцикла в Німеччині – з пробігом, аваріями, аксесуарами й виключенням відповідальності.'),
      hodiSe=(['you are selling or buying a motorcycle, scooter or quad privately','the vehicle is registered','you want the price, condition and handover in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, скутер чи квадроцикл у приватної особи','транспортний засіб зареєстрований','ви хочете письмово зафіксувати ціну, стан і передання']),
      nehodiSe=(['you are buying from a dealer – they have their own contracts and must give a statutory warranty','the motorcycle is leased or still financed'] if en else
                ['ви купуєте в дилера – у нього власні договори й обов’язкова гарантія','мотоцикл у лізингу або ще не виплачений кредит']),
      faq=([('Does the agreement differ from a car purchase agreement?','Not legally – both are a purchase agreement for a motor vehicle. In practice it differs: the VIN (FIN) is stamped into the frame, and accessories such as cases or an exhaust should be written into the agreement.'),
            ('Does the template also work for a moped with an insurance plate (Versicherungskennzeichen)?','Yes. Small mopeds with an insurance plate have no registration certificate – simply leave those fields empty.')] if en else
           [('Чи відрізняється договір від договору на авто?','Юридично ні – обидва є договором купівлі-продажу транспортного засобу. На практиці так: VIN (FIN) вибито на рамі, а аксесуари, як-от кофри чи вихлоп, варто вписати в договір.'),
            ('Чи підходить зразок для мопеда зі страховим номерним знаком (Versicherungskennzeichen)?','Так. Мопеди зі страховим знаком не мають свідоцтва про реєстрацію – відповідні поля просто залиште порожніми.')]))
    run('de','kaufvertrag-gebrauchtwagen','kaufvertrag-motorrad',j,L,
        ['motorcycle sale','sell a motorcycle','buy a motorcycle','scooter','quad','motorbike','Motorrad verkaufen','Kaufvertrag Motorrad'] if en else ['продаж мотоцикла','купівля мотоцикла','скутер','квадроцикл','мотоцикл','Motorrad verkaufen','Kaufvertrag Motorrad','motorcycle'],
        'Private sale of a motorcycle, scooter or quad.' if en else 'Приватний продаж мотоцикла, скутера чи квадроцикла.',
        'maengel','e.g. Kettensatz verschlissen, Tank verkratzt (chain set worn, tank scratched)' if en else 'напр. Kettensatz verschlissen, Tank verkratzt (зношений ланцюговий комплект, подряпаний бак)','4500',ACC_DE)
# ---------- AT
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Purchase Agreement Austria {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Австрія {rok} – зразок PDF безкоштовно',
      description=('Free agreement for a private motorcycle, moped or quad sale under the ABGB: VIN, mileage, warranty exclusion, Typenschein, Pickerl. Bilingual PDF or Word.' if en else
                   'Договір купівлі-продажу мотоцикла, мопеда чи квадроцикла між приватними особами за ABGB: VIN, пробіг, виключення гарантії, Typenschein, Pickerl. Двомовний PDF.'),
      perex=('Private sale of a used motorcycle, moped or quad under the Austrian General Civil Code (ABGB) – with mileage, accessories, warranty exclusion and notes on deregistration and registration.' if en else
             'Приватний продаж вживаного мотоцикла, мопеда чи квадроцикла за австрійським Загальним цивільним кодексом (ABGB) – з пробігом, аксесуарами, виключенням гарантії й порадами щодо зняття з обліку та реєстрації.'),
      hodiSe=(['you are selling or buying a motorcycle, moped or quad privately','the vehicle is registered','you want the price, condition and handover in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, мопед чи квадроцикл у приватної особи','транспортний засіб зареєстрований','ви хочете письмово зафіксувати ціну, стан і передання']),
      nehodiSe=(['you are buying from a dealer – they have their own contracts and must give a warranty','the motorcycle is leased or still financed'] if en else
                ['ви купуєте в дилера – у нього власні договори й обов’язкова гарантія','мотоцикл у лізингу або ще не виплачений кредит']),
      faq=([('Does the agreement differ from a car purchase agreement?','Not legally – both are a purchase agreement for a motor vehicle under the ABGB. In practice it differs: the VIN is stamped into the frame, and accessories such as cases or an exhaust should be written into the agreement.')] if en else
           [('Чи відрізняється договір від договору на авто?','Юридично ні – обидва є договором купівлі-продажу транспортного засобу за ABGB. На практиці так: VIN вибито на рамі, а аксесуари, як-от кофри чи вихлоп, варто вписати в договір.')]))
    run('at','kaufvertrag-gebrauchtwagen','kaufvertrag-motorrad',j,L,
        ['motorcycle sale','sell a motorcycle','buy a motorcycle','moped','scooter','quad','Motorrad verkaufen','Kaufvertrag Motorrad Österreich'] if en else ['продаж мотоцикла','купівля мотоцикла','мопед','скутер','квадроцикл','Motorrad verkaufen','Kaufvertrag Motorrad Österreich','motorcycle'],
        'Private sale of a motorcycle, moped or quad.' if en else 'Приватний продаж мотоцикла, мопеда чи квадроцикла.',
        'maengel','e.g. Kettensatz verschlissen, Tank verkratzt (chain set worn, tank scratched)' if en else 'напр. Kettensatz verschlissen, Tank verkratzt (зношений ланцюговий комплект, подряпаний бак)','4500',ACC_AT)
# ---------- CH
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Purchase Agreement Switzerland {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Швейцарія {rok} – зразок PDF безкоштовно',
      description=('Free agreement for a private sale of a used motorcycle, scooter or quad under the Swiss Code of Obligations: chassis number, MFK, warranty, plates. Bilingual PDF.' if en else
                   'Договір купівлі-продажу вживаного мотоцикла, скутера чи квадроцикла за швейцарським Зобов’язальним правом: номер шасі, MFK, гарантія, номери. Двомовний PDF.'),
      perex=('Private sale of a used motorcycle, scooter or quad under the Swiss Code of Obligations – with mileage, accessories, warranty and notes on number plates and registration.' if en else
             'Приватний продаж вживаного мотоцикла, скутера чи квадроцикла за швейцарським Зобов’язальним правом – з пробігом, аксесуарами, гарантією й порадами щодо номерних знаків і реєстрації.'),
      hodiSe=(['you are selling or buying a motorcycle, scooter or quad privately','the vehicle has a vehicle registration document (Fahrzeugausweis)','you want the price, condition and handover in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, скутер чи квадроцикл у приватної особи','транспортний засіб має свідоцтво про реєстрацію (Fahrzeugausweis)','ви хочете письмово зафіксувати ціну, стан і передання']),
      nehodiSe=(['you are buying from a garage or dealer – they have their own contracts','the motorcycle is leased and the leasing company has not agreed'] if en else
                ['ви купуєте в автомайстерні чи дилера – у них власні договори','мотоцикл у лізингу, а лізингова компанія не погодилася']),
      faq=([('Does the agreement differ from a car purchase agreement?','Not legally – both are a purchase agreement under Art. 184 et seq. of the Code of Obligations. In practice it differs: the chassis number is stamped into the frame, and accessories such as cases or an exhaust should be written into the agreement.'),
            ('Do the number plates go with the motorcycle?','No. The plates belong to the registered keeper (Halter). The seller keeps them; the buyer needs their own.')] if en else
           [('Чи відрізняється договір від договору на авто?','Юридично ні – обидва є договором купівлі-продажу за ст. 184 і наст. Зобов’язального права. На практиці так: номер шасі вибито на рамі, а аксесуари, як-от кофри чи вихлоп, варто вписати в договір.'),
            ('Чи переходять номерні знаки разом із мотоциклом?','Ні. Номерні знаки належать власникові-утримувачу (Halter). Продавець залишає їх собі, покупцеві потрібні власні.')]))
    run('ch','kaufvertrag-auto','kaufvertrag-motorrad',j,L,
        ['motorcycle sale','sell a motorcycle','used motorcycle','scooter','quad','Motorrad verkaufen','Occasion Motorrad','Kaufvertrag Motorrad Schweiz'] if en else ['продаж мотоцикла','купівля мотоцикла','скутер','квадроцикл','мотоцикл','Motorrad verkaufen','Kaufvertrag Motorrad Schweiz','motorcycle'],
        'Private sale of a motorcycle, scooter or quad.' if en else 'Приватний продаж мотоцикла, скутера чи квадроцикла.',
        'maengel','e.g. Kettensatz verschlissen, Tank verkratzt (chain set worn, tank scratched)' if en else 'напр. Kettensatz verschlissen, Tank verkratzt (зношений ланцюговий комплект, подряпаний бак)','4500',ACC_CH)
# ---------- PL
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Sale Agreement Poland {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Польща {rok} – зразок PDF безкоштовно',
      description=('Free sale agreement for a motorcycle, scooter or quad in Poland: VIN, mileage, defects, payment, PCC-3 and notice of sale. Bilingual PDF or Word.' if en else
                   'Договір купівлі-продажу мотоцикла, скутера чи квадроцикла в Польщі: VIN, пробіг, недоліки, оплата, PCC-3 і повідомлення про продаж. Двомовний PDF безкоштовно.'),
      perex=('For selling a motorcycle, scooter, moped or quad between private individuals in Poland. Fill it in online or download a blank template.' if en else
             'Для продажу мотоцикла, скутера, мопеда чи квадроцикла між приватними особами в Польщі. Заповніть онлайн або завантажте порожній зразок.'),
      hodiSe=(['you are selling or buying a motorcycle, scooter, moped or quad from a private individual','the vehicle is registered and has a registration certificate','you want the price, condition and handover of the vehicle in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, скутер, мопед чи квадроцикл у приватної особи','транспортний засіб зареєстрований і має свідоцтво про реєстрацію','ви хочете письмово зафіксувати ціну, стан і передання транспортного засобу']),
      nehodiSe=(['you are buying from a second-hand dealer (komis) or a dealer – they have their own agreement','the motorcycle is not registered (e.g. a pit bike) – an ordinary sale agreement for goods is enough','the motorcycle is leased or bought on credit with a pledge'] if en else
                ['ви купуєте в комісійному магазині (komis) чи в дилера – у них власний договір','мотоцикл не зареєстрований (напр. піт-байк) – тоді достатньо звичайного договору купівлі-продажу речі','мотоцикл у лізингу або куплений у кредит під заставу']),
      faq=([('Does a motorcycle agreement differ from a car agreement?','Not legally – it is the same vehicle sale agreement. The practical matters differ: the VIN is stamped on the frame, and additional equipment (cases, exhaust) is worth writing in.'),
            ('Who pays PCC when buying a motorcycle?','The buyer – just as for a car: 2% of the market value, with the PCC-3 return filed within 14 days. From 3 November 2026, items with a market value of up to PLN 3,000 are exempt.')] if en else
           [('Чи відрізняється договір на мотоцикл від договору на авто?','Юридично ні – це той самий договір купівлі-продажу транспортного засобу. Різняться практичні речі: VIN вибито на рамі, а додаткове обладнання (кофри, вихлоп) варто вписати.'),
            ('Хто сплачує PCC при купівлі мотоцикла?','Покупець – так само, як і за авто: 2% ринкової вартості, декларація PCC-3 протягом 14 днів. З 3 листопада 2026 р. звільнено речі з ринковою вартістю до 3000 злотих.')]))
    run('pl','umowa-kupna-sprzedazy-samochodu','umowa-kupna-sprzedazy-motocykla',j,L,
        ['motorcycle sale','sell a motorcycle','scooter','moped','quad','umowa kupna-sprzedaży motocykla','sprzedaż motocykla'] if en else ['продаж мотоцикла','купівля мотоцикла','скутер','мопед','квадроцикл','umowa kupna-sprzedaży motocykla','sprzedaż motocykla','motorcycle'],
        'Sale of a motorcycle, scooter or quad.' if en else 'Продаж мотоцикла, скутера чи квадроцикла.',
        'vady_popis','e.g. zużyty napęd, porysowany zbiornik (worn drive chain, scratched tank)' if en else 'напр. zużyty napęd, porysowany zbiornik (зношений привід, подряпаний бак)','18000',ACC_PL,
        {'pruvodce.pole.km.placeholder':('e.g. ' if en else 'напр. ')+'24300'})
# ---------- HU
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Sale Agreement Hungary {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Угорщина {rok} – зразок PDF безкоштовно',
      description=('Free sale agreement for a motorcycle, scooter or quad in Hungary: chassis number, mileage, defects, two witnesses, price in words, transfer within 15 days. Bilingual PDF.' if en else
                   'Договір купівлі-продажу мотоцикла, скутера чи квадроцикла в Угорщині: номер шасі, пробіг, недоліки, два свідки, перереєстрація за 15 днів. Двомовний PDF.'),
      perex=('For selling a motorcycle, scooter, moped or quad between private individuals in Hungary – with two witnesses, as required for the transfer of ownership.' if en else
             'Для продажу мотоцикла, скутера, мопеда чи квадроцикла між приватними особами в Угорщині – з двома свідками, як потрібно для перереєстрації.'),
      hodiSe=(['you are selling or buying a motorcycle, scooter or quad from a private individual','the vehicle is registered and has a registration certificate','you want the price, condition and handover in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, скутер чи квадроцикл у приватної особи','транспортний засіб зареєстрований і має свідоцтво про реєстрацію','ви хочете письмово зафіксувати ціну, стан і передання']),
      nehodiSe=(['you are buying from a dealer – they have their own agreement','the motorcycle is leased or pledged as security for a loan'] if en else
                ['ви купуєте в дилера – у нього власний договір','мотоцикл у лізингу або є забезпеченням кредиту']),
      faq=([('Is the agreement for a motorcycle different from one for a car?','Not legally – both are a motor vehicle sale agreement. The practical difference: the chassis number is stamped into the frame, and accessories (cases, exhaust) are worth writing in.'),
            ('Are witnesses needed?','The transfer of ownership requires a private document with full probative force: the signatures of two witnesses with their names and addresses, or countersignature by a lawyer.')] if en else
           [('Чи відрізняється договір на мотоцикл від договору на авто?','Юридично ні – обидва є договором купівлі-продажу транспортного засобу. Практична різниця: номер шасі вибито на рамі, а аксесуари (кофри, вихлоп) варто вписати.'),
            ('Чи потрібні свідки?','Для перереєстрації потрібен приватний документ із повною доказовою силою: підписи двох свідків із їхніми іменами й адресами або засвідчення адвокатом.')]))
    run('hu','gepjarmu-adasveteli-szerzodes','motorkerekpar-adasveteli-szerzodes',j,L,
        ['motorcycle sale agreement','sell a motorcycle','scooter','moped','quad','witnesses','motor adásvételi szerződés','motorkerékpár'] if en else ['договір купівлі-продажу мотоцикла','продаж мотоцикла','скутер','мопед','квадроцикл','свідки','motor adásvételi szerződés','motorkerékpár'],
        'Sale of a motorcycle, scooter or quad between private individuals.' if en else 'Продаж мотоцикла, скутера чи квадроцикла між приватними особами.',
        'hibak_leiras','e.g. kopott lánckészlet, karcos tank (worn chain set, scratched tank)' if en else 'напр. kopott lánckészlet, karcos tank (зношений ланцюговий комплект, подряпаний бак)','1500000',ACC_HU,
        {'pruvodce.pole.km.placeholder':('e.g. ' if en else 'напр. ')+'24300'})
# ---------- SK
for j in (E,U):
    en=j==E
    L=dict(title='Motorcycle Purchase Agreement Slovakia {rok} – free PDF template' if en else 'Договір продажу мотоцикла, Словаччина {rok} – зразок PDF безкоштовно',
      description=('Free purchase agreement for a motorcycle, scooter or quad under Slovak law: VIN, mileage, defects, payment, change of keeper. Bilingual PDF or Word.' if en else
                   'Договір купівлі-продажу мотоцикла, скутера чи квадроцикла за словацьким правом: VIN, пробіг, недоліки, оплата, зміна власника. Двомовний PDF безкоштовно.'),
      perex=('For selling a motorcycle, scooter, moped or quad between private individuals in Slovakia. Fill it in online or download a blank template.' if en else
             'Для продажу мотоцикла, скутера, мопеда чи квадроцикла між приватними особами у Словаччині. Заповніть онлайн або завантажте порожній зразок.'),
      hodiSe=(['you are selling or buying a motorcycle, scooter, moped or quad from a private individual','the vehicle is registered and has a registration certificate','you want the price, condition and handover in writing'] if en else
              ['ви продаєте або купуєте мотоцикл, скутер, мопед чи квадроцикл у приватної особи','транспортний засіб зареєстрований і має свідоцтво про реєстрацію','ви хочете письмово зафіксувати ціну, стан і передання']),
      nehodiSe=(['you are buying from a second-hand dealer – they have their own agreement','the motorcycle is not registered (e.g. a pit bike) – use the sale agreement for goods','the motorcycle is leased or on credit'] if en else
                ['ви купуєте в продавця вживаних транспортних засобів – у нього власний договір','мотоцикл не зареєстрований (напр. піт-байк) – використайте договір купівлі-продажу речі','мотоцикл у лізингу або в кредит']),
      faq=([('Is a motorcycle agreement different from a car agreement?','Not legally – both are a purchase agreement for a motor vehicle. The practical matters differ: the VIN is stamped on the frame, and equipment (cases, exhaust) is worth writing in.'),
            ('Does it also work for a scooter or moped?','Yes, for any vehicle with a registration certificate. For a pit bike or a children’s motorcycle without registration, use the sale agreement for goods.')] if en else
           [('Чи відрізняється договір на мотоцикл від договору на авто?','Юридично ні – обидва є договором купівлі-продажу транспортного засобу. Різняться практичні речі: VIN вибито на рамі, а обладнання (кофри, вихлоп) варто вписати.'),
            ('Чи підходить для скутера чи мопеда?','Так, для будь-якого транспортного засобу зі свідоцтвом про реєстрацію. Для піт-байка чи дитячого мотоцикла без реєстрації використайте договір купівлі-продажу речі.')]))
    run('sk','kupna-zmluva-auto','kupna-zmluva-motorka',j,L,
        ['motorcycle sale','sell a motorcycle','buy a motorcycle','scooter','moped','quad','kúpna zmluva na motorku','predaj motorky'] if en else ['продаж мотоцикла','купівля мотоцикла','скутер','мопед','квадроцикл','kúpna zmluva na motorku','predaj motorky','motorcycle'],
        'Sale of a motorcycle, scooter or quad.' if en else 'Продаж мотоцикла, скутера чи квадроцикла.',
        'vady_popis','e.g. opotrebovaná reťazová sada, poškriabaná nádrž (worn chain set, scratched tank)' if en else 'напр. opotrebovaná reťazová sada, poškriabaná nádrž (зношений ланцюговий комплект, подряпаний бак)','4500',ACC_SK,
        {'pruvodce.pole.km.placeholder':('e.g. ' if en else 'напр. ')+'24300',
         'pruvodce.pole.barva.placeholder':'e.g. červená (red)' if en else 'напр. červená (червоний)',
         'pruvodce.pole.doklady_jine.placeholder':'e.g. bočné kufre, padacie rámy (side cases, crash bars)' if en else 'напр. bočné kufre, padacie rámy (бокові кофри, захисні дуги)',
         'pruvodce.kontrola.1':'The VIN in the documents matches the VIN on the vehicle (on the frame at the steering head and on the manufacturer’s plate).' if en else 'VIN у документах збігається з VIN на транспортному засобі (на рамі біля рульової колонки та на заводській табличці).'})
