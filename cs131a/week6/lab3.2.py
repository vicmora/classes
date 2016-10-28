#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: lab3.2.py
# Desc: Exercises
# DATE: September 25, 2016
import re

# Write a script named lab3.2.py that counts the number of times each word
# occurs in oliver.txt.
f = open('oliver.txt')
text = f.read()

# Use the regex character set \W+ to the Oliver Twist text into words.
# Don’t worry about subtleties like apostrophes and hyphenated words.
words = re.split("\W+",text.lower())

# Your count should be case-insensitive. All words should be converted to
# lower case or upper before being counted. In other words, “The” and “the”
# should be counted as the same word.

# remove any blanks
words = [i for i in words if i != '' ]

# words to ignore
stop_words = ['a','the','to','and','in','for','he','that','was','is','had','his','of','by']

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

# print the 10 most frequsorted words the number of times they occur
for i in sorted_words[:10]:
    print("{:>15} {}".format(i, counter[i]))

# Capture the output of your script into a file named lab3.2.txt.