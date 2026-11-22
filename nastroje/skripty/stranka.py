import json
def stranka(z, slug, ident, nazev, nazevA, katalog, souv, landing, vytvorit):
    return f"""import type {{ StrankaDokumentu }} from '../typy';
import {{ {ident} as sablona }} from '../../sablony/{z}/{slug}';

const stranka: StrankaDokumentu = {{
  sablona,
  nazev: {json.dumps(nazev, ensure_ascii=False)},
  nazevA: {json.dumps(nazevA, ensure_ascii=False)},
  katalog: {json.dumps(katalog, ensure_ascii=False)},
  souvisejici: {json.dumps(souv)},
  landing: {json.dumps(landing, ensure_ascii=False, indent=2)},
  vytvorit: {json.dumps(vytvorit, ensure_ascii=False)},
}};

export default stranka;
"""
def zapis(cesta, *a):
    open(cesta,'w').write(stranka(*a))
