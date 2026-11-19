import type { StrankaDokumentu } from '../typy';
import { vypovedPovinneRuceni as sablona } from '../../sablony/cz/vypoved-povinne-ruceni';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Výpověď povinného ručení",
  nazevA: "výpověď povinného ručení",
  katalog: {
    popis: "Výpověď pojištění auta: výročí, prodej, zdražení.",
    kategorie: "auto",
    ilustrace: "protokol",
    slova: ["auto","povinné ručení","pojištění","výpověď","pojišťovna","zrušení pojištění","změna pojišťovny"],
  },
  souvisejici: 'auto',
  landing: {
    title: "Výpověď povinného ručení {rok} – vzor PDF zdarma",
    description: "Výpověď povinného ručení zdarma: k výročí, po prodeji auta, do 2 měsíců nebo při zdražení. Vyplňte online, stáhněte PDF nebo Word.",
    perex: "K výročí smlouvy, po prodeji auta, do 2 měsíců od uzavření, po škodě nebo při zdražení. Vyplňte online, nebo stáhněte prázdný vzor.",
    obsahPopis: "Dopis pojišťovně se správným důvodem a žádostí o škodní průběh.",
    obsah: [
      { nazev: 'Pojistník', popis: 'Kdo smlouvu uzavřel – jméno, datum narození, adresa, kontakt.' },
      { nazev: 'Pojistitel', popis: 'Název a adresa pojišťovny.' },
      { nazev: 'Výpověď', popis: 'Číslo smlouvy, SPZ a důvod s odpovídající zákonnou lhůtou.' },
      { nazev: 'Další žádosti', popis: 'Potvrzení o škodním průběhu, vrácení přeplatku, potvrzení zániku.' },
    ],
    kroky: [
      { nazev: 'Vyberte důvod', popis: 'Podle důvodu se liší lhůta – průvodce ji vysvětlí.' },
      { nazev: 'Stáhněte a podepište', popis: 'PDF nebo Word zdarma.' },
      { nazev: 'Odešlete doporučeně', popis: 'Lhůta se počítá od doručení pojišťovně – s rezervou.' },
    ],
    online: ['Správný text podle důvodu výpovědi', 'Žádost o škodní průběh jedním kliknutím', 'Vysvětlené lhůty', 'Stažení v PDF i ve Wordu'],
    hodiSe: ['měníte pojišťovnu k výročí smlouvy', 'prodali jste auto', 'nesouhlasíte se zdražením nebo jste smlouvu uzavřeli před méně než 2 měsíci'],
    nehodiSe: ['vypovídáte havarijní pojištění (podobný text, jiné podmínky – zkontrolujte pojistné podmínky)', 'vozidlo vyřazujete z provozu – pojišťovně stačí doložit doklad z registru', 'jste firma s flotilovou smlouvou'],
    poNadpis: "Po odeslání.",
    po: [
      { nazev: 'Schovejte podací lístek', popis: 'A dodejku – dokud pojišťovna nepotvrdí zánik.' },
      { nazev: 'Nové pojištění bez mezery', popis: 'Auto v registru musí mít povinné ručení každý den.' },
      { nazev: 'Škodní průběh k nové pojišťovně', popis: 'Kvůli bonusu za jízdu bez nehod.' },
    ],
    faq: [
      { q: 'Kdy musím výpověď poslat?', a: 'Při výpovědi ke konci pojistného období ji pojišťovna musí dostat nejméně 6 týdnů před jeho koncem. Do 2 měsíců od uzavření smlouvy platí 8denní výpovědní doba, po pojistné události výpověď do 3 měsíců od jejího oznámení s měsíční výpovědní dobou.' },
      { q: 'Prodal jsem auto. Musím vypovídat?', a: 'Pojištění zaniká dnem, kdy pojišťovně oznámíte změnu vlastníka. Pošlete oznámení s kopií kupní smlouvy – vzor to umí.' },
      { q: 'Kde najdu konec pojistného období?', a: 'V pojistné smlouvě (výročí, počátek pojištění). Pojistné období bývá roční.' },
      { q: 'Co je potvrzení o škodním průběhu?', a: 'Přehled, zda jste měli nehody. Nová pojišťovna podle něj dává bonus; stará vám ho musí vystavit.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Výpověď se skládá přímo ve vašem prohlížeči.' },
    ],
    zakony: "Vzor vychází z § 2805 a násl. zákona č. 89/2012 Sb., občanský zákoník, a zákona č. 168/1999 Sb., o pojištění odpovědnosti z provozu vozidla. Konkrétní pojistné podmínky mohou dávat další možnosti.",
  },
  vytvorit: {
    title: "Vyplnit výpověď povinného ručení online – PDF zdarma",
    description: "Průvodce výpovědí povinného ručení: výročí, prodej auta, zdražení. Stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
