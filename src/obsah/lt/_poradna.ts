import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'patarimai',
  nazev: 'Patarimai',
  title: 'Patarimai – automobilio pardavimas, paskola, nuoma ir pirkiniai',
  description: 'Vadovai žingsnis po žingsnio: automobilio pardavimas ir Regitra, paskola draugui, dovanojimas, buto nuoma, pirkinio grąžinimas ir garantija. Su nemokamais pavyzdžiais.',
  h1: 'Patarimai',
  h1Span: 'Vadovai žingsnis po žingsnio kasdienėms situacijoms. Be sudėtingos teisinės kalbos, pagal galiojančią teisę.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Transporto priemonės',
      popis: 'Naudoto automobilio pardavimas ir pirkimas, savininko pasikeitimas.',
      ilustrace: 'auto',
      temata: [
        { slug: 'automobilio-pardavimas', nazev: 'Automobilio pardavimas', popis: 'Sutartis, atsiskaitymas ir perdavimas.' },
        { slug: 'automobilio-pirkimas', nazev: 'Naudoto automobilio pirkimas', popis: 'Ką patikrinti prieš mokant.' },
        { slug: 'regitra', nazev: 'Savininko pasikeitimas', popis: 'Regitra, SDK, 5 darbo dienos.' },
      ],
    },
    {
      slug: 'nauda',
      nazev: 'Pinigai ir dovanos',
      popis: 'Paskola draugui, skolos pripažinimas, senatis, dovanojimas.',
      ilustrace: 'penize',
      temata: [
        { slug: 'paskola', nazev: 'Paskola', popis: 'Kaip paskolinti pinigus ir juos atgauti.' },
        { slug: 'skolos', nazev: 'Skolos', popis: 'Raginimas, pripažinimas, grąžinimas, senatis.' },
        { slug: 'dovanojimas', nazev: 'Dovanojimas', popis: 'Forma ir mokesčiai.' },
      ],
    },
    {
      slug: 'majoklis',
      nazev: 'Būstas ir nuoma',
      popis: 'Buto nuoma, užstatas, nutraukimas ir perdavimas.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'nuoma', nazev: 'Nuomos sutartis', popis: 'Sutartis, užstatas, mokėjimai.' },
        { slug: 'nuomos-pabaiga', nazev: 'Nuomos pabaiga', popis: 'Nutraukimas, perdavimas, užstatas.' },
      ],
    },
    {
      slug: 'pirkumi',
      nazev: 'Pirkiniai ir garantija',
      popis: 'Pirkinio internetu atsisakymas, prekė su trūkumu, pardavimas pagal skelbimą.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'atsisakymas', nazev: 'Sutarties atsisakymas', popis: '14 dienų be priežasties.' },
        { slug: 'garantija', nazev: 'Garantija', popis: 'Taisymas, pakeitimas, pinigų grąžinimas.' },
        { slug: 'skelbimas', nazev: 'Pardavimas pagal skelbimą', popis: 'Sutartis, atsiskaitymas ir sukčiai.' },
        { slug: 'panauda', nazev: 'Daikto paskolinimas', popis: 'Neatlygintinas naudojimasis ir pažeidimai.' },
      ],
    },
    {
      slug: 'pakalpojumi',
      nazev: 'Meistrai ir užsakymai',
      popis: 'Sutartis su meistru, vėlavimas, trūkumai ir kaina.',
      ilustrace: 'protokol',
      temata: [{ slug: 'meistrai', nazev: 'Meistrai', popis: 'Rangos sutartis, terminas ir trūkumai.' }],
    },
    {
      slug: 'darbs',
      nazev: 'Darbas',
      popis: 'Darbuotojo pareiškimas ir galutinis atsiskaitymas.',
      ilustrace: 'protokol',
      temata: [{ slug: 'isejimas-is-darbo', nazev: 'Išėjimas iš darbo', popis: 'Pareiškimas ir 20 dienų įspėjimas.' }],
    },
    {
      slug: 'gimene',
      nazev: 'Šeima ir kelionės',
      popis: 'Vaiko kelionė be tėvų ir tėvų sutikimas.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'vaiko-kelione', nazev: 'Vaiko kelionė', popis: 'Sutikimas, notaras už Šengeno erdvės.' }],
    },
    {
      slug: 'igaliojimas',
      nazev: 'Įgaliojimai ir deklaracijos',
      popis: 'Kai kas nors kitas veikia jūsų vardu.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'igaliojimas', nazev: 'Įgaliojimas', popis: 'Paprastas ar notarinis.' }],
    },
  ],
};
