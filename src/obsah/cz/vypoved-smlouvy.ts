import type { StrankaDokumentu } from '../typy';
import { vypovedSmlouvy as sablona } from '../../sablony/cz/vypoved-smlouvy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Výpověď smlouvy',
  nazevA: 'výpověď smlouvy',
  katalog: {
    popis: 'Operátor, internet, energie, pojištění, posilovna, předplatné.',
    kategorie: 'sluzby',
    ilustrace: 'protokol',
    slova: ['výpověď', 'zrušení smlouvy', 'operátor', 'mobil', 'internet', 'elektřina', 'plyn', 'energie', 'pojištění', 'posilovna', 'fitness', 'předplatné', 'ukončení smlouvy'],
  },
  souvisejici: 'vypovedi',
  landing: {
    title: 'Výpověď smlouvy {rok} – vzor dopisu PDF zdarma',
    description: 'Vzor výpovědi smlouvy s operátorem, dodavatelem energií, pojišťovnou, posilovnou či předplatného. Se zákonnými lhůtami. PDF i Word zdarma.',
    perex: 'Jeden dopis na mobil, internet, elektřinu a plyn, pojištění, posilovnu i předplatné. Vyberete typ smlouvy a důvod, průvodce doplní správný paragraf a vysvětlí lhůty.',
    obsahPopis: 'Krátký dopis firmě, kterou opravdu přiřadí ke správné smlouvě.',
    obsah: [
      { nazev: 'Zákazník', popis: 'Kdo smlouvu uzavřel – jméno, adresa, kontakt.' },
      { nazev: 'Poskytovatel', popis: 'Název, IČO a adresa pro doručení.' },
      { nazev: 'Výpověď smlouvy', popis: 'Číslo smlouvy, čeho se týká a jak ji ukončujete – k nejbližšímu dni, k datu, po prodloužení, při změně ceny.' },
      { nazev: 'Další žádosti', popis: 'Potvrzení výpovědi, vyúčtování a přeplatek, vrácení zařízení.' },
    ],
    kroky: [
      { nazev: 'Vyberte typ smlouvy', popis: 'Operátor, energie, pojištění, členství, předplatné nebo jiná.' },
      { nazev: 'Zvolte důvod', popis: 'Průvodce vysvětlí lhůty a doplní zákon.' },
      { nazev: 'Doručte prokazatelně', popis: 'Doporučeně, datovou schránkou nebo podle obchodních podmínek.' },
    ],
    online: ['Správný paragraf podle typu smlouvy a důvodu', 'Vysvětlené zákonné lhůty pro operátory, energie a pojištění', 'Žádost o potvrzení a přeplatek jedním kliknutím', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['rušíte mobilní tarif, internet nebo televizi', 'odcházíte od dodavatele elektřiny či plynu nebo nesouhlasíte se zdražením', 'končíte s posilovnou, předplatným nebo pojištěním domácnosti'],
    nehodiSe: ['rušíte povinné ručení – použijte samostatný vzor výpovědi povinného ručení', 'přecházíte k jinému operátorovi s číslem – ukončení zařídí nový operátor', 'smlouvu jste uzavřeli online před méně než 14 dny – spíš odstoupení od smlouvy', 'vypovídáte nájem bytu – na to je výpověď z nájmu'],
    poNadpis: 'Po odeslání.',
    po: [
      { nazev: 'Schovejte doklad o doručení', popis: 'Dodejku nebo potvrzení z datové schránky, dokud firma výpověď nepotvrdí.' },
      { nazev: 'Plaťte do konce', popis: 'Služba se platí až do uplynutí výpovědní doby.' },
      { nazev: 'Konečné vyúčtování', popis: 'Zkontrolujte ho a až potom zrušte inkaso nebo trvalý příkaz.' },
    ],
    faq: [
      { q: 'Jak dlouhá je výpovědní doba?', a: 'Obecně podle smlouvy a obchodních podmínek. Zákon určuje jen některé případy: u elektřiny a plynu má domácnost u smlouvy na dobu neurčitou výpovědní dobu 3 měsíce od prvního dne měsíce po doručení (kratší sjednaná platí). U operátora lze automaticky prodlouženou smlouvu vypovědět bezplatně s nejvýše měsíční výpovědní dobou.' },
      { q: 'Zaplatím operátorovi za předčasné ukončení?', a: 'Spotřebitel platí úhradu jen tehdy, když smlouva na dobu určitou skončí do 3 měsíců od uzavření, a to nejvýše jednu dvacetinu součtu zbývajících měsíčních paušálů. Zvlášť se doplácí dotovaný telefon nebo jiné zařízení, pokud si ho necháte.' },
      { q: 'Dodavatel energií zdražuje. Můžu odejít?', a: 'Ano. Při zvýšení ceny nebo změně podmínek můžete jako domácnost smlouvu vypovědět bez postihu nejpozději 10. den před účinností změny. Neplatí to, když změna vyplývá jen ze zvýšení regulovaných složek ceny, daní nebo poplatků.' },
      { q: 'Jak vypovědět pojištění?', a: 'Nejčastěji ke konci pojistného období – pojišťovna musí výpověď dostat nejméně 6 týdnů předem. Do 2 měsíců od uzavření smlouvy platí 8denní výpovědní doba, po pojistné události výpověď do 3 měsíců od jejího oznámení s měsíční výpovědní dobou.' },
      { q: 'Jak výpověď poslat?', a: 'Tak, abyste doručení mohli prokázat: doporučeně s dodejkou, do datové schránky nebo osobně proti potvrzení. Mnoho firem připouští i formulář v zákaznickém účtu – způsob najdete v obchodních podmínkách.' },
    ],
    zakony: 'Vzor vychází z § 1998, § 1999, § 2805 a § 2807 zákona č. 89/2012 Sb., občanský zákoník, § 63b zákona č. 127/2005 Sb., o elektronických komunikacích, § 11a až § 11d zákona č. 458/2000 Sb., energetický zákon, a z informací ČTÚ a ERÚ. Výpovědní dobu jinak určuje vaše smlouva a obchodní podmínky.',
    souvisejiciPopis: 'Další výpovědi a dokumenty k ukončení smluv, také zdarma.',
  },
  vytvorit: {
    title: 'Vyplnit výpověď smlouvy online – PDF zdarma',
    description: 'Průvodce výpovědí smlouvy s operátorem, dodavatelem energií, pojišťovnou nebo posilovnou. Stáhněte PDF nebo Word zdarma.',
    podnadpis: 'Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty',
  },
};

export default stranka;
