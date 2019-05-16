class Doubt
  attr_accessor :message, :level, :person

  @@all = []

  def initialize(message, level, person)
    @message = message
    @level = level
    @person = person
    # @when = Time.now()

    @@all << self
  end

  def self.all
    @@all
  end

end
