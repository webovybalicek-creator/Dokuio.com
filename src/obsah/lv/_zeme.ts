import type { Zeme } from '../typy';

/**
 * Latvija. Paraugi pārbaudīti 22. 11. 2026 pēc Civillikuma, Dzīvojamo telpu īres likuma, Darba likuma, Patērētāju tiesību aizsardzības
 * likuma, CSDD, VID, Your Europe un e-justice (sk. src/sablony/lv/avoti.ts).
 */
export const zeme: Zeme = {
  kod: 'lv',
  nazev: 'Latvija',
  nazevEn: 'Latvia',
  jazyk: 'lv',
  hreflang: 'lv-LV',
  casovaZona: 'Europe/Riga',
  aktivni: true,
  poradi: 14,
  kategorie: { auto: 'Transportlīdzekļi', nauda: 'Nauda un dāvinājumi', majoklis: 'Mājoklis un īre', pirkumi: 'Pirkumi un formalitātes', pakalpojumi: 'Meistari un pasūtījumi', darbs: 'Darbs', gimene: 'Ģimene un ceļojumi' },
  skupiny: {
    auto: [
      { slug: 'auto-pirkuma-ligums', popis: 'Lietota auto pārdošana starp privātpersonām.' },
      { slug: 'auto-nodosanas-akts', popis: 'Nobraukums, bojājumi, atslēgas un nodošanas laiks.' },
      { slug: 'pilnvara', popis: 'Ja darbības veic kāds cits.' },
      { slug: 'naudas-sanemsanas-kvits', popis: 'Apliecinājums par skaidras naudas maksājumu.' },
      { slug: 'motocikla-pirkuma-ligums', popis: 'Motocikls, motorollers vai kvadricikls.' },
    ],
    nauda: [
      { slug: 'aizdevuma-ligums', popis: 'Aizdevums draugam vai radiniekam, arī pa daļām.' },
      { slug: 'naudas-sanemsanas-kvits', popis: 'Apliecinājums par saņemtu naudu.' },
      { slug: 'parada-atzisana', popis: 'Parādnieks rakstveidā atzīst parādu.' },
      { slug: 'davinajuma-ligums', popis: 'Naudas vai lietas dāvināšana.' },
      { slug: 'maksajuma-pieprasijums', popis: 'Pieprasījums parādniekam ar termiņu.' },
      { slug: 'vienosanas-par-parada-atmaksu', popis: 'Parāda samaksa ikmēneša maksājumos.' },
    ],
    majoklis: [
      { slug: 'ires-ligums', popis: 'Dzīvokļa īre ar drošības naudu.' },
      { slug: 'dzivokla-nodosanas-akts', popis: 'Skaitītāju rādījumi, atslēgas un stāvoklis.' },
      { slug: 'ires-liguma-uzteikums', popis: 'Īrnieks atkāpjas no īres līguma.' },
      { slug: 'vienosanas-par-ires-izbeigsanu', popis: 'Īres izbeigšana pusēm vienojoties.' },
      { slug: 'apakssires-ligums', popis: 'Istaba vai dzīvoklis no īrnieka.' },
    ],
    pirkumi: [
      { slug: 'pirkuma-ligums', popis: 'Lietotas lietas pārdošana pēc sludinājuma.' },
      { slug: 'atteikuma-veidlapa', popis: 'Pirkuma internetā atgriešana 14 dienu laikā.' },
      { slug: 'pretenzija', popis: 'Preces defekts, 2 gadu atbildība.' },
      { slug: 'pilnvara', popis: 'Ja kāds cits kaut ko kārto jūsu vietā.' },
      { slug: 'liguma-uzteikums', popis: 'Telefons, internets, apdrošināšana, sporta klubs.' },
      { slug: 'patapinajuma-ligums', popis: 'Lietas nodošana bezatlīdzības lietošanā.' },
      { slug: 'apliecinajums', popis: 'Rakstveida apliecinājums iestādei vai bankai.' },
    ],
    pakalpojumi: [
      { slug: 'uznemuma-ligums', popis: 'Meistars, remonts, renovācija.' },
      { slug: 'maksajuma-pieprasijums', popis: 'Ja klients nemaksā.' },
    ],
    darbs: [{ slug: 'darba-liguma-uzteikums', popis: 'Aiziešana no darba, mēnesi iepriekš.' }],
    gimene: [{ slug: 'vecaka-piekrisana-berna-celojumam', popis: 'Bērns ceļo bez vecākiem.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'auto-pardosana',
      nazev: 'Auto pārdošana',
      popis: 'Pirkuma līgums, nodošanas akts un kvīts par naudas saņemšanu.',
      ilustrace: 'auto',
      dokumenty: ['auto-pirkuma-ligums', 'auto-nodosanas-akts', 'naudas-sanemsanas-kvits'],
      title: 'Auto pārdošana – visi dokumenti vienā PDF, paraugs bez maksas',
      description: 'Viss lietota auto pārdošanai: pirkuma līgums, nodošanas akts ar laiku un kvīts par naudas saņemšanu. Paraugs bez maksas, PDF un Word.',
      perex: 'Aizpildiet pirkuma līgumu, un pārējie dokumenti pārņems datus. Pēc tam lejupielādējiet visu uzreiz vienā PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Nezināt, kurš dokuments jums vajadzīgs?',
    span: 'Izvēlieties situāciju, un parādīsim, kas vajadzīgs.',
    situace: [
      {
        nazev: 'Transportlīdzeklis',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Pārdodu vai pērku lietotu auto', dokumenty: ['auto-pirkuma-ligums', 'auto-nodosanas-akts'], balicek: 'auto-pardosana', tip: 'Īpašnieka maiņa e-CSDD: pārdevējs apstiprina 5 dienu laikā.' },
          { text: 'Aizdodu savu auto', dokumenty: ['auto-nodosanas-akts', 'patapinajuma-ligums'] },
          { text: 'Pārdodu motociklu vai motorolleru', dokumenty: ['motocikla-pirkuma-ligums', 'auto-nodosanas-akts'] },
        ],
      },
      {
        nazev: 'Nauda',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Aizdodu naudu', dokumenty: ['aizdevuma-ligums', 'naudas-sanemsanas-kvits'] },
          { text: 'Dodu vai saņemu skaidru naudu', dokumenty: ['naudas-sanemsanas-kvits'] },
          { text: 'Kāds man ir parādā', dokumenty: ['maksajuma-pieprasijums', 'parada-atzisana', 'vienosanas-par-parada-atmaksu'], tip: 'Atgādinājums un parāda atzīšana pārtrauc noilgumu.' },
          { text: 'Dāvinu naudu vai lietu', dokumenty: ['davinajuma-ligums'], tip: 'Dāvanas no tuviem radiniekiem neapliek ar nodokli.' },
        ],
      },
      {
        nazev: 'Mājoklis',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Izīrēju dzīvokli vai māju', dokumenty: ['ires-ligums', 'dzivokla-nodosanas-akts'], tip: 'Drošības nauda ne vairāk kā divu mēnešu īres maksa.' },
          { text: 'Vēlos izbeigt īres līgumu', dokumenty: ['ires-liguma-uzteikums', 'vienosanas-par-ires-izbeigsanu'], tip: 'Īrnieks var atkāpties ar mēneša brīdinājumu.' },
          { text: 'Izīrēju istabu tālāk', dokumenty: ['apakssires-ligums'], tip: 'Ar izīrētāja rakstveida piekrišanu.' },
        ],
      },
      {
        nazev: 'Pirkumi un formalitātes',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Vēlos atgriezt pirkumu internetā', dokumenty: ['atteikuma-veidlapa'], tip: '14 dienas no preces saņemšanas.' },
          { text: 'Precei ir defekts', dokumenty: ['pretenzija'], tip: 'Pārdevējs atbild 2 gadus no piegādes.' },
          { text: 'Pārdodu lietotu lietu', dokumenty: ['pirkuma-ligums'] },
          { text: 'Kādam kaut kas jākārto manā vietā', dokumenty: ['pilnvara'] },
          { text: 'Izbeidzu abonementu, apdrošināšanu vai sporta klubu', dokumenty: ['liguma-uzteikums'] },
          { text: 'Aizdodu lietu draugam', dokumenty: ['patapinajuma-ligums'] },
        ],
      },
      {
        nazev: 'Darbs, meistari un ģimene',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Pasūtu darbu meistaram', dokumenty: ['uznemuma-ligums'] },
          { text: 'Aizeju no darba', dokumenty: ['darba-liguma-uzteikums'], tip: 'Rakstveidā vienu mēnesi iepriekš.' },
          { text: 'Bērns ceļo bez manis', dokumenty: ['vecaka-piekrisana-berna-celojumam'], tip: 'Pietiek ar viena vecāka piekrišanu; ārpus Šengenas – pie notāra.' },
          { text: 'Vajadzīgs rakstveida apliecinājums', dokumenty: ['apliecinajums'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Līgumu paraugi bez maksas PDF formātā – aizpildiet tiešsaistē',
    description: 'Bezmaksas līgumu paraugi pēc Latvijas tiesībām: auto pirkuma līgums, aizdevuma līgums, dāvinājuma līgums, īres līgums, pilnvara. Tiešsaistē, PDF vai Word.',
    stitek: 'Latvija',
    stitekSpan: 'līgumi pēc Latvijas tiesībām',
    h1: 'Līgumu paraugi',
    h1Span: 'Aizpildiet tiešsaistē dažās minūtēs vai lejupielādējiet tukšu veidlapu. Arī Word formātā, bez reģistrācijas.',
    hledaniNadpis: 'Kāds līgums jums vajadzīgs?',
    hledaniSpan: 'Meklējiet pēc situācijas, nevis pēc likuma pantiem.',
    ogPopis: 'Pēc Latvijas tiesībām. Aizpildiet tiešsaistē.',
  },
};
