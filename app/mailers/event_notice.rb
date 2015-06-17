class EventNotice < ApplicationMailer

  

  def event_reminder
      @user = user 
      mail(to: @user.email, subject: "Your Events")
  end
end
