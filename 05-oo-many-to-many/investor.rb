class Investor
  attr_accessor :name, :net_worth

  @@all = []

  def initialize(name, net_worth)
    @name = name
    @net_worth = net_worth

    @@all << self
  end

  def self.all
    @@all
  end


  def buy_stock(stock, price, quantity)
    Purchase.new(price, quantity, stock, self)
  end

  def purchases
    Purchase.all.select do |purchase|
      purchase.investor == self
    end
  end

  def stocks
    purchases.map do |purchase|
      purchase.stock
    end
  end

end
