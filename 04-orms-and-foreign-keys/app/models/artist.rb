# CRUD



class Artist
  # has_many :albums

  attr_accessor :id, :name

  def initialize(name = nil, id = nil)
    @id = id
    @name = name
  end

  # PART OF CREATE
  def save
    # To take the data from a post instance and insert it into the table.
    sql = "INSERT INTO artists (name) VALUES ('#{@name}')"
    DB.execute(sql)

    sql = "SELECT last_insert_rowid() FROM artists LIMIT 1"
    id = DB.execute(sql)

    @id = id[0][0]

    self
  end

  # CREATE
  def self.create(name)
    a = Artist.new(name)
    a.save
  end

  # READ ALL
  def self.all
    sql = "SELECT * FROM artists"
    rows = DB.execute(sql)

    self.instances_from_rows(rows)
  end

  # READ ONE
  def self.find(id)
    sql = "SELECT * FROM artists WHERE id=#{id}"

    row = DB.execute(sql)
    self.instances_from_rows(row).first
  end

  # UPDATE
  def update(new_name)
    sql = "UPDATE artists SET name='#{new_name}' WHERE id=#{@id}"
    DB.execute(sql)
    @name = new_name
    Artist.find(@id)
  end

  def self.delete(id)
    sql = "DELETE FROM artists WHERE id=#{id}"
    DB.execute(sql)

    true
  end

  def albums
    sql = "SELECT * FROM albums WHERE artist_id=#{@id}"
    rows = DB.execute(sql)

    Album.instances_from_rows(rows)
  end


  #private helper methods

  def self.instances_from_rows(rows)
    rows.map do |row|
      self.instance_from_row(row)
    end
  end

  def self.instance_from_row(row)
    p = Artist.new(row[1], row[0])
  end
end
