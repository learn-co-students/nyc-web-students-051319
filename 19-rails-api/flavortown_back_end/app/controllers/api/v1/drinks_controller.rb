class Api::V1::DrinksController < ApplicationController

  def index
    # model
    @drinks = Drink.all
    # response

    render json: DrinkSerializer.new(@drinks), status: :ok
  end

  def show

    # model
    @drank = Drink.find(params[:id])
    # response
    render(json: {drink:  DrinkSerializer.new(@drank), another_atr: '3'}, status: :ok)

  end

  def custom
    byebug
    @drink.update(fizzy: params[:friday])
    # N O L O G I C
    render json: {message: "hah you got me"}, status: 402
  end


end
