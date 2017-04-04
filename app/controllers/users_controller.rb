class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if !valid_email
      flash[:invalid_email] = "Please enter a valid email address"
      render 'new'
    elsif password_mismatch
      flash[:password_mismatch] = "Please make sure your password confirmation matches your password"
      render 'new'
    elsif !valid_password
      flash[:invalid_password] = "Please enter a valid password"
      render 'new'
    else @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Welcome to the best app you'll ever belong to"
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def valid_email
    user_params["email"].include? "@"
  end

  def password_mismatch
    user_params["password"] != user_params["password_confirmation"]
  end

  def valid_password
    user_params["password"] != ""
  end
end