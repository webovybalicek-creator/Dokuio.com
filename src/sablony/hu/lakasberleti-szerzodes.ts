/**
 * Lakásbérleti szerződés – Magyarország, magánszemélyek között. 1993. évi LXXVIII. törvény (Ltv.) és a Ptk. bérleti szabályai.
 * A felmondási időt és az óvadékot a felek a szerződésben rögzítik.
 */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { naDatum, pridejMesice, isoDatum, cislo } from '../terminy';
import { LTV, PTK, NAV, TIP_SZEMELYAZONOSSAG } from './forrasok';

export const lakasberletiSzerzodes: Sablona = {
  kod: 'HU-LAKASBERLET',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Lakásbérleti szerződés',
  podnadpis: 'a lakások és helyiségek bérletéről szóló 1993. évi LXXVIII. törvény és a Polgári Törvénykönyv alapján',
  souborPdf: 'lakasberleti-szerzodes',
  paticka: 'Ingyenesen készült · HU-LAKASBERLET v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'bérbeadó', vpravo: 'bérlő' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.kezdet);
    const nap = Math.round(cislo(d.fizetes_nap));
    if (od) out.push({ nazev: 'A lakás átadása és jegyzőkönyv', datum: isoDatum(od) });
    if (od && nap >= 1 && nap <= 31) out.push({ nazev: 'Bérleti díj', datum: isoDatum(pridejMesice(od, od.getDate() > nap ? 1 : 0, nap)), mesicne: 12, popis: 'Az első 12 hónap.' });
    const veg = d.idotartam === 'hatarozott' ? naDatum(d.vege) : undefined;
    if (veg) out.push({ nazev: 'A bérlet vége', datum: isoDatum(veg) });
    return out;
  },
  coDal: [
    'Nyomtassa ki két példányban, mindketten írják alá mindkettőt.',
    'Az átadáskor töltsenek ki átadás-átvételi jegyzőkönyvet a mérőóra-állásokkal és fényképekkel.',
    'Az óvadékot utalással vagy átvételi elismervény ellenében adja át.',
    'Bérbeadó: a bérbeadásból származó jövedelmet be kell vallani – a szabályokat lásd a NAV oldalán.',
  ],
  kontrola: [
    'A lakásbérleti szerződést írásba kell foglalni.',
    'Ellenőrizze a tulajdoni lapon, hogy a bérbeadó a lakás tulajdonosa (vagy rendelkezik a tulajdonos hozzájárulásával).',
    'Az óvadék összegét és visszafizetésének feltételeit a szerződésben rögzítik – a bérbeadó csak a bérleti jogviszonyból eredő tartozásokat vonhatja le belőle.',
    'Határozott idejű szerződés a lejárattal megszűnik; idő előtti rendes felmondás csak akkor lehetséges, ha a szerződés megengedi.',
    'A bérlő lakcímbejelentéséhez a szállásadó (bérbeadó) hozzájárulása kell.',
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [LTV, PTK, NAV],
  kroky: [
    {
      id: 'felek',
      nazev: 'Bérbeadó és bérlő',
      pole: [
        { id: 'b_nev', typ: 'text', popis: 'Bérbeadó neve', napoveda: 'A lakás tulajdonosa. Több tulajdonos esetén mind aláírnak.', sirka: 34, autocomplete: 'name' },
        { id: 'b_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'b_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'b_cim', typ: 'text', popis: 'Bérbeadó lakcíme', sirka: 46 },
        { id: 'l_nev', typ: 'text', popis: 'Bérlő neve', sirka: 34 },
        { id: 'l_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'l_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'l_cim', typ: 'text', popis: 'Bérlő jelenlegi lakcíme', sirka: 46 },
        { id: 'egyutt', typ: 'text', popis: 'Vele együtt költöző személyek (nem kötelező)', placeholder: 'pl. házastársa, Nagy Péter', sirka: 46 },
      ],
    },
    {
      id: 'lakas',
      nazev: 'A lakás',
      pole: [
        { id: 'lakas_cim', typ: 'text', popis: 'A lakás címe', placeholder: 'pl. 1137 Budapest, Pozsonyi út 10. 3/12.', sirka: 46 },
        { id: 'hrsz', typ: 'text', popis: 'Helyrajzi szám (nem kötelező)', sirka: 18, polovina: true },
        { id: 'szobak', typ: 'cislo', popis: 'Szobák száma', sirka: 4, polovina: true },
        { id: 'alapterulet', typ: 'cislo', popis: 'Alapterület', jednotka: 'm²', sirka: 8, polovina: true },
        { id: 'berendezes', typ: 'textarea', popis: 'Berendezés (nem kötelező)', placeholder: 'pl. hűtő, mosógép, tűzhely, beépített szekrény', sirka: 64 },
      ],
    },
    {
      id: 'ido',
      nazev: 'Időtartam',
      pole: [
        {
          id: 'idotartam',
          typ: 'volba',
          popis: 'Mennyi időre',
          moznosti: [
            { hodnota: 'hatarozott', popis: 'Határozott időre' },
            { hodnota: 'hatarozatlan', popis: 'Határozatlan időre' },
          ],
        },
        { id: 'kezdet', typ: 'datum', popis: 'A bérlet kezdete', sirka: 14, polovina: true },
        { id: 'vege', typ: 'datum', popis: 'A bérlet vége', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'idotartam', je: 'hatarozott' } },
        { id: 'felmondasi_ido', typ: 'cislo', popis: 'Felmondási idő', napoveda: 'Határozatlan időnél mindkét félre; határozott időnél csak a bérlőre, ha megengedik.', placeholder: 'pl. 1', jednotka: 'hónap', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'dij',
      nazev: 'Bérleti díj és óvadék',
      pole: [
        { id: 'berleti_dij', typ: 'castka', popis: 'Havi bérleti díj (Ft)', sirka: 12, polovina: true },
        { id: 'fizetes_nap', typ: 'cislo', popis: 'Fizetés a hónap hányadik napjáig', placeholder: 'pl. 10', sirka: 4, polovina: true },
        { id: 'rezsi', typ: 'textarea', popis: 'Rezsi (mit fizet a bérlő)', placeholder: 'pl. áram, gáz, víz a mérőóra szerint; közös költség a bérbeadót terheli', sirka: 64 },
        { id: 'ovadek', typ: 'castka', popis: 'Óvadék (Ft)', napoveda: 'Szokás szerint 1–3 havi bérleti díj.', sirka: 12, polovina: true },
        { id: 'szamla', typ: 'text', popis: 'Bérbeadó bankszámlaszáma', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'A szerződés kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    dij_betuvel: (d) => osszegBetuvel(d.berleti_dij),
    ovadek_betuvel: (d) => osszegBetuvel(d.ovadek),
  },
  clanky: [
    {
      nadpis: 'Szerződő felek',
      odstavce: [
        '**Bérbeadó:** {{b_nev}}, születési hely, idő: {{b_szul}}, anyja neve: {{b_anyja}}, lakcím: {{b_cim}}',
        '**Bérlő:** {{l_nev}}, születési hely, idő: {{l_szul}}, anyja neve: {{l_anyja}}, lakcím: {{l_cim}}',
      ],
    },
    {
      nadpis: 'A bérlet tárgya',
      vysvetleni: 'Melyik lakásról van szó, és mi tartozik hozzá.',
      odstavce: [
        'A bérbeadó bérbe adja, a bérlő bérbe veszi a {{lakas_cim}} alatti, {{hrsz}} helyrajzi számú, {{szobak}} szobás, {{alapterulet}} alapterületű lakást (a továbbiakban: lakás).',
        'A lakás berendezése: {{berendezes}}. A lakás és a berendezés állapotát a felek átadás-átvételi jegyzőkönyvben rögzítik.',
        'A lakást a bérlő lakás céljára használja. A bérlővel együtt a lakásba költözhet: {{egyutt}}. Más személyt a bérlő csak a bérbeadó írásbeli hozzájárulásával fogadhat be; albérletbe adás nem megengedett.',
      ],
    },
    {
      nadpis: 'Időtartam',
      odstavce: [
        {
          volba: 'idotartam',
          uvodVzor: 'A bérlet időtartama (egy lehetőséget jelöljön meg):',
          moznosti: {
            hatarozott: 'A szerződés {{kezdet}} napjától {{vege}} napjáig tartó határozott időre jön létre. A bérlő a szerződést {{felmondasi_ido}} felmondási idővel, a hónap utolsó napjára írásban felmondhatja.',
            hatarozatlan: 'A szerződés {{kezdet}} napjától határozatlan időre jön létre. Bármelyik fél {{felmondasi_ido}} felmondási idővel, a hónap utolsó napjára írásban felmondhatja.',
          },
        },
        'A rendkívüli felmondás jogszabályban meghatározott esetei (különösen a bérfizetési kötelezettség megszegése) ezt nem érintik.',
      ],
    },
    {
      nadpis: 'Bérleti díj és költségek',
      vysvetleni: 'Mennyit, mikor és hova fizet a bérlő.',
      odstavce: [
        'A havi bérleti díj {{berleti_dij}}, azaz {{dij_betuvel}}, amelyet a bérlő minden hónap {{fizetes_nap}}. napjáig előre fizet meg a bérbeadó {{szamla}} számú bankszámlájára.',
        'A bérlő a bérleti díjon felül a következő költségeket viseli: {{rezsi}}',
      ],
    },
    {
      nadpis: 'Óvadék',
      vysvetleni: 'Biztosíték a ki nem fizetett díjra és a károkra.',
      odstavce: [
        'A bérlő a szerződés aláírásakor {{ovadek}}, azaz {{ovadek_betuvel}} óvadékot fizet.',
        'A bérbeadó az óvadékból a bérleti jogviszonyból eredő, lejárt tartozásokat és a bérlő által okozott, a rendeltetésszerű használattal nem összefüggő károkat vonhatja le. A fennmaradó összeget a lakás visszaadását követő 30 napon belül visszafizeti.',
      ],
    },
    {
      nadpis: 'A felek jogai és kötelezettségei',
      odstavce: [
        'A bérlő a lakást rendeltetésszerűen használja, a kisebb javításokat és a lakás belső burkolatainak, berendezéseinek rendeltetésszerű használatból eredő karbantartását saját költségén végzi.',
        'A bérbeadó gondoskodik az épület és a lakás nagyobb javításairól. A bérlő a hibákat haladéktalanul bejelenti.',
        'A bérbeadó a lakást előzetes egyeztetés után, a bérlő zavarása nélkül ellenőrizheti.',
        'A bérlő a lakást csak a bérbeadó írásbeli hozzájárulásával alakíthatja át.',
      ],
    },
    {
      nadpis: 'A lakás visszaadása',
      odstavce: [
        'A bérlet megszűnésekor a bérlő a lakást kiürítve, tisztán, a rendeltetésszerű használattal járó elhasználódást meghaladó sérülés nélkül, a kulcsokkal együtt adja vissza. A visszaadásról jegyzőkönyv készül.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: [
        'A szerződésben nem szabályozott kérdésekben az 1993. évi LXXVIII. törvény és a Polgári Törvénykönyv rendelkezései az irányadók.',
        'A szerződést csak írásban lehet módosítani. A szerződés két egyező példányban készült.',
      ],
    },
  ],
};
