require 'pry'
require_relative 'stock.rb'
require_relative 'investor.rb'
require_relative 'purchase.rb'

stephen = Investor.new("Stephen", 100)
elma = Investor.new("Elma", 1000)
raphael = Investor.new("Raphael", 10000000)
chett = Investor.new("Chett", 5)
rishi = Investor.new("Rishi", 1)

apple = Stock.new("AAPL", "Apple")
disney = Stock.new("DIS", "Disney")
google = Stock.new("GOOG", "Google")
we = Stock.new("WE", "The We Company™")

rishi.buy_stock(we, 1000, 1)
stephen.buy_stock(apple, 1000, 4)
stephen.buy_stock(disney, 1000, 4)
elma.buy_stock(google, 100, 2)
raphael.buy_stock(disney, 10, 10000000)
chett.buy_stock(we, 1000, 5)

binding.pry
1
