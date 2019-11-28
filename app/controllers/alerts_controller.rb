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

  def edit
    set_alert
    authorize @alert
  end

  def update
    set_alert
    @alert.update(alert_params)
    redirect_to "alert edit page"
    authorize @alert
  end

  private

  def set_alert
    @alert = Alert.find(params[:id])
  end

  def alert_params
    params.require(:alert).permit(:kind, :trip_id, :lat, :long, :user_id)
  end
end
