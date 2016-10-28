#!/usr/local/bin/python3
# NAME: Victor Mora
# FILE: lab5.py
# DESC: Week 10 Lab 5
# DATE: October 24, 2016

import re
import os

dirs_and_files = """
        # CREATE DIRECTORIES FIRST
        site
        site/app
        site/app/controllers
        site/app/models
        site/app/views
        site/app/views/layouts
        site/app/views/users
        site/config
        site/db
        site/log
        site/public
        site/public/images
        site/public/javascripts
        site/public/stylesheets

        # THEN CREATE THE FILES
        site/app/controllers/posts_controller.py
        site/app/controllers/users_controller.py
        site/app/models/post.py
        site/app/models/user.py
        site/app/views/layouts/application.html
        site/app/views/users/account.html
        site/app/views/users/index.html
        site/app/views/users/signin.html
        site/config/routes.py
        site/config.yml
        site/db/site_db.sqlite
        site/db/site_db.sqlite3
        site/index.py
        site/log/access_log
        site/log/access_log.txt
        site/log/error_log
        site/log/error_log.txt
        site/public/stylesheets/style.css
"""

# Parse string and create a list of paths. Replace escape characters
# with blanks, however, needs improvement in order to escape more than
# new line. I believe we can use regex here but I can't figure it out :(
paths = re.split("\W+\W+",dirs_and_files)
paths = [i.replace('\n','') for i in paths if i != '' ]

# Split strings and join them so they are independent of OS
paths = [i.split('/') for i in paths]
paths = [os.path.join(*i) for i in paths]

# Remote comments from string. Can also improve this portion.
paths.pop(0)
paths.pop(14)

# Test whether the path is a file or a directory and create them 
for i in paths:
	if os.path.exists(i):
		print('path exists:', i)
		pass
	else:
		if os.path.splitext(i)[1]:
			# create file
			file = open(i, 'w+')
		else:
			# create directory
			os.mkdir(i)
		print('path created:', i)