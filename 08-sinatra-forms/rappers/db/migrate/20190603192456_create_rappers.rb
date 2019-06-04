class CreateRappers < ActiveRecord::Migration
  def change
    create_table :rappers do |t|
      t.string :name
      t.integer :age
      t.boolean :fire
    end
  end
end
