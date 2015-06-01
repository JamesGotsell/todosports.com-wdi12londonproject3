require "httparty"
require "json"

class EventFulApi

  ITEMS_PER_PAGE = 20

  URL = "http://api.eventful.com/json/events/search" 

  def initialize(query, location, page_number)
    @query = query
    @location = location
    @page_number = page_number
  end


  def search
    params = {
      q: @query,
      location: @location,
      app_key: ENV["EVENTFUL_API_KEY"],
      page_number: @page_number
    }
    url = [URL, "?", params.to_param].join
    results = JSON.parse(HTTParty.get(url))
    results["events"]["event"]
  end
end