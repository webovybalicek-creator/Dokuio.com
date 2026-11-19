import type { StrankaDokumentu } from '../typy';
import { plnaMocPrepisVozidla as sablona } from '../../sablony/cz/plna-moc-prepis-vozidla';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Plná moc k přepisu vozidla",
  nazevA: "plnou moc k přepisu vozidla",
  katalog: {
    popis: "Když přepis v registru vyřizuje někdo jiný.",
    kategorie: "zastoupeni",
    ilustrace: "plnamoc",
    slova: ["auto","přepis auta","registr vozidel","zmocnění","převod auta","plná moc"],
  },
  souvisejici: 'auto',
  landing: {
    title: "Plná moc k přepisu auta {rok} – vzor PDF zdarma",
    description: "Plná moc k přepisu vozidla zdarma: vyplňte online za 2 minuty nebo stáhněte vzor v PDF i Wordu. Kdy je potřeba ověřený podpis a co vzít na registr.",
    perex: "Když na registr vozidel nemůžete jít osobně, pošlete za sebe druhou stranu nebo někoho z rodiny. Vyplňte online, nebo stáhněte prázdný vzor.",
    obsahPopis: "Krátká speciální plná moc jen pro přepis jednoho konkrétního auta.",
    obsah: [
      { nazev: 'Zmocnitel', popis: 'Kdo plnou moc dává – prodávající, nebo kupující. Jméno, datum narození, adresa.' },
      { nazev: 'Zmocněnec', popis: 'Kdo vás na registru vozidel zastoupí.' },
      { nazev: 'Rozsah zmocnění', popis: 'Zápis změny vlastníka a provozovatele, převzetí dokladů, platba poplatků. Platnost do vyřízení nebo do data.' },
    ],
    kroky: [
      { nazev: 'Odpovězte na otázky', popis: 'Máte už kupní smlouvu na auto? Průvodce z ní převezme jména i údaje o voze a sám pozná, kdo plnou moc dává.' },
      { nazev: 'Stáhněte a vytiskněte', popis: 'PDF nebo Word zdarma a bez registrace.' },
      { nazev: 'Nechte ověřit podpis', popis: 'Na Czech POINTu, obecním úřadě nebo u notáře. Bez ověřeného podpisu registr plnou moc nepřijme.' },
    ],
    online: [
      'Údaje převezmeme z kupní smlouvy',
      'Sami doplníme, kdo je zmocnitel a kdo zmocněnec',
      'Kontrola VIN – úřad podle něj vůz dohledá',
      'Stažení v PDF i ve Wordu',
    ],
    hodiSe: [
      'prodávající nebo kupující nemůže jít na registr vozidel osobně',
      'přepis vyřizuje druhá strana nebo někdo z rodiny',
      'jde o běžný přepis mezi soukromými osobami',
    ],
    nehodiSe: [
      'vlastníkem je firma nebo leasingová společnost (plnou moc vystaví ona)',
      'chcete někoho zmocnit k více věcem najednou – použijte obecnou plnou moc',
      'zastoupení máte zapsané v Registru zastupování – plná moc na papíře pak není potřeba',
    ],
    poNadpis: "Po vytištění.",
    po: [
      { nazev: 'Ověřte podpis zmocnitele', popis: 'Na Czech POINTu (pošta, obecní úřad) nebo u notáře, s občanským průkazem. Podepsat můžete až na místě.' },
      { nazev: 'Předejte plnou moc zmocněnci', popis: 'Spolu s kupní smlouvou a osvědčením o registraci vozidla.' },
      { nazev: 'Přepis na registru vozidel', popis: 'Zmocněnec ho vyřídí na kterémkoli registru vozidel obce s rozšířenou působností, do 10 pracovních dnů od prodeje.' },
    ],
    faq: [
      { q: 'Musí být podpis na plné moci k přepisu auta ověřený?', a: 'Ano. Plná moc pro zápis do registru silničních vozidel musí mít úředně ověřený podpis zmocnitele (nebo uznávaný elektronický podpis). Bez ověření ji registr vozidel nepřijme.' },
      { q: 'Kde si nechám podpis ověřit?', a: 'Na kterémkoli pracovišti Czech POINT (například na poště nebo obecním úřadě) nebo u notáře. Vezměte si platný občanský průkaz. Ověření je zpoplatněné, cenu najdete na webu daného úřadu.' },
      { q: 'Musí plnou moc podepsat i zmocněnec?', a: 'Úřad to obvykle nevyžaduje, rozhodující je ověřený podpis zmocnitele. Podpis zmocněnce s textem „zmocnění přijímám“ ale ničemu nevadí a ve vzoru na něj je místo.' },
      { q: 'Můžu plnou moc podepsat na obrazovce?', a: 'Ne. Podpis na obrazovce nejde úředně ověřit, proto ho u plné moci v průvodci nenabízíme. Plnou moc vytiskněte a podepište rukou.' },
      { q: 'Kdo dává plnou moc – prodávající, nebo kupující?', a: 'Ten, kdo na registr nepůjde. Nejčastěji prodávající zmocní kupujícího, který přepis vyřídí sám. Pokud nejde ani jeden, potřebuje zmocněnec plnou moc od obou.' },
      { q: 'Ukládáte moje údaje?', a: 'Ne. Plná moc se skládá přímo ve vašem prohlížeči a údaje se na server neodesílají.' },
    ],
    zakony: "Vzor vychází z § 441 a násl. zákona č. 89/2012 Sb., občanský zákoník, a z § 6 zákona č. 56/2001 Sb., o podmínkách provozu vozidel na pozemních komunikacích.",
  },
  vytvorit: {
    title: "Vyplnit plnou moc k přepisu auta online – PDF zdarma",
    description: "Průvodce plnou mocí k přepisu vozidla: odpovězte na pár otázek a stáhněte PDF nebo Word zdarma.",
    podnadpis: "Zdarma · výsledek v PDF i ve Wordu · zabere asi 2 minuty",
  },
};

export default stranka;
