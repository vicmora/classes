#!/usr/bin/env python3
# Name:   Victor Mora
# Script: example_table.py
# Date:   9/5/2016

# The Media Type must be text/html, since we're generating
# an HTML table.
print('Content-type:text/html\n')

# A list of 7 things.
things = ['thing one','thing two','thing 3','thing 4','thing 5','thing 6','thing 7']
tds = []

# Create the TD cells
for thing in things:
    tds.append('<td>%s</td>' % thing)

# Start the table
print("<h1>Example Table</h1>")
print('<table border>')

# Print the row by joining the elements of the list with a space.
print('<tr>' + " ".join(tds) + '</tr>')

# And close the TABLE
print('</table>')