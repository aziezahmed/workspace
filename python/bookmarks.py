import sqlite3
import sys

connection = None
connection = sqlite3.connect('../sql/bookmarks.db')

cursor = connection.cursor()

option = 0;

while (option != 4):
    print("Bookmarks")
    print("1 - list all bookmarks")
    print("2 - add a bookmarks")
    print("3 - delete a bookmark")
    print("4 - exit")
    
    option = input("Select and option: ")

    if option == 1:

        cursor.execute('SELECT * FROM bookmarks')
        rows = cursor.fetchall()
        for row in rows:
            print(row[1] + " " + row[2])

    if option == 2:

        title = raw_input("Enter a title: ")
        url = raw_input("Enter a url: ")

        cursor.execute('INSERT INTO bookmarks (title, url) VALUES ("' + title + '", "' + url + '");')
        connection.commit()

    if option == 3:
        cursor.execute('SELECT * FROM bookmarks')
        rows = cursor.fetchall()
        for row in rows:
            print(str(row[0]) + " - " + row[1] + " " + row[2])

        key = raw_input("Enter a number: ")
        cursor.execute('DELETE FROM bookmarks WHERE id=' + key + ';')
        connection.commit()

connection.close()
