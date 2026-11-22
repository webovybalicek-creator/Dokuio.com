import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'noustaja',
  nazev: 'Nõustaja',
  title: 'Nõustaja – auto müük, laen, üür ja ostud',
  description: 'Juhendid samm-sammult: auto müük ja omanikuvahetus, laen sõprade vahel, kingitus, eluruumi üür, ostu tagastamine ja garantii. Tasuta näidistega.',
  h1: 'Nõustaja',
  h1Span: 'Samm-sammult juhendid igapäevasteks olukordadeks. Ilma keerulise juriidilise keeleta, kehtiva õiguse järgi.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Sõidukid',
      popis: 'Kasutatud auto müük ja ost, omanikuvahetus.',
      ilustrace: 'auto',
      temata: [
        { slug: 'auto-muuk', nazev: 'Auto müük', popis: 'Leping, makse ja üleandmine.' },
        { slug: 'auto-ost', nazev: 'Kasutatud auto ost', popis: 'Mida enne maksmist kontrollida.' },
        { slug: 'omanikuvahetus', nazev: 'Omanikuvahetus', popis: 'Transpordiameti e-teenus, 5 tööpäeva.' },
      ],
    },
    {
      slug: 'raha',
      nazev: 'Raha ja kingitused',
      popis: 'Laen sõprade vahel, võla tunnistamine, aegumine, kingitus.',
      ilustrace: 'penize',
      temata: [
        { slug: 'laen', nazev: 'Laen', popis: 'Kuidas raha laenata ja tagasi saada.' },
        { slug: 'volad', nazev: 'Võlad', popis: 'Nõue, tunnistamine, osamaksed, aegumine.' },
        { slug: 'kingitus', nazev: 'Kingitus', popis: 'Vorm ja maksud.' },
      ],
    },
    {
      slug: 'eluase',
      nazev: 'Eluase ja üür',
      popis: 'Eluruumi üür, tagatisraha, ülesütlemine ja üleandmine.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'uur', nazev: 'Üürileping', popis: 'Leping, tagatisraha, kõrvalkulud.' },
        { slug: 'uuri-lopp', nazev: 'Üüri lõppemine', popis: 'Ülesütlemine, üleandmine, tagatis.' },
      ],
    },
    {
      slug: 'ostud',
      nazev: 'Ostud ja garantii',
      popis: 'Veebiostust taganemine, puudusega kaup, müük kuulutuse kaudu.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'taganemine', nazev: 'Taganemine', popis: '14 päeva põhjust esitamata.' },
        { slug: 'garantii', nazev: 'Garantii', popis: 'Parandus, asendus, raha tagasi.' },
        { slug: 'kuulutus', nazev: 'Müük kuulutuse kaudu', popis: 'Leping, makse ja pettused.' },
        { slug: 'kasutuslaen', nazev: 'Asja laenamine', popis: 'Tasuta kasutamine ja kahjud.' },
      ],
    },
    {
      slug: 'teenused',
      nazev: 'Meistrid ja tellimused',
      popis: 'Leping meistriga, hilinemine, puudused ja tasu.',
      ilustrace: 'protokol',
      temata: [{ slug: 'meistrid', nazev: 'Meistrid', popis: 'Töövõtuleping, tähtaeg ja puudused.' }],
    },
    {
      slug: 'too',
      nazev: 'Töö',
      popis: 'Töölepingu ülesütlemine ja lõpparve.',
      ilustrace: 'protokol',
      temata: [{ slug: 'toolt-lahkumine', nazev: 'Töölt lahkumine', popis: 'Ülesütlemine ja etteteatamine.' }],
    },
    {
      slug: 'pere',
      nazev: 'Pere ja reisimine',
      popis: 'Lapse reisimine ilma vanemateta ja vanema nõusolek.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'lapse-reis', nazev: 'Lapse reis', popis: 'Teise vanema nõusolek.' }],
    },
    {
      slug: 'volikiri',
      nazev: 'Volikirjad ja kinnitused',
      popis: 'Kui keegi teine tegutseb teie eest.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'volikiri', nazev: 'Volikiri', popis: 'Lihtkirjalik või notariaalne.' }],
    },
  ],
};
