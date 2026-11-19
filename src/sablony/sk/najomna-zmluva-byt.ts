/**
 * Nájomná zmluva na byt – Slovensko, podľa § 685 a nasl. Občianskeho zákonníka (zákon č. 40/1964 Zb.),
 * platné do 30. 6. 2027 (potom nový OZ č. 260/2026 Z. z.). Drobné opravy: nariadenie vlády č. 87/1995 Z. z.
 * Výpoveď nájomcu: § 710 – trojmesačná lehota od 1. dňa mesiaca po doručení. Prenajímateľ len z dôvodov § 711.
 * Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum, pridejMesice, isoDatum, cislo } from '../terminy';
import { SK_NAJOM_BYTU, SK_DROBNE_OPRAVY, SK_KRATKODOBY_NAJOM, TIP_TOTOZNOST_SK, TIP_NOVY_OZ_SK } from './zdroje';

export const najomnaZmluvaByt: Sablona = {
  kod: 'SK-NAJOM-BYT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.od);
    const konec = d.doba === 'urcita' ? naDatum(d.do) : undefined;
    const den = Math.round(cislo(d.splatnost));
    if (typeof d.odovzdanie === 'string' && d.odovzdanie) out.push({ nazev: 'Odovzdanie bytu a preberací protokol', datum: d.odovzdanie });
    if (od && den >= 1 && den <= 31) {
      const prvni = pridejMesice(od, od.getDate() > den ? 1 : 0, den);
      out.push({ nazev: 'Nájomné a zálohy', datum: isoDatum(prvni), mesicne: 12, popis: 'Prvých 12 mesiacov.' });
    }
    if (konec) out.push({ nazev: 'Koniec nájmu', datum: isoDatum(konec) });
    return out;
  },
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Zmluva o nájme bytu',
  podnadpis: 'uzavretá podľa § 685 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'najomna-zmluva-byt',
  paticka: 'Vytvorené zadarmo · šablóna SK-NAJOM-BYT v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prenajímateľ', vpravo: 'nájomca' },
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },
  coDal: [
    'Vytlačte zmluvu dvakrát, obe strany podpíšu oba výtlačky.',
    'Pri odovzdaní bytu spíšte preberací protokol so stavmi meračov a fotkami.',
    'Zábezpeku odovzdajte prevodom alebo proti písomnému potvrdeniu.',
    'Nájomca: prepíšte si elektrinu a plyn, ak ich platíte priamo, a oznámte zmenu správcovi domu.',
  ],
  kontrola: [
    'Prenajímateľ je vlastník bytu – overte si to na liste vlastníctva (katasterportal.sk).',
    TIP_TOTOZNOST_SK,
    'Občiansky zákonník chráni nájomcu: prenajímateľ môže nájom na neurčitý čas vypovedať len z dôvodov v § 711 a výpovedná lehota je tri mesiace. Ujednania, ktoré by to obchádzali, sú neplatné.',
    'Výšku zábezpeky (kaucie) si dohodnite primerane – bežne jedno až dve mesačné nájomné. Pri krátkodobom nájme podľa zákona č. 98/2014 Z. z. je najviac trojnásobok.',
    'Drobné opravy a bežnú údržbu hradí nájomca v rozsahu nariadenia vlády č. 87/1995 Z. z.; ostatné opravy prenajímateľ.',
    'Podnájom celého bytu alebo jeho časti iným osobám potrebuje písomný súhlas prenajímateľa (§ 719).',
    'Ak chcete prenajímať krátkodobo s ľahším ukončením, existuje režim krátkodobého nájmu (zákon č. 98/2014 Z. z.) – tento vzor ho nepoužíva.',
    TIP_NOVY_OZ_SK,
  ],
  zdroje: [SK_NAJOM_BYTU, SK_DROBNE_OPRAVY, SK_KRATKODOBY_NAJOM],

  kroky: [
    {
      id: 'strany',
      nazev: 'Prenajímateľ a nájomca',
      popis: 'Prenajímateľ je vlastník bytu. Údaje prepíšte z občianskych preukazov.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prenajímateľ – meno a priezvisko', napoveda: 'Vlastník bytu podľa listu vlastníctva. Spoluvlastníci podpisujú všetci.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia prenajímateľa', napoveda: 'Rodné číslo písať nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa prenajímateľa', napoveda: 'Trvalý pobyt na doručovanie.', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Nájomca – meno a priezvisko', napoveda: 'Kto bude byt užívať a platiť nájomné.', placeholder: 'napr. Petra Kováčová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia nájomcu', napoveda: 'Podľa občianskeho preukazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Doterajšia adresa nájomcu', napoveda: 'Trvalý pobyt pred nasťahovaním.', placeholder: 'napr. Štúrova 5, 040 01 Košice', sirka: 46 },
      ],
    },
    {
      id: 'byt',
      nazev: 'Byt',
      pole: [
        { id: 'byt_adresa', typ: 'text', popis: 'Adresa domu', napoveda: 'Ulica, súpisné/orientačné číslo, PSČ a obec.', placeholder: 'napr. Mierová 25, 821 05 Bratislava', sirka: 46 },
        { id: 'byt_cislo', typ: 'text', popis: 'Číslo bytu', napoveda: 'Podľa listu vlastníctva.', placeholder: 'napr. 12', sirka: 8, polovina: true },
        { id: 'byt_poschodie', typ: 'text', popis: 'Poschodie', placeholder: 'napr. 3. p.', napoveda: 'Na ktorom poschodí byt je.', sirka: 8, polovina: true },
        { id: 'byt_izby', typ: 'text', popis: 'Počet izieb', napoveda: 'Napr. 2-izbový.', placeholder: 'napr. 2-izbový', sirka: 12, polovina: true },
        { id: 'byt_plocha', typ: 'cislo', popis: 'Podlahová plocha', napoveda: 'Podľa listu vlastníctva alebo výpisu.', placeholder: 'napr. 54', jednotka: 'm²', sirka: 8, polovina: true },
        { id: 'prislusenstvo', typ: 'text', popis: 'Príslušenstvo (nepovinné)', napoveda: 'Pivnica, komora, balkón, parkovacie miesto.', placeholder: 'napr. pivnica č. 12, balkón', sirka: 46 },
        { id: 'vybavenie', typ: 'textarea', popis: 'Vybavenie bytu (nepovinné)', napoveda: 'Spotrebiče a nábytok. Podrobne ich zapíšete do preberacieho protokolu.', placeholder: 'napr. kuchynská linka s chladničkou, práčka, vstavaná skriňa', sirka: 64 },
      ],
    },
    {
      id: 'doba',
      nazev: 'Doba nájmu',
      pole: [
        {
          id: 'doba', typ: 'volba', popis: 'Na ako dlho', napoveda: 'Nájom na určitý čas skončí uplynutím doby. Na neurčitý čas trvá, kým ho niekto nevypovie.',
          moznosti: [ { hodnota: 'urcita', popis: 'Na určitý čas' }, { hodnota: 'neurcita', popis: 'Na neurčitý čas' } ],
        },
        { id: 'od', typ: 'datum', popis: 'Nájom začína dňa', napoveda: 'Odkedy nájomca užíva byt a platí nájomné.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Nájom končí dňa', napoveda: 'Najčastejšie o rok.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'odovzdanie', typ: 'datum', popis: 'Odovzdanie bytu', napoveda: 'Kedy nájomca dostane kľúče.', sirka: 14, polovina: true },
        { id: 'osoby', typ: 'cislo', popis: 'Počet osôb v byte', napoveda: 'Koľko ľudí bude v byte bývať vrátane nájomcu.', placeholder: 'napr. 2', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: 'Nájomné a platby',
      pole: [
        { id: 'najomne', typ: 'castka', popis: 'Mesačné nájomné (€)', napoveda: 'Nájomné bez záloh na služby.', placeholder: 'napr. 650', sirka: 12, polovina: true },
        { id: 'zalohy', typ: 'castka', popis: 'Zálohy na služby (€ mesačne)', napoveda: 'Voda, teplo, výťah, upratovanie… raz ročne sa vyúčtujú.', placeholder: 'napr. 150', sirka: 12, polovina: true },
        {
          id: 'energie', typ: 'volba', popis: 'Elektrina a plyn', napoveda: 'Najčastejšie si ich nájomca prepíše na seba.',
          moznosti: [ { hodnota: 'najomca', popis: 'Nájomca platí priamo dodávateľovi' }, { hodnota: 'zalohy', popis: 'Sú súčasťou záloh' } ],
        },
        { id: 'splatnost', typ: 'cislo', popis: 'Splatnosť (deň v mesiaci)', napoveda: 'Do ktorého dňa sa platí, zvyčajne vopred na daný mesiac.', placeholder: 'napr. 5', sirka: 4, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN prenajímateľa', napoveda: 'Kam sa platí.', placeholder: 'SK12 0000 0000 0000 0000 0000', sirka: 30, polovina: true },
        { id: 'zabezpeka', typ: 'castka', popis: 'Zábezpeka (€)', napoveda: 'Kaucia na nezaplatené nájomné alebo škody. Vracia sa po skončení nájmu.', placeholder: 'napr. 650', sirka: 12, polovina: true },
        {
          id: 'zvierata', typ: 'volba', popis: 'Domáce zvieratá', napoveda: 'Bežné zvieratá, ktoré neobťažujú susedov ani nepoškodzujú byt.',
          moznosti: [ { hodnota: 'ano', popis: 'Povolené' }, { hodnota: 'suhlas', popis: 'Len so súhlasom prenajímateľa' } ],
        },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu (obec)', napoveda: 'Predvyplníme podľa adresy prenajímateľa.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Dátum podpisu', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    najomne_slovy: (d) => sumaSlovom(d.najomne),
    zabezpeka_slovy: (d) => sumaSlovom(d.zabezpeka),
  },

  clanky: [
    {
      nadpis: 'Zmluvné strany',
      odstavce: [
        '**Prenajímateľ:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvale bytom {{p_adresa}} (ďalej len „prenajímateľ“)',
        '**Nájomca:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, doteraz bytom {{k_adresa}} (ďalej len „nájomca“)',
      ],
    },
    {
      nadpis: 'Predmet nájmu',
      vysvetleni: 'Ktorý byt sa prenajíma a čo k nemu patrí.',
      odstavce: [
        'Prenajímateľ vyhlasuje, že je vlastníkom bytu č. {{byt_cislo}} ({{byt_izby}}) na {{byt_poschodie}} v dome na adrese {{byt_adresa}} s podlahovou plochou {{byt_plocha}} (ďalej len „byt“).',
        'K bytu patrí: {{prislusenstvo}}. Byt je vybavený: {{vybavenie}}.',
        'Prenajímateľ prenecháva nájomcovi byt na bývanie nájomcu a členov jeho domácnosti. V byte budú bývať {{osoby}} osoby. Zmenu počtu osôb nájomca oznámi prenajímateľovi bez zbytočného odkladu.',
      ],
    },
    {
      nadpis: 'Doba nájmu a odovzdanie bytu',
      odstavce: [
        { volba: 'doba', uvodVzor: 'Doba nájmu (zaškrtnite):', moznosti: { urcita: 'Nájom sa dojednáva na určitý čas od {{od}} do {{do}}.', neurcita: 'Nájom sa dojednáva na neurčitý čas s účinnosťou od {{od}}.' } },
        'Prenajímateľ odovzdá nájomcovi byt v stave spôsobilom na riadne užívanie dňa {{odovzdanie}}. O odovzdaní spíšu strany preberací protokol so stavmi meračov.',
      ],
    },
    {
      nadpis: 'Nájomné a úhrady za služby',
      odstavce: [
        'Nájomca platí mesačné nájomné vo výške {{najomne}} (slovom: {{najomne_slovy}}) a zálohy na úhrady za plnenia spojené s užívaním bytu vo výške {{zalohy}} mesačne.',
        { volba: 'energie', uvodVzor: 'Elektrina a plyn (zaškrtnite):', moznosti: { najomca: 'Elektrinu, prípadne plyn, si nájomca zabezpečí a platí priamo dodávateľovi.', zalohy: 'Elektrina, prípadne plyn, sú hradené v rámci záloh.' } },
        'Nájomné a zálohy sú splatné mesačne vopred, vždy do {{splatnost}}. dňa kalendárneho mesiaca, na účet prenajímateľa IBAN {{ucet}}.',
        'Prenajímateľ vyúčtuje zálohy raz ročne podľa skutočných nákladov. Preplatok alebo nedoplatok je splatný do 30 dní od doručenia vyúčtovania.',
      ],
    },
    {
      nadpis: 'Zábezpeka',
      vysvetleni: 'Kaucia zabezpečuje nájomné a náhradu škody. Po skončení nájmu sa vracia.',
      odstavce: [
        'Nájomca zloží prenajímateľovi najneskôr pri odovzdaní bytu peňažnú zábezpeku vo výške {{zabezpeka}} (slovom: {{zabezpeka_slovy}}) na zabezpečenie nájomného, úhrad za služby a náhrady prípadnej škody.',
        'Po skončení nájmu a odovzdaní bytu prenajímateľ vráti zábezpeku do 30 dní; započítať si môže len to, čo mu nájomca z nájmu preukázateľne dlhuje.',
      ],
    },
    {
      nadpis: 'Práva a povinnosti',
      odstavce: [
        'Nájomca užíva byt riadne. Drobné opravy a náklady spojené s bežnou údržbou hradí nájomca v rozsahu nariadenia vlády č. 87/1995 Z. z.; ostatné opravy zabezpečuje prenajímateľ.',
        'Nájomca oznámi prenajímateľovi bez zbytočného odkladu potrebu opráv, ktoré má urobiť prenajímateľ, a umožní ich vykonanie.',
        'Stavebné úpravy bytu môže nájomca robiť len s predchádzajúcim písomným súhlasom prenajímateľa.',
        'Prenechať byt alebo jeho časť do podnájmu môže nájomca len s písomným súhlasom prenajímateľa.',
        { volba: 'zvierata', uvodVzor: 'Domáce zvieratá (zaškrtnite):', moznosti: { ano: 'Nájomca smie v byte chovať domáce zvieratá, ak tým neobťažuje susedov a nepoškodzuje byt.', suhlas: 'Nájomca smie v byte chovať domáce zvieratá len s predchádzajúcim súhlasom prenajímateľa.' } },
      ],
    },
    {
      nadpis: 'Skončenie nájmu',
      odstavce: [
        'Nájom zanikne písomnou dohodou, uplynutím doby, na ktorú bol dojednaný, alebo písomnou výpoveďou podľa § 710 a § 711 Občianskeho zákonníka. Výpovedná lehota je tri mesiace a začína plynúť prvým dňom mesiaca nasledujúceho po doručení výpovede.',
        'Pri skončení nájmu nájomca odovzdá byt v stave, v akom ho prevzal, s prihliadnutím na obvyklé opotrebenie, vrátane všetkých kľúčov.',
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      odstavce: [
        'Vzťahy neupravené touto zmluvou sa riadia Občianskym zákonníkom, najmä § 685 a nasl.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, každá strana dostane jeden. Zmeniť ju možno len písomnými dodatkami.',
        'Zmluva nadobúda platnosť a účinnosť podpisom oboch strán.',
      ],
    },
  ],
};
