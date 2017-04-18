class Api::V1::LinksController < ApplicationController

  def index
    @links = Link.top_ten
    render json: @links
  end

  def update
    @link = Link.find(params[:id])
      binding.pry
    if @link.update_attributes(read: params["read"], count: params["count"])
      render json: @link
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  def create
    @link = current_user.links.create(url: params["link"]["url"], title: params["link"]["title"])
  end
end
