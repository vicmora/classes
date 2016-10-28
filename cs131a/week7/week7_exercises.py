#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: week7exercises.py
# DESC: Week 7 Exercises
# DATE: October 3, 2016

# Write a script that uses a list tuples,
# a loop provide each element of the list,
# and the comparison operators (<, >, <=, >=, ==, and !=)
# to test the values in each tuple against each other.

# Capture the output in a file named operators_output.txt.
# Your output would show how each tuple is evaluated using
# each comparison operator, something like this:

list_of_tuples = [(1,1), (1,2), ('aaa', 'a'), ('AAAA', 'aaaa'), 
					( 10**2, 2**10 )]

for x,y in list_of_tuples:
	print(str(x)+" < "+str(y)+" is "+str(x < y))
	print(str(x)+" > "+str(y)+" is "+str(x > y))
	print(str(x)+" <= "+str(y)+" is "+str(x <= y))
	print(str(x)+" >= "+str(y)+" is "+str(x >= y))
	print(str(x)+" == "+str(y)+" is "+str(x == y))
	print(str(x)+" != "+str(y)+" is "+str(x != y))

print('\n')


# Write Python code to calculate 2^2^2^2 = 65536
print(2**2**2**2)
print('\n')

# Use Python to calculate the value of
# 11111111111111111111+22222222222222222222 in one line of code
# with no more than 30 characters. HINT: Each number is 20 digits…
# find a way to enter them in the shortest possible way, even as
# few as 15 characters. You can run your code using Interactive Python
# to avoid using any print statement. Your result will look like this: 
print(int('1'*20)+int('2'*20))

