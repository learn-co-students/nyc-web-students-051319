class Api::V1::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def up_vote
    post = Post.find(params[:id])

    if session_user
      post.update(upvotes: post.upvotes + 1)

      render json: post
    else 
      render json: {errors: "Please log in to up vote!"}
    end
  end

  def comment
    post = Post.find(params[:id])

    comment = Comment.create({
      content: params[:content],
      upvotes: 0,
      post: post,
      user: session_user
    })

    render json: comment
  end
end
