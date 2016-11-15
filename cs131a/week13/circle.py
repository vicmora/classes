#!/usr/local/bin/python3
# Creator: Victor Mora
# File   : circle.py
# Date   : 11/14/2016

import math
from shape import Shape

class Circle(Shape):
    pi = 3.14159265359
    def __init__(self, x=0, y=0, radius=1):
        Shape.__init__(self, x, y)
        self.radius = radius

    def area(self):
        return  math.pi * self.radius ** 2

    def __str__(self):
        return Shape.__str__(self) + ", radius: {radius}, area: {area:.2f}".format(radius=self.radius, area = self.area())


    @classmethod
    def is_collision(Circle,c1,c2):
        """Test whether two circle objects are occupying the same space.
        YOUR CODE GOES HERE"""
        d = Circle.distance(c1, c2)
        sum_of_radii = c1.radius + c2.radius
        return True if d < sum_of_radii else None

    @classmethod
    def distance(Circle,c1,c2):
        """ YOUR CODE GOES HERE"""
        x1, y1 = c1.location()
        x2, y2 = c2.location()
        d = math.sqrt((y2-y1)**2 + (x2-x1)**2)
        return d


def _main():
    # run functions here.
    """Testing Circle class for area(), move(), location(), __str__()"""
    print("--- START ---")
    c1x = -10
    c1y = 0
    c2x = 10
    c2y = 0
    i1 = 0
    i2 = 0
    c1 = Circle(0, 0, 5)
    c2 = Circle(0, 0, 5)
    for i in range(10):
        print('--')
        print('Circle  1: ',c1)
        print('Circle  2: ',c2)
        print("Collision: ",Circle.is_collision(c1, c2))
        i1 += i
        i2 -= i
        c1.move(i, i1)
        c2.move(i, i2)
    print("c1 Final location: ", c1.location())
    print("c2 Final location: ", c2.location())
    print(c1)
    print(c2)
    print("--- END ---")

# Testing code: run this module as a standalone script
if __name__ == '__main__':
    _main()