class Api::V1::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def up_vote
    post = Post.find(params[:id])

    post.update(upvotes: post.upvotes + 1)

    render json: post
  end

  def comment
    post = Post.find(params[:id])

    comment = Comment.create({
      content: params[:content],
      upvotes: 0,
      post: post,
      user: User.first
    })

    render json: comment
  end
end
