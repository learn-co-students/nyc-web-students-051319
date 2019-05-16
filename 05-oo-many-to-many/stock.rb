class Stock
  attr_accessor :ticker, :name

  @@all = []
  def initialize(ticker, name)
    @ticker = ticker
    @name = name

    @@all << self
  end

  def self.all
    @@all
  end

  def purchases
    Purchase.all.select do |purchase|
      purchase.stock == self
    end
  end

  def investors
    purchases.map do |purchase|
      purchase.investor
    end
  end
end
