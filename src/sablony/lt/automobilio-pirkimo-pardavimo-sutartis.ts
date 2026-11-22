/**
 * Naudotos transporto priemonės pirkimo–pardavimo sutartis tarp fizinių asmenų – Lietuva (Civilinio kodekso 6.305 ir kt. str.).
 * Regitra: pirkėjas įgijimą deklaruoja per 5 darbo dienas nuo sandorio, pardavėjas patvirtina per 5 darbo dienas nuo pirkėjo
 * deklaracijos; be galiojančio SDK deklaruoti neįmanoma; eisme dalyvauti – registruoti per 10 kalendorinių dienų nuo deklaravimo.
 */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { naDatum, pridejPracovniDny, isoDatum } from '../terminy';
import { CK, REGITRA, GRYNIEJI, PAD_ASMUO, PAD_GRYNIEJI, PORASTE } from './saltiniai';

export const autoSutartis: Sablona = {
  kod: 'LT-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Transporto priemonės pirkimo–pardavimo sutartis', podnadpis: 'naudotos transporto priemonės pardavimas tarp fizinių asmenų (Civilinis kodeksas)',
  souborPdf: 'automobilio-pirkimo-pardavimo-sutartis', paticka: PORASTE('LT-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'pardavėjas', vpravo: 'pirkėjas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: [
    'Atsispausdinkite sutartį dviem egzemplioriais ir pasirašykite abu.',
    'Pirkėjas per 5 darbo dienas nuo sandorio pateikia Regitrai įgijimo deklaraciją, o pardavėjas per 5 darbo dienas ją patvirtina (internetu eregitra.lt arba padalinyje). Raktelius geriausia perduoti tik po abiejų deklaracijų.',
    'Gavęs naują SDK, pirkėjas, norėdamas važiuoti, per 10 kalendorinių dienų registruoja transporto priemonę savo vardu ir pasirūpina privalomuoju draudimu.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predavane_datum);
    if (!od) return [];
    return [{ nazev: 'Įgijimo deklaracija Regitrai (5 darbo dienos)', datum: isoDatum(pridejPracovniDny(od, 5, 'lt')), popis: 'Pirkėjas pateikia įgijimo deklaraciją, pardavėjas ją patvirtina per 5 darbo dienas.' }];
  },
  kontrola: [
    `Patikrinkite, ar transporto priemonė turi galiojantį savininko deklaravimo kodą (SDK) – be jo nuosavybės pasikeitimo nepavyks deklaruoti, o transporto priemonės įregistruoti ([Regitra](${REGITRA.url})).`,
    'Pirkėjas įgijimą deklaruoja per 5 darbo dienas nuo sandorio, pardavėjas jį patvirtina per 5 darbo dienas nuo pirkėjo deklaracijos. Tik tada pirkėjas gauna naują SDK.',
    `Norėdamas dalyvauti eisme, pirkėjas transporto priemonę turi įregistruoti per 10 kalendorinių dienų nuo deklaravimo, kitaip ji išregistruojama ([Regitra](${REGITRA.url})).`,
    'Pardavėjas turi būti registracijos liudijime įrašytas savininkas – palyginkite duomenis su jo asmens dokumentu. Regitros paslaugose prieš mokėdami patikrinkite, ar transporto priemonė neareštuota ir neįkeista.',
    'VIN registracijos liudijime turi sutapti su numeriu ant transporto priemonės. Žinomus trūkumus įrašykite konkrečiai, o ne palikite tuščią lauką.',
    PAD_ASMUO,
    `${PAD_GRYNIEJI} ([įstatymas](${GRYNIEJI.url}))`,
  ],
  zdroje: [CK, REGITRA, GRYNIEJI],
  kroky: [
    { id: 'salys', nazev: 'Pardavėjas ir pirkėjas', popis: 'Duomenys iš asmens tapatybės dokumento.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pardavėjas – vardas, pavardė', napoveda: 'Registracijos liudijime įrašytas savininkas.', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Pardavėjo asmens kodas', placeholder: 'pvz., 48001011234', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Pardavėjo adresas', placeholder: 'pvz., Gedimino pr. 10-5, Vilnius', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Pirkėjas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Pirkėjo asmens kodas', placeholder: 'pvz., 38505151234', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Pirkėjo adresas', placeholder: 'pvz., Laisvės al. 5, Kaunas', sirka: 46 },
    ] },
    { id: 'transporto_priemone', nazev: 'Transporto priemonė', popis: 'Įrašykite duomenis iš registracijos liudijimo.', pole: [
      { id: 'znacka', typ: 'text', popis: 'Markė ir modelis', placeholder: 'pvz., Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'Identifikavimo numeris (VIN)', napoveda: '17 ženklų, registracijos liudijimo laukelis E.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Valstybinis registracijos numeris', placeholder: 'pvz., ABC 123', sirka: 12, polovina: true },
      { id: 'sdk', typ: 'text', popis: 'Savininko deklaravimo kodas (SDK)', napoveda: '8 raidės; pardavėjas jį gauna iš Regitros. Galiojimą patikrinkite Regitros paslaugose.', placeholder: 'pvz., ABCDEFGH', sirka: 12, polovina: true },
      { id: 'rok', typ: 'text', popis: 'Pirmosios registracijos metai', placeholder: 'pvz., 2017', sirka: 10, polovina: true },
      { id: 'barva', typ: 'text', popis: 'Spalva', placeholder: 'pvz., pilka metalik', sirka: 18, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Rida', napoveda: 'Nuskaitykite pasirašymo dieną.', placeholder: 'pvz., 168400', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'defekti', typ: 'volba', popis: 'Žinomi trūkumai', napoveda: 'Sąžiningai papasakokite, ką žinote – už trūkumus, apie kuriuos pirkėjas žinojo, pardavėjas vėliau neatsako.', moznosti: [ { hodnota: 'nav', popis: 'Pardavėjui trūkumai nežinomi' }, { hodnota: 'ir', popis: 'Transporto priemonė turi žinomų trūkumų' } ] },
      { id: 'defekti_apraksts', typ: 'textarea', popis: 'Trūkumų aprašymas', placeholder: 'pvz., įskilęs priekinis stiklas, neveikia kondicionierius', sirka: 56, zobrazitKdyz: { pole: 'defekti', je: 'ir' } },
    ] },
    { id: 'kaina', nazev: 'Kaina ir atsiskaitymas', pole: [
      { id: 'cena', typ: 'castka', popis: 'Kaina (eurais)', napoveda: 'Sumą žodžiais pridėsime patys.', placeholder: 'pvz., 7900', sirka: 12, polovina: true },
      { id: 'samaksa', typ: 'volba', popis: 'Atsiskaitymo būdas', napoveda: 'Grynaisiais galima atsiskaityti ne daugiau kaip 5 000 €. Banko pavedimas palieka mokėjimo įrodymą.', moznosti: [ { hodnota: 'skaidra', popis: 'Grynaisiais, pasirašant' }, { hodnota: 'banka', popis: 'Į pardavėjo banko sąskaitą' } ] },
      { id: 'iban', typ: 'text', popis: 'Pardavėjo IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
      { id: 'samaksas_termins', typ: 'datum', popis: 'Mokėjimo terminas', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
    ] },
    { id: 'perdavimas', nazev: 'Perdavimas', pole: [
      { id: 'predavane_datum', typ: 'datum', popis: 'Perdavimo data', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'predavane_ora', typ: 'text', popis: 'Perdavimo laikas', napoveda: 'Svarbu, jei vėliau ateitų bauda.', placeholder: 'pvz., 14:30', sirka: 8, polovina: true },
      { id: 'atslegas', typ: 'cislo', popis: 'Raktelių skaičius', placeholder: 'pvz., 2', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Pasirašymo vieta', placeholder: 'pvz., Vilnius', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Pasirašymo data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => sumaZodziais(d.cena) },
  clanky: [
    { nadpis: 'Šalys', vysvetleni: 'Kas sudaro sutartį. Duomenys turi sutapti su asmens dokumentais.', odstavce: ['**Pardavėjas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}', '**Pirkėjas:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}'] },
    { nadpis: 'Sutarties dalykas', vysvetleni: 'Kokia transporto priemonė parduodama. Svarbiausi – VIN ir SDK.', odstavce: ['Pardavėjas parduoda, o pirkėjas perka lengvąjį automobilį, markė ir modelis {{znacka}}, identifikavimo numeris (VIN) {{vin}}, valstybinis registracijos numeris {{spz}}, savininko deklaravimo kodas (SDK) {{sdk}}, pirmosios registracijos metai {{rok}}, spalva {{barva}} (toliau – transporto priemonė).', 'Pardavėjas patvirtina, kad transporto priemonė priklauso jam nuosavybės teise, nėra areštuota, įkeista, išperkamosios nuomos (lizingo) dalykas ir tretieji asmenys į ją neturi jokių teisių.'] },
    { nadpis: 'Transporto priemonės būklė', vysvetleni: 'Ką pardavėjas žino apie transporto priemonę.', odstavce: ['Rida pasirašymo dieną yra {{km}} km. Pardavėjui nežinoma, kad odometras būtų keistas ar jo rodmenys pakeisti.', { volba: 'defekti', uvodVzor: 'Žinomi trūkumai (pažymėkite vieną variantą):', moznosti: { nav: 'Pardavėjui transporto priemonės trūkumai nežinomi.', ir: 'Pardavėjas informavo pirkėją apie šiuos transporto priemonės trūkumus: {{defekti_apraksts}}' } }, 'Pirkėjas patvirtina, kad prieš sudarydamas sutartį apžiūrėjo transporto priemonę, įvertino jos ridą ir būklę ir perka ją tokios būklės, kokia yra.'] },
    { nadpis: 'Kaina ir atsiskaitymas', vysvetleni: 'Kiek, kaip ir kada mokama.', odstavce: ['Transporto priemonės kaina yra **{{cena}}** (žodžiais: {{cena_vardiem}}).', { volba: 'samaksa', uvodVzor: 'Atsiskaitymo būdas (pažymėkite vieną variantą):', moznosti: { skaidra: 'Pirkėjas sumokėjo kainą grynaisiais pinigais pasirašant sutartį. Savo parašu pardavėjas patvirtina, kad gavo visą sumą.', banka: 'Pirkėjas sumoka kainą į pardavėjo banko sąskaitą IBAN {{iban}} ne vėliau kaip {{samaksas_termins}}.' } }] },
    { nadpis: 'Transporto priemonės perdavimas', vysvetleni: 'Kada ir su kuo pirkėjas gauna transporto priemonę.', odstavce: ['Pardavėjas perduoda pirkėjui transporto priemonę {{predavane_datum}} {{predavane_ora}} val. kartu su {{atslegas}} rakteliais, registracijos liudijimu ir kitais transporto priemonės dokumentais.', 'Perdavus transporto priemonę, jos atsitiktinio žuvimo ir sugadinimo rizika pereina pirkėjui. Nuo šio momento pirkėjas atsako už transporto priemonės naudojimą, ypač už kelių eismo taisyklių pažeidimus.'] },
    { nadpis: 'Nuosavybės pasikeitimo deklaravimas', vysvetleni: 'Kas vyksta toliau ir kas tai daro.', odstavce: ['Pirkėjas ne vėliau kaip per 5 darbo dienas nuo sutarties sudarymo pateikia Regitrai transporto priemonės įgijimo deklaraciją, o pardavėjas ne vėliau kaip per 5 darbo dienas nuo pirkėjo deklaracijos pateikimo ją patvirtina perleidimo deklaracija.', 'Pirkėjas, norėdamas dalyvauti eisme, transporto priemonę savo vardu įregistruoja per 10 kalendorinių dienų nuo deklaravimo ir prieš važiuodamas pasirūpina transporto priemonių valdytojų civilinės atsakomybės privalomuoju draudimu. Registracijos išlaidas apmoka pirkėjas, jeigu šalys nesusitarė kitaip.'] },
    { nadpis: 'Baigiamosios nuostatos', vysvetleni: 'Formalumai.', odstavce: ['Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl pirkimo–pardavimo.', 'Sutartis sudaryta dviem vienodais egzemplioriais, po vieną kiekvienai šaliai.'] },
  ],
};
