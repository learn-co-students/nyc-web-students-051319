class Rapper < ApplicationRecord
  has_many :songs
  validate :validate_age

  def validate_age
    if self.age > 40
      errors.add(:age, "get a new hobby")
    end

  end
end
