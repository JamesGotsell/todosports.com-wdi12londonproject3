Rails.application.routes.draw do
  root "statics#index"
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users , controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  resources :users, only: [:index, :show]
  resources :events do
    collection do
      get "search"
    end
  end
  resources :favourites, only: [:create, :index]
end
