#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: lab3.1.py
# Desc: Exercises
# DATE: September 25, 2016

# Create a list of lc letters the hard way with with a list comprehension, chr(), range(),
# and a knowledge of the numbers of the ASCII lowercase letters.
lowercase_letters = [chr(i) for i in range(97, 123)]


# Another way to get the lowercase letters is to import the string module 
# and use the string.ascii_lowercase list, like this:
#
#   import string
#   lowercase_letters = list(string.ascii_lowercase)

# --------- Your code starts here ---------- #

# Create a dictionary using the the list of lower-case ASCII letters as keys
# with values being the uppercase version of the letters.
print('The dictionary:')
ascii_dict = {}
for i in lowercase_letters:
	ascii_dict[i] = i.upper()
print(ascii_dict)
print('-'*40)

# Print all of the dictionary’s keys sorted — use the keys() method to
# retrieve the keys from the dict.
print('The dictionary keys sorted:')
print(sorted(ascii_dict.keys()))
print('-'*40)

# Print all of the values of the dictionary sorted — use values() method.
print('The dictionary values sorted:')
print(sorted(ascii_dict.values()))
print('-'*40)

# Print all of the keys and values sorted in reverse by value. There’s an
# example of sorting a dictionary in Week 3’s Intro, Section 3.2 that you
# can modify for this problem.
print('The keys and values sorted in reverse by value:')
sorted_list = sorted(ascii_dict, key=ascii_dict.__getitem__)
sorted_list.reverse()

for i in sorted_list:
	print(i+':'+ascii_dict[i])
