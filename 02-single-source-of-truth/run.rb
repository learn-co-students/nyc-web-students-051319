require 'pry'
require_relative './person.rb'
require_relative './doubt.rb'


rishi = Person.new("Rishi", 12)
rishi.have_doubt("maybe this lecture sucks", 0)
# Doubt.new("maybe this lecture sucks", 0, rishi)

taylor = Person.new("Taytay", 1)
taylor.have_doubt("the assessment i'm writing is garbage", 0)
taylor.have_doubt("nothing on mealpal is gonna be good today", 2)

binding.pry
1
