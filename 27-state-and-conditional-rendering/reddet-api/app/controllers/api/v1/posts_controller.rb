class Api::V1::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def up_vote
    post = Post.find(params[:id])

    post.update(upvotes: post.upvotes + 1)

    render json: post
  end 
end
