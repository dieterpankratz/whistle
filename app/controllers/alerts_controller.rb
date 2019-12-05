class AlertsController < ApplicationController
  def show
    set_alert
    @markers = @alert.responses.map do |response|
      {
        lat: response.lat,
        long: response.long
      }
    end
    authorize @alert
  end

  def create
    @alert = Alert.new
    @trip = Trip.find(params[:trip_id])
    @alert.user = current_user
    @alert.trip = @trip
    authorize @alert

    if params[:kind] == "share"
      @alert.kind = "share"
    elsif params[:kind] == "whistle"
      @alert.kind = "whistle"
      # set lat and lng
      Response.create!(user: User.find(6), lat: 52.535172, long: 13.405950, alert: @alert)
      Response.create!(user: User.find(7), lat: 52.529119, long: 13.395488, alert: @alert)
      # Response.create(lat: 34.32, long: 15.23, alert: @alert)
    elsif params[:kind] == "safe"
      @alert.kind = "safe"
    end

    if @alert.save
      redirect_to alert_path(@alert)

      SendTwilioMessage.new(@alert).send_alert
    end

    if @alert.kind == "safe"
      redirect_to new_trip_path
    else
      redirect_to alert_path(@alert)
    end
  end

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
    authorize @alert
  end

  def alert_params
    params.require(:alert).permit(:kind, :trip_id, :lat, :long, :user_id)
  end
end
