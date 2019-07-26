class Api::V1::UsersController < ApplicationController
  def create
    # let's make a user using the username and password from the params
    user = User.new(
      username: params[:username],
      password: params[:password],
    )

    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end

  end
end
