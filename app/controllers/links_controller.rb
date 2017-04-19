class LinksController < ApplicationController
  include ErrorHelper
  before_action :set_user

  def index
    if !current_user
      redirect_to login_path
    else
      @links = @user.links
      @link = @user.links.new
      @new_link_id = Link.all.length + 1
    end
  end

  def edit
    @link = @user.links.find(params["id"])
  end

  def update
    @link = @user.links.find(params["id"])
    if blank_field
      blank_field_message
    elsif !valid_url
      invalid_url_message
    else
      successfully_updated_link
    end
  end

  def create
    if blank_field
      blank_field_message
    elsif !valid_url
      invalid_url_message
    else
      successfully_created_link
    end
  end

private

  def set_user
    @user = current_user
  end

  def link_params
    params.require(:link).permit(:url, :title)
  end
end
