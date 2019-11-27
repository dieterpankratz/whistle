class UsersController < ApplicationController
  before_action :set_user, only: [:connect, :unconnect]

  def index
    if params[:query].present?
      @users = User.where("username ILIKE ?", "%#{params[:query]}%")
    else
      @users = User.all_except(current_user)
    end
    @users = policy_scope(User)
  end

  def connect
    current_user.connect(@user.id)
    # if current_user.connect(@user.id)
    #   respond_to do |format|
    #     format.html { redirect_to root_path }
    #     format.js
    #   end
    # end
    redirect_to users_path
    authorize @user
  end

  def unconnect
    current_user.unconnect(@user.id)

    # if current_user.unconnect(@user.id)
    #   respond_to do |format|
    #     format.html { redirect_to dashboard_path }
    #     format.js { render action: :unconnect }
    #   end
    # end

    redirect_to dashboard_path
    authorize @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
