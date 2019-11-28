class ResponsesController < ApplicationController
  def show
    set_response
    authorize @response
  end

  def new
    @response = Response.new
    authorize @response
  end

  private

  def set_response
    @response = Response.find(params[:id])
  end
end
