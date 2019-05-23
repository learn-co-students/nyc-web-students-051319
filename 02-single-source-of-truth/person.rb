class Person

  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age

    @@all << self


  end

  def say_hi
    puts "wassup my name is #{self.name}"
  end

  def something_else
    self.say_hi
    self.name
  end

  def name
    puts "my name"
    @name
  end

  def have_doubt(message, level)
    Doubt.new(message, level, self)
  end

  def my_doubts
    Doubt.all.select do |doubt|
      doubt.person == self
    end.uniq
  end


  def self.all
    @@all
  end
end
