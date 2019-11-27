class DashboardsController < ApplicationController
  def show
    @connections = Connection.where(asker_id: current_user)
  end
end
