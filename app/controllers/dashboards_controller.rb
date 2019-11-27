class DashboardsController < ApplicationController
  def show
    authorize current_user
    @connections = Connection.where(asker_id: current_user)
  end
end
