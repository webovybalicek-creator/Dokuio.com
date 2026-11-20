/**
 * Hivatalos források a magyar mintákhoz (Nemzeti Jogszabálytár, kormányzati oldalak).
 * Ověřeno 19. 11. 2026 na njt.jog.gov.hu: Pp. 325. § (1) b), Kknyt. 33. §, 304/2009. Korm. r. 2.–3. §,
 * Itv. 11. § (2), 12. §, 17. § (1) p) w), Ltv. 2. § (5), 45/2014. Korm. r. 20.–24. §, 2. melléklet.
 * Ptk. 6:22, 6:25, 6:159, 6:162, 6:163 – text Ptk. se na NJT nenačetl, ověřeno přes odborné zdroje (Kúria/BH, jogiforum, MNB).
 */
const NJT = (id: string) => `https://njt.jog.gov.hu/jogszabaly/${id}`;

export const PTK = { nazev: 'Polgári Törvénykönyv – 2013. évi V. törvény (Nemzeti Jogszabálytár)', url: NJT('2013-5-00-00') };
export const PP = { nazev: 'Polgári perrendtartás – 2016. évi CXXX. törvény, teljes bizonyító erejű magánokirat (NJT)', url: NJT('2016-130-00-00') };
export const KKNYT = { nazev: 'A közúti közlekedési nyilvántartásról szóló 1999. évi LXXXIV. törvény (NJT)', url: NJT('1999-84-00-00') };
export const ITV = { nazev: 'Az illetékekről szóló 1990. évi XCIII. törvény (NJT)', url: NJT('1990-93-00-00') };
export const KGFB = { nazev: 'A kötelező gépjármű-felelősségbiztosításról szóló 2009. évi LXII. törvény (NJT)', url: NJT('2009-62-00-00') };
export const FOGY_RENDELET = { nazev: '45/2014. (II. 26.) Korm. rendelet – távollévők közötti szerződések, elállás (NJT)', url: NJT('2014-45-20-22') };
export const LTV = { nazev: 'A lakások és helyiségek bérletéről szóló 1993. évi LXXVIII. törvény (NJT)', url: NJT('1993-78-00-00') };
export const KORM_304 = { nazev: '304/2009. (XII. 22.) Korm. rendelet – tulajdonjog-változás bejelentése, a magánokirat tartalma (NJT)', url: NJT('2009-304-20-22') };
/*
 * Ověřeno 20. 11. 2026 (NJT): Mt. 22. § (1), (3), 24. §, 44. §, 64. § (1), 65. § (1), 67. § (1)–(2), 68. § (1), 69. § (1), (3),
 * 70. § (1), 80. §, 81. § (1); Eht. 127. § (4b)–(4c), 132. § (5), 134. § (1), (14)–(15a), (17); Kgfb. 7. § (1), (1a), (4).
 * Kiskorú utazása: e-justice (Magyarország, frissítve 2024. 01. 15.) – rövid utazáshoz a másik szülő hozzájárulása
 * a magyar jog szerint nem kell, huzamos tartózkodáshoz/letelepedéshez igen (vita esetén gyámhivatal).
 */
export const MT = { nazev: 'A munka törvénykönyvéről szóló 2012. évi I. törvény (NJT)', url: NJT('2012-1-00-00') };
export const EHT = { nazev: 'Az elektronikus hírközlésről szóló 2003. évi C. törvény (NJT)', url: NJT('2003-100-00-00') };
export const EJUSTICE_GYERMEK = {
  nazev: 'Európai e-igazságügyi portál – A gyermekek jogszerű külföldre vitele, Magyarország',
  url: 'https://e-justice.europa.eu/pdf-export/2454_hu',
};
export const KONZINFO_ORSZAGOK = {
  nazev: 'Konzuli Szolgálat (Külügyminisztérium) – utazási tanácsok országonként',
  url: 'https://konzinfo.mfa.gov.hu/utazas/utazasi-tanacsok-orszagonkent',
};
export const KORMANYABLAK ={ nazev: 'Kormányablak – ügyintézés (kormanyablak.hu)', url: 'https://kormanyablak.hu/' };
export const NAV = { nazev: 'Nemzeti Adó- és Vámhivatal (nav.gov.hu)', url: 'https://nav.gov.hu/' };

export const TIP_SZEMELYAZONOSSAG = 'Ellenőrizze a másik fél személyazonosságát igazolvánnyal, és a nevet pontosan úgy írja be, ahogy az okmányban szerepel.';
export const TIP_KESZPENZ = 'A készpénzt aláíráskor számolja meg; nagyobb összeget inkább utaljon – a banki terhelési értesítő a legjobb bizonyíték.';
export const TIP_TANUK = 'Két tanú aláírásával (nevük és lakcímük feltüntetésével) az okirat teljes bizonyító erejű magánokirat lesz – a forgalmi átíráshoz ez kell. Tanú nem lehet a szerződő fél.';
