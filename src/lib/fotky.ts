/**
 * Fotky poradny z Unsplash (licence Unsplash: volné použití, uvádíme autora).
 * Načítají se přímo z images.unsplash.com – zmíněno v zásadách ochrany údajů.
 */
export interface Fotka {
  id: string;
  autor: string;
}

export const FOTKY = {
  'auto-klice': { id: '1761014586544-53fe5e1f1e25', autor: 'yahdi yasya' },
  'auto-predani': { id: '1727893512947-8bdc773ceb02', autor: 'Mehmet Talha Onuk' },
  'auto-ojetina': { id: '1671719367451-7bf05ae9549c', autor: 'Swansway Motor Group' },
  'auto-tachometr': { id: '1498887960847-2a5e46312788', autor: 'CHUTTERSNAP' },
  'auto-jizda': { id: '1675962548788-35892e0f7ae4', autor: 'fruitfullmedia' },
  'auto-palubka': { id: '1687039618665-9588be0d3fe4', autor: 'Zhivko Minkov' },
  podpis: { id: '1763729805496-b5dbf7f00c79', autor: 'Jakub Żerdzicki' },
  dokumenty: { id: '1775163024488-e88e4a71179f', autor: 'Olena Kholina' },
  psani: { id: '1450101499163-c8848c66ca85', autor: 'Scott Graham' },
  'podani-ruky': { id: '1681505531034-8d67054e07f6', autor: 'Amina Atar' },
  penize: { id: '1580048915913-4f8f5cb481c4', autor: 'Omid Armin' },
  kalkulacka: { id: '1626266061368-46a8f578ddd6', autor: 'Towfiqu barbhuiya' },
  ucty: { id: '1554224154-26032ffc0d07', autor: 'Kelly Sikkema' },
  dar: { id: '1549465220-1a8b9238cd48', autor: 'Ekaterina Shevchenko' },
  'klice-byt': { id: '1741156386380-0236c72eb6f9', autor: 'Jakub Żerdzicki' },
  'klice-dvere': { id: '1737442886747-9fb768b96ed2', autor: 'Jakub Żerdzicki' },
  stehovani: { id: '1714647211902-bb711d643a17', autor: 'Vitaly Gariev' },
  krabice: { id: '1730154838368-c37b1fdebcf6', autor: 'Dina Badamshina' },
  balik: { id: '1566576721346-d4a3b4eaeb55', autor: 'RoseBox' },
  'nakup-online': { id: '1563013544-824ae1b704d3', autor: 'rupixen' },
  oprava: { id: '1550041473-d296a3a8a18a', autor: 'Clint Bustrillos' },
  'rozbity-telefon': { id: '1746006084492-24a8fd02710a', autor: 'Fotografia Lui Vlad' },
  'dite-cesta': { id: '1497581170673-3d7d98e9a075', autor: 'Hanson Lu' },
  pas: { id: '1641736494066-bd18237ede26', autor: 'Alexander Nrjwolf' },
} satisfies Record<string, Fotka>;

export type KlicFotky = keyof typeof FOTKY;

export const urlFotky = (klic: string, w = 1200, h?: number) => {
  const f = (FOTKY as Record<string, Fotka>)[klic];
  if (!f) throw new Error(`Neznámá fotka: ${klic}`);
  return `https://images.unsplash.com/photo-${f.id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;
};

export const srcsetFotky = (klic: string, pomer = 16 / 9) =>
  [480, 800, 1200].map((w) => `${urlFotky(klic, w, Math.round(w / pomer))} ${w}w`).join(', ');

export const autorFotky = (klic: string) => (FOTKY as Record<string, Fotka>)[klic]?.autor ?? '';

/** Popisky fotek (alt) podle jazyka; de-CH používá de (bez ß) */
const ALT: Record<string, string[]> = {
  'auto-klice': ['Předání klíčů od auta', 'Odovzdanie kľúčov od auta', 'Przekazanie kluczyków do samochodu', 'Übergabe der Autoschlüssel', 'Az autókulcs átadása', 'Predaja ključeva automobila', 'Predaja ključev avtomobila', 'Predarea cheilor mașinii', 'Предаване на ключовете от колата', 'Παράδοση των κλειδιών του αυτοκινήτου'],
  'auto-predani': ['Prodávající podává kupujícímu klíče od auta', 'Predávajúci podáva kupujúcemu kľúče od auta', 'Sprzedający podaje kupującemu kluczyki', 'Verkäufer übergibt dem Käufer den Autoschlüssel', 'Az eladó átadja a vevőnek az autókulcsot', 'Prodavatelj predaje kupcu ključeve automobila', 'Prodajalec izroča kupcu ključe avtomobila', 'Vânzătorul îi înmânează cumpărătorului cheile mașinii', 'Продавачът подава на купувача ключовете от колата', 'Ο πωλητής δίνει στον αγοραστή τα κλειδιά του αυτοκινήτου'],
  'auto-ojetina': ['Klíček v ruce před ojetým autem', 'Kľúč v ruke pred jazdeným autom', 'Kluczyk w dłoni przed używanym autem', 'Autoschlüssel vor einem Gebrauchtwagen', 'Autókulcs egy használt autó előtt', 'Ključ u ruci ispred rabljenog automobila', 'Ključ v roki pred rabljenim avtomobilom', 'Cheie în mână în fața unei mașini rulate', 'Ключ в ръка пред употребявана кола', 'Κλειδί στο χέρι μπροστά σε μεταχειρισμένο αυτοκίνητο'],
  'auto-tachometr': ['Tachometr auta', 'Tachometer auta', 'Licznik samochodu', 'Tacho eines Autos', 'Az autó kilométerórája', 'Brzinomjer automobila', 'Merilnik hitrosti avtomobila', 'Bordul de kilometraj al mașinii', 'Километраж на кола', 'Χιλιομετρητής αυτοκινήτου'],
  'auto-jizda': ['Jízda autem po silnici', 'Jazda autom po ceste', 'Jazda samochodem', 'Autofahrt auf der Landstrasse', 'Autózás országúton', 'Vožnja automobilom po cesti', 'Vožnja z avtomobilom po cesti', 'Mașină pe șosea', 'Шофиране по път', 'Οδήγηση αυτοκινήτου στον δρόμο'],
  'auto-palubka': ['Interiér auta s volantem', 'Interiér auta s volantom', 'Wnętrze samochodu', 'Innenraum eines Autos', 'Autó belső tere kormánnyal', 'Unutrašnjost automobila s upravljačem', 'Notranjost avtomobila z volanom', 'Interiorul mașinii cu volanul', 'Интериор на кола с волан', 'Εσωτερικό αυτοκινήτου με τιμόνι'],
  'podpis': ['Podpis smlouvy perem', 'Podpis zmluvy perom', 'Podpisywanie umowy', 'Unterschrift unter einen Vertrag', 'Szerződés aláírása tollal', 'Potpisivanje ugovora olovkom', 'Podpisovanje pogodbe s pisalom', 'Semnarea unui contract cu pixul', 'Подписване на договор с химикалка', 'Υπογραφή σύμβασης με στυλό'],
  'dokumenty': ['Dva lidé procházejí dokumenty', 'Dvaja ľudia prechádzajú dokumenty', 'Dwie osoby przeglądają dokumenty', 'Zwei Personen prüfen Dokumente', 'Két ember iratokat néz át', 'Dvoje ljudi pregledava dokumente', 'Dve osebi pregledujeta dokumente', 'Două persoane verifică documente', 'Двама души преглеждат документи', 'Δύο άνθρωποι εξετάζουν έγγραφα'],
  'psani': ['Psaní dokumentu', 'Písanie dokumentu', 'Pisanie dokumentu', 'Ein Dokument wird geschrieben', 'Dokumentum írása', 'Pisanje dokumenta', 'Pisanje dokumenta', 'Scrierea unui document', 'Писане на документ', 'Σύνταξη εγγράφου'],
  'podani-ruky': ['Podání ruky nad smlouvou', 'Podanie rúk nad zmluvou', 'Uścisk dłoni nad umową', 'Handschlag über einem Vertrag', 'Kézfogás egy szerződés felett', 'Rukovanje nad ugovorom', 'Stisk rok nad pogodbo', 'Strângere de mână deasupra unui contract', 'Ръкостискане над договор', 'Χειραψία πάνω από μια σύμβαση'],
  'penize': ['Bankovky v ruce', 'Bankovky v ruke', 'Banknoty w dłoni', 'Geldscheine in der Hand', 'Bankjegyek kézben', 'Novčanice u ruci', 'Bankovci v roki', 'Bancnote în mână', 'Банкноти в ръка', 'Χαρτονομίσματα στο χέρι'],
  'kalkulacka': ['Počítání na kalkulačce', 'Počítanie na kalkulačke', 'Liczenie na kalkulatorze', 'Rechnen mit dem Taschenrechner', 'Számolás számológéppel', 'Računanje na kalkulatoru', 'Računanje na kalkulatorju', 'Calcul pe calculator', 'Смятане на калкулатор', 'Υπολογισμός με αριθμομηχανή'],
  'ucty': ['Doklady a kalkulačka na stole', 'Doklady a kalkulačka na stole', 'Dokumenty i kalkulator na biurku', 'Belege und Taschenrechner auf dem Tisch', 'Bizonylatok és számológép az asztalon', 'Računi i kalkulator na stolu', 'Računi in kalkulator na mizi', 'Chitanțe și calculator pe masă', 'Документи и калкулатор на масата', 'Αποδείξεις και αριθμομηχανή στο τραπέζι'],
  'dar': ['Zabalený dárek', 'Zabalený darček', 'Zapakowany prezent', 'Verpacktes Geschenk', 'Becsomagolt ajándék', 'Zamotani poklon', 'Zavito darilo', 'Cadou împachetat', 'Опакован подарък', 'Τυλιγμένο δώρο'],
  'klice-byt': ['Klíče od bytu před vchodem', 'Kľúče od bytu pred vchodom', 'Klucze do mieszkania przed wejściem', 'Wohnungsschlüssel vor dem Eingang', 'Lakáskulcs a bejárat előtt', 'Ključevi stana ispred ulaza', 'Ključi stanovanja pred vhodom', 'Cheile apartamentului în fața intrării', 'Ключове от апартамент пред входа', 'Κλειδιά διαμερίσματος μπροστά στην είσοδο'],
  'klice-dvere': ['Klíč ve dveřích', 'Kľúč vo dverách', 'Klucz w drzwiach', 'Schlüssel in der Tür', 'Kulcs az ajtóban', 'Ključ u vratima', 'Ključ v vratih', 'Cheie în ușă', 'Ключ във вратата', 'Κλειδί στην πόρτα'],
  'stehovani': ['Stěhování s krabicemi', 'Sťahovanie s krabicami', 'Przeprowadzka z kartonami', 'Umzug mit Kartons', 'Költözés dobozokkal', 'Selidba s kutijama', 'Selitev s škatlami', 'Mutare cu cutii', 'Преместване с кашони', 'Μετακόμιση με κούτες'],
  'krabice': ['Pokoj plný krabic', 'Izba plná krabíc', 'Pokój pełen kartonów', 'Zimmer voller Kartons', 'Dobozokkal teli szoba', 'Soba puna kutija', 'Soba polna škatel', 'Cameră plină de cutii', 'Стая, пълна с кашони', 'Δωμάτιο γεμάτο κούτες'],
  'balik': ['Předání balíku', 'Odovzdanie balíka', 'Przekazanie paczki', 'Übergabe eines Pakets', 'Csomag átadása', 'Predaja paketa', 'Predaja paketa', 'Predarea unui colet', 'Предаване на пратка', 'Παράδοση δέματος'],
  'nakup-online': ['Nákup na internetu s platební kartou', 'Nákup na internete s platobnou kartou', 'Zakupy online z kartą płatniczą', 'Online-Einkauf mit Kreditkarte', 'Online vásárlás bankkártyával', 'Kupnja na internetu platnom karticom', 'Nakup na spletu s plačilno kartico', 'Cumpărături online cu cardul', 'Пазаруване онлайн с банкова карта', 'Αγορά στο διαδίκτυο με κάρτα πληρωμής'],
  'oprava': ['Oprava mobilního telefonu', 'Oprava mobilného telefónu', 'Naprawa telefonu', 'Reparatur eines Smartphones', 'Mobiltelefon javítása', 'Popravak mobitela', 'Popravilo mobilnega telefona', 'Repararea unui telefon mobil', 'Ремонт на мобилен телефон', 'Επισκευή κινητού τηλεφώνου'],
  'rozbity-telefon': ['Rozbitý displej telefonu', 'Rozbitý displej telefónu', 'Rozbity ekran telefonu', 'Gesprungenes Handydisplay', 'Repedt telefonkijelző', 'Razbijen zaslon mobitela', 'Razbit zaslon telefona', 'Ecran de telefon spart', 'Счупен екран на телефон', 'Σπασμένη οθόνη κινητού'],
  'dite-cesta': ['Dítě na letišti', 'Dieťa na letisku', 'Dziecko na lotnisku', 'Kind am Flughafen', 'Gyermek a repülőtéren', 'Dijete u zračnoj luci', 'Otrok na letališču', 'Copil pe aeroport', 'Дете на летището', 'Παιδί στο αεροδρόμιο'],
  'pas': ['Cestovní pas v ruce', 'Cestovný pas v ruke', 'Paszport w dłoni', 'Reisepass in der Hand', 'Útlevél kézben', 'Putovnica u ruci', 'Potni list v roki', 'Pașaport în mână', 'Паспорт в ръка', 'Διαβατήριο στο χέρι'],
};

export const altFotky = (klic: string, jazyk: string) => {
  const a = ALT[klic];
  if (!a) return '';
  const i = ({ cs: 0, sk: 1, pl: 2, hu: 4, hr: 5, sl: 6, ro: 7, bg: 8, el: 9 } as Record<string, number>)[jazyk] ?? 3;
  return jazyk === 'de-CH' ? a[3].replace(/ß/g, 'ss') : a[i];
};
