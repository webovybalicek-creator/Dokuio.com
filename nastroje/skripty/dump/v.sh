#!/bin/bash
cd /home/claude/skripty/dump/out
for f in "$@"; do grep -v "^LANDING counts\|^ODVOZENE: $\|^# \|^KATALOG" $f.txt | sed 's/"kroky":\[{"nazev":"\(Ispunite\|Izpolnite\)[^]]*\],//; s/,"souvisejiciPopis":"[^"]*"//; s/,{"q":"\(Spremate li\|Ali shranjujete\)[^}]*}//; s/"title":"[^"]*",//'; done
