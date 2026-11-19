/**
 * Nájemní smlouva na byt – Česko, pronájem bytu k bydlení mezi soukromými osobami.
 * Podle § 2235 a násl. OZ (zvláštní ustanovení o nájmu bytu), § 2254 (jistota), § 2249 (nájemné),
 * nařízení vlády č. 308/2015 Sb. (drobné opravy). Ověřeno s letákem Veřejného ochránce práv
 * a příručkou Iuridicum Remedium (MMR). Záměrně bez ujednání, která by zkracovala práva nájemce (§ 2235).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, NV_DROBNE_OPRAVY, ZAKON_SLUZBY, OCHRANCE_NAJEM, IURE_PRIRUCKA, TIP_TOTOZNOST } from './zdroje';
import { naDatum, pridejPracovniDny, pridejDny, pridejMesice, isoDatum, cislo, splatkovyKalendar, pripominkySplatek } from '../terminy';

export const najemniSmlouvaByt: Sablona = {
  kod: 'CZ-NAJEM-BYT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.od);
    const konec = d.doba === 'urcita' ? naDatum(d.do) : undefined;
    const den = Math.round(cislo(d.splatnost));
    if (typeof d.predani === 'string' && d.predani) out.push({ nazev: 'Předání bytu a předávací protokol', datum: d.predani });
    if (od && den >= 1 && den <= 31) {
      const prvni = pridejMesice(od, od.getDate() > den ? 1 : 0, den);
      const pocet = konec ? Math.max(1, (konec.getFullYear() - prvni.getFullYear()) * 12 + konec.getMonth() - prvni.getMonth() + 1) : 12;
      out.push({ nazev: 'Nájemné a zálohy', datum: isoDatum(prvni), mesicne: pocet, popis: konec ? undefined : 'Prvních 12 měsíců.' });
    }
    if (konec) {
      out.push({ nazev: 'Domluvit prodloužení nebo konec nájmu', datum: isoDatum(pridejMesice(konec, -3)), popis: 'Za 3 měsíce končí nájem na dobu určitou.' });
      out.push({ nazev: 'Konec nájmu', datum: isoDatum(konec) });
    }
    return out;
  },
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Smlouva o nájmu bytu',
  podnadpis: 'uzavřená podle § 2235 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'najemni-smlouva-byt',
  paticka: 'Vytvořeno zdarma · šablona CZ-NAJEM-BYT v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'pronajímatel', vpravo: 'nájemce' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.',
    'Při předání bytu sepište předávací protokol se stavy měřičů a fotkami – máme ho připravený.',
    'Jistotu (kauci) předejte převodem nebo proti písemnému potvrzení.',
    'Nájemce: přepište na sebe elektřinu a plyn, pokud je platí přímo, a nahlaste změnu správci domu nebo SVJ.',
  ],
  kontrola: [
    'Pronajímatel je vlastník bytu – ověřte na [nahlížení do katastru nemovitostí](https://nahlizenidokn.cuzk.gov.cz/) (zdarma, podle adresy nebo čísla jednotky).',
    TIP_TOTOZNOST,
    'Jistota (kauce) a případná smluvní pokuta dohromady nesmí přesáhnout trojnásobek měsíčního nájemného (§ 2254). Z jistoty náleží nájemci úroky.',
    'Zvyšování nájemného: buď jasná inflační doložka (konkrétní ukazatel ČSÚ a datum), nebo zákonný postup. Doložka „podle inflace“ bez ukazatele je neplatná.',
    'Na nájemce nejde přenést daň z nemovitosti, pojištění domu, správu ani fond oprav – takové ujednání je neplatné.',
    'Drobné opravy hradí nájemce jen do limitu nařízení vlády č. 308/2015 Sb. (100 Kč/m² ročně, jednotlivá oprava do 1 000 Kč).',
    'Podnájem celého bytu potřebuje písemný souhlas pronajímatele; osoby blízké (rodina, partner) se mohou přistěhovat bez souhlasu.',
    'Zálohy na služby pronajímatel vyúčtuje jednou ročně podle zákona č. 67/2013 Sb.; vyúčtování si zkontrolujte.',
    'Na dobu určitou: po skončení doby včas vyzvěte nájemce k odevzdání bytu, jinak se nájem může obnovit (§ 2285).',
  ],
  zdroje: [OZ, NV_DROBNE_OPRAVY, ZAKON_SLUZBY, OCHRANCE_NAJEM, IURE_PRIRUCKA],

  kroky: [
    {
      id: 'strany',
      nazev: 'Pronajímatel a nájemce',
      popis: 'Pronajímatel je vlastník bytu. Údaje opište z občanských průkazů.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Pronajímatel – jméno a příjmení', napoveda: 'Vlastník bytu, jak je zapsán v katastru nemovitostí. Spoluvlastníci podepisují všichni.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození pronajímatele', napoveda: 'Rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa pronajímatele', napoveda: 'Adresa trvalého bydliště pro doručování.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'Telefon nebo e-mail pronajímatele', napoveda: 'Pro hlášení závad a komunikaci.', placeholder: 'např. +420 777 123 456', sirka: 30 },
        { id: 'k_jmeno', typ: 'text', popis: 'Nájemce – jméno a příjmení', napoveda: 'Kdo bude byt užívat a platit nájemné. Více nájemců (spolunájem) uveďte všechny.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození nájemce', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Dosavadní adresa nájemce', napoveda: 'Adresa trvalého bydliště nájemce před nastěhováním.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon nebo e-mail nájemce', napoveda: 'Pro komunikaci.', placeholder: 'např. petra@email.cz', sirka: 30 },
      ],
    },
    {
      id: 'byt',
      nazev: 'Byt',
      popis: 'Byt popište tak, aby nebylo pochyb, o který jde.',
      pole: [
        { id: 'byt_adresa', typ: 'text', popis: 'Adresa domu', napoveda: 'Ulice, číslo popisné/orientační, PSČ a obec.', placeholder: 'např. Masarykova 1025/5, 251 01 Říčany', sirka: 46 },
        { id: 'byt_cislo', typ: 'text', popis: 'Číslo bytu nebo jednotky', napoveda: 'U bytu v osobním vlastnictví číslo jednotky z katastru (např. 1025/12).', placeholder: 'např. 1025/12', sirka: 12, polovina: true },
        { id: 'byt_podlazi', typ: 'text', popis: 'Podlaží', napoveda: 'Např. 3. NP.', placeholder: 'např. 3. NP', sirka: 8, polovina: true },
        { id: 'byt_dispozice', typ: 'text', popis: 'Dispozice', napoveda: 'Např. 2+kk, 3+1.', placeholder: 'např. 2+kk', sirka: 8, polovina: true },
        { id: 'byt_plocha', typ: 'cislo', popis: 'Podlahová plocha', napoveda: 'Podle ní se počítá limit drobných oprav (100 Kč/m² ročně).', placeholder: 'např. 54', jednotka: 'm²', sirka: 8, polovina: true },
        { id: 'prislusenstvi', typ: 'text', popis: 'Příslušenství (nepovinné)', napoveda: 'Sklep, komora, parkovací stání, balkon – co k bytu patří.', placeholder: 'např. sklepní kóje č. 12, balkon', sirka: 46 },
        { id: 'vybaveni', typ: 'textarea', popis: 'Vybavení bytu (nepovinné)', napoveda: 'Spotřebiče a nábytek, které pronajímatel přenechává. Podrobně je zapíšete do předávacího protokolu.', placeholder: 'např. kuchyňská linka s lednicí, myčkou a sporákem, pračka, vestavěná skříň', sirka: 64 },
      ],
    },
    {
      id: 'doba',
      nazev: 'Doba nájmu',
      pole: [
        {
          id: 'doba',
          typ: 'volba',
          popis: 'Na jak dlouho',
          napoveda: 'Na dobu určitou nájem skončí uplynutím doby. Na dobu neurčitou trvá, dokud ho někdo nevypoví – pronajímatel jen ze zákonných důvodů.',
          moznosti: [
            { hodnota: 'urcita', popis: 'Na dobu určitou' },
            { hodnota: 'neurcita', popis: 'Na dobu neurčitou' },
          ],
        },
        { id: 'od', typ: 'datum', popis: 'Nájem začíná dne', napoveda: 'Den, od kdy nájemce smí byt užívat a platí nájemné.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Nájem končí dne', napoveda: 'Nejčastěji za rok.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'predani', typ: 'datum', popis: 'Předání bytu', napoveda: 'Kdy nájemce dostane klíče. Sepíšete předávací protokol.', sirka: 14, polovina: true },
        { id: 'osoby', typ: 'cislo', popis: 'Počet osob v bytě', napoveda: 'Kolik lidí bude v bytě bydlet včetně nájemce. Změnu nájemce oznamuje do 2 měsíců.', placeholder: 'např. 2', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: 'Nájemné a platby',
      pole: [
        { id: 'najemne', typ: 'castka', popis: 'Měsíční nájemné (Kč)', napoveda: 'Nájemné za byt bez záloh na služby.', placeholder: 'např. 15000', sirka: 12, polovina: true },
        { id: 'zalohy', typ: 'castka', popis: 'Zálohy na služby (Kč měsíčně)', napoveda: 'Voda, teplo, výtah, úklid… Jednou ročně se vyúčtují podle skutečnosti.', placeholder: 'např. 3500', sirka: 12, polovina: true },
        {
          id: 'sluzby',
          typ: 'vice',
          popis: 'Za co jsou zálohy',
          napoveda: 'Zaškrtněte služby, které platí nájemce přes pronajímatele.',
          moznosti: [
            { hodnota: 'voda', popis: 'Vodné a stočné' },
            { hodnota: 'teplo', popis: 'Teplo a teplá voda' },
            { hodnota: 'vytah', popis: 'Výtah' },
            { hodnota: 'spolecne', popis: 'Osvětlení a úklid společných prostor' },
            { hodnota: 'odpad', popis: 'Odvoz odpadu' },
          ],
        },
        {
          id: 'energie',
          typ: 'volba',
          popis: 'Elektřina a plyn',
          napoveda: 'Nejčastěji si je nájemce převede na sebe a platí dodavateli sám.',
          moznosti: [
            { hodnota: 'najemce', popis: 'Nájemce platí přímo dodavateli' },
            { hodnota: 'zalohy', popis: 'Jsou součástí záloh výše' },
          ],
        },
        { id: 'splatnost', typ: 'cislo', popis: 'Splatnost (den v měsíci)', napoveda: 'Do kterého dne v měsíci se platí nájemné a zálohy, obvykle předem na daný měsíc.', placeholder: 'např. 5', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Účet pronajímatele', napoveda: 'Kam se platí. Převod je nejlépe doložitelný.', placeholder: '123456789/0100', sirka: 24, polovina: true },
        {
          id: 'zvysovani',
          typ: 'volba',
          popis: 'Zvyšování nájemného',
          napoveda: 'Inflační doložka zvyšuje nájem automaticky jednou ročně o inflaci podle ČSÚ. Bez ní platí zákonný postup (návrh pronajímatele, nejvýš o 20 % za 3 roky).',
          moznosti: [
            { hodnota: 'inflace', popis: 'Inflační doložka (každý rok o inflaci podle ČSÚ)' },
            { hodnota: 'zakon', popis: 'Podle zákona' },
          ],
        },
      ],
    },
    {
      id: 'jistota',
      nazev: 'Jistota (kauce)',
      pole: [
        { id: 'jistota', typ: 'castka', popis: 'Jistota (Kč)', napoveda: 'Nejvýš trojnásobek měsíčního nájemného (bez záloh). Vrací se po skončení nájmu, sníženě o případné dluhy.', placeholder: 'např. 30000', sirka: 12, polovina: true },
        { id: 'jistota_urok', typ: 'cislo', popis: 'Úrok z jistoty (% ročně)', napoveda: 'Zákon dává nájemci právo na úroky z jistoty; nesmí být symbolické. Orientačně podle úroků spořicích účtů.', placeholder: 'např. 2', jednotka: '% ročně', sirka: 6, polovina: true },
        {
          id: 'jistota_vraceni',
          typ: 'volba',
          popis: 'Kdy se jistota vrátí',
          napoveda: 'Vrácení až po vyúčtování služeb musí být výslovně ujednáno.',
          moznosti: [
            { hodnota: 'skonceni', popis: 'Při skončení nájmu a odevzdání bytu' },
            { hodnota: 'vyuctovani', popis: 'Po ročním vyúčtování služeb' },
          ],
        },
        {
          id: 'zvirata',
          typ: 'volba',
          popis: 'Domácí zvířata',
          napoveda: 'Chov běžného zvířete (kočka, malý pes) zákon nájemci obecně umožňuje, pokud neobtěžuje sousedy ani nepoškozuje byt.',
          moznosti: [
            { hodnota: 'ano', popis: 'Povolena' },
            { hodnota: 'oznameni', popis: 'Povolena po oznámení pronajímateli' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy pronajímatele.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    najemne_slovy: (d) => castkaSlovy(d.najemne),
    jistota_slovy: (d) => castkaSlovy(d.jistota),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo byt pronajímá a kdo si ho najímá.',
      odstavce: [
        '**Pronajímatel:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}}, kontakt {{p_kontakt}} (dále jen „pronajímatel“)',
        '**Nájemce:** {{k_jmeno}}, datum narození {{k_narozeni}}, dosud bytem {{k_adresa}}, kontakt {{k_kontakt}} (dále jen „nájemce“)',
      ],
    },
    {
      nadpis: 'Předmět nájmu',
      vysvetleni: 'Který byt se pronajímá a co k němu patří.',
      odstavce: [
        'Pronajímatel prohlašuje, že je vlastníkem bytu č. {{byt_cislo}}, dispozice {{byt_dispozice}}, v {{byt_podlazi}} domu na adrese {{byt_adresa}}, o podlahové ploše {{byt_plocha}} (dále jen „byt“).',
        'K bytu patří: {{prislusenstvi}}. Byt je vybaven: {{vybaveni}}.',
        'Pronajímatel přenechává nájemci byt k zajištění bytových potřeb nájemce a členů jeho domácnosti. V bytě bude bydlet {{osoby}} osob. Nájemce oznámí pronajímateli změnu počtu osob bez zbytečného odkladu, nejpozději do dvou měsíců.',
      ],
    },
    {
      nadpis: 'Doba nájmu a předání bytu',
      vysvetleni: 'Od kdy a na jak dlouho. Stav bytu při předání se zapíše do předávacího protokolu.',
      odstavce: [
        {
          volba: 'doba',
          uvodVzor: 'Doba nájmu (zaškrtněte jednu možnost):',
          moznosti: {
            urcita: 'Nájem se sjednává na dobu určitou od {{od}} do {{do}}.',
            neurcita: 'Nájem se sjednává na dobu neurčitou s účinností od {{od}}.',
          },
        },
        'Pronajímatel předá byt nájemci ve stavu způsobilém k nastěhování a obývání dne {{predani}}. O předání strany sepíšou předávací protokol se stavy měřidel a popisem stavu bytu.',
      ],
    },
    {
      nadpis: 'Nájemné a úhrady za služby',
      vysvetleni: 'Kolik a kdy se platí. Zálohy na služby se jednou ročně vyúčtují.',
      odstavce: [
        'Nájemce platí měsíční nájemné ve výši {{najemne}} (slovy: {{najemne_slovy}}) a zálohy na služby spojené s užíváním bytu ve výši {{zalohy}} měsíčně.',
        {
          vice: 'sluzby',
          uvod: 'Zálohy se platí na tyto služby:',
          moznosti: {
            voda: 'dodávka vody a odvádění odpadních vod',
            teplo: 'dodávka tepla a teplé vody',
            vytah: 'provoz výtahu',
            spolecne: 'osvětlení a úklid společných prostor domu',
            odpad: 'odvoz odpadu',
          },
        },
        {
          volba: 'energie',
          uvodVzor: 'Elektřina a plyn (zaškrtněte):',
          moznosti: {
            najemce: 'Elektřinu, případně plyn, si nájemce zajistí a platí přímo u dodavatele.',
            zalohy: 'Elektřina, případně plyn, jsou hrazeny v rámci záloh na služby.',
          },
        },
        'Nájemné a zálohy jsou splatné měsíčně předem, vždy do {{splatnost}}. dne kalendářního měsíce, na účet pronajímatele č. {{ucet}}.',
        'Pronajímatel vyúčtuje zálohy na služby jednou ročně, nejpozději do čtyř měsíců po skončení zúčtovacího období. Případný přeplatek nebo nedoplatek je splatný do čtyř měsíců od doručení vyúčtování.',
        {
          volba: 'zvysovani',
          uvodVzor: 'Zvyšování nájemného (zaškrtněte jednu možnost):',
          moznosti: {
            inflace: 'Nájemné se vždy k 1. dubnu kalendářního roku zvyšuje o průměrnou roční míru inflace za předchozí kalendářní rok vyjádřenou přírůstkem průměrného ročního indexu spotřebitelských cen, kterou vyhlašuje Český statistický úřad; poprvé v roce následujícím po roce, v němž nájem začal. Pronajímatel nájemci zvýšení písemně oznámí.',
            zakon: 'Zvyšování nájemného se řídí § 2249 občanského zákoníku.',
          },
        },
      ],
    },
    {
      nadpis: 'Jistota',
      vysvetleni: 'Kauce zajišťuje nájemné a jiné povinnosti. Zákon ji omezuje na trojnásobek nájemného a nájemci z ní náleží úroky.',
      odstavce: [
        'Nájemce složí pronajímateli nejpozději při předání bytu peněžitou jistotu ve výši {{jistota}} (slovy: {{jistota_slovy}}).',
        'Z jistoty náleží nájemci úrok ve výši {{jistota_urok}} od jejího poskytnutí do vrácení.',
        {
          volba: 'jistota_vraceni',
          uvodVzor: 'Vrácení jistoty (zaškrtněte jednu možnost):',
          moznosti: {
            skonceni: 'Při skončení nájmu a odevzdání bytu pronajímatel vrátí jistotu s úroky; započte si přitom, co mu nájemce z nájmu dluží.',
            vyuctovani: 'Strany výslovně ujednávají, že pronajímatel vrátí jistotu s úroky po skončení nájmu nejpozději do jednoho měsíce od doručení vyúčtování služeb za poslední zúčtovací období; započte si přitom, co mu nájemce z nájmu dluží.',
          },
        },
      ],
    },
    {
      nadpis: 'Práva a povinnosti',
      vysvetleni: 'Běžná pravidla soužití: opravy, změny v bytě, podnájem, zvířata. Vychází ze zákona, nic navíc nájemci neukládá.',
      odstavce: [
        'Nájemce užívá byt řádně a v souladu s touto smlouvou. Běžnou údržbu a drobné opravy související s užíváním bytu provádí a hradí nájemce v rozsahu nařízení vlády č. 308/2015 Sb.; ostatní opravy zajišťuje pronajímatel.',
        'Nájemce oznámí pronajímateli bez zbytečného odkladu potřebu oprav, které má provést pronajímatel, a umožní jejich provedení a v nezbytném rozsahu přístup do bytu po předchozím oznámení.',
        'Stavební úpravy a jiné podstatné změny bytu smí nájemce provést jen s předchozím písemným souhlasem pronajímatele.',
        'Podnájem celého bytu, nebo části bytu, pokud v něm nájemce sám nebydlí, je možný jen s písemným souhlasem pronajímatele.',
        {
          volba: 'zvirata',
          uvodVzor: 'Domácí zvířata (zaškrtněte):',
          moznosti: {
            ano: 'Nájemce smí v bytě chovat domácí zvířata, pokud to nezpůsobuje obtíže ostatním obyvatelům domu ani poškození bytu.',
            oznameni: 'Nájemce smí v bytě chovat domácí zvířata po předchozím oznámení pronajímateli, pokud to nezpůsobuje obtíže ostatním obyvatelům domu ani poškození bytu.',
          },
        },
      ],
    },
    {
      nadpis: 'Skončení nájmu',
      vysvetleni: 'Jak může nájem skončit. Výpovědní důvody a lhůty stanoví zákon a smlouva je nemůže zhoršit v neprospěch nájemce.',
      odstavce: [
        'Nájem skončí dohodou stran, uplynutím doby, na kterou byl sjednán, nebo písemnou výpovědí z důvodů a ve lhůtách podle občanského zákoníku (zejména § 2285 až § 2291).',
        'Při skončení nájmu nájemce odevzdá byt pronajímateli ve stavu, v jakém ho převzal, s přihlédnutím k obvyklému opotřebení, včetně všech klíčů. O odevzdání strany sepíšou předávací protokol.',
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      vysvetleni: 'Běžné formální body.',
      odstavce: [
        'Práva a povinnosti neupravené touto smlouvou se řídí občanským zákoníkem, zejména § 2201 a násl. a § 2235 a násl.',
        'Smlouva je vyhotovena ve dvou stejnopisech, každá strana obdrží jeden. Změny lze činit jen písemnými dodatky.',
        'Smlouva nabývá platnosti a účinnosti podpisem obou stran.',
      ],
    },
  ],
};
