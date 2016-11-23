#!/usr/local/bin/python3
# Creator: Victor Mora
# File   : examples.py
# Date   : 11/23/2016

import numpy as np
import matplotlib.pyplot as plt
plt.plot([1,2,3,4])
plt.ylabel('some numbers')
plt.show()

# evenly sampled time at 200ms intervals using np.arrange: 
# Read the documentation: https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html
t = np.arange(0., 5., 0.2) 
# red dashes, blue squares and green triangles
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
plt.show()