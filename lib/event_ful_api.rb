require "httparty"
require "json"

class EventFulApi
  ITEMS_PER_PAGE    = 20
  URL               = "http://api.eventful.com/json/events" 
  DEFAULT_LOCATION  = "London"

  class << self
    def build_url(path, params)
      [URL, path ,  "?", params.to_param].join
    end

    def search(query, page_number)
      params = {
        q: query,
        location: DEFAULT_LOCATION,
        app_key: ENV["EVENTFUL_API_KEY"],
        page_number: page_number
      }

      results = JSON.parse HTTParty.get(build_url("/search", params))
      results["events"] && results["events"]["event"]
    end

    def find(event_id)
      params = {
        event_id: event_id,
        app_key: ENV["EVENTFUL_API_KEY"],
      }
      events = JSON.parse HTTParty.get(build_url("/get", params))
      symbolized_hash = HashWithIndifferentAccess.new(events)
      symbolized_hash[:api_id] = symbolized_hash[:id]
      symbolized_hash.slice(:api_id, :url, :title, :description, :start_time, :stop_time, :venue_id, :venue_url, :venue_name, :venue_display, :venue_address, :city_name, :region_name, :region_abbr, :country_name, :all_day, :latitude, :longitude, :geocode_type, :trackback_count, :calendar_count, :comment_count, :link_count, :created, :owner, :modified)
    end
  end
end