class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :events
  # validates_associated :events
  # validates :name, length: { minimum: 2 }
  # validates :age, numericality: true

  mount_uploader :picture, PictureUploader
  
end
