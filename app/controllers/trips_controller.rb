class TripsController < ApplicationController
  def show
    set_trip
    authorize @trip
  end

  def new
    @trip = Trip.new
    authorize @trip
  end

  def create
    @trip = Trip.new(trip_params)
    @trip.user = current_user
    if @trip.save!
      redirect_to trip_path(@trip)
    else
      render :new
    end
    authorize @trip
  end

  def edit
    set_trip
    authorize @trip
  end

  def udpate
    set_trip
    @trip.update(trip_params)
    redirect_to trip_path(@trip)
    authorize @trip
  end

  def index
    @trips = Trip.where.not(latitude: nil, longitude: nil)

    @markers = @trips.map do |trip|
      {
        lat: trip.latitude,
        lng: trip.longitude
      }
    end
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:start_point, :end_point)
  end
end
