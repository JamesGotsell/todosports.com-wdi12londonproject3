class Event < ActiveRecord::Base
  has_many :users, through: :favourites
  has_many :favourites 
end
