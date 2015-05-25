require 'test_helper'

class EventsControllerTest < ActionController::TestCase
  setup do
    @event = events(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:events)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count') do
      post :create, event: { all_day: @event.all_day, calendar_count: @event.calendar_count, city_name: @event.city_name, comment_count: @event.comment_count, country_name: @event.country_name, created: @event.created, description: @event.description, geocode_type: @event.geocode_type, id: @event.id, latitude: @event.latitude, link_count: @event.link_count, longitude: @event.longitude, modified: @event.modified, owner: @event.owner, region_abbr: @event.region_abbr, region_name: @event.region_name, start_time: @event.start_time, stop_time: @event.stop_time, title: @event.title, trackback_count: @event.trackback_count, url: @event.url, venue_address: @event.venue_address, venue_display: @event.venue_display, venue_id: @event.venue_id, venue_name: @event.venue_name, venue_url: @event.venue_url }
    end

    assert_redirected_to event_path(assigns(:event))
  end

  test "should show event" do
    get :show, id: @event
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @event
    assert_response :success
  end

  test "should update event" do
    patch :update, id: @event, event: { all_day: @event.all_day, calendar_count: @event.calendar_count, city_name: @event.city_name, comment_count: @event.comment_count, country_name: @event.country_name, created: @event.created, description: @event.description, geocode_type: @event.geocode_type, id: @event.id, latitude: @event.latitude, link_count: @event.link_count, longitude: @event.longitude, modified: @event.modified, owner: @event.owner, region_abbr: @event.region_abbr, region_name: @event.region_name, start_time: @event.start_time, stop_time: @event.stop_time, title: @event.title, trackback_count: @event.trackback_count, url: @event.url, venue_address: @event.venue_address, venue_display: @event.venue_display, venue_id: @event.venue_id, venue_name: @event.venue_name, venue_url: @event.venue_url }
    assert_redirected_to event_path(assigns(:event))
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete :destroy, id: @event
    end

    assert_redirected_to events_path
  end
end
