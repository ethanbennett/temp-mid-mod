class Api::V1::LinksController < ApplicationController

  def index
    @links = Link.top_ten
    render json: @links
  end

  def update
    @link = Link.find(params[:id])
    if @link.update_attributes(read: params["read"], count: params["count"])
      render json: @link
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  def create
    @link = current_user.links.new(url: params["link"]["url"], title: params["link"]["title"])
    if @link.save
      render partial: "link", locals: {link: @link}
    else
      render json: @link.errors.full_messages, status: 500
    end
  end
end
