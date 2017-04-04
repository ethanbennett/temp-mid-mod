class UsersController < ApplicationController
  include ErrorHelper

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if !valid_email
      invalid_email_message
    elsif password_mismatch
      password_mismatch_message
    elsif !valid_password
      invalid_password_message
    else
      successfully_created_account
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end