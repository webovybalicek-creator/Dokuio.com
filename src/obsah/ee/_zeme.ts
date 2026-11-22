import type { Zeme } from '../typy';

/**
 * Eesti. Põhjad kontrolliti 22. 11. 2026 võlaõigusseaduse, tsiviilseadustiku üldosa seaduse, töölepingu seaduse,
 * Transpordiameti, Maksu- ja Tolliameti, Your Europe ja e-justice'i järgi (vt src/sablony/ee/allikad.ts).
 */
export const zeme: Zeme = {
  kod: 'ee',
  nazev: 'Eesti',
  nazevEn: 'Estonia',
  jazyk: 'et',
  hreflang: 'et-EE',
  casovaZona: 'Europe/Tallinn',
  aktivni: true,
  poradi: 13,
  kategorie: { auto: 'Sõidukid', raha: 'Raha ja kingitused', eluase: 'Eluase ja üür', ostud: 'Ostud ja asjaajamine', teenused: 'Meistrid ja tellimused', too: 'Töö', pere: 'Pere ja reisimine' },
  skupiny: {
    auto: [
      { slug: 'soiduki-ostu-muugileping', popis: 'Kasutatud auto müük eraisikute vahel.' },
      { slug: 'soiduki-uleandmise-akt', popis: 'Läbisõit, kahjustused, võtmed ja üleandmise aeg.' },
      { slug: 'volikiri', popis: 'Kui toiminguid teeb keegi teine.' },
      { slug: 'raha-vastuvotmise-kviitung', popis: 'Kinnitus sularahamakse kohta.' },
      { slug: 'mootorratta-ostu-muugileping', popis: 'Mootorratas, roller või ATV.' },
    ],
    raha: [
      { slug: 'laenuleping', popis: 'Laen sõbrale või sugulasele, ka osamaksetena.' },
      { slug: 'raha-vastuvotmise-kviitung', popis: 'Kinnitus vastu võetud raha kohta.' },
      { slug: 'volatunnistus', popis: 'Võlgnik tunnistab võla kirjalikult.' },
      { slug: 'kinkeleping', popis: 'Raha või asja kinkimine.' },
      { slug: 'maksenoue', popis: 'Nõue võlgnikule maksetähtajaga.' },
      { slug: 'maksegraafiku-kokkulepe', popis: 'Võla tasumine igakuiste osamaksetena.' },
    ],
    eluase: [
      { slug: 'uurileping', popis: 'Korteri üürimine tagatisrahaga.' },
      { slug: 'eluruumi-uleandmise-akt', popis: 'Arvestinäidud, võtmed ja eluruumi seisukord.' },
      { slug: 'uurilepingu-ulesutlemine', popis: 'Üürnik ütleb üürilepingu üles.' },
      { slug: 'uurilepingu-lopetamise-kokkulepe', popis: 'Üürilepingu lõpetamine kokkuleppel.' },
      { slug: 'alluurileping', popis: 'Tuba või kogu eluruum üürnikult.' },
    ],
    ostud: [
      { slug: 'ostu-muugileping', popis: 'Kasutatud asja müük kuulutuse kaudu.' },
      { slug: 'taganemisavaldus', popis: 'Veebiostu tagastamine 14 päeva jooksul.' },
      { slug: 'pretensioon', popis: 'Puudusega kaup, 2-aastane vastutus.' },
      { slug: 'volikiri', popis: 'Kui keegi teine teeb midagi teie eest.' },
      { slug: 'lepingu-ulesutlemine', popis: 'Telefon, internet, kindlustus, spordiklubi.' },
      { slug: 'kasutuslaenuleping', popis: 'Asja tasuta kasutada andmine.' },
      { slug: 'kinnitus', popis: 'Kirjalik kinnitus asutusele või pangale.' },
    ],
    teenused: [
      { slug: 'toovotuleping', popis: 'Meister, remont, renoveerimine.' },
      { slug: 'maksenoue', popis: 'Kui klient ei maksa.' },
    ],
    too: [{ slug: 'toolepingu-ulesutlemine', popis: 'Töölt lahkumine, 30 päeva etteteatamist.' }],
    pere: [{ slug: 'nousolek-lapse-reisimiseks', popis: 'Laps reisib ilma ühe või mõlema vanemata.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'auto-muuk',
      nazev: 'Auto müük',
      popis: 'Ostu-müügileping, üleandmise akt ja raha vastuvõtmise kviitung.',
      ilustrace: 'auto',
      dokumenty: ['soiduki-ostu-muugileping', 'soiduki-uleandmise-akt', 'raha-vastuvotmise-kviitung'],
      title: 'Auto müük – kõik dokumendid ühes PDF-is, tasuta näidis',
      description: 'Kõik kasutatud auto müügiks: ostu-müügileping, üleandmise akt kellaajaga ja raha vastuvõtmise kviitung. Tasuta näidis, PDF ja Word.',
      perex: 'Täitke ostu-müügileping ja ülejäänud dokumendid võtavad andmed üle. Seejärel laadige kõik korraga alla ühes PDF-is.',
    },
  ],
  rozcestnik: {
    nadpis: 'Ei tea, millist dokumenti vajate?',
    span: 'Valige olukord ja näitame, mida on vaja.',
    situace: [
      {
        nazev: 'Sõiduk',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Müün või ostan kasutatud auto', dokumenty: ['soiduki-ostu-muugileping', 'soiduki-uleandmise-akt'], balicek: 'auto-muuk', tip: 'Omanikuvahetus Transpordiameti e-teeninduses 5 tööpäeva jooksul.' },
          { text: 'Laenan oma auto välja', dokumenty: ['soiduki-uleandmise-akt', 'kasutuslaenuleping'] },
          { text: 'Müün mootorratta või rolleri', dokumenty: ['mootorratta-ostu-muugileping', 'soiduki-uleandmise-akt'] },
        ],
      },
      {
        nazev: 'Raha',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Laenan raha', dokumenty: ['laenuleping', 'raha-vastuvotmise-kviitung'] },
          { text: 'Annan või saan sularaha', dokumenty: ['raha-vastuvotmise-kviitung'] },
          { text: 'Keegi võlgneb mulle raha', dokumenty: ['maksenoue', 'volatunnistus', 'maksegraafiku-kokkulepe'], tip: 'Võla tunnustamine katkestab aegumise.' },
          { text: 'Kingin raha või asja', dokumenty: ['kinkeleping'], tip: 'Eestis kingimaksu ei ole.' },
        ],
      },
      {
        nazev: 'Eluase',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Annan korteri või maja üürile', dokumenty: ['uurileping', 'eluruumi-uleandmise-akt'], tip: 'Tagatisraha hoitakse krediidiasutuses.' },
          { text: 'Soovin üürilepingu lõpetada', dokumenty: ['uurilepingu-ulesutlemine', 'uurilepingu-lopetamise-kokkulepe'], tip: 'Kokkuleppel on kiirem ja kindlam.' },
          { text: 'Annan toa või eluruumi allüürile', dokumenty: ['alluurileping'], tip: 'Üürileandja nõusolekul.' },
        ],
      },
      {
        nazev: 'Ostud ja asjaajamine',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Soovin veebiostu tagastada', dokumenty: ['taganemisavaldus'], tip: '14 päeva kauba kättesaamisest.' },
          { text: 'Kaubal on puudus', dokumenty: ['pretensioon'], tip: 'Müüja vastutab 2 aastat üleandmisest.' },
          { text: 'Müün kasutatud asja', dokumenty: ['ostu-muugileping'] },
          { text: 'Keegi peab minu eest midagi tegema', dokumenty: ['volikiri'] },
          { text: 'Lõpetan tellimuse, kindlustuse või spordiklubi', dokumenty: ['lepingu-ulesutlemine'] },
          { text: 'Laenan asja sõbrale', dokumenty: ['kasutuslaenuleping'] },
        ],
      },
      {
        nazev: 'Töö, meistrid ja pere',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Tellin meistrilt tööd', dokumenty: ['toovotuleping'] },
          { text: 'Lahkun töölt', dokumenty: ['toolepingu-ulesutlemine'], tip: 'Vähemalt 30 kalendripäeva ette.' },
          { text: 'Laps reisib ilma minuta', dokumenty: ['nousolek-lapse-reisimiseks'], tip: 'Ühise hooldusõiguse korral teise vanema nõusolekul.' },
          { text: 'Vajan kirjalikku kinnitust', dokumenty: ['kinnitus'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Lepingu näidised tasuta PDF-ina – täitke veebis',
    description: 'Tasuta lepingunäidised Eesti õiguse järgi: auto ostu-müügileping, laenuleping, kinkeleping, üürileping, volikiri, kinnitus. Veebis, PDF-i või Wordina.',
    stitek: 'Eesti',
    stitekSpan: 'lepingud Eesti õiguse järgi',
    h1: 'Lepingu näidised',
    h1Span: 'Täitke veebis mõne minutiga või laadige alla tühi vorm. Ka Wordina, ilma registreerimiseta.',
    hledaniNadpis: 'Millist lepingut vajate?',
    hledaniSpan: 'Otsige olukorra, mitte seaduse paragrahvide järgi.',
    ogPopis: 'Eesti õiguse järgi. Täitke veebis.',
  },
};
