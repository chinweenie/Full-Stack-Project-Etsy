class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception       
    
    helper_method :is_logged_in?, :current_user

    def login(user)
        session[:session_token] = user.session_token
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logout
        @current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil
    end

    def is_logged_in?
        !!current_user
    end

    def require_login
        redirect_to new_session_url unless is_logged_in?
    end
end
