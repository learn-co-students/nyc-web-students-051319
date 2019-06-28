class CreateFries < ActiveRecord::Migration[5.1]
  def change
    create_table :fries do |t|
      t.boolean :cheese
      t.string :style

      t.timestamps
    end
  end
end
