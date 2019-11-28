class AlertsController < ApplicationController
  def show
    set_alert
    authorize @alert
  end

  # def new
  #   @alert = Alert.new
  #   authorize @alert
  # end

  def create
    @alert = Alert.new
    @trip = Trip.find(params[:trip_id])
    @alert.user = current_user
    @alert.trip = @trip

    if params[:kind] == "share"
      @alert.kind = "share"
    elsif params[:kind] == "whistle"
      @alert.kind = "whistle"
      # set lat and lng
    end

    # if params[:kind] == whistle
    #   twiilio is this
    # else
    #   twilio is thate
    # end

    authorize @alert
    # SEND TO ALL USERS
    # 1. create alert
    if @alert.save
    # 2. get current user.. and find their connections
      current_user.connections.each do |connection|
        # 3. for EACH connection
        # 4. -> send alert via text(twilio)
        # send text through twillio
      end
      redirect_to alert_path(@alert)
    end



    # if @trip.save!
    #   redirect_to trip_path(@trip)
    # else
    #   render :new
    # end
    # authorize @trip
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

# alert => whistle, share
