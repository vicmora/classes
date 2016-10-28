#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: lab3.3.py
# Desc: Exercises
# DATE: September 25, 2016

import re
f = open('relativity.txt', encoding='utf-8')
text = f.read()
words = re.split('\W+', text)

f_stop = open('stop_words.txt', encoding='utf-8')
text_stop = f_stop.read()
stop_words = re.split('\W+', text_stop.lower())

counter = {}
for i in words:
    # Ignore the words in the stop_words list
    if i in stop_words:
        continue
    # If the word has already appeared in the list, add 1
    if i.lower() in counter:
        counter[i.lower()] += 1
    # If the word is appearing for the first time, create an entry
    else:
        counter[i.lower()] = 1

# sort the dict keys by value
sorted_words = sorted(counter, key=counter.__getitem__)
sorted_words.reverse()

chunks = [sorted_words[i:i + 5] for i in range(0,50,5)]

for c in chunks:
	formatted = ['{:>15} {}'.format(c, counter[c]) for c in chunks[chunks.index(c)]]
	print(" ".join(formatted))
