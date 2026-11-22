import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'padomi',
  nazev: 'Padomi',
  title: 'Padomi – auto pārdošana, aizdevums, īre un pirkumi',
  description: 'Ceļveži soli pa solim: auto pārdošana un īpašnieka maiņa, aizdevums starp draugiem, dāvinājums, dzīvokļa īre, pirkuma atgriešana un garantija. Ar bezmaksas paraugiem.',
  h1: 'Padomi',
  h1Span: 'Ceļveži soli pa solim ikdienas situācijām. Bez sarežģītas juridiskās valodas, pēc spēkā esošajām tiesībām.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Transportlīdzekļi',
      popis: 'Lietota auto pārdošana un pirkšana, īpašnieka maiņa.',
      ilustrace: 'auto',
      temata: [
        { slug: 'auto-pardosana', nazev: 'Auto pārdošana', popis: 'Līgums, samaksa un nodošana.' },
        { slug: 'auto-pirksana', nazev: 'Lietota auto pirkšana', popis: 'Kas jāpārbauda pirms samaksas.' },
        { slug: 'ipasnieka-maina', nazev: 'Īpašnieka maiņa', popis: 'e-CSDD, 5 dienas.' },
      ],
    },
    {
      slug: 'nauda',
      nazev: 'Nauda un dāvinājumi',
      popis: 'Aizdevums starp draugiem, parāda atzīšana, noilgums, dāvinājums.',
      ilustrace: 'penize',
      temata: [
        { slug: 'aizdevums', nazev: 'Aizdevums', popis: 'Kā aizdot naudu un to atgūt.' },
        { slug: 'paradi', nazev: 'Parādi', popis: 'Pieprasījums, atzīšana, atmaksa, noilgums.' },
        { slug: 'davinajums', nazev: 'Dāvinājums', popis: 'Forma un nodokļi.' },
      ],
    },
    {
      slug: 'majoklis',
      nazev: 'Mājoklis un īre',
      popis: 'Dzīvokļa īre, drošības nauda, uzteikums un nodošana.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'ire', nazev: 'Īres līgums', popis: 'Līgums, drošības nauda, maksājumi.' },
        { slug: 'ires-beigas', nazev: 'Īres beigas', popis: 'Uzteikums, nodošana, drošības nauda.' },
      ],
    },
    {
      slug: 'pirkumi',
      nazev: 'Pirkumi un garantija',
      popis: 'Atteikums no pirkuma internetā, prece ar defektu, pārdošana pēc sludinājuma.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'atteikums', nazev: 'Atteikums', popis: '14 dienas bez iemesla.' },
        { slug: 'garantija', nazev: 'Garantija', popis: 'Salabošana, apmaiņa, nauda atpakaļ.' },
        { slug: 'sludinajums', nazev: 'Pārdošana pēc sludinājuma', popis: 'Līgums, samaksa un krāpšana.' },
        { slug: 'patapinajums', nazev: 'Lietas aizdošana', popis: 'Bezatlīdzības lietošana un bojājumi.' },
      ],
    },
    {
      slug: 'pakalpojumi',
      nazev: 'Meistari un pasūtījumi',
      popis: 'Līgums ar meistaru, kavējums, trūkumi un atlīdzība.',
      ilustrace: 'protokol',
      temata: [{ slug: 'meistari', nazev: 'Meistari', popis: 'Uzņēmuma līgums, termiņš un trūkumi.' }],
    },
    {
      slug: 'darbs',
      nazev: 'Darbs',
      popis: 'Darbinieka uzteikums un gala norēķins.',
      ilustrace: 'protokol',
      temata: [{ slug: 'aiziesana-no-darba', nazev: 'Aiziešana no darba', popis: 'Uzteikums un tā termiņš.' }],
    },
    {
      slug: 'gimene',
      nazev: 'Ģimene un ceļojumi',
      popis: 'Bērna ceļošana bez vecākiem un vecāka piekrišana.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'berna-celojums', nazev: 'Bērna ceļojums', popis: 'Viena vecāka piekrišana, notārs ārpus Šengenas.' }],
    },
    {
      slug: 'pilnvara',
      nazev: 'Pilnvaras un apliecinājumi',
      popis: 'Ja kāds cits rīkojas jūsu vietā.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'pilnvara', nazev: 'Pilnvara', popis: 'Vienkārša vai notariāla.' }],
    },
  ],
};
