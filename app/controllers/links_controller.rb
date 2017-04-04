class LinksController < ApplicationController
  include ErrorHelper
  before_action :set_user

  def index
    if !current_user
      redirect_to login_path
    end
    @link = @user.links.new

  end

  def create
    @link = @user.links.new(link_params)
    if @link.save

  end

private

  def set_user
    @user = current_user
  end

  def link_params
    params.require(:link).permit(:url, :title)
  end
end
