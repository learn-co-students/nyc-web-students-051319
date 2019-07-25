class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :community, :upvotes, :author_name

  has_many :comments

  def author_name
    object.author.username
  end
end
