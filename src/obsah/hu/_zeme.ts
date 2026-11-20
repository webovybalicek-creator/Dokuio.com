import type { Zeme } from '../typy';

/**
 * Magyarország. Vzory ověřené 19. 11. 2026, další 4 vzory 20. 11. 2026 (viz src/sablony/hu/forrasok.ts), poradna 12 článků (20. 11. 2026).
 */
export const zeme: Zeme = {
  kod: 'hu',
  nazev: 'Magyarország',
  nazevEn: 'Hungary',
  jazyk: 'hu',
  hreflang: 'hu-HU',
  casovaZona: 'Europe/Budapest',
  aktivni: true,
  poradi: 7,
  kategorie: { auto: 'Autó', penz: 'Pénz és ajándék', lakas: 'Lakás és bérlet', mindennapok: 'Vásárlás és ügyintézés', szolgaltatas: 'Szakemberek és megrendelések', munka: 'Munka', csalad: 'Család és utazás' },
  skupiny: {
    auto: [
      { slug: 'gepjarmu-adasveteli-szerzodes', popis: 'Használt autó eladása magánszemélyek között.' },
      { slug: 'atadas-atveteli-jegyzokonyv-gepjarmu', popis: 'Kilométer, sérülések és kulcsok az átadáskor.' },
      { slug: 'meghatalmazas-forgalmi-atirashoz', popis: 'Ha az átírást más intézi.' },
      { slug: 'atveteli-elismerveny', popis: 'A készpénzes fizetés igazolása.' },
    ],
    penz: [
      { slug: 'kolcsonszerzodes', popis: 'Kölcsön ismerősnek, akár részletekben.' },
      { slug: 'atveteli-elismerveny', popis: 'Készpénz átvételének igazolása.' },
      { slug: 'tartozaselismero-nyilatkozat', popis: 'Tartozás írásban, részletfizetéssel.' },
      { slug: 'reszletfizetesi-megallapodas', popis: 'Hitelező és adós megállapodik a részletekben.' },
      { slug: 'fizetesi-felszolitas', popis: 'Utolsó felszólítás a per előtt.' },
      { slug: 'ajandekozasi-szerzodes', popis: 'Pénz vagy dolog ajándékozása.' },
    ],
    lakas: [
      { slug: 'berleti-szerzodes-megszuntetese-kozos-megegyezessel', popis: 'Bérlet vége közös megegyezéssel.' },
      { slug: 'lakasberleti-szerzodes', popis: 'Albérlet óvadékkal.' },
      { slug: 'lakas-atadas-atveteli-jegyzokonyv', popis: 'Mérőórák, kulcsok, állapot.' },
      { slug: 'berleti-szerzodes-felmondasa', popis: 'Felmondás a bérlő részéről.' },
    ],
    mindennapok: [
      { slug: 'haszonkolcson-szerzodes', popis: 'Dolog ingyenes kölcsönadása.' },
      { slug: 'meghatalmazas', popis: 'Ha valamit más intéz Ön helyett.' },
      { slug: 'adasveteli-szerzodes', popis: 'Használt dolog eladása.' },
      { slug: 'elallasi-nyilatkozat', popis: 'Webshopos vásárlás visszaküldése 14 napon belül.' },
      { slug: 'kellekszavatossagi-igeny', popis: 'Hibás termék a boltban.' },
      { slug: 'szerzodes-felmondasa', popis: 'Mobil, internet, biztosítás, edzőterem felmondása.' },
      { slug: 'nyilatkozat', popis: 'Nyilatkozat iskolának, banknak vagy bérbeadónak.' },
      { slug: 'hozzajarulo-nyilatkozat-kiskoru-utazas', popis: 'A gyermek külföldi utazása szülő nélkül.' },
    ],
    szolgaltatas: [
      { slug: 'vallalkozasi-szerzodes', popis: 'Felújítás, javítás vagy egyedi munka.' },
      { slug: 'atveteli-elismerveny', popis: 'Az előleg átvételének igazolása.' },
      { slug: 'fizetesi-felszolitas', popis: 'Ha a megrendelő nem fizet.' },
    ],
    munka: [
      { slug: 'munkavallaloi-felmondas', popis: 'Felmondás vagy közös megegyezés javaslata.' },
      { slug: 'nyilatkozat', popis: 'Nyilatkozat a munkáltatónak vagy hatóságnak.' },
      { slug: 'meghatalmazas', popis: 'Ha valamit más intéz Ön helyett.' },
    ],
    csalad: [
      { slug: 'hozzajarulo-nyilatkozat-kiskoru-utazas', popis: 'Gyermek utazása nagyszülővel, táborral vagy egyik szülővel.' },
      { slug: 'meghatalmazas', popis: 'Ha valamit más intéz Ön helyett.' },
      { slug: 'nyilatkozat', popis: 'Nyilatkozat iskolának vagy hatóságnak.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'auto-eladasa',
      nazev: 'Autó eladása',
      popis: 'Adásvételi szerződés, jegyzőkönyv, meghatalmazás az átíráshoz és átvételi elismervény.',
      ilustrace: 'auto',
      dokumenty: ['gepjarmu-adasveteli-szerzodes', 'atadas-atveteli-jegyzokonyv-gepjarmu', 'meghatalmazas-forgalmi-atirashoz', 'atveteli-elismerveny'],
      title: 'Autó eladása – minden dokumentum egy PDF-ben, ingyen',
      description: 'Minden, ami a használt autó eladásához kell: adásvételi szerződés tanúkkal, átadás-átvételi jegyzőkönyv, meghatalmazás és elismervény.',
      perex: 'Töltse ki a szerződést, a többi dokumentum ebből töltődik ki. Utána mindent egyszerre letölthet egy PDF-ben.',
    },
  ],
  rozcestnik: {
    nadpis: 'Nem tudja, milyen dokumentum kell?',
    span: 'Válassza ki a helyzetet, megmutatjuk, mire van szüksége.',
    situace: [
      {
        nazev: 'Autó',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Használt autót adok el vagy veszek', dokumenty: ['gepjarmu-adasveteli-szerzodes', 'atadas-atveteli-jegyzokonyv-gepjarmu'], balicek: 'auto-eladasa', tip: 'Két tanú kell. Eladó és vevő is 15 napon belül a kormányablakba.' },
          { text: 'Az átírást más intézi helyettem', dokumenty: ['meghatalmazas-forgalmi-atirashoz'] },
          { text: 'Kölcsönadom az autómat', dokumenty: ['atadas-atveteli-jegyzokonyv-gepjarmu'] },
        ],
      },
      {
        nazev: 'Pénz',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Pénzt adok kölcsön', dokumenty: ['kolcsonszerzodes', 'atveteli-elismerveny'] },
          { text: 'Készpénzt adok át vagy veszek át', dokumenty: ['atveteli-elismerveny'] },
          { text: 'Valaki tartozik nekem, és részletekben fizetne', dokumenty: ['reszletfizetesi-megallapodas', 'tartozaselismero-nyilatkozat'], tip: 'Megállapodás: mindketten aláírják. Elismerő nyilatkozat: csak az adós.' },
          { text: 'Pénzt vagy dolgot ajándékozok', dokumenty: ['ajandekozasi-szerzodes'], tip: 'Egyenes ági rokon, házastárs, testvér: illetékmentes.' },
        ],
      },
      {
        nazev: 'Lakás',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Lakást adok ki vagy bérelek', dokumenty: ['lakasberleti-szerzodes', 'lakas-atadas-atveteli-jegyzokonyv'] },
          { text: 'Fel akarom mondani az albérletet', dokumenty: ['berleti-szerzodes-felmondasa'] },
        ],
      },
      {
        nazev: 'Vásárlás és ügyek',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Vissza akarom küldeni a webshopos vásárlást', dokumenty: ['elallasi-nyilatkozat'], tip: '14 nap az átvételtől.' },
          { text: 'A vásárolt termék hibás', dokumenty: ['kellekszavatossagi-igeny'] },
          { text: 'Használt dolgot adok el', dokumenty: ['adasveteli-szerzodes'] },
          { text: 'Valakinek el kell intéznie valamit helyettem', dokumenty: ['meghatalmazas'] },
          { text: 'Fel akarom mondani az előfizetést, biztosítást vagy tagságot', dokumenty: ['szerzodes-felmondasa'], tip: 'A határidőnél a megérkezés napja számít.' },
        ],
      },
      {
        nazev: 'Munka és család',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Fel akarok mondani a munkahelyemen', dokumenty: ['munkavallaloi-felmondas'], tip: 'A felmondási idő legalább 30 nap.' },
          { text: 'A gyermekem szülő nélkül utazik külföldre', dokumenty: ['hozzajarulo-nyilatkozat-kiskoru-utazas'], tip: 'Nézze meg a célország feltételeit is.' },
        ],
      },
    ],
  },
  hub: {
    title: 'Ingyenes szerződésminták PDF-ben – online kitöltés',
    description: 'Ingyenes szerződésminták a magyar jog szerint: autó adásvétel, kölcsön, ajándékozás, albérlet, meghatalmazás, elállás. Online, PDF vagy Word.',
    stitek: 'Magyarország',
    stitekSpan: 'szerződések a magyar jog szerint',
    h1: 'Szerződésminták',
    h1Span: 'Töltse ki online pár perc alatt, vagy töltse le üresen. Wordben is, regisztráció nélkül.',
    hledaniNadpis: 'Milyen szerződésre van szüksége?',
    hledaniSpan: 'Keressen helyzet szerint, nem paragrafusok szerint.',
    ogPopis: 'A magyar jog szerint. Töltse ki online.',
  },
};
