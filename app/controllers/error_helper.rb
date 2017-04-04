module ErrorHelper
  def valid_url
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

  def email_taken
    User.find_by_email(user_params["email"]) != nil
  end

  def invalid_email_message
    flash[:invalid_email] = "Please enter a valid email address"
    render 'new'
  end

  def password_mismatch_message
    flash[:password_mismatch] = "Please make sure your password confirmation matches your password"
    render 'new'
  end

  def invalid_password_message
    flash[:invalid_password] = "Please enter a valid password"
    render 'new'    
  end
  
  def email_taken_message
    session[:double_email] = "You already have an account. Or your identity has been burgled"
    render 'new'
  end

  def successfully_created_account
    @user.save
    session[:user_id] = @user.id
    redirect_to root_path, notice: "Welcome to the best app you'll ever belong to"
  end
end