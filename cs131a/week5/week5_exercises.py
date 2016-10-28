#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: week5_exercises.py
# DATE: September 13, 2016

# list comprehension of first 128 ascii characters
ascii_characters = [chr(x) for x in range(128)]

# convert list into lists of 8
chunks = [ascii_characters[i:i + 8] for i in range(0,len(ascii_characters),8)]

# print byte form of each ascii character in 8 columns
for c in chunks:
	formatted = ['{:>5}'.format(c).encode() 
				if len(repr(c)) <= 4
				else '{:>2}'.format(c).encode()
				for c in chunks[chunks.index(c)]]
	print(''.join(repr(formatted)))

# gettysbug address
gettysburg_address = """Four score and seven years ago our fathers brought forth on this 
	continent a new nation, conceived in liberty and dedicated to the 
	proposition that all men are created equal. Now we are engaged in 
	a great civil war, testing whether that nation or any nation so 
	conceived and so dedicated can long endure. We are met on a great 
	battlefield of that war. We have come to dedicate a portion of 
	that field as a final resting-place for those who here gave their 
	lives that that nation might live. It is altogether fitting and 
	proper that we should do this. But in a larger sense, we cannot 
	dedicate, we cannot consecrate, we cannot hallow this ground. 
	The brave men, living and dead who struggled here have consecrated 
	it far above our poor power to add or detract. The world will 
	little note nor long remember what we say here, but it can never 
	forget what they did here. It is for us the living rather to be 
	dedicated here to the unfinished work which they who fought here 
	have thus far so nobly advanced. It is rather for us to be here 
	dedicated to the great task remaining before us--that from these 
	honored dead we take increased devotion to that cause for which 
	they gave the last full measure of devotion--that we here highly 
	resolve that these dead shall not have died in vain, that this 
	nation under God shall have a new birth of freedom, and that 
	government of the people, by the people, for the people shall 
	not perish from the earth."""

# list comprehension of letters in gettysburg address
words = [x for x in gettysburg_address]

# convert each letter to octal
words = [oct(ord(x)).replace('0o','\\') for x in words]

# print octals in 10 formatted columns
chunks = [words[i:i + 10] for i in range(0,len(words),10)]

for c in chunks:
	formatted = ['{:>7}'.format(c) for c in chunks[chunks.index(c)]]
	print(''.join(formatted))