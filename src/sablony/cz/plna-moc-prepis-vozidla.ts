/**
 * Plná moc k přepisu vozidla (zápis změny vlastníka v registru silničních vozidel) – Česko.
 * Podle § 441 a násl. zákona č. 89/2012 Sb. a § 6 zákona č. 56/2001 Sb.: písemná plná moc pro zápis
 * do registru musí mít úředně ověřený podpis zmocnitele (nebo uznávaný elektronický podpis),
 * proto zde není podpis na obrazovce.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejPracovniDny, pridejDny, pridejMesice, isoDatum, cislo, splatkovyKalendar, pripominkySplatek } from '../terminy';

export const plnaMocPrepisVozidla: Sablona = {
  kod: 'CZ-PLNAMOC-PREPIS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Plná moc k přepisu vozidla',
  podnadpis: 'k zastoupení při zápisu změny vlastníka v registru silničních vozidel',
  souborPdf: 'plna-moc-prepis-vozidla',
  paticka: 'Vytvořeno zdarma · šablona CZ-PLNAMOC-PREPIS v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zmocnitel (úředně ověřený podpis)', vpravo: 'zmocněnec – zmocnění přijímám' },
  slovo: { n: 'plná moc', g: 'plné moci', a: 'plnou moc', l: 'plné moci' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Podpis zmocnitele musí být úředně ověřený (Czech POINT, obecní úřad nebo notář), jinak plnou moc registr vozidel nepřijme. Proto ji podepište rukou – buď přímo před úředníkem, nebo ji podepište předem a podpis tam uznáte za vlastní.',
  coDal: [
    'Vytiskněte plnou moc jednou.',
    'Zmocnitel ji podepíše a nechá podpis úředně ověřit – na Czech POINTu (pošta, obecní úřad) nebo u notáře. Vezměte si občanský průkaz.',
    'Zmocněnec může podepsat „zmocnění přijímám“, úřad to ale obvykle nevyžaduje.',
    'Zmocněnec vezme na registr vozidel ověřenou plnou moc, kupní smlouvu, osvědčení o registraci a svůj občanský průkaz.',
    'Přepis je potřeba stihnout do 10 pracovních dnů od převodu auta.',
  ],
  prevzit: {
    kod: 'CZ-KUPNI-AUTO',
    nazev: 'kupní smlouvu na auto',
    mapuj: (d) => {
      // Plnou moc dává ten, kdo na registr nepůjde
      const zmocnitelKupujici = d.prepis === 'prodavajici';
      const z = zmocnitelKupujici ? 'k' : 'p';
      const m = zmocnitelKupujici ? 'p' : 'k';
      return {
        z_role: zmocnitelKupujici ? 'kupujici' : 'prodavajici',
        z_jmeno: d[`${z}_jmeno`],
        z_narozeni: d[`${z}_narozeni`],
        z_adresa: d[`${z}_adresa`],
        m_jmeno: d[`${m}_jmeno`],
        m_narozeni: d[`${m}_narozeni`],
        m_adresa: d[`${m}_adresa`],
        znacka: d.znacka,
        vin: d.vin,
        spz: d.spz,
        orv: d.orv,
        misto: d.misto,
      };
    },
  },

  overeno: '2026-11-19',
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Končí platnost plné moci k přepisu', datum: d.platnost_do }] : []),
  kontrola: [
      "Podpis zmocnitele nechte úředně ověřit (Czech POINT, obecní úřad, notář) – jinak registr plnou moc nepřijme.",
      "Údaje vozidla (VIN, SPZ, číslo osvědčení) přesně podle dokladů; chyba = úřad přepis odmítne.",
      "Rozsah plné moci je jen na přepis tohoto auta. Nepodepisujte obecnou plnou moc „na všechno“.",
      "Jméno a datum narození zmocněnce podle jeho občanského průkazu.",
      "Přepis musí proběhnout do 10 pracovních dnů od převodu auta – plnou moc vyřiďte hned.",
      "Alternativa bez papíru: zmocnění zapsané v Registru zastupování."
  ],
  zdroje: [
      {
          "nazev": "Občanský zákoník č. 89/2012 Sb. (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2012/89"
      },
      {
          "nazev": "Zákon č. 56/2001 Sb., o podmínkách provozu vozidel (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2001/56"
      },
      {
          "nazev": "Portál dopravy (Ministerstvo dopravy)",
          "url": "https://portaldopravy.cz/"
      }
  ],

  kroky: [
    {
      id: 'zmocnitel',
      nazev: 'Kdo plnou moc dává',
      popis: 'Zmocnitel je ten, kdo na registr vozidel nepůjde a pošle za sebe někoho jiného.',
      pole: [
        {
          id: 'z_role',
          typ: 'volba',
          popis: 'Zmocnitel je',
          napoveda: 'Prodávající = dosavadní vlastník, kupující = nový vlastník. Pokud nejde osobně ani jeden, vyplňte plnou moc pro každého zvlášť.',
          moznosti: [
            { hodnota: 'prodavajici', popis: 'Prodávající (dosavadní vlastník)' },
            { hodnota: 'kupujici', popis: 'Kupující (nový vlastník)' },
          ],
        },
        { id: 'z_jmeno', typ: 'text', popis: 'Zmocnitel – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu. Podle průkazu se při ověření podpisu kontroluje totožnost.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Datum narození zmocnitele', napoveda: 'Registr vozidel může chtít i rodné číslo – to klidně dopište rukou.', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa zmocnitele', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'zmocnenec',
      nazev: 'Kdo vás zastoupí',
      popis: 'Zmocněnec půjde na registr vozidel místo vás. Obvykle je to druhá strana smlouvy nebo někdo z rodiny.',
      pole: [
        { id: 'm_jmeno', typ: 'text', popis: 'Zmocněnec – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu. Zmocněnec se na úřadě prokáže svým průkazem.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Datum narození zmocněnce', napoveda: 'Podle občanského průkazu zmocněnce.', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Adresa zmocněnce', napoveda: 'Adresa trvalého bydliště z občanského průkazu zmocněnce.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      popis: 'Údaje opište z osvědčení o registraci vozidla (malého technického průkazu).',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Tovární značka a typ', napoveda: 'Výrobce a model, jak jsou v osvědčení o registraci (kolonky D.1 a D.3).', placeholder: 'např. Škoda Octavia Combi', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'VIN – identifikační číslo vozidla', napoveda: '17 znaků bez písmen I, O a Q. V osvědčení o registraci je v kolonce E. Úřad podle něj vůz dohledá, proto ho opište přesně.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Registrační značka (SPZ)', napoveda: 'Značka na tabulce auta, v osvědčení kolonka A.', placeholder: 'např. 1AB 2345', sirka: 12, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Číslo osvědčení o registraci', napoveda: 'Číslo malého technického průkazu, obvykle tři písmena a šest číslic.', placeholder: 'např. UAA123456', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'platnost',
      nazev: 'Platnost a podpis',
      pole: [
        {
          id: 'platnost',
          typ: 'volba',
          popis: 'Jak dlouho plná moc platí',
          napoveda: 'Nejčastěji do vyřízení přepisu. Pevné datum se hodí, když nechcete, aby plná moc platila neomezeně.',
          moznosti: [
            { hodnota: 'ukon', popis: 'Do vyřízení přepisu' },
            { hodnota: 'datum', popis: 'Do určitého data' },
          ],
        },
        { id: 'platnost_do', typ: 'datum', popis: 'Platí do', napoveda: 'Poslední den platnosti plné moci.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platnost', je: 'datum' } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Obec, kde plnou moc podepíšete. Předvyplníme ji podle adresy zmocnitele.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek. Pokud budete podepisovat jindy (třeba až při ověření), pole vymažte a datum dopište rukou.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zmocnitel',
      vysvetleni: 'Kdo plnou moc dává. Jeho podpis musí být úředně ověřený.',
      odstavce: [
        '{{z_jmeno}}, datum narození {{z_narozeni}}, trvale bytem {{z_adresa}}',
        {
          volba: 'z_role',
          uvodVzor: 'Zmocnitel jedná jako (zaškrtněte):',
          moznosti: {
            prodavajici: 'Zmocnitel jedná jako dosavadní vlastník vozidla (prodávající).',
            kupujici: 'Zmocnitel jedná jako nový vlastník vozidla (kupující).',
          },
        },
      ],
    },
    {
      nadpis: 'Zmocněnec',
      vysvetleni: 'Kdo za zmocnitele vyřídí přepis na registru vozidel.',
      odstavce: ['{{m_jmeno}}, datum narození {{m_narozeni}}, trvale bytem {{m_adresa}}'],
    },
    {
      nadpis: 'Rozsah zmocnění',
      vysvetleni: 'Co přesně smí zmocněnec za vás udělat. Text je úmyslně omezený jen na přepis tohoto auta.',
      odstavce: [
        'Zmocnitel zmocňuje zmocněnce, aby jej zastupoval při zápisu změny vlastníka a provozovatele tohoto vozidla v registru silničních vozidel: tovární značka a typ {{znacka}}, VIN {{vin}}, registrační značka {{spz}}, číslo osvědčení o registraci vozidla {{orv}}.',
        'Zmocněnec je oprávněn zejména podat a podepsat žádost o zápis změny, předložit a převzít doklady k vozidlu, převzít nové osvědčení o registraci vozidla a zaplatit správní a jiné poplatky spojené se zápisem.',
        {
          volba: 'platnost',
          uvodVzor: 'Platnost plné moci (zaškrtněte jednu možnost):',
          moznosti: {
            ukon: 'Plná moc platí do provedení zápisu změny vlastníka v registru silničních vozidel.',
            datum: 'Plná moc platí do {{platnost_do}}.',
          },
        },
      ],
    },
  ],
};
