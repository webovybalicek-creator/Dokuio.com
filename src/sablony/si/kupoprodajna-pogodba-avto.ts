/**
 * Kupoprodajna pogodba za rabljeno motorno vozilo – Slovenija, med fizičnimi osebami. OZ (prodajna pogodba, pridržek lastninske pravice).
 * Zakon o motornih vozilih: sprememba lastništva se v 15 dneh prijavi registracijski organizaciji; ta ugotovi istovetnost strank
 * ali se šteje za ugotovljeno z overitvijo podpisa. MzI svetuje, naj prodajalec vozila z dokumenti ne preda pred prepisom.
 */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { OZ, MZI_PRENOS, NOTARSKA_TARIFA, NASVET_IDENTITETA, NASVET_GOTOVINA, NOGA } from './viri';

export const kupoprodajnaPogodbaAvto: Sablona = {
  kod: 'SI-AVTO',
  verze: '1.0',
  aktualizovano: '2026-11-21',
  overeno: '2026-11-21',
  zeme: 'si',
  jazyk: 'sl',
  nazev: 'Kupoprodajna pogodba za motorno vozilo',
  podnadpis: 'sklenjena po določbah Obligacijskega zakonika o prodajni pogodbi',
  souborPdf: 'kupoprodajna-pogodba-avto',
  paticka: NOGA('SI-AVTO'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodajalec', vpravo: 'kupec' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: [
    'Natisnite pogodbo v dveh izvodih (po enega za vsako stranko) in oba podpišite.',
    'Spremembo lastništva uredite pri upravni enoti ali izvajalcu tehničnih pregledov – najbolje skupaj, še preden prodajalec izroči vozilo z dokumenti.',
    'Rok za prijavo spremembe lastništva je 15 dni.',
    'Prodajalec: obvestite zavarovalnico o prodaji.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    if (!od) return [];
    return [{ nazev: 'Prijava spremembe lastništva vozila', datum: isoDatum(pridejDny(od, 15)), popis: 'Rok 15 dni za prijavo spremembe lastništva registracijski organizaciji.' }];
  },
  kontrola: [
    'Prodajalec je kot lastnik vpisan v prometno dovoljenje – primerjajte podatke z osebno izkaznico.',
    'Identifikacijska številka vozila (VIN) v prometnem dovoljenju se mora ujemati s številko na vozilu.',
    'Vozilo ne sme biti na lizingu ali zastavljeno – sicer prodajalec z njim ne more prosto razpolagati.',
    'Spremembo lastništva je treba v 15 dneh prijaviti registracijski organizaciji. Ministrstvo za infrastrukturo svetuje, naj prodajalec vozila z dokumenti ne preda, dokler prepis ni opravljen ([gov.si](https://www.gov.si/novice/2024-02-06-pri-prodaji-vozila-je-treba-urediti-tudi-prenos-lastnistva-novemu-lastniku/)).',
    'Če prepis ureja le ena stranka, naj ima pogodbo z overjenim podpisom druge – overitev pri notarju stane največ 10 €.',
    'Vpišite datum in uro izročitve: s tem prodajalec dokaže, od kdaj vozila ni več imel.',
    NASVET_IDENTITETA,
    NASVET_GOTOVINA,
  ],
  zdroje: [OZ, MZI_PRENOS, NOTARSKA_TARIFA],

  kroky: [
    {
      id: 'stranki',
      nazev: 'Prodajalec in kupec',
      popis: 'Podatki po osebni izkaznici. Davčna številka je potrebna pri prepisu.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodajalec – ime in priimek', napoveda: 'Lastnik, vpisan v prometnem dovoljenju.', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
        { id: 'p_davcna', typ: 'text', popis: 'Davčna številka prodajalca', napoveda: '8 številk.', placeholder: 'npr. 12345678', sirka: 12, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Naslov prodajalca', placeholder: 'npr. Slovenska cesta 10, 1000 Ljubljana', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupec – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
        { id: 'k_davcna', typ: 'text', popis: 'Davčna številka kupca', placeholder: 'npr. 87654321', sirka: 12, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Naslov kupca', placeholder: 'npr. Glavni trg 5, 2000 Maribor', sirka: 46 },
      ],
    },
    {
      id: 'vozilo',
      nazev: 'Vozilo',
      popis: 'Podatke prepišite iz prometnega dovoljenja.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Znamka in tip', napoveda: 'Polji D.1 in D.3 v prometnem dovoljenju.', placeholder: 'npr. Renault Clio', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Identifikacijska številka (VIN)', napoveda: '17 znakov, polje E v prometnem dovoljenju.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Registrska oznaka', placeholder: 'npr. LJ AB-123', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Leto izdelave', placeholder: 'npr. 2018', sirka: 8, polovina: true },
        { id: 'barva', typ: 'text', popis: 'Barva', placeholder: 'npr. siva kovinska', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stanje števca kilometrov', napoveda: 'Odčitajte na dan podpisa.', placeholder: 'npr. 154320', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'napake',
          typ: 'volba',
          popis: 'Znane napake',
          napoveda: 'Odkrito navedite, kar veste – za napake, ki jih je kupec poznal, prodajalec pozneje ne odgovarja.',
          moznosti: [
            { hodnota: 'ne', popis: 'Prodajalcu napake niso znane' },
            { hodnota: 'da', popis: 'Vozilo ima znane napake' },
          ],
        },
        { id: 'napake_opis', typ: 'textarea', popis: 'Opis napak', placeholder: 'npr. počeno vetrobransko steklo, klimatska naprava ne deluje', sirka: 64, zobrazitKdyz: { pole: 'napake', je: 'da' } },
      ],
    },
    {
      id: 'cena',
      nazev: 'Kupnina in plačilo',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kupnina (€)', napoveda: 'Znesek z besedo bomo dopisali sami.', placeholder: 'npr. 9500', sirka: 14, polovina: true },
        {
          id: 'placilo',
          typ: 'volba',
          popis: 'Način plačila',
          moznosti: [
            { hodnota: 'gotovina', popis: 'Z gotovino ob podpisu' },
            { hodnota: 'racun', popis: 'Na račun prodajalca' },
          ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN prodajalca', placeholder: 'SI56 0000 0000 0000 000', sirka: 30, zobrazitKdyz: { pole: 'placilo', je: 'racun' } },
        { id: 'rok_placila', typ: 'datum', popis: 'Plačilo najpozneje do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'placilo', je: 'racun' } },
      ],
    },
    {
      id: 'izrocitev',
      nazev: 'Izročitev in podpis',
      pole: [
        { id: 'izrocitev_datum', typ: 'datum', popis: 'Datum izročitve vozila', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'izrocitev_ura', typ: 'text', popis: 'Ura izročitve', napoveda: 'Pomembno, če pozneje pride kazen za prekršek.', placeholder: 'npr. 14:30', sirka: 8, polovina: true },
        { id: 'kljuci', typ: 'cislo', popis: 'Število ključev', placeholder: 'npr. 2', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Kraj podpisa', placeholder: 'npr. Ljubljana', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisa', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_z_besedo: (d) => znesekZBesedo(d.cena) },

  clanky: [
    {
      nadpis: 'Pogodbeni stranki',
      vysvetleni: 'Kdo sklepa pogodbo. Podatki se morajo ujemati z osebnima izkaznicama.',
      odstavce: [
        '**Prodajalec:** {{p_jmeno}}, davčna številka {{p_davcna}}, naslov {{p_adresa}}',
        '**Kupec:** {{k_jmeno}}, davčna številka {{k_davcna}}, naslov {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Predmet pogodbe',
      vysvetleni: 'Katero vozilo se prodaja. Najpomembnejša je identifikacijska številka.',
      odstavce: [
        'Prodajalec prodaja, kupec pa kupuje motorno vozilo znamke in tipa {{znacka}}, identifikacijska številka (VIN) {{vin}}, registrska oznaka {{spz}}, leto izdelave {{rok}}, barva {{barva}} (v nadaljevanju: vozilo).',
        'Prodajalec izjavlja, da je edini lastnik vozila in da vozilo ni obremenjeno s pravicami tretjih oseb, zlasti da ni predmet lizinga ali zastavne pravice.',
      ],
    },
    {
      nadpis: 'Stanje vozila',
      vysvetleni: 'Kaj prodajalec ve o vozilu.',
      odstavce: [
        'Stanje števca kilometrov na dan podpisa pogodbe je {{km}} km. Prodajalcu ni znano, da bi bil števec zamenjan ali vrnjen nazaj.',
        {
          volba: 'napake',
          uvodVzor: 'Znane napake (označite eno možnost):',
          moznosti: {
            ne: 'Prodajalcu napake vozila niso znane.',
            da: 'Prodajalec je kupca opozoril na naslednje napake vozila: {{napake_opis}}',
          },
        },
        'Kupec izjavlja, da je vozilo pregledal, da mu je njegovo stanje znano in da ga kupuje v takšnem stanju.',
      ],
    },
    {
      nadpis: 'Kupnina in plačilo',
      vysvetleni: 'Koliko, kako in do kdaj. Lastninska pravica preide šele s plačilom celotne kupnine.',
      odstavce: [
        'Kupnina za vozilo znaša **{{cena}}** (z besedo: {{cena_z_besedo}}).',
        {
          volba: 'placilo',
          uvodVzor: 'Način plačila (označite eno možnost):',
          moznosti: {
            gotovina: 'Kupec je kupnino plačal z gotovino ob podpisu te pogodbe. Prodajalec s podpisom potrjuje prejem celotnega zneska.',
            racun: 'Kupec bo kupnino plačal na račun prodajalca IBAN {{iban}} najpozneje do {{rok_placila}}.',
          },
        },
        'Prodajalec si pridržuje lastninsko pravico na vozilu do plačila celotne kupnine.',
      ],
    },
    {
      nadpis: 'Izročitev vozila',
      vysvetleni: 'Kdaj in s čim kupec prevzame vozilo.',
      odstavce: [
        'Prodajalec izroči kupcu vozilo dne {{izrocitev_datum}} ob {{izrocitev_ura}}, skupaj s {{kljuci}} ključi, prometnim dovoljenjem in drugo dokumentacijo vozila.',
        'Z izročitvijo vozila preide na kupca nevarnost uničenja in poškodovanja vozila. Od tega trenutka kupec odgovarja za uporabo vozila, vključno s prometnimi prekrški.',
      ],
    },
    {
      nadpis: 'Sprememba lastništva in stroški',
      vysvetleni: 'Kdo kaj uredi pri registracijski organizaciji in kdo plača.',
      odstavce: [
        'Stranki bosta spremembo lastništva vozila prijavili registracijski organizaciji najpozneje v 15 dneh od sklenitve te pogodbe. Prodajalec bo pri tem sodeloval oziroma bo kupcu izročil pogodbo z overjenim podpisom.',
        'Stroške spremembe lastništva in registracije nosi kupec.',
      ],
    },
    {
      nadpis: 'Končne določbe',
      vysvetleni: 'Formalnosti.',
      odstavce: [
        'Za vse, kar ni urejeno s to pogodbo, se uporabljajo določbe Obligacijskega zakonika.',
        'Pogodba je sestavljena v dveh enakih izvodih, od katerih vsaka stranka prejme enega. Stranki sta pogodbo prebrali, jo razumeli in jo v znak strinjanja podpisali.',
      ],
    },
  ],
};
