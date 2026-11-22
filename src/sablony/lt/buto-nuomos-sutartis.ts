/**
 * Gyvenamosios patalpos nuomos sutartis – Lietuva (Civilinio kodekso 6.576 ir kt. str.). Nuomininkas gali nutraukti sutartį raštu
 * įspėjęs nuomotoją prieš mėnesį (6.609); subnuoma tik su rašytiniu nuomotojo ir kartu gyvenančių šeimos narių sutikimu (6.595).
 */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const nuomosSutartis: Sablona = {
  kod: 'LT-NUOMA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Gyvenamosios patalpos nuomos sutartis', podnadpis: 'buto ar namo nuoma gyventi (Civilinio kodekso 6.576 ir kiti straipsniai)',
  souborPdf: 'buto-nuomos-sutartis', paticka: PORASTE('LT-NUOMA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nuomotojas', vpravo: 'nuomininkas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Pasirašykite sutartį dviem egzemplioriais.', 'Perduodami raktus, surašykite perdavimo–priėmimo aktą su skaitiklių rodmenimis.', 'Nuomotojas nuomos pajamas deklaruoja ir moka pajamų mokestį (VMI).'],
  kontrola: [
    'Sudarykite sutartį raštu – terminuota gyvenamosios patalpos nuomos sutartis sudaroma raštu, o rašytinė sutartis yra geriausias įrodymas abiem šalims.',
    `Nuomininkas gali nutraukti tiek terminuotą, tiek neterminuotą sutartį, raštu įspėjęs nuomotoją prieš vieną mėnesį ([Civilinio kodekso 6.609 str.](${CK.url})). Nuomotojas sutartį gali nutraukti tik įstatyme nustatytais pagrindais ir tvarka.`,
    `Subnuomoti gyvenamąją patalpą galima tik gavus rašytinį nuomotojo ir kartu gyvenančių šeimos narių sutikimą ([Civilinio kodekso 6.595 str.](${CK.url})).`,
    'Užstato dydžio įstatymas neriboja – įprastai tai vienas ar du mėnesio nuomos mokesčiai. Įrašykite, kada ir kaip jis grąžinamas.',
    'Jei nuomininkas nori deklaruoti gyvenamąją vietą, sutartyje patogu įrašyti nuomotojo sutikimą – tada savivaldybei pakanka pateikti sutartį.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Nuomotojas ir nuomininkas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Nuomotojas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Nuomotojo adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Nuomininkas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Nuomininko dabartinis adresas', sirka: 46 },
    ] },
    { id: 'patalpa', nazev: 'Gyvenamoji patalpa', pole: [
      { id: 'byt', typ: 'text', popis: 'Gyvenamosios patalpos adresas', placeholder: 'pvz., Vilniaus g. 25-12, Vilnius', sirka: 46 },
      { id: 'unikalus', typ: 'text', popis: 'Unikalus numeris (neprivaloma)', napoveda: 'Iš Nekilnojamojo turto registro išrašo.', placeholder: 'pvz., 1098-7654-3210:0012', sirka: 24 },
      { id: 'platiba', typ: 'cislo', popis: 'Bendras plotas', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'istabas', typ: 'cislo', popis: 'Kambarių skaičius', sirka: 6, polovina: true },
      { id: 'mebeles', typ: 'volba', popis: 'Įrengimas', moznosti: [ { hodnota: 'ir', popis: 'su baldais (sąrašas perdavimo–priėmimo akte)' }, { hodnota: 'nav', popis: 'be baldų' } ] },
      { id: 'iemitinatie', typ: 'text', popis: 'Kartu su nuomininku gyvens (neprivaloma)', placeholder: 'pvz., sutuoktinė Eglė Petrauskienė ir sūnus Jonas', sirka: 56 },
    ] },
    { id: 'salygos', nazev: 'Terminas ir nuomos mokestis', pole: [
      { id: 'terminas', typ: 'volba', popis: 'Nuomos terminas', moznosti: [ { hodnota: 'terminuota', popis: 'terminuota (iki nustatytos datos)' }, { hodnota: 'neterminuota', popis: 'neterminuota' } ] },
      { id: 'od', typ: 'datum', popis: 'Nuomos pradžia', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Nuomos pabaiga', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'terminas', je: 'terminuota' } },
      { id: 'ires_maksa', typ: 'castka', popis: 'Mėnesio nuomos mokestis (eurais)', sirka: 12, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Mokėti iki kiekvieno mėnesio … dienos', placeholder: 'pvz., 5', sirka: 6, polovina: true },
      { id: 'drosibas_nauda', typ: 'castka', popis: 'Užstatas (eurais)', napoveda: 'Įprastai vieno ar dviejų mėnesių nuomos mokestis.', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Nuomotojo IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'pakalpojumi', typ: 'text', popis: 'Mokesčiai už paslaugas', placeholder: 'pvz., už šildymą, vandenį, elektrą ir namo administravimą nuomininkas moka pagal sąskaitas', sirka: 56 },
      { id: 'deklaravimas', typ: 'volba', popis: 'Gyvenamosios vietos deklaravimas', moznosti: [ { hodnota: 'leidzia', popis: 'nuomotojas sutinka, kad nuomininkas deklaruotų gyvenamąją vietą' }, { hodnota: 'neleidzia', popis: 'gyvenamoji vieta nedeklaruojama' } ] },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { ires_maksa_vardiem: (d) => sumaZodziais(d.ires_maksa), drosibas_nauda_vardiem: (d) => sumaZodziais(d.drosibas_nauda) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Nuomotojas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}', '**Nuomininkas:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}'] },
    { nadpis: 'Nuomojama gyvenamoji patalpa', vysvetleni: 'Kokia gyvenamoji patalpa nuomojama.', odstavce: ['Nuomotojas perduoda nuomininkui laikinai valdyti ir naudotis gyventi gyvenamąją patalpą adresu {{byt}}, unikalus numeris {{unikalus}}, bendras plotas {{platiba}} m², kambarių skaičius {{istabas}}.', { volba: 'mebeles', uvodVzor: 'Įrengimas (pažymėkite vieną variantą):', moznosti: { ir: 'Gyvenamoji patalpa nuomojama su baldais; jų sąrašas nurodytas perdavimo–priėmimo akte.', nav: 'Gyvenamoji patalpa nuomojama be baldų.' } }, 'Kartu su nuomininku gyvenamojoje patalpoje gyvens: {{iemitinatie}}.'] },
    { nadpis: 'Sutarties terminas', vysvetleni: 'Nuomininkas gali nutraukti sutartį įspėjęs prieš mėnesį.', odstavce: [{ volba: 'terminas', uvodVzor: 'Terminas (pažymėkite vieną variantą):', moznosti: { terminuota: 'Sutartis sudaryta terminuotai nuo {{od}} iki {{do}}.', neterminuota: 'Sutartis sudaryta neterminuotai nuo {{od}}.' } }, 'Nuomininkas gali nutraukti sutartį, raštu įspėjęs nuomotoją prieš vieną mėnesį. Nuomotojas sutartį gali nutraukti tik Lietuvos Respublikos civilinio kodekso nustatytais pagrindais ir tvarka.', 'Sutarčiai pasibaigus, nuomininkas atlaisvina ir grąžina gyvenamąją patalpą tokios pat būklės, atsižvelgiant į normalų nusidėvėjimą.'] },
    { nadpis: 'Nuomos mokestis ir užstatas', vysvetleni: 'Kiek ir kada mokama.', odstavce: ['Mėnesio nuomos mokestis yra **{{ires_maksa}}** (žodžiais: {{ires_maksa_vardiem}}); jis mokamas iki kiekvieno mėnesio {{diena}} dienos į nuomotojo sąskaitą IBAN {{iban}}.', 'Nuomininkas sumoka {{drosibas_nauda}} (žodžiais: {{drosibas_nauda_vardiem}}) užstatą. Nuomotojas jį grąžina ne vėliau kaip per 14 dienų nuo patalpos grąžinimo, išskaičiavęs pagrįstus reikalavimus pagal šią sutartį.', 'Mokesčiai už paslaugas: {{pakalpojumi}}.'] },
    { nadpis: 'Gyvenamosios patalpos naudojimas', odstavce: ['Nuomininkas naudojasi gyvenamąja patalpa rūpestingai ir laikydamasis namo vidaus tvarkos taisyklių. Pertvarkyti ir perplanuoti patalpą galima tik gavus rašytinį nuomotojo sutikimą.', 'Subnuomoti gyvenamąją patalpą ar apgyvendinti kitus asmenis galima tik gavus rašytinį nuomotojo sutikimą.', { volba: 'deklaravimas', uvodVzor: 'Gyvenamosios vietos deklaravimas (pažymėkite vieną variantą):', moznosti: { leidzia: 'Nuomotojas sutinka, kad nuomininkas ir kartu gyvenantys asmenys deklaruotų gyvenamąją vietą nuomojamoje patalpoje nuomos laikotarpiu.', neleidzia: 'Šalys susitaria, kad gyvenamoji vieta nuomojamoje patalpoje nedeklaruojama.' } }] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl gyvenamosios patalpos nuomos. Pakeitimai daromi raštu. Sutartis sudaryta dviem vienodais egzemplioriais.'] },
  ],
};
