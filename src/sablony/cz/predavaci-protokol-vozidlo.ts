/**
 * Předávací protokol k vozidlu – Česko. Doplněk ke kupní smlouvě (nebo k zápůjčce či vrácení auta):
 * zachycuje okamžik předání, stav tachometru a paliva, poškození, klíče, doklady a výbavu.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';

export const predavaciProtokolVozidlo: Sablona = {
  kod: 'CZ-PROTOKOL-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Předávací protokol k vozidlu',
  podnadpis: 'záznam o předání a převzetí motorového vozidla',
  souborPdf: 'predavaci-protokol-vozidlo',
  paticka: 'Vytvořeno zdarma · šablona CZ-PROTOKOL-AUTO v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'předávající', vpravo: 'přebírající' },
  slovo: { n: 'protokol', g: 'protokolu', a: 'protokol', l: 'protokolu' },
  cislovatClanky: false,
  coDal: [
    'Vytiskněte protokol dvakrát a podepište ho při předání auta, každá strana si nechá jeden.',
    'Projděte auto spolu – doplňte rukou poškození, které v protokolu chybí.',
    'Vyfoťte tachometr, palivoměr a poškozená místa. Fotky s datem jsou dobrý doplněk protokolu.',
    'Pokud jde o prodej, nezapomeňte na přepis v registru vozidel do 10 pracovních dnů.',
  ],
  prevzit: {
    kod: 'CZ-KUPNI-AUTO',
    nazev: 'kupní smlouvu na auto',
    mapuj: (d) => ({
      duvod: 'koupe',
      smlouva_datum: d.datum_podpisu,
      p_jmeno: d.p_jmeno,
      p_narozeni: d.p_narozeni,
      p_adresa: d.p_adresa,
      k_jmeno: d.k_jmeno,
      k_narozeni: d.k_narozeni,
      k_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      km: d.km,
      klice: d.klice,
      doklady: d.doklady,
      vybava_jine: d.doklady_jine,
      predani_datum: d.predani_datum,
      misto: d.misto,
    }),
  },

  kroky: [
    {
      id: 'strany',
      nazev: 'Kdo předává a kdo přebírá',
      popis: 'Vyplnili jste už kupní smlouvu? Údaje předvyplníme z ní.',
      pole: [
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Proč se auto předává',
          napoveda: 'Podle toho doplníme do protokolu odkaz na smlouvu. Když nic nesedí, nechte prázdné.',
          moznosti: [
            { hodnota: 'koupe', popis: 'Prodej auta (ke kupní smlouvě)' },
            { hodnota: 'zapujcka', popis: 'Zapůjčení auta' },
            { hodnota: 'vraceni', popis: 'Vrácení zapůjčeného auta' },
          ],
        },
        {
          id: 'smlouva_datum',
          typ: 'datum',
          popis: 'Datum kupní smlouvy',
          napoveda: 'Den, kdy jste podepsali kupní smlouvu. Protokol se na ni odkáže.',
          sirka: 14,
          polovina: true,
          zobrazitKdyz: { pole: 'duvod', je: 'koupe' },
        },
        { id: 'p_jmeno', typ: 'text', popis: 'Předávající – jméno a příjmení', napoveda: 'Kdo auto předává (při prodeji prodávající). Celé jméno jako v občanském průkazu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození předávajícího', napoveda: 'Stačí datum narození, rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa předávajícího', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Přebírající – jméno a příjmení', napoveda: 'Kdo auto přebírá (při prodeji kupující).', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození přebírajícího', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa přebírajícího', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      popis: 'Údaje opište z osvědčení o registraci vozidla (malého technického průkazu).',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Tovární značka a typ', napoveda: 'Výrobce a model, jak jsou v osvědčení o registraci (kolonky D.1 a D.3).', placeholder: 'např. Škoda Octavia Combi', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'VIN – identifikační číslo vozidla', napoveda: '17 znaků bez písmen I, O a Q. V osvědčení o registraci je v kolonce E.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Registrační značka (SPZ)', napoveda: 'Značka na tabulce auta, v osvědčení kolonka A.', placeholder: 'např. 1AB 2345', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'stav',
      nazev: 'Stav při předání',
      popis: 'Zapište stav přesně v okamžiku předání. Při sporu o poškození nebo ujeté kilometry je to hlavní důkaz.',
      pole: [
        { id: 'km', typ: 'cislo', popis: 'Stav tachometru', napoveda: 'Opište z palubní desky ve chvíli předání.', placeholder: 'např. 154320', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'palivo',
          typ: 'volba',
          popis: 'Množství paliva v nádrži',
          napoveda: 'Podle ručičky palivoměru. U elektromobilu zvolte nejbližší hodnotu nabití.',
          moznosti: [
            { hodnota: 'rezerva', popis: 'Rezerva' },
            { hodnota: 'ctvrt', popis: '1/4' },
            { hodnota: 'pul', popis: '1/2' },
            { hodnota: 'tri', popis: '3/4' },
            { hodnota: 'plna', popis: 'Plná nádrž' },
          ],
        },
        {
          id: 'poskozeni',
          typ: 'volba',
          popis: 'Poškození vozidla',
          napoveda: 'Projděte auto dokola i uvnitř: karoserie, skla, kola, interiér. Co tu nezapíšete, může se později přičítat přebírajícímu.',
          moznosti: [
            { hodnota: 'bez', popis: 'Bez viditelného poškození' },
            { hodnota: 's', popis: 'Vozidlo má tato poškození' },
          ],
        },
        {
          id: 'poskozeni_popis',
          typ: 'textarea',
          popis: 'Popis poškození',
          napoveda: 'Stručně a s umístěním, např. „škrábanec 10 cm na zadních pravých dveřích“.',
          placeholder: 'např. škrábanec na zadním nárazníku, odštípnuté čelní sklo vpravo dole',
          sirka: 64,
          zobrazitKdyz: { pole: 'poskozeni', je: 's' },
        },
      ],
    },
    {
      id: 'predavane',
      nazev: 'Klíče, doklady a výbava',
      pole: [
        { id: 'klice', typ: 'cislo', popis: 'Počet předávaných klíčů', napoveda: 'Včetně náhradního klíče a dálkových ovladačů.', placeholder: 'např. 2', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Předávané doklady',
          napoveda: 'Zaškrtněte, co přebírající skutečně dostal.',
          moznosti: [
            { hodnota: 'orv', popis: 'Osvědčení o registraci (malý TP)' },
            { hodnota: 'tp', popis: 'Technický průkaz (velký TP)' },
            { hodnota: 'servis', popis: 'Servisní knížka' },
            { hodnota: 'stk', popis: 'Protokol o technické kontrole (STK)' },
            { hodnota: 'navod', popis: 'Návod k obsluze' },
          ],
        },
        {
          id: 'vybava',
          typ: 'vice',
          popis: 'Předávaná výbava',
          napoveda: 'Povinnou výbavu (lékárnička, trojúhelník, vesta) musí mít auto při jízdě vždy, proto se vyplatí ji zapsat.',
          moznosti: [
            { hodnota: 'lekarnicka', popis: 'Lékárnička' },
            { hodnota: 'trojuhelnik', popis: 'Výstražný trojúhelník' },
            { hodnota: 'vesta', popis: 'Reflexní vesta' },
            { hodnota: 'rezerva', popis: 'Rezervní kolo nebo sada na opravu pneumatik' },
            { hodnota: 'hever', popis: 'Zvedák a klíč na kola' },
            { hodnota: 'pneu', popis: 'Druhá sada pneumatik (letní / zimní)' },
          ],
        },
        { id: 'vybava_jine', typ: 'text', popis: 'Další předávané věci', napoveda: 'Cokoli dalšího, např. střešní nosič, nabíjecí kabel, autosedačka.', placeholder: 'např. střešní nosič', sirka: 40 },
      ],
    },
    {
      id: 'predani',
      nazev: 'Kdy a kde',
      pole: [
        { id: 'predani_datum', typ: 'datum', popis: 'Datum předání', napoveda: 'Předvyplnili jsme dnešek. Pokud chcete datum dopsat rukou, pole vymažte.', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predani_cas', typ: 'text', popis: 'Čas předání', napoveda: 'Hodí se při pokutách z kamer nebo nehodě – podle času se pozná, kdo auto právě používal.', placeholder: 'např. 14:30', sirka: 8, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Místo předání (obec)', napoveda: 'Obec, kde se auto předává. Předvyplníme ji podle adresy předávajícího.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'poznamky', typ: 'textarea', popis: 'Poznámky', napoveda: 'Cokoli dalšího, na čem jste se při předání dohodli. Nepovinné.', placeholder: 'např. zimní pneumatiky přebírající vyzvedne do konce měsíce', sirka: 64 },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Strany',
      vysvetleni: 'Kdo auto předává a kdo ho přebírá. Při prodeji jsou to prodávající a kupující z kupní smlouvy.',
      odstavce: [
        '**Předávající:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}}',
        '**Přebírající:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Předávané vozidlo',
      vysvetleni: 'Které auto se předává a proč. Odkaz na kupní smlouvu propojí oba dokumenty.',
      odstavce: [
        'Tovární značka a typ {{znacka}}, VIN {{vin}}, registrační značka {{spz}} (dále jen „vozidlo“).',
        {
          volba: 'duvod',
          uvodVzor: 'Důvod předání (zaškrtněte jednu možnost):',
          moznosti: {
            koupe: 'Vozidlo se předává na základě kupní smlouvy uzavřené mezi stranami dne {{smlouva_datum}}.',
            zapujcka: 'Vozidlo se předává přebírajícímu k dočasnému užívání (zápůjčka).',
            vraceni: 'Přebírající přebírá zpět vozidlo, které předávajícímu dříve zapůjčil.',
          },
        },
      ],
    },
    {
      nadpis: 'Stav vozidla při předání',
      vysvetleni: 'Přesný stav v okamžiku předání. Pokud se později objeví nové poškození nebo kilometry navíc, je jasné, kdy vznikly.',
      odstavce: [
        'Stav tachometru při předání: {{km}}.',
        {
          volba: 'palivo',
          uvod: 'Množství paliva v nádrži:',
          uvodVzor: 'Množství paliva v nádrži (zaškrtněte):',
          moznosti: {
            rezerva: 'rezerva.',
            ctvrt: 'přibližně 1/4 nádrže.',
            pul: 'přibližně 1/2 nádrže.',
            tri: 'přibližně 3/4 nádrže.',
            plna: 'plná nádrž.',
          },
        },
        {
          volba: 'poskozeni',
          uvodVzor: 'Poškození vozidla (zaškrtněte jednu možnost):',
          moznosti: {
            bez: 'Vozidlo nemá při předání žádné viditelné poškození.',
            s: 'Vozidlo má při předání tato poškození: {{poskozeni_popis}}',
          },
        },
      ],
    },
    {
      nadpis: 'Předávané klíče, doklady a výbava',
      vysvetleni: 'Co přebírající dostal spolu s autem. Zaškrtnuté věci potvrzuje svým podpisem.',
      odstavce: [
        'Počet předaných klíčů: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Předané doklady:',
          moznosti: {
            orv: 'osvědčení o registraci vozidla (malý technický průkaz)',
            tp: 'technický průkaz (velký technický průkaz)',
            servis: 'servisní knížka',
            stk: 'protokol o poslední technické kontrole',
            navod: 'návod k obsluze',
          },
        },
        {
          vice: 'vybava',
          uvod: 'Předaná výbava:',
          moznosti: {
            lekarnicka: 'lékárnička',
            trojuhelnik: 'výstražný trojúhelník',
            vesta: 'reflexní vesta',
            rezerva: 'rezervní kolo nebo sada na opravu pneumatik',
            hever: 'zvedák a klíč na kola',
            pneu: 'druhá sada pneumatik',
          },
          dalsi: 'další předané věci: {{vybava_jine}}',
        },
      ],
    },
    {
      nadpis: 'Převzetí',
      vysvetleni: 'Potvrzení, že předání proběhlo a kdy přesně. Od té chvíle odpovídá za auto přebírající.',
      odstavce: [
        'Vozidlo bylo předáno dne {{predani_datum}} v {{predani_cas}} hodin.',
        'Přebírající potvrzuje, že vozidlo včetně výše uvedených klíčů, dokladů a výbavy převzal ve stavu popsaném v tomto protokolu.',
        'Poznámky: {{poznamky}}',
        'Protokol je vyhotoven ve dvou stejnopisech, z nichž každá strana obdrží jeden.',
      ],
    },
  ],
};
