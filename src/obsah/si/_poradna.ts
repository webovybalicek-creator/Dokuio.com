import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'svetovalnica',
  nazev: 'Svetovalnica',
  title: 'Svetovalnica – prodaja avta, posojilo, najem in nakupi jasno',
  description: 'Praktični vodniki korak za korakom: prodaja in prepis avtomobila, posojilo prijatelju, darilo, najem stanovanja, vračilo blaga in reklamacija. Z brezplačnimi obrazci.',
  h1: 'Svetovalnica',
  h1Span: 'Vodniki korak za korakom za vsakdanje situacije. Brez pravniškega žargona, po veljavnih predpisih.',
  kategorie: [
    {
      slug: 'avto',
      nazev: 'Avto',
      popis: 'Prodaja in nakup rabljenega avtomobila, prepis lastništva.',
      ilustrace: 'auto',
      temata: [
        { slug: 'prodaja-avta', nazev: 'Prodaja avtomobila', popis: 'Pogodba, izročitev in rok 15 dni.' },
        { slug: 'nakup-avta', nazev: 'Nakup rabljenega avtomobila', popis: 'Kaj preveriti pred plačilom.' },
        { slug: 'prepis', nazev: 'Prepis vozila', popis: 'Roki, stroški, pooblastilo.' },
      ],
    },
    {
      slug: 'denar',
      nazev: 'Denar in darila',
      popis: 'Posojilo prijatelju, pripoznava dolga, zastaranje, darilo.',
      ilustrace: 'penize',
      temata: [
        { slug: 'posojilo', nazev: 'Posojilo', popis: 'Kako posoditi denar in ga dobiti nazaj.' },
        { slug: 'dolg', nazev: 'Dolg', popis: 'Pripoznava dolga, obroki, zastaranje.' },
        { slug: 'darilo', nazev: 'Darilo in davek', popis: 'Kdaj se davek na darila ne plača.' },
      ],
    },
    {
      slug: 'stanovanje',
      nazev: 'Stanovanje in najem',
      popis: 'Najem stanovanja, varščina, odpoved in predaja stanovanja.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'najem', nazev: 'Najem stanovanja', popis: 'Pogodba, varščina, zapisnik.' },
        { slug: 'konec-najema', nazev: 'Konec najema', popis: 'Odpoved, predaja in vračilo varščine.' },
      ],
    },
    {
      slug: 'nakupi',
      nazev: 'Nakupi in reklamacije',
      popis: 'Vračilo blaga, kupljenega na spletu, neskladno blago, prodaja prek oglasa.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'vracilo-blaga', nazev: 'Vračilo blaga', popis: '14 dni brez navedbe razloga.' },
        { slug: 'reklamacija', nazev: 'Reklamacija', popis: 'Popravilo, zamenjava, vračilo denarja.' },
        { slug: 'prodaja-oglas', nazev: 'Prodaja prek oglasa', popis: 'Pogodba, plačilo in prevare.' },
        { slug: 'posodba', nazev: 'Posodba stvari', popis: 'Brezplačna izposoja in škoda.' },
      ],
    },
    {
      slug: 'storitve',
      nazev: 'Mojstri in storitve',
      popis: 'Pogodba z mojstrom, zamuda, napake in plačilo.',
      ilustrace: 'protokol',
      temata: [{ slug: 'mojstri', nazev: 'Mojstri', popis: 'Podjemna pogodba, rok in napake.' }],
    },
    {
      slug: 'delo',
      nazev: 'Delo',
      popis: 'Odpoved pogodbe o zaposlitvi in odpovedni rok.',
      ilustrace: 'protokol',
      temata: [{ slug: 'odpoved', nazev: 'Odpoved', popis: 'Odpovedni rok in sporazumno prenehanje.' }],
    },
    {
      slug: 'druzina',
      nazev: 'Družina in potovanja',
      popis: 'Potovanje otroka brez staršev in soglasje.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'potovanje-otroka', nazev: 'Potovanje otroka', popis: 'Soglasje staršev in overitev.' }],
    },
    {
      slug: 'pooblastilo',
      nazev: 'Pooblastila in zastopanje',
      popis: 'Ko kaj namesto vas uredi kdo drug.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'pooblastilo', nazev: 'Pooblastilo', popis: 'Kdaj je treba podpis overiti.' }],
    },
  ],
};
