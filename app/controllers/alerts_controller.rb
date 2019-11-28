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
    elsif params[:kind] == "safe"
      @alert.kind = "safe"

    end

    # if params[:kind] == whistle
    #   twiilio is this
    # elsif params[:kind] == share
    #   twilio is this
    #else params[:kind] == safe
        #twilio is this
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
      if @alert.kind == "safe"
        redirect_to trip_path(@trip)
      else
        redirect_to alert_path(@alert)
      end
    end

    # if @trip.save!
    #   redirect_to trip_path(@trip)
    # else
    #   render :new
    # end
    # authorize @trip
  end

  private

  def set_alert
    @alert = Alert.find(params[:id])
    authorize @alert
  end
end

# alert => whistle, share
