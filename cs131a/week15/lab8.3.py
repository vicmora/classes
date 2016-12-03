#!/usr/bin/python
# Name: Victor Mora
# File: lab8.3.py
# Desc: Display all records in week16.db

import sqlite3
connection = sqlite3.connect('week16.db')
cursor = connection.cursor()
all = cursor.execute('SELECT * FROM products')
for row in all:
	print("{:<5}{:<25}{:<25}{:<10}{:<5}".format(row[0], row[1], row[2], row[3], row[4]))
    #####################################
    ##########  YOUR CODE ###############
    ##########  GOES HERE ###############
    ########## Use the str.format() method to print the data in columns    
    #####################################