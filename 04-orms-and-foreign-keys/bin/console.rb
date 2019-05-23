#!/usr/bin/env ruby

require_relative '../config/environment'

def reload!
  load_all 'app'
end

puts "Welcome to your Music Console!\n"

Pry.start
