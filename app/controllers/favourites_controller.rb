class FavouritesController < ApplicationController

  def index
    @favourites = current_user.favourites
    render json: @favourites, root: false
  end

  def create 
    @favourite = current_user.favourites.new(favourite_params)
    respond_to do |format|
      if @favourite.save
        format.json { render json: @favourite.event, status: :created, location: @favourite.event }
      else
        format.json { render json: @favourite.errors, status: :unprocessable_entity }
      end
    end
  end 

  private
    def favourite_params
      params.require(:favourite).permit(:user_id, :event_id)
    end
end 