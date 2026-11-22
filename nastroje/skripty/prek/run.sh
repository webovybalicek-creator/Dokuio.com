#!/bin/bash
# run.sh script.py zeme slug...
cd /home/claude/skripty/prek && python3 $1 2>&1 | grep -v "^$" | tail -5
z=$2; shift 2
cd ../dump && for j in en uk; do node --experimental-strip-types --no-warnings --import ./reg.mjs check.mjs $z $j "$@" 2>&1 | grep -v "^    at \|^Node.js\|^$\|triggerUncaught\|^ *\^" | head -12; done
