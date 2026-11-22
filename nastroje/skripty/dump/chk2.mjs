import { readdirSync } from 'node:fs';
const dir='/home/claude/dokuio.com/src/obsah/ch/';
const only=process.argv[2]?process.argv[2].split(','):null;
for (const f of readdirSync(dir).filter(f=>!f.startsWith('_')).sort()) {
  const slug=f.replace('.ts',''); if(only&&!only.includes(slug)) continue;
  const st=(await import(dir+f)).default; const s=st.sablona;
  console.log(`\n## ${slug} | ${s.kod} | podpisy ${s.podpisy.vlevo}/${s.podpisy.vpravo} | misto ${s.mistoPodpisu} datum ${s.datumPodpisu} | cisl ${s.cislovatClanky} ${s.cislovatOdstavce} pz ${s.podpisNaZarizeni} | fn: ${['odvozene','prilohy','pripominky','prevzit'].filter(k=>s[k]).map(k=>k==='odvozene'?'odv:'+Object.keys(s.odvozene).join('/'):k).join(',')}`);
  if (s.uvod) console.log('UVOD '+s.uvod);
  for (const k of s.kroky){ console.log(`K ${k.id} "${k.nazev}"${k.popis?' – '+k.popis:''}`);
    for (const p of k.pole) console.log(`  ${p.id}:${p.typ}${p.polovina?'½':''}${p.sirka?' w'+p.sirka:''}${p.jednotka?' u='+p.jednotka:''}${p.vychozi?' v='+JSON.stringify(p.vychozi):''}${p.zobrazitKdyz?' if '+p.zobrazitKdyz.pole+'='+p.zobrazitKdyz.je:''} | ${p.popis}${p.napoveda?' ?'+p.napoveda:''}${p.placeholder?' ph:'+p.placeholder:''}${p.moznosti?' ['+p.moznosti.map(m=>m.hodnota+'='+m.popis).join('; ')+']':''}`);}
  for (const c of s.clanky){ console.log(`C "${c.nadpis}"${c.vysvetleni?' ?'+c.vysvetleni:''}`);
    for (const o of c.odstavce) console.log('  - '+(typeof o==='string'?o:JSON.stringify(o)));}
}
