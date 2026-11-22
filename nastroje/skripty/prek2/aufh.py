from gen2 import T, S
OR115='https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_115'
def aufh(z,j):
    en=j=='en'; de=z=='de'; at=z=='at'; ch=z=='ch'
    NK={'de':('service charges','комунальні витрати'),'at':('operating costs','експлуатаційні витрати'),'ch':('service charges','комунальні витрати')}[z][0 if en else 1]
    ZN={'de':('Germany','Німеччина'),'at':('Austria','Австрія'),'ch':('Switzerland','Швейцарія')}[z][0 if en else 1]
    if en:
        DEP='rent deposit' if ch else 'deposit'
        nazev={'de':'Tenancy Termination Agreement','at':'Agreement on Mutual Termination of the Tenancy','ch':'Tenancy Termination Agreement'}[z]
        d=dict(nazev=nazev,nazevA='the '+nazev[0].lower()+nazev[1:] if False else 'the tenancy termination agreement',popis='Ending a tenancy by mutual agreement – date, return of the flat, deposit.',
          slova={'de':['tenancy termination agreement','end a tenancy by agreement','move out early','deposit','flat handover','Mietaufhebungsvertrag','Aufhebungsvertrag Miete'],
                 'at':['mutual termination of tenancy','end a tenancy by agreement','move out early','deposit','flat handover','einvernehmliche Auflösung Mietvertrag','Mietvertrag auflösen'],
                 'ch':['tenancy termination agreement','end a tenancy by agreement','move out early','rent deposit','flat handover','Aufhebungsvereinbarung Mietvertrag','Mietvertrag aufheben']}[z],
          title=f'Tenancy Termination Agreement {ZN} {{rok}} – free PDF template',
          desc={'de':'Tenancy termination agreement for Germany, explained in English: end the tenancy by mutual agreement, flat handover, deposit and service charges. Bilingual PDF, free.',
                'at':'Agreement on mutual termination of a tenancy in Austria, explained in English: date, flat handover, deposit and operating costs. Bilingual PDF or Word, free.',
                'ch':'Tenancy termination agreement under Art. 115 OR, explained in English: date, return of the flat, rent deposit and service charges. Bilingual PDF or Word, free.'}[z],
          perex={'de':'Want to move out earlier, without the notice period? With a tenancy termination agreement, landlord and tenant end the tenancy on a fixed date.',
                 'at':'Moving out earlier, without the notice period? Landlord and tenant can end the tenancy by mutual agreement at any time, on a fixed date.',
                 'ch':'Moving out earlier, without the termination date? Tenant and landlord can end the tenancy by mutual agreement – possible without formalities, safe in writing.'}[z],
          obsahPopis='Three sections.',
          obsah=[('Parties','Landlord and tenant.'),('End of the tenancy','Date, return of the flat, rent until the end.'),('Deposit and other arrangements','When and where the deposit is repaid.')],
          online=['Dates in the calendar','Explanations for every field','Download as PDF and Word','Blank template to print'],
          hodi=['the tenant wants to move out before the notice period ends','both parties want to end the tenancy by mutual agreement'],
          nehodi=['the other party does not agree – then notice of termination remains the only way'],
          po=[('Return','Handover report with meter readings.'),('Deposit','Reminder for the repayment in the calendar.')],
          faq=([('Do I have to sign a termination agreement?','No. It requires the consent of both parties. Anyone who does not agree is left with notice of termination with the statutory periods.')] if not ch else
               [('Does the termination need a particular form?','No. An obligation can be cancelled by agreement without formalities (Art. 115 OR). In writing, however, the agreement can be proven.')]),
          zakony={'de':'The template is based on freedom of contract (Section 311 BGB) and the provisions on residential tenancy (Sections 535 et seq. BGB).',
                  'at':'The template is based on the Austrian General Civil Code (ABGB); additional protective provisions apply to tenancies under the Tenancy Act (MRG).',
                  'ch':'The template is based on Art. 115 and Art. 253 et seq. of the Swiss Code of Obligations (Obligationenrecht, OR).'}[z],
          slovo=S('agreement'),
          kroky={'strany':'Parties and flat','konec':'Ending'},
          pole={'p_jmeno':'Landlord – name','p_adresa':'Landlord’s address','k_jmeno':('Tenant – name','If there are several tenants, list them all.'),'k_narozeni':'Tenant’s date of birth',
            'byt':'Flat (address, location)','smlouva_datum':'Date of the tenancy agreement',
            'konec_dne':('Tenancy ends on','Last day of the tenancy. Rent is payable until then.'),'odevzdani':('Return of the flat no later than','When the tenant returns the keys.'),
            'jistota':('Rent deposit' if ch else 'Deposit',None,{'odevzdani':'Repayment within a set period after the return','vyuctovani':f'Repayment after the {NK} statement','zadna':'No rent deposit paid' if ch else 'No deposit paid'}),
            'jistota_dni':'Repayment within (days)','ucet':f'Tenant’s IBAN for the {DEP}','dalsi':('Other arrangements (optional)',None,None,'e.g. Mieter streicht vor Rückgabe die Wände (tenant paints the walls before the return)'),'misto':'Place','datum':'Date'},
          vys=['','When the tenancy ends and when the flat is returned.',''],
          coDal=['Print twice; both parties sign both copies.','On return, draw up a handover report with meter readings.','The tenant deregisters electricity and gas if they are in their name.',f'Keep an eye on the date for the {DEP} repayment and the {NK} statement.'],
          kontrola=({'de':['All landlords and all tenants must sign.','Enter a specific end date and the date of return.',f'Set out when and how the deposit is repaid and how the {NK} are settled.','The agreement replaces notice of termination – moving out earlier than after the notice period is possible.','No one has to sign a termination agreement. Do not sign anything under pressure.'],
                     'at':['All landlords and all tenants must sign.','Enter a specific end date and the date of return.',f'Set out when and how the deposit is repaid and how the {NK} are settled.','The agreement replaces notice of termination – moving out earlier than after the notice period is possible.','No one has to sign a termination agreement. Do not sign anything under pressure.'],
                     'ch':[f'A tenancy can be cancelled by agreement without formalities ([Art. 115 OR]({OR115})) – in writing, however, it can be proven.','All landlords and all tenants must sign.','Enter a specific end date and the date of return.',f'Set out when the rent deposit is released and how the {NK} are settled.','The agreement replaces notice of termination together with its dates and periods.']}[z]),
          prip={'Ende des Mietverhältnisses':{'nazev':'End of the tenancy'},'Rückgabe der Wohnung und Übergabeprotokoll':{'nazev':'Return of the flat and handover report'},'Rückzahlung der Kaution':{'nazev':'Repayment of the deposit'}},
          dnazev=nazev,dpod={'de':'agreement on ending the tenancy (BGB)','at':'agreement on the mutual termination of the tenancy (ABGB, MRG)','ch':'cancellation of the tenancy by agreement (Art. 115 OR)'}[z],podpisy=('Landlord','Tenant'),
          clanky=[('Parties',['**Landlord:** {{p_jmeno}}, {{p_adresa}}','**Tenant:** {{k_jmeno}}, born on {{k_narozeni}}']),
            ('End of the tenancy',['The parties agree that the tenancy of the flat {{byt}} under the tenancy agreement of {{smlouva_datum}} ends at the end of {{konec_dne}}.',
               'The Tenant returns the flat with all keys no later than on {{odevzdani}}, in the condition in which it was handed over, allowing for wear and tear from use as agreed. A handover report is drawn up on the return.',
               ('Rent and operating cost advance payments are payable until the end of the tenancy. The operating costs are settled in the usual accounting period.' if at else 'Rent and advance payments are payable until the end of the tenancy. The service charges are settled in the usual accounting period.')]),
            (('Rent deposit' if ch else 'Deposit')+' and other arrangements',[{'uvodVzor':('Rent deposit' if ch else 'Deposit')+' (tick one):','moznosti':{'odevzdani':f'The Landlord repays the {DEP} plus interest within {{{{jistota_dni}}}} days of the return to the account IBAN {{{{ucet}}}}; they may set off outstanding claims arising from the tenancy.','vyuctovani':f'The Landlord repays the {DEP} plus interest after the {NK} for the last period have been settled, to the account IBAN {{{{ucet}}}}; they may set off outstanding claims arising from the tenancy.','zadna':f'The Tenant has not paid a {DEP}.'}},
               'Other arrangements: {{dalsi}}','The agreement is drawn up in two copies; each party receives one copy. It takes effect when signed by both parties.'])])
    else:
        DEP='застава'
        d=dict(nazev='Угода про припинення оренди',nazevA='угоду про припинення оренди',popis='Припинення оренди за згодою сторін – дата, повернення квартири, застава.',
          slova={'de':['угода про припинення оренди','припинити оренду за згодою','достроковий виїзд','застава','передання квартири','Mietaufhebungsvertrag','Aufhebungsvertrag Miete','tenancy termination'],
                 'at':['угода про припинення оренди','припинити оренду за згодою','достроковий виїзд','застава','передання квартири','einvernehmliche Auflösung Mietvertrag','Mietvertrag auflösen','tenancy termination'],
                 'ch':['угода про припинення оренди','припинити оренду за згодою','достроковий виїзд','застава','передання квартири','Aufhebungsvereinbarung Mietvertrag','Mietvertrag aufheben','tenancy termination']}[z],
          title=f'Угода про припинення оренди, {ZN} {{rok}} – зразок PDF безкоштовно',
          desc={'de':'Угода про припинення оренди в Німеччині з поясненнями українською: припинення за згодою, передання квартири, застава й комунальні витрати. Двомовний PDF безкоштовно.',
                'at':'Угода про припинення оренди за згодою в Австрії з поясненнями українською: дата, передання квартири, застава й експлуатаційні витрати. Двомовний PDF безкоштовно.',
                'ch':'Угода про припинення оренди за ст. 115 OR з поясненнями українською: дата, повернення квартири, застава й комунальні витрати. Двомовний PDF безкоштовно.'}[z],
          perex={'de':'Хочете виїхати раніше, без строку попередження? Угодою про припинення оренди орендодавець і орендар завершують оренду в погоджену дату.',
                 'at':'Виїхати раніше, без строку попередження? Орендодавець і орендар можуть будь-коли припинити оренду за згодою в погоджену дату.',
                 'ch':'Виїхати раніше, без дати розірвання? Орендар і орендодавець можуть припинити оренду за згодою – можна без особливої форми, письмово надійніше.'}[z],
          obsahPopis='Три розділи.',
          obsah=[('Сторони','Орендодавець і орендар.'),('Припинення оренди','Дата, повернення квартири, плата до кінця.'),('Застава й інші домовленості','Коли й куди повертають заставу.')],
          online=['Дати в календарі','Пояснення до кожного поля','Завантаження PDF і Word','Порожній зразок для друку'],
          hodi=['орендар хоче виїхати до закінчення строку попередження','обидві сторони хочуть припинити оренду за згодою'],
          nehodi=['інша сторона не згодна – тоді залишається тільки розірвання з попередженням'],
          po=[('Повернення','Акт приймання-передачі з показаннями лічильників.'),('Застава','Нагадування про повернення в календарі.')],
          faq=([('Чи мушу я підписувати угоду про припинення?','Ні. Вона потребує згоди обох сторін. Хто не погоджується, тому залишається розірвання з дотриманням законних строків.')] if not ch else
               [('Чи потрібна для припинення особлива форма?','Ні. Зобов’язання можна припинити за згодою без особливої форми (ст. 115 OR). Але письмову угоду можна довести.')]),
          zakony={'de':'Зразок ґрунтується на свободі договору (§ 311 BGB) і положеннях про оренду житла (§§ 535 і наст. BGB).',
                  'at':'Зразок ґрунтується на Загальному цивільному кодексі Австрії (ABGB); для оренди за Законом про оренду (MRG) діють додаткові захисні положення.',
                  'ch':'Зразок ґрунтується на ст. 115 і ст. 253 і наст. Зобов’язального права Швейцарії (Obligationenrecht, OR).'}[z],
          slovo=S('угода','угоди','угоду','угоді'),
          kroky={'strany':'Сторони й квартира','konec':'Припинення'},
          pole={'p_jmeno':'Орендодавець – ім’я','p_adresa':'Адреса орендодавця','k_jmeno':('Орендар – ім’я','Якщо орендарів кілька, укажіть усіх.'),'k_narozeni':'Дата народження орендаря',
            'byt':'Квартира (адреса, розташування)','smlouva_datum':'Дата договору оренди',
            'konec_dne':('Оренда закінчується','Останній день оренди. До нього треба платити.'),'odevzdani':('Повернути квартиру не пізніше','Коли орендар повертає ключі.'),
            'jistota':('Застава',None,{'odevzdani':'Повернення протягом певного строку після передання','vyuctovani':'Повернення після розрахунку '+('експлуатаційних' if at else 'комунальних')+' витрат','zadna':'Заставу не вносили'}),
            'jistota_dni':'Повернути протягом (днів)','ucet':'IBAN орендаря для повернення застави','dalsi':('Інші домовленості (необов’язково)',None,None,'напр. Mieter streicht vor Rückgabe die Wände (орендар пофарбує стіни перед поверненням)'),'misto':'Місце','datum':'Дата'},
          vys=['','Коли закінчується оренда й коли повертають квартиру.',''],
          coDal=['Роздрукуйте двічі; обидві сторони підписують обидва примірники.','Під час повернення складіть акт приймання-передачі з показаннями лічильників.','Орендар розриває договори на електроенергію й газ, якщо вони оформлені на нього.','Стежте за строком повернення застави й розрахунком '+('експлуатаційних' if at else 'комунальних')+' витрат.'],
          kontrola=({'de':['Мають підписати всі орендодавці й усі орендарі.','Укажіть конкретну дату припинення й дату повернення.','Домовтеся, коли й як повертають заставу та як розраховують комунальні витрати.','Угода замінює розірвання з попередженням – виїхати можна раніше, ніж мине строк попередження.','Ніхто не зобов’язаний підписувати угоду про припинення. Не підписуйте нічого під тиском.'],
                     'at':['Мають підписати всі орендодавці й усі орендарі.','Укажіть конкретну дату припинення й дату повернення.','Домовтеся, коли й як повертають заставу та як розраховують експлуатаційні витрати.','Угода замінює розірвання з попередженням – виїхати можна раніше, ніж мине строк попередження.','Ніхто не зобов’язаний підписувати угоду про припинення. Не підписуйте нічого під тиском.'],
                     'ch':[f'Оренду можна припинити за згодою без особливої форми ([ст. 115 OR]({OR115})) – але письмову угоду можна довести.','Мають підписати всі орендодавці й усі орендарі.','Укажіть конкретну дату припинення й дату повернення.','Домовтеся, коли звільняють заставу та як розраховують комунальні витрати.','Угода замінює розірвання з попередженням разом із датами й строками.']}[z]),
          prip={'Ende des Mietverhältnisses':{'nazev':'Закінчення оренди'},'Rückgabe der Wohnung und Übergabeprotokoll':{'nazev':'Повернення квартири й акт приймання-передачі'},'Rückzahlung der Kaution':{'nazev':'Повернення застави'}},
          dnazev='Угода про припинення оренди',dpod={'de':'угода про припинення орендних відносин (BGB)','at':'угода про припинення орендних відносин за згодою сторін (ABGB, MRG)','ch':'припинення орендних відносин за згодою (ст. 115 OR)'}[z],podpisy=('Орендодавець','Орендар'),
          clanky=[('Сторони',['**Орендодавець:** {{p_jmeno}}, {{p_adresa}}','**Орендар:** {{k_jmeno}}, дата народження {{k_narozeni}}']),
            ('Припинення оренди',['Сторони погоджуються, що оренда квартири {{byt}} за договором оренди від {{smlouva_datum}} закінчується після спливу {{konec_dne}}.',
               'Орендар повертає квартиру з усіма ключами не пізніше {{odevzdani}} у стані, у якому її отримав, з урахуванням зносу від користування за договором. Про повернення складають акт приймання-передачі.',
               ('Орендну плату й авансові платежі за експлуатаційні витрати сплачують до кінця оренди. Експлуатаційні витрати розраховують у звичайному розрахунковому періоді.' if at else 'Орендну плату й авансові платежі сплачують до кінця оренди. Комунальні витрати розраховують у звичайному розрахунковому періоді.')]),
            ('Застава й інші домовленості',[{'uvodVzor':'Застава (позначте один варіант):','moznosti':{'odevzdani':'Орендодавець повертає заставу разом із відсотками протягом {{jistota_dni}} днів після повернення квартири на рахунок IBAN {{ucet}}; він може зарахувати непогашені вимоги з оренди.','vyuctovani':'Орендодавець повертає заставу разом із відсотками після розрахунку '+('експлуатаційних' if at else 'комунальних')+' витрат за останній період на рахунок IBAN {{ucet}}; він може зарахувати непогашені вимоги з оренди.','zadna':'Орендар заставу не вносив.'}},
               'Інші домовленості: {{dalsi}}','Угоду складено у двох примірниках; кожна сторона отримує один. Вона набирає чинності з підписанням обома сторонами.'])])
    d['obsah']=[tuple(x) for x in d['obsah']]; d['po']=[tuple(x) for x in d['po']]
    return d
for z,s in (('de','mietaufhebungsvertrag'),('at','aufloesung-mietvertrag'),('ch','aufhebungsvereinbarung-mietvertrag')):
    for j in ('en','uk'): T(z,s,j,aufh(z,j))
