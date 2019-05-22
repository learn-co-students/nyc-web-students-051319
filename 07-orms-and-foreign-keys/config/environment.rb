require 'bundler/setup'

Bundler.require
#             WHICH DATABASE               WHAT COMMAND
# sqlite3 ./db/blog-development.sqlite < 'CREATE TABLE authors ()'

# sqlite3 ./db/blog-development.sqlite WHICH DATABASE
DB = SQLite3::Database.new("./db/music.sqlite")

# DB.execute("CREATE TABLE authors ()") # < 'CREATE TABLE authors ()' WHAT COMMAND


require_all 'app'
