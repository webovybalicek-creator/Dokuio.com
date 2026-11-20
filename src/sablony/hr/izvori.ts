/**
 * Službeni izvori za hrvatske obrasce. Provjereno 20. 11. 2026 (Narodne novine, gov.hr, Porezna uprava):
 * ZOO čl. 482 (oblik darovanja – nekretnina pisano, bez prave predaje JB akt/solemnizacija), Zakon o najmu stanova
 * čl. 4 st. 2 (pisani oblik), čl. 5 (sadržaj), otkaz najmodavca pisano, otkazni rok 3 mjeseca od 1. dana sljedećeg mjeseca;
 * najmoprimac otkazuje najam na neodređeno vrijeme najmanje 3 mjeseca prije iseljenja; ZZP (NN 19/22, 59/23, 59/26):
 * jednostrani raskid 14 dana, odgovor na pisani prigovor 15 dana; gov.hr reklamacija: obavijest 2 mjeseca od otkrivanja,
 * odgovornost 2 godine (rabljeno 1 godina ugovorom); Porezna uprava: upravna pristojba pri stjecanju rabljenog vozila
 * plaća kupac na STP, potpis prodavatelja ne treba ovjeravati; porez na nasljedstva i darove 4 %, pokretnine iznad
 * 6.700 €, oslobođeni bračni drug, potomci, preci, posvojenici/posvojitelji.
 */
export const ZOO = { nazev: 'Zakon o obveznim odnosima (Narodne novine 35/05 i izmjene)', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2005_03_35_707.html' };
export const ZNS = { nazev: 'Zakon o najmu stanova (Narodne novine 91/96 i izmjene)', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/1996_10_91_1598.html' };
export const ZZP = { nazev: 'Zakon o zaštiti potrošača (Narodne novine 19/22, 59/23, 59/26)', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2022_02_19_203.html' };
export const GOV_NAJAM = { nazev: 'Najam nekretnine (gov.hr)', url: 'https://gov.hr/hr/najam-nekretnine/1292' };
export const GOV_REKLAMACIJA = { nazev: 'Reklamacija robe s nedostatkom (gov.hr)', url: 'https://www.gov.hr/hr/reklamacija-proizvoda-i-usluga-s-nedostatkom/548' };
export const PU_RABLJENO_VOZILO = { nazev: 'Stjecanje rabljenog motornog vozila – upravna pristojba (Porezna uprava)', url: 'https://porezna-uprava.gov.hr/hr/kupac-u-tuzemstvu-rabljenog-motornog-vozila/4468' };
export const PU_DAROVI = { nazev: 'Porez na nasljedstva i darove – gotovina i pokretnine (Porezna uprava)', url: 'https://porezna-uprava.gov.hr/hr/nasljednik-i-daroprimatelj-gotovine-novcane-trazbine-vrijednosnog-papira-i-pokretnine/4445' };
export const GOV_POREZ_DAROVI = { nazev: 'Porez na nasljedstva i darove (gov.hr)', url: 'https://www.gov.hr/hr/porez-na-nasljedstva-i-darove/1462' };
export const PRAVILNIK_RASKID = { nazev: 'Pravilnik o obavijesti o pravu na jednostrani raskid ugovora sklopljenih na daljinu (NN 117/22)', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2022_10_117_1795.html' };

export const SAVJET_IDENTITET = 'Provjerite identitet druge strane prema osobnoj iskaznici i ime te OIB prepišite točno kako stoje u ispravi.';
export const SAVJET_GOTOVINA = 'Gotovinu prebrojite pri potpisu; veće iznose radije platite na račun – bankovna potvrda najbolji je dokaz.';
export const PATICKA = (kod: string) =>
  `Izrađeno besplatno · predložak ${kod} v1.0 · obrazac za ispunjavanje, nije pravni savjet · za sadržaj odgovaraju strane, preporučujemo provjeru kod odvjetnika`;
export const ZR = { nazev: 'Zakon o radu (Narodne novine 93/14 i izmjene) – otkaz i otkazni rok, čl. 122.', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2014_07_93_1872.html' };
export const GOV_OTKAZ = { nazev: 'Redoviti otkaz (gov.hr)', url: 'https://www.gov.hr/hr/redoviti-otkaz/840' };
export const EU_MALOLJETNICI = { nazev: 'Dokumenti za maloljetne osobe koje putuju u EU-u (Your Europe)', url: 'https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/croatia/index_hr.htm' };
