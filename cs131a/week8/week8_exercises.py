#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: week8_exercises.py
# DESC: Week 8 Exercises
# DATE: October 8, 2016

import math

# Write a function named reverser() that reverses lists
# and strings. When the function is passed a string,
# it returns a string. When the function is passed a list,
# it returns a list.

def reverser(thing):
	lst = [x for x in thing]
	lst.reverse()
	reversed = ''.join(lst) if isinstance(thing, str) else lst
	return reversed

print("-"*50)
print("Reverser:")
print("-"*50+"\n")
print("Reversed String: "+reverser('Fred'))
print("Reversed List: ",)
print(reverser(['Fred', 'Flinstone', 31, True]))
print("\n")

# Write a function that returns the volume of cubes or
# spheres. By default the function will assume that
# you’re calculating the volume of a sphere. The function
# will look like this:

def get_volume(dimension, kind='sphere'):
	if kind == 'sphere':
		volume = (4/3)*math.pi*(dimension**3)
	else:
		volume = dimension**3
	return volume

print("-"*50)
print("Get Volume:")
print("-"*50+"\n")
print("Sphere Volume w/ Radius of 2: "+str(get_volume(2)))
print("Cube Volume w/ Side of 2: "+str(get_volume(2, kind='cube'))+"\n")


# Write a function that prints the keys and values of a
# hash of sorted by key. Print the data in neat columns
# using the String format() function. Your function should
# handle a hash with any number of keys.

def pretty_print_hash(**kwargs):
    for i in sorted(list((kwargs.keys()))):
        print("{0:>12}: {1}".format(i, kwargs[i]))

print("-"*50)
print("Pretty Print Hash:")
print("-"*50+"\n")
kwargs = {'first_name':'Fred', 'last_name':'Flinstone', 'age':31}
pretty_print_hash(**kwargs)
print("\n")

# Write a function that uses a lambda function sort to sort a
# list of employees by their salary. This function will take a
# list of data as an argument and will employ the sorted function.
# Use the sorted key option with a lambda function that sorts
# the data by the last element of the list (salary). The list
# of employees is given below. Your function should ignore the
# first line. Print only the last name, first name and salary.
# See the example output below

employee_data = ["FName  LName   Tel      Address  City   State  Zip   Birthdate   Salary",
"Arthur:Putie:923-835-8745:23 Wimp Lane:Kensington:DL:38758:8/31/1969:126000",
"Barbara:Kertz:385-573-8326:832 Ponce  Drive:Gary:IN:83756:12/1/1946:268500",
"Betty:Boop:245-836-8357:635 Cutesy Lane:Hollywood:CA:91464:6/23/1923:14500",
"Ephram:Hardy:293-259-5395:235 Carlton Lane:Joliet:IL:73858:8/12/1920:56700",
"Fred:Fardbarkle:674-843-1385:20 Parak Lane:DeLuth:MN:23850:4/12/23:780900",
"Igor:Chevsky:385-375-8395:3567 Populus Place:Caldwell:NJ:23875:6/18/68:23400",
"James:Ikeda:834-938-8376:23445 Aster Ave.:Allentown:NJ:83745:12/1/1938:45000",
"Jennifer:Cowan:548-834-2348:408 Laurel Ave.:Kingsville:TX:83745:10/1/35:58900",
"Jesse:Neal:408-233-8971:45 Rose Terrace:San Francisco:CA:92303:2/3/2001:500",
"Jon:DeLoach:408-253-3122:123 Park St.:San Jose:CA:04086:7/25/53:85100",
"Jose:Santiago:385-898-8357:38 Fife Way:Abilene:TX:39673:1/5/58:95600",
"Karen:Evich:284-758-2867:23 Edgecliff Place:Lincoln:NB:92743:11/3/35:58200",
"Lesley:Kirstin:408-456-1234:4 Harvard Square:Boston:MA:02133:4/22/2001:52600",
"Lori:Gortz:327-832-5728:3465 Mirlo Street:Peabody:MA:34756:10/2/65:35200",
"Norma:Corder:397-857-2735:74 Pine Street:Dearborn:MI:23874:3/28/45:245700",
"Paco:Gutierrez:835-365-1284:454 Easy Street:Decatur:IL:75732:2/28/53:123500",
"Popeye:Sailor:156-454-3322:945 Bluto Street:Anywhere:USA:29358:3/19/35:22350",
"Sir:Lancelot:837-835-8257:474 Camelot Boulevard:Bath:WY:28356:5/13/69:24500",
"Steve:Blenheim:238-923-7366:95 Latham Lane:Easton:PA:83755:11/12/1956:20301",
"Tommy:Savage:408-724-0140:1222 Oxbow Court:Sunnyvale:CA:94087:5/19/66:34200",
"Vinh:Tranh:438-910-7449:8235 Maple Street:Wilmington:VM:29085:9/23/63:68900",
"William:Kopf:846-836-2837:6937 Ware Road:Milton:PA:93756:9/21/46:43500",
"Yukio:Takeshida:387-827-1095:13 Uno Lane:Ashville:NC:23556:7/1/29:57000",
"Zippy:Pinhead:834-823-8319:2356 Bizarro Ave.:Farmount:IL:84357:1/1/67:89500",
"Andy:Warhol:212-321-7654:231 East 47th Street:New York City:NY:10017:8/6/1928:2700000"]

def salary_sort_vm():
	data = [x.split(':') for x in employee_data]
	data.pop(0)
	d = {int(x[-1]):', '.join(x[1::-1]) for x in data}
	for i in sorted(list(d.keys()), reverse=True):
		print("{0:>12}: {1}".format(i, d[i]))

def salary_sort():
	data = [x.split(':') for x in employee_data]
	data.pop(0)
	d = {int(x[8]):x[0:7] for x in data}
	sorted_tuples = sorted(d.items(), key=lambda x: x[0], reverse=True)
	for i in sorted_tuples:
		print("{0:>10}, {1:>10} {2:>10}".format(i[1][1],i[1][0],i[0]))
	# print("{0:>12} {1:>12} {2:>12}".format(sorted_tuples[0], sorted_tuples[1]))

print("-"*50)
print("Salary Sort:")
print("-"*50+"\n")
salary_sort()



