class Purchase
  attr_reader :price, :quantity, :stock, :investor

  @@all = []

  def initialize(price, quantity, stock, investor)
    @price = price
    @quantity = quantity
    @stock = stock
    @investor = investor

    @@all << self
  end

  def self.all
    @@all
  end
end
