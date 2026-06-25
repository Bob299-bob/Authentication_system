import sqlite3

con=sqlite3.connect('career.db')
cursor=con.cursor()
cursor.execute(
    """
CREATE TABLE IF NOT EXISTS user(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT UNIQUE,
password TEXT 
)
"""
)
con.commit()
con.close()
print('Table is Created')