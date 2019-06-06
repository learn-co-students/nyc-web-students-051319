class AddRapperIdToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :rapper_id, :integer
  end
end
