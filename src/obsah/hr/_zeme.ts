import type { Zeme } from '../typy';

/**
 * Hrvatska. Obrasci provjereni 20. 11. 2026 prema Narodnim novinama, gov.hr i Poreznoj upravi (vidi src/sablony/hr/izvori.ts).
 */
export const zeme: Zeme = {
  kod: 'hr',
  nazev: 'Hrvatska',
  nazevEn: 'Croatia',
  jazyk: 'hr',
  hreflang: 'hr-HR',
  casovaZona: 'Europe/Zagreb',
  aktivni: true,
  poradi: 8,
  kategorie: { auto: 'Automobil', novac: 'Novac i darovi', stan: 'Stan i najam', svakodnevno: 'Kupnja i svakodnevni poslovi' },
  skupiny: {
    auto: [
      { slug: 'kupoprodajni-ugovor-automobil', popis: 'Prodaja rabljenog automobila između građana.' },
      { slug: 'primopredajni-zapisnik-vozila', popis: 'Kilometri, oštećenja, ključevi i vrijeme predaje.' },
      { slug: 'punomoc', popis: 'Kada promjenu vlasništva obavlja netko drugi.' },
      { slug: 'potvrda-o-primitku-novca', popis: 'Dokaz o plaćanju gotovinom.' },
    ],
    novac: [
      { slug: 'ugovor-o-zajmu', popis: 'Zajam prijatelju ili članu obitelji, i na obroke.' },
      { slug: 'potvrda-o-primitku-novca', popis: 'Priznanica za primljenu gotovinu.' },
      { slug: 'izjava-o-priznanju-duga', popis: 'Dužnik pisano priznaje dug i rok plaćanja.' },
      { slug: 'ugovor-o-darovanju', popis: 'Darovanje novca ili stvari, porez na darove.' },
    ],
    stan: [
      { slug: 'ugovor-o-najmu-stana', popis: 'Najam stana s jamčevinom.' },
      { slug: 'primopredajni-zapisnik-stana', popis: 'Brojila, ključevi i stanje stana.' },
      { slug: 'otkaz-ugovora-o-najmu', popis: 'Otkaz najmoprimca, tri mjeseca unaprijed.' },
    ],
    svakodnevno: [
      { slug: 'kupoprodajni-ugovor', popis: 'Prodaja rabljene stvari preko oglasa.' },
      { slug: 'jednostrani-raskid-ugovora', popis: 'Povrat robe kupljene na internetu u 14 dana.' },
      { slug: 'reklamacija', popis: 'Pisani prigovor zbog neispravne robe.' },
      { slug: 'punomoc', popis: 'Kada nešto umjesto vas obavlja netko drugi.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'prodaja-automobila',
      nazev: 'Prodaja automobila',
      popis: 'Kupoprodajni ugovor, primopredajni zapisnik i potvrda o primitku novca.',
      ilustrace: 'auto',
      dokumenty: ['kupoprodajni-ugovor-automobil', 'primopredajni-zapisnik-vozila', 'potvrda-o-primitku-novca'],
      title: 'Prodaja automobila – svi dokumenti u jednom PDF-u, besplatno',
      description: 'Sve za prodaju rabljenog automobila: kupoprodajni ugovor, primopredajni zapisnik s vremenom predaje i potvrda o primitku novca. Besplatno, PDF i Word.',
      perex: 'Ispunite ugovor, ostali dokumenti preuzet će podatke. Zatim sve preuzmite odjednom u jednom PDF-u.',
    },
  ],
  rozcestnik: {
    nadpis: 'Ne znate koji dokument trebate?',
    span: 'Odaberite situaciju, a mi ćemo vam pokazati što vam treba.',
    situace: [
      {
        nazev: 'Automobil',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Prodajem ili kupujem rabljeni automobil', dokumenty: ['kupoprodajni-ugovor-automobil', 'primopredajni-zapisnik-vozila'], balicek: 'prodaja-automobila', tip: 'Kupac u 15 dana obavlja promjenu vlasništva u stanici za tehnički pregled.' },
          { text: 'Posuđujem automobil nekome', dokumenty: ['primopredajni-zapisnik-vozila'] },
        ],
      },
      {
        nazev: 'Novac',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Posuđujem novac', dokumenty: ['ugovor-o-zajmu', 'potvrda-o-primitku-novca'] },
          { text: 'Predajem ili primam gotovinu', dokumenty: ['potvrda-o-primitku-novca'] },
          { text: 'Netko mi duguje novac', dokumenty: ['izjava-o-priznanju-duga'], tip: 'Pisano priznanje duga prekida zastaru.' },
          { text: 'Darujem novac ili stvar', dokumenty: ['ugovor-o-darovanju'], tip: 'Bračni drug, djeca, roditelji: bez poreza na darove.' },
        ],
      },
      {
        nazev: 'Stan',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Iznajmljujem ili unajmljujem stan', dokumenty: ['ugovor-o-najmu-stana', 'primopredajni-zapisnik-stana'] },
          { text: 'Želim otkazati najam', dokumenty: ['otkaz-ugovora-o-najmu'], tip: 'Najmanje tri mjeseca prije iseljenja.' },
        ],
      },
      {
        nazev: 'Kupnja i poslovi',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Želim vratiti robu kupljenu na internetu', dokumenty: ['jednostrani-raskid-ugovora'], tip: '14 dana od primitka robe.' },
          { text: 'Kupljena roba je neispravna', dokumenty: ['reklamacija'] },
          { text: 'Prodajem rabljenu stvar', dokumenty: ['kupoprodajni-ugovor'] },
          { text: 'Netko nešto treba obaviti umjesto mene', dokumenty: ['punomoc'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Besplatni obrasci ugovora u PDF-u – ispunjavanje online',
    description: 'Besplatni obrasci ugovora prema hrvatskom pravu: kupoprodaja automobila, zajam, darovanje, najam stana, punomoć, reklamacija. Online, PDF ili Word.',
    stitek: 'Hrvatska',
    stitekSpan: 'ugovori prema hrvatskom pravu',
    h1: 'Obrasci ugovora',
    h1Span: 'Ispunite online za nekoliko minuta ili preuzmite prazan obrazac. I u Wordu, bez registracije.',
    hledaniNadpis: 'Koji ugovor trebate?',
    hledaniSpan: 'Tražite prema situaciji, ne prema paragrafima.',
    ogPopis: 'Prema hrvatskom pravu. Ispunite online.',
  },
};
