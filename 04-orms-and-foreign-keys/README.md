Intro to SQL
============

### Persistence


### Things we can do to data:



1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

Which part of CRUD?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name="Black Sabbath";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? artists.id **169**
CRUD?

```sql
INSERT INTO fans (name, artist_id) VALUES ("Rishi", 169);
```

```sql
INSERT INTO fans (name, artist_id) VALUES ("Duke",
  (SELECT id from artists WHERE name="Black Eyed Peas")
);
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

```sql
UPDATE fans SET name="Rishikesh" WHERE name="Rishi";
```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id!=169;
```

8. Write the SQL to display an artists name next to their album title


```sql
SELECT artists.name, albums.title FROM artists INNER JOIN albums ON artists.id=albums.artist_id;
```

we can choose not to specify that the album belongs to an artist, but unfortunately that gives us a solution where every artist and every album are connected
```sql

SELECT artists.name, albums.title FROM artists, albums;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql
SELECT artists.name AS Artist, albums.title AS Album, COUNT(tracks.id) AS "Track Count" FROM artists INNER JOIN albums ON artists.id=albums.artist_id INNER JOIN tracks ON albums.id=tracks.album_id GROUP BY tracks.album_id;
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql
SELECT DISTINCT artists.name AS Artist FROM artists INNER JOIN albums ON  artists.id=albums.artist_id INNER JOIN tracks ON albums.id=tracks.album_id INNER JOIN genres ON genres.id=tracks.genre_id WHERE genres.name="Pop";
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```


1 ruby, 2 orm, 3 crud, 4-5 sql
## Object Relational Mapper (ORM)

+ Definition:
A way of mapping OOP into a Sql database


## Active Record Pattern
Each table should be a class
Each row is an instance
Each column is attribute








# CRUD REVIEW
What are the four ways we can interact with data?

* Create
SQL: INSERT INTO songs VALUE title;
Ruby: Song.new(title)

* Read
SQL: SELECT * FROM songs;
Ruby: Song.all

SQL: SELECT * FROM songs WHERE id = ?;
Ruby: Song.all.find do |song|
  song.id == query_id
end


* Update
SQL: UPDATE songs SET title = new_title WHERE title=title;
Ruby: song.title = new_title

* Destroy
SQL: DELETE FROM songs WHERE title = ?;
DROP TABLE songs;
Ruby: Song.all.clear
Song.all.delete(song)


## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

Q: Write the SQL to find all books written by a certain author given the author's id.
Q: Write the SQL to find all books written by a certain author given the author's name.



2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name


Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?



## Lecture Notes
INSERT INTO table (column) VALUES (value)
SELECT last_insert_rowid()
UPDATE table SET column = value WHERE condition
DELETE FROM table WHERE condition
