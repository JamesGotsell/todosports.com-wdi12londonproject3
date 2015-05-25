class User < ActiveRecord::Base
  has_many :events
  validates_associated :events
  validates :name, length: { minimum: 2 }
  validates :age, numericality: true
  
end
