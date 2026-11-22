"""Druhá dávka článků poradny. Frontmatter se generuje s json.dumps (bezpečné YAML)."""
import json, os

BASE = '/home/claude/dokuio.com/src/content/poradna'
DATUM = '2026-11-19'


def fm(d):
    out = ['---']
    for k in ['title', 'nazev', 'description', 'perex', 'kategorie', 'tema']:
        out.append(f'{k}: {json.dumps(d[k], ensure_ascii=False)}')
    out.append('dokumenty: ' + json.dumps(d['dokumenty'], ensure_ascii=False))
    out.append(f"datum: '{DATUM}'")
    out.append('slova: ' + json.dumps(d['slova'], ensure_ascii=False))
    out.append('zdroje:')
    for n, u in d['zdroje']:
        out.append(f'  - nazev: {json.dumps(n, ensure_ascii=False)}\n    url: {u}')
    out.append('faq:')
    for q, a in d['faq']:
        out.append(f'  - q: {json.dumps(q, ensure_ascii=False)}\n    a: {json.dumps(a, ensure_ascii=False)}')
    out.append('---\n')
    return '\n'.join(out)


C = []

# ---------------- CZ ----------------
C.append(dict(zeme='cz', slug='prepis-auta',
  title='Přepis auta: lhůta 10 pracovních dnů, poplatky a co s sebou',
  nazev='Přepis auta krok za krokem',
  description='Přepis vozidla po prodeji: kdo ho podává, lhůta 10 pracovních dnů, správní poplatek 800 Kč (online 640 Kč), plná moc a co hrozí při zpoždění.',
  perex='Po prodeji auta musí prodávající i kupující požádat o zápis změny vlastníka v registru vozidel. Na to mají jen 10 pracovních dnů.',
  kategorie='auto', tema='prepis-a-registr',
  dokumenty=['plna-moc-prepis-vozidla', 'kupni-smlouva-auto', 'predavaci-protokol-vozidlo'],
  slova=['přepis auta', 'přepis vozidla', 'registr vozidel', 'změna vlastníka', 'malý technický průkaz', 'Portál dopravy', 'poplatek přepis'],
  zdroje=[('Zákon č. 56/2001 Sb., o podmínkách provozu vozidel, § 8 a § 10 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2001/56'),
          ('Zákon č. 634/2004 Sb., o správních poplatcích, položka 26 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2004/634'),
          ('Zápis změny vlastníka vozidla – životní situace (Statutární město Olomouc)', 'https://www.olomouc.eu/magistrat/odbory-magistratu/odb-kancelar-tajemnika/zivotni-situace/2')],
  faq=[('Kdo musí přepis vyřídit – prodávající, nebo kupující?', 'Oba. Žádost o zápis změny vlastníka podávají dosavadní a nový vlastník společně. Jeden z nich může jednat i za druhého na základě plné moci s úředně ověřeným podpisem.'),
       ('Kolik stojí přepis osobního auta?', 'Správní poplatek je 800 Kč, při podání přes Portál dopravy 640 Kč. U starších aut s emisní třídou Euro 0 až 2 se navíc platí ekologický poplatek.'),
       ('Co když lhůtu 10 pracovních dnů nestihneme?', 'Jde o přestupek, za který hrozí pokuta až 50 000 Kč. Hlavně ale prodávající zůstává v registru jako vlastník a mohou mu chodit pokuty a výzvy za auto, které už nemá.')],
  body='''Prodej auta nekončí podpisem kupní smlouvy. Dokud se změna neobjeví v **registru silničních vozidel**, vede stát jako vlastníka pořád prodávajícího. Zákon č. 56/2001 Sb. proto ukládá oběma stranám podat žádost o zápis změny vlastníka **do 10 pracovních dnů** od převodu vlastnického práva, typicky ode dne podpisu smlouvy a předání auta.

## 1. Domluvte se, kdo na úřad půjde

Žádost podávají **prodávající i kupující společně**. Nemusíte ale jít oba. Kdo na úřad nemůže, podepíše druhému **plnou moc k přepisu vozidla** s úředně ověřeným podpisem (Czech POINT, obecní úřad, notář). Bez ověřeného podpisu ji úřad nepřijme.

## 2. Připravte doklady

- kupní smlouvu (nebo darovací smlouvu),
- **osvědčení o registraci vozidla** (malý technický průkaz) a **technický průkaz** (velký), pokud ho auto ještě má,
- občanské průkazy, u firem výpis z obchodního rejstříku,
- doklad o povinném ručení nového vlastníka (zelenou kartu, často stačí číslo smlouvy),
- případně protokol o evidenční kontrole – vyžaduje se u některých přepisů (např. dovezených aut).

## 3. Podejte žádost

Přepis vyřídíte na **kterémkoli obecním úřadu obce s rozšířenou působností**, nezáleží na bydlišti. Druhou cestou je **Portál dopravy**: žádost lze zahájit online s bankovní identitou nebo datovou schránkou, na úřadě pak jen předáte doklady. Online podání je levnější.

## 4. Zaplaťte poplatky

| Vozidlo | Na úřadě | Přes Portál dopravy |
|---|---|---|
| osobní auto | 800 Kč | 640 Kč |
| motocykl nad 50 cm³ | 500 Kč | 400 Kč |

U aut s emisní třídou **Euro 0 až Euro 2** se navíc platí **ekologický poplatek** (3 000 až 10 000 Kč). Kdo poplatky zaplatí, si dohodněte předem a napište to do smlouvy.

## 5. Po přepisu

- Kupující dostane nové osvědčení o registraci, značky zůstávají na autě.
- **Prodávající** ukončí své povinné ručení – výpověď z důvodu změny vlastníka a doklad o přepisu pošle pojišťovně. Přeplatek pojistného se vrací.
- Kupující si hned po podpisu smlouvy sjedná vlastní povinné ručení – bez něj nesmí auto řídit.

## Na co si dát pozor

- **Nepředávejte auto bez domluvy, kdy a jak proběhne přepis.** Nejbezpečnější je jít na úřad spolu hned po podpisu.
- Do předávacího protokolu zapište **datum a čas předání** a stav tachometru. Kdyby kupující přepis neudělal, prokážete, od kdy auto řídí on.
- Když kupující přepis nevyřídí, může prodávající po uplynutí lhůty požádat o zápis sám nebo podat podnět úřadu.

## Shrnutí

Na přepis je 10 pracovních dnů, žádost podávají oba vlastníci a poplatek za osobní auto je 800 Kč (online 640 Kč). Kdo nemůže přijít, dá druhému plnou moc s ověřeným podpisem.
'''))

C.append(dict(zeme='cz', slug='vypoved-povinneho-ruceni',
  title='Výpověď povinného ručení: 6 týdnů před výročím, po nehodě i po prodeji auta',
  nazev='Výpověď povinného ručení',
  description='Kdy a jak vypovědět povinné ručení: k výročí 6 týdnů předem, do 2 měsíců od sjednání, po pojistné události, při zdražení a po prodeji auta. Zákon 30/2024 Sb.',
  perex='Povinné ručení se automaticky prodlužuje každý rok. Změnit pojišťovnu můžete jen v zákonem daných situacích – a skoro vždy rozhoduje, kdy výpověď pojišťovna dostane.',
  kategorie='auto', tema='povinne-ruceni',
  dokumenty=['vypoved-povinneho-ruceni', 'kupni-smlouva-auto'],
  slova=['výpověď povinného ručení', 'změna pojišťovny', 'výročí smlouvy', '6 týdnů', 'pojistná událost', 'přeplatek pojistného', 'zelená karta'],
  zdroje=[('Zákon č. 30/2024 Sb., o pojištění odpovědnosti z provozu vozidla (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2024/30'),
          ('Občanský zákoník č. 89/2012 Sb., § 2805 a § 2807 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2012/89'),
          ('Praktické informace k pojištění odpovědnosti z provozu vozidla (Ministerstvo financí)', 'https://mf.gov.cz/cs/financni-trh/pojistovnictvi/pojisteni-odpovednosti-z-provozu-vozidla/2024/prakticke-informace-k-pojisteni-odpovednosti-z-pro-55458')],
  faq=[('Do kdy musím poslat výpověď k výročí?', 'Pojišťovna ji musí dostat nejpozději 6 týdnů před koncem pojistného období. Rozhoduje doručení, ne odeslání. Když to nestihnete, smlouva poběží další rok.'),
       ('Musím po prodeji auta povinné ručení vypovídat?', 'Pojištění zaniká změnou vlastníka, ale pojišťovně to musíte oznámit a doložit (kupní smlouvou nebo dokladem o přepisu). Teprve pak vám vrátí přeplatek.'),
       ('Můžu odejít, když pojišťovna zdraží?', 'Ano. Se zvýšením pojistného můžete nesouhlasit, obvykle do 1 měsíce od doručení oznámení. Přesnou lhůtu najdete v pojistných podmínkách a v dopise o změně.')],
  body='''Povinné ručení (zákonné pojištění odpovědnosti z provozu vozidla) se sjednává na dobu neurčitou a prodlužuje se každý rok. Od 1. dubna 2024 ho upravuje **zákon č. 30/2024 Sb.**, výpovědi se řídí hlavně **občanským zákoníkem**. Vypovědět ho můžete v těchto situacích.

## 1. K výročí – nejčastější cesta

Výpověď ke konci pojistného období nemusíte zdůvodňovat. Pojišťovna ji ale musí **dostat nejpozději 6 týdnů před koncem období**. Výročí najdete ve smlouvě nebo na zelené kartě. Pozdě doručená výpověď platí až k dalšímu výročí.

**Tip:** výpověď pošlete aspoň 2 měsíce předem, doporučeně nebo přes datovou schránku či formulář pojišťovny, aby šlo doručení doložit.

## 2. Do 2 měsíců od sjednání

Novou smlouvu můžete vypovědět **do dvou měsíců od uzavření** s **osmidenní výpovědní dobou** (§ 2805 písm. a) občanského zákoníku). Hodí se, když jste uzavřeli pojištění ve spěchu a pak našli výhodnější.

## 3. Po pojistné události

Po škodní události můžete vypovědět **do 3 měsíců od jejího oznámení** s **měsíční výpovědní dobou** (§ 2805 písm. b)). Do výpovědi uveďte číslo pojistné události.

## 4. Když pojišťovna zdraží

Pokud pojišťovna oznámí vyšší pojistné na další období, můžete se změnou **nesouhlasit**, typicky do 1 měsíce od doručení oznámení. Pojištění pak skončí ke konci pojistného období. Lhůtu si ověřte v pojistných podmínkách.

## 5. Po prodeji auta

Změnou vlastníka pojištění zaniká. Pojišťovně pošlete oznámení s **kupní smlouvou** nebo **dokladem o přepisu** a požádejte o vrácení nespotřebovaného pojistného. Pojišťovně zároveň vrátíte zelenou kartu, pokud ji chce zpět.

## Co do výpovědi napsat

- jméno, adresu a datum narození pojistníka,
- **číslo pojistné smlouvy** a registrační značku nebo VIN,
- důvod a zákonné ustanovení (u výpovědi k výročí stačí „ke konci pojistného období“),
- číslo účtu pro vrácení přeplatku,
- podpis.

## Na co si dát pozor

- Než starou smlouvu ukončíte, mějte **novou sjednanou od následujícího dne**. Za každý den bez povinného ručení platí provozovatel příspěvek České kanceláři pojistitelů.
- Bonus za bezeškodní jízdu se přenáší do nové pojišťovny. Pokud smlouva zanikne pro neplacení, bonus můžete ztratit.

## Shrnutí

Bez udání důvodu odejdete k výročí – výpověď musí dorazit 6 týdnů předem. Mimo výročí vypovíte do 2 měsíců od sjednání, do 3 měsíců po pojistné události nebo při zdražení. Po prodeji auta stačí změnu doložit.
'''))

C.append(dict(zeme='cz', slug='promlceni-dluhu',
  title='Promlčení dluhu: 3 roky, 10 let a jak promlčení zastavit',
  nazev='Promlčení dluhu',
  description='Za jak dlouho se dluh promlčí, od kdy lhůta běží a jak ji zastavit: žaloba, uznání dluhu s novou lhůtou 10 let. Podle § 609 a násl. občanského zákoníku.',
  perex='Dluh promlčením nezaniká, ale dlužník se může bránit, že je promlčený – a soud mu pak peníze nepřizná. Věřitel proto musí hlídat lhůty.',
  kategorie='penize', tema='dluhy',
  dokumenty=['uznani-dluhu', 'smlouva-o-zapujcce'],
  slova=['promlčení dluhu', 'promlčecí lhůta', '3 roky', 'uznání dluhu', 'žaloba', 'vymáhání dluhu', 'dlužník'],
  zdroje=[('Občanský zákoník č. 89/2012 Sb., § 609 až § 653 a § 2053 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2012/89')],
  faq=[('Za jak dlouho se promlčí půjčka mezi známými?', 'Obecná promlčecí lhůta je 3 roky. Začíná běžet, když se věřitel dozví, že dlužník nezaplatil, typicky dnem po splatnosti. Nejpozději se právo promlčí za 10 let od porušení povinnosti.'),
       ('Zastaví promlčení upomínka nebo SMS?', 'Ne. Promlčení zastaví hlavně podání žaloby nebo návrhu na vydání platebního rozkazu. Pomůže také písemné uznání dluhu dlužníkem.'),
       ('Co když dlužník zaplatí dluh, který už je promlčený?', 'Platba je platná a dlužník ji nemůže požadovat zpět. Promlčení jen umožňuje dlužníkovi odmítnout plnit, pokud se ho dovolá.')],
  body='''Promlčení řeší občanský zákoník v § 609 a násl. Neznamená, že dluh zmizí. Pokud ale věřitel podá žalobu pozdě a dlužník **namítne promlčení**, soud mu dluh nepřizná.

## Jak dlouhé jsou lhůty

- **3 roky** – obecná (subjektivní) promlčecí lhůta (§ 629 odst. 1). Začíná běžet, když se věřitel dozvěděl nebo měl dozvědět o tom, že může dluh vymáhat. U půjček typicky **den po splatnosti**.
- **10 let** – nejzazší (objektivní) lhůta od porušení povinnosti (§ 629 odst. 2). Po ní je dluh promlčený, i kdyby se věřitel o ničem nedozvěděl.
- **10 let od uznání** – když dlužník dluh písemně uzná (§ 639). Pokud v uznání určí den splacení, běží lhůta od tohoto dne.

## Jak promlčení zastavit

### Podáním žaloby

Lhůta **neběží**, když věřitel u soudu uplatní dluh – podá **žalobu** nebo návrh na **elektronický platební rozkaz** (§ 648). Řízení ale musí řádně pokračovat.

### Uznáním dluhu

Nejlevnější cesta. Dlužník písemně potvrdí **důvod a výši dluhu** a podepíše to. Tím začne běžet nová desetiletá lhůta. Hodí se hlavně tam, kde dlužník chce platit, jen později nebo na splátky.

### Co nepomůže

Telefonáty, SMS, e-maily a ani doporučená **upomínka** promlčecí lhůtu nezastaví. Jako důkaz komunikace se ale hodí.

## Praktický postup pro věřitele

1. Zjistěte **den splatnosti** (ve smlouvě o zápůjčce nebo v dohodě).
2. Spočítejte konec tříleté lhůty a dejte si upozornění aspoň půl roku předem.
3. Požádejte dlužníka o **uznání dluhu**, ideálně se splátkovým kalendářem.
4. Když uznání odmítne a lhůta se blíží, pošlete **předžalobní výzvu** (povinná kvůli náhradě nákladů řízení) a podejte žalobu.

## Na co si dát pozor

- Promlčení soud **nezkoumá sám**, dlužník ho musí namítnout.
- Zaplatí-li dlužník promlčený dluh dobrovolně, nemůže peníze chtít zpět.
- U splátek se lhůta počítá **zvlášť pro každou splátku**. Při ztrátě výhody splátek běží od splatnosti celého zbytku.

## Shrnutí

Na vymáhání máte zpravidla 3 roky od splatnosti, nejvýš 10 let. Lhůtu zastaví jen soud nebo písemné uznání dluhu, které dává nových 10 let.
'''))

C.append(dict(zeme='cz', slug='vypoved-z-najmu',
  title='Výpověď z nájmu bytu: výpovědní doba 3 měsíce a důvody pro obě strany',
  nazev='Výpověď z nájmu bytu',
  description='Jak dát výpověď z nájmu bytu: nájemce na dobu neurčitou bez důvodu, pronajímatel jen z důvodů podle § 2288. Tříměsíční výpovědní doba, poučení, okamžitá výpověď.',
  perex='Nájemce bytu může nájem na dobu neurčitou vypovědět kdykoliv a bez důvodu. Pronajímatel jen z důvodů, které vyjmenovává zákon – a výpověď musí mít předepsané náležitosti.',
  kategorie='bydleni', tema='konec-najmu',
  dokumenty=['vypoved-z-najmu', 'dohoda-o-skonceni-najmu', 'predavaci-protokol-byt'],
  slova=['výpověď z nájmu', 'výpovědní doba', 'nájem bytu', 'nájemce', 'pronajímatel', 'okamžitá výpověď', 'dohoda o skončení nájmu'],
  zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2231, § 2286 až § 2291 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2012/89'),
          ('Veřejný ochránce práv – leták Nájem bytu', 'https://www.ochrance.cz/letaky/najem-bytu/najem-bytu.pdf')],
  faq=[('Od kdy běží tříměsíční výpovědní doba?', 'Od prvního dne kalendářního měsíce, který následuje po doručení výpovědi druhé straně. Výpověď doručená 15. března tak skončí 30. června.'),
       ('Může nájemce vypovědět nájem na dobu určitou?', 'Jen když se změní okolnosti, z nichž strany při uzavření smlouvy vycházely, natolik, že po něm nelze rozumně chtít, aby v nájmu pokračoval (§ 2287). Jednodušší je dohoda o skončení nájmu.'),
       ('Musí být výpověď písemná?', 'Ano. Výpověď z nájmu bytu musí mít písemnou formu a musí být druhé straně doručena. Výpověď pronajímatele navíc musí obsahovat poučení o právu vznést námitky a navrhnout přezkum soudem.')],
  body='''Nájem bytu chrání občanský zákoník víc než jiné smlouvy. Ujednání, která by zhoršila postavení nájemce, nemají účinky (§ 2235). Pro výpověď proto platí hlavně to, co stanoví zákon.

## Výpověď ze strany nájemce

- **Nájem na dobu neurčitou:** nájemce může vypovědět **bez udání důvodu** s **tříměsíční výpovědní dobou** (§ 2231).
- **Nájem na dobu určitou:** jen ze zákonného důvodu – podstatná změna okolností (§ 2287), například nové zaměstnání v jiném městě nebo zdravotní důvody. Často je jednodušší domluvit **dohodu o skončení nájmu**.
- **Okamžitá výpověď:** jen když pronajímatel porušuje povinnosti zvlášť hrubým způsobem (§ 2232), např. byt je nezpůsobilý k bydlení a pronajímatel to neřeší.

## Výpověď ze strany pronajímatele

Pronajímatel může vypovědět **jen z důvodů v § 2288**, například:

- nájemce **hrubě porušuje povinnosti** vyplývající z nájmu,
- byl odsouzen za úmyslný trestný čin proti pronajímateli, jeho rodině nebo domu,
- byt je třeba **vyklidit kvůli veřejnému zájmu**,
- pronajímatel potřebuje byt pro sebe, manžela nebo blízké příbuzné (při zákonných podmínkách).

Výpovědní doba je **3 měsíce**. Výpověď musí obsahovat **důvod** a **poučení**, že nájemce může vznést **námitky** a do **2 měsíců** navrhnout soudu přezkoumání oprávněnosti výpovědi (§ 2286, § 2290). Bez poučení je výpověď neplatná.

**Bez výpovědní doby** (§ 2291) může pronajímatel vypovědět jen při zvlášť závažném porušení povinností – například když nájemce nezaplatil nájemné a služby za **alespoň 3 měsíce** nebo byt poškozuje závažně a nenapravitelně. Nájemce pak musí byt vyklidit do 1 měsíce.

## Jak výpověď doručit

- Písemně, vlastnoručně podepsanou.
- **Doporučeně s dodejkou**, osobně proti podpisu nebo datovou schránkou.
- Výpovědní doba začíná **prvním dnem měsíce po doručení**.

## Po skončení nájmu

1. Domluvte termín předání a sepište **předávací protokol**: stav bytu, měřidla, klíče.
2. Nájemce vrací byt v původním stavu s ohledem na **běžné opotřebení**.
3. Pronajímatel vrátí **kauci s úroky**, může si započíst dluhy na nájemném nebo náhradu škody.
4. Do roka se vyúčtují služby podle zákona č. 67/2013 Sb.

## Shrnutí

Nájemce s nájmem na dobu neurčitou dá výpověď kdykoliv s tříměsíční výpovědní dobou. Pronajímatel potřebuje zákonný důvod a poučení o přezkumu u soudu. Výpověď vždy písemně a s doloženým doručením.
'''))

C.append(dict(zeme='cz', slug='kauce-u-najmu',
  title='Kauce u nájmu bytu: kolik smí být, kdy se vrací a co si může pronajímatel odečíst',
  nazev='Kauce (jistota) u nájmu',
  description='Jistota u nájmu bytu podle § 2254 občanského zákoníku: nejvýš trojnásobek nájemného, vrací se s úroky po skončení nájmu. Co lze započíst a jak kauci doložit.',
  perex='Kauci zákon nazývá jistota. Smí být nejvýš trojnásobkem měsíčního nájemného a po skončení nájmu ji pronajímatel vrací i s úroky.',
  kategorie='bydleni', tema='konec-najmu',
  dokumenty=['najemni-smlouva-byt', 'predavaci-protokol-byt', 'potvrzeni-o-prevzeti-penez'],
  slova=['kauce', 'jistota', 'vrácení kauce', 'nájem bytu', 'trojnásobek nájemného', 'úroky z kauce', 'předávací protokol'],
  zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2254 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2012/89'),
          ('Veřejný ochránce práv – leták Nájem bytu', 'https://www.ochrance.cz/letaky/najem-bytu/najem-bytu.pdf')],
  faq=[('Jak vysoká může být kauce?', 'Jistota a případná smluvní pokuta dohromady nesmí přesáhnout trojnásobek měsíčního nájemného. Do nájemného se nepočítají zálohy na služby.'),
       ('Má nájemce nárok na úroky z kauce?', 'Ano. Při skončení nájmu vrací pronajímatel jistotu i s úroky. Výši úroku lze sjednat, nesmí ale být nižší, než stanoví zákon.'),
       ('Co si pronajímatel může z kauce odečíst?', 'Dlužné nájemné, nedoplatky za služby a náhradu škody na bytě nad rámec běžného opotřebení. Odečtené položky by měl vyčíslit a doložit.')],
  body='''Kauce chrání pronajímatele pro případ, že nájemce nezaplatí nebo byt poškodí. Zákon ji nazývá **jistota** a upravuje ji **§ 2254 občanského zákoníku**.

## Kolik smí kauce být

Jistota spolu s případnou smluvní pokutou smí být **nejvýš trojnásobek měsíčního nájemného**. Zálohy na služby (voda, teplo, výtah) se do nájemného nepočítají. Při nájemném 15 000 Kč tedy kauce nesmí přesáhnout 45 000 Kč.

Ujednání o vyšší kauci je v rozsahu přesahu **bez účinků** – nájemce může přeplatek požadovat zpět.

## Jak kauci předat

- Ideálně **převodem na účet**, platba sama je doklad.
- Při hotovosti si nechte vystavit **potvrzení o převzetí peněz**.
- Do nájemní smlouvy napište výši jistoty, datum zaplacení a účet pro vrácení.

## Kdy a jak se kauce vrací

Při **skončení nájmu** vrátí pronajímatel jistotu **s úroky**. Zákon nestanoví přesný počet dní, proto je dobré lhůtu dohodnout ve smlouvě nebo v **dohodě o skončení nájmu** (např. do 30 dnů od předání bytu).

Pronajímatel si může **započíst**:

- dlužné nájemné a nedoplatek z vyúčtování služeb,
- náhradu škody na bytě, která přesahuje **běžné opotřebení**,
- náklady na odstranění věcí, které nájemce v bytě nechal.

Na co si započíst nesmí: běžné opotřebení (vyšlapaný koberec, drobné stopy po nábytku), výmalbu po letech bydlení, pokud se nesjednalo jinak.

## Proč je důležitý předávací protokol

Spory o kauci se skoro vždy točí kolem stavu bytu. Proto při nastěhování i vystěhování sepište **předávací protokol** se stavem místností, vybavení a měřidel a **nafoťte** byt. Bez protokolu se těžko prokazuje, co bylo poškozené už předtím.

## Když pronajímatel kauci nevrací

1. Pošlete písemnou **výzvu** s vyčíslením a číslem účtu.
2. Pokud nereaguje, pošlete **předžalobní výzvu** (aspoň 7 dní před podáním žaloby).
3. Kauci lze vymáhat u soudu. Poradit vám může i poradna Iuridicum Remedium nebo veřejný ochránce práv.

## Shrnutí

Kauce smí být nejvýš trojnásobek nájemného bez služeb, vrací se s úroky po skončení nájmu a pronajímatel z ní smí odečíst jen dluhy a doložené škody. Rozhoduje kvalitní předávací protokol.
'''))

C.append(dict(zeme='cz', slug='plna-moc-kdy-overit',
  title='Plná moc: kdy stačí obyčejná a kdy potřebujete úředně ověřený podpis',
  nazev='Plná moc v praxi',
  description='Jak napsat plnou moc podle § 441 občanského zákoníku, kdy stačí obyčejná a kdy úřad chce ověřený podpis (registr vozidel, katastr). Kde podpis ověřit.',
  perex='Plnou mocí pověříte někoho, aby za vás jednal. Často stačí obyčejná podepsaná listina, pro některé úřady ale potřebujete úředně ověřený podpis.',
  kategorie='rodina-a-urady', tema='plna-moc',
  dokumenty=['plna-moc', 'plna-moc-prepis-vozidla'],
  slova=['plná moc', 'zmocnění', 'ověřený podpis', 'legalizace', 'Czech POINT', 'zmocněnec', 'zmocnitel'],
  zdroje=[('Občanský zákoník č. 89/2012 Sb., § 441 až § 449 (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2012/89'),
          ('Zákon č. 21/2006 Sb., o ověřování shody opisu nebo kopie s listinou a o ověřování pravosti podpisu (e-Sbírka)', 'https://www.e-sbirka.cz/sb/2006/21')],
  faq=[('Musí plnou moc podepsat i zmocněnec?', 'Obecně ne, stačí podpis zmocnitele. Některé úřady a soudy ale chtějí, aby zmocněnec plnou moc přijal svým podpisem. U plných mocí pro úřady je to dobrá praxe.'),
       ('Kde si nechám ověřit podpis?', 'Na kontaktním místě Czech POINT (pošta, obecní úřad), na matričním úřadě nebo u notáře. Podepisujete před úředníkem a předložíte občanský průkaz. V zahraničí na českém zastupitelském úřadě.'),
       ('Jak dlouho plná moc platí?', 'Dokud ji zmocnitel neodvolá, zmocněnec ji nevypoví, nebo dokud neuplyne doba či se nevyřídí věc, na kterou byla dána. Smrtí zmocnitele zpravidla zaniká.')],
  body='''Plná moc je listina, kterou **zmocnitel** pověřuje **zmocněnce**, aby za něj jednal. Upravuje ji **§ 441 a násl. občanského zákoníku**.

## Co v plné moci nesmí chybět

- **zmocnitel a zmocněnec** – jméno, datum narození, adresa,
- **rozsah zmocnění** – co přesně smí zmocněnec udělat (např. „přepis vozidla RZ 1AB 2345 v registru vozidel“),
- datum a **podpis zmocnitele**,
- případně omezení: do kdy platí, zda smí zmocněnec určit náhradníka.

Čím konkrétnější rozsah, tím menší riziko, že zmocněnec udělá víc, než jste chtěli – a tím ochotněji ji úřad přijme.

## Obyčejná, nebo s ověřeným podpisem?

**Obyčejná podepsaná plná moc** stačí na většinu běžných věcí: vyzvednutí zásilky, jednání s pojišťovnou, podání na úřadě, kde zákon ověření nevyžaduje.

**Úředně ověřený podpis** potřebujete, když to vyžaduje zákon nebo úřad, typicky:

- **zápis změny vlastníka v registru vozidel** (přepis auta),
- návrhy do **katastru nemovitostí** a plné moci k převodu nemovitosti,
- jednání před bankou nebo notářem, pokud o to požádají.

Platí také pravidlo z § 441 odst. 2: **vyžaduje-li právní jednání určitou formu, musí mít stejnou formu i plná moc.** Pro smlouvu, která musí být písemná, tedy písemná plná moc.

## Kde podpis ověřit

- **Czech POINT** – na poštách a obecních úřadech,
- matriční úřady a krajské úřady,
- **notář** (také pro ověření v zahraničí),
- v cizině **zastupitelský úřad ČR**.

Podepisujete před úředníkem, nebo podpis před ním uznáte za vlastní. Vezměte si **platný občanský průkaz nebo pas**.

## Generální a speciální plná moc

- **Speciální** – na jednu konkrétní věc. Bezpečnější, úřady ji preferují.
- **Generální** – na všechny záležitosti. Dávejte ji jen člověku, kterému plně věříte.

## Na co si dát pozor

- Plnou moc můžete kdykoliv **odvolat** – odvolání doručte zmocněnci i úřadu, kde se plná moc používá.
- Zmocněnec jedná jménem zmocnitele, **následky nese zmocnitel**.
- Pro zastoupení u soudu platí zvláštní pravidla (procesní plná moc).

## Shrnutí

Napište konkrétně, co smí zmocněnec udělat, a plnou moc podepište. Pro přepis auta, katastr a některá další jednání si podpis nechte ověřit na Czech POINTu nebo u notáře.
'''))

# ---------------- SK ----------------
C.append(dict(zeme='sk', slug='vratenie-tovaru-z-e-shopu',
  title='Vrátenie tovaru z e-shopu do 14 dní: postup a výnimky',
  nazev='Vrátenie tovaru z e-shopu',
  description='Odstúpenie od zmluvy uzavretej na diaľku podľa zákona č. 108/2024 Z. z.: lehota 14 dní, vrátenie peňazí, náklady na vrátenie a výnimky.',
  perex='Tovar kúpený cez internet môžete vrátiť do 14 dní od prevzatia bez udania dôvodu. Stačí v lehote odoslať odstúpenie od zmluvy.',
  kategorie='nakupy', tema='vratenie-tovaru',
  dokumenty=['odstupenie-od-zmluvy', 'reklamacia'],
  slova=['vrátenie tovaru', 'odstúpenie od zmluvy', '14 dní', 'e-shop', 'kúpa na diaľku', 'vrátenie peňazí'],
  zdroje=[('Zákon č. 108/2024 Z. z. o ochrane spotrebiteľa (Slov-Lex)', 'https://static.slov-lex.sk/static/SK/ZZ/2024/108/'),
          ('Slovenská obchodná inšpekcia', 'https://www.soi.sk/')],
  faq=[('Od kedy plynie lehota 14 dní?', 'Pri tovare odo dňa, keď ho prevezmete vy alebo ním určená osoba (nie dopravca). Pri službách odo dňa uzavretia zmluvy.'),
       ('Kedy mi e-shop vráti peniaze?', 'Do 14 dní od doručenia odstúpenia. Predávajúci však môže počkať, kým mu tovar vrátite alebo preukážete, že ste ho odoslali.'),
       ('Musím platiť poštovné za vrátenie?', 'Len ak vás o tom predávajúci vopred informoval. Inak náklady na vrátenie znáša on.')],
  body='''Pri kúpe na diaľku (e-shop, telefón, katalóg) od podnikateľa máte zo zákona právo **odstúpiť od zmluvy do 14 dní bez udania dôvodu**. Upravuje ho **zákon č. 108/2024 Z. z. o ochrane spotrebiteľa**.

## 1. Skontrolujte lehotu

Lehota je **14 dní od prevzatia tovaru**. Pri viacerých kusoch dodaných oddelene od prevzatia posledného. Rozhoduje, že odstúpenie **v lehote odošlete**, nie kedy ho e-shop dostane.

## 2. Pošlite odstúpenie

Stačí jednoznačné vyhlásenie – e-mailom, listom alebo cez formulár e-shopu. Uveďte:

- meno a adresu,
- číslo objednávky a dátum prevzatia,
- čo vraciate,
- číslo účtu na vrátenie peňazí.

Odporúčame písomnú formu s dôkazom o odoslaní.

## 3. Vráťte tovar

Tovar pošlite späť **najneskôr do 14 dní od odstúpenia**. Zabaľte ho tak, aby sa nepoškodil. Tovar si môžete vyskúšať ako v obchode – za zníženie hodnoty nad tento rámec môže predávajúci žiadať náhradu.

**Novinka od 19. 6. 2026:** e-shop musí mať priamo na webe alebo v aplikácii funkciu na odstúpenie označenú napr. „odstúpiť od zmluvy tu“ (§ 20a zákona č. 108/2024 Z. z.). Po odoslaní vám musí bez zbytočného odkladu potvrdiť prijatie. Odstúpiť však môžete aj e-mailom či listom.

## 4. Vrátenie peňazí

Predávajúci vráti **všetky platby vrátane najlacnejšieho poštovného** do 14 dní od doručenia odstúpenia. Môže ich zadržať, kým tovar nedostane alebo kým nepreukážete jeho odoslanie.

## Kedy odstúpiť nemožno

- tovar vyrobený na mieru,
- rýchlo sa kaziaci tovar,
- rozbalený tovar, ktorý z hygienických dôvodov nemožno vrátiť,
- rozbalené zvukové a obrazové nahrávky a softvér,
- ubytovanie, doprava a voľnočasové služby na konkrétny termín.

Právo neplatí ani pri kúpe v kamennej predajni a pri kúpe od súkromnej osoby (bazár, inzerát).

## Ak predávajúci nespolupracuje

Ak vás e-shop o práve na odstúpenie **nepoučil**, lehota sa predlžuje až o 12 mesiacov. Pri spore sa obráťte na **Slovenskú obchodnú inšpekciu** alebo využite alternatívne riešenie sporov.

## Zhrnutie

14 dní od prevzatia, odstúpenie stačí odoslať, tovar vrátiť do 14 dní a peniaze dostanete do 14 dní. Poštovné za vrátenie platíte len vtedy, ak vás na to e-shop vopred upozornil.
'''))

C.append(dict(zeme='sk', slug='reklamacia-tovaru',
  title='Reklamácia tovaru: 24 mesiacov, vybavenie do 30 dní',
  nazev='Reklamácia tovaru',
  description='Ako reklamovať tovar na Slovensku: zodpovednosť za vady 24 mesiacov, vybavenie reklamácie do 30 dní, potvrdenie a čo robiť pri zamietnutí.',
  perex='Za vady tovaru zodpovedá predávajúci 24 mesiacov od prevzatia. Reklamáciu musí vybaviť spravidla do 30 dní.',
  kategorie='nakupy', tema='reklamacia',
  dokumenty=['reklamacia', 'odstupenie-od-zmluvy'],
  slova=['reklamácia', 'záruka', 'vada tovaru', '24 mesiacov', '30 dní', 'SOI', 'oprava', 'výmena'],
  zdroje=[('Občiansky zákonník č. 40/1964 Zb., § 619 až § 627 (Slov-Lex)', 'https://static.slov-lex.sk/static/SK/ZZ/1964/40/'),
          ('Zákon č. 108/2024 Z. z. o ochrane spotrebiteľa (Slov-Lex)', 'https://static.slov-lex.sk/static/SK/ZZ/2024/108/'),
          ('Slovenská obchodná inšpekcia', 'https://www.soi.sk/')],
  faq=[('Do kedy môžem reklamovať?', 'Vady môžete uplatniť do 24 mesiacov od prevzatia tovaru. Pri použitom tovare môže predávajúci lehotu skrátiť na 12 mesiacov.'),
       ('Čo ak predávajúci reklamáciu nevybaví do 30 dní?', 'Lehota je spravidla najviac 30 dní od uplatnenia. Ak ju predávajúci nedodrží, môžete požadovať výmenu tovaru alebo odstúpiť od zmluvy a obrátiť sa na SOI.'),
       ('Musím mať pokladničný doklad?', 'Kúpu treba preukázať, no nemusí to byť len bloček – stačí aj výpis z účtu, potvrdenie objednávky alebo faktúra.')],
  body='''Reklamácia je uplatnenie **zodpovednosti predávajúceho za vady**. Pravidlá sú v **Občianskom zákonníku (§ 619 až § 627)** a v zákone o ochrane spotrebiteľa.

## 1. Lehota 24 mesiacov

Vady môžete uplatniť **do 24 mesiacov od prevzatia** tovaru. Pri použitom tovare možno lehotu dohodou skrátiť na 12 mesiacov. Reklamujte čo najskôr po zistení vady.

## 2. Kde a ako reklamovať

- U **predávajúceho** – v predajni alebo e-shope, nie u výrobcu.
- Vadu **konkrétne opíšte** a odfoťte.
- Priložte doklad o kúpe (aj výpis z účtu alebo potvrdenie objednávky).
- Uveďte, aký spôsob vybavenia žiadate – **oprava** alebo **výmena**.

Predávajúci vám musí vydať **potvrdenie o uplatnení reklamácie**.

## 3. Vybavenie do 30 dní

Reklamáciu treba vybaviť bez zbytočného odkladu, **spravidla najneskôr do 30 dní** od uplatnenia. O vybavení dostanete písomný doklad.

## 4. Čo vám patrí

- najprv **oprava alebo výmena** podľa vašej voľby, ak to nie je neprimerané,
- ak oprava či výmena nie je možná alebo sa nevykoná v primeranom čase, **zľava** alebo **odstúpenie od zmluvy** a vrátenie peňazí.

## Ak reklamáciu zamietnu

1. Žiadajte písomné odôvodnenie zamietnutia.
2. Môžete dať tovar posúdiť **znalcom** – pri oprávnenej reklamácii náklady znáša predávajúci.
3. Obráťte sa na **Slovenskú obchodnú inšpekciu** alebo subjekt alternatívneho riešenia sporov.

## Zhrnutie

Reklamujte u predávajúceho do 24 mesiacov, vadu opíšte a vyžiadajte si potvrdenie. Vybavenie má trvať spravidla najviac 30 dní.
'''))

# ---------------- PL ----------------
C.append(dict(zeme='pl', slug='pcc-3-zakup-samochodu',
  title='PCC-3 po zakupie samochodu: 2%, 14 dni i nowy próg 3000 zł',
  nazev='PCC-3 po zakupie auta',
  description='Kiedy kupujący auto płaci podatek PCC: 2% wartości rynkowej, deklaracja PCC-3 w 14 dni. Od 3 listopada 2026 zwolnienie do 3000 zł.',
  perex='Kupując samochód od osoby prywatnej, płacisz podatek od czynności cywilnoprawnych. Od 3 listopada 2026 próg zwolnienia wzrósł z 1000 do 3000 zł.',
  kategorie='samochody', tema='rejestracja',
  dokumenty=['umowa-kupna-sprzedazy-samochodu', 'pelnomocnictwo-rejestracja-pojazdu'],
  slova=['PCC-3', 'podatek od zakupu samochodu', '2%', '14 dni', 'wartość rynkowa', 'e-Urząd Skarbowy', 'rejestracja'],
  zdroje=[('PCC – formularze i informacje (podatki.gov.pl)', 'https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/'),
          ('Zgłoś zbycie lub nabycie pojazdu (gov.pl)', 'https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne'),
          ('Kodeks cywilny, art. 535 i nast. (ELI)', 'https://eli.gov.pl/eli/DU/1964/93/ogl')],
  faq=[('Kto płaci PCC przy zakupie auta?', 'Kupujący. Sprzedający osoba prywatna nie płaci PCC, ale musi zgłosić zbycie pojazdu w ciągu 30 dni.'),
       ('Od jakiej kwoty płaci się PCC?', 'Od umów, w których wartość rynkowa auta przekracza 3000 zł (próg obowiązuje od 3 listopada 2026; wcześniej 1000 zł). Podatek wynosi 2% wartości rynkowej.'),
       ('Co jeśli zapłaciłem za auto mniej niż jest warte?', 'Podatek liczy się od wartości rynkowej. Jeśli zaniżysz cenę, urząd skarbowy może ją określić sam i dopłacić podatek z odsetkami.')],
  body='''Przy zakupie używanego samochodu od osoby prywatnej **kupujący** płaci **podatek od czynności cywilnoprawnych (PCC)**. Sprzedający go nie płaci.

## Ile i od czego

- **2% wartości rynkowej** auta – ceny, jaką samochód osiąga na rynku w dniu zakupu (marka, rocznik, przebieg, stan).
- Zwolnienie, jeśli wartość rynkowa **nie przekracza 3000 zł**. Próg obowiązuje od **3 listopada 2026**, wcześniej było to 1000 zł.
- Zakup od firmy z fakturą VAT – PCC się nie płaci.

## Termin: 14 dni

Deklarację **PCC-3** składasz i podatek wpłacasz **w ciągu 14 dni od podpisania umowy**. Najprościej przez **e-Urząd Skarbowy** lub serwis podatki.gov.pl – deklarację można wysłać online.

## Jak wypełnić PCC-3

1. Wybierz urząd skarbowy właściwy dla miejsca zamieszkania.
2. Przedmiot opodatkowania: umowa sprzedaży, rzecz ruchoma.
3. Wpisz **wartość rynkową** (zwykle równa cenie z umowy, jeśli jest realna).
4. Oblicz 2% (zaokrąglij do pełnych złotych).
5. Wpłać na indywidualny mikrorachunek podatkowy.

## Rejestracja i zgłoszenie zbycia

- **Kupujący:** rejestracja auta w wydziale komunikacji **w 30 dni**. Pełnomocnik może to zrobić za ciebie – opłata skarbowa 17 zł za pełnomocnictwo (bez opłaty dla najbliższej rodziny).
- **Sprzedający:** zgłoszenie zbycia pojazdu **w 30 dni** i wypowiedzenie lub przeniesienie OC.

## Na co uważać

- **Nie zaniżaj ceny** w umowie. Urząd może wezwać do korekty i doliczyć odsetki.
- Sprawdź auto w serwisie **Historia Pojazdu** (przebieg, badania, ważność OC).
- Umowę kupna-sprzedaży zachowaj – jest potrzebna do rejestracji i PCC.

## Podsumowanie

Kupujący płaci 2% wartości rynkowej i składa PCC-3 w 14 dni, jeśli auto jest warte ponad 3000 zł. Rejestracja w 30 dni, sprzedający zgłasza zbycie także w 30 dni.
'''))

C.append(dict(zeme='pl', slug='zwrot-towaru-kupionego-online',
  title='Zwrot towaru kupionego przez internet: 14 dni na odstąpienie od umowy',
  nazev='Zwrot zakupu z internetu',
  description='Odstąpienie od umowy zawartej na odległość według ustawy o prawach konsumenta: 14 dni, zwrot pieniędzy w 14 dni, koszty odesłania i wyjątki.',
  perex='Towar kupiony w sklepie internetowym możesz zwrócić w ciągu 14 dni bez podawania przyczyny. Wystarczy w terminie wysłać oświadczenie o odstąpieniu.',
  kategorie='zakupy', tema='zwrot',
  dokumenty=['odstapienie-od-umowy', 'reklamacja'],
  slova=['zwrot towaru', 'odstąpienie od umowy', '14 dni', 'sklep internetowy', 'zwrot pieniędzy', 'prawa konsumenta'],
  zdroje=[('Ustawa o prawach konsumenta, art. 27–38 (ELI)', 'https://eli.gov.pl/eli/DU/2014/827/ogl'),
          ('Prawa konsumenta – formularze i poradniki (UOKiK)', 'https://prawakonsumenta.uokik.gov.pl/')],
  faq=[('Od kiedy liczy się 14 dni?', 'Od dnia, w którym ty lub wskazana przez ciebie osoba (nie przewoźnik) objęliście towar w posiadanie. Przy usługach od dnia zawarcia umowy.'),
       ('Kiedy sklep musi oddać pieniądze?', 'Niezwłocznie, najpóźniej w 14 dni od otrzymania oświadczenia. Sklep może wstrzymać zwrot do czasu otrzymania towaru lub dowodu jego odesłania.'),
       ('Kto płaci za odesłanie towaru?', 'Konsument, chyba że sklep zgodził się je ponosić albo nie poinformował o tym obowiązku przed zakupem.')],
  body='''Przy zakupie na odległość (sklep internetowy, telefon) od przedsiębiorcy masz **prawo odstąpić od umowy w ciągu 14 dni bez podawania przyczyny**. Reguluje to **ustawa o prawach konsumenta (art. 27 i nast.)**.

## 1. Termin

**14 dni od otrzymania towaru**. Przy kilku rzeczach dostarczanych osobno – od otrzymania ostatniej. Liczy się **wysłanie** oświadczenia przed upływem terminu.

## 2. Oświadczenie o odstąpieniu

Możesz użyć formularza ze sklepu albo napisać własne oświadczenie – e-mailem lub listem. Podaj:

- imię, nazwisko i adres,
- numer zamówienia i datę odbioru,
- co zwracasz,
- numer konta do zwrotu.

**Przycisk „odstąp od umowy tutaj”:** unijna dyrektywa 2023/2673 wymaga od sklepów internetowych funkcji odstąpienia w serwisie. W Polsce nowelizacja ustawy o prawach konsumenta jest jeszcze w przygotowaniu – do jej wejścia w życie odstępujesz e-mailem, listem lub formularzem sklepu.

## 3. Odesłanie towaru

Masz **14 dni od odstąpienia** na odesłanie rzeczy. Możesz towar sprawdzić jak w sklepie stacjonarnym – za zmniejszenie wartości wynikające z używania ponad tę miarę odpowiadasz.

## 4. Zwrot pieniędzy

Sklep zwraca **wszystkie płatności, łącznie z najtańszym kosztem dostawy**, w ciągu **14 dni** od otrzymania oświadczenia. Może poczekać na towar lub dowód jego odesłania.

## Kiedy zwrot nie przysługuje

- rzeczy wykonane na zamówienie lub według specyfikacji klienta,
- towary szybko psujące się,
- rozpakowane produkty higieniczne,
- rozpakowane nagrania i oprogramowanie,
- usługi hotelowe, transport, rozrywka na konkretny termin.

Prawo nie obejmuje zakupów w sklepie stacjonarnym ani od osób prywatnych (np. OLX).

## Gdy sklep nie poinformował o prawie

Jeśli sklep nie poinformował cię o prawie odstąpienia, termin **wydłuża się o 12 miesięcy**. W sporze pomogą **rzecznik konsumentów** lub inspekcja handlowa.

## Podsumowanie

14 dni na odstąpienie, kolejne 14 na odesłanie, sklep oddaje pieniądze w 14 dni. Koszt odesłania pokrywasz ty, chyba że sklep postanowił inaczej.
'''))

# ---------------- DE ----------------
C.append(dict(zeme='de', slug='widerrufsrecht-online-kauf',
  title='Widerrufsrecht beim Online-Kauf: 14 Tage, Rücksendung und Erstattung',
  nazev='Widerruf beim Online-Kauf',
  description='Widerruf eines Online-Kaufs nach § 355 BGB: 14 Tage Frist, Rückzahlung binnen 14 Tagen, wer die Rücksendung zahlt und welche Ausnahmen gelten.',
  perex='Bei Online-Käufen von Händlern können Sie den Vertrag 14 Tage lang ohne Begründung widerrufen. Entscheidend ist, dass Sie den Widerruf rechtzeitig absenden.',
  kategorie='einkauf', tema='widerruf',
  dokumenty=['widerruf', 'maengelanzeige'],
  slova=['Widerruf', 'Widerrufsrecht', '14 Tage', 'Online-Kauf', 'Rücksendung', 'Erstattung', 'Fernabsatz'],
  zdroje=[('§ 355 BGB – Widerrufsrecht bei Verbraucherverträgen', 'https://www.gesetze-im-internet.de/bgb/__355.html'),
          ('§ 357 BGB – Rechtsfolgen des Widerrufs', 'https://www.gesetze-im-internet.de/bgb/__357.html'),
          ('Anlage 2 EGBGB – Muster-Widerrufsformular', 'https://www.gesetze-im-internet.de/bgbeg/art_253anlage_2.html'),
          ('Widerrufsbutton – Europäisches Verbraucherzentrum Deutschland', 'https://www.evz.de/themen/einkaufen-digitales/online-handel/widerrufsbutton/')],
  faq=[('Reicht es, die Ware einfach zurückzuschicken?', 'Nein. Sie müssen den Widerruf eindeutig erklären, zum Beispiel per E-Mail, Brief oder Formular des Händlers. Die bloße Rücksendung genügt nicht.'),
       ('Wann bekomme ich mein Geld zurück?', 'Spätestens 14 Tage nach Eingang des Widerrufs. Der Händler darf warten, bis er die Ware zurückhat oder Sie die Absendung nachweisen.'),
       ('Wer trägt die Rücksendekosten?', 'Sie, wenn der Händler Sie vorher darüber informiert hat. Ohne diese Information trägt der Händler die Kosten.')],
  body='''Bei Verträgen im **Fernabsatz** (Online-Shop, Telefon) mit einem Unternehmer haben Verbraucher ein **14-tägiges Widerrufsrecht** (§ 312g, § 355 BGB).

## 1. Die Frist

Die Frist beträgt **14 Tage ab Erhalt der Ware**, bei Teillieferungen ab der letzten Lieferung. Es genügt, den Widerruf **innerhalb der Frist abzusenden**.

## 2. Widerruf erklären

Eine eindeutige Erklärung reicht, eine Begründung ist nicht nötig. Nutzen Sie das **Muster-Widerrufsformular** oder einen eigenen Text mit:

- Name und Anschrift,
- Bestellnummer und Datum des Erhalts,
- betroffene Ware,
- Datum und Unterschrift (bei Papier).

Senden Sie den Widerruf so, dass Sie den Zugang nachweisen können (E-Mail, Einschreiben, Formular im Kundenkonto).

**Seit 19. Juni 2026:** Online-Shops müssen einen **Widerrufsbutton** anbieten (§ 356a BGB) – zweistufig, mit Bestätigung und sofortiger Eingangsbestätigung per E-Mail. Der Widerruf per E-Mail oder Brief bleibt trotzdem möglich.

## 3. Ware zurücksenden

Die Ware müssen Sie **binnen 14 Tagen nach dem Widerruf** zurückschicken. Sie dürfen sie prüfen wie im Laden. Für einen Wertverlust durch darüber hinausgehende Nutzung können Sie Wertersatz schulden.

## 4. Erstattung

Der Händler erstattet **alle Zahlungen inklusive der Standard-Hinsendekosten** innerhalb von **14 Tagen** (§ 357 BGB), mit demselben Zahlungsmittel. Er darf die Erstattung zurückhalten, bis die Ware ankommt oder Sie die Absendung nachweisen.

## Ausnahmen

- nach Kundenspezifikation angefertigte Waren,
- schnell verderbliche Waren,
- entsiegelte Hygieneartikel,
- entsiegelte Ton-, Video- und Softwareträger,
- Freizeitleistungen mit festem Termin (Konzerte, Hotels, Mietwagen).

Kein Widerrufsrecht besteht bei Käufen im Laden und unter Privatpersonen.

## Ohne Belehrung längere Frist

Hat der Händler nicht ordnungsgemäß belehrt, verlängert sich die Frist auf **12 Monate und 14 Tage**. Bei Streit helfen die **Verbraucherzentralen** oder die Universalschlichtungsstelle.

## Zusammenfassung

14 Tage Widerrufsfrist, Erklärung absenden, Ware binnen 14 Tagen zurück, Erstattung binnen 14 Tagen. Rücksendekosten zahlen Sie nur, wenn der Händler das vorher angekündigt hat.
'''))

# ---------------- AT ----------------
C.append(dict(zeme='at', slug='ruecktritt-online-kauf-fagg',
  title='Rücktritt vom Online-Kauf in Österreich: 14 Tage nach dem FAGG',
  nazev='Rücktritt vom Online-Kauf',
  description='Rücktrittsrecht nach dem Fern- und Auswärtsgeschäfte-Gesetz (FAGG): 14 Tage, Rückzahlung binnen 14 Tagen, Rücksendekosten und Ausnahmen.',
  perex='Bei Online-Käufen von Unternehmern können Sie in Österreich binnen 14 Tagen ohne Angabe von Gründen zurücktreten. Rechtzeitiges Absenden genügt.',
  kategorie='einkauf', tema='widerruf',
  dokumenty=['ruecktritt-widerruf', 'maengelruege'],
  slova=['Rücktritt', 'Rücktrittsrecht', 'FAGG', '14 Tage', 'Online-Kauf', 'Rücksendung', 'Rückzahlung'],
  zdroje=[('Fern- und Auswärtsgeschäfte-Gesetz (RIS)', 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20008847'),
          ('Rücktrittsrecht beim Warenkauf im Internet, FAGG (WKO)', 'https://www.wko.at/internetrecht/ruecktrittsrecht-bei-warenkauf-im-internet'),
          ('E-Commerce: Der Widerrufsbutton im Webshop (WKO)', 'https://www.wko.at/internetrecht/e-commerce-widerrufsbutton-webshop')],
  faq=[('Ab wann laufen die 14 Tage?', 'Ab dem Tag, an dem Sie oder eine von Ihnen benannte Person die Ware erhalten. Bei Dienstleistungen ab Vertragsabschluss.'),
       ('Wann bekomme ich mein Geld zurück?', 'Binnen 14 Tagen ab Zugang des Rücktritts. Der Unternehmer darf warten, bis die Ware zurück ist oder Sie die Absendung nachweisen.'),
       ('Was gilt, wenn der Shop nicht über das Rücktrittsrecht informiert hat?', 'Dann verlängert sich die Rücktrittsfrist um 12 Monate. Holt der Unternehmer die Information nach, beginnen ab dann 14 Tage.')],
  body='''Für Verträge im Fernabsatz (Online-Shop, Telefon) und außerhalb von Geschäftsräumen gilt in Österreich das **Fern- und Auswärtsgeschäfte-Gesetz (FAGG)**. Verbraucher können binnen **14 Tagen** ohne Begründung zurücktreten (§ 11 FAGG).

## 1. Frist

**14 Tage ab Erhalt der Ware**, bei mehreren getrennt gelieferten Waren ab der letzten. Es reicht, den Rücktritt **innerhalb der Frist abzusenden**.

## 2. Rücktritt erklären

Eine eindeutige Erklärung genügt – per E-Mail, Brief oder Formular des Shops. Sie können das **Muster-Widerrufsformular** (Anhang I Teil B FAGG) verwenden. Angeben sollten Sie:

- Name und Anschrift,
- Bestellnummer und Lieferdatum,
- betroffene Ware,
- Konto für die Rückzahlung.

**Neu für Verträge ab 1. Oktober 2026:** Webshops müssen eine Online-Rücktrittsfunktion („Widerrufsbutton“) bereitstellen (§ 13a FAGG, VerbRÄG 2026). Der Rücktritt per E-Mail oder Brief bleibt möglich.

## 3. Rücksendung

Die Ware ist **binnen 14 Tagen** nach dem Rücktritt zurückzusenden. Sie dürfen sie prüfen wie im Geschäft. Für Wertverlust durch weitergehende Nutzung kann der Unternehmer Ersatz verlangen.

## 4. Rückzahlung

Der Unternehmer erstattet **alle Zahlungen einschließlich der Standard-Lieferkosten binnen 14 Tagen** (§ 14 FAGG). Er darf zurückhalten, bis er die Ware erhalten hat oder Sie die Absendung nachweisen.

Rücksendekosten tragen Sie nur, wenn Sie vorher darüber informiert wurden.

## Ausnahmen

- Waren nach Kundenspezifikation,
- schnell verderbliche Waren,
- entsiegelte Hygieneartikel,
- entsiegelte Ton-, Video- und Softwareträger,
- Freizeitdienstleistungen mit festem Termin.

Kein Rücktrittsrecht nach dem FAGG besteht im Geschäftslokal und zwischen Privatpersonen.

## Fehlende Belehrung

Hat der Unternehmer nicht über das Rücktrittsrecht informiert, **verlängert sich die Frist um 12 Monate** (§ 12 FAGG). Bei Problemen helfen die **Arbeiterkammer**, der VKI oder die Internet Ombudsstelle.

## Zusammenfassung

14 Tage für den Rücktritt, Ware binnen 14 Tagen zurück, Rückzahlung binnen 14 Tagen. Rücksendekosten nur, wenn das vorher angekündigt wurde.
'''))

for c in C:
    d = os.path.join(BASE, c['zeme'])
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, c['slug'] + '.md'), 'w', encoding='utf-8') as f:
        f.write(fm(c) + '\n' + c['body'].lstrip())
    assert len(c['description']) <= 170, (c['slug'], len(c['description']))
print(len(C), 'článků')
