import sys; sys.path.insert(0,'/home/claude/skripty/prek')
from gen import w
PD='https://porezna-uprava.gov.hr/hr/nasljednik-i-daroprimatelj-gotovine-novcane-trazbine-vrijednosnog-papira-i-pokretnine/4445'
IB='HR00 0000 0000 0000 0000 0'
w('hr','en','ugovor-o-darovanju','','',dict(
 nazev='Gift Agreement',nazevA='the gift agreement',
 katalog={'popis':'A gift of money or an item, gift tax.','slova':['gift agreement','gift of money','gift deed','gift tax Croatia','giving a car','ugovor o darovanju']},
 landing=dict(description='Gift agreement for Croatia (ugovor o darovanju) for money or a movable item handed over at once: 4 % gift tax, family exemptions, gifting a vehicle. Free bilingual PDF.',
  perex='For a gift of money or an item handed over immediately. A spouse, children, parents and grandchildren do not pay gift tax.',
  obsahPopis='Three articles under the Obligations Act (Zakon o obveznim odnosima).',
  obsah=[('Parties','Donor and recipient, relationship.'),('Subject of the gift','Money or an item and its handover.'),('Final provisions','Tax and costs.')],
  online=['Amount in words in Croatian added automatically','Tips on gift tax','PDF and Word'],
  hodiSe=['you are giving money to a child or grandchild','you are giving a car or another item, handed over at once'],
  nehodiSe=['you are giving real estate – a separate agreement is needed','the gift will only be handed over later – a notarial deed is needed'],
  po=[('Handover','Money ideally by bank transfer.'),('Tax','The Tax Administration (Porezna uprava) assesses the tax by decision unless you are exempt.')],
  faq=[('Is gift tax payable?','The tax is 4 % on money and movable items worth more than €6,700. Spouses, descendants and ascendants, adopted children and adoptive parents are exempt.'),('Is a notary needed?','Not for a gift handed over at once. A gift without actual handover must take the form of a notarial deed or a solemnised document.')],
  zakony='The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima) and information from the Tax Administration (Porezna uprava) on inheritance and gift tax.'),
 pruvodce=dict(slovo={'n':'agreement','g':'agreement','a':'agreement','l':'agreement'},
  kroky={'strane':{'nazev':'Donor and recipient'},'dar':{'nazev':'Gift'}},
  pole={'p_jmeno':{'popis':'Donor – full name','placeholder':'e.g. Ivan Horvat'},'p_oib':{'popis':'Donor’s OIB'},'p_adresa':{'popis':'Donor’s address'},
   'k_jmeno':{'popis':'Recipient – full name','placeholder':'e.g. Petra Horvat'},'k_oib':{'popis':'Recipient’s OIB'},'k_adresa':{'popis':'Recipient’s address'},
   'srodstvo':{'popis':'Relationship (optional)','napoveda':'Important for tax – e.g. daughter, son, spouse. Write it in Croatian.','placeholder':'e.g. kći (daughter)'},
   'vrsta':{'popis':'What is given','moznosti':{'novac':'Money','stvar':'A movable item (e.g. a car)'}},
   'castka':{'popis':'Amount (€)'},
   'stvar':{'popis':'Description of the item','napoveda':'For a vehicle: make, VIN and registration plate.','placeholder':'e.g. osobni automobil Škoda Fabia, broj šasije …, reg. oznaka … (passenger car Škoda Fabia, VIN …, plate …)'},
   'vrijednost':{'popis':'Approximate value of the item (€)'},'misto':{'popis':'Place of signing'},'datum_podpisu':{'popis':'Date of signing'}},
  vysvetleni=['','What is given. It is handed over on signing.',''],
  coDal=['Print the agreement in two copies and sign both.','Hand over the gift immediately – money ideally by bank transfer.','Recipient: unless you are exempt, the Tax Administration will assess gift tax by decision; the tax is paid within 15 days of delivery of the decision.'],
  kontrola=['This template is for a gift with actual handover (the money or item is handed over immediately). A gift without handover must take the form of a notarial deed or a solemnised document (ZOO Art. 482); real estate is given by a separate agreement.',f'Gift tax is 4 % on money and on movable items with an individual market value above €6,700. Spouses, descendants and ascendants in the direct line, adopted children and adoptive parents are exempt ([Porezna uprava]({PD})).','When a vehicle is given, the recipient carries out the change of ownership at a vehicle inspection station; gifts between spouses and in the direct line are exempt from the administrative fee.','Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.']),
 dokument=dict(nazev='Gift Agreement',podnadpis='gift of money or a movable item with handover, under the Obligations Act',podpisy={'vlevo':'Donor','vpravo':'Recipient'},
  clanky=[{'nadpis':'Parties','odstavce':['**Donor:** {{p_jmeno}}, OIB {{p_oib}}, address {{p_adresa}}','**Recipient:** {{k_jmeno}}, OIB {{k_oib}}, address {{k_adresa}}, relationship to the Donor: {{srodstvo}}']},
   {'nadpis':'Subject of the gift','odstavce':[{'uvodVzor':'Subject of the gift (tick one option):','moznosti':{'novac':'The Donor gives the Recipient the sum of money of **{{castka}}**.','stvar':'The Donor gives the Recipient the following item: {{stvar}}, of an approximate value of {{vrijednost}}.'}},'The Donor hands over the gift to the Recipient on signing this agreement, and the Recipient accepts the gift and confirms its receipt.']},
   {'nadpis':'Final provisions','odstavce':['Tax and other costs related to the gift are borne by the Recipient.','Matters not governed by this agreement are subject to the provisions of the Obligations Act.','The agreement is drawn up in two identical copies, one for each party.']}])))
w('hr','uk','ugovor-o-darovanju','','',dict(
 nazev='Договір дарування',nazevA='договір дарування',
 katalog={'popis':'Дарування грошей або речі, податок на дарування.','slova':['договір дарування','дарування грошей','подарувати авто','податок на дарування Хорватія','ugovor o darovanju']},
 landing=dict(description='Договір дарування в Хорватії (ugovor o darovanju) грошей чи рухомої речі з передачею: податок 4 %, пільги для родини, дарування авто. Двомовний PDF безкоштовно.',
  perex='Для дарування грошей або речі, яка передається одразу. Подружжя, діти, батьки й онуки не сплачують податок на дарування.',
  obsahPopis='Три статті за Законом про зобов’язальні відносини (Zakon o obveznim odnosima).',
  obsah=[('Сторони','Дарувальник і обдаровуваний, ступінь спорідненості.'),('Предмет дарування','Гроші чи річ і їх передача.'),('Прикінцеві положення','Податок і витрати.')],
  online=['Сума словами хорватською – автоматично','Поради щодо податку на дарування','PDF і Word'],
  hodiSe=['ви даруєте гроші дитині чи онукові','ви даруєте авто чи іншу річ із передачею'],
  nehodiSe=['ви даруєте нерухомість – потрібен окремий договір','дарунок буде передано пізніше – потрібен нотаріальний акт'],
  po=[('Передача','Гроші – найкраще переказом.'),('Податок','Податкова управа (Porezna uprava) визначає податок рішенням, якщо ви не звільнені.')],
  faq=[('Чи сплачується податок на дарування?','Податок становить 4 % від грошей і рухомих речей вартістю понад 6 700 €. Звільнені подружжя, нащадки й предки, усиновлені та усиновлювачі.'),('Чи потрібен нотаріус?','Для дарування з фактичною передачею – ні. Дарування без фактичної передачі має бути оформлене нотаріальним актом або солемнізованим документом.')],
  zakony='Зразок ґрунтується на хорватському Законі про зобов’язальні відносини (Zakon o obveznim odnosima) та інформації Податкової управи (Porezna uprava) про податок на спадщину й дарування.'),
 pruvodce=dict(slovo={'n':'договір','g':'договору','a':'договір','l':'договорі'},
  kroky={'strane':{'nazev':'Дарувальник і обдаровуваний'},'dar':{'nazev':'Дарунок'}},
  pole={'p_jmeno':{'popis':'Дарувальник – ім’я та прізвище','placeholder':'напр. Ivan Horvat'},'p_oib':{'popis':'OIB дарувальника'},'p_adresa':{'popis':'Адреса дарувальника'},
   'k_jmeno':{'popis':'Обдаровуваний – ім’я та прізвище','placeholder':'напр. Petra Horvat'},'k_oib':{'popis':'OIB обдаровуваного'},'k_adresa':{'popis':'Адреса обдаровуваного'},
   'srodstvo':{'popis':'Спорідненість (необов’язково)','napoveda':'Важливо для податку – напр. донька, син, чоловік/дружина. Пишіть хорватською.','placeholder':'напр. kći (донька)'},
   'vrsta':{'popis':'Що даруєте','moznosti':{'novac':'Гроші','stvar':'Рухома річ (напр. автомобіль)'}},
   'castka':{'popis':'Сума (€)'},
   'stvar':{'popis':'Опис речі','napoveda':'Для транспортного засобу: марка, VIN і номерний знак.','placeholder':'напр. osobni automobil Škoda Fabia, broj šasije …, reg. oznaka … (легковий автомобіль Škoda Fabia, VIN …, номер …)'},
   'vrijednost':{'popis':'Приблизна вартість речі (€)'},'misto':{'popis':'Місце підписання'},'datum_podpisu':{'popis':'Дата підписання'}},
  vysvetleni=['','Що даруєте. Передача відбувається під час підписання.',''],
  coDal=['Роздрукуйте договір у двох примірниках і підпишіть обидва.','Передайте дарунок одразу – гроші найкраще переказом.','Обдаровуваний: якщо ви не звільнені, Податкова управа визначить податок на дарування рішенням; податок сплачується протягом 15 днів від вручення рішення.'],
  kontrola=['Цей зразок – для дарування з фактичною передачею (гроші чи річ передаються одразу). Дарування без передачі має бути оформлене нотаріальним актом або солемнізованим документом (ZOO, ст. 482); нерухомість дарується окремим договором.',f'Податок на дарування становить 4 % від грошей і рухомих речей ринковою вартістю понад 6 700 € за одиницю. Звільнені подружжя, нащадки й предки по прямій лінії, усиновлені та усиновлювачі ([Porezna uprava]({PD})).','У разі дарування транспортного засобу обдаровуваний змінює власника на станції техогляду; дарування між подружжям і по прямій лінії звільнене від адміністративного збору.','Перевірте особу іншої сторони за посвідченням особи та перепишіть ім’я й OIB точно як у документі.']),
 dokument=dict(nazev='Договір дарування',podnadpis='дарування грошей або рухомої речі з передачею, відповідно до Закону про зобов’язальні відносини',podpisy={'vlevo':'Дарувальник','vpravo':'Обдаровуваний'},
  clanky=[{'nadpis':'Сторони договору','odstavce':['**Дарувальник:** {{p_jmeno}}, OIB {{p_oib}}, адреса {{p_adresa}}','**Обдаровуваний:** {{k_jmeno}}, OIB {{k_oib}}, адреса {{k_adresa}}, спорідненість із Дарувальником: {{srodstvo}}']},
   {'nadpis':'Предмет дарування','odstavce':[{'uvodVzor':'Предмет дарування (позначте один варіант):','moznosti':{'novac':'Дарувальник дарує Обдаровуваному грошову суму **{{castka}}**.','stvar':'Дарувальник дарує Обдаровуваному таку річ: {{stvar}}, приблизною вартістю {{vrijednost}}.'}},'Дарувальник передає дарунок Обдаровуваному під час підписання цього договору, а Обдаровуваний приймає дарунок і підтверджує його отримання.']},
   {'nadpis':'Прикінцеві положення','odstavce':['Податок та інші витрати, пов’язані з даруванням, несе Обдаровуваний.','До всього, що не врегульовано цим договором, застосовуються положення Закону про зобов’язальні відносини.','Договір складено у двох однакових примірниках, по одному для кожної сторони.']}])))
# ---------- punomoc
for j in ('en','uk'):
  E = j=='en'
  w('hr',j,'punomoc','','',dict(
 nazev='Power of Attorney' if E else 'Довіреність', nazevA='the power of attorney' if E else 'довіреність',
 katalog={'popis':'When someone else handles something for you.' if E else 'Коли щось за вас має зробити інша людина.',
  'slova':(['power of attorney','authorisation','letter of authority','proxy for the post office','punomoć'] if E else ['довіреність','доручення','довіреність на пошту','представництво','punomoć'])},
 landing=dict(description=('Power of attorney for a private person in Croatia (punomoć): who authorises whom, for what and until when. Tips on certifying the signature. Free bilingual PDF.' if E else
   'Довіреність фізичної особи в Хорватії (punomoć): хто кого уповноважує, на що й до коли. Поради щодо засвідчення підпису. Двомовний PDF або Word безкоштовно.'),
  perex=('When someone else needs to handle something for you – post office, authority, bank or vehicle inspection station.' if E else 'Коли щось за вас має зробити інша людина – пошта, установа, банк чи станція техогляду.'),
  obsahPopis=('A short power of attorney describing the tasks.' if E else 'Коротка довіреність з описом дій.'),
  obsah=[(('Power of attorney','Principal, agent, tasks, validity.') if E else ('Довіреність','Довіритель, представник, дії, строк.'))],
  online=(['Signature on screen','PDF and Word'] if E else ['Підпис на екрані','PDF і Word']),
  hodiSe=(['you cannot do something in person','you want to authorise a family member'] if E else ['ви не можете щось зробити особисто','ви хочете уповноважити члена родини']),
  nehodiSe=(['you need a power of attorney for real estate or court – contact a notary (javni bilježnik) or a lawyer'] if E else ['вам потрібна довіреність для нерухомості чи суду – зверніться до нотаріуса (javni bilježnik) або адвоката']),
  po=[(('Certification','At a notary, if the authority or bank requires it.') if E else ('Засвідчення','У нотаріуса, якщо цього вимагає установа чи банк.'))],
  faq=([('Does the signature have to be certified?','It depends on where the power of attorney is used – authorities and banks often require it. Check in advance.'),('Can I revoke the power of attorney?','Yes, at any time.')] if E else
       [('Чи треба засвідчувати підпис?','Залежить від того, де використовуватиметься довіреність, – установи й банки часто цього вимагають. Перевірте заздалегідь.'),('Чи можу я відкликати довіреність?','Так, у будь-який момент.')]),
  zakony=('The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – representation, power of attorney).' if E else 'Зразок ґрунтується на хорватському Законі про зобов’язальні відносини (Zakon o obveznim odnosima – представництво, довіреність).')),
 pruvodce=dict(slovo=({'n':'power of attorney','g':'power of attorney','a':'power of attorney','l':'power of attorney'} if E else {'n':'довіреність','g':'довіреності','a':'довіреність','l':'довіреності'}),
  kroky={'podaci':{'nazev':'Who authorises whom and for what' if E else 'Хто кого уповноважує й на що'}},
  pole=({'p_jmeno':{'popis':'Principal – full name','napoveda':'The person giving the authorisation.','placeholder':'e.g. Ivan Horvat'},'p_oib':{'popis':'Principal’s OIB'},'p_adresa':{'popis':'Principal’s address'},
   'k_jmeno':{'popis':'Agent – full name','napoveda':'The person who will represent you.','placeholder':'e.g. Ana Kovačević'},'k_oib':{'popis':'Agent’s OIB'},'k_adresa':{'popis':'Agent’s address'},
   'poslovi':{'popis':'What the power of attorney is for','placeholder':'e.g. preuzimanje preporučene pošiljke na pošti, podnošenje zahtjeva u … (collecting a registered letter at the post office, submitting an application at …)'},
   'do':{'popis':'Valid until (optional)'},'misto':{'popis':'Place'},'datum':{'popis':'Date'}} if E else
   {'p_jmeno':{'popis':'Довіритель – ім’я та прізвище','napoveda':'Хто надає повноваження.','placeholder':'напр. Ivan Horvat'},'p_oib':{'popis':'OIB довірителя'},'p_adresa':{'popis':'Адреса довірителя'},
   'k_jmeno':{'popis':'Представник – ім’я та прізвище','napoveda':'Хто вас представлятиме.','placeholder':'напр. Ana Kovačević'},'k_oib':{'popis':'OIB представника'},'k_adresa':{'popis':'Адреса представника'},
   'poslovi':{'popis':'На що видається довіреність','placeholder':'напр. preuzimanje preporučene pošiljke na pošti, podnošenje zahtjeva u … (отримання рекомендованого листа на пошті, подання заяви в …)'},
   'do':{'popis':'Дійсна до (необов’язково)'},'misto':{'popis':'Місце'},'datum':{'popis':'Дата'}}),
  vysvetleni=[''],
  coDal=(['Sign the power of attorney and give it to the agent.','If an authority or bank requires it, have the signature certified by a notary (javni bilježnik).'] if E else ['Підпишіть довіреність і передайте її представнику.','Якщо цього вимагає установа чи банк, засвідчте підпис у нотаріуса (javni bilježnik).']),
  kontrola=(['Describe the tasks as specifically as possible – the agent may only do what they are authorised to do.','For procedures before authorities, banks or at a vehicle inspection station, check in advance whether a power of attorney with a certified signature is required.','You can revoke the power of attorney at any time; inform the agent and those before whom they used it.','Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.'] if E else
   ['Опишіть дії якомога конкретніше – представник може робити лише те, на що уповноважений.','Для процедур в установах, банках чи на станції техогляду заздалегідь перевірте, чи потрібна довіреність із засвідченим підписом.','Довіреність можна відкликати в будь-який момент; повідомте про це представника й тих, перед ким він її використовував.','Перевірте особу іншої сторони за посвідченням особи та перепишіть ім’я й OIB точно як у документі.'])),
 dokument=(dict(nazev='Power of Attorney',podnadpis='authorisation to represent',podpisy={'vlevo':'principal','vpravo':'agent (accepts)'},
  clanky=[{'nadpis':'Power of attorney','odstavce':['I, **{{p_jmeno}}**, OIB {{p_oib}}, address {{p_adresa}} (principal),','authorise **{{k_jmeno}}**, OIB {{k_oib}}, address {{k_adresa}} (agent), to represent me and to take the following actions on my behalf: {{poslovi}}','This power of attorney is valid until {{do}} or until revoked.']}]) if E else
  dict(nazev='Довіреність',podnadpis='повноваження на представництво',podpisy={'vlevo':'довіритель','vpravo':'представник (приймає)'},
  clanky=[{'nadpis':'Довіреність','odstavce':['Я, **{{p_jmeno}}**, OIB {{p_oib}}, адреса {{p_adresa}} (довіритель),','уповноважую **{{k_jmeno}}**, OIB {{k_oib}}, адреса {{k_adresa}} (представник), представляти мене та від мого імені вчиняти такі дії: {{poslovi}}','Довіреність дійсна до {{do}} або до її відкликання.']}]))))
# ---------- kupoprodajni ugovor (stvar)
for j in ('en','uk'):
  E = j=='en'
  w('hr',j,'kupoprodajni-ugovor','','',dict(
 nazev='Purchase Agreement' if E else 'Договір купівлі-продажу речі', nazevA='the purchase agreement' if E else 'договір купівлі-продажу речі',
 katalog={'popis':'Sale of a used item through an advert.' if E else 'Продаж вживаної речі через оголошення.',
  'slova':(['purchase agreement','sale of a used item','private sale','Njuškalo','kupoprodajni ugovor'] if E else ['договір купівлі-продажу','продаж вживаної речі','оголошення','Njuškalo','kupoprodajni ugovor'])},
 landing=dict(description=('Purchase agreement for a movable item between private persons in Croatia: description, known defects, price, payment and handover. Anti-fraud tips. Free bilingual PDF.' if E else
   'Договір купівлі-продажу рухомої речі між приватними особами в Хорватії: опис, недоліки, ціна, оплата й передача. Поради проти шахрайства. Двомовний PDF безкоштовно.'),
  perex=('For selling a used item through an advert – a bicycle, phone or furniture. With a description of defects and the price in words.' if E else 'Для продажу вживаної речі через оголошення – велосипеда, телефона, меблів. З описом недоліків і ціною словами.'),
  obsahPopis=('Four articles under the Obligations Act (Zakon o obveznim odnosima).' if E else 'Чотири статті за Законом про зобов’язальні відносини (Zakon o obveznim odnosima).'),
  obsah=([('Parties','Seller and buyer.'),('Item and condition','Description and known defects.'),('Price and handover','Amount, payment, transfer of ownership.'),('Final provisions','Copies.')] if E else
         [('Сторони','Продавець і покупець.'),('Річ і стан','Опис і відомі недоліки.'),('Ціна й передача','Сума, оплата, перехід права власності.'),('Прикінцеві положення','Примірники.')]),
  online=(['Amount in words in Croatian added automatically','PDF and Word'] if E else ['Сума словами хорватською – автоматично','PDF і Word']),
  hodiSe=(['you are selling a used item through an advert','you want the condition and price in writing'] if E else ['ви продаєте вживану річ через оголошення','ви хочете зафіксувати письмово стан і ціну']),
  nehodiSe=(['you are selling a car – use the car purchase agreement'] if E else ['ви продаєте авто – скористайтеся договором купівлі-продажу авто']),
  po=[(('Handover','Only once the money is with you.') if E else ('Передача','Лише коли гроші вже у вас.'))],
  faq=([('Is a written agreement needed?','It is not compulsory, but for more expensive items it protects both parties.'),('How do I recognise a scam?','The buyer sends a link for “secure payment” or “delivery” and asks for your card details or a code from a text message.')] if E else
       [('Чи потрібен письмовий договір?','Він не обов’язковий, але для дорожчих речей захищає обидві сторони.'),('Як розпізнати шахрайство?','Покупець надсилає посилання на «безпечну оплату» чи «доставку» й просить дані картки або код із SMS.')]),
  zakony=('The template is based on the Croatian Obligations Act (Zakon o obveznim odnosima – sale).' if E else 'Зразок ґрунтується на хорватському Законі про зобов’язальні відносини (Zakon o obveznim odnosima – купівля-продаж).')),
 pruvodce=dict(slovo=({'n':'agreement','g':'agreement','a':'agreement','l':'agreement'} if E else {'n':'договір','g':'договору','a':'договір','l':'договорі'}),
  kroky=({'strane':{'nazev':'Seller and buyer'},'stvar':{'nazev':'Item and price'}} if E else {'strane':{'nazev':'Продавець і покупець'},'stvar':{'nazev':'Річ і ціна'}}),
  pole=({'p_jmeno':{'popis':'Seller – full name','placeholder':'e.g. Ivan Horvat'},'p_adresa':{'popis':'Seller’s address'},'k_jmeno':{'popis':'Buyer – full name','placeholder':'e.g. Ana Kovačević'},'k_adresa':{'popis':'Buyer’s address'},
   'predmet':{'popis':'What is being sold','placeholder':'e.g. bicikl Trek Marlin 7, serijski broj … (Trek Marlin 7 bicycle, serial number …)'},
   'nedostaci':{'popis':'Known defects','moznosti':{'ne':'No known defects','da':'With defects'}},'nedostaci_opis':{'popis':'Description of the defects'},
   'cena':{'popis':'Price (€)'},'placanje':{'popis':'Payment','moznosti':{'gotovina':'In cash on handover','racun':'By bank transfer before handover'}},
   'iban':{'popis':'Seller’s IBAN'},'misto':{'popis':'Place of signing'},'datum_podpisu':{'popis':'Date'}} if E else
   {'p_jmeno':{'popis':'Продавець – ім’я та прізвище','placeholder':'напр. Ivan Horvat'},'p_adresa':{'popis':'Адреса продавця'},'k_jmeno':{'popis':'Покупець – ім’я та прізвище','placeholder':'напр. Ana Kovačević'},'k_adresa':{'popis':'Адреса покупця'},
   'predmet':{'popis':'Що продається','placeholder':'напр. bicikl Trek Marlin 7, serijski broj … (велосипед Trek Marlin 7, серійний номер …)'},
   'nedostaci':{'popis':'Відомі недоліки','moznosti':{'ne':'Без відомих недоліків','da':'З недоліками'}},'nedostaci_opis':{'popis':'Опис недоліків'},
   'cena':{'popis':'Ціна (€)'},'placanje':{'popis':'Оплата','moznosti':{'gotovina':'Готівкою під час передачі','racun':'Переказом до передачі'}},
   'iban':{'popis':'IBAN продавця'},'misto':{'popis':'Місце підписання'},'datum_podpisu':{'popis':'Дата'}}),
  vysvetleni=['','','',''],
  coDal=(['Print the agreement in two copies and sign both.','Hand over the item only once the money is in your account or in your hand.'] if E else ['Роздрукуйте договір у двох примірниках і підпишіть обидва.','Передайте річ лише тоді, коли гроші вже на рахунку чи у вас у руках.']),
  kontrola=(['Describe the item as precisely as possible (make, model, serial number) and list known defects.','A buyer who knew about a defect cannot rely on it later – so list defects honestly.','Scams: anyone who sends a link for “secure payment” or “delivery” and asks for card details is a fraudster. You do not need to enter card details to receive money.','Check the other party’s identity against their identity card and copy the name and OIB exactly as they appear in the document.','Count cash on signing; larger amounts are better paid by bank transfer – a bank confirmation is the best evidence.'] if E else
   ['Опишіть річ якомога точніше (марка, модель, серійний номер) і вкажіть відомі недоліки.','Покупець, який знав про недолік, не може згодом на нього посилатися, – тому чесно вкажіть недоліки.','Шахрайство: той, хто надсилає посилання на «безпечну оплату» чи «доставку» й просить дані картки, – шахрай. Щоб отримати гроші, вводити дані картки не потрібно.','Перевірте особу іншої сторони за посвідченням особи та перепишіть ім’я й OIB точно як у документі.','Готівку перерахуйте під час підписання; більші суми краще платити переказом – банківське підтвердження найкращий доказ.'])),
 dokument=(dict(nazev='Purchase Agreement',podnadpis='for a movable item, under the Obligations Act',podpisy={'vlevo':'Seller','vpravo':'Buyer'},
  clanky=[{'nadpis':'Parties','odstavce':['**Seller:** {{p_jmeno}}, address {{p_adresa}}','**Buyer:** {{k_jmeno}}, address {{k_adresa}}']},
   {'nadpis':'Subject and condition','odstavce':['The Seller sells and the Buyer buys: {{predmet}}.',{'uvodVzor':'Known defects (tick one option):','moznosti':{'ne':'The Seller is not aware of any defects of the item.','da':'The Seller has informed the Buyer of the following defects: {{nedostaci_opis}}'}},'The Buyer has inspected the item and buys it in its current condition.']},
   {'nadpis':'Price and handover','odstavce':['The price is **{{cena}}**.',{'uvodVzor':'Payment (tick one option):','moznosti':{'gotovina':'The Buyer pays the price in cash on handover of the item; the Seller confirms receipt by signing.','racun':'The Buyer pays the price to the Seller’s account IBAN {{iban}}; the Seller hands over the item after receiving the payment.'}},'Ownership and risk pass to the Buyer on handover of the item.']},
   {'nadpis':'Final provisions','odstavce':['Matters not governed by this agreement are subject to the provisions of the Obligations Act.','The agreement is drawn up in two identical copies.']}]) if E else
  dict(nazev='Договір купівлі-продажу',podnadpis='рухомої речі, відповідно до Закону про зобов’язальні відносини',podpisy={'vlevo':'Продавець','vpravo':'Покупець'},
  clanky=[{'nadpis':'Сторони договору','odstavce':['**Продавець:** {{p_jmeno}}, адреса {{p_adresa}}','**Покупець:** {{k_jmeno}}, адреса {{k_adresa}}']},
   {'nadpis':'Предмет і стан','odstavce':['Продавець продає, а Покупець купує: {{predmet}}.',{'uvodVzor':'Відомі недоліки (позначте один варіант):','moznosti':{'ne':'Продавцю не відомі недоліки речі.','da':'Продавець повідомив Покупця про такі недоліки: {{nedostaci_opis}}'}},'Покупець оглянув річ і купує її в наявному стані.']},
   {'nadpis':'Ціна й передача','odstavce':['Ціна становить **{{cena}}**.',{'uvodVzor':'Оплата (позначте один варіант):','moznosti':{'gotovina':'Покупець сплачує ціну готівкою під час передачі речі; Продавець підтверджує отримання підписом.','racun':'Покупець сплачує ціну на рахунок Продавця IBAN {{iban}}; Продавець передає річ після надходження оплати.'}},'З передачею речі до Покупця переходять право власності й ризик.']},
   {'nadpis':'Прикінцеві положення','odstavce':['До всього, що не врегульовано цим договором, застосовуються положення Закону про зобов’язальні відносини.','Договір складено у двох однакових примірниках.']}]))))
