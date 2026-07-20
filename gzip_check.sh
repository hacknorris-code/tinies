#!/bin/sh

find . -maxdepth 1 -type f | while IFS= read -r f; do
    orig=$(wc -c < "$f")
    gz=$(gzip -c9 "$f" | wc -c)
    br=$(brotli -q 11 -c "$f" | wc -c)
    printf "%10d  %10d  %10d  %s\n" \
        "$orig" "$gz" "$br" "$f"
done
