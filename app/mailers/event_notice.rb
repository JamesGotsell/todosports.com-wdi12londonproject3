class EventNotice < Devise::Mailer
  default template_path: 'devise/mailer'
  def event_reminder
      @user = user 
      mail(to: @user.email, subject: "Your Events")
  end

end
