class User < ApplicationRecord
  # has_many :created_posts, class_name: "Post", foreign_key: "author_id"
  # has_many :comments
  # has_many :commented_posts, through: :comments, class_name: "Post"

  has_secure_password
end
