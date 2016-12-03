#!/usr/bin/python
# NAME: Victor Mora
# FILE: lab8.2.py
# DESC: Connect to sqlite3 database, insert and prints data

import sqlite3
# sqlite3.connect creates a file named 'databasefile.db' on the system.
connection = sqlite3.connect('week16.db')
# The cursor is the control structure that traverses records in the database.
cursor = connection.cursor()
cursor.execute("INSERT INTO products values(null, ?, ?, ?, ?)", ('Hurricane Jelly Beans','jelly beans','abc123', '1.00'))
cursor.execute("INSERT INTO products values(null, ?, ?, ?, ?)", ('Typhoon Model Boat','plastic model boat', 'abc456', '12.00'))
cursor.execute("INSERT INTO products values(null, ?, ?, ?, ?)", ('Supermarine Spitfire', 'plastic model airplane', 'bcd123', '3.00'))
cursor.execute("INSERT INTO products values(null, ?, ?, ?, ?)", ('ENIAC', 'model of first computer', 'bcd456', '21.00'))

products = [('Queso Fresco', 'cheese', 'CH33S3', '5.00'),
			('French Fries', 'french fries', 'FR135', '3.00'),
			('Enpitsu', 'Japanese pencil', 'P3NC1L', '15.00'),
			('Fancy Pen', 'pen', 'P3N', '23.00'),
			('Glasses', 'bifocals', 'GL4SS3S', '1.00'),
			('Lentes', 'glasses', 'L3NT35', '2.00'),
			('Coracao', 'Portuguese Heart', 'H34RT', '8.00'),
			('Anaconda', 'tons of packages', 'C0ND4', '1000.00'),
			('Python', 'snake', '5N4K3', '99.00'),
			('Frijoles', 'beans', 'B34N5', '64.00')]

for p in products:
	cursor.execute("INSERT INTO products values(null, ?, ?, ?, ?)", p)

# Commit the changes
connection.commit()