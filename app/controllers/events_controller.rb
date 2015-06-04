class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @events = Event.all.page(params[:page]).per(20)
    render json: @events, root: false
  end

  def show
    render json: @event, root: false
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.json { render :show, status: :created, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  def search
    events = EventFulApi.search(params[:query], params[:page])
    events_list = events || []
    render json: events_list
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.json { render :show, status: :ok, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:id, :api_id, :url, :title, :description, :start_time, :stop_time, :venue_id, :venue_url, :venue_name, :venue_display, :venue_address, :city_name, :region_name, :region_abbr, :country_name, :all_day, :latitude, :longitude, :geocode_type, :trackback_count, :calendar_count, :comment_count, :link_count, :created, :owner, :modified)
    end
end
