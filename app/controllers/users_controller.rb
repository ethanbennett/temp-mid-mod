class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    binding.pry
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Welcome to the best app you'll ever belong to"
    else
      flash[:error] = 'An error occured!'
      render 'new'
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end