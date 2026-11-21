import type { Zeme } from '../typy';

/**
 * Slovenija. Obrazci preverjeni 21. 11. 2026 po Uradnem listu, gov.si, FURS in PISRS (glej src/sablony/si/viri.ts).
 */
export const zeme: Zeme = {
  kod: 'si',
  nazev: 'Slovenija',
  nazevEn: 'Slovenia',
  jazyk: 'sl',
  hreflang: 'sl-SI',
  casovaZona: 'Europe/Ljubljana',
  aktivni: true,
  poradi: 9,
  kategorie: { auto: 'Avto in vozila', denar: 'Denar in darila', stanovanje: 'Stanovanje in najem', vsakdan: 'Nakupi in vsakdanji opravki', storitve: 'Storitve in mojstri', delo: 'Delo', druzina: 'Družina in potovanja' },
  skupiny: {
    auto: [
      { slug: 'kupoprodajna-pogodba-avto', popis: 'Prodaja rabljenega avtomobila med fizičnimi osebami.' },
      { slug: 'zapisnik-o-izrocitvi-vozila', popis: 'Kilometri, poškodbe, ključi in ura izročitve.' },
      { slug: 'pooblastilo', popis: 'Ko spremembo lastništva uredi kdo drug.' },
      { slug: 'potrdilo-o-prejemu-denarja', popis: 'Dokaz o plačilu z gotovino.' },
      { slug: 'kupoprodajna-pogodba-motor', popis: 'Motorno kolo, skuter ali štirikolesnik.' },
    ],
    denar: [
      { slug: 'posojilna-pogodba', popis: 'Posojilo prijatelju ali družini, tudi na obroke.' },
      { slug: 'potrdilo-o-prejemu-denarja', popis: 'Pobotnica za prejeto gotovino.' },
      { slug: 'pripoznava-dolga', popis: 'Dolžnik pisno pripozna dolg in rok plačila.' },
      { slug: 'darilna-pogodba', popis: 'Darilo denarja ali stvari, davek na darila.' },
      { slug: 'opomin-pred-tozbo', popis: 'Poziv dolžniku k plačilu z rokom.' },
      { slug: 'dogovor-o-obrocnem-odplacilu', popis: 'Dolg v mesečnih obrokih.' },
    ],
    stanovanje: [
      { slug: 'najemna-pogodba-stanovanje', popis: 'Najem stanovanja z varščino.' },
      { slug: 'zapisnik-o-predaji-stanovanja', popis: 'Števci, ključi in stanje stanovanja.' },
      { slug: 'odpoved-najemne-pogodbe', popis: 'Odpoved najemnika z odpovednim rokom.' },
      { slug: 'sporazumna-razveza-najemne-pogodbe', popis: 'Konec najema po dogovoru, brez odpovednega roka.' },
      { slug: 'podnajemna-pogodba', popis: 'Soba ali stanovanje s soglasjem lastnika.' },
    ],
    vsakdan: [
      { slug: 'kupoprodajna-pogodba', popis: 'Prodaja rabljene stvari prek oglasa.' },
      { slug: 'odstop-od-pogodbe', popis: 'Vračilo blaga, kupljenega na spletu, v 14 dneh.' },
      { slug: 'reklamacija', popis: 'Obvestilo o neskladnosti blaga.' },
      { slug: 'pooblastilo', popis: 'Ko kaj namesto vas uredi kdo drug.' },
      { slug: 'odpoved-pogodbe', popis: 'Operater, zavarovanje, fitnes, naročnina.' },
      { slug: 'pogodba-o-posodbi', popis: 'Brezplačna izposoja stvari.' },
      { slug: 'izjava', popis: 'Pisna izjava za urad ali banko.' },
    ],
    storitve: [
      { slug: 'podjemna-pogodba', popis: 'Mojster, popravilo, obnova.' },
      { slug: 'opomin-pred-tozbo', popis: 'Ko naročnik ne plača.' },
    ],
    delo: [{ slug: 'odpoved-pogodbe-o-zaposlitvi', popis: 'Redna odpoved delavca.' }],
    druzina: [{ slug: 'soglasje-za-potovanje-otroka', popis: 'Otrok potuje brez enega ali obeh staršev.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'prodaja-avtomobila',
      nazev: 'Prodaja avtomobila',
      popis: 'Kupoprodajna pogodba, zapisnik o izročitvi in potrdilo o prejemu denarja.',
      ilustrace: 'auto',
      dokumenty: ['kupoprodajna-pogodba-avto', 'zapisnik-o-izrocitvi-vozila', 'potrdilo-o-prejemu-denarja'],
      title: 'Prodaja avtomobila – vsi dokumenti v enem PDF, brezplačno',
      description: 'Vse za prodajo rabljenega avtomobila: kupoprodajna pogodba, zapisnik o izročitvi z uro predaje in potrdilo o prejemu denarja. Brezplačno, PDF in Word.',
      perex: 'Izpolnite pogodbo, drugi dokumenti bodo prevzeli podatke. Nato vse prenesite naenkrat v enem PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Ne veste, kateri dokument potrebujete?',
    span: 'Izberite situacijo in pokazali vam bomo, kaj potrebujete.',
    situace: [
      {
        nazev: 'Avto',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Prodajam ali kupujem rabljen avto', dokumenty: ['kupoprodajna-pogodba-avto', 'zapisnik-o-izrocitvi-vozila'], balicek: 'prodaja-avtomobila', tip: 'Spremembo lastništva prijavite v 15 dneh – najbolje skupaj pred izročitvijo.' },
          { text: 'Avto posojam nekomu', dokumenty: ['zapisnik-o-izrocitvi-vozila', 'pogodba-o-posodbi'] },
          { text: 'Prodajam motorno kolo ali skuter', dokumenty: ['kupoprodajna-pogodba-motor', 'zapisnik-o-izrocitvi-vozila'] },
        ],
      },
      {
        nazev: 'Denar',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Posojam denar', dokumenty: ['posojilna-pogodba', 'potrdilo-o-prejemu-denarja'] },
          { text: 'Izročam ali prejemam gotovino', dokumenty: ['potrdilo-o-prejemu-denarja'] },
          { text: 'Nekdo mi dolguje denar', dokumenty: ['opomin-pred-tozbo', 'pripoznava-dolga', 'dogovor-o-obrocnem-odplacilu'], tip: 'Pisna pripoznava dolga pretrga zastaranje.' },
          { text: 'Podarjam denar ali stvar', dokumenty: ['darilna-pogodba'], tip: 'Zakonec in otroci: brez davka na darila.' },
        ],
      },
      {
        nazev: 'Stanovanje',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Oddajam ali najemam stanovanje', dokumenty: ['najemna-pogodba-stanovanje', 'zapisnik-o-predaji-stanovanja'] },
          { text: 'Želim odpovedati najem', dokumenty: ['odpoved-najemne-pogodbe', 'sporazumna-razveza-najemne-pogodbe'], tip: 'Z odpovednim rokom iz pogodbe – ali prej po dogovoru.' },
          { text: 'Sobo ali stanovanje dajem v podnajem', dokumenty: ['podnajemna-pogodba'], tip: 'Le s soglasjem lastnika.' },
        ],
      },
      {
        nazev: 'Nakupi in opravki',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Želim vrniti blago, kupljeno na spletu', dokumenty: ['odstop-od-pogodbe'], tip: '14 dni od prejema blaga.' },
          { text: 'Kupljeno blago ima napako', dokumenty: ['reklamacija'], tip: 'Prodajalca obvestite v dveh mesecih od odkritja.' },
          { text: 'Prodajam rabljeno stvar', dokumenty: ['kupoprodajna-pogodba'] },
          { text: 'Nekdo mora nekaj urediti namesto mene', dokumenty: ['pooblastilo'] },
          { text: 'Odpovedujem operaterja, zavarovanje ali fitnes', dokumenty: ['odpoved-pogodbe'] },
          { text: 'Stvar posojam prijatelju', dokumenty: ['pogodba-o-posodbi'] },
        ],
      },
      {
        nazev: 'Delo, mojstri in družina',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Najemam mojstra', dokumenty: ['podjemna-pogodba'] },
          { text: 'Dajem odpoved v službi', dokumenty: ['odpoved-pogodbe-o-zaposlitvi'], tip: '15 ali 30 dni, odvisno od trajanja zaposlitve.' },
          { text: 'Otrok potuje brez mene', dokumenty: ['soglasje-za-potovanje-otroka'], tip: 'Podpis overite na upravni enoti ali pri notarju.' },
          { text: 'Potrebujem pisno izjavo', dokumenty: ['izjava'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Brezplačni vzorci pogodb v PDF – izpolnjevanje na spletu',
    description: 'Brezplačni vzorci pogodb po slovenskem pravu: prodaja avtomobila, posojilo, darilo, najem stanovanja, pooblastilo, reklamacija. Na spletu, PDF ali Word.',
    stitek: 'Slovenija',
    stitekSpan: 'pogodbe po slovenskem pravu',
    h1: 'Vzorci pogodb',
    h1Span: 'Izpolnite na spletu v nekaj minutah ali prenesite prazen obrazec. Tudi v Wordu, brez registracije.',
    hledaniNadpis: 'Katero pogodbo potrebujete?',
    hledaniSpan: 'Iščite po situaciji, ne po paragrafih.',
    ogPopis: 'Po slovenskem pravu. Izpolnite na spletu.',
  },
};
