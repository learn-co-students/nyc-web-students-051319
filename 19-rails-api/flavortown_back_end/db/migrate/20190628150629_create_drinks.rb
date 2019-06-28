class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.boolean :purple
      t.integer :fizzy

      t.timestamps
    end
  end
end
