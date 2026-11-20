/** Opomena pred tužbu – Hrvatska. Pisani poziv dužniku na plaćanje s rokom; dužnik u zakašnjenju duguje zakonske zatezne kamate (ZOO). */
import type { Sablona } from '../typy';
import { iznosSlovima } from './brojevi';
import { ZOO, PATICKA } from './izvori';

export const opomenaPredTuzbu: Sablona = {
  kod: 'HR-OPOMENA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Opomena pred tužbu', podnadpis: 'poziv na plaćanje dospjelog duga',
  souborPdf: 'opomena-pred-tuzbu', paticka: PATICKA('HR-OPOMENA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vjerovnik', vpravo: 'primio (dužnik, neobavezno)' },
  cislovatClanky: false,
  slovo: { n: 'opomena', g: 'opomene', a: 'opomenu', l: 'opomeni' },
  coDal: ['Pošaljite opomenu preporučeno s povratnicom ili e-poštom s potvrdom čitanja i sačuvajte dokaz o slanju.', 'Ako dužnik ne plati u roku, obratite se javnom bilježniku (ovrha na temelju vjerodostojne isprave) ili sudu.'],
  kontrola: [
    'Dug mora biti dospio – rok plaćanja iz ugovora, računa ili dogovora je istekao.',
    'Od dospijeća dužnik duguje zakonske zatezne kamate (ZOO); stopu objavljuje Hrvatska narodna banka svakih šest mjeseci.',
    'Dajte razuman rok za plaćanje (npr. 8 ili 15 dana) i navedite točan IBAN.',
    'Ako imate račun ili izvadak iz poslovnih knjiga, ovrhu možete predložiti javnom bilježniku bez tužbe.',
  ],
  zdroje: [ZOO],
  kroky: [{ id: 'podaci', nazev: 'Vjerovnik, dužnik i dug', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Vjerovnik – ime i prezime ili naziv', placeholder: 'npr. Ivan Horvat', sirka: 34, autocomplete: 'name' },
    { id: 'p_oib', typ: 'text', popis: 'OIB vjerovnika', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa vjerovnika', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Dužnik – ime i prezime ili naziv', placeholder: 'npr. Marko Babić', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresa dužnika', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Dugovani iznos (€)', sirka: 12, polovina: true },
    { id: 'temelj', typ: 'text', popis: 'Za što dužnik duguje', placeholder: 'npr. zajam prema ugovoru od 15. 3. 2026.', sirka: 56 },
    { id: 'dospijece', typ: 'datum', popis: 'Dug je dospio dana', sirka: 14, polovina: true },
    { id: 'rok', typ: 'datum', popis: 'Platite najkasnije do', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN vjerovnika', placeholder: 'HR00 0000 0000 0000 0000 0', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovima: (d) => iznosSlovima(d.castka) },
  clanky: [{ nadpis: 'Opomena', odstavce: [
    '**Vjerovnik:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}',
    '**Dužnik:** {{k_jmeno}}, {{k_adresa}}',
    'Pozivam Vas da mi platite dospjeli dug u iznosu od **{{castka}}** (slovima: {{castka_slovima}}) po osnovi: {{temelj}}. Dug je dospio dana {{dospijece}} i do danas nije plaćen.',
    'Molim Vas da navedeni iznos uplatite najkasnije do **{{rok}}** na račun IBAN {{iban}}.',
    'Upozoravam Vas da od dana dospijeća dugujete i zakonske zatezne kamate. Ako dug ne platite u navedenom roku, pokrenut ću postupak naplate putem suda ili javnog bilježnika bez daljnje opomene, a troškovi postupka pasti će na Vaš teret.',
  ] }],
};
