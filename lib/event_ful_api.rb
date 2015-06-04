require "httparty"
require "json"

class EventFulApi

  ITEMS_PER_PAGE = 20

  URL = "http://api.eventful.com/json/events/search" 

  DEFAULT_LOCATION = "London"

  def initialize(query, page_number)
    @query = query  
    @page_number = page_number
  end


  def search
    params = {
      q: @query,
      location: DEFAULT_LOCATION,
      app_key: ENV["EVENTFUL_API_KEY"],
      page_number: @page_number
    }
    url = [URL, "?", params.to_param].join
    results = JSON.parse(HTTParty.get(url))
    results["events"]["event"]
  end
end