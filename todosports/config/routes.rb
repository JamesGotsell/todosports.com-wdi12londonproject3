Rails.application.routes.draw do
  resources :events
  resources :users
  root to: "home#index"
  # config/initializers/high_voltage.rb
  HighVoltage.configure do |config|
    config.home_page = 'home'
  end
end
