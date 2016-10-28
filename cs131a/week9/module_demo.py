#!/usr/local/bin/python3
# Name:   Victor Mora
# Script: module_demo.py
# Desc:   Helpers module demo
# Date:   10/26/2016

from helpers import *

r = 5
print("A circle with radius {} has an area of {:.2f} and a circumference of {:.2f}".format(r,area(r),circ(r)))

print(f2c(98.6))
print(f2c(-999))

print(c2f(20))
print(c2f(-500))
