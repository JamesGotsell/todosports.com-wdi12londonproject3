EventfulApi.configure do |config|
  config.application_key = ENV['EVENTFUL_API_KEY']
  config.consumer_key    = ENV['EVENTFUL_API_CONSUMER_KEY']
  config.consumer_secret = ENV['EVENTFUL_API_CONSUMER_SECRET']
end