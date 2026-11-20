import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'savjetnik',
  nazev: 'Savjetnik',
  title: 'Savjetnik – prodaja auta, zajam, najam stana i kupnja jasno objašnjeni',
  description: 'Praktični vodiči korak po korak: prodaja i promjena vlasništva automobila, zajam prijatelju, darovanje, najam stana, povrat robe i reklamacija. S besplatnim obrascima.',
  h1: 'Savjetnik',
  h1Span: 'Vodiči korak po korak za svakodnevne situacije. Bez pravnog žargona, prema važećim propisima.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Automobil',
      popis: 'Prodaja i kupnja rabljenog automobila, promjena vlasništva.',
      ilustrace: 'auto',
      temata: [
        { slug: 'prodaja-auta', nazev: 'Prodaja automobila', popis: 'Ugovor, predaja i rok od 15 dana.' },
        { slug: 'kupnja-auta', nazev: 'Kupnja rabljenog automobila', popis: 'Što provjeriti prije plaćanja.' },
        { slug: 'promjena-vlasnistva', nazev: 'Promjena vlasništva', popis: 'Rokovi, pristojbe, punomoć.' },
      ],
    },
    {
      slug: 'novac',
      nazev: 'Novac i darovi',
      popis: 'Zajam prijatelju, priznanje duga, zastara, darovanje.',
      ilustrace: 'penize',
      temata: [
        { slug: 'zajam', nazev: 'Zajam', popis: 'Kako posuditi novac i dobiti ga natrag.' },
        { slug: 'dug', nazev: 'Dug', popis: 'Priznanje duga, obroci, zastara.' },
        { slug: 'darovanje', nazev: 'Darovanje i porez', popis: 'Kada se ne plaća porez na darove.' },
      ],
    },
    {
      slug: 'stan',
      nazev: 'Stan i najam',
      popis: 'Najam stana, jamčevina, otkaz i predaja stana.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'najam', nazev: 'Najam stana', popis: 'Ugovor, jamčevina, zapisnik.' },
        { slug: 'kraj-najma', nazev: 'Kraj najma', popis: 'Otkaz, predaja i povrat jamčevine.' },
      ],
    },
    {
      slug: 'kupnja',
      nazev: 'Kupnja i reklamacije',
      popis: 'Povrat robe kupljene na internetu, neispravna roba, prodaja preko oglasa.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'povrat-robe', nazev: 'Povrat robe', popis: '14 dana bez navođenja razloga.' },
        { slug: 'reklamacija', nazev: 'Reklamacija', popis: 'Popravak, zamjena, povrat novca.' },
        { slug: 'prodaja-oglas', nazev: 'Prodaja preko oglasa', popis: 'Ugovor, plaćanje i prijevare.' },
        { slug: 'posudba', nazev: 'Posudba stvari', popis: 'Posudba bez naknade i šteta.' },
      ],
    },
    {
      slug: 'usluge',
      nazev: 'Majstori i usluge',
      popis: 'Ugovor s majstorom, kašnjenje, nedostaci i plaćanje.',
      ilustrace: 'protokol',
      temata: [{ slug: 'majstori', nazev: 'Majstori', popis: 'Ugovor o djelu, rok i nedostaci.' }],
    },
    {
      slug: 'posao',
      nazev: 'Posao',
      popis: 'Otkaz ugovora o radu i otkazni rok.',
      ilustrace: 'protokol',
      temata: [{ slug: 'otkaz', nazev: 'Otkaz', popis: 'Otkazni rok i sporazumni prestanak.' }],
    },
    {
      slug: 'obitelj',
      nazev: 'Obitelj i putovanja',
      popis: 'Putovanje djeteta bez roditelja i suglasnost.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'putovanje-djeteta', nazev: 'Putovanje djeteta', popis: 'Suglasnost roditelja i ovjera.' }],
    },
    {
      slug: 'punomoc',
      nazev: 'Punomoć i zastupanje',
      popis: 'Kada posao umjesto vas obavlja netko drugi.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'punomoc', nazev: 'Punomoć', popis: 'Kada treba ovjera potpisa.' }],
    },
  ],
};
