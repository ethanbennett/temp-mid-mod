class Api::V1::LinksController < ApplicationController

  def update
    @link = Link.find(params[:id])
    if @link.update_attributes(link_params)
      render json: @link
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  def create
    @link = current_user.links.create(url: params["link"]["url"], title: params["link"]["title"])
  end
end
