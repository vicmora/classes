#!/usr/bin/python
# NAME: Victor Mora
# FILE: lab8.1.py
# DESC: Connect to sqlite3 database, drop, create table and insert rows

# Import the SQLite3 module
import sqlite3

# Create the connection and database 'week16.db' on the system.
connection = sqlite3.connect('week16.db')

# The cursor is the control structure that traverses records in the database.
cursor = connection.cursor()
cursor.execute('DROP TABLE IF EXISTS products')
cursor.execute('CREATE TABLE products (id integer primary key, product_name string, description string, upc string, unit_price int)')