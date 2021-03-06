#!/usr/bin/python
# -*- coding: utf-8 -*-

import sqlite3 as lite
import sys

con = None

try:
    con = lite.connect('../sql/bookmarks.db')
    
    cur = con.cursor()    
    cur.execute('SELECT * FROM bookmarks')
    
    rows = cur.fetchall()

    for row in rows:
        print row[1]
        print row[2]
    
except lite.Error, e:
    
    print "Error %s:" % e.args[0]
    sys.exit(1)
    
finally:
    
    if con:
        con.close()
