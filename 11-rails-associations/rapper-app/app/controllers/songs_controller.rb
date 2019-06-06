class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def new
    @song = Song.new
    @rappers = Rapper.all
  end

  def create
    @song = Song.new(song_params)
    if @song.valid?
      @song.save
      redirect_to song_path(@song)
    else
      flash[:message] = @song.errors.full_messages[0]
      redirect_to "/songs/new"
    end

    #song_path = "/songs/:id"
  end

  def edit
  end

  def update

  end

  def show
  end


  private
  def song_params
    params.require(:song).permit(:title,:rapper_id)
  end
end
