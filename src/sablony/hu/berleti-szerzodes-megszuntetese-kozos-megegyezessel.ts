/**
 * Lakásbérleti szerződés megszüntetése közös megegyezéssel – Magyarország. Ptk. 6:212. § (1): a felek közös megegyezéssel a szerződést a jövőre nézve megszüntethetik (Közjegyzők Közlönye 2025/2 idézi). Kaució elszámolása a szerződés szerint.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum, cislo } from '../terminy';
import { PTK, TIP_TANUK } from './forrasok';

export const berletMegszunteteseKozos: Sablona = {
  kod: 'HU-BERLET-KOZOS-MEGSZUNTETES',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: "Megállapodás a lakásbérleti szerződés közös megegyezéssel történő megszüntetéséről",
  podnadpis: "a Polgári Törvénykönyv 6:212. §-a alapján",
  souborPdf: 'berleti-szerzodes-megszuntetese-kozos-megegyezessel',
  paticka: "Ingyenesen készült · HU-BERLET-KOZOS-MEGSZUNTETES v1.1 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "bérbeadó", vpravo: "bérlő" },
  slovo: {"n": "megállapodás", "g": "megállapodás", "a": "megállapodást", "l": "megállapodásban"},
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: "A bérlet vége", datum: d.konec_dne });
    const odevzdani = naDatum(d.odevzdani);
    if (odevzdani) {
      out.push({ nazev: "Lakás átadása és jegyzőkönyv", datum: isoDatum(odevzdani) });
      const dni = Math.round(cislo(d.jistota_dni));
      if (dni > 0) out.push({ nazev: "Kaució visszafizetése", datum: isoDatum(pridejDny(odevzdani, dni)) });
    }
    return out;
  },
  coDal: ["Nyomtassa ki két példányban, mindkét fél írja alá mindkettőt.", "A lakás átadásakor vegyenek fel jegyzőkönyvet a mérőóraállásokkal.", "A bérlő jelentse le a közműveket, ha a nevén voltak.", "Figyelje a kaució visszafizetésének határidejét."],
  kontrola: [
    "A felek a szerződést közös megegyezéssel a jövőre nézve megszüntethetik (Ptk. 6:212. §).",
    "A megállapodást minden bérbeadó és minden bérlő írja alá.",
    "Adja meg a bérlet megszűnésének napját és a lakás átadásának napját.",
    "Rögzítse, mikor és hogyan jár vissza a kaució, és hogyan számolják el a rezsit.",
    TIP_TANUK,
  ],
  zdroje: [PTK],

  kroky: [
    {
      id: 'strany',
      nazev: "Felek és lakás",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Bérbeadó – név", placeholder: "pl. Kovács János", sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: "Bérbeadó lakcíme", placeholder: "pl. 1052 Budapest, Váci utca 10.", sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: "Bérlő – név", napoveda: "Több bérlő esetén mindenkit adjon meg.", placeholder: "pl. Nagy Anna", sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: "Bérlő születési ideje", sirka: 14, polovina: true },
        { id: 'byt', typ: 'text', popis: "Lakás (cím, ajtó)", placeholder: "pl. 4024 Debrecen, Piac utca 5. 2/12.", sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: "A bérleti szerződés kelte", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'konec',
      nazev: "Megszüntetés",
      pole: [
        { id: 'konec_dne', typ: 'datum', popis: "A bérlet megszűnik", napoveda: "A bérlet utolsó napja. Eddig kell bérleti díjat fizetni.", sirka: 14, polovina: true },
        { id: 'odevzdani', typ: 'datum', popis: "Lakás átadása legkésőbb", napoveda: "Mikor adja vissza a bérlő a kulcsokat.", sirka: 14, polovina: true },
        {
          id: 'jistota',
          typ: 'volba',
          popis: "Kaució (óvadék)",
          moznosti: [
            { hodnota: 'odevzdani', popis: "Visszafizetés az átadástól számított határidőn belül" },
            { hodnota: 'vyuctovani', popis: "Visszafizetés a rezsi elszámolása után" },
            { hodnota: 'zadna', popis: "Kauciót nem fizettek" },
          ],
        },
        { id: 'jistota_dni', typ: 'cislo', popis: "Visszafizetés (nap)", placeholder: '14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
        { id: 'ucet', typ: 'text', popis: "Bérlő bankszámlaszáma a kaucióhoz", sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
        { id: 'dalsi', typ: 'textarea', popis: "Egyéb megállapodások (nem kötelező)", placeholder: "pl. a bérlő átadás előtt kifesti a lakást", sirka: 64 },
        { id: 'misto', typ: 'text', popis: "Hely", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    { nadpis: "Szerződő felek", odstavce: ["**Bérbeadó:** {{p_jmeno}}, lakcím: {{p_adresa}}", "**Bérlő:** {{k_jmeno}}, születési idő: {{k_narozeni}}"] },
    {
      nadpis: "A bérlet megszüntetése",
      vysvetleni: "Mikor szűnik meg a bérlet, és mikor kerül sor a lakás átadására.",
      odstavce: ["A felek közös megegyezéssel megállapodnak abban, hogy a(z) {{byt}} lakásra {{smlouva_datum}} napján kötött bérleti szerződés {{konec_dne}} napjával megszűnik.", "A bérlő a lakást az összes kulccsal legkésőbb {{odevzdani}} napján, az átvételkori állapotban – a rendeltetésszerű használattal járó értékcsökkenést figyelembe véve – adja vissza. Az átadásról a felek jegyzőkönyvet vesznek fel.", "A bérleti díjat és a rezsiköltségeket a bérlő a megszűnés napjáig fizeti. A rezsit a szokásos időben számolják el."],
    },
    {
      nadpis: "Kaució és egyéb megállapodások",
      odstavce: [
        {
          volba: 'jistota',
          uvodVzor: "Kaució (jelöljön meg egyet):",
          moznosti: {
            odevzdani: "A bérbeadó a kauciót a lakás átadásától számított {{jistota_dni}} napon belül visszafizeti a bérlő {{ucet}} számú bankszámlájára; a bérletből eredő tartozásokat beszámíthatja.",
            vyuctovani: "A bérbeadó a kauciót az utolsó időszak rezsijének elszámolása után visszafizeti a bérlő {{ucet}} számú bankszámlájára; a bérletből eredő tartozásokat beszámíthatja.",
            zadna: "A bérlő kauciót nem fizetett.",
          },
        },
        "Egyéb megállapodások: {{dalsi}}",
        "A megállapodás két eredeti példányban készült, mindkét fél egy-egy példányt kap. Mindkét fél aláírásával lép hatályba.",
      ],
    },
  ],
};
