import type { StrankaDokumentu } from '../typy';
import { vypovedZmluvy as sablona } from '../../sablony/sk/vypoved-zmluvy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Výpoveď zmluvy',
  nazevA: 'výpoveď zmluvy',
  katalog: {
    popis: 'Operátor, internet, poistenie, energie, posilňovňa či predplatné.',
    kategorie: 'bezne',
    ilustrace: 'protokol',
    slova: ['výpoveď zmluvy', 'výpoveď operátorovi', 'výpoveď internetu', 'výpoveď poistnej zmluvy', 'výpoveď elektriny', 'výpoveď plynu', 'zrušenie predplatného', 'výpoveď posilňovne', 'výpovedná lehota', 'zrušiť paušál'],
  },
  souvisejici: 'bezne',
  landing: {
    title: 'Výpoveď zmluvy {rok} – vzor PDF zadarmo',
    description: 'Výpoveď zmluvy s operátorom, poisťovňou, dodávateľom energií, posilňovňou či predplatného. Zákonné lehoty, potvrdenie a preplatok. PDF aj Word zadarmo.',
    perex: 'Jeden dopis na výpoveď telefónu, internetu, poistenia, elektriny, plynu, posilňovne aj predplatného. Pri každom type uvidíte, akú lehotu stanovuje zákon a čo si skontrolovať v zmluve.',
    obsahPopis: 'Výpoveď zákazníka s číslom zmluvy, termínom skončenia a žiadosťou o potvrdenie.',
    obsah: [
      { nazev: 'Zákazník a firma', popis: 'Kto vypovedá a komu.' },
      { nazev: 'Výpoveď', popis: 'Typ zmluvy, číslo zmluvy, dôvod a termín skončenia.' },
      { nazev: 'Ďalšie žiadosti', popis: 'Potvrdenie výpovede, konečné vyúčtovanie a vrátenie preplatku.' },
    ],
    kroky: [
      { nazev: 'Nájdite zmluvu', popis: 'Číslo zmluvy, výpovednú lehotu a viazanosť.' },
      { nazev: 'Vyplňte a podpíšte', popis: 'PDF alebo Word zadarmo.' },
      { nazev: 'Doručte preukázateľne', popis: 'Doporučene, osobne proti potvrdeniu alebo podľa podmienok firmy.' },
    ],
    online: ['Správne označenie zmluvy podľa typu', 'Zákonné lehoty pre operátorov, energie a poistenie', 'Žiadosť o potvrdenie a vrátenie preplatku', 'Pripomienka na kontrolu potvrdenia v kalendári'],
    hodiSe: ['rušíte paušál, internet alebo televíziu', 'vypovedáte poistenie ku koncu poistného obdobia', 'končíte zmluvu na elektrinu alebo plyn', 'rušíte členstvo v posilňovni alebo predplatné'],
    nehodiSe: ['vraciate tovar z e-shopu do 14 dní – použite odstúpenie od zmluvy', 'vypovedáte nájom bytu – na to je výpoveď z nájmu', 'končíte prácu – na to je výpoveď z pracovného pomeru'],
    poNadpis: 'Po odoslaní.',
    po: [
      { nazev: 'Potvrdenie', popis: 'Firma by vám mala potvrdiť prijatie a dátum skončenia.' },
      { nazev: 'Posledná faktúra', popis: 'Skontrolujte konečné vyúčtovanie a preplatok.' },
      { nazev: 'Platby', popis: 'Trvalý príkaz alebo inkaso zrušte až po poslednej platbe.' },
    ],
    faq: [
      { q: 'Aká je výpovedná lehota u operátora?', a: 'Zmluvu na dobu neurčitú môžete vypovedať kedykoľvek, aj bez dôvodu; lehota je rovnaká pre obe strany. Po automatickom predĺžení zmluvy na dobu určitú je výpovedná lehota najviac jeden mesiac a bez sankcií (§ 87 zákona č. 452/2021 Z. z.).' },
      { q: 'Ako vypovedať zmluvu na elektrinu alebo plyn?', a: 'Zmluvu na neurčitý čas písomne, s výpovednou dobou jeden mesiac od prvého dňa mesiaca po doručení. Ak nesúhlasíte so zmenou ceny alebo podmienok, môžete ju vypovedať bezodplatne – výpoveď musí dodávateľ dostať aspoň 15 dní pred účinnosťou zmeny (zákon č. 251/2012 Z. z.).' },
      { q: 'Dokedy treba vypovedať poistenie?', a: 'Pri bežnom poistnom ku koncu poistného obdobia; výpoveď musí poisťovňa dostať aspoň šesť týždňov pred jeho uplynutím (§ 800 Občianskeho zákonníka). Koniec obdobia nájdete v poistnej zmluve.' },
      { q: 'Akú lehotu má posilňovňa alebo predplatné?', a: 'Rozhoduje zmluva a obchodné podmienky. Ak z nich ani zo zákona spôsob výpovede nevyplýva a zmluva je na dobu neurčitú, platí tri mesiace ku koncu kalendárneho štvrťroka (§ 582 Občianskeho zákonníka).' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Výpoveď vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z § 87 zákona č. 452/2021 Z. z. o elektronických komunikáciách, § 17 a § 17c zákona č. 251/2012 Z. z. o energetike a § 582 a § 800 zákona č. 40/1964 Zb., Občiansky zákonník (platí do 30. 6. 2027). Ostatné lehoty určuje vaša zmluva.',
    souvisejiciPopis: 'Ďalšie dokumenty pre bežný život, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť výpoveď zmluvy online – PDF zadarmo',
    description: 'Výpoveď zmluvy s operátorom, poisťovňou, dodávateľom energií alebo posilňovňou. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty',
  },
};

export default stranka;
