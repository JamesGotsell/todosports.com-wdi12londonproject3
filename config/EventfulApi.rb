EventfulApi.configure do |config|
  config.application_key = ENV[APP_KEY]
  config.consumer_key = ENV[CONSUMER_KEY]
  config.consumer_secret = ENV[CONSUMER_SECRET]
end