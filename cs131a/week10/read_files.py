#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: read_files.py
# DESC: Week 10 Lab 5
# DATE: October 24, 2016

import os

tree = os.walk(os.path.join('site'))

for dirs, subdirs, files in tree:
	for f in files:
		fp = os.path.join(os.getcwd(), dirs, f)
		if os.path.isfile(fp):
			print(fp)