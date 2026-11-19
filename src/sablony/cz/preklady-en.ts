/**
 * Anglické překlady českých šablon pro dvojjazyčnou verzi (CZ + EN).
 * Struktura článků a odstavců kopíruje českou šablonu 1:1. Rozhodující je vždy česká verze.
 * Překlad je informativní – při změně české šablony upravit i zde.
 */
import type { Preklad } from '../typy';

const SPOLECNE = {
  jazyk: 'en',
  prepinac: 'Dvojjazyčná smlouva: čeština + angličtina (pro cizince)',
  mistoDne: ['In', 'on'] as [string, string],
  prednost: 'in case of discrepancy the Czech version prevails',
  clanek: 'Article',
};

export const NAJEM_BYT_EN: Preklad = {
  ...SPOLECNE,
  nazev: 'Residential Lease Agreement',
  podnadpis: 'concluded under Section 2235 et seq. of Act No. 89/2012 Coll., the Civil Code',
  podpisy: { vlevo: 'landlord', vpravo: 'tenant' },
  clanky: [
    {
      nadpis: 'Parties',
      odstavce: [
        '**Landlord:** {{p_jmeno}}, date of birth {{p_narozeni}}, residing at {{p_adresa}}, contact {{p_kontakt}} (the “Landlord”)',
        '**Tenant:** {{k_jmeno}}, date of birth {{k_narozeni}}, currently residing at {{k_adresa}}, contact {{k_kontakt}} (the “Tenant”)',
      ],
    },
    {
      nadpis: 'Subject of the Lease',
      odstavce: [
        'The Landlord declares that they are the owner of flat No. {{byt_cislo}}, layout {{byt_dispozice}}, on the {{byt_podlazi}} of the building at {{byt_adresa}}, with a floor area of {{byt_plocha}} (the “Flat”).',
        'The Flat includes: {{prislusenstvi}}. The Flat is furnished with: {{vybaveni}}.',
        'The Landlord lets the Flat to the Tenant to meet the housing needs of the Tenant and the members of their household. {{osoby}} persons will live in the Flat. The Tenant shall notify the Landlord of any change in the number of persons without undue delay, at the latest within two months.',
      ],
    },
    {
      nadpis: 'Lease Term and Handover of the Flat',
      odstavce: [
        {
          uvodVzor: 'Lease term (tick one option):',
          moznosti: {
            urcita: 'The lease is concluded for a fixed term from {{od}} to {{do}}.',
            neurcita: 'The lease is concluded for an indefinite term with effect from {{od}}.',
          },
        },
        'The Landlord shall hand over the Flat to the Tenant in a condition fit for moving in and living on {{predani}}. The parties shall draw up a handover protocol recording the meter readings and the condition of the Flat.',
      ],
    },
    {
      nadpis: 'Rent and Payments for Services',
      odstavce: [
        'The Tenant shall pay a monthly rent of {{najemne}} and advance payments for services connected with the use of the Flat of {{zalohy}} per month.',
        {
          uvod: 'Advance payments are made for the following services:',
          moznosti: {
            voda: 'water supply and sewage',
            teplo: 'heating and hot water',
            vytah: 'lift operation',
            spolecne: 'lighting and cleaning of common areas of the building',
            odpad: 'waste collection',
          },
        },
        {
          uvodVzor: 'Electricity and gas (tick):',
          moznosti: {
            najemce: 'The Tenant shall arrange and pay for electricity and, where applicable, gas directly with the supplier.',
            zalohy: 'Electricity and, where applicable, gas are covered by the advance payments for services.',
          },
        },
        'Rent and advance payments are payable monthly in advance, always by the {{splatnost}}th day of the calendar month, to the Landlord’s bank account No. {{ucet}}.',
        'The Landlord shall settle the advance payments for services once a year, at the latest within four months after the end of the billing period. Any overpayment or underpayment is due within four months of delivery of the statement.',
        {
          uvodVzor: 'Rent increases (tick one option):',
          moznosti: {
            inflace: 'The rent shall increase on 1 April of each calendar year by the average annual inflation rate for the previous calendar year, expressed as the increase in the average annual consumer price index published by the Czech Statistical Office, for the first time in the year following the year in which the lease commenced. The Landlord shall notify the Tenant of the increase in writing.',
            zakon: 'Rent increases are governed by Section 2249 of the Civil Code.',
          },
        },
      ],
    },
    {
      nadpis: 'Security Deposit',
      odstavce: [
        'The Tenant shall pay the Landlord a security deposit of {{jistota}} at the latest upon handover of the Flat.',
        'The Tenant is entitled to interest on the deposit at the rate of {{jistota_urok}} from the date it is provided until it is returned.',
        {
          uvodVzor: 'Return of the deposit (tick one option):',
          moznosti: {
            skonceni: 'Upon termination of the lease and surrender of the Flat, the Landlord shall return the deposit with interest, setting off any amounts owed by the Tenant under the lease.',
            vyuctovani: 'The parties expressly agree that after termination of the lease the Landlord shall return the deposit with interest no later than one month after delivery of the service charge statement for the last billing period, setting off any amounts owed by the Tenant under the lease.',
          },
        },
      ],
    },
    {
      nadpis: 'Rights and Obligations',
      odstavce: [
        'The Tenant shall use the Flat properly and in accordance with this agreement. Routine maintenance and minor repairs related to the use of the Flat shall be carried out and paid for by the Tenant to the extent set out in Government Regulation No. 308/2015 Coll.; other repairs shall be arranged by the Landlord.',
        'The Tenant shall notify the Landlord without undue delay of any repairs to be carried out by the Landlord and shall allow them to be carried out, including access to the Flat to the necessary extent after prior notice.',
        'The Tenant may make structural alterations or other substantial changes to the Flat only with the Landlord’s prior written consent.',
        'Subletting the entire Flat, or part of it if the Tenant does not live there, is only possible with the Landlord’s written consent.',
        {
          uvodVzor: 'Pets (tick):',
          moznosti: {
            ano: 'The Tenant may keep pets in the Flat, provided this does not cause nuisance to other residents of the building or damage to the Flat.',
            oznameni: 'The Tenant may keep pets in the Flat after prior notice to the Landlord, provided this does not cause nuisance to other residents of the building or damage to the Flat.',
          },
        },
      ],
    },
    {
      nadpis: 'Termination of the Lease',
      odstavce: [
        'The lease shall terminate by agreement of the parties, upon expiry of the agreed term, or by written notice on the grounds and within the periods set out in the Civil Code (in particular Sections 2285 to 2291).',
        'Upon termination of the lease, the Tenant shall surrender the Flat to the Landlord in the condition in which it was taken over, taking into account normal wear and tear, together with all keys. The parties shall draw up a handover protocol.',
      ],
    },
    {
      nadpis: 'Final Provisions',
      odstavce: [
        'Rights and obligations not governed by this agreement are governed by the Civil Code, in particular Section 2201 et seq. and Section 2235 et seq.',
        'This agreement is executed in two counterparts, one for each party. It may only be amended by written amendments. This agreement is made in Czech and English; in case of discrepancy the Czech version prevails.',
        'This agreement becomes valid and effective upon signature by both parties.',
      ],
    },
  ],
};

export const PODNAJEM_EN: Preklad = {
  ...SPOLECNE,
  nazev: 'Sublease Agreement for a Flat',
  podnadpis: 'concluded under Section 2215 and Section 2274 et seq. of Act No. 89/2012 Coll., the Civil Code',
  podpisy: { vlevo: 'tenant', vpravo: 'subtenant' },
  clanky: [
    {
      nadpis: 'Parties',
      odstavce: [
        '**Tenant:** {{p_jmeno}}, date of birth {{p_narozeni}}, residing at {{p_adresa}} (the “Tenant”)',
        '**Subtenant:** {{k_jmeno}}, date of birth {{k_narozeni}}, currently residing at {{k_adresa}} (the “Subtenant”)',
      ],
    },
    {
      nadpis: 'Subject of the Sublease',
      odstavce: [
        'The Tenant declares that they are the tenant of the flat {{byt}} under a lease agreement concluded on {{najem_datum}} with the landlord {{pronajimatel}}.',
        {
          uvodVzor: 'Scope (tick one option):',
          moznosti: {
            cast: 'The Tenant, who permanently lives in the flat, lets the following part of the flat to the Subtenant: {{cast_popis}}.',
            cely: 'The Tenant lets the entire flat to the Subtenant.',
          },
        },
        {
          uvodVzor: 'Landlord’s consent (tick one option):',
          moznosti: {
            ano: 'The landlord has given written consent to the sublease; a copy is attached to this agreement.',
            neni_treba: 'The landlord’s consent is not required under Section 2274 of the Civil Code; the Tenant shall notify the landlord of the increase in the number of persons living in the flat.',
          },
        },
      ],
    },
    {
      nadpis: 'Term of the Sublease',
      odstavce: [
        'The sublease is concluded for the period from {{od}} to {{do}}.',
        'The sublease ends at the latest together with the Tenant’s lease. If the lease is terminated, the Tenant shall inform the Subtenant without undue delay, stating the date on which the lease ends.',
        'Either party may terminate the sublease without giving reasons with a notice period of {{vypovedni}} months, starting on the first day of the month following delivery of the notice.',
      ],
    },
    {
      nadpis: 'Rent and Deposit',
      odstavce: [
        'The Subtenant shall pay a monthly rent of {{podnajemne}}, always by the {{splatnost}}th day of the month, to the Tenant’s bank account No. {{ucet}}.',
        'Services and utilities: {{sluzby}}',
        'The Subtenant shall pay a deposit of {{kauce}}. The Tenant shall return it within one month after the end of the sublease and surrender of the flat, setting off any amounts owed by the Subtenant.',
      ],
    },
    {
      nadpis: 'Rights, Obligations and Final Provisions',
      odstavce: [
        'The Subtenant shall use the flat properly, observe the house rules and shall not let the flat to other persons or make any changes to it without the Tenant’s consent.',
        'Upon termination of the sublease, the Subtenant shall surrender the flat or its part, including the keys, in the condition in which it was taken over, taking into account normal wear and tear.',
        'Rights and obligations not governed by this agreement are governed by the Civil Code. This agreement is executed in two counterparts and becomes effective upon signature by both parties. It is made in Czech and English; in case of discrepancy the Czech version prevails.',
      ],
    },
  ],
};
