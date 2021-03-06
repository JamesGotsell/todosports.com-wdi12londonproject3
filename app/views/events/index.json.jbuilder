json.array!(@events) do |event|
  json.extract! event, :id, :id, :url, :title, :description, :start_time, :stop_time, :venue_id, :venue_url, :venue_name, :venue_display, :venue_address, :city_name, :region_name, :region_abbr, :country_name, :all_day, :latitude, :longitude, :geocode_type, :trackback_count, :calendar_count, :comment_count, :link_count, :created, :owner, :modified
  json.url event_url(event, format: :json)
end
