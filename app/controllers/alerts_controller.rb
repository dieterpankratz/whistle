class AlertsController < ApplicationController
  def show
    set_alert
    authorize @alert
  end

  def new
    @alert = Alert.new
    authorize @alert
  end

  # def create
  #   set_alert
  #   @alert.user = current_user
  #   if @trip.save!
  #     redirect_to trip_path(@trip)
  #   else
  #     render :new
  #   end
  #   authorize @trip
  # end

  private

  def set_alert
    @alert = Alert.find(params[:id])
  end
end
