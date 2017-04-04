class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:login_succeeded] = "You're in."
      redirect_to root_path
    else
      flash[:login_failed] = "We couldn't find you in the ol' DB. Please re-enter your info or create a new account"
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path
  end
end