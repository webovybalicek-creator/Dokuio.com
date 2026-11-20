/**
 * English version: power of attorney for vehicle registration transfer (Czech Republic). Original: src/obsah/cz/plna-moc-prepis-vozidla.ts
 * and src/sablony/cz/plna-moc-prepis-vozidla.ts. The Czech text prevails; rules and glossary in PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'CZ-PLNAMOC-PREPIS', verze: '1.0' },

  nazev: 'Power of Attorney for Car Registration Transfer',
  nazevA: 'the power of attorney for car registration transfer',
  katalog: {
    popis: 'When someone else handles the transfer at the vehicle register.',
    slova: ['car', 'transfer of registration', 'vehicle register', 'power of attorney', 'change of owner', 'car sale', 'proxy', 'plná moc', 'přepis auta', 'registr vozidel'],
  },
  landing: {
    title: 'Car Transfer Power of Attorney Czech Republic {rok} – free PDF template',
    description:
      'Power of attorney to transfer a car’s registration in the Czech Republic, in English: when a certified signature is needed, what to bring. Free bilingual PDF or Word.',
    perex: 'If you cannot go to the vehicle register in person, send the other party or a family member instead. Fill it in online or download a blank template.',
    obsahPopis: 'A short special power of attorney (plná moc) just for transferring the registration of one specific car.',
    obsah: [
      { nazev: 'Principal', popis: 'Who grants the power of attorney – the seller or the buyer. Name, date of birth, address.' },
      { nazev: 'Attorney', popis: 'Who will represent you at the vehicle register.' },
      { nazev: 'Scope of authority', popis: 'Registration of the change of owner and operator, collecting documents, paying fees. Valid until the transfer is completed or until a date.' },
    ],
    kroky: [
      { nazev: 'Answer the questions', popis: 'Already have a car purchase agreement? The guide takes the names and car details from it and works out who grants the power of attorney.' },
      { nazev: 'Download and print', popis: 'Bilingual PDF or Word, free and without sign-up.' },
      { nazev: 'Have the signature certified', popis: 'At a Czech POINT, the municipal office (obecní úřad) or a notary. Without a certified signature the register will not accept the power of attorney.' },
    ],
    online: [
      'We take the details from the purchase agreement',
      'We work out who is the principal and who the attorney',
      'VIN check – the office finds the car by it',
      'Download as PDF and Word',
    ],
    hodiSe: [
      'the seller or the buyer cannot go to the vehicle register in person',
      'the transfer is handled by the other party or a family member',
      'it is an ordinary transfer between private individuals',
    ],
    nehodiSe: [
      'the owner is a company or a leasing company (it issues the power of attorney)',
      'you want to authorise someone for several matters at once – use a general power of attorney',
      'your representation is recorded in the Register of Representation (Registr zastupování) – a paper power of attorney is then not needed',
    ],
    poNadpis: 'After printing.',
    po: [
      { nazev: 'Have the principal’s signature certified', popis: 'At a Czech POINT (post office, municipal office) or a notary, with your identity document. You can sign on the spot.' },
      { nazev: 'Give the power of attorney to the attorney', popis: 'Together with the purchase agreement and the vehicle registration certificate.' },
      { nazev: 'Transfer at the vehicle register', popis: 'The attorney handles it at any vehicle register of a municipality with extended powers, within 10 working days of the sale.' },
    ],
    faq: [
      { q: 'Does the signature on a power of attorney for a car transfer have to be certified?', a: 'Yes. A power of attorney for registration in the Road Vehicle Register (registr silničních vozidel) must bear the principal’s officially certified signature (or a recognised electronic signature). Without certification the vehicle register will not accept it.' },
      { q: 'Where can I have my signature certified?', a: 'At any Czech POINT office (for example at a post office or municipal office) or at a notary. Bring a valid identity document. Certification is subject to a fee; you will find the price on the website of the office in question.' },
      { q: 'Does the attorney also have to sign the power of attorney?', a: 'The office does not usually require it; what matters is the principal’s certified signature. However, the attorney’s signature with the words “zmocnění přijímám” (“I accept the authorisation”) does no harm, and the template has space for it.' },
      { q: 'Can I sign the power of attorney on screen?', a: 'No. A signature on screen cannot be officially certified, so the guide does not offer it for this power of attorney. Print it and sign it by hand.' },
      { q: 'Who grants the power of attorney – the seller or the buyer?', a: 'Whoever will not go to the register. Most often the seller authorises the buyer, who handles the transfer. If neither goes, the attorney needs a power of attorney from both.' },
      { q: 'Do you store my details?', a: 'No. The power of attorney is put together directly in your browser and the details are not sent to any server.' },
    ],
    zakony:
      'The template is based on Section 441 et seq. of Czech Act No. 89/2012 Coll., the Civil Code (občanský zákoník), and Section 6 of Act No. 56/2001 Coll., on the conditions for operating vehicles on roads (zákon o podmínkách provozu vozidel na pozemních komunikacích).',
  },
  vytvorit: {
    title: 'Fill in a car transfer power of attorney online – Czech Republic, PDF',
    description: 'Guide in English for a power of attorney to transfer a car’s registration in the Czech Republic: answer a few questions and download a bilingual PDF or Word for free.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 2 minutes',
  },

  pruvodce: {
    slovo: { n: 'power of attorney', g: 'power of attorney', a: 'power of attorney', l: 'power of attorney' },
    podpisPoznamka:
      'The principal’s signature must be officially certified (Czech POINT, municipal office or notary), otherwise the vehicle register will not accept the power of attorney. So sign it by hand – either directly in front of the official, or sign it in advance and acknowledge the signature as your own there.',
    prevzit: 'car purchase agreement',
    kroky: {
      zmocnitel: { nazev: 'Who grants the power of attorney', popis: 'The principal is the person who will not go to the vehicle register and sends someone else instead.' },
      zmocnenec: { nazev: 'Who will represent you', popis: 'The attorney will go to the vehicle register instead of you. Usually it is the other party to the agreement or a family member.' },
      vozidlo: { nazev: 'Vehicle', popis: 'Copy the details from the vehicle registration certificate (osvědčení o registraci vozidla, the “small technical certificate”).' },
      platnost: { nazev: 'Validity and signature' },
    },
    pole: {
      z_role: {
        popis: 'The principal is',
        napoveda: 'Seller = current owner, buyer = new owner. If neither goes in person, fill in a power of attorney for each of them separately.',
        moznosti: { prodavajici: 'The seller (current owner)', kupujici: 'The buyer (new owner)' },
      },
      z_jmeno: { popis: 'Principal – first name and surname', napoveda: 'Full name as in the identity document. The identity is checked against it when the signature is certified.', placeholder: 'e.g. Jan Novák' },
      z_narozeni: { popis: 'Principal’s date of birth', napoveda: 'The vehicle register may also ask for the Czech personal identification number (rodné číslo) – you can add that by hand.' },
      z_adresa: { popis: 'Principal’s address', napoveda: 'Permanent address from the identity document.', placeholder: 'e.g. Nerudova 12, 251 01 Říčany' },
      m_jmeno: { popis: 'Attorney – first name and surname', napoveda: 'Full name as in the identity document. At the office the attorney proves their identity with their own document.', placeholder: 'e.g. Petra Svobodová' },
      m_narozeni: { popis: 'Attorney’s date of birth', napoveda: 'According to the attorney’s identity document.' },
      m_adresa: { popis: 'Attorney’s address', napoveda: 'Permanent address from the attorney’s identity document.', placeholder: 'e.g. Masarykova 5, 602 00 Brno' },
      znacka: { popis: 'Make and model', napoveda: 'Manufacturer and model as stated in the registration certificate (fields D.1 and D.3).', placeholder: 'e.g. Škoda Octavia Combi' },
      vin: { popis: 'VIN – vehicle identification number', napoveda: '17 characters without the letters I, O and Q. In the registration certificate it is in field E. The office finds the car by it, so copy it exactly.' },
      spz: { popis: 'Registration number (SPZ)', napoveda: 'The number on the car’s number plate; field A in the certificate.', placeholder: 'e.g. 1AB 2345' },
      orv: { popis: 'Registration certificate number', napoveda: 'The number of the “small technical certificate”, usually three letters and six digits.', placeholder: 'e.g. UAA123456' },
      platnost: {
        popis: 'How long the power of attorney is valid',
        napoveda: 'Most often until the transfer is completed. A fixed date is useful if you don’t want the power of attorney to be valid indefinitely.',
        moznosti: { ukon: 'Until the transfer is completed', datum: 'Until a certain date' },
      },
      platnost_do: { popis: 'Valid until', napoveda: 'The last day the power of attorney is valid.' },
      misto: { popis: 'Place of signing (town)', napoveda: 'The town where you sign the power of attorney. We pre-fill it from the principal’s address.', placeholder: 'e.g. Říčany' },
      datum: { popis: 'Date of signing', napoveda: 'We pre-filled today. If you will sign on another day (for example only at certification), clear the field and write the date by hand.' },
    },
    vysvetleni: [
      'Who grants the power of attorney. Their signature must be officially certified.',
      'Who will handle the transfer at the vehicle register on behalf of the principal.',
      'Exactly what the attorney may do for you. The text is deliberately limited to transferring this car only.',
    ],
    coDal: [
      'Print the power of attorney once.',
      'The principal signs it and has the signature officially certified – at a Czech POINT (post office, municipal office) or a notary. Bring your identity document.',
      'The attorney may sign “zmocnění přijímám” (“I accept the authorisation”), but the office does not usually require it.',
      'The attorney takes the certified power of attorney, the purchase agreement, the registration certificate and their own identity document to the vehicle register.',
      'The transfer must be completed within 10 working days of the transfer of the car.',
    ],
    kontrola: [
      'Have the principal’s signature officially certified (Czech POINT, municipal office, notary) – otherwise the register will not accept the power of attorney.',
      'Vehicle details (VIN, SPZ, certificate number) exactly as in the documents; a mistake = the office will refuse the transfer.',
      'The power of attorney covers only the transfer of this car. Do not sign a general power of attorney “for everything”.',
      'The attorney’s name and date of birth according to their identity document.',
      'The transfer must take place within 10 working days of the transfer of the car – arrange the power of attorney straight away.',
      'Paperless alternative: an authorisation recorded in the Register of Representation (Registr zastupování).',
    ],
    pripominky: {
      'Končí platnost plné moci k přepisu': { nazev: 'Power of attorney for the car transfer expires' },
    },
  },

  dokument: {
    nazev: 'Power of Attorney for Vehicle Registration Transfer',
    podnadpis: 'for representation in registering a change of owner in the Road Vehicle Register',
    podpisy: { vlevo: 'principal (officially certified signature)', vpravo: 'attorney – I accept the authorisation' },
    clanky: [
      {
        nadpis: 'Principal',
        odstavce: [
          '{{z_jmeno}}, date of birth {{z_narozeni}}, permanently residing at {{z_adresa}}',
          {
            uvodVzor: 'The Principal acts as (tick):',
            moznosti: {
              prodavajici: 'The Principal acts as the current owner of the vehicle (seller).',
              kupujici: 'The Principal acts as the new owner of the vehicle (buyer).',
            },
          },
        ],
      },
      {
        nadpis: 'Attorney',
        odstavce: ['{{m_jmeno}}, date of birth {{m_narozeni}}, permanently residing at {{m_adresa}}'],
      },
      {
        nadpis: 'Scope of Authority',
        odstavce: [
          'The Principal authorises the Attorney to represent the Principal in registering the change of owner and operator of the following vehicle in the Road Vehicle Register: make and model {{znacka}}, VIN {{vin}}, registration number {{spz}}, vehicle registration certificate No. {{orv}}.',
          'The Attorney is in particular entitled to file and sign the application for registration of the change, to submit and collect documents relating to the vehicle, to collect the new vehicle registration certificate and to pay the administrative and other fees connected with the registration.',
          {
            uvodVzor: 'Validity of the power of attorney (tick one option):',
            moznosti: {
              ukon: 'This power of attorney is valid until the change of owner has been registered in the Road Vehicle Register.',
              datum: 'This power of attorney is valid until {{platnost_do}}.',
            },
          },
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;
