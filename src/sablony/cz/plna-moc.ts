/**
 * Plná moc (obecná, ke konkrétním úkonům) – Česko. § 441 a násl. OZ.
 * Záměrně ne „generální plná moc na všechno“ – vždy vyjmenovaný rozsah.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, NEPLATNE_DOKLADY } from './zdroje';

export const plnaMoc: Sablona = {
  kod: 'CZ-PLNA-MOC',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Plná moc',
  podnadpis: 'podle § 441 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'plna-moc',
  paticka: 'Vytvořeno zdarma · šablona CZ-PLNA-MOC v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zmocnitel', vpravo: 'zmocněnec – zmocnění přijímám' },
  slovo: { n: 'plná moc', g: 'plné moci', a: 'plnou moc', l: 'plné moci' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Zjistěte, jestli instituce nevyžaduje úředně ověřený podpis nebo vlastní formulář – pak podpis ověřte (Czech POINT, obecní úřad, notář).',
    'Zmocnitel podepíše vlastní rukou, zmocněnec může připsat „zmocnění přijímám“.',
    'Plnou moc předejte zmocněnci; kopii si nechte.',
    'Plnou moc můžete kdykoli odvolat – písemně a ideálně i u instituce, kde se používá.',
  ],
  kontrola: [
    'Rozsah co nejpřesněji – jen úkony, které opravdu potřebujete. Plná moc „na všechno“ je riziková.',
    'Pošta, banka, katastr, registr vozidel nebo soud mohou chtít úředně ověřený podpis nebo vlastní formulář – zeptejte se předem.',
    'Zmocněnci věřte – za úkony v rozsahu plné moci odpovídáte vy jako zmocnitel.',
    'Omezte platnost (do data nebo jednorázově), pokud ji nepotřebujete trvale.',
    'Totožnost zmocněnce podle občanského průkazu. Číslo průkazu lze ověřit v databázi [Neplatné doklady Ministerstva vnitra](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).',
  ],
  zdroje: [OZ, NEPLATNE_DOKLADY],

  kroky: [
    {
      id: 'zmocnitel',
      nazev: 'Kdo plnou moc dává',
      popis: 'Zmocnitel je ten, za koho bude někdo jiný jednat.',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Zmocnitel – jméno a příjmení', napoveda: 'Celé jméno jako v občanském průkazu.', placeholder: 'např. Marie Nováková', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Datum narození zmocnitele', napoveda: 'Úřady obvykle chtějí datum narození, některé i rodné číslo – to klidně dopište rukou.', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa zmocnitele', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'zmocnenec',
      nazev: 'Kdo bude jednat',
      pole: [
        { id: 'm_jmeno', typ: 'text', popis: 'Zmocněnec – jméno a příjmení', napoveda: 'Kdo za vás bude jednat. Prokáže se svým občanským průkazem.', placeholder: 'např. Tomáš Novák', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Datum narození zmocněnce', napoveda: 'Podle občanského průkazu zmocněnce.', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Adresa zmocněnce', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'rozsah',
      nazev: 'K čemu',
      popis: 'Čím přesněji, tím lépe. Úřad i druhá strana pak nemají pochybnosti.',
      pole: [
        {
          id: 'rozsah',
          typ: 'vice',
          popis: 'Zmocněnec smí',
          napoveda: 'Zaškrtněte vše, co potřebujete, a upřesněte níže.',
          moznosti: [
            { hodnota: 'zasilky', popis: 'Přebírat poštovní zásilky' },
            { hodnota: 'urad', popis: 'Jednat s úřadem v konkrétní věci' },
            { hodnota: 'smlouva', popis: 'Podepsat konkrétní smlouvu' },
            { hodnota: 'jine', popis: 'Něco jiného' },
          ],
        },
        { id: 'rozsah_popis', typ: 'textarea', popis: 'Upřesnění', napoveda: 'Např. „u Finančního úřadu v Říčanech ve věci daňového přiznání za rok 2026“ nebo „podepsat nájemní smlouvu k bytu Nerudova 12, Říčany“.', placeholder: 'Ve které věci, u koho, které smlouvy…', sirka: 64 },
        {
          id: 'platnost',
          typ: 'volba',
          popis: 'Jak dlouho platí',
          napoveda: 'Kratší platnost = menší riziko.',
          moznosti: [
            { hodnota: 'ukon', popis: 'Jen pro tento úkon (do jeho vyřízení)' },
            { hodnota: 'datum', popis: 'Do určitého data' },
            { hodnota: 'odvolani', popis: 'Do odvolání' },
          ],
        },
        { id: 'platnost_do', typ: 'datum', popis: 'Platí do', napoveda: 'Poslední den platnosti.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platnost', je: 'datum' } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy zmocnitele.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek. Při ověřování podpisu klidně datum dopište rukou.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zmocnitel',
      vysvetleni: 'Kdo plnou moc dává.',
      odstavce: ['{{z_jmeno}}, datum narození {{z_narozeni}}, trvale bytem {{z_adresa}}'],
    },
    {
      nadpis: 'Zmocněnec',
      vysvetleni: 'Kdo bude za zmocnitele jednat.',
      odstavce: ['{{m_jmeno}}, datum narození {{m_narozeni}}, trvale bytem {{m_adresa}}'],
    },
    {
      nadpis: 'Rozsah zmocnění',
      vysvetleni: 'Přesně co zmocněnec smí. Mimo tento rozsah za zmocnitele jednat nemůže.',
      odstavce: [
        {
          vice: 'rozsah',
          uvod: 'Zmocnitel zmocňuje zmocněnce, aby jej zastupoval a za něj jednal v tomto rozsahu:',
          moznosti: {
            zasilky: 'přebírání poštovních zásilek adresovaných zmocniteli',
            urad: 'jednání s úřadem, podávání žádostí a přebírání písemností ve věci uvedené níže',
            smlouva: 'podpis smlouvy uvedené níže jménem zmocnitele',
            jine: 'další úkony uvedené níže',
          },
        },
        'Upřesnění: {{rozsah_popis}}',
        {
          volba: 'platnost',
          uvodVzor: 'Platnost (zaškrtněte jednu možnost):',
          moznosti: {
            ukon: 'Plná moc platí do vyřízení uvedených úkonů.',
            datum: 'Plná moc platí do {{platnost_do}}.',
            odvolani: 'Plná moc platí do jejího odvolání.',
          },
        },
      ],
    },
  ],
};
