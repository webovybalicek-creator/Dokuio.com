/**
 * Hivatalos források a magyar mintákhoz (Nemzeti Jogszabálytár, kormányzati oldalak).
 * FIGYELEM: a magyar minták még nincsenek a hivatalos forrásokkal szó szerint egyeztetve – az ország
 * addig nem aktív (`aktivni: false` a src/obsah/hu/_zeme.ts-ben).
 */
const NJT = (id: string) => `https://njt.jog.gov.hu/jogszabaly/${id}`;

export const PTK = { nazev: 'Polgári Törvénykönyv – 2013. évi V. törvény (Nemzeti Jogszabálytár)', url: NJT('2013-5-00-00') };
export const PP = { nazev: 'Polgári perrendtartás – 2016. évi CXXX. törvény, teljes bizonyító erejű magánokirat (NJT)', url: NJT('2016-130-00-00') };
export const KKNYT = { nazev: 'A közúti közlekedési nyilvántartásról szóló 1999. évi LXXXIV. törvény (NJT)', url: NJT('1999-84-00-00') };
export const ITV = { nazev: 'Az illetékekről szóló 1990. évi XCIII. törvény (NJT)', url: NJT('1990-93-00-00') };
export const KGFB = { nazev: 'A kötelező gépjármű-felelősségbiztosításról szóló 2009. évi LXII. törvény (NJT)', url: NJT('2009-62-00-00') };
export const FOGY_RENDELET = { nazev: '45/2014. (II. 26.) Korm. rendelet – távollévők közötti szerződések, elállás (NJT)', url: NJT('2014-45-20-22') };
export const LTV = { nazev: 'A lakások és helyiségek bérletéről szóló 1993. évi LXXVIII. törvény (NJT)', url: NJT('1993-78-00-00') };
export const KORMANYABLAK = { nazev: 'Kormányablak – ügyintézés (kormanyablak.hu)', url: 'https://kormanyablak.hu/' };
export const NAV = { nazev: 'Nemzeti Adó- és Vámhivatal (nav.gov.hu)', url: 'https://nav.gov.hu/' };

export const TIP_SZEMELYAZONOSSAG = 'Ellenőrizze a másik fél személyazonosságát igazolvánnyal, és a nevet pontosan úgy írja be, ahogy az okmányban szerepel.';
export const TIP_KESZPENZ = 'A készpénzt aláíráskor számolja meg; nagyobb összeget inkább utaljon – a banki terhelési értesítő a legjobb bizonyíték.';
export const TIP_TANUK = 'Két tanú aláírásával (nevük és lakcímük feltüntetésével) az okirat teljes bizonyító erejű magánokirat lesz – a forgalmi átíráshoz ez kell. Tanú nem lehet a szerződő fél.';
