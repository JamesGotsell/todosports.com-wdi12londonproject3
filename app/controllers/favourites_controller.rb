class FavouritesController < ApplicationController

  def index
    @favourites = current_user.favourites
    render json: @favourites, root: false
  end

  def create 
    event_data = EventFulApi.find params[:event_id]
    event = Event.find_or_create_by(event_data)

    @favourite = current_user.favourites.new(event: event)
    respond_to do |format|
      if @favourite.save
        format.json { render json: @favourite.event, status: :created, location: @favourite.event }
      else
        format.json { render json: @favourite.errors, status: :unprocessable_entity }
      end
    end
  end 

end 