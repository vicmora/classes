#!/usr/local/bin/python3
# Name:   Victor Mora
# Script: read_records.py
# Desc:   open and read fixed.data
# Date:   10/30/2016

import os

file_obj = open('fixed.data', 'r')
count = len(file_obj.readlines())
rec_size = 86

# this works to print odd lines but does not use seek() method
# for i, line in enumerate(file_obj):
# 	if i % 2 == 0:
# 		pass
# 	else:
# 		print(i, line)


# print odd lines
print('-'*90)
print('Printing odd-numbered lines')
print('-'*90)

for i in range(count):
	if i % 2 == 0:
		pass
	else:
		file_obj.seek(i*rec_size)
		print(file_obj.readline())

# print even lines
print('-'*90)
print('Printing even-numbered lines')
print('-'*90)

for i in range(count):
	if i % 2 == 0:
		file_obj.seek(i*rec_size)
		print(file_obj.readline())

# reset file line index
file_obj.seek(0)

# create a copy of fixed.data
file_copy = open('fixed.data.copy', 'w')
file_copy.write(file_obj.read())

# close file objects
file_copy.close()
file_obj.close()

# append two new records
records = ['Arthur:Putie:923-835-8745:23 Wimp Lane:Kensington:DL:8/31/1969',
	'Barbara:Kertz:385-573-8326:832 Ponce Drive:Gary:IN:12/1/1946']

file_obj = open('fixed.data', 'a')
template = '{:>15s}{:>15s}{:>25s}{:>15s}{:>4s}{:>11s}\n'

for r in records:
	parts = r.split(':')
	file_obj.write(template.format(parts[1],parts[0],parts[3],parts[4],parts[5],parts[6]))

file_obj.close()

# print the last five lines
print('-'*90)
print('Printing the last five lines')
print('-'*90)

file_obj = open('fixed.data', 'r')
rec_size = 85
file_obj.seek(0, os.SEEK_END)
i = file_obj.tell() - 5 * rec_size
file_obj.seek(i)

for line in file_obj.readlines():
	print(line)

file_obj.close()