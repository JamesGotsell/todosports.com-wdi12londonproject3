class Favourite < ActiveRecord::Base
  belongs_to :user
  belongs_to :event

  default_scope { order(created_at: :desc) }


  def after_create

  end 

end
