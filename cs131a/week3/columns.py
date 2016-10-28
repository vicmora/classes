#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: columns.py
# DATE: <2016-09-05 Mon>
# DESC: Prints list of numbers in columns of 10 

# Create list of 100 numbers from 1 to 100
nums = list(range(1,101))

chunks = [nums[i:i + 10] for i in range(0,len(nums),10)]

for c in chunks:
	formatted = ['{:>5}'.format(c) for c in chunks[chunks.index(c)]]
	print(''.join(formatted))