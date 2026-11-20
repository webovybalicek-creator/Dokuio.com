/**
 * Vállalkozási szerződés – Magyarország. Ptk. 6:238. § (fogalom), 6:244. § (többletmunka, pótmunka),
 * 6:245. § (átalánydíj / tételes elszámolás). Építési kivitelezésre (Ptk. 6:252. §, Épkiv.) nem alkalmas.
 */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { naDatum } from '../terminy';
import { PTK, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

export const vallalkozasiSzerzodes: Sablona = {
  kod: 'HU-VALLALKOZASI-SZERZODES',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Vállalkozási szerződés',
  podnadpis: 'a Polgári Törvénykönyv 6:238. §-a és következő szakaszai alapján',
  souborPdf: 'vallalkozasi-szerzodes',
  paticka: 'Ingyenesen készült · HU-VALLALKOZASI-SZERZODES v1.1 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'megrendelő', vpravo: 'vállalkozó' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  pripominky: (d) => [
    ...(naDatum(d.zahajeni) ? [{ nazev: 'Munkakezdés', datum: String(d.zahajeni) }] : []),
    ...(naDatum(d.dokonceni) ? [{ nazev: 'Teljesítés és átadás', datum: String(d.dokonceni), popis: 'Vizsgálja meg a munkát, és rögzítse a hibákat az átadás-átvételi jegyzőkönyvben.' }] : []),
  ],
  coDal: [
    'Nyomtassa ki két példányban, mindkét fél írja alá mindkettőt.',
    'Az előleget utalja, vagy kérjen róla átvételi elismervényt.',
    'A többlet- és pótmunkát, árváltozást írásban egyeztessék.',
    'Átadáskor vizsgálja meg a munkát, és a hibákat írja a jegyzőkönyvbe.',
  ],
  kontrola: [
    'A munkát minél pontosabban írja le (terjedelem, anyag, méretek; az árajánlat lehet melléklet) – a vállalkozó eredményt vállal (Ptk. 6:238. §).',
    'Átalánydíjnál a vállalkozó csak a pótmunka ellenértékét kérheti az átalánydíjon felül, a többletmunkáét nem (Ptk. 6:244–6:245. §).',
    'Lakás építésére, felújítására építési engedélyhez vagy bejelentéshez kötött munkánál külön szabályok (kivitelezési szerződés) vonatkoznak – ott ezt a mintát ne használja.',
    TIP_TANUK,
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK],
  kroky: [
    {
      id: 'felek',
      nazev: 'Megrendelő és vállalkozó',
      pole: [
        { id: 'o_jmeno', typ: 'text', popis: 'Megrendelő – név vagy cégnév', placeholder: 'pl. Kovács János', sirka: 34, autocomplete: 'name' },
        { id: 'o_adresa', typ: 'text', popis: 'Megrendelő címe', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 46 },
        { id: 'z_jmeno', typ: 'text', popis: 'Vállalkozó – név vagy cégnév', placeholder: 'pl. Nagy Burkolás Kft.', sirka: 34 },
        { id: 'z_ico', typ: 'text', popis: 'Adószám (nem kötelező)', sirka: 16, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Vállalkozó címe / székhelye', placeholder: 'pl. 4024 Debrecen, Piac utca 5.', sirka: 46 },
      ],
    },
    {
      id: 'munka',
      nazev: 'A munka',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'A munka leírása', napoveda: 'Terjedelem, anyag, méretek. Hivatkozhat az árajánlatra.', placeholder: 'pl. fürdőszoba burkolatcseréje (8 m²), a régi burkolat bontásával és a sitt elszállításával, a 2026. 11. 03-i árajánlat szerint', sirka: 70 },
        { id: 'misto_dila', typ: 'text', popis: 'A teljesítés helye', sirka: 46 },
        {
          id: 'material',
          typ: 'volba',
          popis: 'Ki biztosítja az anyagot?',
          moznosti: [
            { hodnota: 'zhotovitel', popis: 'A vállalkozó (benne van a díjban)' },
            { hodnota: 'objednatel', popis: 'A megrendelő' },
          ],
        },
        { id: 'zahajeni', typ: 'datum', popis: 'Munkakezdés', sirka: 14, polovina: true },
        { id: 'dokonceni', typ: 'datum', popis: 'Teljesítési határidő', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'dij',
      nazev: 'Vállalkozói díj',
      pole: [
        {
          id: 'typ_ceny',
          typ: 'volba',
          popis: 'A díj fajtája',
          moznosti: [
            { hodnota: 'atalany', popis: 'Átalánydíj' },
            { hodnota: 'teteles', popis: 'Tételes elszámolás (költségvetés szerint)' },
          ],
        },
        { id: 'cena', typ: 'castka', popis: 'Díj összesen (Ft, bruttó)', placeholder: 'pl. 600000', sirka: 14, polovina: true },
        {
          id: 'zaloha_ano',
          typ: 'volba',
          popis: 'Előleg',
          moznosti: [
            { hodnota: 'ne', popis: 'Nincs – a teljes díj átadáskor' },
            { hodnota: 'ano', popis: 'Előleg, a többi átadáskor' },
          ],
        },
        { id: 'zaloha', typ: 'castka', popis: 'Előleg összege (Ft)', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zaloha_ano', je: 'ano' } },
        { id: 'splatnost_dny', typ: 'cislo', popis: 'Fizetési határidő átadás után (nap)', placeholder: 'pl. 8', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Vállalkozó bankszámlaszáma (nem kötelező)', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Hely', placeholder: 'pl. Budapest', sirka: 18, polovina: true, vychozi: { obecZ: 'o_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovy: (d) => osszegBetuvel(d.cena) },
  clanky: [
    { nadpis: 'Szerződő felek', odstavce: ['**Megrendelő:** {{o_jmeno}}, {{o_adresa}} (a továbbiakban: „Megrendelő”)', '**Vállalkozó:** {{z_jmeno}}, adószám: {{z_ico}}, {{z_adresa}} (a továbbiakban: „Vállalkozó”)'] },
    {
      nadpis: 'A szerződés tárgya',
      vysvetleni: 'A vállalkozó egy konkrét eredmény elérését vállalja, a megrendelő átveszi és kifizeti.',
      odstavce: [
        'A Vállalkozó elvállalja a következő munka elvégzését: {{predmet}}.',
        'A teljesítés helye: {{misto_dila}}.',
        {
          volba: 'material',
          uvodVzor: 'Anyag (jelöljön meg egyet):',
          moznosti: {
            zhotovitel: 'A munkához szükséges anyagot a Vállalkozó biztosítja; annak ára a vállalkozói díjban szerepel.',
            objednatel: 'A munkához szükséges anyagot a Megrendelő biztosítja. A Vállalkozó a nem megfelelő anyagra haladéktalanul figyelmezteti a Megrendelőt.',
          },
        },
        'A Megrendelő vállalja, hogy a munka eredményét átveszi és a vállalkozói díjat megfizeti.',
      ],
    },
    {
      nadpis: 'Teljesítési határidő',
      odstavce: ['A Vállalkozó a munkát {{zahajeni}} napján kezdi meg, és legkésőbb {{dokonceni}} napján átadja.', 'A Megrendelő szokásos munkaidőben biztosítja a hozzáférést a teljesítés helyéhez.'],
    },
    {
      nadpis: 'Vállalkozói díj',
      odstavce: [
        {
          volba: 'typ_ceny',
          uvodVzor: 'A díj (jelöljön meg egyet):',
          moznosti: {
            atalany: 'A felek {{cena}} (azaz {{cena_slovy}}) bruttó átalánydíjban állapodnak meg. Ezen felül a Vállalkozó csak a pótmunka ellenértékét követelheti, és csak előzetes írásbeli egyeztetés után.',
            teteles: 'A vállalkozói díj tételes elszámolás szerint, a költségvetés alapján várhatóan {{cena}} (azaz {{cena_slovy}}) bruttó. A költségvetést meghaladó munkát a Vállalkozó csak a Megrendelő előzetes írásbeli hozzájárulásával végezhet.',
          },
        },
        {
          volba: 'zaloha_ano',
          uvodVzor: 'Előleg (jelöljön meg egyet):',
          moznosti: {
            ne: 'A vállalkozói díj a munka átadásakor esedékes.',
            ano: 'A Megrendelő a szerződés aláírásakor {{zaloha}} előleget fizet. A díj fennmaradó része a munka átadásakor esedékes.',
          },
        },
        'A díjat az átadástól számított {{splatnost_dny}} napon belül kell megfizetni a(z) {{ucet}} számú bankszámlára vagy készpénzben, átvételi elismervény ellenében.',
      ],
    },
    {
      nadpis: 'Átadás-átvétel és hibák',
      odstavce: [
        'Az átadás-átvételről a felek jegyzőkönyvet vesznek fel, amelyben rögzítik a feltárt hibákat és kijavításuk határidejét.',
        'A hibás teljesítésre a Polgári Törvénykönyv szavatossági szabályai irányadók. A Megrendelő a felfedezett hibát késedelem nélkül közli a Vállalkozóval.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: ['A szerződés csak írásban módosítható. Az itt nem szabályozott kérdésekben a Polgári Törvénykönyv (különösen 6:238. § és következő szakaszai) az irányadó.', 'A szerződés két eredeti példányban készült, mindkét fél egy-egy példányt kap.'],
    },
  ],
};
