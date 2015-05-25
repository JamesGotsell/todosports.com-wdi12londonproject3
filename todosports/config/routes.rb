Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  resources :events
  # resources :users
  # root to: "home#index" 
  # config/initializers/high_voltage.rb
  HighVoltage.configure do |config|
    config.home_page = 'home'
  end
end
