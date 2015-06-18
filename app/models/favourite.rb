class Favourite < ActiveRecord::Base
  belongs_to :user
  belongs_to :event

  default_scope { order(created_at: :desc) }

  after_create :send_email

  def send_email 
      Mandrill.post_email(self.user).deliver
  end

end
