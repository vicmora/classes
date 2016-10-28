#!/usr/local/bin/python3
# Name:   Victor Mora
# Script: helpers.py
# Desc:   Helpers module
# Date:   10/26/2016

# For pi
import math 
 
# Use _main() for testing the module
def _main():

    # CODE TO TEST AREA() AND CIRC()
    print("#" * 28,"\n", "Testing...1, 2, 3...testing!\n", "#" * 28, "\n", sep="")
    radius = 10
    print("A circle with a radius of {} has a circumference of {:.2f} \
units and an area of {:.2f} square units.".format(radius, circ(radius), area(radius)))
        
    # CODE TO TEST THE F2C() FUNCTION GOES HERE.
    print(f2c(-1000000))
    print(f2c(212))

    # CODE TO TEST THE C2F() FUNCTION GOES HERE.
    print(c2f(100))
    print(c2f(-1000))

##################################################
#  COMPLETE THESE FUNCTIONS
##################################################

# Calculate the area of a circle of a given radius
def area(radius=1):
	"""area(radius): return the area of a circle with radius r."""
	return math.pi * radius * radius

# Calculate the circumference of a circle of a given radius
def circ(radius=1):
	"""circ(radius): return the circumference of a circle with radius r."""
	return 2 * math.pi * radius


"""
For temperature functions it's important to allow only valid temperatures. The lowest possible
temperature that is theoretically possible  is absolute zero, at which the motion of particles 
that constitutes heat would be minimal. It is zero on the Kelvin scale, equivalent to –273.15°C or –459.67°F.

The maximum possible temperature is 1.416833(85) x 1032 Kelvin degrees ---at temperatures 
above it, the laws of physics just cease to exist. 
[http://www.zmescience.com/other/minimum-and-maximum-temperatures-043294/]
"""

def f2c(temp):
    """
    Converts Fahrenheit tempature to Celcius
    USAGE: print(f2c(f_temp))
    """
    return None if temp < -459.67 else (temp - 32) / (9/5)

def c2f(temp):
    """ 
    Converts Celcius to Fahrenheit
    USAGE: print(c2f(c_temp))
    """
    return None if temp < -273.15 else temp * (9/5) + 32

# testing code
# When run on the command line, this code will run
# but when the module is imported, it wont' run.
if __name__ == '__main__':
    _main()