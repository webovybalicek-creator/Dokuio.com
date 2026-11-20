import type { StrankaDokumentu } from '../typy';
import { dohodaOSplatkach as sablona } from '../../sablony/cz/dohoda-o-splatkach';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Dohoda o splátkách',
  nazevA: 'dohodu o splátkách',
  katalog: {
    popis: 'Splátkový kalendář dluhu podepsaný věřitelem i dlužníkem.',
    kategorie: 'penize',
    ilustrace: 'dluh',
    slova: ['splátky', 'splátkový kalendář', 'dohoda o splátkách', 'dluh', 'dlužník', 'věřitel', 'splácení', 'ztráta výhody splátek', 'rozložení dluhu'],
  },
  souvisejici: 'penize',
  landing: {
    title: 'Dohoda o splátkách {rok} – vzor PDF zdarma',
    description: 'Dohoda o splátkách dluhu zdarma: splátkový kalendář v příloze, ztráta výhody splátek podle § 1931 OZ, volitelně uznání dluhu. PDF i Word.',
    perex: 'Dlužník nemůže zaplatit najednou? Domluvte se na splátkách písemně. Věřitel i dlužník podepíší, kolik a kdy se platí, a splátkový kalendář se sestaví sám.',
    obsahPopis: 'Dvoustranná dohoda se splátkovým kalendářem v příloze.',
    obsah: [
      { nazev: 'Smluvní strany', popis: 'Věřitel a dlužník – jméno, datum narození, adresa.' },
      { nazev: 'Dluh', popis: 'Dlužná částka číslem i slovy, důvod, volitelně uznání dluhu.' },
      { nazev: 'Splátky', popis: 'Výše, den splatnosti, účet, případný úrok, předčasné splacení.' },
      { nazev: 'Ztráta výhody splátek', popis: 'Kdy může věřitel chtít celý zbytek najednou.' },
      { nazev: 'Příloha', popis: 'Splátkový kalendář s datem a zbývající částkou u každé splátky.' },
    ],
    kroky: [
      { nazev: 'Zadejte dluh', popis: 'Kolik zbývá zaplatit a z čeho dluh vznikl.' },
      { nazev: 'Nastavte splátky', popis: 'Výše a den v měsíci – kalendář se spočítá sám.' },
      { nazev: 'Podepište oba', popis: 'Každý si nechá jeden výtisk.' },
    ],
    online: ['Splátkový kalendář v příloze automaticky', 'Splátky do kalendáře v telefonu (.ics)', 'Volitelné uznání dluhu (promlčení 10 let)', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['někdo vám dluží a nemůže zaplatit najednou', 'dlužíte vy a chcete věřiteli nabídnout splátky', 'chcete mít jasně dané, co se stane, když splátka nepřijde'],
    nehodiSe: ['peníze teprve půjčujete – použijte smlouvu o zápůjčce', 'jen potřebujete, aby dlužník dluh písemně uznal – stačí uznání dluhu', 'dlužník je v insolvenci nebo exekuci – poraďte se s advokátem', 'poskytujete splátky zákazníkům jako firma pravidelně – ověřte pravidla spotřebitelského úvěru'],
    poNadpis: 'Po podpisu.',
    po: [
      { nazev: 'Hlídejte splátky', popis: 'Připomínky si stáhněte do kalendáře.' },
      { nazev: 'Zpoždění řešte hned', popis: 'Zbytek dluhu lze chtít jen do splatnosti nejbližší další splátky.' },
      { nazev: 'Potvrzení o splacení', popis: 'Po poslední splátce se hodí pro obě strany.' },
    ],
    faq: [
      { q: 'Čím se liší od uznání dluhu?', a: 'Uznání dluhu je jednostranné prohlášení dlužníka o důvodu a výši dluhu. Dohodu o splátkách podepisují obě strany: věřitel souhlasí se splácením a dlužník se zavazuje platit podle kalendáře. Uznání dluhu můžete do dohody zahrnout jedním zaškrtnutím.' },
      { q: 'Co je ztráta výhody splátek?', a: 'Když dlužník nezaplatí splátku, může věřitel požadovat celý zbytek dluhu najednou – ale jen pokud je to ve smlouvě sjednané. Toto právo musí uplatnit nejpozději do splatnosti nejblíže příští splátky (§ 1931 občanského zákoníku).' },
      { q: 'Na co jde nejdřív zaplacená částka?', a: 'Podle § 1932 občanského zákoníku se platba započítá nejprve na určené náklady spojené s uplatněním pohledávky, pak na úrok z prodlení, úroky a nakonec na jistinu. U dlužníka spotřebitele v prodlení je pořadí jiné: náklady, jistina, úroky a nakonec úrok z prodlení.' },
      { q: 'Musí se platit úrok?', a: 'Ne, úrok ze splátek je nepovinný. Když ale dlužník splátku zaplatí pozdě, může věřitel chtít zákonný úrok z prodlení.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Dohoda se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: 'Vzor vychází z § 1931, § 1932, § 2053 a § 639 zákona č. 89/2012 Sb., občanský zákoník. Úrok z prodlení určuje nařízení vlády č. 351/2013 Sb.',
    souvisejiciPopis: 'Další dokumenty k penězům a dluhům, také zdarma.',
  },
  vytvorit: {
    title: 'Vyplnit dohodu o splátkách online – PDF zdarma',
    description: 'Průvodce dohodou o splátkách dluhu se splátkovým kalendářem a ztrátou výhody splátek. Stáhněte PDF nebo Word zdarma.',
    podnadpis: 'Zdarma · výsledek v PDF i ve Wordu · zabere asi 3 minuty',
  },
};

export default stranka;
