#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: lab2.1.py
# DATE: September 11, 2016

# Use a Python regular expression to extract the words from the text.
import re
output = []

"""
Here's a list of the things this script is supposed to do.
- Read the source file into a single string. Chapter 3.XXX
- Create a list of all of the words in oliver.txt
- Create a list with the first 100 words and another list with the rest of the words
- Print the words in a formatted arrangement of rows with 6 columns
- Count the unique words in List One; print the count and the unique words.
- Count the unique words in List Two; print the count and the unique wordws.
- Count the unique words that are in both lists; print the count and the unique words. (UNION)
- Count the unique words that are in List One or List Two, but not in both; print count and the words. (Symmetric Difference)
- Create a sorted list of the unique words that are in List One but not in List Two (See The Quick Python Book, Ch 5.3). Print the sorted list.
- Create a sorted list of the unique words that are in List Two but not in List One. Print the sorted list.
"""
# Open and read the file into a string
f = open('/users/dputnam/oliver.txt')
text = f.read()

# Split the string into a list of words.
# \W+ splits on non-word characters, but doesn't consider apostrophes
# in contractions or hypens. This is a crude way to
# split a string into words, but it's enough for this List assignment
# Collect the words as all lowercase using String function lower().
words = re.split("\W+",text.lower())

# Remove empty strings if there are any...they are not words. 
# Notice the list comprehension makes this a simple line of code.
words = [i for i in words if i != '' ]

# You now have a list of words to work with. If you need a reference point,
# look at the example at http://hills.ccsf.edu/~dputnam/cs131a/lab2.1.py

# You take over here and finish it up! :)

# 1. & 2. Split words into two lists
list_one = words[:100]
list_two = words[100:]

# 1. Print list_one in 6 organized columns
chunks = [list_one[i:i + 6] for i in range(0,len(list_one),6)]

for c in chunks:
	formatted = ['{:>15}'.format(c) for c in chunks[chunks.index(c)]]
	print(''.join(formatted))

# 2. Unique words in list_one
set_one = set(list_one)
print('Unique words count in list_one: '+ str(len(set_one)) +'\n')
print('Unique words: \n' + str(set_one))

# 3. Unique words in list_two
set_two = set(list_two)
print('Unique words count in list_two: '+ str(len(set_two)) +'\n')
print('Unique words: \n' + str(set_two))

# 4. Count the unique words (set of words) that are contained in both lists.
# This is a UNION operation. Print the count and the unique words.
union_set = set_one.union(set_two)
print('Unique word count in both lists: '+ str(len(union_set)) + '\n')
print('Unique words: \n' + str(union_set))

# 5. Count the unique words (set of words) that are in either List One or List Two,
# but not in both. This is a SYMMETRIC DIFFERENCE operation. Print the count and the words.
sym_diff_set = set_one.symmetric_difference(set_two)
print('Unique word count in either lists but not both: '+ str(len(sym_diff_set)) + '\n')
print('Unique words: \n' + str(sym_diff_set))

# 6. Create a sorted list of the unique words (set of words) that are in List One but not
# in List Two (See The Quick Python Book, Ch 5.3) for examples of how to do this. Print the sorted list.
diff_set = set_one.difference(set_two)
diff_list = list(diff_set)
diff_list.sort()
print('Unique words in list_one but not in list_two: \n' + str(diff_list))

# 7. Create a sorted list of the unique words (set of words) that are in List Two but not
# in List One. Print the sorted list.
diff_set_two = set_two.difference(set_one)
diff_list_two = list(diff_set_two)
diff_list_two.sort()
print('Unique words in list_two but not in list_one: \n' + str(diff_list_two))
