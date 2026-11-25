/**
 * Místní blok „Pro cizince v <zemi>“ na landingu uk/en verzí (SEO.md, pravidlo 6):
 * kam s dokumentem (úřad / e-služba podle typu dokumentu) a jaké identifikační číslo se v zemi používá.
 * Typ dokumentu se odvozuje z anglického názvu kategorie (vozidla / bydlení / ostatní).
 */
import { JAZYKY_VERZI } from '../i18n';

type Typ = 'vozidla' | 'bydleni' | 'ostatni';
type Texty = { vozidla: string; bydleni: string; ostatni: string; id: string };

const EN: Record<string, Texty> = {
  cz: {
    vozidla: 'The change of owner is registered at the vehicle register of a municipal office with extended powers (any one in the country). Bring your passport or ID, the registration certificate (malý technický průkaz) and proof of compulsory insurance.',
    bydleni: 'For a residence permit or reporting your stay, the Ministry of the Interior accepts a lease or the owner’s confirmation of accommodation with an officially verified signature.',
    ostatni: 'If an office needs your signature certified, use a CzechPOINT office, a municipal office or a notary.',
    id: 'Czech forms ask for a birth number (rodné číslo); if you do not have one, give your date of birth and passport number.',
  },
  sk: {
    vozidla: 'Vehicle changes are registered at the police traffic inspectorate (dopravný inšpektorát). Bring your passport or ID and the vehicle registration certificate.',
    bydleni: 'Foreigners report their residence to the foreign police; as proof of accommodation they use the lease or the owner’s consent with an officially certified signature.',
    ostatni: 'Signatures are officially certified at a municipal office or by a notary.',
    id: 'Slovak documents use a birth number (rodné číslo); without one, give your date of birth and document number.',
  },
  pl: {
    vozidla: 'The buyer registers the vehicle at the transport department (wydział komunikacji) of the district office and files the PCC-3 tax return; the seller notifies the sale. Bring your ID or passport.',
    bydleni: 'You register your address (zameldowanie) at the municipal office; the lease or the owner’s confirmation is your proof of title.',
    ostatni: 'A notary certifies signatures when an office requires it.',
    id: 'Polish forms use the PESEL number; foreigners without PESEL give their passport number and can apply for PESEL at the municipal office.',
  },
  de: {
    vozidla: 'The buyer registers the car at the local registration office (Zulassungsstelle) or online via i-Kfz. Bring your ID or passport with a registration certificate of your address.',
    bydleni: 'Within two weeks of moving in you register at the citizens’ office (Bürgeramt); the landlord gives you the Wohnungsgeberbestätigung for that.',
    ostatni: 'If a public certification of your signature is needed, go to a notary.',
    id: 'German forms rarely need a personal number; bring a passport or ID and your registration certificate (Meldebescheinigung).',
  },
  at: {
    vozidla: 'Vehicles are registered at registration offices run by motor insurers. Bring photo ID, the vehicle documents (Typenschein, registration certificate), the insurance confirmation and, if due, the § 57a inspection report.',
    bydleni: 'Within three days of moving in you register at the registration office (Meldeamt) with a Meldezettel signed by the landlord.',
    ostatni: 'Signatures are certified by a notary or district court; ID Austria serves as an electronic signature.',
    id: 'Austrian forms rarely need a personal number; bring a passport or ID and your registration confirmation (Meldebestätigung).',
  },
  ch: {
    vozidla: 'The buyer registers the vehicle at the cantonal road traffic office (Strassenverkehrsamt) with proof of insurance; the number plates stay with the seller.',
    bydleni: 'You register with the municipality (Einwohnerkontrolle), usually within 14 days of moving; the lease is your proof of address.',
    ostatni: 'Depending on the canton, a notary or the municipality certifies signatures.',
    id: 'Swiss forms usually need only your passport or ID and residence permit; the AHV number is mainly for social insurance.',
  },
  hu: {
    vozidla: 'The change of owner is handled at a government office (kormányablak) or online via the Ügyfélkapu+ portal. Bring your passport or ID and address card if you have one.',
    bydleni: 'For your address registration the landlord signs an accommodation provider’s declaration (szállásadói nyilatkozat); EEA citizens staying longer than 90 days also register with the immigration authority.',
    ostatni: 'Signatures are certified by a notary or a lawyer’s countersignature.',
    id: 'Hungarian forms ask for the personal identification number and tax ID (adóazonosító jel); foreigners can obtain a tax ID from the tax authority.',
  },
  hr: {
    vozidla: 'Vehicles are registered at a technical inspection station (stanica za tehnički pregled), which also handles the change of owner. Bring your passport or ID and OIB.',
    bydleni: 'Foreigners register their address with the police; the lease or the owner’s consent serves as proof.',
    ostatni: 'A notary certifies signatures.',
    id: 'Almost every Croatian procedure needs an OIB (personal identification number); foreigners get one at the tax administration.',
  },
  si: {
    vozidla: 'The change of owner is registered with a registration organisation (usually a technical inspection station). Bring your passport or ID and the registration certificate.',
    bydleni: 'You register your residence at the administrative unit (upravna enota); without ownership you need the owner’s consent or the lease.',
    ostatni: 'A notary or an administrative unit certifies signatures.',
    id: 'Slovenian forms use EMŠO and a tax number (davčna številka); foreigners obtain a tax number from FURS.',
  },
  ro: {
    vozidla: 'Ownership changes go through the official form ITL 054, tax registration at the local tax office and registration at the vehicle registration service (DRPCIV). Bring your passport or ID.',
    bydleni: 'EU citizens obtain a registration certificate from the immigration authority (IGI); a lease registered with ANAF is the usual proof of address.',
    ostatni: 'A notary certifies signatures and drafts deeds that must be notarial.',
    id: 'Romanian forms ask for a CNP; foreigners without one use a tax number (NIF) issued by ANAF.',
  },
  bg: {
    vozidla: 'The sale needs notarised signatures; the buyer then registers the vehicle with the traffic police (KAT). Bring your passport or ID.',
    bydleni: 'Address registration is done at the municipality; foreigners with a residence permit register with the migration directorate, with the landlord’s declaration.',
    ostatni: 'A notary certifies signatures.',
    id: 'Bulgarian forms use the EGN; foreigners have a personal number of a foreigner (LNCh).',
  },
  gr: {
    vozidla: 'Cars and motorcycles change owner digitally on gov.gr: the seller submits, the buyer accepts. You need Taxisnet credentials and an AFM tax number.',
    bydleni: 'The landlord declares the lease electronically to AADE; the declared lease is the usual proof of address, for example for the EU registration certificate.',
    ostatni: 'Solemn declarations (υπεύθυνη δήλωση) can be signed and certified on gov.gr or at a citizen service centre (KEP).',
    id: 'Almost every procedure needs an AFM (tax number); foreigners obtain one at the tax office.',
  },
  ee: {
    vozidla: 'The change of owner is made in the Transport Administration’s e-service (Transpordiamet) within five working days. Log in with an Estonian ID card, Mobile-ID or Smart-ID.',
    bydleni: 'You register your residence in the population register via eesti.ee or the municipality; if you do not own the home, the owner’s consent is needed.',
    ostatni: 'Documents can be signed digitally with an Estonian ID card, Mobile-ID or Smart-ID; a notary certifies paper signatures.',
    id: 'Estonian forms use the personal identification code (isikukood); foreigners receive one with residence registration or e-Residency.',
  },
  lv: {
    vozidla: 'The change of owner is made in e-CSDD or at a CSDD office: the buyer marks the vehicle, the seller confirms within 5 days. Bring your passport or ID.',
    bydleni: 'You declare your place of residence on latvija.gov.lv or at the Office of Citizenship and Migration Affairs; at someone else’s home the owner’s consent is needed.',
    ostatni: 'A notary or the orphans’ court in smaller municipalities certifies signatures.',
    id: 'Latvian forms use the personal code (personas kods); foreigners get one when registering their residence.',
  },
  lt: {
    vozidla: 'The buyer submits the acquisition declaration to Regitra within 5 working days and the seller confirms it; you need the owner declaration code (SDK). Bring your passport or ID.',
    bydleni: 'You declare your place of residence via the e-services portal or the local eldership; at someone else’s home the owner’s consent is needed.',
    ostatni: 'A notary certifies signatures.',
    id: 'Lithuanian forms use the personal code (asmens kodas); foreigners receive one with their residence permit or registration.',
  },
};

const UK: Record<string, Texty> = {
  cz: {
    vozidla: 'Зміну власника реєструють у реєстрі транспортних засобів міської ради з розширеними повноваженнями (будь-якої в країні). Візьміть паспорт чи ID, свідоцтво про реєстрацію (malý technický průkaz) і поліс обов’язкового страхування.',
    bydleni: 'Для дозволу на проживання чи повідомлення про перебування Міністерство внутрішніх справ приймає договір оренди або підтвердження власника про житло з офіційно засвідченим підписом.',
    ostatni: 'Якщо установі потрібен засвідчений підпис, зверніться до CzechPOINT, міської ради чи нотаріуса.',
    id: 'Чеські форми просять rodné číslo; якщо його немає, вкажіть дату народження й номер паспорта.',
  },
  sk: {
    vozidla: 'Зміни щодо транспортних засобів реєструє дорожня інспекція поліції (dopravný inšpektorát). Візьміть паспорт чи ID і свідоцтво про реєстрацію.',
    bydleni: 'Іноземці повідомляють про проживання поліції у справах іноземців; доказ житла – договір оренди або згода власника з офіційно засвідченим підписом.',
    ostatni: 'Підписи офіційно засвідчують у міській раді чи в нотаріуса.',
    id: 'У словацьких документах використовують rodné číslo; без нього вкажіть дату народження й номер документа.',
  },
  pl: {
    vozidla: 'Покупець реєструє авто у відділі комунікації (wydział komunikacji) повітового управління й подає декларацію PCC-3; продавець повідомляє про продаж. Візьміть ID чи паспорт.',
    bydleni: 'Адресу реєструють (zameldowanie) у гміні; договір оренди чи підтвердження власника доводить право на житло.',
    ostatni: 'Нотаріус засвідчує підписи, коли цього вимагає установа.',
    id: 'Польські форми використовують PESEL; іноземці без PESEL вказують номер паспорта й можуть отримати PESEL у гміні.',
  },
  de: {
    vozidla: 'Покупець реєструє авто в місцевому пункті реєстрації (Zulassungsstelle) або онлайн через i-Kfz. Візьміть ID чи паспорт і довідку про реєстрацію адреси.',
    bydleni: 'Протягом двох тижнів після заселення ви реєструєтеся в Bürgeramt; орендодавець дає вам для цього Wohnungsgeberbestätigung.',
    ostatni: 'Якщо потрібне публічне засвідчення підпису, зверніться до нотаріуса.',
    id: 'Німецькі форми рідко потребують персонального номера; візьміть паспорт чи ID і довідку про реєстрацію (Meldebescheinigung).',
  },
  at: {
    vozidla: 'Транспортні засоби реєструють у пунктах реєстрації при автостраховиках. Візьміть фотодокумент, документи на авто (Typenschein, свідоцтво про реєстрацію), підтвердження страхування й, якщо потрібно, звіт техогляду за § 57a.',
    bydleni: 'Протягом трьох днів після заселення ви реєструєтеся в Meldeamt із Meldezettel, підписаним орендодавцем.',
    ostatni: 'Підписи засвідчує нотаріус чи районний суд; ID Austria слугує електронним підписом.',
    id: 'Австрійські форми рідко потребують персонального номера; візьміть паспорт чи ID і підтвердження реєстрації (Meldebestätigung).',
  },
  ch: {
    vozidla: 'Покупець реєструє транспортний засіб у кантональному управлінні дорожнього руху (Strassenverkehrsamt) з підтвердженням страхування; номерні знаки лишаються в продавця.',
    bydleni: 'Ви реєструєтеся в громаді (Einwohnerkontrolle), зазвичай протягом 14 днів після переїзду; договір оренди доводить адресу.',
    ostatni: 'Залежно від кантону підписи засвідчує нотаріус або громада.',
    id: 'Швейцарським формам зазвичай достатньо паспорта чи ID і дозволу на проживання; номер AHV потрібен переважно для соціального страхування.',
  },
  hu: {
    vozidla: 'Зміну власника оформлюють в урядовому віконці (kormányablak) або онлайн через портал Ügyfélkapu+. Візьміть паспорт чи ID і картку адреси, якщо маєте.',
    bydleni: 'Для реєстрації адреси орендодавець підписує декларацію надавача житла (szállásadói nyilatkozat); громадяни ЄЕЗ, які залишаються понад 90 днів, реєструються й в імміграційному органі.',
    ostatni: 'Підписи засвідчує нотаріус або контрасигнація адвоката.',
    id: 'Угорські форми просять персональний ідентифікаційний номер і податковий номер (adóazonosító jel); іноземці отримують податковий номер у податковій.',
  },
  hr: {
    vozidla: 'Транспортні засоби реєструють на станції техогляду (stanica za tehnički pregled), яка оформлює й зміну власника. Візьміть паспорт чи ID і OIB.',
    bydleni: 'Іноземці реєструють адресу в поліції; доказом є договір оренди чи згода власника.',
    ostatni: 'Підписи засвідчує нотаріус.',
    id: 'Майже для всього в Хорватії потрібен OIB (персональний ідентифікаційний номер); іноземці отримують його в податковій адміністрації.',
  },
  si: {
    vozidla: 'Зміну власника реєструє реєстраційна організація (зазвичай станція техогляду). Візьміть паспорт чи ID і свідоцтво про реєстрацію.',
    bydleni: 'Місце проживання реєструють в адміністративному підрозділі (upravna enota); якщо житло не ваше, потрібна згода власника чи договір оренди.',
    ostatni: 'Підписи засвідчує нотаріус або адміністративний підрозділ.',
    id: 'Словенські форми використовують EMŠO й податковий номер (davčna številka); іноземці отримують податковий номер у FURS.',
  },
  ro: {
    vozidla: 'Зміну власника оформлюють через офіційну форму ITL 054, податкову реєстрацію в місцевій податковій і реєстрацію в службі реєстрації транспортних засобів (DRPCIV). Візьміть паспорт чи ID.',
    bydleni: 'Громадяни ЄС отримують реєстраційне посвідчення в імміграційному органі (IGI); звичайний доказ адреси – договір оренди, зареєстрований в ANAF.',
    ostatni: 'Нотаріус засвідчує підписи й складає акти, які мають бути нотаріальними.',
    id: 'Румунські форми просять CNP; іноземці без нього використовують податковий номер (NIF) від ANAF.',
  },
  bg: {
    vozidla: 'Для продажу потрібні нотаріально засвідчені підписи; потім покупець реєструє транспортний засіб у дорожній поліції (КАТ). Візьміть паспорт чи ID.',
    bydleni: 'Адресну реєстрацію оформлюють у громаді; іноземці з дозволом на проживання реєструються в дирекції з міграції з декларацією орендодавця.',
    ostatni: 'Підписи засвідчує нотаріус.',
    id: 'Болгарські форми використовують ЄГН; іноземці мають особистий номер іноземця (ЛНЧ).',
  },
  gr: {
    vozidla: 'Авто й мотоцикли змінюють власника цифрово на gov.gr: продавець подає, покупець приймає. Потрібні облікові дані Taxisnet і податковий номер AFM.',
    bydleni: 'Орендодавець електронно декларує договір оренди в AADE; задекларований договір – звичайний доказ адреси, наприклад для реєстраційного посвідчення ЄС.',
    ostatni: 'Урочисті заяви (υπεύθυνη δήλωση) можна підписати й засвідчити на gov.gr або в центрі обслуговування громадян (KEP).',
    id: 'Майже для всього потрібен AFM (податковий номер); іноземці отримують його в податковій.',
  },
  ee: {
    vozidla: 'Зміну власника оформлюють в е-сервісі Транспортного управління (Transpordiamet) протягом п’яти робочих днів. Вхід через естонську ID-картку, Mobile-ID чи Smart-ID.',
    bydleni: 'Місце проживання реєструють у реєстрі населення через eesti.ee або в самоврядуванні; якщо житло не ваше, потрібна згода власника.',
    ostatni: 'Документи можна підписати цифрово естонською ID-карткою, Mobile-ID чи Smart-ID; паперові підписи засвідчує нотаріус.',
    id: 'Естонські форми використовують особистий код (isikukood); іноземці отримують його з реєстрацією проживання чи e-Residency.',
  },
  lv: {
    vozidla: 'Зміну власника оформлюють в e-CSDD або у відділенні CSDD: покупець позначає транспортний засіб, продавець підтверджує протягом 5 днів. Візьміть паспорт чи ID.',
    bydleni: 'Місце проживання декларують на latvija.gov.lv або в Управлінні у справах громадянства й міграції; у чужому житлі потрібна згода власника.',
    ostatni: 'Підписи засвідчує нотаріус, а в менших самоврядуваннях – сирітський суд.',
    id: 'Латиські форми використовують персональний код (personas kods); іноземці отримують його під час реєстрації проживання.',
  },
  lt: {
    vozidla: 'Покупець протягом 5 робочих днів подає до Regitra декларацію набуття, а продавець її підтверджує; потрібен код декларування власника (SDK). Візьміть паспорт чи ID.',
    bydleni: 'Місце проживання декларують через портал е-послуг або в старостві; у чужому житлі потрібна згода власника.',
    ostatni: 'Підписи засвідчує нотаріус.',
    id: 'Литовські форми використовують персональний код (asmens kodas); іноземці отримують його з дозволом на проживання чи реєстрацією.',
  },
};

const NADPIS: Record<string, (v: string) => string> = { en: (v) => `For foreigners ${v}`, uk: (v) => `Для іноземців ${v}` };

function typ(kategorie: string): Typ {
  const n = JAZYKY_VERZI.en?.kategorie[kategorie] ?? '';
  if (/vehicle/i.test(n)) return 'vozidla';
  if (/housing/i.test(n)) return 'bydleni';
  return 'ostatni';
}

/** Blok pro cizince pro danou zemi, jazyk verze a kategorii dokumentu (nebo undefined, když texty chybí). */
export function cizinci(zeme: string, jazyk: string, kategorie: string): { nadpis: string; body: string[] } | undefined {
  const T = (jazyk === 'en' ? EN : jazyk === 'uk' ? UK : undefined)?.[zeme];
  const V = JAZYKY_VERZI[jazyk];
  if (!T || !V?.zeme[zeme]) return undefined;
  const t = typ(kategorie);
  // Jen texty podle typu dokumentu – věta opakovaná na všech dokumentech země by byla šablonový text (SEO.md, pravidlo 1).
  return { nadpis: NADPIS[jazyk](V.zeme[zeme].v), body: t === 'ostatni' ? [T.ostatni, T.id] : [T[t]] };
}
