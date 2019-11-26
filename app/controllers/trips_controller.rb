class TripsController < ApplicationController
  def show
  end

  def new
    @trip = Trip.new
  end

  # def create
  #   @trip = Trip.new(trip_params)

  #   @trip.user = current_user
  # end

  # def update
  #   set_trip
  #   @trip.update(trip_params)
  #   redirect_to trip_path(@trip)
  # end

  def edit
    set_trip
    authorize @trip
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:start_point, :end_point)
  end
end
