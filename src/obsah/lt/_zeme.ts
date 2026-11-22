import type { Zeme } from '../typy';

/**
 * Lietuva. Pavyzdžiai patikrinti 2026-11-22 pagal Civilinį kodeksą, Darbo kodeksą, Atsiskaitymų grynaisiais pinigais ribojimo
 * įstatymą, Regitrą, VMI, Your Europe ir e-justice (žr. src/sablony/lt/saltiniai.ts).
 */
export const zeme: Zeme = {
  kod: 'lt',
  nazev: 'Lietuva',
  nazevEn: 'Lithuania',
  jazyk: 'lt',
  hreflang: 'lt-LT',
  casovaZona: 'Europe/Vilnius',
  aktivni: true,
  poradi: 15,
  kategorie: { auto: 'Transporto priemonės', nauda: 'Pinigai ir dovanos', majoklis: 'Būstas ir nuoma', pirkumi: 'Pirkiniai ir formalumai', pakalpojumi: 'Meistrai ir užsakymai', darbs: 'Darbas', gimene: 'Šeima ir kelionės' },
  skupiny: {
    auto: [
      { slug: 'automobilio-pirkimo-pardavimo-sutartis', popis: 'Naudoto automobilio pardavimas tarp fizinių asmenų.' },
      { slug: 'automobilio-perdavimo-aktas', popis: 'Rida, pažeidimai, rakteliai ir perdavimo laikas.' },
      { slug: 'igaliojimas', popis: 'Jei veiksmus atlieka kitas asmuo.' },
      { slug: 'pinigu-gavimo-pakvitavimas', popis: 'Mokėjimo grynaisiais patvirtinimas.' },
      { slug: 'motociklo-pirkimo-pardavimo-sutartis', popis: 'Motociklas, motoroleris ar keturratis.' },
    ],
    nauda: [
      { slug: 'paskolos-sutartis', popis: 'Paskola draugui ar giminaičiui, ir dalimis.' },
      { slug: 'pinigu-gavimo-pakvitavimas', popis: 'Gautų pinigų patvirtinimas.' },
      { slug: 'skolos-pripazinimas', popis: 'Skolininkas raštu pripažįsta skolą.' },
      { slug: 'dovanojimo-sutartis', popis: 'Pinigų ar daikto dovanojimas.' },
      { slug: 'raginimas-sumoketi', popis: 'Raginimas skolininkui su terminu.' },
      { slug: 'susitarimas-del-skolos-grazinimo', popis: 'Skolos mokėjimas mėnesinėmis įmokomis.' },
    ],
    majoklis: [
      { slug: 'buto-nuomos-sutartis', popis: 'Buto nuoma su užstatu.' },
      { slug: 'buto-perdavimo-aktas', popis: 'Skaitiklių rodmenys, raktai ir būklė.' },
      { slug: 'pranesimas-apie-nuomos-nutraukima', popis: 'Nuomininkas nutraukia nuomą prieš mėnesį.' },
      { slug: 'susitarimas-nutraukti-nuoma', popis: 'Nuomos pabaiga šalių susitarimu.' },
      { slug: 'subnuomos-sutartis', popis: 'Kambarys ar butas iš nuomininko.' },
    ],
    pirkumi: [
      { slug: 'pirkimo-pardavimo-sutartis', popis: 'Naudoto daikto pardavimas pagal skelbimą.' },
      { slug: 'sutarties-atsisakymo-forma', popis: 'Pirkinio internetu grąžinimas per 14 dienų.' },
      { slug: 'pretenzija', popis: 'Prekės trūkumas, 2 metų atsakomybė.' },
      { slug: 'igaliojimas', popis: 'Jei kas nors kitas ką nors tvarko už jus.' },
      { slug: 'pranesimas-apie-sutarties-nutraukima', popis: 'Telefonas, internetas, draudimas, sporto klubas.' },
      { slug: 'panaudos-sutartis', popis: 'Daikto perdavimas neatlygintinai naudotis.' },
      { slug: 'deklaracija', popis: 'Rašytinis patvirtinimas įstaigai ar bankui.' },
    ],
    pakalpojumi: [
      { slug: 'rangos-sutartis', popis: 'Meistras, remontas, renovacija.' },
      { slug: 'raginimas-sumoketi', popis: 'Jei klientas nemoka.' },
    ],
    darbs: [{ slug: 'pareiskimas-del-darbo-sutarties-nutraukimo', popis: 'Išėjimas iš darbo, įspėjus prieš 20 dienų.' }],
    gimene: [{ slug: 'tevu-sutikimas-del-vaiko-keliones', popis: 'Vaikas keliauja be tėvų.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'automobilio-pardavimas',
      nazev: 'Automobilio pardavimas',
      popis: 'Pirkimo–pardavimo sutartis, perdavimo aktas ir pinigų gavimo pakvitavimas.',
      ilustrace: 'auto',
      dokumenty: ['automobilio-pirkimo-pardavimo-sutartis', 'automobilio-perdavimo-aktas', 'pinigu-gavimo-pakvitavimas'],
      title: 'Automobilio pardavimas – dokumentai viename PDF, pavyzdys nemokamai',
      description: 'Viskas naudoto automobilio pardavimui: pirkimo–pardavimo sutartis, perdavimo aktas su laiku ir pinigų gavimo pakvitavimas. Nemokamai, PDF ir Word.',
      perex: 'Užpildykite pirkimo–pardavimo sutartį, o kiti dokumentai perims duomenis. Tada atsisiųskite viską iš karto viename PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Nežinote, kokio dokumento reikia?',
    span: 'Pasirinkite situaciją ir parodysime, ko reikia.',
    situace: [
      {
        nazev: 'Transporto priemonė',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Parduodu ar perku naudotą automobilį', dokumenty: ['automobilio-pirkimo-pardavimo-sutartis', 'automobilio-perdavimo-aktas'], balicek: 'automobilio-pardavimas', tip: 'Regitra: pirkėjas deklaruoja per 5 darbo dienas, pardavėjas patvirtina per 5 darbo dienas.' },
          { text: 'Skolinu savo automobilį', dokumenty: ['automobilio-perdavimo-aktas', 'panaudos-sutartis'] },
          { text: 'Parduodu motociklą ar motorolerį', dokumenty: ['motociklo-pirkimo-pardavimo-sutartis', 'automobilio-perdavimo-aktas'] },
        ],
      },
      {
        nazev: 'Pinigai',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Skolinu pinigus', dokumenty: ['paskolos-sutartis', 'pinigu-gavimo-pakvitavimas'], tip: 'Virš 600 € paskolos sutartis turi būti rašytinė.' },
          { text: 'Duodu ar gaunu grynuosius', dokumenty: ['pinigu-gavimo-pakvitavimas'], tip: 'Grynaisiais – ne daugiau kaip 5 000 € pagal sandorį.' },
          { text: 'Kažkas man skolingas', dokumenty: ['raginimas-sumoketi', 'skolos-pripazinimas', 'susitarimas-del-skolos-grazinimo'], tip: 'Skolos pripažinimas nutraukia ieškinio senatį.' },
          { text: 'Dovanoju pinigus ar daiktą', dokumenty: ['dovanojimo-sutartis'], tip: 'Dovanos iš artimų giminaičių neapmokestinamos.' },
        ],
      },
      {
        nazev: 'Būstas',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Išnuomoju butą ar namą', dokumenty: ['buto-nuomos-sutartis', 'buto-perdavimo-aktas'] },
          { text: 'Noriu nutraukti nuomos sutartį', dokumenty: ['pranesimas-apie-nuomos-nutraukima', 'susitarimas-nutraukti-nuoma'], tip: 'Nuomininkas gali nutraukti įspėjęs prieš mėnesį.' },
          { text: 'Subnuomoju kambarį', dokumenty: ['subnuomos-sutartis'], tip: 'Su rašytiniu nuomotojo sutikimu.' },
        ],
      },
      {
        nazev: 'Pirkiniai ir formalumai',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Noriu grąžinti pirkinį internetu', dokumenty: ['sutarties-atsisakymo-forma'], tip: '14 dienų nuo prekės gavimo.' },
          { text: 'Prekė turi trūkumą', dokumenty: ['pretenzija'], tip: 'Pardavėjas atsako 2 metus nuo pristatymo.' },
          { text: 'Parduodu naudotą daiktą', dokumenty: ['pirkimo-pardavimo-sutartis'] },
          { text: 'Kas nors turi ką nors sutvarkyti už mane', dokumenty: ['igaliojimas'] },
          { text: 'Nutraukiu prenumeratą, draudimą ar sporto klubą', dokumenty: ['pranesimas-apie-sutarties-nutraukima'] },
          { text: 'Skolinu daiktą draugui', dokumenty: ['panaudos-sutartis'] },
        ],
      },
      {
        nazev: 'Darbas, meistrai ir šeima',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Užsakau darbus meistrui', dokumenty: ['rangos-sutartis'] },
          { text: 'Išeinu iš darbo', dokumenty: ['pareiskimas-del-darbo-sutarties-nutraukimo'], tip: 'Raštu, ne vėliau kaip prieš 20 kalendorinių dienų.' },
          { text: 'Vaikas keliauja be manęs', dokumenty: ['tevu-sutikimas-del-vaiko-keliones'], tip: 'Už Šengeno erdvės – notaro patvirtintas sutikimas.' },
          { text: 'Reikia rašytinio patvirtinimo', dokumenty: ['deklaracija'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Sutarčių pavyzdžiai nemokamai PDF formatu – pildykite internetu',
    description: 'Nemokami sutarčių pavyzdžiai pagal Lietuvos teisę: automobilio pirkimo–pardavimo, paskolos, dovanojimo, buto nuomos sutartis, įgaliojimas. Internetu, PDF ar Word.',
    stitek: 'Lietuva',
    stitekSpan: 'sutartys pagal Lietuvos teisę',
    h1: 'Sutarčių pavyzdžiai',
    h1Span: 'Užpildykite internetu per kelias minutes arba atsisiųskite tuščią formą. Ir Word formatu, be registracijos.',
    hledaniNadpis: 'Kokios sutarties jums reikia?',
    hledaniSpan: 'Ieškokite pagal situaciją, o ne pagal įstatymų straipsnius.',
    ogPopis: 'Pagal Lietuvos teisę. Pildykite internetu.',
  },
};
