import json
J=lambda s: json.dumps(s, ensure_ascii=False)
def ts(c):
    k=c['k']
    pole=lambda i,t,p,extra='': f"        {{ id: '{i}', typ: '{t}', popis: {J(p)}{extra} }},"
    return f"""/**
 * {c['hlava']}
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type {{ Sablona }} from '../typy';
import {{ naDatum }} from '../terminy';
import {{ {', '.join(c['importy'])} }} from './{c['zdrojsoubor']}';

export const {c['ident']}: Sablona = {{
  kod: '{c['kod']}',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: '{c['zeme']}',
  jazyk: '{c['jazyk']}',
  nazev: {J(c['nazev'])},
  podnadpis: {J(c['podnadpis'])},
  souborPdf: '{c['slug']}',
  paticka: {J(c['paticka'])},
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: {{ vlevo: {J(k['L'])}, vpravo: {J(k['V'])} }},
  slovo: {json.dumps(c['slovo'], ensure_ascii=False)},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{{ nazev: {J(k['prip'])}, datum: String(d.vratit_do), popis: {J(k['pripP'])} }}] : []),
  coDal: {json.dumps(c['coDal'], ensure_ascii=False, indent=4).replace(chr(10),chr(10)+'  ')},
  kontrola: [
{chr(10).join('    '+J(x)+',' for x in c['kontrola'])}
    {c['tip']},
  ],
  zdroje: [{', '.join(c['zdroje'])}],

  kroky: [
    {{
      id: 'strany',
      nazev: {J(k['krok1'])},
      popis: {J(k['krok1p'])},
      pole: [
        {{ id: 'p_jmeno', typ: 'text', popis: {J(k['pJ'])}, placeholder: {J(k['phJ1'])}, sirka: 34, autocomplete: 'name' }},
        {{ id: 'p_id', typ: 'text', popis: {J(k['pID'])}, sirka: 14, polovina: true }},
        {{ id: 'p_adresa', typ: 'text', popis: {J(k['pA'])}, placeholder: {J(k['phA1'])}, sirka: 46 }},
        {{ id: 'v_jmeno', typ: 'text', popis: {J(k['vJ'])}, placeholder: {J(k['phJ2'])}, sirka: 34 }},
        {{ id: 'v_id', typ: 'text', popis: {J(k['vID'])}, sirka: 14, polovina: true }},
        {{ id: 'v_adresa', typ: 'text', popis: {J(k['vA'])}, placeholder: {J(k['phA2'])}, sirka: 46 }},
      ],
    }},
    {{
      id: 'vec',
      nazev: {J(k['krok2'])},
      pole: [
        {{ id: 'vec', typ: 'textarea', popis: {J(k['vec'])}, napoveda: {J(k['vecN'])}, placeholder: {J(k['vecPh'])}, sirka: 70 }},
        {{ id: 'stav', typ: 'text', popis: {J(k['stav'])}, placeholder: {J(k['stavPh'])}, sirka: 56 }},
        {{ id: 'hodnota', typ: 'castka', popis: {J(k['hodnota'])}, napoveda: {J(k['hodnotaN'])}, sirka: 14, polovina: true }},
        {{ id: 'ucel', typ: 'text', popis: {J(k['ucel'])}, placeholder: {J(k['ucelPh'])}, sirka: 46 }},
      ],
    }},
    {{
      id: 'doba',
      nazev: {J(k['krok3'])},
      pole: [
        {{ id: 'predano', typ: 'datum', popis: {J(k['predano'])}, sirka: 14, polovina: true, vychozi: 'dnes' }},
        {{
          id: 'doba',
          typ: 'volba',
          popis: {J(k['doba'])},
          moznosti: [
            {{ hodnota: 'datum', popis: {J(k['dobaD'])} }},
            {{ hodnota: 'ucel', popis: {J(k['dobaU'])} }},
          ],
        }},
        {{ id: 'vratit_do', typ: 'datum', popis: {J(k['vratit'])}, sirka: 14, polovina: true, zobrazitKdyz: {{ pole: 'doba', je: 'datum' }} }},
        {{ id: 'misto_vraceni', typ: 'text', popis: {J(k['mistoV'])}, placeholder: {J(k['mistoVPh'])}, sirka: 46 }},
        {{ id: 'misto', typ: 'text', popis: {J(k['misto'])}, sirka: 18, polovina: true, vychozi: {{ obecZ: 'p_adresa' }} }},
        {{ id: 'datum', typ: 'datum', popis: {J(k['datum'])}, sirka: 14, polovina: true, vychozi: 'dnes' }},
      ],
    }},
  ],

  clanky: [
    {{
      nadpis: {J(k['c1'])},
      odstavce: [{J(k['c1a'])}, {J(k['c1b'])}],
    }},
    {{
      nadpis: {J(k['c2'])},
      vysvetleni: {J(k['c2v'])},
      odstavce: [{', '.join(J(x) for x in k['c2o'])}],
    }},
    {{
      nadpis: {J(k['c3'])},
      odstavce: [
        {J(k['c3a'])},
        {{
          volba: 'doba',
          uvodVzor: {J(k['c3u'])},
          moznosti: {{
            datum: {J(k['c3d'])},
            ucel: {J(k['c3c'])},
          }},
        }},
{chr(10).join('        '+J(x)+',' for x in k['c3o'])}
      ],
    }},
    {{
      nadpis: {J(k['c4'])},
      vysvetleni: {J(k['c4v'])},
      odstavce: [{', '.join(J(x) for x in k['c4o'])}],
    }},
    {{
      nadpis: {J(k['c5'])},
      odstavce: [{', '.join(J(x) for x in k['c5o'])}],
    }},
  ],
}};
"""
