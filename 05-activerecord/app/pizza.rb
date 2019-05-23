class Pizza < ActiveRecord::Base
  has_many :pizza_toppings
  has_many :toppings, through: :pizza_toppings

  def veg?
    self.toppings.select do |topping|
      !topping.veg
    end.empty?
  end
end
