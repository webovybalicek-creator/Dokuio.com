import type { StrankaDokumentu } from '../typy';
import { dohodaOSplatkach as sablona } from '../../sablony/sk/dohoda-o-splatkach';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Dohoda o splátkach',
  nazevA: 'dohodu o splátkach',
  katalog: {
    popis: 'Splátkový kalendár dlhu podpísaný veriteľom aj dlžníkom.',
    kategorie: 'penize',
    ilustrace: 'dluh',
    slova: ['dohoda o splátkach', 'splátkový kalendár', 'splátky dlhu', 'splácanie dlhu', 'strata výhody splátok', 'dlžník', 'veriteľ', 'dohoda o splatení dlhu'],
  },
  souvisejici: 'penize',
  landing: {
    title: 'Dohoda o splátkach dlhu {rok} – vzor PDF zadarmo',
    description: 'Dohoda veriteľa a dlžníka o splatení dlhu v splátkach: splátkový kalendár, strata výhody splátok podľa § 565 OZ a voliteľne uznanie dlhu. PDF aj Word zadarmo.',
    perex: 'Dlžník nevie zaplatiť naraz? Dohodnite sa na splátkach. Obe strany podpíšu splátkový kalendár a pri neplatení môže veriteľ žiadať celý zostatok.',
    obsahPopis: 'Dvojstranná dohoda so splátkovým kalendárom v prílohe.',
    obsah: [
      { nazev: 'Strany', popis: 'Veriteľ a dlžník.' },
      { nazev: 'Dlh', popis: 'Výška, dôvod a voliteľne uznanie dlhu.' },
      { nazev: 'Splátky', popis: 'Výška, deň splatnosti, účet, predčasné splatenie.' },
      { nazev: 'Strata výhody splátok', popis: 'Kedy sa stáva splatným celý zostatok.' },
      { nazev: 'Príloha', popis: 'Splátkový kalendár s dátumami a zostatkom.' },
    ],
    kroky: [
      { nazev: 'Vyplňte dlh a splátky', popis: 'Kalendár a sumu slovom doplníme sami.' },
      { nazev: 'Podpíšte obaja', popis: 'Dva výtlačky, každý si nechá jeden.' },
      { nazev: 'Splácajte', popis: 'Splátky vám pripomenie kalendár.' },
    ],
    online: ['Splátkový kalendár automaticky v prílohe', 'Splátky do kalendára v telefóne', 'Voliteľné uznanie dlhu', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['nesplatená pôžička medzi známymi', 'dlh za škodu, prácu alebo tovar', 'veriteľ aj dlžník chcú splátky písomne potvrdiť'],
    nehodiSe: ['stačí vám jednostranné priznanie dlhu – použite uznanie dlhu', 'nová pôžička – použite zmluvu o pôžičke', 'dlhy voči bankám, exekútorom a inkasným spoločnostiam'],
    poNadpis: 'Počas splácania.',
    po: [
      { nazev: 'Dôkaz platby', popis: 'Prevodom s poznámkou, hotovosť len proti potvrdeniu.' },
      { nazev: 'Omeškanie', popis: 'Celý zostatok treba žiadať do splatnosti najbližšej ďalšej splátky.' },
      { nazev: 'Posledná splátka', popis: 'Veriteľ môže potvrdiť, že dlh je splatený.' },
    ],
    faq: [
      { q: 'Aký je rozdiel oproti uznaniu dlhu?', a: 'Uznanie dlhu je jednostranné vyhlásenie dlžníka. Dohodu o splátkach podpisujú obaja – veriteľ súhlasí so splátkami a dlžník s podmienkami. Uznanie dlhu môže byť jej súčasťou.' },
      { q: 'Kedy môže veriteľ žiadať celý dlh naraz?', a: 'Pri nesplnení splátky, len ak je to dohodnuté. Toto právo musí uplatniť najneskôr do splatnosti najbližšie nasledujúcej splátky (§ 565 Občianskeho zákonníka).' },
      { q: 'Predĺži sa premlčanie?', a: 'Ak dlžník v dohode dlh písomne uzná čo do dôvodu a výšky, plynie od uznania nová premlčacia doba 10 rokov (§ 558 a § 110 Občianskeho zákonníka).' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Dohoda vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 558, § 565 a § 566 zákona č. 40/1964 Zb., Občiansky zákonník (platí do 30. 6. 2027).',
    souvisejiciPopis: 'Ďalšie dokumenty k peniazom, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť dohodu o splátkach online – PDF zadarmo',
    description: 'Dohoda o splátkach dlhu so splátkovým kalendárom a stratou výhody splátok. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty',
  },
};

export default stranka;
