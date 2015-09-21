#!/bin/bash
echo 'create table bookmarks(id integer primary key autoincrement, title text, url text);' | sqlite3 bookmarks.db
