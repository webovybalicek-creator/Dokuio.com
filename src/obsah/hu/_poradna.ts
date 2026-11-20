import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'tanacsadas',
  nazev: 'Tanácsadó',
  title: 'Tanácsadó – autóeladás, kölcsön, albérlet és vásárlás érthetően',
  description: 'Gyakorlati útmutatók lépésről lépésre: autó eladása és átírása, kölcsön ismerősnek, ajándékozás, albérlet, elállás és szavatosság. Ingyenes mintákkal.',
  h1: 'Tanácsadó',
  h1Span: 'Útmutatók lépésről lépésre a mindennapi helyzetekhez. Jogi zsargon nélkül, a hatályos jogszabályok szerint.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Autó',
      popis: 'Használt autó eladása és vásárlása, átírás, illeték.',
      ilustrace: 'auto',
      temata: [
        { slug: 'auto-eladasa', nazev: 'Autó eladása', popis: 'Szerződés tanúkkal, bejelentés 15 napon belül.' },
        { slug: 'auto-vasarlasa', nazev: 'Használt autó vásárlása', popis: 'Mit ellenőrizzen fizetés előtt.' },
        { slug: 'atiras', nazev: 'Átírás és illeték', popis: 'Határidők, vagyonszerzési illeték, meghatalmazás.' },
      ],
    },
    {
      slug: 'penz',
      nazev: 'Pénz és ajándék',
      popis: 'Kölcsön ismerősnek, tartozáselismerés, elévülés, ajándékozás.',
      ilustrace: 'penize',
      temata: [
        { slug: 'kolcson', nazev: 'Kölcsön', popis: 'Hogyan adjon kölcsön, hogy visszakapja.' },
        { slug: 'tartozas', nazev: 'Tartozás', popis: 'Tartozáselismerés, részletfizetés, elévülés.' },
        { slug: 'ajandekozas', nazev: 'Ajándékozás és illeték', popis: 'Mikor illetékmentes az ajándék.' },
      ],
    },
    {
      slug: 'lakas',
      nazev: 'Lakás és albérlet',
      popis: 'Lakásbérlet, kaució, felmondás és a lakás visszaadása.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'berles', nazev: 'Lakásbérlet', popis: 'Szerződés, kaució, jegyzőkönyv.' },
        { slug: 'berlet-vege', nazev: 'A bérlet vége', popis: 'Felmondás, visszaadás, a kaució elszámolása.' },
      ],
    },
    {
      slug: 'vasarlas',
      nazev: 'Vásárlás és panasz',
      popis: 'Elállás online vásárlástól, hibás termék, szavatosság.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'elallas', nazev: 'Elállás', popis: '14 nap indoklás nélkül.' },
        { slug: 'szavatossag', nazev: 'Szavatosság', popis: 'Javítás, csere, pénz vissza.' },
      ],
    },
    {
      slug: 'ugyintezes',
      nazev: 'Ügyintézés és meghatalmazás',
      popis: 'Ha az ügyet valaki más intézi Ön helyett.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'meghatalmazas', nazev: 'Meghatalmazás', popis: 'Mikor kell tanú vagy ügyvéd.' }],
    },
  ],
};
