#!/bin/sh

for f in *.html; do
  [ -e "$f" ] || continue
  gz=$(gzip -c9 "$f" | wc -c)
  echo "$gz  $f"
done
