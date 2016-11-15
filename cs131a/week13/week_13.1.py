#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: week_13.1.py
# DATE: 11/14/2016
# DESC: Exercise in modules

from shape import Shape
from circle import Circle

c1 = Circle(100, 100, 100)
c2 = Circle(150, 150, 100)

c1_xdelta = 2
c1_ydelta = 3
c2_xdelta = 1
c2_ydelta = -1

# Test 20 (or more) times
for i in range(1,20):
    # c1 
    c1.move(c1_xdelta, c1_ydelta)
    c2.move(c2_xdelta, c2_ydelta)
    # Print c1.__str__()
    print(c1)
    # Print c2.__str__()
    print(c2)
    # Print collision True or None
    print("Collision: {collision}".format(collision = Circle.is_collision(c1,c2)))