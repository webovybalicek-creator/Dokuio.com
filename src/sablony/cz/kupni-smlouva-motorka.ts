/**
 * Kupní smlouva na motocykl (i skútr, moped, čtyřkolku) – Česko. Stejný ověřený text článků jako kupní smlouva
 * na auto (§ 2079 a násl. OZ, přepis podle zák. č. 56/2001 Sb.); liší se jen nápovědy, příklady, „Co to znamená?“
 * a tipy – ty jsou tu vypsané výslovně (žádné automatické nahrazování slov, které nepohlídá rod a pády).
 * Při změně textu auta zkontrolovat i tady – zvýšit `verze` a `aktualizovano` u obou.
 */
import type { Krok, Sablona } from '../typy';
import { kupniSmlouvaAuto } from './kupni-smlouva-auto';

const a = kupniSmlouvaAuto;

/** Pole, která se u motorky liší od auta (id pole → nápověda / ukázka) */
const POLE: Record<string, { napoveda?: string; placeholder?: string }> = {
  p_jmeno: { napoveda: 'Ten, kdo motorku prodává a je zapsaný jako vlastník v osvědčení o registraci. Napište celé jméno jako v občanském průkazu.' },
  k_jmeno: { napoveda: 'Ten, kdo motorku kupuje. Pokud ho ještě neznáte, nechte prázdné a doplníte rukou při podpisu.' },
  znacka: { placeholder: 'např. Honda CB500F' },
  spz: { napoveda: 'Značka na tabulce motorky, v osvědčení kolonka A.' },
  tp: { napoveda: 'Velký technický průkaz mají jen starší vozidla. Pokud ho nemáte, nechte prázdné.' },
  barva: { napoveda: 'Stačí běžný popis, pomáhá motorku jednoznačně určit.', placeholder: 'např. černá' },
  km: { napoveda: 'Opište v den podpisu z tachometru. Chrání obě strany před sporem o stočený tachometr.', placeholder: 'např. 23450' },
  vady: { napoveda: 'Vada je cokoli, co nefunguje nebo je poškozené (škrábance, nefunkční blinkr, opotřebený řetěz). Co do smlouvy napíšete, to kupující nemůže později reklamovat.' },
  vady_popis: { placeholder: 'např. poškrábaná nádrž, nefunkční levý blinkr' },
  havarie: { napoveda: 'Pokud nevíte jistě (např. jste motorku koupili ojetou), zvolte „Prodávající neví“. Nepravdivé prohlášení může vést ke sporu.' },
  doklady_jine: { placeholder: 'např. boční kufry, helma' },
  cena: { placeholder: 'např. 85000' },
  predani_datum: { napoveda: 'Den, kdy kupující převezme motorku a klíče. Od té doby nese riziko poškození a musí mít povinné ručení.' },
};

const kroky: Krok[] = a.kroky.map((k) => ({
  ...k,
  pole: k.pole.map((p) => {
    const z = POLE[p.id];
    if (!z) return p;
    if ((z.napoveda && !p.napoveda) || (z.placeholder && !p.placeholder)) throw new Error(`kupni-smlouva-motorka: pole ${p.id} v šabloně auta nemá nápovědu/ukázku`);
    return { ...p, ...z };
  }),
}));

/** „Co to znamená?“ ke článkům (stejné pořadí jako u auta) */
const VYSVETLENI = [
  a.clanky[0].vysvetleni,
  'Přesně které vozidlo se prodává – motorka, skútr, moped nebo čtyřkolka. Nejdůležitější je VIN: je jen jedno na světě a podle něj se vozidlo dohledá i v registru.',
  'Co prodávající o vozidle ví. Vady uvedené tady kupující později reklamovat nemůže, proto je popište pravdivě.',
  'Kolik, jak a kdy se platí. Vozidlo patří kupujícímu až po zaplacení celé ceny, což chrání prodávajícího.',
  'Kdy kupující vozidlo převezme, co s ním dostane a kdo zařídí přepis v registru. Od převzetí za vozidlo odpovídá kupující.',
  a.clanky[5].vysvetleni,
];
if (a.clanky.length !== VYSVETLENI.length) throw new Error('kupni-smlouva-motorka: počet článků auta se změnil – upravte VYSVETLENI');

export const kupniSmlouvaMotorka: Sablona = {
  ...a,
  kod: 'CZ-KUPNI-MOTO',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  nazev: 'Kupní smlouva na motorové vozidlo',
  souborPdf: 'kupni-smlouva-motorka',
  paticka: 'Vytvořeno zdarma · šablona CZ-KUPNI-MOTO v1.1 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  kroky,
  coDal: [
    a.coDal[0],
    a.coDal[1],
    'Předejte motorku, klíče a doklady – ideálně s předávacím protokolem (stav km, výbava, čas předání).',
    a.coDal[3],
  ],
  kontrola: [
    'Prodávající je zapsaný jako vlastník v osvědčení o registraci (malém technickém průkazu). Pokud ne, nechte si ukázat, jak motorku nabyl.',
    'VIN v dokladech souhlasí s VIN na motorce (vyražený na rámu u hlavy řízení a na štítku na rámu).',
    a.kontrola[2], // historie kilometrů (kontrolatachometru.cz)
    'Že motorka není na leasing nebo úvěr – u leasingu je vlastníkem leasingová firma a prodat ji nelze.',
    a.kontrola[4], // totožnost druhé strany
    a.kontrola[5], // hotovost
    'Po prodeji si na [Portálu dopravy](https://portaldopravy.cz/) ověřte, že motorka už není vedená na vás (přepis do 10 pracovních dnů).',
    'Výbavu a doplňky (kufry, padací rámy, výfuk) zapište do smlouvy – neschválené úpravy musí projít technickou kontrolou.',
  ],
  odvozene: a.odvozene,
  // právní text článků zůstává stejný jako u auta (mluví o „vozidle“), mění se jen „Co to znamená?“
  clanky: a.clanky.map((c, i) => ({ ...c, vysvetleni: VYSVETLENI[i] })),
};
