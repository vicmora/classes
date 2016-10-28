# Import a module containing special string data
import string 

############ A LIST OF LETTERS
letters = list(string.ascii_letters)

############ A LIST OF INTEGERS
# nums is a range object, not a list
nums = range(1, 101)

# To convert a range to a list, you would use the list() function
# nums = list(range(1, 101))


############ LIST OF COMPLEX NUMBERS 
complex = [(i * 3j) for i in range(1,101)]


# What's in those lists???
print("THE LETTERS LIST")
print(letters)
print("-" * 30)
print("THE NUMBERS RANGE")
print(nums)
print("\nTHE NUMBERS PRINTED AS A LIST")
print("The list() built-in returns a list when passed a range object.")
print(list(nums))
print("-" * 30)
print("THE LIST OF COMPLEX NUMBERS")
print(complex)

print([i * i for i in complex])

# Get Loopy with For
print("\nGet Loopy with For")
# Q1
print("\nQ1")
squares = [i**2 for i in complex]
print(squares)

# Q2
print("\nQ2")
five_letters = [l*5 for l in letters]
print(five_letters)

# Q3
print("\nQ3")
result_list = []
for n in nums:
	previous = nums.index(n)
	result = n * previous
	result_list.append(str(result))
print(", ".join(result_list))

# Get Loopy with Range
print("\nGet Loopy with Range")

# Q1
print("\nQ1")
for i in range(0,101,2):
	print(i)

# Q2
print("\nQ2")
for i in range(0,101,3):
	print(i)