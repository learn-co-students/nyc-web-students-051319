class Album
  #belongs_to :artist
  attr_accessor :id, :title, :artist_id

  def initialize(title = nil, artist_id = nil, id = nil)
    @id = id
    @title = title
    @artist_id = artist_id
  end

  def artist
    sql = "SELECT * FROM artists WHERE id=#{@artist_id}"
    rows = DB.execute(sql)
    Artist.instances_from_rows(rows).first
  end

  # READ ONE
  def self.find(id)
    sql = "SELECT * FROM albums WHERE id=#{id}"

    row = DB.execute(sql)
    self.instances_from_rows(row).first
  end

  def self.all
    sql = "SELECT * FROM albums"
    rows = DB.execute(sql)

    self.instances_from_rows(rows)
  end

  def self.instances_from_rows(rows)
    rows.map do |row|
      self.instance_from_row(row)
    end
  end

  def self.instance_from_row(row)
    p = Album.new(row[1], row[2], row[0])
  end
end
