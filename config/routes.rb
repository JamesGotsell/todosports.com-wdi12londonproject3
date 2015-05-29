Rails.application.routes.draw do
  root "statics#index"
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users , controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  resources :events
end
