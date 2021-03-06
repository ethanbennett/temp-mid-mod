class Api::V1::LinksController < ApplicationController

  def index
    @links = Link.top_ten
    render json: @links
  end

  def update
    @link = Link.find(params[:id])
    if @link.update_attributes(read: params["read"]) && @link.read
      @link.update(count: @link.count += 1)
      render json: @link, status: 200
    elsif @link.update_attributes(read: params["read"])
      render json: @link, status: 200
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  def create
    @link = current_user.links.new(url: params["link"]["url"], title: params["link"]["title"], count: 0)
    if @link.save
      render partial: "links/link", locals: {link: @link}, layout: false
    else
      render json: @link.errors.full_messages, status: 500
    end
  end
end
