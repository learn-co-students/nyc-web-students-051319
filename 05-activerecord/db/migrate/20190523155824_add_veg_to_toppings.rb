class AddVegToToppings < ActiveRecord::Migration[5.2]
  def change
    add_column :toppings, :veg, :boolean
  end
end
