#!/usr/local/bin/python3
# Name:   Victor Mora
# Script: convert_to_fixed.py
# Desc:   Format data from one file and save it to another
# Date:   10/30/2016

# path to file that needs formatting
fp = '/pub/cis/dputnam/cs131a/wk11_data.txt'

# template used to pretty print the formatted data
template = '{:>15s}{:>15s}{:>25s}{:>15s}{:>4s}{:>12s}'

# file to write the formatted data
file_obj = open('fixed.data', 'w')

with open(fp) as f:
	next(f)
	for line in f:
		parts = line.split(':')
		m, d, y = parts[6].split('/')
		if len(y) < 5:
			y = '19'+y
		date = m+'/'+d+'/'+y
		# print(template.format(parts[1],parts[0],parts[3],parts[4],parts[5],date))
		file_obj.write(template.format(parts[1],parts[0],parts[3],parts[4],parts[5],date))

file_obj.close()