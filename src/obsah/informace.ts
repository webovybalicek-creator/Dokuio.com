/**
 * Textové stránky (O nás, podmínky, ochrana údajů) pro země mimo CZ. Česká verze je v src/pages/cz/.
 * Stránky se generují v src/pages/[zeme]/[info]/index.astro, odkazy v patičce bere Base.astro z INFO_ODKAZY.
 * Provozovatel je v ČR → řídí se českým právem; práva spotřebitele podle země bydliště zůstávají.
 */
import { SITE } from '../lib/config';
import { naSchweiz } from '../i18n/schweiz';

export type TypInfo = 'onas' | 'podminky' | 'ochrana';
export interface InfoStranka {
  typ: TypInfo;
  slug: string;
  title: string;
  description: string;
  aktualizovano?: string;
  /** HTML obsahu (bez nadpisu h1) */
  html: string;
}

const p = SITE.provozovatel;
const e = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;
const AKT = '19. 11. 2026';

/* ------------------------------------------------------------------ slovensky */
const SK: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'o-nas',
    title: 'O Dokuio – vzory zmlúv zadarmo',
    description: 'Dokuio.com – vzory zmlúv zadarmo v PDF a Worde. Kto za webom stojí a ako vzory vznikajú.',
    html: `<p class="text-stranka__vytah">Dokuio vzniklo, aby si každý mohol jednoduchú zmluvu – napríklad pri predaji auta – pripraviť sám, rýchlo a zadarmo. Bez registrácie, bez platenia za stiahnutie a bez právnickej hantýrky.</p>
<h2>Ako vzory vznikajú</h2>
<ul><li>Text zmlúv zostavujeme podľa platných slovenských zákonov a úradných zdrojov (Slov-Lex, slovensko.sk), nie pomocou umelej inteligencie.</li>
<li>Každý vzor má číslo verzie a dátum aktualizácie; vidno ich na stránke aj v pätičke PDF. QR kód v PDF vedie na overenie verzie.</li>
<li>Ku každému poľu píšeme nápovedu a ku každému dokumentu tipy „Pred podpisom skontrolujte“.</li>
<li>Zámerne nepridávame zložité doložky. Jednoduchý a vyvážený text je pre bežné situácie bezpečnejší.</li></ul>
<h2>Prečo je to zadarmo</h2>
<p>Chceme, aby základné zmluvy boli dostupné všetkým. Prevádzku hradíme sami a z dobrovoľných príspevkov používateľov.</p>
<h2>Kontakt</h2>
<p>${p.nazev}<br />IČO ${p.ico}<br />${p.sidlo}, Česká republika<br />E-mail: ${e}</p>
<p>Našli ste vo vzore chybu alebo vám nejaká zmluva chýba? Napíšte nám, každú správu čítame.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'podmienky-pouzivania',
    title: 'Podmienky používania',
    description: 'Podmienky používania webu Dokuio.com – vzory zmlúv zadarmo v PDF a Worde.',
    aktualizovano: AKT,
    html: `<h2>1. Kto web prevádzkuje</h2><p>Web dokuio.com prevádzkuje ${p.nazev}, IČO ${p.ico}, so sídlom ${p.sidlo}, Česká republika (ďalej „prevádzkovateľ“). Kontakt: ${e}.</p>
<h2>2. Čo Dokuio ponúka</h2><p>Vzory jednoduchých zmlúv a dokumentov, ktoré si používateľ vyplní v online sprievodcovi alebo stiahne prázdne, vo formáte PDF alebo Word. Služba je <strong>zadarmo</strong> a nevyžaduje registráciu.</p>
<h2>3. Nejde o právne poradenstvo</h2><p>Vzory poskytujeme v dobrej viere ako službu pre verejnosť. Sú zostavené podľa platných predpisov, ale <strong>nejde o právne poradenstvo</strong> a vzor nemusí zodpovedať každej situácii. Prevádzkovateľ nie je advokát a nevstupuje do zmluvného vzťahu medzi stranami.</p>
<h2>4. Zodpovednosť používateľa</h2><p>Za obsah, úpravy, vyplnenie a použitie zmluvy zodpovedá výlučne používateľ. Pred podpisom si zmluvu pozorne prečítajte; pri zložitejších alebo hodnotnejších veciach odporúčame poradiť sa s advokátom. Text, ktorý používateľ upraví, už nie je súčasťou nášho vzoru – v PDF je to označené.</p>
<h2>5. Obmedzenie zodpovednosti</h2><p>Prevádzkovateľ nezodpovedá za škodu vzniknutú použitím vzorov, ich nesprávnym vyplnením alebo použitím v situácii, na ktorú nie sú určené, v rozsahu, v akom to právne predpisy dovoľujú. Práva spotrebiteľa, ktoré zákon nedovoľuje vylúčiť, tým nie sú dotknuté.</p>
<h2>6. Dobrovoľná podpora</h2><p>Prevádzku možno dobrovoľne podporiť platbou cez Stripe. Platba nie je podmienkou použitia služby a nezakladá nárok na ďalšie plnenie. Ak ste zaplatili omylom, napíšte nám do 14 dní a platbu vrátime.</p>
<h2>7. Použitie vzorov</h2><p>Vzory môžete používať pre vlastnú potrebu, upravovať ich a zdieľať vyplnené zmluvy s druhou stranou. Hromadné kopírovanie a ďalšie šírenie alebo predaj vzorov ako vlastnej zbierky bez súhlasu prevádzkovateľa nie je dovolené.</p>
<h2>8. Záverečné ustanovenia</h2><p>Tieto podmienky sa riadia právom Českej republiky; tým nie sú dotknuté záväzné práva spotrebiteľa podľa práva štátu jeho bydliska. Spracúvanie osobných údajov opisuje stránka <a href="/sk/ochrana-osobnych-udajov/">Ochrana osobných údajov</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'ochrana-osobnych-udajov',
    title: 'Ochrana osobných údajov',
    description: 'Ako Dokuio.com zaobchádza s osobnými údajmi. Údaje zo zmlúv zostávajú vo vašom prehliadači.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>V skratke:</strong> údaje, ktoré vyplníte do zmluvy, sa nikam neodosielajú. Zmluva sa skladá priamo vo vašom prehliadači. Analytické cookies používame len s vaším súhlasom.</p>
<h2>1. Prevádzkovateľ</h2><p>Prevádzkovateľom je ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Česká republika, e-mail ${e}.</p>
<h2>2. Údaje v zmluvách</h2><p>Mená, adresy, údaje o vozidle a ďalšie údaje zo sprievodcu spracúva len váš prehliadač; na náš server sa <strong>neodosielajú a neukladáme ich</strong>. Rozpracovaný dokument si prehliadač ukladá do svojho miestneho úložiska (localStorage) len vo vašom zariadení; zmazať ho môžete v sprievodcovi alebo vymazaním dát prehliadača. Podpisy nakreslené na obrazovke sa neukladajú.</p>
<p><strong>Odkaz pre druhú stranu:</strong> vyplnené údaje sa zbalia priamo do odkazu (za znak #, ktorý prehliadač na server neposiela). Odkaz posielajte len druhej strane zmluvy.</p>
<p><strong>Poslanie PDF na e-mail:</strong> prehliadač odošle hotové PDF a zadanú adresu na náš server, ktorý ho raz odošle a nikde neuloží. Kvôli ochrane pred zneužitím si server 24 hodín pamätá len nevratne zašifrovaný odtlačok IP adresy a e-mailu a čas odoslania.</p>
<h2>3. Spätná väzba</h2><p>Text spätnej väzby ukladáme spolu s dátumom a adresou stránky, bez mena a e-mailu, najviac 2 roky.</p>
<h2>4. Platby</h2><p>Platby kartou spracúva Stripe Payments Europe, Ltd.; údaje o karte nevidíme. Od Stripe dostávame e-mail platiteľa, sumu a dátum, ktoré uchovávame podľa účtovných predpisov.</p>
<h2>5. Analytika a cookies</h2><p>Ak v lište súhlasíte, používame Google Analytics 4 (Google Ireland Ltd.) na anonymné meranie návštevnosti; IP adresy Google v EÚ neukladá. Bez súhlasu sa analytika nenačíta a nepoužívame žiadne cookies. Súhlas môžete kedykoľvek zmeniť odkazom „Nastavenie cookies“ v pätičke.</p>
<h2>6. Hosting</h2><p>Web beží na serveroch Exon v Českej republike, ktoré krátko uchovávajú technické záznamy o prístupoch kvôli bezpečnosti. Fotografie v poradni sa načítavajú zo služby Unsplash (images.unsplash.com), ktorá pritom vidí vašu IP adresu.</p>
<h2>7. Vaše práva</h2><p>Máte právo na prístup, opravu, vymazanie, obmedzenie spracúvania a námietku. Napíšte nám na ${e}. Sťažnosť môžete podať Úradu na ochranu osobných údajov SR (<a href="https://dataprotection.gov.sk" rel="noopener">dataprotection.gov.sk</a>) alebo českému Úradu pre ochranu osobných údajov.</p>`,
  },
];

/* ------------------------------------------------------------------ polsky */
const PL: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'o-nas',
    title: 'O Dokuio – darmowe wzory umów',
    description: 'Dokuio.com – darmowe wzory umów w PDF i Word. Kto stoi za serwisem i jak powstają wzory.',
    html: `<p class="text-stranka__vytah">Dokuio powstało, żeby każdy mógł sam, szybko i za darmo przygotować prostą umowę – na przykład przy sprzedaży auta. Bez rejestracji, bez opłat za pobranie i bez prawniczego żargonu.</p>
<h2>Jak powstają wzory</h2>
<ul><li>Treść umów opieramy na obowiązujących polskich przepisach i oficjalnych źródłach (ISAP, gov.pl, podatki.gov.pl), a nie na sztucznej inteligencji.</li>
<li>Każdy wzór ma numer wersji i datę aktualizacji – widać je na stronie i w stopce PDF. Kod QR w PDF prowadzi do weryfikacji wersji.</li>
<li>Do każdego pola dodajemy podpowiedź, a do każdego dokumentu wskazówki „Sprawdź przed podpisaniem”.</li>
<li>Celowo nie dodajemy skomplikowanych klauzul. Prosty i wyważony tekst jest bezpieczniejszy w typowych sytuacjach.</li></ul>
<h2>Dlaczego za darmo</h2><p>Chcemy, aby podstawowe umowy były dostępne dla wszystkich. Utrzymanie finansujemy sami i z dobrowolnych wpłat użytkowników.</p>
<h2>Kontakt</h2><p>${p.nazev}<br />IČO (nr identyfikacyjny w Czechach) ${p.ico}<br />${p.sidlo}, Czechy<br />E-mail: ${e}</p>
<p>Znalazłeś błąd we wzorze albo brakuje Ci jakiejś umowy? Napisz do nas – czytamy każdą wiadomość.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'regulamin',
    title: 'Regulamin',
    description: 'Regulamin serwisu Dokuio.com – darmowe wzory umów w PDF i Word: zakres usługi, odpowiedzialność i zasady korzystania ze wzorów.',
    aktualizovano: AKT,
    html: `<h2>1. Usługodawca</h2><p>Serwis dokuio.com prowadzi ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Czechy („usługodawca”). Kontakt: ${e}.</p>
<h2>2. Co oferuje Dokuio</h2><p>Wzory prostych umów i dokumentów, które użytkownik wypełnia w kreatorze online albo pobiera puste, w formacie PDF lub Word. Usługa jest <strong>bezpłatna</strong> i nie wymaga rejestracji.</p>
<h2>3. To nie jest porada prawna</h2><p>Wzory udostępniamy w dobrej wierze jako usługę publiczną. Są przygotowane według obowiązujących przepisów, ale <strong>nie stanowią porady prawnej</strong> i mogą nie pasować do każdej sytuacji. Usługodawca nie jest prawnikiem i nie jest stroną umów zawieranych przez użytkowników.</p>
<h2>4. Odpowiedzialność użytkownika</h2><p>Za treść, zmiany, wypełnienie i wykorzystanie umowy odpowiada wyłącznie użytkownik. Przed podpisaniem przeczytaj umowę uważnie; w sprawach złożonych lub o dużej wartości skonsultuj się z prawnikiem. Tekst zmieniony przez użytkownika nie jest częścią naszego wzoru – w PDF jest to oznaczone.</p>
<h2>5. Ograniczenie odpowiedzialności</h2><p>Usługodawca nie odpowiada za szkody wynikłe z użycia wzorów, ich błędnego wypełnienia lub użycia w sytuacji, do której nie są przeznaczone, w zakresie dopuszczalnym przez prawo. Nie dotyczy to uprawnień konsumenta, których nie można wyłączyć.</p>
<h2>6. Dobrowolne wsparcie</h2><p>Serwis można dobrowolnie wesprzeć płatnością przez Stripe. Wpłata nie jest warunkiem korzystania z usługi i nie daje prawa do dodatkowych świadczeń. Jeśli zapłaciłeś omyłkowo, napisz w ciągu 14 dni – zwrócimy pieniądze.</p>
<h2>7. Korzystanie ze wzorów</h2><p>Wzory możesz wykorzystywać na własne potrzeby, zmieniać je i udostępniać wypełnione umowy drugiej stronie. Masowe kopiowanie oraz rozpowszechnianie lub sprzedaż wzorów jako własnego zbioru bez zgody usługodawcy są zabronione.</p>
<h2>8. Postanowienia końcowe</h2><p>Regulamin podlega prawu czeskiemu; nie narusza to bezwzględnie obowiązujących praw konsumenta wynikających z prawa państwa jego zamieszkania. Przetwarzanie danych opisuje <a href="/pl/polityka-prywatnosci/">Polityka prywatności</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'polityka-prywatnosci',
    title: 'Polityka prywatności',
    description: 'Jak Dokuio.com przetwarza dane osobowe. Dane z umów zostają w Twojej przeglądarce.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>W skrócie:</strong> dane wpisane do umowy nigdzie nie są wysyłane. Umowa powstaje bezpośrednio w Twojej przeglądarce. Analityczne pliki cookie stosujemy tylko za Twoją zgodą.</p>
<h2>1. Administrator</h2><p>Administratorem danych jest ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Czechy, e-mail ${e}.</p>
<h2>2. Dane w umowach</h2><p>Imiona, adresy, dane pojazdu i inne dane z kreatora przetwarza tylko Twoja przeglądarka; <strong>nie są wysyłane na nasz serwer ani przechowywane</strong>. Rozpoczęty dokument przeglądarka zapisuje w lokalnej pamięci (localStorage) tylko na Twoim urządzeniu; możesz go usunąć w kreatorze lub czyszcząc dane przeglądarki. Podpisy rysowane na ekranie nie są zapisywane.</p>
<p><strong>Link dla drugiej strony:</strong> wpisane dane są zakodowane w samym linku (po znaku #, którego przeglądarka nie wysyła na serwer). Wysyłaj go tylko drugiej stronie umowy.</p>
<p><strong>Wysyłka PDF e-mailem:</strong> przeglądarka wysyła gotowy PDF i podany adres na nasz serwer, który jednorazowo wysyła wiadomość i niczego nie zapisuje. W celu ochrony przed nadużyciami serwer przez 24 godziny przechowuje tylko nieodwracalny skrót adresu IP i e-maila oraz czas wysyłki.</p>
<h2>3. Opinie</h2><p>Treść opinii przechowujemy z datą i adresem strony, bez imienia i e-maila, maksymalnie 2 lata.</p>
<h2>4. Płatności</h2><p>Płatności kartą obsługuje Stripe Payments Europe, Ltd.; nie widzimy danych karty. Od Stripe otrzymujemy e-mail płatnika, kwotę i datę, które przechowujemy zgodnie z przepisami rachunkowymi.</p>
<h2>5. Analityka i pliki cookie</h2><p>Jeśli wyrazisz zgodę w pasku, korzystamy z Google Analytics 4 (Google Ireland Ltd.) do anonimowego pomiaru ruchu; Google nie zapisuje adresów IP w UE. Bez zgody analityka się nie ładuje i nie używamy żadnych plików cookie. Zgodę możesz zmienić w każdej chwili przez link „Ustawienia cookies” w stopce.</p>
<h2>6. Hosting</h2><p>Serwis działa na serwerach Exon w Czechach, które krótko przechowują techniczne logi dostępu ze względów bezpieczeństwa. Zdjęcia w poradniku są wczytywane z serwisu Unsplash (images.unsplash.com), który widzi przy tym Twój adres IP.</p>
<h2>7. Twoje prawa</h2><p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i sprzeciwu. Napisz na ${e}. Skargę możesz złożyć do Prezesa UODO (<a href="https://uodo.gov.pl" rel="noopener">uodo.gov.pl</a>) lub do czeskiego organu nadzorczego (ÚOOÚ).</p>`,
  },
];

/* ------------------------------------------------------------------ maďarsky */
const HU: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'rolunk',
    title: 'A Dokuióról – ingyenes szerződésminták',
    description: 'Dokuio.com – ingyenes szerződésminták PDF-ben és Wordben. Ki áll az oldal mögött, és hogyan készülnek a minták (Magyarország).',
    html: `<p class="text-stranka__vytah">A Dokuio azért jött létre, hogy bárki gyorsan és ingyen elkészíthessen egy egyszerű szerződést – például autó eladásakor. Regisztráció, letöltési díj és jogi zsargon nélkül.</p>
<h2>Hogyan készülnek a minták</h2>
<ul><li>A szerződések szövegét a hatályos magyar jogszabályokra és hivatalos forrásokra (Nemzeti Jogszabálytár, NAV, kormany.hu) alapozzuk, nem mesterséges intelligenciára.</li>
<li>Minden mintának van verziószáma és frissítési dátuma – ez látszik az oldalon és a PDF láblécében. A PDF-ben lévő QR-kód a verzió ellenőrzéséhez vezet.</li>
<li>Minden mezőhöz súgót, minden dokumentumhoz „Aláírás előtt ellenőrizze” tippeket adunk.</li>
<li>Szándékosan nem teszünk bele bonyolult kikötéseket. Az egyszerű, kiegyensúlyozott szöveg a szokásos helyzetekben biztonságosabb.</li></ul>
<h2>Miért ingyenes</h2><p>Szeretnénk, ha az alapvető szerződések mindenki számára elérhetők lennének. Az üzemeltetést magunk és a felhasználók önkéntes támogatásaiból finanszírozzuk.</p>
<h2>Kapcsolat</h2><p>${p.nazev}<br />IČO (csehországi azonosító) ${p.ico}<br />${p.sidlo}, Csehország<br />E-mail: ${e}</p>
<p>Hibát talált egy mintában, vagy hiányzik egy szerződés? Írjon nekünk – minden üzenetet elolvasunk.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'felhasznalasi-feltetelek',
    title: 'Felhasználási feltételek',
    description: 'A Dokuio.com felhasználási feltételei – ingyenes szerződésminták PDF-ben és Wordben: a szolgáltatás köre, felelősség és a minták használata.',
    aktualizovano: AKT,
    html: `<h2>1. Szolgáltató</h2><p>A dokuio.com oldalt ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Csehország üzemelteti („szolgáltató”). Kapcsolat: ${e}.</p>
<h2>2. Mit kínál a Dokuio</h2><p>Egyszerű szerződések és dokumentumok mintáit, amelyeket a felhasználó online varázslóban tölt ki, vagy üresen tölt le PDF vagy Word formátumban. A szolgáltatás <strong>ingyenes</strong>, és nem igényel regisztrációt.</p>
<h2>3. Ez nem jogi tanácsadás</h2><p>A mintákat jóhiszeműen, közszolgálatként biztosítjuk. A hatályos jogszabályok alapján készülnek, de <strong>nem minősülnek jogi tanácsadásnak</strong>, és nem minden helyzetre alkalmasak. A szolgáltató nem ügyvéd, és nem fél a felhasználók által kötött szerződésekben.</p>
<h2>4. A felhasználó felelőssége</h2><p>A szerződés tartalmáért, módosításáért, kitöltéséért és felhasználásáért kizárólag a felhasználó felel. Aláírás előtt figyelmesen olvassa el; bonyolult vagy nagy értékű ügyben forduljon ügyvédhez. A felhasználó által módosított szöveg nem része a mintánknak – ezt a PDF jelöli.</p>
<h2>5. A felelősség korlátozása</h2><p>A szolgáltató a jogszabályok által megengedett mértékben nem felel a minták használatából, hibás kitöltéséből vagy nem rendeltetésszerű használatából eredő károkért. Ez nem érinti a fogyasztó nem korlátozható jogait.</p>
<h2>6. Önkéntes támogatás</h2><p>Az oldal önkéntesen támogatható Stripe-on keresztül. A támogatás nem feltétele a szolgáltatás használatának, és nem jogosít további szolgáltatásokra. Ha tévedésből fizetett, 14 napon belül írjon nekünk – visszautaljuk.</p>
<h2>7. A minták használata</h2><p>A mintákat saját célra használhatja, módosíthatja, és a kitöltött szerződést megoszthatja a másik féllel. A minták tömeges másolása, saját gyűjteményként való terjesztése vagy értékesítése a szolgáltató engedélye nélkül tilos.</p>
<h2>8. Záró rendelkezések</h2><p>A feltételekre a cseh jog irányadó; ez nem érinti a fogyasztó lakóhelye szerinti ország kötelező fogyasztóvédelmi szabályait. Az adatkezelést az <a href="/hu/adatvedelem/">Adatvédelmi tájékoztató</a> írja le.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'adatvedelem',
    title: 'Adatvédelmi tájékoztató',
    description: 'Hogyan kezeli a Dokuio.com a személyes adatokat. A szerződések adatai a böngészőjében maradnak, analitika csak hozzájárulással.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Röviden:</strong> a szerződésbe beírt adatokat sehová nem küldjük. A szerződés közvetlenül az Ön böngészőjében készül. Analitikai sütiket csak az Ön hozzájárulásával használunk.</p>
<h2>1. Adatkezelő</h2><p>Az adatkezelő ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Csehország, e-mail ${e}.</p>
<h2>2. A szerződések adatai</h2><p>A neveket, címeket, járműadatokat és a varázsló többi adatát csak az Ön böngészője dolgozza fel; <strong>nem kerülnek a szerverünkre, és nem tároljuk őket</strong>. A megkezdett dokumentumot a böngésző helyi tárhelyen (localStorage) menti, csak az Ön eszközén; a varázslóban vagy a böngészőadatok törlésével törölheti. A képernyőn rajzolt aláírásokat nem mentjük.</p>
<p><strong>Link a másik félnek:</strong> a beírt adatok magában a linkben vannak kódolva (a # jel után, amelyet a böngésző nem küld a szervernek). Csak a szerződő félnek küldje el.</p>
<p><strong>PDF küldése e-mailben:</strong> a böngésző a kész PDF-et és a megadott címet elküldi a szerverünknek, amely egyszer elküldi az üzenetet, és semmit nem ment. A visszaélések elleni védelem miatt a szerver 24 órán át csak az IP-cím és az e-mail visszafejthetetlen lenyomatát és a küldés idejét őrzi.</p>
<h2>3. Visszajelzések</h2><p>A visszajelzés szövegét dátummal és az oldal címével tároljuk, név és e-mail nélkül, legfeljebb 2 évig.</p>
<h2>4. Fizetések</h2><p>A kártyás fizetéseket a Stripe Payments Europe, Ltd. kezeli; a kártyaadatokat nem látjuk. A Stripe-tól a fizető e-mail-címét, az összeget és a dátumot kapjuk meg, amelyeket a számviteli szabályok szerint őrzünk.</p>
<h2>5. Analitika és sütik</h2><p>Ha a sávban hozzájárul, a Google Analytics 4-et (Google Ireland Ltd.) használjuk a forgalom névtelen mérésére; a Google az EU-ban nem tárolja az IP-címeket. Hozzájárulás nélkül az analitika nem töltődik be, és semmilyen sütit nem használunk. A hozzájárulást bármikor módosíthatja a lábléc „Cookie-beállítások” linkjével.</p>
<h2>6. Tárhely</h2><p>Az oldal az Exon csehországi szerverein fut, amelyek biztonsági okból rövid ideig technikai hozzáférési naplókat őriznek. A tanácsadó fotói az Unsplash szolgáltatásból (images.unsplash.com) töltődnek be, amely ennek során látja az Ön IP-címét.</p>
<h2>7. Az Ön jogai</h2><p>Joga van hozzáférni az adataihoz, kérni azok helyesbítését, törlését, a kezelés korlátozását, és tiltakozni. Írjon a ${e} címre. Panaszt a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (<a href="https://naih.hu" rel="noopener">naih.hu</a>) vagy a cseh felügyeleti hatóságnál (ÚOOÚ) tehet.</p>`,
  },
];

/* ------------------------------------------------------------------ hrvatski */
const HR: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'o-nama',
    title: 'O Dokuiju – besplatni obrasci ugovora',
    description: 'Dokuio.com – besplatni obrasci ugovora u PDF-u i Wordu. Tko stoji iza stranice i kako nastaju obrasci (Hrvatska).',
    html: `<p class="text-stranka__vytah">Dokuio postoji kako bi svatko mogao brzo i besplatno sastaviti jednostavan ugovor – primjerice pri prodaji automobila. Bez registracije, bez naknade i bez pravničkog žargona.</p>
<h2>Kako nastaju obrasci</h2>
<ul><li>Tekstovi ugovora temelje se na važećim hrvatskim propisima i službenim izvorima (Narodne novine, Porezna uprava, gov.hr), ne na umjetnoj inteligenciji.</li>
<li>Svaki obrazac ima broj verzije i datum izmjene – vidljivo na stranici i u podnožju PDF-a. QR kod u PDF-u vodi na provjeru verzije.</li>
<li>Uz svako polje dajemo objašnjenje, uz svaki dokument savjete „Prije potpisa provjerite”.</li>
<li>Namjerno izbjegavamo složene odredbe. Jednostavan, uravnotežen tekst sigurniji je za uobičajene situacije.</li></ul>
<h2>Zašto besplatno</h2><p>Želimo da osnovni ugovori budu dostupni svima. Rad stranice financiramo sami i dobrovoljnim prilozima korisnika.</p>
<h2>Kontakt</h2><p>${p.nazev}<br />IČO (identifikacijski broj u Češkoj) ${p.ico}<br />${p.sidlo}, Češka<br />E-pošta: ${e}</p>
<p>Pronašli ste pogrešku u obrascu ili vam nedostaje ugovor? Napišite nam – čitamo svaku poruku.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'uvjeti-koristenja',
    title: 'Uvjeti korištenja',
    description: 'Uvjeti korištenja Dokuio.com – besplatni obrasci ugovora u PDF-u i Wordu: opseg usluge, odgovornost i korištenje obrazaca.',
    aktualizovano: AKT,
    html: `<h2>1. Pružatelj</h2><p>Stranicu dokuio.com vodi ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Češka („pružatelj”). Kontakt: ${e}.</p>
<h2>2. Što Dokuio nudi</h2><p>Obrasce jednostavnih ugovora i dokumenata koje korisnik ispunjava u online vodiču ili preuzima prazne u PDF-u ili Wordu. Usluga je <strong>besplatna</strong> i ne zahtijeva registraciju.</p>
<h2>3. Nije pravni savjet</h2><p>Obrasce pružamo u dobroj vjeri kao javnu uslugu. Temelje se na važećim propisima, ali <strong>nisu pravni savjet</strong> i ne odgovaraju svakoj situaciji. Pružatelj nije odvjetnik i nije strana ugovora koje korisnici sklapaju.</p>
<h2>4. Odgovornost korisnika</h2><p>Za sadržaj, izmjene, ispunjavanje i korištenje ugovora odgovara isključivo korisnik. Prije potpisa ga pažljivo pročitajte; u složenim ili vrijednim stvarima obratite se odvjetniku. Tekst koji je korisnik izmijenio nije dio našeg obrasca – u PDF-u je to označeno.</p>
<h2>5. Ograničenje odgovornosti</h2><p>Pružatelj ne odgovara za štetu nastalu korištenjem obrazaca, pogrešnim ispunjavanjem ili korištenjem protivno namjeni, u mjeri u kojoj to propisi dopuštaju. To ne utječe na prava potrošača koja se ne mogu ograničiti.</p>
<h2>6. Dobrovoljna podrška</h2><p>Rad stranice može se dobrovoljno podržati putem Stripea. Plaćanje nije uvjet korištenja i ne daje pravo na dodatne usluge. Ako ste platili greškom, javite nam se u roku od 14 dana – vratit ćemo iznos.</p>
<h2>7. Korištenje obrazaca</h2><p>Obrasce smijete koristiti za vlastite potrebe, mijenjati ih i ispunjeni ugovor dijeliti s drugom stranom. Masovno kopiranje te širenje ili prodaja obrazaca kao vlastite zbirke bez dopuštenja pružatelja nisu dopušteni.</p>
<h2>8. Završne odredbe</h2><p>Na uvjete se primjenjuje češko pravo; to ne utječe na obvezne propise o zaštiti potrošača države vašeg prebivališta. Obradu osobnih podataka opisuje <a href="/hr/zastita-osobnih-podataka/">Izjava o zaštiti osobnih podataka</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'zastita-osobnih-podataka',
    title: 'Zaštita osobnih podataka',
    description: 'Kako Dokuio.com postupa s osobnim podacima. Podaci iz ugovora ostaju u vašem pregledniku, analitika samo uz privolu.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Ukratko:</strong> ono što upišete u ugovor nigdje ne šaljemo. Ugovor nastaje izravno u vašem pregledniku. Analitičke kolačiće koristimo samo uz vašu privolu.</p>
<h2>1. Voditelj obrade</h2><p>Voditelj obrade je ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Češka, e-pošta ${e}.</p>
<h2>2. Podaci u ugovorima</h2><p>Imena, adrese, podatke o vozilu i ostale podatke iz vodiča obrađuje samo vaš preglednik; <strong>ne šalju se na naš poslužitelj i ne spremamo ih</strong>. Započeti dokument preglednik sprema u lokalnu pohranu (localStorage) samo na vašem uređaju; obrisati ga možete u vodiču ili brisanjem podataka preglednika. Potpise nacrtane na zaslonu ne spremamo.</p>
<p><strong>Poveznica za drugu stranu:</strong> upisani podaci kodirani su u samoj poveznici (iza znaka #, koji preglednik ne šalje poslužitelju). Pošaljite je samo drugoj ugovornoj strani.</p>
<p><strong>Slanje PDF-a e-poštom:</strong> preglednik šalje gotov PDF i upisanu adresu našem poslužitelju, koji poruku pošalje jednom i ništa ne sprema. Radi zaštite od zlouporabe poslužitelj 24 sata čuva samo nepovratni sažetak IP adrese i e-pošte te vrijeme slanja (pravna osnova: legitimni interes, čl. 6. st. 1. t. f) GDPR-a).</p>
<h2>3. Povratne informacije</h2><p>Tekst povratne informacije spremamo s datumom i adresom stranice, bez imena i e-pošte, najdulje 2 godine.</p>
<h2>4. Plaćanja</h2><p>Plaćanja karticom obrađuje Stripe Payments Europe, Ltd.; podatke o kartici ne vidimo. Od Stripea dobivamo e-poštu platitelja, iznos i datum, koje čuvamo prema računovodstvenim propisima.</p>
<h2>5. Analitika i kolačići</h2><p>Ako pristanete u traci, koristimo Google Analytics 4 (Google Ireland Ltd.) za anonimno mjerenje posjećenosti (čl. 6. st. 1. t. a) GDPR-a); Google u EU ne sprema IP adrese. Bez privole analitika se ne učitava i ne koristimo nikakve kolačiće. Privolu možete u svakom trenutku promijeniti poveznicom „Postavke kolačića” u podnožju.</p>
<h2>6. Smještaj</h2><p>Stranica radi na poslužiteljima tvrtke Exon u Češkoj, koji iz sigurnosnih razloga kratko čuvaju tehničke zapise o pristupu. Fotografije u savjetniku učitavaju se sa servisa Unsplash (images.unsplash.com), koji pritom vidi vašu IP adresu.</p>
<h2>7. Vaša prava</h2><p>Imate pravo na pristup, ispravak, brisanje, ograničenje obrade i prigovor. Pišite na ${e}. Pritužbu možete podnijeti Agenciji za zaštitu osobnih podataka (<a href="https://azop.hr" rel="noopener">azop.hr</a>) ili češkom nadzornom tijelu (ÚOOÚ).</p>`,
  },
];

/* ------------------------------------------------------------------ slovenščina */
const SI: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'o-nas',
    title: 'O Dokuiu – brezplačni vzorci pogodb',
    description: 'Dokuio.com – brezplačni vzorci pogodb v PDF in Wordu. Kdo stoji za stranjo in kako nastajajo obrazci (Slovenija).',
    html: `<p class="text-stranka__vytah">Dokuio obstaja zato, da lahko vsak hitro in brezplačno sestavi preprosto pogodbo – na primer pri prodaji avtomobila. Brez registracije, brez plačila in brez pravniškega žargona.</p>
<h2>Kako nastajajo obrazci</h2>
<ul><li>Besedila pogodb temeljijo na veljavnih slovenskih predpisih in uradnih virih (Uradni list, PISRS, FURS, gov.si), ne na umetni inteligenci.</li>
<li>Vsak obrazec ima številko različice in datum spremembe – vidno na strani in v nogi PDF. Koda QR v PDF vodi na preverjanje različice.</li>
<li>Ob vsakem polju je razlaga, ob vsakem dokumentu nasveti „Pred podpisom preverite“.</li>
<li>Zapletenim določbam se namenoma izogibamo. Preprosto, uravnoteženo besedilo je za običajne situacije varnejše.</li></ul>
<h2>Zakaj brezplačno</h2><p>Želimo, da so osnovne pogodbe dostopne vsem. Delovanje strani financiramo sami in s prostovoljnimi prispevki uporabnikov.</p>
<h2>Kontakt</h2><p>${p.nazev}<br />IČO (identifikacijska številka na Češkem) ${p.ico}<br />${p.sidlo}, Češka<br />E-pošta: ${e}</p>
<p>Ste v obrazcu našli napako ali pogrešate pogodbo? Pišite nam – preberemo vsako sporočilo.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'pogoji-uporabe',
    title: 'Pogoji uporabe',
    description: 'Pogoji uporabe Dokuio.com – brezplačni vzorci pogodb v PDF in Wordu: obseg storitve, odgovornost in uporaba obrazcev.',
    aktualizovano: AKT,
    html: `<h2>1. Ponudnik</h2><p>Stran dokuio.com upravlja ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Češka („ponudnik“). Kontakt: ${e}.</p>
<h2>2. Kaj Dokuio ponuja</h2><p>Vzorce preprostih pogodb in dokumentov, ki jih uporabnik izpolni v spletnem vodniku ali prenese prazne v PDF ali Wordu. Storitev je <strong>brezplačna</strong> in ne zahteva registracije.</p>
<h2>3. Ni pravni nasvet</h2><p>Obrazce zagotavljamo v dobri veri kot javno storitev. Temeljijo na veljavnih predpisih, vendar <strong>niso pravni nasvet</strong> in ne ustrezajo vsaki situaciji. Ponudnik ni odvetnik in ni stranka pogodb, ki jih sklepajo uporabniki.</p>
<h2>4. Odgovornost uporabnika</h2><p>Za vsebino, spremembe, izpolnitev in uporabo pogodbe odgovarja izključno uporabnik. Pred podpisom jo pozorno preberite; v zapletenih ali vrednih zadevah se obrnite na odvetnika. Besedilo, ki ga je uporabnik spremenil, ni del našega obrazca – v PDF je to označeno.</p>
<h2>5. Omejitev odgovornosti</h2><p>Ponudnik ne odgovarja za škodo zaradi uporabe obrazcev, napačne izpolnitve ali uporabe v nasprotju z namenom, v obsegu, ki ga dopuščajo predpisi. To ne vpliva na pravice potrošnikov, ki jih ni mogoče omejiti.</p>
<h2>6. Prostovoljna podpora</h2><p>Delovanje strani je mogoče prostovoljno podpreti prek Stripa. Plačilo ni pogoj za uporabo in ne daje pravice do dodatnih storitev. Če ste plačali pomotoma, nam pišite v 14 dneh – znesek vrnemo.</p>
<h2>7. Uporaba obrazcev</h2><p>Obrazce smete uporabljati za lastne potrebe, jih spreminjati in izpolnjeno pogodbo deliti z drugo stranko. Množično kopiranje ter razširjanje ali prodaja obrazcev kot lastne zbirke brez dovoljenja ponudnika nista dovoljena.</p>
<h2>8. Končne določbe</h2><p>Za pogoje se uporablja češko pravo; to ne vpliva na obvezne predpise o varstvu potrošnikov države vašega prebivališča. Obdelavo osebnih podatkov opisuje stran <a href="/si/varstvo-osebnih-podatkov/">Varstvo osebnih podatkov</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'varstvo-osebnih-podatkov',
    title: 'Varstvo osebnih podatkov',
    description: 'Kako Dokuio.com ravna z osebnimi podatki. Podatki iz pogodb ostanejo v vašem brskalniku, analitika le s privolitvijo.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Na kratko:</strong> kar vpišete v pogodbo, nikamor ne pošiljamo. Pogodba nastane neposredno v vašem brskalniku. Analitične piškotke uporabljamo le z vašo privolitvijo.</p>
<h2>1. Upravljavec</h2><p>Upravljavec je ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Češka, e-pošta ${e}.</p>
<h2>2. Podatki v pogodbah</h2><p>Imena, naslove, podatke o vozilu in druge podatke iz vodnika obdeluje le vaš brskalnik; <strong>ne pošiljajo se na naš strežnik in jih ne shranjujemo</strong>. Začeti dokument brskalnik shrani v lokalno shrambo (localStorage) samo na vaši napravi; izbrišete ga lahko v vodniku ali z brisanjem podatkov brskalnika. Podpisov, narisanih na zaslonu, ne shranjujemo.</p>
<p><strong>Povezava za drugo stranko:</strong> vpisani podatki so kodirani v sami povezavi (za znakom #, ki ga brskalnik strežniku ne pošlje). Pošljite jo le drugi pogodbeni stranki.</p>
<p><strong>Pošiljanje PDF po e-pošti:</strong> brskalnik pošlje gotov PDF in vpisani naslov našemu strežniku, ki sporočilo pošlje enkrat in ničesar ne shrani. Zaradi zaščite pred zlorabo strežnik 24 ur hrani le nepovraten izvleček naslova IP in e-pošte ter čas pošiljanja (pravna podlaga: zakoniti interes, točka (f) člena 6(1) GDPR).</p>
<h2>3. Povratne informacije</h2><p>Besedilo povratne informacije shranimo z datumom in naslovom strani, brez imena in e-pošte, največ 2 leti.</p>
<h2>4. Plačila</h2><p>Plačila s kartico obdeluje Stripe Payments Europe, Ltd.; podatkov o kartici ne vidimo. Od Stripa prejmemo e-pošto plačnika, znesek in datum, ki jih hranimo skladno z računovodskimi predpisi.</p>
<h2>5. Analitika in piškotki</h2><p>Če privolite v pasici, uporabljamo Google Analytics 4 (Google Ireland Ltd.) za anonimno merjenje obiska (točka (a) člena 6(1) GDPR); Google v EU ne shranjuje naslovov IP. Brez privolitve se analitika ne naloži in ne uporabljamo nobenih piškotkov. Privolitev lahko kadar koli spremenite s povezavo „Nastavitve piškotkov“ v nogi.</p>
<h2>6. Gostovanje</h2><p>Stran deluje na strežnikih podjetja Exon na Češkem, ki iz varnostnih razlogov kratek čas hranijo tehnične dnevnike dostopa. Fotografije v svetovalnici se nalagajo s storitve Unsplash (images.unsplash.com), ki pri tem vidi vaš naslov IP.</p>
<h2>7. Vaše pravice</h2><p>Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave in ugovora. Pišite na ${e}. Pritožbo lahko vložite pri Informacijskem pooblaščencu (<a href="https://www.ip-rs.si" rel="noopener">ip-rs.si</a>) ali pri češkem nadzornem organu (ÚOOÚ).</p>`,
  },
];

const RO: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'despre-noi',
    title: 'Despre Dokuio – modele de contracte gratuite',
    description: 'Dokuio.com – modele de contracte gratuite în PDF și Word. Cine se află în spatele site-ului și cum se pregătesc modelele (România).',
    html: `<p class="text-stranka__vytah">Dokuio există pentru ca oricine să poată întocmi rapid și gratuit un contract simplu – de exemplu la vânzarea unei mașini. Fără înregistrare, fără plată și fără limbaj juridic greoi.</p>
<h2>Cum se pregătesc modelele</h2>
<ul><li>Textele se bazează pe legislația română în vigoare și pe surse oficiale (legislatie.just.ro, ANAF, ANPC, Poliția de Frontieră), nu pe inteligență artificială.</li>
<li>Fiecare model are un număr de versiune și o dată a modificării – vizibile pe pagină și în subsolul PDF-ului. Codul QR din PDF duce la verificarea versiunii.</li>
<li>Lângă fiecare câmp există o explicație, la fiecare document sfaturi „Verificați înainte de semnare”.</li>
<li>Evităm intenționat clauzele complicate. Un text simplu și echilibrat este mai sigur pentru situațiile obișnuite.</li></ul>
<h2>De ce gratuit</h2><p>Vrem ca actele de bază să fie accesibile tuturor. Funcționarea site-ului o finanțăm singuri și din contribuții voluntare ale utilizatorilor.</p>
<h2>Contact</h2><p>${p.nazev}<br />IČO (număr de identificare în Cehia) ${p.ico}<br />${p.sidlo}, Cehia<br />E-mail: ${e}</p>
<p>Ați găsit o greșeală într-un model sau vă lipsește un document? Scrieți-ne – citim fiecare mesaj.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'termeni-de-utilizare',
    title: 'Termeni de utilizare',
    description: 'Termenii de utilizare Dokuio.com – modele de contracte gratuite în PDF și Word: serviciul oferit, răspunderea și folosirea modelelor.',
    aktualizovano: AKT,
    html: `<h2>1. Furnizorul</h2><p>Site-ul dokuio.com este administrat de ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Cehia („furnizorul”). Contact: ${e}.</p>
<h2>2. Ce oferă Dokuio</h2><p>Modele de contracte și documente simple, pe care utilizatorul le completează în ghidul online sau le descarcă goale în PDF ori Word. Serviciul este <strong>gratuit</strong> și nu necesită înregistrare.</p>
<h2>3. Nu este consultanță juridică</h2><p>Oferim modelele cu bună-credință, ca serviciu public. Se bazează pe legislația în vigoare, dar <strong>nu constituie consultanță juridică</strong> și nu se potrivesc oricărei situații. Furnizorul nu este avocat și nu este parte în contractele încheiate de utilizatori.</p>
<h2>4. Răspunderea utilizatorului</h2><p>Pentru conținutul, modificările, completarea și folosirea contractului răspunde exclusiv utilizatorul. Citiți-l cu atenție înainte de semnare. Textul modificat de utilizator nu mai face parte din modelul nostru – în PDF acest lucru este marcat.</p>
<h2>5. Limitarea răspunderii</h2><p>Furnizorul nu răspunde pentru prejudiciile cauzate de folosirea modelelor, completarea greșită sau folosirea contrară scopului, în limitele permise de lege. Aceasta nu afectează drepturile consumatorilor care nu pot fi limitate.</p>
<h2>6. Sprijin voluntar</h2><p>Funcționarea site-ului poate fi susținută voluntar prin Stripe. Plata nu este o condiție de utilizare și nu dă dreptul la servicii suplimentare. Dacă ați plătit din greșeală, scrieți-ne în 14 zile – vă restituim suma.</p>
<h2>7. Folosirea modelelor</h2><p>Puteți folosi modelele pentru nevoi proprii, le puteți modifica și puteți împărtăși contractul completat cu cealaltă parte. Copierea în masă, distribuirea sau vânzarea modelelor ca propria colecție fără acordul furnizorului nu sunt permise.</p>
<h2>8. Dispoziții finale</h2><p>Termenilor li se aplică legea cehă; aceasta nu afectează normele imperative de protecție a consumatorilor din statul dvs. de reședință. Prelucrarea datelor personale este descrisă pe pagina <a href="/ro/protectia-datelor/">Protecția datelor personale</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'protectia-datelor',
    title: 'Protecția datelor personale',
    description: 'Cum prelucrează Dokuio.com datele personale. Datele din contracte rămân în browserul dvs., analiza traficului doar cu acordul dvs.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Pe scurt:</strong> ce scrieți într-un contract nu trimitem nicăieri. Contractul se creează direct în browserul dvs. Cookie-urile de analiză le folosim doar cu acordul dvs.</p>
<h2>1. Operatorul</h2><p>Operatorul este ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Cehia, e-mail ${e}.</p>
<h2>2. Datele din contracte</h2><p>Numele, adresele, datele vehiculului și celelalte date din ghid sunt prelucrate doar de browserul dvs.; <strong>nu sunt trimise pe serverul nostru și nu le stocăm</strong>. Documentul început este salvat de browser în memoria locală (localStorage) numai pe dispozitivul dvs.; îl puteți șterge în ghid sau prin ștergerea datelor browserului. Semnăturile desenate pe ecran nu le stocăm.</p>
<p><strong>Linkul pentru cealaltă parte:</strong> datele introduse sunt codificate în link (după semnul #, pe care browserul nu îl trimite serverului). Trimiteți-l doar celeilalte părți a contractului.</p>
<p><strong>Trimiterea PDF-ului pe e-mail:</strong> browserul trimite PDF-ul final și adresa indicată serverului nostru, care trimite mesajul o singură dată și nu salvează nimic. Pentru protecție împotriva abuzurilor, serverul păstrează 24 de ore doar o amprentă ireversibilă a adresei IP și a e-mailului și ora trimiterii (temei juridic: interes legitim, art. 6 alin. (1) lit. f) GDPR).</p>
<h2>3. Părerile utilizatorilor</h2><p>Textul părerii îl salvăm cu data și adresa paginii, fără nume și e-mail, cel mult 2 ani.</p>
<h2>4. Plăți</h2><p>Plățile cu cardul sunt procesate de Stripe Payments Europe, Ltd.; datele cardului nu le vedem. De la Stripe primim e-mailul plătitorului, suma și data, pe care le păstrăm conform normelor contabile.</p>
<h2>5. Analiză și cookie-uri</h2><p>Dacă vă dați acordul în banner, folosim Google Analytics 4 (Google Ireland Ltd.) pentru măsurarea anonimă a traficului (art. 6 alin. (1) lit. a) GDPR); Google nu stochează adresele IP în UE. Fără acord, analiza nu se încarcă și nu folosim cookie-uri. Acordul îl puteți schimba oricând prin linkul „Setări cookie” din subsol.</p>
<h2>6. Găzduire</h2><p>Site-ul funcționează pe serverele companiei Exon din Cehia, care păstrează pentru scurt timp jurnale tehnice de acces, din motive de securitate. Fotografiile din ghid se încarcă de pe serviciul Unsplash (images.unsplash.com), care vede astfel adresa dvs. IP.</p>
<h2>7. Drepturile dvs.</h2><p>Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării și opoziție. Scrieți la ${e}. Puteți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (<a href="https://www.dataprotection.ro" rel="noopener">ANSPDCP</a>) sau la autoritatea cehă de supraveghere (ÚOOÚ).</p>`,
  },
];

const BG: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'za-nas',
    title: 'За Dokuio – безплатни образци на договори',
    description: 'Dokuio.com – безплатни образци на договори в PDF и Word. Кой стои зад сайта и как се подготвят образците (България).',
    html: `<p class="text-stranka__vytah">Dokuio съществува, за да може всеки бързо и безплатно да състави прост договор – например при продажба на кола. Без регистрация, без плащане и без тежък юридически език.</p>
<h2>Как се подготвят образците</h2>
<ul><li>Текстовете се основават на действащото българско законодателство и на официални източници (ЗЗД, ЗДвП, НАП, Министерство на финансите, портала e-Justice), а не на изкуствен интелект.</li>
<li>Всеки образец има номер на версия и дата на промяна – видими на страницата и в долния колонтитул на PDF. QR кодът в PDF води към проверка на версията.</li>
<li>До всяко поле има обяснение, а при всеки документ – съвети „Проверете преди подписване“.</li>
<li>Съзнателно избягваме сложните клаузи. Простият и балансиран текст е по-сигурен за обичайните ситуации.</li></ul>
<h2>Защо безплатно</h2><p>Искаме основните документи да са достъпни за всички. Работата на сайта финансираме сами и с доброволни дарения от потребителите.</p>
<h2>Контакт</h2><p>${p.nazev}<br />IČO (идентификационен номер в Чехия) ${p.ico}<br />${p.sidlo}, Чехия<br />Имейл: ${e}</p>
<p>Открили сте грешка в образец или ви липсва документ? Пишете ни – четем всяко съобщение.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'usloviya-za-polzvane',
    title: 'Условия за ползване',
    description: 'Условия за ползване на Dokuio.com – безплатни образци на договори в PDF и Word: услугата, отговорността и използването на образците.',
    aktualizovano: AKT,
    html: `<h2>1. Доставчик</h2><p>Сайтът dokuio.com се поддържа от ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Чехия („доставчикът“). Контакт: ${e}.</p>
<h2>2. Какво предлага Dokuio</h2><p>Образци на прости договори и документи, които потребителят попълва в онлайн помощника или изтегля празни в PDF или Word. Услугата е <strong>безплатна</strong> и не изисква регистрация.</p>
<h2>3. Не е правна консултация</h2><p>Предлагаме образците добросъвестно, като обществена услуга. Те се основават на действащото законодателство, но <strong>не са правна консултация</strong> и не са подходящи за всяка ситуация. Доставчикът не е адвокат и не е страна по договорите, сключени от потребителите.</p>
<h2>4. Отговорност на потребителя</h2><p>За съдържанието, промените, попълването и използването на договора отговаря изцяло потребителят. Прочетете го внимателно преди подписване. Текстът, редактиран от потребителя, вече не е част от нашия образец – в PDF това е отбелязано.</p>
<h2>5. Ограничаване на отговорността</h2><p>Доставчикът не отговаря за вреди, причинени от използването на образците, неправилното им попълване или използването им не по предназначение, доколкото законът позволява. Това не засяга правата на потребителите, които не могат да бъдат ограничавани.</p>
<h2>6. Доброволна подкрепа</h2><p>Работата на сайта може да бъде подкрепена доброволно чрез Stripe. Плащането не е условие за ползване и не дава право на допълнителни услуги. Ако сте платили по грешка, пишете ни в 14-дневен срок – ще ви върнем сумата.</p>
<h2>7. Използване на образците</h2><p>Можете да използвате образците за собствени нужди, да ги променяте и да споделяте попълнения договор с другата страна. Масовото копиране, разпространяването или продажбата на образците като собствена колекция без съгласието на доставчика не са разрешени.</p>
<h2>8. Заключителни разпоредби</h2><p>За условията се прилага чешкото право; това не засяга задължителните правила за защита на потребителите в държавата, в която живеете. Обработването на личните данни е описано на страницата <a href="/bg/zashtita-na-lichnite-danni/">Защита на личните данни</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'zashtita-na-lichnite-danni',
    title: 'Защита на личните данни',
    description: 'Как Dokuio.com обработва личните данни. Данните от договорите остават във вашия браузър, анализът на посещаемостта – само с ваше съгласие.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Накратко:</strong> каквото напишете в договора, не го изпращаме никъде. Договорът се създава директно във вашия браузър. Бисквитки за анализ използваме само с ваше съгласие.</p>
<h2>1. Администратор</h2><p>Администратор е ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Чехия, имейл ${e}.</p>
<h2>2. Данните от договорите</h2><p>Имената, адресите, данните за автомобила и другите данни от помощника се обработват само от вашия браузър; <strong>не се изпращат на нашия сървър и не ги съхраняваме</strong>. Започнатият документ се запазва от браузъра в локалната памет (localStorage) само на вашето устройство; можете да го изтриете в помощника или като изчистите данните на браузъра. Подписите, нарисувани на екрана, не ги съхраняваме.</p>
<p><strong>Връзката за другата страна:</strong> въведените данни са кодирани във връзката (след знака #, който браузърът не изпраща на сървъра). Изпращайте я само на другата страна по договора.</p>
<p><strong>Изпращане на PDF по имейл:</strong> браузърът изпраща готовия PDF и посочения адрес на нашия сървър, който изпраща съобщението еднократно и не запазва нищо. За защита от злоупотреби сървърът пази 24 часа само необратим отпечатък на IP адреса и имейла и часа на изпращане (правно основание: легитимен интерес, чл. 6, пар. 1, буква „е“ от ОРЗД).</p>
<h2>3. Мнения на потребителите</h2><p>Текста на мнението запазваме с датата и адреса на страницата, без име и имейл, най-много 2 години.</p>
<h2>4. Плащания</h2><p>Плащанията с карта се обработват от Stripe Payments Europe, Ltd.; данните на картата не ги виждаме. От Stripe получаваме имейла на платеца, сумата и датата, които пазим съгласно счетоводните правила.</p>
<h2>5. Анализ и бисквитки</h2><p>Ако дадете съгласие в банера, използваме Google Analytics 4 (Google Ireland Ltd.) за анонимно измерване на посещаемостта (чл. 6, пар. 1, буква „а“ от ОРЗД); Google не съхранява IP адресите в ЕС. Без съгласие анализът не се зарежда и не използваме бисквитки. Съгласието можете да промените по всяко време чрез връзката „Настройки за бисквитки“ в долната част на страницата.</p>
<h2>6. Хостинг</h2><p>Сайтът работи на сървърите на фирма Exon в Чехия, която за кратко пази технически журнали за достъп от съображения за сигурност. Снимките в съветника се зареждат от услугата Unsplash (images.unsplash.com), която така вижда вашия IP адрес.</p>
<h2>7. Вашите права</h2><p>Имате право на достъп, коригиране, изтриване, ограничаване на обработването и възражение. Пишете на ${e}. Можете да подадете жалба до Комисията за защита на личните данни (<a href="https://www.cpdp.bg" rel="noopener">КЗЛД</a>) или до чешкия надзорен орган (ÚOOÚ).</p>`,
  },
];

const GR: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'schetika-me-emas',
    title: 'Σχετικά με το Dokuio – δωρεάν υποδείγματα συμβάσεων',
    description: 'Dokuio.com – δωρεάν υποδείγματα συμβάσεων σε PDF και Word. Ποιος βρίσκεται πίσω από τον ιστότοπο και πώς ετοιμάζονται τα υποδείγματα (Ελλάδα).',
    html: `<p class="text-stranka__vytah">Το Dokuio υπάρχει για να μπορεί ο καθένας να συντάξει γρήγορα και δωρεάν μια απλή σύμβαση – για παράδειγμα κατά την πώληση αυτοκινήτου. Χωρίς εγγραφή, χωρίς πληρωμή και χωρίς δύσκολη νομική γλώσσα.</p>
<h2>Πώς ετοιμάζονται τα υποδείγματα</h2>
<ul><li>Τα κείμενα βασίζονται στην ισχύουσα ελληνική νομοθεσία και σε επίσημες πηγές (Αστικός Κώδικας, gov.gr, ΑΑΔΕ, Υπουργείο Εξωτερικών, Your Europe), όχι σε τεχνητή νοημοσύνη.</li>
<li>Κάθε υπόδειγμα έχει αριθμό έκδοσης και ημερομηνία αλλαγής – ορατά στη σελίδα και στο υποσέλιδο του PDF. Ο κωδικός QR στο PDF οδηγεί στον έλεγχο της έκδοσης.</li>
<li>Δίπλα σε κάθε πεδίο υπάρχει εξήγηση και σε κάθε έγγραφο συμβουλές «Ελέγξτε πριν υπογράψετε».</li>
<li>Αποφεύγουμε συνειδητά τους περίπλοκους όρους. Ένα απλό και ισορροπημένο κείμενο είναι πιο ασφαλές για τις συνηθισμένες περιπτώσεις.</li></ul>
<h2>Γιατί δωρεάν</h2><p>Θέλουμε τα βασικά έγγραφα να είναι προσβάσιμα σε όλους. Τη λειτουργία του ιστότοπου τη χρηματοδοτούμε μόνοι μας και με εθελοντικές δωρεές των χρηστών.</p>
<h2>Επικοινωνία</h2><p>${p.nazev}<br />IČO (αριθμός μητρώου στην Τσεχία) ${p.ico}<br />${p.sidlo}, Τσεχία<br />E-mail: ${e}</p>
<p>Βρήκατε λάθος σε κάποιο υπόδειγμα ή σας λείπει ένα έγγραφο; Γράψτε μας – διαβάζουμε κάθε μήνυμα.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'oroi-chrisis',
    title: 'Όροι χρήσης',
    description: 'Όροι χρήσης του Dokuio.com – δωρεάν υποδείγματα συμβάσεων σε PDF και Word: η υπηρεσία, η ευθύνη και η χρήση των υποδειγμάτων.',
    aktualizovano: AKT,
    html: `<h2>1. Πάροχος</h2><p>Ο ιστότοπος dokuio.com λειτουργεί από ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Τσεχία («ο πάροχος»). Επικοινωνία: ${e}.</p>
<h2>2. Τι προσφέρει το Dokuio</h2><p>Υποδείγματα απλών συμβάσεων και εγγράφων, τα οποία ο χρήστης συμπληρώνει στον online οδηγό ή κατεβάζει κενά σε PDF ή Word. Η υπηρεσία είναι <strong>δωρεάν</strong> και δεν απαιτεί εγγραφή.</p>
<h2>3. Δεν αποτελεί νομική συμβουλή</h2><p>Προσφέρουμε τα υποδείγματα καλόπιστα, ως υπηρεσία προς το κοινό. Βασίζονται στην ισχύουσα νομοθεσία, αλλά <strong>δεν αποτελούν νομική συμβουλή</strong> και δεν ταιριάζουν σε κάθε περίπτωση. Ο πάροχος δεν είναι δικηγόρος ούτε συμβαλλόμενο μέρος στις συμβάσεις που συνάπτουν οι χρήστες.</p>
<h2>4. Ευθύνη του χρήστη</h2><p>Για το περιεχόμενο, τις αλλαγές, τη συμπλήρωση και τη χρήση της σύμβασης ευθύνεται εξ ολοκλήρου ο χρήστης. Διαβάστε την προσεκτικά πριν την υπογράψετε. Το κείμενο που επεξεργάστηκε ο χρήστης δεν αποτελεί πλέον μέρος του υποδείγματός μας – στο PDF αυτό επισημαίνεται.</p>
<h2>5. Περιορισμός ευθύνης</h2><p>Ο πάροχος δεν ευθύνεται για ζημίες που προκλήθηκαν από τη χρήση των υποδειγμάτων, την εσφαλμένη συμπλήρωσή τους ή τη χρήση τους για άλλο σκοπό, στο μέτρο που το επιτρέπει ο νόμος. Αυτό δεν θίγει τα δικαιώματα των καταναλωτών που δεν μπορούν να περιοριστούν.</p>
<h2>6. Εθελοντική στήριξη</h2><p>Η λειτουργία του ιστότοπου μπορεί να στηριχθεί εθελοντικά μέσω Stripe. Η πληρωμή δεν αποτελεί προϋπόθεση χρήσης και δεν δίνει δικαίωμα σε πρόσθετες υπηρεσίες. Αν πληρώσατε κατά λάθος, γράψτε μας εντός 14 ημερών – θα σας επιστρέψουμε το ποσό.</p>
<h2>7. Χρήση των υποδειγμάτων</h2><p>Μπορείτε να χρησιμοποιείτε τα υποδείγματα για δικές σας ανάγκες, να τα αλλάζετε και να μοιράζεστε τη συμπληρωμένη σύμβαση με τον αντισυμβαλλόμενο. Η μαζική αντιγραφή, η διάδοση ή η πώληση των υποδειγμάτων ως δικής σας συλλογής χωρίς τη συναίνεση του παρόχου δεν επιτρέπονται.</p>
<h2>8. Τελικές διατάξεις</h2><p>Στους όρους εφαρμόζεται το τσεχικό δίκαιο· αυτό δεν θίγει τους υποχρεωτικούς κανόνες προστασίας των καταναλωτών της χώρας όπου ζείτε. Η επεξεργασία των προσωπικών δεδομένων περιγράφεται στη σελίδα <a href="/gr/prostasia-prosopikon-dedomenon/">Προστασία προσωπικών δεδομένων</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'prostasia-prosopikon-dedomenon',
    title: 'Προστασία προσωπικών δεδομένων',
    description: 'Πώς το Dokuio.com επεξεργάζεται προσωπικά δεδομένα. Τα στοιχεία των συμβάσεων μένουν στον browser σας, η μέτρηση επισκεψιμότητας μόνο με συναίνεση.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Με λίγα λόγια:</strong> ό,τι γράφετε στη σύμβαση δεν το στέλνουμε πουθενά. Η σύμβαση δημιουργείται απευθείας στον browser σας. Cookies ανάλυσης χρησιμοποιούμε μόνο με τη συναίνεσή σας.</p>
<h2>1. Υπεύθυνος επεξεργασίας</h2><p>Υπεύθυνος επεξεργασίας είναι ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Τσεχία, e-mail ${e}.</p>
<h2>2. Τα στοιχεία των συμβάσεων</h2><p>Τα ονόματα, οι διευθύνσεις, τα στοιχεία του οχήματος και τα άλλα στοιχεία του οδηγού επεξεργάζονται μόνο από τον browser σας· <strong>δεν αποστέλλονται στον διακομιστή μας και δεν τα αποθηκεύουμε</strong>. Το ξεκινημένο έγγραφο το αποθηκεύει ο browser στην τοπική μνήμη (localStorage) μόνο στη συσκευή σας· μπορείτε να το διαγράψετε στον οδηγό ή διαγράφοντας τα δεδομένα του browser. Τις υπογραφές που σχεδιάζονται στην οθόνη δεν τις αποθηκεύουμε.</p>
<p><strong>Ο σύνδεσμος για τον αντισυμβαλλόμενο:</strong> τα στοιχεία που εισαγάγατε κωδικοποιούνται στον σύνδεσμο (μετά το σύμβολο #, που ο browser δεν στέλνει στον διακομιστή). Στείλτε τον μόνο στον αντισυμβαλλόμενο.</p>
<p><strong>Αποστολή του PDF με e-mail:</strong> ο browser στέλνει το έτοιμο PDF και τη διεύθυνση που δώσατε στον διακομιστή μας, ο οποίος στέλνει το μήνυμα μία φορά και δεν αποθηκεύει τίποτα. Για προστασία από καταχρήσεις ο διακομιστής κρατά για 24 ώρες μόνο ένα μη αναστρέψιμο αποτύπωμα της διεύθυνσης IP και του e-mail και την ώρα αποστολής (νομική βάση: έννομο συμφέρον, άρθρο 6 παρ. 1 στοιχ. στ΄ ΓΚΠΔ).</p>
<h2>3. Απόψεις των χρηστών</h2><p>Το κείμενο της άποψης το αποθηκεύουμε με την ημερομηνία και τη διεύθυνση της σελίδας, χωρίς όνομα και e-mail, το πολύ για 2 έτη.</p>
<h2>4. Πληρωμές</h2><p>Οι πληρωμές με κάρτα διεκπεραιώνονται από τη Stripe Payments Europe, Ltd.· τα στοιχεία της κάρτας δεν τα βλέπουμε. Από τη Stripe λαμβάνουμε το e-mail του πληρωτή, το ποσό και την ημερομηνία, τα οποία φυλάσσουμε σύμφωνα με τους λογιστικούς κανόνες.</p>
<h2>5. Ανάλυση και cookies</h2><p>Αν δώσετε συναίνεση στο banner, χρησιμοποιούμε το Google Analytics 4 (Google Ireland Ltd.) για ανώνυμη μέτρηση της επισκεψιμότητας (άρθρο 6 παρ. 1 στοιχ. α΄ ΓΚΠΔ)· η Google δεν αποθηκεύει τις διευθύνσεις IP στην ΕΕ. Χωρίς συναίνεση η ανάλυση δεν φορτώνεται και δεν χρησιμοποιούμε cookies. Τη συναίνεση μπορείτε να την αλλάξετε οποτεδήποτε μέσω του συνδέσμου «Ρυθμίσεις cookies» στο κάτω μέρος της σελίδας.</p>
<h2>6. Φιλοξενία</h2><p>Ο ιστότοπος λειτουργεί στους διακομιστές της εταιρείας Exon στην Τσεχία, η οποία κρατά για λίγο τεχνικά αρχεία πρόσβασης για λόγους ασφαλείας. Οι φωτογραφίες του οδηγού φορτώνονται από την υπηρεσία Unsplash (images.unsplash.com), η οποία έτσι βλέπει τη διεύθυνση IP σας.</p>
<h2>7. Τα δικαιώματά σας</h2><p>Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού της επεξεργασίας και εναντίωσης. Γράψτε στο ${e}. Μπορείτε να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (<a href="https://www.dpa.gr" rel="noopener">dpa.gr</a>) ή στην τσεχική εποπτική αρχή (ÚOOÚ).</p>`,
  },
];

const EE: InfoStranka[] = [
  {
    typ: 'onas',
    slug: 'meist',
    title: 'Dokuio – tasuta lepingunäidised PDF-ina',
    description: 'Dokuio.com – tasuta lepingunäidised PDF-i ja Wordina. Kes on lehe taga ja kuidas näidiseid koostatakse (Eesti).',
    html: `<p class="text-stranka__vytah">Dokuio on olemas selleks, et igaüks saaks kiiresti ja tasuta koostada lihtsa lepingu – näiteks auto müümisel. Ilma registreerimise, maksmise ja keerulise juriidilise keeleta.</p>
<h2>Kuidas näidiseid koostatakse</h2>
<ul><li>Tekstid põhinevad kehtivatel Eesti seadustel ja ametlikel allikatel (võlaõigusseadus, töölepingu seadus, Riigi Teataja, Transpordiamet, Maksu- ja Tolliamet, Your Europe), mitte tehisintellektil.</li>
<li>Igal põhjal on versiooninumber ja muutmise kuupäev – need on näha lehel ja PDF-i jaluses. PDF-i QR-kood viib versiooni kontrollini.</li>
<li>Iga välja juures on selgitus ja igas dokumendis näpunäited „Kontrollige enne allkirjastamist“.</li>
<li>Väldime teadlikult keerulisi tingimusi. Lihtne ja tasakaalus tekst on tavaolukordades turvalisem.</li></ul>
<h2>Miks tasuta</h2><p>Soovime, et põhilised dokumendid oleksid kõigile kättesaadavad. Lehe tööd rahastame ise ja kasutajate vabatahtlike annetustega.</p>
<h2>Kontakt</h2><p>${p.nazev}<br />IČO (registrikood Tšehhis) ${p.ico}<br />${p.sidlo}, Tšehhi<br />E-post: ${e}</p>
<p>Leidsite mõnes põhjas vea või jääb teil dokument puudu? Kirjutage meile – loeme iga sõnumi.</p>`,
  },
  {
    typ: 'podminky',
    slug: 'kasutustingimused',
    title: 'Kasutustingimused',
    description: 'Dokuio.com kasutustingimused – tasuta lepingunäidised PDF-i ja Wordina: teenus, vastutus ja näidiste kasutamine.',
    aktualizovano: AKT,
    html: `<h2>1. Teenuse osutaja</h2><p>Veebilehte dokuio.com haldab ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Tšehhi („teenuse osutaja“). Kontakt: ${e}.</p>
<h2>2. Mida Dokuio pakub</h2><p>Lihtsate lepingute ja dokumentide põhju, mida kasutaja täidab veebijuhendis või laadib tühjana alla PDF-i või Wordina. Teenus on <strong>tasuta</strong> ega nõua registreerimist.</p>
<h2>3. Ei ole õigusnõu</h2><p>Pakume põhju heas usus avaliku teenusena. Need põhinevad kehtival õigusel, kuid <strong>ei ole õigusnõu</strong> ega sobi igaks olukorraks. Teenuse osutaja ei ole advokaat ega kasutajate sõlmitud lepingute pool.</p>
<h2>4. Kasutaja vastutus</h2><p>Lepingu sisu, muudatuste, täitmise ja kasutamise eest vastutab täielikult kasutaja. Lugege leping enne allkirjastamist hoolikalt läbi. Kasutaja muudetud tekst ei ole enam osa meie põhjast – PDF-is on see märgitud.</p>
<h2>5. Vastutuse piiramine</h2><p>Teenuse osutaja ei vastuta seadusega lubatud ulatuses kahju eest, mis tekib põhjade kasutamisest, valest täitmisest või kasutamisest muul eesmärgil. See ei mõjuta tarbija õigusi, mida ei saa piirata.</p>
<h2>6. Vabatahtlik toetus</h2><p>Lehe tööd saab vabatahtlikult toetada Stripe’i kaudu. Makse ei ole kasutamise eeltingimus ega anna õigust lisateenustele. Kui maksite kogemata, kirjutage meile 14 päeva jooksul – tagastame summa.</p>
<h2>7. Põhjade kasutamine</h2><p>Võite põhju kasutada oma tarbeks, neid muuta ja täidetud lepingut teise poolega jagada. Põhjade massiline kopeerimine, levitamine või müümine oma kogumikuna ilma teenuse osutaja nõusolekuta ei ole lubatud.</p>
<h2>8. Lõppsätted</h2><p>Tingimustele kohaldatakse Tšehhi õigust; see ei mõjuta teie elukohariigi kohustuslikke tarbijakaitse norme. Isikuandmete töötlemist kirjeldab leht <a href="/ee/isikuandmete-kaitse/">Isikuandmete kaitse</a>.</p>`,
  },
  {
    typ: 'ochrana',
    slug: 'isikuandmete-kaitse',
    title: 'Isikuandmete kaitse',
    description: 'Kuidas Dokuio.com isikuandmeid töötleb. Lepingute andmed jäävad teie brauserisse, külastatavuse mõõtmine ainult nõusolekul.',
    aktualizovano: AKT,
    html: `<p class="text-stranka__vytah"><strong>Lühidalt:</strong> mida lepingusse kirjutate, seda me kuhugi ei saada. Leping luuakse otse teie brauseris. Analüüsiküpsiseid kasutame ainult teie nõusolekul.</p>
<h2>1. Vastutav töötleja</h2><p>Vastutav töötleja on ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Tšehhi, e-post ${e}.</p>
<h2>2. Lepingute andmed</h2><p>Nimesid, aadresse, sõiduki andmeid ja muid juhendi andmeid töötleb ainult teie brauser; <strong>neid ei saadeta meie serverisse ja me ei salvesta neid</strong>. Pooleli oleva dokumendi salvestab brauser kohalikku mällu (localStorage) ainult teie seadmes; selle saate kustutada juhendis või brauseri andmeid kustutades. Ekraanil joonistatud allkirju me ei salvesta.</p>
<p><strong>Link teisele poolele:</strong> sisestatud andmed on kodeeritud lingi sisse (märgi # järele, mida brauser serverisse ei saada). Saatke link ainult teisele lepingupoolele.</p>
<p><strong>PDF-i saatmine e-postiga:</strong> brauser saadab valmis PDF-i ja antud aadressi meie serverisse, mis saadab sõnumi ühe korra ega salvesta midagi. Kuritarvituste vältimiseks hoiab server 24 tundi ainult IP-aadressi ja e-posti pöördumatut jälge ning saatmise aega (õiguslik alus: õigustatud huvi, isikuandmete kaitse üldmääruse art 6 lg 1 p f).</p>
<h2>3. Kasutajate tagasiside</h2><p>Tagasiside teksti salvestame koos kuupäeva ja lehe aadressiga, ilma nime ja e-postita, kõige rohkem 2 aastat.</p>
<h2>4. Maksed</h2><p>Kaardimakseid töötleb Stripe Payments Europe, Ltd.; kaardiandmeid me ei näe. Stripe’ilt saame maksja e-posti, summa ja kuupäeva, mida säilitame raamatupidamisreeglite kohaselt.</p>
<h2>5. Analüüs ja küpsised</h2><p>Kui annate bänneris nõusoleku, kasutame külastatavuse anonüümseks mõõtmiseks Google Analytics 4 (Google Ireland Ltd.) (isikuandmete kaitse üldmääruse art 6 lg 1 p a); Google ei salvesta ELis IP-aadresse. Ilma nõusolekuta analüüsi ei laadita ja küpsiseid ei kasutata. Nõusolekut saate igal ajal muuta lehe allosas oleva lingi „Küpsiste seaded“ kaudu.</p>
<h2>6. Majutus</h2><p>Leht töötab ettevõtte Exon serverites Tšehhis, mis hoiab turvalisuse huvides lühiajaliselt tehnilisi juurdepääsulogisid. Nõuande fotod laaditakse teenusest Unsplash (images.unsplash.com), mis näeb seega teie IP-aadressi.</p>
<h2>7. Teie õigused</h2><p>Teil on õigus tutvuda oma andmetega, neid parandada ja kustutada, piirata nende töötlemist ja esitada vastuväiteid. Kirjutage aadressil ${e}. Kaebuse võite esitada Andmekaitse Inspektsioonile (<a href="https://www.aki.ee" rel="noopener">aki.ee</a>) või Tšehhi järelevalveasutusele (ÚOOÚ).</p>`,
  },
];


/* ------------------------------------------------------------------ německy (DE i AT) */
const de = (zeme: 'de' | 'at' | 'ch'): InfoStranka[] => {
  const behoerde =
    zeme === 'at'
      ? 'bei der österreichischen Datenschutzbehörde (<a href="https://www.dsb.gv.at" rel="noopener">dsb.gv.at</a>)'
      : zeme === 'ch'
        ? 'beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (<a href="https://www.edoeb.admin.ch" rel="noopener">EDÖB</a>)'
        : 'bei der Datenschutzaufsichtsbehörde Ihres Bundeslandes';
  return [
    {
      typ: 'onas',
      slug: 'ueber-uns',
      title: 'Über Dokuio',
      description: 'Dokuio.com – kostenlose Vertragsvorlagen als PDF und Word. Wer dahintersteht und wie die Vorlagen entstehen.',
      html: `<p class="text-stranka__vytah">Dokuio gibt es, damit jede und jeder einen einfachen Vertrag – etwa beim Autoverkauf – selbst, schnell und kostenlos erstellen kann. Ohne Anmeldung, ohne Gebühren und ohne Juristendeutsch.</p>
<h2>Wie die Vorlagen entstehen</h2>
<ul><li>Die Texte beruhen auf den geltenden Gesetzen (${zeme === 'at' ? 'ABGB, KFG, FAGG, VGG – Quelle RIS' : zeme === 'ch' ? 'OR, ZGB, SchKG – Quelle Fedlex' : 'BGB, EGBGB, ErbStG – Quelle gesetze-im-internet.de'}) und amtlichen Informationen, nicht auf künstlicher Intelligenz.</li>
<li>Jede Vorlage hat eine Versionsnummer und ein Änderungsdatum – auf der Seite und in der Fußzeile des PDFs. Ein QR-Code im PDF führt zur Prüfung der Version.</li>
<li>Zu jedem Feld gibt es eine Erklärung, zu jedem Dokument Hinweise „Vor der Unterschrift prüfen“.</li>
<li>Wir verzichten bewusst auf komplizierte Klauseln. Ein einfacher, ausgewogener Text ist für Alltagsfälle sicherer.</li></ul>
<h2>Warum kostenlos</h2><p>Grundlegende Verträge sollen für alle zugänglich sein. Den Betrieb finanzieren wir selbst und mit freiwilligen Beiträgen.</p>
<h2>Kontakt</h2><p>${p.nazev}<br />IČO (Unternehmensnummer, Tschechien) ${p.ico}<br />${p.sidlo}, Tschechien<br />E-Mail: ${e}</p>
<p>Fehler in einer Vorlage gefunden oder fehlt Ihnen ein Vertrag? Schreiben Sie uns – wir lesen jede Nachricht.</p>`,
    },
    {
      typ: 'podminky',
      slug: 'nutzungsbedingungen',
      title: 'Nutzungsbedingungen',
      description: 'Nutzungsbedingungen von Dokuio.com – kostenlose Vertragsvorlagen als PDF und Word.',
      aktualizovano: AKT,
      html: `<h2>1. Anbieter</h2><p>Die Website dokuio.com betreibt ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Tschechien („Anbieter“). Kontakt: ${e}.</p>
<h2>2. Leistung</h2><p>Vorlagen für einfache Verträge und Dokumente, die Nutzer im Online-Assistenten ausfüllen oder leer herunterladen, als PDF oder Word. Der Dienst ist <strong>kostenlos</strong> und ohne Anmeldung nutzbar.</p>
<h2>3. Keine Rechtsberatung</h2><p>Wir stellen die Vorlagen nach bestem Wissen als Service bereit. Sie beruhen auf geltendem Recht, sind aber <strong>keine Rechtsberatung</strong> und passen nicht für jeden Fall. Der Anbieter ist kein Rechtsanwalt und wird nicht Vertragspartei.</p>
<h2>4. Verantwortung der Nutzer</h2><p>Für Inhalt, Änderungen, Ausfüllen und Verwendung eines Vertrags sind allein die Nutzer verantwortlich. Lesen Sie den Vertrag vor der Unterschrift sorgfältig; bei komplexen oder wertvollen Angelegenheiten empfehlen wir anwaltlichen Rat. Vom Nutzer geänderter Text ist nicht mehr Teil unserer Vorlage – im PDF ist das gekennzeichnet.</p>
<h2>5. Haftung</h2><p>Der Anbieter haftet nicht für Schäden aus der Verwendung der Vorlagen, fehlerhaftem Ausfüllen oder einer Verwendung außerhalb ihres Zwecks, soweit gesetzlich zulässig. Unberührt bleibt die Haftung für Vorsatz und grobe Fahrlässigkeit, für Schäden an Leben, Körper oder Gesundheit sowie zwingende Verbraucherrechte.</p>
<h2>6. Freiwillige Unterstützung</h2><p>Der Betrieb kann freiwillig über Stripe unterstützt werden. Eine Zahlung ist keine Voraussetzung für die Nutzung und begründet keinen Anspruch auf weitere Leistungen. Bei versehentlicher Zahlung schreiben Sie uns binnen 14 Tagen – wir erstatten den Betrag.</p>
<h2>7. Nutzung der Vorlagen</h2><p>Sie dürfen die Vorlagen für eigene Zwecke nutzen, ändern und ausgefüllte Verträge mit der anderen Seite teilen. Massenhaftes Kopieren sowie Weiterverbreitung oder Verkauf als eigene Vorlagensammlung ohne Zustimmung sind nicht erlaubt.</p>
<h2>8. Schlussbestimmungen</h2><p>Es gilt tschechisches Recht; zwingende Verbraucherschutzvorschriften Ihres Wohnsitzstaates bleiben unberührt. Die Verarbeitung personenbezogener Daten beschreibt die <a href="/${zeme}/datenschutz/">Datenschutzerklärung</a>.</p>`,
    },
    {
      typ: 'ochrana',
      slug: 'datenschutz',
      title: 'Datenschutzerklärung',
      description: 'Wie Dokuio.com mit personenbezogenen Daten umgeht. Die Daten aus Verträgen bleiben in Ihrem Browser.',
      aktualizovano: AKT,
      html: `<p class="text-stranka__vytah"><strong>Kurz gesagt:</strong> Was Sie in einen Vertrag eintragen, wird nirgendwohin gesendet. Der Vertrag entsteht direkt in Ihrem Browser. Analyse-Cookies setzen wir nur mit Ihrer Einwilligung.</p>
<h2>1. Verantwortlicher</h2><p>Verantwortlich ist ${p.nazev}, IČO ${p.ico}, ${p.sidlo}, Tschechien, E-Mail ${e}.</p>
<h2>2. Daten in Verträgen</h2><p>Namen, Anschriften, Fahrzeugdaten und andere Angaben aus dem Assistenten verarbeitet nur Ihr Browser; sie werden <strong>nicht an unseren Server gesendet und nicht gespeichert</strong>. Ein begonnenes Dokument speichert Ihr Browser im lokalen Speicher (localStorage) nur auf Ihrem Gerät; Sie können es im Assistenten oder durch Löschen der Browserdaten entfernen. Auf dem Bildschirm gezeichnete Unterschriften werden nicht gespeichert.</p>
<p><strong>Link für die andere Seite:</strong> Die Angaben stecken im Link selbst (nach dem Zeichen #, das der Browser nicht an den Server sendet). Senden Sie ihn nur an die andere Vertragspartei.</p>
<p><strong>PDF per E-Mail:</strong> Ihr Browser sendet das fertige PDF und die angegebene Adresse an unseren Server, der die E-Mail einmal versendet und nichts speichert. Zum Schutz vor Missbrauch speichert der Server 24 Stunden lang nur einen nicht umkehrbaren Hash von IP-Adresse und E-Mail sowie den Zeitpunkt (Rechtsgrundlage: berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).</p>
<h2>3. Feedback</h2><p>Feedback-Texte speichern wir mit Datum und Seitenadresse, ohne Namen und E-Mail, höchstens 2 Jahre.</p>
<h2>4. Zahlungen</h2><p>Kartenzahlungen wickelt Stripe Payments Europe, Ltd. ab; Kartendaten sehen wir nicht. Von Stripe erhalten wir E-Mail, Betrag und Datum, die wir nach den Buchhaltungsvorschriften aufbewahren.</p>
<h2>5. Analyse und Cookies</h2><p>Wenn Sie im Hinweisbanner einwilligen, nutzen wir Google Analytics 4 (Google Ireland Ltd.) zur anonymen Reichweitenmessung (Art. 6 Abs. 1 lit. a DSGVO); Google speichert in der EU keine IP-Adressen. Ohne Einwilligung wird die Analyse nicht geladen und es werden keine Cookies gesetzt. Ihre Einwilligung können Sie jederzeit über „Cookie-Einstellungen“ in der Fußzeile ändern.</p>
<h2>6. Hosting</h2><p>Die Website läuft auf Servern von Exon in Tschechien, die technische Zugriffsprotokolle aus Sicherheitsgründen kurz aufbewahren. Fotos im Ratgeber werden von Unsplash (images.unsplash.com) geladen; dabei sieht Unsplash Ihre IP-Adresse.</p>
<h2>7. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch. Schreiben Sie an ${e}. Beschweren können Sie sich ${behoerde} oder bei der tschechischen Aufsichtsbehörde ÚOOÚ.</p>`,
    },
  ];
};

const sZemi = (s: InfoStranka[], zeme: string): InfoStranka[] => s.map((x) => ({ ...x, description: `${x.description} (${zeme})` }));
export const INFORMACE: Record<string, InfoStranka[]> = {
  sk: SK,
  pl: PL,
  de: sZemi(de('de'), 'Deutschland'),
  at: sZemi(de('at'), 'Österreich'),
  ch: naSchweiz(sZemi(de('ch'), 'Schweiz')),
  hu: HU,
  hr: HR,
  si: SI,
  ro: RO,
  bg: BG,
  gr: GR,
  ee: EE,
};

/** Odkazy v patičce podle země (CZ má vlastní stránky v src/pages/cz/) */
export const INFO_ODKAZY: Record<string, Record<TypInfo, string>> = {
  cz: { onas: '/cz/o-nas/', podminky: '/cz/podminky-uziti/', ochrana: '/cz/ochrana-osobnich-udaju/' },
  ...Object.fromEntries(
    Object.entries(INFORMACE).map(([z, s]) => [z, Object.fromEntries(s.map((x) => [x.typ, `/${z}/${x.slug}/`])) as Record<TypInfo, string>]),
  ),
};
