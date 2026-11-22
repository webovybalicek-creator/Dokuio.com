import json
J=lambda s: json.dumps(s, ensure_ascii=False)
def ts(c):
    k=c['k']
    return f"""/**
 * {c['hlava']}
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type {{ Sablona }} from '../typy';
import {{ naDatum, pridejDny, isoDatum, cislo }} from '../terminy';
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
  pripominky: (d) => {{
    const out: {{ nazev: string; datum: string; popis?: string }}[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({{ nazev: {J(k['p1'])}, datum: d.konec_dne }});
    const odevzdani = naDatum(d.odevzdani);
    if (odevzdani) {{
      out.push({{ nazev: {J(k['p2'])}, datum: isoDatum(odevzdani) }});
      const dni = Math.round(cislo(d.jistota_dni));
      if (dni > 0) out.push({{ nazev: {J(k['p3'])}, datum: isoDatum(pridejDny(odevzdani, dni)) }});
    }}
    return out;
  }},
  coDal: {json.dumps(c['coDal'], ensure_ascii=False)},
  kontrola: [
{chr(10).join('    '+J(x)+',' for x in c['kontrola'])}
  ],
  zdroje: [{', '.join(c['zdroje'])}],

  kroky: [
    {{
      id: 'strany',
      nazev: {J(k['k1'])},
      pole: [
        {{ id: 'p_jmeno', typ: 'text', popis: {J(k['pJ'])}, placeholder: {J(k['phJ1'])}, sirka: 34, autocomplete: 'name' }},
        {{ id: 'p_adresa', typ: 'text', popis: {J(k['pA'])}, placeholder: {J(k['phA1'])}, sirka: 46 }},
        {{ id: 'k_jmeno', typ: 'text', popis: {J(k['kJ'])}, napoveda: {J(k['kJN'])}, placeholder: {J(k['phJ2'])}, sirka: 34 }},
        {{ id: 'k_narozeni', typ: 'datum', popis: {J(k['kN'])}, sirka: 14, polovina: true }},
        {{ id: 'byt', typ: 'text', popis: {J(k['byt'])}, placeholder: {J(k['bytPh'])}, sirka: 46 }},
        {{ id: 'smlouva_datum', typ: 'datum', popis: {J(k['sd'])}, sirka: 14, polovina: true }},
      ],
    }},
    {{
      id: 'konec',
      nazev: {J(k['k2'])},
      pole: [
        {{ id: 'konec_dne', typ: 'datum', popis: {J(k['kd'])}, napoveda: {J(k['kdN'])}, sirka: 14, polovina: true }},
        {{ id: 'odevzdani', typ: 'datum', popis: {J(k['od'])}, napoveda: {J(k['odN'])}, sirka: 14, polovina: true }},
        {{
          id: 'jistota',
          typ: 'volba',
          popis: {J(k['j'])},
          moznosti: [
            {{ hodnota: 'odevzdani', popis: {J(k['j1'])} }},
            {{ hodnota: 'vyuctovani', popis: {J(k['j2'])} }},
            {{ hodnota: 'zadna', popis: {J(k['j3'])} }},
          ],
        }},
        {{ id: 'jistota_dni', typ: 'cislo', popis: {J(k['jd'])}, placeholder: '14', sirka: 4, polovina: true, zobrazitKdyz: {{ pole: 'jistota', je: 'odevzdani' }} }},
        {{ id: 'ucet', typ: 'text', popis: {J(k['ucet'])}, sirka: 30, zobrazitKdyz: {{ pole: 'jistota', je: ['odevzdani', 'vyuctovani'] }} }},
        {{ id: 'dalsi', typ: 'textarea', popis: {J(k['dalsi'])}, placeholder: {J(k['dalsiPh'])}, sirka: 64 }},
        {{ id: 'misto', typ: 'text', popis: {J(k['misto'])}, sirka: 18, polovina: true, vychozi: {{ obecZ: 'p_adresa' }} }},
        {{ id: 'datum', typ: 'datum', popis: {J(k['datum'])}, sirka: 14, polovina: true, vychozi: 'dnes' }},
      ],
    }},
  ],

  clanky: [
    {{ nadpis: {J(k['c1'])}, odstavce: [{J(k['c1a'])}, {J(k['c1b'])}] }},
    {{
      nadpis: {J(k['c2'])},
      vysvetleni: {J(k['c2v'])},
      odstavce: [{', '.join(J(x) for x in k['c2o'])}],
    }},
    {{
      nadpis: {J(k['c3'])},
      odstavce: [
        {{
          volba: 'jistota',
          uvodVzor: {J(k['c3u'])},
          moznosti: {{
            odevzdani: {J(k['c3a'])},
            vyuctovani: {J(k['c3b'])},
            zadna: {J(k['c3c'])},
          }},
        }},
{chr(10).join('        '+J(x)+',' for x in k['c3o'])}
      ],
    }},
  ],
}};
"""
