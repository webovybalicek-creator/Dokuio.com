/**
 * Szerződés felmondása (előfizetés, biztosítás, áram/gáz, edzőterem, egyéb szolgáltatás) – Magyarország.
 * Ověřeno na NJT 20. 11. 2026: Eht. 134. § (1) – határozatlan idejű előfizetői szerződés azonnali hatállyal bármikor,
 * további jogkövetkezmények nélkül; 134. § (15)–(15a) – határozott idejű szerződés korábbi felmondásakor csak a kapott
 * kedvezmények követelhetők; 134. § (17) – felmondás minden formában, amelyben a szerződés megköthető; 132. § (5) –
 * egyoldalú módosításnál 45 napon belül azonnali hatállyal. Kgfb. 7. § (1), (1a) – évfordulóra, legalább 30 nappal
 * előtte, a felmondás akkor hatályosul, ha határidőben megérkezik; 7. § (4) – tulajdonjog átszállása: érdekmúlás.
 * Egyéb biztosítás, áram/gáz, edzőterem, előfizetés: a felmondási idő a szerződés / ÁSZF szerint (nem általánosítunk).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { EHT, KGFB, PTK } from './forrasok';

export const szerzodesFelmondasa: Sablona = {
  kod: 'HU-SZERZODES-FELMONDAS',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Szerződés felmondása',
  podnadpis: 'felmondó levél előfizetés, biztosítás, energia, tagság vagy más szolgáltatás megszüntetéséhez',
  souborPdf: 'szerzodes-felmondasa',
  paticka: 'Ingyenesen készült · HU-SZERZODES-FELMONDAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért Ön felel, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'ügyfél (előfizető, szerződő)', vpravo: 'átvette a szolgáltató (személyes átadáskor)' },
  slovo: { n: 'felmondás', g: 'felmondás', a: 'felmondást', l: 'felmondásban' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const veg = naDatum(d.megszunes_datum);
    if (!veg) return [];
    return [
      { nazev: 'Megszűnt a felmondott szerződés?', datum: isoDatum(veg), popis: 'Ellenőrizze, megkapta-e a visszaigazolást és a végszámlát, és leállt-e a díjterhelés.' },
      ...(d.tipus === 'biztositas' ? [{ nazev: 'Az új biztosítás megkötése', datum: isoDatum(pridejDny(veg, -14)), popis: 'A régi biztosítás megszűnése előtt kösse meg az újat, hogy ne maradjon fedezet nélkül.' }] : []),
    ];
  },
  coDal: [
    'Juttassa el igazolhatóan: tértivevényes ajánlott levélben, személyesen (a másolaton átvételi aláírással), vagy azon a módon, amelyen a szerződést megkötötte (pl. ügyfélkapu, online fiók, e-mail).',
    'A határidőnél az számít, mikor ÉRKEZIK meg a felmondás a szolgáltatóhoz – ne az utolsó napon küldje.',
    'Őrizze meg a feladóvevényt, a tértivevényt és a visszaigazolást, amíg a végszámlát rendezték.',
    'Ha csoportos beszedéssel vagy kártyával fizetett, a megszűnés után ellenőrizze, hogy leállt-e a terhelés.',
  ],
  kontrola: [
    'Mobil, internet, tévé: a határozatlan idejű előfizetői szerződést az előfizető bármikor, azonnali hatállyal, további jogkövetkezmények nélkül felmondhatja (Eht. 134. § (1)).',
    'Határozott idejű (hűségidős) előfizetésnél idő előtti felmondáskor a szolgáltató a kapott kedvezményeket követelheti (Eht. 134. § (15)–(15a)). Nézze meg a szerződésben, mikor jár le a határozott idő.',
    'A távközlési szolgáltatónak minden olyan módon el kell fogadnia a felmondást, amelyen a szerződés megköthető (Eht. 134. § (17)) – ha online kötötte, online is felmondhatja.',
    'Ha a távközlési szolgáltató egyoldalúan módosítja a szerződést, az értesítéstől számított 45 napon belül azonnali hatállyal felmondhat (Eht. 132. § (5)).',
    'Kötelező gépjármű-felelősségbiztosítás (kgfb): a biztosítási évfordulóra, legalább 30 nappal előtte mondható fel, és a felmondásnak határidőben MEG KELL ÉRKEZNIE a biztosítóhoz (Kgfb. tv. 7. § (1), (1a)). Az autó eladásakor a szerződés érdekmúlással szűnik meg, nem kell felmondani (7. § (4)).',
    'Más biztosítás, áram és gáz, edzőterem, előfizetés: a felmondási időt és módot a szerződés, a biztosítási feltételek vagy az ÁSZF (üzletszabályzat) tartalmazza – a megszűnés napját ehhez igazítsa.',
    'Írja be pontosan a szerződésszámot, ügyfél-azonosítót vagy kötvényszámot – ez alapján találják meg a szerződését.',
    'Áram és gáz esetén írja fel és fotózza le a mérőóra állását a felmondás napján.',
  ],
  zdroje: [EHT, KGFB, PTK],
  kroky: [
    {
      id: 'felek',
      nazev: 'Ön és a szolgáltató',
      popis: 'Az ügyfél az, akinek a nevén a szerződés van.',
      pole: [
        { id: 'n_nev', typ: 'text', popis: 'Az Ön neve', napoveda: 'Ahogy a szerződésben szerepel. Cég esetén a cégnév.', placeholder: 'pl. Kovács Anna', sirka: 34, autocomplete: 'name' },
        { id: 'n_szul', typ: 'datum', popis: 'Születési dátum (nem kötelező)', napoveda: 'Segít a szolgáltatónak azonosítani Önt.', sirka: 14, polovina: true },
        { id: 'n_elerhetoseg', typ: 'text', popis: 'Telefon vagy e-mail', napoveda: 'Ha a szolgáltatónak kérdése van, vagy ide kéri a visszaigazolást.', placeholder: 'pl. kovacs.anna@email.hu', sirka: 30, polovina: true },
        { id: 'n_cim', typ: 'text', popis: 'Lakcím vagy levelezési cím', napoveda: 'Amelyik cím a szerződésben szerepel.', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 46 },
        { id: 'sz_nev', typ: 'text', popis: 'Szolgáltató neve', napoveda: 'A cég neve a szerződésből vagy a számláról.', placeholder: 'pl. Minta Telekom Zrt.', sirka: 34 },
        { id: 'sz_cim', typ: 'text', popis: 'Szolgáltató levelezési címe', napoveda: 'A számlán, a szerződésben vagy a szolgáltató honlapján található ügyfélszolgálati levelezési cím.', placeholder: 'pl. 1097 Budapest, Könyves Kálmán krt. 36.', sirka: 46 },
      ],
    },
    {
      id: 'szerzodes',
      nazev: 'A szerződés',
      pole: [
        {
          id: 'tipus',
          typ: 'volba',
          popis: 'Milyen szerződést mond fel?',
          napoveda: 'Ettől függ a levél szövege és a tippek a határidőkről.',
          moznosti: [
            { hodnota: 'tavkozles', popis: 'Mobil, internet vagy tévé előfizetés' },
            { hodnota: 'biztositas', popis: 'Biztosítás (pl. kgfb, lakásbiztosítás)' },
            { hodnota: 'energia', popis: 'Áram vagy gáz' },
            { hodnota: 'tagsag', popis: 'Edzőterem, klub, tagság' },
            { hodnota: 'elofizetes', popis: 'Előfizetés vagy rendszeres szolgáltatás (pl. lap, streaming, szoftver)' },
            { hodnota: 'egyeb', popis: 'Egyéb szerződés' },
          ],
        },
        { id: 'azonosito', typ: 'text', popis: 'Szerződésszám, ügyfél-azonosító vagy kötvényszám', napoveda: 'A számlán, a szerződésben vagy a kötvényen találja. Ez a legfontosabb adat.', placeholder: 'pl. 123456789', sirka: 20, polovina: true },
        { id: 'szolgaltatas', typ: 'text', popis: 'A szolgáltatás megnevezése', napoveda: 'Pl. telefonszám és díjcsomag, rendszám, a biztosítás fajtája, a bérlet típusa.', placeholder: 'pl. +36 30 123 4567, Mobil S csomag', sirka: 40 },
        { id: 'fogyhely', typ: 'text', popis: 'Felhasználási hely címe', napoveda: 'Annak az ingatlannak a címe, ahová az áramot vagy a gázt szolgáltatják.', placeholder: 'pl. 6720 Szeged, Kárász utca 5.', sirka: 46, zobrazitKdyz: { pole: 'tipus', je: 'energia' } },
        { id: 'meroallas', typ: 'text', popis: 'Mérőóra állása (nem kötelező)', napoveda: 'Írja fel a felmondás napján, és fotózza le az órát.', placeholder: 'pl. 12 345 kWh', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'tipus', je: 'energia' } },
      ],
    },
    {
      id: 'megszunes',
      nazev: 'Megszűnés és kérések',
      pole: [
        {
          id: 'mikor',
          typ: 'volba',
          popis: 'Mikor szűnjön meg a szerződés?',
          napoveda: 'Ha nem tudja pontosan, válassza a legkorábbi lehetséges időpontot – a szolgáltató a szerződés szerint számolja ki.',
          moznosti: [
            { hodnota: 'legkorabbi', popis: 'A legkorábbi lehetséges időpontban' },
            { hodnota: 'datum', popis: 'Egy adott napon' },
            { hodnota: 'evfordulo', popis: 'Az évfordulóra / a szerződési időszak végére' },
          ],
        },
        { id: 'megszunes_datum', typ: 'datum', popis: 'A megszűnés napja', napoveda: 'Biztosításnál a biztosítási évforduló (a kötvényen szerepel). Emlékeztetőt is kap róla.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'mikor', je: ['datum', 'evfordulo'] } },
        {
          id: 'kerelmek',
          typ: 'vice',
          popis: 'Mit kér még a szolgáltatótól?',
          napoveda: 'A visszaigazolás bizonyítja, hogy a felmondás megérkezett. A túlfizetést csak akkor tudják visszautalni, ha megadja a számlaszámot.',
          moznosti: [
            { hodnota: 'megerosites', popis: 'Írásbeli visszaigazolás a megszűnés napjáról' },
            { hodnota: 'elszamolas', popis: 'Végszámla és a túlfizetés visszautalása' },
            { hodnota: 'terheles', popis: 'A díjterhelés (csoportos beszedés, kártya) leállítása' },
          ],
        },
        { id: 'szamla', typ: 'text', popis: 'Bankszámlaszám a túlfizetéshez', napoveda: 'Az Ön bankszámlája, 16 vagy 24 számjegy.', placeholder: 'pl. 11773016-12345678-00000000', sirka: 32, zobrazitKdyz: { pole: 'kerelmek', je: 'elszamolas' } },
        { id: 'misto', typ: 'text', popis: 'Helység', napoveda: 'Ahol a levelet aláírja.', placeholder: 'pl. Budapest', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', napoveda: 'A mai napot írtuk be.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Felek',
      vysvetleni: 'Ki mond fel, és kinek küldi a levelet.',
      odstavce: [
        '**Feladó:** {{n_nev}}, születési dátum: {{n_szul}}, cím: {{n_cim}}, elérhetőség: {{n_elerhetoseg}}',
        '**Címzett:** {{sz_nev}}, {{sz_cim}}',
        '**Tárgy:** szerződés felmondása – azonosító: {{azonosito}}',
      ],
    },
    {
      nadpis: 'Felmondás',
      vysvetleni: 'Maga a felmondás. A szerződés azonosítója alapján rendelik hozzá a nyilatkozatot az Ön szerződéséhez.',
      odstavce: [
        'Tisztelt Hölgyem / Uram!',
        {
          volba: 'tipus',
          uvodVzor: 'A szerződés fajtája (egyet jelöljön meg):',
          moznosti: {
            tavkozles: 'Alulírott a(z) {{azonosito}} számú előfizetői szerződésemet ({{szolgaltatas}}) felmondom.',
            biztositas: 'Alulírott a(z) {{azonosito}} számú biztosítási szerződésemet ({{szolgaltatas}}) felmondom.',
            energia: 'Alulírott a(z) {{fogyhely}} felhasználási helyre vonatkozó, {{azonosito}} számú szerződésemet ({{szolgaltatas}}) felmondom.',
            tagsag: 'Alulírott a(z) {{azonosito}} számú tagsági szerződésemet ({{szolgaltatas}}) felmondom.',
            elofizetes: 'Alulírott a(z) {{azonosito}} számú előfizetésemet ({{szolgaltatas}}) felmondom.',
            egyeb: 'Alulírott a(z) {{azonosito}} számú, {{szolgaltatas}} tárgyú szerződésemet felmondom.',
          },
        },
        {
          volba: 'mikor',
          uvodVzor: 'A megszűnés időpontja (egyet jelöljön meg):',
          moznosti: {
            legkorabbi: 'Kérem, hogy a szerződés a szerződés, illetve az általános szerződési feltételek szerinti legkorábbi lehetséges időpontban szűnjön meg.',
            datum: 'Kérem, hogy a szerződés {{megszunes_datum}} napjával szűnjön meg; ha ez a szerződés szerint nem lehetséges, a legkorábbi lehetséges időpontban.',
            evfordulo: 'A szerződést a folyamatban lévő szerződési (biztosítási) időszak végére, {{megszunes_datum}} napjára mondom fel.',
          },
        },
        {
          volba: 'tipus',
          kdyz: { pole: 'tipus', je: 'energia' },
          uvodVzor: 'Csak áram vagy gáz esetén:',
          moznosti: { energia: 'A fogyasztásmérő állása a felmondás napján: {{meroallas}}. Kérem, a végszámlát ennek alapján állítsák ki.' },
        },
      ],
    },
    {
      nadpis: 'Kérések',
      vysvetleni: 'Visszaigazolás és elszámolás – így látja, hogy minden rendben lezárult.',
      odstavce: [
        {
          vice: 'kerelmek',
          uvod: 'Egyúttal kérem:',
          moznosti: {
            megerosites: 'a felmondás kézhezvételének és a szerződés megszűnése napjának írásbeli visszaigazolását,',
            elszamolas: 'a végszámla megküldését, és az esetleges túlfizetés visszautalását a(z) {{szamla}} számú bankszámlámra,',
            terheles: 'hogy a megszűnés után további díjat ne terheljenek (csoportos beszedés, bankkártya).',
          },
        },
        'Köszönöm együttműködésüket.',
      ],
    },
  ],
};
