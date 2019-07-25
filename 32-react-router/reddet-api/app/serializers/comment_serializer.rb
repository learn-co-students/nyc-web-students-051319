class CommentSerializer < ActiveModel::Serializer
  attributes :id, :username, :content, :upvotes, :created_at

  def username
    object.user.username
  end
end
