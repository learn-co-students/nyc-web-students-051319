class RappersController < ApplicationController
  before_action :authorized?, only: [:index, :show]

  def index
      @rappers = Rapper.all
  end

  def show
    @rapper = Rapper.find(params[:id])
  end

  def new
    @rapper = Rapper.new
  end

  def create
    rapper = Rapper.create(rapper_params)
    redirect_to rapper
  end

  def edit
    @rapper = Rapper.find(params[:id])
  end

  def update
    @rapper = Rapper.find(params[:id])
    @rapper.update(rapper_params)
    redirect_to rapper_path(@rapper)
  end

  def delete
    #TBD
  end

private

def rapper_params
  #params when using form_for are organized so that inside the params hash there is a key called "rapper"=> {name: "", age:"", fire:""}
  params.require(:rapper).permit(:name, :age, :fire)
end



end
