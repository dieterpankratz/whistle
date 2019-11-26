class TripsController < ApplicationController
  def show
  end

  def edit
    set_trip
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:name, :start_point, :end_point)
  end
end
