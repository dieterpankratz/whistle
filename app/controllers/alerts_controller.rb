class AlertsController < ApplicationController
  def show
    set_alert
    authorize @alert
  end

  private

  def set_alert
    @alert = Alert.find(params[:id])
  end
end
