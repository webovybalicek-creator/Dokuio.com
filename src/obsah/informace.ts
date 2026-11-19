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
};

/** Odkazy v patičce podle země (CZ má vlastní stránky v src/pages/cz/) */
export const INFO_ODKAZY: Record<string, Record<TypInfo, string>> = {
  cz: { onas: '/cz/o-nas/', podminky: '/cz/podminky-uziti/', ochrana: '/cz/ochrana-osobnich-udaju/' },
  ...Object.fromEntries(
    Object.entries(INFORMACE).map(([z, s]) => [z, Object.fromEntries(s.map((x) => [x.typ, `/${z}/${x.slug}/`])) as Record<TypInfo, string>]),
  ),
};
