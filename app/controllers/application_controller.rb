class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # def index
  #     render text: "", layout: true
  #   end
    
  before_filter :configure_permitted_parameters, if: :devise_controller?

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) do |u| 
        u.permit(:email, :password, :password_confirmation) 
      end
      devise_parameter_sanitizer.for(:account_update) do |u|
        u.permit(:email, :password, :password_confirmation, :current_password, :picture)
      end
    end

    # # this returns to the root if not a ajex request 
    #   before_action :redirect_if_not_xhr
    # private
    #   def redirect_if_not_xhr 
    #     redirect_to root_path if (!request.xhr? && request.env['PATH_INFO'] != root_path)
    #   end
end
