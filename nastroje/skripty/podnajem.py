import json
J=lambda s: json.dumps(s, ensure_ascii=False)
def ts(c):
    k=c['k']; odv=c.get('odv','')
    return f"""/**
 * {c['hlava']}
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type {{ Sablona }} from '../typy';
import {{ naDatum }} from '../terminy';
{c.get('imp_extra','')}import {{ {', '.join(c['importy'])} }} from './{c['zdrojsoubor']}';

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
  pripominky: (d) => [
    ...(naDatum(d.od) ? [{{ nazev: {J(k['p1'])}, datum: String(d.od) }}] : []),
    ...(d.doba === 'urcita' && naDatum(d.do) ? [{{ nazev: {J(k['p2'])}, datum: String(d.do) }}] : []),
  ],
  coDal: {json.dumps(c['coDal'], ensure_ascii=False)},
  kontrola: [
{chr(10).join('    '+(x[1:] if x.startswith('@') else J(x))+',' for x in c['kontrola'])}
  ],
  zdroje: [{', '.join(c['zdroje'])}],

  kroky: [
    {{
      id: 'strany',
      nazev: {J(k['k1'])},
      popis: {J(k['k1p'])},
      pole: [
        {{ id: 'n_jmeno', typ: 'text', popis: {J(k['nJ'])}, placeholder: {J(k['phJ1'])}, sirka: 34, autocomplete: 'name' }},
        {{ id: 'n_narozeni', typ: 'datum', popis: {J(k['nN'])}, sirka: 14, polovina: true }},
        {{ id: 'n_adresa', typ: 'text', popis: {J(k['nA'])}, placeholder: {J(k['phA1'])}, sirka: 46 }},
        {{ id: 'p_jmeno', typ: 'text', popis: {J(k['pJ'])}, placeholder: {J(k['phJ2'])}, sirka: 34 }},
        {{ id: 'p_narozeni', typ: 'datum', popis: {J(k['pN'])}, sirka: 14, polovina: true }},
        {{ id: 'p_adresa', typ: 'text', popis: {J(k['pA'])}, sirka: 46 }},
      ],
    }},
    {{
      id: 'byt',
      nazev: {J(k['k2'])},
      pole: [
        {{ id: 'byt', typ: 'text', popis: {J(k['byt'])}, placeholder: {J(k['bytPh'])}, sirka: 46 }},
        {{
          id: 'rozsah',
          typ: 'volba',
          popis: {J(k['roz'])},
          moznosti: [
            {{ hodnota: 'cast', popis: {J(k['roz1'])} }},
            {{ hodnota: 'cely', popis: {J(k['roz2'])} }},
          ],
        }},
        {{ id: 'cast_popis', typ: 'text', popis: {J(k['castP'])}, placeholder: {J(k['castPh'])}, sirka: 56, zobrazitKdyz: {{ pole: 'rozsah', je: 'cast' }} }},
        {{ id: 'pronajimatel', typ: 'text', popis: {J(k['vlast'])}, napoveda: {J(k['vlastN'])}, sirka: 34 }},
        {{ id: 'souhlas_datum', typ: 'datum', popis: {J(k['souhlas'])}, napoveda: {J(k['souhlasN'])}, sirka: 14, polovina: true }},
      ],
    }},
    {{
      id: 'platby',
      nazev: {J(k['k3'])},
      pole: [
        {{ id: 'od', typ: 'datum', popis: {J(k['od'])}, sirka: 14, polovina: true }},
        {{
          id: 'doba',
          typ: 'volba',
          popis: {J(k['doba'])},
          moznosti: [
            {{ hodnota: 'urcita', popis: {J(k['doba1'])} }},
            {{ hodnota: 'neurcita', popis: {J(k['doba2'])} }},
          ],
        }},
        {{ id: 'do', typ: 'datum', popis: {J(k['do'])}, sirka: 14, polovina: true, zobrazitKdyz: {{ pole: 'doba', je: 'urcita' }} }},
        {{ id: 'najemne', typ: 'castka', popis: {J(k['najemne'])}, napoveda: {J(k['najemneN'])}, sirka: 14, polovina: true }},
        {{ id: 'splatnost', typ: 'cislo', popis: {J(k['splat'])}, placeholder: '15', sirka: 4, polovina: true }},
        {{ id: 'kauce', typ: 'castka', popis: {J(k['kauce'])}, sirka: 14, polovina: true }},
        {{ id: 'ucet', typ: 'text', popis: {J(k['ucet'])}, sirka: 30 }},
        {{ id: 'vypoved', typ: 'cislo', popis: {J(k['vyp'])}, placeholder: '1', sirka: 4, polovina: true }},
        {{ id: 'misto', typ: 'text', popis: {J(k['misto'])}, sirka: 18, polovina: true, vychozi: {{ obecZ: 'n_adresa' }} }},
        {{ id: 'datum', typ: 'datum', popis: {J(k['datum'])}, sirka: 14, polovina: true, vychozi: 'dnes' }},
      ],
    }},
  ],
{odv}
  clanky: [
    {{ nadpis: {J(k['c1'])}, odstavce: [{J(k['c1a'])}, {J(k['c1b'])}] }},
    {{
      nadpis: {J(k['c2'])},
      vysvetleni: {J(k['c2v'])},
      odstavce: [
        {{
          volba: 'rozsah',
          uvodVzor: {J(k['c2u'])},
          moznosti: {{ cast: {J(k['c2c'])}, cely: {J(k['c2d'])} }},
        }},
{chr(10).join('        '+J(x)+',' for x in k['c2o'])}
      ],
    }},
    {{
      nadpis: {J(k['c3'])},
      odstavce: [
        {{
          volba: 'doba',
          uvodVzor: {J(k['c3u'])},
          moznosti: {{ urcita: {J(k['c3a'])}, neurcita: {J(k['c3b'])} }},
        }},
{chr(10).join('        '+J(x)+',' for x in k['c3o'])}
      ],
    }},
    {{ nadpis: {J(k['c4'])}, odstavce: [{', '.join(J(x) for x in k['c4o'])}] }},
    {{ nadpis: {J(k['c5'])}, odstavce: [{', '.join(J(x) for x in k['c5o'])}] }},
  ],
}};
"""
