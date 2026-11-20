/**
 * English version: notice of termination of a contract (mobile, insurance, electricity, subscription…) in Austria.
 * Original: src/obsah/at/kuendigung-vertrag.ts and src/sablony/at/kuendigung-vertrag.ts.
 * The German text prevails; rules and glossary – PREKLADY.md.
 */
import type { PrekladDokumentu } from '../../typy';

export default {
  sablona: { kod: 'AT-KUENDIGUNG-VERTRAG', verze: '1.0' },

  nazev: 'Contract Termination Letter',
  nazevA: 'notice of termination of a contract',
  katalog: {
    popis: 'Cancel a mobile, internet, insurance, electricity, gym or subscription contract.',
    slova: ['contract termination', 'cancel a contract', 'cancellation letter', 'notice of termination', 'mobile contract', 'internet', 'insurance', 'insurance policy', 'electricity', 'gas', 'gym membership', 'subscription', 'Kündigung', 'Vertrag kündigen', 'Kündigungsschreiben'],
  },
  landing: {
    title: 'Contract Termination Letter Austria {rok} – free PDF template',
    description:
      'Termination letter for Austria: mobile, internet, insurance, electricity, gas, gym or subscription, with notice periods per RTR and KSchG. Free bilingual PDF and Word.',
    perex: 'Mobile contract, insurance policy (Polizze), electricity supplier or gym – a notice of termination (Kündigung) with all the details so that the company can match it to your contract straight away. With the notice periods that apply in Austria.',
    obsahPopis: 'Letter to the company, tailored to the type of contract.',
    obsah: [
      { nazev: 'Sender and company', popis: 'Your details exactly as on the invoice or policy.' },
      { nazev: 'Contract', popis: 'Customer, contract or policy number, phone number or metering point (Zählpunkt).' },
      { nazev: 'End of contract', popis: 'To the next possible date, to a specific date or without notice for good cause.' },
      { nazev: 'Other requests', popis: 'Confirmation, end of direct debit, refund of a credit balance.' },
    ],
    kroky: [
      { nazev: 'Choose the contract', popis: 'Mobile, insurance, electricity, gym, subscription or other.' },
      { nazev: 'Enter the numbers', popis: 'Copy them from the invoice or your customer account.' },
      { nazev: 'Sign and send', popis: 'By registered post or via the provider’s form.' },
    ],
    online: ['Notice period tips for every type of contract', 'Option “to the next possible date”', 'Calendar reminder for the termination confirmation', 'Download as PDF and Word'],
    hodiSe: ['you are a private person cancelling a mobile, internet or landline contract', 'you are cancelling an insurance, electricity or gas contract', 'you are ending a gym membership, a subscription or a service'],
    nehodiSe: ['rented flat – use the tenancy termination notice instead', 'job – use the notice of termination of employment instead', 'online purchase within 14 days – use the withdrawal (Rücktritt) instead'],
    poNadpis: 'After sending.',
    po: [
      { nazev: 'Confirmation', popis: 'If none arrives within two to three weeks, contact the company.' },
      { nazev: 'Proof', popis: 'Keep the postal receipt (Aufgabeschein) or upload confirmation.' },
      { nazev: 'Direct debits', popis: 'Check your account after the contract ends.' },
    ],
    faq: [
      { q: 'Do I have to cancel in writing?', a: 'Many terms and conditions (AGB) require written form. However, consumers may not be required to do more than that – for example, to send a registered letter to a specific address.' },
      { q: 'How long is the notice period for a mobile contract?', a: 'For consumers, one month at most. The minimum contract term may be no longer than 24 months; cancelling earlier usually costs the remaining basic charges.' },
      { q: 'How do I cancel my electricity contract?', a: 'Households can cancel with two weeks’ notice, but agreed commitment periods apply. When switching, the new supplier usually handles the cancellation with your authorisation.' },
      { q: 'Can I cancel an insurance policy with a long term?', a: 'Consumers can cancel contracts with a term of more than three years at the end of the third year and every year thereafter with one month’s notice.' },
      { q: 'When does the notice count as on time?', a: 'What matters is when it reaches the company, not when you send it. You bear the risk of loss – so deliver it in a way you can prove.' },
      { q: 'Do you store my data?', a: 'No. The document is created entirely in your browser.' },
    ],
    zakony: 'The template is based on the Consumer Protection Act (§ 15 Konsumentenschutzgesetz, KSchG), the Insurance Contract Act (Versicherungsvertragsgesetz), the Telecommunications Act 2021 (Telekommunikationsgesetz 2021) and information from RTR and konsumentenfragen.at. The notice period and termination date of your contract are in the terms and conditions (AGB).',
    souvisejiciPopis: 'More documents for everyday life, also free of charge.',
  },
  vytvorit: {
    title: 'Fill in a termination letter online – Austria, mobile, insurance, electricity',
    description: 'Termination letter for a mobile, insurance, electricity, gym or subscription contract in Austria. Free bilingual PDF or Word.',
    podnadpis: 'Free · bilingual PDF and Word · takes about 3 minutes',
  },

  pruvodce: {
    slovo: { n: 'notice of termination', g: 'notice of termination', a: 'notice of termination', l: 'notice of termination' },
    kroky: {
      kunde: { nazev: 'Your details', popis: 'Who concluded the contract – exactly as on the invoice or policy.' },
      vertrag: { nazev: 'Company and contract', popis: 'You will find the details on the invoice, the policy or in your customer account.' },
      kuendigung: { nazev: 'Termination' },
    },
    pole: {
      k_name: { popis: 'First and last name', napoveda: 'Name of the contracting party.', placeholder: 'e.g. Maria Huber' },
      k_geburt: { popis: 'Date of birth (optional)', napoveda: 'Helps the company identify you unambiguously – especially with insurers.' },
      k_adresse: { popis: 'Address', napoveda: 'The address the company has on file for you.', placeholder: 'e.g. Mariahilfer Straße 12/5, 1060 Wien' },
      k_kontakt: { popis: 'Phone or e-mail (optional)', napoveda: 'For queries and the termination confirmation.', placeholder: 'e.g. maria.huber@email.at' },
      u_name: { popis: 'Company', napoveda: 'Name of the provider or insurer, as on the invoice.', placeholder: 'e.g. Muster Telekom GmbH' },
      u_adresse: { popis: 'Company address', napoveda: 'The address for cancellations is often given in the terms and conditions (AGB) or the legal notice (Impressum).', placeholder: 'e.g. Postfach 100, 1010 Wien' },
      art: {
        popis: 'What are you cancelling?',
        napoveda: 'Different notice periods apply depending on the contract – the tips below explain them.',
        moznosti: {
          handy: 'Mobile, internet or landline',
          versicherung: 'Insurance',
          energie: 'Electricity or gas',
          fitness: 'Gym or membership',
          abo: 'Subscription or service (newspaper, streaming …)',
          sonstiges: 'Other contract',
        },
      },
      vertrag_bez: { popis: 'Name of the contract or tariff', napoveda: 'So that it is clear which contract is meant – e.g. the tariff name or type of insurance.', placeholder: 'e.g. Tarif „Mobil L“' },
      vertragsnr: { popis: 'Customer, contract or policy number', napoveda: 'The most important detail – it is used to match the notice to your contract.', placeholder: 'e.g. 123456789' },
      rufnummer: { popis: 'Phone number or connection', napoveda: 'For mobile and internet contracts, the number concerned.', placeholder: 'e.g. 0660 1234567' },
      zaehlpunkt: { popis: 'Metering point number (Zählpunkt) (optional)', napoveda: 'Shown on the electricity or gas bill and starts with “AT”.', placeholder: 'e.g. AT0010000000000000001000000000000' },
      termin: {
        popis: 'When should the contract end?',
        napoveda: 'The safest option is “to the next possible date” – the notice then also applies if you have miscalculated the notice period.',
        moznosti: { naechst: 'To the next possible date', datum: 'To a specific date', ausserordentlich: 'Without notice for good cause' },
      },
      zum: { popis: 'Contract ends on', napoveda: 'The date that follows from the notice period and termination date in the contract.' },
      grund: {
        popis: 'Good cause',
        napoveda: 'Be specific: what, since when, and whether you have already asked the company to fix it. Write in German – the text goes into both language versions exactly as you write it.',
        placeholder: 'e.g. Der Internetanschluss funktioniert seit 3. 9. trotz mehrfacher Störungsmeldung nicht. (the internet connection has not worked since 3 Sept despite repeated fault reports)',
      },
      wuensche: {
        popis: 'What else should the company do?',
        napoveda: 'The confirmation is your proof. A credit balance can only be refunded if you give an account.',
        moznosti: {
          bestaetigung: 'Confirm the termination and the end of the contract in writing',
          lastschrift: 'End the direct debit authorisation (SEPA direct debit) when the contract ends',
          guthaben: 'Refund any credit balance or premium',
        },
      },
      iban: { popis: 'IBAN for the refund', napoveda: 'Your account for any credit balance.', placeholder: 'AT00 0000 0000 0000 0000' },
      ort: { popis: 'Place', napoveda: 'We take the town from your address.', placeholder: 'e.g. Wien' },
      datum: { popis: 'Date', napoveda: 'Today’s date is pre-filled.' },
    },
    vysvetleni: [
      'Who is giving notice – exactly as stated in the contract.',
      'The company that must receive the notice.',
      'Which contract ends and when. “To the next possible date” protects you against miscalculating the notice period.',
      'Confirmation, direct debits and credit balance – so that nothing is left open after the contract ends.',
    ],
    coDal: [
      'Sign in your own hand. Consumers may not be required to do more than use written form.',
      'Deliver it in a way you can prove: by registered post, via the company’s cancellation form or in person against confirmation.',
      'What matters is when the notice reaches the company – not the date of sending. Send it in good time.',
      'Keep the postal receipt (Aufgabeschein) and the termination confirmation, and check the next direct debits.',
    ],
    kontrola: [
      'Give your customer, contract or policy number and your name exactly as on the invoice or policy – otherwise the notice cannot be matched to your contract.',
      'The notice period and termination date are in the contract or the terms and conditions (AGB). The notice must reach the company before the notice period begins; you bear the risk that it does not arrive ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Rund_um_den_Vertrag/Nach_dem_Kauf/Vertragsende.html)).',
      'Mobile and internet: for consumers the notice period is one month at most, and the minimum contract term is 24 months at most. Anyone leaving earlier usually pays the basic charges until the end of the minimum term ([RTR](https://www.rtr.at/TKP/was_wir_tun/telekommunikation/konsumentenservice/information/informationen_fuer_konsumenten/TKKS_Vertraege.de.html)).',
      'Electricity and gas: cancellation with two weeks’ notice is possible, but agreed commitment periods apply. When you switch supplier, the new supplier usually cancels for you (with your authorisation) – then you do not need this letter ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Aktuelles/Konsumentenfragen/So-wechseln-Sie-den-Stromlieferanten.html)).',
      'Insurance: as a rule, to the end of the insurance year according to the policy conditions. Consumers can cancel contracts with a term of more than three years at the end of the third year and every year thereafter with one month’s notice. Motor liability insurance is renewed unless cancelled one month before it expires.',
      'Gym, subscription, service: for contracts for recurring services with a term of more than one year, consumers can cancel at the end of the first year and every six months thereafter with two months’ notice (§ 15 KSchG). Otherwise the notice period and date in the terms and conditions (AGB) apply.',
      'Without notice (“for good cause”) only in the event of a serious breach of duty by the company – describe the reason specifically. If in doubt, the consumer advice service of the Chamber of Labour (Arbeiterkammer) or the Consumer Information Association (VKI) can help.',
    ],
    pripominky: {
      'Kündigungsbestätigung prüfen': {
        nazev: 'Check the termination confirmation',
        popis: 'No confirmation received? Contact the company and have your proof of delivery ready.',
      },
      'Vertragsende laut Kündigung': {
        nazev: 'End of contract according to the notice',
        popis: 'Check that no more direct debits are made.',
      },
    },
  },

  dokument: {
    nazev: 'Notice of Termination',
    podnadpis: 'termination of a contract by the customer',
    podpisy: { vlevo: 'Customer', vpravo: 'Receipt confirmed (if handed over in person)' },
    clanky: [
      {
        nadpis: 'Sender',
        odstavce: ['{{k_name}}, born {{k_geburt}}, {{k_adresse}}, contact: {{k_kontakt}}'],
      },
      {
        nadpis: 'To',
        odstavce: ['{{u_name}}, {{u_adresse}}'],
      },
      {
        nadpis: 'Notice of termination',
        odstavce: [
          'Dear Sir or Madam,',
          {
            uvodVzor: 'Contract (please tick):',
            moznosti: {
              handy: 'I hereby give notice of termination of my contract for telecommunications services (mobile, internet or landline) {{vertrag_bez}}, customer number {{vertragsnr}}, phone number or connection {{rufnummer}}.',
              versicherung: 'I hereby give notice of termination of my insurance contract {{vertrag_bez}}, policy number {{vertragsnr}}.',
              energie: 'I hereby give notice of termination of my energy supply contract (electricity or gas) {{vertrag_bez}}, customer number {{vertragsnr}}, metering point number {{zaehlpunkt}}.',
              fitness: 'I hereby give notice of termination of my membership {{vertrag_bez}}, membership or contract number {{vertragsnr}}.',
              abo: 'I hereby give notice of termination of my subscription or service contract {{vertrag_bez}}, customer or contract number {{vertragsnr}}.',
              sonstiges: 'I hereby give notice of termination of the contract {{vertrag_bez}}, contract number {{vertragsnr}}.',
            },
          },
          {
            uvodVzor: 'End of contract (please tick):',
            moznosti: {
              naechst: 'The notice is given in due time to the next possible date.',
              datum: 'The notice is given effective {{zum}}; should this date not be possible, to the next possible date.',
              ausserordentlich: 'The notice is given for good cause with immediate effect, or alternatively in due time to the next possible date. Reason: {{grund}}',
            },
          },
        ],
      },
      {
        nadpis: 'Other requests',
        odstavce: [
          {
            uvod: 'I would also ask you for:',
            moznosti: {
              bestaetigung: 'written confirmation of receipt of this notice and of the end of the contract',
              lastschrift: 'the termination of the direct debit authorisation (SEPA direct debit mandate) when the contract ends',
              guthaben: 'the refund of any credit balance or unused premium to the account IBAN {{iban}}',
            },
          },
          'Yours faithfully,',
        ],
      },
    ],
  },
} satisfies PrekladDokumentu;
